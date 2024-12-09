# Εγκατάσταση του boot9strap (MSET9 Play Store)

:::details Τεχνικές λεπτομέρειες (προαιρετικό)

Το [MSET9](https://github.com/zoogie/MSET9) είναι ένα exploit για την εφαρμογή «System Settings», το οποίο αναπτύσσεται από τον [zoogie](https://github.com/zoogie). Εκμεταλλεύεται ένα ελάττωμα όπου το ID1 (το όνομα του δεύτερου φακέλου, που αποτελείται από 32 χαρακτήρες, μέσα στον φάκελο «Nintendo 3DS», εντός του ID0) μπορεί να είναι _οποιοδήποτε_ όνομα εφόσον είναι 32 χαρακτήρες. Η εκτέλεση μιας συγκεκριμένης ακολουθίας ενεργειών έχει ως αποτέλεσμα την εκτέλεση των οδηγιών από την κονσόλα, οι οποίες κωδικοποιούνται στο όνομα του φακέλου ID1, πράγμα που μπορεί να χρησιμοποιηθεί για την παροχή πλήρους ελέγχου επί του 3DS.

:::

## Σημειώσεις συμβατότητας

::: warning

Αυτή η σελίδα απαιτεί ένα τηλέφωνο/tablet με Android ή ένα Chromebook. Εάν διαθέτετε έναν υπολογιστή με Windows, macOS ή Linux, ακολουθήστε τις οδηγίες της ενότητας [Εγκατάσταση του boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)). Εάν δεν έχετε πρόσβαση σε καμία από αυτές τις συσκευές, θα πρέπει να χρησιμοποιήσετε ένα [εναλλακτικό exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

Σε τηλέφωνα/tablet με Android, η ελάχιστη απαιτούμενη έκδοση Android είναι η 6.0 (Marshmallow).

:::

## Τι χρειάζεστε

- Τις ακόλουθες εφαρμογές από το Google Play Store:
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - Εάν θέλετε, μπορείτε να εγκαταστήσετε αυτές τις εφαρμογές μέσω sideload
- Την πιο πρόσφατη έκδοση του [MSET9](https://github.com/zoogie/MSET9/releases/latest) (το αρχείο `.zip` του Release)

## Οδηγίες

### Ενότητα I - Προετοιμασία

Σε αυτήν την ενότητα, θα προετοιμάσετε τα δεδομένα της κάρτας SD που είναι απαραίτητα για την ενεργοποίηση του exploit «MSET9».

1. Εισαγάγετε την κάρτα SD στο τηλέφωνο, το tablet ή τον υπολογιστή σας

2. Αντιγράψτε τα πάντα από το αρχείο `.zip` του Release στη ρίζα της κάρτας SD σας, αντικαθιστώντας τυχόν υπάρχοντα αρχεία:

   - Ανοίξτε το ZArchiver
   - Εάν σας ζητηθεί, [επιτρέψτε στο ZArchiver να έχει πρόσβαση στα αρχεία της κάρτας SD σας](/images/screenshots/mset9/zarchiver-allow.png)
   - Μεταβείτε στην τοποθεσία του ληφθέντος αρχείου `.zip` του MSET9 Release ([πιθανότατα στον φάκελο λήψεων](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Επιλέξτε το αρχείο `.zip` του Release και έπειτα, «Extract...» ([εικόνα](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Μεταβείτε στην κάρτα SD σας και πατήστε το εικονίδιο «μπλε κάτω βέλος» για να αποσυμπιέσετε τα αρχεία στη ρίζα της κάρτας SD σας ([εικόνα](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

3. Εκτελέστε την [εφαρμογή «MSET9 Installer»](/images/screenshots/mset9/mset9-setup-android.png)

4. Πατήστε το `Select "Nintendo 3DS" Folder` και μεταβείτε στον φάκελο `Nintendo 3DS` της κάρτας SD σας ([εικόνα](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Μόλις βρεθείτε εντός του φακέλου `Nintendo 3DS`, πατήστε το «Use this folder» και έπειτα, το «Allow» αν σας ζητηθεί ([εικόνα](/images/screenshots/mset9/select-mset9-folder-2.png))

6. If `Setup MSET9` is [highlighted](/images/screenshots/mset9/setup-mset9-highlighted.png), proceed to the next step
   - If you get an error, you need to resolve before you can use MSET9. Ανατρέξτε στη σελίδα [Επίλυση προβλημάτων](troubleshooting-mset9)

7. Tap on `Setup MSET9` to begin the process of setting up MSET9

8. After reviewing the disclaimer, tap on `Confirm` to accept it

9. Tap on the photo corresponding to your console model, then at the bottom, pick your current firmware version

10. If you see the prompt of `Hax ID1 Created`, tap OK to continue
    - Εάν λάβετε κάποιο σφάλμα, δείτε τη σελίδα [Επίλυση προβλημάτων](troubleshooting-mset9) και δοκιμάστε ξανά
    - Your 3DS will appear to lose most data / no user-installed apps on HOME Menu. This is expected. Your data will come back at a later step

11. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

12. Ενεργοποιήστε την κονσόλα σας

13. Ανοίξτε το Mii Maker

14. Περιμένετε μέχρι η κονσόλα σας να φτάσει στην οθόνη «Welcome to Mii Maker» και έπειτα, κλείστε τό Mii Maker
    - Ενδέχεται να δείτε [αυτήν την οθόνη](/images/screenshots/mset9/mii-extdata.png), η οποία υποδεικνύει ότι έχουν δημιουργηθεί τα απαραίτητα δεδομένα
    - If you just reach the normal Mii Maker screen, exit Mii Maker and return to the HOME Menu

15. Εκκινήστε την εφαρμογή «System Settings» και μεταβείτε στο `Data Management` -> `Nintendo 3DS` -> `Software` -> «Reset» ([εικόνα](/images/screenshots/database-reset.jpg))
    - Αυτή η ενέργεια δεν θα διαγράψει τα δεδομένα σας

16. Απενεργοποιήστε την κονσόλα σας πατώντας το κουμπί ισχύος και επιλέγοντας «Power Off» στην κάτω οθόνη

17. Εισαγάγετε την κάρτα SD στο τηλέφωνο, το tablet ή τον υπολογιστή σας

18. The MSET9 Installer application should automatically check if you have done previous steps properly
    - It may take a few seconds for the app to detect the SD card and react
    - If it doesn't check automatically, tap `Check MSET9 status` to check manually
    - Εάν λάβετε κάποιο σφάλμα, δείτε τη σελίδα [Επίλυση προβλημάτων](troubleshooting-mset9) και δοκιμάστε ξανά

19. If the check passed, you'll see `Inject trigger file` become [highlighted](/images/screenshots/mset9/inject-trigger-highlighted.png) and you can continue to the next step. **Do not inject trigger yet.** Put your phone/tablet/computer aside for now

20. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

### Ενότητα II - MSET9

Σε αυτήν την ενότητα, θα ενεργοποιήσετε το MSET9 για να εκκινηθεί το SafeB9SInstaller (το πρόγραμμα εγκατάστασης του custom firmware).

::: danger

Θα πρέπει να ακολουθήσετε αυτές τις οδηγίες **ΚΑΤΑ ΓΡΑΜΜΑ**, οπότε ελέγξτε ξανά προσεκτικά ΟΛΑ όσα κάνετε για να αποφύγετε τυχόν σφάλματα!

:::

1. Ενεργοποιήστε την κονσόλα σας, εξασφαλίζοντας ότι έχει επιλεχθεί η εφαρμογή «System Settings»
   - Εάν δεν έχει επιλεχθεί η εφαρμογή «System Settings», **[επισημάνετε](/images/screenshots/mset9/hover-settings.png)** το εικονίδιο «System Settings» με το D-Pad, απενεργοποιήστε την κονσόλα σας και έπειτα, ενεργοποιήστε την ξανά
2. Πατήστε το (A) για να εκκινήσετε την εφαρμογή «System Settings»
3. Μεταβείτε στο `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([εικόνα](/images/screenshots/mset9/settings-extdata.png))
4. **Μην πατήσετε κανένα κουμπί και μην αγγίξτε την οθόνη**
5. **Ενώ η κονσόλα είναι ΑΚΟΜΑ ΕΝΕΡΓΗ και χωρίς να πατήσετε κανένα κουμπί ή να αγγίξετε την οθόνη**, αφαιρέστε την κάρτα SD από την κονσόλα σας
   - Το μενού θα ανανεωθεί και θα δείτε ένα μήνυμα περί απουσίας της κάρτας SD, το οποίο είναι αναμενόμενο
6. Εισαγάγετε την κάρτα SD στο τηλέφωνο, το tablet ή τον υπολογιστή σας
7. Ανοίξτε την εφαρμογή «MSET9 Installer»
8. Tap `Inject trigger file`
   - The button should become greyed out and `Remove trigger file` become [highlighted](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας **χωρίς να πατήσετε οποιοδήποτε πλήκτρο ή να αγγίξετε την οθόνη**
10. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller
    - Εάν λάβετε μια κόκκινη οθόνη ή αν «κολλήσει» η κονσόλα σε κάποια οθόνη φόρτωσης, ακολουθήστε τον [οδηγό επίλυσης προβλημάτων](troubleshooting-mset9)

### Ενότητα III - Εγκατάσταση του boot9strap

Σε αυτήν την ενότητα, θα εγκαταστήσετε custom firmware στην κονσόλα σας.

1. Όταν ζητηθεί, εισαγάγετε τον συνδυασμό πλήκτρων που θα εμφανιστεί στην πάνω οθόνη, ώστε να εγκαταστήσετε το boot9strap
   - Εάν το κείμενο κάποιου βήματος στην κάτω οθόνη έχει κόκκινο χρώμα και δεν σας ζητείται να εισαγάγετε κάποιον συνδυασμό πλήκτρων, [ακολουθήστε αυτόν τον οδηγό επίλυσης προβλημάτων](troubleshooting-mset9)
2. Μόλις ολοκληρωθεί, πατήστε το (Α) για να επανεκκινήσετε την κονσόλα σας

<!--@include: ./_include/configure-luma3ds.md -->

### Ενότητα IV - Αφαίρεση του MSET9

Σε αυτήν την ενότητα, θα αφαιρέσετε το MSET9 για να αποτρέψετε περαιτέρω ζητήματα. (Αυτή η ενέργεια δεν θα αφαιρέσει το custom firmware που μόλις εγκαταστήσατε.)

::: danger

ΜΗΝ παραλείψετε αυτήν την ενότητα! Αν την παραλείψετε, η λειτουργία των εφαρμογών ενδέχεται να διακοπεί απροσδόκητα και θα συναντήσετε σφάλματα στην επόμενη σελίδα!

:::

1. Απενεργοποιήστε την κονσόλα σας
2. Εισαγάγετε την κάρτα SD στο τηλέφωνο, το tablet ή τον υπολογιστή σας
3. Ανοίξτε την εφαρμογή «MSET9 Installer»
4. Tap `Remove MSET9`
5. Κλείστε την εφαρμογή «MSET9 Installer»

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Ακολουθήσατε την Ενότητα IV (Αφαίρεση του MSET9); Η ενότητα αυτή είναι ΥΠΟΧΡΕΩΤΙΚΗ!

:::

::: tip

Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)

:::
