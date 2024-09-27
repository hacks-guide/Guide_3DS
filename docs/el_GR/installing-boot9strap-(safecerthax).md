# Εγκατάσταση του boot9strap (safecerthax)

:::details Technical Details (optional)

:::

## Compatibility Notes

Το safecerthax είναι συμβατό με όλες τις κονσόλες Old 3DS και Old 2DS, σε όλες τις περιοχές, εφόσον διαθέτουν τις εκδόσεις συστήματος 1.0.0 έως 11.14.0.

::: info

Αυτό το exploit δεν λειτουργεί στα New 3DS, New 3DS XL και New 2DS XL. Βεβαιωθείτε ότι η κονσόλα που τροποποιείτε είναι ένα Old 3DS, Old 3DS XL ή Old 2DS πριν συνεχίσετε.

:::

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Hardware Button Check

Σε αυτήν την ενότητα, θα ελέγξετε εάν λειτουργούν τα κουμπιά (L) και (R) της κονσόλας σας. Αυτό θα καθορίσει αν η κονσόλα σας είναι συμβατή με αυτήν τη μέθοδο.

1. Ενεργοποιήστε την κονσόλα σας
2. Μόλις δείτε το μενού «HOME», πατήστε τα κουμπιά (L) και (R) ταυτόχρονα
   - The camera applet should appear
3. Απενεργοποιήστε την κονσόλα σας

::: warning

Εάν ΔΕΝ εμφανιστεί η κάμερα, δεν μπορείτε να ακολουθήσετε αυτήν τη μέθοδο. Σε αυτήν την περίπτωση, χρησιμοποιήστε την [Εγκατάσταση του boot9strap (MSET9)](installing-boot9strap-\(mset9\)).

:::

### Section II - Prep Work

Σε αυτήν την ενότητα, θα αντιγράψετε τα αρχεία που απαιτούνται για την ενεργοποίηση του exploit «safecerthax».

1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
2. Αντιγράψτε τα `boot.firm` και `boot.3dsx` από το αρχείο `.zip` του Luma3DS στη ρίζα της κάρτας SD σας
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Δημιουργήστε έναν φάκελο με το όνομα `boot9strap` στη ρίζα της κάρτας SD σας
4. Αντιγράψτε τα `boot9strap.firm` και `boot9strap.firm.sha` από το αρχείο `.zip` του boot9strap στον φάκελο `/boot9strap/` της κάρτας SD σας
5. Αντιγράψτε το `SafeB9SInstaller.bin` από το αρχείο `.zip` του SafeB9SInstaller στη ρίζα της κάρτας SD σας
6. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
7. Ενεργοποιήστε την κονσόλα σας

### Section III - safecerthax proxy

Σε αυτήν την ενότητα, θα αλλάξετε τις ρυθμίσεις σύνδεσης στο διαδίκτυο για να χρησιμοποιήσετε ένα δίκτυο διαμεσολάβησης, το οποίο έχει σχεδιαστεί για την εκμετάλλευση της λειτουργίας «System Update» της κονσόλας σας.

<!--@include: ./_include/addproxy.md -->

1. Απενεργοποιήστε την κονσόλα σας

### Section IV - safecerthax

Σε αυτήν την ενότητα, θα εισέλθετε στη λειτουργία «Safe Mode» (μια λειτουργία που είναι διαθέσιμη σε όλες τις κονσόλες της οικογένειας 3DS), όπου θα ενεργοποιηθεί το safecerthax, το οποίο θα εκκινήσει το πρόγραμμα εγκατάστασης του boot9strap (custom firmware).

1. Όσο η κονσόλα σας είναι ακόμα απενεργοποιημένη, κρατήστε πατημένα τα ακόλουθα κουμπιά: (L) + (R) + (Πάνω) + (A). Ενώ κρατάτε πατημένα αυτά τα κουμπιά, ενεργοποιήστε την κονσόλα σας
   - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Πατήστε «OK» για να αποδεχτείτε την ενημέρωση
   - There is no update. Αυτό είναι μέρος του exploit
3. Πατήστε «I accept» για να αποδεχτείτε τους όρους και τις προϋποθέσεις
4. Η ενημέρωση θα αποτύχει τελικά, με τον κωδικό σφάλματος `003-1099`. Αυτή είναι η επιδιωκόμενη συμπεριφορά
5. Πατήστε «OK» για να κλείσετε το μήνυμα σφάλματος
6. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller
   - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

Σε αυτήν την ενότητα, θα εγκαταστήσετε custom firmware στην κονσόλα σας.

1. Όταν ζητηθεί, εισαγάγετε τον συνδυασμό πλήκτρων που θα εμφανιστεί στην πάνω οθόνη, ώστε να εγκαταστήσετε το boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Μόλις ολοκληρωθεί, πατήστε το (Α) για να επανεκκινήσετε την κονσόλα σας

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
