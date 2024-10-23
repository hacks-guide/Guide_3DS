# Risoluzione dei problemi (SSLoth-Browser)

Questa pagina offre consigli per la risoluzione dei problemi comunemente riscontrati con la pagina "Installazione di boot9strap (SSLoth-Browser)", usata per le versioni di sistema comprese tra 11.4.0 e 11.13.0. Se non riesci a risolvere il tuo problema con i consigli su questa pagina, entra nel [canale Discord di Nintendo Homebrew](https://discord. g/MWxPgEp) e descrivi il tuo problema, indicando quello che hai già provato.

::: warning

Queste istruzioni sono valide solo per la pagina "Installazione di boot9strap (SSLoth-Browser)". Se stai usando un **New 3DS** con versioni **tra 11.15.0 e 11.17.0**, dovresti invece seguire le [istruzioni per la risoluzione dei problemi con l'installazione di boot9strap (super-skaterhax)](troubleshooting-super-skaterhax).

:::

## SSLoth-Browser

:::details Schermata rossa/viola/rosa e bianca dopo aver eseguito Browserhax

Probabilmente significa che hai già un custom firmware. Dovresti [verificare la presenza di un CFW](checking-for-cfw).

:::

:::details "Si è verificato un errore. Tieni premuto il pulsante POWER per spegnere la console..." (schermata nera con testo)

Il file `arm11code.bin` è mancante o mal posizionato. Scarica l'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), posiziona il file `otherapp.bin` nella directory principale della tua scheda SD`e rinominalo in`arm11code.bin`. Non aggiungere l'estensione `.bin\` se non la vedi presente.

:::

:::details "Si è verificato un errore che ha provocato la chiusura del software..." (messaggio d'errore su schermata bianca)

Potrebbe esserci un problema con il tuo file `arm11code.bin`. Scarica l'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), posiziona il file `otherapp.bin` nella directory principale della tua scheda SD`e rinominalo in`arm11code.bin`. Non aggiungere l'estensione `.bin\` se non la vedi presente.

Puoi anche provare a resettare i dati del tuo browser:

1. Avvia il browser internet, quindi apri le sue impostazioni
2. Scorri verso il basso e seleziona "Reimposta tutti i dati salvati" (può avere nomi simili come "Inizializza i dati di salvataggio" o "Elimina tutti i dati salvati")
3. Riprova ad eseguire l'exploit

:::

:::details Crash aprendo il codice QR di browserhax o l'URL

Gli exploit basati sul browser (come questo) sono instabili e crashano spesso, ma seguendo i seguenti passaggi, i problemi potrebbero venire risolti.

1. Avvia il browser internet, quindi apri le sue impostazioni
2. Scorri verso il basso e seleziona "Reimposta tutti i dati salvati" (può avere nomi simili come "Inizializza i dati di salvataggio" o "Elimina tutti i dati salvati")
3. Riprova ad eseguire l'exploit

:::

:::details Richiesta di aggiornamento di sistema all'apertura del browser

Il proxy SSLoth è stato configurato in modo errato. Ripeti la sezione SSLoth della pagina.

:::

:::details Errore 032-0420 all'apertura del browser

Segui in ordine questi passaggi:

1. Avvia le Impostazioni di sistema sulla tua console
2. Entra in `Impostazioni Internet` -> `Impostazioni di collegamento`
3. Clicca sulla tua connessione wifi e naviga su `Modifica` -> `Pagina Successiva (la freccia a destra)` -> `Impostazioni proxy`
4. Imposta "Impostazioni proxy" su "No"
5. Fai clic su OK, quindi su Salva
6. Quando richiesto, clicca su "Test" per eseguire il test di connessione
   - Il test dovrebbe andare a buon fine
7. Clicca "OK" per continuare
8. Premi "Indietro" due volte, poi "Chiudi" per tornare al menu HOME
9. Apri il Browser Internet una volta sola
10. Se ti viene richiesto di fare un aggiornamento di sistema, premi OK
    - Non verrà effettivamente aggiornato il sistema
11. Ricomincia dalla [Sezione II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Bloccato su "Doing agbhax..."

Potrebbe esserci un problema con il tuo file `arm11code.bin`. Riscarica l'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), posizionala nella directory principale della tua scheda SD`e rinominalo in`arm11code.bin`. Non aggiungere l'estensione `.bin\` se non la vedi presente.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza.

:::

:::details Impossibile leggere la scheda SD!

Effettua il backup dei tuoi dati e riformatta la tua scheda SD come FAT32 con lo strumento consigliato a seconda del sistema operativo ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). MiniTool Partition Wizard e lo strumento di formattazione HP (HPUSBDisk) sono noti per causare problemi con schede SD 3DS.

Se il problema non si risolve, prova ad usare un'altra scheda SD.

:::

## Problemi con SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Ritorna all'[Installazione di boot9strap (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
