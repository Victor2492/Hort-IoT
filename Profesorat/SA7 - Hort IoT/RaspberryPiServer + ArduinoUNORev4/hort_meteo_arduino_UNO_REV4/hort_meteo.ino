/*
 * HORT INTEL·LIGENT + ESTACIÓ METEOROLÒGICA
 * Arduino UNO WiFi R4
 *
 * SENSORS:
 *   - SEN0114 (DFRobot) → humitat del sòl → pin A0
 *   - DHT22              → temp + humitat ambient → pin D2
 *   - BH1750             → irradiància solar → I2C (SDA/SCL)
 *   - Pluviòmetre balancí → pluja → pin D3 (interrupció)
 *   - Anemòmetre         → vent → pin A1
 *
 * ACTUADORS:
 *   - Relé bomba de reg → pin D7
 *
 * PROTOCOL:
 *   Envia dades per HTTP POST a la Raspberry Pi (JSON)
 *   Interval: cada 60 segons
 *
 * LLIBRERIES NECESSÀRIES (instal·lar via Library Manager):
 *   - DHT sensor library (Adafruit)
 *   - BH1750 (Christopher Laws)
 *   - ArduinoJson (Benoit Blanchon)
 *   - WiFiS3 (inclosa amb Arduino UNO R4 WiFi)
 */

#include <WiFiS3.h>
#include <DHT.h>
#include <Wire.h>
#include <BH1750.h>
#include <ArduinoJson.h>

// ─── CONFIGURACIÓ WIFI ──────────────────────────────────────────────────────
const char* SSID     = "EL_TEU_WIFI";        // ← canvia-ho
const char* PASSWORD = "LA_TEUA_CONTRASENYA"; // ← canvia-ho

// ─── CONFIGURACIÓ RASPBERRY PI ──────────────────────────────────────────────
const char* RPI_HOST = "192.168.1.100"; // ← IP de la Raspberry Pi
const int   RPI_PORT = 3000;

// ─── PINS ────────────────────────────────────────────────────────────────────
#define PIN_HUMITAT_SOL   A0
#define PIN_DHT           2
#define PIN_PLUVIOMETRE   3   // interrupció INT1
#define PIN_ANEMOMETRE    A1
#define PIN_RELE_BOMBA    7

// ─── PARÀMETRES DE REG ───────────────────────────────────────────────────────
// Humitat del sòl: SEN0114 retorna 0-1023 (0=molt humit, 1023=sec)
// Ajusta aquests valors segons el teu sòl calibrant el sensor
#define HUMITAT_LLINDAR_BAIX   600   // per davall → no cal regar
#define HUMITAT_LLINDAR_ALT    750   // per damunt → REGAR
#define TEMPS_REG_MAX_SEG      300   // 5 min màxim per cicle
#define CABAL_LITRE_PER_MIN    10.0  // ← ajusta al teu sistema de reg

// ─── PARÀMETRES TEMPORALS ────────────────────────────────────────────────────
#define INTERVAL_ENVIAMENT_MS  60000UL  // 60 segons
#define INTERVAL_SENSOR_MS     5000UL   // llegir sensors cada 5 s

// ─── OBJECTES GLOBALS ────────────────────────────────────────────────────────
DHT    dht(PIN_DHT, DHT22);
BH1750 llumSensor;
WiFiClient client;

// ─── VARIABLES ESTAT ─────────────────────────────────────────────────────────
volatile unsigned long comptesBalanci = 0; // pluja (IRQ)
float   litresAcumulats    = 0.0;
float   litresTotals       = 0.0;
bool    regActiu           = false;
unsigned long inicRegMs    = 0;
unsigned long ultimEnviament = 0;
unsigned long ultimLectura   = 0;

// Lectures actuals
float humitatSol   = 0;  // 0-100%
float temperatura  = 0;
float humitatAmb   = 0;
float lux          = 0;
float velocitatVent = 0; // km/h
float plujaMM       = 0; // mm acumulats

// ─── ISR PLUVIÒMETRE ─────────────────────────────────────────────────────────
// Cada basculació = 0.2794 mm de pluja (típic pluviòmetre de balancí)
void IRAM_ATTR comptaPluja() {
  comptesBalanci++;
}

// ─────────────────────────────────────────────────────────────────────────────
void setup() {
  Serial.begin(115200);
  while (!Serial && millis() < 3000);

  Serial.println(F("\n=== HORT + METEO ==="));

  // Pins
  pinMode(PIN_RELE_BOMBA, OUTPUT);
  digitalWrite(PIN_RELE_BOMBA, LOW); // bomba apagada per defecte
  pinMode(PIN_PLUVIOMETRE, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(PIN_PLUVIOMETRE), comptaPluja, FALLING);

  // Sensors
  dht.begin();
  Wire.begin();
  if (!llumSensor.begin(BH1750::CONTINUOUS_HIGH_RES_MODE)) {
    Serial.println(F("[WARN] BH1750 no trobat"));
  }

  // WiFi
  connectarWifi();
}

// ─────────────────────────────────────────────────────────────────────────────
void loop() {
  unsigned long ara = millis();

  // 1) Llegir sensors periòdicament
  if (ara - ultimLectura >= INTERVAL_SENSOR_MS) {
    ultimLectura = ara;
    llegirSensors();
    gestionarReg();
  }

  // 2) Enviar dades a Raspberry Pi
  if (ara - ultimEnviament >= INTERVAL_ENVIAMENT_MS) {
    ultimEnviament = ara;
    enviarDades();
  }

  // 3) Reconectar WiFi si cal
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println(F("[WIFI] Connexió perduda, reconnectant..."));
    connectarWifi();
  }
}

// ─── LLEGIR SENSORS ──────────────────────────────────────────────────────────
void llegirSensors() {
  // Humitat del sòl (SEN0114): inversament proporcional
  int rawSol = analogRead(PIN_HUMITAT_SOL);
  humitatSol = map(rawSol, 1023, 300, 0, 100); // 300=saturat, 1023=sec
  humitatSol = constrain(humitatSol, 0, 100);

  // DHT22: temperatura i humitat ambiental
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  if (!isnan(t)) temperatura = t;
  if (!isnan(h)) humitatAmb  = h;

  // BH1750: llum solar en lux
  lux = llumSensor.readLightLevel();

  // Anemòmetre: tensió → velocitat vent
  // Calibra: 0V=0km/h, 5V=típicament 32.4km/h (depèn del model)
  int rawVent  = analogRead(PIN_ANEMOMETRE);
  velocitatVent = (rawVent / 1023.0) * 32.4;

  // Pluviòmetre: acumular mm (cada basculació = 0.2794 mm)
  noInterrupts();
  unsigned long comptes = comptesBalanci;
  comptesBalanci = 0;
  interrupts();
  plujaMM += comptes * 0.2794;

  Serial.print(F("[SENSOR] Sol:")); Serial.print(humitatSol);
  Serial.print(F("% T:")); Serial.print(temperatura);
  Serial.print(F("°C H:")); Serial.print(humitatAmb);
  Serial.print(F("% Lux:")); Serial.print(lux);
  Serial.print(F(" Vent:")); Serial.print(velocitatVent);
  Serial.print(F("km/h Pluja:")); Serial.print(plujaMM);
  Serial.println(F("mm"));
}

// ─── GESTIÓ DEL REG ──────────────────────────────────────────────────────────
void gestionarReg() {
  unsigned long ara = millis();

  if (!regActiu) {
    // Iniciar reg si la humitat del sòl és massa baixa
    if (humitatSol < HUMITAT_LLINDAR_BAIX) {
      iniciarReg();
    }
  } else {
    // Aturar reg si: humitat suficient O temps màxim superat
    bool humitatOk   = (humitatSol >= HUMITAT_LLINDAR_ALT);
    bool tempsSuperat = ((ara - inicRegMs) >= (TEMPS_REG_MAX_SEG * 1000UL));

    if (humitatOk || tempsSuperat) {
      aturarReg();
    }
  }
}

void iniciarReg() {
  Serial.println(F("[REG] Iniciant reg..."));
  digitalWrite(PIN_RELE_BOMBA, HIGH);
  regActiu    = true;
  inicRegMs   = millis();
  litresAcumulats = 0.0;
}

void aturarReg() {
  unsigned long duracio = millis() - inicRegMs;
  float minuts = duracio / 60000.0;
  litresAcumulats = minuts * CABAL_LITRE_PER_MIN;
  litresTotals   += litresAcumulats;

  Serial.print(F("[REG] Aturat. Durada: "));
  Serial.print(duracio / 1000);
  Serial.print(F("s | Litres: "));
  Serial.println(litresAcumulats, 2);

  digitalWrite(PIN_RELE_BOMBA, LOW);
  regActiv = false;

  // Enviar event de reg completat
  enviarEventReg(duracio / 1000UL, litresAcumulats);
}

// ─── ENVIAR DADES PERIÒDIQUES ─────────────────────────────────────────────────
void enviarDades() {
  if (WiFi.status() != WL_CONNECTED) return;

  StaticJsonDocument<256> doc;
  doc["humitat_sol"]    = round(humitatSol * 10) / 10.0;
  doc["temperatura"]    = round(temperatura * 10) / 10.0;
  doc["humitat_amb"]    = round(humitatAmb * 10) / 10.0;
  doc["lux"]            = (int)lux;
  doc["vent_kmh"]       = round(velocitatVent * 10) / 10.0;
  doc["pluja_mm"]       = round(plujaMM * 100) / 100.0;
  doc["reg_actiu"]      = regActiu;
  doc["litres_totals"]  = round(litresTotals * 100) / 100.0;

  // Reseteja pluja acumulada per a l'interval
  plujaMM = 0;

  enviarHTTP("/api/dades", doc);
}

// ─── ENVIAR EVENT REG COMPLETAT ───────────────────────────────────────────────
void enviarEventReg(unsigned long segonsReg, float litres) {
  if (WiFi.status() != WL_CONNECTED) return;

  StaticJsonDocument<128> doc;
  doc["durada_seg"] = segonsReg;
  doc["litres"]     = round(litres * 100) / 100.0;

  enviarHTTP("/api/reg", doc);
}

// ─── HTTP POST GENÈRIC ────────────────────────────────────────────────────────
void enviarHTTP(const char* endpoint, JsonDocument& doc) {
  if (!client.connect(RPI_HOST, RPI_PORT)) {
    Serial.print(F("[HTTP] No es pot connectar a "));
    Serial.println(RPI_HOST);
    return;
  }

  String body;
  serializeJson(doc, body);

  client.print(F("POST "));
  client.print(endpoint);
  client.println(F(" HTTP/1.1"));
  client.print(F("Host: "));
  client.println(RPI_HOST);
  client.println(F("Content-Type: application/json"));
  client.print(F("Content-Length: "));
  client.println(body.length());
  client.println(F("Connection: close"));
  client.println();
  client.print(body);

  // Esperar resposta breu
  unsigned long t = millis();
  while (client.connected() && millis() - t < 3000) {
    if (client.available()) {
      String line = client.readStringUntil('\n');
      if (line.startsWith("HTTP/")) {
        Serial.print(F("[HTTP] Resposta: "));
        Serial.println(line);
        break;
      }
    }
  }
  client.stop();
}

// ─── CONNEXIÓ WIFI ────────────────────────────────────────────────────────────
void connectarWifi() {
  Serial.print(F("[WIFI] Connectant a "));
  Serial.print(SSID);
  WiFi.begin(SSID, PASSWORD);
  int intents = 0;
  while (WiFi.status() != WL_CONNECTED && intents < 20) {
    delay(500);
    Serial.print(F("."));
    intents++;
  }
  if (WiFi.status() == WL_CONNECTED) {
    Serial.print(F("\n[WIFI] Connectat! IP: "));
    Serial.println(WiFi.localIP());
  } else {
    Serial.println(F("\n[WIFI] Error de connexió!"));
  }
}
