# Installazione di boot9strap (MSET9 Play Store)

:::details Dettagli tecnici (opzionale)

[MSET9](https://github.com/zoogie/MSET9) è un exploit per l'applicazione "Impostazioni della console" sviluppata da [zoogie](https://github.com/zoogie). Sfrutta una falla per cui l'ID1 (la seconda cartella a 32 caratteri all'interno di Nintendo 3DS, all'interno di ID0) può essere _qualsiasi_ nome a condizione che sia lungo 32 caratteri. L'esecuzione di una sequenza specifica di azioni determina nella console l'esecuzione delle istruzioni codificate nel nome della cartella ID1, che può essere utilizzato per garantire pieno controllo del 3DS.

:::

## Note di compatibilità

::: warning

Questa pagina richiede un telefono/tablet Android o un Chromebook. Se hai un computer che esegue Windows, macOS o Linux, segui invece [Installazione di boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)). Se non hai accesso a nessuno di questi dispositivi, dovrai usare un [exploit alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

Su telefoni/tablet Android, la versione minima di Android richiesta è 6.0 (Marshmallow).

:::

## Cosa serve

- Le seguenti applicazioni installate da Google Play Store:
    - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
    - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    - Se lo desideri, puoi anche caricare queste applicazioni via sideload
- L'ultima versione di [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (il file Release `.zip`)

## Istruzioni

### Sezione I - Preparazione

In questa sezione preparerai i dati della scheda SD necessari per attivare l'exploit MSET9.

1. Inserisci la tua scheda SD nel tuo telefono/tablet/computer

2. Copia tutto il contenuto dell'archivio Release `.zip` nella directory principale della tua scheda SD, sovrascrivendo tutti i file esistenti:

    - Avvia ZArchiver
    - Se richiesto, [consenti a ZArchiver di accedere ai file sulla tua scheda SD](/images/screenshots/mset9/zarchiver-allow.png)
    - Naviga dove si trova il file `.zip` di MSET9 Release ([probabilmente nella cartella Download](/images/screenshots/mset9/zarchiver-zip-location.png))
    - Selezionare il file Release `.zip`, quindi seleziona "Extract..." ([immagine](/images/screenshots/mset9/zarchiver-extract-1.png))
    - Vai nella tua scheda SD, quindi tocca l'icona blu della freccia verso il basso per estrarre i file nella directory principale della tua scheda SD ([immagine](/images/screenshots/mset9/zarchiver-extract-2.png))

    ::: info

    ![](/images/screenshots/mset9/mset9-root-layout-android.png)

    :::

3. Eseguire l'applicazione [MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

4. Tocca su `Select "Nintendo 3DS" Folder`, quindi vai alla cartella `Nintendo 3DS` sulla tua scheda SD ([immagine](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Una volta all'interno della cartella `Nintendo 3DS`, tocca "Use this folder", quindi "Allow" se richiesto ([immagine](/images/screenshots/mset9/select-mset9-folder-2.png))

6. Se "Setup MSET9" è [evidenziato](/images/screenshots/mset9/setup-mset9-highlighted.png), procedi al passaggio successivo
    - Se ottieni un errore, è necessario risolverlo prima di poter utilizzare MSET9. Fai riferimento alla pagina [Risoluzione dei problemi](troubleshooting-mset9)

7. Seleziona `Setup MSET9` per avviare la configurazione di MSET9

8. Dopo aver letto il disclaimer, tocca `Confirm` per accettarlo

9. Tocca la foto corrispondente al modello della tua console, e in fondo scegli la tua versione del software

10. Se appare la scritta `Hax ID1 Created`, tocca OK per continuare
    - Se ottieni un errore, controlla la pagina [Risoluzione dei problemi](troubleshooting-mset9), quindi riprova
    - Il tuo 3DS sembrerà aver perso la maggior parte dei dati, e non appariranno le applicazioni installate dall'utente nel menu HOME. È normale. I tuoi dati verranno ripristinati successivamente

11. Reinserisci la scheda SD nella tua console

12. Accendi la tua console

13. Avvia il Centro di creazione Mii

14. Attendi che la console raggiunga la schermata "Benvenuto nel Centro di creazione Mii", quindi esci dall'applicazione
    - Potresti vedere [questa schermata](/images/screenshots/mset9/mii-extdata.png), che indica che i dati necessari sono stati creati
    - Se raggiungi la schermata principale del Centro di creazione Mii, esci dall'applicazione e torna al menu HOME

15. Avvia le Impostazioni della console e vai su `Gestione dati` -> `Nintendo 3DS` -> `Software` -> Reset ([immagine](/images/screenshots/database-reset.jpg))
    - Non verranno cancellati i tuoi dati

16. Spegni la console premendo il pulsante di accensione, quindi tocca "Spegni" sullo schermo inferiore

17. Inserisci la tua scheda SD nel tuo telefono/tablet/computer

18. L'applicazione MSET9 Installer dovrebbe verificare automaticamente se hai eseguito correttamente i passaggi precedenti
    - Potrebbero volerci alcuni secondi per rilevare la scheda SD e proseguire
    - Se il controllo non viene eseguito, seleziona `Check MSET9 status` per verificarlo manualmente
    - Se ottieni un errore, controlla la pagina [Risoluzione dei problemi](troubleshooting-mset9), quindi riprova

19. Se il controllo va a buon fine, vedrai `Inject trigger file` diventare [selezionato](/images/screenshots/mset9/inject-trigger-highlighted.png) e potrai continuare al passo successivo. **Non eseguirlo ancora.** Metti da parte il tuo telefono/tablet/computer

20. Reinserisci la scheda SD nella tua console

### Sezione II - MSET9

In questa sezione attiverai MSET9 per avviare SafeB9SInstaller (l'installer del custom firmware).

::: danger

Queste istruzioni vanno eseguite **ALLA LETTERA**, quindi ricontrolla TUTTO quello che farai per evitare errori!

:::

1. Accendi la tua console, assicurandoti che le Impostazioni della console siano selezionate
    - Se le Impostazioni della console non sono selezionate, **[seleziona](/images/screenshots/mset9/hover-settings.png)** l'icona Impostazioni della console usando il D-Pad, spegni la tua console, quindi riaccendila
2. Premi (A) per avviare le Impostazioni della console
3. Entra in `Gestione dati` -> `Nintendo 3DS` -> `Dati aggiuntivi` ([immagine](/images/screenshots/bb3/settings-extdata.png))
4. **Non premere alcun pulsante e non toccare lo schermo**
5. **Con la console ANCORA ACCESA e senza premere alcun pulsante o toccare lo schermo**, rimuovi la tua scheda SD dalla console
    - Il menu si aggiornerà e dirà che non è presente alcuna scheda SD, il che è normale
6. Inserisci la tua scheda SD nel tuo telefono/tablet/computer
7. Apri l'applicazione MSET9 Installer
8. Tocca `Inject trigger file`
    - Il pulsante dovrebbe ingrigirsi e `Remove trigger file` dovrebbe diventare [selezionato](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Reinserisci la scheda SD nella console **senza premere alcun pulsante o toccare lo schermo**
10. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
    - Se vedi una schermata rossa o se la console si blocca ad una schermata di caricamento, [segui questa guida per risolvere il problema](troubleshooting-mset9)

### Sezione III - Installazione di boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
    - Se una sezione nella schermata inferiore ha un testo di colore rosso, e non ti viene richiesto di inserire una combinazione di tasti, [segui questa guida per risolvere i problemi](troubleshooting-mset9)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

### Sezione IV - Disinstallare MSET9

In questa sezione rimuoverai MSET9 per evitare problemi successivi. (Questo non rimuoverà il custom firmware che hai appena installato.)

::: danger

NON saltare questa sezione! Se lo salti, le applicazioni potrebbero inaspettatamente crashare e riscontrerai errori nella pagina successiva!

:::

1. Spegni la tua console
2. Inserisci la tua scheda SD nel tuo telefono/tablet/computer
3. Apri l'applicazione MSET9 Installer
4. Tocca "Remove MSET9\`
5. Chiudi l'applicazione MSET9 Installer

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Hai seguito la Sezione IV (Disinstallare MSET9)? Quella sezione è OBBLIGATORIA!

:::

::: tip

Prosegui con il [Completamento dell'installazione](finalizing-setup)

:::
