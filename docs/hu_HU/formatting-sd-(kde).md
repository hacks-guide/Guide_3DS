# SD formázás (KDE Partition Manager)

## Kötelező olvasmány

::: info

Ha SteamOS eszközt használsz (pl. Steam Deck vagy Steam Machine), akkor be kell lépned a [Desktop módba](https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C) ahhoz, hogy követhesd ezen oldal lépéseit.

:::

::: warning

Ez az oldal csak azon Linux felhasználókra vonatkozik akik rendelkeznek hozzáféréssel a KDE Partition Manager-hez. Ha nem Linux rendszeren vagy, kövesd az [SD formázás (Windows)](formatting-sd-(windows)) vagy [SD formázás (Mac)](formatting-sd-(mac)) útmutatókat. Ha Linux rendszeren vagy, de nem férsz hozzá a KDE Partition Manager-hez, kövesd az [SD formázása (Linux)](formatting-sd-(linux)) oldal lépéseit.

:::

## Lépések

1. Helyezd az SD kártyád a számítógépbe

2. Ha az SD kártya tartalmaz adatot, akkor azokat másold át a számítógépre

3. Vedd ki az SD kártyád a számítógépedből

4. Nyisd meg a KDE Partition Manager-t és add be ajelszavad ha szükséges

5. Tedd be az SD kártyát és kattints a `Refresh Devices`-ra
   - Az új eszköz ami megjelenik a bal panelon az SD kártyád

6. Kattints az SD kártyádra, majd kattints a `New Partition Table` gombra az ablak tetején.
   ::: danger

   Legyél biztos abban, hogy a jó meghajtót választod, egyébként rossz merevlemezt törölhetsz!

   :::

7. Ha kérdezi válaszd az`MS-Dos`-t. **NE** használd a GPT-t.

   ::: info

   ![](/images/screenshots/kde/mbr.png)

   :::

8. Kattints jobb gombbal az `unallocated` területre a jobb oldali panelon és válaszd a `New`-t

9. Amikor kiválasztod a fájlrendszered, válaszd a `FAT32`-t a lenyiló listából. Az ablak a következőre kell hasonlítania:

   ::: info

   ![](/images/screenshots/kde/new-partition.png)

   :::

10. Kattints az `OK`ra, majd az `Apply`-ra, végül az `Apply Pending Operations`-re

11. Vedd ki és rakd be újra az SD kártyát

12. Ha az SD kártya tartalmazott adatot a formázás előtt, akkor azokat most másold vissza a számítógépről
