# 🌿 MANUAL DE L'ALUMNAT: HORT INTEL·LIGENT IoT
## Sistemes de Control Ciberfísics i Programació per Blocs amb Arduino i TinkerCAD

Benvingut/da al projecte **Hort Intel·ligent**. Al llarg d'aquest tercer trimestre, et convertiràs en dissenyador/a de tecnologies per a la transició ecològica. Aprendràs a dissenyar, cablejar i programar una estació meteorològica ciberfísica amb sistema de reg automatitzat, entenent com l'enginyeria ajuda a estalviar fins a un 50% d'aigua en entorns agrícoles reals com la comarca de la Safor.

---

## 1. TAULA DESCRIPTIVA SINTETITZADA DE LES SESSIONS

| Sessió | Tipus d'Agrupament | Durada | Objectiu Principal / Lliurable Tècnic |
| :--- | :--- | :--- | :--- |
| **S01** | Gran grup | 55 min | Presentació socioambiental de l'hort i entorn de simulació. |
| **S02** | Gran grup | 55 min | Fonaments de Sistemes de Control (Llaç Obert vs. Tancat). |
| **S03** | Gran grup / Individual | 55 min | El laboratori virtual TinkerCAD i pràctica inicial (LED Pin 13). |
| **S04** | Individual | 55 min | Pràctica base: El Semàfor (Càlculs elèctrics de la Llei d'Ohm). |
| **S05** | Individual | 55 min | Prova Escrita Temàtica: Fonaments i conceptes teòrics. |
| **S06** | Individual | 55 min | **Pràctica 1**: Senyals analògics i Monitor Sèrie amb Potenciòmetre. |
| **S07** | Parelles | 55 min | **Pràctica 2**: Sensor de temperatura TMP36 i alertes lògiques `if/else`. |
| **S08** | Individual | 55 min | Teoria del Divisor de Tensió i la Fotoresistència LDR. |
| **S09** | Individual | 55 min | **Pràctica 3**: Mesura d'irradiància solar i lògica multillindar. |
| **S10** | Parelles | 55 min | Teoria d'Entrades Digitals, Pull-Down, Pull-Up i Soroll Mecànic. |
| **S11** | Parelles | 55 min | **Pràctica 4**: Simulador de Pluviòmetre amb Comptador i Variables. |
| **S12** | Parelles | 55 min | Teoria d'Estructures Iteratives: Bucles determinats `for` i `while`. |
| **S13** | Parelles | 55 min | **Pràctica 5**: Control de Reg Manual Temporitzat amb Parada d'Emergència. |
| **S14** | Individual | 55 min | Teoria d'Automatismes: El perill de l'oscil·lació ràpida i la Histèresi. |
| **S15** | Individual | 55 min | **Pràctica 6**: Automatització del reg per Humitat de sòl amb banda neutra. |
| **S16** | Parelles | 55 min | **Pràctica 7**: Anemòmetre, Escala de Beaufort i bloqueig per vent fort. |
| **S17** | Individual | 55 min | Disseny d'Arquitectures Integrades: Planificació del Diagrama de Flux. |
| **S18** | Individual | 55 min | **Pràctica 8 (Integrada)**: Cablejat estructural de l'estació completa. |
| **S19** | Individual | 55 min | **Pràctica 8**: Programació de les condicions combinades `AND`/`OR`. |
| **S20** | Individual | 55 min | **Pràctica 8**: Implementació del reg de supervivència i alarmes. |
| **S21** | Individual | 55 min | **Pràctica 8**: Algorisme matemàtic de càlcul de consum d'aigua (Litres). |
| **S22** | Individual | 55 min | **Pràctica 8**: Tancament del codi, depuració final i lliurament del projecte. |
| **S23** | Gran grup | 55 min | Migració de blocs a codi text (.ino) i càrrega en microcontroladors. |
| **S24** | Gran grup | 55 min | Arquitectura IoT: Servidor Raspberry Pi i Dashboards en temps real. |
| **S25** | Gran grup | 55 min | Debat Crític Social: Big Data, algorismes i societat del consum. |
| **S26** | Individual (Avaluació) | 55 min | Exposicions Orals: Defensa del Sistema de Control (Part I). |
| **S27** | Individual (Avaluació) | 55 min | Exposicions Orals: Defensa del Sistema de Control (Part II). |

*Nota metodològica sobre els agrupaments en parelles:* Per a afavorir la coeducació i la inclusió, les parelles aniran rotant al llarg de les sessions pràctiques grupals. No es podrà repetir company/a fins que hagis col·laborat amb tots els membres de l'aula.

---

## 2. PLANIFICACIÓ DETALLADA DE LES SESSIONS

### SETMANA 1: FONAMENTS DE CONTROL I ENTORN VIRTUAL

#### S01: Presentació del projecte i TinkerCAD
* **Explicació Teòrica:** Introducció a la importància de l'aigua i reptes climàtics a la comarca de la Safor. El reg eficient per degoteig redueix el consum un 50%. Analitzarem com els sistemes de control recullen dades ambientals per a automatitzar tasques. En aquest projecte es demanarà complir de manera estricta dues **Regles d'Or**:
    1. *Muntatges nets i ordenats:* Cablejat rectilini amb codi de colors corporatiu (Vermell per a alimentació positiva de 5V, Negre per a línies de terra GND).
    2. *Codi de programació estructurat:* Ús de noms de variables autoexplicatius i inserció de blocs d'anotació (grisos) per a comentar el codi.
* **Recursos Visuals:** Interfície general de la plataforma web TinkerCAD Circuits.
* **Enunciat de l'activitat:** Creació del compte d'estudiant i unió a la classe virtual compartida pel/per la docent. Exploració de la biblioteca de components bàsics.

#### S02: Què és un Sistema de Control?
* **Explicació Teòrica:** Un sistema de control és un conjunt de components que regulen o gestionen el comportament d'un altre sistema. Es compon de quatre elements clau:
    * **Entrada (Input):** Informació o ordre que rep el sistema.
    * **Controlador:** El "cervell" electrònic (en el nostre cas, la placa Arduino) que processa les dades i pren decisions basades en regles programades.
    * **Actuador:** El component que realitza l'acció física o treball.
    * **Sortida (Output):** El resultat final obtingut en l'entorn.
    
    Estudiarem els dos grans tipus de sistemes:
    * **Llaç Obert (Open Loop):** El sistema executa una tasca durant un temps fix o segons una ordre, però no en mesura el resultat real. No sap si ha aconseguit el seu objectiu perquè manca de retroalimentació. *Exemple:* Una torradora de pa que funciona per temps; salta igual si el pa està blanc com si està cremat.
    * **Llaç Tancat (Closed Loop):** El sistema utilitza **sensors** per a mesurar contínuament el resultat de la sortida i enviar aquesta informació (retroalimentació) al controlador per a corregir l'acció si és necessari. *Exemple:* Un termostat que mesura la temperatura real i encén o apaga la calefacció per a mantenir els graus exactes desitjats.
* **Enunciat de l'activitat:** Identificació i classificació d'elements de control quotidians (ex: enllumenat públic, assecador, rentadora).

#### S03: Programació d’Arduino amb blocs en TinkerCAD
* **Explicació Teòrica:** Programar és donar instruccions ordenades a una màquina. La programació per blocs és un llenguatge visual dividit per categories de colors de tipus "LEGO":
    * **Sortida (Blau):** Control d'actuadors (ex: activar pins digitals en ALTA o BAIXA).
    * **Entrada (Lila):** Lectura de sensors (lectures de pins digitals o analògics).
    * **Control (Taronja):** Retards (`wait`), bucles de repetició i condicions lògiques.
    * **Matemàtiques (Verd):** Operacions i comparacions lògiques ($<, =, >$).
    * **Variables (Rosa):** Emmagatzematge de dades a la memòria RAM.
    
    L'estructura bàsica té dues seccions fixes:
    * **Al iniciar (`setup`):** S'executa una sola vegada quan connectem la placa per a configurar el sistema.
    * **Siempre (`loop`):** Execució de codi seqüencial de dalt a baix que es repeteix indefinidament en bucle mentre la placa tingui corrent elèctric.
* **Enunciat de l'activitat (Pràctica Inicial):** Munta en TinkerCAD un circuit format per una placa Arduino UNO, una resistència limitadora de $220\,\Omega$ connectada en sèrie al terminal ànode de la teva llum LED (pata llarga), i tanca el circuit cap a terra (GND). Programa el pin digital 13 perquè s'encengui durant 1 segon, s'apague durant 1 segon, i repeteixi aquesta acció de forma contínua.
[imatges/exemple1.png]
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Unitat controladora central. |
    | Díode LED | 1 | Actuador visual (Color lliure). |
    | Resistència | 1 | Valor: $220\,\Omega$ (Codi de colors: Vermell-Vermell-Marró). |
    | Cables de connexió | - | Traçat lineal. Negre per a tancar circuit a GND. |

* **Preguntes de la sessió:**
    1. Quin és l'actuador d'aquesta pràctica inicial i quin tipus d'acció realitza?
    2. Quin bloc de control utilitzem per a aconseguir que l'encesa del LED sigui visible a l'ull humà? Què passaria si l'eliminem?

---

### SETMANA 2: EL SENYAL DIGITAL I LA PROVA DE CONTROL

#### S04: El primer programa (Semàfor)
* **Explicació Teòrica:** Els pins digitals de l'Arduino funcionen com a sortides binàries: només tenen dos estats elèctrics possibles. L'estat `HIGH` (ALTA) subministra una tensió de +5V, mentre que l'estat `LOW` (BAIXA) es connecta directament a 0V (GND). Per a protegir els nostres actuadors visuals apliquem de forma estricta la **Llei d'Ohm**:
    $$\text{Tenció } (V) = \text{Intensitat } (I) \times \text{Resistència } (R)$$
    Si un LED consumeix una tensió interna de 2V i tolera una intensitat de corrent màxima de $20\,\text{mA}$ ($0.02\,\text{A}$), la resistència que necessitem col·locar per a absorbir els 3V sobrants de la placa d'Arduino calcula de la següent forma:
    $$R = \frac{V_{\text{placa}} - V_{\text{LED}}}{I} = \frac{5\text{V} - 2\text{V}}{0.02\text{A}} = 150\,\Omega$$
    Per seguretat, utilitzem el valor estàndard comercial immediat superior: $220\,\Omega$.
* **Enunciat de l'activitat:** Dissenya i munta un circuit de control de trànsit (Semàfor). Connecta un LED Verd al pin digital D6, un LED Groc al pin D5 i un LED Roig al pin D4, tots equipats amb les seves respectives resistències de protecció de $220\,\Omega$ unides a GND. Modifica la lògica del programa de blocs perquè realitzi la seqüència: Verd actiu 3 segons $\rightarrow$ Groc actiu 1 segon $\rightarrow$ Roig actiu 3 segons. Desa el projecte a la teva plataforma utilitzant la nomenclatura: `Hort_NomCognom_EP2`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Unitat de control. |
    | Placa de proves (Protoboard)| 1 | Matriu per a interconnexions mecàniques. |
    | Díodes LED | 3 | Colors: Verd, Groc i Roig. |
    | Resistències | 3 | Valor: $220\,\Omega$ cadascuna (Protecció de LEDs). |
    | Cables de connexió | - | Vermell (+5V), Negre (GND), Altres per a pins de senyal. |

* **Preguntes de la sessió:**
    1. Si oblides col·locar la resistència en sèrie amb un LED en un circuit real, quina conseqüència física tindrà per al component? Justifica-ho usant la Llei d'Ohm.
    2. Descriu breument el flux seqüencial que realitza el programa dins de l'estructura `loop` per a fer canviar els llums del semàfor de manera cíclica.

#### S05: Prova escrita de Sistemes de Control
* **Explicació Teòrica:** Realització de la prova de control teòrica individual de la unitat per a constatar el nivell d'assoliment del vocabulari, classificació de sistemes de llaç i conceptes elèctrics bàsics treballats.

---

### SETMANA 3: ENTRADES ANALÒGIQUES I ALERTES LÒGIQUES

#### S06: Senyals analògics: el potenciòmetre
* **Explicació Teòrica:** A diferència dels senyals digitals, els senyals analògics són continus en el temps i poden adoptar infinits valors de tensió dins d'un rang determinat. La placa Arduino disposa de sis pins d'entrada analògics (A0 a A5). Aquests pins estan acoblats a un **Convertidor Analògic-Digital (ADC)** d'una resolució de 10 bits.
    
    L'ADC s'encarrega de traduir una mostra de tensió d'entrada elèctrica compresa entre 0V i 5V cap a una escala numèrica discreta de nombres enters compresos entre **0 i 1023** ($2^{10} = 1024$ estats).
    
    Per a veure el que passa a l'interior del xip de l'autòmat utilitzarem el **Port Sèrie**, una via de comunicació de dades bidireccional entre la placa i el nostre ordinador. Mitjançant el bloc blau de sortida *imprimir en monitor serie* podrem obrir la finestra inferior de la plataforma i examinar els valors lectors en viu. Durant aquesta fase de simulació de l'hort, utilitzarem un potenciòmetre (resistència de tres terminals mecànicament variable) com a component simulador universal de condicions ambientals.
* **Enunciat de l'activitat (Pràctica 1 - Oficial):** Connecta els pins dels extrems d'un potenciòmetre a les línies de +5V i GND de la teva protoboard. Enllaça la patilla lliscant central de control cap al pin d'entrada analògica A0 d'Arduino. Desenvolupa un programa que llegeixi el valor de l'entrada analògica cada 500 mil·lisegons i el transmeti directament cap al monitor sèrie. Lliura l'enllaç del projecte sota el nom `Hort_NomCognom_P1`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Controlador de dades. |
    | Potenciòmetre | 1 | Valor: $10\,\text{k}\Omega$ (Resistència rotativa variable). |
    | Cables de connexió | - | Colors obligatoris en alimentació (Vermell i Negre). |

* **Preguntes de la sessió:**
    1. Si el monitor sèrie mostra una lectura numèrica de 512, quina tensió exacta en volts està rebent el pin A0 d'Arduino? Mostra el càlcul realitzat.
    2. Per a què serveix la monitorització de dades a través del Port Sèrie des de la perspectiva d'un dissenyador de programari?

#### S07: Sensor de temperatura TMP36
* **Explicació Teòrica:** El TMP36 és un sensor analògic de precisió que varia la seva tensió de sortida de manera lineal d'acord amb els canvis de temperatura ambiental. L'entorn TinkerCAD disposa del bloc d'entrada pur *leer sensor de temperatura en el pasillo Ax en unidades ºC*, el qual realitza automàticament les equacions de conversió elèctrica de l'element.
    Per a prendre decisions en programació utilitzem les estructures de condició lògica **`if / else`** (Si... aleshores... si no...). Aquestes avaluen si es compleix una sentència de comparació lògica matemàtica basant-se en operadors elementals ($<, \le, =, \ne, >, \ge$). Si la condició és certa, el controlador executa els blocs niats en la secció superior; si és falsa, salta directament a executar les instruccions de la secció `else`.
* **Enunciat de l'activitat (Pràctica 2 - Oficial - Parelles):** Dissenya una estació de monitorització tèrmica per al cultiu de l'hortalissa. Connecta un sensor TMP36 al pin analògic A2, i un LED Groc d'avís de gelades al pin digital D5 (amb resistència de $220\,\Omega$). Programa el sistema perquè realitzi una lectura contínua de temperatura. Si la temperatura mesurada cau per davall de **0 ºC** (perill de congelació del fruit), el sistema ha d'encendre immediatament el LED Groc i mostrar al monitor sèrie el text d'alerta: `TEMPERATURA BAIX ZERO: XX ºC`. En cas contrari, el LED ha de romandre apagat i el terminal imprimirà normalment: `Temperatura: XX ºC`. Anomena el teu projecte col·laboratiu com `Hort_NomsCognoms_P2`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Gestor de dades analògiques. |
    | Sensor TMP36 | 1 | Terminal esquerre a 5V, central a A2, dret a GND. |
    | Díode LED | 1 | Color Groc (Alerta de clima crític). |
    | Resistència | 1 | Valor: $220\,\Omega$. |

* **Preguntes de la sessió:**
    1. Si el sensor TMP36 llegeix una temperatura de 15 ºC, descriu quina ruta segueix el programa dins de l'estructura condicional encarregada del control. El LED Groc s'encendrà?
    2. Per què s'enquadra aquest exercici pràctic dins dels sistemes de control denominats de llaç obert? Què faltaria per transformar-lo en llaç tancat?

---

### SETMANA 4: MESURA D'IRRADIÀNCIA SOLAR I DIVISORS DE TENSIÓ

#### S08: Fonaments de la Fotoresistència LDR
* **Explicació Teòrica:** Una fotoresistència o LDR és un component electrònic la resistència interna del qual varia de forma notable en funció de la llum que incideix sobre la seva superfície. En condicions de foscor total, la seva resistència és extremadament alta ($> 1\,\text{M}\Omega$), mentre que exposat a la llum solar directa pot baixar fins a valors pròxims a $100\,\Omega$.
    
    Atès que les entrades analògiques de l'Arduino només poden interpretar canvis en la tensió elèctrica (Volts) i no en la resistència elèctrica ($\Omega$), és completament obligatori dissenyar una configuració en circuit denominada **Divisor de Tensió**. Aquest consisteix a connectar en sèrie la LDR juntament amb una resistència fixa coneguda de referència de $10\,\text{k}\Omega$ ($10.000\,\Omega$). Prenent el cable de mostra de senyal des del node intermedi de connexió entre ambdós components cap al pin analògic d'Arduino, aconseguirem obtenir una corba de tensions variable d'acord amb la intensitat de la llum incident de l'entorn.
* **Enunciat de l'activitat:** Anàlisi de diagrames de connexió electrònica i estudi matemàtic dels canvis de corrent en nodes elèctrics fixos.

#### S09: Monitor d'Irradiància Solar
* **Explicació Teòrica:** Per a optimitzar el funcionament del nostre reg agrícola, és crucial mesurar la radiació solar global. En sistemes de camp reals utilitzaríem sensors industrials digitals de lux com el BH1750, capaços de mesurar fins a 100.000 lux (plena llum del dia a Gandia). Al nostre simulador virtual TinkerCAD, fixarem una escala multillindar classificada mitjançant estructures de condicionals anidats (`if/else` imbricats un dins d'un altre) utilitzant quatre franges de dades de l'ADC:
    * De **0 a 250**: Nit / Foscor total.
    * De **251 a 500**: Cel cobert / Ennuvolat.
    * De **501 a 750**: Sol parcial / Clarianes.
    * De **751 a 1023**: Sol directe / Exposició alta.
* **Enunciat de l'activitat (Pràctica 3 - Oficial):** Construeix el muntatge d'un divisor de tensió unint una fotoresistència LDR de catàleg i una resistència fixa de $10\,\text{k}\Omega$. Acobla la sortida central d'unió directament a l'entrada analògica A3 d'Arduino. Afegeix un LED Groc connectat al pin digital D5. Programa un algorisme amb blocs anidats que classifiqui la irradiància mesurada en els 4 nivells definits, imprimint de manera clara pel monitor sèrie el text de format: `Llum: XXXX | Nivell: SOL DIRECTE`. Si es detecta una condició de nit (lectura de l'A3 inferior a 250), el programa ha de fer que el LED Groc de l'eixida parpellegi contínuament a intervals de 500 mil·lisegons com a avís de bloqueig tèrmic nocturn. Lliura l'URL amb el nom `Hort_NomCognom_P3`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Captador del senyal de llum. |
    | Fotoresistència LDR | 1 | Sensor de radiació òptica. |
    | Resistència Fixa | 1 | Valor: $10\,\text{k}\Omega$ (Marró-Negre-Taronja). |
    | Díode LED | 1 | Color Groc (Indicador d'avís / estat). |
    | Resistència de LED | 1 | Valor: $220\,\Omega$ (Protecció elèctrica). |

* **Preguntes de la sessió:**
    1. Quina utilitat agronòmica presenta conèixer si és de nit o hi ha sol directe a l'hora d'activar els sistemes d'aspersió d'aigua en un cultiu intel·ligent?
    2. Què és un condicional anidat i quin avantatge ofereix el seu ús en comptes de posar múltiples blocs de condició senzills separats?

---

### SETMANA 5: ENTRADES DIGITALS I MESURA DE PLUJA

#### S10: Entrades Digitals, Soroll de Contacte i Pull-Down
* **Explicació Teòrica:** Un polsador o interruptor és un element d'entrada digital que obre o tanca un camí elèctric. Els pins digitals de l'Arduino configurats com a entrades llegeixen l'estat d'un voltatge. Si connectem un polsador directament entre els 5V i un pin d'entrada, quan el premem llegirà correctament un valor ALT. Però, què passa quan el deixem anar? El pin queda desconnectat, surant a l'aire sense connexió física fixa. Aquest estat elèctric s'anomena **Pin Flotant**. L'antena del pin capta el soroll electromagnètic de l'aire, causant que Arduino llegeixi estats `HIGH` i `LOW` de forma completament aleatòria.
    
    Per a solucionar de manera rotunda aquest error crític de disseny s'utilitzen resistències de configuració **Pull-Down** (que forcen el pin cap a terra o 0V de referència constant mentre el botó roman en repòs o obert) o resistències **Pull-Up** (que mantenen el pin fixat a nivell ALT, llegint un estat BAIX en prémer el botó). A més, en prémer un botó mecànic real, les làmines metàl·liques interiors reboten generant falsos polsos d'encesa en microsegons (soroll de rebot). Per programari apliquem tècniques de detecció de canvi de flanc (comparar l'estat actual del polsador amb el seu estat directament anterior emmagatzemat a la memòria a través d'una variable) per a comptabilitzar una única acció per polsada neta.
* **Enunciat de l'activitat:** Disseny elèctric conceptual de configuracions de polsada digital sobre esquemes de protoboard de treball.

#### S11: El Simulador de Pluviòmetre
* **Explicació Teòrica:** Els pluviòmetres d'estacions professionals utilitzen un mecanisme intern de balancí mecànic. Cada vegada que el dipòsit de pluja interior s'omple, el balancí bascula i buida l'aigua, tancant un contacte elèctric que envia un pols discret equivalent a $0.2794\,\text{mm}$ de pluja acumulada. Al nostre laboratori virtual simularem aquest sensor mitjançant un polsador. Crearem una **Variable Global** a la memòria, que anomenarem `mm`, per emmagatzemar la pluja total registrada de forma incremental. Atès que treballar amb decimals en la programació bàsica per blocs presenta certes restriccions operatives, establirem per regles de disseny que cada 4 basculacions s'acumula exactament $1\,\text{mm}$ net d'aigua sobre el cultiu.
* **Enunciat de l'activitat (Pràctica 4 - Oficial - Parelles):** Connecta un polsador al pin digital d'entrada D3 utilitzant un circuit de resistència de configuració Pull-Down d'un valor de $1\,\text{k}\Omega$. Uneix un LED Blau al pin digital de sortida D6. Programa una lògica de blocs capaç de detectar el flanc de pujada del polsador (quan l'estat canvia de BAIX a ALT). Crea una variable per comptar les polsades totals. Cada vegada que aquest comptador registre 4 polsades completes, el programa incrementarà de forma automàtica la variable global `mm` en una unitat i reiniciarà el comptador parcial de polsades a zero. Transmet la informació al terminal sèrie sota el format: `Pulsació [N] -> Pluja acumulada: X.XX mm`. Si la variable de pluja `mm` supera el llindar crític de **5 mm** d'aigua acumulada, el LED Blau s'ha d'encendre fixament com a indicador de sòl completament saturat per precipitacions. Desa el fitxer com `Hort_NomsCognoms_P4`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Gestor de dades digitals i memòria. |
    | Polsador Mecànic | 1 | Simulador del balancí de pluja. |
    | Resistència Pull-Down | 1 | Valor: $1\,\text{k}\Omega$ (Marró-Negre-Vermell). |
    | Díode LED | 1 | Color Blau (Indicador de saturació d'aigua). |
    | Resistència de LED | 1 | Valor: $220\,\Omega$. |

* **Preguntes de la sessió:**
    1. Quina diferència hi ha entre l'estat d'un pin flotant i un pin connectat a una resistència de tipus Pull-Down?
    2. Per què és necessari utilitzar una variable global per a recordar la pluja acumulada al llarg del temps en comptes de llegir només l'estat momentani del polsador?

---

### SETMANA 6: BUCLES D'ITERACIÓ I CONTROL TEMPORITZAT

#### S12: Fonaments de les Estructures Iteratives: `for` i `while`
* **Explicació Teòrica:** Els ordinadors destaquen per la seva capacitat d'executar tasques repetitives a gran velocitat sense cometre errors. Per a governar aquestes accions en programació utilitzem les estructures iteratives o **bucles**:
    * **Bucle Determinant `for` (comptar):** S'utilitza quan coneixem amb exactitud el nombre de vegades precises que volem repetir una acció abans de començar el cicle. *Analogia:* Realitzar exactament 10 flexions, comptant de l'1 al 10, i en acabar, parar de forma mecànica.
    * **Bucle Indeterminat `while` (mentre...):** Repeteix una seqüència de codi de manera contínua i oberta *mentre* una condició lògica externa determinada sigui completament vertadera. En el moment exacte en què la condició passa a ser falsa, el bucle s'interromp immediatament. *Analogia:* "Mentre hi hagi menjar al plat, continuar menjant". No saps el nombre de cullerades exactes abans de seure a la taula, depèn de la quantitat de menjar de cada plat en temps real.
* **Enunciat de l'activitat:** Disseny d'algorismes teòrics sobre paper representant bucles d'actuació en elements domèstics de consum.

#### S13: Control de Reg Manual Temporitzat
* **Explicació Teòrica:** En tasques de manteniment del nostre hort intel·ligent, l'operador agrícola requereix mecanismes per activar un reg manual controlat durant un interval de temps fitxat sense esperar les ordres automatitzades dels sensors de camp. Això es programa creant bucles de comptatge temporitzat de seguretat. També és crític integrar sistemes amb prioritats per a permetre l'aturada instantània de seguretat en cas de detectar avaries a les canonades d'aigua de les línies del taller.
* **Enunciat de l'activitat (Pràctica 5 - Oficial - Parelles):** Connecta un LED Verd que representarà l'actuador de la bomba de reg al pin digital de sortida D8. Connecta un polsador d'activació manual al pin D2 i un segon polsador de parada immediata d'emergència al pin D3 (ambdós configurats amb resistències independents de Pull-Down de $1\,\text{k}\Omega$). Desenvolupa un algorisme on, en prémer el botó de reg D2, la bomba (D8) s'activi contínuament durant un temps exacte de 10 segons concrets. No obstant això, la lògica interna del codi ha de revisar contínuament el sistema: si en qualsevol instant d'aquest interval l'operador prem el botó d'emergència D3, la bomba s'ha d'apagar immediatament de forma prioritària sense esperar que s'exhaureixin els 10 segons inicials de la consigna. Envia missatges informatius pel monitor sèrie amb el format: `Humitat: XX% | Reg: ACTIU/ATURAT`. Lliura el teu projecte virtual com `Hort_NomsCognoms_P5`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Microcontrolador de control. |
    | Polsadors | 2 | Activació (D2) i Parada d'Emergència (D3). |
    | Resistències de polsador | 2 | Valor: $1\,\text{k}\Omega$. |
    | Díode LED | 1 | Color Verd (Simulador d'actuador electrobomba). |
    | Resistència de LED | 1 | Valor: $220\,\Omega$. |

* **Preguntes de la sessió:**
    1. Si utilitzem un únic bloc simple de retard de tipus `wait 10 secs` per a controlar el reg, per què no podem detectar si l'usuari prem el botó d'emergència durant aquest lapse?
    2. Com ajuda l'estructura iterativa a resoldre el problema de monitoritzar les entrades digitals de seguretat en temps real?

---

### SETMANA 7: CONTROL EN FUNCIÓ DE LA HUMITAT I HISTÈRESI

#### S14: El fenomen del pampallugueig i la banda neutra
* **Explicació Teòrica:** Un error clàssic en enginyeria d'automatització és dissenyar un control basat en un sol punt de consigna rígid. Per exemple, programar que si el sensor d'humitat mesura menys del 50% s'encenga la bomba, i si mesura 50% o més, s'apague. Què passa en la realitat? Si la humitat del sòl comença a oscil·lar prop d'aquest límit crític (ex: canviant ràpidament entre 49.9% i 50.1% a causa de fluctuacions elèctriques del sensor), la bomba de reg començarà a encendre's i apagar-se múltiples vegades per segon. Aquest fenomen de pampallugueig ràpid danyaria i cremaria en pocs dies els relés mecànics i les bombes reals del sistema de l'hort.
    
    Per a solucionar-ho de manera professional s'aplica una regla de control anomenada **Histèresi**. Aquesta consisteix a establir dos llindars de treball clarament separats que generen una **Banda Neutra de Seguretat**:
    * **Llindar Inferior (Activació):** Quan la humitat cau per davall del **35%**, el sòl està sec i s'activa el reg de forma immediata.
    * **Llindar Superior (Desactivació):** Quan la humitat supera el **75%**, la terra està prou xopa i s'atura el reg de forma fulminant.
    * **Zona de la Banda Neutra:** Si la humitat es troba en el rang mitjà entre el 35% i el 75%, el controlador manté de manera estable l'estat anterior en què es trobava el reg (si estava regant, continua regant; si estava apagat, es manté apagat), evitant qualsevol canvi transitori nociu per als actuadors de potència elèctrica.
* **Enunciat de l'activitat:** Resolució pràctica d'exercicis gràfics de corbes d'histèresi i definició de límits estables sobre paper tècnic.

#### S15: Automatització del reg per Humitat de sòl
* **Explicació Teòrica:** Per a mesurar l'estat de la terra utilitzarem un sensor d'humitat de sòl virtual. Aquest element mesura la resistivitat elèctrica de l'entorn. Mitjançant el bloc verd de matemàtiques **`map` (mapejar)**, transformarem les lectures directes de l'ADC analògic cap a una escala lògica percentual que resulti entenedora per al productor de l'hort (on 0% representa aire sec total i 100% equival a saturació total d'aigua en un vas).
* **Enunciat de l'activitat (Pràctica 6 - Oficial):** Connecta un sensor d'humitat de sòl virtual (`Soil Moisture Sensor`) de la biblioteca de components a l'entrada analògica A3 d'Arduino. Acobla un LED Verd al pin digital D7 (simulador de bomba) i un LED Roig d'alerta hídrica al pin digital D8. Programa en blocs l'etapa inicial de mapat de dades i implementa l'algorisme complet de control per histèresi descrit en la secció teòrica prèvia sobre el LED Verd (D7). Incorpora la següent mesura d'emergència: si el valor percentual d'humitat de la terra cau per davall d'un llindar de perill extrem de **20%**, el LED Roig (D8) ha d'executar un parpelleig d'alta velocitat (200ms encès / 200ms apagat) per alertar visualment de risc imminent de pèrdua de la plantació per sequera. Transmet les dades amb l'estructura de text: `Humitat: XX% | Reg: ACTIU/ATURAT`. Guarda el projecte com `Hort_NomCognom_P6`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Unitat controladora. |
    | Sensor Humitat de Sòl | 1 | Terminal de senyal acoblat al pin analògic A3. |
    | Díodes LED | 2 | Color Verd (Bomba, D7) i Roig (Alerta crítica, D8). |
    | Resistències de LED | 2 | Valor: $220\,\Omega$. |

* **Preguntes de la sessió:**
    1. Si el valor de la variable d'humitat del sòl puja des de 30% fins a 50%, descriu quin serà l'estat elèctric del pin digital D7 en aquest moment. I si el valor baixa des de 80% fins a 50%? Justifica la teva resposta basant-te en la banda neutra de la histèresi.
    2. Quin component elèctric real s'encarrega d'actuar com a interruptor aïllat per a connectar de forma segura una bomba d'aigua d'alta potència exterior utilitzant els polsos de baixa potència de la teva placa Arduino?

---

### SETMANA 8: MESURA DE LA VELOCITAT DEL VENT

#### S16: Anemòmetre i Escala de Beaufort
* **Explicació Teòrica:** El vent és un altre factor crític que afecta directament la distribució de l'aigua en els aspersors d'un camp agrícola. Un vent de caràcter fort desvia les gotes i evapora l'aigua abans de tocar el sòl, provocant un desbaratament inútil del recurs. Els anemòmetres són els sensors encarregats de mesurar la velocitat del vent. Al nostre laboratori virtual en TinkerCAD, simularem un anemòmetre calibrat emprant un potenciòmetre analògic adaptat mitjançant una relació d'escala directa programada sobre el codi.
    Aquesta fórmula ens permet obtenir una escala d'assaig precisa de 0 a 70 km/h. Aplicarem un model basat en la classificació internacional de l'**Escala de Beaufort** per coordinar les interrupcions dels regadors per ràfegues:
    * De **0 a 5 km/h** $\rightarrow$ Calma total / Vent inapreciable.
    * De **6 a 20 km/h** $\rightarrow$ Brisa marina normal típica de la costa de la Safor.
    * De **21 a 40 km/h** $\rightarrow$ Vent moderat (presència de vent de Garbí o de Llevant).
    * **Superior a 40 km/h** $\rightarrow$ Vent de caràcter fort. Activa un bloqueig total immediat per seguretat.
* **Enunciat de l'activitat (Pràctica 7 - Oficial - Parelles):** Amplia el teu circuit acoblant un potenciòmetre calibrat que representarà l'anemòmetre a l'entrada analògica A4, i col·loca un LED Groc d'avís de vent fort en una eixida digital lliure. Programa un algorisme amb operadors lògics matemàtics per a realitzar la conversió de dades i classificar els estats imprimint per terminal el text exactament configurat com: `Vent: XX.X km/h | Força: BRISA`. Si la velocitat real mesurada de manera contínua supera el llindar crític establit en els **30 km/h**, s'ha d'encendre immediatament el LED Groc de l'eixida i executar una ordre prioritària que apague per complet el canal del reg automàtic (LED Verd), independentment de les peticions o percentatges actuals d'humitat del sòl de l'hort. Guarda el fitxer cooperatiu com `Hort_NomsCognoms_P7`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Microcontrolador de la pràctica. |
    | Potenciòmetre | 1 | Simulador d'anemòmetre acoblat al pin analògic A4. |
    | Díode LED | 1 | Color Groc (Indicador d'avís de ràfegues de vent). |
    | Resistència | 1 | Valor: $220\,\Omega$. |

* **Preguntes de la sessió:**
    1. Quina component de vent local d'alta velocitat és molt freqüent durant les vespres d'estiu a la Safor i per què afecta el disseny dels regs agrícoles?
    2. Explica de quina manera actua el potenciòmetre a la pràctica per simular els canvis físics de velocitat que registraria un anemòmetre de cassoletes real.

---

### SETMANES 9 I 10: EL PROJECTE INTEGRAT DE L'ESTACIÓ IoT

#### S17 - S22: Desenvolupament de l'Estació Meteorològica Multivariable
* **Explicació Teòrica:** Arribem a la fase de tancament ciberfísic. Al llarg d'aquestes sis sessions de taller individual hauràs d'integrar totes les pràctiques realitzades de forma aïllada en un únic circuit global harmonitzat. L'objectiu és programar condicions intel·ligents creuades utilitzant operadors lògics combinats de tipus **`AND`** (I) i **`OR`** (O). 
    
    A l'operador lògic `AND`, la condició final serà vertadera només si **totes** i cadascuna de les condicions individuals es compleixen alhora de manera simultània. A l'operador lògic `OR`, n'hi ha prou que **una sola** de les sentències es compleixi perquè el sistema actuï. També calcularem matemàticament el cabal i lliurament hídric acumulat basant-nos en els temps coneguts d'obertura del canal de l'electrobomba de l'hortalissa.
* **Enunciat de l'activitat (Pràctica 8 - Oficial - Projecte d'Integració):** Dissenya un únic circuit integrat a TinkerCAD que realitzi de manera simultània la lectura de 6 variables ambientals: Temperatura (TMP36 a A2), Lluminositat (LDR a A3), Pluja (Polsador a D3), Humitat del sòl (Sensor a A0) i Velocitat de vent (Potenciòmetre a A4). Connecta un LED Verd de reg al pin D7, un LED Groc al pin D5 i un LED Roig d'alarmes al pin D8. Programa l'algorisme segons els següents requisits de disseny crítics:
    1. **Condició de Reg Automàtic Estàndard (Operador lògic combinat `AND`):** El canal de reg (LED Verd D7) s'activarà de forma automàtica si, i només si, es compleixen de forma síncrona les següents 4 condicions ambientals: La humitat del sòl és inferior al 30%, **I** la irradiància de la LDR indica condició de nit o ennuvolat ($< 500$), **I** la força de vent és menor a 30 km/h, **I** la pluja acumulada en la variable del pluviòmetre és zero ($0\,\text{mm}$).
    2. **Condició de Reg Crític per Supervivència:** Si la humitat del sòl cau per davall d'un llindar d'estrès extrem de **15%**, s'activarà immediatament el reg d'emergència (LED Verd encès), saltant-se per prioritat vital les restriccions anteriors de llum del sol, per protegir el cultiu de la mort tèrmica.
    3. **Modelització Matemàtica de Consum d'Aigua:** Sabent que la electrobomba de reg de l'hort lliura un cabal nominal de **10 litres d'aigua per minut** d'activitat, programa una seqüència lògica matemàtica que calcule i transmeta contínuament al monitor sèrie els litres totals d'aigua consumits pel sistema basant-se en els temps acumulats de reg actiu: $\text{litresTotals} = \text{minutsReg} \times 10$.
    4. **Interrupcions Manuals:** Mantén operatius els botons d'encesa manual i parada instantània de seguretat definits a les pràctiques prèvies. Lliura la memòria tècnica detallada juntament amb l'enllaç del projecte final batejat com `Hort_NomCognom_P8_Final`.
* **Taula de Components:**
    | Component | Quantitat | Descripció / Configuració |
    | :--- | :--- | :--- |
    | Placa Arduino UNO | 1 | Cervell autòmat central de l'estació. |
    | Placa de proves (Protoboard)| 1 | Gran format per allotjar el cablejat modular. |
    | Sensor TMP36 | 1 | Entrada analògica de temperatura (A2). |
    | Fotoresistència LDR | 1 | Sensor divisor de llum acoblat a A3. |
    | Potenciòmetre | 1 | Sensor simulador d'anemòmetre connectat a A4. |
    | Polsadors Mecànics | 3 | Pluviòmetre (D3), Activa manual (D2), Atura emergència (D4). |
    | Resistències Fixes | 4 | 1 de $10\,\text{k}\Omega$ (LDR) i 3 de $1\,\text{k}\Omega$ (Polsadors Pull-Down). |
    | Díodes LED | 3 | Verd (D7), Groc (D5), Roig (D8). |
    | Resistències de LED | 3 | Valor: $220\,\Omega$. |

* **Preguntes de la secció de tancament del projecte:**
    1. Si es compleix que la terra està molt seca (Humitat 25%) i el vent està en calma, però l'LDR detecta que hi ha Sol Directe a causa del migdia, s'activarà el canal de reg automàtic estàndard? Quina estructura d'operador lògic ho impedeix i quin benefici ecològic té aquesta decisió de disseny?
    2. Descriu detalladament com has desenvolupat l'estratègia matemàtica al teu codi de blocs per aconseguir registrar el consum acumulatiu de litres d'aigua lliurats de forma neta pel sistema.

---

### SETMANA 11: TRANSFERÈNCIA REAL, BIG DATA I DEFENSEN DEL PROJECTE

#### S23 - S24: Migració a Codi Text i Desplegament de l'Estació Real
* **Explicació Teòrica:** Els blocs visuals són una eina excel·lent per a aprendre lògica informàtica, però en el sector industrial real els enginyers escriuen línies de codi text (`.ino` en el cas d'Arduino, derivat de llenguatges com C/C++). Aprendrem a descarregar el codi de text generat automàticament per TinkerCAD, obrirem l'IDE oficial i analitzarem com es declaren funcions clau escrites com `pinMode()`, `digitalWrite()`, o `analogRead()`. 
    
    A continuació, transferirem els programes polits cap a les plaques reals del laboratori de l'estació meteorològica física de l'institut. Finalment, estudiarem com s'interconnecten aquestes dades de camp utilitzant petits microordinadors integrats **Raspberry Pi**, que actuen com a servidors de bases de dades locals per a publicar la informació ambiental cap a un panell gràfic accessible per internet (**Dashboard** digital) de control tècnic en viu.
* **Enunciat de l'activitat:** Migració guiada, connexió de maquinari real a l'aula, calibratge físic d'equips i lectura del Dashboard local de l'hort del centre.

#### S25: Presentació Big Data i Debat Crític Social
* **Explicació Teòrica:** La suma de centenars de sensors transmetent informació en viu cada segon dona lloc al fenomen del **Big Data** (Dades massives). Al sector agrícola de la Safor, l'anàlisi intel·ligent d'aquestes bases de dades acumulades al llarg d'anys permet predir de manera informàtica el volum real i la qualitat de les collites futures, així com dissenyar algoritmes predictius d'estalvi de recursos.
    
    No obstant això, el processament massiu d'informació també s'aplica de forma diària en àrees que t'afecten directament: les teves xarxes socials personals (TikTok, Instagram, YouTube). Analitzarem de manera rigorosa com operen els algorismes d'aquestes plataformes privades, dissenyats específicament per a capturar la teva atenció i retenir-te davant de la pantalla el màxim de minuts possible. Debatrem sobre l'ètica d'aquests sistemes informàtics i com s'utilitza la manipulació de dades personals dirigides per alterar els teus estats d'ànim o crear-te necessitats falses per a alimentar un model de consumisme massiu global.
* **Enunciat de l'activitat:** Participació activa en el debat moderat a l'aula al voltant de la privacitat, els algorismes de retenció i la sobirania tecnològica.

#### S26 - S27: Jornades d'Exposició Oral i Defensa del Projecte
* **Explicació Teòrica:** El treball de l'enginyeria no és complet fins que es comunica de forma clara el producte creat cap a la societat. Durant aquestes dues sessions finals realitzaràs una defensa oral teoricotècnica individual de 3 a 4 minuts de durada davant el gran grup de l'aula per exposar el teu Sistema de Control de l'Hort Intel·ligent. L'esquema d'exposició obligatori constarà de quatre fases:
    1. *Introducció conceptual:* Definició d'un sistema de control i justificació ecosocial de la teva solució.
    2. *Arquitectura de maquinari:* Descripció del controlador (Arduino UNO) utilitzat com a nucli.
    3. *Fase d'Entrades:* Explicació de la llista de sensors connectats i com s'escalen o mapegen les seves dades.
    4. *Fase d'Actuació:* Descripció de la bomba gestionada i justificació del funcionament lògic dels teus algorismes de protecció (Histèresi i interrupcions de vent/emergència).
* **Enunciat de l'activitat:** Exposició oral individual enquadrada en temps, utilitzant suports visuals multimèdia i resolució de la ronda de preguntes del professorat.

---

## 3. RÚBRICA D'AVALUACIÓ PER A LES PRÀCTIQUES (TinkerCAD)

Cadascuna de les 8 pràctiques oficials de simulació lliurades a través de les URL de TinkerCAD s'avaluarà utilitzant de forma estricta aquesta rúbrica analítica competencial adaptada al currículum LOMLOE de la GVA:

| Criteri de Qualitat de la Pràctica | Nivell 5 (65% - 80%) [Excel·lent] | Nivell 4 (50% - 65%) [Aconseguit] | Nivell 3 (25% - 45%) [En procés] | Nivell 2 (0% - 25%) [Iniciat] | Nivell 1 (0%) [No presentat] |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Muntatge Físic i Ordre del Circuit** *(CA 2.2)* | El muntatge és excel·lent, completament net i ordenat. Segueix el codi de colors estipulat (Vermell=5V, Negre=GND). Els components es distribueixen de forma òptima. | El muntatge funciona i està endreçat, tot i que presenta algunes cruïlles menors de cables o algun descuit lleu en la coloració de les línies secundàries. | El circuit és funcional, però el traçat de cables és confús, està desordenat i no respecta el codi de colors corporatiu de forma generalitzada. | Mostra problemes greus d'ordre, cables mal connectats o encreuaments que dificulten seguir el circuit, malgrat funcionar parcialment. | |
| **Lògica, Estructura i Resolució del Codi** *(CA 2.1, CA 3.2)* | L'algorisme resol de manera brillant l'enunciat. Aplica correctament les estructures, operadors i lògiques complexes (com histèresi o canvis de flanc). | El programa assoleix tots els objectius descrits. La lògica és correcta, encara que podria optimitzar-se el nombre de blocs utilitzats. | El codi resol la part principal de la pràctica, però falla en condicions secundàries, l'anidament o el control de retards. | El programa presenta errors en la seqüència lògica bàsica i requereix suport constant del docent per a poder funcionar. | |
| **Nomenclatura, Variables i Comentaris** *(CA 2.3)* | Ocupa nomenclatures completament descriptives per a elements. Incorpora comentaris textuals rics que detallen amb claredat què fa cada seqüència. | Usa variables ben definides. S'inclouen comentaris estructurats en els blocs més significatius del programa. | Declara variables, però usa noms genèrics o poc descriptius. Els comentaris explicatius són escassos o molt superficials. | Manca de comentaris descriptius en el codi. Totes les variables i elements estan mal anomenats o generen confusió. | |
| **Monitorització i Depuració Sèrie** *(CA 2.1)* | Gestiona el terminal de forma impecable. Mostra dades amb el format textual exacte demanat i intervals correctes de temps. | El monitor sèrie transmet la informació requerida per l'enunciat, tot i que el format de text presenta desajustos menors. | Imprimeix valors pel port sèrie, però s'observen pèrdues de dades per manca de newline o per no ajustar correctament els retards. | Mostra valors arbitraris o text sense processar que no aporta informació útil per a la depuració del circuit. | |