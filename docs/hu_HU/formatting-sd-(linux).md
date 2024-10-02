# SD formázás (Linux)

## Kötelező olvasmány

Ez egy kiegészítő rész az SD kártya formázásához, hogy az működjön a 3DS-el.

Ha a 3DS már felismeri az SD kártyát, ez az útmutató nem szükséges.

Ez az oldal Linux felhasználókra vonatkozik. Ha nem Linux rendszeren vagy, kövesd az [SD formázás (Windows)](formatting-sd-\(windows\)) vagy [SD formázás (Mac)](formatting-sd-\(mac\)) útmutatókat.

## Lépések

1. Gondoskodj arról, hogy az SD kártya **nincs** bedugva
2. Indítsd el a Linux Terminal-t
3. Írd be, hogy `watch "lsblk"`
4. Helyezd az SD kártyád a számítógépbe
5. Figyeld a kimenetet. Válaszként valami hasonlót kell kapj:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. Jegyezd fel az eszköz nevét. A fenti példánkban ez `mmcblk0p1` volt
   - Ha az `RO` 1-re állított, ellenőrizd, hogy a zároló csúszka nincs-e lehúzva
7. Nyomj CTRL + C-t a menüből kilépéshez
8. Írd be a következőt az SD kártyádhoz:
   - 2GB vagy kisebb: `sudo mkfs.fat /dev/(az eszköz neve fentről) -s 64 -F 16`
     - Ez létrehoz egy FAT16 partíciót 32 KB cluster mérettel az SD kártyán
   - 4GB - 128GB: `sudo mkfs.fat /dev/(az eszköz neve fentről) -s 64 -F 32`
     - Ez létrehoz egy FAT32 partíciót 32 KB cluster mérettel az SD kártyán
   - 128GB vagy nagyobb: `sudo mkfs.fat /dev/(az eszköz neve fentről) -s 128 -F 32`
     - Ez létrehoz egy FAT32 partíciót 64 KB cluster mérettel az SD kártyán

## Hibaelhárítás

- SD kártya továbbra sem detektálható a konzol által, vagy a formázás után továbbra is a rossz kapacitást mutatja
  - Az SD kártyád lehet, hogy partícionált vagy van nem lefoglalt területe. Kövesd a lépéseket [itt](https://wiki.hacks.guide/wiki/SD_Clean/Linux) az SD kártyád újraformázásához.
