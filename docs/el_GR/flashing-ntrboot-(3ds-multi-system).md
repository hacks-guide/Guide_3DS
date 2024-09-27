# Φόρτωση του ntrboot (πολλαπλά συστήματα 3DS)

## Required Reading

Πριν συνεχίσετε, βεβαιωθείτε ότι έχετε διαβάσει όλες τις πληροφορίες σχετικά με το [ntrboot](ntrboot).

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε μια δεύτερη κονσόλα της οικογένειας 3DS που να εκτελεί ήδη το boot9strap. Η flashcart σας δεν είναι απαραίτητο να υποστηρίζει την έκδοση κανενός εκ των 3DS που διαθέτετε.

::: danger

Σημειώστε ότι σε ορισμένες, σπάνιες περιπτώσεις, η διαδικασία φόρτωσης ενδέχεται να καταστήσει μια πλαστή flashcart οριστικά **μη λειτουργική**. Αυτό είναι σχεδόν απίθανο, αλλά παρ' όλα αυτά, υποστηρίζονται μόνο αυθεντικές flashcart. Για να μειωθεί η πιθανότητα αγοράς μιας πλαστής flashcart, προτείνουμε να χρησιμοποιήσετε έναν αξιόπιστο ιστότοπο για τις αγορές σας (όπως το [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
  - **The source 3DS**: the 3DS family console that is already running boot9strap
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. Απενεργοποιήστε **το 3DS προέλευσης**
2. Εισαγάγετε την κάρτα SD **του 3DS προέλευσης** στον υπολογιστή σας
3. Δημιουργήστε έναν φάκελο με το όνομα `ntrboot` στη ρίζα της κάρτας SD σας
4. Αντιγράψτε τα `boot9strap_ntr.firm` και `boot9strap_ntr.firm.sha` από το αρχείο `.zip` του boot9strap ntr στον φάκελο `/ntrboot/` της κάρτας SD σας
5. Αντιγράψτε το `ntrboot_flasher.firm` στον φάκελο `/luma/payloads/` της κάρτας SD **του 3DS προέλευσης**
6. Εισαγάγετε την κάρτα SD **του 3DS προέλευσης** ξανά στο **3DS προέλευσης**
7. Εισαγάγετε τη, συμβατή με ntrboot, flashcart για DS/DSi στο **3DS προέλευσης**

### Section II - Flashing ntrboot

1. Εκκινήστε το chainloader του Luma3DS κρατώντας πατημένο το (Start) κατά την ενεργοποίηση **του 3DS προέλευσης**
2. Επιλέξτε «ntrboot_flasher»
3. Διαβάστε την προειδοποίηση στην κόκκινη οθόνη
4. Πατήστε το (A) για να συνεχίσετε
5. Επιλέξτε τη flashcart σας
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Επιλέξτε «Dump Flash»
7. Περιμένετε μέχρι να ολοκληρωθεί η διαδικασία
8. Πατήστε το (A) για να συνεχίσετε
9. Πατήστε το (A) για να επιστρέψετε στο κύριο μενού
10. Επιλέξτε «Inject Ntrboot»
11. Πατήστε το (Α) για να εκτελεστεί η εντολή «retail unit ntrboot»
12. Περιμένετε μέχρι να ολοκληρωθεί η διαδικασία
13. Πατήστε το (A) για να επιστρέψετε στο κύριο μενού
14. Πατήστε το (B) για να απενεργοποιήσετε **το 3DS προέλευσης**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
