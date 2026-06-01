# 👨‍🏫 Guia Docent: SA Energia i Reg Solar Automatitzat

Aquest document està dissenyat com a guia ràpida per a qualsevol docent que vulga implementar la Situació d'Aprenentatge (SA) de la Placa de Control d'Energia per a l'Hort IoT a la seua aula de Tecnologia de 4t d'ESO.

## 📖 Context de la Situació d'Aprenentatge

Aquesta SA actua com el "pont" entre la teoria dels circuits elèctrics/electrònics i l'aplicació real a l'Hort IoT. L'alumnat ja sap com programar un microcontrolador (o ho farà pròximament) i necessita una interfície física de potència per a poder connectar el cervell de 5V (Microcontrolador) als músculs de 12V (Placa Solar i Electrovàlvula).

- **Matèria:** Tecnologia (4t ESO)
- **Durada estimada:** 10 Sessions (aprox. 3-4 setmanes).
- **Agrupament recomanat:** Parelles al taller (Rol de Muntador i Rol de Supervisor, alternant-se).
- **Espais:** Aula Ordinària (2 sessions), Aula Informàtica (3 sessions), Taller de Tecnologia (4 sessions), Hort (1 sessió).

---

## 🎯 Objectius Pedagògics

- **Transició Teoria-Pràctica:** Passar del càlcul de la Llei d'Ohm sobre el paper al disseny en simulador i, finalment, a la soldadura real.
- **Gestió de Potència:** Comprendre com aïllar i regular diferents voltatges en un mateix circuit (12V per a potència vs. 5V per a control).
- **Resolució de Problemes (Troubleshooting):** Fomentar l'autonomia de l'alumnat en el diagnòstic d'errors utilitzant el multímetre abans d'avisar el docent.

---

## 🛠️ Necessitats de Material i Maquinari

Per a dur a terme aquesta SA amb èxit, necessitareu el següent material al taller per cada parella:

- 1 Placa PCB perforada (prototipatge).
- 1 Regulador de tensió (LM7805 o mòdul step-down).
- 1 Transistor (ex. TIP120 o MOSFET) per controlar l'electrovàlvula.
- Díodes de protecció (ex. 1N4007) i resistències adients.
- Sòcols per al microcontrolador (per no soldar-lo directament).
- **Equip de soldadura:** Soldador de llapis (tipus JBC), estany de bona qualitat i suport.
- **Multímetre** (mínim un per parella o grup).
- *Recomanat:* Una font d'alimentació de laboratori regulable per a la Sessió 9 (Control de Qualitat).

---

## 🚀 Desenvolupament de les Sessions (Consells per al Docent)

### BLOC 1: Entendre i Simular (Sessions 1-3)
- **Sessió 1 (Aula):** Mantingueu els càlculs de la Llei d'Ohm lligats exclusivament als components de l'hort. Si parlen de W, que siguen els W de la placa solar necessària.
- **Sessió 2 (Aula):** És crucial portar els components físics a classe. Que l'alumnat toque el transistor, veja com és d'xicotet el díode i entenga on aniran els cables.
- **Sessió 3 (Informàtica):** Assegureu-vos que tot l'alumnat ha accedit a Tinkercad Circuits correctament.

### BLOC 2: Disseny (Sessions 4-6)
- **Sessions 4-5 (Informàtica):** Tinkercad de vegades simula el *burnout* d'un component. Deixeu que l'alumnat creme components virtuals; és el moment d'equivocar-se.
- **Sessió 6 (Informàtica/Aula):** Aquesta és l'etapa més crítica. Han de passar de l'esquema ideal de Tinkercad al dibuix real de com estaran disposats els components a la placa PCB foradada. Reviseu aquests dissenys abans de permetre'ls entrar al taller.

### BLOC 3: Fabricació Real i Control de Qualitat al Taller (Sessions 7-11)
*Mans a l'obra. Treballarem en parelles alternant els rols de Muntador i Supervisor.*

* **Sessió 7 i 8: Soldadura I (Perfil Baix).** Formació en seguretat i tècnica. Soldadura dels components que van més apegats a la placa (resistències, díodes i el sòcol del xip).
* **Sessió 9 i 10: Soldadura II (Potència).** Soldadura dels components més alts (regulador, transistor, condensadors i bornes) i creació de les pistes d'estany a la part inferior.
* **Sessió 11: Control de Qualitat (QC).** Inspecció visual, prova de continuïtat sonora amb el multímetre per a detectar curtcircuits i, finalment, la "Prova de Fum": alimentar la placa a 12V i mesurar exactament 5V a l'eixida abans de connectar el microcontrolador.

### BLOC 4: Tancament i Posada en Servei (Aula / Hort) (Sessions 12-13)
*Avaluem el que hem fet i reflexionem sobre el nostre impacte.*

- **Sessió 12 i 13: Revisió i Ètica Tecnològica.** Si heu acabat, muntarem el sistema a l'hort. Farem una reflexió final sobre els residus electrònics (E-waste) i entregareu el Portfolio finalitzat.

---

## 🔄 Connexió amb el següent pas

Una vegada superada aquesta SA, les plaques generades s'instal·laran a les carcasses impreses en 3D (d'una altra SA prèvia o posterior) i s'integraran dins dels caixons de fusta (SA Caixons).
