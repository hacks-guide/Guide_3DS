# Risoluzione dei problemi (post-installazione)

Questa pagina offre consigli per la risoluzione dei problemi comunemente riscontrati dopo l'installazione di un custom firmware. Se non riesci a risolvere il tuo problema con i consigli su questa pagina, entra nel [canale Discord di Nintendo Homebrew](https://discord. g/MWxPgEp) e descrivi il tuo problema, indicando quello che hai già provato.

## Problemi di avvio

::: info

I passaggi qui dettagliati generalmente presuppongono che la tua console abbia un'installazione moderna del custom firmware (boot9strap + Luma3DS 8.0 o superiore). Se la tua console sta eseguendo una vecchia configurazione (ad esempio, qualcosa basato su arm9loaderhax o menuhax), dovresti aggiornare la tua installazione prima di seguire queste istruzioni.

:::

### Indicatori luminosi di accensione/notifica

:::details La mia console si spegne quando provo ad accenderla, e/o il LED di notifica mostra un colore all'accensione

C'è un problema con il tuo file `boot.firm`. Se stai usando [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), il tuo LED di notifica 3DS potrebbe lampeggiare di un certo colore. Questo colore è usato per diagnosticare problemi riguardanti il tuo file `boot.firm` nella scheda SD o nella memoria interna. Su versioni molto vecchie di boot9strap, la luce blu si spegne quasi subito quando si tenta di accendere la console.

Se il LED di notifica lampeggia:

- **Bianco**: Il tuo 3DS non è stato in grado di trovare il file `boot.firm` nella tua scheda SD o nella memoria interna.
- **Magenta**: Il tuo 3DS non è stato in grado di trovare il file `boot.firm` nella tua scheda SD. È stato in grado di trovare il file `boot.firm` nella memoria interna, tuttavia il file è corrotto.
- **Rosso**: Il tuo 3DS è stato in grado di trovare il file `boot.firm` sia nella tua scheda SD sia nella memoria interna, tuttavia entrambi i file sono corrotti.

Puoi ottenere un nuovo file `boot.firm` scaricando l'[ultima versione di Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), estraendola e posizionando il file `boot.firm` nella directory principale della tua scheda SD. Se il tuo file `boot.firm` continua a risultare corrotto, potresti dover verificare la presenza di errori nella tua scheda SD ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), o [macOS](f3xswift-\(mac\))). Inoltre, tieni presente che il 3DS tende ad avere problemi con file estratti usando WinRAR.

Se si sente un "suono scoppiettante", potenzialmente seguito dalla retroilluminazione accendersi per un istante, c'è un problema hardware con la tua console (come un cavo della retroilluminazione disconnesso). Potresti riuscire ad accendere la console tenendola in determinate posizioni.

:::

:::details La mia console si blocca con una schermata nera e la luce di accensione rimane blu

I passaggi qui sotto possono essere seguiti in qualsiasi ordine, ma sono elencati dal più rapido al più lungo da eseguire.

1. Spegni la tua console, rimuovi la scheda SD, reinseriscila, quindi accendi la tua console.
2. Spegni la tua console, estrai la cartuccia di gioco se inserita, accendi la tua console, quindi attendi fino a dieci minuti. Se la tua console si avvia entro dieci minuti, il problema è stato risolto e probabilmente non avverrà più
3. Rinomina la cartella `Nintendo 3DS` sulla tua scheda SD in `Nintendo 3DS_BACKUP`, poi tenta l'avvio. Se la tua console si avvia correttamente, c'è qualche problema con la tua cartella `Nintendo 3DS`. Prova a cancellare gli extdata del menu HOME:
   - Entra nella cartella `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
   - Elimina la cartella corrispondente per la tua regione 3DS:
     - **Regione EUR**: `00000098`
     - **Regione JPN**: `00000082`
     - **Regione USA**: `0000008f`
     - **Regione CHN**: `000000A1`
     - **Regione KOR**: `000000A9`
     - **Regione TWN**: `000000B1`
4. Try booting into recovery mode and updating your system:
   - Spegni la tua console
   - Hold (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A)
   - Accendi la tua console
   - If you were successful, the console will boot to an "update your system" screen
5. Follow the [CTRTransfer](ctrtransfer) guide
6. For further support, ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp)

:::

### Error message on boot

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"

Your Luma3DS version is outdated. Download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) and place `boot.firm` on the root of your SD card, replacing any existing file. Make sure you are extracting the ZIP file with any tool other than WinRAR, as it is known to cause issues with 3DS-related files.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

There are a number of reasons as to why this could be happening. In any case, this error can usually be fixed by following the [CTRTransfer](ctrtransfer) guide.

:::

:::details "Si è verificato un errore. Tieni premuto il pulsante POWER per spegnere la console..."

ARM11 exception handlers are disabled, or custom firmware is not installed. Try enabling ARM11 exception handlers:

- Spegni la tua console
- Hold (Select)
- Power on your console, while still holding (Select)
- If the "Disable ARM11 exception handlers" box is checked, uncheck it

:::

:::details HOME Menu is missing installed applications

This could be caused by various reasons, but most likely because your SD card is not being read by the system.
You can check if your SD is being read by holding SELECT on boot and checking the yellow text on the bottom screen; if it says "Booted from CTRNAND via B9S", then your console is booting from the internal memory and not from the SD card.
If this is the case, attempt the steps below, which are listed from easiest to hardest:

1. Power off your console, remove the SD card, re-insert it, then power on your console
2. Power off your console, remove the SD card, insert it on your computer, download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extract `boot.firm` from the `Luma3DS.zip` and place it on the root of your SD card (replacing any existing file)
3. Power off your console, remove the SD card, insert it on your computer and reformat your SD card according to your computer's operating system: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(this will wipe your SD card data)_
4. Test your SD card for errors by following the guide according to your computer's operating system: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). If your SD card is marked as faulty, then you will have to replace your SD card
5. Your SD card slot may be broken. Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance

:::

:::details Blue "BOOTROM ERROR" screen

Your console is likely hard-bricked. You will need to buy an ntrboot flashcart to reinstall boot9strap in order to attempt to fix your console. This may also indicate a hardware issue that cannot be fixed. In any case, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

- It is also possible that someone has set a boot-time splash screen that just looks like a brick. Try leaving your console powered on, waiting on the blue screen, for five minutes.

:::

:::details Some other error

Please take a photo of the error and join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

## Software issues on consoles with custom firmware

:::details DSi / DS functionality is broken or has been replaced with Flipnote Studio

1. Download the latest release of [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (the `.3dsx` file)
2. Spegni la tua console
3. Se assente, crea una cartella chiamata `3ds` nella directory principale della tua scheda SD
4. Copy `TWLFix-CFW.3dsx` to the `/3ds/` folder on your SD card
5. Reinserisci la scheda SD nella tua console
6. Open the Homebrew Launcher
7. Launch TWLFix-CFW from the list of homebrew
8. Press (A) to uninstall the broken TWL titles
9. Press (Start) to reboot the console
10. Aggiorna la console andando su Impostazioni della console, poi "Impostazioni generali", infine scorri a destra e seleziona "Aggiornamento"
    - The update will see that the essential TWL titles have been uninstalled, and will redownload and reinstall them
11. Once the update is complete, tap "OK" to reboot the console

:::

:::details GBA Virtual Console and/or Safe Mode functionality is broken

Your console is running Luma3DS 6.6 or older, likely via arm9loaderhax. You should follow [A9LH to B9S](a9lh-to-b9s) to update your console to a modern custom firmware environment.

:::

:::details Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work

This can occur after a CTRTransfer or region change on Old 3DS / 2DS. Follow the instructions [here](region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).

:::

:::details Exception screen when booting/loading an application

Look for your exception screen in [this page](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
If you weren't able to find your error or the instructions didn't work, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance.

:::

:::details Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher

Your console likely still has menuhax67 installed. To uninstall menuhax67, download the latest release of [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (the menuhax `.zip`), then follow the ["Uninstall menuhax67" section](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.

:::

:::details Something else

Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance, and describe the issue that you see.

:::

## Other troubleshooting

:::details Clear HOME Menu extdata

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Navigate to the `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` folder on your SD card
4. Elimina la cartella corrispondente per la tua regione 3DS:
   - **Regione EUR**: `00000098`
   - **Regione JPN**: `00000082`
   - **Regione USA**: `0000008f`
   - **Regione CHN**: `000000A1`
   - **Regione KOR**: `000000A9`
   - **Regione TWN**: `000000B1`
5. Reinserisci la scheda SD nella tua console

:::

:::details Clear HOME Menu theme data

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Navigate to the `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` folder on your SD card
4. Elimina la cartella corrispondente per la tua regione 3DS:
   - **EUR Region**: `000002ce`
   - **JPN Region**: `000002cc`
   - **USA Region**: `000002cd`
   - **KOR Region**: `000002cf`
5. Reinserisci la scheda SD nella tua console

:::

:::details Manually entering Homebrew Launcher

If you are missing the Homebrew Launcher application from your HOME Menu, you can follow these instructions to manually enter the Homebrew Launcher. (You will need [boot.3dsx and boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) on the root of your SD card.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details Turning off Parental Controls

You can disable the Parental Controls feature by going to System Settings -> Parental Controls and inserting the PIN, then pressing "Clear Settings", then "Delete" to remove it.
However, if you do not know the PIN and therefore cannot access the console's settings, you will need to disable it. In order to do this, you need to obtain your console's master key (mkey):

1. Go to [this website](https://mkey.eiphax.tech/)
2. Fill the following boxes with the information:
   - Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
   - System Date: The day and month your console's clock is set to
   - Inquiry Number: Can be obtained by pressing "Forgot PIN" then "I Forgot" in the Parental Controls screen
3. After you have obtained your mkey, press OK on the screen you have obtained your Inquiry Number, then input the master key
4. Press "Clear Settings", then "Delete" to remove all Parental Controls data

:::

---

<!--@include: ./_include/troubleshooting-return.md -->
