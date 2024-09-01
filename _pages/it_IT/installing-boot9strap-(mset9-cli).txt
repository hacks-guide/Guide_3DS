---
title: "Installazione di boot9strap (MSET9 CLI)"
---

{% include toc title="Indice" %}

{% capture technical_info %}
<summary><em>Dettagli Tecnici (opzionale)</em></summary>
[MSET9](https://github.com/zoogie/MSET9) è un exploit per l'applicazione "Impostazioni della console" sviluppata da [zoogie](https://github.com/zoogie). Sfrutta una falla per cui l'ID1 (la seconda cartella a 32 caratteri all'interno di Nintendo 3DS, all'interno di ID0) può essere *qualsiasi* nome a condizione che sia lungo 32 caratteri. L'esecuzione di una sequenza specifica di azioni determina nella console l'esecuzione delle istruzioni codificate nel nome della cartella ID1, che può essere utilizzato per garantire pieno controllo del 3DS.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Note di Compatibilità

Questa pagina richiede un computer che esegue Windows, Linux o macOS. Se hai un telefono/tablet Android o un Chromebook, segui invece [Installazione di boot9strap (MSET9 Play Store)](installing-boot9strap-(mset9-play-store)). Se non hai accesso a nessuno di questi dispositivi, dovrai usare un [exploit alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).
{: .notice--warning}

### Cosa serve

* L'ultima versione di [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
* Qualsiasi versione 3.x di [Python](https://www.python.org/downloads/) **installata sul tuo computer**
    + Se sei su Linux o su macOS, probabilmente hai già Python 3. Controlla aprendo una finestra del terminale e inserendo `python3 -V`. Se il comando restituisce un numero di versione, funzionerà per questa guida.

### Istruzioni

In questa pagina eseguirai lo script di MSET9, che viene utilizzato per attivare MSET9. Durante l'esecuzione dello script i dati utente scompariranno temporaneamente, ma torneranno al completamento di questa pagina. Se ricevi un errore durante l'esecuzione dello script, puoi probabilmente trovarne la soluzione alla pagina [Risoluzione dei problemi](troubleshooting#installing-boot9strap-mset9).
{: .notice--info}

#### Sezione I - Preparazione

In questa sezione preparerai l'exploit MSET9 creando **temporaneamente** un nuovo profilo per il menu HOME senza dati utente, configurandolo con i dati minimi necessari per l'esecuzione di MSET9. I tuoi dati dati utente attuali scompariranno, ma torneranno al termine di questa pagina.

1. Inserisci la scheda SD nel tuo computer
1. Copia tutto il contenuto dell'archivio `.zip` di MSET9 nella directory principale della tua scheda SD, sovrascrivendo tutti i file esistenti

    ![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
    {: .notice--info}

1. Esegui lo script di MSET9:
{% capture mset9-chorus %}
    + **Windows**: Fai doppio click su `MSET9-Windows.bat`
    + **macOS**: Fai doppio-click su `MSET9-macOS.command` e inserisci la tua password se richiesto
    + **Linux**: apri una finestra del terminale, `cd` nella directory principale della tua scheda SD, quindi digita `python3 mset9.py` e premi Invio
{% endcapture %}
    {{ mset9-chorus }}

    ![Image: MSET9 setup](/images/screenshots/mset9/mset9-select.png)
    {: .notice--info}

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
    + La finestra dovrebbe cambiare in questo:

    ![Image: MSET9 setup](/images/screenshots/mset9/mset9-setup-notcreated.png)
    {: .notice--info}

    + Assicurarsi che siano visualizzati il modello di console e la versione corretti
1. Digita `1`, quindi premi Invio per iniziare il processo di creazione dell'ID1 di MSET9
1. Dopo aver letto il disclaimer, digita di nuovo `1` e premi Invio per accettarlo
    + Se ottieni un errore, controlla la [Risoluzione dei problemi](troubleshooting#installing-boot9strap-mset9), quindi riprova
1. Se vedi il messaggio "Created hacked ID1.", premi Invio per chiudere lo script di MSET9
    + Il tuo 3DS sembrerà non avere dati / nessuna applicazione installata dall'utente nel menu HOME. **È normale.** I tuoi dati saranno ripristinati in un secondo momento
1. Reinserisci la scheda SD nella tua console
1. Accendi la tua console
1. Avvia il Centro di creazione Mii
1. Attendi che la console raggiunga la schermata [Benvenuto al Centro di creazione Mii](/images/screenshots/mset9/mii-welcome.png), quindi esci per tornare al menu HOME
    + Potresti vedere [questa schermata](/images/screenshots/mset9/mii-extdata.png), che indica che i dati necessari sono stati creati
    + Se raggiungi la [normale](/images/screenshots/mset9/mii-existing.png), schermata del Centro di creazione Mii vuol dire che i dati esistono già. Esci dal Centro di creazione Mii e torna al menu HOME
1. Avvia le Impostazioni della console e vai su `Gestione dati` -> `Nintendo 3DS` -> `Software` -> Reset ([immagine](/images/screenshots/database-reset.jpg))
    + Non verranno cancellati i tuoi dati
1. Spegni la console premendo il pulsante di accensione, quindi tocca "Spegni" sullo schermo inferiore
1. Inserisci la scheda SD nel tuo computer
1. Esegui lo script di MSET9:

    {{ mset9-chorus }}

1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
    + La finestra dovrebbe mostrare questo e visualizzare `Ready`:

    ![Image: MSET9 setup](/images/screenshots/mset9/mset9-ready.png)
    {: .notice--info}

    + Se la finestra dice [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
        + Digita `2`, quindi premi Invio per controllare lo stato di MSET9 e seguire le indicazioni
        + Una volta risolto il problema, torna alla Sezione I Passo 14
        + Per ulteriori informazioni, consulta la [guida per risolvere i problemi](troubleshooting#installing-boot9strap-mset9)
1. Digita `0`, quindi premi Invio per chiudere lo script
1. Reinserisci la scheda SD nella tua console

#### Sezione II - MSET9

In questa sezione attiverai MSET9 per avviare SafeB9SInstaller (l'installer del custom firmware).

Queste istruzioni vanno eseguite **ALLA LETTERA**, quindi ricontrolla TUTTO quello che farai per evitare errori!
{: .notice--danger}

1. Accendi la tua console, assicurandoti che le Impostazioni della console siano selezionate
    + Se le Impostazioni della console non sono selezionate, **[seleziona](/images/screenshots/mset9/hover-settings.png)** l'icona Impostazioni della console usando il D-Pad, spegni la tua console, quindi riaccendila
1. Premi (A) per avviare le Impostazioni della console
1. Entra in `Gestione dati` -> `Nintendo 3DS` -> `Dati aggiuntivi` ([immagine](/images/screenshots/bb3/settings-extdata.png))
1. **Non premere alcun pulsante e non toccare lo schermo**
1. **Con la console ANCORA ACCESA e senza premere alcun pulsante o toccare lo schermo**, rimuovi la tua scheda SD dalla console
    + Il menu si aggiornerà e dirà che non è presente alcuna scheda SD
1. Inserisci la scheda SD nel tuo computer
1. Esegui lo script di MSET9:
    {{ mset9-chorus }}
1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
1. Nella finestra di MSET9, premi `3`, quindi premi Invio per iniettare MSET9
    + Dovresti vedere "MSET9 successfully injected!"
1. Premi Invio per chiudere lo script di MSET9
1. Reinserisci la scheda SD nella console **senza premere alcun pulsante o toccare lo schermo**
1. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller 
    + Se vedi una schermata rossa o se la console si blocca ad una schermata di caricamento, [segui questa guida per risolvere il problema](troubleshooting#installing-boot9strap-mset9)

#### Sezione III - Installazione di boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

#### Sezione IV - Disinstallare MSET9

In questa sezione rimuoverai MSET9 per evitare ulteriori problemi e per ripristinare i tuoi dati utente (giochi, temi, ecc.). (Questo non rimuoverà il custom firmware che hai appena installato.)

NON saltare questa sezione! Se lo salti, le applicazioni potrebbero inaspettatamente crashare e riscontrerai errori nella pagina successiva!
{: .notice--danger}

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Esegui lo script di MSET9:
    {{ mset9-chorus }}
1. Digita il numero corrispondente al modello di console e alla versione, quindi premi Invio
    + Lo stato attuale dovrebbe visualizzare [Injected](/images/screenshots/mset9/mset9-injected.png)
    + Se hai già rimosso il file scatenante (o non l'hai mai iniettato), lo stato attuale mostrerà [Ready](/images/screenshots/mset9/mset9-ready.png), vai al Passo 6
1. Digita `4`, quindi premi Invio per rimuovere il file
    + Dovresti vedere "Removed trigger file."
1. Digita `5`, quindi premi Invio per rimuovere MSET9
    + Dovresti vedere "Successfully removed MSET9!"
1. Premi Invio per chiudere lo script di MSET9

{% include_relative include/luma3ds-installed-note.txt %}
___

Hai seguito la Sezione IV (Disinstallare MSET9)? Quella sezione è OBBLIGATORIA!
{: .notice--danger}

### Prosegui con il [Completamento dell'installazione](finalizing-setup)
{: .notice--primary}
