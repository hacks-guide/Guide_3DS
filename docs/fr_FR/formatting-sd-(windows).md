# Formater la SD (Windows)

## Lecture requise

Ceci est une section complémentaire sur comment formater la carte SD afin qu'elle fonctionne sur 3DS.

Si votre carte SD est déjà reconnue par la 3DS, cette section est facultative.

::: warning

This page is for Windows users only. If you are not on Windows, check out the [Formatting SD (Linux)](formatting-sd-(linux)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

## Ce dont vous avez besoin

- The latest version of [guiformat](https://nintendohomebrew.com/guiformat)

## Instructions

1. Run `guiformat.exe`

2. Select your SD card's drive letter for "Drive"

   ::: danger

   Make sure you choose the correct drive letter, otherwise you might accidentally erase the wrong drive!

   :::

3. Select a size for "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

4. Enter anything for "Volume label"

5. Ensure that "Quick Format" is selected

6. Click "Start"

7. Click "OK"

8. Wait for the format to finish

9. Click "Close"

10. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Dépannage

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- La carte SD reste non reconnue par la console ou continue d'afficher la mauvaise capacité après le formatage
  - Votre carte SD pourrait être partitionnée ou avoir de l'espace non alloué. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
