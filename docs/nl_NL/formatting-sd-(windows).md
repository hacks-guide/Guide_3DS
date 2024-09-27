# Formatting SD (Windows)

## Required Reading

Dit is een extra sectie voor het formatteren van een SD-kaart om deze te doen werken met een 3DS-systeem.

Als de 3DS de SD kaart al herkent, is deze handleiding niet nodig.

Deze pagina is alleen voor windows-gebruikers. Als je geen Windows gebruikt, bekijk dan de [SD formatteren (Linux)](formatting-sd-\(linux\)) of [SD formatteren (Mac)](formatting-sd-\(mac\)) pagina's.

## What You Need

- **For SD cards 32GB or smaller:** the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions (32GB or smaller)

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

13. Als de SD-kaart al bestanden en mappen voor het formatteren bevatte, kopieer dan alles terug van uw computer

## Instructions (64GB or larger)

1. Plaats je SD kaart in je computer

2. Als de SD kaart bestanden en mappen erop heeft, kopieer dan alles naar een map op uw computer

3. Voer `guiformat.exe` uit

4. Selecteer uw SD kaart stationsletter voor "Drive"

   ::: danger

   Zorg ervoor dat je de juiste stationsletter kiest, anders kan je per ongeluk de verkeerde schijf verwijderen!

   :::

5. Selecteer een grootte voor "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

6. Voer iets in voor "Volume label"

7. Zorg ervoor dat "Quick Format" is geselecteerd

8. Klik op "Start"

9. Klik op "OK"

10. Wacht tot het formatteren is voltooid

11. Klik op "Close"

12. Als de SD-kaart al bestanden en mappen voor het formatteren bevatte, kopieer dan alles terug van uw computer

## Probleemoplossing

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
