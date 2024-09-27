# Formatting SD (Linux)

## Required Reading

Ez egy kiegészítő rész az SD kártya formázásához, hogy az működjön a 3DS-el.

Ha a 3DS már felismeri az SD kártyát, ez az útmutató nem szükséges.

Ez az oldal Linux felhasználókra vonatkozik. Ha nem Linux rendszeren vagy, kövesd az [SD formázás (Windows)](formatting-sd-\(windows\)) vagy [SD formázás (Mac)](formatting-sd-\(mac\)) útmutatókat.

## Instructions

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
   - If `RO` is set to 1, make sure the lock switch is not slid down
7. Nyomj CTRL + C-t a menüből kilépéshez
8. Írd be a következőt az SD kártyádhoz:
   - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
     - This creates a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
     - This creates a single FAT32 partition with 32 KB cluster size on the SD card
   - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
     - This creates a single FAT32 partition with 64 KB cluster size on the SD card

## Hibaelhárítás

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Kövesd a lépéseket [itt](https://wiki.hacks.guide/wiki/SD_Clean/Linux) az SD kártyád újraformázásához.
