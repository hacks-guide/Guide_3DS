# Risoluzione dei problemi (MSET9)

Questa pagina offre consigli per la risoluzione dei problemi comunemente riscontrati con le pagine "Installazione di boot9strap (MSET9)", "Installazione di boot9strap (MSET9 CLI)" e "Installazione di boot9strap (MSET9 Play Store)". Se non riesci a risolvere il tuo problema con i consigli su questa pagina, entra nel [canale Discord di Nintendo Homebrew](https://discord. g/MWxPgEp) e descrivi il tuo problema, indicando quello che hai già provato.

## MSET9 (applicazione / script)

:::details Python 3 is not installed

Python non è installato sul computer che stai utilizzando. Scaricalo dal [sito di Python](https://www.python.org/downloads/), fai doppio clic sull'installer e segui le istruzioni a schermo per installare Python. Una volta installato Python, riprova.

:::

:::details HOME Menu extdata: Missing!

Accendi la console con la scheda SD inserita, quindi controlla nuovamente lo stato di MSET9.

Se non funziona, la scheda SD deve essere formattata:

1. Copia tutto dalla scheda SD sul tuo PC
2. Formatta la scheda SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Ricopia tutto nella scheda SD
4. Ricomincia dalla [Sezione I Passo 7](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

:::

:::details Mii Maker extdata: Missing!

I dati del Centro di creazione Mii non sono stati trovati sulla scheda SD. Accendi la console con la scheda SD inserita, avvia il Centro di creazione Mii, quindi controlla nuovamente lo stato di MSET9.

Se non funziona, la scheda SD deve essere formattata:

1. Copia tutto dalla scheda SD sul tuo PC
2. Formatta la scheda SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Ricopia tutto nella scheda SD
4. Ricomincia dalla [Sezione I Passo 8](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::details Title database: Not initialized!

Assicurati di aver resettato il database dei titoli.

- Accendi la console con la scheda SD inserita
- Avvia le Impostazioni della console e vai su `Gestione dati` -> `Nintendo 3DS` -> `Software` -> Reset ([immagine](/images/screenshots/database-reset.jpg))
  - Non verranno cancellati i tuoi dati
- Se ricevi una conferma di ripristino, al termine spegni e riaccendi la console e ricomincia dalla [Sezione I Passo 14](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

Se _non_ ricevi una conferma di ripristino, la tua scheda SD deve essere formattata:

1. Copia tutto dalla scheda SD sul tuo PC
2. Formatta la scheda SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Ricopia tutto nella scheda SD

<!--@include: ./_include/mset9-chorus.md -->

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
2. Digita `2` quindi premi Invio per controllare lo stato di MSET9
   - Verranno ricreati nuovamente i database fittizi
3. Chiudi la finestra dello script MSET9
4. Ricomincia dalla [Sezione I Passo 12](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 01: Couldn't find Nintendo 3DS folder

Non stai eseguendo MSET9 dalla directory principale della scheda SD, oppure manca la cartella Nintendo 3DS.

Ricorda, la tua scheda SD dovrebbe assomigliare a questo:

::: info

![](/images/screenshots/mset9/mset9-root-layout.png)

:::

Se il contenuto della scheda SD è corretto, la scheda SD molto probabilmente non sta venendo letta dalla console e deve essere formattata:

1. Copia tutto dalla scheda SD sul tuo PC
2. Formatta la scheda SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Ricopia tutto nella scheda SD
4. Ricomincia dall'inizio della [Sezione I](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

::::

:::details Error 02: Your SD is write protected

La protezione da scrittura è abilitata su questa scheda SD. Se stai utilizzando una scheda SD standard, assicurati che il blocco sia impostato [verso l'alto](/images/sdlock.png). Altrimenti, prova a espellere e reinserire la scheda SD.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

Hai più cartelle ID0. Per determinare la cartella corretta, segui queste istruzioni:

1. Rinomina la cartella `Nintendo 3DS` in `BACKUP_Nintendo 3DS`
2. Reinserisci la scheda SD nella tua console
3. Accendi la tua console
4. Attendi che la console generi i dati nella scheda SD
   - Le tue applicazioni saranno scomparse. È normale e verrà risolto a breve
5. Spegni la tua console
6. Inserisci la scheda SD nel tuo computer
7. Entra nella cartella `Nintendo 3DS` della tua scheda SD
8. Trascrivi i primi caratteri della cartella che vedi
   - Questo è il tuo vero ID0, che manterremo nella cartella Nintendo 3DS reale
9. Elimina la cartella ID0 dalla cartella `Nintendo 3DS` corrente
10. Sposta la vera cartella ID0 dalla cartella `BACKUP_Nintendo 3DS` nella cartella `Nintendo 3DS`
11. Se esiste, sposta la cartella `Private` dalla cartella `BACKUP_Nintendo 3DS` nella cartella `Nintendo 3DS`

Al termine, continua dalla [Sezione I Passo 3](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->

::::

:::details Error 06: You need at least 16MB free

La tua scheda SD non ha abbastanza spazio per eseguire MSET9. Libera un po' di spazio e riprova.

Al termine di questa guida avrai bisogno di almeno 1.3GB di spazio per fare un backup della NAND, quindi è meglio liberarne almeno altrettanto.

:::

:::details Error 07: One or more files are missing or malformed!

Uno o più file necessari all'esecuzione di MSET9 mancano o sono corrotti. Ri-scarica il file [Release `.zip` di MSET9](https://github.com/hacks-guide/MSET9/releases/latest) ed estrailo nella directory principale della tua scheda SD, sostituendo tutti i file esistenti, quindi riprova.

:::

:::details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

:::

## MSET9 (exploit)

:::details Schermata rossa dopo il reinserimento della scheda SD (Sezione II Passo 11)

Potrebbe mancarti il file `SafeB9S.bin` dalla directory principale della tua scheda SD, o il file potrebbe essere danneggiato. Copialo dal'archivio `.zip` di MSET9, sostituendo qualsiasi file esistente, quindi segui queste istruzioni per rimuovere il file scatenante:

1. Forza lo spegnimento della console tenendo premuto il pulsante d'accensione per 20 secondi
2. Inserisci la scheda SD nel tuo computer

<!--@include: ./_include/mset9-chorus.md -->

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
   - Lo stato attuale dovrebbe visualizzare [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Se hai già rimosso il file scatenante (o non l'hai mai iniettato), lo stato attuale mostrerà [Ready](/images/screenshots/mset9/mset9-ready.png), e puoi [riprovare la Sezione II](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
2. Digita `4`, quindi premi Invio
3. Una volta che la finestra dice "Removed trigger file", digita `0` quindi premi Invio
4. Reinserisci la scheda SD nella console
5. Accendi la tua console
6. Ritorna alla [Sezione II Passo 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Altrimenti, la scheda SD potrebbe essere formattata o partizionata in modo errato. Dopo aver rimosso il file scatenante, formattala:

1. Copia tutto dalla scheda SD sul tuo PC
2. Formatta la scheda SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Ricopia tutto nella scheda SD
4. Ricomincia dalla [Sezione II Passo 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details Caricamento infinito delle Impostazioni della console dopo il reinserimento della scheda SD

Molto probabilmente hai fatto qualcosa di diverso dalle istruzioni di MSET9, selezionato il modello/versione sbagliata, o la scheda SD deve essere formattata. Assicurati di aver scelto il [modello](/images/3dsmodels.png) e versione del sistema corretti all'apertura dello script.

Segui queste istruzioni per rimuovere il file scatenante e riprova la Sezione II:

1. Forza lo spegnimento della console tenendo premuto il pulsante d'accensione per 20 secondi
2. Inserisci la scheda SD nel tuo computer

<!--@include: ./_include/mset9-chorus.md -->

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
   - Lo stato attuale dovrebbe visualizzare [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Se hai già rimosso il file scatenante (o non l'hai mai iniettato), lo stato attuale mostrerà [Ready](/images/screenshots/mset9/mset9-ready.png), e puoi riprovare la Sezione II
2. Digita `4`, quindi premi Invio
3. Una volta che la finestra dice "Removed trigger file", digita `0` quindi premi Invio
4. Reinserisci la scheda SD nella console
5. Accendi la tua console
6. Ritorna alla [Sezione II Passo 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Se continui ad avere questo problema e sei sicuro di avere fatto tutto correttamente, assicurati che il file scatenante sia stato rimosso e formatta la tua scheda SD:

1. Copia tutto dalla scheda SD sul tuo PC
2. Formatta la scheda SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Ricopia tutto nella scheda SD
4. Ricomincia dalla [Sezione II Passo 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details An exception occurred after triggering MSET9

Probabilmente significa che hai già un custom firmware. Dovresti [verificare la presenza di un CFW](checking-for-cfw).

:::

## Problemi con SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Ritorna a [Installazione di boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\))

:::

::: tip

Ritorna a [Installazione di boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
