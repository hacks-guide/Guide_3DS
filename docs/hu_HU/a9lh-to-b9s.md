# A9LH to B9S

## Required Reading

Ez az oldal az arm9loaderhax felhasználóknak készült, hogy frissíthessék a konzolukat boot9strap-re.

A Luma3DS a jövőben csak `.firm` formátumban kerül kiadásra, amely csak a boot9strap-pel és a sighax-szel kompatibilis. Ez azt jelenti, hogy amennyiben továbbra is szeretnéd a Luma3DS frissítéseit megkapni, ezt az útmutatót kell követned, hogy eszközödet naprakésszé tedd.

Ahhoz, hogy kicsomagold az oldalon található `.7z` fájlokat, egy fájl archiváló programra lesz szükséged, mint amilyen a [7-Zip](http://www.7-zip.org/) vagy a [The Unarchiver](https://theunarchiver.com/).

## What You Need

::: warning

Ahhoz, hogy használhasd a [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) linkeket ezen az oldalon, szükséged lesz egy torrent kliensre, mint például a [qBittorrent](https://www.qbittorrent.org/download.php) vagy a [Deluge](http://dev.deluge-torrent.org/wiki/Download).

:::

::: info

Vedd figyelembe, hogy New 3DS esetében a `secret_sector.bin` fájlra az arm9loaderhax exploit eltávolításához van szükség. Ezért nem kell a gyári állapotú konzolokon a boot9strap telepítéséhez. Ha ezt nem egy New 3DS-en csinálod, akkor nem kell a `secret_sector.bin`.

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655\&dn=secret_sector.bin\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)

## Instructions

### Section I - Prep Work

::: info

A most következő lépésekben mindig írd felül az SD kártyán található fájlokat, ha már létezne bármelyik.

:::

1. Kapcsold ki a konzolod

2. Helyezd az SD kártyád a számítógépbe

3. Másold át a `boot.firm` és `boot.3dsx` fájlt a legfrisebb verziószámú Luma3DS `.zip`-ből az SD kártya gyökerébe
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it

4. Másold át az `arm9loaderhax.bin` fájlt a v7.0.5-ös Luma3DS `.7z`-ből az SD kártya gyökerébe

5. Másold át a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
   - If the `luma` or `payloads` folder doesn't exist, create them
   - Delete any other existing `.bin` payloads (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) in the `/luma/payloads/` folder on your SD card as they will not be compatible with boot9strap compatible Luma3DS versions

6. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében

7. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába

8. **Csak New 3DS felhasználóknak:** Másold át a `secret_sector.bin` fájlt az SD kártyádon található `/boot9strap/` mappába

   ::: info

   ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

   :::

9. Tedd vissza az SD kártyád a konzoldba

### Section II - Installing boot9strap

1. Indítsd el a konzolod a (Start) lenyomva tartásával, hogy megjelenjen a SafeB9SInstaller
   - If you see the luma configuration screen instead of SafeB9SInstaller, simply press (Start), then shut down your 3DS and try again
   - If this gives you an error, try either using a new SD card or formatting your current SD card (backup existing files first)
2. Várj, amíg az összes biztonsági ellenőrzés be nem fejeződik
   - If you get an "OTP Crypto Fail" error, download <font-awesome-icon icon="fa-solid fa-magnet"/> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e\&dn=aeskeydb.bin\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
3. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
4. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához
5. A konzolodnak a Luma3DS konfigurációs menübe kellett újra-bootolnia
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Sok ezek közül a beállítások közül hasznos az egyedivé tételhez vagy a debuggoláshoz
   - For the purpose of this guide, these settings will be left on default settings
   - If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
6. Mentéshez és újraindításhoz nyomd meg a (Start) gombot

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
