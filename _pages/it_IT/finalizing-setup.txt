---
title: "Completamento dell'installazione"
---

{% include toc title="Indice" %}

### Lettura necessaria

Il file `boot.firm` è il file avviato da boot9strap stesso al termine del caricamento dalla NAND. In questo caso, stiamo usando Luma3DS di [LumaTeam](https://github.com/LumaTeam/) per modificare la console, consentendogli di eseguire software homebrew.

In questa pagina realizzeremo backup di file di sistema critici e installeremo i alcuni programmi homebrew. La maggior parte di questi passaggi sarà automatizzata utilizzando uno script che verrà eseguito sulla tua console.

{% capture notice-6 %}
Lo script installerà le seguenti applicazioni:

+  **[FBI](https://github.com/lifehackerhansol/FBI)** **(installa applicazioni in formato CIA)*
+  **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** *(avvia l'Homebrew Launcher)*
+  **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** *(installa temi personalizzati)*
+  **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** *(salva e ripristina file di salvataggio per giochi 3DS e DS)*
+  **[ftpd](https://github.com/mtheall/ftpd)** *(accede alla scheda SD del tuo 3DS via wireless)*
+  **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** *(un app store per applicazioni homebrew per scaricare homebrew dal 3DS via Wi-Fi)*
+  **[GodMode9](https://github.com/d0k3/GodMode9)** *(strumento multiuso per gestire la NAND e le schede di gioco)*

Se non desideri alcune di queste applicazioni, puoi rimuoverle al termine di questa pagina entrando in Impostazioni della console -> Gestione dati -> Nintendo 3DS -> Software. (GodMode9 non può essere rimosso in questa maniera, ed è generalmente richiesto per altre funzionalità.)
{% endcapture %}
<div class="notice--info">{{ notice-6 | markdownify }}</div>

### Note di Compatibilità

Se il tuo **New 3DS** era alla versione del software 2.1.0 prima di seguire questa guida, dovresti [ripristinare il tuo backup NAND](godmode9-usage#restoring-a-nand-backup) prima di continuare. Questo probabilmente non ti riguarda a meno che non hai già seguito questa guida nel 2017.
{: .notice--warning}

Se la tua precedente installazione CFW era basata su EmuNAND e desideri spostare il contenuto di EmuNAND/RedNAND in SysNAND, devi [Spostare l'EmuNAND](move-emunand) prima di seguire questa pagina. Se non sai cosa sia l'EmuNAND, allora non ti serve.
{: .notice--info}

### Cosa serve

* [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (download diretto)
* [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (download diretto)

### Istruzioni

#### Sezione I - Preparazione

In questa sezione, copierai i file necessari per seguire le rimanenti istruzioni in questa pagina.

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Copia il file `finalize.romfs` nella directory principale della tua scheda SD
1. Apri la cartella `luma` sulla tua scheda SD e crea all'interno una cartella chiamata `payloads`, se non esiste già
1. Copia il file `x_finalize_helper.firm` nella cartella `payloads`
1. Reinserisci la scheda SD nella tua console

Il seguente screenshot indica la struttura minima che la scheda SD deve avere per proseguire in questa pagina. Potresti avere file o cartelle ulteriori nella tua scheda SD, a seconda della tua precedente configurazione o del metodo che hai seguito.

![]({{ "/images/screenshots/finalizing-root-layout.png" | absolute_url }})
{: .notice--info}

![]({{ "/images/screenshots/finalizing-luma-payloads.png" | absolute_url }})
{: .notice--info}

#### Sezione II - Aggiornare il Sistema

In questa sezione, aggiornerai il tuo sistema all'ultima versione, tranquillamente fattibile con il custom firmware.

{% include_relative include/sysupdate.txt cfw="true" %}

#### Sezione III - Installazione di RTC e DSP

In questa sezione, sincronizzerai l'orologio interno del tuo 3DS con l'ora reale e scaricherai il firmware audio (necessario per permettere ad alcuni software homebrew di usare correttamente i suoni).

1. Premi simultaneamente i pulsanti (L) + (Giù) + (Select) per aprire il menu di Rosalina
    + Se uno di questi pulsanti è rotto, scarica il file [config.ini]({{ base_path }}/assets/config.ini){:download="config.ini"} e mettilo nella tua cartella `luma`, sostituendo il file preesistente. Questo cambierà la combinazione di tasti del menù Rosalina in (X) + (Y)
1. Seleziona "Miscellaneous options"
1. Seleziona "Dump DSP firmware"
1. Premi (B) per continuare
1. Seleziona "Nullify user time offset"
1. Premi (B) per continuare
1. Premi (B) per tornare al menu principale di Rosalina
1. Premi (B) per uscire dal menu di Rosalina

#### Sezione IV - Installazione dello Script

In questa sezione, userai una serie di script per automatizzare l'installazione di homebrew, la pulizia della scheda SD e il backup dei file di sistema.

1. Spegni la tua console
1. Premi (X) e accendi la console continuando a tenerlo premuto. Questo avvierà il supporto al Completamento dell'installazione
    + Se si avvia nel menu HOME, la cartella `payloads` potrebbe essere scritta in modo errato o trovarsi nella posizione sbagliata
    + Se riscontri un errore, consulta la [guida per risolvere i problemi](troubleshooting#finalizing-setup)
1. Se il supporto ha avuto successo, la console si avvierà in GodMode9
    + Da qui in avanti sarà possibile accedere a GodMode9 tenendo premuto START all'accensione della console
1. Se ti viene richiesto di creare un backup dei file essenziali, premi (A) per accettare, e al termine di nuovo (A) per proseguire
1. Se ti viene chiesto di reimpostare la data e l'ora dell'RTC, premi (A) per farlo, poi imposta la data e l'ora, infine premi (A) per continuare
1. Premi il pulsante HOME per far apparire il menu delle azioni
1. Seleziona "Scripts..."
1. Seleziona "finalize"
1. Segui le istruzioni dello script, rispondendo alle domande che ti vengono poste
    + Se riscontri un errore, segui le istruzioni riportate nel messaggio di errore o consulta la pagina [Risoluzione dei problemi](troubleshooting#finalizing-setup)
1. Quando lo script mostrerà "Setup complete!", premi (A) per spegnere la console
    + Se NON vedi il messaggio "Setup complete!", lo script non ha avuto successo e dovrai ripetere questa sezione dal Punto 3
1. Inserisci la scheda SD nel tuo computer
1. Copia la cartella `/gm9/backups/` in una posizione sicura sul tuo computer
    + Questa cartella contiene backup dei file critici e dovrebbe essere salvata in più posizioni (es. in cloud) se possibile
    + I due file SysNAND sono il backup della NAND e possono essere utilizzati per ripristinare la console ad uno stato funzionante se viene resa inutilizzabile con un errore software
    + Il file `essential.exefs` contiene i file univoci di sistema della tua console e può essere utilizzato per recuperare i tuoi dati in caso di guasto hardware
1. Se li hai ancora, elimina i due file `SysNAND` dalla cartella `/gm9/backups/` dalla tua scheda SD
    + Il file `essential.exefs` è piccolo e può essere tenuto sulla tua scheda SD per facilità di accesso

___

Hai finito! Il custom firmware nella tua console è stato completamente configurato.
{: .notice--success}

Stai cercando di capire cosa fare con la tua console appena modificata? Visita [la nostra wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!
{: .notice--info}

### Informazioni e Note

{% capture notice-6 %}
Ecco alcune combinazioni di tasti che dovresti conoscere:

+ Tenere premuto (Select) all'accensione della console avvierà il menu di configurazione di Luma3DS.
+ Tenere premuto (Start) all'accensione avvierà GodMode9 o, se hai più payload in `/luma/payloads/`, il chainloader Luma3DS.
+ Per impostazione predefinita, premere (L) + (Giù) + (Select) in modalità 3DS aprirà il menu di Rosalina, dove è possibile controllare le informazioni di sistema, catturare screenshot, abilitare i trucchi e altro ancora. Si può modificare da Rosalina stesso.
+ Tenendo premuto (Start) + (Select) + (X) all'avvio, il LED di notifica mostrerà un colore a scopo di debug. Consulta la lista nel [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4).
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

Per informazioni sull'utilizzo delle varie funzionalità di GodMode9, consulta le pagine [Usare GodMode9](godmode9-usage) e [Dump di titoli e schede di gioco](dumping-titles-and-game-cartridges).
{: .notice--info}
