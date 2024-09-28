# Completamento dell'installazione

## Lettura necessaria

Il file `boot.firm` è il file avviato da boot9strap stesso al termine del caricamento dalla NAND. In questo caso, stiamo usando Luma3DS di [LumaTeam](https://github.com/LumaTeam/) per modificare la console, consentendogli di eseguire software homebrew.

In questa pagina realizzeremo backup di file di sistema critici e installeremo i alcuni programmi homebrew. La maggior parte di questi passaggi sarà automatizzata utilizzando uno script che verrà eseguito sulla tua console.

::: info

Lo script installerà le seguenti applicazioni:

- **[FBI](https://github.com/lifehackerhansol/FBI)** \*_(installa applicazioni in formato CIA)_
- **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** _(avvia l'Homebrew Launcher)_
- **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** _(installa temi personalizzati)_
- **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** _(salva e ripristina file di salvataggio per giochi 3DS e DS)_
- **[ftpd](https://github.com/mtheall/ftpd)** _(accede alla scheda SD del tuo 3DS via wireless)_
- **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** _(un app store di applicazioni homebrew per scaricare homebrew dal 3DS via Wi-Fi)_
- **[GodMode9](https://github.com/d0k3/GodMode9)** _(strumento multiuso per gestire la NAND e le schede di gioco)_

Se non desideri alcune di queste applicazioni, puoi rimuoverle al termine di questa pagina entrando in Impostazioni della console -> Gestione dati -> Nintendo 3DS -> Software. (GodMode9 non può essere rimosso in questa maniera, ed è generalmente richiesto per altre funzionalità.)

:::

## Note di compatibilità

::: warning

Se il tuo **New 3DS** era alla versione del software 2.1.0 prima di seguire questa guida, dovresti [ripristinare il tuo backup NAND](godmode9-usage#restoring-a-nand-backup) prima di continuare. Questo probabilmente non ti riguarda a meno che non hai già seguito questa guida nel 2017.

:::

::: info

Se la tua precedente installazione CFW era basata su EmuNAND e desideri spostare il contenuto di EmuNAND/RedNAND in SysNAND, devi [Spostare l'EmuNAND](move-emunand) prima di seguire questa pagina. Se non sai cosa sia l'EmuNAND, allora non ti serve.

:::

## Cosa serve

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (download diretto)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (download diretto)

## Istruzioni

### Sezione I - Preparazione

In questa sezione, copierai i file necessari per seguire le rimanenti istruzioni in questa pagina.

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia il file `finalize.romfs` nella directory principale della tua scheda SD
4. Apri la cartella `luma` sulla tua scheda SD e crea all'interno una cartella chiamata `payloads`, se non esiste già
5. Copia il file `x_finalize_helper.firm` nella cartella `payloads`
6. Reinserisci la scheda SD nella tua console

Il seguente screenshot indica la struttura minima che la scheda SD deve avere per proseguire in questa pagina. Potresti avere file o cartelle ulteriori nella tua scheda SD, a seconda della tua precedente configurazione o del metodo che hai seguito.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Sezione II - Aggiornare il sistema

In questa sezione, aggiornerai il tuo sistema all'ultima versione, tranquillamente fattibile con il custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Sezione III - Installazione di RTC e DSP

In questa sezione, sincronizzerai l'orologio interno del tuo 3DS con l'ora reale e scaricherai il firmware audio (necessario per permettere ad alcuni software homebrew di usare correttamente i suoni).

1. Premi simultaneamente i pulsanti (L) + (Giù) + (Select) per aprire il menu di Rosalina
   - Se uno di questi pulsanti è rotto, scarica [questo config.ini](/assets/config.ini) e mettilo nella tua cartella `luma`, sostituendo il file preesistente. Questo cambierà la combinazione di tasti del menù Rosalina in (X) + (Y)
2. Seleziona "Miscellaneous options"
3. Seleziona "Dump DSP firmware"
4. Premi (B) per continuare
5. Seleziona "Nullify user time offset"
6. Premi (B) per continuare
7. Premi (B) per tornare al menu principale di Rosalina
8. Premi (B) per uscire dal menu di Rosalina

### Sezione IV - Installazione dello script

In questa sezione, userai una serie di script per automatizzare l'installazione di homebrew, la pulizia della scheda SD e il backup dei file di sistema.

1. Spegni la tua console
2. Premi (X) e accendi la console continuando a tenerlo premuto. Questo avvierà il supporto al Completamento dell'installazione
   - Se si avvia nel menu HOME, la cartella `payloads` potrebbe essere scritta in modo errato o trovarsi nella posizione sbagliata
   - Se riscontri un errore, consulta la pagina [Risoluzione dei problemi](troubleshooting#finalizing-setup)
3. Se il supporto ha avuto successo, la console si avvierà in GodMode9
   - Da qui in avanti sarà possibile accedere a GodMode9 tenendo premuto START all'accensione della console
4. Se ti viene richiesto di creare un backup dei file essenziali, premi (A) per accettare, e al termine di nuovo (A) per proseguire
5. Se ti viene chiesto di reimpostare la data e l'ora dell'RTC, premi (A) per farlo, poi imposta la data e l'ora, infine premi (A) per continuare
6. Premi il pulsante HOME per far apparire il menu delle azioni
7. Seleziona "Scripts..."
8. Seleziona "finalize"
9. Segui le istruzioni dello script, rispondendo alle domande che ti vengono poste
   - - Se riscontri un errore, segui le istruzioni riportate nel messaggio di errore o consulta la pagina [Risoluzione dei problemi](troubleshooting#finalizing-setup)
10. Quando lo script mostrerà "Setup complete!", premi (A) per spegnere la console
    - Se NON vedi il messaggio "Setup complete!", lo script non ha avuto successo e dovrai ripetere questa sezione dal Punto 3
11. Inserisci la scheda SD nel tuo computer
12. Copia la cartella `/gm9/backups/` in una posizione sicura sul tuo computer
    - Questa cartella contiene backup dei file critici e dovrebbe essere salvata in più posizioni (es. archiviazione in cloud) se possibile
    - I due file SysNAND sono il backup della NAND e possono essere utilizzati per ripristinare la console ad uno stato funzionante se viene resa inutilizzabile con un errore software
    - Il file `essential.exefs` contiene i file univoci di sistema della tua console e può essere utilizzato per recuperare i tuoi dati in caso di guasto hardware
13. Se li hai ancora, elimina i due file `SysNAND` dalla cartella `/gm9/backups/` dalla tua scheda SD
    - Il file `essential.exefs` è piccolo e può essere tenuto sulla tua scheda SD per facilità di accesso

___

::: tip

Hai finito! Il custom firmware nella tua console è stato completamente configurato.

:::

::: info

Stai cercando di capire cosa fare con la tua console appena modificata? Visita [la nostra wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Informazioni e note

::: info

Ecco alcune combinazioni di tasti che dovresti conoscere:

- Tenere premuto (Select) all'accensione della console avvierà il menu di configurazione di Luma3DS.
- Tenere premuto (Start) all'accensione avvierà GodMode9 o, se hai più payload in `/luma/payloads/`, il chainloader Luma3DS.
- Per impostazione predefinita, premere (L) + (Giù) + (Select) in modalità 3DS aprirà il menu di Rosalina, dove è possibile controllare le informazioni di sistema, catturare screenshot, abilitare i trucchi e altro ancora. Si può modificare da Rosalina stesso.
- Tenendo premuto (Start) + (Select) + (X) all'avvio, il LED di notifica mostrerà un colore a scopo di debug. Consulta la lista nel [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4).

:::

::: info

Per informazioni sull'utilizzo delle varie funzionalità di GodMode9, consulta le pagine [Usare GodMode9](godmode9-usage) e [Dump di titoli e schede di gioco](dumping-titles-and-game-cartridges).

:::
