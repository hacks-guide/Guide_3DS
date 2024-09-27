---
noneSelected: Il modello della console è richiesto.
invalidVersion: Questa non sembra essere una versione di sistema valida.
head:
  - - script
    - src: /assets/js/selecting.js
---

# Cominciamo!

Prima di iniziare questa guida, verificheremo se un custom firmware è già installato e controlleremo l'attuale versione di sistema della tua console.

### Section I - CFW Check

1. Spegni la tua console
2. Premi il pulsante (Select)
3. Accendi la tua console continuando a tenere premuto il pulsante (Select)
4. Se non si apre un menu alternativo (la console avvia normalmente il menu HOME), puoi procedere alla sezione successiva

::: warning

Se vedi la schermata di configurazione di Luma3DS o qualunque altro menu alternativo (ad esempio GodMode9, Decrypt9WIP), FERMATI - hai già un custom firmware! Prosegui da [qui](checking-for-cfw#what-to-do-next).

:::

### Section II - System Version Check

1. Avvia le Impostazioni di sistema sulla tua console
2. Your system version will be displayed on the bottom right of the top screen (e.g. "Ver. 11.17.0-50U")

### Section III - Select a Method

Per trovare il metodo corretto per la tua console, inserisci il modello della tua console e la versione di sistema che hai trovato nella Sezione II.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### Alternate Methods

Se possibile, dovresti seguire il metodo dato dalla selezione di cui sopra.

Altrimenti, ci sono metodi che funzionano su tutte le versioni, ma richiedono dell'hardware aggiuntivo:

1. [ntrboot](ntrboot) - richiede una flashcart DS compatibile
2. [Installazione di boot9strap (Hardmod)](installing-boot9strap-\(hardmod\)) - richiede saldatura
