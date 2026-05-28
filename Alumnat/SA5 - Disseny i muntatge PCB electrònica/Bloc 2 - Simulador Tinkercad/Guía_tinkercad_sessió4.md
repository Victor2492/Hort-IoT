# 🖱️ Laboratori Virtual (TinkerCAD) 

**Objectiu:** Aprendre a muntar circuits i utilitzar el polímetre sense risc d'explosions .

## 1. Accés a la Plataforma 🔐 
* Entra a tinkercad.com .
* Fes clic en Iniciar Sessió .
* Entra amb el teu compte de Google (o crea un compte personal) .
* Al menú de l'esquerra, selecciona "Circuits" (Circuits) i després el botó verd "Crear nou circuit" .

## 2. L'"Hola Món" de l'Electrònica 👋 
Anem a encendre un LED . Sembla fàcil, però si no utilitzem les matemàtiques de la sessió anterior, explotarà .

### Pas A: Els materials 
Busca a la barra dreta i arrossega a l'àrea de treball :
* [ ] Una Pila de 9V .
* [ ] Una Resistència .
* [ ] Un LED .

### Pas B: El Càlcul (Recordatori) 
Volem protegir el LED .
* La pila dona 9V .
* El LED suporta 2V i consumix 20mA (0.02A) .
* Hem d'"eliminar" 7V .

👉 **Acció:** Fes clic a la resistència i al quadre de propietats canvia el seu valor a 350 i selecciona el símbol Ω (ohms) (Compte no poses kΩ!) .

### Pas C: El Muntatge 
* Gira els components si ho necessites (Tecla R) .
* Connecta el Cable Roig (Positiu) de la pila a una pota de la resistència .
* Connecta l'altra pota de la resistència a l'Ànode (pota torta/llarga) del LED .
* Connecta el Càtode (pota recta/curta) del LED al Negatiu de la pila .
* Dona-li al botó "Iniciar Simulació" .

💡 **S'encén?** Bé! 
💥 **Explota?** Revisa el valor de la resistència (vas posar 350 kΩ o mΩ?) .
🌑 **No fa res?** Revisa si el LED està a l'inrevés (l'ànode ha d'anar al positiu) .

## 3. Utilitzant el Polímetre (L'Ull que Tot ho Ve) 🕵️ 
Un enginyer no "creu", un enginyer "mesura" . Anem a comprovar si els nostres càlculs són reals .

### Missió 1: Mesurar Voltatge (V) 
El voltatge es mesura en PARAL·LEL (sense desconnectar res, "abraçant" el component) .
1. Trau un Multímetre del menú .
2. Posa'l en mode Voltatge (V) .
3. Connecta el cable roig del multímetre abans de la resistència i el negre després del LED (directe a la pila) .
4. Simula . Marca 9V (o 8.9V)? Correcte .
5. Ara mesura només la Resistència (Roig a una pota, Negre a l'altra) . Marca aprox 7V? Eixos són els volts que s'està "menjant" per a protegir el LED! 

### Missió 2: Mesurar Corrent/Intensitat (A) 
⚠️ **ATENCIÓ!** El corrent es mesura en SÈRIE . Has de "trencar" el circuit perquè l'electricitat passe a través del multímetre .
1. Esborra el cable que va de la resistència al LED . Talla el pas! 
2. Posa un multímetre nou en mode Amperatge (A) .
3. Connecta l'eixida de la resistència a l'entrada (roja) del multímetre .
4. Connecta l'eixida (negra) del multímetre a la pota del LED .
5. Simula .

**Pregunta:** Marca al voltant de 20 mA? 
* Si marca 20 mA, el teu disseny és perfecte .
* Si marca molt més, el LED es cremarà prompte .
* Si marca molt menys (ex. 2 mA), el LED brillarà poc .

## 4. El Repte Final: Preparant l'Hort 🌱 
En el nostre projecte real utilitzarem una Bateria de 12V .

**La teua missió:** Dissenya a TinkerCAD un circuit amb :
* Font d'alimentació configurada a 12V .
* 3 LEDs (Simulant que són llums d'avís del sistema) .

**Esbrina:** És millor posar-los en Sèrie (un darrere de l'altre) o en Paral·lel (cadascun amb el seu camí)? 

> **Pista:** Munta els dos casos i mira què passa si se'n fon (esborres) un . A l'hort, si es fon una llum, volem que les altres continuen funcionant .

**Entrega:** Fes una captura de pantalla del teu "Repte Final" funcionant i puja-la a la tasca de Moodle .
