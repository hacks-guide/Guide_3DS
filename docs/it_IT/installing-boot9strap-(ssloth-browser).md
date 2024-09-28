# Installazione di boot9strap (SSLoth-Browser)

:::details Dettagli tecnici (opzionale)

Per sfruttare l'applicazione Browser Internet dobbiamo bypassare il controllo della versione di sistema che questo effettua, controllo progettato per non consentire l'uso del browser senza aver prima aggiornato all'ultima versione di sistema.

È disponibile un server proxy pubblico che, con l'aiuto dell'exploit SSLoth, può bypassare questo controllo.

Una volta che il bypass è attivo, viene resa accessibile una pagina web con un exploit che farà il resto del lavoro.

Per dettagli tecnici sugli exploit che utilizzerai in questa pagina, leggi [qui](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) e [qui](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Note di compatibilità

SSLoth consente agli utenti alla versione di sistema 11.13.0 e precedenti di bypassare il controllo sulla versione del browser, permettendo l'uso di new-browserhax o old-browserhax (compatibile con tutte le versioni da 11.4.0 a 11.13.0 di ogni regionalità), che può quindi essere utilizzato in combinazione con universal-otherapp.

## Cosa serve

- L'ultima versione di [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download diretto)
- L'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download diretto)
- L'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (il file `.zip` di Luma3DS)
- L'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Istruzioni

### Sezione I - Preparazione

In questa sezione copierai i file necessari per attivare sia browserhax che universal-otherapp.

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia il file `otherapp.bin` nella directory principale della tua scheda SD e rinominalo in `arm11code.bin`
   - La directory principale della scheda SD è la cartella della tua scheda SD in cui è possibile visualizzare la cartella Nintendo 3DS, ma non il suo interno
   - Se non vedi l'estensione `.bin`, non aggiungerla alla fine del nome del file
4. Copia tutto dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD
5. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
6. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
7. Copia il file `SafeB9SInstaller.bin` dall'archivio `.zip` di SafeB9SInstaller nella directory principale della tua scheda SD
8. Reinserisci la scheda SD nella tua console
9. Accendi la tua console

### Sezione II - SSLoth

In questa sezione cambierai le impostazioni di collegamento ad Internet per utilizzare una rete proxy progettata per aggirare il controllo della versione del browser, permettendo al browser di funzionare senza un aggiornamento di sistema. Questo ti permetterà di accedere alla pagina web dell'exploit del browser nella prossima sezione.

<!--@include: ./_include/addproxy.md -->

1. Premi "Indietro" due volte, poi "Chiudi" per tornare al menu HOME

### Sezione III - Avvio di SafeB9SInstaller

In questa sezione visiterai la pagina web dell'exploit del browser, che userà universal-otherapp per avviare il programma di installazione di boot9strap (custom firmware).

1. Nel menu HOME, premi contemporaneamente i pulsanti dorsali L e R per avviare la fotocamera
   - Se non riesci ad avviare la fotocamera, avvia il Browser Internet e raggiungi manualmente l'URL (`https://zoogie.github.io/web/nbhax/`)
2. Tocca il pulsante Codice QR e scansiona [questo codice QR](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L)
   - Se crasha o se ottieni un codice di errore, [segui questa guida per risolvere il problema](troubleshooting#installing-boot9strap-ssloth-browser)
   - Se visualizzi un avviso riguardo un certificato di sicurezza, premi (A) per consentire la connessione
3. Tocca il pulsante "PROCEED TO HAXX"
4. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
   - Se ottieni un errore, [segui questa guida per risolvere il problema](troubleshooting#installing-boot9strap-ssloth-browser)

### Sezione IV - Installazione di boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - Se una sezione nella schermata inferiore ha un testo di colore rosso, e non ti viene richiesto di inserire una combinazione di tasti, [segui questa guida per risolvere i problemi](troubleshooting#issues-with-safeb9sinstaller)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

### Sezione V - Ripristino proxy di default

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Prosegui con il [Completamento dell'installazione](finalizing-setup)

:::
