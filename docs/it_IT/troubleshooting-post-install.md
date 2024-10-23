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
4. Prova ad avviare la modalità di ripristino e ad aggiornare la console:
   - Spegni la tua console
   - Tieni premuti i pulsanti (L) + (R) + (Su) + (A)
   - Accendi la tua console
   - Se hai avuto successo, la console si avvierà mostrando la schermata "Aggiornamento"
5. Segui la guida [CTRTransfer](ctrtransfer)
6. Se hai bisogno di aiuto, chiedi pure nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

### Messaggio di errore all'avvio

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" o "An exception has occurred -- Current process: pm"

La tua versione di Luma3DS è obsoleta. Scarica l'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) e posiziona il file `boot.firm` nella directory principale della tua scheda SD, sostituendo qualunque file preesistente. Assicurati di non stare estraendo il file ZIP con WinRAR, in quanto è noto per causare problemi con file relativi al 3DS.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

Ci sono diverse ragioni per cui questo potrebbe accadere. In ogni caso, questo errore di solito si può risolvere seguendo la guida [CTRTransfer](ctrtransfer).

:::

:::details "Si è verificato un errore. Tieni premuto il pulsante POWER per spegnere la console..."

I gestori di eccezione ARM11 sono disabilitati, o un custom firware non è installato. Prova ad abilitare i gestori delle eccezioni ARM11:

- Spegni la tua console
- Tieni premuto (Select)
- Accendi la tua console, continuando a tenere premuto il pulsante (Select)
- Se la casella "Disable ARM11 exception handlers" è selezionata, deselezionala

:::

:::details Al menu HOME mancano delle applicazioni installate

Questo potrebbe essere causato da vari motivi, ma principalmente perché la scheda SD non viene letta dal sistema.
Puoi controllare se la tua SD non viene letta tenendo premuto SELECT all'avvio e controllando il testo giallo nella schermata inferiore; se dice "Booted from CTRNAND via B9S", la console si sta avviando dalla memoria interna e non dalla scheda SD.
Se è questo il caso, prova a seguire i seguenti passaggi, indicati dal più semplice al più complesso:

1. Spegni la tua console, rimuovi la scheda SD, reinseriscila, quindi accendi la tua console
2. Spegni la console, rimuovi la scheda SD, inseriscila sul tuo computer, scarica l'ultima versione di [Luma3DS](https://github. om/LumaTeam/Luma3DS/releases/latest), estrai il file `boot.firm` dall'archivio `Luma3DS.zip` e posizionalo nella directory principale della tua scheda SD (sostituendo qualunque file preesistente)
3. Spegni la console, rimuovi la scheda SD, inseriscila sul tuo computer e formatta la scheda SD secondo il sistema operativo del computer: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(questo cancellerà i dati della tua scheda SD)_
4. Verifica la presenza di eventuali errori nella tua scheda SD seguendo la guida corretta per il sistema operativo del tuo computer: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). Se la tua scheda SD è contrassegnata come difettosa, allora dovrai sostituirla
5. Lo slot della tua scheda SD potrebbe essere rotto. Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza

:::

:::details Schermata blu con la scritta "BOOTROM ERROR"

La tua console è probabilmente brickata. Dovrai acquistare una flashcart ntrboot per reinstallare boot9strap e tentare riparare la tua console. Potrebbe anche indicare un problema hardware non risolvibile. In ogni caso, entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per chiedere assistenza.

- È anche possibile che qualcuno abbia impostato una schermata di avvio a tempo che assomigli al messaggio di errore. Prova a lasciare la tua console accesa sulla schermata blu per cinque minuti.

:::

:::details Qualche altro errore

Scatta una foto dell'errore ed entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per ricevere assistenza.

:::

## Problemi software su console con custom firmware

:::details La funzionalità DSi / DS è corrotta o è stata sostituita con Flipnote Studio

1. Scarica l'ultima versione di [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (il file `.3dsx`)
2. Spegni la tua console
3. Se assente, crea una cartella chiamata `3ds` nella directory principale della tua scheda SD
4. Copia il file `TWLFix-CFW.3dsx` nella cartella `/3ds/` nella tua scheda SD
5. Reinserisci la scheda SD nella tua console
6. Avvia l'Homebrew Launcher
7. Avvia TWLFix-CFW dalla lista degli homebrew disponibili
8. Premi il pulsante (A) per disinstallare i titoli TWL corrotti
9. Premi (Start) per riavviare la console
10. Aggiorna la console andando su Impostazioni della console, poi "Impostazioni generali", infine scorri a destra e seleziona "Aggiornamento"
    - L'aggiornamento si occuperà di disinstallare i principali titoli TWL, per riscaricarli e reinstallarli
11. Al termine dell'aggiornamento, premi "OK" per riavviare la console

:::

:::details La funzionalità GBA Virtual Console e/o Modalità Provvisoria è corrotta

La tua console sta eseguendo Luma3DS 6.6 o precedente, probabilmente tramite arm9loaderhax. Dovresti seguire [Da A9LH a B9S](a9lh-to-b9s) per aggiornare la tua console con un custom firmware moderno.

:::

:::details I giochi in modalità memoria estesa (Pokemon Sole/Luna, Smash, ecc.) non funzionano

Questo può verificarsi dopo un CTRTransfer o dopo un cambio di regione su Old 3DS / 2DS. Segui le istruzioni indicate [qui](region-changing#section-vi---fixing-locale-related-issues) per risolvere il problema (saltando i passaggi 3, 4, 5 e 6).

:::

:::details Schermata di errore all'avvio/caricamento di un'applicazione

Cerca la tua schermata di errore in [questa pagina](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Se non sei stato in grado di trovare il tuo errore o le istruzioni non funzionano, unisciti a [Nintendo Homebrew su Discord](https://discord.gg/MWxPgEp) per ulteriore assistenza.

:::

:::details Avviare le impostazioni del menu HOME crasha la console o carica l'Homebrew Launcher

Probabilmente la tua console ha ancora menuhax67 installato. Per disinstallare menuhax67, scarica l'ultima versione di [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (il file `.zip` di menuhax), quindi segui la [sezione "Uninstall menuhax67"](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67).

:::

:::details Qualcos'altro

Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) per ricevere assistenza, e descrivi il problema che riscontri.

:::

## Risoluzione di ulteriori problemi

:::details Cancellare gli extdata del menu Home

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Entra nella cartella `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` presente all'interno della tua scheda SD
4. Elimina la cartella corrispondente per la tua regione 3DS:
   - **Regione EUR**: `00000098`
   - **Regione JPN**: `00000082`
   - **Regione USA**: `0000008f`
   - **Regione CHN**: `000000A1`
   - **Regione KOR**: `000000A9`
   - **Regione TWN**: `000000B1`
5. Reinserisci la scheda SD nella tua console

:::

:::details Pulizia dei dati dei temi del menu HOME

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Entra nella cartella `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` presente all'interno della tua scheda SD
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
