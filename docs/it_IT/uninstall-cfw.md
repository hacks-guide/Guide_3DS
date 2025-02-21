# Disinstallare il CFW

## Lettura necessaria

In questa sezione verrà spiegato come rimuovere completamente il CFW dalla tua console, boot9strap e Luma3DS inclusi, per riportarla al suo stato iniziale.

Qualunque giorno non firmato (illegittimo) verrà reso inutilizzabile e sarà rimosso durante il processo. Usa un [manager dei salvataggi](https://github.com/FlagBrew/Checkpoint/releases/latest) per fare il backup di tutti i salvataggi che ti interessano.

::: danger

Se stai rimuovendo il CFW perché:

- Vuoi reinstallarlo
- Vuoi cambiare la tua scheda SD
- Hai perso la tua scheda SD, o si è corrotta
- Uno dei tuoi giochi non funziona correttamente
- Una delle applicazioni di sistema non funziona correttamente
- La tua console non riesce ad avviare il menu HOME

<u>**FERMATI!!!**</u> Disinstallare il custom firmware è un rischio non necessario che nel migliore dei casi ti farà perdere tempo e nel peggiore <u>**BRICKARE**</u> la tua console. Un'idea migliore sarebbe chiedere aiuto nel [canale Discord Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

::: danger

Se hai fatto una cosa QUALUNQUE tra le seguenti:

- [Cambiato la regionalità](region-changing) della console
- Installato una tastiera personalizzata
- Installato un menu HOME personalizzato (e _non_ un tema personalizzato)
- Cambiato manualmente la chiave di crittografia (`movable.sed`) della console
- Rimosso il ban alla console

disinstallare il CFW <u>**BRICKERÀ LA TUA CONSOLE**</u>. In questi casi, [ripristina da un backup pulito della NAND](godmode9-usage#restoring-a-nand-backup) prima di continuare.

:::

::: warning

Queste istruzioni funzioneranno solo su console con una versione di Luma3DS uguale o superiore a 8.0. Se si dispone di una versione precedente di Luma, è necessario aggiornare l'installazione prima di seguire queste istruzioni. Segui [questa pagina](checking-for-cfw) per trovare le istruzioni per l'aggiornamento.

:::

## Cosa serve

- L'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (il file `.zip` di Luma3DS)
- L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)
- L'ultima versione di [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
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

### Sezione II - Test Modalità DS

Lo scopo di questa sezione è verificare se le applicazioni integrate in modalità DS continueranno a funzionare dopo la rimozione del CFW. Se salti questa parte, la modalità DS o le sue funzionalità potrebbero rimanere inaccessibili finché non avrai reinstallato un CFW.

#### Test Impostazioni di collegamento DS

1. Accendi la tua console
2. Avvia le Impostazioni di sistema sulla tua console
3. Vai su `Impostazioni Internet` -> `Connessioni Nintendo DS`, quindi seleziona OK
4. Dovrebbe avviarsi il menu Configurazione Nintendo Wi-Fi Connection
   - Se la console visualizza la versione giapponese di Flipnote Studio, uno schermo nero o un messaggio di errore, il test è fallito
5. Spegni la tua console

#### Test Modalità download DS

1. Accendi la tua console
2. Avvia l'applicazione "Modalità download" (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Seleziona "Nintendo DS"
4. Se la console ora mostra la scritta "Scarica software tramite il download DS.", il test ha avuto successo
   - Se la console visualizza la versione giapponese di Flipnote Studio, uno schermo nero o un messaggio di errore, il test è fallito
5. Spegni la tua console

::: warning

Se uno di questi test non è riuscito, la modalità DS, la Modalità download DS e/o le impostazioni di collegamento DS potrebbero essere inaccessibili al termine della rimozione del CFW! Dovresti [ripristinare la modalità DS](troubleshooting-post-install) prima di continuare.

:::

### Sezione III - Test di sicurezza

Lo scopo di questa sezione è quello di verificare che la console si avvii e che le funzioni di sistema critiche, come le Impostazioni della console e la tastiera, funzioneranno dopo la rimozione del CFW. **Se salti questa sezione, potresti BRICKARE la tua console!**

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Se ti viene richiesto di creare un backup dei file essenziali, premi (A) per accettare, e al termine di nuovo (A) per proseguire
3. Se ti viene chiesto di reimpostare la data e l'ora dell'RTC, premi (A) per farlo, poi imposta la data e l'ora, infine premi (A) per continuare
   - Tieni presente che in tal caso dovrai anche reimpostare data ed ora anche nelle Impostazioni della Console al termine della guida
4. Premi il pulsante HOME per far apparire il menu delle azioni
5. Seleziona "Scripts..."
6. Seleziona "safety_test"
7. Leggi il testo a schermo e premi (A) per continuare
8. Dovrebbe avviarsi il normale menu HOME del 3DS (i temi custom non sono rilevanti in questo momento). In tal caso, prosegui con le istruzioni
   - Se non si avvia il normale menu HOME del 3DS (schermata nera, schermata di errore, ecc.), disinstallare il CFW **BRICKERÀ LA TUA CONSOLE!**
9. Avvia le Impostazioni di sistema sulla tua console
   - Se la console si blocca, il test è fallito
10. Seleziona "Impostazioni generali"
11. Seleziona "Profilo"
12. Seleziona "Nickname"
13. Se puoi inserire un nuovo nome utente, il test ha avuto successo
    - Se la tastiera non viene visualizzata, la schermata rimane ferma o la console si blocca, il test è fallito
14. Spegni la tua console

::: danger

Se NON si avvia il normale menu HOME 3DS, le Impostazioni della console e/o la tastiera sono inaccessibili, **NON PROSEGUIRE con queste istruzioni**! Entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp) (in Inglese) per richiedere assistenza.

:::

### Sezione IV - Backup della NAND

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
2. Premi il pulsante HOME per far apparire il menu delle azioni
3. Seleziona "Scripts..."
4. Seleziona "GM9Megascript"
5. Seleziona "Backup Options"
6. Seleziona "SysNAND Backup"
7. Premi (A) per confermare
   - Questo passaggio richiederà un po' di tempo
   - Se si verifica un errore, assicurati di avere nella scheda SD almeno 1.3GB liberi
8. Premi (B) per ritornare al menu principale
9. Seleziona “Exit”
10. Premi il pulsante HOME per far apparire il menu delle azioni
11. Seleziona "Poweroff system" per spegnere la console

### Sezione V - Rimozione di contenuti illegittimi

::: warning

Questa sezione rimuoverà contenuti illegittimi, come homebrew e backup di giochi. Se hai dati di salvataggio che desideri mantenere, eseguine il backup con un gestore di salvataggi prima di continuare!

:::

1. Accendi la tua console
2. Avvia le Impostazioni di sistema sulla tua console
3. Apri Gestione dati -> Nintendo 3DS -> Software
4. In questa lista di software, elimina qualunque contenuto non Nintendo che hai installato usando un CFW
   - Sono compresi programmi comuni come FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, e altri software, compresi giochi e titoli che _non_ hai installato tramite eShop
5. Entra in `Gestione dati` -> `DSiWare`
6. In questa lista di software, elimina qualunque contenuto non Nintendo che hai installato usando un CFW
   - Sono compresi software come TWiLightMenu++, e tutti i giochi e i titoli che _non_ hai installato tramite eShop
   - La mancata rimozione di tutti i software relativi al CFW dalle sezioni 3DS e DSiWare prima della disinstallazione del CFW potrebbe dare problemi all'accesso del menu Gestione dati dopo la sua disinstallazione, il che rendererà difficile reinstallare il CFW in futuro
7. Esci da Impostazioni della console
8. Avvia l'applicazione "Modalità download" (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Attendi finché non vedrai i due pulsanti
10. Premi simultaneamente i pulsanti (L) + (Giù) + (Select) per aprire il menu di Rosalina
11. Seleziona "Miscellaneous options"
12. Seleziona "Switch the hb. title to the current app."
13. Premi (B) per continuare
14. Premi (B) per tornare al menu principale di Rosalina
15. Premi (B) per uscire dal menu di Rosalina
16. Premi il pulsante HOME, quindi chiudi l'applicazione "Modalità download"
17. Avvia l'applicazione "Modalità download" (![](/images/download-play-icon.png){height="24px" width="24px"})
18. La console dovrebbe ora avviare l'Homebrew Launcher
19. Avvia DSiWare Uninstaller dalla lista degli homebrew disponibili
20. Segui le istruzioni e permetti al programma di disinstallare
21. Al termine, esci dall'Homebrew Launcher e spegni la tua console

### Sezione VI - Formattare la console

Questa sezione garantirà che tutti i ticket illegittimi vengano rimossi, consentendo all'eShop di funzionare normalmente. Verranno rimossi tutti i contenuti del 3DS e verrà fatto log out dal tuo NNID. Tieni presente che la chiave di cifratura della tua console verrà ricreata, per cui qualunque dato preesistente diventerà inaccessibile, anche se manterrai un backup della tua scheda SD.

1. Accendi la tua console
2. Avvia le Impostazioni di sistema sulla tua console
3. Vai su Impostazioni generali -> procedi fino all'ultima pagina -> Formattazione
4. Segui le istruzioni per formattare il tuo 3DS

### Sezione VII - Avviare lo script di rimozione

::: warning

Questa è la tua ultima occasione per verificare che tutti i controlli di sicurezza precedentemente indicati siano stati seguiti! Assicurati di aver seguito tutte le sezioni di questa pagina, **in particolare** la `Sezione III - Test di Sicurezza`, prima di continuare.

:::

::: danger

Se stai rimuovendo il CFW perché:

- Vuoi reinstallarlo
- Vuoi cambiare la tua scheda SD
- Hai perso la tua scheda SD, o si è corrotta
- Uno dei tuoi giochi non funziona correttamente
- Una delle applicazioni di sistema non funziona correttamente
- La tua console non riesce ad avviare il menu HOME

<u>**FERMATI!!!**</u> Disinstallare il custom firmware è un rischio non necessario che nel migliore dei casi ti farà perdere tempo e nel peggiore <u>**BRICKARE**</u> la tua console. Un'idea migliore sarebbe chiedere aiuto nel [canale Discord Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
   - Se invece vedi il chainloader di Luma3DS, usa il D-Pad e il pulsante (A) per selezionare GodMode9
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
