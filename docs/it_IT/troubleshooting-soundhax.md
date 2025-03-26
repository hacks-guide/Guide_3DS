---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-frankenfirm-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Risoluzione dei problemi (Soundhax)

Questa pagina offre consigli per la risoluzione dei problemi comunemente riscontrati con la pagina "Installazione di boot9strap (Soundhax)", usata per le versioni di sistema comprese tra 1.0.0 e 11.3.0. Se non riesci a risolvere il tuo problema con i consigli su questa pagina, entra nel [canale Discord di Nintendo Homebrew](https://discord. g/MWxPgEp) e descrivi il tuo problema, indicando quello che hai già provato.

## Problemi con Soundhax

:::details Schermata rossa/viola/rosa e bianca dopo aver eseguito Soundhax

Se la tua console è alla versione di sistema 9.4.0, 9.5.0 o 9.6.0, potresti riscontrare problemi usando una vecchia versione di universal-otherapp. Scarica l'ultima versione da [qui. Scarica l'ultima versione da [qui](https://github.com/TuxSH/universal-otherapp/releases/latest).

Se la tua console non ha queste versioni di sistema, probabilmente hai già un custom firmware. Dovresti [verificare la presenza di un CFW](checking-for-cfw).

:::

:::details "Si è verificato un errore che ha provocato la chiusura del software..." (messaggio d'errore su schermata bianca)

C'è un problema con il tuo file `otherapp.bin` (è mancante, mal posizionato o corrotto). Scarica l'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) e inseriscila nella directory principale della tua scheda SD.

Potresti anche avere il file Soundhax sbagliato per la tua console, regione e versione. Verifica che i dettagli della tua console siano corretti e riscarica il file Soundhax da [qui](http://soundhax.com), quindi posizionalo nella directory principale della scheda SD, sostituendo quello esistente.

Se quanto sopra non risolve il problema e stai usando un Old 3DS / Old 3DS XL / Old 2DS, potresti stare incontrando un problema riguardante l'aggiornamento via scheda di gioco. Ricontrolla la versione del software. Se il numero prima della lettera è pari o inferiore a 4 (ad esempio 11.3.0-**4**U), sostituisci il file Soundhax nella directory principale della tua scheda SD con [questo](http://soundhax.686178.xyz/frankenfirm.html?crash).

Se non hai ancora risolto il problema, entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza.

:::

:::details "Impossibile riprodurre"

Hai il file Soundhax sbagliato per la tua console, regione e versione. Verifica che i dettagli della tua console siano corretti e riscarica il file Soundhax da [qui](http://soundhax.com), quindi posizionalo nella directory principale della scheda SD, sostituendo quello esistente.

Se quanto sopra non risolve il problema e stai usando un Old 3DS / Old 3DS XL / Old 2DS, potresti stare incontrando un problema riguardante l'aggiornamento via scheda di gioco. Ricontrolla la versione del software. Se il numero prima della lettera è pari o inferiore a 3 (ad esempio 11.3.0-**0**U), sostituisci il file Soundhax nella directory principale della tua scheda SD con [questo](http://soundhax.686178.xyz/frankenfirm.html?unplayable).

Se non hai ancora risolto il problema, entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza.

:::

:::details Impossibile leggere la scheda SD!

Se il problema non si risolve, prova ad usare un'altra scheda SD.

:::

## Problemi con SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Ritorna a [Installazione di boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
