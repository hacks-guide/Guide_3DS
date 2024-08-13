---
title: "A9LH naar B9S"
---

{% include toc title="Inhoudsopgave" %}

### Verplicht te lezen

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

Alle toekomstige versies van Luma3DS zullen alleen gemaakt worden in het `.firm` formaat, dat alleen compatibel zal zijn met boot9strap en sighax. Dit betekent dat om verdere updates van Luma3DS te krijgen je deze pagina zal moeten gebruiken om jouw installatie te updaten.

Om de op deze pagina gelinkte `.7z` bestanden uit te pakken zal je een bestandsarchiver zoals [7-Zip](http://www.7-zip.org/) of [The Unarchiver](https://theunarchiver.com/) nodig hebben.

### Wat je nodig hebt

Om de [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links op deze pagina te kunnen gebruiken, heb je een torrent client zoals [qBittorrent](https://www.qbittorrent.org/download.php) of [Deluge](http://dev.deluge-torrent.org/wiki/Download) nodig.
{: .notice--warning}

Merk wel op dat enkel bij de New 3DS `secret_sector.bin` nodig is om de arm9loaderhax exploit terug te draaien, daarom is het niet nodig bij de installatie van boot9strap op een stock 3DS. Als je geen New 3DS hebt, heb je `secret_sector.bin` niet nodig.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="Dit is een magnet link. Gebruik een torrent client om dit bestand te downloaden."></i> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magneet link)
* De nieuwste versie van [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (het Luma3DS `.zip` bestand)
* The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
* De nieuwste versie van [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (directe download)
* De nieuwste versie van [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (directe download)

### Instructies

#### Deel I - Voorbereiding

Voor alle stappen in dit gedeelte, moet je de bestaande bestanden op je SD-kaart overschrijven.
{: .notice--info}

1. Zet je console uit
1. Plaats je SD-kaart in je computer
1. Copy `boot.firm` and `boot.3dsx` from the latest version Luma3DS `.zip` to the root of your SD card
    + De hoofdmap van de SD-kaart verwijst naar de bovenste map van de SD-kaart, waarin je alle mappen op de SD-kaart kunt zien, waaronder de Nintendo 3DS map, zonder je in de Nintendo 3DS map te bevinden
1. Kopieer `arm9loaderhax.bin` van de v7.0.5 Luma3DS `.zip` naar de hoofdmap van je SD-kaart
1. Kopieer `SafeB9SInstaller.bin` van de SafeB9SInstaller `.zip` naar de `/luma/payloads/` map op je SD-kaart
    + Als de `luma` of de `payloads` map niet bestaat, maak ze dan aan
    + Verwijder alle andere bestaande `.bin` payloads (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) in de `/luma/payloads/` map op je SD kaart, omdat ze niet compatibel zullen zijn met boot9strap compatibele Luma3DS versies
1. Maak een map genaamd `boot9strap` op de hoofdmap van je SD-kaart
1. Kopieer `boot9strap.firm` en `boot9strap.firm.sha` van de boot9strap `.zip` naar de `/boot9strap/` map op je SD-kaart
1. **Enkel voor New 3DS gebruikers:** Kopieer `secret_sector.bin` naar de `/boot9strap/` map op je SD-kaart

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Stop je SD-kaart terug in je console

#### Deel II - Boot9strap installeren

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    + Als je het luma configuratiescherm ziet in plaats van SafeB9SInstaller, druk op de (Start) knop, zet je 3DS uit en probeer het opnieuw
    + Als je nu een foutmelding krijgt, probeer dan een nieuwe SD-kaart of probeer je SD-kaart te formatteren (maak eerst een backup van bestaande bestanden)
1. Wacht tot alle veiligheidscontroles zijn voltooid
    + Als je een "OTP Crypto Fail" foutmelding krijgt, download <i class="fa fa-magnet" aria-hidden="true" title="Dit is een magnet link. Gebruik een torrent client om dit bestand te downloaden."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), zet het dan in de `/boot9strap/` map op je SD-kaart en probeer dit het nog eens
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Your console should have rebooted into the Luma3DS configuration menu
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Veel van deze instellingen kunnen nuttig zijn voor aanpassing of debugging
    + For the purpose of this guide, these settings will be left on default settings
    + If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Druk op (Start) om op te slaan en opnieuw op te starten

___

### Ga door naar [Installatie voltooien](finalizing-setup)
{: .notice--primary}
