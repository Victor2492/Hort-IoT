# 📘 Dossier del Docent: Guia d'Implementació SA5 (Disseny i Muntatge PCB)

Aquesta guia proporciona al professorat l'estructura didàctica pas a pas per a conduir l'alumnat de l'IES Tirant lo Blanc des de la conceptualització teòrica fins a la fabricació d'un prototip funcional. Per a garantir l'accessibilitat de tots els estudiants i atendre la diversitat a l'aula, la seqüenciació aplica principis del Disseny Universal per a l'Aprenentatge (DUA), proporcionant múltiples formes de representació (simuladors digitals, esquemes en paper, pràctica tàctil) i d'expressió (portafolis digital, manipulació física al taller). Aquesta planificació està ajustada per a ser una peça clau dins d'un pràcticum docent de 250 hores, optimitzant el temps de taller i maximitzant l'aprenentatge pràctic.

---

## 📖 Context de la Situació d'Aprenentatge

Aquesta Situació d'Aprenentatge (SA) actua com el "pont" entre la teoria dels circuits elèctrics i electrònics i l'aplicació real a l'Hort IoT. L'alumnat ja sap com programar un microcontrolador (o ho farà pròximament) i necessita una interfície física de potència per a poder connectar el cervell de 5V (Microcontrolador) als músculs de 12V (Placa Solar i Electrovàlvula).

* **Matèria:** Tecnologia (4t ESO)
* **Durada estimada:** 13 Sessions
* **Agrupament recomanat:** Parelles al taller (Rol de Muntador/a i Rol de Supervisor/a, alternant-se)
* **Espais:** Aula Ordinària, Aula Informàtica, Taller de Tecnologia, Hort

---

## 🎯 Objectius Pedagògics

* **Transició Teoria-Pràctica:** Passar del càlcul de la Llei d'Ohm sobre el paper al disseny en simulador i, finalment, a la soldadura real.
* **Gestió de Potència:** Comprendre com aïllar i regular diferents voltatges en un mateix circuit (12V per a potència vs. 5V per a control).
* **Resolució de Problemes (*Troubleshooting*):** Fomentar l'autonomia de l'alumnat en el diagnòstic d'errors utilitzant el multímetre abans d'avisar el docent.

---

## 🛠️ Necessitats de Material i Maquinari

Per a dur a terme aquesta SA amb èxit, necessitareu el següent material al taller **per cada parella**:

- [x] `1x` Placa PCB perforada (prototipatge).
- [x] `1x` Regulador de tensió (`LM7805` o mòdul *step-down*).
- [x] `1x` Transistor (ex. `TIP120` o MOSFET) per controlar l'electrovàlvula.
- [x] Díodes de protecció (ex. `1N4007`) i resistències adients.
- [x] Sòcols per al microcontrolador (per no soldar-lo directament).
- [x] Equip de soldadura: Soldador de llapis (tipus JBC), estany de bona qualitat i suport.
- [x] Multímetre (mínim un per parella o grup).

> [!NOTE]
> **Recomanat:** Una font d'alimentació de laboratori regulable per a la Sessió 11 (Control de Qualitat).

"""
# 🚀 Desenvolupament de les Sessions (Consells per al Docent)

El projecte s'estructura en **3 blocs de treball consecutius més un bloc de tancament**. Cada pas s'ha de registrar a la *Memòria d'Enginyeria* de l'alumnat.

---

## 📘 BLOC 1: Entendre i Simular (Càlculs i Laboratori Virtual)
L'objectiu d'este bloc és resoldre les matemàtiques del circuit i testejar el disseny en entorns digitals assegurant que no es faça malbé cap component real.

### 🗓️ Sessions 1 i 2: Energia i Dimensionament
* **Teoria:** Diferenciació entre Potència ($P = V \times I$) i Energia total acumulada ($E = P \times \text{Temps}$).
* **Pràctica:** Calcularem el consum diari de l'electrovàlvula i el microcontrolador per a triar la placa solar adequada, aplicant un coeficient de seguretat de `1.3` per als dies ennuvolats d'hivern.

### 🗓️ Sessió 3: Control i Potència
* **Conceptes:** Resolució del problema *"David vs Goliat"*: com un microcontrolador de 5V pot obrir una vàlvula de 12V utilitzant un **Transistor** com a interruptor elèctric i un **Díode de protecció** per a evitar el contracop inductiu.

---

## 📐 BLOC 2: Disseny Físic i Planificació de Pistes
Passem del món abstracte a la planificació geomètrica de la placa física.

### 🗓️ Sessió 4: Laboratori Virtual (TinkerCAD)
* **Aprenentatge:** Muntatge de circuits bàsics utilitzant la **Llei d'Ohm** per a protegir un LED calculant la seua resistència necessària.
* **Instrumentació:** Ús del multímetre virtual per a mesurar voltatge en paral·lel i corrent en sèrie.

### 🗓️ Sessió 5: Domant l'Energia (De 12V a 5V)
* **Simulació:** Etapa de regulació utilitzant el component `LM7805` acompanyat de condensadors de filtratge de `100 µF` i `10 µF` per a netejar el soroll elèctric.
* **Repte Extra:** Muntar un LED d'estat a l'eixida de 5V.

### 🗓️ Sessió 6: Disseny de la PCB de Prototipatge
* **Teoria:** Estudi de la distribució espacial dels components sobre la placa perforada.
* **Disseny:** L'alumnat dibuixarà l'esquema de les pistes inferiors (*wiring*) sobre paper quadriculat per a traçar els camins de coure evitant curtcircuits.

> [!TIP]
> **Consell docent:** Reviseu aquests dissenys de pistes sobre paper abans de permetre'ls entrar al taller i començar a soldar.

---

## 🛠️ BLOC 3: Fabricació Real i Control de Qualitat al Taller
Mans a l'obra. Treballarem en parelles alternant els rols de **Muntador/a** i **Supervisor/a**.

### 🗓️ Sessions 7 i 8: Soldadura I (Perfil Baix)
* **Seguretat:** Formació en seguretat, ergonomia i tècnica de soldadura tova.
* **Pràctica:** Soldadura dels components que van més apegats a la placa (resistències, díodes i el sòcol del xip).

> [!WARNING]
> **Consell docent:** Exigiu el compliment estricte de la normativa de seguretat del taller i l'ús obligatori d'ulleres de protecció durant tota la sessió.

### 🗓️ Sessions 9 i 10: Soldadura II (Potència)
* **Pràctica:** Soldadura dels components més alts (regulador, transistor, condensadors i bornes de connexió) i creació de les pistes d'estany unint els punts a la part inferior.

### 🗓️ Sessió 11: Control de Qualitat (QC)
* **Fases de verificació:**
  1. Inspecció visual detallada de les soldadures.
  2. Prova de continuïtat sonora amb el multímetre per a detectar possibles curtcircuits.
  3. **"Prova de Fum":** Alimentar la placa a 12V i mesurar exactament 5V a l'eixida de regulació *abans* de connectar el microcontrolador per evitar avaries.

---

## 🌾 BLOC 4: Tancament i Posada en Servei (Aula / Hort)
Avaluem el que hem fet i reflexionem sobre el nostre impacte.

### 🗓️ Sessions 12 i 13: Revisió i Ètica Tecnològica
* **Integració:** Si les plaques funcionen correctament, realitzarem el muntatge final del sistema d'automatització directament a l'hort.
* **Reflexió:** Debat final sobre els residus electrònics (*E-waste*) i l'obsolescència programada.
* **Lliurament:** Entrega final de la *Memòria d'Enginyeria / Portfolio* finalitzat.

> [!TIP]
> **Consell docent:** Si alguna placa ha fallat en el Control de Qualitat de la sessió 11, utilitzeu aquestes sessions finals amb eixos grups per fer *debugging*, diagnòstic d'errors i recuperació del circuit.
"""

---

## ⚖️ Avaluació i Qualificació

L'avaluació d'esta SA no es farà mitjançant exàmens tradicionals, sinó mitjançant l'assoliment de les **Competències Específiques (CE)** de la matèria. La nota reflectirà la capacitat d'analitzar, dissenyar, construir i treballar amb seguretat.

### Taula de Ponderació i Instruments d'Avaluació

| Competències Específiques (CE) | Pes | Què s'avalua? (Criteris) | Instruments d'Avaluació |
| :--- | :---: | :--- | :--- |
| **CE 1.1, 1.2 i 1.4**<br>*(Anàlisi i desenvolupament de solucions)* | **40%** | Resolució de càlculs d'energia ($E=P \times \text{Temps}$), dimensionament correcte del panell solar, càlcul de resistències i validació del circuit de 12V a 5V al simulador. | **1.** Activitats virtuals: Entregues de les captures de simulació a TinkerCAD i el repte extra.<br>**2.** Memòria d'Enginyeria: Documentació dels càlculs matemàtics justificats. |
| **CE 2.1**<br>*(Disseny, planificació i creació de prototips)* | **40%** | Planificació espacial sobre plànol de la PCB. Execució material del prototip físic amb soldadures funcionals, netes i sense curtcircuits que supere la prova de control de qualitat (5V estables a l'eixida). | **1.** Memòria d'Enginyeria: Plànol de pistes de la Sessió 6.<br>**2.** Observació del Producte: Avaluació directa de la PCB soldada i el seu funcionament real. |
| **CE 6.5**<br>*(Seguretat, sostenibilitat i treball col·laboratiu)* | **20%** | Ús estricte dels EPIs (ulleres de protecció), gestió correcta del soldador (350ºC), manteniment de l'orde al taller, i bona coordinació en parella (rols de muntador i supervisor). | **1.** Taula de Cotejo (*Checklist*) al Taller: Observació directa del docent durant les sessions 7, 8 i 9 mesurant actitud, seguretat i neteja. |

## 2. Instruments d'Avaluació

### A. Rúbrica d'Avaluació: Memòria d'Enginyeria i Producte (CE 1.1, 1.2, 1.4 i 2.1)
Aquest instrument s'utilitzarà per a qualificar el dossier digital entregat per l'alumnat (captures de simulació, càlculs) i el resultat de la placa física. Ponderació suggerida: 80% de la nota final de la SA.

| Criteri d'Avaluació (CE) | Excel·lent (9-10) | Assolit (7-8) | En Procés (5-6) | No Assolit (<5) |
| :--- | :--- | :--- | :--- | :--- |
| **Càlculs i Dimensionament (CE 1.1, 1.2)** | Aplica correctament les fórmules, inclou marges de seguretat, entén la diferència entre potència i energia, i ho justifica claredat. | Realitza els càlculs correctament però la justificació o la presentació de les unitats té xicotetes errades. | Fa els càlculs amb ajuda, presentant errades en l'aplicació de fórmules o en l'elecció de les unitats ($W$ vs $Wh$). | No presenta els càlculs o aquests són completament erronis i no s'ajusten a la realitat del sistema. |
| **Simulació i Entorn Digital (CE 1.4)** | Supera totes les simulacions en TinkerCAD, inclòs el repte extra del LED verd a 5V. Les captures estan ben documentades. | Completa les simulacions bàsiques correctament i usa el multímetre bé (sèrie/paral·lel), però falla en el repte extra. | Fa els circuits virtuals però comet errades freqüents de connexió que cremarien els components (no empra bé la llei d'Ohm). | És incapaç de realitzar muntatges funcionals al simulador ni utilitzar el multímetre virtual correctament. |
| **Disseny del Plànol (CE 2.1)** | El plànol en paper quadriculat és clar, optimitza l'espai i les pistes estan dissenyades sense encreuaments de manera totalment lògica. | El plànol és funcional i útil, tot i que la distribució dels components podria estar més optimitzada per al muntatge real. | L'esquema presenta inconsistències menors, forçant encreuaments innecessaris que dificulten la soldadura posterior. | No hi ha disseny previ o l'esquema plantejat provoca curtcircuits evidents que invaliden el funcionament. |
| **Qualitat de la PCB Física (CE 2.1)** | La placa passa el Control de Qualitat a la primera (5V estables). Soldadures brillants, fermes i distribució neta. | La placa funciona i lliura 5V, però estèticament les pistes tenen excés d'estany o els components estan lleugerament torts. | El circuit requereix la intervenció del docent per a arreglar soldadures fredes o xicotets curtcircuits per a funcionar. | La placa no funciona, presenta curtcircuits greus o els components clau s'han soldat amb polaritat inversa. |

### B. Llista de Cotejo: Observació al Taller i Seguretat (CE 6.5)
Aquest instrument s'aplica per observació directa durant les Sessions 7, 8 i 9. S'avaluen procediments, actituts i seguretat laboral. Ponderació suggerida: 20% de la nota final.

**Alumne/a a avaluar:** ________________________________________

| Criteri d'Avaluació (CE 6.5) | Sí (1p) | No (0p) | Observacions del Docent |
| :--- | :---: | :---: | :--- |
| **EPIs:** Utilitza les ulleres de seguretat en tot moment mentre manipula el soldador o les alicates de tall. | | | |
| **Eines:** Deixa correctament el soldador al seu suport de seguretat, evitant recolzar-lo sobre la taula. | | | |
| **Ordre:** Manté la zona de treball desbuidada (sense abrics, llibretes sobrants o motxilles pel mig). | | | |
| **Coordinació:** Treballa eficientment en parella, alternant-se el rol de muntador/supervisor de manera equitativa. | | | |
| **Manteniment:** Neteja la punta del soldador amb l'esponja humida o llana d'acer abans de cada ús. | | | |
| **Autonomia:** Recorre al seu plànol i als seus apunts per a resoldre dubtes abans de cridar immediatament el docent. | | | |
| **Polaritat:** Comprova acuradament la polaritat dels components (franja del condensador/díode) abans de soldar. | | | |
| **Diagnòstic (QC):** Segueix correctament l'ordre del Control de Qualitat (Inspecció visual -> Xiulet continuïtat -> Voltatge). | | | |
| **Higiene i Tancament:** Apaga la regleta i recull correctament els cables, eines i estany als 5 minuts finals de la sessió. | | | |
| **Sostenibilitat:** Gestiona de manera correcta els residus generats (restes de potes, fil d'aram o aïllant pelat). | | | |

* **Puntuació total Taller:** ___ / 10 punts.
