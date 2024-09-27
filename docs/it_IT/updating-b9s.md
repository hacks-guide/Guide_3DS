# Updating B9S

## Required Reading

Questa pagina spiega come aggiornare la propria installazione di boot9strap all'ultima versione.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

::: info

Se durante questa sezione ti verrà chiesto di sovrascrivere dei file sulla tua scheda SD, conferma sempre la scelta.

:::

1. Inserisci la scheda SD nel tuo computer
2. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
3. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
4. Copia il file `SafeB9SInstaller.firm` dall'archivio `.zip` di SafeB9SInstaller nella directory principale della tua scheda SD e rinominalo in `boot.firm`
5. Reinserisci la scheda SD nella tua console

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Section II - Installing boot9strap

1. Accendi la tua console
   - This should automatically launch SafeB9SInstaller
2. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
3. Una volta completato, forza lo spegnimento della console tenendo premuto il tasto POWER
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. Inserisci la scheda SD nel tuo computer
2. Copia i file `boot.firm` e `boot.3dsx` dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD, sostituendo il file esistente
3. Reinserisci la scheda SD nella tua console
4. Accendi la tua console
5. Se la tua console si è avviata nel menu di configurazione di Luma3DS, premi (Start) per salvare e riavviare
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Molte di queste impostazioni possono essere utili per la personalizzazione o per debug
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
