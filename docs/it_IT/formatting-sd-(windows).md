# Formattazione SD (Windows)

## Lettura necessaria

Questa è una sezione aggiuntiva per la formattazione di una scheda SD per il 3DS.

Se il 3DS riconosce già la scheda SD, questa parte non è necessaria.

Questa pagina è solo per utenti Windows. Se non stai utilizzando Windows, puoi seguire la guida alle pagine [Formattazione SD (Linux)](formatting-sd-\(linux\)) o [Formattazione SD (Mac)](formatting-sd-\(mac\)).

## Cosa serve

- **Per schede SD da 32GB o più piccole:** l'ultima versione di [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **Per schede SD da 64GB o più grandi:** l'ultima versione di [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Istruzioni (32GB o inferiore)

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

## Istruzioni (64GB o superiore)

1. Inserisci la scheda SD nel tuo computer

2. Se la scheda SD ha file o cartelle al suo interno, copia tutto in una cartella sul tuo computer

3. Esegui `guiformat.exe`

4. Seleziona su "Drive" la lettera del drive della tua scheda SD

   ::: danger

   Assicurati di scegliere la lettera del drive corretta, altrimenti potresti cancellare accidentalmente l'unità sbagliata!

   :::

5. Seleziona la dimensione corretta su "Allocation unit size"
   - Se la scheda SD è da 64GB, scegli 32768
   - Se la scheda SD è più grande di 64GB, scegli 65536

6. Inserisci qualunque cosa su "Volume label"

7. Assicurati che "Quick Format" sia selezionato

8. Seleziona "Start"

9. Clicca "OK"

10. Attendi il termine della formattazione

11. Clicca su "Chiudi"

12. Se la scheda SD aveva precedentemente file o cartelle al suo interno, ricopia il contenuto dal tuo computer

## Risoluzione dei problemi

- guiformat mostra l'errore "Failed to open device: GetLastError()=32"
  - Chiudi tutto ciò che potrebbe stare utilizzando la scheda SD, come ad esempio qualunque schermata Esplora Risorse.
  - Se questo problema persiste, prova a riformattare la scheda in formato NTFS tramite File Explorer, chiudi la finestra al termine e ritenta l'utilizzo di guiformat.

- guiformat mostra l'errore "GetLastError()=1117"
  - La protezione da scrittura della scheda SD potrebbe essere [abilitata](/images/sdlock.png). Lo slider deve essere spostato verso l'alto per consentire la scrittura sulla scheda SD (anche per la sola formattazione).

- La scheda SD continua a non venire rilevata dalla console o continua a mostrare una capacità errata dopo la formattazione
  - La tua scheda SD potrebbe essere partizionata o avere spazio non allocato. Segui le istruzioni [qui](https://wiki.hacks.guide/wiki/SD_Clean/Windows) per riformattare la tua scheda SD.
