# Εγκατάσταση του boot9strap (Soundhax)

:::details Τεχνικές λεπτομέρειες (προαιρετικό)

Για τεχνικές λεπτομέρειες σχετικά με τα exploit που θα εκμεταλλευτείτε σε αυτήν τη σελίδα, δείτε [εδώ](https://github.com/nedwill/soundhax) (Soundhax) και [εδώ](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Σημειώσεις συμβατότητας

Το Soundhax (όταν συνδυάζεται με το universal-otherapp) είναι συμβατό με τις εκδόσεις 1.0.0 έως 11.3.0 σε όλες τις περιοχές.

## Τι χρειάζεστε

- The latest release of [Soundhax](http://soundhax.com) _(for your region, console, and version)_
  - If Soundhax appears in your browser as an unplayable video, press Ctrl+S or Cmd+S to save it to your computer
- Την πιο πρόσφατη έκδοση του [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (απευθείας λήψη)
- Την πιο πρόσφατη έκδοση του [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (απευθείας λήψη)
- Την πιο πρόσφατη έκδοση του [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (το αρχείο `.zip` του Luma3DS)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Οδηγίες

### Ενότητα I - Προετοιμασία

Σε αυτήν την ενότητα, θα αντιγράψετε τα αρχεία που απαιτούνται για την ενεργοποίηση τόσο του Soundhax όσο και του universal-otherapp.

1. Απενεργοποιήστε την κονσόλα σας
2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
3. Αντιγράψτε το αρχείο `.m4a` του Soundhax στη ρίζα της κάρτας SD σας
   - Η ρίζα της κάρτας SD είναι ο αρχικός κατάλογος της κάρτας SD σας, όπου μπορείτε να δείτε τον φάκελο «Nintendo 3DS», χωρίς να βρίσκεστε μέσα σε αυτόν
4. Αντιγράψτε το `otherapp.bin` στη ρίζα της κάρτας SD σας
5. Copy everything from the Luma3DS `.zip` to the root of your SD card
6. Δημιουργήστε έναν φάκελο με το όνομα `boot9strap` στη ρίζα της κάρτας SD σας
7. Αντιγράψτε τα `boot9strap.firm` και `boot9strap.firm.sha` από το αρχείο `.zip` του boot9strap στον φάκελο `/boot9strap/` της κάρτας SD σας
8. Αντιγράψτε το `SafeB9SInstaller.bin` από το αρχείο `.zip` του SafeB9SInstaller στη ρίζα της κάρτας SD σας
9. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
10. Ενεργοποιήστε την κονσόλα σας

::: info

![](/images/screenshots/uosoundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - Launching SafeB9SInstaller

Σε αυτήν την ενότητα, θα εκκινήσετε το Soundhax μέσω της εφαρμογής «Nintendo 3DS Sound», το οποίο θα χρησιμοποιήσει το universal-otherapp για την εκκίνηση του προγράμματος εγκατάστασης του boot9strap (custom firmware).

1. Εκκινήστε την εφαρμογή «Nintendo 3DS Sound»

   ::: info

   ![](/images/screenshots/soundhax-welcome.png)

   :::

2. Εάν δεν έχετε εκκινήσει ποτέ την εφαρμογή «Nintendo 3DS Sound» και εμφανίζονται υποδείξεις από το εικονίδιο «πουλί», απλά προσπεράστε τις, κλείστε την εφαρμογή και έπειτα, ανοίξτε την ξανά
   - In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done

3. Μεταβείτε στο `/SDCARD` και έπειτα, κάντε αναπαραγωγή του «<3 nedwill 2016»

   - This may take many (up to 10) tries
   - If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
   - If it freezes, force the console to power off by holding the power button, then try again
   - If you get a different error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-soundhax)

   ::: info

   ![](/images/screenshots/soundhax-launch.png)

   :::

4. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller

### Ενότητα IIΙ - Εγκατάσταση του boot9strap

Σε αυτήν την ενότητα, θα εγκαταστήσετε custom firmware στην κονσόλα σας.

1. Όταν ζητηθεί, εισαγάγετε τον συνδυασμό πλήκτρων που θα εμφανιστεί στην πάνω οθόνη, ώστε να εγκαταστήσετε το boot9strap
   - Εάν το κείμενο ενός βήματος στην κάτω οθόνη έχει κόκκινο χρώμα και δεν σας ζητείται να εισαγάγετε κάποιον συνδυασμό πλήκτρων [ακολουθήστε αυτόν τον οδηγό επίλυσης προβλημάτων](troubleshooting#issues-with-safeb9sinstaller)
2. Μόλις ολοκληρωθεί, πατήστε το (Α) για να επανεκκινήσετε την κονσόλα σας

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)

:::
