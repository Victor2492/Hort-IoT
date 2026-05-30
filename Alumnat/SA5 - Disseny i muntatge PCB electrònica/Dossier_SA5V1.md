# 🌿 Dossier de l'Alumnat: SA5 - Disseny i Muntatge de la PCB Electrònica

Benvinguts i benvingudes a la fase de fabricació del projecte **Hort-IoT** a l'IES Tirant lo Blanc. En esta Situació d'Aprenentatge (SA5), fareu el pas definitiu de la teoria a la pràctica real: dissenyareu, simulareu i fabricareu la placa de circuit imprés (PCB) que actuarà com a sistema d'alimentació i control per al reg automatitzat.

## 🎯 Objectiu del Projecte

El vostre repte és dimensionar i construir una etapa de potència i regulació elèctrica fiable. La placa haurà de rebre els 12V "bruts" i potents de la bateria de la instal·lació solar i convertir-los en 5V estables i segurs per al cervell del sistema. A més, dissenyareu la interfície de potència perquè el microcontrolador (que treballa amb corrents molt xicotets) puga activar la bomba i l'electrovàlvula sense cremar-se.

---

## 📅 Els 3 Blocs de Treball i Sessions

El projecte s'estructura en **3 blocs de treball** consecutius. Cada pas s'ha de registrar a la vostra Memòria d'Enginyeria.

### BLOC 1: Entendre i Simular (Càlculs i Laboratori Virtual)
*L'objectiu d'este bloc és resoldre les matemàtiques del circuit i testejar el disseny en entorns digitals assegurant que no es faça malbé cap component real.*

* **Sessió 1 i 2: Energia i Dimensionament.** Diferenciació entre Potència ($P=V\times I$) i Energia total acumulada ($E=P\times Tiempo$).Calcularem el consum diari de l'electrovàlvula i el microcontrolador per a triar la placa solar adequada, aplicant un coeficient de seguretat de 1.3 per als dies ennuvolats d'hivern.
* **Sessió 3: Control i Potència.** Resolució del problema "David vs Goliat": com un microcontrolador de 5V pot obrir una vàlvula de 12V utilitzant un Transistor com a interruptor elèctric i un Díode de protecció per a evitar el contracop inductiu.


### BLOC 2: Disseny Físic i Planificació de Pistes
*Passem del món abstracte a la planificació geomètrica de la placa física.*

* **Sessió 4: Laboratori Virtual (TinkerCAD).** Aprenentatge del muntatge de circuits bàsics utilitzant la Llei d'Ohm per a protegir un LED calculant la seua resistència necessària. Ús del multímetre virtual per a mesurar voltatge en paral·lel i corrent en serie.
* **Sessió 5: Domant l'Energia (De 12V a 5V).** Simulació de l'etapa de regulació utilitzant el component LM7805 acompanyat de condensadors de filtratge de 100 µF i 10 µF per a netejar el soroll elèctric. S'inclou un repte extra de muntar un LED d'estat a l'eixida de 5V.
* **Sessió 6: Disseny de la PCB de Prototipatge.** Estudi de la distribució espacial dels components sobre la placa perforada. Dibuixareu l'esquema de les pistes inferiors (*wiring*) sobre paper quadriculat per a traçar els camins de coure evitant curtcircuits.

### BLOC 3: Fabricació Real i Control de Qualitat al Taller
*Mans a l'obra. Treballarem en parelles alternant els rols de Muntador i Supervisor.*

* **Sessió 7: Soldadura I (Perfil Baix).** Formació en seguretat i tècnica. Soldadura dels components que van més apegats a la placa (resistències, díodes i el sòcol del xip).
* **Sessió 8: Soldadura II (Potència).** Soldadura dels components més alts (regulador, transistor, condensadors i bornes) i creació de les pistes d'estany a la part inferior.
* **Sessió 9: Control de Qualitat (QC).** Inspecció visual, prova de continuïtat sonora amb el multímetre per a detectar curtcircuits i, finalment, la "Prova de Fum": alimentar la placa a 12V i mesurar exactament 5V a l'eixida abans de connectar el microcontrolador.

---

## 📝 Què heu d'entregar? (Entregables)

1. **Portfolio d'Enginyeria (Format Digital):** Un document (PDF o Markdown) on estaran documentats tots els passos, càlculs i captures de pantalla de les vostres simulacions en Tinkercad.
2. **Esquema de la Placa:** El plànol o esbós on heu planificat la posició dels components a la placa perforada.
3. **El Producte Final:** La placa electrònica física correctament soldada i funcionant.

---

## ⚖️ Avaluació i Qualificació

L'avaluació d'esta SA no es farà mitjançant exàmens tradicionals, sinó mitjançant l'assoliment de les **Competències Específiques (CE)** de la matèria. La vostra nota reflectirà la vostra capacitat d'analitzar, dissenyar, construir i treballar amb seguretat.

### Taula de Ponderació i Instruments d'Avaluació

| Competències Específiques (CE) | Pes | Què s'avalua? (Criteris) | Instruments d'Avaluació |
| :--- | :---: | :--- | :--- |
| **CE 1.1, 1.2 i 1.4**<br>*Anàlisi i desenvolupament de solucions.* | **40%** | Resolució de càlculs d'energia ($E=P\times Tiempo$), dimensionament correcte del panell solar, càlcul de resistències i validació del circuit de 12V a 5V al simulador. | **1. Activitats virtuals:** Entregues de les captures de simulació a TinkerCAD i el repte extra.<br>**2. Memòria d'Enginyeria:** Documentació dels càlculs matemàtics justificats. |
| **CE 2.1**<br>*Disseny, planificació i creació de prototips.* | **40%** | Planificació espacial sobre plànol de la PCB. Execució material del prototip físic amb soldadures funcionals, netes i sense curtcircuits que supere la prova de control de qualitat (5V estables a l'eixida). | **1. Memòria d'Enginyeria:** Plànol de pistes de la Sessió 6.<br>**2. Observació del Producte:** Avaluació directa de la PCB soldada i el seu funcionament real. |
| **CE 6.5**<br>*Seguretat, sostenibilitat i treball col·laboratiu.* | **20%** | Ús estricte dels EPIs (ulleres de protecció), gestió correcta del soldador (350ºC), manteniment de l'orde al taller, i bona coordinació en parella (rols de muntador i supervisor). | **1. Taula de Cotejo (Checklist) al Taller:** Observació directa del docent durant les sessions 7, 8 i 9 mesurant actitud, seguretat i neteja. |

---

> **Ànim, enginyers i enginyeres! Anem a donar-li energia a eixe hort!** 🚀

