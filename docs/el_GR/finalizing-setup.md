# Ολοκλήρωση εγκατάστασης

## Required Reading

Το αρχείο `boot.firm` είναι αυτό που εκκινείται από το ίδιο το boot9strap, αφού ολοκληρωθεί η φόρτωσή του από τη NAND. Σε αυτήν την περίπτωση, χρησιμοποιούμε το Luma3DS της [LumaTeam](https://github.com/LumaTeam/) για να τροποποιήσουμε την κονσόλα, επιτρέποντάς της να εκτελεί λογισμικό homebrew.

Σε αυτήν τη σελίδα, θα δημιουργήσουμε σημαντικά αντίγραφα ασφαλείας των αρχείων του συστήματος και θα εγκαταστήσουμε μερικές εφαρμογές homebrew. Τα περισσότερα από αυτά τα βήματα θα γίνουν αυτόματα με ένα script που θα εκτελέσετε στην κονσόλα σας.

::: info

Το script θα εγκαταστήσει τις ακόλουθες εφαρμογές:

- **[FBI](https://github.com/lifehackerhansol/FBI)** _(installs CIA formatted applications)_
- **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** _(launches the Homebrew Launcher)_
- **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** _(installs custom themes)_
- **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** _(backs up and restores save files for 3DS and DS games)_
- **[ftpd](https://github.com/mtheall/ftpd)** _(access your 3DS SD card wirelessly)_
- **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** _(a homebrew app store for downloading homebrew from the 3DS over Wi-Fi)_
- **[GodMode9](https://github.com/d0k3/GodMode9)** _(multipurpose tool which can do NAND and cartridge functions)_

Εάν δεν θέλετε κάποια από αυτές τις εφαρμογές, μπορείτε να την αφαιρέσετε αφού ολοκληρώσετε τα βήματα αυτής της σελίδας, από την εφαρμογή «System Settings» -> «Data Management» -> «Nintendo 3DS» -> «Software». (Δεν είναι δυνατή η αφαίρεση του GodMode9 με αυτόν τον τρόπο, το οποίο απαιτείται γενικά για άλλες λειτουργίες.)

:::

## Compatibility Notes

::: warning

Αν το **New 3DS** σας διέθετε την έκδοση 2.1.0 πριν ακολουθήσετε αυτόν τον οδηγό, θα πρέπει να [επαναφέρετε το αντίγραφο ασφαλείας της NAND](godmode9-usage#restoring-a-nand-backup) πριν συνεχίσετε. Αυτό πιθανότατα δεν ισχύει για εσάς, εκτός κι αν ακολουθείτε αυτόν τον οδηγό το 2017.

:::

::: info

Εάν η προηγούμενή σας εγκατάσταση CFW βασιζόταν στην EmuNAND και επιθυμείτε να μετακινήσετε τα περιεχόμενα της EmuNAND/RedNAND σας στη SysNAND, ακολουθήστε τα βήματα για [Μετακίνηση της EmuNAND](move-emunand) πριν ακολουθήσετε αυτήν τη σελίδα. Εάν δεν γνωρίζετε τι είναι μια EmuNAND, αυτό δεν ισχύει για εσάς.

:::

## What You Need

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

## Instructions

### Section I - Prep Work

Σε αυτήν την ενότητα, θα αντιγράψετε τα αρχεία που απαιτούνται για τις υπόλοιπες οδηγίες αυτής της σελίδας.

1. Απενεργοποιήστε την κονσόλα σας
2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
3. Αντιγράψτε το `finalize.romfs` στη ρίζα της κάρτας SD σας
4. Ανοίξτε τον φάκελο `luma` στην κάρτα SD και, μέσα σε αυτόν, δημιουργήστε έναν φάκελο με το όνομα `payloads`, εφόσον δεν υπάρχει ήδη
5. Αντιγράψτε το `x_finalize_helper.firm` στον φάκελο `payloads`
6. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

Το παρακάτω στιγμιότυπο οθόνης υποδεικνύει τη βασική διάταξη κάρτας SD που απαιτείται για να ακολουθήσετε τις οδηγίες αυτής της σελίδας. Ενδέχεται να έχετε επιπλέον αρχεία ή φακέλους στην κάρτα SD, ανάλογα με την προηγούμενη εγκατάσταση ή τη μέθοδο που ακολουθήσατε.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Section II - Updating the System

Σε αυτήν την ενότητα, θα ενημερώσετε το σύστημά σας στην πιο πρόσφατη έκδοση, κάτι που μπορείτε να κάνετε με ασφάλεια με το custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Section III - RTC and DSP setup

Σε αυτήν την ενότητα, θα συγχρονίσετε το εσωτερικό ρολόι του 3DS σας με τον πραγματικό χρόνο και θα αποτυπώσετε το firmware ήχου (το οποίο είναι απαραίτητο για τη σωστή χρήση του ήχου σε ορισμένες εφαρμογές homebrew).

1. Πατήστε τα (L) + (Κάτω) + (Select) ταυτόχρονα ώστε να εκκινήσετε το μενού Rosalina
   - If one of these buttons is broken, download [config.ini](/assets/config.ini) and put it in your `luma` folder, replacing the existing one. Αυτή η ενέργεια θα αλλάξει τον συνδυασμό πλήκτρων για το μενού Rosalina σε (X) + (Y)
2. Επιλέξτε «Miscellaneous options»
3. Επιλέξτε «Dump DSP firmware»
4. Πατήστε το (Β) για να συνεχίσετε
5. Επιλέξτε «Nullify user time offset»
6. Πατήστε το (Β) για να συνεχίσετε
7. Πατήστε το (B) για να επιστρέψετε στο κύριο μενού Rosalina
8. Πατήστε το (B) για να κλείσετε το μενού Rosalina

### Section IV - Setup Script

Σε αυτήν την ενότητα, θα χρησιμοποιήσετε μια σειρά από script για την αυτοματοποίηση της εγκατάστασης του homebrew, τον καθαρισμό της κάρτας SD και τη δημιουργία αντιγράφου ασφαλείας του συστήματος.

1. Απενεργοποιήστε την κονσόλα σας
2. Κρατήστε πατημένο το (X) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Με αυτόν τον τρόπο, θα εκκινηθεί ο βοηθός ολοκλήρωσης εγκατάστασης
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
   - If you encounter an error, consult the [troubleshooting](troubleshooting#finalizing-setup) page
3. Εάν η διαδικασία ήταν επιτυχής, η κονσόλα σας θα εκκινηθεί στο GodMode9
   - From this point forward, you can access GodMode9 by holding START while powering on your console
4. Εάν σας ζητηθεί να δημιουργήσετε ένα απαραίτητο αντίγραφο ασφαλείας, πατήστε το (A) ώστε να πραγματοποιηθεί και έπειτα, πατήστε το (A) για να συνεχίσετε μόλις ολοκληρωθεί η διαδικασία
5. Εάν σας ζητηθεί να διορθώσετε την ημερομηνία και την ώρα RTC, πατήστε το (A) για να το κάνετε και έπειτα, ορίστε την ημερομηνία και την ώρα. Τέλος, πατήστε το (A) για να συνεχίσετε
6. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
7. Επιλέξτε «Scripts...»
8. Επιλέξτε «finalize»
9. Ακολουθήστε τις οδηγίες του script, απαντώντας σε όποιες ερωτήσεις σάς γίνουν
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting#finalizing-setup) page
10. Μόλις το script δηλώσει «Setup complete!», πατήστε το (A) για να απενεργοποιήσετε την κονσόλα σας
    - If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
11. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
12. Αντιγράψτε τον φάκελο `/gm9/backups/` σε μια ασφαλή τοποθεσία του υπολογιστή σας
    - This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
13. Εάν τα έχετε ακόμα, διαγράψτε τα δύο αρχεία `SysNAND` από τον φάκελο `/gm9/backups/` της κάρτας SD σας
    - The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

::: tip

Αυτό ήταν! Η ρύθμιση του custom firmware στην κονσόλα σας έχει πλέον ολοκληρωθεί.

:::

::: info

Σκέφτεστε τι μπορείτε να κάνετε με την τροποποιημένη σας συσκευή; Επισκεφτείτε [το wiki μας](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Information and Notes

::: info

Ακολουθούν ορισμένοι συνδυασμοί πλήκτρων που θα πρέπει να γνωρίζετε:

- Holding (Select) on boot will launch the Luma3DS configuration menu.
- Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
- By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. Μπορείτε να αλλάξετε αυτόν τον συνδυασμό πλήκτρων από το μενού Rosalina.
- Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. Δείτε το [αρχείο καταγραφής αλλαγών](https://github.com/SciresM/boot9strap/releases/tag/1.4) για μια λίστα.

:::

::: info

Για πληροφορίες σχετικά με τη χρήση των διάφορων λειτουργιών του GodMode9, ανατρέξτε στις σελίδες [Χρήση του GodMode9](godmode9-usage) και [Αποτύπωση τίτλων και κασετών παιχνιδιών](dumping-titles-and-game-cartridges).

:::
