# 📚 Guia del Docent — SA3: Disseny i Impressió 3D

![Assignatura](https://img.shields.io/badge/Assignatura-Tecnologia-006494?style=flat-square)
![Nivell](https://img.shields.io/badge/Nivell-4t%20ESO-0077B6?style=flat-square)
![Sessions](https://img.shields.io/badge/Sessions-14%20%C3%9755%20min-9B59B6?style=flat-square)
![LOMLOE](https://img.shields.io/badge/Marc-LOMLOE%20CV-5D4037?style=flat-square)
![Versió](https://img.shields.io/badge/Versi%C3%B3-1.0-52B788?style=flat-square)

> **Document d'ús intern** del Departament de Tecnologia.
> Conté la planificació completa, configuració del software, gestió d'impressores, rúbriques i orientacions per a la implementació de la SA.

---

## 📋 Taula de continguts

1. [Fitxa resum de la SA](#1-fitxa-resum-de-la-sa)
2. [Vinculació curricular](#2-vinculació-curricular)
3. [Planificació de les 14 sessions](#3-planificació-de-les-14-sessions)
4. [Preparació tècnica prèvia](#4-preparació-tècnica-prèvia)
5. [Gestió de l'aula i les impressores](#5-gestió-de-laula-i-les-impressores)
6. [Orientacions didàctiques per sessió](#6-orientacions-didàctiques-per-sessió)
7. [Instruments d'avaluació i rúbriques](#7-instruments-davaluació-i-rúbriques)
8. [Atenció a la diversitat](#8-atenció-a-la-diversitat)
9. [Resolució de problemes d'impressió](#9-resolució-de-problemes-dimpressió)
10. [Connexions interdisciplinàries](#10-connexions-interdisciplinàries)
11. [Recursos del repositori](#11-recursos-del-repositori)

---

## 1. Fitxa resum de la SA

| Camp | Detall |
|------|--------|
| **Títol** | Disseny i Impressió 3D: Reixes de Drenatge per a l'Hort Escolar |
| **Assignatura** | Tecnologia — 4t ESO |
| **Marc normatiu** | Decret 107/2022, DOGV 5/8/2022 (LOMLOE, CV) |
| **Nre. de sessions** | 14 sessions × 55 min |
| **Temporalització** | 1r trimestre (flexible) |
| **Agrupament** | Individual per al disseny CAD · Parelles per al laminat · Grup per a la validació |
| **Espai** | Aula d'informàtica + Taller (impressores) |
| **SA relacionades** | SA2 (Caixons de fusta) · SA6-7 (Automatització Arduino) |
| **Cost aproximat** | 5–6 € per caixó complet (4 mòduls de PLA) |
| **Prerequisit** | SA2 completada (caixons construïts amb passacables) |

### Producte final esperat

> Un **joc de 4 mòduls de reixa de drenatge** impresos en 3D (PLA), que encaixen entre si i cobreixen la base del caixó de la SA2, amb forats hexagonals (≥40% àrea de drenatge), potes standoff i canal guia per al sensor d'humitat.

---

## 2. Vinculació curricular

### 2.1 Competències específiques (CE)

| CE | Descripció | Pes en aquesta SA |
|----|-----------|:---:|
| **CE1** | Resolució de problemes tecnològics (disseny iteratiu) | Alt |
| **CE2** | Organització i gestió de projectes (planificació, memòria) | Mitjà |
| **CE3** | Fabricació digital (CAD, laminat, impressió 3D FDM) | **Molt alt** |
| **CE4** | Sostenibilitat (PLA bioplàstic, petjada ambiental, economia circular) | Mitjà |
| **CE5** | Tecnologia digital (TinkerCAD, Cura, exportació STL, G-code) | **Alt** |

### 2.2 Criteris d'avaluació principals

```
CA1 → Identifica propietats dels materials d'impressió 3D i justifica la tria del PLA
CA2 → Elabora plànol a mà alçada tècnicament correcte (3 vistes, cotes, escala)
CA3 → Modela una peça 3D funcional amb TinkerCAD (booleanes, patrons)
CA4 → Exporta STL i configura correctament els paràmetres de laminat
CA5 → Avalua el resultat imprès comparant-lo amb les especificacions
CA6 → Documenta el procés de disseny i fabricació en la memòria tècnica
```

### 2.3 Saberes bàsics específicament coberts

```
Disseny i fabricació digital  →  CAD 3D, STL, G-code, FDM
Tecnologia i societat         →  Impressió 3D industrial, democratització fab.
Materials                     →  Termoplàstics (PLA, PETG), propietats, temperatures
Estructures                   →  Rigidesa, patró hexagonal, toleràncies
Representació tècnica         →  Vistes ortogonals, isometria, cotes
Projecte tecnològic           →  Disseny → prototip → prova → iteració
```

### 2.4 Connexió amb la programació (SA3)

> La reixa incorpora el canal guia per al sensor d'humitat que s'usarà a la SA3. Això garanteix que la integració física (reixa) i la integració digital (sensor + Arduino) siguen coherents i planificades des del principi.

---

## 3. Planificació de les 14 sessions

### Visió general per blocs

```
BLOC 1 (S1–S3):   Introducció, anàlisi i disseny a mà    ← Oct/Nov
BLOC 2 (S4–S8):   Disseny 3D amb TinkerCAD              ← Nov/Des
BLOC 3 (S9–S11):  Laminat i impressió                   ← Gen
BLOC 4 (S12–S14): Validació, iteració i avaluació       ← Feb
```

### Taula de sessions detallada

| Sessió | Títol | Activitats principals | Comp. | Recursos |
|--------|-------|----------------------|:-----:|----------|
| **S1** | La impressió 3D i el nostre repte | Presentació SA. Vídeo FDM. Observació impressora. Anàlisi requeriments reixa. Pluja d'idees. | CE1, CE4 | PPTX, impressora per observar |
| **S2** | Anàlisi de requeriments i esbós | Mesures caixó SA1. Disseny a mà alçada (3 vistes, cotes). Càlcul àrea drenatge. | CE1, CE3 | Fitxa disseny a mà, cinta mètrica |
| **S3** | Del 2D al 3D: conceptes | Eixos XYZ, sòlid/buit, toleràncies. Mesura peces impreses amb peu de rei. Introducció visual TinkerCAD. | CE1, CE3 | Peces 3D impreses (referència), peu de rei |
| **S4** | TinkerCAD: interfície i base | Compte TinkerCAD Education. Interfície. Crear base 190×90×4 mm. Guardar projecte. | CE3, CE5 | Ordinadors, tutorial HTML |
| **S5** | Operació boolean: primer forat | Polygon (6 costats), Ø10 mm, Height 6 mm → Hole. Posicionar. Verificar que travessa. | CE3, CE5 | Ordinadors, tutorial HTML |
| **S6** | Patró hexagonal complet | Smart Duplicate per files. Calcular àrea drenatge real. Ajustar si <40%. Agrupar (Ctrl+G). | CE3, CE5 | Ordinadors, calculadora |
| **S7** | Connector, canal sensor i text | Tab macho, ranura femella (+0,2 mm tolerància). Canal sensor. Text en relleu. | CE3, CE5 | Ordinadors, tutorial HTML |
| **S8** | Verificació, exportació STL i peer review | Verificació dimensional. Exportació .STL. Presentació 5 min per grup. Peer review. | CE1, CE2, CE5 | Ordinadors, fitxa verificació |
| **S9** | Introducció al laminat (Cura) | Instal·lar/obrir Cura. Importar STL. Paràmetres bàsics. Vista de capes. | CE3, CE5 | Ordinadors amb Cura instal·lat |
| **S10** | Configuració i enviament | Configurar tots els paràmetres. Estimar temps i pes. Exportar G-code. Torn d'impressió. | CE2, CE3, CE5 | Impressora 3D, SD/USB |
| **S11** | Monitoratge i post-processament | Observació per torns. Detectar problemes. Retirar peça. Llimar. Mesurar. | CE1, CE3 | Peu de rei, llimes, espàtula |
| **S12** | Proves funcionals i iteració | Instal·lar al caixó. 5 proves de validació. Identificar problemes. Actualitzar TinkerCAD si cal. | CE1, CE2 | Caixons SA1, regadora, sensor |
| **S13** | Memòria tècnica | Redacció memòria. Captures TinkerCAD i Cura. Taula disseny vs. real. Pressupost. | CE2, CE5 | Ordinadors, plantilla memòria |
| **S14** | Presentació final i avaluació | Presentació oral 5 min + 2 min preguntes. Coavaluació. Autoavaluació. Tancament SA. | CE1, CE2, CE4, CE5 | Rúbriques, projector |

---

## 4. Preparació tècnica prèvia

### ✅ Llista de tasques abans de la S1

**TinkerCAD**:
- [ ] Crear compte de docent a [tinkercad.com/about/education](https://tinkercad.com/about/education)
- [ ] Crear una "Classe" i afegir tots els alumnes (o generar codis d'accés)
- [ ] Preparar un projecte de plantilla (base 190×90×4 mm ja creada) per a compartir amb l'alumnat que vagi endarrerit
- [ ] Provar que el compte de la classe és accessible des dels ordinadors del centre

**Ultimaker Cura**:
- [ ] Instal·lar Cura a tots els ordinadors de l'aula (versió estable recomanada)
- [ ] Configurar el perfil de la impressora del centre al Cura
- [ ] Preparar un perfil `.curaprofile` pre-configurat (PLA, 0,20 mm, 20% Gyroid, 205°C/55°C)
- [ ] Verificar que els ordinadors poden exportar fitxers al SD/USB de la impressora

**Impressora 3D**:
- [ ] Verificar estat de la impressora: broqueta, llit, tensió de corretges
- [ ] Calibrar el Z-offset (distància broqueta-llit)
- [ ] Verificar que hi ha PLA suficient (mínim 500 g per a la classe)
- [ ] Fer una impressió de prova (cub 20×20×20 mm) per a verificar el funcionament

**Materials de suport**:
- [ ] Imprimir fitxes de disseny a mà (1 per alumne/a)
- [ ] Imprimir rúbriques (1 per grup)
- [ ] Preparar peces 3D de referència (almenys 2 mòduls impresos prèviament) per a la S3
- [ ] Tenir disponible l'STL de referència per a grups que no acabin el disseny a temps

### Configuració de TinkerCAD Education

```
1. Ves a tinkercad.com → Log In → Educators
2. Crea una nova Classe (New Class)
3. Afig estudiants: pot ser per email, Google, o "Nickname" (recomanat per a menors)
4. Comparteix el codi de classe amb l'alumnat
5. Des del tauler docent pots veure tots els dissenys en temps real
6. Per a compartir la plantilla: obre el teu disseny base → Share → "Copy link" → envia a l'alumnat
```

### Perfil de Cura recomanat (exportable)

```json
{
  "layer_height": 0.20,
  "infill_sparse_density": 20,
  "infill_pattern": "gyroid",
  "wall_line_count": 3,
  "material_print_temperature": 205,
  "material_bed_temperature": 55,
  "speed_print": 50,
  "support_enable": false,
  "adhesion_type": "skirt",
  "skirt_line_count": 3
}
```

---

## 5. Gestió de l'aula i les impressores

### Planificació del temps d'impressió

> ⚠️ **Problema clau**: una sola impressora no pot imprimir 6–7 grups en 3 sessions de 55 min. Cal gestionar els torns i aprofitar el temps fora d'horari lectiu.

**Estratègia recomanada per a 1 impressora**:

```
Sessió S10 (55 min):
  → Grup 1: envia el G-code
  → Impressió grup 1 comença (2h 45min)

Entre sessions (esbarjo, pati, migdia, deures):
  → La impressora segueix sola (supervisió docent o alumne voluntari)
  → Quan acaba → retirar peça → carregar grup 2

Sessió S11 (55 min):
  → Grups 2 i 3 envien G-code
  → Inspeccionar les peces ja impreses
  → Monitorar la impressió del grup 2

Setmana posterior (fora d'horari):
  → Completar impressions dels grups 4, 5, 6, 7
```

**Si hi ha 2 impressores**: reduir el temps total a la meitat.

**Si no hi ha impressora al centre**:

```
Alternativa A: Servei d'impressió en línia
  → Craftcloud3D: craftcloud3d.com (compara preus de múltiples proveïdors)
  → PCBWay: pcbway.com (PLA, enviament ~1 setmana)
  → Cost estimat: ~3–5 € per mòdul + enviament

Alternativa B: Biblioteca pública o FabLab
  → Molts municipis valencians tenen Fab Lab amb impressores disponibles
  → Contactar amb l'Ajuntament o la biblioteca municipal

Alternativa C: STL de referència pre-imprès
  → El docent imprimeix els 4 mòduls amb antelació com a pla de contingència
  → L'alumnat segueix el procés complet de disseny i laminat sense imprimir
```

### Distribució de l'espai

```
┌────────────────────────────────────────────────────────────┐
│  AULA D'INFORMÀTICA                                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Grups 1-2  │  │  Grups 3-4  │  │  Grups 5-6  │        │
│  │  TinkerCAD  │  │  TinkerCAD  │  │  TinkerCAD  │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                            │
│  ZONA IMPRESSORA (taller o racó de l'aula):                │
│  ┌──────────┐                                              │
│  │Impressora│  ← Torn de grups. 1 alumne/a de guardia.    │
│  └──────────┘                                              │
└────────────────────────────────────────────────────────────┘
```

### Gestió de fitxers (recomanació)

```
Estructura de carpetes al servidor / Google Drive:
SA2-Disseny3D/
├── STL-alumnat/
│   ├── GrupA_Reixa.stl
│   ├── GrupB_Reixa.stl
│   └── ...
├── GCODE-impressio/
│   ├── GrupA_Reixa.gcode
│   └── ...
├── Plantilla_Base.stl          ← Per a grups que no acaben a temps
└── Perfil_Cura_PLA.curaprofile ← Perfil pre-configurat
```

---

## 6. Orientacions didàctiques per sessió

### S1 | La impressió 3D i el nostre repte

**Objectiu clau**: despertar la motivació mostrant el "producte final" des del principi.

**Dinàmica recomanada**:
1. Porta a classe 2 mòduls de reixa ja impresos (o el joc complet instal·lat al caixó)
2. Deixa que l'alumnat els toque, mesure i examine
3. "Com creieu que s'ha fet això?" → debat lliure
4. Mostra el vídeo FDM (5 min): cerca "how FDM 3D printing works animation" a YouTube
5. Presenta el repte: dissenyar i imprimir la reixa per al caixó de la SA1

> 💡 **L'alumnat que ja ha fet la SA1 estarà molt motivat** quan vegi que el producte va destinat al seu propi caixó. Aprofita aquesta motivació.

### S2 | Anàlisi de requeriments i disseny a mà

**Error comú**: l'alumnat llença el plànol a mà quan obre TinkerCAD i no el consulta mai més.

**Estratègia**: el plànol a mà s'avalua (15% de la nota) i s'ha de lliurar FÍSICAMENT al docent a la fi de S2, abans de poder obrir TinkerCAD. Això garanteix que el pensen de debò.

**Verificació del plànol (docent)**:
```
Revisa ràpidament (2 min per alumne):
  ✓ Té 3 vistes
  ✓ Té cotes (mm)
  ✓ Àrea drenatge ≥ 40% calculada
  ✓ Escala indicada
Si passa → signatura del docent al plànol → autoritzat per a TinkerCAD
Si falla → tornar a fer en 5 min (identificar l'error i corregir-lo)
```

### S4–S5 | TinkerCAD primeres sessions

**Gestió del ritme**:
- L'alumnat aprèn a ritmes molt diferents. TinkerCAD té una corba d'aprenentatge suau però real.
- Prepara 3 nivells de tasca per a la mateixa sessió:

```
Nivell 1 (mínim): crear la base + 1 hexàgon forat correcte
Nivell 2 (estàndard): base + patró complet de forats + agrupar
Nivell 3 (avançat): tot l'anterior + potes + text personalitzat
```

**Truc per al Smart Duplicate** (error freqüent):
```
Error comú: l'alumnat fa Ctrl+D però no es desplaça IMMEDIATAMENT.
Solució: demostrar-ho pas a pas amb el projector:
  1. Selecciona l'objecte
  2. Ctrl+D (queda seleccionat el duplicat)
  3. IMMEDIATAMENT (sense clicar res) → canvia el valor X al panell
  4. Torna a Ctrl+D → vegem el desplaçament automàtic
```

### S6 | Patró hexagonal i verificació de l'àrea

> 🎯 **Sessió crítica**: molts alumnes obtenen un patró visualment bonic però amb <40% d'àrea de drenatge.

**Activitat de verificació col·lectiva**:
```
1. Cada grup compta el nombre de forats del seu disseny
2. Calcula: nº forats × 86,6 mm² / 17.100 mm² × 100 = %
3. Si < 40% → discutir en grup: com augmentar? (reduir separació o augmentar Ø)
4. Si ≥ 40% → verificar que la paret mínima segueix sent ≥ 2 mm
```

### S8 | Peer review (revisió entre grups)

**Estructura del peer review** (20 min):
```
1. Cada grup presenta el seu disseny TinkerCAD (5 min màxim, projecció)
2. Els altres 2 grups del seu torn avaluen amb una fitxa:
   - Dimensions correctes? (SÍ/NO + observació)
   - Forats ≥ 40%? (SÍ/NO + valor calculat)
   - Connector present? (SÍ/NO)
   - Algun problema evident? (descripció)
3. El grup receptor ha d'actualitzar el model si hi ha errors crítics
```

### S12 | Proves funcionals

**Les 5 proves de validació** (fa el docent o l'alumnat?):
- Proves 1–3 (encaix, connector, dimensió): l'alumnat de forma autònoma
- Prova 4 (aigua): supervisió docent (risc de mullat a l'aula)
- Prova 5 (pes substrat): demostració davant del grup (pedagògicament potent)

---

## 7. Instruments d'avaluació i rúbriques

### 7.1 Distribució del pes

| Instrument | Pes | Moment | Qui avalua |
|-----------|:---:|--------|-----------|
| Plànol a mà alçada (3 vistes, cotes, àrea) | 15% | Final S2 | Docent |
| Model 3D TinkerCAD | 35% | S8 | Docent + peer review |
| Laminat i resultat imprès | 20% | S11 | Docent |
| Memòria tècnica | 15% | S13 | Docent |
| Presentació oral | 10% | S14 | Docent + coavaluació |
| Actitud i autonomia | 5% | Continu | Docent |

### 7.2 Rúbrica del model 3D TinkerCAD (35%)

<details>
<summary>Desplegar rúbrica completa</summary>

| Criteri | Excel·lent (9–10) | Notable (7–8) | Suficient (5–6) | Insuficient (<5) |
|---------|:-----------------:|:-------------:|:---------------:|:----------------:|
| **Dimensions** (cotes del plànol) | Totes ±0,5 mm del plànol. | ±1 mm. Bona correlació. | ±2 mm. Desviacions justificades. | Molt allunyades o no funcional. |
| **Patró de drenatge** (forats, àrea ≥40%) | Patró hexagonal correcte. >42% àrea. Parets ≥2 mm. | Patró present. 38–42% àrea. | 30–38% àrea. Patró irregular. | <30% o sense forats. |
| **Exportació STL** | STL net, cap error a Cura. Paràmetres òptims. | STL correcte. 1–2 errors menors resolts. | STL exportat amb errors. Params parcials. | STL absent o no imprimible. |
| **Qualitat d'impressió** | Mesures reals ±0,5 mm. Cap defecte estructural. | ±1 mm. Defectes menors (baves). | Funcional amb defectes visibles. | No impresa o no funcional. |

</details>

### 7.3 Rúbrica del plànol a mà alçada (15%)

<details>
<summary>Desplegar rúbrica</summary>

| Criteri | Excel·lent | Notable | Suficient | Insuficient |
|---------|:---------:|:-------:|:---------:|:-----------:|
| **3 vistes** (planta, alçat, perfil) | 3 vistes completes, proporcions correctes. | 2–3 vistes, alguna mancança menor. | 2 vistes bàsiques presents. | 1 vista o absents. |
| **Cotes** (mm, completes) | Totes les cotes indicades. Escala correcta. | La majoria de cotes. Escala indicada. | Cotes parcials. Escala absent. | Sense cotes. |
| **Càlcul àrea drenatge** | Càlcul correcte, ≥40%, justificació. | Càlcul present, lleu error. | Càlcul present però incorrecte. | Sense càlcul. |
| **Rètol** | Nom, grup, data, escala, títol. | Majoria d'elements. | Rètol parcial. | Absent. |

</details>

### 7.4 Fitxa de peer review (S8)

```markdown
## Fitxa Peer Review — TinkerCAD

Grup revisor: _______________  Grup revisat: _______________

| Criteri | Valoració (1–4) | Observació |
|---------|:---:|---|
| Dimensions aproximades correctes | | |
| Forats hexagonals presents i regulars | | |
| Àrea de drenatge ≥ 40% (indicar valor: ___%) | | |
| Connector present (tab + ranura) | | |
| Text personalitzat present | | |
| Algun problema crític? (descriu-lo) | | |

Suggeriment de millora principal:
> _______________________________________________________________
```

### 7.5 Full d'observació del docent

```markdown
## Full d'observació — SA2 Disseny 3D

Sessió: ___  Data: ___

| Alumne/a | Autonomia (1–4) | Tècnica CAD (1–4) | Actitud (1–4) | Obs. |
|----------|:---:|:---:|:---:|------|
| | | | | |
| | | | | |
| | | | | |
```

---

## 8. Atenció a la diversitat

### Alumnat amb necessitats específiques

| Situació | Estratègia concreta |
|----------|-------------------|
| **Dificultat amb el CAD** | Oferir la plantilla base (caixa ja creada) → l'alumne/a fa forats i personalització |
| **Alumnat d'altes capacitats** | Disseny paramètric (FreeCAD), connector snapping, canal sensor integrat, anàlisi de patrons alternatius |
| **Alumnat amb visió reduïda** | Augmentar zoom al 150%. Usar dreceres de teclat en lloc de ratolí. |
| **Alumnat amb dificultat motriu** | Tablet amb TinkerCAD + llapis tàctil. Ratolí amb velocitat reduïda. |
| **Alumnat que no acaba a temps** | Pla de contingència en 3 nivells (veure sota) |

### Pla de contingència per a grups que no acaben

```
Nivell 1 — Disseny incomplet a S8:
  → Docent comparteix la plantilla base (STL estàndard)
  → L'alumne/a fa el laminat i la impressió igualment
  → Nota màxima del model: 6/10 (suficient, sense penalització per causa justificada)

Nivell 2 — STL no exportable a S10:
  → Docent imprimeix el STL de referència per al grup
  → L'alumne/a fa les proves funcionals i la memòria
  → Documentar la causa en la memòria (reflexió metacognitiva)

Nivell 3 — Impressora no disponible:
  → Ús del servei d'impressió en línia (Craftcloud3D)
  → Comanda col·lectiva per a reduir costos d'enviament
  → Termini: 1 setmana
```

### Alumnat avançat: reptes d'ampliació

```
Repte A: Disseny paramètric
  → Usar FreeCAD amb Spreadsheet per crear la reixa amb paràmetres variables
  → Documentar com canviar Ø forats o dimensions sense redibuixar

Repte B: Anàlisi de patrons
  → Imprimir mostres 50×50 mm amb patró hexagonal, quadrat i giroscòpic
  → Mesurar resistència a pressió amb dinamòmetre
  → Comparar àrea de drenatge de cada patró

Repte C: Suport per al sensor integrat
  → Dissenyar un clip imprès en 3D per a fixar el sensor al canal
  → Ha d'encaixar en el passacable del caixó de la SA1

Repte D: Sostenibilitat
  → Calcular la petjada de carboni del PLA vs. reixa equivalent de PE
  → Presentar l'anàlisi com a part de la memòria
```

---

## 9. Resolució de problemes d'impressió

### Taula de problemes comuns

| Problema | Causa més probable | Solució |
|---------|-------------------|---------|
| **Warping** (cantons s'aixequen) | Temperatura llit massa baixa | Augmentar llit +5°C. Activar Brim a Cura. Netejar llit amb IPA. |
| **Stringing** (fils entre forats) | Temperatura broqueta alta + retracció insuficient | Baixar temperatura -5°C. Augmentar retracció 0,5 mm a Cura. |
| **Under-extrusion** (línies febles) | Broqueta parcialment obstruïda | Fer un "cold pull". Purgar 10 cm de filament. |
| **Layer shifting** (capes desplaçades) | Corretges fluixes o velocitat massa alta | Tensar corretges. Reduir velocitat a 40 mm/s. |
| **Spaghetti** (peça cau del llit) | Adhesió insuficient capa 1 | Recalibrar Z-offset. Activar Brim. Netejar llit. |
| **Primera capa no s'adhereix** | Z-offset massa alt | Baixar Z-offset 0,05 mm. Revisar calibratge. |
| **Forats deformats** | Temperatura massa alta | Baixar broqueta -5°C. Activar "cooling" al 100%. |

### Protocol d'aturada d'emergència

```
Si la impressora fa sorolls anormals o fum:
  1. Premer el botó d'emergència (o desconnectar l'alimentació)
  2. NO intentar retirar la peça calenta amb les mans
  3. Esperar 5 minuts que refredi
  4. Avisar el/la docent
  5. Registrar l'incident
```

### Manteniment bàsic de la impressora (docent)

```
Freqüència: cada 20 hores d'impressió

✓ Netejar el llit amb IPA 70%
✓ Verificar el nivell del llit (auto-leveling si disponible)
✓ Comprovar el tensionat de les corretges
✓ Purgar 5 cm de filament per verificar el flux
✓ Verificar que el ventilador de la broqueta funciona
✓ Comprovar el nivell de filament al bobinador
```

---

## 10. Connexions interdisciplinàries

| Assignatura | Connexió concreta | Sessió |
|-------------|------------------|--------|
| **Matemàtiques** | Geometria hexagonal (àrea polígon regular), càlcul de percentatges, toleràncies | S2, S6 |
| **Física** | Propietats mecàniques dels polímers, temperatura de fusió, expansió tèrmica | S1, S3 |
| **Química** | Polímers: PLA (àcid polilàctic), biodegradabilitat, cadenes moleculars | S1 |
| **Biologia / CCNN** | Porositat del sòl, drenatge òptim per a les arrels, SA1 compost | S12 |
| **Dibuix Tècnic** | Vistes ortogonals, isometria, acotació normalitzada ISO | S2–S3 |
| **Estadística** | Comparació mesures disseny vs. real (desviació, precisió vs. exactitud) | S11–S12 |
| **Llengua / Com.** | Memòria tècnica, vocabulari específic, presentació oral estructurada | S13–S14 |

### Proposta de col·laboració amb Física/Química

```
Sessió extra conjunta (opcional, 30 min):
  → Física/Química: explicar la cadena molecular del PLA
  → Tecnologia: mostrar com es fon i es solidifica el filament
  → Activitat: mesurar la contracció d'un cub imprès (teòric vs. real)
  → Connexió: per a entendre per a que serveix la tolerància de +0,2 mm
```

---

## 11. Recursos del repositori

### Arxius d'aquest repositori

```
SA3-Disseny3D/
├── DOSSIER_ALUMNAT_SA3_Disseny3D.md       ← Dossier de l'alumnat
├── GUIA_DOCENT_SA2_Disseny3D.md           ← Aquesta guia
├── SA_Disseny3D_Impressio_Reixes.docx     ← SA completa (14 sessions)
├── Presentacio_3D_Impressio_Reixes.pptx   ← PowerPoint de classe
├── Tutorial_TinkerCAD_Pas_a_Pas.html      ← Tutorial interactiu (mockups SVG)
├── Fitxa_Disseny_Ma_Alcada_Reixa3D.html   ← Fitxa imprimible (paper mm + càlculs)
├── stl-referencia/
│   └── Reixa_modul_190x90_referencia.stl  ← STL de backup per al docent
└── cura-profiles/
    └── PLA_Reixa_0.20mm_20infill.curaprofile
```

### Estructura recomanada del repositori GitHub del centre

```
hort-escolar-tecnologic/
├── README.md                    ← Presentació general del projecte
├── SA2-Caixons/
│   ├── DOSSIER_ALUMNAT_SA2_Caixons.md
│   ├── GUIA_DOCENT_SA2_Caixons.md
│   └── recursos/
├── SA3-Disseny3D/
│   ├── DOSSIER_ALUMNAT_SA3_Disseny3D.md
│   ├── GUIA_DOCENT_SA3_Disseny3D.md
│   └── recursos/
├── SA6-Automatitzacio/          
│   └── ...
└── docs/
    └── fotos-hort/
```

### README.md recomanat per al repositori

```markdown
# 🌱 Hort Escolar Tecnològic — IES Tirant Lo Blanc

Projecte interdisciplinari de Tecnologia 4t ESO.
Comunitat Valenciana | LOMLOE | Curs 2024–2025

## Situacions d'Aprenentatge

| SA | Títol | Sessions | Estat |
|----|-------|:---:|:---:|
| SA2 | Caixons de Fusta Reciclada | 12 | ✅ Activa |
| SA3 | Disseny i Impressió 3D | 14 | ✅ Activa |


## Connexió entre SA

SA2 (caixó físic) → SA3 (reixa de drenatge 3D) → SA6 (sensors + reg automàtic)

## Llicència
CC BY-SA 4.0 — Ús lliure amb atribució per a fins educatius.
```

### Recursos externs

| Recurs | URL | Per a qui |
|--------|-----|---------|
| TinkerCAD Education | tinkercad.com/about/education | Docent + alumnat |
| Ultimaker Cura | ultimaker.com/software/ultimaker-cura | Docent + alumnat |
| PrusaSlicer | prusaslicer.com | Docent (alternativa) |
| Thingiverse | thingiverse.com | Alumnat (inspiració) |
| Craftcloud3D | craftcloud3d.com | Docent (impressió externa) |
| TinkerCAD Tutorials | tinkercad.com/learn | Alumnat |

### Historial de versions

| Versió | Data | Canvis |
|--------|------|--------|
| 1.0 | Set. 2025 | Versió inicial. 14 sessions. |

---

<div align="center">

**📚 Guia del Docent · Departament de Tecnologia**
**Situació d'Aprenentatge: Disseny i Impressió 3D · SA3**
*Document d'ús intern. Curs 2025–2026*

</div>
