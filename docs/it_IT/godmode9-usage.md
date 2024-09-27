# Usare GodMode9

::: info

Per informazioni su come estrarre cartucce o il contenuto della scheda SD, guarda [Dump di titoli e schede di gioco](dumping-titles-and-game-cartridges).

:::

::: info

Per ricevere supporto su GodMode9, aiuto per gli script e informazioni sugli ultimi aggiornamenti, entra nel [server Discord di GodMode9](https://discord.gg/BRcbvtFxX4) (in Inglese).

:::

## Required Reading

GodMode9 è un file browser per il Nintendo 3DS che dà pieno accesso ai file sulla tua scheda SD, ai file delle partizioni FAT della SysNAND e della EmuNAND, e a molto altro ancora. Tra le varie funzioni, puoi anche copiare, cancellare, rinominare file e creare cartelle.

Tieni presente che se hai altri file payload oltre a `GodMode9.firm` nella cartella `/luma/payloads/` della tua scheda SD, per seguire le istruzioni riportate dovrai avviare la console tenendo (Start); apparirà un "menu chainloader" dove dovrai selezionare "GodMode9" tramite il D-Pad e il pulsante (A).

GodMode9 è un software potente che rende possibile la modifica di qualunque aspetto riguardante la tua console. Anche se la maggior parte delle modifiche sono bloccate da un sistema di permessi, ed è impossibile eseguire accidentalmente azioni pericolose senza sbloccare volutamente i permessi di scrittura, faresti meglio a seguire queste istruzioni con cautela e ad avere dei backup utilizzabili.

## Updating GodMode9

::: info

Alcune delle istruzioni qui sotto riportate sono valide solo sull'ultima versione di GodMode9, perciò, prima di continuare, faresti meglio a seguire questa sezione per aggiornare GodMode9. Sovrascrivi qualunque file preesistente.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia il file `GodMode9.firm` dall'archivio `.zip` di GodMode9 dentro la cartella `/luma/payloads/` della tua scheda SD
4. Copia la cartella `gm9` presente nell'archivio `.zip` di GodMode9 nella directory principale della tua scheda SD
5. Reinserisci la scheda SD nella tua console

::: tip

GodMode9 è ora aggiornato.

:::

## Creating a NAND Backup

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Il tuo backup NAND è stato creato con successo.

:::

## Restoring a NAND Backup

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia il file `<data>_<codiceseriale>_sysnand_##.bin` dal tuo computer alla cartella `/gm9/out/` della scheda SD
4. Reinserisci la scheda SD nella tua console
5. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
6. Premi il pulsante HOME per far apparire il menu delle azioni
7. Seleziona "Scripts..."
8. Seleziona "GM9Megascript"
9. Seleziona "Restore Options"
10. Seleziona "SysNAND Restore (safe)"
11. Seleziona il tuo backup della NAND
12. Premi il pulsante (A) per sbloccare i permessi di scrittura di terzo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Premi il pulsante (A) per continuare
14. Premi (B) per ritornare al menu principale
15. Seleziona "Exit"
16. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura

::: tip

Il tuo backup NAND è stato ripristinato con successo. Ora puoi eliminare `<data>_<numeroseriale>_sysnand_###.bin` dalla tua scheda SD.

:::

## Injecting any .CIA app into Health & Safety

::: info

Tieni presente che non possibile iniettare dentro "Informazioni per la salute e la sicurezza" file che siano più grandi di quest'ultima (come giochi o altre applicazioni pesanti)

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Entra nella cartella `[0:] SDCARD` -> `cias`
3. Premi (A) sul tua `.cia` per selezionarlo
4. Seleziona "CIA image options..."
5. Seleziona "Mount image to drive"
6. Premi (A) sul file `.app`
7. Seleziona "NCCH image options"
8. Seleziona "Inject to H&S"
9. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
10. Premi il pulsante (A) per continuare
11. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura

::: tip

L'applicazione desiderata è stata ora iniettata in Informazioni per la salute e la sicurezza.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

Questo metodo funzionerà solo se l'inject di "Informazioni per la salute e la sicurezza" è stato eseguito con GodMode9 (e non con Decrypt9 o con Hourglass9).

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Premi il pulsante HOME per far apparire il menu delle azioni
3. Seleziona "More..."
4. Seleziona "Restore H&S"
5. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
6. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura

::: tip

Informazioni per la salute e la sicurezza è stato ripristinata alla normalità.

:::

## Format an SD card

::: danger

**Questo procedimento cancellerà tutti i dati della tua scheda SD!**

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Premi (R) + (B) per poter rimuovere la scheda SD e inserire quella che si desidera formattare
   - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

La scheda SD è stata formattata con successo per essere utilizzata con la console.

:::

## Removing an NNID without formatting your console

::: info

Questo processo ti disconnetterà solo dal tuo NNID. Non sarà comunque possibile utilizzare il NNID su un'altra console, in quanto il NNID rimane collegato alla console.

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Premi il pulsante HOME per far apparire il menu delle azioni
3. Seleziona "Scripts..."
4. Seleziona "GM9Megascript"
5. Seleziona "Scripts from Plailect's Guide"
6. Seleziona "Remove NNID"
7. Premi il pulsante (A) per continuare
8. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
9. Premi il pulsante (A) per continuare
10. Premi (B) per ritornare al menu principale
11. Seleziona "Exit"
12. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura
13. Premi (Start) per riavviare la tua console

::: tip

Ora sei disconnesso dal tuo NNID.

:::
