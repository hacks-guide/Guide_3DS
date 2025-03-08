# Dump di titoli e schede di gioco

::: info

Per ricevere supporto su GodMode9, aiuto per gli script e informazioni sugli ultimi aggiornamenti, entra nel [server Discord di GodMode9](https://discord.gg/BRcbvtFxX4) (in Inglese).

:::

## Lettura necessaria

Oltre a creare e ripristinare backup NAND, GodMode9 ha la funzionalità di trasformare i titoli installati in un file `.cia` installabile, convertire i dati di una cartuccia di gioco in un file ROM `.3ds`, e installare direttamente una cartuccia di gioco nel sistema.

## Aggiornare GodMode9

::: info

Queste istruzioni fanno riferimento a GodMode9 v2.0.0 o successivi. Se hai una versione più vecchia di GodMode9, segui queste istruzioni per aggiornarla.

:::

### Cosa serve

- L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)

### Istruzioni

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia il file `GodMode9.firm` dall'archivio `.zip` di GodMode9 dentro la cartella `/luma/payloads/` della tua scheda SD
4. Copia la cartella `gm9` presente nell'archivio `.zip` di GodMode9 nella directory principale della tua scheda SD
5. Reinserisci la scheda SD nella tua console

## Creare un backup di una scheda di gioco

::: info

Inserisci nella console la scheda di gioco del quale vuoi creare un backup

- Le schede di gioco 3DS verranno salvate nel formato `.3ds`
- Le schede di gioco NDS verranno salvate nel formato `.nds`

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Entra in `[C:] GAMECART`
3. Segui i passaggi corretti per la tua scheda di gioco:
    - **Scheda di gioco 3DS:** Premi (A) su `[ID titolo].trim.3ds` per selezionarlo
    - **Scheda di gioco NDS:** Premi (A) su `[ID titolo].nds` per selezionarlo
        - I backup trimmati non sono consigliati per i giochi NDS in generale, in quanto possono causare problemi durante l'esecuzione
4. Seleziona "Copy to 0:/gm9/out"
5. Il file non-installabile `.3ds` o `.nds` verrà salvato nella cartella `/gm9/out/` della tua scheda SD

## Installare una scheda di gioco direttamente nel sistema

::: info

Questo funzionerà solo per i giochi 3DS; non è possibile installare una scheda di gioco NDS nel sistema come se fosse un titolo.

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Entra in `[C:] GAMECART`
3. Premi (A) su `[ID titolo].trim.3ds` per selezionarlo, quindi seleziona "NCSD image options...", ed infine seleziona "Install game image"
4. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
5. Al termine del processo, il gioco verrà visualizzato nel menu HOME come se fosse un titolo installato.

## Backup di una scheda di gioco 3DS in formato .CIA

::: info

Dovrebbe essere eseguito solo se [Installare una cartuccia di gioco direttamente nel sistema](#installing-a-game-cartridge-directly-to-the-system) non funziona.

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Entra in `[C:] GAMECART`
3. Premi (A) su `[ID titolo].trim.3ds` per selezionarlo, quindi seleziona "NCSD image options...", ed infine seleziona "Build CIA from file"
4. Il file installabile `.cia` verrà salvato nella cartella `/gm9/out/` della tua scheda SD

## Backup di un titolo installato

::: info

Permette il backup di titoli digitali installati sia dal sistema sia dall'utente, come quelli scaricati dall'eShop.

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Premi il pulsante HOME per far apparire il menu delle azioni
3. Seleziona "Title manager"
4. Seleziona una delle seguenti opzioni a seconda del titolo di cui vuoi creare un backup
    - **Titolo installato dall'utente**: `[A:] SD CARD`
    - **Titolo di sistema / DSiWare**: `[1:] NAND / TWL`
5. Seleziona il titolo di cui vuoi creare il backup
6. Seleziona "Manage Title..."
7. Seleziona "Build CIA (standard)"
8. Il file installabile `.cia` verrà salvato nella cartella `/gm9/out/` della tua scheda SD

## Creare un backup dei salvataggi dei giochi GBA della Virtual Console

::: info

Il salvataggio verrà creato nella cartella `/gm9/out/` della tua scheda SD, con nome `<ID titolo>.gbavc.sav`.

:::

::: info

Per identificare il Title ID di un file `<ID titolo>.gbavc.sav`, puoi controllare la lista di tutti i giochi presenti sulla tua console e i rispettivi Title ID premendo il pulsante (Home) per far apparire il menu delle azioni, dopodiché seleziona `Title manager`, quindi`[A:] SD CARD`.

:::

1. Esegui i seguenti passaggi per ogni gioco GBA della Virtual Console del quale vuoi mantenere i salvataggi:
    - Avvia il gioco GBA
    - Esci dal gioco GBA
    - Spegni la tua console
    - Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
    - Entra nella cartella `[S:] SYSNAND VIRTUAL`
    - Premi (A) su `agbsave.bin` per selezionarlo
    - Seleziona "AGBSAVE options..."
    - Seleziona "Dump GBA VC save"
    - Premi il pulsante (A) per continuare
    - Premi (Start) per riavviare la tua console

## Ripristinare i salvataggi dei giochi GBA della Virtual Console

::: info

Per identificare il Title ID di un file `<ID titolo>.gbavc.sav`, puoi controllare la lista di tutti i giochi presenti sulla tua console e i rispettivi Title ID premendo il pulsante (Home) per far apparire il menu delle azioni, dopodiché seleziona `Title manager`, quindi`[A:] SD CARD`.

:::

1. Esegui i seguenti passaggi per ogni gioco GBA della Virtual Console del quale vuoi ripristinare i salvataggi:
    - Avvia il gioco GBA
    - Esci dal gioco GBA
    - Spegni la tua console
    - Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
    - Entra nella cartella `[0:] SDCARD` -> `gm9` -> `out`
    - Premi (Y) sul file `<ID titolo>.gbavc.sav` che vuoi ripristinare per copiarlo
    - Premi (B) per ritornare al menu principale
    - Entra nella cartella `[S:] SYSNAND VIRTUAL`
    - Premi (A) su `agbsave.bin` per selezionarlo
    - Seleziona "AGBSAVE options..."
    - Seleziona "Inject GBA VC save"
    - Premi il pulsante (A) per continuare
    - Premi (Start) per riavviare la tua console
    - Avvia il gioco GBA
    - Esci dal gioco GBA

## Criptare / Decriptare un file .CIA

::: info

Per motivi pratici, copia i file `.cia` che desideri criptare/decriptare dentro la cartella `/cias/` della tua scheda SD

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Entra nella cartella `[0:] SDCARD` -> `cias`
3. Premi (A) sul file `.cia` per selezionarlo, quindi seleziona "CIA image options..."
4. Seleziona l'opzione appropriata per la funzione desiderata:
    - **Encrypt to 0:/gm9/out:** Crea una copia criptata del file `.cia` selezionato nella cartella `/gm9/out/` della tua scheda SD
    - **Decrypt to 0:/gm9/out:** Crea una copia decriptata del file `.cia` selezionato nella cartella `/gm9/out/` della tua scheda SD
    - **Encrypt inplace:** Sostituisce il file `.cia` con una versione criptata dello stesso
    - **Decrypt inplace:** Sostituisce il file `.cia` con una versione decriptata dello stesso
5. Il tuo file criptato/decriptato in formato `.cia` verrà salvato nella posizione desiderata
