# Επίλυση προβλημάτων (SSLoth-Browser)

Αυτή η σελίδα παρέχει συμβουλές για την επίλυση κοινών προβλημάτων που ενδέχεται να αντιμετωπίσετε με τα βήματα της σελίδας «Εγκατάσταση του boot9strap (SSLoth-Browser)», η οποία ισχύει για τις εκδόσεις συστήματος μεταξύ 11.4.0 και 11.13.0. Εάν δεν μπορείτε να διορθώσετε το ζήτημά σας με τις συμβουλές αυτής της σελίδας, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) και περιγράψτε το πρόβλημά σας, καθώς και όλες τις λύσεις που έχετε ήδη δοκιμάσει.

::: warning

Αυτές οι οδηγίες ισχύουν μόνο για τη σελίδα «Εγκατάσταση του boot9strap (SSLoth-Browser)». Εάν χρησιμοποιείτε ένα **New 3DS** με την έκδοση **11.15.0 έως 11.17.0**, θα πρέπει να ακολουθήσετε τις [οδηγίες επίλυσης προβλημάτων για την Εγκατάσταση του boot9strap (super-skaterhax)](troubleshooting-super-skaterhax).

:::

## SSLoth-Browser

:::details Κόκκινη/μωβ/ροζ και λευκή οθόνη μετά την εκτέλεση του Browserhax

Αυτό δείχνει ότι πιθανότατα διαθέτετε ήδη custom firmware. Θα πρέπει να [κάνετε έλεγχο για CFW](checking-for-cfw).

:::

:::details «An error has occurred. Hold down the POWER button to turn off the power...» (μαύρη οθόνη με κείμενο)

Το αρχείο `arm11code.bin` απουσιάζει ή βρίσκεται σε λάθος τοποθεσία. Κάντε λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), τοποθετήστε το `otherapp.bin` στη ρίζα της κάρτας SD σας και μετονομάστε το σε `arm11code.bin`. Μην προσθέσετε την επέκταση `.bin` αν δεν τη βλέπετε ήδη.

:::

:::details «An error has occurred, forcing the software to close...» (λευκό πλαίσιο μηνύματος)

Ενδέχεται να υπάρχει πρόβλημα με το αρχείο `arm11code.bin` σας. Κάντε λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), τοποθετήστε το `otherapp.bin` στη ρίζα της κάρτας SD σας και μετονομάστε το σε `arm11code.bin`. Μην προσθέσετε την επέκταση `.bin` αν δεν τη βλέπετε ήδη.

Μπορείτε επίσης να δοκιμάσετε την επαναφορά των αποθηκευμένων δεδομένων του προγράμματος περιήγησης:

1. Ανοίξτε την εφαρμογή «Internet Browser» και έπειτα, μεταβείτε στις ρυθμίσεις της
2. Μεταβείτε στο κάτω μέρος και επιλέξτε «Reset Save Data» (ή «Initialize Save Data» ή «Clear All Save Data»)
3. Δοκιμάστε ξανά το exploit

:::

:::details Απρόσμενη διακοπή λειτουργίας κατά το άνοιγμα του κωδικού QR ή του URL του browserhax

Τα exploit που βασίζονται στην εφαρμογή «Internet Browser» (όπως το browserhax ή το 2xrsa) είναι συχνά ασταθή και προκαλούν διακοπή λειτουργίας, αλλά μπορούν κάποιες φορές να διορθωθούν ακολουθώντας τα παρακάτω βήματα.

1. Ανοίξτε την εφαρμογή «Internet Browser» και έπειτα, μεταβείτε στις ρυθμίσεις της
2. Μεταβείτε στο κάτω μέρος και επιλέξτε «Reset Save Data» (ή «Initialize Save Data» ή «Clear All Save Data»)
3. Δοκιμάστε ξανά το exploit

:::

:::details Μήνυμα για ενημέρωση συστήματος κατά το άνοιγμα του προγράμματος περιήγησης

Ο διακομιστής μεσολάβησης του SSLoth δεν ρυθμίστηκε σωστά. Επαναλάβετε την ενότητα του SSLoth στη σελίδα.

:::

:::details Σφάλμα 032-0420 κατά το άνοιγμα του προγράμματος περιήγησης

Ακολουθήστε αυτά τα βήματα με τη σειρά:

1. Εκκινήστε την εφαρμογή «System Settings» στην κονσόλα σας
2. Μεταβείτε στο `Internet Settings` -> `Connection Settings`
3. Επιλέξτε τη θέση σύνδεσης δικτύου σας και μεταβείτε στο `Change Settings` -> `Επόμενη σελίδα (δεξί βέλος)` -> `Proxy Settings`
4. Ορίστε την επιλογή «Proxy Settings» σε «No»
5. Επιλέξτε «OK» και έπειτα, «Save»
6. Όταν σας ζητηθεί, επιλέξτε «Test» για να πραγματοποιήσετε τη δοκιμή σύνδεσης
   - Η δοκιμή θα πρέπει να πετύχει
7. Πατήστε «OK» για να συνεχίσετε
8. Πατήστε «Back» δύο φορές και έπειτα, «Close» για να επιστρέψετε στο μενού «HOME»
9. Ανοίξτε μία φορά την εφαρμογή «Internet Browser»
10. Εάν σας ζητηθεί ενημέρωση του συστήματος, πατήστε «OK»
    - Αυτή η ενέργεια δεν θα ενημερώσει το σύστημα
11. Ξεκινήστε ξανά από την [Ενότητα II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details «Πάγωμα» στην οθόνη «Doing agbhax...»

Ενδέχεται να υπάρχει πρόβλημα με το αρχείο `arm11code.bin` σας. Κάντε ξανά λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), τοποθετήστε το στη ρίζα της κάρτας SD σας και μετονομάστε το σε `arm11code.bin`. Μην προσθέσετε την επέκταση `.bin` αν δεν τη βλέπετε ήδη.

:::

:::details «PrepareArm9ForTwl returned error c8804631!»

Γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.

:::

:::details Failed to mount the SD card!

Δημιουργήστε αντίγραφα ασφαλείας των δεδομένων σας και διαμορφώστε ξανά την κάρτα SD σας ως FAT32 με το συνιστώμενο εργαλείο, ανάλογα με το λειτουργικό σας σύστημα ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). Είναι γνωστό ότι το MiniTool Partition Wizard και το εργαλείο διαμόρφωσης της HP (HPUSBDisk) προκαλούν προβλήματα με τις κάρτες SD των 3DS.

Εάν αυτό αποτύχει, δοκιμάστε να χρησιμοποιήσετε κάποια άλλη κάρτα SD.

:::

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Επιστροφή στην [Εγκατάσταση του boot9strap (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
