# SD formázás (Mac)

## Kötelező olvasmány

Ez egy kiegészítő rész az SD kártya formázásához, hogy az működjön a 3DS-el.

Ha a 3DS már felismeri az SD kártyát, ez az útmutató nem szükséges.

Ez az oldal Mac felhasználókra vonatkozik. Ha nem Mac rendszeren vagy, kövesd az [SD formázás (Windows)](formatting-sd-\(windows\)) vagy [SD formázás (Linux)](formatting-sd-\(linux\)) útmutatókat.

## Lépések

### OS X El Capitan (10.11) és későbbi

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
    - Ha a "Scheme" nem jelenik meg, nyomj "Cancel"-t és ellenőrizd, hogy az eszközt válaszottad-e ki egy kötet helyett

10. Kattints az "Erase"-re

11. Várd meg amíg a formázás befejeződik

12. Kattints a "Close"-ra

13. Ha az SD kártya tartalmazott adatot a formázás előtt, akkor azokat most másold vissza a számítógépről

### OS X Yosemite (10.10) és korábbi

1. Helyezd az SD kártyád a számítógépbe

2. Ha az SD kártya tartalmaz adatot, akkor azokat másold át a számítógépre

3. Futtasd a Disk Utility appot

4. Válaszd ki az SD kártyád a bal oldali panelen

    ::: danger

    Legyél biztos abban, hogy a jó meghajtót választod, egyébként rossz merevlemezt törölhetsz!

    :::

5. Kattints az "Partition"-re felül
    - Ha a "Partition" nem jelenik meg, és ellenőrizd, hogy az eszközt válaszottad-e ki egy kötet helyett

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

- SD kártya továbbra sem detektálható a konzol által, vagy a formázás után továbbra is a rossz kapacitást mutatja
    - Az SD kártyád lehet, hogy partícionált vagy van nem lefoglalt területe. Kövesd a lépéseket [itt](https://wiki.hacks.guide/wiki/SD_Clean/Mac) az SD kártyád újraformázásához.