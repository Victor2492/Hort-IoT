# 📘 Dossier del Docent: Guia d'Implementació SA5 (Disseny i Muntatge PCB)

Aquesta guia proporciona al professorat l'estructura didàctica pas a pas per a conduir l'alumnat de l'IES Tirant lo Blanc des de la conceptualització teòrica fins a la fabricació d'un prototip funcional. Per a garantir l'accessibilitat de tots els estudiants i atendre la diversitat a l'aula, la seqüenciació aplica principis del Disseny Universal per a l'Aprenentatge (DUA), proporcionant múltiples formes de representació (simuladors digitals, esquemes en paper, pràctica tàctil) i d'expressió (portafolis digital, manipulació física al taller). Aquesta planificació està ajustada per a ser una peça clau dins d'un pràcticum docent de 250 hores, optimitzant el temps de taller i maximitzant l'aprenentatge pràctic.

---

## 1. Seqüenciació Didàctica (Pas a Pas)

### 💻 BLOC 1: Fonaments i Simulació (Sessions 1 - 5)
L'objectiu d'aquest bloc és establir les bases teòriques i validar els dissenys en un entorn segur abans de gastar material fungible.
* **Sessions 1 i 2 (Càlcul Energètic):** Introduir els conceptes de Potència i Energia utilitzant les fórmules $P=V\times I$[cite: 3] i $E=P\times Tiempo$[cite: 3]. L'alumnat ha de dimensionar la placa solar aplicant un marge de seguretat de 1.3 per a l'hivern[cite: 3].
* **Sessió 3 (Control i Potència):** Explicar la funció del transistor com a interruptor per a resoldre el problema de connectar un microcontrolador de baixa potència a una vàlvula de major consum[cite: 5]. Introduir el concepte del díode volant (antiparal·lel) per a protegir el circuit[cite: 5].
* **Sessió 4 (TinkerCAD Bàsic):** Ús del laboratori virtual per a muntar un circuit bàsic (Pila 9V, Resistència, LED)[cite: 6]. Ensenyar l'ús del multímetre[cite: 6]: voltatge es mesura en paral·lel[cite: 6] i corrent/intensitat en sèrie[cite: 6].
* **Sessió 5 (L'Etapa de Regulació):** Muntar virtualment el circuit integrat regulador LM7805[cite: 4, 7] per a passar de 12V a 5V[cite: 7]. Assegurar que els alumnes instal·len els condensadors de filtratge (100 µF i 10 µF)[cite: 7]. Sol·licitar el repte extra on s'ha d'afegir un LED verd a l'eixida de 5V com a indicador d'estat[cite: 7, 8].

### 📝 BLOC 2: Disseny de Prototipatge (Sessió 6)
* **Sessió 6 (Plànol de Pistes):** A l'aula ordinària, repartir paper quadriculat. L'alumnat ha de projectar com situarà els components físics a la placa perforada per a evitar que els cables i les pistes de coure inferiors es creuen. El docent ha de validar aquest plànol ("visat d'enginyeria") abans de permetre'ls passar al taller.

### 🛠️ BLOC 3: Fabricació i Validació (Sessions 7 - 9)
* **Sessions 7 i 8 (Soldadura):** Organitzar l'aula en parelles. Remarcar les normes de seguretat (ús d'ulleres i prevenció davant els 350ºC de la punta del soldador). Seguir la norma de "muntar de baix cap a dalt" (primer resistències i sòcols, després components alts com condensadors i bornes).
* **Sessió 9 (Control de Qualitat):** Aplicar la "Prova de Fum". Abans de col·locar el microcontrolador, el docent supervisa com l'alumnat connecta la font de 12V a la PCB i mesura amb el multímetre que a l'eixida del regulador hi haja exactament 5V.

---

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
