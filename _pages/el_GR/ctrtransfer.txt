---
title: "CTRTransfer"
---

{% include toc title="Πίνακας περιεχομένων" %}

### Απαραίτητη ανάγνωση

Αυτή είναι μια πρόσθετη ενότητα για την εγκατάσταση ενός ειδώλου του CTRTransfer 11.15.0 στην κονσόλα σας.

Αυτή η σελίδα υποθέτει ότι έχετε ήδη εγκαταστήσει το Luma3DS και το boot9strap. Εάν ακολουθήσατε αυτόν τον ιστότοπο μέχρι το τέλος (Ολοκλήρωση εγκατάστασης), διαθέτετε το Luma3DS και το boot9strap.
{: .notice--info}

Στα πλαίσια αυτής της διαδικασίας, θα γίνει επαναφορά των ρυθμίσεων του συστήματός σας στις προεπιλογές. Αυτές περιλαμβάνουν στοιχεία, όπως το όνομα χρήστη, τη χώρα και τη γλώσσα σας. **Τα εγκατεστημένα παιχνίδια και τα αποθηκευμένα δεδομένα τους δεν θα επηρεαστούν.**
{: .notice--warning}

### Τι χρειάζεστε

* Την πιο πρόσφατη έκδοση του [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (το αρχείο `.zip` του GodMode9)
* Την πιο πρόσφατη έκδοση του [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (απευθείας λήψη)
* Την πιο πρόσφατη έκδοση του [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(το αρχείο `.3dsx`)*
* Ένα πρόγραμμα torrent, όπως το [qBittorrent](https://www.qbittorrent.org/download.php) ή το [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * Εάν διαθέτετε ήδη κάποιο πρόγραμμα torrent, δεν χρειάζεται να κάνετε λήψη ενός νέου
* Το είδωλο του CTRTransfer 11.15.0 για την κονσόλα και την περιοχή σας:
{% include_relative include/ctrtransfer-images.txt %}

### Οδηγίες

#### Ενότητα I - Προετοιμασία

{% include_relative include/ctrtransfer-prep.txt %}

#### Ενότητα II - Αντίγραφο ασφαλείας NAND

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
{% include_relative include/nand-backup.txt %}

#### Ενότητα III - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### Ενότητα IV - Εκκίνηση του FBI

{% include_relative include/launch-hbl-dlp.txt %}

#### Ενότητα V - Εκ νέου εγκατάσταση των ticket

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Ενότητα VI - Διόρθωση ζητημάτων περιοχής

{% include_relative include/ctrnand-datayeet.txt %}

___

### Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)
{: .notice--primary}
