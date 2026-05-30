#!/usr/bin/env node
/*
 * SIMULADOR DE DADES - Hort Intel·ligent
 * Calibrat per a PILES, comarca de la Safor (València)
 * Latitud: 38.94°N  |  Altitud: ~5m  |  Clima mediterrani costaner
 * ────────────────────────────────────────────────────────────────
 * Fonts: climate-data.org / eltiempo.es / meteoblue Gandia 1991-2021
 *
 * ÚS:
 *   node simulador_piles.js              → envia cada 60s
 *   node simulador_piles.js --rapid      → envia cada 5s (per provar el dashboard)
 *   node simulador_piles.js --reg        → força un cicle de reg al inici
 *   node simulador_piles.js --help
 */

const http = require('http');

const HOST     = 'localhost';
const PORT     = 3000;
const INTERVAL = process.argv.includes('--rapid') ? 5000 : 60000;
const FORCAR_REG = process.argv.includes('--reg');

if (process.argv.includes('--help')) {
  console.log(`
  Simulador Piles (Safor) - Hort Intel·ligent
  ────────────────────────────────────────────
  node simulador_piles.js           Envia cada 60s (mode real)
  node simulador_piles.js --rapid   Envia cada 5s  (ideal per provar dashboard)
  node simulador_piles.js --reg     Força un cicle de reg al inici
  `);
  process.exit(0);
}

// ─── DADES CLIMÀTIQUES REALS DE PILES/GANDIA ─────────────────
// Font: climate-data.org Gandia 1991-2021
// Índex: 0=Gen 1=Feb 2=Mar 3=Abr 4=Mai 5=Jun 6=Jul 7=Ago 8=Set 9=Oct 10=Nov 11=Des
const CLIMA = {
  // Temperatura màxima diürna mitjana (°C)
  tempMax:  [13, 14, 16, 18, 22, 26, 29, 29, 26, 22, 17, 14],
  // Temperatura mínima nocturna mitjana (°C)
  tempMin:  [ 7,  7,  9, 11, 14, 18, 21, 22, 19, 15, 11,  8],
  // Humitat relativa mensual (%)  — màxima a des (71.5), mínima a jun (59.8)
  humitat:  [70, 68, 65, 63, 61, 60, 59, 61, 66, 68, 70, 72],
  // Hores de sol diàries
  horsSol:  [6.9, 7.8, 9.5, 10.8, 11.9, 12.3, 11.8, 10.9, 9.2, 7.8, 6.9, 6.5],
  // Precipitació mensual (mm) — per calcular probabilitat diària
  plujaMm:  [34, 26, 32, 43, 32, 18, 11, 22, 86, 66, 52, 42],
  // Dies de pluja al mes (aprox)
  diesPluja:[4,  3,  4,  5,  4,  2,  1,  2,  6,  6,  5,  5],
  // Velocitat vent predominant km/h (brises marines, vent del W i NW)
  ventBase: [11, 12, 12, 11, 10, 10,  9,  8, 10, 12, 12, 11],
  // Ratxa màxima ocasional
  ventMax:  [45, 50, 45, 40, 35, 30, 25, 25, 40, 50, 55, 50],
};

// Hores de sortida i posta de sol per Piles (38.94°N) per cada mes
// Format: [sortida, posta] en hora solar local (UTC+2 estiu, UTC+1 hivern)
const SOL = [
  [8.0, 18.0],  // Gen  — ~10h llum
  [7.6, 18.5],  // Feb
  [7.0, 19.2],  // Mar
  [7.8, 20.8],  // Abr  (canvi hora)
  [7.0, 21.3],  // Mai
  [6.7, 21.7],  // Jun  — dia més llarg
  [7.0, 21.5],  // Jul
  [7.5, 21.0],  // Ago
  [7.8, 20.2],  // Set
  [8.3, 19.3],  // Oct  (torna hora hivern)
  [7.8, 17.8],  // Nov
  [8.0, 17.5],  // Des
];

// ─── UTILS ────────────────────────────────────────────────────
const rnd    = (min, max) => Math.random() * (max - min) + min;
const clamp  = (v, a, b) => Math.max(a, Math.min(b, v));
const arr    = (v, d) => Math.round(v * 10**d) / 10**d;

function mesActual() { return new Date().getMonth(); }   // 0-11
function horaDecimal() {
  const n = new Date();
  return n.getHours() + n.getMinutes() / 60 + n.getSeconds() / 3600;
}

// Irradiació solar realista: corba sinusoidal entre sortida i posta
// amb atenuació per nuvolositat estacional i variació aleatòria
function calcularLux(hora, mes) {
  const [sortida, posta] = SOL[mes];
  if (hora < sortida || hora > posta) return Math.round(rnd(0, 30)); // nit

  // Angle normalitzat 0→1 al llarg del dia
  const angle = ((hora - sortida) / (posta - sortida)) * Math.PI;
  // Lux màxim estival a Piles: ~95.000 lux a l'estiu, ~55.000 a l'hivern
  const luxMax = 55000 + 40000 * Math.sin(((mes - 1) / 12) * Math.PI);
  const luxBase = Math.sin(angle) * luxMax;

  // Nuvolositat: menys nuvolositat a l'estiu, més a la tardor/hivern
  const probNuvol = [0.35, 0.30, 0.28, 0.30, 0.22, 0.12, 0.06, 0.08, 0.30, 0.35, 0.38, 0.40][mes];
  const nuvolositat = Math.random() < probNuvol ? rnd(0.2, 0.6) : rnd(0.85, 1.0);

  // Efecte boira matinal costanera (habitual a la Safor, octubre-febrer)
  const boira = [0.15,0.12,0.05,0.02,0,0,0,0,0.03,0.08,0.12,0.14][mes];
  const atBoira = (hora < sortida + 2 && Math.random() < boira) ? rnd(0.3, 0.7) : 1.0;

  return Math.round(clamp(luxBase * nuvolositat * atBoira + rnd(-800, 800), 0, 110000));
}

// Vent: brises marines característiques de la costa de la Safor
// Al matí brisa de terra (cap al mar), a la vesprada brisa marina (cap a terra)
function calcularVent(hora, mes, ventActual) {
  const ventBase = CLIMA.ventBase[mes];
  const ventMaxM = CLIMA.ventMax[mes];

  // Brisa diürna: puja de 10-11h a 15-16h (brisa marina entrant)
  let factorBrisa = 1.0;
  if (hora >= 10 && hora <= 16) {
    factorBrisa = 1.0 + 0.5 * Math.sin(((hora - 10) / 6) * Math.PI);
  }

  // Ratxes ocasionals (garbí, llevant, gregal, tramuntana)
  const probRatxa = [0.08,0.10,0.12,0.08,0.06,0.05,0.04,0.05,0.12,0.15,0.12,0.10][mes];
  const ratxa = Math.random() < probRatxa ? rnd(8, ventMaxM * 0.4) : 0;

  const target = ventBase * factorBrisa + ratxa;
  // Suavitzar: no canvia bruscament
  return clamp(ventActual + (target - ventActual) * 0.15 + rnd(-1, 1), 0, ventMaxM);
}

// Temperatura: corba diürna realista amb mínima a la matinada i màxima a primera tarda
function calcularTemperatura(hora, mes, tempActual) {
  const tMin = CLIMA.tempMin[mes];
  const tMax = CLIMA.tempMax[mes];
  // Mínima ~6h, màxima ~14-15h
  const angle = ((hora - 6) / 24) * 2 * Math.PI;
  const tempBase = tMin + (tMax - tMin) * (0.5 - 0.5 * Math.cos(angle - Math.PI * 0.1));
  return clamp(tempActual + (tempBase - tempActual) * 0.04 + rnd(-0.15, 0.15), tMin - 3, tMax + 3);
}

// Pluja: probabilitat diària correcta per mes, amb episodis de DANA a tardor
function calcularPluja(mes, hora, plujaActiva) {
  const probHoraPluja = (CLIMA.diesPluja[mes] * 3) / (30 * 24); // prob per hora
  // Efecte DANA: pluja intensa i curta, tardor (set-nov)
  const factorDANA = [1,1,1,1,1,1,1,1,2.5,2.0,1.5,1][mes];
  if (!plujaActiva && Math.random() < probHoraPluja * factorDANA) {
    // Nou episodi — intensitat variable (DANA pot donar molta pluja en poc temps)
    const intensitat = mes >= 8 && mes <= 10 ? rnd(0.5, 8.0) : rnd(0.1, 2.5);
    return arr(intensitat, 2);
  }
  return 0;
}

// ─── ESTAT INTERN ─────────────────────────────────────────────
const mes0 = mesActual();
let estat = {
  humitatSol:   65,
  temperatura:  (CLIMA.tempMin[mes0] + CLIMA.tempMax[mes0]) / 2,
  humitatAmb:   CLIMA.humitat[mes0],
  lux:          0,
  ventKmh:      CLIMA.ventBase[mes0],
  plujaInterval:0,
  litresTotals: 0,
  regActiu:     false,
  regManual:    false,
  cicle:        0,
};

// ─── GENERADOR DE LECTURA ─────────────────────────────────────
function generarLectura() {
  const mes  = mesActual();
  const hora = horaDecimal();
  estat.cicle++;

  estat.temperatura = arr(calcularTemperatura(hora, mes, estat.temperatura), 1);

  // Humitat ambient: inversament proporcional a temperatura, base mensual
  const humBase = CLIMA.humitat[mes] - (estat.temperatura - CLIMA.tempMin[mes]) * 0.8;
  estat.humitatAmb = arr(clamp(estat.humitatAmb + (humBase - estat.humitatAmb) * 0.06 + rnd(-0.5, 0.5), 35, 95), 1);

  estat.lux     = calcularLux(hora, mes);
  estat.ventKmh = arr(calcularVent(hora, mes, estat.ventKmh), 1);

  // Pluja
  estat.plujaInterval = calcularPluja(mes, hora, false);
  if (estat.plujaInterval > 0) {
    // La pluja augmenta la humitat del sòl
    estat.humitatSol = clamp(estat.humitatSol + estat.plujaInterval * 2.5, 0, 100);
  }

  // Reg
  if (estat.regActiu) {
    estat.humitatSol = clamp(estat.humitatSol + rnd(1.5, 3.5), 0, 100);
    if (estat.humitatSol >= 82) {
      const duracio = Math.round(rnd(120, 300));
      const litres  = arr((duracio / 60) * 10, 2);
      estat.litresTotals = arr(estat.litresTotals + litres, 2);
      estat.regActiu  = false;
      estat.regManual = false;
      enviarReg(duracio, litres, false);
    }
  } else {
    // Evapotranspiració: alta a l'estiu i a les hores centrals del dia
    // Referència: zona costanera mediterrània, cultius hortícoles
    const etBase = [1.5,1.8,2.5,3.2,4.0,5.0,5.5,5.2,3.8,2.8,2.0,1.5][mes]; // mm/dia
    const factorHora = hora > 8 && hora < 20
      ? 0.5 + 0.5 * Math.sin(((hora - 8) / 12) * Math.PI)
      : 0.05;
    // Per 60s: et_hora = etBase/24 mm, convertit a % humitat (~0.3 a l'estiu migdia)
    const evap = (etBase / 24) * factorHora * (INTERVAL / 3600000) * 0.3;
    estat.humitatSol = clamp(estat.humitatSol - evap - rnd(0, 0.1), 0, 100);

    // Activa reg automàtic si la humitat baixa de 35%
    if (estat.humitatSol < 35) {
      console.log('  → [REG AUTO] Humitat baixa, activant reg...');
      estat.regActiu = true;
    }
  }

  estat.humitatSol = arr(estat.humitatSol, 1);

  return {
    humitat_sol:   estat.humitatSol,
    temperatura:   estat.temperatura,
    humitat_amb:   estat.humitatAmb,
    lux:           estat.lux,
    vent_kmh:      estat.ventKmh,
    pluja_mm:      estat.plujaInterval,
    reg_actiu:     estat.regActiu,
    reg_manual:    estat.regManual,
    litres_totals: estat.litresTotals,
  };
}

// ─── HTTP POST ────────────────────────────────────────────────
function post(endpoint, dades) {
  return new Promise((resolve, reject) => {
    const cos = JSON.stringify(dades);
    const opts = {
      hostname: HOST, port: PORT, path: endpoint, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(cos) },
      timeout: 5000,
    };
    const req = http.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode }));
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.on('error', reject);
    req.write(cos); req.end();
  });
}

async function enviarLectura() {
  const dades = generarLectura();
  const hora  = new Date().toLocaleTimeString('ca');
  const mes   = mesActual();
  const noms  = ['Gen','Feb','Mar','Abr','Mai','Jun','Jul','Ago','Set','Oct','Nov','Des'];

  const icReg = dades.reg_actiu ? '💧 REG' : '     ';
  const icSol = dades.lux > 30000 ? '☀️ ' : dades.lux > 5000 ? '⛅ ' : dades.lux > 100 ? '🌥️ ' : '🌙 ';
  const icPluja = dades.pluja_mm > 0 ? `🌧️ ${dades.pluja_mm}mm ` : '         ';

  console.log(
    `[${hora}][${noms[mes]}] ${icReg} ${icSol} ` +
    `Sòl:${String(dades.humitat_sol).padStart(5)}%  ` +
    `T:${String(dades.temperatura).padStart(5)}°C  ` +
    `H:${String(dades.humitat_amb).padStart(4)}%  ` +
    `☀️ ${String(dades.lux).padStart(6)} lux  ` +
    `💨${String(dades.vent_kmh).padStart(5)} km/h  ` +
    icPluja
  );

  try {
    const r = await post('/api/dades', dades);
    if (r.status !== 200) console.error(`  ⚠️  Servidor: ${r.status}`);
  } catch (e) {
    console.error(`  ❌ Error: ${e.message} (el servidor està en marxa?)`);
  }
}

async function enviarReg(duracio, litres, manual) {
  console.log(`  🚿 Fi reg: ${duracio}s | ${litres}L | ${manual ? 'manual' : 'automàtic'}`);
  try { await post('/api/reg', { durada_seg: duracio, litres, manual }); }
  catch (e) { console.error(`  ❌ Error reg: ${e.message}`); }
}

// ─── INICI ────────────────────────────────────────────────────
const mes0n = ['Gener','Febrer','Març','Abril','Maig','Juny','Juliol','Agost','Setembre','Octubre','Novembre','Desembre'][mes0];
console.log(`
╔══════════════════════════════════════════════════╗
║   🌿  Simulador Hort · Piles, la Safor (VLC)    ║
╚══════════════════════════════════════════════════╝
  Servidor:   http://${HOST}:${PORT}
  Interval:   ${INTERVAL / 1000}s ${INTERVAL === 5000 ? '(mode ràpid ⚡)' : '(mode real)'}
  Mes actual: ${mes0n}
  T esperada: ${CLIMA.tempMin[mes0]}-${CLIMA.tempMax[mes0]}°C
  Humitat:    ~${CLIMA.humitat[mes0]}%
  Hores sol:  ~${CLIMA.horsSol[mes0]}h/dia
  Pluja esp.: ~${CLIMA.plujaMm[mes0]}mm/mes
  Atura amb:  Ctrl+C
`);

if (FORCAR_REG) {
  console.log('  → [--reg] Forçant cicle de reg inicial...');
  estat.regActiu = true;
}

// Primera lectura immediata i loop
enviarLectura();
setInterval(enviarLectura, INTERVAL);

// Events de reg periòdics (simula cicles que han acabat mentre el simulador no corria)
const intReg = INTERVAL === 5000 ? 25000 : 580000;
setInterval(() => {
  if (!estat.regActiu && Math.random() < 0.25) {
    const duracio = Math.round(rnd(90, 280));
    const litres  = arr((duracio / 60) * 10, 2);
    estat.litresTotals = arr(estat.litresTotals + litres, 2);
    enviarReg(duracio, litres, false);
  }
}, intReg);
