# Formater la SD (Linux)

## Lecture requise

Ceci est une section complémentaire sur comment formater une carte SD pour être compatible avec la 3DS.

Si la carte SD est déjà reconnue par la 3DS, ce guide n'est pas nécessaire.

::: warning

Cette page est seulement pour les utilisateurs de Linux. Si vous n'êtes pas sous Linux, consultez les pages [Formater la SD (Windows)](formatting-sd-(windows)) ou [Formater la SD (Mac)](formatting-sd-(mac)).

:::

::: info

Plusieurs distributions Linux peuvent fournir des méthodes plus conviviales pour le formatage des cartes SD que celles que fournit ce guide, dont certaines peuvent être [trouvées ici] (https://wiki.hacks.guide/wiki/Formatting_an_SD_card/Linux). En particulier, si vous êtes sous SteamOS (par ex. Steam Deck, Steam Machine), consultez la page [Formater la SD (Gestionnaire de partitions de KDE)](formatting-sd-(kde)).

:::

## Instructions

1. Insérez votre carte SD dans votre ordinateur
2. Si la carte SD contient des fichiers et des dossiers, copiez-les tous vers un dossier sur votre ordinateur
3. Éjectez la carte SD de votre ordinateur
4. Lancez le terminal Linux
5. Tapez `watch "lsblk"`
6. Insérez votre carte SD dans votre ordinateur
7. Lisez le résultat. Il devrait ressembler à quelque chose comme ça :
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
8. Notez le nom de l'appareil. Dans l'exemple ci-dessus, c'était `mmcblk0p1`
   - Si `RO` est défini à 1, assurez-vous que le cran de verouillage n'est pas glissé vers le bas
9. Appuyez sur CTRL + C pour quitter le menu
10. Tapez la suite en fonction de votre carte SD :
    - 2Go ou moins : `sudo mkfs.fat /dev/(nom de l'appareil ci-dessus) -s 64 -F 16`
      - Cela crée une seule partition FAT16 avec une taille de cluster de 32 Ko sur la carte SD
    - 4 Go - 128 Go : `sudo mkfs.fat /dev/(nom de l'appareil ci-dessus) -s 64 -F 32`
      - Cela crée une seule partition FAT32 avec une taille de cluster de 32 Ko sur la carte SD
    - 128 Go ou plus: `sudo mkfs.fat /dev/(nom de l'appareil ci-dessus) -s 128 -F 32`
      - Cela crée une seule partition FAT32 avec une taille de cluster de 64 Ko sur la carte SD
11. Si la carte SD contenait des fichiers et dossiers avant le formatage, recopiez-les sur la carte SD depuis votre ordinateur

## Dépannage

- La carte SD reste non reconnue par la console ou continue d'afficher la mauvaise capacité après le formatage
  - Votre carte SD pourrait être partitionnée ou avoir de l'espace non alloué. Suivez les instructions [ici](https://wiki.hacks.guide/wiki/SD_Clean/Linux) pour reformater votre carte SD.
