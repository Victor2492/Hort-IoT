
# 🛠️ Guia de Taller: Fabricació de la Placa de Control

Benvinguts a la fase de fabricació. Ací és on els vostres dissenys en paper es converteixen en realitat. Durant les pròximes 3 sessions, convertirem un grapat de components solts en un dispositiu de control funcional.

---

## 🚨 Normes de Seguretat (LECTURA OBLIGATÒRIA)
Abans d'encendre el soldador, reviseu estes regles. La vostra seguretat i la del vostre company depenen d'això.

* **Ulleres de Seguretat:** Sempre posades mentre se solda o es tallen potes de components. Un tros de fil d'aram volant pot danyar-te l'ull.
* **El Soldador Crema:** La punta assoleix els 350ºC.
  * Mai toques la part metàl·lica.
  * Deixa'l sempre al seu suport quan no l'uses, mai sobre la taula.
  * Si et cremes, avisa immediatament al professor i posa la zona baix aigua freda.
* **Ventilació:** El fum de l'estany no és aire fresc de muntanya. No poses la cara just damunt del fum. Treballa en zones ventilades.
* **Orde:** Mantín la taula buidada. Abrics i motxilles fora de la zona de treball.

---

## 📅 Sessió 7: Soldadura de Perfil Baix (Muntatge I)

**Objectiu:** Soldar els components que van "apegats" a la placa. Comencem per lo més baixet perquè, en donar la volta a la placa, no caiguen.

**Materials necessaris:**
* Placa perforada.
* Sòcols (per al xip).
* Resistències.
* Díodes (1N4007).

### Pas a Pas:

**1. Primer els Sòcols:**
* Col·loca el sòcol negre on anirà el xip. MAI soldes el xip directament! La calor el destruiria.
* Assegura't que la osca (la marca en forma de U) coincidisca amb el teu dibuix.
* Subjecta'l amb cinta de pintor perquè no caiga en girar la placa i solda 2 cantons oposats primer per a fixar-lo.

**2. Resistències:**
* Doblega les potes en forma de U.
* Introdueix-les als seus forats.
* Obri les potes per baix un poc perquè se subjecten a soles.

**3. Tècnica de Soldadura:**
* Calfa amb la punta del soldador la pota i l'anell de coure alhora (2-3 segons).
* Apropa el fil d'estany (sense llevar el soldador) fins que es fonga i cobrisca l'anell.
* Retira l'estany.
* Retira el soldador i no bufes. Deixa que es gela a soles (ha de quedar brillant).

**4. Díodes:**
* ⚠️ **Polaritat Important:** Fixa't en la franja grisa/negra del díode. Ha de coincidir amb la ratlla del teu dibuix. Si el poses a l'inrevés, el circuit no funcionarà.

**5. Tall:**
* Una vegada soldat, usa les alicates de tall per a tallar el tros de pota que sobra. ULL! Posa la mà damunt perquè el tros tallat no isca disparat.

---

## 📅 Sessió 8: Potència i Cablejat (Muntatge II)

**Objectiu:** Soldar els "edificis alts" i connectar-ho tot per baix.

**Materials necessaris:**
* Regulador L7805.
* Transistor (MOSFET/TIP120).
* Condensadors.
* Bornes blaves.
* Cable rígid o restes de potes.

### Pas a Pas:

**1. Components Alts:**
* **Bornes:** Assegura't que els forats per al cable miren cap a FORA de la placa.
* **Condensadors:** La pota llarga és el Positiu (+). La franja blanca del cos indica el Negatiu (-).
* **Regulador i Transistor:** No els apegues totalment a la placa, deixa'ls un poc alçats per si cal doblegar-los o posar-los dissipador.

**2. L'Art de les Pistes (Wiring):**
Ara toca unir els punts per baix seguint el teu disseny de la Sessió 6 (el paper quadriculat).
* **Opció A (Principiants):** Usa cable fi aïllat per a unir punt A amb punt B.
* **Opció B (Pro):** Usa les pròpies potes dels components que has tallat o gotes d'estany contínues per a fer "camins" de plata.
* **Regla d'Or:** Que no es creuen! Si tens dubtes, mira el teu plànol.

---

## 📅 Sessió 9: El Control de Qualitat (QC)

**Objectiu:** Validar que tot funciona abans de connectar el cervell.

### 1. Inspecció Visual (L'Ull de Falcó)
Abans d'endollar res, mira la teua placa amb lupa:
* [ ] Hi ha soldadures fredes (mats o amb forma de bola mal apegada)? -> Repassa-les.
* [ ] Hi ha algun "pont" d'estany unint dues pistes que no deurien tocar-se? -> Separa'l amb el soldador net.
* [ ] Estan els díodes i condensadors en la direcció correcta?

### 2. Prova de Continuïtat (Multímetre)
* Posa el polímetre en mode "Xiulet" (Continuïtat).
* Toca amb la punta negra el negatiu de l'entrada (GND).
* Toca amb la punta roja el pin GND del sòcol del xip. Pita? (Ha de pitar).
* Toca amb la punta roja l'entrada de 12V i l'eixida de 5V. Pita? (**NO HA DE PITAR!** Si pita, tens un curtcircuit. NO ENDOLLES).

### 3. La Prova de Fum (Smoke Test)
* Connecta la placa a la font de laboratori ajustada a 12V (limitada a 0.5A).

**Mesura Voltatge:**
* Posa el polímetre en Volts DC (20V).
* Mesura al sòcol del xip (Pota VCC i Pota GND).
  * **Marca entre 4.9V i 5.1V?** -> 🎉 ÈXIT! Ja pots posar el xip.
  * **Marca 12V?** -> APAGA! El regulador està malament o pontejat.
  * **Marca 0V?** -> Alguna cosa està desconnectada.

---

## 🆘 Troubleshooting (Solució de Problemes)

* **"No s'encén res":** Revisa si la polaritat de la bateria d'entrada és correcta. Revisa les soldadures de les bornes.
* **"El regulador crema molt":** Tens un curtcircuit a l'eixida o has connectat alguna cosa a l'inrevés. Desconnecta immediatament.
* **"Tinc 5V però la vàlvula no obri":** Revisa les soldadures del transistor (Gate, Drain, Source). Assegura't que l'Arduino està enviant el senyal (HIGH).

> **Nota final:** Una vegada verificat tot, avisa al professor perquè t'entregue el microcontrolador i pug
