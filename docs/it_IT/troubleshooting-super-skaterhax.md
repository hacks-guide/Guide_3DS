# Risoluzione dei problemi (super-skaterhax)

Questa pagina offre consigli per la risoluzione dei problemi comunemente riscontrati nella pagina "Installazione di boot9strap (super-skaterhax)". Se non riesci a risolvere il tuo problema con i consigli su questa pagina, entra nel [canale Discord di Nintendo Homebrew](https://discord. g/MWxPgEp) e descrivi il tuo problema, indicando quello che hai già provato.

::: warning

Queste istruzioni sono valide solo per la pagina "Installazione di boot9strap (super-skaterhax)". Se stai usando **qualcosa di diverso** di un **New 3DS** con versioni **tra 11.15.0 e 11.17.0**, dovresti invece seguire le [istruzioni per la risoluzione dei problemi con l'installazione di boot9strap (SSLoth-Browser)](troubleshooting-ssloth-browser).

:::

## Problemi con super-skaterhax

:::details "Si è verificato un errore. Salva i dati di qualunque applicazione attualmente in uso, quindi riavvia la console."

Se nessun colore lampeggia dopo aver premuto "GO GO!":

- Assicurati di aver impostato correttamente la data di sistema e [la regione](/images/screenshots/skaterhax/skater-lang.png)
- Assicurarsi che non siano aperte altre schede del browser, quindi riavvia il browser e ritenta l'exploit

Se lo schermo lampeggia con i colori, poi si blocca o crasha:

- Assicurati di avere la versione corretta di `arm11code.bin` e `browserhax_hblauncher_ropbin_payload.bin` per la versione e la regione della tua console
- Prova a reimpostare i dati del browser:
  1. Avvia il browser internet, quindi apri le sue impostazioni
  2. Scorri verso il basso e seleziona "Reimposta tutti i dati salvati" (può avere nomi simili come "Inizializza i dati di salvataggio" o "Elimina tutti i dati salvati")
  3. Riprova ad eseguire l'exploit
- Prova a cambiare la lingua di sistema in una lingua diversa da quella corrente

:::

:::: details "Si è verificato un errore. Tieni premuto il pulsante POWER per spegnere la console..." (schermata nera con testo)

Il file `arm11code.bin` è mancante o mal posizionato. Assicurati di copiare i file [dell'ultima versione di super-skaterhax](https://skater.nintendohomebrew.com/) per la tua regione e versione della console nella directory principale della tua scheda SD (non all'interno di una cartella).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details Si verifica un'eccezione oppure "DLL_HEAP_INFORMATION" premendo GO! GO!

Probabilmente significa che hai già un custom firmware. Dovresti [verificare la presenza di un CFW](checking-for-cfw).

:::

## Problemi con SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Torna a [Installazione di boot9strap (super-skaterhax)](installing-boot9strap-\(super-skaterhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
