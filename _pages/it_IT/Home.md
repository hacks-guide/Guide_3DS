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
+ Giocare a giochi per vecchi sistemi usando vari emulatori, come RetroArch o altri emulatori a sé stanti (Funzionano meglio con un New Nintendo 3DS)
+ Install homebrew titles to your system, and have them appear on your HOME Menu
+ Dump your game cards to a format you can install, and play them without needing the card
+ New 3DS only: stream live gameplay to your PC wirelessly with NTR CFW
+ Run many old Nintendo DS flash carts that were blocked long ago or never worked on Nintendo 3DS
+ Safely update to the latest system version without fear of losing access to homebrew

## What do I need to know before starting?

+ **Before beginning the guide, you must know the risks of 3DS hacking: EVERY time you modify your system, there is always the potential for an UNRECOVERABLE brick. They're rare, but still a possibility so make sure you follow ALL directions EXACTLY.**
+ If you have already hacked your 3DS before to get an EmuNAND setup, and would like to move the contents of your previous EmuNAND to your new SysNAND CFW, you should follow all instructions and restore your existing EmuNAND when prompted once you reach [Installing arm9loaderhax](installing-arm9loaderhax).
+ This guide will work on New 3DS, Old 3DS, and 2DS in all regions on firmware 11.2.0 or below *(except CHN / TWN)*.
+ If everything goes according to plan, you will lose no data and end up with everything that you started with (games, NNID, saves, etc will be preserved).
+ **Keep the device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off!**
+ Your SD card should be [MBR, not GPT](http://www.howtogeek.com/245610/) (the SD card that comes with the device will be MBR by default).
+ If you need to format a brand new SD card, you can use [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) and set to an Allocation Unit Size of 32K.
+ The 2DS is essentially identical to the Old 3DS in terms of software, and that any steps which say "Old 3DS" also apply to 2DS.