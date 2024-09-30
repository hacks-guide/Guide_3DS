# Spostare l'EmuNAND

## Lettura necessaria

In questa sezione aggiuntiva verrà spiegato come spostare il contenuto di una EmuNAND preesistente nel nuovo CFW SysNAND, per poi rimuovere la vecchia partizione EmuNAND. Tieni presente che i termini EmuNAND e RedNAND si riferiscono a due implementazioni leggermente diverse [dello stesso concetto](http://3dbrew.org/wiki/NAND_Redirection).

Tieni presente che se hai altri file payload oltre a `GodMode9.firm` nella cartella `/luma/payloads/` della tua scheda SD, per seguire le istruzioni riportate dovrai avviare la console tenendo (Start); apparirà un "menu chainloader" dove dovrai selezionare "GodMode9" tramite il D-Pad e il pulsante (A).

::: danger

DEVI aver già installato Luma3DS e boot9strap per poter proseguire.

:::

## Cosa serve

- Un'EmuNAND esistente
- L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)

## Istruzioni

### Sezione I - Preparazione

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia il file `GodMode9.firm` dall'archivio `.zip` di GodMode9 dentro la cartella `/luma/payloads/` della tua scheda SD
4. Copia la cartella `gm9` presente nell'archivio `.zip` di GodMode9 nella directory principale della tua scheda SD
5. Reinserisci la scheda SD nella tua console

### Sezione II - Backup dei salvataggi dei DSiWare su SysNAND

::: info

Se non hai alcun DSiWare o se non hai salvataggi che desideri salvare, salta questa sezione.

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Se ti viene richiesto di creare un backup dei file essenziali, premi (A) per accettare, e al termine di nuovo (A) per proseguire
3. Se ti viene chiesto di reimpostare la data e l'ora dell'RTC, premi (A) per farlo, poi imposta la data e l'ora, infine premi (A) per continuare
   - Tieni presente che in tal caso dovrai anche reimpostare data ed ora anche nelle Impostazioni della Console al termine della guida
4. Entra nella cartella `[2:] SYSNAND TWLN` -> `title`
5. Tenendo premuto (R), premi (A) sulla cartella `00030004` per selezionarla, quindi seleziona "Copy to 0:/gm9/out"
   - Questo processo potrebbe durare molto se hai molti giochi DSiWare
6. Premi (B) due volte per ritornare al menu principale

### Sezione II - Backup dei salvataggi dei giochi GBA della Virtual Console

::: info

Se non hai alcun gioco GBA della Virtual Console o se non hai salvataggi che desideri salvare, salta questa sezione.

:::

::: info

Questo processo non è necessario per giochi delle altre Virtual Console (quali GBC, NES, ecc)

:::

::: info

Il salvataggio verrà creato nella cartella `/gm9/out/` della tua scheda SD, con nome `<ID titolo>.gbavc.sav`.

:::

::: info

Per identificare il Title ID di un file `<ID titolo>.gbavc.sav`, puoi controllare la lista di tutti i giochi presenti sulla tua console e i rispettivi Title ID premendo il pulsante (Home) per far apparire il menu delle azioni, dopodiché seleziona `Title manager`, quindi`[A:] SD CARD`.

:::

1. Esegui i seguenti passaggi per ogni gioco GBA della Virtual Console del quale vuoi mantenere i salvataggi:
   - Avvia il gioco GBA
   - Esci dal gioco GBA
   - Avvia la console tenendo premuto (Start) per avviare il menu chainloader di Luma3DS
   - Avvia GodMode9 premendo (A)
   - Entra nella cartella `[S:] SYSNAND VIRTUAL`
   - Premi (A) su `agbsave.bin` per selezionarlo
   - Seleziona "AGBSAVE options..."
   - Seleziona "Dump GBA VC save"
   - Premi il pulsante (A) per continuare
   - Premi (Start) per riavviare la tua console

### Sezione IV - Copiare la EmuNAND nella SysNAND

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Entra in `[E:] EMUNAND VIRTUAL`
3. Premi (A) su `nand.bin` per selezionarlo, quindi seleziona "NAND image options...", ed infine seleziona "Restore SysNAND (safe)"
4. Premi il pulsante (A) per sbloccare la sovrascrittura su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
   - Questo processo non eliminerà boot9strap
5. Inserisci la combinazione di tasti richiesta a schermo per sbloccare i permessi di scrittura di primo livello su SysNAND
   - Questo passaggio richiederà un po' di tempo
6. Una volta completato, premi (A) per proseguire
7. Se richiesto, premi (B) per rifiutare il ritiro delle autorizzazioni di scrittura
8. Premi (B) per ritornare al menu principale

### Sezione V - Ripristino dei salvataggi DSiWare

::: info

Se non hai mantenuto alcun salvataggio DSiWare, salta questa sezione.

:::

1. Entra nella cartella `[0:] SDCARD` -> `gm9` -> `out`
2. Premi (Y) sulla cartella `00030004` per copiarla
3. Premi (B) due volte per ritornare al menu principale
4. Entra nella cartella `[2:] SYSNAND TWLN` -> `title`
5. Premi (Y) per incollare la cartella `00030004`
6. Seleziona "Copy path(s)"
7. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
8. Seleziona "Overwrite file(s)"
   - Questo processo potrebbe durare molto se hai molti giochi DSiWare
9. Se richiesto, premi (B) per rifiutare il ritiro delle autorizzazioni di scrittura
10. Premi (B) due volte per ritornare al menu principale

### Sezione VI - Ripristino dei salvataggi GBA della Virtual Console

::: info

Se non hai mantenuto alcun salvataggio GBA della Virtual Console, salta questa sezione.

:::

::: info

Per identificare il Title ID di un file `<ID titolo>.gbavc.sav`, puoi controllare la lista di tutti i giochi presenti sulla tua console e i rispettivi Title ID premendo il pulsante (Home) per far apparire il menu delle azioni, dopodiché seleziona `Title manager`, quindi`[A:] SD CARD`.

:::

1. Tenendo premuto (R), premi (Start) per spegnere la console
2. Avvia la tua console nella SysNAND
3. Esegui i seguenti passaggi per ogni gioco GBA della Virtual Console del quale vuoi ripristinare i salvataggi:
   - Avvia il gioco GBA
   - Esci dal gioco GBA
   - Avvia la console tenendo premuto (Start) per avviare il menu chainloader di Luma3DS
   - Avvia GodMode9 premendo (A)
   - Entra nella cartella `[0:] SDCARD` -> `gm9`
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

### Sezione VII - Backup della SysNAND

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Fai un backup di ogni file sulla tua scheda SD e conservalo in una cartella sul tuo computer in quanto la scheda SD verrà formattata nei prossimi passaggi**

### Sezione VIII - Formattazione della scheda SD

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Tenendo premuto (R), premi (B) per rimuovere la scheda SD
2. Inserisci la scheda SD nel tuo computer
3. Ripristina tutti i file sulla tua scheda SD
   - Assicurati di sostituire il file `boot.firm` sulla tua scheda SD con quello preso dal tuo backup
4. Reinserisci la scheda SD nella tua console
5. Premi (A) per eseguire il remount della scheda SD
6. Premi il pulsante (Start) per riavviare la console

___

::: tip

Ritorna al [Completamento dell'installazione](finalizing-setup)

:::
