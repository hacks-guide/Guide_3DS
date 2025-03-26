# Formatting SD (Linux)

## Required Reading

Dit is een extra sectie voor het formatteren van een SD-kaart om deze te doen werken met een 3DS-systeem.

Als de 3DS de SD kaart al herkent, is deze handleiding niet nodig.

Deze pagina is alleen voor Linux gebruikers. Als je geen Linux gebruikt, zie dan de [Formatteer SD (Windows)](formatting-sd-\(windows\)) of [Formatteer SD (Mac)](formatting-sd-\(mac\)) pagina's.

## Instructions

1. Zorg ervoor dat je SD kaart **niet** geplaatst is
2. Start de Linux Terminal
3. Type `watch "lsblk"`
4. Plaats je SD kaart in je computer
5. Observeer de uitvoer. Het zou er zo moeten uitzien:
    ```
    NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
    mmcblk0     179:0    0   3,8G  0 disk
    └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
    ```
6. Noteer de naam van je apparaat. In ons voorbeeld hierboven, was het `mmcblk0p1`
    - If `RO` is set to 1, make sure the lock switch is not slid down
7. Druk op CTRL + C om het menu te verlaten
8. Typ het volgende voor jouw overeenkomende SD kaart:
    - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
        - This creates a single FAT16 partition with 32 KB cluster size on the SD card
    - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
        - This creates a single FAT32 partition with 32 KB cluster size on the SD card
    - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
        - This creates a single FAT32 partition with 64 KB cluster size on the SD card

## Probleemoplossing

- SD card remains undetected by console or continues to display the wrong capacity after formatting
    - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Linux) to reformat your SD card.
