# Guia docent - Bloc 3: Automatització i programació (El cervell IoT)
## Situació d'aprenentatge 4 (Expansió): L'hivernacle (Hort IoT)

Aquest tercer i últim bloc converteix el nostre hivernacle mecànic en un vertader dispositiu IoT. L'objectiu és substituir l'acció humana (prémer la xeringa amb la mà) per un sistema electrònic autònom basat en plaques controladores (tipus Arduino, Micro:bit o similar), sensors i actuadors.

---

### 🧠 Guió d'explicacions clau (què ha d'explicar el docent?)
En aquesta fase, l'aula es converteix en un laboratori de robòtica i programació. Els tres conceptes clau a transmetre són:

**1. El cicle de control: Entrades, procés i eixides (Sessió 11)**
* **Concepte:** Explicar com "pensa" una màquina.
* **Com explicar-ho:** Fes l'analogia amb el cos humà. Els sensors de temperatura i humitat són la pell de l'hivernacle (Entrada / Input). La placa controladora és el cervell (Procés) que pren decisions basant-se en el codi. El servomotor que espentarà la xeringa és el múscul (Eixida / Output). Res funciona de forma aïllada; tot és un cicle continu.

**2. La lògica condicional en programació (Sessió 12)**
* **Concepte:** Ensenyar a l'alumnat a donar instruccions clares a la màquina usant estructures IF... THEN... ELSE.
* **Com explicar-ho:** Posa exemples de la vida quotidiana: "SI plou, LLAVORS agafe el paraigua, SINÓ, no l'agafe". Traslladat a l'hort: "SI la temperatura supera els 25 °C, LLAVORS mou el servomotor a 90 graus (obri finestra), SINÓ, mantín el servomotor a 0 graus (tanca finestra)".

**3. La transició electromecànica: Unint el motor i la xeringa (Sessió 13 i 14)**
* **Concepte:** El repte físic d'unir l'electrònica i la mecànica de fluids.
* **Com explicar-ho:** Fes entendre a l'alumnat que els motors tenen una força (parell motor) limitada i un eix de gir circular, mentre que la xeringa mestra necessita un moviment lineal (recte). Hauran de dissenyar una xicoteta peça (potser amb cartó dur o impressió 3D) que transforme el gir del motor en una espenta recta sobre l'èmbol de la xeringa. És el desafiament d'enginyeria més pur del projecte.

---

### 📅 Dinàmica d'aula i preparació per sessions

#### Sessió 11: Exploració de components i lectura de dades
* **Material a preparar:** Plaques controladores (Micro:bit, Arduino o similars), cables, sensors de temperatura, ordinadors portàtils o tauletes.
* **El teu paper:** Facilitador tecnològic. En aquesta sessió no es munta res a l'hivernacle. Treballeu sobre la taula. Demana'ls que connecten el sensor i intenten llegir la temperatura de l'aula a la pantalla. Fes que bufen sobre el sensor per a veure com pugen els valors en temps real.

#### Sessió 12: Programació del comportament (El codi)
* **Material a preparar:** Ordinadors amb l'entorn de programació (MakeCode, Scratch o IDE d'Arduino), servomotors.
* **El teu paper:** Suport de codificació (*Debug*). L'alumnat ha de crear l'algorisme condicional complet. Ajuda'ls a entendre els angles del servomotor (0º a 180º). Que proven si el motor gira automàticament en posar un dit calent sobre el sensor de temperatura.

#### Sessions 13 i 14: L'acoblament electromecànic
* **Material a preparar:** L'hivernacle construït al Bloc 2, materials auxiliars (fusta, brides, cinta de doble cara, eina termofusible).
* **El teu paper:** Assessor constructiu. Ací sorgeixen els problemes reals. El motor s'ha de fixar fortament a l'estructura de l'hivernacle perquè si no, en lloc d'espentar la xeringa, el motor s'espentarà a si mateix cap arrere. Supervisa el disseny d'aquest suport perquè siga rígid.

#### Sessió 15: Prova de foc (Test d'estrès tèrmic) i tancament
* **Material a preparar:** Assecadors de cabells o làmpades halògenes d'escriptori (per a generar calor de forma ràpida).
* **El teu paper:** Auditor final. Passa per cada taula aplicant calor amb l'assecador sobre el sensor del seu hivernacle. Avalua visualment si el sistema detecta la pujada de temperatura, activa el motor, preme la xeringa i, finalment, alça la finestra de canyes de forma 100% autònoma.

---

### 📊 Avaluació del bloc 3 (rúbrica del professorat)

Aquest bloc valora l'adquisició de competències digitals, de programació i la integració electromecànica final.

| Criteri d'avaluació i referència curricular | Excel·lent (4) | Bé (3) | En procés (2) | Cal millorar (1) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Programació i pensament computacional**<br>*(CE 6. CA 6.1 i 6.2: Programar dispositius i aplicacions utilitzant lògica condicional)* | El codi està perfectament estructurat i net. Utilitza condicionals adequats i llig les dades del sensor en temps real de forma correcta, accionant el motor exactament en els llindars establerts. | El codi funciona i el motor reacciona a la temperatura, però l'estructura de la programació és poc eficient, hi ha variables innecessàries o els llindars (temperatures de tall) no estan ben ajustats. | El codi té errors (*bugs*) que bloquegen el funcionament continu o no aconsegueixen relacionar la lectura del sensor amb l'activació del motor. Requereixen molta ajuda docent per fer-ho anar. | No han sigut capaços de crear l'algorisme bàsic o no entenen la lògica condicional necessària per a automatitzar el sistema. |
| **2. Muntatge i integració electrònica**<br>*(CE 4 i 6. CA 4.1 i 6.3: Muntar circuits i connectar components)* | Les connexions electròniques són fermes i estan organitzades. El sensor i la placa estan ben fixats a l'estructura de l'hivernacle, protegits de possibles esquitxos d'aigua del reg. | La placa i els components estan connectats correctament, però la instal·lació física sobre l'hivernacle és desordenada o precària (cables solts, plaques penjant). | Hi ha errors de connexió (p. ex., connectar el motor al pin equivocat o polaritat invertida). Els components no estan subjectes a l'estructura de cap manera. | El muntatge electrònic és inexistent o presenta curtcircuits per negligència en la lectura dels esquemes de connexió. |
| **3. Acoblament electromecànic (Motor-Xeringa)**<br>*(CE 1 i 2. CA 1.3 i 2.1: Idear solucions i resoldre problemes constructius)* | Han dissenyat un ancoratge perfecte que converteix l'esforç del servomotor en una compressió lineal sobre la xeringa sense que la força es perda o l'estructura es moga. | Han unit el motor a la xeringa i la finestra s'obri, però el suport cedeix una miqueta o l'angle d'espenta no és 100% recte, perdent eficiència mecànica. | La unió entre el motor i la xeringa no suporta la tensió i es trenca o es desenganxa a l'hora de fer força. El mecanisme s'encalla i no aconsegueix moure el fluid. | No han aconseguit idear cap sistema físic per a connectar l'eix rotatori del servomotor amb l'èmbol lineal de la xeringa hidràulica. |
| **4. Documentació digital final**<br>*(CE 3. CA 3.1: Elaborar i publicar documentació tècnica)* | El portfolio s'ha actualitzat amb el codi font (o captures d'aquest), fotos del cablejat i un vídeo final demostrant el sistema obrint-se autònomament en aplicar-hi calor artificial. | Han penjat el vídeo del sistema funcionant i alguna captura del codi, però falten explicacions tècniques sobre com han resolt la integració del motor a la xeringa. | El portfolio amb prou feines s'ha actualitzat en aquesta fase. Falta documentació clau com el programa utilitzat o proves gràfiques que demostren l'èxit de l'automatització. | El rol de documentació no ha registrat cap part d'aquest procés tecnològic i el portfolio ha sigut completament abandonat en aquest darrer bloc. |
