# Εγκατάσταση του boot9strap (MSET9 CLI)

:::details Technical Details (optional)

Το [MSET9](https://github.com/zoogie/MSET9) είναι ένα exploit για την εφαρμογή «System Settings», το οποίο αναπτύσσεται από τον [zoogie](https://github.com/zoogie). Εκμεταλλεύεται ένα ελάττωμα όπου το ID1 (το όνομα του δεύτερου φακέλου, που αποτελείται από 32 χαρακτήρες, μέσα στον φάκελο «Nintendo 3DS», εντός του ID0) μπορεί να είναι _οποιοδήποτε_ όνομα εφόσον είναι 32 χαρακτήρες. Η εκτέλεση μιας συγκεκριμένης ακολουθίας ενεργειών έχει ως αποτέλεσμα την εκτέλεση των οδηγιών από την κονσόλα, οι οποίες κωδικοποιούνται στο όνομα του φακέλου ID1, πράγμα που μπορεί να χρησιμοποιηθεί για την παροχή πλήρους ελέγχου επί του 3DS.

:::

## Compatibility Notes

::: warning

Αυτή η σελίδα απαιτεί έναν υπολογιστή με Windows, Linux ή macOS. Εάν διαθέτετε ένα τηλέφωνο ή tablet με Android ή ένα Chromebook, ακολουθήστε τις οδηγίες της ενότητας [Εγκατάσταση του boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)). Εάν δεν έχετε πρόσβαση σε καμία από αυτές τις συσκευές, θα πρέπει να χρησιμοποιήσετε ένα [εναλλακτικό exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

## What You Need

- The latest release of [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
- Any 3.x version of [Python](https://www.python.org/downloads/) **installed on your computer**
  - If you are on Linux or macOS, you may already have Python 3. Για να το διαπιστώσετε, ανοίξτε ένα παράθυρο τερματικού και πληκτρολογήστε `python3 -V`. Εάν η εντολή επιστρέψει έναν αριθμό έκδοσης, τότε μπορείτε να ακολουθήσετε αυτόν τον οδηγό.

## Instructions

::: info

Σε αυτήν τη σελίδα, θα χρησιμοποιήσετε το script «MSET9», το οποίο χρησιμοποιείται για την ενεργοποίηση του MSET9. Όσο η εκτέλεση του script είναι σε εξέλιξη, τα δεδομένα του χρήστη θα εξαφανιστούν προσωρινά, αλλά θα επιστρέψουν μετά την ολοκλήρωση των βημάτων αυτής της σελίδας. Εάν λάβετε κάποιο σφάλμα κατά την εκτέλεση του script, η λύση σε αυτό θα βρίσκεται πιθανότατα στη σελίδα [επίλυσης προβλημάτων](troubleshooting#installing-boot9strap-mset9).

:::

### Section I - Prep Work

Σε αυτήν την ενότητα, θα προετοιμάσετε το exploit «MSET9» δημιουργώντας **προσωρινά** ένα νέο προφίλ για το μενού «HOME» χωρίς δεδομένα χρήστη. Στη συνέχεια, θα διαμορφώσετε αυτό το προφίλ μόνο με τα ελάχιστα δεδομένα που απαιτούνται για την ενεργοποίηση του MSET9. Τα υπάρχοντα δεδομένα χρήστη θα εξαφανιστούν, αλλά θα επανέλθουν όταν τελειώσετε με τις οδηγίες αυτής της σελίδας.

1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας

2. Αντιγράψτε τα πάντα από το αρχείο `.zip` του MSET9 στη ρίζα της κάρτας SD σας, αντικαθιστώντας τυχόν υπάρχοντα αρχεία

   ::: info

   ![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)

   :::

3. Εκτελέστε το script «MSET9»:

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![Image: MSET9 setup](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Πληκτρολογήστε τον αριθμό που αντιστοιχεί στο μοντέλο και την έκδοση της κονσόλας σας και πατήστε το Enter

   - The window should change to this:

   ::: info

   ![Image: MSET9 setup](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Ensure that the correct console model and version is displayed
2. Πληκτρολογήστε `1` και πατήστε το Enter για να ξεκινήσει η διαδικασία δημιουργίας του ID1 του MSET9
3. Αφού διαβάσετε το μήνυμα αποποίησης ευθυνών, πληκτρολογήστε ξανά `1` και πατήστε το Enter για να το αποδεχτείτε
   - If you get an error, check the [troubleshooting](troubleshooting#installing-boot9strap-mset9), then try again
4. Εάν δείτε το μήνυμα «Created hacked ID1.», πατήστε το Enter για να κλείσετε το script «MSET9»
   - Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **Αυτό είναι αναμενόμενο.** Τα δεδομένα σας θα επιστρέψουν σε ένα μεταγενέστερο βήμα
5. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
6. Ενεργοποιήστε την κονσόλα σας
7. Ανοίξτε το Mii Maker
8. Περιμένετε μέχρι η κονσόλα σας να φτάσει στην οθόνη [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png) και έπειτα, κλείστε το Mii Maker και επιστρέψτε στο μενού «HOME»
   - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
   - If you just reach the [normal](/images/screenshots/mset9/mii-existing.png) Mii Maker screen, then the data already exists. Κλείστε το Mii Maker και επιστρέψτε στο μενού «HOME»
9. Εκκινήστε την εφαρμογή «System Settings» και μεταβείτε στο `Data Management` -> `Nintendo 3DS` -> `Software` -> «Reset» ([εικόνα](/images/screenshots/database-reset.jpg))
   - This will not wipe any of your data
10. Απενεργοποιήστε την κονσόλα σας πατώντας το κουμπί ισχύος και επιλέγοντας «Power Off» στην κάτω οθόνη
11. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
12. Εκτελέστε το script «MSET9»:

<!--@include: ./_include/mset9-chorus.md -->

1. Πληκτρολογήστε τον αριθμό που αντιστοιχεί στο μοντέλο και την έκδοση της κονσόλας σας και πατήστε το Enter

   - The window should change to this and display `Ready`:

   ::: info

   ![Image: MSET9 setup](/images/screenshots/mset9/mset9-ready.png)

   :::

   - If the window says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Type `2`, then press Enter to check the MSET9 status and follow the directions indicated
     - Once you have resolved the issue, return to Section I Step 14
     - For more information, check the [troubleshooting](troubleshooting#installing-boot9strap-mset9) page
2. Πληκτρολογήστε `0` και πατήστε το Enter για να κλείσετε το script
3. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

### Section II - MSET9

Σε αυτήν την ενότητα, θα ενεργοποιήσετε το MSET9 για να εκκινηθεί το SafeB9SInstaller (το πρόγραμμα εγκατάστασης του custom firmware).

::: danger

Θα πρέπει να ακολουθήσετε αυτές τις οδηγίες **ΚΑΤΑ ΓΡΑΜΜΑ**, οπότε ελέγξτε ξανά προσεκτικά ΟΛΑ όσα κάνετε για να αποφύγετε τυχόν σφάλματα!

:::

1. Ενεργοποιήστε την κονσόλα σας, εξασφαλίζοντας ότι έχει επιλεχθεί η εφαρμογή «System Settings»
   - If System Settings is not selected, **[hover over](/images/screenshots/mset9/hover-settings.png)** the System Settings icon using the D-Pad, power your console off, then back on
2. Πατήστε το (A) για να εκκινήσετε την εφαρμογή «System Settings»
3. Μεταβείτε στο `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([εικόνα](/images/screenshots/mset9/settings-extdata.png))
4. **Μην πατήσετε κανένα κουμπί και μην αγγίξτε την οθόνη**
5. **Ενώ η κονσόλα είναι ΑΚΟΜΑ ΕΝΕΡΓΗ και χωρίς να πατήσετε κανένα κουμπί ή να αγγίξετε την οθόνη**, αφαιρέστε την κάρτα SD από την κονσόλα σας
   - The menu will refresh and say that no SD card is inserted
6. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
7. Εκτελέστε το script «MSET9»:

<!--@include: ./_include/mset9-chorus.md -->

1. Πληκτρολογήστε τον αριθμό που αντιστοιχεί στο μοντέλο και την έκδοση της κονσόλας σας και πατήστε το Enter
2. Στο παράθυρο του MSET9, πληκτρολογήστε `3` και πατήστε το Enter για να εισαγάγετε το MSET9
   - You should see "MSET9 successfully injected!"
3. Πατήστε το Enter για να κλείσετε το script «MSET9»
4. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας **χωρίς να πατήσετε οποιοδήποτε πλήκτρο ή να αγγίξετε την οθόνη**
5. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller
   - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting#installing-boot9strap-mset9)

### Section III - Installing boot9strap

Σε αυτήν την ενότητα, θα εγκαταστήσετε custom firmware στην κονσόλα σας.

1. Όταν ζητηθεί, εισαγάγετε τον συνδυασμό πλήκτρων που θα εμφανιστεί στην πάνω οθόνη, ώστε να εγκαταστήσετε το boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Μόλις ολοκληρωθεί, πατήστε το (Α) για να επανεκκινήσετε την κονσόλα σας

<!--@include: ./_include/configure-luma3ds.md -->

### Section IV - Removing MSET9

Σε αυτήν την ενότητα, θα αφαιρέσετε το MSET9 για να αποτρέψετε περαιτέρω προβλήματα και να επαναφέρετε τα δεδομένα χρήστη σας (παιχνίδια, θέματα, κ.λπ.). (Αυτή η ενέργεια δεν θα αφαιρέσει το custom firmware που μόλις εγκαταστήσατε.)

::: danger

ΜΗΝ παραλείψετε αυτήν την ενότητα! Αν την παραλείψετε, η λειτουργία των εφαρμογών ενδέχεται να διακοπεί απροσδόκητα και θα συναντήσετε σφάλματα στην επόμενη σελίδα!

:::

1. Απενεργοποιήστε την κονσόλα σας
2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
3. Εκτελέστε το script «MSET9»:

<!--@include: ./_include/mset9-chorus.md -->

1. Πληκτρολογήστε τον αριθμό που αντιστοιχεί στο μοντέλο και την έκδοση της κονσόλας σας και πατήστε το Enter
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), skip to Step 6
2. Πληκτρολογήστε `4` και πατήστε το Enter για να αφαιρεθεί το αρχείο ενεργοποίησης
   - You should see "Removed trigger file."
3. Πληκτρολογήστε `5` και πατήστε το Enter για να αφαιρέσετε το MSET9
   - You should see "Successfully removed MSET9!"
4. Πατήστε το Enter για να κλείσετε το script «MSET9»

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Ακολουθήσατε την Ενότητα IV (Αφαίρεση του MSET9); Η ενότητα αυτή είναι ΥΠΟΧΡΕΩΤΙΚΗ!

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
