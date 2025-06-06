# Formattazione SD (Linux)

## Lettura necessaria

Questa è una sezione aggiuntiva per la formattazione di una scheda SD per il 3DS.

Se il 3DS riconosce già la scheda SD, questa parte non è necessaria.

Questa pagina è solo per utenti Linux. Se non stai utilizzando Linux, puoi seguire la guida alle pagine [Formattazione SD (Windows)](formatting-sd-\(windows\)) o [Formattazione SD (Mac)](formatting-sd-\(mac\)).

## Istruzioni

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
    - Se `RO` è a 1, assicurati che l'interruttore di blocco non sia attivo
7. Premi CTRL + C per uscire
8. Digitare quanto segue a seconda della tua scheda SD:
    - 2GB o inferiore: `sudo mkfs.fat /dev/(nome del dispositivo indicato prima) -s 64 -F 16`
        - Verrà creata un'unica partizione FAT16 con dimensione di allocazione di 32 KB sulla scheda SD
    - 4GB - 128GB: `sudo mkfs.fat /dev/(nome del dispositivo indicato prima) -s 64 -F 32`
        - Verrà creata un'unica partizione FAT32 con dimensione di allocazione di 32 KB sulla scheda SD
    - 128GB o superiore: `sudo mkfs.fat /dev/(nome del dispositivo indicato prima) -s 128 -F 32`
        - Verrà creata un'unica partizione FAT32 con dimensione di allocazione di 64 KB sulla scheda SD

## Risoluzione dei problemi

- La scheda SD continua a non venire rilevata dalla console o continua a mostrare una capacità errata dopo la formattazione
    - La tua scheda SD potrebbe essere partizionata o avere spazio non allocato. Segui le istruzioni [qui](https://wiki.hacks.guide/wiki/SD_Clean/Linux) per riformattare la tua scheda SD.
