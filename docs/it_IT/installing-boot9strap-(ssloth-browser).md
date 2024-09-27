# Installazione di boot9strap (SSLoth-Browser)

:::details Technical Details (optional)

Per sfruttare l'applicazione Browser Internet dobbiamo bypassare il controllo della versione di sistema che questo effettua, controllo progettato per non consentire l'uso del browser senza aver prima aggiornato all'ultima versione di sistema.

È disponibile un server proxy pubblico che, con l'aiuto dell'exploit SSLoth, può bypassare questo controllo.

Una volta che il bypass è attivo, viene resa accessibile una pagina web con un exploit che farà il resto del lavoro.

Per dettagli tecnici sugli exploit che utilizzerai in questa pagina, leggi [qui](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) e [qui](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Compatibility Notes

SSLoth consente agli utenti alla versione di sistema 11.13.0 e precedenti di bypassare il controllo sulla versione del browser, permettendo l'uso di new-browserhax o old-browserhax (compatibile con tutte le versioni da 11.4.0 a 11.13.0 di ogni regionalità), che può quindi essere utilizzato in combinazione con universal-otherapp.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

In questa sezione copierai i file necessari per attivare sia browserhax che universal-otherapp.

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia il file `otherapp.bin` nella directory principale della tua scheda SD e rinominalo in `arm11code.bin`
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
   - If you do not see the `.bin` extension, do not add it to the end of the filename
4. Copia i file `boot.firm` e `boot.3dsx` dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD
5. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
6. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
7. Copia il file `SafeB9SInstaller.bin` dall'archivio `.zip` di SafeB9SInstaller nella directory principale della tua scheda SD
8. Reinserisci la scheda SD nella tua console
9. Accendi la tua console

### Section II - SSLoth

In questa sezione cambierai le impostazioni di collegamento ad Internet per utilizzare una rete proxy progettata per aggirare il controllo della versione del browser, permettendo al browser di funzionare senza un aggiornamento di sistema. Questo ti permetterà di accedere alla pagina web dell'exploit del browser nella prossima sezione.

<!--@include: ./_include/addproxy.md -->

1. Premi "Indietro" due volte, poi "Chiudi" per tornare al menu HOME

### Section III - Launching SafeB9SInstaller

In questa sezione visiterai la pagina web dell'exploit del browser, che userà universal-otherapp per avviare il programma di installazione di boot9strap (custom firmware).

1. Nel menu HOME, premi contemporaneamente i pulsanti dorsali L e R per avviare la fotocamera
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/nbhax/`)
2. Tocca il pulsante Codice QR e scansiona [questo codice QR](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L)
   - If you get a crash or an error code, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)
   - If you get a security certificate warning, press (A) to allow the connection
3. Tocca il pulsante "PROCEED TO HAXX"
4. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
   - If you get an error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)

### Section IV - Installing boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
