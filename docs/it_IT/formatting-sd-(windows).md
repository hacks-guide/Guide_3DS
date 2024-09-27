# Formatting SD (Windows)

## Required Reading

Questa è una sezione aggiuntiva per la formattazione di una scheda SD per il 3DS.

Se il 3DS riconosce già la scheda SD, questa parte non è necessaria.

Questa pagina è solo per utenti Windows. Se non stai utilizzando Windows, puoi seguire la guida alle pagine [Formattazione SD (Linux)](formatting-sd-\(linux\)) o [Formattazione SD (Mac)](formatting-sd-\(mac\)).

## What You Need

- **For SD cards 32GB or smaller:** the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions (32GB or smaller)

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

13. Se la scheda SD aveva precedentemente file o cartelle al suo interno, ricopia il contenuto dal tuo computer

## Instructions (64GB or larger)

1. Inserisci la scheda SD nel tuo computer

2. Se la scheda SD ha file o cartelle al suo interno, copia tutto in una cartella sul tuo computer

3. Esegui `guiformat.exe`

4. Seleziona su "Drive" la lettera del drive della tua scheda SD

   ::: danger

   Assicurati di scegliere la lettera del drive corretta, altrimenti potresti cancellare accidentalmente l'unità sbagliata!

   :::

5. Seleziona la dimensione corretta su "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

6. Inserisci qualunque cosa su "Volume label"

7. Assicurati che "Quick Format" sia selezionato

8. Seleziona "Start"

9. Clicca "OK"

10. Attendi il termine della formattazione

11. Clicca su "Chiudi"

12. Se la scheda SD aveva precedentemente file o cartelle al suo interno, ricopia il contenuto dal tuo computer

## Risoluzione dei problemi

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). Lo slider deve essere spostato verso l'alto per consentire la scrittura sulla scheda SD (anche per la sola formattazione).

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Segui le istruzioni [qui](https://wiki.hacks.guide/wiki/SD_Clean/Windows) per riformattare la tua scheda SD.
