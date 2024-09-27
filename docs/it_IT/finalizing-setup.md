# Completamento dell'installazione

## Required Reading

Il file `boot.firm` è il file avviato da boot9strap stesso al termine del caricamento dalla NAND. In questo caso, stiamo usando Luma3DS di [LumaTeam](https://github.com/LumaTeam/) per modificare la console, consentendogli di eseguire software homebrew.

In questa pagina realizzeremo backup di file di sistema critici e installeremo i alcuni programmi homebrew. La maggior parte di questi passaggi sarà automatizzata utilizzando uno script che verrà eseguito sulla tua console.

::: info

Lo script installerà le seguenti applicazioni:

- **[FBI](https://github.com/lifehackerhansol/FBI)** _(installs CIA formatted applications)_
- **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** _(launches the Homebrew Launcher)_
- **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** _(installs custom themes)_
- **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** _(backs up and restores save files for 3DS and DS games)_
- **[ftpd](https://github.com/mtheall/ftpd)** _(access your 3DS SD card wirelessly)_
- **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** _(a homebrew app store for downloading homebrew from the 3DS over Wi-Fi)_
- **[GodMode9](https://github.com/d0k3/GodMode9)** _(multipurpose tool which can do NAND and cartridge functions)_

Se non desideri alcune di queste applicazioni, puoi rimuoverle al termine di questa pagina entrando in Impostazioni della console -> Gestione dati -> Nintendo 3DS -> Software. (GodMode9 non può essere rimosso in questa maniera, ed è generalmente richiesto per altre funzionalità.)

:::

## Compatibility Notes

::: warning

Se il tuo **New 3DS** era alla versione del software 2.1.0 prima di seguire questa guida, dovresti [ripristinare il tuo backup NAND](godmode9-usage#restoring-a-nand-backup) prima di continuare. Questo probabilmente non ti riguarda a meno che non hai già seguito questa guida nel 2017.

:::

::: info

Se la tua precedente installazione CFW era basata su EmuNAND e desideri spostare il contenuto di EmuNAND/RedNAND in SysNAND, devi [Spostare l'EmuNAND](move-emunand) prima di seguire questa pagina. Se non sai cosa sia l'EmuNAND, allora non ti serve.

:::

## What You Need

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

## Instructions

### Section I - Prep Work

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

### Section II - Updating the System

In questa sezione, aggiornerai il tuo sistema all'ultima versione, tranquillamente fattibile con il custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Section III - RTC and DSP setup

In questa sezione, sincronizzerai l'orologio interno del tuo 3DS con l'ora reale e scaricherai il firmware audio (necessario per permettere ad alcuni software homebrew di usare correttamente i suoni).

1. Premi simultaneamente i pulsanti (L) + (Giù) + (Select) per aprire il menu di Rosalina
   - If one of these buttons is broken, download [config.ini](/assets/config.ini) and put it in your `luma` folder, replacing the existing one. Questo cambierà la combinazione di tasti del menù Rosalina in (X) + (Y)
2. Seleziona "Miscellaneous options"
3. Seleziona "Dump DSP firmware"
4. Premi (B) per continuare
5. Seleziona "Nullify user time offset"
6. Premi (B) per continuare
7. Premi (B) per tornare al menu principale di Rosalina
8. Premi (B) per uscire dal menu di Rosalina

### Section IV - Setup Script

In questa sezione, userai una serie di script per automatizzare l'installazione di homebrew, la pulizia della scheda SD e il backup dei file di sistema.

1. Spegni la tua console
2. Premi (X) e accendi la console continuando a tenerlo premuto. Questo avvierà il supporto al Completamento dell'installazione
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
   - If you encounter an error, consult the [troubleshooting](troubleshooting#finalizing-setup) page
3. Se il supporto ha avuto successo, la console si avvierà in GodMode9
   - From this point forward, you can access GodMode9 by holding START while powering on your console
4. Se ti viene richiesto di creare un backup dei file essenziali, premi (A) per accettare, e al termine di nuovo (A) per proseguire
5. Se ti viene chiesto di reimpostare la data e l'ora dell'RTC, premi (A) per farlo, poi imposta la data e l'ora, infine premi (A) per continuare
6. Premi il pulsante HOME per far apparire il menu delle azioni
7. Seleziona "Scripts..."
8. Seleziona "finalize"
9. Segui le istruzioni dello script, rispondendo alle domande che ti vengono poste
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting#finalizing-setup) page
10. Quando lo script mostrerà "Setup complete!", premi (A) per spegnere la console
    - If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
11. Inserisci la scheda SD nel tuo computer
12. Copia la cartella `/gm9/backups/` in una posizione sicura sul tuo computer
    - This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
13. Se li hai ancora, elimina i due file `SysNAND` dalla cartella `/gm9/backups/` dalla tua scheda SD
    - The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

::: tip

Hai finito! Il custom firmware nella tua console è stato completamente configurato.

:::

::: info

Stai cercando di capire cosa fare con la tua console appena modificata? Visita [la nostra wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Information and Notes

::: info

Ecco alcune combinazioni di tasti che dovresti conoscere:

- Holding (Select) on boot will launch the Luma3DS configuration menu.
- Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
- By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. Si può modificare da Rosalina stesso.
- Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. Consulta la lista nel [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4).

:::

::: info

Per informazioni sull'utilizzo delle varie funzionalità di GodMode9, consulta le pagine [Usare GodMode9](godmode9-usage) e [Dump di titoli e schede di gioco](dumping-titles-and-game-cartridges).

:::
