---
title: "Risoluzione dei problemi"
---

Questa pagina offre consigli per la risoluzione di problemi comuni. Se non riesci a risolvere il tuo problema con i consigli su questa pagina, entra nel [canale Discord di Nintendo Homebrew](https://discord. g/MWxPgEp) e descrivi il tuo problema, indicando quello che hai già provato.

{% capture compat %}
<summary>Indice</summary>

Utilizzato su più pagine:
* [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Pagine guida:
* [Installazione di boot9strap (Soundhax)](#installing-boot9strap-soundhax)
* [Installazione di boot9strap (MSET9)](#installing-boot9strap-mset9)
* [Installazione di boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
* [Installazione di boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
* [Completamento dell'installazione](#finalizing-setup)

Problemi dopo l’installazione:
* [Problemi di avvio](#boot-issues-on-consoles-with-custom-firmware)
* [Problemi software](#software-issues-on-consoles-with-custom-firmware)

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--info}

## Problemi con SafeB9SInstaller

### Prima di avviare SafeB9SInstaller

{% capture compat %}
<summary><u>Impossibile aprire SafeB9SInstaller.bin</u></summary>

Il file `SafeB9SInstaller.bin` è mancante o mal posizionato. Scarica l'ultima versione di [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip), estraila e posiziona il file 'SafeB9SInstaller.bin' della directory principale della tua scheda SD. Non aggiungere l'estensione `.bin` se non la vedi presente.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### SigHaxed FIRM was not installed! Check lower screen for more info.

{% capture compat %}
<summary><u>MicroSD Card - init failed</u></summary>

La tua scheda SD ha probabilmente qualcosa che non va. Prova a riformattarla ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). Se questo non risolve il problema, prova una scheda SD diversa.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - File not found</u></summary>

Ti mancano i file `boot9strap.firm` e `boot9strap.firm.sha` dalla cartella `boot9strap`, o la cartella `boot9strap` non è stata correttamente nominata. Scarica l'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), e posiziona i file `boot9strap.firm` e `boot9strap.firm.sha` nella cartella `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - invalid FIRM</u></summary>

C'è un problema con i tuoi file `boot9strap.firm` e `boot9strap.firm.sha`. Ri-scarica l'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), e posiziona i file `boot9strap.firm` e `boot9strap.firm.sha` nella cartella `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Secret Sector - File not found</u></summary>

Ti manca il file `secret_sector.bin` dalla cartella `boot9strap`, o la cartella `boot9strap` non è stata correttamente nominata. Scarica [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) con un client torrent, e posizionalo nella cartella `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Qualcos'altro</u></summary>

Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per ricevere assistenza, e indica il messaggio che ricevi.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installazione di boot9strap (Soundhax)

{% capture compat %}
<summary><u>Schermata rossa/viola/rosa e bianca dopo aver eseguito Soundhax</u></summary>

Se la tua console è alla versione di sistema 9.4.0, 9.5.0 o 9.6.0, potresti riscontrare problemi usando una vecchia versione di universal-otherapp. Scarica l'ultima versione da [qui](https://github.com/TuxSH/universal-otherapp/releases/latest).

Se la tua console non ha queste versioni di sistema, probabilmente hai già un custom firmware. Dovresti [verificare la presenza di un CFW](checking-for-cfw).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Si è verificato un errore che ha provocato la chiusura del software..." (messaggio su riquadro bianco)</u></summary>

C'è un problema con il tuo file `otherapp.bin` (è mancante, mal posizionato o corrotto). Scarica l'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) e inseriscila nella directory principale della tua scheda SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Impossibile riprodurre"</u></summary>

Hai il file Soundhax sbagliato per la tua console e regione, o la tua console è incompatibile con Soundhax. In quest'ultimo caso, dovrai scoprire la versione presente sul tuo 3DS. Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Impossibile montare la scheda SD!</u></summary>
Effettua il backup dei tuoi dati e riformatta la tua scheda SD come FAT32 con lo strumento consigliato a seconda del sistema operativo ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard e lo strumento di formattazione HP (HPUSBDisk) sono noti per causare problemi con schede SD 3DS.

Se il problema non si risolve, prova ad usare un'altra scheda SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installazione di boot9strap (MSET9)

{% capture mset9-chorus %}
    + **Windows**: Fai doppio click su `MSET9-Windows.bat`
    + **macOS**: Fai doppio-click su `MSET9-macOS.command` e inserisci la tua password se richiesto
    + **Linux**: apri una finestra del terminale, `cd` nella directory principale della tua scheda SD, quindi digita `python3 mset9.py` e premi Invio
{% endcapture %}

{% capture compat %}
<summary><u>Python 3 is not installed</u></summary>

Python non è installato sul computer che stai utilizzando. Scaricalo dal [sito di Python](https://www.python.org/downloads/), fai doppio clic sull'installer e segui le istruzioni a schermo per installare Python. Una volta installato Python, riprova.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>HOME Menu extdata: Missing!</u></summary>

Accendi la console con la scheda SD inserita, quindi controlla nuovamente lo stato di MSET9.

Se non funziona, la scheda SD deve essere formattata:

1. Copia tutto dalla scheda SD sul tuo PC
1. Formatta la scheda SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Ricopia tutto nella scheda SD
1. Ricomincia dalla [Sezione I Passo 7](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Mii Maker extdata: Missing!</u></summary>

I dati del Centro di creazione Mii non sono stati trovati sulla scheda SD. Accendi la console con la scheda SD inserita, avvia il Centro di creazione Mii, quindi controlla nuovamente lo stato di MSET9.

Se non funziona, la scheda SD deve essere formattata:

1. Copia tutto dalla scheda SD sul tuo PC
1. Formatta la scheda SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Ricopia tutto nella scheda SD
1. Ricomincia dalla [Sezione I Passo 8](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Title database: Not initialized!</u></summary>

Assicurati di aver resettato il database dei titoli.
    + Accendi la console con la scheda SD inserita 
    + Avvia le Impostazioni della console e vai su `Gestione dati` -> `Nintendo 3DS` -> `Software` -> Reset ([immagine](/images/screenshots/database-reset.jpg))
        + Non verranno cancellati i tuoi dati
    + Se ricevi una conferma di ripristino, al termine spegni e riaccendi la console e ricomincia dalla [Sezione I Passo 14](installing-boot9strap-(mset9-cli)#section-i---prep-work)

Se *non* ricevi una conferma di ripristino, la tua scheda SD deve essere formattata:

1. Copia tutto dalla scheda SD sul tuo PC
1. Formatta la scheda SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Ricopia tutto nella scheda SD
1. Esegui lo script di MSET9:
    {{ mset9-chorus }}
1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
1. Digita `2` quindi premi Invio per controllare lo stato di MSET9
    + Verranno ricreati nuovamente i database fittizi
1. Chiudi la finestra dello script MSET9
1. Ricomincia dalla [Sezione I Passo 12](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 01: Couldn't find Nintendo 3DS folder</u></summary>

Non stai eseguendo MSET9 dalla directory principale della scheda SD, oppure manca la cartella Nintendo 3DS.

Ricorda, la tua scheda SD dovrebbe assomigliare a questo:

![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
{: .notice--info}

Se il contenuto della scheda SD è corretto, la scheda SD molto probabilmente non sta venendo letta dalla console e deve essere formattata:

1. Copia tutto dalla scheda SD sul tuo PC
1. Formatta la scheda SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Ricopia tutto nella scheda SD
1. Ricomincia dall'inizio della [Sezione I](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 02: Your SD is write protected</u></summary>

La protezione da scrittura è abilitata su questa scheda SD. Se stai utilizzando una scheda SD standard, assicurati che il blocco sia impostato [verso l'alto](/images/sdlock.png). Altrimenti, prova a espellere e reinserire la scheda SD.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 04: You don't have 1 ID0, you have (#)!</u></summary>

Hai più cartelle ID0. Per determinare la cartella corretta, segui queste istruzioni:

1. Rinomina la cartella `Nintendo 3DS` in `BACKUP_Nintendo 3DS`
1. Reinserisci la scheda SD nella tua console
1. Accendi la tua console
1. Attendi che la console generi i dati nella scheda SD
    + Le tue applicazioni saranno scomparse. È normale e verrà risolto a breve
1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Entra nella cartella `Nintendo 3DS` della tua scheda SD
1. Trascrivi i primi caratteri della cartella che vedi
    + Questo è il tuo vero ID0, che manterremo nella cartella Nintendo 3DS reale
1. Elimina la cartella ID0 dalla cartella `Nintendo 3DS` corrente
1. Sposta la vera cartella ID0 dalla cartella `BACKUP_Nintendo 3DS` nella cartella `Nintendo 3DS`
1. Se esiste, sposta la cartella `Private` dalla cartella `BACKUP_Nintendo 3DS` nella cartella `Nintendo 3DS`

Al termine, continua dalla [Sezione I Passo 3](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 05: You don't have 1 ID1, you have (#)!</u></summary>

{% include_relative include/id1-check.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 06: You need at least 16MB free</u></summary>

La tua scheda SD non ha abbastanza spazio per eseguire MSET9. Libera un po' di spazio e riprova.

Al termine di questa guida avrai bisogno di almeno 1.3GB di spazio per fare un backup della NAND, quindi è meglio liberarne almeno altrettanto.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 07: One or more files are missing or malformed!</u></summary>

Uno o più file necessari all'esecuzione di MSET9 mancano o sono corrotti. Ri-scarica il file [Release `.zip` di MSET9](https://github.com/hacks-guide/MSET9/releases/latest) ed estrailo nella directory principale della tua scheda SD, sostituendo tutti i file esistenti, quindi riprova.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 18: Windows Locale Settings are broken!</u></summary>

{% include_relative include/winerror234.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Schermata rossa dopo il reinserimento della scheda SD (Sezione II Passo 11)</u></summary>

Potrebbe mancarti il file `SafeB9S.bin` dalla directory principale della tua scheda SD, o il file potrebbe essere danneggiato. Copialo dal'archivio `.zip` di MSET9, sostituendo qualsiasi file esistente, quindi segui queste istruzioni per rimuovere il file scatenante:

1. Forza lo spegnimento della console tenendo premuto il pulsante d'accensione per 20 secondi
1. Inserisci la scheda SD nel tuo computer
1. Esegui lo script di MSET9:
    {{ mset9-chorus }}
1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
    + Lo stato attuale dovrebbe visualizzare [Injected](/images/screenshots/mset9/mset9-injected.png)
    + Se hai già rimosso il file scatenante (o non l'hai mai iniettato), lo stato attuale mostrerà [Ready](/images/screenshots/mset9/mset9-ready.png), e puoi [riprovare la Sezione II](installing-boot9strap-(mset9-cli)#section-ii---mset9)
1. Digita `4`, quindi premi Invio
1. Una volta che la finestra dice "Removed trigger file", digita `0` quindi premi Invio
1. Reinserisci la scheda SD nella console
1. Accendi la tua console
1. Ritorna alla [Sezione II Passo 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Altrimenti, la scheda SD potrebbe essere formattata o partizionata in modo errato. Dopo aver rimosso il file scatenante, formattala:

1. Copia tutto dalla scheda SD sul tuo PC
1. Formatta la scheda SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Ricopia tutto nella scheda SD
1. Ricomincia dalla [Sezione II Passo 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Caricamento infinito delle Impostazioni della console dopo il reinserimento della scheda SD</u></summary>

Molto probabilmente hai fatto qualcosa di diverso dalle istruzioni di MSET9, selezionato il modello/versione sbagliata, o la scheda SD deve essere formattata. Assicurati di aver scelto il [modello](/images/3dsmodels.png) e versione del sistema corretti all'apertura dello script.

Segui queste istruzioni per rimuovere il file scatenante e riprova la Sezione II:

1. Forza lo spegnimento della console tenendo premuto il pulsante d'accensione per 20 secondi
1. Inserisci la scheda SD nel tuo computer
1. 1. Esegui lo script di MSET9:
    {{ mset9-chorus }}
1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
    + Lo stato attuale dovrebbe visualizzare [Injected](/images/screenshots/mset9/mset9-injected.png)
    + Se hai già rimosso il file scatenante (o non l'hai mai iniettato), lo stato attuale mostrerà [Ready](/images/screenshots/mset9/mset9-ready.png), e puoi riprovare la Sezione II
1. Digita `4`, quindi premi Invio
1. Una volta che la finestra dice "Removed trigger file", digita `0` quindi premi Invio
1. Reinserisci la scheda SD nella console
1. Accendi la tua console
1. Ritorna alla [Sezione II Passo 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Se continui ad avere questo problema e sei sicuro di avere fatto tutto correttamente, assicurati che il file scatenante sia stato rimosso e formatta la tua scheda SD:

1. Copia tutto dalla scheda SD sul tuo PC
1. Formatta la scheda SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Ricopia tutto nella scheda SD
1. Ricomincia dalla [Sezione II Passo 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>An exception occurred after triggering MSET9</u></summary>

Probabilmente significa che hai già un custom firmware. Dovresti [verificare la presenza di un CFW](checking-for-cfw).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (super-skaterhax)

{% capture compat %}
<summary><u>"Si è verificato un errore. Salva i dati di qualunque applicazione attualmente in uso, quindi riavvia la console."</u></summary>

La data non è corretta. Per correggerla, segui questi passaggi:

1. Seleziona Impostazioni della console nel menu HOME, poi tocca Apri.
1. Tocca Impostazioni generali.
1. Tocca "Data e ora".
1. Inserisci la data odierna.
1. Tocca i pulsanti su/giù per impostare il giorno, il mese e l'anno corretti.
1. Premi OK per confermare.

Se il problema persiste:

+ Assicurati che i file `arm11code.bin`, `browserhax_hblauncher_ropbin_payload.bin` e `boot.3dsx` siano nella directory principale della scheda SD (non all'interno di una cartella)
+ Assicurati di aver selezionato il payload corretto per la tua regione E la versione di sistema
+ Assicurati che le impostazioni "Area di residenza" siano [così](/images/screenshots/skater_lang.png)
+ Prova a reimpostare i dati del browser:
    1. Avvia il browser internet, quindi apri le sue impostazioni
    1. Scorri verso il basso e seleziona "Reimposta tutti i dati salvati" (può avere nomi simili come "Inizializza i dati di salvataggio" o "Elimina tutti i dati salvati")
    1. Riprova ad eseguire l'exploit
+ Prova a cambiare la lingua di sistema in una lingua diversa da quella corrente

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"Si è verificato un errore. Tieni premuto il pulsante POWER per spegnere la console..." (schermo nero con testo)</u></summary>

Il file `arm11code.bin` è mancante o mal posizionato. Assicurati di copiare i file [dell'ultima versione di super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) per la tua regione e versione della console nella directory principale della tua scheda SD (non all'interno di una cartella).

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>Si verifica un'eccezione oppure "DLL_HEAP_INFORMATION" premendo GO! GO!</u></summary>

Probabilmente significa che hai già un custom firmware. Dovresti [verificare la presenza di un CFW](checking-for-cfw).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installazione di boot9strap (SSLoth-Browser)

{% capture compat %}
<summary><u>Schermata rossa/viola/rosa e bianca dopo aver eseguito Browserhax</u></summary>

Probabilmente significa che hai già un custom firmware. Dovresti [verificare la presenza di un CFW](checking-for-cfw).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Si è verificato un errore. Tieni premuto il pulsante POWER per spegnere la console..." (schermo nero con testo)</u></summary>

Il file `arm11code.bin` è mancante o mal posizionato. Scarica l'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), posiziona il file `otherapp.bin` nella directory principale della tua scheda SD` e rinominalo in `arm11code.bin`. Non aggiungere l'estensione `.bin` se non la vedi presente.
{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"Si è verificato un errore che ha provocato la chiusura del software..." (messaggio su riquadro bianco)</u></summary>

Potrebbe esserci un problema con il tuo file `arm11code.bin`. Scarica l'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), posiziona il file `otherapp.bin` nella directory principale della tua scheda SD` e rinominalo in `arm11code.bin`. Non aggiungere l'estensione `.bin` se non la vedi presente.

Puoi anche provare a resettare i dati del tuo browser:

1. Avvia il browser internet, quindi apri le sue impostazioni
1. Scorri verso il basso e seleziona "Reimposta tutti i dati salvati" (può avere nomi simili come "Inizializza i dati di salvataggio" o "Elimina tutti i dati salvati")
1. Riprova ad eseguire l'exploit

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Crash aprendo il codice QR di browserhax o l'URL</u></summary>

Gli exploit basati sul browser (come questo) sono instabili e crashano spesso, ma seguendo i seguenti passaggi, i problemi potrebbero venire risolti.

1. Avvia il browser internet, quindi apri le sue impostazioni
1. Scorri verso il basso e seleziona "Reimposta tutti i dati salvati" (può avere nomi simili come "Inizializza i dati di salvataggio" o "Elimina tutti i dati salvati")
1. Riprova ad eseguire l'exploit
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Richiesta di aggiornamento di sistema all'apertura del browser</u></summary>

Il proxy SSLoth è stato configurato in modo errato. Ripeti la sezione SSLoth della pagina.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Errore 032-0420 all'apertura del browser</u></summary>

Segui in ordine questi passaggi:

1. Avvia le Impostazioni di sistema sulla tua console
1. Entra in `Impostazioni Internet` -> `Impostazioni di collegamento`
1. Clicca sulla tua connessione wifi e naviga su `Modifica` -> `Pagina Successiva (la freccia a destra)` -> `Impostazioni proxy`
1. Imposta "Impostazioni proxy" su "No"
1. Fai clic su OK, quindi su Salva
1. Quando richiesto, clicca su "Test" per eseguire il test di connessione
    + Il test dovrebbe andare a buon fine
1. Clicca "OK" per continuare
1. Premi "Indietro" due volte, poi "Chiudi" per tornare al menu HOME
1. Apri il Browser Internet una volta sola
1. Se ti viene richiesto di fare un aggiornamento di sistema, premi OK
    + Non verrà effettivamente aggiornato il sistema
1. Ricomincia dalla [Sezione II](installing-boot9strap-(ssloth-browser).html#section-ii---ssloth)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Bloccato su "Doing agbhax..."</u></summary>
Potrebbe esserci un problema con il tuo file `arm11code.bin`. Riscarica l'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), posizionala nella directory principale della tua scheda SD` e rinominalo in `arm11code.bin`. Non aggiungere l'estensione `.bin` se non la vedi presente.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"PrepareArm9ForTwl returned error c8804631!"</u></summary>

Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Impossibile montare la scheda SD!</u></summary>

Effettua il backup dei tuoi dati e riformatta la tua scheda SD come FAT32 con lo strumento consigliato a seconda del sistema operativo ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard e lo strumento di formattazione HP (HPUSBDisk) sono noti per causare problemi con schede SD 3DS.

Se il problema non si risolve, prova ad usare un'altra scheda SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Completamento dell'installazione

{% capture compat %}
<summary><u>Impossibile aggiornare la console</u></summary>

I passaggi qui sotto possono essere seguiti in qualsiasi ordine, ma sono elencati dal più facile al più difficile da eseguire.

1. Imposta le impostazioni DNS su "Auto"
1. Avvicinati al tuo router WiFi
1. Aggiorna tramite la Safe Mode spegnendo la console, tenendo premuti (L) + (R) + (D-Pad Su) + (A) all'avvio, e seguendo le istruzioni a schermo
1. Elimina il profilo di connessione WiFi, quindi connettiti di nuovo alla rete WiFi
1. Riavvia il tuo router WiFi
1. Connettiti ad una rete WiFi alternativa, ad esempio un hotspot mobile
1. I server Nintendo potrebbero essere irraggiungibili. Riprova più tardi
1. Se continui a ricevere un errore, [segui la guida per il CTRTransfer](ctrtransfer), poi ritenta l'aggiornamento
1. Se hai bisogno di aiuto (in inglese), entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #22: finalize.romfs is invalid</u></summary>

Il file `finalize.romfs` è danneggiato o illeggibile. [Ri-scaricalo](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) e copialo nella della directory principale della scheda SD, sostituendo qualsiasi file esistente, quindi riprova.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #23: finalize.romfs in wrong location</u></summary>

Il file `finalize.romfs` è stato posizionato in maniera errata e non nella directory principale della scheda SD. Lo script tenterà di risolvere questo problema, ma occorre il tuo permesso per farlo. Premi (A) alle prossime richieste per continuare.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #24: SD is write-protected</u></summary>

Assicurati che la tua scheda SD non sia [protetta dalla scrittura](/images/sdlock.png). Se la scheda SD non è protetta e continui ad ottenere questo errore, entra nel [canale Nintendo Homebrew su Discord](https://discord.gg/MWxPgEp) per ricevere assistenza.

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>Error #02: Missing essential.exefs</u></summary>

Hai risposto 'No' alla richiesta "Make essential files backup?" in GodMode9. Spegni la console, riaccendila tenendo premuto (Start) per avviare GodMode9, rispondi 'Yes' alla domanda, quindi riprova.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}

<summary><u>Error #04: No space</u></summary>

Hai bisogno di almeno 1,3GB di spazio libero per eseguire il backup della NAND, che è una parte dello script. Se non hai abbastanza spazio, segui questi passaggi:

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Copia la cartella `Nintendo 3DS` dalla directory principale della tua scheda SD al tuo computer
1. Elimina la cartella `Nintendo 3DS` dalla scheda SD
1. Reinserisci la scheda SD nella tua console
1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Premi il pulsante (Home)
1. Seleziona "Scripts..."
1. Seleziona "finalize"
1. Premi (A) per creare un backup della NAND
    + Potrebbero volerci circa quindici minuti
1. Premi di nuovo (A)
    + La console dovrebbe spegnersi automaticamente
1. Inserisci la scheda SD nel tuo computer
1. Copia i file in `/gm9/backups/` sulla tua SD in una posizione sicura sul tuo computer
1. Elimina i file `<data>_<seriale>_sysnand_##.bin` e `<data>_<seriale>_sysnand_##.bin.sha` dalla scheda SD
1. Copia la cartella `Nintendo 3DS` dal tuo computer nella directory principale della tua scheda SD
1. Elimina la cartella `Nintendo 3DS` dal tuo computer

Ora che hai il backup della NAND in un luogo sicuro:

1. Reinserisci la scheda SD nella tua console
1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Premi il pulsante (Home)
1. Seleziona "Scripts..."
1. Seleziona "finalize"
1. Continua lo script normalmente
    + Il backup della NAND verrà automaticamente saltato

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #05: No title database</u></summary>

Premi (A) per importare un database dei titoli, inserisci i pulsanti mostrati a schermo per sbloccare la scrittura su SysNAND, quindi prosegui normalmente con lo script.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #06 o "Error: Could not open directory" durante il backup della NAND</u></summary>

Assicurati di avere almeno 1.3GB disponibili nella tua scheda SD. Se non hai abbastanza spazio, segui questi passaggi:
1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Copia la cartella `Nintendo 3DS` dalla directory principale della tua scheda SD al tuo computer
1. Elimina la cartella `Nintendo 3DS` dalla scheda SD
1. Reinserisci la scheda SD nella tua console
1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Esegui un [Backup NAND](godmode9-usage#creating-a-nand-backup)
1. Copia i file in `gm9/out` sulla tua SD in una posizione sicura sul tuo computer
1. Elimina i file `<data>_<seriale>_sysnand_##.bin` e `<data>_<seriale>_sysnand_##.bin.sha` dalla scheda SD, mantenendo il file `essential.exefs` in `/gm9/out/`
1. Copia la cartella `Nintendo 3DS` dal tuo computer nella directory principale della tua scheda SD
1. Elimina la cartella `Nintendo 3DS` dal tuo computer

Se riieni di avere abbastanza spazio sulla tua scheda SD, questa potrebbe essere danneggiata o difettosa. Verifica la presenza di eventuali errori nella tua scheda SD seguendo la guida corretta per il sistema operativo del tuo computer: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #12: Copy (file).db fail</u></summary>

Assicurati che la tua scheda SD non sia [protetta dalla scrittura](/images/sdlock.png). Se la scheda SD non è protetta e continui ad ottenere questo errore, entra nel [canale Nintendo Homebrew su Discord](https://discord.gg/MWxPgEp) per ricevere assistenza.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #17: Duplicate NAND backup</u></summary>

Lo script ha rilevato che manca la cartella Nintendo 3DS E che hai precedentemente fatto un backup della NAND. Se intendi installare applicazioni homebrew, dovresti fare quanto segue:

1. Premi (B) per annullare la creazione di un altro backup della NAND
1. Tenendo premuto (R), premi (Start) per spegnere la console
1. Copia il contenuto della cartella `/gm9/backups/` in una posizione sicura sul tuo computer
1. Elimina la cartella `/gm9/backups/` dalla tua scheda SD
1. Se hai spostato la cartella Nintendo 3DS al di fuori dalla scheda SD, copiala nuovamente sulla scheda SD
    + Se non hai la cartella Nintendo 3DS, avvia il menu HOME con la scheda SD inserita per generarla automaticamente
1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Premi il pulsante HOME per far apparire il menu delle azioni
1. Seleziona "Scripts..."
1. Seleziona "finalize"
1. Segui le istruzioni dello script, rispondendo alle domande che ti vengono poste 

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #18a/18b: MSET9 detected</u></summary>

Non hai rimosso MSET9 nella pagina precedente. Lo script tenterà di rimuovere MSET9; segui le istruzioni fornite dallo script.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Problemi di avvio su console con custom firmware

I passaggi qui dettagliati generalmente presuppongono che la tua console abbia un'installazione moderna del custom firmware (boot9strap + Luma3DS 8.0 o superiore). Se la tua console sta eseguendo una vecchia configurazione (ad esempio, qualcosa basato su arm9loaderhax o menuhax), dovresti aggiornare la tua installazione prima di seguire queste istruzioni.
{: .notice--info}

### Indicatori luminosi di accensione/notifica

{% capture compat %}
<summary><u>La mia console si spegne quando provo ad accenderla, e/o il LED di notifica mostra un colore all'accensione</u></summary>

C'è un problema con il tuo file `boot.firm`. Se stai usando [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), il tuo LED di notifica 3DS potrebbe lampeggiare di un certo colore. Questo colore è usato per diagnosticare problemi riguardanti il tuo file `boot.firm` nella scheda SD o nella memoria interna. Su versioni molto vecchie di boot9strap, la luce blu si spegne quasi subito quando si tenta di accendere la console.

Se il LED di notifica lampeggia:

+ **Bianco**: Il tuo 3DS non è stato in grado di trovare il file `boot.firm` nella tua scheda SD o nella memoria interna.
+ **Magenta**: Il tuo 3DS non è stato in grado di trovare il file `boot.firm` nella tua scheda SD. È stato in grado di trovare il file `boot.firm` nella memoria interna, tuttavia il file è corrotto.
+ **Rosso**: Il tuo 3DS è stato in grado di trovare il file `boot.firm` sia nella tua scheda SD sia nella memoria interna, tuttavia entrambi i file sono corrotti.

Puoi ottenere un nuovo file `boot.firm` scaricando l'[ultima versione di Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), estraendola e posizionando il file `boot.firm` nella directory principale della tua scheda SD. Se il tuo file `boot.firm` continua a risultare corrotto, potresti dover verificare la presenza di errori nella tua scheda SD ([Windows](h2testw-(windows)), [Linux](f3-(linux)), o [macOS](f3xswift-(mac))). Inoltre, tieni presente che il 3DS tende ad avere problemi con file estratti usando WinRAR.

Se si sente un "suono scoppiettante", potenzialmente seguito dalla retroilluminazione accendersi per un istante, c'è un problema hardware con la tua console (come un cavo della retroilluminazione disconnesso). Potresti riuscire ad accendere la console tenendola in determinate posizioni.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>La mia console si blocca con una schermata nera e la luce di accensione rimane blu</u></summary>

I passaggi qui sotto possono essere seguiti in qualsiasi ordine, ma sono elencati dal più rapido al più lungo da eseguire.

1. Spegni la tua console, rimuovi la scheda SD, reinseriscila, quindi accendi la tua console.
1. Spegni la tua console, estrai la cartuccia di gioco se inserita, accendi la tua console, quindi attendi fino a dieci minuti. Se la tua console si avvia entro dieci minuti, il problema è stato risolto e probabilmente non avverrà più
1. Rinomina la cartella `Nintendo 3DS` sulla tua scheda SD in `Nintendo 3DS_BACKUP`, poi tenta l'avvio. Se la tua console si avvia correttamente, c'è qualche problema con la tua cartella `Nintendo 3DS`. Prova a cancellare gli extdata del menu HOME:
    + Entra nella cartella `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
    + Elimina la cartella corrispondente alla regione del tuo 3DS:
        + **Regione EUR**: Elimina `00000098`
        + **Regione JPN**: Elimina `00000082`
        + **Regione USA**: Elimina `0000008f`
        + **Regione CHN**: Elimina `000000A1`
        + **Regione KOR**: Elimina `000000A9`
        + **Regione TWN**: Elimina `000000A1`
1. Prova ad avviare la modalità di ripristino e ad aggiornare la console:
    + Spegni la tua console
    + Tieni premuti i pulsanti (L) + (R) + (Su) + (A)
    + Accendi la tua console
    + Se hai avuto successo, la console si avvierà mostrando la schermata "Aggiornamento"
1. Segui la guida [CTRTransfer](ctrtransfer)
1. Se hai bisogno di aiuto, chiedi pure nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### Messaggio di errore all'avvio

{% capture compat %}
<summary><u>"An error has occurred: Failed to apply 1 FIRM patch(es)" o "An exception has occurred -- Current process: pm"</u></summary>

La tua versione di Luma3DS è obsoleta. Scarica l'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) e posiziona il file `boot.firm` nella directory principale della tua scheda SD, sostituendo qualunque file preesistente. Assicurati di non stare estraendo il file ZIP con WinRAR, in quanto è noto per causare problemi con file relativi al 3DS.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."</u></summary>
Ci sono diverse ragioni per cui questo potrebbe accadere. In ogni caso, questo errore di solito si può risolvere seguendo la guida [CTRTransfer](ctrtransfer).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Si è verificato un errore. Tieni premuto il pulsante POWER per spegnere la console..."</u></summary>

I gestori di eccezione ARM11 sono disabilitati, o un custom firware non è installato. Prova ad abilitare i gestori di eccezione ARM11:
    + Spegni la tua console
    + Tieni premuto (Select)
    + Accendi la tua console, continuando a tenere premuto il pulsante (Select)
    + Se la casella "Disable ARM11 exception handlers" è selezionata, deselezionala
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Al menu HOME mancano delle applicazioni installate</u></summary>

Questo potrebbe essere causato da vari motivi, ma principalmente perché la scheda SD non viene letta dal sistema.
Puoi controllare se la tua SD non viene letta tenendo premuto SELECT all'avvio e controllando il testo giallo nella schermata inferiore; se dice "Booted from CTRNAND via B9S", la console si sta avviando dalla memoria interna e non dalla scheda SD.
Se è questo il caso, prova a seguire i seguenti passaggi, indicati dal più semplice al più complesso:
1. Spegni la tua console, rimuovi la scheda SD, reinseriscila, quindi accendi la tua console
1. Spegni la console, rimuovi la scheda SD, inseriscila sul tuo computer, scarica l'ultima versione di [Luma3DS](https://github. om/LumaTeam/Luma3DS/releases/latest), estrai il file `boot.firm` dall'archivio `Luma3DS.zip` e posizionalo nella directory principale della tua scheda SD (sostituendo qualunque file preesistente)
1. Spegni la console, rimuovi la scheda SD, inseriscila sul tuo computer e formatta la scheda SD secondo il sistema operativo del computer: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)) *(questo cancellerà i dati della tua scheda SD)*
1. Verifica la presenza di eventuali errori nella tua scheda SD seguendo la guida corretta per il sistema operativo del tuo computer: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)). Se la tua scheda SD è contrassegnata come difettosa, allora dovrai sostituirla
1. Lo slot della tua scheda SD potrebbe essere rotto. Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Schermata "BOOTROM ERROR" blu</u></summary>

La tua console è probabilmente brickata. Dovrai acquistare una flashcart ntrboot per reinstallare boot9strap e tentare riparare la tua console. Potrebbe anche indicare un problema hardware non risolvibile. In ogni caso, entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza.
    + È anche possibile che qualcuno abbia impostato una schermata di avvio a tempo che assomigli al messaggio di errore. Prova a lasciare la tua console accesa sulla schermata blu per cinque minuti.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Qualche altro errore</u></summary>

Per favore scatta una foto dell'errore ed entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per ricevere assistenza.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Problemi software su console con custom firmware

{% capture compat %}
<summary><u>La funzionalità DSi / DS è corrotta o è stata sostituita con Flipnote Studio</u></summary>

1. Scarica l'ultima versione di [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (il file `.3dsx`)
1. Spegni la tua console
1. Se assente, crea una cartella chiamata `3ds` nella directory principale della tua scheda SD
1. Copia il file `TWLFix-CFW.3dsx` nella cartella `/3ds/` nella tua scheda SD
1. Reinserisci la scheda SD nella tua console
1. Avvia l'Homebrew Launcher
1. Avvia TWLFix-CFW dalla lista degli homebrew disponibili
1. Premi il pulsante (A) per disinstallare i titoli TWL corrotti
1. Premi (Start) per riavviare la console
1. Aggiorna la console andando su Impostazioni della console, poi "Impostazioni generali", infine scorri a destra e seleziona "Aggiornamento"
    + L'aggiornamento si occuperà di disinstallare i principali titoli TWL, per riscaricarli e reinstallarli
1. Al termine dell'aggiornamento, premi "OK" per riavviare la console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>La funzionalità GBA Virtual Console e/o Modalità Provvisoria è corrotta</u></summary>

La tua console sta eseguendo Luma3DS 6.6 o precedente, probabilmente tramite arm9loaderhax. Dovresti seguire [Da A9LH a B9S](a9lh-to-b9s) per aggiornare la tua console con un custom firmware moderno.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>I giochi in modalità memoria estesa (Pokemon Sole/Luna, Smash, ecc.) non funzionano</u></summary>

Questo può verificarsi dopo un CTRTransfer o dopo un cambio di regione su Old 3DS / 2DS. Segui le istruzioni indicate [qui](https://3ds.hacks.guide/region-changing#section-vi---fixing-locale-related-issues) per rimediare al problema (saltando i passaggi 3, 4, 5 e 6).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Schermata di errore all'avvio/caricamento di un'applicazione</u></summary>

Cerca la tua schermata di errore in [questa pagina](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Se non sei stato in grado di trovare il tuo errore o le istruzioni non funzionano, unisciti a [Nintendo Homebrew su Discord](https://discord.gg/MWxPgEp) per ulteriore assistenza.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Avviare le impostazioni del menu HOME crasha la console o carica l'Homebrew Launcher</u></summary>

Probabilmente la tua console ha ancora menuhax67 installato. Per disinstallare menuhax67, scarica l'ultima versione di [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (il file `.zip` di menuhax), quindi segui la [sezione "Uninstall menuhax67"](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Risoluzione di problemi ulteriori

{% capture compat %}
<summary><u>Cancella gli extdata del menu HOME</u></summary>

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Entra nella cartella `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` presente all'interno della tua scheda SD
1. Elimina la cartella corrispondente per la tua regione 3DS:
    + **Regione EUR**: Elimina `00000098`
    + **Regione JPN**: Elimina `00000082`
    + **Regione USA**: Elimina `0000008f`
    + **Regione CHN**: Elimina `000000A1`
    + **Regione KOR**: Elimina `000000A9`
    + **Regione TWN**: Elimina `000000A1`
1. Reinserisci la scheda SD nella tua console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Cancella i dati dei temi del menu HOME</u></summary>

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Entra nella cartella `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` presente all'interno della tua scheda SD
1. Elimina la cartella corrispondente per la tua regione 3DS:
    + **Regione EUR**: Elimina `000002ce`
    + **Regione JPN**: Elimina `000002cc`
    + **Regione USA**: Elimina `000002cd`
1. Reinserisci la scheda SD nella tua console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Avvio manuale dell'Homebrew Launcher</u></summary>

Se ti manca l'applicazione Homebrew Launcher dal menu HOME, puoi seguire queste istruzioni per avviarlo manualmente. (Avrai bisogno dei file [boot.3dsx e boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) nella directory principale della tua scheda SD.)

{% include_relative include/launch-hbl-dlp.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Disattivare il Filtro famiglia</u></summary>

È possibile disattivare la funzione Filtro famiglia entrando in Impostazioni della console -> Filtro famiglia e inserendo il PIN, quindi premendo "Cancella impostazioni", e infine "Cancella" per rimuoverlo.
Tuttavia, se non conosci il PIN e quindi non puoi accedere alle impostazioni della console, dovrai disabilitarlo. A tal scopo, dovrai ottenere la master key della tua console (mkey):
1. Vai su [questo sito](https://mkey.eiphax.tech/)
1. Riempi le caselle con le seguenti informazioni:
    + Device Type: Seleziona "3DS" (vale anche se stai usando un 2DS, New 3DS (XL/LL) o New 2DS (XL/LL))
    + System Date: Il giorno e il mese impostati nella tua console
    + Inquiry Number: Si può ottenere premendo "Ho dimenticato il PIN" e poi "L'ho dimenticato" nella schermata Filtro famiglia
1. Dopo aver ottenuto il tuo mkey, premi OK sulla schermata in cui hai ottenuto il tuo Inquiry Number, quindi inserisci la master key
1. Premi "Cancella le impostazioni", quindi "Cancella" per rimuovere tutti i dati del Filtro famiglia
{% endcapture %}
<details>{{ compat | markdownify }}</details>
