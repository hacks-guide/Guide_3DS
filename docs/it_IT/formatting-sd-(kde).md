# Formattazione SD (KDE Partition Manager)

## Lettura necessaria

::: info

Se sta usando un dispositivo SteamOS (come Steam Deck o Steam Machine), dovresti avviare la [Modalità Desktop](https://help.steampowered.com/it/faqs/view/671A-4453-E8D2-323C) per seguire le istruzioni in questa pagina.

:::

::: warning

Questa pagina è per gli utenti Linux che hanno accesso solo a KDE Partition Manager. Se non stai utilizzando Linux, puoi seguire la guida alle pagine [Formattazione SD (Windows)](formatting-sd-(windows)) o [Formattazione SD (Mac)](formatting-sd-(mac)). Se sei su Linux ma non hai accesso a KDE Partition Manager, segui le istruzioni sulla pagina [Formattazione SD (Linux)](formatting-sd-(linux)).

:::

## Istruzioni

1. Inserisci la scheda SD nel tuo computer

2. Se la scheda SD ha file o cartelle al suo interno, copia tutto in una cartella sul tuo computer

3. Espelli la scheda SD dal computer

4. Avvia KDE Partition Manager, inserendo la tua password se necessario

5. Inserisci la tua scheda SD e clicca su `Refresh Devices`
   - La nuova voce che apparirà nel riquadro di sinistra è la tua scheda SD

6. Clicca sulla tua scheda SD, quindi clicca sul pulsante `New Partition Table` nella parte superiore della finestra
   ::: danger

   Assicurati di scegliere il dispositivo corretto, altrimenti potresti cancellare accidentalmente l'unità sbagliata!

   :::

7. Quando richiesto, scegli `MS-Dos`. **NON** usare GPT.

   ::: info

   ![](/images/screenshots/kde/mbr.png)

   :::

8. Clicca con il pulsante destro del mouse lo spazio `unallocated` nel riquadro destro e seleziona `New`

9. Alla selezione del tuo filesystem, scegli `FAT32` dal menu a discesa. La finestra dovrebbe assomigliare a questa:

   ::: info

   ![](/images/screenshots/kde/new-partition.png)

   :::

10. Clicca `OK`, quindi clicca `Apply`, infine `Apply Pending Operations`

11. Espelli e reinserisci la scheda SD

12. Se la scheda SD aveva precedentemente file o cartelle al suo interno, ricopia il contenuto dal tuo computer
