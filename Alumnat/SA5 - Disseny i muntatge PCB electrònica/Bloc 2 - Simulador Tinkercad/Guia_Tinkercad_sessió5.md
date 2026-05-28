# ⚡ Domant l'Energia (De 12V a 5V)

**Objectiu:** Dissenyar l'etapa d'alimentació de la nostra placa. [cite_start]Convertirem els 12V "bruts" i potents de la bateria en 5V estables i segurs per al cervell del sistema[cite: 2].

## 1. El Problema 💥
Tenim una Bateria Solar de 12V. [cite_start]Tenim un Cervell (Microcontrolador) que funciona a 5V[cite: 4].

Si connectem el cable roig de la bateria directament al cervell... ¡Adéu projecte! [cite_start]Es cremarà a l'instant[cite: 5].

[cite_start]Necessitem un "traductor" de voltatge: El Regulador LM7805[cite: 6].

## 2. Els Components 🧰
[cite_start]Obri TinkerCAD Circuits i busca estos components[cite: 8]:
* [cite_start]**Subministrament d'Energia (Power Supply):** Configura'l a 12V (Això simula la nostra bateria solar)[cite: 9].
* **Regulador de voltatge 5V:** Al cercador escriu "Regulador" o busca "7805". [cite_start]És el component negre amb 3 potes[cite: 10].
* [cite_start]**Condensadors:** En necessitem dos[cite: 11].
  * Un de 100 µF (microfarads). [cite_start]Tipus: Polaritzat[cite: 12, 13].
  * Un de 10 µF (microfarads). [cite_start]Tipus: Polaritzat[cite: 13].
* [cite_start]**Multímetre:** Per a comprovar que no mentim[cite: 14].

## 3. El Muntatge (Pas a Pas) 🛠️
El LM7805 és molt exigent amb les seues potes. [cite_start]Si les connectes malament, s'escalfa i s'apaga[cite: 16].

### Pas A: Identificar les potes
[cite_start]Passa el ratolí per damunt del regulador a TinkerCAD[cite: 18]:
* [cite_start]**Esquerra:** Entrada (Input) -> Ací entren els 12V[cite: 19].
* [cite_start]**Centre:** Terra (Ground/GND) -> Ací va el negatiu comú[cite: 20].
* [cite_start]**Dreta:** Eixida (Output) -> ¡Per ací eixirà la màgia de 5V! [cite: 21]

### Pas B: Connexió Bàsica
* [cite_start]Connecta el **Positiu (Roig)** de la Font 12V a la pota **Entrada (Esquerra)**[cite: 23].
* [cite_start]Connecta el **Negatiu (Negre)** de la Font 12V a la pota **Terra (Centre)**[cite: 24].

> [cite_start]**ULL!** Encara no hem acabat[cite: 25].

### Pas C: Els Condensadors (Filtratge)
[cite_start]Els condensadors netegen el "soroll" elèctric[cite: 27].
* [cite_start]Posa el condensador de 100 µF a l'**ENTRADA** (entre el cable roig de 12V i el negre)[cite: 28].
  * [cite_start]*Recorda:* La franja blanca del condensador va al negatiu[cite: 29].
* [cite_start]Posa el condensador de 10 µF a l'**EIXIDA** (entre la pota dreta i el negatiu)[cite: 30].

## 4. L'Hora de la Veritat: Mesurament 🕵️
[cite_start]Anem a vore si funciona[cite: 32].
1. [cite_start]Col·loca el **Multímetre** en mode Voltatge (V)[cite: 33].
2. [cite_start]Connecta el **Cable Roig** del multímetre a la pota d'**EIXIDA (Dreta)** del regulador[cite: 34].
3. [cite_start]Connecta el **Cable Negre** del multímetre a la pota **Terra (Centre)** o al negatiu general[cite: 35].
4. [cite_start]Dóna-li a **"Iniciar Simulació"**[cite: 36].

[cite_start]¿Què marca el multímetre? [cite: 37]
* **5.00 V:** ¡PERFECTE! [cite_start]🎉 Eres un enginyer[cite: 38].
* **12.00 V:** ¡PERILL! Has pontetjat l'entrada amb l'eixida. [cite_start]Revisa el cablejat[cite: 39].
* [cite_start]**0.00 V:** Alguna cosa està desconnectada[cite: 40].

## 5. Repte Extra: "Tenim Energia" 💡
[cite_start]Perquè la placa quede professional, afegirem un **LED d'estat**[cite: 42].
[cite_start]Volem que s'encenga un LED verd quan la placa tinga els seus 5V llestos[cite: 43].

[cite_start]**La teua missió:** Connecta un LED verd a l'**EIXIDA de 5V** del regulador[cite: 44].

> **Recorda:** No pots connectar un LED directe a 5V. [cite_start]Necessites una resistència[cite: 45].

[cite_start]Càlcul ràpid: $R = (5V - 2V) / 0.02A = 150 \Omega$[cite: 46].

[cite_start]**Entrega:** Puja una captura de pantalla on es veja[cite: 47]:
* [cite_start]La font a 12V[cite: 48].
* [cite_start]El multímetre marcant 5V[cite: 49].
* [cite_start]El LED verd encés[cite: 50].
