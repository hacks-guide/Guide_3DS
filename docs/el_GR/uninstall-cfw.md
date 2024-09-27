# Αφαίρεση του CFW

## Required Reading

Αυτή η διαδικασία θα αφαιρέσει εντελώς το CFW, συμπεριλαμβανομένου του boot9strap και του Luma3DS, από την κονσόλα σας, ώστε να την επαναφέρετε στην αρχική της κατάσταση.

Όλα τα μη υπογεγραμμένα (παράνομα) παιχνίδια θα καταστούν μη λειτουργικά και θα αφαιρεθούν κατά τη διάρκεια αυτής της διαδικασίας. Χρησιμοποιήστε μια [εφαρμογή διαχείρισης αποθηκευμένων δεδομένων](https://github.com/FlagBrew/Checkpoint/releases/latest) για να δημιουργήσετε αντίγραφα ασφαλείας των αποθηκευμένων δεδομένων που σας ενδιαφέρουν.

::: danger

Εάν αφαιρείτε το CFW επειδή:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. Μια καλύτερη ιδέα θα ήταν να ζητήσετε βοήθεια στο [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp).

:::

::: danger

Εάν έχετε κάνει ΟΠΟΙΟΔΗΠΟΤΕ από τα ακόλουθα:

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. Εάν αυτό ισχύει για εσάς, [επαναφέρετε ένα αντίγραφο ασφαλείας μιας «καθαρής» NAND](godmode9-usage#restoring-a-nand-backup) πριν συνεχίσετε.

:::

::: warning

Αυτές οι οδηγίες θα λειτουργήσουν μόνο σε κονσόλες που διαθέτουν την έκδοση 8.0 ή νεότερη του Luma3DS. Αν έχετε μια παλαιότερη έκδοση του Luma, πρέπει να αναβαθμίσετε την εγκατάστασή σας πριν ακολουθήσετε αυτές τις οδηγίες. Ακολουθήστε [αυτήν τη σελίδα](checking-for-cfw) για να βρείτε τις οδηγίες αναβάθμισης.

:::

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Instructions

### Section I - Prep Work

1. Απενεργοποιήστε την κονσόλα σας
2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
3. Αντιγράψτε τα `boot.firm` και `boot.3dsx` από το αρχείο `.zip` του Luma3DS στη ρίζα της κάρτας SD σας
4. Αντιγράψτε το `GodMode9.firm` από το αρχείο `.zip` του GodMode9 στον φάκελο `/luma/payloads/` της κάρτας SD σας
5. Αντιγράψτε τον φάκελο `gm9` από το αρχείο `.zip` του GodMode9 στη ρίζα της κάρτας SD σας
6. Αντιγράψτε το `DSiWareUninstaller.3dsx` στον φάκελο `/3ds/` της κάρτας SD σας
7. Αντιγράψτε το `safety_test.gm9` στον φάκελο `/gm9/scripts/` της κάρτας SD σας
8. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

### Section II - DS Mode Tests

Σκοπός αυτής της ενότητας είναι να ελέγξετε αν οι ενσωματωμένες εφαρμογές της λειτουργίας DS θα συνεχίσουν να λειτουργούν μετά την αφαίρεση του CFW. Εάν παραλείψετε αυτήν την ενότητα, η λειτουργία DS ή οι δυνατότητές της ενδέχεται να μην είναι προσβάσιμες μέχρι να εγκαταστήσετε εκ νέου κάποιο CFW.

#### DS Connection Settings Test

1. Ενεργοποιήστε την κονσόλα σας
2. Εκκινήστε την εφαρμογή «System Settings» στην κονσόλα σας
3. Μεταβείτε στο `Internet Settings` -> `Nintendo DS Connection Settings` και πατήστε «OK»
4. Θα πρέπει να γίνει εκκίνηση στο μενού «Nintendo DS Connection Setup»
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Απενεργοποιήστε την κονσόλα σας

#### DS Download Play Test

1. Ενεργοποιήστε την κονσόλα σας
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Επιλέξτε «Nintendo DS»
4. Εάν η κονσόλα σας φορτώσει το μενού «Download software via DS Download Play», η δοκιμή ήταν επιτυχής
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Απενεργοποιήστε την κονσόλα σας

::: warning

Εάν απέτυχε οποιαδήποτε από αυτές τις δοκιμές, η λειτουργία DS, το DS Download Play ή/και οι ρυθμίσεις σύνδεσης DS ενδέχεται να καταστούν μη προσβάσιμες μόλις αφαιρεθεί το CFW! Θα πρέπει να [διορθώσετε τη λειτουργία DS](troubleshooting#software-issues-on-consoles-with-custom-firmware) πριν συνεχίσετε.

:::

### Section III - Safety Test

Σκοπός αυτής της ενότητας είναι να σας βοηθήσει να εξασφαλίσετε ότι η κονσόλα θα εκκινηθεί και ότι οι σημαντικές λειτουργίες του συστήματος, όπως η εφαρμογή «System Settings» και το πληκτρολόγιο, θα λειτουργούν μόλις αφαιρεθεί το CFW. **Εάν παραλείψετε αυτήν την ενότητα, ενδέχεται να καταστήσετε ΜΗ ΛΕΙΤΟΥΡΓΙΚΗ την κονσόλα σας!**

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Εάν σας ζητηθεί να δημιουργήσετε ένα απαραίτητο αντίγραφο ασφαλείας, πατήστε το (A) ώστε να πραγματοποιηθεί και έπειτα, πατήστε το (A) για να συνεχίσετε μόλις ολοκληρωθεί η διαδικασία
3. Εάν σας ζητηθεί να διορθώσετε την ημερομηνία και την ώρα RTC, πατήστε το (A) για να το κάνετε και έπειτα, ορίστε την ημερομηνία και την ώρα. Τέλος, πατήστε το (A) για να συνεχίσετε
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
5. Επιλέξτε «Scripts...»
6. Επιλέξτε «safety_test»
7. Διαβάστε το κείμενο στην οθόνη και πατήστε το (A) για να συνεχίσετε
8. Θα πρέπει να γίνει εκκίνηση στο κανονικό μενού «HOME» του 3DS (η παρουσία κάποιου προσαρμοσμένου θέματος είναι άνευ σημασίας). Αν γίνει, συνεχίστε με αυτές τις οδηγίες
   - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. Εκκινήστε την εφαρμογή «System Settings» στην κονσόλα σας
   - If the console crashes at this point, the test has failed
10. Επιλέξτε «Other Settings»
11. Επιλέξτε «Profile»
12. Επιλέξτε «User Name»
13. Εάν μπορείτε να εισαγάγετε ένα νέο όνομα χρήστη, η δοκιμή ήταν επιτυχής
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. Απενεργοποιήστε την κονσόλα σας

::: danger

Εάν ΔΕΝ γίνει εκκίνηση στο κανονικό μενού «ΗΟΜΕ» του 3DS ή εάν δεν είναι προσβάσιμη η εφαρμογή «System Settings» ή το πληκτρολόγιο, **ΜΗ συνεχίσετε με αυτές τις οδηγίες**! Γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) και ζητήστε (στα αγγλικά) από κάποιον εκεί να σας βοηθήσει.

:::

### Section IV - NAND Backup

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
3. Επιλέξτε «Scripts...»
4. Επιλέξτε «GM9Megascript»
5. Επιλέξτε «Backup Options»
6. Επιλέξτε «SysNAND Backup»
7. Πατήστε το (A) για επιβεβαίωση
   - This process will take some time
   - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. Πατήστε το (B) για να επιστρέψετε στο κύριο μενού
9. Επιλέξτε «Exit»
10. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
11. Επιλέξτε «Poweroff system» για να απενεργοποιήσετε την κονσόλα σας

### Section V - Removing illegitimate content

::: warning

Αυτή η ενότητα θα αφαιρέσει το παράνομο περιεχόμενο, όπως λογισμικό homebrew και αποτυπωμένες κασέτες. Εάν διαθέτετε αποθηκευμένα δεδομένα που σας ενδιαφέρουν, δημιουργήστε αντίγραφα ασφαλείας με κάποια εφαρμογή διαχείρισης αποθηκευμένων δεδομένων πριν συνεχίσετε!

:::

1. Ενεργοποιήστε την κονσόλα σας
2. Εκκινήστε την εφαρμογή «System Settings» στην κονσόλα σας
3. Μεταβείτε στο «Data Management» > «Nintendo 3DS» > «Software»
4. Σε αυτήν τη λίστα λογισμικού, διαγράψτε οποιοδήποτε περιεχόμενο που δεν ανήκει στη Nintendo και που εγκαταστήσατε κατά τη χρήση του CFW
   - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. Μεταβείτε στο `Data Management` -> `DSiWare`
6. Σε αυτήν τη λίστα λογισμικού, διαγράψτε οποιοδήποτε περιεχόμενο που δεν ανήκει στη Nintendo και που εγκαταστήσατε κατά τη χρήση του CFW
   - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
   - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. Κλείστε την εφαρμογή «System Settings»
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Περιμένετε μέχρι να δείτε τα δύο κουμπιά
10. Πατήστε τα (L) + (Κάτω) + (Select) ταυτόχρονα ώστε να εκκινήσετε το μενού Rosalina
11. Επιλέξτε «Miscellaneous options»
12. Select "Switch the hb. title to the current app."
13. Πατήστε το (Β) για να συνεχίσετε
14. Πατήστε το (B) για να επιστρέψετε στο κύριο μενού Rosalina
15. Πατήστε το (B) για να κλείσετε το μενού Rosalina
16. Πατήστε το (Home) και έπειτα, κλείστε το Download Play
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Η κονσόλα σας θα φορτώσει το Homebrew Launcher
19. Εκκινήστε το DSiWare Uninstaller από τη λίστα των εφαρμογών homebrew
20. Ακολουθήστε τις οδηγίες και επιτρέψτε στο πρόγραμμα να πραγματοποιήσει την κατάργηση της εγκατάστασης
21. Μόλις ολοκληρωθεί η διαδικασία, κλείστε το Homebrew Launcher και απενεργοποιήστε την κονσόλα σας

### Section VI - System Format

Αυτή η ενότητα θα διασφαλίσει ότι θα αφαιρεθούν όλα τα παράνομα ticket, επιτρέποντας στο eShop να λειτουργεί κανονικά. Αυτή η ενέργεια θα αφαιρέσει όλο το περιεχόμενο από το 3DS και θα σας αποσυνδέσει από το NNID σας. Λάβετε υπόψη ότι θα δημιουργηθεί ένα νέο, τυχαίο κλειδί κρυπτογράφησης για την κονσόλα σας, καθιστώντας οποιαδήποτε παλιά δεδομένα μη προσβάσιμα, ακόμα κι αν διαθέτετε αντίγραφο ασφαλείας των περιεχομένων της SD σας.

1. Ενεργοποιήστε την κονσόλα σας
2. Εκκινήστε την εφαρμογή «System Settings» στην κονσόλα σας
3. Μεταβείτε στο «Other Settings» -> Επόμενη σελίδα (μέχρι την τελευταία) -> «Format System Memory»
4. Ακολουθήστε τις οδηγίες για να διαμορφώσετε το 3DS σας

### Section VII - Running Uninstall Script

::: warning

Αυτή είναι η τελευταία σας ευκαιρία να επιβεβαιώσετε ότι έχετε ακολουθήσει όλα τα παραπάνω βήματα ασφαλείας! Βεβαιωθείτε ότι έχετε ακολουθήσει όλες τις ενότητες σε αυτήν τη σελίδα, **ειδικά** την `Ενότητα III - Δοκιμή ασφαλείας`, προτού να συνεχίσετε.

:::

::: danger

Εάν αφαιρείτε το CFW επειδή:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. Μια καλύτερη ιδέα θα ήταν να ζητήσετε βοήθεια στο [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp).

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
3. Επιλέξτε «Scripts...»
4. Επιλέξτε «GM9Megascript»
5. Επιλέξτε «Hax Options»
6. Επιλέξτε «Un-install Hax»
7. Πατήστε το (A) για να συνεχίσετε όταν σας ζητηθεί
8. Πατήστε το (A) για να ξεκλειδώσετε την εγγραφή στη SysNAND (lvl3) και έπειτα, εισαγάγετε τον συνδυασμό πλήκτρων που θα σας δοθεί
9. Πατήστε το (A) για να συνεχίσετε
10. Πατήστε το (B) για να επιστρέψετε στο κύριο μενού
11. Επιλέξτε «Exit»
12. Πατήστε το (Α) για να κλειδώσετε ξανά τα δικαιώματα εγγραφής εάν σας ζητηθεί
13. Πατήστε το (Start) για να επανεκκινήσετε την κονσόλα σας

___

::: tip

Όλο το custom firmware έχει αφαιρεθεί από την κονσόλα σας.

:::

::: info

Μπορείτε τώρα να διαγράψετε τυχόν επιπρόσθετα αρχεία και φακέλους από τη ρίζα της κάρτας SD σας, _εκτός_ από τους φακέλους `Nintendo 3DS`, `DCIM` και `private`.

:::
