# Formattazione SD (Windows)

## Lettura necessaria

Questa è una sezione aggiuntiva per la formattazione di una scheda SD per il 3DS.

Se il 3DS riconosce già la scheda SD, questa parte non è necessaria.

Questa pagina è solo per utenti Windows. Se non stai utilizzando Windows, puoi seguire la guida alle pagine [Formattazione SD (Linux)](formatting-sd-\(linux\)) o [Formattazione SD (Mac)](formatting-sd-\(mac\)).

## Cosa serve

- the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger only:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Istruzioni

### Section I - SD Card Formatter

1. Inserisci la scheda SD nel tuo computer

2. Se la scheda SD ha file o cartelle al suo interno, copia tutto in una cartella sul tuo computer

3. Avvia con privilegi di amministratore `SD Card Formatter Setup` (il file`.exe`) dall'interno del file `.zip` scaricato, quindi installa il programma

4. Seleziona `SD Card Formatter` dal menu Start

5. Seleziona la lettera della tua scheda SD in "Select card"

   ::: danger

   Assicurati di scegliere la lettera del drive corretta, altrimenti potresti cancellare accidentalmente l'unità sbagliata!

   :::

6. Inserisci qualunque cosa su "Volume label"

7. Assicurati che "Quick Format" sia selezionato

8. Clicca "Format"

9. Clicca "OK"

10. Attendi il termine della formattazione

11. Clicca "OK"

12. Chiudi SD Card Formatter

13. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### Section II - guiformat (ONLY for 64GB or larger)

1. Run `guiformat.exe`

2. Select your SD card's drive letter for "Drive"

   ::: danger

   Assicurati di scegliere la lettera del drive corretta, altrimenti potresti cancellare accidentalmente l'unità sbagliata!

   :::

3. Select a size for "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

4. Inserisci qualunque cosa su "Volume label"

5. Assicurati che "Quick Format" sia selezionato

6. Click "Start"

7. Clicca "OK"

8. Attendi il termine della formattazione

9. Clicca su "Chiudi"

10. Se la scheda SD aveva precedentemente file o cartelle al suo interno, ricopia il contenuto dal tuo computer

## Risoluzione dei problemi

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- La scheda SD continua a non venire rilevata dalla console o continua a mostrare una capacità errata dopo la formattazione
  - La tua scheda SD potrebbe essere partizionata o avere spazio non allocato. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
