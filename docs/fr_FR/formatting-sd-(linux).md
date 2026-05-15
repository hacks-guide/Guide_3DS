# Formater la SD (Linux)

## Lecture requise

Ceci est une section complémentaire sur comment formater une carte SD pour être compatible avec la 3DS.

Si la carte SD est déjà reconnue par la 3DS, ce guide n'est pas nécessaire.

Cette page est uniquement destinée aux utilisateurs de Linux. Si vous n'êtes pas sur Linux, jetez un œil aux pages [Formater la SD (Windows)](formatting-sd-(windows)) ou [Formater la SD (Mac)](formatting-sd-(mac)).

## Instructions

1. Assurez-vous que votre carte SD n'est **pas** insérée
2. Lancez le terminal Linux
3. Tapez `watch "lsblk"`
4. Insérez votre carte SD dans votre ordinateur
5. Lisez le résultat. Il devrait ressembler à quelque chose comme ça :
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. Notez le nom de l'appareil. Dans l'exemple ci-dessus, c'était `mmcblk0p1`
   - Si `RO` est défini à 1, assurez-vous que le cran de verouillage n'est pas glissé vers le bas
7. Appuyez sur CTRL + C pour quitter le menu
8. Tapez la suite en fonction de votre carte SD :
   - 2Go ou moins : `sudo mkfs.fat /dev/(nom de l'appareil ci-dessus) -s 64 -F 16`
     - Cela crée une seule partition FAT16 avec une taille de cluster de 32 Ko sur la carte SD
   - 4 Go - 128 Go : `sudo mkfs.fat /dev/(nom de l'appareil ci-dessus) -s 64 -F 32`
     - Cela crée une seule partition FAT32 avec une taille de cluster de 32 Ko sur la carte SD
   - 128 Go ou plus: `sudo mkfs.fat /dev/(nom de l'appareil ci-dessus) -s 128 -F 32`
     - Cela crée une seule partition FAT32 avec une taille de cluster de 64 Ko sur la carte SD

## Dépannage

- La carte SD reste non reconnue par la console ou continue d'afficher la mauvaise capacité après le formatage
  - Votre carte SD pourrait être partitionnée ou avoir de l'espace non alloué. Suivez les instructions [ici](https://wiki.hacks.guide/wiki/SD_Clean/Linux) pour reformater votre carte SD.
