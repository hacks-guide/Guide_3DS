# Formatear una tarjeta SD (Windows)

## Lectura requerida

Esta es una sección adicional para formatear tu tarjeta SD de manera que funcione con la 3DS.

Si la 3DS ya reconoce la tarjeta SD, entonces esta guía no es necesaria.

::: warning

This page is for Windows users only. If you are not on Windows, check out the [Formatting SD (Linux)](formatting-sd-(linux)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

## Lo que necesitas

- The latest version of [guiformat](https://nintendohomebrew.com/guiformat)

## Instrucciones

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

## Resolución de Problemas

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- La tarjeta SD sigue sin ser detectada por la consola o muestra la capacidad incorrecta tras formatear
  - Tal vez la tarjeta SD esté fragmentada en particiones, o tenga espacio sin asignar. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
