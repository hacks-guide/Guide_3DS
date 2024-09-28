# Hibaelhárítás

Ez az oldal hibaelhárítási tanácsokat ad sűrűn előforduló problémákhoz. Ha nem tudod megoldani a problémád az oldal tanácsai alapján, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) és írd le a problémádat és azt is hogy mi az amit már próbáltál.

:::details Table of Contents

Több oldalon használt:

- [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Útmutató oldalak:

- [Installing boot9strap (Soundhax)](#installing-boot9strap-soundhax)
- [Installing boot9strap (MSET9)](#installing-boot9strap-mset9)
- [Installing boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
- [Installing boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
- [Finalizing Setup](#finalizing-setup)

Problémák telepítést követően:

- [Boot issues](#boot-issues-on-consoles-with-custom-firmware)
- [Software issues](#software-issues-on-consoles-with-custom-firmware)

:::

## Issues with SafeB9SInstaller

### Before opening SafeB9SInstaller

:::details Failed to open SafeB9SInstaller.bin

A `SafeB9SInstaller.bin` fájl hiányzik, vagy rossz helyen van. Töltsd le a legutolsó kiadását az [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip)-nek csomagold ki és rakd az SD kártyád gyökerébe. Ne add hozzá a `.bin` kiterjesztést, ha nem látod.

:::

### SigHaxed FIRM was not installed! Tekintsd meg az alsó képernyőt részletekért.

:::details MicroSD Card - init failed

Az SD kártyád furán viselkedik. Próbáld meg újraformázni az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). Ha ez nem működik, próbálj egy másik SD kártyát.

:::

:::details SigHaxed FIRM - File not found

Hiányzik a `boot9strap.firm` és a `boot9strap.firm.sha` fájl a `boot9strap` mappából vagy a `boot9strap` mappa neve hibás. Töltsd le a [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), legutolsó kiadását és rakd a `boot9strap.firm` és a `boot9strap.firm.sha` fájlt a `boot9strap` mappába.

:::

:::details SigHaxed FIRM - invalid FIRM

Probléma van a `boot9strap.firm` és a `boot9strap.firm.sha` fájlokkal. Töltsd le újra a [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), legutolsó kiadását és rakd a `boot9strap.firm` és a `boot9strap.firm.sha` fájlt a `boot9strap` mappába.

:::

:::details Secret Sector - File not found

Hiányzik a `secret_sector.bin` fájl a `boot9strap` mappából vagy a `boot9strap` mappa neve hibás. Töltsd le a [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655\&dn=secret_sector.bin\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) fájlt torrent klienssel és rakd a `boot9strap` mappába.

:::

:::details Something else

Csatlakozz a [Nintendo Homebrew Discord-on](https://discord.gg/MWxPgEp) csatornához segítségért és írd le az üzenetet amit láttál.

:::

## Boot9strap telepítése (Soundhax)

:::details Red/purple/pink and white screen after running Soundhax

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

Ha nem ezeken a firmware verziókon van a konzolod, akkor ez valószínűleg azt jelzi, hogy már van egyedi firmware-ed. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

Probléma van a `otherapp.bin` fájloddal (nem jó, hiányzik, rossz helyen van vagy sérült). Töltsd le a legutolsó kiadását az [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)-nak és rakd az SD kártyád gyökerébe.

:::

:::details "Could not play"

Rossz Soundhax fájlod van a konzolodhoz és a régiódhoz vagy az eszközöd nem kompatibilis a Soundhax-szal. Később, azt, hogy mit kell csinálnod, attól függ, hog milyen verzión van a 3DS-ed jelenleg. Csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

:::details Failed to mount the SD card!

Ha ez sikertelen, próbálkozz egy másik SD kártyával.

:::

## Boot9strap telepítése (MSET9)

:::details Python 3 is not installed

A Python nincs telepítve arra a számítógépre, amit használsz. Töltsd le a [Python weboldaláról](https://www.python.org/downloads/), majd duplán kattintva a telepítőn kövesd a lépéseket a Python telepítéséhez. Ha a Python települt próbáld újra.

:::

:::details HOME Menu extdata: Missing!

Kérjük kapcsold be a konzolod, miközben az SD kártya be van helyezve, majd ellenőrizd az MSET9 státuszt újra.

Ha ez nem működik, az SD kártyád formázni kell:

1. Másolj mindent az SD kártyádról a PC-dre
2. Formázd az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Másolj mindent vissza
4. Kezd újra az [I. rész 7. lépésével](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

:::

:::details Mii Maker extdata: Missing!

A Mii Maker adat nem található az SD kártyán. Kérjük kapcsold be a konzolod, miközben az SD kártya be van helyezve, majd indítsd el a Mii Maker-t és utána ellenőrizd az MSET9 státuszt újra.

Ha ez nem működik, az SD kártyád formázni kell:

1. Másolj mindent az SD kártyádról a PC-dre
2. Formázd az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Másolj mindent vissza
4. Kezd újra az [I. rész 8. lépésével](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::details Title database: Not initialized!

Ensure that you have reset the title database.

- Please power on your console with your SD inserted
- Indítsd el a System Settings-et és navigálj ide: `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
  - This will not wipe any of your data
- If you get a reset prompt, after resetting, power off your console and start again from [Section I Step 14](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

Ha nem kapsz reset promptot, az SD kártyádat formázni kell:

1. Másolj mindent az SD kártyádról a PC-dre
2. Formázd az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Másolj mindent vissza

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
2. Írj `2`-öt és nyomj Enter-t az MSET9 állapotának ellenőrzéséhez
   - This will create the dummy databases again
3. Zárd be az MSET9 szkript ablakát
4. Kezd újra az [I. rész 12. lépésével](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 01: Couldn't find Nintendo 3DS folder

Az MSET9-et nem az SD kártya gyökeréből futtatod, vagy az SD kártyáról hiányzik a Nintendo 3DS mappa.

Emlékezz, az SD kártyádnak hasonlóan kell kinéznie:

::: info

![](/images/screenshots/mset9/mset9-root-layout.png)

:::

Ha az SD kártyád kiosztása megfelelő, akkor az SD kártyád valószínűleg nem olvasható a konzolod által és formázni kell:

1. Másolj mindent az SD kártyádról a PC-dre
2. Formázd az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Másolj mindent vissza
4. Kezd újra az [I. rész elejétől](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

::::

:::details Error 02: Your SD is write protected

Az írásvédelem bekapcsolt ezen az SD kártyán. Ha teljes méretű SD kártyát használsz, legyél biztos abban, hogy a zár a [jobb felső pozícióban](/images/sdlock.png) legyen. Egyéb esetben próbáld meg kivenni és visszatenni az SD kártyád.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

Több ID0 mappád van. Ahhoz, hogy meghatározd melyik a helyes mappa, a következő lépéseket kell követned:

1. Nevezd át a `Nintendo 3DS` mappát `BACKUP_Nintendo 3DS` névre
2. Tedd vissza az SD kártyád a konzoldba
3. Kapcsold be a konzolod
4. Várd meg, amíg a konzolod legenerálja az SD kártyára az adatokat
   - Your applications will have disappeared. Ez normális, hamarosan megoldjuk
5. Kapcsold ki a konzolod
6. Helyezd az SD kártyád a számítógépbe
7. Lépj be az SD kártyád `Nintendo 3DS` könyvtárába
8. Írd le az első pár karakterét a mappának amit látsz
   - This is your true ID0, which we will keep in the real Nintendo 3DS folder
9. Töröld az ID0-t az aktuális `Nintendo 3DS` mappából
10. Mozgasd a valódi ID0 mappát a `BACKUP_Nintendo 3DS` mappából a `Nintendo 3DS` mappába
11. Ha létezik, mozgasd a `Private` mappát a `BACKUP_Nintendo 3DS` mappából a `Nintendo 3DS` mappába

Ha ez kész, folytasd az [I. rész 3. lépésével](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->

::::

:::details Error 06: You need at least 16MB free

Az SD kártyádon nincs elég hely az MSET9 kiváltásához. Szabadíts fel egy kevés helyet és próbáld újra.

Az útmutató végére, 1,3 GB szükséges a NAND mentés elkészítéséhez, így az a legjobb, ha rögtön ennyi helyet szabadítsz fel.

:::

:::details Error 07: One or more files are missing or malformed!

Egy vagy több fájl, amire az MSET9-nek szüksége van a futáshoz, hiányzik vagy sérült. Töltsd le újra az [MSET9 Release `.zip`](https://github.com/hacks-guide/MSET9/releases/latest) fájlt, csomagold ki az SD kártyád gyökerébe, felülírva a létező fájlokat, majd próbáld újra.

:::

:::details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

:::

:::details Red screen after reinserting SD card (Section II Step 11)

Valószínüleg hiányzik a `SafeB9S.bin` az SD kártyád gyökeréből vagy sérült. Másold ki az MSET9 `.zip` fájlból felülírva a létező fájlokat, majd kövesd ezeket a lépésket a trigger fájl eltávolításához:

1. Kapcsold ki erőltetve a konzold a Power gomb 20 másodpercig nyomva tartásával
2. Helyezd az SD kártyád a számítógépbe

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you may [retry Section II](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
2. Írj `4`-et és nyomj Enter-t
3. Amikor az ablak azt mondja, hogy Removed trigger file", írj `0`-t majd nyomj Entert
4. Tedd vissza az SD kártyát a konzoldba
5. Kapcsold be a konzolod
6. Térj vissza az [II. rész 1. lépéséhez](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Alternatíva, az SD kártyád nem megfelelően formázott vagy partícionált. A trigger fájl eltávolítását követően formázd:

1. Másolj mindent az SD kártyádról a PC-dre
2. Formázd az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Másolj mindent vissza
4. Kezd újra az [II. rész 1. lépésével](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details System Settings loading infinitely after reinserting the SD card

Vagy eltértél az MSET9 lépésektől, vagy rossz modelt/verziót választottál vagy az SD kártyád formázni kell. Biztosítsd, hogy jó [modellt](/images/3dsmodels.png) és firmware verziót válassz a szkript megnyitásakor.

Kövesd a következő lépéseket a trigger fájl ettávolításához, majd próbáld újra a II. részt:

1. Kapcsold ki erőltetve a konzold a Power gomb 20 másodpercig nyomva tartásával
2. Helyezd az SD kártyád a számítógépbe

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
2. Írj `4`-et és nyomj Enter-t
3. Amikor az ablak azt mondja, hogy Removed trigger file", írj `0`-t majd nyomj Entert
4. Tedd vissza az SD kártyát a konzoldba
5. Kapcsold be a konzolod
6. Térj vissza az [II. rész 1. lépéséhez](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. Másolj mindent az SD kártyádról a PC-dre
2. Formázd az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Másolj mindent vissza
4. Kezd újra az [II. rész 1. lépésével](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details An exception occurred after triggering MSET9

This likely indicates that you already have custom firmware. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

## Boot9strap telepítése (super-skaterhax)

:::details "An error has occurred. Please save your data in any software currently in use, then restart the system."

If no colors flash after pressing "GO GO!":

- Ensure that you have set your system date and [region](/images/screenshots/skater/skater-lang.png) correctly
- Ensure that no other browser tabs are open, then restart the browser and try the exploit again

If the screen flashes colors then freezes/crashes:

- Ensure that you have the correct copy of `arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin` for your console's version and region
- Try resetting your browser data:
  1. Launch the browser, then launch the browser settings
  2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
  3. Try the exploit again
- Try changing the system language to something other than the current language

:::

:::: details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

The file `arm11code.bin` is missing or misplaced. Make sure to copy the files of the [latest version of super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) for your region and version to the root of your SD card (not inside of a folder).

::: info

![](/images/screenshots/skater-root-layout.png)

:::

::::

:::details An exception occured or "DLL_HEAP_INFORMATION" when pressing GO! GO!

This likely indicates that you already have custom firmware. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

## Boot9strap telepítése (SSLoth-Browser)

:::details Red/purple/pink and white screen after running Browserhax

This likely indicates that you already have custom firmware. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

The file `arm11code.bin` is missing or misplaced. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. Ne add hozzá a `.bin` kiterjesztést, ha nem látod.

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

There may be an issue with your `arm11code.bin` file. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. Ne add hozzá a `.bin` kiterjesztést, ha nem látod.

You can also try resetting your browser save data:

1. Launch the browser, then launch the browser settings
2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
3. Try the exploit again

:::

:::details Opening the browserhax QR code or URL crashes

Browser based exploits (such as this one) are often unstable and crash frequently, but they can sometimes be fixed by doing the following steps.

1. Launch the browser, then launch the browser settings
2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
3. Try the exploit again

:::

:::details System Update prompt when opening browser

The SSLoth proxy was incorrectly configured. Re-do the SSLoth section on the page.

:::

:::details Error 032-0420 when opening browser

Follow these steps in order:

1. Lépj be a "System Settings"-be a konzolodon
2. Navigate to `Internet Settings` -> `Connection Settings`
3. Click on your network connection slot and navigate to `Change Settings` -> `Next Page (right arrow)` -> `Proxy Settings`
4. Set "Proxy Settings" to "No"
5. Click OK, then click Save
6. When prompted, click "Test" to perform the connection test
   - The test should succeed
7. Click "OK" to continue
8. Nyomj a "Back"-re kétszer, majd a "Close"-ra, hogy visszajuszz a HOME Menübe
9. Open the Internet Browser once
10. If prompted about a system update, press OK
    - This won't actually update the system
11. Start again from [Section II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Frozen on "Doing agbhax..."

There may be an issue with your `arm11code.bin` file. Re-download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place it on the root of your SD card, and rename it to `arm11code.bin`. Ne add hozzá a `.bin` kiterjesztést, ha nem látod.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

:::details Failed to mount the SD card!

Mentsd az adataidat, majd formázd újra az SD kártyád FAT32 formátumra, az ajánlott alkalmazással az operációs rendszerednek megfelelően. ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). A MiniTool Partition Wizard-ról és a HP formázó eszközről (HPUSBDisk) ismert, hogy problémákat okoznak a 3DS SD kártyákkal.

Ha ez sikertelen, próbálkozz egy másik SD kártyával.

:::

## Telepítés véglegesítése

:::details Unable to update console

Az alábbi lépések tetszőleges sorrendben hajthatók végre, azonban a lista a legkönnyebbtől a legnehezebben végrehajthatóig van összeállítva.

1. Ha Pretendo-t használsz válts vissza Nintendo-ra a Nimbus-szal és próbáld újra
2. Állítsd a DNS beállításokat "Auto"-ra
3. Menj közelebb a WiFi routerhez
4. Frissítsd Safe Mode-ból a konzol kikapcsolásával, nyomva tartva a (Bal Váll) + (Jobb Váll) + (D-Pad Fel) + (A) gombokat bootoláskor, majd kövesd a képernyőn megjelenők lépéseket
5. Töröld a WiFi csatlakozásod, majd csatlakozz újra WiFi-dhez
6. Indítsd újra a WiFi routered
7. Csatlakozz egy másik WiFi-hez, mint például egy hotspot
8. A Nintendo szerverei lehet, hogy nem elérhetők; Próbáld később újra
9. Ha még mindig hibát kapsz, kövesd a [CTRTransfer](ctrtransfer) című útmutatót, majd próbáld újra
10. További segítségért (angol nyelven), fordulj ide: [Nintendo Homebrew a Discord-on](https://discord.gg/MWxPgEp)

:::

:::details Error #22: finalize.romfs is invalid

A `finalize.romfs` fájl sérült vagy nem olvasható. [Töltsd le újra](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) és másold az SD kártyád gyökerébe, felülírva a létező fájlokat, majd próbáld újra.

:::

:::details Information #23: finalize.romfs in wrong location

A `finalize.romfs` rossz helyre került az SD kártya gyökere helyett. A szkript megpróbálja megoldani ezt, de szüksége van a jóváhagyásodra, hogy meg tudja tenni. Nyomj (A) gombot a következő néhány kérdésre a folytatáshoz.

:::

:::details Error #24: SD is write-protected

Ellenőrizd, hogy SD kártyád nem [zárolt-e](/images/sdlock.png). Ha az SD kártyád nem zárolt, és továbbra is ezt a hibát kapod, csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

:::details Error #02: Missing essential.exefs

'No'-t válaszoltál a "Make essential files backup?" kérdésre a GodMode9-ben. Kapcsold kia konzolod, majd be a (Start) gomb nyomva tartása mellet, hogy újra belép a GodMode9-be és válaszold a 'Yes'-t a kérdésnél, majd próbáld újra.

:::

:::details Error #04: No space

Legalább 1,33 GB szabad hely kell a NAND mentés végrehajtásához, ami a szkript része. Ha nincs elég szabad helyed, kövesd ezeket a lépéseket:

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold a `Nintendo 3DS` mappát az SD kártya gyökeréből a számítógépedre
4. Töröld a Nintendo 3DS mappát az SD kártyáról
5. Tedd vissza az SD kártyád a konzoldba
6. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
7. Nyomd meg a (Home) gombot
8. Válaszd a "Scripts..." opciót
9. Válaszd az "finalize" opciót
10. Nyomj (A)-t egy NAND mentés létrehozásához
    - This may take around fifteen minutes
11. Nyomd meg az (A) gombot újra
    - The console should automatically power off
12. Helyezd az SD kártyád a számítógépbe
13. Másold a `/gm9/backups` mappából a fájlokat az SD kártyádról egy biztonságos helyre a számítógépeden
14. Töröld a `<date>_<serialnumber>_sysnand_##.bin` és a `<date>_<serialnumber>_sysnand_##.bin.sha` fájlokat az SD kártyádról
15. Másold a `Nintendo 3DS` mappát a számítógépedről az SD kártyád gyökerébe
16. Töröld a `Nintendo 3DS` mappát a számítógépedről

Most, hogy már a NAND mentésed biztos helyen van:

1. Tedd vissza az SD kártyád a konzoldba
2. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
3. Nyomd meg a (Home) gombot
4. Válaszd a "Scripts..." opciót
5. Válaszd az "finalize" opciót
6. Folytasd a szkriptet normálisan
   - The NAND backup will be automatically skipped

:::

:::details Information #05: No title database

Nyomj (A)-t a cím adatbázis importálásához, old fel a SysNAND írást a képernyőn látható gombok megadásával, majd folytasd a szkriptet normálisan.

:::

:::details Error #06 or "Error: Could not open directory" when attempting a NAND backup

Győződj meg róla, hogy legalább 1.3 GB szabad hely van az SD kártyádon. Ha nincs elég szabad helyed, kövesd ezeket a lépéseket:

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold a `Nintendo 3DS` mappát az SD kártya gyökeréből a számítógépedre
4. Töröld a Nintendo 3DS mappát az SD kártyáról
5. Tedd vissza az SD kártyád a konzoldba
6. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
7. Hajts végre egy [NAND Backup](godmode9-usage#creating-a-nand-backup)-ot
8. Másold a `gm9/out` mappát az SD kártyádról egy biztonságos helyre a számítógépeden
9. Töröld a `<date>_<serialnumber>_sysnand_##.bin` és a `<date>_<serialnumber>_sysnand_##.bin.sha` fájlokat az SD kártyád `/gm9/out/` mappájából, megtartva az essential.exefs-t a `/gm9/out/` -ban
10. Másold a `Nintendo 3DS` mappát a számítógépedről az SD kártyád gyökerébe
11. Töröld a `Nintendo 3DS` mappát a számítógépedről

Ha van elég szabad hely az SD kártyádon, az SD kártya lehet sérült vagy hibás. Ellenőrizd az SD kártyádat hibákra valamelyik programmal az alábbiak közül az operációs rendszerednek megfelelően: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Ellenőrizd, hogy SD kártyád nem [zárolt-e](/images/sdlock.png). Ha az SD kártyád nem zárolt, és továbbra is ezt a hibát kapod, csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

:::details Information #17: Duplicate NAND backup

A szkript úgy érzékelte, hogy a Nintendo 3DS mappa hiányzik ÉS már csináltál NAND mentést korábban. Ha szeretnél telepíteni homebrew alkalmazásokat, a következőt kell tenned:

1. Nyomj (B)-t, hogy elutasítsd az újabb NAND mentés létrehozását
2. Az (R) lenyomva tartása közben nyomd meg a (Start) gombot a konzolod kikapcsolásához
3. Másold a `/gm9/backups` mappa tartalmát egy biztonságos helyre a számítógépeden
4. Töröld a `/gm9/backups/` mappát az SD kártyádról
5. Ha lemozgattad a Nintendo 3DS mappád az SD kártyádról, hogy eljuss ide, akkor másold vissza az SD kártyádra
   - If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
6. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
7. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
8. Válaszd a "Scripts..." opciót
9. Válaszd az "finalize" opciót
10. Kövesd a script utasításait és válaszolj meg minden kérdést

:::

:::details Error #18a/18b: MSET9 detected

Nem távolítottad el az MSET9-et az előző oldalon. A szkript megpróbálja neked eltávoltani az MSET9-et; kövesd a lépések, amit a szkript ad.

:::

---

## Boot issues on consoles with custom firmware

::: info

Az itt leírt lépések általában feltételezik, hogy a konzolod modern egyedi firmware telepítéssel rendelkezik (boot9strap + Luma3DS 8.0 vagy nagyobb). Ha a konzolod régebbi homebrew telepítés (például valami ami arm9loaderhax vagy menuhax alapú), frissítened kell a telepítésed, mielőtt kipróbálod ezeket a lépéseket.

:::

### Power/notification light indicators

:::details My console powers off when I try to turn it on, and/or the notification LED shows a color on boot

Probléma van az `boot.firm` fájloddal. Ha [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4)-et futtatsz, akkor a 3DS-ed értestő LED-je egy adott sznt villogtat. Ez a szín a `boot.firm` problémák diagnosztizálását segíti az SD kártyán vagy a belső memóriában. Régebbi boot9strap verziókon a kék fény azonnal kikapcsol, ha megpróbálod bekapcsolni a konzolt.

Ha az értesítő LED villog:

- **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
- **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. Megtalálta a `boot.firm`-et a belső memóriában, de az a fájl sérült.
- **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

Beszerezhetsz `boot.firm` fájlt a [Luma3DS legfrissebb kiadásának letöltésével](https://github.com/LumaTeam/Luma3DS/releases/latest) és annak kicsomagolásával, majd a `boot.firm` fájlnak az SD kártyád gyökerébe helyezésével. Ha a `boot.firm` fájlod folyamatosan sérültnek érzékelt, szükség lehet az SD kártyád hibákra ellenőrzésére ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), vagy [macOS](f3xswift-\(mac\))). Azt is vedd figyelembe, hogy a 3DS-nek problémái lehetnek olyan fájlokkal, amit WinRAR-ral csomagoltak ki.

Ha hallod a "pattanó hangot", ami potenciálisan a háttérvilágítás bekapcsolását kíséri a másodperc egy részéig, akkor hardver problémád van a konzoloddal (mint például lecsatlakozott háttérvilágítás kábel). Lehetséges, hogy be tudod kapcsolni a konzolodat megfelelő szögben tartva.

:::

:::details My console gets stuck on a black screen with blue power light staying on

Az alábbi lépések tetszőleges sorrendben hajthatók végre, azonban a lista a legrövidebbtől a legtöbb időt igénylőig van összeállítva.

1. Kapcsold ki a konzolod, vedd ki majd tedd vissz az SD kártyát, majd kapcsold be újra a konzolod.
2. Kapcsold ki a konzolod, vedd ki a játék cartridge-t ha van benne, majd kapcsold be a konzolod és várj tíz percet. Ha a konzolod bebootol tíz percen belül, a probléma elhárult és nem fog valószínűleg újra előfordulni
3. - Nevezd át a `Nintendo 3DS` mappát az SD kártyádon `Nintendo 3DS_BACKUP` névre és próbálj meg bootolni. Ha a konzolod sikeresen bootol, problémák vannak a `Nintendo 3DS` könyvtáraddal. Próbáld meg kitakarítani a HOME menu extdata-t:
   - Navigate to `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
   - Töröld a 3DS régiódhoz tartozó mappát:
     - **EUR Region**: `00000098`
     - **JPN Region**: `00000082`
     - **USA Region**: `0000008f`
     - **CHN Region**: `000000A1`
     - **KOR Region**: `000000A9`
     - **TWN Region**: `000000B1`
4. Próbálj meg recovery mode-ba bootolni, majd onnét frissíteni a rendszeredet:
   - Kapcsold ki a konzolod
   - Hold (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A)
   - Kapcsold be a konzolod
   - If you were successful, the console will boot to an "update your system" screen
5. Kövesd a [CTRTransfer](ctrtransfer) útmutatót
6. További támogatásért kérj segítséget a [Nintendo Homebrew-tól a Discord-on](https://discord.gg/MWxPgEp)

:::

### Error message on boot

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"

A Luma3DS verziód régi. Töltsd le a legutolsó kiadását az [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)-nak és rakd a `boot.firm` fájlt az SD kártyád gyökerébe, felülírva bármilyen létező fájlt. Legyél biztos abban, hogy a ZIP fájlt más eszközzel csomagolod ki, mint a WinRAR, mert ismert, hogy problémái vannak a 3DS-sel kapcsolatos fájlokkal.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

There are a number of reasons as to why this could be happening. In any case, this error can usually be fixed by following the [CTRTransfer](ctrtransfer) guide.

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..."

Az ARM11 kivételkezelők tiltva, vagy az egyedi firmware nincs telepítve. Try enabling ARM11 exception handlers:

- Kapcsold ki a konzolod
- Hold (Select)
- Power on your console, while still holding (Select)
- If the "Disable ARM11 exception handlers" box is checked, uncheck it

:::

:::details HOME Menu is missing installed applications

Ez különböző okokból is előfordulhat, de leginkább azért, mert az SD kártyád nem került beolvasásra a rendszer által.
Ellenőrizheted, hogy az SD kártyád olvasásra kerül-e a SELECT gomb nyomva tartásával bootoláskor, és az alsó képernyőn megjelenő sárga szöveg ellenőrzésével; ha azt mondja, hogy "Booted from CTRNAND via B9S", akkor a konzolod a belső memóriáról bootolt, nem az SD kártyáról.
Ha ez a helyzet, próbáld meg a lépéseket alább, ami a legkönnyebbtől a legnehezebbig került felsorolásra:

1. Kapcsold ki a konzolod, vedd ki majd tedd vissz az SD kártyát, majd kapcsold be újra a konzolod
2. Kapcsold ki a konzolod, távolítsd el az SD kártyád, majd csatlakoztasd a számítógépedhez. Töltsd le a legutolsó kiadását az [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)-nek és csomagold ki a `Luma3DS.zip` fájlból a `boot.firm` fájlt, majd rakd az SD kártyád gyökerébe (felülírva bármilyen létező fájlt)
3. Kapcsold ki a konzolod, távolítsd el az SD kártyát, csatlakoztasd a számítógépedhez és formázd újra az SD kártyád az operációs rendszerednek megfelelően: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(ez törölni fogja az SD kártya adatait)_
4. Teszteld az SD kártyádat hibákra az operációs rendszerednek megfelelő útmutató szerint haladva: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). Ha az SD kártyád hibásnak jelölt, cserélned kell az SD kártyádat
5. Az SD kártya foglalatod is lehet hibás. Csatlakozz a[Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) további segítségért

:::

:::details Blue "BOOTROM ERROR" screen

A konzolod valószínüleg hard-brickelve lett. Szükséged van egy ntrboot flashcart vásárlására, hogy újra telepítsd a boot9strap-et, hogy megpróbálhasd megjavítani a konzolod. Ez hardver hibát is jelezhet, ami nem javítható. Bármelyik esetben csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.
\+ Az is lehetséges még, hogy valaki beállított egy bootoláskori kezdő képernyőt, ami úgy néz ki mint egy brick. Próbáld meg a konzolod bekapcsolva hagyni, várva a kék képernyőre, 5 percig.

:::

:::details Some other error

Készítsd egy képet a hibáról és csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

## Software issues on consoles with custom firmware

:::details DSi / DS functionality is broken or has been replaced with Flipnote Studio

1. Töltsd le a [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) legutolsó kiadását (a `.3dsx` fájlt)
2. Kapcsold ki a konzolod
3. Hozz létre egy mappát `3ds` néven az SD kártyád gyökerében, ha még nem létezik ilyen
4. Másold az `TWLFix-CFW.3dsx` fájlt az SD kártyád `/3ds/` mappájába
5. Tedd vissza az SD kártyád a konzoldba
6. Nyisd meg a Homebrew Lancher-t
7. Indítsd el a TWLFix-CFW-t a homebrew listából
8. Nyomj (A)-t a törött TWL címek eltávolításához
9. Nyomd meg a (Start) gombot a konzol újraindításához
10. Frissítsd a konzolod következőképp: Lépj be a System Settings-be, majd az "Other settings"-be, ahol addig lépkedj jobbra, amíg a végére nem érsz. Itt válaszd a "System Update" opciót
    - The update will see that the essential TWL titles have been uninstalled, and will redownload and reinstall them
11. Ha a frissítés kész, érintsd meg az "OK"-ot a konzol újraindításához

:::

:::details GBA Virtual Console and/or Safe Mode functionality is broken

A konzolod Luma3DS 6.6 vagy régebbi verziót futtat, valószínűleg arm9loaderhax-szal. Kövesd az [A9LH-ről B9S-re](a9lh-to-b9s) lépéseit a konzolod frissítéséhez modern egyedi firmware környezetre.

:::

:::details Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work

Ez egy CTRTransfer vagy régió csere után fordulhat elő Old 3DS / 2DS eszközökön. Follow the instructions [here](region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).

:::

:::details Exception screen when booting/loading an application

Tekintsd meg a kivétel képernyőt [ezen az oldalon](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Ha nem sikerült megtalálni a hibádat, vagy a lépések nem működnek, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) további támogatásért.

:::

:::details Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher

A konzolodon még mindig van menuhax67 telepítve. A menuhax67 eltávolításához, tölsd le a [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) legfrissebb kiadását (a menuhax `.zip`), majd kövesd a ["Menuhax67 eltávolítása" részt](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.

:::

---

## Other troubleshooting

:::details Clear HOME Menu extdata

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Navigálj a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` könyvtárba az SD kártyádon
4. Töröld a 3DS régiódhoz tartozó mappát:
   - **EUR Region**: `00000098`
   - **JPN Region**: `00000082`
   - **USA Region**: `0000008f`
   - **CHN Region**: `000000A1`
   - **KOR Region**: `000000A9`
   - **TWN Region**: `000000B1`
5. Tedd vissza az SD kártyád a konzoldba

:::

:::details Clear HOME Menu theme data

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Navigálj a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` könyvtárba az SD kártyádon
4. Töröld a 3DS régiódhoz tartozó mappát:
   - **EUR Region**: `000002ce`
   - **JPN Region**: `000002cc`
   - **USA Region**: `000002cd`
   - **KOR Region**: `000002cf`
5. Tedd vissza az SD kártyád a konzoldba

:::

:::details Manually entering Homebrew Launcher

Ha hiányzik a Homebrew Launcher alkalmazás a HOME Menüből, akkor a következő lépésekkel megadhatod a Homebrew Launcher-t kézzel. (A [boot.3dsx és a boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) kell legyen az SD kártyád gyökerében.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details Turning off Parental Controls

Letilthatod a szülői felügyeletet (Parental Controls) a System Settings -> Parental Controls-hoz navigálással és a PIN megadásával, majd a "Clear Settings" megnyomásával. Ezt követően a "Delete"-tel törölheted azt.
Azonban, ha nem tudod a PIN-t így nem tudsz hozzáférni az konzol beállításokhoz, akkor le kell tiltanod. Ahhoz hogy megtehesd ezt, meg kell szerezned a konzolod mester kulcsát (mkey):

1. Menj [erre a weboldalra](https://mkey.eiphax.tech/)
2. Töltsd ki a következő dobozokat az információval:
   - Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
   - System Date: The day and month your console's clock is set to
   - Inquiry Number: Can be obtained by pressing "Forgot PIN" then "I Forgot" in the Parental Controls screen
3. Ha megszerezted az mkey-edet, nyomj OK gombot azon a képernyőn, ahol megkaptad az Inquiry Number számod, és add meg a mester kulcsot
4. Nyomj "Clear Settings"-et, majd "Delete"-et a minden Parental Controls adat eltávolításához

:::
