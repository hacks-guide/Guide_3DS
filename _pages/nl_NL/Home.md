* * *

layout: splash permalink: / title: "Guide" header: overlay_color: "#5e616c" overlay_image: images/home-page-feature.jpg overlay_filter: 0.5 cta_label: "Get Started" cta_url: "/get-started" caption: excerpt: 'A complete guide to 3DS custom firmware,   
from stock to arm9loaderhax.  
' lang: en_US ref: home

* * *

{% capture notice-home %} **Deze gids is *alleen* voor consoles die in de winkel te verkrijgen zijn (door de consument gekocht; niet van het Nintendo Developer Program)!   
Als je een developer ("PANDA" of "SNAKE") console hebt, check de [devGuide](https://dev.3ds.guide)**{% endcapture %}

<div class="notice--danger">{{ notice-home | markdownify }}</div>

**Deze gids heeft *jouw* hulp nodig [deze](https://3ds.guide/rss.xml) torrents te seeden!**{: .notice--info}

**Voor het gebruik van de [magnet](https://en.wikipedia.org/wiki/Magnet_URI_scheme) koppelingen in deze gids, heb je een torrent-client zoals [Deluge](http://dev.deluge-torrent.org/wiki/Download) nodig**{: .notice--info}

**Lees de inleidende pagina's voor je verdergaat.**{: .notice--warning}

## Wat is Homebrew?

[**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) verwijst meestal naar software die niet is toegestaan door Nintendo. Het staat je toe homebrew games te spelen, je saves te bewerken en te back-uppen of emulators te draaien voor verschillende oudere systemen.

In de meeste gevallen is homebrew draaien op je console 100% gratis met de Nintendo 3DS Sound app. Er zijn ook verschillende andere exploits in commerciële games en de browser om homebrew op je 3ds draaiend te krijgen.

## Wat is Custom Firmware?

Met **Custom Firmware** ("CFW") kan je gebruik maken van meer geavanceerde hacks die je met userland homebrew niet gemakkelijk kunt doen. Je kan bijvoorbeeld ongesigneerde titels direct op je home menu weergeven.

CFW kan gemakkelijk worden geïnstalleerd op een console op 11.2.0 (meest recente) of lager. Bij andere versies kan de firmware gedowngrade worden.

## Wat installeert deze gids?

Het uiteindelijke doel van deze gids is een volledig ongemodificeerde 3DS vanaf de standaard firmware naar de arm9loaderhax powered Custom Firmware te brengen. On some versions, it utilizes homebrew as a stepping off point, but Custom Firmware is still the goal.

Arm9loaderhax is the newest and best method of launching Custom Firmware that gives us nearly full control of the system only milliseconds into boot, which is similar to the effect of BootMii for the Wii.

The benefits of arm9loaderhax over other Custom Firmware launch methods are numerous, and as such it is recommended to use this guide over any other that relies on outdated software (such as menuhax or rxTools).

## What can I do with Custom Firmware?

+ Play all game cards and eShop games, regardless of region
+ Customize your HOME Menu with user-created [themes](https://3dsthem.es/) and [badges](https://badges.3dsthem.es/)
+ Use "ROM hacks" for games that you own
+ Take gameplay and application screenshots
+ [Backup, edit, and restore](https://gbatemp.net/threads/release-jks-savemanager-homebrew-cia-save-manager.413143/) saves for many games
+ Play games for older systems with various emulators, using RetroArch or other standalone emulators. (Works best with a New Nintendo 3DS)
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