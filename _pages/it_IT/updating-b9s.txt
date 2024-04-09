---
title: "Aggiornare B9S"
---

{% include toc title="Indice" %}

### Lettura necessaria

Questa pagina spiega come aggiornare la propria installazione di boot9strap all'ultima versione.

### Cosa serve

* L'ultima versione di [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download diretto)
* L'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download diretto)
* L'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (il file `.zip` di Luma3DS)

### Istruzioni

#### Sezione I - Preparazione

Se durante questa sezione ti verrà chiesto di sovrascrivere dei file sulla tua scheda SD, conferma sempre la scelta.
{: .notice--info}

1. Inserisci la scheda SD nel tuo computer
1. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
1. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
1. Copia il file `SafeB9SInstaller.firm` dall'archivio `.zip` di SafeB9SInstaller nella directory principale della tua scheda SD e rinominalo in `boot.firm`
1. Reinserisci la scheda SD nella tua console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Sezione II - Installazione di boot9strap

1. Accendi la tua console
    + SafeB9SInstaller dovrebbe avviarsi automaticamente
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Sezione III - Aggiornare Luma3DS

1. Inserisci la scheda SD nel tuo computer
1. Copia i file `boot.firm` e `boot.3dsx` dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD, sostituendo il file esistente
1. Reinserisci la scheda SD nella tua console
1. Accendi la tua console
1. Se la tua console si è avviata nel menu di configurazione di Luma3DS, premi (Start) per salvare e riavviare
    + Il menu di configurazione di Luma3DS contiene le impostazioni per il custom firmware Luma3DS. Molte di queste impostazioni possono essere utili per la personalizzazione o per debug
    + Ai fini di questa guida, queste impostazioni rimarranno sui valori predefiniti

___

### Prosegui con il [Completamento dell'installazione](finalizing-setup)
{: .notice--primary}
