# Installazione di boot9strap (super-skaterhax)

:::details Dettagli tecnici (opzionale)

Per i dettagli tecnici sugli exploit che utilizzerai in questa pagina, vedi [qui](https://github.com/zoogie/super-skaterhax).

:::

### Note di compatibilità

Super-skaterhax (quando utilizzato per avviare l'Homebrew Launcher) è compatibile con i modelli New dalla versione 11.15.0 in poi di tutte le regioni.

::: warning

Le istruzioni indicate si applicano solo a New 3DS, New 3DS XL e New 2DS XL. Assicurati che la console che stai modificando sia un New 3DS, New 3DS XL, o un New 2DS XL prima di continuare.

:::

### Cosa serve

- Il file `.zip` di [Super-skaterhax](https://skater.nintendohomebrew.com) per la regione e la versione di sistema della tua console

#### Sezione I - Preparazione

In questa sezione copierai i file necessari per attivare sia super-skaterhax che l'Homebrew Launcher.

1. Spegni la tua console

2. Inserisci la scheda SD nel tuo computer

3. Copia tutto il contenuto dell'archivio `.zip` di Super-skaterhax nella directory principale della tua scheda SD, sovrascrivendo eventuali file esistenti

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
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Esci dalle Impostazioni della console

#### Sezione II - super-skaterhax

In questa sezione visiterai la pagina web dell'exploit del browser, che avvierà l'Homebrew Launcher.

::: info

Se non l'hai già fatto, assicurati di avere una connessione Internet funzionante configurata sulla tua console.

:::

1. Nel menu HOME, premi contemporaneamente i pulsanti dorsali L e R per avviare la fotocamera
   - Se non riesci ad aprire la fotocamera, apri il Browser Internet e digita manualmente l'URL (`https://zoogie.github.io/web/super/` per EUR/USA/JPN, `https://zoogie.github.io/web/korea` per KOR)
2. Tocca il pulsante "codice QR" e scansiona uno dei seguenti codici QR per la regione della tua console [qui](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
   - Se ricevi un avviso sul certificato di sicurezza, assicurati che la data del sistema sia corretta
3. Premi il pulsante (Select) per aprire la pagina dei preferiti
   - Se il pulsante (Select) non funziona, tocca l'icona della stella nell'angolo in basso a sinistra dello schermo
4. Tocca "Aggiungi ai preferiti"
5. Premi (B) una volta per ritornare al browser
6. Premi (ZR) per aprire l'elenco delle schede
   - Se il pulsante (ZR) non funziona, tocca il pulsante con 2 quadrati sovrapposti nell'angolo in basso a destra dello schermo
7. Assicurati che l'unica scheda aperta sia il sito di super-skaterhax
   - Questa scheda deve essere evidenziata in blu nella lista delle schede
   - Se ci sono altre schede aperte, chiudile
8. Premi (B) una volta per ritornare al browser
9. Premi (Start) per aprire il menu contestuale
   - Se il pulsante (Start) non funziona, tocca il pulsante con 3 linee nell'angolo in basso a destra dello schermo
10. Tocca su "Impostazioni"
11. Tocca su "Elimina cookie"
12. Premi il pulsante (A) per continuare
13. Premi (Home) per tornare al menu HOME e premi subito (A) per avviare nuovamente il browser
14. Seleziona il pulsante "GO GO!" in cima allo schermo inferiore
15. Premi (A) per chiudere il [popup](/images/screenshots/skaterhax/skater-popup.png)
    - Se la tua console si blocca con una schermata gialla, tieni premuto il pulsante POWER finché non si spegne, quindi riprova questa sezione
    - Se la tua console si blocca con una schermata rossa, tieni premuto il pulsante POWER finché non si spegne, riprova il passo 3 della Sezione II, quindi riprova questa sezione
    - Se la console [mostra la parola Text nell'angolo in alto a sinistra dello schermo inferiore](/images/screenshots/skaterhax/skater-old3ds.png), hai un Old 3DS e questo exploit **non funzionerà sulla tua console**. In questo caso, dovresti usare invece [MSET9](installing-boot9strap-\(mset9\))
    - If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
16. La tua console avvierà l'Homebrew Launcher
17. Avvia nimdsphax dalla lista degli homebrew
18. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
    - Se la tua console si blocca con una schermata rossa o verde, tieni premuto il pulsante POWER finché non si spegne, quindi riprova questa sezione
    - Potrebbero volerci fino a cinque tentativi

#### Sezione III - Installazione di boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
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
