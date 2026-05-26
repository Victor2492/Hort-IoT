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

### BLOC 3: Fabricació Real al Taller (Sessions 7-9)
- **Sessió 7:** Exigiu el compliment estricte de la Guia de Seguretat (ulleres, ventilació, no cremar la taula). Comenceu pels components més xicotets (resistències, díodes).
- **Sessió 8:** És probable que algunes parelles es queden enrere. Utilitzeu el rol de "Supervisor" perquè les parelles ràpides ajuden (sense fer la feina) a les lentes.
- **Sessió 9 (La Prova de Foc):** **No connecteu cap microcontrolador** a les plaques fetes pels alumnes fins que no hàgeu comprovat amb ells, mitjançant el multímetre, que als pins d'alimentació arriben 5V exactes (i no els 12V de la placa solar).

### BLOC 4: Tancament (Sessió 10)
- **Sessió 10:** Si la placa no funciona, que és comú, la Sessió 10 es converteix en una sessió d'anàlisi de fallades (*debugging*). El valor educatiu d'entendre per què no va (un curtcircuit d'estany, un díode a l'inrevés) és altíssim.

---

## 📊 Avaluació

Com a docent, no avalueu només que "la placa funcione al final". Utilitzeu la rúbrica distribuïda de la següent manera:

| Competència | Pes | Què s'avalua exactament? |
| :--- | :---: | :--- |
| **Saber** | 40% | Avalueu el Portfolio Digital. Han entès per què utilitzen un regulador? Estan bé els càlculs? |
| **Saber Fer** | 30% | Avaluació de la placa. No només si funciona, sinó la qualitat de les soldadures (són brillants o fredes?), la neteja de la placa i la distribució coherent. |
| **Saber Estar** | 30% | S'avalua de forma contínua i per observació directa al taller (Bloc 3). Es divideix en Seguretat (20%) i Actitud i treball en equip (10%). |

---

## 🔄 Connexió amb el següent pas

Una vegada superada aquesta SA, les plaques generades s'instal·laran a les carcasses impreses en 3D (d'una altra SA prèvia o posterior) i s'integraran dins dels caixons de fusta (SA Caixons).
