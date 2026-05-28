# 🖱️ Laboratori Virtual (TinkerCAD)[cite: 2]

**Objectiu:** Aprendre a muntar circuits i utilitzar el polímetre sense risc d'explosions[cite: 2].

## 1. Accés a la Plataforma 🔐[cite: 2]
* Entra a tinkercad.com[cite: 2].
* Fes clic en Iniciar Sessió[cite: 2].
* Entra amb el teu compte de Google (o crea un compte personal)[cite: 2].
* Al menú de l'esquerra, selecciona "Circuits" (Circuits) i després el botó verd "Crear nou circuit"[cite: 2].

## 2. L'"Hola Món" de l'Electrònica 👋[cite: 2]
Anem a encendre un LED[cite: 2]. Sembla fàcil, però si no utilitzem les matemàtiques de la sessió anterior, explotarà[cite: 2].

### Pas A: Els materials[cite: 2]
Busca a la barra dreta i arrossega a l'àrea de treball[cite: 2]:
* [ ] Una Pila de 9V[cite: 2].
* [ ] Una Resistència[cite: 2].
* [ ] Un LED[cite: 2].

### Pas B: El Càlcul (Recordatori)[cite: 2]
Volem protegir el LED[cite: 2].
* La pila dona 9V[cite: 2].
* El LED suporta 2V i consumix 20mA (0.02A)[cite: 2].
* Hem d'"eliminar" 7V[cite: 2].

👉 **Acció:** Fes clic a la resistència i al quadre de propietats canvia el seu valor a 350 i selecciona el símbol Ω (ohms) (Compte no poses kΩ!)[cite: 2].

### Pas C: El Muntatge[cite: 2]
* Gira els components si ho necessites (Tecla R)[cite: 2].
* Connecta el Cable Roig (Positiu) de la pila a una pota de la resistència[cite: 2].
* Connecta l'altra pota de la resistència a l'Ànode (pota torta/llarga) del LED[cite: 2].
* Connecta el Càtode (pota recta/curta) del LED al Negatiu de la pila[cite: 2].
* Dona-li al botó "Iniciar Simulació"[cite: 2].

💡 **S'encén?** Bé![cite: 2]
💥 **Explota?** Revisa el valor de la resistència (vas posar 350 kΩ o mΩ?)[cite: 2].
🌑 **No fa res?** Revisa si el LED està a l'inrevés (l'ànode ha d'anar al positiu)[cite: 2].

## 3. Utilitzant el Polímetre (L'Ull que Tot ho Ve) 🕵️[cite: 2]
Un enginyer no "creu", un enginyer "mesura"[cite: 2]. Anem a comprovar si els nostres càlculs són reals[cite: 2].

### Missió 1: Mesurar Voltatge (V)[cite: 2]
El voltatge es mesura en PARAL·LEL (sense desconnectar res, "abraçant" el component)[cite: 2].
1. Trau un Multímetre del menú[cite: 2].
2. Posa'l en mode Voltatge (V)[cite: 2].
3. Connecta el cable roig del multímetre abans de la resistència i el negre després del LED (directe a la pila)[cite: 2].
4. Simula[cite: 2]. Marca 9V (o 8.9V)? Correcte[cite: 2].
5. Ara mesura només la Resistència (Roig a una pota, Negre a l'altra)[cite: 2]. Marca aprox 7V? Eixos són els volts que s'està "menjant" per a protegir el LED![cite: 2]

### Missió 2: Mesurar Corrent/Intensitat (A)[cite: 2]
⚠️ **ATENCIÓ!** El corrent es mesura en SÈRIE[cite: 2]. Has de "trencar" el circuit perquè l'electricitat passe a través del multímetre[cite: 2].
1. Esborra el cable que va de la resistència al LED[cite: 2]. Talla el pas![cite: 2]
2. Posa un multímetre nou en mode Amperatge (A)[cite: 2].
3. Connecta l'eixida de la resistència a l'entrada (roja) del multímetre[cite: 2].
4. Connecta l'eixida (negra) del multímetre a la pota del LED[cite: 2].
5. Simula[cite: 2].

**Pregunta:** Marca al voltant de 20 mA?[cite: 2]
* Si marca 20 mA, el teu disseny és perfecte[cite: 2].
* Si marca molt més, el LED es cremarà prompte[cite: 2].
* Si marca molt menys (ex. 2 mA), el LED brillarà poc[cite: 2].

## 4. El Repte Final: Preparant l'Hort 🌱[cite: 2]
En el nostre projecte real utilitzarem una Bateria de 12V[cite: 2].

**La teua missió:** Dissenya a TinkerCAD un circuit amb[cite: 2]:
* Font d'alimentació configurada a 12V[cite: 2].
* 3 LEDs (Simulant que són llums d'avís del sistema)[cite: 2].

**Esbrina:** És millor posar-los en Sèrie (un darrere de l'altre) o en Paral·lel (cadascun amb el seu camí)?[cite: 2]

> **Pista:** Munta els dos casos i mira què passa si se'n fon (esborres) un[cite: 2]. A l'hort, si es fon una llum, volem que les altres continuen funcionant[cite: 2].

**Entrega:** Fes una captura de pantalla del teu "Repte Final" funcionant i puja-la a la tasca de Moodle[cite: 2].
