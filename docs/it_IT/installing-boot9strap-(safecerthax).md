# Installazione di boot9strap (safecerthax)

:::details Technical Details (optional)

:::

## Compatibility Notes

safecerthax è compatibile con tutte le console Old 3DS e Old 2DS di tutte le regioni con versioni di sistema da 1.0.0 a 11.14.0.

::: info

Questo exploit non funzionerà su New 3DS, New 3DS XL, o New 2DS XL. Assicurati che la console sia un Old 3DS, Old 3DS XL o un Old 2DS prima di andare avanti.

:::

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Hardware Button Check

In questa sezione verificherai se i pulsanti dorsali della tua console funzionano. Questo determinerà se la console è compatibile con questo metodo.

1. Accendi la tua console
2. Nel menu HOME premi contemporaneamente i pulsanti L e R
   - The camera applet should appear
3. Spegni la tua console

::: warning

Se la fotocamera NON è apparsa, non è possibile seguire questo metodo. In questo caso, utilizza invece [Installazione di boot9strap (MSET9)](installing-boot9strap-\(mset9\)).

:::

### Section II - Prep Work

In questa sezione copierai i file necessari per attivare l'exploit safecerthax.

1. Inserisci la scheda SD nel tuo computer
2. Copia i file `boot.firm` e `boot.3dsx` dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
4. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
5. Copia il file `SafeB9SInstaller.bin` dall'archivio `.zip` di SafeB9SInstaller nella directory principale della tua scheda SD
6. Reinserisci la scheda SD nella tua console
7. Accendi la tua console

### Section III - safecerthax proxy

In questa sezione modificherai le impostazioni di connessione a Internet per utilizzare una rete proxy progettata per sfruttare le falle nella funzione di Aggiornamento della tua console.

<!--@include: ./_include/addproxy.md -->

1. Spegni la tua console

### Section IV - safecerthax

In questa sezione entrerai nella Modalità Provvisoria (disponibile su tutte le console della famiglia 3DS) per attivare safecerthax e avviare l'installer di boot9strap (il custom firmware).

1. Con la console ancora spenta, tieni premuto i pulsanti (L) + (R) + (Su) + (A), dopodiché, tenendo premuti i pulsanti, accendi la console
   - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Premi "OK" per accettare l'aggiornamento
   - There is no update. Fa parte del procedimento
3. Premi "Accetto" per accettare i termini e le condizioni
4. L'aggiornamento fallirà, con codice di errore `003-1099`. Questo risultato è corretto
5. Premi "OK" per chiudere il messaggio di errore
6. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
   - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
