# Φόρτωση του ntrboot (DSi)

## Required Reading

Πριν συνεχίσετε, βεβαιωθείτε ότι έχετε διαβάσει όλες τις πληροφορίες σχετικά με το [ntrboot](ntrboot)

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε ένα Nintendo DSi που να είναι συμβατό με τη flashcart σας. Αυτή η μέθοδος χρησιμοποιεί τη flashcart για την εκτέλεση του αρχείου `.nds` του εργαλείου φόρτωσης του ntrboot στο DSi σας. Αυτό σημαίνει ότι η flashcart σας πρέπει να υποστηρίζει την εκκίνηση αρχείων `.nds` στην έκδοση συστήματος του DSi σας. Δείτε τον πίνακα flashcart στη σελίδα [ntrboot](ntrboot) για περισσότερες πληροφορίες.

::: danger

Σημειώστε ότι σε ορισμένες, σπάνιες περιπτώσεις, η διαδικασία φόρτωσης ενδέχεται να καταστήσει μια πλαστή flashcart οριστικά **μη λειτουργική**. Αυτό είναι σχεδόν απίθανο, αλλά παρ' όλα αυτά, υποστηρίζονται μόνο αυθεντικές flashcart. Για να μειωθεί η πιθανότητα αγοράς μιας πλαστής flashcart, προτείνουμε να χρησιμοποιήσετε έναν αξιόπιστο ιστότοπο για τις αγορές σας (όπως το [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Απενεργοποιήστε το **DSi προέλευσης**
2. Εισαγάγετε την κάρτα SD της flashcart στον υπολογιστή σας
3. Αντιγράψτε το `ds_ntrboot_flasher_dsi.nds` στην κάρτα SD της flashcart σας
4. Εισαγάγετε την κάρτα SD της flashcart ξανά στη flashcart σας
5. Εισαγάγετε τη, συμβατή με ntrboot, flashcart για DS/DSi στο **DSi προέλευσης**

### Section II - Flashing ntrboot

1. Εκκινήστε το `ds_ntrboot_flasher_dsi.nds` στο **DSi προέλευσης** μέσω της flashcart σας
2. Πατήστε το (A) για να συνεχίσετε
3. Χρησιμοποιήστε τα (Πάνω) και (Κάτω) για να επιλέξετε τη flashcart σας
4. Πατήστε το (A) για να συνεχίσετε
5. Πατήστε το (A) για να εκτελεστεί η εντολή «inject ntrboothax»
6. Πατήστε το (Α) για να επιλέξετε «RETAIL»
7. Πατήστε το (A) για να συνεχίσετε
8. Επιλέξτε «EXIT»

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
