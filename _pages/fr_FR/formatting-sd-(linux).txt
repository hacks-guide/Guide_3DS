---
title: "Formatage de la carte SD (Linux)"
---

{% include toc title="Table des matières" %}

### Lecture requise

Il s'agit d'une section supplémentaire pour le formatage d'une carte SD afin que celle-ci fonctionne avec la 3DS.

Si la 3DS reconnaît déjà la carte SD, il n'est pas nécessaire de suivre ce guide.

Cette page est uniquement destinée aux utilisateurs de Linux. Si vous n'êtes pas sur Linux, consultez les pages [Formatage de la carte SD (Windows)](formatting-sd-(windows)) ou [Formatage de la carte SD (Mac)](formatting-sd-(mac)).

### Instructions

1. Assurez-vous que votre carte SD n'est **pas** insérée
1. Lancez le terminal Linux
1. Tapez `watch "lsblk"`
1. Insérez votre carte SD dans votre ordinateur
1. Lisez le résultat. Cela devrait ressembler à quelque chose comme ça :
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Prenez note du nom de l'appareil. Dans notre exemple ci-dessus, c'était `mmcblk0p1`
    + Si `RO` vaut 1, assurez-vous que le bouton de verrouillage ne soit pas glissé vers le bas
1. Appuyez sur CTRL + C pour quitter le menu
1. Tapez ce qui suit en fonction de votre carte SD :
    + 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
        + This creates a single FAT16 partition with 32 KB cluster size on the SD card
    + 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
        + This creates a single FAT32 partition with 32 KB cluster size on the SD card
    + 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
        + This creates a single FAT32 partition with 64 KB cluster size on the SD card

### Troubleshooting

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Linux) to reformat your SD card.
