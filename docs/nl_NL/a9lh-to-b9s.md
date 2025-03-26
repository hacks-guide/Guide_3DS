# A9LH to B9S

## Required Reading

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

Alle toekomstige versies van Luma3DS zullen alleen gemaakt worden in het `.firm` formaat, dat alleen compatibel zal zijn met boot9strap en sighax. Dit betekent dat om verdere updates van Luma3DS te krijgen je deze pagina zal moeten gebruiken om jouw installatie te updaten.

## What You Need

::: warning

Om de [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links op deze pagina te kunnen gebruiken, heb je een torrent client zoals [qBittorrent](https://www.qbittorrent.org/download.php) of [Deluge](http://dev.deluge-torrent.org/wiki/Download) nodig.

:::

::: info

Merk wel op dat enkel bij de New 3DS `secret_sector.bin` nodig is om de arm9loaderhax exploit terug te draaien, daarom is het niet nodig bij de installatie van boot9strap op een stock 3DS. Als je geen New 3DS hebt, heb je `secret_sector.bin` niet nodig.

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)

## Instructions

### Section I - Prep Work

::: info

Voor alle stappen in dit gedeelte, moet je bestaande bestanden op je SD-kaart overschrijven.

:::

1. Zet je console uit

2. Plaats je SD kaart in je computer

3. Copy everything from the latest Luma3DS `.zip` to the root of your SD card
    - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it

4. Copy `arm9loaderhax.bin` from the v7.0.5 Luma3DS `.zip` to the root of your SD card

5. Kopieer `SafeB9SInstaller.bin` van de SafeB9SInstaller `.zip` naar de `/luma/payloads/` map op je SD-kaart
    - If the `luma` or `payloads` folder doesn't exist, create them
    - Delete any other existing `.bin` payloads (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) in the `/luma/payloads/` folder on your SD card as they will not be compatible with boot9strap compatible Luma3DS versions

6. Maak een map genaamd `boot9strap` op de hoofdmap van je SD-kaart

7. Kopieer `boot9strap.firm` en `boot9strap.firm.sha` van de boot9strap `.zip` naar de `/boot9strap/` map op je SD-kaart

8. **Enkel voor New 3DS gebruikers:** Kopieer `secret_sector.bin` naar de `/boot9strap/` map op je SD-kaart

    ::: info

    ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

    :::

9. Stop je SD-kaart terug in je console

### Section II - Installing boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    - If you see the luma configuration screen instead of SafeB9SInstaller, simply press (Start), then shut down your 3DS and try again
    - If this gives you an error, try either using a new SD card or formatting your current SD card (backup existing files first)
2. Wacht tot alle veiligheidscontroles zijn voltooid
    - If you get an "OTP Crypto Fail" error, download <font-awesome-icon icon="fa-solid fa-magnet"/> - aeskeydb.bin, then put it in the `/boot9strap/` folder on your SD card and try again
3. When prompted, input the key combo given on the top screen to install boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-a9lh-to-b9s)

<!--@include: ./_include/configure-luma3ds.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
