# Formattazione SD (Windows)

## Lettura necessaria

Questa è una sezione aggiuntiva per la formattazione di una scheda SD per il 3DS.

Se il 3DS riconosce già la scheda SD, questa parte non è necessaria.

::: warning

Questa pagina è solo per utenti Windows. Se non stai utilizzando Windows, puoi seguire la guida alle pagine [Formattazione SD (Linux)](formatting-sd-(linux)) o [Formattazione SD (Mac)](formatting-sd-(mac)).

:::

## Cosa serve

- L'ultima versione di [guiformat](https://nintendohomebrew.com/guiformat)

## Istruzioni

1. Esegui `guiformat.exe`

2. Seleziona su "Drive" la lettera del drive della tua scheda SD

   ::: danger

   Assicurati di scegliere la lettera del drive corretta, altrimenti potresti cancellare accidentalmente l'unità sbagliata!

   :::

3. Seleziona la dimensione corretta su "Allocation unit size"
   - Se la scheda SD è da 64GB, scegli 32768
   - Se la scheda SD è più grande di 64GB, scegli 65536

4. Inserisci qualunque cosa su "Volume label"

5. Assicurati che "Quick Format" sia selezionato

6. Clicca "Start"

7. Clicca "OK"

8. Attendi il termine della formattazione

9. Clicca su "Chiudi"

10. Se la scheda SD aveva precedentemente file o cartelle al suo interno, ricopia il contenuto dal tuo computer

## Risoluzione dei problemi

- guiformat mostra l'errore "Failed to open device: GetLastError()=32"
  - Chiudi tutto ciò che potrebbe stare utilizzando la scheda SD, come ad esempio qualunque schermata Esplora Risorse.
  - Se questo problema persiste, prova a riformattare la scheda in formato NTFS tramite Esplora Risorse, chiudi la finestra al termine e ritenta l'utilizzo di guiformat.

- guiformat mostra l'errore "GetLastError()=1117"
  - La protezione da scrittura della scheda SD potrebbe essere [abilitata](/images/sdlock.png). Lo slider deve essere spostato verso l'alto per consentire la scrittura sulla scheda SD (anche per la sola formattazione).

- La scheda SD continua a non venire rilevata dalla console o continua a mostrare una capacità errata dopo la formattazione
  - La tua scheda SD potrebbe essere partizionata o avere spazio non allocato. Segui le istruzioni [qui](https://wiki.hacks.guide/wiki/SD_Clean/Windows) per riformattare la tua scheda SD.
