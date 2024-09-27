# Φόρτωση του ntrboot (NDS)

## Required Reading

Πριν συνεχίσετε, βεβαιωθείτε ότι έχετε διαβάσει όλες τις πληροφορίες σχετικά με το [ntrboot](ntrboot)

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε ένα Nintendo DS ή Nintendo DS Lite που να είναι συμβατό με τη flashcart σας. Αυτή η μέθοδος χρησιμοποιεί τη flashcart για την εκτέλεση του αρχείου `.nds` του εργαλείου φόρτωσης του ntrboot στο NDS σας.

::: danger

Σημειώστε ότι σε ορισμένες, σπάνιες περιπτώσεις, η διαδικασία φόρτωσης ενδέχεται να καταστήσει μια πλαστή flashcart οριστικά **μη λειτουργική**. Αυτό είναι σχεδόν απίθανο, αλλά παρ' όλα αυτά, υποστηρίζονται μόνο αυθεντικές flashcart. Για να μειωθεί η πιθανότητα αγοράς μιας πλαστής flashcart, προτείνουμε να χρησιμοποιήσετε έναν αξιόπιστο ιστότοπο για τις αγορές σας (όπως το [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source NDS / NDSL**: the Nintendo DS or Nintendo DS Lite which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Απενεργοποιήστε **το NDS/NDSL προέλευσης**
2. Εισαγάγετε την κάρτα SD της flashcart στον υπολογιστή σας
3. Δημιουργήστε έναν φάκελο με το όνομα `ntrboot` στη ρίζα της κάρτας SD της flashcart σας
4. Αντιγράψτε το `boot9strap_ntr.firm` από το αρχείο `.zip` του boot9strap ntr στον φάκελο `/ntrboot/` της κάρτας SD της flashcart σας
5. Αντιγράψτε το `ntrboot_flasher_nds.nds` στην κάρτα SD της flashcart σας
6. Εισαγάγετε την κάρτα SD της flashcart ξανά στη flashcart σας
7. Εισαγάγετε τη, συμβατή με ntrboot, flashcart για DS/DSi στο **NDS/NDSL προέλευσης**

### Section II - Flashing ntrboot

1. Εκκινήστε το `ntrboot_flasher_nds.nds` στο **NDS/NDSL προέλευσης** μέσω της flashcart σας
2. Πατήστε το (A) για να συνεχίσετε
3. Χρησιμοποιήστε τα (Πάνω) και (Κάτω) για να επιλέξετε τη flashcart σας
4. Πατήστε το (A) για να συνεχίσετε
5. Επιλέξτε «Dump flash» για να δημιουργηθεί ένα αντίγραφο ασφαλείας της μνήμης της flashcart
6. Εισαγάγετε τον συνδυασμό πλήκτρων που δίνεται για επιβεβαίωση
7. Πατήστε το (A) για να συνεχίσετε
8. Χρησιμοποιήστε τα (Πάνω) και (Κάτω) για να επιλέξετε τη flashcart σας
9. Πατήστε το (A) για να συνεχίσετε
10. Επιλέξτε «Inject FIRM» για να εγκαταστήσετε το boot9strap στη flashcart σας
11. Εισαγάγετε τον συνδυασμό πλήκτρων που δίνεται για επιβεβαίωση
12. Πατήστε το (A) για να συνεχίσετε
13. Απενεργοποιήστε **το NDS/NDSL προέλευσης**
14. Αφαιρέστε τη flashcart σας από **το NDS/NDSL προέλευσης**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
