# 🌱💻 De la llavor al núvol: Sostenibilitat, automatització i IoT a l'hort escolar

## 📋 Descripció del projecte

Aquest repositori conté la programació didàctica anual i els recursos d'un projecte educatiu per competències dissenyat per a l'assignatura de Tecnologia de 4t d'ESO.

El projecte s'articula al voltant d'un eix vertebrador: **la creació i gestió d'un Hort Escolar Intel·ligent (Hort IoT)**. A través d'un escenari educatiu real i aplicat al mateix institut, l'alumnat dissenya i implementa una infraestructura que permet:

- Construcció física sostenible amb materials reciclats (economia circular).
- Disseny i impressió 3D de components a mida.
- Automatització intel·ligent del reg mitjançant sensors i microcontroladors.
- Monitoratge remot de dades mediambientals mitjançant un Dashboard web.
- Alimentació energètica autònoma amb instal·lacions fotovoltaiques.

---

## 🎯 Objectius d'aprenentatge

Competències Específiques (CE) i sabers desenvolupats (LOMLOE):

| CE | Descripció | Continguts associats |
| :---: | :--- | :--- |
| **CE1** | Resolució de problemes tecnològics | Mètode de projectes, memòria tècnica, treball col·laboratiu |
| **CE2** | Disseny, materials i fabricació | Eines de fusteria, tractament de palets, disseny CAD, impressió 3D |
| **CE3** | Pensament computacional i robòtica | C/C++, Arduino/ESP32, sensors (humitat, temp), actuadors (relés) |
| **CE4** | Eines digitals i comunicació d'idees | Xarxes (IP/WLAN), servidor Raspberry Pi, Dashboard HTML/JS |
| **CE5** | Tecnologia sostenible i eficiència | Instal·lació de Kit Solar, inversors, bateries, eficiència energètica |
| **CE6** | Ètica i impacte ambiental | Economia circular (marcatge HT fusta), petjada hídrica, ODS |

---

## 📦 Estructura del repositori

```text
📦 Projecte_Hort_IoT/
├── 📄 README.md
├── 📁 profesorado/
│   ├── 📄 programacio_anual.md
│   ├── 📄 auditoria_curricular.md
│   ├── 📄 SA_Caixons.pdf
│   ├── 📄 SA_Hort_IoT.pdf
│   └── 📄 rubriques_avaluacio.xlsx
├── 📁 alumnado/
│   ├── 📄 guia_taller_fusta.pdf
│   ├── 📁 disseny_3d/
│   │   ├── 📄 carcassa_sensors.stl
│   │   └── 📄 frontisses.stl
│   ├── 📁 codi_arduino/
│   │   └── 📄 hort_meteo.ino
│   ├── 📁 web_dashboard/
│   │   ├── 📄 index.html
│   │   ├── 📄 server.js
│   │   └── 📄 package.json
│   └── 📄 plantilles_memoria_tecnica.md
└── 📄 llista_materials.md
```

---

## 🎓 Context educatiu

- **Matèria:** Tecnologia
- **Nivell:** 4t d'ESO
- **Normativa:** Decret 107/2022, d'1 d'agost (Comunitat Valenciana) - LOMLOE
- **Durada:** Anual (105 sessions, 3h/setmana aprox.)
- **Metodologia:** Aprenentatge Basat en Projectes (ABP) i Aprenentatge Servei (ApS)

---

## 🛠️ Tecnologies i eines

### Maquinari requerit (Hardware):
- **Taller:** Fusta de palets (marcatge HT), serres, trepants, polidores.
- **Control i IoT:** Placa ESP32 o Arduino UNO amb mòdul WiFi.
- **Sensors:** Humitat de sòl, Temperatura/Humitat (DHT11/DHT22), Llum (LDR).
- **Servidor local:** Raspberry Pi 4 (o similar).
- **Energia:** Kit placa solar 12V, controlador de càrrega, bateria, bomba d'aigua 12V.
- **Fabricació digital:** Impressora 3D (PLA/PETG).

### Programari principal (Software):
- **Disseny 3D:** Tinkercad / FreeCAD.
- **Programació microcontroladors:** Arduino IDE (C++).
- **Desenvolupament Web:** HTML5, CSS, Vanilla JS, Node.js (Backend).

---

## 🚀 Fases del projecte (Temporalització Anual)

### Fase 1: Investigación, materiales y proyecto (1r Trimestre - 35 sessions)
- Economía circular. Materiales y sostenibilidad en el entorno próximo.
- Reciclatge de fusta, construcció de caixons i estudi de l'economia circular.
- Disseny CAD i impressió 3D.

### Fase 2: Màquines i Fonaments de Robòtica (2n Trimestre - 35 sessions)
- Estudi de mecanismes i pneumàtica/hidràulica aplicats al reg.
- Iniciació a l'electrònica i programació (Arduino/C++).
- Connexió bàsica de sensors i actuadors a l'aula.

### Fase 3: Instal·lacions i Integració IoT (3r Trimestre - 35 sessions)
- Instal·lacions d'habitatges aplicades al Kit Solar de l'hort.
- Muntatge final: integració del codi de reg automàtic.
- Connexió WiFi, configuració del Dashboard i presentació a l'institut.

---

## 📊 Avaluació

El projecte utilitza avaluació contínua i formativa mitjançant:

- Rúbriques específiques per a les diferents fases (taller, codi, disseny 3D).
- Avaluació de la Memòria Tècnica del projecte.
- Funcionament real del producte (Hort regant correctament).
- Autoavaluació, coavaluació entre iguals i presentació final (Fira de la Ciència / Hall del centre).

---

## 📖 Guia d'ús

### Per al professorat:
- Revisar l'`auditoria_curricular.md` per justificar la cobertura de sabers bàsics.
- Adaptar les Situacions d'Aprenentatge (SAs) segons l'equipament disponible al taller.
- Consultar els esquemes de connexió abans de muntar l'ESP32.

### Per a l'alumnat:
- Començar per la carpeta `/alumnado/` i les guies de seguretat del taller.
- Seguir l'estructura de la memòria tècnica des del primer dia.
- Utilitzar els codis base d'Arduino i HTML per anar modificant-los.

---

## 🎯 Competències desenvolupades

### Competències tècniques:
- Ús segur d'eines de fabricació manual i digital (3D).
- Lògica de programació i estructures de control.
- Muntatge de circuits elèctrics i hidràulics.
- Tractament i visualització de dades digitals.

### Competències transversals:
- Treball col·laboratiu i assumpció de rols.
- Consciència ecosocial, sostenibilitat i disseny ètic.
- Resolució de problemes i *troubleshooting*.

---

## 🔄 Adaptabilitat

El projecte està dissenyat per ser flexible:

- Es pot realitzar sense la part IoT (només reg amb temporitzador clàssic).
- S'hi pot afegir complexitat mecànica (tendals motoritzats per a hivernacles).
- El Dashboard pot allotjar-se en la Raspberry o en serveis gratuïts d'Internet (ThingSpeak, Blynk).

---

## 📚 Referències curriculars

- Basat en la normativa educativa espanyola (LOMLOE).
- Decret 107/2022 de la Generalitat Valenciana (Currículum de 4t ESO - Tecnologia).
- Integració amb els Objectius de Desenvolupament Sostenible (ODS 7, 11, 12, 13).

---

## 📞 Contacte

- **Matèria:** Tecnologia (4t ESO)
- **Autors:** Equip Smart Hort (Andrea, Rocio, Jesús, Rubén, Víctor)
