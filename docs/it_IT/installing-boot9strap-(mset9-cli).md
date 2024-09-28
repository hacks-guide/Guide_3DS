# Installazione di boot9strap (MSET9 CLI)

:::details Dettagli tecnici (opzionale)

[MSET9](https://github.com/zoogie/MSET9) è un exploit per l'applicazione "Impostazioni della console" sviluppata da [zoogie](https://github.com/zoogie). Sfrutta una falla per cui l'ID1 (la seconda cartella a 32 caratteri all'interno di Nintendo 3DS, all'interno di ID0) può essere _qualsiasi_ nome a condizione che sia lungo 32 caratteri. L'esecuzione di una sequenza specifica di azioni determina nella console l'esecuzione delle istruzioni codificate nel nome della cartella ID1, che può essere utilizzato per garantire pieno controllo del 3DS.

:::

## Note di compatibilità

::: warning

Questa pagina richiede un computer che esegue Windows, Linux o macOS. Se hai un telefono/tablet Android o un Chromebook, segui invece [Installazione di boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)). Se non hai accesso a nessuno di questi dispositivi, dovrai usare un [exploit alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

## Cosa serve

- L'ultima versione di [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
- Qualsiasi versione 3.x di [Python](https://www.python.org/downloads/) **installata sul tuo computer**
  - Se sei su Linux o su macOS, probabilmente hai già Python 3. Controlla aprendo una finestra del terminale e inserendo `python3 -V`. Se il comando restituisce un numero di versione, funzionerà per questa guida.

## Istruzioni

::: info

In questa pagina eseguirai lo script di MSET9, che viene utilizzato per attivare MSET9. Durante l'esecuzione dello script i dati utente scompariranno temporaneamente, ma torneranno al completamento di questa pagina. Se ricevi un errore durante l'esecuzione dello script, puoi probabilmente trovarne la soluzione alla pagina [Risoluzione dei problemi](troubleshooting#installing-boot9strap-mset9).

:::

### Sezione I - Preparazione

In questa sezione preparerai l'exploit MSET9 creando **temporaneamente** un nuovo profilo per il menu HOME senza dati utente, configurandolo con i dati minimi necessari per l'esecuzione di MSET9. I tuoi dati dati utente attuali scompariranno, ma torneranno al termine di questa pagina.

1. Inserisci la scheda SD nel tuo computer
2. Copia tutto il contenuto dell'archivio `.zip` di MSET9 nella directory principale della tua scheda SD, sovrascrivendo tutti i file esistenti

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout.png)

   :::

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio

   - La finestra dovrebbe cambiare in questo:

   ::: info

   ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Assicurarsi che siano visualizzati il modello di console e la versione corretti
2. Digita `1`, quindi premi Invio per iniziare il processo di creazione dell'ID1 di MSET9
3. Dopo aver letto il disclaimer, digita di nuovo `1` e premi Invio per accettarlo
   - Se ottieni un errore, controlla la pagina [Risoluzione dei problemi](troubleshooting#installing-boot9strap-mset9), quindi riprova
4. Se vedi il messaggio "Created hacked ID1.", premi Invio per chiudere lo script di MSET9
   - Il tuo 3DS sembrerà non avere dati / nessuna applicazione installata dall'utente nel menu HOME. **È normale.** I tuoi dati saranno ripristinati in un secondo momento
5. Reinserisci la scheda SD nella tua console
6. Accendi la tua console
7. Avvia il Centro di creazione Mii
8. Attendi che la console raggiunga la schermata [Benvenuto al Centro di creazione Mii](/images/screenshots/mset9/mii-welcome.png), quindi esci per tornare al menu HOME
   - Potresti vedere [questa schermata](/images/screenshots/mset9/mii-extdata.png), che indica che i dati necessari sono stati creati
   - Se raggiungi la [normale](/images/screenshots/mset9/mii-existing.png) schermata del Centro di creazione Mii vuol dire che i dati esistono già. Esci dal Centro di creazione Mii e torna al menu HOME
9. Avvia le Impostazioni della console e vai su `Gestione dati` -> `Nintendo 3DS` -> `Software` -> Reset ([immagine](/images/screenshots/database-reset.jpg))
   - Non verranno cancellati i tuoi dati
10. Spegni la console premendo il pulsante di accensione, quindi tocca "Spegni" sullo schermo inferiore
11. Inserisci la scheda SD nel tuo computer

<!--@include: ./_include/mset9-chorus.md -->

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio

   - La finestra dovrebbe mostrare questo e visualizzare `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - Se la finestra dice [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Digita `2`, quindi premi Invio per controllare lo stato di MSET9 e seguire le indicazioni
     - Una volta risolto il problema, torna alla Sezione I Passo 14
     - Per ulteriori informazioni, consulta la pagina [Risoluzione dei problemi](troubleshooting#installing-boot9strap-mset9)
2. Digita `0`, quindi premi Invio per chiudere lo script
3. Reinserisci la scheda SD nella tua console

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
   - Il menu si aggiornerà e dirà che non è presente alcuna scheda SD
6. Inserisci la scheda SD nel tuo computer

<!--@include: ./_include/mset9-chorus.md -->

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
2. Nella finestra di MSET9, premi `3`, quindi premi Invio per iniettare MSET9
   - Dovresti vedere "MSET9 successfully injected!"
3. Premi Invio per chiudere lo script di MSET9
4. Reinserisci la scheda SD nella console **senza premere alcun pulsante o toccare lo schermo**
5. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
   - Se vedi una schermata rossa o se la console si blocca ad una schermata di caricamento, [segui questa guida per risolvere il problema](troubleshooting#installing-boot9strap-mset9)

### Sezione III - Installazione di boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - Se una sezione nella schermata inferiore ha un testo di colore rosso, e non ti viene richiesto di inserire una combinazione di tasti, [segui questa guida per risolvere i problemi](troubleshooting#issues-with-safeb9sinstaller)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

### Sezione IV - Disinstallare MSET9

In questa sezione rimuoverai MSET9 per evitare ulteriori problemi e per ripristinare i tuoi dati utente (giochi, temi, ecc.). (Questo non rimuoverà il custom firmware che hai appena installato.)

::: danger

NON saltare questa sezione! Se lo salti, le applicazioni potrebbero inaspettatamente crashare e riscontrerai errori nella pagina successiva!

:::

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer

<!--@include: ./_include/mset9-chorus.md -->

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
   - Lo stato attuale dovrebbe visualizzare [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Se hai già rimosso il file scatenante (o non l'hai mai iniettato), lo stato attuale mostrerà [Ready](/images/screenshots/mset9/mset9-ready.png), vai al Passo 6
2. Digita `4`, quindi premi Invio per rimuovere il file
   - Dovresti vedere "Removed trigger file."
3. Digita `5`, quindi premi Invio per rimuovere MSET9
   - Dovresti vedere "Successfully removed MSET9!"
4. Premi Invio per chiudere lo script di MSET9

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Hai seguito la Sezione IV (Disinstallare MSET9)? Quella sezione è OBBLIGATORIA!

:::

::: tip

Prosegui con il [Completamento dell'installazione](finalizing-setup)

:::
