---
title: "Da A9LH a B9S"
---

{% include toc title="Indice" %}

### Lettura necessaria

Questa sezione serve agli utenti di arm9loaderhax che vogliono aggiornare le proprie console a boot9strap.

Tutte le future versioni di Luma3DS verranno rilasciate in formato `.firm`, compatibile soltanto con boot9strap e sighax. Quindi, per poter ricevere gli aggiornamenti di Luma3DS dovresti seguire le istruzioni indicate in questa sezione per aggiornare la tua installazione.

Per estrarre i file `.7z` presenti in questa pagina, avrai bisogno di un gestore di file compressi come [7-Zip](http://www.7-zip.org/) o [The Unarchiver](https://theunarchiver.com/).

### Cosa serve

Per usare i link [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) di questa guida avrai bisogno di un client torrent come [qBittorrent](https://www.qbittorrent.org/download.php) o [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

Solo su New 3DS, il file `secret_sector.bin` è necessario per ripristinare le modifiche fatte dall'exploit di arm9loaderhax. Per questo motivo non è richiesto per l'installazione di boot9strap su una console senza arm9loaderhax. Se non hai un New 3DS, non hai bisogno del file `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="Questo è un link magnet. Usa un client torrent per scaricare il file."></i> - **Solo New 3DS:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
* L'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (il file `.zip` di Luma3DS)
* La versione v7.0.5 di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (download diretto)
* L'ultima versione di [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download diretto)
* L'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download diretto)

### Istruzioni

#### Sezione I - Preparazione

Se durante questa sezione ti verrà chiesto di sovrascrivere dei file sulla tua scheda SD, conferma sempre la scelta.
{: .notice--info}

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Copia i file `boot.firm` e `boot.3dsx` dall'archivio `.zip` dell'ultima versione di Luma3DS nella directory principale della tua scheda SD
    + La directory principale della scheda SD è la cartella della tua scheda SD in cui è possibile visualizzare la cartella Nintendo 3DS, ma non il suo interno
1. Copia il file `arm9loaderhax.bin` dall'archivio`.7z` della versione 7.0.5 di Luma3DS nella directory principale della tua scheda SD
1. Copia il file `SafeB9SInstaller.bin` dall'archivio `.zip` di SafeB9SInstaller nella cartella `/luma/payloads/` della tua scheda SD
    + Se le cartelle `luma` o `payloads` non esistono, creale
    + Elimina qualunque altro payload `.bin` (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, ecc.) dalla cartella `/luma/payloads/` della tua scheda SD in quanto non è utilizzabile con le versioni di boot9strap compatibili con Luma3DS
1. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
1. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
1. **Solo New 3DS:** Copia il file `secret_sector.bin` nella cartella `/boot9strap/` della scheda SD

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinserisci la scheda SD nella tua console

#### Sezione II - Installazione di boot9strap

1. Avvia la console tenendo premuto (Start) per avviare SafeB9SInstaller
    + Se venisse mostrato il menu di configurazione di Luma al posto di SafeB9SInstaller, premi (Start), quindi spegni il tuo 3DS e riprova
    + Se dovessi riscontrare un messaggio di errore, prova ad usare una nuova scheda SD o a formattare la tua scheda SD attuale (salvando prima i file presenti su di essa)
1. Attendi il termine di tutti i controlli di sicurezza
    + Se ottieni l'errore "OTP Crypto Fail", scarica il file <i class="fa fa-magnet" aria-hidden="true" title="Questo è un link magnet. Usa un client torrent per scaricare il file."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), quindi inseriscilo nella cartella `/boot9strap/` nella tua scheda SD e riprova
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. La tua console dovrebbe aver avviato il menu di configurazione di Luma3DS
    + Il menu di configurazione di Luma3DS contiene le impostazioni per il custom firmware Luma3DS. Molte di queste impostazioni possono essere utili per la personalizzazione o per debug
    + Ai fini di questa guida, queste impostazioni rimarranno sui valori predefiniti
    + Se ottieni una schermata nera, [segui questa guida](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Premi (Start) per salvare e riavviare il 3DS

___

### Prosegui con il [Completamento dell'installazione](finalizing-setup)
{: .notice--primary}
