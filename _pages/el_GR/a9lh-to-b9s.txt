---
title: "Από το A9LH στο B9S"
---

{% include toc title="Πίνακας περιεχομένων" %}

### Απαραίτητη ανάγνωση

Αυτή η σελίδα αφορά τους υφιστάμενους χρήστες του arm9loaderhax που επιθυμούν να αναβαθμίσουν τις κονσόλες τους στο boot9strap.

Όλες οι μελλοντικές εκδόσεις του Luma3DS θα διατίθενται μόνο σε μορφή `.firm`, η οποία θα είναι συμβατή μόνο το boot9strap και το sighax. Αυτό σημαίνει ότι για να συνεχίσετε να λαμβάνετε τις πιο πρόσφατες ενημερώσεις του Luma3DS, θα πρέπει να χρησιμοποιήσετε αυτήν τη σελίδα για να ενημερώσετε την εγκατάσταση σας.

Για να αποσυμπιέσετε τα αρχεία `.7z` που παρέχουν οι σύνδεσμοι αυτής της σελίδας, θα χρειαστείτε ένα πρόγραμμα αρχειοθέτησης, όπως το [7-Zip](http://www.7-zip.org/) ή το [The Unarchiver](https://theunarchiver.com/).

### Τι χρειάζεστε

Για να χρησιμοποιήσετε τους συνδέσμους [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) αυτής της σελίδας, θα χρειαστείτε ένα πρόγραμμα torrent, όπως το [qBittorrent](https://www.qbittorrent.org/download.php) ή το [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

Σημειώστε ότι, μόνο στο New 3DS, απαιτείται το `secret_sector.bin` για την επαναφορά του exploit «arm9loaderhax». Για τον λόγο αυτό, δεν είναι απαραίτητο για την εγκατάσταση του boot9strap σε μια μη τροποποιημένη κονσόλα. Εάν δεν διαθέτετε ένα New 3DS, δεν χρειάζεστε το `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="Αυτός είναι ένας σύνδεσμος magnet. Χρησιμοποιήστε ένα πρόγραμμα torrent για να κάνετε λήψη του αρχείου."></i> - **Μόνο για χρήστες του New 3DS:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (σύνδεσμος magnet)
* Την πιο πρόσφατη έκδοση του [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (το αρχείο `.zip` του Luma3DS)
* Την έκδοση 7.0.5 του [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (απευθείας λήψη)
* Την πιο πρόσφατη έκδοση του [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (απευθείας λήψη)
* Την πιο πρόσφατη έκδοση του [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (απευθείας λήψη)

### Οδηγίες

#### Ενότητα I - Προετοιμασία

Για όλα τα βήματα αυτής της ενότητας, αντικαταστήστε όλα τα τυχόν υπάρχοντα αρχεία στην κάρτα SD σας.
{: .notice--info}

1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Αντιγράψτε τα αρχεία `boot.firm` και `boot.3dsx` από το αρχείο `.zip` της πιο πρόσφατης έκδοσης του Luma3DS στη ρίζα της κάρτας SD σας
    + Η ρίζα της κάρτας SD είναι ο αρχικός κατάλογος της κάρτας SD σας, όπου μπορείτε να δείτε τον φάκελο «Nintendo 3DS», χωρίς να βρίσκεστε μέσα σε αυτόν
1. Αντιγράψτε το `arm9loaderhax.bin` από το αρχείο `.7z` της έκδοσης 7.0.5 του Luma3DS στη ρίζα της κάρτας SD σας
1. Αντιγράψτε το `SafeB9SInstaller.bin` από το αρχείο `.zip` του SafeB9SInstaller στον φάκελο `/luma/payloads/` της κάρτας SD σας
    + Εάν δεν υπάρχουν οι φάκελοι `luma` ή `payloads`, δημιουργήστε τους
    + Διαγράψτε οποιαδήποτε άλλα αρχεία payload της μορφής `.bin` (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin` κ.λπ.) από τον φάκελο `/luma/payloads/` της κάρτας SD σας, καθώς δεν θα είναι συμβατά με τις εκδόσεις του Luma3DS που είναι συμβατές με το boot9strap
1. Δημιουργήστε έναν φάκελο με το όνομα `boot9strap` στη ρίζα της κάρτας SD σας
1. Αντιγράψτε τα `boot9strap.firm` και `boot9strap.firm.sha` από το αρχείο `.zip` του boot9strap στον φάκελο `/boot9strap/` της κάρτας SD σας
1. **Μόνο για χρήστες του New 3DS:** Αντιγράψτε το `secret_sector.bin` στον φάκελο `/boot9strap/` της κάρτας SD σας

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

#### Ενότητα II - Εγκατάσταση του boot9strap

1. Ενεργοποιήστε την κονσόλα σας κρατώντας παράλληλα πατημένο το (Start) για να κάνετε εκκίνηση του SafeB9SInstaller
    + Εάν δείτε την οθόνη ρυθμίσεων του Luma αντί του SafeB9SInstaller, πατήστε απλώς το (Start), απενεργοποιήστε το 3DS σας και δοκιμάστε ξανά
    + Εάν λάβετε σφάλμα, δοκιμάστε να χρησιμοποιήσετε μια νέα κάρτα SD ή να διαμορφώσετε την τρέχουσα κάρτα SD σας (δημιουργήστε πρώτα αντίγραφα ασφαλείας για τα υπάρχοντα αρχεία σας)
1. Περιμένετε μέχρι να ολοκληρωθούν όλοι οι έλεγχοι ασφαλείας
    + Εάν λάβετε το σφάλμα «OTP Crypto Fail», κάντε λήψη του <i class="fa fa-magnet" aria-hidden="true" title="Αυτός είναι ένας σύνδεσμος magnet. Χρησιμοποιήστε ένα πρόγραμμα torrent για να κάνετε λήψη του αρχείου."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), τοποθετήστε το στον φάκελο `/boot9strap/` της κάρτας SD σας και δοκιμάστε ξανά
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Η κονσόλα σας θα πρέπει να έχει κάνει επανεκκίνηση στο μενού ρυθμίσεων του Luma3DS
    + Το μενού ρυθμίσεων του Luma3DS περιέχει επιλογές για το custom firmware «Luma3DS». Πολλές από αυτές τις ρυθμίσεις χρησιμεύουν στην προσαρμογή ή τον έλεγχο για σφάλματα
    + Στα πλαίσια αυτού του οδηγού, αυτές οι ρυθμίσεις θα παραμείνουν στις προεπιλογές τους
    + Εάν δείτε μια μαύρη οθόνη, [ακολουθήστε αυτόν τον οδηγό επίλυσης προβλημάτων](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Πατήστε το (Start) για αποθήκευση και επανεκκίνηση

___

### Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)
{: .notice--primary}
