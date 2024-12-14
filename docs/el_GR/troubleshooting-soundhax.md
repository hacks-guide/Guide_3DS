---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-frankenfirm-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Επίλυση προβλημάτων (Soundhax)

Αυτή η σελίδα παρέχει συμβουλές για την επίλυση κοινών προβλημάτων που ενδέχεται να αντιμετωπίσετε με τα βήματα της σελίδας «Εγκατάσταση του boot9strap (Soundhax)», η οποία ισχύει για τις εκδόσεις συστήματος μεταξύ 1.0.0 και 11.3.0. Εάν δεν μπορείτε να διορθώσετε το ζήτημά σας με τις συμβουλές αυτής της σελίδας, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) και περιγράψτε το πρόβλημά σας, καθώς και όλες τις λύσεις που έχετε ήδη δοκιμάσει.

## Ζητήματα με το Soundhax

:::details Κόκκινη/μοβ/ροζ και λευκή οθόνη μετά την εκτέλεση του Soundhax

Εάν η κονσόλα σας διαθέτει την έκδοση συστήματος 9.4.0, 9.5.0 ή 9.6.0, ενδέχεται να αντιμετωπίσετε ένα σφάλμα με μια παλιά έκδοση του universal-otherapp. Κάντε λήψη της πιο πρόσφατης έκδοσης από [εδώ](https://github.com/TuxSH/universal-otherapp/releases/latest).

Αν η κονσόλα σας δεν διαθέτει κάποιο από αυτά τα firmware, αυτό υποδεικνύει ότι πιθανότατα διαθέτετε ήδη custom firmware. Θα πρέπει να [κάνετε έλεγχο για CFW](checking-for-cfw).

:::

:::details «An error has occurred, forcing the software to close...» (λευκό πλαίσιο μηνύματος)

Υπάρχει ένα πρόβλημα με το αρχείο `otherapp.bin` (απουσιάζει, δεν βρίσκεται στη σωστή τοποθεσία ή έχει καταστραφεί). Κάντε λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) και τοποθετήστε το στη ρίζα της κάρτας SD σας.

Εάν το παραπάνω δεν διορθώσει το πρόβλημά σας και χρησιμοποιείτε ένα Old 3DS/Old 3DS XL/Old 2DS, ενδέχεται να υπάρχει κάποιο ζήτημα όσον αφορά τις ενημερώσεις των κασετών. Ρίξτε ξανά μια ματιά στην έκδοση συστήματος. Εάν ο τελευταίος αριθμός είναι 4 ή μικρότερος (π.χ. 11.3.0-**4**U), αντικαταστήστε το αρχείο του Soundhax στη ρίζα της κάρτας SD σας με αυτό [εδώ](http://soundhax.686178.xyz/frankenfirm.html?crash).

Εάν τίποτα από αυτά δεν διορθώσει το πρόβλημά σας, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.

:::

:::details Σφάλμα «Could not play»

Δεν έχετε το σωστό αρχείο του Soundhax για την κονσόλα, την περιοχή και την έκδοση firmware σας. Βεβαιωθείτε ότι έχετε εισαγάγει σωστά όλες τις πληροφορίες στον [ιστότοπο του Soundhax](https://soundhax.com/), κάντε εκ νέου λήψη του αρχείου του Soundhax και αντικαταστήστε αυτό που βρίσκεται στη ρίζα της κάρτας SD σας.

Εάν το παραπάνω δεν διορθώσει το πρόβλημά σας και χρησιμοποιείτε ένα Old 3DS/Old 3DS XL/Old 2DS, ενδέχεται να υπάρχει κάποιο ζήτημα όσον αφορά τις ενημερώσεις των κασετών. Ρίξτε ξανά μια ματιά στην έκδοση συστήματος. Εάν ο τελευταίος αριθμός είναι 3 ή μικρότερος (π.χ. 11.3.0-**0**U), αντικαταστήστε το αρχείο του Soundhax στη ρίζα της κάρτας SD σας με αυτό [εδώ](http://soundhax.686178.xyz/frankenfirm.html?unplayable).

Εάν τίποτα από αυτά δεν διορθώσει το πρόβλημά σας, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.

:::

:::details Failed to mount the SD card!

Εάν αυτό αποτύχει, δοκιμάστε να χρησιμοποιήσετε κάποια άλλη κάρτα SD.

:::

## Ζητήματα με το SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Επιστροφή στην [Εγκατάσταση του boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
