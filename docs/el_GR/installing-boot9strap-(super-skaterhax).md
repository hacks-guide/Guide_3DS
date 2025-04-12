---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Εγκατάσταση του boot9strap (super-skaterhax)

:::details Τεχνικές λεπτομέρειες (προαιρετικό)

Για τεχνικές λεπτομέρειες σχετικά με τα exploit που θα χρησιμοποιήσετε σε αυτήν τη σελίδα, δείτε [εδώ](https://github.com/zoogie/super-skaterhax).

:::

### Σημειώσεις συμβατότητας

Το super-skaterhax (όταν χρησιμοποιείται για την εκκίνηση του Homebrew Launcher) είναι συμβατό με τα μοντέλα New στην έκδοση 11.15.0 και νεότερες, σε όλες τις περιοχές.

::: warning

Οι παρεχόμενες οδηγίες αφορούν μόνο τα New 3DS, New 3DS XL και New 2DS XL. Βεβαιωθείτε ότι η κονσόλα που τροποποιείτε είναι ένα New 3DS, New 3DS XL ή New 2DS XL πριν συνεχίσετε.

:::

### Τι χρειάζεστε

- Το αρχείο zip του [Super-skaterhax](https://skater.nintendohomebrew.com) για την περιοχή και την έκδοση συστήματος της κονσόλας σας

#### Ενότητα I - Προετοιμασία

Σε αυτήν την ενότητα, θα αντιγράψετε τα αρχεία που απαιτούνται για την ενεργοποίηση τόσο του super-skaterhax όσο και του Homebrew Launcher.

1. Απενεργοποιήστε την κονσόλα σας

2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας

3. Αντιγράψτε τα πάντα από το αρχείο `.zip` του Super-skaterhax στη ρίζα της κάρτας SD σας, αντικαθιστώντας τα τυχόν υπάρχοντα αρχεία

    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

4. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

5. Ενεργοποιήστε την κονσόλα σας

6. Εκκινήστε την εφαρμογή «System Settings»

7. Επιλέξτε «Other Settings»

8. Μεταβείτε στο «Profile» -> «Region Settings»
    - Αυτές οι ρυθμίσεις θα τροποποιηθούν προσωρινά για να αυξηθεί το ποσοστό επιτυχίας του exploit
    - Μόλις ολοκληρώσετε τα βήματα αυτής της σελίδας, μπορείτε να επαναφέρετε τις ρυθμίσεις περιοχής σας στις κανονικές τιμές τους
    - Εάν λάβετε μια [προειδοποίηση](/images/screenshots/skaterhax/country-change-notice.png) που δηλώνει ότι θα χάσετε την πρόσβαση στις λειτουργίες του Nintendo Network ID, μπορείτε να επιλέξετε με ασφάλεια το «OK» για να συνεχίσετε

9. Χρησιμοποιήστε τις εξής επιλογές σύμφωνα με την περιοχή της κονσόλας σας ([εικόνα](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. Navigate to "Date & Time"

11. Set "Today's Date" and "Current Time" to the current date and time in your timezone

12. Κλείστε την εφαρμογή «System Settings»

#### Ενότητα II - super-skaterhax

Σε αυτήν την ενότητα, θα επισκεφτείτε την ιστοσελίδα του exploit, η οποία θα εκκινήσει το Homebrew Launcher.

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
    - **A white "Error has occurred" message box**: The exploit failed due to random chance. Open System Settings, change the language to a different one (if possible), then retry this section. Be persistent; you may have to repeat this sequence up to ten times
    - **A black screen that says "An error has occurred"**: Your file placement is incorrect. Ensure that the super-skaterhax files are on the root of the SD card
    - **A yellow screen**: Homebrew Launcher failed to open due to random chance. Hold the POWER button until the console turns off, then retry this section
    - **[The word "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: You have an Old 3DS, where this exploit **does not work**. Σε αυτήν την περίπτωση, θα πρέπει να ακολουθήσετε τις οδηγίες στο [MSET9](installing-boot9strap-\(mset9\))
17. Εκκινήστε το nimdsphax από τη λίστα των εφαρμογών homebrew
18. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller
    - Εάν η κονσόλα σας «παγώσει» σε μια κόκκινη ή πράσινη οθόνη, κρατήστε πατημένο το κουμπί POWER μέχρι να απενεργοποιηθεί και έπειτα, επαναλάβετε τα βήματα αυτής της ενότητας

#### Ενότητα III - Εγκατάσταση του boot9strap

Σε αυτήν την ενότητα, θα εγκαταστήσετε custom firmware στην κονσόλα σας.

1. Όταν ζητηθεί, εισαγάγετε τον συνδυασμό πλήκτρων που θα εμφανιστεί στην πάνω οθόνη, ώστε να εγκαταστήσετε το boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
2. Μόλις ολοκληρωθεί, πατήστε το (Α) για να επανεκκινήσετε την κονσόλα σας

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)

:::
