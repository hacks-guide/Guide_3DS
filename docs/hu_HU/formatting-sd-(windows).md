# SD formázás (Windows)

## Kötelező olvasmány

Ez egy kiegészítő rész az SD kártya formázásához, hogy az működjön a 3DS-el.

Ha a 3DS már felismeri az SD kártyát, ez az útmutató nem szükséges.

Ez az oldal Windows felhasználókra vonatkozik. Ha nem Windows rendszeren vagy, kövesd az [SD formázás (Linux)](formatting-sd-\(linux\)) vagy [SD formázás (Mac)](formatting-sd-\(mac\)) útmutatókat.

## Amire szükséged lesz

- the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **csak 64GB vagy nagyobb SD kártya esetén:** A [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm) legfrissebb verziója

## Lépések

### I. rész - SD Card Formatter

1. Helyezd az SD kártyád a számítógépbe

2. Ha az SD kártya tartalmaz adatot, akkor azokat másold át a számítógépre

3. Futtasd az `SD Card Formatter Setup`-ot (az `.exe` fájlt) a letöltött `.zip` fájlból rendszergazda joggal a program telepítéséhez

4. Futtasd az `SD Card Formatter`-t a Start menüből

5. Válaszd ki az SD kártyád betűjelét a "Select card"-nál

   ::: danger

   Legyél biztos abban, hogy a jó meghajtó betűt választod, egyébként rossz merevlemezt törölhetsz!

   :::

6. Írj be valamit "Volume label"-nek

7. Ügyelj rá, hogy a "Quick Format" ki legyen választva

8. Kattints a "Format"-ra

9. Kattints az "OK"-ra

10. Várd meg amíg a formázás befejeződik

11. Kattints az "OK"-ra

12. Zárd be az SD Card Formatter-t

13. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### II. rész - guiformat (CSAK 64GB vagy nagyobbhoz)

1. Futtasd a `guiformat.exe` alkalmazást

2. Válaszd ki az SD kártyád betűjelét a "Drive" alatt

   ::: danger

   Legyél biztos abban, hogy a jó meghajtó betűt választod, egyébként rossz merevlemezt törölhetsz!

   :::

3. Válassz méretet az "Allocation unit size" alatt
   - Ha az SD kártya 64GB, válaszd a 32768-ot
   - Ha az SD kártya nagyobb, mint 64GB, válaszd a 65536-ot

4. Írj be valamit "Volume label"-nek

5. Ügyelj rá, hogy a "Quick Format" ki legyen választva

6. Kattints a "Start"-ra

7. Kattints az "OK"-ra

8. Várd meg amíg a formázás befejeződik

9. Kattints a "Close"-ra

10. Ha az SD kártya tartalmazott adatot a formázás előtt, akkor azokat most másold vissza a számítógépről

## Hibaelhárítás

- a guiformat a "Failed to open device: GetLastError()=32" hibaüzenetet mutatja
  - Csukj le mindent, ami esetleg használhatja az SD kártyát, mint például bármelyik Fájlkezelő ablak.
  - Ha a probléma fennáll, próbáld meg leformázni a kártyát NTFS-re az Fájlkezelővel, zárd be azt az ablakot ha kész, és próbáld meg újra a guiformat folyamatot.

- a guiformat a "GetLastError()=1117" hibaüzenetet mutatja
  - Az SD kártyád írás védelmi kapcsolója lehet, hogy [be van állítva](/images/sdlock.png). A zárat felfelé kell tolni, hogy engedélyezd az írást az SD kártyára (beleértve a formázást is).

- SD kártya továbbra sem detektálható a konzol által, vagy a formázás után továbbra is a rossz kapacitást mutatja
  - Az SD kártyád lehet, hogy partícionált vagy van nem lefoglalt területe. Kövesd a lépéseket [itt](https://wiki.hacks.guide/wiki/SD_Clean/Windows) az SD kártyád újraformázásához.
