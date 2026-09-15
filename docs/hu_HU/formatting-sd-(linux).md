# SD formázás (Linux)

## Kötelező olvasmány

Ez egy kiegészítő rész az SD kártya formázásához, hogy az működjön a 3DS-el.

Ha a 3DS már felismeri az SD kártyát, ez az útmutató nem szükséges.

::: warning

Ez az oldal Linux felhasználókra vonatkozik. Ha nem Linux rendszeren vagy, kövesd az [SD formázás (Windows)](formatting-sd-(windows)) vagy [SD formázás (Mac)](formatting-sd-(mac)) útmutatókat.

:::

::: info

Számos Linux disztribúció felhasználóbarátabb módszereket kínálhat az SD-kártyák formázására, mint ez az útmutató, ezek közül néhány [itt található](https://wiki.hacks.guide/wiki/Formatting_an_SD_card/Linux). Különösen, ha SteamOS-t használsz (pl. Steam Deck, Steam Machine), nézd meg az [SD formázása (KDE Partition Manager)](formatting-sd-(kde)) oldalt.

:::

## Lépések

1. Helyezd az SD kártyád a számítógépbe
2. Ha az SD kártya tartalmaz adatot, akkor azokat másold át a számítógépedre
3. Vedd ki az SD kártyád a számítógépedből
4. Indítsd el a Linux Terminal-t
5. Írd be, hogy `watch "lsblk"`
6. Helyezd az SD kártyád a számítógépbe
7. Figyeld a kimenetet. Válaszként valami hasonlót kell kapj:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
8. Jegyezd fel az eszköz nevét. A fenti példánkban ez `mmcblk0p1` volt
   - Ha az `RO` 1-re állított, ellenőrizd, hogy a zároló csúszka nincs-e lehúzva
9. Nyomj CTRL + C-t a menüből kilépéshez
10. Írd be a következőt az SD kártyádhoz:
    - 2GB vagy kisebb: `sudo mkfs.fat /dev/(az eszköz neve fentről) -s 64 -F 16`
      - Ez létrehoz egy FAT16 partíciót 32 KB cluster mérettel az SD kártyán
    - 4GB - 128GB: `sudo mkfs.fat /dev/(az eszköz neve fentről) -s 64 -F 32`
      - Ez létrehoz egy FAT32 partíciót 32 KB cluster mérettel az SD kártyán
    - 128GB vagy nagyobb: `sudo mkfs.fat /dev/(az eszköz neve fentről) -s 128 -F 32`
      - Ez létrehoz egy FAT32 partíciót 64 KB cluster mérettel az SD kártyán
11. Ha az SD kártya tartalmazott adatot a formázás előtt, akkor azokat most másold vissza a számítógépedről

## Hibaelhárítás

- SD kártya továbbra sem detektálható a konzol által, vagy a formázás után továbbra is a rossz kapacitást mutatja
  - Az SD kártyád lehet, hogy partícionált vagy van nem lefoglalt területe. Kövesd a lépéseket [itt](https://wiki.hacks.guide/wiki/SD_Clean/Linux) az SD kártyád újraformázásához.
