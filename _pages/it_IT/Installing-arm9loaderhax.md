* * *

title: "Installing arm9loaderhax" permalink: /installing-arm9loaderhax.html lang: en_US lang: en_US ref: installing-arm9loaderhax

* * *

L'ultimo passo di questa guida consiste nell'installare l'arm9loaderhax e nella configurazione di Luma3DS affinché si avvii un istante dopo l'accensione della console. Verrà utilizzato il SafeA9LHInstaller di [AuroraWright](https://github.com/AuroraWright/). {: .notice}

Verrà installata la [fork di AuroraWright](https://github.com/AuroraWright/arm9loaderhax) dell'arm9loaderhax. {: .notice--info}

Verrà anche configurato il lancio facoltativo dei payload dall'arm9loaderhax, per permettere l'unbrick della SysNAND in situazioni che brickerebbero la console con il normale ripristino del backup. {: .notice--info}

**Non puoi usare il file OTP di un'altra console, altrimenti la tua VERRÀ BRICKATA.** {: .notice--danger}

#### Panoramica

In questa sezione svolgeremo il processo per il quale ci siamo preparati grazie agli altri passaggi: l'installazione dell'Arm9loaderhax.

Questo tipo di exploit è quasi il migliore che possa esistere in quanto è permanentemente installabile nelle partizioni firm della NAND, e viene lanciato prima del completamento del normale avvio dell'OS permettendo non solo di funzionare su *tutte* le versioni di sistema una volta installato, ma è in grado di ripristinare la console da brick normalmente irrecuperabili in un 3DS non-A9LH, quali un menu HOME non funzionante o un'installazione di un title corrotto.

Il file `arm9loaderhax.bin` viene lanciato al termine del caricamento dalla NAND dell'arm9loaderhax stesso, e può essere un qualunque payload arm9 valido. Questo file può venir sostituito in qualunque momento, tuttavia Luma3DS permette il lancio di diversi payload arm9 con la pressione di determinati tasti durante l'avvio della console.

In questo caso, useremo il Luma3DS di [AuroraWright](https://github.com/AuroraWright/) per avviare direttamente una SysNAND patchata, bypassando del tutto il bisogno di una EmuNAND. Questo semplifica l'uso di un 3DS hackato oltre a risparmiare spazio della scheda SD.

Al termine dell'installazione dell'arm9loaderhax, e del setup di Luma3DS con le corrette impostazioni, verrà ripristinato il backup precedentemente creato.

Durante la guida verranno anche configurati i seguenti programmi:

* **FBI** *(permette l'installazione di giochi ed applicazioni in formato CIA)*
* **Luma3DS Updater** *(aggiorna con semplicità il nostro CFW così installato)*
* **Hourglass9** *(applicazione multifunzione per gestire cartucce di gioco e la NAND)*

#### Requisiti

* [`aeskeydb.bin`](magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc&dn=aeskeydb.bin&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`fbi-2.4.2-injectable.zip`](magnet:?xt=urn:btih:f978b4cf5eda72823240b9c649f3fd2940a9f525&dn=fbi-2.4.2-injectable.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`data_input_v3.zip`](magnet:?xt=urn:btih:a1195c9f7ab650fa7c7bf020b51fc19ea8d9440c&dn=data%5Finput%5Fv3.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* L'ultima fork del [SafeA9LHInstaller](https://github.com/Plailect/SafeA9LHInstaller/releases/latest) *(il file `.7z`)*
* L'ultima versione dell'[arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest) *(il file `.7z`)*
* L'ultima versione di [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) *(il file `.7z`)*
* L'ultima versione di [hblauncher_loader](https://github.com/yellows8/hblauncher_loader/releases/latest)
* L'ultima versione di [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)
* L'ultima versione di [Luma3DS Updater](https://github.com/Hamcha/lumaupdate/releases/latest)
* L'ultima versione di [DspDump](https://github.com/Cruel/DspDump/releases/latest)
* L'ultima versione di [FBI](https://github.com/Steveice10/FBI/releases/)
* L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest)
* L'Homebrew [Starter Kit](http://smealum.github.io/ninjhax2/starter.zip)

#### Istruzioni

##### Sezione I - Preparazione

{% capture notice-5 %} **Assicurati di utilizzare una scheda SD non corrotta!**

**Se dovessi utilizzare una scheda SD corrotta senza averla prima riparata, potresti BRICKARE la console!**

**Se ritieni che la tua scheda SD possa essere corrotta, controlla la presenza di errori utilizzando [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), o [F3X (Mac)](f3x-(mac))!** {% endcapture %}

<div class="notice--danger">{ notice-5 | markdownify }</div>

  1. **Se esiste, copia la cartella `/files9/` dalla tua scheda SD in una posizione sicura sul tuo computer e in ulteriori locazioni (come un archivio online); i file al suo interno potrebbero salvarti dalla perdita di tutti i tuoi dati nel caso qualcosa vada storto**
  2. Se assente, crea una nuova cartella rinominandola `cias` nella root della tua scheda SD
  3. **Se presente, elimina la cartella `a9lh` dalla root della tua scheda SD** 
    * **Se dovessi accidentalmente installare l'arm9loaderhax utilizzando il file `OTP.bin` di un altro dispositivo, BRICKERESTI LA CONSOLE!**
  4. Se presente, elimina la cartella `3ds` dalla root della tua scheda SD
  5. **Copia *il contenuto* del file `starter.zip` nella root della tua scheda SD** 
    * Include una cartella chiamata `3ds` per rimpiazzare quella appena eliminata
  6. Copia *il contenuto* del file `.7z` del SafeA9LHInstaller nella root della tua scheda SD
  7. **Copia la cartella `a9lh` dal file `.zip` di data_input nella root della tua scheda SD**
  8. **Copia il *contenuto* del file `.7z` dell'arm9loaderhax nella cartella `a9lh` della tua scheda SD**
  9. Copia il file `hblauncher_loader.cia` dall'archivio hblauncher_loader`.zip` nella cartella `/cias/` della tua scheda SD
 10. Copia il file `lumaupdater.cia` dal file `.zip` del Luma3DS Updater nella cartella `/cias/` della tua scheda SD
 11. Copia il file `FBI.cia` dal file `.zip` di FBI nella cartella `/cias/` della tua scheda SD
 12. **Copia il file `arm9loaderhax.bin` dal file `.7z` di Luma3DS nella root della tua scheda SD, sovrascrivendo eventuali file preesistenti**
 13. Crea una cartella chiamata `luma` nella root della tua scheda SD
 14. Crea una cartella chiamata `payloads` nella cartella `luma` della tua scheda SD
 15. Copia il file `Hourglass9.bin` dal file `.zip` di Hourglass9 nella cartella `/luma/payloads/` della tua scheda SD e rinomina il file `Hourglass9.bin` in `start_Hourglass9.bin`
 16. Copia il file `GodMode9.bin` dal file `.zip` di GodMode9 nella cartella `/luma/payloads/` della tua scheda SD e rinomina il file `GodMode9.bin` in `up_GodMode9.bin`
 17. Copia il file `aeskeydb.bin` nella cartella `/files9/` della tua scheda SD
 18. Copia il file `DspDump.3dsx` nella cartella `/3ds/` della tua scheda SD
 19. Copia *il contenuto* del file `fbi-2.4.2-injectable.zip` nella cartella `/files9/` della tua scheda SD

##### Sezione II - Installazione dell'arm9loaderhax

  1. Reinserisci la tua scheda SD nel tuo 3DS
  2. Esegui i seguenti passaggi per installare l'arm9loaderhax sulla tua console: 
    * Dovresti ora essere alla versione 2.1.0
    * Vai sul sito `http://dukesrg.github.io/2xrsa.html?arm11.bin` usando il browser del tuo 3DS
    * Se ottieni l'errore "Questo servizio non è disponibile nella tua regione", usa le Impostazioni della Console per impostare la nazione della tua console in modo che corrisponda alla regione della NAND installata durante il ctrtransfer 2.1.0
    * Se ottieni un altro errore, [segui questa guida per risolvere il problema](troubleshooting#ts_browser)
    * Se ottieni uno schermo visivamente corrotto, [segui questa guida per risolvere il problema](troubleshooting#ts_safe_a9lh_screen)
    * Premi (Select) per selezionare Full Install
    * Il programma di installazione installerà l'arm9loaderhax sulla tua console (impiegherà pochi istanti)
    * Spegni la tua console, tieni premuto il pulsante d'accensione se è necessario
    * Copia il file `OTP.bin`, ricavato precedentemente dalla tua console, dalla cartella `/a9lh/` della tua scheda SD in una posizione sicura sul tuo computer e in ulteriori locazioni (come un archivio online), poi reinserisci la tua scheda SD nel tuo 3DS

##### Sezione III - Configurare Luma3DS

  1. Tieni premuto (Select) durante l'accensione per entrare nel menu di Luma3DS 
    * Assicurati di tener premuto il pulsante prima di premere il pulsante di accensione
    * Se ottieni uno schermo nero, [segui questa guida per risolvere il problema](troubleshooting#ts_sys_a9lh) 
    * Se il 3DS avvia SafeA9LHInstaller, [segui questa guida per risolvere il problema](troubleshooting#ts_safe_a9lh)
  2. Usa il pulsante (A) e il D-Pad per abilitare le seguenti opzioni:  
    * **"Autoboot SysNAND"**
    * **"Use SysNAND FIRM if booting with R"**
    * **"Show NAND or user string in System Settings"**
  3. Se stai usando un **New 3DS**, dovresti abilitare *anche* la seguente opzione: 
    * **"New 3DS CPU" a "Clock+L2(x)"**
    * Questa opzione aumenterà il framerate in molti giochi, ma può rendere instabili altri
    * Se alcuni giochi non dovessero più funzionare correttamente, disabilita questa opzione
  4. Premi (Start) per salvare e riavviare il 3DS 
    * Se ottieni uno schermo nero, prosegui comunque con la prossima sezione 
    * Se ottieni l'errore "Failed to mount CTRNAND", prosegui comunque con la prossima sezione 

##### Sezione IV - Ripristinare il Sistema

Se, prima di seguire questa guida, avevi già un'installazione EmuNAND presente e vorresti ripristinare il contenuto dell'EmuNAND nel nuovo CFW SysNAND, segui la guida [Spostare l'EmuNAND](move-emunand) al posto di seguire i primi quattro passi indicati in questa sezione. {: .notice--info}

  1. Apri Hourglass9 dall'arm9loaderhax tenendo premuto (Start) all'avvio
  2. Vai su "SysNAND Backup/Restore"
  3. Seleziona "SysNAND Restore (keep a9lh) e ripristina il file `NANDmin.bin`
  4. Premi (Start) per riavviare la console 
    * Se ottieni uno schermo nero, segui la guida [ctrtransfer 9.2.0](9.2.0-ctrtransfer)
  5. Se il tuo backup era di una versione di sistema compresa tra 3.0.0 e 4.5.0, la tua console non si avvierà finché non avrai scaricato manualmente il firmware richiesto: 
    * Scarica [questo file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/00000056) e rinominalo in `firmware.bin`
    * Scarica [questo file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/cetk)
    * Copia i file `firmware.bin` e `cetk` nella cartella `/luma/` della tua scheda SD
    * Elimina entrambi i file dopo aver aggiornato il tuo 3DS
  6. Aggiorna il tuo 3DS andando su Impostazioni della Console, poi "Impostazioni Generali", infine scorri a destra e seleziona "Aggiornamento" 
    * Gli aggiornamenti effettuati usando A9LH + Luma (ora installato) sono sicuri, per cui basta chiederne la conferma
    * L'avviso di non aggiornare un New 3DS con versione 2.1.0 non è più applicabile dopo aver ripristinato il tuo backup della NAND.
    * Se ottieni un errore, imposta i DNS della connessione di rete in modo che vengano ottenuti automaticamente
    * Se continui ad ottenere un errore e la tua NAND è ad una versione precedente di 9.2.0, segui la guida [ctrtransfer 9.2.0](9.2.0-ctrtransfer)

##### Sezione V - Inject di FBI

  1. Apri Hourglass9 dall'arm9loaderhax tenendo premuto (Start) all'avvio
  2. Seleziona "SysNAND Backup/Restore", poi seleziona "Health&Safety Dump" per creare un backup dell'applicazione "Informazioni per la salute e sicurezza" chiamato `hs.app` **(puoi eventualmente usare il D-Pad per cambiare il nome)**
  3. Premi (B), quindi seleziona l'opzione "Health&Safety Inject"
  4. Seleziona il file `.app` dell'FBI iniettabile della tua regione
  5. Premi (A) per confermare la sostituzione
  6. Premi (Start) per riavviare la console
  7. Se hai ancora l'applicazione "Informazioni per la salute e la sicurezza" di stock e hai usato in passato Gateway per fare un downgrade, [segui questa guida per risolvere il problema](troubleshooting#gw_fbi)

##### Sezione VI - Ultimare l'installazione

  1. Apri Informazioni per la salute e la sicurezza (che ora è FBI)
  2. Seleziona "SD"
  3. Seleziona "cias"
  4. Seleziona il file `FBI.cia` e premi (A) per installarlo
  5. Seleziona il file `hblauncher_loader.cia` e premi (A) per installarlo
  6. Seleziona il file `lumaupdater.cia` e premi (A) per installarlo
  7. Ritorna alla cartella SD premendo (B)
  8. Seleziona il file `arm9loaderhax.bin`, quindi premi (A) e seleziona l'opzione "Copy"
  9. Ritorna al menu principale di FBI premendo (B)
 10. Seleziona "CTR NAND"
 11. Seleziona "\<current directory>"
 12. Seleziona l'opzione "Paste", quindi premi (A) per confermare la scelta
 13. Esci premento il pulsante HOME
 14. Avvia l'Homebrew Launcher dal menu HOME
 15. Seleziona "DSP Dump"
 16. Premi (Start) per uscire quando richiesto
 17. Riavvia la console tenendo premuto (Start) per avviare Hourglass9
 18. Seleziona "SysNAND Backup/Restore", poi seleziona "Health&Safety Inject"
 19. Seleziona `hs.app` (il file originale, che non contiene FBI), poi premi (A) per confermare la sostituzione
 20. Premi (Select) nel main menu per rimuovere la scheda SD
 21. Rimuovi la scheda SD, quindi premi (Start) per riavviare la console 
    * Il riavvio della console con la scheda SD rimossa permette la configurazione dell'installazione CTRNAND di Luma
 22. Usa il pulsante (A) e il D-Pad per abilitare le seguenti opzioni:  
    * **"Show NAND or user string in System Settings"**
 23. Se stai usando un **New 3DS**, dovresti abilitare *anche* la seguente opzione: 
    * **"New 3DS CPU" a "Clock+L2(x)"**
    * Questa opzione aumenterà il framerate in molti giochi, ma può rendere instabili altri
    * Se alcuni giochi non dovessero più funzionare correttamente, disabilita questa opzione
 24. Reinserisci la scheda SD, quindi premi (Start) per salvare e riavviare la console!

* * *

Se ora i software DSi / DS non funzionano più correttamente (ad esempio le cartucce DS o le applicazioni DSiWare non si avviano più), [segui questa guida per risolvere il problema](troubleshooting#twl_broken) {: .notice--warning}

{% capture notice-10 %} Puoi utilizzare Luma3DS Updater per aggiornare Luma3DS alla versione più recente; basta avviarlo e premere (A).  
Non è come eseguire un aggiornamento di sistema del 3DS, in quanto si limita a scaricare ed estrarre i file di Luma3DS più recenti. Luma3DS Updater aggiornerà soltanto i file presenti nella scheda SD.  
Verranno quindi aggiornati solamente i file di Luma3DS nella scheda SD. Se avvii la console senza una scheda SD inserita, verrà utilizzata la versione di sistema installata in CTR NAND.  
{% endcapture %}

<div class="notice--info">{ notice-10 | markdownify }</div>

{% capture notice-6 %}  
D'ora in poi verrà avviata per default una SysNAND basata su Custom Firmware.  
D'ora in poi potrai premere (Select) all'avvio per lanciare il menu di configurazione di Luma3DS.  
D'ora in poi potrai premere (Start) all'avvio per lanciare Hourglass9, un'applicazione per l'arm9loaderhax multifunzione per gestire la NAND e le cartucce di gioco.  
{% endcapture %}

<div class="notice--info">{ notice-6 | markdownify }</div>

D'ora in poi potrai aggiornare l'installazione dell'arm9loaderhax seguendo le istruzioni indicate nella pagina [Aggiornare A9LH](updating-a9lh). {: .notice--info}

Per usare l'[NTR CFW](https://github.com/44670/BootNTR/), recupera il file `ntr.bin` dal file `.zip` appropriato da [questa](https://github.com/44670/BootNTR/releases) pagina, copialo nella root della tua scheda SD, poi installa `BootNTR.cia` da [questa](https://github.com/astronautlevel2/BootNTR/releases/latest) pagina. {: .notice--info}

Conserva il file `NANDmin.bin`, potrà essere ripristinato tramite Hourglass9 per salvarti da un potenziale futuro brick. {: .notice--info}

Puoi rimuovere i backup della NAND dalla cartella `/files9/` fintantoché li conservi in un'altra posizione sicura. {: .notice--info}

{% capture notice-7 %} **Puoi rimuovere tutti i file e cartelle ora inutili dalla root della scheda SD che *non* sono presenti nella seguente lista:**

    + 3ds
    + files9
    + hblauncherloader
    + luma
    + Nintendo 3DS
    + arm9loaderhax.bin
    + boot.3dsx
    

{% endcapture %}

<div class="notice--info">{ notice-7 | markdownify }</div>

Per informazioni su come cambiare la regionalità della tua console, leggi la pagina [Cambiare Regione](region-changing). {: .notice--success}

Per informazioni su come aggiornare l'installazione dell'A9LH, leggi la pagina [Aggiornare A9LH](updating-a9lh). {: .notice--success}

Per informazioni sulle varie caratteristiche di Luma3DS, leggi [la sua pagina wiki](https://github.com/AuroraWright/Luma3DS/wiki/Options-and-usage). {: .notice--success}