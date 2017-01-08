* * *

layout: splash permalink: / title: "Guide" header: overlay_color: "#5e616c" overlay_image: images/home-page-feature.jpg overlay_filter: 0.5 cta_label: "Get Started" cta_url: "/get-started" caption: excerpt: 'A complete guide to 3DS custom firmware,   
from stock to arm9loaderhax.  
' lang: en_US ref: home

* * *

{% capture notice-home %} **Dieser Guide ist *nur* für normal gekaufte Konsolen, nicht für Konsolen aus dem Nintendo Developer Program!  
Wenn du eine Entwicklerkonsole ("PANDA" oder "SNAKE") hast, nutze den [devGuide](https://dev.3ds.guide)** {% endcapture %}

<div class="notice--danger">{ notice-home | markdownify }</div>

**Dieser Guide braucht *deine* Hilfe beim Seeden [dieser](https://3ds.guide/rss.xml) Torrents!** {: .notice--info}

**Um die [Magnet](https://en.wikipedia.org/wiki/Magnet_URI_scheme)-Links in diesem Guide zu nutzen, brauchst du einen Torrent-Client, zum Beispiel [Deluge](http://dev.deluge-torrent.org/wiki/Download)** {: .notice--info}

**Lies alle einführenden Seiten, bevor du weitermachst.** {: .notice--warning}

## Was ist Homebrew?

[**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) (Deutsch: "Selbstgebrautes") bezeichnet im Allgemeinen Software, die nicht von Nintendo autorisiert wurde. Es erlaubt dir, Homebrew-Spiele, -Werkzeuge (wie beispielsweise Spielstandbearbeitung/-sicherung), oder Emulatoren für verschiedene ältere Konsolen laufen zu lassen.

In den meisten Fällen kannst du Homebrew auf deiner Konsole komplett kostenlos nutzen, mit Hilfe der Nintendo 3DS Sound-App. Es gibt aber auch verschiedene andere Exploits, beispielsweise im Browser oder in kommerziellen Spielen, die für Homebrew genutzt werden können.

## Was ist Custom Firmware?

**Custom Firmware** ("CFW", deutsch etwa "Selbsterstelles Betriebssystem (des 3DS)) erlaubt dir, komplexere Hacks zu nutzen, die reine Userland-Homebrew nicht nutzen kann. Zum Beispiel lassen dich Signatur-Patches unsignitierte Titel installieren, die dann direkt im HOME Menu auftauchen.

CFW kann einfach auf jeder Konsole eingerichtet werden, die auf der Firmware 11.2.0 (neueste) oder tiefer ist. Andere Versionen können auf eine passende Version downgegraded werden.

## Was installiert dieser Guide?

Dieser Guide wird auf einem komplett unmodifiziertem 3DS aus dem Laden eine arm9loaderhax gestützte Custom Firmware installieren. Auf manchen Systemversionen wird zwischenzeitlich Homebrew benötigt, aber das Endziel bleibt Custom Firmware.

Arm9Loaderhax ist die aktuellste und beste Methode um CustomFirmware zu starten. Es gibt und annähernd komplette Kontrolle über das System nur Millisekunden nachdem der Startknopf gedrückt wurde. Der Effekt ist ähnlich wie der von BootMii für die Nintendo Wii.

Die Vorteile von arm9loaderhax über andere Methoden, Custom Firmware zu starten, sind zahlreich. Deshalb ist es empfohlen, diesen Guide, und nicht andere, welche auf veralteter Software (zum Beispiel Menuhax oder rxTools) basieren, zu nutzen.

## Was kann ich alles mit einer Custom Firmware anstellen?

+ Spiele alle Game Cards und eShop Spiele, komplett ohne Region Lock
+ Verändere dein Home Menü mit nutzergenerierten [Themes](https://3dsthem.es/) und [Badges](https://badges.3dsthem.es/)
+ Verwende "ROM Hacks" für Spiele die du besitzt
+ Erstelle Screenshots von Spielen und Programmen
+ [Sichern, Bearbeiten, und Wiederherstellen](https://gbatemp.net/threads/release-jks-savemanager-homebrew-cia-save-manager.413143/) von Speicherständen für sehr viele Spiele
+ Spiel Spiel von älteren Systemen mit verschiedenen Emulatoren, mittels RetroArch oder einzelnen Emulatoren (Funktioniert am besten mit einem New Nintendo 3DS)
+ Installiere Homebrew Titel auf deinem System, und habe sie auf deinem Home Menü angezeigt
+ Sichere deine 3DS Spiele in einem Format das du installieren kannst, und ohne die Karte spielen kannst
+ Nur mit einem New 3DS: Streame dein Gameplay live zu deinem PC mittels NTR CFW ohne eine Capture Card
+ Benutze viele alte Nintendo DS Flashkarten die vor einer langen Zeit geblockt wurden, oder niemals auf dem 3DS funktioniert haben
+ Updates auf die neueste System Version ohne jemals den Homebrew Zugang zu verlieren

## Was benötige ich um anzufangen?

+ **Bevor du mit diesem Guide anfängst, musst du die Sachen kennen, die du riskierst: JEDES mal wenn du deinen 3DS modifizierst, gibt es immer das Potenzial dass dein 3DS unwiederruflich gebrickt wird. Sie sind selten, aber es gibt immer eine Möglichkeit, also stelle sicher, dass du ALLE Anweisungen GENAU befolgst.**
+ Wenn du deinen 3DS schon vorher gehackt hast, um ein EmuNAND Setup zu bekommen, und du willst alle Inhalte von deinem bevorigen EmuNAND zu deiner neuen SysNAND CFW bekommen, solltest du alle Anweisungen befolgen und deinen existierenden EmuNAND wiederherstellen wenn du dazu aufgefordert wirst wenn du [arm9loaderhax Installieren](installing-arm9loaderhax) erreichst.
+ Dieser Guide funktioniert mit New 3DS, Old 3DS und 2DS Systemen aus allen Regionen auf der Firmware 11.2.0 und darunter *(außer CHN / TWN)*.
+ Wenn alles nach Plan verläuft, solltest du keine Daten verlieren und alles habe, womit du gestartet bist (Spiele, NNID, Speicherstände und alles andere wird erhalten bleiben).
+ **Lass den 3DS am Stromnetz und geladen in dem gesamten Prozess, damit keine Daten verloren gehen oder Schaden durch einen unerwarteten Power-Off entstehen werden!**
+ Deine SD-Karte sollte [MBR, nicht GPT](http://www.howtogeek.com/245610/) sein(Die SD-Karte die mit deinem 3DS gekommen ist ist MBR als Standard).
+ Wenn du eine brandneue SD-Karte formatierst, kannst du [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) benutzen und die "Allocation Unit Size" auf 32K setzen.
+ Der 2DS ist essenziell identisch zu dem Old 3DS Softwareweise, und alle Schritte die Old 3DS sagen können auch für den 2DS genutzt werden.