# Formatting SD (Windows)

## Required Reading

Dit is een extra sectie voor het formatteren van een SD-kaart om deze te doen werken met een 3DS-systeem.

Als de 3DS de SD kaart al herkent, is deze handleiding niet nodig.

Deze pagina is alleen voor windows-gebruikers. Als je geen Windows gebruikt, bekijk dan de [SD formatteren (Linux)](formatting-sd-\(linux\)) of [SD formatteren (Mac)](formatting-sd-\(mac\)) pagina's.

## What You Need

- the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger only:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions

### Section I - SD Card Formatter

1. Plaats je SD kaart in je computer

2. Als de SD kaart bestanden en mappen erop heeft, kopieer dan alles naar een map op uw computer

3. Voer `SD Card Formatter Setup` uit (het `.exe` bestand) in het gedownloade `.zip` bestand met adminstrator privileges, installeer vervolgens het programma

4. Voer `SD Card Formatter` uit vanuit het Start Menu

5. Selecteer uw SD kaart stationsletter voor "Select card"

   ::: danger

   Zorg ervoor dat je de juiste stationsletter kiest, anders kan je per ongeluk de verkeerde schijf verwijderen!

   :::

6. Voer iets in voor "Volume label"

7. Zorg ervoor dat "Quick Format" is geselecteerd

8. Klik op "Format"

9. Klik op "OK"

10. Wacht tot het formatteren is voltooid

11. Klik op "OK"

12. Sluit SD Card Formatter

13. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### Section II - guiformat (ONLY for 64GB or larger)

1. Run `guiformat.exe`

2. Select your SD card's drive letter for "Drive"

   ::: danger

   Zorg ervoor dat je de juiste stationsletter kiest, anders kan je per ongeluk de verkeerde schijf verwijderen!

   :::

3. Select a size for "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

4. Voer iets in voor "Volume label"

5. Zorg ervoor dat "Quick Format" is geselecteerd

6. Click "Start"

7. Klik op "OK"

8. Wacht tot het formatteren is voltooid

9. Klik op "Close"

10. Als de SD-kaart al bestanden en mappen voor het formatteren bevatte, kopieer dan alles terug van uw computer

## Probleemoplossing

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
