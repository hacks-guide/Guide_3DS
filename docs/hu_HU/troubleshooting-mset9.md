# Hibaelhárítás (MSET9)

Ez az oldal hibaelhárítási tanácsokat ad sűrűn előforduló problémákhoz a "Boot9strap telepítése (MSET9)", a "Boot9strap telepítése (MSET9 CLI)" és a "Boot9strap telepítése (MSET9 Play Store)" oldalhoz. Ha nem tudod megoldani a problémád az oldal tanácsai alapján, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) és írd le a problémádat és azt is hogy mi az amit már próbáltál.

## MSET9 (alkalmzás / szkript)

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

## MSET9 (exploit)

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

## Issues with SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Vissza a [Boot9strap telepítése (MSET9-CLI)](installing-boot9strap-\(mset9-cli\))-hez

:::

::: tip

Vissza a [Boot9strap telepítése (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\))-hoz

:::

<!--@include: ./_include/troubleshooting-return.md -->
