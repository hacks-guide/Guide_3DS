---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Installazione di boot9strap (super-skaterhax)

:::details Dettagli tecnici (opzionale)

Per i dettagli tecnici sugli exploit che utilizzerai in questa pagina, vedi [qui](https://github.com/zoogie/super-skaterhax).

:::

### Note di compatibilità

Super-skaterhax (quando utilizzato per avviare l'Homebrew Launcher) è compatibile con i modelli New dalla versione 11.15.0 in poi di tutte le regioni.

::: info

This exploit is known to be inconsistent: it works for some people, but not others. If you prefer to use a more consistent exploit (which may take longer, but will have the same end result), follow [MSET9](installing-boot9strap-\(mset9\)) instead.

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

10. Navigate to "Date & Time"

11. Set "Today's Date" and "Current Time" to the current date and time in your timezone

12. Esci dalle Impostazioni della console

#### Sezione II - super-skaterhax

In questa sezione visiterai la pagina web dell'exploit del browser, che avvierà l'Homebrew Launcher.

::: info

A video detailing these steps is available [here](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Open the Internet Browser
2. Tap the 3-line (☰) icon on the bottom-right corner of the screen
3. Tap `Settings` -> scroll down -> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK`
    - The browser will close
4. Reopen the Internet Browser
5. Tap `Next` -> `Google` -> `OK` -> `OK`
6. Tap on the address bar at the top of the bottom screen
7. Enter the URL corresponding to your console's region:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Tap "Open"
    - You should see the text "GO GO!". Do not click on it yet
9. Tap the 3-line (☰) icon on the bottom-right corner of the screen
10. Tap on "Add to Bookmarks"
11. Tap the 3-line (☰) icon on the bottom-right corner of the screen
12. Tap on `Settings` -> `Delete Cookies` -> `Yes`
13. Press (Home) to return to the HOME Menu, then immediately reopen the Internet Browser
14. Wait for the page to fully load, then tap the "GO GO!" button on the top of the bottom screen
15. Wait for the page to fully load, then press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
16. If your console displays:
    - **"The Homebrew Launcher" screen**: Continue to the next step
    - **A white "Error has occurred" message box**: The exploit failed due to random chance. Open System Settings, change the language to a different one (if possible), then retry this section. You may have to repeat this sequence up to ten times
        - On JPN/KOR region consoles, there is only one language setting. On those consoles, you should open System Settings, close it, then retry this section
        - If the exploit is still unsuccessful after five attempts, there may be a problem with your files or prep work. Ensure that region and date/time are correct, and that you have been following this section **exactly**. If you used WinRAR to extract files to the SD card, re-extract the files using File Explorer or 7-zip instead
        - If the exploit is still unsuccessful after ten attempts, follow [MSET9](installing-boot9strap-\(mset9\)) instead
    - **A black screen that says "An error has occurred"**: Your file placement is incorrect. Ensure that the super-skaterhax files are on the root of the SD card
    - **A yellow screen**: Homebrew Launcher failed to open due to random chance. Hold the POWER button until the console turns off, then retry this section
    - **[The word "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: You have an Old 3DS, where this exploit **does not work**. In questo caso, dovresti usare invece [MSET9](installing-boot9strap-\(mset9\))
17. Avvia nimdsphax dalla lista degli homebrew
18. Se l'exploit è andato a buon fine, si avvierà SafeB9SInstaller
    - Se la tua console si blocca con una schermata rossa o verde, tieni premuto il pulsante POWER finché non si spegne, quindi riprova questa sezione

#### Sezione III - Installazione di boot9strap

In questa sezione installerai il custom firmware sulla tua console.

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
2. Una volta completato tutto, premi (A) per riavviare la console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Prosegui con il [Completamento dell'installazione](finalizing-setup)

:::
