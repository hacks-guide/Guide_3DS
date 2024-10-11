# Troubleshooting (Finalizing Setup)

This page offers troubleshooting advice for commonly encountered issues with the "Finalizing Setup" page. Se non riesci a risolvere il tuo problema con i consigli su questa pagina, entra nel [canale Discord di Nintendo Homebrew](https://discord. g/MWxPgEp) e descrivi il tuo problema, indicando quello che hai già provato.

## Issues with Finalizing Setup

:::details Impossibile aggiornare la console

I passaggi qui sotto possono essere seguiti in qualsiasi ordine, ma sono elencati dal più facile al più difficile da eseguire.

1. Se stai usando Pretendo, ritorna a Nintendo con Nimbus e riprova
2. Imposta le impostazioni DNS su "Auto"
3. Avvicinati al tuo router WiFi
4. Aggiorna tramite la Safe Mode spegnendo la console, tenendo premuti (L) + (R) + (D-Pad Su) + (A) all'avvio, e seguendo le istruzioni a schermo
5. Elimina il profilo di connessione WiFi, quindi connettiti di nuovo alla rete WiFi
6. Riavvia il tuo router WiFi
7. Connettiti ad una rete WiFi alternativa, ad esempio un hotspot mobile
8. I server Nintendo potrebbero essere irraggiungibili. Riprova più tardi
9. Se continui a ricevere un errore, [segui la guida per il CTRTransfer](ctrtransfer), poi ritenta l'aggiornamento
10. Se hai bisogno di aiuto (in inglese), entra nel [canale Discord di Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

:::details Error #22: finalize.romfs is invalid

Il file `finalize.romfs` è danneggiato o illeggibile. [Ri-scaricalo](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) e copialo nella della directory principale della scheda SD, sostituendo qualsiasi file esistente, quindi riprova.

:::

:::details Information #23: finalize.romfs in wrong location

Il file `finalize.romfs` è stato posizionato in maniera errata e non nella directory principale della scheda SD. Lo script tenterà di risolvere questo problema, ma occorre il tuo permesso per farlo. Premi (A) alle prossime richieste per continuare.

:::

:::details Error #24: SD is write-protected

Assicurati che la tua scheda SD non sia [protetta dalla scrittura](/images/sdlock.png). Se la scheda SD non è protetta e continui ad ottenere questo errore, entra nel [canale Nintendo Homebrew su Discord](https://discord.gg/MWxPgEp) per ricevere assistenza.

:::

:::details Error #02: Missing essential.exefs

Hai risposto 'No' alla richiesta "Make essential files backup?" in GodMode9. Spegni la console, riaccendila tenendo premuto (Start) per avviare GodMode9, rispondi 'Yes' alla domanda, quindi riprova.

:::

:::details Error #04: No space

Hai bisogno di almeno 1,3GB di spazio libero per eseguire il backup della NAND, che è una parte dello script. Se non hai abbastanza spazio, segui questi passaggi:

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia la cartella `Nintendo 3DS` dalla directory principale della tua scheda SD al tuo computer
4. Elimina la cartella `Nintendo 3DS` dalla scheda SD
5. Reinserisci la scheda SD nella tua console
6. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
7. Premi il pulsante (Home)
8. Seleziona "Scripts..."
9. Seleziona "finalize"
10. Premi (A) per creare un backup della NAND
    - Potrebbero volerci circa quindici minuti
11. Premi di nuovo (A)
    - La console dovrebbe spegnersi automaticamente
12. Inserisci la scheda SD nel tuo computer
13. Copia i file in `/gm9/backups/` sulla tua SD in una posizione sicura sul tuo computer
14. Elimina i file `<data>_<seriale>_sysnand_##.bin` e `<data>_<seriale>_sysnand_##.bin.sha` dalla scheda SD
15. Copia la cartella `Nintendo 3DS` dal tuo computer nella directory principale della tua scheda SD
16. Elimina la cartella `Nintendo 3DS` dal tuo computer

Ora che hai il backup della NAND in un luogo sicuro:

1. Reinserisci la scheda SD nella tua console
2. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
3. Premi il pulsante (Home)
4. Seleziona "Scripts..."
5. Seleziona "finalize"
6. Continua lo script normalmente
   - Il backup della NAND verrà automaticamente saltato

:::

:::details Information #05: No title database

Premi (A) per importare un database dei titoli, inserisci i pulsanti mostrati a schermo per sbloccare la scrittura su SysNAND, quindi prosegui normalmente con lo script.

:::

:::details Error #06 o "Error: Could not open directory" durante il backup della NAND

Assicurati di avere almeno 1.3GB disponibili nella tua scheda SD. Se non hai abbastanza spazio, segui questi passaggi:

1. Spegni la tua console
2. Inserisci la scheda SD nel tuo computer
3. Copia la cartella `Nintendo 3DS` dalla directory principale della tua scheda SD al tuo computer
4. Elimina la cartella `Nintendo 3DS` dalla scheda SD
5. Reinserisci la scheda SD nella tua console
6. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
7. Esegui un [Backup NAND](godmode9-usage#creating-a-nand-backup)
8. Copia i file in `gm9/out` sulla tua SD in una posizione sicura sul tuo computer
9. Elimina i file `<data>_<seriale>_sysnand_##.bin` e `<data>_<seriale>_sysnand_##.bin.sha` dalla scheda SD, mantenendo il file `essential.exefs` in `/gm9/out/`
10. Copia la cartella `Nintendo 3DS` dal tuo computer nella directory principale della tua scheda SD
11. Elimina la cartella `Nintendo 3DS` dal tuo computer

Se riieni di avere abbastanza spazio sulla tua scheda SD, questa potrebbe essere danneggiata o difettosa. Verifica la presenza di eventuali errori nella tua scheda SD seguendo la guida corretta per il sistema operativo del tuo computer: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Assicurati che la tua scheda SD non sia [protetta dalla scrittura](/images/sdlock.png). Se la scheda SD non è protetta e continui ad ottenere questo errore, entra nel [canale Nintendo Homebrew su Discord](https://discord.gg/MWxPgEp) per ricevere assistenza.

:::

:::details Information #17: Duplicate NAND backup

Lo script ha rilevato che manca la cartella Nintendo 3DS E che hai precedentemente fatto un backup della NAND. Se intendi installare applicazioni homebrew, dovresti fare quanto segue:

1. Premi (B) per annullare la creazione di un altro backup della NAND
2. Tenendo premuto (R), premi (Start) per spegnere la console
3. Copia il contenuto della cartella `/gm9/backups/` in una posizione sicura sul tuo computer
4. Elimina la cartella `/gm9/backups/` dalla tua scheda SD
5. Se hai spostato la cartella Nintendo 3DS al di fuori dalla scheda SD, copiala nuovamente sulla scheda SD
   - Se non hai la cartella Nintendo 3DS, avvia il menu HOME con la scheda SD inserita per generarla automaticamente
6. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
7. Premi il pulsante HOME per far apparire il menu delle azioni
8. Seleziona "Scripts..."
9. Seleziona "finalize"
10. Segui le istruzioni dello script, rispondendo alle domande che ti vengono poste

:::

:::details Error #18a/18b: MSET9 detected

Non hai rimosso MSET9 nella pagina precedente. Lo script tenterà di rimuovere MSET9; segui le istruzioni fornite dallo script.

:::

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Finalizing Setup](finalizing-setup)

:::

<!--@include: ./_include/troubleshooting-return.md -->
