---
title: "A9LH zu B9S"
---

{% include toc title="Inhalt" %}

### Wichtiger Hinweis

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

Alle zukünftigen Versionen von Luma3DS werden nur im `.firm`- Format sein, welches nur mit boot9strap und sighax kompatibel ist. Das bedeutet, dass du diese Seite zum Updaten deiner Installation nutzen solltest, falls du weiterhin Updates von Luma3DS erhalten möchtest.

Um die `.7z` Dateien, welche auf dieser Seite verlinkt sind, entpacken zu können, benötigst du ein Archivprogramm wie zum Beispiel [7-Zip](http://www.7-zip.org/) oder [The Unarchiver](https://theunarchiver.com/).

### Was du brauchst

Um die [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme)-Links auf dieser Seite zu verwenden, benötigst du einen Torrent-Client, wie [qBittorrent](https://www.qbittorrent.org/download.php) oder [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

Beachte, dass auf dem New 3DS die `secret_sector.bin` benötigt wird, um den arm9loaderhax-Exploit umzukehren, deswegen ist diese Datei nicht nötig um boot9strap auf einer unmodifizierten Konsole zu installieren. Wenn du keinen New 3DS hast, brauchst du die `secret_sector.bin` Datei nicht.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="Dies ist ein Magnetlink. Benutze einen Torrent-Client, um die Datei herunterzuladen."></i> - **Nur für New 3DS-Benutzer:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu. rg%2f51%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounced ce&tr=udp%3a%2f%2ftracker. oadbt.com%3a6969%2fkündigt%3a%2f%2ftracker.moeking. e%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker. lolosh.space%3a6969%2fkündigt%3a%2f%2fTracker an. omf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounced ce&tr=udp%3a%2f%2ftracker. heoks.net%3a6969%2fkündigt%3a%2f%2fTracker an. iny-vps.com%3a6969%2fkündigt%3a%2f%2f open.tracker an. l%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1. t.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu. rg%3a451%2fkündigt%3a%2f%2ftracker.openbittorrent an. om%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker. pentrackr.org%3a1337%2fkündigt%3a%2f%2fexodus.desync an. om%3a6969%2fAnkündigung &tr=http%3a%2f%2fopenbittorrent.com%3a80%2fAnkündigung) (Magnet-Link)
* Die neueste Version von [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (die Luma3DS `.zip` Datei)
* The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
* Die neueste Version vom [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (Direkter Download)
* Die neueste Version von [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (Direkter Download)

### Anleitung

#### Abschnitt I - Vorbereitungen

Überschreibe für alle Schritte dieses Abschnitts bereits vorhandene Dateien auf der SD-Karte.
{: .notice--info}

1. Power off your console
1. Stecke deine SD-Karte in deinen Computer
1. Copy `boot.firm` and `boot.3dsx` from the latest version Luma3DS `.zip` to the root of your SD card
    + Das Stammverzeichnis der SD-Karte bezieht sich auf das ursprüngliche Verzeichnis deiner SD-Karte, wo du den Nintendo 3DS Ordner sehen kannst, aber nicht in ihm drin bist
1. Kopiere `arm9loaderhax.bin`aus der Version v7.0.5 Luma3DS  `.7z`in das Stammverzeichnis deiner SD-Karte.
1. Kopiere die Datei `SafeB9SInstaller.bin` von der SafeB9SInstaller `.zip` in den Ordner `/luma/payloads/` auf deiner SD-Karte
    + Wenn der `luma` oder `payloads` Ordner nicht existiert, erstelle sie
    * Lösche alle `.bin`-Payloads (`GodMode9.bin`, *Decrypt9WIP.bin`, `Hourglass9.bin`, usw.) im `/luma/payloads/`-Ordner deiner SD-Karte, da sie mit den Luma3DS Versionen, die boot9strap unterstützen, nicht mehr kompatibel sind
1. Erstelle einen Ordner namens `boot9strap` im Stammverzeichnis deiner SD-Karte
1. Kopiere `boot9strap.firm` und `boot9strap.firm.sha` aus der boot9strap `.zip` in den `/boot9strap/`-Ordner auf deiner SD-Karte
1. **Nur New 3DS Nutzer:** Kopiere `secret_sector.bin` in den `/boot9strap/` Ordner auf deiner SD-Karte

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Stecke deine SD-Karte wieder in deine Konsole

#### Schritt II - Installation von boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    + Wenn du den Luma-Konfigurationsbildschirm anstelle vom SafeB9SInstaller siehst, drücke einfach (Start), dann schalte deinen 3DS aus und probiere es erneut
    + Wenn du eine Fehlermeldung erhältst, probiere es entweder mit einer neuen SD-Karte oder formatiere deine momentane (Mache vorher eine Sicherheitskopie von den Dateien)
1. Warte auf alle Sicherheitsüberprüfungen
    + Bekommst du einen "OTP Crypto Fail"-Fehler, lade <i class="fa fa-magnet" aria-hidden="true" title="Dies ist ein Magnetlink. Benutze einen Torrent-Client, um diese Datei herunterzuladen."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce) herunter und kopiere is in deinen `/boot9strap/` Ordner auf deiner SD Karte und versuche es erneut
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Your console should have rebooted into the Luma3DS configuration menu
    + Das Luma3DS Konfigurations-Menü enthält Einstellungen für die Luma3DS Custom Firmware. Viele dieser Einstellungen sind nützlich für Personalisierung und Debugging
    + For the purpose of this guide, these settings will be left on default settings
    + If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Drücke (Start) zum Speichern und neustarten

___

### Fortfahren mit [Setup fertigstellen](finalizing-setup)
{: .notice--primary}
