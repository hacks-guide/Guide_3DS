# Επίλυση προβλημάτων (Soundhax)

Αυτή η σελίδα παρέχει συμβουλές για την επίλυση κοινών προβλημάτων που ενδέχεται να αντιμετωπίσετε με τα βήματα της σελίδας «Εγκατάσταση του boot9strap (Soundhax)», η οποία ισχύει για τις εκδόσεις συστήματος μεταξύ 1.0.0 και 11.3.0. Εάν δεν μπορείτε να διορθώσετε το ζήτημά σας με τις συμβουλές αυτής της σελίδας, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) και περιγράψτε το πρόβλημά σας, καθώς και όλες τις λύσεις που έχετε ήδη δοκιμάσει.

## Ζητήματα με το Soundhax

:::details Κόκκινη/μοβ/ροζ και λευκή οθόνη μετά την εκτέλεση του Soundhax

Εάν η κονσόλα σας διαθέτει την έκδοση συστήματος 9.4.0, 9.5.0 ή 9.6.0, ενδέχεται να αντιμετωπίσετε ένα σφάλμα με μια παλιά έκδοση του universal-otherapp. Κάντε λήψη της πιο πρόσφατης έκδοσης από [εδώ](https://github.com/TuxSH/universal-otherapp/releases/latest).

Αν η κονσόλα σας δεν διαθέτει κάποιο από αυτά τα firmware, αυτό υποδεικνύει ότι πιθανότατα διαθέτετε ήδη custom firmware. Θα πρέπει να [κάνετε έλεγχο για CFW](checking-for-cfw).

:::

:::details «An error has occurred, forcing the software to close...» (λευκό πλαίσιο μηνύματος)

Υπάρχει ένα πρόβλημα με το αρχείο `otherapp.bin` (απουσιάζει, δεν βρίσκεται στη σωστή τοποθεσία ή έχει καταστραφεί). Κάντε λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) και τοποθετήστε το στη ρίζα της κάρτας SD σας.

:::

:::details Σφάλμα «Could not play»

Δεν διαθέτετε το σωστό αρχείο του Soundhax για την κονσόλα και την περιοχή σας ή η κονσόλα σας δεν είναι συμβατή με το Soundhax. Στην τελευταία περίπτωση, οι ενέργειές σας θα καθορίσουν την έκδοση που διαθέτει το 3DS σας. Γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.

:::

:::details Failed to mount the SD card!

Εάν αυτό αποτύχει, δοκιμάστε να χρησιμοποιήσετε κάποια άλλη κάρτα SD.

:::

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Επιστροφή στην [Εγκατάσταση του boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
