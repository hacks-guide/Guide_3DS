* * *

layout: splash permalink: / title: "Guide" header: overlay_color: "#5e616c" overlay_image: images/home-page-feature.jpg overlay_filter: 0.5 cta_label: "Get Started" cta_url: "/get-started" caption: excerpt: 'A complete guide to 3DS custom firmware,   
from stock to arm9loaderhax.  
' lang: en_US ref: home

* * *

{% capture notice-home %} **Questa guida è riservata *solamente* alle console retail (cioè acquistate in negozio, e non va seguita con le console del Nintendo Developer Program)!  
Se hai una console developer ("PANDA" o "SNAKE"), segui la [devGuide](https://dev.3ds.guide)** {% endcapture %}

<div class="notice--danger">{ notice-home | markdownify }</div>

**La guida ha bisogno di *te* per il seed di [questi](https://3ds.guide/rss.xml) torrent!** {: .notice--info}

**Per usare i link [magnet](https://en.wikipedia.org/wiki/Magnet_URI_scheme) presenti nella guida, ti occorre un client torrent come [Deluge](http://dev.deluge-torrent.org/wiki/Download)** {: .notice--info}

**Assicurati di aver letto tutte le pagine introduttive prima di proseguire.** {: .notice--warning}

## Cosa vuol dire Homebrew?

Con [**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) di solito si fa riferimento a software non autorizzato da Nintendo. Un homebrew di solito permette di avviare ad esempio giochi amatoriali, programmi di save editing e di backup, ed emulatori di diverse piattaforme ormai obsolete.

Nella maggior parte dei casi, l'avvio di homebrew sulla tua console è gratis al 100% grazie all'utilizzo dell'applicazione Sound Nintendo 3DS. È comunque possibile avviare degli homebrew grazie ad altri exploit basati su giochi commerciali e sul browser internet di sistema.

## Cosa vuol dire Custom Firmware?

Un **Custom Firmware** ("CFW") ti permette di utilizzare hack avanzate che un homebrew userland non può (con altrettanta facilità). Ad esempio, le signature patch ti permettono di installare titoli non firmati in modo tale che appaiano nel menu HOME.

È possibile installare un CFW su qualunque console con firmware 11.2.0 (l'ultimo) o inferiore. Altre versioni di sistema possono essere downgradate.

## Cosa viene installato con questa guida?

Lo scopo di questa guida è di installare in un 3DS stock mai modificato un Custom Firmware basato su arm9loaderhax. In alcune versioni di sistema è necessario utilizzare degli homebrew come punto di partenza, ma il Custom Firmware rimane comunque l'obiettivo finale.

L'Arm9loaderhax è attualmente il più recente e miglior metodo per installare un Custom Firmware in grado di fornirci pieno controllo della console a pochi istanti dal boot, con un effetto simile a quello ottenuto con BootMii su Wii.

I benefici dell'uso dell'arm9loaderhax rispetto metodi preesistenti per l'avvio di un Custom Firmware sono numerosi, per cui si raccomanda l'uso di questa guida a sostituzione di metodi basati su software ormai datati (come menuhax o rxTools).

## Cosa posso fare con un Custom Firmware?

+ Giocare tutte le cartucce e giochi dell'eShop, indipendentemente dalla regionalità
+ Personalizzare il tuo menu Home con [temi](https://3dsthem.es/) e [stemmi](https://badges.3dsthem.es/) creati dagli utenti
+ Usare dei "Rom HACK" per i giochi che possiedi
+ Catturare degli screenshot di applicazioni e di giochi
+ [Salvare, modificare e ripristinare](https://gbatemp.net/threads/release-jks-savemanager-homebrew-cia-save-manager.413143/) salvataggi per molti giochi
+ Giocare a giochi per vecchie piattaforme usando emulatori, RetroArch o altri emulatori a sé stanti. (Funzionano meglio con un New Nintendo 3DS)
+ Installare titoli homebrew sul tuo sistema e farli apparire sul tuo menu HOME
+ Creare un backup delle tue cartucce di gioco in un formato che permetta di giocare senza cartuccia
+ Solo per il New 3DS: fare dei live streaming sul tuo PC via wireless tramite NTR CFW
+ Utilizzare molte vecchie flashcard per il Nintendo DS che sono state bloccate tempo fa o che non hanno mai funzionato su un Nintendo 3DS
+ Aggiornare all'ultima versione di sistema in sicurezza senza doversi preoccupare di perdere l'accesso agli homebrew

## Cosa mi serve sapere prima di cominciare?

+ **Prima di seguire la guida, è necessario che tu conosca il rischio dell'hacking di un 3DS: OGNI volta che si modifica il sistema c'è sempre il rischio di un brick IRREVERSIBILE. È raro ma può sempre capitare, quindi assicurati di seguire la guida SOTTO OGNI ASPETTO E ISTRUZIONE.**
+ Se hai già modificato in precedenza il tuo 3DS per configurare un EmuNAND e vorresti spostare il contenuto dell'EmuNAND nel nuovo CFW SysNAND, segui tutte le istruzioni per ripristinare l'EmuNAND una volta arrivato alla sezione [Installare l'arm9loaderhax](installing-arm9loaderhax).
+ Questa guida è applicabile a New 3DS, Old 3DS e 2DS di tutte le regioni e con firmware 11.2.0 o minore *(ad eccezione di CHN / TWN)*.
+ Se tutto va secondi i piani, non perderai alcun dato e manterrai tutto ciò che era installato nella console (per cui giochi, NNID, salvataggi, ecc verranno tutti conservati).
+ **Mantieni la console in carica mentre segui la guida per evitare la perdita di dati o danni derivanti dall'improvviso spegnimento della console!**
+ La tua scheda SD dovrebbe essere [MBR e non GPT](http://www.howtogeek.com/245610/) (la scheda SD preconfezionata con la console è MBR di default).
+ Se devi formattare una nuova scheda SD, puoi usare [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) e impostare Allocation Unit Size a 32K.
+ Il 2DS è essenzialmente identico a un Old 3DS in termini di software, per cui tutti i passi che fanno riferimento a un "Old 3DS" si applicano anche ai 2DS.