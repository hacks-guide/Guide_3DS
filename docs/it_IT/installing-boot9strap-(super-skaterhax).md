---
head: [ [ 'script', { src: '/assets/js/common.js' } ], [ 'script', { src: '/assets/js/skater-link.js' } ], [ 'script', { src: '/assets/js/link-common.js' } ] ]
---

# Installazione di boot9strap (super-skaterhax)

:::details Dettagli tecnici (opzionale)

Per i dettagli tecnici sugli exploit che utilizzerai in questa pagina, vedi [qui](https://github.com/zoogie/super-skaterhax).

:::

### Note di compatibilità

Super-skaterhax (quando utilizzato per avviare l'Homebrew Launcher) è compatibile con i modelli New dalla versione 11.15.0 in poi di tutte le regioni.

::: info

Questo exploit è noto per essere inconsistente: può funzionare per alcuni ma non per tutti. Se preferisci usare un exploit più consistente (che potrebbe richiedere più tempo, ma otterrà lo stesso risultato finale), segui invece la guida di [MSET9](installing-boot9strap-(mset9)).

:::

### Cosa serve

- Il file `.zip` di [Super-skaterhax](https://skater.nintendohomebrew.com) per la regione e la versione di sistema della tua console

#### Sezione I - Preparazione

In questa sezione copierai i file necessari per attivare sia super-skaterhax che l'Homebrew Launcher.

1. Spegni la tua console

2. Inserisci la scheda SD nel tuo computer

3. Copia il contenuto dell'archivio `.zip` di Super-skaterhax nella directory principale della tua scheda SD. Se uno qualsiasi dei file esiste già, sovrascrivilo con i nuovi file.
   ::: info

   ![](/images/screenshots/skaterhax/skater-root-layout.png)

   :::

4. Reinserisci la scheda SD nella tua console

5. Accendi la tua console

6. Avvia le Impostazioni della console

7. Seleziona "Impostazioni generali"

8. Vai su "Profilo" -> "Area di residenza"
   - Queste impostazioni verranno temporaneamente modificate per aumentare la probabilità di successo dell'exploit
   - È possibile ripristinare le impostazioni della regione al termine della pagina
   - Se ottieni un [avviso](/images/screenshots/skaterhax/country-change-notice.png) che dice che perderai l'accesso alle funzionalità di Nintendo Network ID, puoi tranquillamente selezionare OK per continuare

9. Seleziona le seguenti opzioni in base alla regione della tua console ([immagine](/images/screenshots/skaterhax/skater-lang.png))
   - USA: Seleziona prima United States, poi Do Not Set
   - EUR: Seleziona prima United Kingdom, poi Do Not Set
   - JPN: Seleziona prima 日本, poi 設定しない
   - KOR: Seleziona prima 대한민국, poi 설정하지 않음

10. Vai a "Data e ora"

11. Imposta "Data" e "Ora" alla data e ora correnti

12. Esci dalle Impostazioni della console

#### Sezione II - super-skaterhax

In questa sezione visiterai la pagina web dell'exploit del browser, che avvierà l'Homebrew Launcher.

::: info

[Qui](https://www.youtube.com/watch?v=DEcZB72vJts) puoi trovare un video dettagliato per questi passaggi.

:::

1. Apri il Browser Internet
2. Tocca l'icona a 3 linee (☰) nell'angono in basso a destra dello schermo
3. Tocca `Impostazioni` -> scorri verso il basso -> `Elimina tutti i dati salvati` -> `Elimina` -> `Elimina`
   - Il browser si chiuderà
4. Riapri il Browser Internet
5. Tocca `Avanti` -> `Google` -> `OK` -> `OK`
6. Tocca la barra degli indirizzi nella parte superiore dello schermo inferiore
7. Inserisci l'URL corrispondente alla regione della tua console:
   - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
   - **KOR**: `https://skater.686178.xyz/go/korea`
8. Seleziona "Apri"
   - Dovresti vedere il testo "GO GO!". Non cliccarci ancora
9. Tocca l'icona a 3 linee (☰) nell'angono in basso a destra dello schermo
10. Tocca su "Aggiungi ai segnalibri"
11. Tocca l'icona a 3 linee (☰) nell'angono in basso a destra dello schermo
12. Tocca `Impostazioni` -> `Elimina cookies` -> `Sì`
13. Premi (Home) per tornare al menu HOME, quindi riapri subito il Browser Internet
14. Attendi che la pagina venga caricata completamente, quindi tocca il pulsante "GO GO!" nella parte superiore dello schermo inferiore
15. Attendi che la pagina venga caricata completamente, quindi premi (A) per chiudere il [popup](/images/screenshots/skaterhax/skater-popup.png)
16. Se la console visualizza:
    - **La schermata "The Homebrew Launcher"**: Continua al passo successivo
    - **Una casella bianca con il messaggio "Error has occurred"**: L'exploit è fallito per un evento casuale. Apri Impostazioni della console, cambia la lingua in una diversa (se possibile), quindi riprova questa sezione. Potrebbe essere necessario ripetere questa sequenza di azioni fino a dieci volte
      - Nelle console di regionalità JPN/KOR c'è una sola lingua selezionabile. Su tali console è necessario aprire Impostazioni della console, uscire da questa schermata, quindi riprovare questa sezione
      - Se l'exploit non è ancora riuscito dopo cinque tentativi potrebbe esserci un problema con i file o con le attività di preparazione. Assicurati che la regione e la data/ora siano corretti e che tu abbia seguito **pedissequamente** questa sezione. Se hai usato WinRAR per estrarre i file nella scheda SD, estraili invece usando File Explorer o 7-zip
      - Se l'exploit non è ancora riuscito dopo dieci tentativi, segui invece la guida di [MSET9](installing-boot9strap-(mset9))
    - **Una schermata nera che dice "An error has occurred"**: il posizionamento del file non è corretto. Assicurati che i file di super-skaterhax siano nella directory principale della scheda SD
    - **Una schermata gialla**: l'Homebrew Launcher non è riuscito ad avviarsi per un evento casuale. Tieni premuto il pulsante POWER fino a quando la console si spegne, quindi riprova questa sezione
    - **[La parola "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: Hai un Old 3DS, per cui questo exploit **non può funzionare**. In questo caso, dovresti usare invece [MSET9](installing-boot9strap-(mset9))
17. Avvia nimdsphax dalla lista degli homebrew
18. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
    - Se la tua console si blocca con una schermata rossa o verde, tieni premuto il pulsante POWER finché non si spegne, quindi riprova questa sezione

#### Sezione III - Installazione di boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - Se una sezione nella schermata inferiore ha un testo di colore rosso, e non ti viene richiesto di inserire una combinazione di tasti, [segui questa guida per risolvere i problemi](troubleshooting-super-skaterhax)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Ora puoi ripristinare le impostazioni della tua regione alla normalità.

:::

::: tip

Prosegui con il [Completamento dell'installazione](finalizing-setup)

:::
