# Από το A9LH στο B9S

## Απαραίτητη ανάγνωση

Αυτή η σελίδα αφορά τους υφιστάμενους χρήστες του arm9loaderhax που επιθυμούν να αναβαθμίσουν τις κονσόλες τους στο boot9strap.

Όλες οι μελλοντικές εκδόσεις του Luma3DS θα διατίθενται μόνο σε μορφή `.firm`, η οποία θα είναι συμβατή μόνο το boot9strap και το sighax. Αυτό σημαίνει ότι για να συνεχίσετε να λαμβάνετε τις πιο πρόσφατες ενημερώσεις του Luma3DS, θα πρέπει να χρησιμοποιήσετε αυτήν τη σελίδα για να ενημερώσετε την εγκατάσταση σας.

## Τι χρειάζεστε

::: warning

Για να χρησιμοποιήσετε τους συνδέσμους [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) αυτής της σελίδας, θα χρειαστείτε ένα πρόγραμμα torrent, όπως το [qBittorrent](https://www.qbittorrent.org/download.php) ή το [Deluge](http://dev.deluge-torrent.org/wiki/Download).

:::

::: info

Σημειώστε ότι, μόνο στο New 3DS, απαιτείται το `secret_sector.bin` για την επαναφορά του exploit «arm9loaderhax». Για τον λόγο αυτό, δεν είναι απαραίτητο για την εγκατάσταση του boot9strap σε μια μη τροποποιημένη κονσόλα. Εάν δεν διαθέτετε ένα New 3DS, δεν χρειάζεστε το `secret_sector.bin`.

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> - **Μόνο για χρήστες του New 3DS:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (σύνδεσμος magnet)
- Την πιο πρόσφατη έκδοση του [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (το αρχείο `.zip` του Luma3DS)
- Την έκδοση 7.0.5 του [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (απευθείας λήψη)
- Την πιο πρόσφατη έκδοση του [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (απευθείας λήψη)
- Την πιο πρόσφατη έκδοση του [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (απευθείας λήψη)

## Οδηγίες

### Ενότητα I - Προετοιμασία

::: info

Για όλα τα βήματα αυτής της ενότητας, αντικαταστήστε όλα τα τυχόν υπάρχοντα αρχεία στην κάρτα SD σας.

:::

1. Απενεργοποιήστε την κονσόλα σας

2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας

3. Αντιγράψτε τα πάντα από το πιο πρόσφατο αρχείο `.zip` του Luma3DS στη ρίζα της κάρτας SD σας
    - Η ρίζα της κάρτας SD είναι ο αρχικός κατάλογος της κάρτας SD σας, όπου μπορείτε να δείτε τον φάκελο «Nintendo 3DS», χωρίς να βρίσκεστε μέσα σε αυτόν

4. Αντιγράψτε το `arm9loaderhax.bin` από το αρχείο `.zip` της έκδοσης 7.0.5 του Luma3DS στη ρίζα της κάρτας SD σας

5. Αντιγράψτε το `SafeB9SInstaller.bin` από το αρχείο `.zip` του SafeB9SInstaller στον φάκελο `/luma/payloads/` της κάρτας SD σας
    - Εάν δεν υπάρχουν οι φάκελοι `luma` ή `payloads`, δημιουργήστε τους
    - Διαγράψτε οποιαδήποτε άλλα υπάρχοντα payload τύπου `.bin` (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin` κ.λπ.) στον φάκελο `/luma/payloads/` της κάρτας SD σας, καθώς δεν θα είναι συμβατά με τις εκδόσεις του Luma3DS που είναι συμβατές με το boot9strap

6. Δημιουργήστε έναν φάκελο με το όνομα `boot9strap` στη ρίζα της κάρτας SD σας

7. Αντιγράψτε τα `boot9strap.firm` και `boot9strap.firm.sha` από το αρχείο `.zip` του boot9strap στον φάκελο `/boot9strap/` της κάρτας SD σας

8. **Μόνο για χρήστες του New 3DS:** Αντιγράψτε το `secret_sector.bin` στον φάκελο `/boot9strap/` της κάρτας SD σας

    ::: info

    ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

    :::

9. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

### Ενότητα II - Εγκατάσταση του boot9strap

1. Ενεργοποιήστε την κονσόλα σας κρατώντας παράλληλα πατημένο το (Start) για να κάνετε εκκίνηση του SafeB9SInstaller
    - Εάν δείτε την οθόνη ρυθμίσεων του Luma αντί του SafeB9SInstaller, πατήστε απλώς το (Start), απενεργοποιήστε το 3DS σας και δοκιμάστε ξανά
    - Εάν λάβετε σφάλμα, δοκιμάστε να χρησιμοποιήσετε μια νέα κάρτα SD ή να διαμορφώσετε την τρέχουσα κάρτα SD σας (δημιουργήστε πρώτα αντίγραφα ασφαλείας για τα υπάρχοντα αρχεία σας)
2. Περιμένετε μέχρι να ολοκληρωθούν όλοι οι έλεγχοι ασφαλείας
    - Εάν λάβετε το σφάλμα «OTP Crypto Fail», κάντε λήψη του <font-awesome-icon icon="fa-solid fa-magnet"/> - aeskeydb.bin, τοποθετήστε το στον φάκελο `/boot9strap/` της κάρτας SD σας και δοκιμάστε ξανά
3. Όταν ζητηθεί, εισαγάγετε τον συνδυασμό πλήκτρων που θα εμφανιστεί στην πάνω οθόνη, ώστε να εγκαταστήσετε το boot9strap
    - Εάν το κείμενο κάποιου βήματος στην κάτω οθόνη έχει κόκκινο χρώμα και δεν σας ζητείται να εισαγάγετε κάποιον συνδυασμό πλήκτρων, [ακολουθήστε αυτόν τον οδηγό επίλυσης προβλημάτων](troubleshooting-a9lh-to-b9s)

<!--@include: ./_include/configure-luma3ds.md -->

___

::: tip

Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)

:::
