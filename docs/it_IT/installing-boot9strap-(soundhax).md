# Installazione di boot9strap (Soundhax)

:::details Dettagli tecnici (opzionale)

Per dettagli tecnici sugli exploit che utilizzerai in questa pagina, leggi [qui](https://github.com/nedwill/soundhax) (Soundhax) e [qui](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Note di compatibilità

Soundhax (combinato a universal-otherapp) è compatibile con le versioni del software comprese tra 1.0.0 e 11.3.0 per tutte le regioni.

## Cosa serve

- L'ultima versione di [Soundhax](http://soundhax.com) _(adatta alla regione, tipo e versione della console)_
  - Se Soundhax appare nel tuo browser come un video non riproducibile, premi Ctrl+S o Cmd+S per salvarlo sul tuo computer
- L'ultima versione di [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download diretto)
- L'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download diretto)
- L'ultima versione di [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (il file `.zip` di Luma3DS)
- L'ultima versione di [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Istruzioni

### Sezione I - Preparazione

In questa sezione copierai i file necessari per attivare sia Soundhax che universal-otherapp.

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia il file `.m4a`di Soundhax nella directory principale della tua scheda SD
   - La directory principale della scheda SD è la cartella della tua scheda SD in cui è possibile visualizzare la cartella Nintendo 3DS, ma non il suo interno
4. Copia il file `otherapp.bin` nella directory principale della tua scheda SD
5. Copia tutto dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD
6. Crea una cartella chiamata `boot9strap` nella directory principale della tua scheda SD
7. Copia i file `boot9strap.firm` e `boot9strap.firm.sha` dall'archivio `.zip` di boot9strap nella cartella `/boot9strap/` della tua scheda SD
8. Copia il file `SafeB9SInstaller.bin` dall'archivio `.zip` di SafeB9SInstaller nella directory principale della tua scheda SD
9. Reinserisci la scheda SD nella tua console
10. Accendi la tua console

::: info

![](/images/screenshots/uosoundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Sezione II - Avvio di SafeB9SInstaller

In questa sezione avvierai Soundhax attraverso l'app Sound Nintendo 3DS, che utilizzerà l'app universal-otherapp per avviare l'installazione di boot9strap (custom firmware).

1. Avvia Sound Nintendo 3DS

   ::: info

   ![](/images/screenshots/soundhax-welcome.png)

   :::

2. Se non hai mai aperto Sound Nintendo 3DS, riceverai suggerimenti sul suo utilizzo dalla mascotte dell'applicazione. Scorrili tutti, quindi chiudi e riapri l'applicazione
   - Se non chiudi Sound Nintendo 3DS, l'esecuzione di Soundhax farebbe riapparire i consigli ad ogni successivo avvio dell'applicazione finché non viene seguita questa procedura

3. Seleziona `/Scheda SD`, quindi avvia "<3 nedwill 2016"

   - Potrebbero essere necessari molti tentativi (anche 10)
   - Se vedi il messaggio "Impossibile riprodurre", hai una versione di sistema incompatibile con Soundhax oppure hai scaricato una versione sbagliata di Soundhax
   - Se la console dovesse bloccarsi, forzane lo spegnimento tenendo premuto il pulsante di accensione, quindi riprova
   - Se ottieni un errore diverso, [segui questa guida per risolvere il problema](troubleshooting#installing-boot9strap-soundhax)

   ::: info

   ![](/images/screenshots/soundhax-launch.png)

   :::

4. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller

### Sezione III - Installazione di boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - Se una sezione nella schermata inferiore ha un testo di colore rosso, e non ti viene richiesto di inserire una combinazione di tasti, [segui questa guida per risolvere i problemi](troubleshooting#issues-with-safeb9sinstaller)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Prosegui con il [Completamento dell'installazione](finalizing-setup)

:::
