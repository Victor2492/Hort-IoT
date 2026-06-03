# DOSSIER DOCENT: SITUACIÓ D'APRENETATGE 6
## "HORT INTEL·LIGENT: SISTEMES DE CONTROL I IOT"

**Centre Educatiu:** IES TIRANT LO BLANC  
**Nivell:** 4t d'Educació Secundària Obligatòria (ESO)  
**Matèria:** Tecnologia  
**Temporalització:** 3r Trimestre (27 Sessions)  
**Normativa de Referència:** Decret 107/2022, de 5 d'agost, del Consell (Currículum LOMLOE Comunitat Valenciana - GVA)

---

## 1. CONTEXT I JUSTIFICACIÓ

### 1.1. Descripció del Projecte i Repte
Aquesta Situació d'Aprenentatge, titulada **"Hort Intel·ligent"**, planteja a l'alumnat un repte tecnològic real i de forta base ecosocial: el disseny, programació i simulació d'una estació meteorològica ciberfísica integrada amb un sistema de reg automàtic optimitzat. 

El nucli del projecte respon a les necessitats reals del sector agrícola de la comarca de la Safor (Gandia), on la gestió eficient de l'aigua i l'adaptació a les condicions de sequera i canvi climàtic són prioritàries. Mitjançant dades estadístiques, s'introdueix l'alumnat en com el reg a degoteig pot reduir el consum d'aigua un 50% en condicions òptimes, millorant alhora la productivitat i qualitat de la collita.

El projecte s'estructura sota una metodologia teoricopràctica incremental basant-se en la plataforma de simulació ciberfísica **TinkerCAD Circuits**. Al llarg de 27 sessions d'55 minuts, l'alumnat combinarà sessions magistrals de fonaments tècnics amb tallers de disseny electrònic i programació per blocs d'Arduino UNO. El treball alternarà el format individual per a l'assoliment de competències clau (com l'examen de la Sessió 5 o les pràctiques inicials) amb el treball cooperatiu per parelles rotatives (amb la condició estricta que no es pot repetir parella fins haver treballat amb tothom), fomentant així la coeducació, la cohesió del grup i la col·laboració interprofessional.

El projecte culmina amb la transferència tecnològica real del codi desenvolupat pels grups a un autòmat programable físic interconnectat amb un servidor basat en Raspberry Pi, mostrant l'aplicabilitat real del seu aprenentatge en entorns IoT, Dashboards en temps real i l'anàlisi de Big Data crític.

### 1.2. Taula Descriptiva Síntetitzada de les Sessions
| Codi Sessió | Tipus d'Agrupament | Durada | Objectiu Principal / Lliurable |
| :--- | :--- | :--- | :--- |
| **S01** | Gran grup | 55 min | Presentació socioambiental de l'hort i entorn TinkerCAD. |
| **S02** | Gran grup | 55 min | Teoria: Elements de control (Sensors, Controladors, Actuadors). |
| **S03** | Gran grup i Individual | 55 min | Exercici 1: Exemple pampallugueig de LED (Pin 13). |
| **S04** | Individual | 55 min | Exercici 2: Disseny d'un Semàfor. |
| **S05** | Individual | 55 min | Prova Escrita Temàtica: Sistemes de Control conceptuals. |
| **S06** | Individual | 55 min | Pràctica 1: Senyals analògics i Monitor Sèrie amb Potenciòmetre. |
| **S07** | Parelles | 55 min | Pràctica 2: Sensor de temperatura TMP36 i Alertes `if/else`. |
| **S08 - S09** | Individual | 110 min | Pràctica 3: Mesura d'irradiància solar amb LDR i Divisor de Tensió. |
| **S10 - S11** | Parelles | 110 min | Pràctica 4: Simulador de Pluviòmetre amb Polsador, Variables i Rebots. |
| **S12 - S13** | Parelles | 110 min | Pràctica 5: Control de Reg Manual Temporitzat (`for` i `while`). |
| **S14 - S15** | Individual | 110 min | Pràctica 6: Automatització de reg per Humitat de sòl amb Histèresi. |
| **S16** | Parelles | 55 min | Pràctica 7: Anemòmetre, escala de Beaufort i interrupció de seguretat. |
| **S17 - S22** | Individual | 330 min | Pràctica 8: Projecte Integrat d'Estació Meteorològica i Reg Multivariable. |
| **S23 - S24** | Gran grup | 110 min | Desplegament Físic: Pujada de codi a estació real i Servidor Raspberry Pi. |
| **S25** | Gran grup | 55 min | Teoria i Debat Crític: Big Data, algoritmes de xarxes socials i consumisme. |
| **S26 - S27** | Gran grup (Avaluació) | 110 min | Exposició Oral Individual (Defensa del sistema del control). |

---

## 2. VINCULACIÓ CURRICULAR (GVA - DECRET 107/2022)

Aquesta Situació d'Aprenentatge està directament vinculada amb el currículum oficial de la Comunitat Valenciana per a Tecnologia de 4t d'ESO, cobrint de forma específica els següents elements normatius:

### 2.1. Competències Específiques (CE) i Criteris d'Avaluació (CA)
* **CE2. Programar, sintonitzar i simular aplicacions digitals i sistemes de control programables** mitjançant el disseny de programes informàtics i de robòtica i l’ús de la placa microcontroladora per a la resolució de problemes o reptes de la vida quotidiana de manera creativa i eficient.
    * **CA 2.1.** Dissenyar, sintonitzar, simular i programar algorismes d'automatització mitjançant programació estructurada per blocs en plataformes virtuals (TinkerCAD).
    * **CA 2.2.** Connectar components i analitzar circuits electrònics de forma neta i endreçada (codificació de colors de cables, resistències limitadores) associats a un microcontrolador.
    * **CA 2.3.** Modificar, depurar i millorar el codi escrit o per blocs introduint comentaris i variables descriptives per a optimitzar el control físic d'un entorn.
* **CE3. Abordar problemes tecnològics complexos amb autonomia i actitud emprenedora,** aplicant coneixements interdisciplinaris, planificant l'activitat i cercant solucions innovadores des de la perspectiva de la sostenibilitat i la transició ecològica.
    * **CA 3.1.** Avaluar la sostenibilitat d'un sistema tècnic (ús eficient de l'aigua en l'agricultura de la Safor, consum elèctric, energies renovables).
    * **CA 3.2.** Resoldre problemes de caire multivariable emprant operadors lògics (AND, OR) i diagrames de flux complexos lligats a fenòmens ambientals.
* **CE5. Comunicar i difondre projectes i idees tecnològiques de manera clara i atractiva,** utilitzant formats rics i multimèdia, emprant el vocabulari tècnic i defensant de manera crítica el treball desenvolupat.
    * **CA 5.1.** Expressar oralment amb claredat i ordre el funcionament d'un sistema de control automatitzat.
    * **CA 5.2.** Utilitzar de manera correcta la terminologia científico-tècnica (actuadors, sensors analògics, PWM, histèresi, variables, constants).

### 2.2. Sabers Básics Tractats
* **Bloc de Sistemes de Control i Robòtica:**
    * Arquitectura d'un sistema de control de llaç obert i tancat.
    * Característiques físiques i connexió d'actuadors i sensors (analògics i digitals).
    * El convertidor analògic-digital (ADC) de 10 bits d'Arduino (relació de 0-5V a valors 0-1023).
* **Bloc de Programació i Computació:**
    * Estructures de control seqüencials, condicionals (`if/else`, condicionals anidats) i iteratives (`for`, `while`).
    * Variables globals i locals. Mapeig de rangs analògics (`map()`).
    * Lògica d'histèresi aplicada a sistemes crítics.
    * El Port Sèrie: monitorització i depuració de dades.
* **Bloc de Tecnologia Sostenible i Transició Ecològica / Digital:**
    * Optimització de recursos hídrics. L'impacte del Big Data i l'IoT en el sector primari.
    * Anàlisi crític de la societat de la informació i els algorismes de captació d'atenció.

---

## 3. PLANIFICACIÓ DETALLADA DE LES SESSIONS

A continuació, es desplega la seqüència didàctica formalitzada a partir de la graella de treball del trimestre:

### Setmana 1: Fonaments Conceptuals i Introducció a l'Entorn Ciberfísic
* **S01: Presentació del projecte i TinkerCAD (Gran grup - 55 min)**
    * *Continguts:* Plantejament ecosocial del projecte "Hort Intel·ligent". Presentació de l'impacte de la sequera, la necessitat de reduir el consum d'aigua en un 50% mitjançant el reg per degoteig a l'entorn de la Safor, i com l'anàlisi de dades ajuda a predir la grandària i qualitat del fruit. Introducció als requisits dels lliurables: circuits nets (codi de colors de cables) i codi estructurat amb comentaris i nomenclatures descriptives. Presentació de la metodologia de parelles rotatives (no es pot repetir company/a de grup).
    * *Recursos:* Presentació teòrica (PPT), enllaç d'accés a les classes de TinkerCAD.
* **S02: Sistemes de Control. Sensors, Controladors i Actuadors (Gran grup - 55 min)**
    * *Continguts:* Definició i estructura d'un sistema de control. Identificació de components: elements d'entrada (sensors), cervell processador (controladors) i elements d'eixida (actuadors). Exemples pràctics del món quotidià i de l'entorn agrícola.
    * *Recursos:* Presentació teòrica PPT de Sistemes de Control.
* **S03: Programació d’Arduino amb blocs en Tinkercad (Gran grup i Individual - 55 min)**
    * *Continguts:* Repàs conceptual de la sessió anterior. Aprenentatge de la programació per blocs: definició, funcionalitats i tipologies de blocs a TinkerCAD. Comprensió profunda de l'execució seqüencial del codi i de les estructures base `on start` (configuració inicial) i `forever` (bucle indefinit). Estudi de la temporització mitjançant el bloc `wait` (`delay()`).
    * *Activitat Pràctica Individual:* Muntatge i connexió física virtual del primer circuit bàsic: Arduino UNO, resistència limitadora de 220 Ω (codificada morat-pin 13 a ànode, i negre-càtode més curt a GND). Càrrega i simulació del codi de pampallugueig per defecte. Verificació docent a l'aula del funcionament correcte i recollida de l'URL del projecte.

### Setmana 2: El Senyal Digital, la Llei d'Ohm i la Prova de Control
* **S04: Arduino: setup, loop i primer programa (Semàfor) (Individual - 55 min)**
    * *Continguts:* Repàs de la Llei d'Ohm ($V = I \times R$). Disseny pràctic de resistències de protecció per a díodes LED alimentats a 5V des d' Arduino (Càlcul per a un LED estàndard de 2V i 20mA: $R = \frac{5 - 2}{0.02} = 150\,\Omega$, seleccionant el valor estàndard comercial més proper de $220\,\Omega$). Estudi de les eixides digitals de l'autòmat (`Output blocks`) configurades com a estats binaris `HIGH` (ALT, 5V) i `LOW` (BAIX, 0V). Ús obligatori del codi de colors de cables lineals: Vermell per a 5V i Negre per a GND.
    * *Exercici Pràctic d'Avaluació (Semàfor):* Muntatge autònom d'un circuit de 3 LEDs a TinkerCAD (Verd connectat a pin digital D6, Groc a D5, Roig a D4). Cada component disposa d'una resistència limitadora de $220\,\Omega$ connectada cap a terra (GND). Programació seqüencial lògica en el bloc `forever`: encendre D6, esperar 1s, apagar D6, encendre D5, esperar 1s, apagar D5, encendre D4, esperar 1s, apagar D4. Lliurament formal de l'URL sota la nomenclatura de fitxer "Hort_NomCognom_EP2". Reflexió sobre preguntes d'autoaprenentatge: Què passaria si eliminem la instrucció "D6 BAIX"? O si es treuen tots els blocs `wait`?
* **S05: Prova escrita Sistemes de Control (Individual - 55 min)**
    * *Continguts:* Prova de control teòrica i formal a realitzar de manera individual a l'aula. Avalua de manera directa les evidències del nivell de coneixements assolits respecte als blocs d'estudi teòrics impartits (conceptes de sistemes de control, arquitectura, sensors, actuadors, unitats físiques elèctriques i la llei d'Ohm).

### Setmana 3: Entrades Analògiques, sensors de Temperatura i Alertes Lògiques
* **S06: Senyals analògics: el potenciòmetre (Individual - 55 min)**
    * *Continguts:* Diferenciació clara entre senyal digital (0 o 1, discret) i senyal analògic (rang continu de valors infinits, representats a la pissarra gràficament amb senyals quadrats vs sinusoïdals). Estudi de l'arquitectura d'Arduino UNO: disposició de 6 pins d'entrada analògics (A0-A5) vinculats a un convertidor analògic-digital (ADC) de 10 bits, el qual transforma tensions de 0V a 5V en nombres enters operables de 0 a 1023. Introducció al bloc d'entrada `read analog pin Ax`. Aprenentatge del Port Sèrie mitjançant el bloc `print to serial monitor` (equivalent a `Serial.println()` associat a un `Serial.begin(9600)` al `setup`). Estudi del potenciòmetre com a resistència variable capaç d'actuar com a simulador universal de sensors ambientals en l'etapa de desenvolupament virtual.
    * *Pràctica 1 (Oficial):* Muntatge en protoboard d'un potenciòmetre simulant un sensor d'humitat ambient. Connexió del pin central a l'entrada analògica A0, i els extrems a les línies d'alimentació de 5V i GND. Codi per a llegir el valor de tensió variable cada 500ms i transmetre'l en temps real al monitor sèrie per visualitzar la variació en girar el dial. Lliurament de l'URL del projecte anomenat "Hort_NomCognom_P1". Resolució de preguntes tècniques: diferències entre senyals i magnituds mesurades al pin A0.
* **S07: Sensor de temperatura TMP36 (Parelles - 55 min)**
    * *Continguts:* Estudi del circuit integrat TMP36, el pin d'eixida i la relació de proporcionalitat entre la tensió tramesa i els graus centígrads detectats. Contextualització geogràfica real amb les temperatures esperades en el municipi de Gandia (Safor), oscil·lant de valors de 7°C (nit d'hivern) a 30°C (dia d'agost) per a verificació de rangs. Estudi de la instrucció de condició lògica `if/else` (blocs taronges de control) recolzada en operadors matemàtics de comparació ($<$, $\le$, $=$, $\ne$, $>$, $\ge$).
    * *Pràctica 2 (Oficial):* Disseny del circuit amb un sensor de temperatura TMP36 connectat a l'entrada analògica A2 (pin esquerre a 5V, dret a GND, central a A2). Inclusió d'un LED groc de seguretat en l'eixida digital D5 amb la seua corresponent resistència de $220\,\Omega$. Programació per blocs d'un bucle temporitzat perquè execute la lectura cada minut utilitzant el bloc pur `read temperature sensor`. Configuració de l'eixida sèrie amb format: "Temperatura: X ºC". Programació d'una alerta crítica: si la temperatura és inferior a 0ºC, s'activa immediatament el pin digital D5 (LED groc encès) i s'imprimeix la cadena "TEMPERATURA BAIX ZERO: X ºC". Lliurament cooperatiu "Hort_NomsCognoms_P2" i reflexió sobre el funcionament lògic del bloc condicional.

### Setmana 4: Mesura d'Irradiància Solar mitjançant Divisors de Tensió
* **S08 - S09: Fotoresistència LDR: mesura d’irradiància solar (Individual - 2 sessions: 110 min)**
    * *Continguts:* Característiques de funcionament d'una resistència LDR dependent de la llum incident (resistència $>1\,\text{M}\Omega$ en foscor profunda, baixant a valors pròxims a $\sim 100\,\Omega$ sota llum intensa). Comprensió del circuit divisor de tensió necessari per a captar senyals operables en automatització: LDR en sèrie amb una resistència de referència fixa de $10\,\text{k}\Omega$ alimentats entre 5V i GND, captant el senyal variable des del punt central d'unió directament acoblat a l'entrada analògica A3. Introducció conceptual a la lògica de condicionals anidats (`if/else` imbricats) per a tasques d'escala multillindar. Explicació de la correspondència d'escala relativa de l'LDR amb l'escala real en lux provinent d'un sensor digital real BH1750 (que assoleix els 100.000 lux a plena llum del sol en la comarca de la Safor).
    * *Classificació Tècnica de Llindars d'Irradiància:*
        * $0 - 250$: Fosc / Nit $\rightarrow$ Bloqueig de reg automàtic per evitar baixes temperatures i aprofitar la saó de la nit.
        * $251 - 500$: Ennuvolat $\rightarrow$ Possibilitat de reg moderat.
        * $501 - 750$: Sol parcial $\rightarrow$ Evapotranspiració de grau mitjà.
        * $751 - 1023$: Sol directe $\rightarrow$ Evapotranspiració de caràcter alt, requeriment de reg actiu programat.
    * *Pràctica 3 (Oficial):* Muntatge del divisor de tensió (LDR + $10\,\text{k}\Omega$) a l'entrada A3, i d'un LED groc d'avís connectat a l'eixida digital D5. Programació estructurada amb blocs anidats per classificar la lluminositat detectada en els 4 nivells definits, imprimint per pantalla el format: "Llum: XXXX | Nivell: SOL DIRECTE". L'algorisme ha de fer que el LED groc execute un pampallugueig regulat (500ms actiu / 500ms inactiu) en cas de llum totalment insuficient (lectura de l'A3 $< 250$). Comprovació manual del cursor de lluminositat de TinkerCAD, registre d'URL del projecte de codi d'exemple i resposta a preguntes conceptuals lligades a la utilitat del sensor en l'hort intel·ligent.

### Setmana 5: Entrades Digitals, Variables Globals i Tractament de Rebots
* **S10 - S11: Entrades digitals i variables: polsador, comptador i simulació de pluja (Parelles - 2 sessions: 110 min)**
    * *Continguts:* Declaració, ús i utilitat pràctica de variables globals en memòria informàtica. Estudi de la configuració d'un pin digital operant en modalitat d'entrada mitjançant el bloc `read digital pin x`. Estudi dels riscs físics d'un pin digital elèctricament "flotant" i com solucionar-ho per no obtindre estats arbitraris o indeterminats; aplicació de les configuracions de resistències d'impedància d'entrada Pull-Up o Pull-Down. Explicació del mode d'impedància interna d'Arduino `INPUT_PULLUP` ($~20\,\text{k}\Omega$), on el pin es manté a nivell ALT (5V) per defecte, treballant amb lògica inversa (llegeix un estat BAIX en ser premut un polsador derivat a GND). Estudi detallat dels fenòmens físics de rebot mecànic en els contactes d'un polsador i tècniques de mitigació per programari. Aprenentatge de la detecció de canvis d'estat d'un polsador (flancs de pujada i de baixada), guardant l'estat anterior en memòria per a incrementar comptadors exactes en comptes de registrar la pressió mantinguda.
    * *Model de Simulació Matemàtica de Pluviòmetre de Balancí:* Els pluviòmetres reals generen un pols elèctric discret per cada basculació mecànica completa del balancí interior, equivalent a $0.2794\,\text{mm}$ d'aigua de pluja acumulada. Com que la programació bàsica per blocs d'aquest entorn presenta certes limitacions amb nombres decimals, s'estableix per disseny que cada 4 basculacions s'acumula $1\,\text{mm}$ net de pluja.
    * *Pràctica 4 (Oficial):* Muntatge del circuit: polsador connectat directament al pin D3 utilitzant una resistència de protecció de $1\,\text{k}\Omega$ cap a GND (Pull-Down elèctric segons enunciat base, o lògica de flanc), i un LED Blau connectat a l'eixida digital D6 amb una resistència de $220\,\Omega$. Programació per blocs de l'algorisme de detecció de flanc de pujada (canvi transitori de BAIX a ALT) que incremente un comptador de pulsacions. Creació de la variable global denominada `mm`. Cada vegada que el comptador registre 4 polsades completes, s'incrementarà el valor de la variable `mm` en una unitat, executant immediatament després un reset o reinici a zero del comptador parcial de polsades. Transmissió de dades cap al terminal sèrie amb l'estructura: "Pulsació [N] $\rightarrow$ Pluja acumulada: X.XX mm". Si el valor acumulat de la variable `mm` és superior a un llindar crític de $5\,\text{mm}$ (pluja significativa), s'encendrà automàticament el LED Blau (D6).
    * *Repte d'Ampliació Avançat:* Dissenyar la detecció del canvi d'estat net mitigant per lògica de programari els efectes de rebot mecànic sense necessitat de recórrer a la utilització del bloc simple de retard `wait`. Registre d'URL del repositori virtual.

### Setmana 6: Bucles d'Iteració i Algorismes de Reg Manual
* **S12 - S13: Control de reg manual temporitzat (Parelles - 2 sessions: 110 min)**
    * *Continguts:* Estudi exhaustiu de les estructures iteratives de control i bucles d'execució repetitiva: el bucle determinat `for` i el bucle condicional indeterminat `while`. Ús d'analogies clares per a l'aula (el bucle `for` com realitzar exactament un nombre fitxat d'exercicis repetitius coneguts prèviament d'1 a 5; el bucle `while` descrit com una condició oberta en temps real: *"mentre hi haja paella a la taula, jo pego cullerada, fins que s’acabe"*). Integració d'estructures de reg manual i l'ús de prioritats de seguretat en elements d'actuació (bomba).
    * *Pràctica 5 (Oficial):* Desenvolupament en un únic circuit de la funcionalitat d'interrupció manual d'emergència i activació de reg controlada per polsadors. Connexió elèctrica: un LED verd representant l'actuador de la bomba de reg connectat a l'eixida D8 (amb resistència de $220\,\Omega$), un polsador d'activació de reg en el pin digital D2 i un segon polsador d'aturada mecànica connectat directament al pin D3 (ambdós configurats amb resistències de polsada de $1\,\text{k}\Omega$). Lògica algorísmica: quan es detecte la pressió de D2, el reg (pin D8) s'activarà de manera contínua durant un interval exacte de 10 segons (simulat o comptabilitzat a través d'estructures de cicle). No obstant això, si durant aquest lapse es detecta de manera instantània la pressió sobre el polsador de parada D3, el flux s'ha d'interrompre immediatament, apagant D8. Eixida de dades cap al monitor sèrie formalitzada en text com: "Humitat: XX% | Reg: ACTIU/ATURAT". Lliurament de l'enllaç de simulació.

### Setmana 7: Control Automatitzat per Humitat i Lògica d'Histèresi
* **S14 - S15: Control del reg en funció de la humitat del sòl (Individual - 2 sessions: 110 min)**
    * *Continguts:* Disseny d'automatismes que vinculen directament la lectura de dades d'un sensor amb l'activació guiada de components actuadors reals. Comprensió profunda del fenomen físic de l'oscil·lació ràpida (pampallugueig danyós de relés i bombes d'aigua elèctriques si s'estableix un únic punt de consigna rígid, com *"regar quan la humitat siga menor del 60% i apagar quan siga major o igual"* en zones pròximes al límit crític). Aprenentatge i implementació de la solució d'enginyeria de control denominada **Histèresi**, que fa ús de dos llindars de treball clarament separats i diferenciats per a estabilitzar el sistema, memoritzant l'estat anterior mitjançant variables de control. Estudi teòric de la funció real de components de potència elèctrica com el Relé de commutació, actuant com un interruptor electrònic controlat de forma aïllada per obrir o tancar línies elèctriques de potència exterior de 12V mitjançant els polsats dèbils de 5V directes d'Arduino. Aprenentatge de la funció matemàtica de reescalat i mapeig lineal de rangs de dades mitjançant l'ús del bloc d'operacions `map`, transformant els valors analògics directes registrats pel sensor cap a una escala lògica comprensible d'humitat relativa (0% a 100%).
    * *Lògica d'Histèresi Aplicada per Disseny:*
        * Llindar BAIX de Consigna (Activació de seguretat): Humitat inferior al $35\% \rightarrow$ Activa de forma immediata la bomba de reg.
        * Llindar ALT de Consigna (Desactivació d'estalvi): Humitat superior al $75\% \rightarrow$ Atura de forma immediata la bomba de reg.
        * Rang de Bloqueig Estable: Si el percentatge d'humitat es troba en el rang mitjà fixat entre el $35\%$ i el $75\%$, l'autòmat manté invariable l'estat elèctric de reg desenvolupat en el cicle anterior sense realitzar cap tipus de canvi transitori.
    * *Pràctica 6 (Oficial):* Connexió del sensor d'humitat de sòl virtual de TinkerCAD (`Soil Moisture Sensor`) alimentat en protoboard i amb l'eixida connectada a l'entrada analògica A3. Connexió de l'actuador bomba simulat per un LED verd acoblat al pin digital D7 i d'un segon LED de color Roig per a alertes d'estrès hídric en el pin digital D8 (amb resistències de $220\,\Omega$). Programació en blocs de l'etapa inicial de mapat per trobar valors màxims i mínims de l'entrada analògica i fixar-los en percentatges purs ($0\% = \text{sec d'aire}$, $100\% = \text{aigua o saturació total}$). Programació de l'algorisme complet d'histèresi controlant el LED verd (D7). Incorporació d'una alerta visual crítica: si l'estat de la variable d'humitat relativa cau per davall del llindar de perill del $20\%$, s'executarà un pampallugueig d'alta velocitat (200ms encès / 200ms apagat) en el LED Roig (D8). Monitor sèrie amb format idèntic: "Humitat: XX% | Reg: ACTIU/ATURAT". Verificació a l'aula del no-canvi de l'estat dins de la banda neutra de $35-75\%$. Registre de l'enllaç URL de treball.

### Setmana 8: Mesura de Velocitat de Vent i Escala de Beaufort
* **S16: Mesura de vent i escala de Beaufort (Parelles - 55 min)**
    * *Continguts:* Simulació d'un element anemòmetre real mitjançant l'ús d'un potenciòmetre analògic calibrat. Aprenentatge de fórmules d'escalat numèric lineal d'enginyeria directes sobre codi(permet obtindre un rang d'escala propi d'assaig de 0 a 70 km/h). Estudi de la normativa meteorològica de la classificació de l'Escala de Beaufort simplificada i el seu acoblament als programes de seguretat en regs agrícoles. Curiositats de caire geogràfic local: el Garbí descrit com el vent provinent del Sud-Oest (SW), component clàssic i d'alta freqüència a la comarca de la Safor durant l'època estival, i el Llevant, component humit d'E-NE directament associat a aportacions marines del Mediterrani; tots dos capaços de superar els 50 km/h en condicions climàtiques complexes.
    * *Escala de Beaufort Establida pel Disseny:*
        * $0 - 5\,\text{km/h} \rightarrow$ Força 0-1: Calma total.
        * $6 - 20\,\text{km/h} \rightarrow$ Força 2-4: Brisa marina normal de la costa de la Safor.
        * $21 - 40\,\text{km/h} \rightarrow$ Força 5-6: Vent moderat (Garbí o Llevant).
        * $> 40\,\text{km/h} \rightarrow$ Força 7+: Vent de caràcter fort. Bloqueig total de seguretat del reg per risc de dispersió d'aigua de les línies.
    * *Pràctica 7 (Oficial):* Ampliació de l'esquema de connexió prèvia incorporant el potenciòmetre de vent a l'entrada analògica A4 i un LED groc d'alerta de vent en una eixida lliure. Algorisme en blocs d'operadors lògics per realitzar la conversió i classificar de forma instantània les eixides impreses per terminal: "Vent: XX.X km/h | Força: BRISA". Si la velocitat registrada per l'autòmat és superior a una consigna fixada en els $30\,\text{km/h}$ (Força $\ge 6$), s'encendrà immediatament el LED groc i s'executarà una ordre d'interrupció i bloqueig total del reg automàtic desconnectant el LED verd independentment del percentatge actual d'humitat del sòl. Lliurament formal de l'enllaç URL del projecte de simulació.

### Setmanes 9 i 10: El Projecte d'Integració i Estació Integrada IoT
* **S17 - S22: Operadors i estructures de control (Estació integrada) (Individual - 6 sessions: 330 min)**
    * *Continguts:* Disseny complet, acoblament electrònic lliure i programació avançada multivariable d'un Sistema de Control ciberfísic integral capaç d'interconnectar de forma síncrona totes les pràctiques d'estudi d'estacions meteorològiques de l'hortalissa.
    * *Pràctica 8 (Projecte d'Integració de Dades del Sistema):* L'alumnat ha de dissenyar un circuit global que capture amb èxit dades provinents de 6 variables ambientals: Temperatura, Irradiància solar, Velocitat del vent, Acumulació de pluja, Humitat de l'ambient i Humitat de control del sòl.
    * *Programació d'Algorismes de Condicions Complexes:*
        * **Condició de Reg Automàtic Estàndard (Lògica d'Operadors Combinats `AND` / `OR`):** El canal de reg s'activarà de forma automàtica únicament si es compleixen alhora les següents 4 condicions ambientals restrictives: La humitat del sòl mapada és inferior al $30\%$, **I** la irradiància mesurada per l'LDR es troba per davall de 15, **I** la força de vent és menor de 6 en l'escala de Beaufort ($< 30\,\text{km/h}$), **I** els valors acumulats totals de la pluja en la variable són inferiors a $5\,\text{mm}$.
        * **Condició de Reg Crític per Sobrevivència:** Si la humitat del sòl pateix una davallada forta caient per davall del llindar del $15\%$, s'activarà directament el reg d'emergència com a mesura prioritària d'actuació, saltant-se les restriccions d'irradiància anteriors per assegurar la planta.
        * **Modelització Matemàtica de Control del Consum d'Aigua:** La bomba d'aigua associada al projecte descarrega un cabal nominal conegut de 10 litres per minut. L'alumnat ha de desenvolupar la lògica numèrica per calcular i mostrar el consum d'aigua real del sistema: $\text{litresTotals} = \text{minutsReg} \times 10$.
        * **Interrupcions Manuals:** Inclusió obligatòria de polsadors físics virtuals configurats per a forçar l'activació de reg manual per a l'operador, comptabilitzant d'igual forma el consum de cabal lliurat (Repte 2), així com un botó de parada total instantània del sistema general de reg. Lliurament de la memòria final i enllaç de control.

### Setmana 11: Transferència Tecnològica, Big Data i Defensa del Projecte
* **S23 - S24: Migració a Codi Text i Desplegament de l'Estació Real (Gran grup - 2 sessions: 110 min)**
    * *Continguts:* Introducció pràctica a la programació basada en text i codi escrit (.ino). Migració guiada dels blocs d'execució desenvolupats per l'alumnat seleccionat cap a línies de text reals de programació. Connexió de microcontroladors reals a l'aula i pujada de programes a l'estació meteorològica física del centre educatiu. Estudi d'arquitectures IoT i sistemes de xarxa: Presentació conceptual d'un servidor basat en microordinadors **Raspberry Pi**, funcionament de bases de dades i visualització de paràmetres meteorològics integrats a través d'un Dashboard d'accés digital en temps real. Demostració empírica de la utilitat pràctica de la tecnologia en la societat real.
* **S25: Presentació Big Data i Debat Crític Social (Gran grup - 55 min)**
    * *Continguts:* Vinculació de les dades massives recollides per l'estació amb el concepte de Big Data, control de dades en temps real i l'ús d'algorismes predictius en el sector industrial. Obertura d'un espai de debat crític connectat amb la realitat diària de l'alumnat: les seues xarxes socials personals (Instagram, TikTok, YouTube). Reflexió sobre els objectius dels algorismes de retenció per augmentar el nombre de visualitzacions, com es subministra informació dirigida per generar respostes emocionals (agradables o d'irritació), control massiu d'estats d'ànim i creació de necessitats artificials per a potenciar el consumisme global.
* **S26 - S27: Presentacions alumnat Sistemes de Control (Gran grup - 2 sessions: 110 min)**
    * *Continguts:* Jornada formal d'exposició oral del projecte. Cada alumne o alumna disposarà d'un temps acotat de 3 a 4 minuts per fer una presentació i defensa individual del projecte de sistema de control que ha desenvolupat. L'esquema d'exposició obligatori constarà d'una introducció conceptual al voltant dels sistemes de control, descripció minuciosa dels components utilitzats (característiques de la placa microcontroladora), desglossament i categorització dels sensors d'entrada connectats, i explicació del funcionament final de l'actuador de bomba gestionat de forma eficient.

---

## 4. PONDERACIÓ I INSTRUMENTS D'AVALUACIÓ

L'avaluació de la Situació d'Aprenentatge té un caràcter formatiu, continu, competencial i diversificat, d'acord amb les directrius de la LOMLOE i la Conselleria d'Educació de la GVA.

### 4.1. Esquema de Ponderació Qualificativa Final
La qualificació global de la SA es calcula mitjançant l'aplicació estricta dels següents percentatges sobre les evidències recollides:

* **Bloc de Pràctiques i Simulació Electrònica (53% de la nota final):**
    * *Pràctica 1 (Potenciòmetre i monitor sèrie):* **4%**
        * Solució a: https://www.tinkercad.com/things/kxOIRsf138A-practica-1-sensor-de-humitat-ambient-simulat-amb-potenciometre?sharecode=AKoaipvXjKtD6egPT_S_IQH2J4-cepFNwc2WhNmRTR0
    * *Pràctica 2 (Sensor TMP36 i alertes d'estat):* **4%**
        * Solució a: https://www.tinkercad.com/things/3HOLFt8XVT9-practica-2-sensor-de-temperatura-tmp36?sharecode=n55QYmJJASjW7hg63V1RDAcUmEnXIaBxb-h6THDjXkA
    * *Pràctica 3 (LDR i divisor de tensió de llum):* **4%**
        * Solució a: https://www.tinkercad.com/things/i4agPVWuOeM-practica-3-irraciancia-solar-amb-ldr?sharecode=gpT3sheQsJ09O8v7EWbZ8Up3uvDqylPh6nK29bCBClA
    * *Pràctica 4 (Pluviòmetre, variables i rebots):* **5%**
        * Solucions a:
            * https://www.tinkercad.com/things/7ftewX6VceU-practica-4-simulador-de-pluja-amb-comptador-de-polsacions-?sharecode=MNujykfhIKZU20Z-chvLbY5xMkfLm2c5lCHEuRlvy7w
            * https://www.tinkercad.com/things/1ZRuAiGtbMm-practica-4-b-canvi-destat-flanc-de-pujada?sharecode=-ww3hbrOSqQFByXKsdCpm0_BAkl0KSNeq7NJkWVt0vc
    * *Pràctica 5 (Control de reg manual temporitzat):* **5%**
        * Solució a: https://www.tinkercad.com/things/6DBaQkwoOnQ-practica-5-reg-manual-temporitzat-per-introduir-el-bucle-for?sharecode=YDOSEhg31ErNU6Nimub9yWubHjbDwIEpqUozcBaPlqY
    * *Pràctica 6 (Histèresi en humitat de sòl):* **5%**
        * Solucions a:
            * https://www.tinkercad.com/things/1v61EGlnn3m-practica-6-control-de-reg-en-funcio-de-la-himitat-del-sol?sharecode=v4bFSYIOeLYNT_PKFxHn7zKSeufJt76Vn4DJXVOtGkg
            * https://www.tinkercad.com/things/hLpCV3B7SPl-practica-6b-control-de-reg-en-funcio-de-la-himitat-del-sol?sharecode=gnKZGwpOxE5feC2azwbTenO8SWE3kWCKbT-0nxsyeJI
    * *Pràctica 7 (Anemòmetre i escala Beaufort):* **6%**
        * Solució a: https://www.tinkercad.com/things/fApAnFqYbjc-practica-7-mesura-de-vent-i-escala-de-beaufort-reg?sharecode=JvMNdsUi8pEq0Nh5dI7-7E5rHxpszfgS8Md8VjdUMuY
    * *Pràctica 8 (Estació integrada multivariable final):* **20%**
        * Solució a: https://www.tinkercad.com/things/39YrzlJomhp-practica-8-estacio-integrada?sharecode=gPWzFPG9djcqz0F299WB0gUZORcR29W0kxes2bpwx5Q
* **Bloc de Proves Teòriques d'Evidència (28% de la nota final):**
    * *Prova Escrita Sistemes de Control (Sessió 5):* **28%**
* **Bloc de Comunicació i Difusió (15% de la nota final):**
    * *Exposició Oral Individual i Defensa Tècnica (Sessions 26-27):* **19%**

---

### 4.2. Rúbrica per a l'Avaluació de Pràctiques (TinkerCAD)

| Criteri | Descriptor | Nivell 4 · Excel·lent (9–10) | Nivell 3 · Assolit (6–8) | Nivell 2 · En procés (4–5) | Nivell 1 · Insuficient (1–3) | Nivell 0 · No presentat (0) |
|---|---|---|---|---|---|---|
| **4.3 Programació per blocs** | Programar per blocs l'algoritme de control que permet interactuar amb l'entorn | El codi és funcional, net i ben estructurat. Usa les estructures òptimes per a cada situació. Nomenclatura clarament descriptiva i comentaris explicatius en tots els blocs. | El codi funciona correctament i cobreix els requisits de la pràctica. S'usen les estructures adequades. La nomenclatura és descriptiva i hi ha alguns comentaris. | El codi s'executa amb errors menors. Les estructures bàsiques (`on start`, `forever`, `wait`) estan presents però mal aplicades. Nomenclatura poc descriptiva. | El codi és incomplet o no s'executa. Les estructures `on start` / `forever` no s'usen correctament. No hi ha comentaris ni noms descriptius. | Treball no presentat. |
| **4.4 Simulació i control** | Controlar i/o simular sistemes automàtics amb TinkerCAD | La simulació és totalment funcional i s'han fet proves amb valors extrems i casos límit. El comportament és robust i el monitor sèrie mostra informació clara i completa. | La simulació funciona correctament. El sistema respon als inputs (sensors, polsadors) i produeix els outputs esperats (LEDs, monitor sèrie). | La simulació s'inicia però el comportament és incorrecte o parcialment inesperat. Alguns components funcionen, d'altres no. | La simulació no s'inicia o es produeixen errors greus. El circuit no respon als inputs simulats. | Treball no presentat. |
| **4.1 Disseny del sistema** | Dissenyar sistemes automàtics que resolguen problemes de manera autònoma | El disseny és precís, net i optimitzat. El cablejat és exemplar (colors correctes, traçat ordenat). S'aprecien decisions de disseny justificades (p.ex. elecció de pins, organització de la protoboard). | El disseny és correcte i cobreix tots els requisits. El cablejat segueix les convencions de color (vermell = 5V, negre = GND). El circuit és net i ordenat. | El disseny cobreix parcialment els requisits. Hi ha errors de connexió que limiten el funcionament. El cablejat és desordenat o no segueix les convencions de color. | El circuit no s'ajusta al disseny demanat. Falten components essencials o la connexió és incorrecta en la major part del circuit. | Treball no presentat. |
| **4.2 Construcció del sistema automàtic** | Construir sistemes automàtics programables capaços de fer tasques de manera autònoma, aplicant coneixements d'electrònica i components de control | El circuit és complet, funcional i net. Els components estan ben triats i connectats correctament. El cablejat és exemplar (colors estàndard, traçat ordenat). El sistema opera de forma autònoma i robusta. | El circuit és correcte i funcional. Els components necessaris estan presents i ben connectats. El cablejat segueix les convencions de color (vermell = 5V, negre = GND). El sistema opera de manera autònoma. | El circuit és parcialment funcional. Alguns components estan mal connectats o falta algun element. El cablejat és desordenat o no respecta les convencions de color. | El circuit no funciona o té errors greus de connexió. Falten components essencials. No s'han aplicat les convencions de muntatge treballades a classe. | Treball no presentat. |
| **4.5 Integració IoT i tecnologies emergents** | Integrar IoT, big data i tecnologies emergents amb sentit crític i ètic | L'alumnat fa una reflexió aprofundida: relaciona la pràctica amb la utilitat real de les dades (predicció del fruit, gestió de l'aigua), valora limitacions del sistema i proposa millores. | L'alumnat respon correctament les preguntes de reflexió i relaciona la pràctica amb el sistema IoT complet (sensors → Arduino → servidor → dashboard). | L'alumnat identifica superficialment la relació entre la pràctica i el sistema de l'hort, però la reflexió és escassa o poc precisa. | L'alumnat no relaciona la pràctica amb el context IoT del projecte ni reflexiona sobre les dades recollides. | Treball no presentat. |

| Ponderació de Competència Específica 4 per criteris d'avaluació |
|---|
| Criteri | Percentatge |
|---|---|
| 4.1 | 15% |
| 4.2 | 15% |
| 4.3 | 40% |
| 4.4 | 20% |
| 4.5 | 10% |

---

### 4.3. Rúbrica Analítica per a l'Avaluació de la Presentació Final (S26-S27)
Aquest instrument regula la qualificació de la defensa individual de 3 a 4 minuts realitzada davant el gran grup aula.

| Dimensió de l'Exposició | Nivell d'Assoliment Avançat (4 punts) | Nivell d'Assoliment Mitjà (3 punts) | Nivell d'Assoliment Inicial (2 punts) | Nivell d'Assoliment Baix (1 punt) |
| :--- | :--- | :--- | :--- | :--- |
| **Estructura i Contingut Tècnic** *(CA 5.1)* | Exposició perfectament estructurada d'acord amb l'esquema fixat: Introducció, components, targeta microcontroladora, sensors i actuadors. | Cobreix tots els punts sol·licitats en l'esquema, però la transició o el fil conductor entre algunes seccions resulta una mica brusc. | Omet un dels apartats estructurals clau del sistema de control o dedica un temps desproporcionat a detalls poc rellevants. | L'exposició és completament desorganitzada, no té una seqüència lògica ni segueix els requisits d'apartats demanats. |
| **Terminologia Científico-Tècnica** *(CA 5.2)* | Demostra un domini excel·lent del vocabulari. Utilitza amb total precisió termes com PWM, ADC, histèresi, sensors analògics i constants. | Empra de forma correcta la terminologia tècnica durant la gran part de l'exposició, amb alguna imprecisió menor sense importància. | Utilitza termes tècnics de forma dubtosa, confonent conceptes bàsics (ex. descriure un sensor com a actuador, o digital per analògic). | El vocabulari és col·loquial, vulgar i inexacte. No utilitza de cap manera els conceptes propis de la matèria de tecnologia. |
| **Claredat, Seguretat i Expressió Oral** *(CA 5.1)* | Parla amb un volum òptim, dicció clara, seguretat i mantenint un contacte visual constant amb el grup. S'ajusta estrictament al temps (3-4 min). | L'exposició és entenedora i fluida, tot i que denota cert nerviosisme o s'accelera lleugerament en l'explicació de les pràctiques. | Parla amb un volum massa baix o llegeix de forma excessiva el material de suport, limitant la comunicació visual amb l'auditori. | Incapaç d'expressar les idees amb claredat. Mostra pauses llargues, es limita a llegir o es desvia completament del temps assignat. |
| **Comprensió del Sistema de Control** *(CA 2.1, CA 3.2)* | Explica amb absoluta claredat com funciona la lògica de programació integrada i respon de manera brillant a les preguntes del docent. | Demostra entendre perfectament com el seu codi controla el reg en l'hort intel·ligent, resolent les preguntes de forma satisfactòria. | Respon amb dubtes a les preguntes plantejades pel professorat, evidenciant llacunes en el disseny o execució del seu circuit. | No és capaç d'explicar el funcionament del programa o circuit que suposadament ha desenvolupat de forma individual. |