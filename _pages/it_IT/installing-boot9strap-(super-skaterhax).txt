---
title: "Installazione di boot9strap (super-skaterhax)"
---

{% include toc title="Indice" %}

{% capture technical_info %}
<summary><em>Dettagli Tecnici (opzionale)</em></summary>
Per i dettagli tecnici sugli exploit che utilizzerai in questa pagina, vedi [qui](https://github.com/zoogie/super-skaterhax).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Note di Compatibilità

Super-skaterhax (quando utilizzato per avviare l'Homebrew Launcher) è compatibile con i modelli New dalla versione 11.15.0 in poi di tutte le regioni.

Le istruzioni indicate si applicano solo a New 3DS, New 3DS XL e New 2DS XL. Assicurati che la console che stai modificando sia un New 3DS, New 3DS XL, o un New 2DS XL prima di continuare.
{: .notice--warning}

### Cosa serve

* L'ultima versione di [super-skaterhax](https://github.com/zoogie/super-skaterhax/releases) (il file `.zip` della release)
* L'ultima versione di [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download diretto)
* L'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download diretto)
* L'ultima versione di [nimdsphax](https://github.com/luigoalma/nimdsphax/releases/download/v1.0/nimdsphax_v1.0.zip) (download diretto)
* L'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (il file `.zip` di Luma3DS)

#### Sezione I - Preparazione

In questa sezione copierai i file necessari per attivare sia super-skaterhax che l'Homebrew Launcher.

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Copia i file `boot.firm` e `boot.3dsx` dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD
    + La directory principale della scheda SD è la cartella della tua scheda SD in cui è possibile visualizzare la cartella Nintendo 3DS, ma non il suo interno
1. Copia tutto il contenuto della cartella per la regione e la versione della tua console (`arm11code.bin` e `browserhax_hblauncher_ropbin_payload.bin`) dall'archivio `.zip` di release_new3ds nella directory principale della tua scheda SD
1. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
1. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
1. Copia il file `SafeB9SInstaller.bin` dall'archivio `.zip` di SafeB9SInstaller nella directory principale della tua scheda SD
1. Se assente, crea una cartella chiamata `3ds` nella directory principale della tua scheda SD
    + Questa cartella mantiene le applicazioni homebrew e i loro dati; è diversa dalla cartella `Nintendo 3DS` generata automaticamente dalla console
1. Copia la cartella `nimdsphax` dall'archivio `.zip` di nimdsphax nella cartella `/3ds/` della tua scheda SD
1. Reinserisci la scheda SD nella tua console
1. Accendi la tua console

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}


#### Sezione II - super-skaterhax

In questa sezione visiterai la pagina web dell'exploit del browser, che avvierà l'Homebrew Launcher.

Se non l'hai già fatto, assicurati di avere una connessione Internet funzionante configurata sulla tua console.
{: .notice--info}

{% capture set_date %}
<summary>Se la data del tuo sistema non è corretta, questo exploit non funzionerà.<br>Segui i passaggi seguenti per impostare correttamente la data di sistema.</summary>
1. Avvia le Impostazioni di sistema sulla tua console
1. Seleziona "Impostazioni generali"
1. Entra in "Data e ora" -> "Data"
1. Tocca i pulsanti su/giù per impostare il giorno, il mese e l'anno corretti
1. Premi OK per confermare
{% endcapture %}
<details>{{ set_date | markdownify }}</details>
{: .notice--info}

1. Nel menu HOME, premi contemporaneamente i pulsanti dorsali L e R per avviare la fotocamera
    + Se non riesci ad aprire la fotocamera, apri il browser Internet e digita manualmente l'URL (`https://zoogie.github.io/web/super/` per EUR/USA/JPN, `https://zoogie.github.io/web/korea` per KOR)
1. Tocca il pulsante "codice QR" e scansiona uno dei seguenti codici QR per la regione della tua console [qui](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
    + Se visualizzi un avviso riguardo un certificato di sicurezza, premi (A) per consentire la connessione
1. Premi il pulsante (Select) per aprire la pagina dei segnalibri
    + Se il pulsante (Select) non funziona, tocca l'icona della stella nell'angolo in basso a sinistra dello schermo
1. Tocca "Aggiungi ai preferiti"
1. Premi (B) una volta per ritornare al browser
1. Premi (Start) per aprire il menu contestuale
    + Se il pulsante (Start) non funziona, tocca il pulsante con 3 linee nell'angolo in basso a destra dello schermo
1. Tocca su "Impostazioni"
1. Tocca su "Elimina cookie"
1. Premi il pulsante (A) per continuare
1. Premi (Home) per tornare al menu HOME e premi subito (A) per avviare nuovamente il browser
1. Seleziona il pulsante "GO GO!" nella schermata superiore
    + Se vengono visualizzate delle richieste, approvale tutte
    + Se la tua console si blocca con una schermata gialla, tieni premuto il pulsante POWER finché non si spegne, quindi riprova questa sezione
    + Se la tua console si blocca con una schermata rossa, tieni premuto il pulsante POWER finché non si spegne, riprova il passo 3 della Sezione II, quindi riprova questa sezione
    + Se la tua console mostra "Text" sullo schermo inferiore, hai un Old 3DS e questo exploit **non funzionerà sulla tua console**. In questo caso, dovresti usare invece [MSET9](installing-boot9strap-(mset9))
    + Se ottieni un altro errore riprova altre 5 volte, e se continua a non funzionare [segui questa guida per risolvere il problema](troubleshooting#installing-boot9strap-super-skaterhax)
1. La tua console avvierà l'Homebrew Launcher
1. Avvia nimdsphax dalla lista degli homebrew
1. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
    + Se la tua console si blocca con una schermata rossa o verde, tieni premuto il pulsante POWER finché non si spegne, quindi riprova questa sezione
    + Potrebbero volerci fino a cinque tentativi

#### Sezione III - Installazione di boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}

___

### Prosegui con il [Completamento dell'installazione](finalizing-setup)
{: .notice--primary}
