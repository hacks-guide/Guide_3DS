# Formatting SD (Linux)

## Required Reading

Questa è una sezione aggiuntiva per la formattazione di una scheda SD per il 3DS.

Se il 3DS riconosce già la scheda SD, questa parte non è necessaria.

Questa pagina è solo per utenti Linux. Se non stai utilizzando Linux, puoi seguire la guida alle pagine [Formattazione SD (Windows)](formatting-sd-\(windows\)) o [Formattazione SD (Mac)](formatting-sd-\(mac\)).

## Instructions

1. Assicurati che la tua scheda SD **non** sia inserita
2. Avvia un terminale Linux
3. Digita `watch "lsblk"`
4. Inserisci la scheda SD nel tuo computer
5. Osserva l'output. Dovrebbe corrispondere a qualcosa del genere:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. Prendi nota del nome del dispositivo. Nell'esempio, era `mmcblk0p1`
   - If `RO` is set to 1, make sure the lock switch is not slid down
7. Premi CTRL + C per uscire
8. Digitare quanto segue a seconda della tua scheda SD:
   - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
     - This creates a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
     - This creates a single FAT32 partition with 32 KB cluster size on the SD card
   - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
     - This creates a single FAT32 partition with 64 KB cluster size on the SD card

## Risoluzione dei problemi

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Segui le istruzioni [qui](https://wiki.hacks.guide/wiki/SD_Clean/Linux) per riformattare la tua scheda SD.
