/*
 * HORT INTEL·LIGENT + ESTACIÓ METEOROLÒGICA
 * Backend Node.js per a Raspberry Pi — v2
 *
 * NOVETATS v2:
 *   - POST /api/reg/manual  → envia ordre de reg a l'Arduino
 *   - GET  /api/reg/estat   → consulta estat actual de l'Arduino
 *   - GET  /api/dades/historic → ara inclou humitat_sol
 *   - camp `manual` a reg_events
 */

const express  = require('express');
const Database = require('better-sqlite3');
const cors     = require('cors');
const path     = require('path');
const http     = require('http');

const app  = express();
const PORT = 3000;

// ─── CONFIGURACIÓ ARDUINO ─────────────────────────────────────
// IP de l'Arduino a la xarxa local (veure Serial Monitor en arrancar)
let ARDUINO_IP   = process.env.ARDUINO_IP || '10.153.35.225';
const ARDUINO_PORT = 8080;

// ─── MIDDLEWARE ───────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ─── BASE DE DADES SQLite ─────────────────────────────────────
const db = new Database(path.join(__dirname, 'hort.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS lectures (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    ts            INTEGER NOT NULL DEFAULT (unixepoch()),
    humitat_sol   REAL,
    temperatura   REAL,
    humitat_amb   REAL,
    lux           INTEGER,
    vent_kmh      REAL,
    pluja_mm      REAL,
    reg_actiu     INTEGER,
    reg_manual    INTEGER DEFAULT 0,
    litres_totals REAL
  );

  CREATE TABLE IF NOT EXISTS reg_events (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    ts          INTEGER NOT NULL DEFAULT (unixepoch()),
    durada_seg  INTEGER,
    litres      REAL,
    manual      INTEGER DEFAULT 0
  );

  CREATE INDEX IF NOT EXISTS idx_lectures_ts ON lectures(ts DESC);
  CREATE INDEX IF NOT EXISTS idx_reg_ts      ON reg_events(ts DESC);
`);

// Migració: afegir columnes noves si la BD ja existia (v1 → v2)
try { db.exec(`ALTER TABLE reg_events ADD COLUMN manual INTEGER DEFAULT 0`); } catch(_){}
try { db.exec(`ALTER TABLE lectures   ADD COLUMN reg_manual INTEGER DEFAULT 0`); } catch(_){}

const insertLectura = db.prepare(`
  INSERT INTO lectures (humitat_sol, temperatura, humitat_amb, lux, vent_kmh, pluja_mm, reg_actiu, reg_manual, litres_totals)
  VALUES (@humitat_sol, @temperatura, @humitat_amb, @lux, @vent_kmh, @pluja_mm, @reg_actiu, @reg_manual, @litres_totals)
`);

const insertReg = db.prepare(`
  INSERT INTO reg_events (durada_seg, litres, manual)
  VALUES (@durada_seg, @litres, @manual)
`);

// ─── UTILS: COMUNICACIÓ AMB ARDUINO ──────────────────────────
function peticiArduino(metode, endpoint, cos = null) {
  return new Promise((resolve, reject) => {
    const cosStr = cos ? JSON.stringify(cos) : '';
    const opts = {
      hostname: ARDUINO_IP, port: ARDUINO_PORT,
      path: endpoint, method: metode,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(cosStr)
      },
      timeout: 5000
    };
    const req = http.request(opts, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch { resolve({ raw: data }); }
      });
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.on('error', reject);
    if (cosStr) req.write(cosStr);
    req.end();
  });
}

// ─── ENDPOINTS: Arduino → Raspberry Pi ───────────────────────

app.post('/api/dades', (req, res) => {
  const d = req.body;
  console.log(`[${new Date().toLocaleTimeString()}] Dades:`, d);
  try {
    insertLectura.run({
      humitat_sol:   validarNum(d.humitat_sol),
      temperatura:   validarNum(d.temperatura),
      humitat_amb:   validarNum(d.humitat_amb),
      lux:           validarNum(d.lux),
      vent_kmh:      validarNum(d.vent_kmh),
      pluja_mm:      validarNum(d.pluja_mm),
      reg_actiu:     d.reg_actiu  ? 1 : 0,
      reg_manual:    d.reg_manual ? 1 : 0,
      litres_totals: validarNum(d.litres_totals)
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('[ERROR] insertLectura:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/reg', (req, res) => {
  const d = req.body;
  console.log(`[${new Date().toLocaleTimeString()}] Reg event:`, d);
  try {
    insertReg.run({
      durada_seg: validarNum(d.durada_seg),
      litres:     validarNum(d.litres),
      manual:     d.manual ? 1 : 0
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── ENDPOINTS: Dashboard → Backend ──────────────────────────

app.get('/api/dades/ultim', (req, res) => {
  const row = db.prepare(`
    SELECT *, datetime(ts, 'unixepoch', 'localtime') AS data_hora
    FROM lectures ORDER BY ts DESC LIMIT 1
  `).get();
  res.json(row || {});
});

// Historial sensors — ara inclou humitat_sol explícitament
app.get('/api/dades/historic', (req, res) => {
  const hores    = Math.min(parseInt(req.query.hores)    || 24, 720);
  const interval = Math.max(parseInt(req.query.interval) || 15, 1);
  const segonsEnrere = hores * 3600;

  const rows = db.prepare(`
    SELECT
      (ts / (${interval * 60})) * (${interval * 60}) AS periode,
      datetime((ts / (${interval * 60})) * (${interval * 60}), 'unixepoch', 'localtime') AS data_hora,
      ROUND(AVG(humitat_sol), 1)   AS humitat_sol,
      ROUND(AVG(temperatura), 1)   AS temperatura,
      ROUND(AVG(humitat_amb), 1)   AS humitat_amb,
      ROUND(AVG(lux))              AS lux,
      ROUND(AVG(vent_kmh), 1)      AS vent_kmh,
      ROUND(SUM(pluja_mm), 2)      AS pluja_mm,
      MAX(reg_actiu)               AS reg_actiu,
      MAX(reg_manual)              AS reg_manual,
      MAX(litres_totals)           AS litres_totals
    FROM lectures
    WHERE ts >= unixepoch() - ${segonsEnrere}
    GROUP BY periode
    ORDER BY periode ASC
  `).all();
  res.json(rows);
});

// Historial reg — ara inclou columna manual
app.get('/api/reg/historic', (req, res) => {
  const limit = Math.min(parseInt(req.query.limit) || 50, 500);
  const rows = db.prepare(`
    SELECT
      id,
      datetime(ts, 'unixepoch', 'localtime') AS data_hora,
      durada_seg,
      ROUND(durada_seg / 60.0, 1) AS durada_min,
      ROUND(litres, 2) AS litres,
      manual
    FROM reg_events
    ORDER BY ts DESC
    LIMIT ${limit}
  `).all();
  res.json(rows);
});

// Historial lectures amb humitat del sòl
app.get('/api/dades/lectures', (req, res) => {
  const limit = Math.min(parseInt(req.query.limit) || 100, 1000);
  const rows = db.prepare(`
    SELECT
      id,
      datetime(ts, 'unixepoch', 'localtime') AS data_hora,
      ROUND(humitat_sol, 1)  AS humitat_sol,
      ROUND(temperatura, 1)  AS temperatura,
      ROUND(humitat_amb, 1)  AS humitat_amb,
      lux,
      ROUND(vent_kmh, 1)     AS vent_kmh,
      ROUND(pluja_mm, 2)     AS pluja_mm,
      reg_actiu,
      reg_manual
    FROM lectures
    ORDER BY ts DESC
    LIMIT ${limit}
  `).all();
  res.json(rows);
});

app.get('/api/stats', (req, res) => {
  const avui = db.prepare(`
    SELECT
      COUNT(*) AS lectures_avui,
      ROUND(AVG(temperatura), 1) AS temp_mitja,
      ROUND(MAX(temperatura), 1) AS temp_max,
      ROUND(MIN(temperatura), 1) AS temp_min,
      ROUND(AVG(humitat_sol), 1) AS humitat_sol_mitja,
      ROUND(SUM(pluja_mm), 2)    AS pluja_total_mm,
      ROUND(MAX(lux))            AS lux_max,
      ROUND(AVG(vent_kmh), 1)    AS vent_mitja
    FROM lectures
    WHERE ts >= unixepoch() - 86400
  `).get();

  const regAvui = db.prepare(`
    SELECT COUNT(*) AS cicles_reg, ROUND(SUM(litres), 2) AS litres_avui
    FROM reg_events WHERE ts >= unixepoch() - 86400
  `).get();

  const regTotal = db.prepare(
    `SELECT ROUND(SUM(litres), 2) AS litres_totals FROM reg_events`
  ).get();
// trec el punt pel petardo del journalctl
//  res.json({ sensors: avui, reg: { ...regAvui, litres_totals: regTotal?.litres_totals || 0 }});
  res.json({ sensors: avui, reg: { ...(regAvui || {}), litres_totals: (regTotal && regTotal.litres_totals) || 0 }});
});

// ─── ENDPOINTS: Reg manual ────────────────────────────────────

// Configura IP de l'Arduino (útil si canvia per DHCP)
app.post('/api/config/arduino-ip', (req, res) => {
  const { ip } = req.body;
  if (!ip || !/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
    return res.status(400).json({ error: 'IP invàlida' });
  }
  ARDUINO_IP = ip;
  console.log(`[CONFIG] Arduino IP actualitzada: ${ARDUINO_IP}`);
  res.json({ ok: true, ip: ARDUINO_IP });
});

// POST /api/reg/manual  body: {"accio":"reg_on"} o {"accio":"reg_off"}
app.post('/api/reg/manual', async (req, res) => {
  const { accio } = req.body;
  if (!['reg_on', 'reg_off'].includes(accio)) {
    return res.status(400).json({ error: 'accio invàlida' });
  }
  try {
    const resposta = await peticiArduino('POST', '/control', { accio });
    console.log(`[MANUAL] ${accio} → Arduino:`, resposta);
    res.json({ ok: true, arduino: resposta });
  } catch (err) {
    console.error('[MANUAL] Error comunicant amb Arduino:', err.message);
    res.status(503).json({ ok: false, error: 'Arduino no accessible: ' + err.message });
  }
});

// GET /api/reg/estat — consulta estat actual de l'Arduino
app.get('/api/reg/estat', async (req, res) => {
  try {
    const estat = await peticiArduino('GET', '/estat');
    res.json({ ok: true, ...estat });
  } catch (err) {
    res.status(503).json({ ok: false, error: 'Arduino no accessible' });
  }
});

// ─── UTILS ────────────────────────────────────────────────────
function validarNum(v) {
  const n = parseFloat(v);
  return isNaN(n) ? null : n;
}

// ─── INICI ────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🌱 Servidor Hort v2`);
  console.log(`   Port: ${PORT}`);
  console.log(`   Arduino IP: ${ARDUINO_IP}:${ARDUINO_PORT}`);
  console.log(`   (canvia amb: ARDUINO_IP=x.x.x.x node server.js)\n`);
});

process.on('SIGINT', () => { db.close(); process.exit(0); });
