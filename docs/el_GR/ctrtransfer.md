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

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
- The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(the `.3dsx` file)_
- A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - If you already have a torrent client, you do not need to download a new one
- The 11.15.0 CTRTransfer image for your console and region:

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
