# Disinstallare il CFW

## Lettura necessaria

In questa sezione verrà spiegato come rimuovere completamente il CFW dalla tua console, boot9strap e Luma3DS inclusi, per riportarla al suo stato iniziale.

Qualunque giorno non firmato (illegittimo) verrà reso inutilizzabile e sarà rimosso durante il processo. Usa un [manager dei salvataggi](https://github.com/FlagBrew/Checkpoint/releases/latest) per fare il backup di tutti i salvataggi che ti interessano.

::: danger

Se stai rimuovendo il CFW perché:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. Un'idea migliore sarebbe chiedere aiuto nel [canale Discord Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

::: danger

Se hai fatto una cosa QUALUNQUE tra le seguenti:

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. In questi casi, [ripristina da un backup pulito della NAND](godmode9-usage#restoring-a-nand-backup) prima di continuare.

:::

::: warning

Queste istruzioni funzioneranno solo su console con una versione di Luma3DS uguale o superiore a 8.0. Se si dispone di una versione precedente di Luma, è necessario aggiornare l'installazione prima di seguire queste istruzioni. Segui [questa pagina](checking-for-cfw) per trovare le istruzioni per l'aggiornamento.

:::

## Cosa serve

- L'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (il file `.zip` di Luma3DS)
- L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Istruzioni

### Sezione I - Preparazione

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia tutto dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD
4. Copia il file `GodMode9.firm` dall'archivio `.zip` di GodMode9 dentro la cartella `/luma/payloads/` della tua scheda SD
5. Copia la cartella `gm9` presente nell'archivio `.zip` di GodMode9 nella directory principale della tua scheda SD
6. Copia il file `DSiWareUninstaller.3dsx` nella cartella `/3ds/` della tua scheda SD
7. Copia il file `safety_test.gm9` nella cartella `/gm9/scripts/` della tua scheda SD
8. Reinserisci la scheda SD nella tua console

### Section II - DS Mode Tests

Lo scopo di questa sezione è verificare se le applicazioni integrate in modalità DS continueranno a funzionare dopo la rimozione del CFW. Se salti questa parte, la modalità DS o le sue funzionalità potrebbero rimanere inaccessibili finché non avrai reinstallato un CFW.

#### DS Connection Settings Test

1. Accendi la tua console
2. Avvia le Impostazioni di sistema sulla tua console
3. Vai su `Impostazioni Internet` -> `Connessioni Nintendo DS`, quindi seleziona OK
4. Dovrebbe avviarsi il menu Configurazione Nintendo Wi-Fi Connection
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Spegni la tua console

#### DS Download Play Test

1. Accendi la tua console
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Seleziona "Nintendo DS"
4. Se la console ora mostra la scritta "Scarica software tramite il download DS.", il test ha avuto successo
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Spegni la tua console

::: warning

Se uno di questi test non è riuscito, la modalità DS, la Modalità download DS e/o le impostazioni di collegamento DS potrebbero essere inaccessibili al termine della rimozione del CFW! Dovresti [riparare la modalità DS](troubleshooting#software-issues-on-devices-with-custom-firmware) prima di continuare.

:::

### Section III - Safety Test

Lo scopo di questa sezione è quello di verificare che la console si avvii e che le funzioni di sistema critiche, come le Impostazioni della console e la tastiera, funzioneranno dopo la rimozione del CFW. **Se salti questa sezione, potresti BRICKARE la tua console!**

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Se ti viene richiesto di creare un backup dei file essenziali, premi (A) per accettare, e al termine di nuovo (A) per proseguire
3. Se ti viene chiesto di reimpostare la data e l'ora dell'RTC, premi (A) per farlo, poi imposta la data e l'ora, infine premi (A) per continuare
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. Premi il pulsante HOME per far apparire il menu delle azioni
5. Seleziona "Scripts..."
6. Seleziona "safety_test"
7. Leggi il testo a schermo e premi (A) per continuare
8. Dovrebbe avviarsi il normale menu HOME del 3DS (i temi custom non sono rilevanti in questo momento). In tal caso, prosegui con le istruzioni
   - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. Avvia le Impostazioni di sistema sulla tua console
   - If the console crashes at this point, the test has failed
10. Seleziona "Impostazioni generali"
11. Seleziona "Profilo"
12. Seleziona "Nickname"
13. Se puoi inserire un nuovo nome utente, il test ha avuto successo
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. Spegni la tua console

::: danger

Se NON si avvia il normale menu HOME 3DS, le Impostazioni della console e/o la tastiera sono inaccessibili, **NON PROSEGUIRE con queste istruzioni**! Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) (in Inglese) per richiedere assistenza.

:::

### Section IV - NAND Backup

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Premi il pulsante HOME per far apparire il menu delle azioni
3. Seleziona "Scripts..."
4. Seleziona "GM9Megascript"
5. Seleziona "Backup Options"
6. Seleziona "SysNAND Backup"
7. Premi (A) per confermare
   - Questo passaggio richiederà un po' di tempo
   - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. Premi (B) per ritornare al menu principale
9. Seleziona “Exit”
10. Premi il pulsante HOME per far apparire il menu delle azioni
11. Seleziona "Poweroff system" per spegnere la console

### Section V - Removing illegitimate content

::: warning

Questa sezione rimuoverà contenuti illegittimi, come homebrew e backup di giochi. Se hai dati di salvataggio che desideri mantenere, eseguine il backup con un gestore di salvataggi prima di continuare!

:::

1. Accendi la tua console
2. Avvia le Impostazioni di sistema sulla tua console
3. Apri Gestione dati -> Nintendo 3DS -> Software
4. In questa lista di software, elimina qualunque contenuto non Nintendo che hai installato usando un CFW
   - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. Entra in `Gestione dati` -> `DSiWare`
6. In questa lista di software, elimina qualunque contenuto non Nintendo che hai installato usando un CFW
   - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
   - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. Esci da Impostazioni della console
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Attendi finché non vedrai i due pulsanti
10. Premi simultaneamente i pulsanti (L) + (Giù) + (Select) per aprire il menu di Rosalina
11. Seleziona "Miscellaneous options"
12. Select "Switch the hb. title to the current app."
13. Premi (B) per continuare
14. Premi (B) per tornare al menu principale di Rosalina
15. Premi (B) per uscire dal menu di Rosalina
16. Premi il pulsante HOME, quindi chiudi l'applicazione "Modalità download"
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. La console dovrebbe ora avviare l'Homebrew Launcher
19. Avvia DSiWare Uninstaller dalla lista degli homebrew disponibili
20. Segui le istruzioni e permetti al programma di disinstallare
21. Al termine, esci dall'Homebrew Launcher e spegni la tua console

### Section VI - System Format

Questa sezione garantirà che tutti i ticket illegittimi vengano rimossi, consentendo all'eShop di funzionare normalmente. Verranno rimossi tutti i contenuti del 3DS e verrà fatto log out dal tuo NNID. Tieni presente che la chiave di cifratura della tua console verrà ricreata, per cui qualunque dato preesistente diventerà inaccessibile, anche se manterrai un backup della tua scheda SD.

1. Accendi la tua console
2. Avvia le Impostazioni di sistema sulla tua console
3. Vai su Impostazioni generali -> procedi fino all'ultima pagina -> Formattazione
4. Segui le istruzioni per formattare il tuo 3DS

### Section VII - Running Uninstall Script

::: warning

Questa è la tua ultima occasione per verificare che tutti i controlli di sicurezza precedentemente indicati siano stati seguiti! Assicurati di aver seguito tutte le sezioni di questa pagina, **in particolare** la `Sezione III - Test di Sicurezza`, prima di continuare.

:::

::: danger

Se stai rimuovendo il CFW perché:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. Un'idea migliore sarebbe chiedere aiuto nel [canale Discord Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. Premi il pulsante HOME per far apparire il menu delle azioni
3. Seleziona "Scripts..."
4. Seleziona "GM9Megascript"
5. Seleziona "Hax Options"
6. Seleziona "Un-install Hax"
7. Quando richiesto, premi (A) per procedere
8. Premi il pulsante (A) per sbloccare i permessi di scrittura di terzo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
9. Premi il pulsante (A) per continuare
10. Premi (B) per ritornare al menu principale
11. Seleziona "Exit"
12. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura
13. Premi (Start) per riavviare la tua console

___

::: tip

Il custom firmware è stato rimosso dalla tua console.

:::

::: info

Ora puoi rimuovere qualsiasi file o cartella presente nella directory principale della tua scheda SD che _non_ siano le cartelle `Nintendo 3DS`, `DCIM`, o `private`.

:::
