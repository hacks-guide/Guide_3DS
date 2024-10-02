# SD formázás (Windows)

## Kötelező olvasmány

Ez egy kiegészítő rész az SD kártya formázásához, hogy az működjön a 3DS-el.

Ha a 3DS már felismeri az SD kártyát, ez az útmutató nem szükséges.

Ez az oldal Windows felhasználókra vonatkozik. Ha nem Windows rendszeren vagy, kövesd az [SD formázás (Linux)](formatting-sd-\(linux\)) vagy [SD formázás (Mac)](formatting-sd-\(mac\)) útmutatókat.

## Amire szükséged lesz

- **For SD cards 32GB or smaller:** the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Lépések (32GB vagy kisebb)

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

13. Ha az SD kártya tartalmazott adatot a formázás előtt, akkor azokat most másold vissza a számítógépről

## Lépések (64GB vagy nagyobb)

1. Helyezd az SD kártyád a számítógépbe

2. Ha az SD kártya tartalmaz adatot, akkor azokat másold át a számítógépre

3. Futtasd a `guiformat.exe` alkalmazást

4. Válaszd ki az SD kártyád betűjelét a "Drive" alatt

   ::: danger

   Legyél biztos abban, hogy a jó meghajtó betűt választod, egyébként rossz merevlemezt törölhetsz!

   :::

5. Válassz méretet az "Allocation unit size" alatt
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

6. Írj be valamit "Volume label"-nek

7. Ügyelj rá, hogy a "Quick Format" ki legyen választva

8. Kattints a "Start"-ra

9. Kattints az "OK"-ra

10. Várd meg amíg a formázás befejeződik

11. Kattints a "Close"-ra

12. Ha az SD kártya tartalmazott adatot a formázás előtt, akkor azokat most másold vissza a számítógépről

## Hibaelhárítás

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). A zárat felfelé kell tolni, hogy engedélyezd az írást az SD kártyára (beleértve a formázást is).

- SD kártya továbbra sem detektálható a konzol által, vagy a formázás után továbbra is a rossz kapacitást mutatja
  - Az SD kártyád lehet, hogy partícionált vagy van nem lefoglalt területe. Kövesd a lépéseket [itt](https://wiki.hacks.guide/wiki/SD_Clean/Windows) az SD kártyád újraformázásához.
