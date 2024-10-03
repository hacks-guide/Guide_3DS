# Hibaelhárítás

Ez az oldal hibaelhárítási tanácsokat ad sűrűn előforduló problémákhoz. Ha nem tudod megoldani a problémád az oldal tanácsai alapján, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) és írd le a problémádat és azt is hogy mi az amit már próbáltál.

:::details Tartalomjegyzék

Több oldalon használt:

- [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Útmutató oldalak:

- [Boot9strap telepítése (Soundhax)](#installing-boot9strap-soundhax)
- [Boot9strap telepítése (MSET9)](#installing-boot9strap-mset9)
- [Boot9strap telepítése (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
- [Boot9strap telepítése (super-skaterhax)](#installing-boot9strap-super-skaterhax)
- [Telepítés véglegesítése](#finalizing-setup)

Problémák telepítést követően:

- [Boot problémák](#boot-issues-on-consoles-with-custom-firmware)
- [Szoftver problémák](#software-issues-on-consoles-with-custom-firmware)

:::

## Problémák a SafeB9SInstaller-rel

### A SafeB9SInstaller megnyitása előtt

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

:::details Valami más

Csatlakozz a [Nintendo Homebrew Discord-on](https://discord.gg/MWxPgEp) csatornához segítségért és írd le az üzenetet amit láttál.

:::

## Boot9strap telepítése (Soundhax)

:::details Piros/lila/rózsaszín és fehér képernyő a Soundhax futtatása után

Ha a konzol rendszer verziód 9.4.0, 9.5.0, vagy 9.6.0, hibát tapasztalhatsz az universal-otherapp egy régebbi verziójával. Töltsd le a legfrissebb verziót [innen](https://github.com/TuxSH/universal-otherapp/releases/latest).

Ha nem ezeken a firmware verziókon van a konzolod, akkor ez valószínűleg azt jelzi, hogy már van egyedi firmware-ed. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

:::details "An error has occurred, forcing the software to close..." (fehér üzenet ablak)

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

Biztosítsd, hogy a cím adatbázisod resetelve legyen.

- Kérjük kapcsold be a konzolod, miközben az SD kártya be van helyezve
- Indítsd el a System Settings-et és navigálj ide: `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
  - Ez nem fogja törölni az adataidat
- Ha reset prompt-ot kapsz reset után, kapcsold ki a konzolod, majd kezd újra az [I. rész 14. lépésétől](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

Ha nem kapsz reset promptot, az SD kártyádat formázni kell:

1. Másolj mindent az SD kártyádról a PC-dre
2. Formázd az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Másolj mindent vissza

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
2. Írj `2`-öt és nyomj Enter-t az MSET9 állapotának ellenőrzéséhez
   - Ez létre fogja hozni a dummy adatbázisokat újra
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
   - Az alkalmazásaidnak el kell tűnniük. Ez normális, hamarosan megoldjuk
5. Kapcsold ki a konzolod
6. Helyezd az SD kártyád a számítógépbe
7. Lépj be az SD kártyád `Nintendo 3DS` könyvtárába
8. Írd le az első pár karakterét a mappának amit látsz
   - Ez a te valódi ID0-d, amit a valódi Nintendo 3DS mappában fogunk tartani
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

:::details Piros képernyő az SD kártya visszaillesztése után (II. rész 11. lépés)

Valószínüleg hiányzik a `SafeB9S.bin` az SD kártyád gyökeréből vagy sérült. Másold ki az MSET9 `.zip` fájlból felülírva a létező fájlokat, majd kövesd ezeket a lépésket a trigger fájl eltávolításához:

1. Kapcsold ki erőltetve a konzold a Power gomb 20 másodpercig nyomva tartásával
2. Helyezd az SD kártyád a számítógépbe

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
   - Az aktuális állapot [Injected](/images/screenshots/mset9/mset9-injected.png)-et kell mutasson
   - Ha már eltávolítottad a trigger fájlt (vagy soha nem injektáltad), az aktuális állapot [Ready](/images/screenshots/mset9/mset9-ready.png)-t fog mutatni és megpróbálhatod [újracsinálni a II. részt](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
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

:::details A System Settings a végtelenségig tölt az SD kártya visszahelyezését követően

Vagy eltértél az MSET9 lépésektől, vagy rossz modelt/verziót választottál vagy az SD kártyád formázni kell. Biztosítsd, hogy jó [modellt](/images/3dsmodels.png) és firmware verziót válassz a szkript megnyitásakor.

Kövesd a következő lépéseket a trigger fájl ettávolításához, majd próbáld újra a II. részt:

1. Kapcsold ki erőltetve a konzold a Power gomb 20 másodpercig nyomva tartásával
2. Helyezd az SD kártyád a számítógépbe

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
   - Az aktuális állapot [Injected](/images/screenshots/mset9/mset9-injected.png)-et kell mutasson
   - Ha már eltávolítottad a trigger fájlt (vagy soha nem injektáltad), az aktuális állapot [Ready](/images/screenshots/mset9/mset9-ready.png)-t fog mutatni és megpróbálhatod újracsinálni a II. részt
2. Írj `4`-et és nyomj Enter-t
3. Amikor az ablak azt mondja, hogy Removed trigger file", írj `0`-t majd nyomj Entert
4. Tedd vissza az SD kártyát a konzoldba
5. Kapcsold be a konzolod
6. Térj vissza az [II. rész 1. lépéséhez](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Ha továbbra is megmarad ez a hiba és biztos vagy benne, hogy mindent jól csináltál, akkor biztosítsd, hogy a trigger fájl eltávolításra kerüljön és formázd az SD kártyád:

1. Másolj mindent az SD kártyádról a PC-dre
2. Formázd az SD kártyád ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Másolj mindent vissza
4. Kezd újra az [II. rész 1. lépésével](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details Kivétel történt (exception occured) az MSET9 kiváltását követően

Ez valószínűleg azt jelzi, hogy már van egyedi firmware-ed. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

## Boot9strap telepítése (super-skaterhax)

:::details "An error has occurred. Please save your data in any software currently in use, then restart the system."

Ha nincs szín villogás a "GO GO!" megnyomása után:

- Legyél biztos abban, hogy a rendszer idő és [régiós beállításaid](/images/screenshots/skater_lang.png) megfelelőek
- Biztosítsd, hogy ne legyen másik böngésző fül megnyitva, majd indítsd újra a böngészőt és próbáld újra az exploit-ot

Ha a képernyő színeket villogtat, akkor lefagy/összeomlik:

- Biztosítsd, hogy a konzolod verziójának és régiójának megfelelő másolata van meg neked az `arm11code.bin` és `browserhax_hblauncher_ropbin_payload.bin` fájlokból
- Próbáld meg törölni a böngésző adatot:
  1. Indítsd el a böngészőt, majd lépj be a beállításokba (browser settings)
  2. Görgess a legaljára, majd válaszd a "Reset Save Data" opciót (ami lehet, hogy "Initialize Savedata" vagy "Clear All Save Data" néven fut")
  3. Próbáld meg újra végrehajtani az exploitot
- Próbáld meg módosítani a rendszer nyelvét valami másra mint az aktuális nyelv

:::

:::: details "An error has occurred. Hold down the POWER button to turn off the power..." (fekete képernyő szöveggel)

A `arm11code.bin` fájl hiányzik, vagy rossz helyen van. Biztosítsd, hogy [super-skaterhax legfrissebb verziójából](https://github.com/zoogie/super-skaterhax/releases/latest) régiódhoz és verziódhoz tartozó fájlokat az SD kártya gyökerébe másold (nem egy mappán belülre).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details Egy exception történik vagy "DLL_HEAP_INFORMATION" a GO! megnyomásakor! GO!

Ez valószínűleg azt jelzi, hogy már van egyedi firmware-ed. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

## Boot9strap telepítése (SSLoth-Browser)

:::details Piros/lila/rózsaszín és fehér képernyő a browserhax futtatása után

Ez valószínűleg azt jelzi, hogy már van egyedi firmware-ed. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..." (fekete képernyő szöveggel)

A `arm11code.bin` fájl hiányzik, vagy rossz helyen van. Töltsd le a legutolsó kiadását az [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)-nak és rakd az `otherapp.bin` fájlt az SD kártyád gyökerébe, majd nevezd át `arm11code.bin`-re. Ne add hozzá a `.bin` kiterjesztést, ha nem látod.

:::

:::details "An error has occurred, forcing the software to close..." (fehér üzenet ablak)

Probléma lehet az arm11code.bin`fájloddal. Töltsd le a legutolsó kiadását az [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)-nak és rakd az`otherapp.bin`fájlt az SD kártyád gyökerébe, majd nevezd át`arm11code.bin`-re. Ne add hozzá a `.bin\` kiterjesztést, ha nem látod.

Megpróbálhatod még alaphelyzetbe állítani a böngésző mentés adatot:

1. Indítsd el a böngészőt, majd lépj be a beállításokba (browser settings)
2. Görgess a legaljára, majd válaszd a "Reset Save Data" opciót (ami lehet, hogy "Initialize Savedata" vagy "Clear All Save Data" néven fut")
3. Próbáld meg újra végrehajtani az exploitot

:::

:::details A browserhax QR kód vagy URL megnyitásásakor összeomlik

A böngésző alapú exploitok (mint például ez) gyakran instabilak és sokszor lefagynak, de néha megjavíthatók az alábbi lépések végrehajtásával.

1. Indítsd el a böngészőt, majd lépj be a beállításokba (browser settings)
2. Görgess a legaljára, majd válaszd a "Reset Save Data" opciót (ami lehet, hogy "Initialize Savedata" vagy "Clear All Save Data" néven fut")
3. Próbáld meg újra végrehajtani az exploitot

:::

:::details Rendszerfrissítés (System Update) ugrik fel, amikor megnyitom a böngészőt

Az SSLoth proxy nem lett megfelelően konfigurálva. Csináld újra az SSLoth fejezetet erről az oldalról.

:::

:::details Error 032-0420 hiba a böngésző megnyitásakor

Kövesd az alábbi lépéseket:

1. Lépj be a "System Settings"-be a konzolodon
2. Navigálj az `Internet Settings` -> `Connection Settings` opciókhoz
3. Kattints a saját hálózati kapcsolatodra és navigálj a `Change Settings` -> `Next Page (jobb nyíl)` -> `Proxy Settings` opcióhoz
4. Állítsd a "Proxy Settings"-t "No"-ra
5. Kattints az OK-ra, majd kattints a Save-re
6. Amikor kérdezi, kattints a "Test"-re a kapcsolat ellenőrzéséhez
   - A tesztnek sikeresnek kell lennie
7. Kattints az OK gombra a folytatáshoz
8. Nyomj a "Back"-re kétszer, majd a "Close"-ra, hogy visszajuszz a HOME Menübe
9. Nyisd meg az Internet Browser-t egyszer
10. Ha kérdezi a rendszer frissítést, nyomj OK-t
    - Ez nem fogja frissíteni a rendszert
11. Kezd előlről a [II. résszel](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Lefagyás a "Doing agbhax..." üzenetnél

Probléma lehet az arm11code.bin`fájloddal. Töltsd le újra a legutolsó kiadását az [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)-nak és rakd a fájlt az SD kártyád gyökerébe, majd nevezd át`arm11code.bin`-re. Ne add hozzá a `.bin\` kiterjesztést, ha nem látod.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

:::details Failed to mount the SD card!

Mentsd az adataidat, majd formázd újra az SD kártyád FAT32 formátumra, az ajánlott alkalmazással az operációs rendszerednek megfelelően. ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). A MiniTool Partition Wizard-ról és a HP formázó eszközről (HPUSBDisk) ismert, hogy problémákat okoznak a 3DS SD kártyákkal.

Ha ez sikertelen, próbálkozz egy másik SD kártyával.

:::

## Telepítés véglegesítése

:::details Sikertelen a konzol frissítése

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
    - Ez kb. 15 percet fog igénybe venni
11. Nyomd meg az (A) gombot újra
    - A konzolod automatikusan ki fog kapcsolni
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
   - A NAND mentés automatikusan átugrásra kerül

:::

:::details Information #05: No title database

Nyomj (A)-t a cím adatbázis importálásához, old fel a SysNAND írást a képernyőn látható gombok megadásával, majd folytasd a szkriptet normálisan.

:::

:::details Error #06 "Backup failed" vagy "Error: Could not open directory" a NAND mentés készítésének megpróbálásakor

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
   - Ha nincs Nintendo 3DS mappád, akkor bootolj be a HOME menübe legalább egyszer behelyezett SD kártyával, hogy automatikusan létre jöjjön
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

## Boot problémák egyedi firmware-rel rendelkező konzolokon

::: info

Az itt leírt lépések általában feltételezik, hogy a konzolod modern egyedi firmware telepítéssel rendelkezik (boot9strap + Luma3DS 8.0 vagy nagyobb). Ha a konzolod régebbi homebrew telepítés (például valami ami arm9loaderhax vagy menuhax alapú), frissítened kell a telepítésed, mielőtt kipróbálod ezeket a lépéseket.

:::

### Táp/értesítő LED fény indikátorok

:::details A konzolom kikapcsol, ha megpróbálom bekapcsolni és/vagy az értesítő LED egy színt mutat bootoláskor

Probléma van az `boot.firm` fájloddal. Ha [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4)-et futtatsz, akkor a 3DS-ed értestő LED-je egy adott sznt villogtat. Ez a szín a `boot.firm` problémák diagnosztizálását segíti az SD kártyán vagy a belső memóriában. Régebbi boot9strap verziókon a kék fény azonnal kikapcsol, ha megpróbálod bekapcsolni a konzolt.

Ha az értesítő LED villog:

- **Fehér**: A 3DS-ed nem találta a `boot.firm`-et sem az SD kártyádon, sem a belső memóriában.
- **Magenta**: A 3DS-ed nem találta a `boot.firm`-et az SD kártyádon. Megtalálta a `boot.firm`-et a belső memóriában, de az a fájl sérült.
- **Piros**: A 3DS-ed megtalálta a `boot.firm`-et az SD kártyádon és a belső memóriában, de mindkét fájl sérült.

Beszerezhetsz `boot.firm` fájlt a [Luma3DS legfrissebb kiadásának letöltésével](https://github.com/LumaTeam/Luma3DS/releases/latest) és annak kicsomagolásával, majd a `boot.firm` fájlnak az SD kártyád gyökerébe helyezésével. Ha a `boot.firm` fájlod folyamatosan sérültnek érzékelt, szükség lehet az SD kártyád hibákra ellenőrzésére ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), vagy [macOS](f3xswift-\(mac\))). Azt is vedd figyelembe, hogy a 3DS-nek problémái lehetnek olyan fájlokkal, amit WinRAR-ral csomagoltak ki.

Ha hallod a "pattanó hangot", ami potenciálisan a háttérvilágítás bekapcsolását kíséri a másodperc egy részéig, akkor hardver problémád van a konzoloddal (mint például lecsatlakozott háttérvilágítás kábel). Lehetséges, hogy be tudod kapcsolni a konzolodat megfelelő szögben tartva.

:::

:::details A konzolom fekete képernyőn ragad, a kék power led bekapcsolva marad

Az alábbi lépések tetszőleges sorrendben hajthatók végre, azonban a lista a legrövidebbtől a legtöbb időt igénylőig van összeállítva.

1. Kapcsold ki a konzolod, vedd ki majd tedd vissz az SD kártyát, majd kapcsold be újra a konzolod.
2. Kapcsold ki a konzolod, vedd ki a játék cartridge-t ha van benne, majd kapcsold be a konzolod és várj tíz percet. Ha a konzolod bebootol tíz percen belül, a probléma elhárult és nem fog valószínűleg újra előfordulni
3. - Nevezd át a `Nintendo 3DS` mappát az SD kártyádon `Nintendo 3DS_BACKUP` névre és próbálj meg bootolni. Ha a konzolod sikeresen bootol, problémák vannak a `Nintendo 3DS` könyvtáraddal. Próbáld meg kitakarítani a HOME menu extdata-t:
   - Navigálj a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` mappába
   - Töröld a 3DS régiódhoz tartozó mappát:
     - **EUR régió**: `00000098`
     - **JPN régió**: `00000082`
     - **USA régió**: `0000008f`
     - **CHN régió**: `000000A1`
     - **KOR régió**: `000000A9`
     - **TWN régió**: `000000B1`
4. Próbálj meg recovery mode-ba bootolni, majd onnét frissíteni a rendszeredet:
   - Kapcsold ki a konzolod
   - Tartsd nyomva a (Bal Váll) + (Jobb Váll) + (D-Pad Fel) + (A) gombokat
   - Kapcsold be a konzolod
   - Ha sikeres voltál, a konzolod egy "update your system" képernyőre bootol
5. Kövesd a [CTRTransfer](ctrtransfer) útmutatót
6. További támogatásért kérj segítséget a [Nintendo Homebrew-tól a Discord-on](https://discord.gg/MWxPgEp)

:::

### Hibaüzenet bootoláskor

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" vagy "An exception has occurred -- Current process: pm"

A Luma3DS verziód régi. Töltsd le a legutolsó kiadását az [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)-nak és rakd a `boot.firm` fájlt az SD kártyád gyökerébe, felülírva bármilyen létező fájlt. Legyél biztos abban, hogy a ZIP fájlt más eszközzel csomagolod ki, mint a WinRAR, mert ismert, hogy problémái vannak a 3DS-sel kapcsolatos fájlokkal.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

Számos oka lehet, hogy miért történik így. Bármelyik esetben, ez a hiba általában javítható a [CTRTransfer](ctrtransfer) útmutató követésével.

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..."

Az ARM11 kivételkezelők tiltva, vagy az egyedi firmware nincs telepítve. Próbáld meg engedélyezni az ARM11 kivétel kezelőket:

- Kapcsold ki a konzolod
- Tartsd nyomva a (Select) gombot
- Kapcsold be a konzolod, miközben nyomva tartod a (Select) gombot
- Ha a "Disable ARM11 exception handlers" jelölőnégyzet bejelölt, vedd ki a jelölést

:::

:::details A HOME Menüből hiányoznak telepített alkalmazások

Ez különböző okokból is előfordulhat, de leginkább azért, mert az SD kártyád nem került beolvasásra a rendszer által.
Ellenőrizheted, hogy az SD kártyád olvasásra kerül-e a SELECT gomb nyomva tartásával bootoláskor, és az alsó képernyőn megjelenő sárga szöveg ellenőrzésével; ha azt mondja, hogy "Booted from CTRNAND via B9S", akkor a konzolod a belső memóriáról bootolt, nem az SD kártyáról.
Ha ez a helyzet, próbáld meg a lépéseket alább, ami a legkönnyebbtől a legnehezebbig került felsorolásra:

1. Kapcsold ki a konzolod, vedd ki majd tedd vissz az SD kártyát, majd kapcsold be újra a konzolod
2. Kapcsold ki a konzolod, távolítsd el az SD kártyád, majd csatlakoztasd a számítógépedhez. Töltsd le a legutolsó kiadását az [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)-nek és csomagold ki a `Luma3DS.zip` fájlból a `boot.firm` fájlt, majd rakd az SD kártyád gyökerébe (felülírva bármilyen létező fájlt)
3. Kapcsold ki a konzolod, távolítsd el az SD kártyát, csatlakoztasd a számítógépedhez és formázd újra az SD kártyád az operációs rendszerednek megfelelően: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(ez törölni fogja az SD kártya adatait)_
4. Teszteld az SD kártyádat hibákra az operációs rendszerednek megfelelő útmutató szerint haladva: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). Ha az SD kártyád hibásnak jelölt, cserélned kell az SD kártyádat
5. Az SD kártya foglalatod is lehet hibás. Csatlakozz a[Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) további segítségért

:::

:::details Kék "BOOTROM ERROR" képernyő

A konzolod valószínüleg hard-brickelve lett. Szükséged van egy ntrboot flashcart vásárlására, hogy újra telepítsd a boot9strap-et, hogy megpróbálhasd megjavítani a konzolod. Ez hardver hibát is jelezhet, ami nem javítható. Bármelyik esetben csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.
\+ Az is lehetséges még, hogy valaki beállított egy bootoláskori kezdő képernyőt, ami úgy néz ki mint egy brick. Próbáld meg a konzolod bekapcsolva hagyni, várva a kék képernyőre, 5 percig.

:::

:::details Egyéb más hibák

Készítsd egy képet a hibáról és csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

## Szoftver problémák egyedi firmware-rel rendelkező konzolokon

:::details DSi / DS funkcionalitás hibás vagy felcserélt a Flipnote Studio-val

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
    - A frissítés észreveszi, hogy lényeges TWL címek kerültek eltávolításra és le fogja tölteni és újratelepíteni azokat
11. Ha a frissítés kész, érintsd meg az "OK"-ot a konzol újraindításához

:::

:::details GBA Virtual Console és/vagy Safe Mode funkcionalitás hibás

A konzolod Luma3DS 6.6 vagy régebbi verziót futtat, valószínűleg arm9loaderhax-szal. Kövesd az [A9LH-ről B9S-re](a9lh-to-b9s) lépéseit a konzolod frissítéséhez modern egyedi firmware környezetre.

:::

:::details Bővített memória módú játékok (Pokemon Sun/Moon, Smash, stb.) nem működnek

Ez egy CTRTransfer vagy régió csere után fordulhat elő Old 3DS / 2DS eszközökön. Kövesd a lépéseket [itt](region-changing#section-vi---fixing-locale-related-issues) hogy kijavíthasd ezt a hibát. (átlépve a 3, 4, 5 és 6. lépéseket).

:::

:::details Kivétel képernyő egy alkalmazás bootolásakor/betöltésekor

Tekintsd meg a kivétel képernyőt [ezen az oldalon](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Ha nem sikerült megtalálni a hibádat, vagy a lépések nem működnek, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) további támogatásért.

:::

:::details A HOME Menu beállítások megnyitása összeomlasztja a konzolt
vagy betölti a Homebrew Launcher-t

A konzolodon még mindig van menuhax67 telepítve. A menuhax67 eltávolításához, tölsd le a [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) legfrissebb kiadását (a menuhax `.zip`), majd kövesd a ["Menuhax67 eltávolítása" részt](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.

:::

---

## Egyéb hibaelhárítás

:::details A HOME Menu extdata takarítása

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Navigálj a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` könyvtárba az SD kártyádon
4. Töröld a 3DS régiódhoz tartozó mappát:
   - **EUR régió**: `00000098`
   - **JPN régió**: `00000082`
   - **USA régió**: `0000008f`
   - **CHN régió**: `000000A1`
   - **KOR régió**: `000000A9`
   - **TWN régió**: `000000B1`
5. Tedd vissza az SD kártyád a konzoldba

:::

:::details A HOME Menu téma adat takarítása

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Navigálj a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` könyvtárba az SD kártyádon
4. Töröld a 3DS régiódhoz tartozó mappát:
   - **EUR régió**: `000002ce`
   - **JPN régió**: `000002cc`
   - **USA régió**: `000002cd`
   - **KOR régió**: `000002cf`
5. Tedd vissza az SD kártyád a konzoldba

:::

:::details Homebrew Launcher kézi hozzáadása

Ha hiányzik a Homebrew Launcher alkalmazás a HOME Menüből, akkor a következő lépésekkel megadhatod a Homebrew Launcher-t kézzel. (A [boot.3dsx és a boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) kell legyen az SD kártyád gyökerében.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details A szülői felügyelet kikapcsolása

Letilthatod a szülői felügyeletet (Parental Controls) a System Settings -> Parental Controls-hoz navigálással és a PIN megadásával, majd a "Clear Settings" megnyomásával. Ezt követően a "Delete"-tel törölheted azt.
Azonban, ha nem tudod a PIN-t így nem tudsz hozzáférni az konzol beállításokhoz, akkor le kell tiltanod. Ahhoz hogy megtehesd ezt, meg kell szerezned a konzolod mester kulcsát (mkey):

1. Menj [erre a weboldalra](https://mkey.eiphax.tech/)
2. Töltsd ki a következő dobozokat az információval:
   - Device Type: Válaszd a "3DS"-t (ugyanez vonatkozik, ha 2DS, New 3DS (XL/LL) vagy New 2DS (XL/LL) típusod van)
   - System Date: A nap és a hónap a konzolod óráján beállított
   - Inquiry Number: Beszerezhető a "Forgot PIN" majd az "I Forgot" gombbal a Parental Controls képernyőn
3. Ha megszerezted az mkey-edet, nyomj OK gombot azon a képernyőn, ahol megkaptad az Inquiry Number számod, és add meg a mester kulcsot
4. Nyomj "Clear Settings"-et, majd "Delete"-et a minden Parental Controls adat eltávolításához

:::
