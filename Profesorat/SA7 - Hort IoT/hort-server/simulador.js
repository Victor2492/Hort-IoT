#!/usr/bin/env node
/*
 * SIMULADOR DE DADES - Hort Intel·ligent
 * ───────────────────────────────────────
 * Simula un Arduino enviant dades al servidor Node.js local.
 * Genera valors realistes amb variacions temporals naturals.
 *
 * ÚS:
 *   node simulador.js              → envia cada 60s (igual que l'Arduino)
 *   node simulador.js --rapid      → envia cada 5s (per veure canvis ràpids)
 *   node simulador.js --reg        → força un cicle de reg ara
 *   node simulador.js --help
 */

const http = require('http');

// ─── CONFIGURACIÓ ─────────────────────────────────────────────
const HOST     = 'localhost';
const PORT     = 3000;
const INTERVAL = process.argv.includes('--rapid') ? 5000 : 60000;
const FORCAR_REG = process.argv.includes('--reg');

if (process.argv.includes('--help')) {
  console.log(`
  Simulador de dades - Hort Intel·ligent
  ───────────────────────────────────────
  node simulador.js           Envia cada 60s
  node simulador.js --rapid   Envia cada 5s (ideal per provar el dashboard)
  node simulador.js --reg     Força un event de reg al inici
  `);
  process.exit(0);
}

// ─── ESTAT INTERN ─────────────────────────────────────────────
let estat = {
  humitatSol:    65,   // %
  temperatura:   20,
  humitatAmb:    55,
  lux:           0,
  ventKmh:       8,
  plujaAcum:     0,
  litresTotals:  0,
  regActiu:      false,
  regManual:     false,
  cicle:         0,
};

// ─── UTILS ────────────────────────────────────────────────────
const rnd  = (min, max) => Math.random() * (max - min) + min;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const arrodonir = (v, dec) => Math.round(v * 10**dec) / 10**dec;

function horaDecimal() {
  const ara = new Date();
  return ara.getHours() + ara.getMinutes() / 60;
}

// Simula irradiació solar segons l'hora del dia (màxim al migdia)
function calcularLux(hora) {
  // Sortida sol ~7h, posta ~20h (València, estiu)
  if (hora < 7 || hora > 20) return Math.round(rnd(0, 50));
  const angle = ((hora - 7) / 13) * Math.PI;
  const base  = Math.sin(angle) * 75000;
  const nuvolositat = Math.random() < 0.2 ? rnd(0.3, 0.7) : rnd(0.85, 1.0);
  return Math.round(clamp(base * nuvolositat + rnd(-500, 500), 0, 100000));
}

// ─── GENERADOR DE DADES ───────────────────────────────────────
function generarLectura() {
  const hora = horaDecimal();
  estat.cicle++;

  // Temperatura: puja al migdia, baixa a la nit
  const tempBase = 18 + Math.sin(((hora - 6) / 18) * Math.PI) * 12;
  estat.temperatura = clamp(
    estat.temperatura + rnd(-0.3, 0.3) + (tempBase - estat.temperatura) * 0.05,
    10, 42
  );

  // Humitat ambient: inversament proporcional a la temperatura
  const humBase = 75 - (estat.temperatura - 18) * 1.5;
  estat.humitatAmb = clamp(
    estat.humitatAmb + rnd(-1, 1) + (humBase - estat.humitatAmb) * 0.08,
    20, 95
  );

  // Llum solar
  estat.lux = calcularLux(hora);

  // Vent: variació lenta amb ràfegues ocasionals
  const rafega = Math.random() < 0.08 ? rnd(5, 15) : 0;
  estat.ventKmh = clamp(estat.ventKmh + rnd(-1.5, 1.5) + rafega, 0, 60);

  // Pluja: esdeveniments ocasionals (10% de possibilitat)
  let plujaInterval = 0;
  if (Math.random() < 0.10) {
    plujaInterval = arrodonir(rnd(0.1, 2.5), 2);
    estat.plujaAcum += plujaInterval;
    // La pluja augmenta la humitat del sòl
    estat.humitatSol = clamp(estat.humitatSol + plujaInterval * 3, 0, 100);
  }

  // Gestió reg
  if (estat.regActiu) {
    // Si estem regant, augmenta humitat del sòl
    estat.humitatSol = clamp(estat.humitatSol + rnd(1, 3), 0, 100);
    if (estat.humitatSol >= 80) {
      // Para el reg
      const duracio = Math.round(rnd(120, 300));
      const litres  = arrodonir((duracio / 60) * 10, 2);
      estat.litresTotals = arrodonir(estat.litresTotals + litres, 2);
      estat.regActiu = false;
      estat.regManual = false;
      enviarReg(duracio, litres);
    }
  } else {
    // Humitat baixa a poc a poc (evapotranspiració)
    const evaporacio = hora > 8 && hora < 20 ? rnd(0.2, 0.8) : rnd(0.05, 0.2);
    estat.humitatSol = clamp(estat.humitatSol - evaporacio, 0, 100);

    // Activa reg automàtic si la humitat baixa de 35%
    if (estat.humitatSol < 35) {
      console.log('  → [REG] Humitat baixa, activant reg automàtic...');
      estat.regActiu = true;
    }
  }

  return {
    humitat_sol:   arrodonir(estat.humitatSol, 1),
    temperatura:   arrodonir(estat.temperatura, 1),
    humitat_amb:   arrodonir(estat.humitatAmb, 1),
    lux:           estat.lux,
    vent_kmh:      arrodonir(estat.ventKmh, 1),
    pluja_mm:      plujaInterval,
    reg_actiu:     estat.regActiu,
    reg_manual:    estat.regManual,
    litres_totals: estat.litresTotals,
  };
}

// ─── ENVIAR HTTP ──────────────────────────────────────────────
function post(endpoint, dades) {
  return new Promise((resolve, reject) => {
    const cos = JSON.stringify(dades);
    const opts = {
      hostname: HOST, port: PORT,
      path: endpoint, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(cos) },
      timeout: 5000,
    };
    const req = http.request(opts, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.on('error', reject);
    req.write(cos);
    req.end();
  });
}

async function enviarLectura() {
  const dades = generarLectura();
  const hora  = new Date().toLocaleTimeString('ca');

  // Log bonic per terminal
  const icReg = dades.reg_actiu ? '💧 REG' : '     ';
  const icSol = dades.lux > 20000 ? '☀️' : dades.lux > 3000 ? '⛅' : '🌙';
  console.log(
    `[${hora}] ${icReg} ${icSol}  ` +
    `Sòl: ${String(dades.humitat_sol).padStart(5)}%  ` +
    `T: ${String(dades.temperatura).padStart(5)}°C  ` +
    `H: ${String(dades.humitat_amb).padStart(4)}%  ` +
    `Lux: ${String(dades.lux).padStart(6)}  ` +
    `Vent: ${String(dades.vent_kmh).padStart(5)}km/h  ` +
    `Pluja: ${dades.pluja_mm}mm`
  );

  try {
    const r = await post('/api/dades', dades);
    if (r.status !== 200) console.error(`  ⚠️  Servidor ha respost: ${r.status}`);
  } catch (e) {
    console.error(`  ❌ Error enviant dades: ${e.message}`);
    console.error(`     (Comprova que el servidor està en marxa: node server.js)`);
  }
}

async function enviarReg(duracio, litres) {
  const dades = { durada_seg: duracio, litres, manual: false };
  console.log(`  🚿 Event reg: ${duracio}s | ${litres}L`);
  try {
    await post('/api/reg', dades);
  } catch (e) {
    console.error(`  ❌ Error enviant reg: ${e.message}`);
  }
}

// ─── INICI ────────────────────────────────────────────────────
console.log(`
╔═══════════════════════════════════════╗
║   🌱  Simulador Hort Intel·ligent     ║
╚═══════════════════════════════════════╝
  Servidor:  http://${HOST}:${PORT}
  Interval:  ${INTERVAL / 1000}s ${INTERVAL === 5000 ? '(mode ràpid)' : ''}
  Atura amb: Ctrl+C
`);

// Forçar un reg inicial si s'ha passat --reg
if (FORCAR_REG) {
  console.log('  → [--reg] Forçant cicle de reg inicial...');
  estat.regActiu = true;
}

// Primera lectura immediata
enviarLectura();

// Lectures periòdiques
setInterval(enviarLectura, INTERVAL);

// Simular un event de reg manual ocasional cada ~10 min (en mode ràpid cada 30s)
const intervalReg = INTERVAL === 5000 ? 30000 : 600000;
setInterval(() => {
  if (!estat.regActiu && Math.random() < 0.3) {
    const duracio = Math.round(rnd(60, 240));
    const litres  = arrodonir((duracio / 60) * 10, 2);
    estat.litresTotals = arrodonir(estat.litresTotals + litres, 2);
    console.log(`  🚿 [SIM] Event de reg periòdic: ${duracio}s | ${litres}L`);
    enviarReg(duracio, litres);
  }
}, intervalReg);
