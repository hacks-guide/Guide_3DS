# Formatting SD (Mac)

## Required Reading

Ez egy kiegészítő rész az SD kártya formázásához, hogy az működjön a 3DS-el.

Ha a 3DS már felismeri az SD kártyát, ez az útmutató nem szükséges.

Ez az oldal Mac felhasználókra vonatkozik. Ha nem Mac rendszeren vagy, kövesd az [SD formázás (Windows)](formatting-sd-\(windows\)) vagy [SD formázás (Linux)](formatting-sd-\(linux\)) útmutatókat.

## Instructions

### OS X El Capitan (10.11) and later

1. Helyezd az SD kártyád a számítógépbe

2. Ha az SD kártya tartalmaz adatot, akkor azokat másold át a számítógépre

3. Futtasd a Disk Utility appot

4. Bal oldalt felül a "View" menüben válaszd a "Show All Devices" opciót

5. Válaszd ki az SD kártyád a bal oldali panelen

   ::: danger

   Legyél biztos abban, hogy a jó meghajtót választod, egyébként rossz merevlemezt törölhetsz!

   :::

6. Kattints az "Erase"-re felül

7. Adj meg bármít "Name"-nek

8. Ellenőrizd, hogy a "Format" beállítása "MS-DOS (FAT)"

9. Ellenőrizd, hogy a "Scheme" beállítása "Master Boot Record"
   - If "Scheme" does not appear, click "Cancel" and make sure to choose the device instead of a volume

10. Kattints az "Erase"-re

11. Várd meg amíg a formázás befejeződik

12. Kattints a "Close"-ra

13. Ha az SD kártya tartalmazott adatot a formázás előtt, akkor azokat most másold vissza a számítógépről

### OS X Yosemite (10.10) and earlier

1. Helyezd az SD kártyád a számítógépbe

2. Ha az SD kártya tartalmaz adatot, akkor azokat másold át a számítógépre

3. Futtasd a Disk Utility appot

4. Válaszd ki az SD kártyád a bal oldali panelen

   ::: danger

   Legyél biztos abban, hogy a jó meghajtót választod, egyébként rossz merevlemezt törölhetsz!

   :::

5. Kattints az "Partition"-re felül
   - If "Partition" does not appear, make sure to choose the device instead of a volume

6. Ellenőrizd, hogy a "Partition Layout" beállított "1 Partition"-re

7. Adj meg bármít "Name"-nek

8. Ellenőrizd, hogy a "Format" beállítása "MS-DOS (FAT)"

9. Kattints az "Options"-re a partíciós tábla alatt

10. Válaszd a "Master Boot Record"-ot

11. Kattints az "OK"-ra

12. Kattints az "Apply"-ra

13. Kattints a "Partition"-re

14. Várd meg amíg a formázás befejeződik

15. Zárd be a Disk Utility-t

16. Ha az SD kártya tartalmazott adatot a formázás előtt, akkor azokat most másold vissza a számítógépről

## Hibaelhárítás

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Kövesd a lépéseket [itt](https://wiki.hacks.guide/wiki/SD_Clean/Mac) az SD kártyád újraformázásához.
