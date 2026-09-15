# Formatting SD (Linux)

## Required Reading

Dit is een extra sectie voor het formatteren van een SD-kaart om deze te doen werken met een 3DS-systeem.

Als de 3DS de SD kaart al herkent, is deze handleiding niet nodig.

::: warning

Deze pagina is alleen voor Linux gebruikers. If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-(windows)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

::: info

Several Linux distributions may provide more user-friendly methods for formatting SD cards than this guide provides, some of which can be [found here](https://wiki.hacks.guide/wiki/Formatting_an_SD_card/Linux). In particular, if you are on SteamOS (e.g. Steam Deck, Steam Machine), check out the [Formatting SD (KDE Partition Manager)](formatting-sd-(kde)) page.

:::

## Instructions

1. Plaats je SD kaart in je computer
2. If the SD card has any files and folders on it, copy everything to a folder on your computer
3. Eject your SD card from your computer
4. Start de Linux Terminal
5. Type `watch "lsblk"`
6. Plaats je SD kaart in je computer
7. Observeer de uitvoer. Het zou er zo moeten uitzien:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
8. Noteer de naam van je apparaat. In ons voorbeeld hierboven, was het `mmcblk0p1`
   - If `RO` is set to 1, make sure the lock switch is not slid down
9. Druk op CTRL + C om het menu te verlaten
10. Typ het volgende voor jouw overeenkomende SD kaart:
    - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
      - This creates a single FAT16 partition with 32 KB cluster size on the SD card
    - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
      - This creates a single FAT32 partition with 32 KB cluster size on the SD card
    - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
      - This creates a single FAT32 partition with 64 KB cluster size on the SD card
11. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Probleemoplossing

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Linux) to reformat your SD card.
