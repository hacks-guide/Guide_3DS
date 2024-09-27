# Formatting SD (Linux)

## Required Reading

Αυτή είναι μια πρόσθετη ενότητα για τη διαμόρφωση μιας κάρτας SD έτσι, ώστε να λειτουργεί με το 3DS.

Εάν το 3DS αναγνωρίζει ήδη την κάρτα SD, δεν χρειάζεται να ακολουθήσετε αυτόν τον οδηγό.

Αυτή η σελίδα αφορά μόνο χρήστες Linux. Εάν δεν χρησιμοποιείτε Linux, δείτε τις σελίδες [Διαμόρφωση της SD (Windows)](formatting-sd-\(windows\)) ή [Διαμόρφωση της SD (Mac)](formatting-sd-\(mac\)).

## Instructions

1. Βεβαιωθείτε ότι η κάρτα SD σας **δεν** έχει εισαχθεί
2. Εκκινήστε το τερματικό του Linux
3. Πληκτρολογήστε `watch "lsblk"`
4. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
5. Παρατηρήστε την έξοδο. Θα πρέπει να μοιάζει με το παρακάτω:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. Σημειώστε το όνομα συσκευής. Στο παραπάνω παράδειγμα, ήταν `mmcblk0p1`
   - If `RO` is set to 1, make sure the lock switch is not slid down
7. Πατήστε CTRL + C για να κλείσετε το μενού
8. Πληκτρολογήστε τα εξής για την κάρτα SD σας:
   - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
     - This creates a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
     - This creates a single FAT32 partition with 32 KB cluster size on the SD card
   - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
     - This creates a single FAT32 partition with 64 KB cluster size on the SD card

## Επίλυση προβλημάτων

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Ακολουθήστε τις οδηγίες [εδώ](https://wiki.hacks.guide/wiki/SD_Clean/Linux) για την εκ νέου διαμόρφωση της κάρτας SD σας.
