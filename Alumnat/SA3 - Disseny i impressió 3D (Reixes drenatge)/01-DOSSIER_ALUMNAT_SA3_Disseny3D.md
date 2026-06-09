# 🖨️ Dossier de l'Alumnat — SA3: Disseny i Impressió 3D

![Assignatura](https://img.shields.io/badge/Assignatura-Tecnologia-006494?style=flat-square&logo=cube)
![Nivell](https://img.shields.io/badge/Nivell-4t%20ESO-0077B6?style=flat-square)
![Sessions](https://img.shields.io/badge/Sessions-14-9B59B6?style=flat-square)
![Software](https://img.shields.io/badge/Software-TinkerCAD%20%2B%20Cura-F4A261?style=flat-square)
![Llengua](https://img.shields.io/badge/Llengua-Valencian%C3%A0-CE3A2C?style=flat-square)

> **Situació d'Aprenentatge:** *Disseny i Impressió 3D – Reixes de Drenatge per a l'Hort Escolar*
> Dissenyarem amb TinkerCAD i imprimirem en 3D les reixes modulars de drenatge per als caixons de la SA2.

---

## 📋 Taula de continguts

1. [Presentació del projecte](#1-presentació-del-projecte)
2. [Objectius d'aprenentatge](#2-objectius-daprenentatge)
3. [Fase 1 – Introducció a la impressió 3D](#3-fase-1--introducció-a-la-impressió-3d)
4. [Fase 2 – Disseny a mà alçada](#4-fase-2--disseny-a-mà-alçada)
5. [Fase 3 – TinkerCAD pas a pas](#5-fase-3--tinkercad-pas-a-pas)
6. [Fase 4 – Laminat amb Cura](#6-fase-4--laminat-amb-cura)
7. [Fase 5 – Impressió i post-processament](#7-fase-5--impressió-i-post-processament)
8. [Fase 6 – Validació i iteració](#8-fase-6--validació-i-iteració)
9. [Especificacions tècniques de la reixa](#9-especificacions-tècniques-de-la-reixa)
10. [Avaluació i autoavaluació](#10-avaluació-i-autoavaluació)
11. [Plantilla de memòria tècnica](#11-plantilla-de-memòria-tècnica)
12. [Recursos i eines](#12-recursos-i-eines)

---

## 1. Presentació del projecte

### El problema

Els caixons de fusta de la SA2 necessiten un sistema de drenatge a la base. Els llistons de fusta separats funcionen, però amb el temps i la humitat poden cedir. Necessitem una solució **precisa, duradora i tecnològica**.

### La nostra solució

```
Dissenyarem una REIXA MODULAR de drenatge impresa en 3D (PLA):
 ┌──────────┬──────────┐
 │  Mòdul A │  Mòdul B │  ← 4 mòduls idèntics de 190×90 mm
 ├──────────┼──────────┤     connectats entre si
 │  Mòdul C │  Mòdul D │     = 1 reixa completa per caixó
 └──────────┴──────────┘
```

### Per què modular?

- 📐 La majoria d'impressores escolars tenen plataforma ~200×200 mm
- ✅ Si no acabes el disseny, pots imprimir els mòduls que tingues llestos
- 🔁 Si un mòdul falla, es reimprimir sense refabricar tot
- 🎨 Cada mòdul pot ser personalitzat per un membre del grup diferent

### Connexió entre SA

```
SA2: Caixó de fusta  ──►  SA3: Reixa 3D  ──►  SA4: Automatització
  (parets, base)         (drenatge precís)       (sensors, reg)
                              ↑ AQUÍ ESTEM
```

---

## 2. Objectius d'aprenentatge

En acabar aquest projecte hauràs après a:

- [ ] Explicar com funciona la impressió 3D FDM (capes, filament, temperatura)
- [ ] Usar TinkerCAD per crear peces 3D des de zero
- [ ] Aplicar operacions booleanes (substracció de sòlids = forats)
- [ ] Crear patrons repetitius amb Smart Duplicate
- [ ] Exportar un fitxer STL correcte
- [ ] Configurar paràmetres bàsics de laminat a Ultimaker Cura
- [ ] Comparar el disseny previst amb el resultat real imprès
- [ ] Proposar millores raonades al disseny (pensament iteratiu)

---

## 3. Fase 1 – Introducció a la impressió 3D

### Sessions S1–S3 | Durada: 3 × 55 min

#### 3.1 Com funciona la impressió FDM?

```
MODEL DIGITAL (CAD)  →  LAMINAT (Slicer)  →  IMPRESSIÓ FDM  →  PEÇA FÍSICA
   TinkerCAD              Cura / Prusa         Impressora 3D
      .stl                  .gcode
```

**FDM = Fused Deposition Modeling** (Modelat per Deposició Fosa)

| Concepte | Explicació |
|----------|-----------|
| **Filament** | Plàstic en forma de fil (1,75 mm de diàmetre) |
| **Broqueta (nozzle)** | Fon el filament a ~200°C i el diposita |
| **Llit (bed)** | Plataforma on s'adhereix la primera capa |
| **Capa (layer)** | Cada passada horitzontal del cap d'impressió |
| **Infill** | Farciment interior de la peça (20% = 20% sòlid) |
| **Suports** | Estructures temporals per a voladissos (no cal per a la reixa) |

#### 3.2 El material: PLA

> 🌿 **PLA** = Àcid Polilàctic = bioplàstic derivat del midó de blat de moro o canya de sucre

| Propietat | Valor |
|-----------|-------|
| Temperatura d'impressió | 190–220 °C |
| Temperatura del llit | 25–60 °C |
| Biodegradable | ✅ En condicions de compostatge industrial |
| Dificultat d'ús | ⭐ Molt fàcil (ideal per a principiants) |
| Cost | ~15–20 €/kg |
| Resistència tèrmica | Fins a ~60 °C (suficient per a hort exterior) |

#### 3.3 Anàlisi del repte: quina reixa necessitem?

Omple aquesta taula amb el teu grup **abans** de dissenyar:

| Requeriment | Valor escollit | Justificació |
|------------|:---:|---|
| Dimensions del mòdul | × mm | |
| Tipus de forat (hexagonal / quadrat) | | |
| % d'àrea de drenatge objectiu | ≥ % | |
| Gruix de la base | mm | |
| Alçada de les potes | mm | |
| Necessita connector inter-mòdul? | Sí / No | |
| Text personalitzat? | Sí / No | |

---

## 4. Fase 2 – Disseny a mà alçada

### Sessió S2 | Durada: 55 min

Abans d'obrir el TinkerCAD, **has de tenir el plànol a mà alçada** aprovat pel/la docent.

#### 4.1 Les 3 vistes obligatòries

```
VISTA EN PLANTA          ALÇAT (frontal)         PERFIL (lateral)
(des de dalt)

┌─────────────────┐      ┌───────────────┐        ┌──────┐
│  ⬡ ⬡ ⬡ ⬡ ⬡  │      │───────────────│        │──────│
│ ⬡ ⬡ ⬡ ⬡ ⬡  │      │               │        │      │
│  ⬡ ⬡ ⬡ ⬡ ⬡  │      └──┐       ┌──┘        └──┐ ┌──┘
│ ⬡ ⬡ ⬡ ⬡ ⬡  │         └───────┘               └─┘
└─────────────────┘        potes 5mm              potes 5mm
   190 mm × 90 mm
```

#### 4.2 Cotes obligatòries al plànol

- [ ] Longitud i amplada de la base (mm)
- [ ] Gruix de la base (mm)
- [ ] Diàmetre dels forats de drenatge (mm)
- [ ] Separació entre centres dels forats (mm)
- [ ] Alçada de les potes (mm)
- [ ] Dimensions del connector (si n'hi ha)
- [ ] Rètol: nom, grup, data, escala

#### 4.3 Càlcul de l'àrea de drenatge (obligatori)

Per a forats hexagonals de diàmetre Ø:

```
Àrea d'un hexàgon = (3√3 / 2) × r²    on r = Ø/2

Exemple amb Ø10 mm:
  r = 5 mm
  Àrea = 2,598 × 25 = 86,6 mm²

Àrea total drenatge = nº forats × àrea forat
% drenatge = (àrea total / àrea base) × 100
           = (nº forats × 86,6) / (190 × 90) × 100

Objectiu: % ≥ 40%
```

---

## 5. Fase 3 – TinkerCAD pas a pas

### Sessions S4–S8 | Durada: 5 × 55 min

> 💻 Obri el tutorial interactiu HTML per a veure els mockups de la interfície a cada pas.

#### 5.1 Primers passos a TinkerCAD

**URL**: [tinkercad.com](https://www.tinkercad.com) | Compte: Education (codi de classe del docent)

```
1. Inicia sessió
2. Crea un nou disseny
3. Anomena-ho: Reixa_4tESO_GrupX   (substitueix X per al teu grup)
4. Configura unitats: menú → unitats → mil·límetres (mm)
```

**Dreceres de teclat imprescindibles**:

| Drecera | Acció |
|---------|-------|
| `Ctrl + D` | Duplicar en el mateix lloc (Smart Duplicate) |
| `Ctrl + G` | Agrupar (aplica l'operació boolean) |
| `Ctrl + Shift + G` | Desagrupar |
| `Ctrl + Z` | Desfer |
| `F` | Ajustar vista a tota la peça |
| `H` | Vista inicial (home) |

#### 5.2 Crear la base rectangular

```
1. Arrossega un "Box" des del panell de formes
2. Clic al box → edita dimensions:
     W (amplada) = 190 mm
     D (fondària) = 90 mm
     H (alçada)  = 4 mm
3. Verifica que Z base = 0 (sobre la quadrícula)
4. Renombra-ho "Base" (doble clic al nom)
```

#### 5.3 Crear el primer forat hexagonal

```
1. Panell de formes → "Polygon"
2. Propietats: Sides = 6 (hexàgon), Diameter = 10 mm, Height = 6 mm
3. IMPORTANT: canvia el tipus a "Hole" (transparent/fosc)
4. Posiciona: X = 13, Y = 13, Z = -1
   (el -1 garanteix que travessa completament la base de 4mm)
```

> ⚠️ **El "Hole" NO és un forat real fins a aplicar Group (Ctrl+G)**. La base seguirà sencera fins al pas 5.5.

#### 5.4 Crear el patró de forats (Smart Duplicate)

```
Fila 1 (Y=13):
  1. Selecciona l'hexàgon forat
  2. Ctrl+D (duplica en el mateix lloc)
  3. Mou +13 mm en X (camp X del panell inferior)
  4. Ctrl+D de nou → es desplaça 13 mm més automàticament
  5. Repeteix fins a tenir ~12 hexàgons en la fila

Fila 2 (desplaçament alternat):
  1. Duplica el primer hexàgon de la fila 1
  2. Mou-lo: X = X_inicial + 6,5, Y = 13 + 11,25
  3. Smart Duplicate per a completar la fila

Continua fins a tenir ~6 files que cobreixin els 90mm en Y
```

#### 5.5 Aplicar l'operació boolean

```
1. Ctrl+A (selecciona tot)
2. Ctrl+G (agrupa)
3. ✨ Els forats s'apliquen a la base → apareix la reixa hexagonal!
4. Rota la vista per verificar que els forats travessen completament
```

**Si no surten els forats:**
- Desagrupa (Ctrl+Shift+G)
- Verifica que els hexàgons siguen "Hole" (transparents)
- Verifica que la base sigui "Solid" (grisa)
- Torna a agrupar

#### 5.6 Afegir potes, connector i canal sensor

**Potes (standoffs)**:
```
- 4 × Cilindres: Ø8 mm × 5 mm (alçada)
- Posicionar als 4 cantons: Z = -5 a 0 mm
- Tipus: Solid
- Agrupar amb la base (Ctrl+G)
```

**Connector macho-femella** (per unir els 4 mòduls):
```
Tab (macho):
  - Box: 5 × 3 × 2 mm
  - Posicionar al centre del costat curt
  - Z = 4 mm (sobre la base)
  - Tipus: Solid

Ranura (femella):
  - Box: 5,2 × 3 × 2,2 mm   ← +0,2 mm de tolerància!
  - Posicionar al costat llarg, simètric al tab
  - Tipus: HOLE
```

> 💡 **Per a la tolerància**: la ranura ha de ser 0,2 mm més gran que el tab. Sense tolerància, les peces no encaixen (la impressora dilata lleugerament el plàstic en solidificar).

**Canal del sensor (opcional, alumnat avançat)**:
```
- Box: 3,5 × 90 × 4 mm → tipus HOLE
- Posicionar centrat al costat llarg, travessant la base de punta a punta
- Agrupar amb la base
```

#### 5.7 Text personalitzat

```
1. Panell de formes → "Text"
2. Doble clic → escriu: 4B-G1 (o el teu grup)
3. Propietats: Height = 8 mm, Depth = 0,5 mm
4. Tipus: SOLID (ha de sobresortir, no ser forat)
5. Posicionar sobre la base a Z = 4 mm
6. Ctrl+G (agrupar amb la base)
```

#### 5.8 Verificació i exportació STL

Abans d'exportar, comprova:

- [ ] Dimensions totals ≈ 195 × 90 × 9 mm (base + potes)
- [ ] Nombre de forats ≥ 70
- [ ] Àrea de drenatge ≥ 40% (recalcula si cal)
- [ ] Connector tab sobresurt 2 mm del costat curt
- [ ] Ranura visible al costat oposat

```
Exportació:
1. Botó "Export" (taronja, dalt a la dreta)
2. Selecciona ".STL"
3. Desa com: Reixa_4BESO_Grup1.stl
4. Entrega al/a la docent via Classroom / email
```

---

## 6. Fase 4 – Laminat amb Ultimaker Cura

### Sessions S9–S10 | Durada: 2 × 55 min

> 📥 **Descarregar Cura**: [ultimaker.com/software/ultimaker-cura](https://ultimaker.com/software/ultimaker-cura) (gratuït, Windows/Mac/Linux)

#### 6.1 Carregar el fitxer STL

```
1. Obre Ultimaker Cura
2. Arrossega el fitxer .stl a la finestra
3. La peça apareix sobre la plataforma virtual
4. Si no està plana: clic dret → "Lay Flat"
5. La cara plana (base) HA DE tocar el llit
```

#### 6.2 Paràmetres recomanats per a PLA

| Paràmetre | Valor recomanat | Per a que serveix |
|-----------|:---:|---|
| **Altura de capa** | `0,20 mm` | Equilibri velocitat/qualitat |
| **Infill** | `20% Gyroid` | Resistent i isotròpic |
| **Parets (walls)** | `3 línies` | Resistència perimetral (peça humida) |
| **Temperatura broqueta** | `205°C` (±5°C) | Fusió del PLA |
| **Temperatura llit** | `55°C` | Adhesió de la primera capa |
| **Velocitat** | `50 mm/s` | Bona adhesió entre capes |
| **Suports** | `Cap (None)` | La reixa no necessita suports |
| **Adhesió base** | `Skirt (3 línies)` | Purga el filament inicial |

#### 6.3 Verificar la vista de capes

Fes clic a "Preview" → "Layer View":

```
Capa 1:   ▓▓▓▓▓▓▓▓▓▓▓▓  ← Ha de ser completament sòlida (adhesió al llit)
Capa 2–N: ▓░░▓░░▓░░▓░░▓  ← Forats visibles (patró hexagonal)
Última:   ▓▓▓▓▓▓▓▓▓▓▓▓  ← Coberta superior sòlida
```

Si la capa 1 no és sòlida → augmenta la temperatura del llit o activa "Brim".

#### 6.4 Estimació (Cura ho calcula automàticament)

```
Per mòdul (190×90 mm, 0,20 mm capa, 20% infill):
  ⏱ Temps estimat:  ~2h 45min – 3h 30min
  ⚖ Pes de PLA:     ~85–100 g
  💶 Cost material:  ~1,30–1,50 €

Per caixó complet (4 mòduls):
  ⏱ Temps total:    ~11–14 hores
  ⚖ PLA total:      ~340–400 g
  💶 Cost total:     ~5–6 €
```

#### 6.5 Exportar el G-code

```
1. "Slice" (tallat)
2. "Save to file" → guarda al USB o SD de la impressora
3. Nom del fitxer: Reixa_4B_G1_Cura.gcode
```

---

## 7. Fase 5 – Impressió i post-processament

### Sessió S11 | Durada: 55 min + temps d'impressió (fora d'horari)

#### 7.1 Inici de la impressió

```
Protocol d'enviament:
1. Verifica que el filament és PLA i n'hi ha prou (>100 g)
2. Comprova que el llit està net (IPA 70% + paper)
3. Verifica el nivell del llit (Z-offset calibrat)
4. Instal·la el fitxer al SD/USB
5. Selecciona el fitxer → Start Print
6. OBSERVA la primera capa durant almenys 3 minuts
```

#### 7.2 Monitoratge (per torns, cada 20 min)

| Problema | Símptoma | Solució |
|---------|----------|---------|
| **Warping** | Els cantons s'aixequen del llit | Augmentar temperatura llit +5°C. Activar Brim. |
| **Stringing** | Fils de plàstic entre forats | Augmentar retracció a Cura (+0,5 mm) |
| **Capa no adherida** | Buit entre capes | Netejar broqueta. Revisar temperatura. |
| **Bloqueig (clog)** | Impressora para, no surt filament | Atura. Avisa al/a la docent. |

#### 7.3 Post-processament

```
1. Deixa refredar la peça 5 min al llit (no forçar)
2. Retira amb espàtula plana, suaument
3. Elimina baves amb llima fina (gra 240) o bisturí (docent)
4. Mesura amb peu de rei: longitud, amplada, alçada, Ø forat
5. Anota els valors a la taula de la teva memòria
```

---

## 8. Fase 6 – Validació i iteració

### Sessió S12 | Durada: 55 min

#### 8.1 Proves funcionals

Instal·la la reixa al caixó de la SA2 i verifica:

- [ ] Els 4 mòduls encaixen entre si (connector funcional)
- [ ] La reixa entra al caixó sense forçar
- [ ] L'aigua passa lliurement pels forats (prova amb regadora)
- [ ] El sensor d'humitat entra pel canal (si s'ha dissenyat)
- [ ] La reixa suporta el pes del substrat (prova de càrrega manual)

#### 8.2 Comparació disseny vs. resultat real

| Paràmetre | Valor disseny | Valor real | Desviació | OK? |
|-----------|:---:|:---:|:---:|:---:|
| Longitud total | 190 mm | mm | mm | ☐ |
| Amplada total | 90 mm | mm | mm | ☐ |
| Alçada (base+potes) | 9 mm | mm | mm | ☐ |
| Ø forat hexàgon | 10 mm | mm | mm | ☐ |
| Encaix connector | – | Funciona? | – | ☐ |

> 💡 **Toleràncies acceptables**: ±0,5 mm per a dimensions generals · ±0,2 mm per al connector

#### 8.3 Si hi ha problemes: iteració

```
Problema detectat → Identificar causa → Actualitzar model TinkerCAD → Reimprimir

Exemples comuns:
  Connector no encaixa → Augmentar tolerància a 0,3 mm → Reimprimir connector
  Forats massa petits   → Augmentar Ø a 11 mm → Reimprimir mòdul
  Base es dobla         → Augmentar gruix a 5 mm → Reimprimir
```

> 🔁 **La iteració és normal i valuosa**. Els enginyers professionals raras vegades encerten a la primera versió. Cada millora és aprenentatge real.

---

## 9. Especificacions tècniques de la reixa

### Dimensions del mòdul estàndard

```
┌─────────────────────────────────────────────────────────────┐
│  Longitud exterior:     190 mm                              │
│  Amplada exterior:       90 mm                              │
│  Gruix base:              4 mm                              │
│  Alçada potes (standoffs): 5 mm  (4 × Ø8 mm als cantons)  │
│  Alçada total:            9 mm                              │
│                                                             │
│  Patró de forats:     Hexagonal, Ø10 mm                    │
│  Separació centres:   13 mm (horitzontal), 11,25 mm (vert.)│
│  Àrea de drenatge:    ≥ 42% de la superfície               │
│  Paret mínima:        2 mm entre forats                     │
│                                                             │
│  Tab connector:       5 × 3 × 2 mm (sòlid)                │
│  Ranura connector:    5,2 × 3 × 2,2 mm (tolerància +0,2)  │
│  Canal sensor:        3,5 × 90 × 4 mm (ranura lateral)    │
└─────────────────────────────────────────────────────────────┘
```

### Paràmetres d'impressió recomanats

```
Material:          PLA 1,75 mm
Altura de capa:    0,20 mm
Infill:            20% Gyroid
Parets:            3 línies (perimetres)
Temperatura:       205°C broqueta / 55°C llit
Velocitat:         50 mm/s
Suports:           Cap
Adhesió:           Skirt (3 línies)
```

### Cost i temps per caixó complet (4 mòduls)

| Concepte | Valor |
|----------|-------|
| PLA total | ~350–400 g |
| Cost material | ~5,25–6,00 € |
| Temps impressió | ~11–14 h (amb 1 impressora) |
| Cost vs. comprar nou | ~40–60 € (reixa plàstic similar) |

---

## 10. Avaluació per Competències Específiques

> 📋 **Marc normatiu**: Decret 107/2022, DOGV 5/8/2022 (LOMLOE, Comunitat Valenciana)
> L'avaluació d'aquesta SA es basa en les **Competències Específiques (CE)** del currículum oficial de Tecnologia 4t ESO.

### Resum de la nota final

| CE | Competència | Pes | Moment d'avaluació |
|----|------------|:---:|---------------------|
| **CE1** | Identificar i resoldre problemes tecnològics | 15% | S2 (plànol) · S8 (peer review) · S12 (proves) · S14 (oral) |
| **CE2** | Fabricar solucions tecnològiques (digital/3D) | 35% | S4–S8 (model STL) · S11 (impressió) · S12 (proves) |
| **CE3** | Expressar i comunicar idees tecnològiques | 15% | S8 (peer review) · S13 (memòria) · S14 (presentació) |
| **CE5** | Aprofitar les eines digitals | 20% | S4–S8 (TinkerCAD) · S9–S10 (Cura) · S13 (apartat memòria) |
| **CE6** | Contribuir al desenvolupament sostenible | 10% | S1 (debat PLA) · S13 (sostenibilitat) · S14 (oral) |
| Actitud i autonomia | Observació continuada | 5% | Totes les sessions |

---

### CE1 — Identificar i resoldre problemes tecnològics (15%)

> *Identificar problemes tecnològics a partir de l'estudi de les necessitats de l'entorn, formular propostes i resoldre'ls de manera eficient i innovadora amb processos iteratius.*

| Criteri | Què s'avalua | Evidència que has de produir |
|---------|--------------|------------------------------|
| **1.1** | Identificar la necessitat de la reixa de drenatge | Fitxa d'anàlisi de requeriments de la reixa |
| **1.2** | Idear la solució 3D (patró, dimensions, connector) | Plànol a mà alçada acotat (3 vistes, càlcul àrea drenatge) |
| **1.3** | Planificar el projecte de disseny 3D creativament | Diagrama de Gantt · Fitxa de requeriments tècnics |
| **1.4** | Gestionar el projecte iterativament (disseny → impressió → validació) | Diari de sessions · Taula disseny vs. resultat real |

---

### CE2 — Fabricar solucions tecnològiques (35%)

> *Fabricar solucions tecnològiques utilitzant tècniques i recursos disponibles de manera apropiada i segura, incloent-hi la fabricació digital.*

| Criteri | Què s'avalua | Evidència que has de produir |
|---------|--------------|------------------------------|
| **2.1** | Fabricar la reixa aplicant disseny 3D CAD i impressió FDM | Fitxer STL · Reixa impresa · 5 proves funcionals |
| **2.2** | Seleccionar el PLA i configurar els paràmetres d'impressió | Justificació de la tria del PLA · Taula de paràmetres Cura |
| **2.3** | Dominar TinkerCAD (booleanes, patrons, connector, text) | Model TinkerCAD complet · STL exportat sense errors |
| **2.4** | Usar correctament la impressora 3D observant la seguretat | Fitxa de monitoratge · Registre d'incidències i solucions |
| **2.5** | Fer un ús responsable del PLA evitant el malbaratament | Estimació de PLA usat (Cura) · Cost vs. compra equivalent |

---

### CE3 — Expressar i comunicar idees tecnològiques (15%)

> *Expressar, difondre i interpretar idees, propostes o solucions tecnològiques de manera efectiva, emprant els recursos disponibles.*

| Criteri | Què s'avalua | Evidència que has de produir |
|---------|--------------|------------------------------|
| **3.1** | Comunicar amb vocabulari tècnic 3D (STL, G-code, infill, layer) | Plànol acotat · Glossari 3D · Captures TinkerCAD comentades |
| **3.2** | Difondre informació tecnològica digitalment | Memòria tècnica amb captures · STL al repositori del centre |
| **3.3** | Presentar el disseny i la reixa impresa de manera efectiva | Presentació oral (5 min) · Suport visual |
| **3.4** | Expressar informació al treball en equip de manera assertiva | Fitxa peer review (S8) · Autoavaluació i coavaluació |
| **3.5** | Usar entonació, gestió del temps i llenguatge inclusiu | Rúbrica específica de presentació oral |

---

### CE5 — Aprofitar les eines digitals (20%)

> *Aprofitar les possibilitats que ofereixen les eines digitals per a realitzar eficientment tasques tecnològiques, configurant-les i aplicant els coneixements interdisciplinaris adequats.*

| Criteri | Què s'avalua | Evidència que has de produir |
|---------|--------------|------------------------------|
| **5.1** | Configurar TinkerCAD i Cura en funció de les necessitats | Captures de configuració TinkerCAD · Perfil Cura amb paràmetres |
| **5.2** | Fer tasques tecnològiques eficientment amb eines digitals | Model TinkerCAD complet · G-code generat i enviat autònomament |
| **5.3** | Usar les eines digitals de manera ètica i responsable | Reflexió sobre software lliure (TinkerCAD Education, Cura GPL) |
| **5.4** | Respectar les llicències i els drets d'autoria | Indicació de llicències a la memòria · Drets del model STL |

---

### CE6 — Contribuir al desenvolupament sostenible (10%)

> *Contribuir al desenvolupament sostenible analitzant críticament l'ús de materials i processos tecnològics, valorant els impactes ambientals, socials i ètics.*

| Criteri | Què s'avalua | Evidència que has de produir |
|---------|--------------|------------------------------|
| **6.1** | Aplicar criteris de sostenibilitat (PLA bioplàstic, disseny responsable) | Reflexió: PLA vs. plàstic de petroli (CO₂, biodegradabilitat) |
| **6.2** | Avaluar críticament el procés productiu del PLA vs. PE/PP | Taula comparativa de materials i processos de producció |
| **6.3** | Valorar l'impacte social del projecte (hort escolar, coneixement obert) | Apartat "impacte social" de la memòria · STL publicat |
| **6.5** | Analitzar el cicle de vida de la reixa amb criteri ètic | Cost fabricació pròpia vs. compra · Proposta fi de cicle PLA |

---

### Autoavaluació (CE per CE)

| Competència | Criteri | 1 — Inicial | 2 — En procés | 3 — Assolit | 4 — Excel·lent |
|------------|---------|:-----------:|:-------------:|:-----------:|:--------------:|
| CE1 | He identificat el problema i planificat correctament | ☐ | ☐ | ☐ | ☐ |
| CE2 | He fabricat la reixa amb TinkerCAD i la impressora 3D | ☐ | ☐ | ☐ | ☐ |
| CE3 | La memòria i la presentació comuniquen bé el projecte | ☐ | ☐ | ☐ | ☐ |
| CE5 | He usat TinkerCAD i Cura de manera eficient i autònoma | ☐ | ☐ | ☐ | ☐ |
| CE6 | He reflexionat sobre l'impacte ambiental del PLA i del projecte | ☐ | ☐ | ☐ | ☐ |

**Reflexió personal** *(escriu 3–5 línies)*:
> Quines CE creus que has treballat millor? Quines t'han costat més? Quan canviaries del procés de disseny?

## 11. Plantilla de memòria tècnica

```
1. PORTADA
   - Títol, noms, curs, grup, data
   - Fotografia del mòdul imprès instal·lat al caixó

2. ÍNDEX

3. INTRODUCCIÓ
   - Connexió amb SA2 (caixó) i SA4 (automatització)
   - Per a què serveix la reixa de drenatge?

4. PLÀNOL A MÀ ALÇADA
   - Fotografies del plànol original (3 vistes acotades)
   - Decisions de disseny justificades

5. PROCÉS TINKERCAD
   - Captures de pantalla de cada fase (mínim 6)
   - Comentari tècnic de cada captura
   - Problemes trobats i com s'han resolt

6. LAMINAT (CURA)
   - Captura de Cura amb la peça carregada
   - Taula de paràmetres configurats
   - Estimació de temps i pes de Cura

7. RESULTAT IMPRÈS
   - Fotografies de la peça acabada (3 angles)
   - Taula de mesures disseny vs. real

8. PROVES FUNCIONALS
   - Resultat de les 5 proves de validació
   - Fotografies de la reixa instal·lada al caixó

9. PRESSUPOST
   - Cost PLA (g × €/kg)
   - Comparativa: fabricació pròpia vs. compra

10. MILLORA PROPOSADA
    - Descriu 1–2 millores concretes i raonades
    - Esbós o captura de la millora al TinkerCAD (si hi ha temps)

11. CONCLUSIONS
    - Aprenentatges destacats
    - Connexió amb la SA4 d'automatització
```

---

## 12. Recursos i eines

### Software (tot gratuït)

| Eina | URL | Per a que serveix |
|------|-----|---|
| **TinkerCAD** | [tinkercad.com](https://www.tinkercad.com) | Disseny 3D (CAD) |
| **Ultimaker Cura** | [ultimaker.com/cura](https://ultimaker.com/software/ultimaker-cura) | Laminat (Slicer) |
| **PrusaSlicer** | [prusaslicer.com](https://www.prusaslicer.com) | Alternativa a Cura |
| **FreeCAD** | [freecad.org](https://www.freecad.org) | CAD avançat (opcional) |
| **Thingiverse** | [thingiverse.com](https://www.thingiverse.com) | Repositori de models 3D |
| **Printables** | [printables.com](https://www.printables.com) | Repositori Prusa |

### Recursos d'aprenentatge

| Recurs | Tipus |
|--------|-------|
| Tutorial TinkerCAD pas a pas (HTML) | Repositori del centre |
| Infografia tècnica de la reixa | Repositori del centre |
| TinkerCAD Tutorials oficials | tinkercad.com/learn |
| Cura documentation | support.ultimaker.com |

### Vocabulari tècnic clau

| Terme | Definició |
|-------|-----------|
| **STL** | Format de fitxer 3D (malla triangular). El "plànol" per a la impressora. |
| **G-code** | Codi d'instruccions que envia la impressora al cap d'impressió. |
| **Boolean** | Operació matemàtica que suma o resta sòlids (Hole = substracció). |
| **Infill** | Percentatge de material sòlid a l'interior de la peça. |
| **Layer height** | Gruix de cada capa d'impressió. Menor = més qualitat i més temps. |
| **Tolerància** | Diferència dimensional prevista per a permetre l'encaix entre peces. |
| **Warping** | Deformació de la peça en refredar per contracció tèrmica. |
| **Stringing** | Fils de plàstic entre zones no connectades. |

---

## Notes del grup

| Sessió | Data | Decisions / Problemes / Solucions |
|--------|------|----------------------------------|
| S1–S3 | | |
| S4–S5 | | |
| S6–S7 | | |
| S8 | | |
| S9–S10 | | |
| S11 | | |
| S12 | | |
| S13–S14 | | |

---

<div align="center">

**🖨️ Departament de Tecnologia · IES · Comunitat Valenciana · Curs 2025-2026**

*Situació d'Aprenentatge: Disseny i Impressió 3D – SA2*

</div>
