# Installazione di boot9strap (safecerthax)

:::details Dettagli tecnici (opzionale)

:::

## Note di compatibilità

safecerthax è compatibile con tutte le console Old 3DS e Old 2DS di tutte le regioni con versioni di sistema da 1.0.0 a 11.14.0.

::: info

Questo exploit non funzionerà su New 3DS, New 3DS XL, o New 2DS XL. Assicurati che la console sia un Old 3DS, Old 3DS XL o un Old 2DS prima di andare avanti.

:::

## Cosa serve

- L'ultima versione di [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download diretto)
- L'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download diretto)
- L'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (il file `.zip` di Luma3DS)

## Istruzioni

### Sezione I - Verifica pulsanti hardware

In questa sezione verificherai se i pulsanti dorsali della tua console funzionano. Questo determinerà se la console è compatibile con questo metodo.

1. Accendi la tua console
2. Nel menu HOME premi contemporaneamente i pulsanti L e R
   - Dovrebbe apparire l'applicazione fotocamera
3. Spegni la tua console

::: warning

Se la fotocamera NON è apparsa, non è possibile seguire questo metodo. In questo caso, utilizza invece [Installazione di boot9strap (MSET9)](installing-boot9strap-\(mset9\)).

:::

### Sezione II - Preparazione

In questa sezione copierai i file necessari per attivare l'exploit safecerthax.

1. Inserisci la scheda SD nel tuo computer
2. Copia tutto dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD
   - La directory principale della scheda SD è la cartella della tua scheda SD in cui è possibile visualizzare la cartella Nintendo 3DS, ma non il suo interno
3. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
4. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
5. Copia il file `SafeB9SInstaller.bin` dall'archivio `.zip` di SafeB9SInstaller nella directory principale della tua scheda SD
6. Reinserisci la scheda SD nella tua console
7. Accendi la tua console

### Sezione III - safecerthax proxy

In questa sezione modificherai le impostazioni di connessione a Internet per utilizzare una rete proxy progettata per sfruttare le falle nella funzione di Aggiornamento della tua console.

<!--@include: ./_include/addproxy.md -->

1. Spegni la tua console

### Sezione IV - safecerthax

In questa sezione entrerai nella Modalità Provvisoria (disponibile su tutte le console della famiglia 3DS) per attivare safecerthax e avviare l'installer di boot9strap (il custom firmware).

1. Con la console ancora spenta, tieni premuto i pulsanti (L) + (R) + (Su) + (A), dopodiché, tenendo premuti i pulsanti, accendi la console
   - Mantieni premuti i pulsanti finché la console si avvierà in Modalità Provvisoria (una specie di menu per aggiornare il sistema)
2. Premi "OK" per accettare l'aggiornamento
   - Non c'è nessun aggiornamento. Fa parte del procedimento
3. Premi "Accetto" per accettare i termini e le condizioni
4. L'aggiornamento fallirà, con codice di errore `003-1099`. Questo risultato è corretto
5. Premi "OK" per chiudere il messaggio di errore
6. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
   - Se la console si blocca o crasha, forza lo spegnimento della console, quindi ritenta questa sezione

### Sezione V - Installazione di boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - Se una sezione nella schermata inferiore ha un testo di colore rosso, e non ti viene richiesto di inserire una combinazione di tasti, [segui questa guida per risolvere i problemi](troubleshooting#issues-with-safeb9sinstaller)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Sezione VI - Ripristino del proxy di default

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Prosegui con il [Completamento dell'installazione](finalizing-setup)

:::
