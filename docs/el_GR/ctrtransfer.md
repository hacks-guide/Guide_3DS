# CTRTransfer

## Απαραίτητη ανάγνωση

Αυτή είναι μια πρόσθετη ενότητα για την εγκατάσταση ενός ειδώλου του CTRTransfer 11.15.0 στην κονσόλα σας.

::: info

Αυτή η σελίδα υποθέτει ότι έχετε ήδη εγκαταστήσει το Luma3DS και το boot9strap. Εάν ακολουθήσατε αυτόν τον ιστότοπο μέχρι το τέλος (Ολοκλήρωση εγκατάστασης), διαθέτετε το Luma3DS και το boot9strap.

:::

::: warning

Στα πλαίσια αυτής της διαδικασίας, θα γίνει επαναφορά των ρυθμίσεων του συστήματός σας στις προεπιλογές. Αυτές περιλαμβάνουν στοιχεία, όπως το όνομα χρήστη, τη χώρα και τη γλώσσα σας. **Τα εγκατεστημένα παιχνίδια και τα αποθηκευμένα δεδομένα τους δεν θα επηρεαστούν.**

:::

## Τι χρειάζεστε

- Την πιο πρόσφατη έκδοση του [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (το αρχείο `.zip` του GodMode9)
- Την πιο πρόσφατη έκδοση του [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (απευθείας λήψη)
- Την πιο πρόσφατη έκδοση του [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(το αρχείο `.3dsx`)_
- Την πιο πρόσφατη έκδοση του [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (κάντε δεξί κλικ και επιλέξτε «Αποθήκευση συνδέσμου ως»)
- Το είδωλο του CTRTransfer 11.15.0 για την κονσόλα και την περιοχή σας

    ::: warning

    Θα πρέπει να χρησιμοποιήσετε ένα πρόγραμμα torrent client για να κάνετε λήψη των ειδώλων CTRTransfer, όπως το [qBitTorrent](https://www.qbittorrent.org/download) ή το [Deluge](https://deluge-torrent.org/download/).

    :::

<!--@include: ./_include/ctrtransfer-images.md -->

## Οδηγίες

### Ενότητα I - Προετοιμασία

<!--@include: ./_include/ctrtransfer-prep.md -->

### Ενότητα II - Αντίγραφο ασφαλείας της NAND

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9

<!--@include: ./_include/nand-backup.md -->

### Ενότητα III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Ενότητα IV - Εκκίνηση του FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Ενότητα V - Εκ νέου εγκατάσταση των ticket

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Ενότητα VI - Διόρθωση ζητημάτων περιοχής

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)

:::
