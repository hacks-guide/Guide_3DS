---
title: "Επίλυση προβλημάτων"
---

Αυτή η σελίδα παρέχει συμβουλές για την επίλυση κοινών προβλημάτων. Εάν δεν μπορείτε να διορθώσετε το ζήτημά σας με τις συμβουλές αυτής της σελίδας, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord. g/MWxPgEp) και περιγράψτε το πρόβλημά σας, καθώς και όλες τις λύσεις που έχετε ήδη δοκιμάσει.

{% capture compat %}
<summary>Πίνακας περιεχομένων</summary>

Χρησιμοποιείται σε πολλαπλές σελίδες:
* [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Σελίδες οδηγού:
* [Εγκατάσταση του boot9strap (Soundhax)](#installing-boot9strap-soundhax)
* [Εγκατάσταση του boot9strap (MSET9)](#installing-boot9strap-mset9)
* [Εγκατάσταση του boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
* [Εγκατάσταση του boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
* [Ολοκλήρωση εγκατάστασης](#finalizing-setup)

Ζητήματα μετά την εγκατάσταση:
* [Ζητήματα εκκίνησης](#boot-issues-on-consoles-with-custom-firmware)
* [Ζητήματα λογισμικού](#software-issues-on-consoles-with-custom-firmware)

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--info}

## Ζητήματα με το SafeB9SInstaller

### Πριν από το άνοιγμα του SafeB9SInstaller

{% capture compat %}
<summary><u>Failed to open SafeB9SInstaller.bin</u></summary>

Το αρχείο `SafeB9SInstaller.bin` απουσιάζει ή βρίσκεται σε λάθος σημείο. Κάντε λήψη της πιο πρόσφατης έκδοσης του [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip), αποσυμπιέστε το αρχείο και τοποθετήστε το `SafeB9SInstaller.bin` στη ρίζα της κάρτας SD σας. Μην προσθέσετε την επέκταση `.bin` αν δεν τη βλέπετε ήδη.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### SigHaxed FIRM was not installed! Check lower screen for more info.

{% capture compat %}
<summary><u>MicroSD Card - init failed</u></summary>

Η κάρτα SD σας έχει πιθανότατα παράξενη συμπεριφορά. Δοκιμάστε να διαμορφώσετε εκ νέου την κάρτα SD σας ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). Αν αυτό δεν λειτουργήσει, δοκιμάστε με μια άλλη κάρτα SD.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - File not found</u></summary>

Λείπουν τα `boot9strap.firm` και `boot9strap.firm.sha` από τον φάκελο `boot9strap` ή ο φάκελος `boot9strap` δεν έχει το σωστό όνομα. Κάντε λήψη της πιο πρόσφατης έκδοσης του [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) και τοποθετήστε τα `boot9strap.firm` και `boot9strap.firm.sha` στον φάκελο `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - invalid FIRM</u></summary>

Υπάρχει πρόβλημα με τα αρχεία `boot9strap.firm` και `boot9strap.firm.sha`. Κάντε ξανά λήψη της πιο πρόσφατης έκδοσης του [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) και τοποθετήστε τα αρχεία `boot9strap.firm` και `boot9strap.firm.sha` στον φάκελο `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Secret Sector - File not found</u></summary>

Λείπει το `secret_sector.bin` από τον φάκελο `boot9strap` ή ο φάκελος `boot9strap` δεν έχει το σωστό όνομα. Κάντε λήψη του [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) με ένα πρόγραμμα torrent και τοποθετήστε το στον φάκελο `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Κάτι άλλο</u></summary>

Για να λάβετε βοήθεια, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) και περιγράψτε το μήνυμα που βλέπετε.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Εγκατάσταση του boot9strap (Soundhax)

{% capture compat %}
<summary><u>Κόκκινη/μοβ/ροζ και λευκή οθόνη μετά την εκτέλεση του Soundhax</u></summary>

Αν η κονσόλα σας βρίσκεται στην έκδοση 9.4.0, 9.5.0 ή 9.6.0, ενδέχεται να λάβετε ένα σφάλμα με μια παλιά έκδοση του universal-otherapp. Κάντε λήψη της πιο πρόσφατης έκδοσης από [εδώ](https://github.com/TuxSH/universal-otherapp/releases/latest).

Αν η κονσόλα σας δεν διαθέτει κάποιο από αυτά τα firmware, αυτό υποδεικνύει ότι πιθανότατα διαθέτετε ήδη custom firmware. Θα πρέπει να [κάνετε έλεγχο για CFW](checking-for-cfw).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>«An error has occurred, forcing the software to close...» (λευκό πλαίσιο μηνύματος)</u></summary>

Υπάρχει ένα πρόβλημα με το αρχείο `otherapp.bin` (απουσιάζει, δεν βρίσκεται στη σωστή τοποθεσία ή έχει καταστραφεί). Κάντε λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) και τοποθετήστε το στη ρίζα της κάρτας SD σας.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>«Could not play»</u></summary>

Δεν διαθέτετε το σωστό αρχείο του Soundhax για την κονσόλα και την περιοχή σας ή η κονσόλα σας δεν είναι συμβατή με το Soundhax. Στην τελευταία περίπτωση, οι ενέργειές σας θα καθορίσουν την έκδοση που διαθέτει το 3DS σας. Γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>
Δημιουργήστε αντίγραφα ασφαλείας των δεδομένων σας και διαμορφώστε ξανά την κάρτα SD σας ως FAT32 με το συνιστώμενο εργαλείο, ανάλογα με το λειτουργικό σας σύστημα ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). Είναι γνωστό ότι το MiniTool Partition Wizard και το εργαλείο διαμόρφωσης της HP (HPUSBDisk) προκαλούν προβλήματα με τις κάρτες SD των 3DS.

Αν αυτό αποτύχει, δοκιμάστε να χρησιμοποιήσετε κάποια άλλη κάρτα SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Εγκατάσταση του boot9strap (MSET9)

{% capture mset9-chorus %}
    + **Windows**: Κάντε διπλό κλικ στο `MSET9-Windows.bat`
    + **macOS**: Κάντε διπλό κλικ στο `MSET9-macOS.command` και εισαγάγετε τον κωδικό πρόσβασής σας εάν σας ζητηθεί
    + **Linux**: Ανοίξτε ένα παράθυρο τερματικού και μεταβείτε μέσω της εντολής `cd` στη ρίζα της κάρτας SD σας. Στη συνέχεια, πληκτρολογήστε `python3 mset9.py` και πατήστε το Enter
{% endcapture %}

{% capture compat %}
<summary><u>Python 3 is not installed</u></summary>

Η Python δεν είναι εγκατεστημένη στον υπολογιστή που χρησιμοποιείτε. Κάντε λήψη από τον [ιστότοπο της Python](https://www.python.org/downloads/), κάντε διπλό κλικ στο πρόγραμμα εγκατάστασης και ακολουθήστε τις οδηγίες εγκατάστασης της Python. Μόλις εγκατασταθεί η Python, δοκιμάστε ξανά.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>HOME Menu extdata: Missing!</u></summary>

Ενεργοποιήστε την κονσόλα σας, έχοντας εισαγάγει την κάρτα SD σας. Έπειτα, ελέγξτε ξανά την κατάσταση του MSET9.

Αν αυτό δεν λειτουργήσει, η κάρτα SD σας πρέπει να διαμορφωθεί:

1. Αντιγράψτε τα πάντα από την κάρτα SD στον υπολογιστή σας
1. Διαμορφώστε την κάρτα SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Αντιγράψτε τα πάντα πίσω στην κάρτα SD
1. Ξεκινήστε ξανά από το [Βήμα 7 της Ενότητας I](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Mii Maker extdata: Missing!</u></summary>

Δεν βρέθηκαν δεδομένα του Mii Maker στην κάρτα SD. Ενεργοποιήστε την κονσόλα σας, έχοντας εισαγάγει την κάρτα SD σας. Έπειτα, εκκινήστε το Mii Maker και ελέγξτε ξανά την κατάσταση του MSET9.

Αν αυτό δεν λειτουργήσει, η κάρτα SD σας πρέπει να διαμορφωθεί:

1. Αντιγράψτε τα πάντα από την κάρτα SD στον υπολογιστή σας
1. Διαμορφώστε την κάρτα SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Αντιγράψτε τα πάντα πίσω στην κάρτα SD
1. Ξεκινήστε ξανά από το [Βήμα 8 της Ενότητας I](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Title database: Not initialized!</u></summary>

Βεβαιωθείτε ότι έχετε επαναφέρει τη βάση δεδομένων τίτλων.
    Παρακαλώ ενεργοποιήστε την κονσόλα σας, έχοντας εισαγάγει την SD σας 
    + Εκκινήστε την εφαρμογή «System Settings» και μεταβείτε στο `Data Management` -> `Nintendo 3DS` -> `Software` -> «Reset» ([εικόνα](/images/screenshots/database-reset.jpg))
        + Αυτή η ενέργεια δεν θα διαγράψει τα δεδομένα σας
    + Εάν λάβετε ένα μήνυμα προτροπής για επαναφορά, μετά την επαναφορά, απενεργοποιήστε την κονσόλα σας και ξεκινήστε ξανά από το [Βήμα 14 της Ενότητας Ι](installing-boot9strap-(mset9-cli)#section-i---prep-work)

Εάν *δεν* λάβετε κάποιο μήνυμα προτροπής για επαναφορά, η κάρτα SD πρέπει να διαμορφωθεί:

1. Αντιγράψτε τα πάντα από την κάρτα SD στον υπολογιστή σας
1. Διαμορφώστε την κάρτα SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Αντιγράψτε τα πάντα πίσω στην κάρτα SD
1. Εκτελέστε το script «MSET9»:
    {{ mset9-chorus }}
1. Πληκτρολογήστε τον αριθμό που αντιστοιχεί στο μοντέλο και την έκδοση της κονσόλας σας και πατήστε το Enter
1. Πληκτρολογήστε `2` και πατήστε το Enter για να ελέγξετε την κατάσταση του MSET9
    + Αυτή η ενέργεια θα δημιουργήσει ξανά τις εικονικές βάσεις δεδομένων
1. Κλείστε το παράθυρο του script «MSET9»
1. Ξεκινήστε ξανά από το [Bήμα 12 της Eνότητας I](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 01: Couldn't find Nintendo 3DS folder</u></summary>

Δεν εκτελείτε το MSET9 από τη ρίζα της κάρτας SD ή απουσιάζει ο φάκελος «Nintendo 3DS» από την κάρτα SD.

Θυμηθείτε ότι η κάρτα SD σας θα πρέπει να μοιάζει κάπως έτσι:

![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
{: .notice--info}

Εάν η διάταξη της κάρτας SD είναι σωστή, τότε η κονσόλα σας δεν διαβάζει πιθανότατα την κάρτα SD και πρέπει να τη διαμορφώσετε:

1. Αντιγράψτε τα πάντα από την κάρτα SD στον υπολογιστή σας
1. Διαμορφώστε την κάρτα SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Αντιγράψτε τα πάντα πίσω στην κάρτα SD
1. Ξεκινήστε ξανά από την αρχή της [Ενότητας I](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 02: Your SD is write protected</u></summary>

Η προστασία από εγγραφές είναι ενεργή σε αυτήν την κάρτα SD. Εάν χρησιμοποιείτε μια κάρτα SD πλήρους μεγέθους, βεβαιωθείτε ότι ο διακόπτης κλειδώματος βρίσκεται στην [πάνω θέση](/images/sdlock.png). Διαφορετικά, δοκιμάστε να αφαιρέσετε και να εισαγάγετε εκ νέου την κάρτα SD σας.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 04: You don't have 1 ID0, you have (#)!</u></summary>

Έχετε πολλαπλούς φακέλους ID0. Για να προσδιορίσετε τον σωστό φάκελο, ακολουθήστε αυτές τις οδηγίες:

1. Μετονομάστε τον φάκελο `Nintendo 3DS` σε `BACKUP_Nintendo 3DS`
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Ενεργοποιήστε την κονσόλα σας
1. Περιμένετε μέχρι η κονσόλα να δημιουργήσει τα δεδομένα της κάρτας SD
    + Οι εφαρμογές σας θα έχουν εξαφανιστεί. Αυτό είναι φυσιολογικό και θα επιλυθεί σύντομα
1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Μεταβείτε στον φάκελο `Nintendo 3DS` της κάρτας SD σας
1. Σημειώστε τους πρώτους χαρακτήρες του φακέλου που βλέπετε
    + Αυτό είναι το πραγματικό σας ID0, το οποίο θα διατηρήσουμε στον πραγματικό φάκελο «Nintendo 3DS»
1. Διαγράψτε το ID0 από τον τρέχοντα φάκελο `Nintendo 3DS`
1. Μετακινήστε τον πραγματικό φάκελο ID0 από τον φάκελο `BACKUP_Nintendo 3DS` στον φάκελο `Nintendo 3DS`
1. Εάν υπάρχει, μετακινήστε τον φάκελο `Private` από τον φάκελο `BACKUP_Nintendo 3DS` στον φάκελο `Nintendo 3DS`

Μόλις το κάνετε αυτό, συνεχίστε από το [Βήμα 3 της Ενότητας I](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 05: You don't have 1 ID1, you have (#)!</u></summary>

{% include_relative include/id1-check.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 06: You need at least 16MB free</u></summary>

Η κάρτα SD σας δεν διαθέτει επαρκή χώρο για την εκτέλεση του MSET9. Ελευθερώστε λίγο χώρο και δοκιμάστε ξανά.

Στο τέλος αυτού του οδηγού, θα χρειαστείτε τουλάχιστον 1,3GB για να δημιουργήσετε ένα αντίγραφο ασφαλείας της NAND, οπότε είναι καλύτερο να ελευθερώσετε τουλάχιστον αυτό το μέγεθος χώρου.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 07: One or more files are missing or malformed!</u></summary>

Ένα ή περισσότερα αρχεία, που απαιτεί το MSET9 για την εκτέλεσή του, λείπουν ή έχουν καταστραφεί. Κάντε ξανά λήψη του [αρχείου `.zip` του MSET9 Release](https://github.com/hacks-guide/MSET9/releases/latest) και αποσυμπιέστε το στη ρίζα της κάρτας SD σας, αντικαθιστώντας όλα τα υπάρχοντα αρχεία και δοκιμάστε ξανά.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 18: Windows Locale Settings are broken!</u></summary>

{% include_relative include/winerror234.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Κόκκινη οθόνη μετά την επανεισαγωγή της κάρτας SD (Βήμα 11 της Ενότητας II)</u></summary>

Ενδέχεται να λείπει το `SafeB9S.bin` από τη ρίζα της κάρτας SD σας ή το αρχείο μπορεί να είναι κατεστραμμένο. Αντιγράψτε το από το αρχείο `.zip` του MSET9, αντικαθιστώντας τυχόν υπάρχοντα αρχεία και ακολουθήστε αυτές τις οδηγίες για να αφαιρέσετε το αρχείο ενεργοποίησης:

1. Εξαναγκάστε την απενεργοποίηση της κονσόλας σας κρατώντας πατημένο το κουμπί ισχύος για 20 δευτερόλεπτα
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Εκτελέστε το script «MSET9»:
    {{ mset9-chorus }}
1. Πληκτρολογήστε τον αριθμό που αντιστοιχεί στο μοντέλο και την έκδοση της κονσόλας σας και πατήστε το Enter
    + Η τρέχουσα κατάσταση θα πρέπει να εμφανίζει [Injected](/images/screenshots/mset9/mset9-injected.png)
    + Εάν έχετε ήδη αφαιρέσει το αρχείο ενεργοποίησης (ή δεν κάνατε ποτέ εισαγωγή του), η τρέχουσα κατάσταση θα εμφανίζει [Ready](/images/screenshots/mset9/mset9-ready.png) και μπορείτε να [επαναλάβετε τις οδηγίες της Ενότητας II](installing-boot9strap-(mset9-cli)#section-ii---mset9)
1. Πληκτρολογήστε `4` και πατήστε το Enter
1. Μόλις το παράθυρο εμφανίσει το μήνυμα «Removed trigger file», πληκτρολογήστε `0` και πατήστε το Enter
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Ενεργοποιήστε την κονσόλα σας
1. Επιστρέψτε στο [Βήμα 1 της Ενότητας II](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Εναλλακτικά, η κάρτα SD ενδέχεται να έχει διαμορφωθεί ή διαμεριστεί εσφαλμένα. Μετά την αφαίρεση του αρχείου ενεργοποίησης, διαμορφώστε τη:

1. Αντιγράψτε τα πάντα από την κάρτα SD στον υπολογιστή σας
1. Διαμορφώστε την κάρτα SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Αντιγράψτε τα πάντα πίσω στην κάρτα SD
1. Ξεκινήστε ξανά από το [Βήμα 1 της Ενότητας II](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Η εφαρμογή «System Settings» φορτώνεται επ' αόριστον μετά την επανεισαγωγή της κάρτας SD</u></summary>

Πιθανότατα κάνατε κάτι διαφορετικό από τις οδηγίες του MSET9, επιλέξατε εσφαλμένο μοντέλο/έκδοση ή η κάρτα SD πρέπει να διαμορφωθεί. Βεβαιωθείτε ότι έχετε επιλέξει το σωστό [μοντέλο](/images/3dsmodels.png) και την έκδοση firmware κατά το άνοιγμα του script.

Ακολουθήστε αυτές τις οδηγίες για να αφαιρέσετε το αρχείο ενεργοποίησης και να επαναλάβετε την Ενότητα II:

1. Εξαναγκάστε την απενεργοποίηση της κονσόλας σας κρατώντας πατημένο το κουμπί ισχύος για 20 δευτερόλεπτα
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. 1. Εκτελέστε το script «MSET9»:
    {{ mset9-chorus }}
1. Πληκτρολογήστε τον αριθμό που αντιστοιχεί στο μοντέλο και την έκδοση της κονσόλας σας και πατήστε το Enter
    + Η τρέχουσα κατάσταση θα πρέπει να εμφανίζει [Injected](/images/screenshots/mset9/mset9-injected.png)
    + Εάν έχετε ήδη αφαιρέσει το αρχείο ενεργοποίησης (ή δεν είχατε κάνει ποτέ εισαγωγή του), η τρέχουσα κατάσταση θα εμφανίζει [Ready](/images/screenshots/mset9/mset9-ready.png) και μπορείτε να επαναλάβετε τα βήματα της Ενότητας II
1. Πληκτρολογήστε `4` και πατήστε το Enter
1. Μόλις το παράθυρο εμφανίσει το μήνυμα «Removed trigger file», πληκτρολογήστε `0` και πατήστε το Enter
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Ενεργοποιήστε την κονσόλα σας
1. Επιστρέψτε στο [Βήμα 1 της Ενότητας II](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Αν εξακολουθείτε να αντιμετωπίζετε αυτό το ζήτημα και έχετε βεβαιωθεί ότι κάνατε τα πάντα σωστά, επιβεβαιώστε ότι το αρχείο ενεργοποίησης έχει αφαιρεθεί και διαμορφώστε την κάρτα SD σας:

1. Αντιγράψτε τα πάντα από την κάρτα SD στον υπολογιστή σας
1. Διαμορφώστε την κάρτα SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Αντιγράψτε τα πάντα πίσω στην κάρτα SD
1. Ξεκινήστε ξανά από το [Βήμα 1 της Ενότητας II](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Σφάλμα «An exception occurred» μετά την ενεργοποίηση του MSET9</u></summary>

Αυτό δείχνει ότι πιθανότατα διαθέτετε ήδη custom firmware. Θα πρέπει να [κάνετε έλεγχο για CFW](checking-for-cfw).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (super-skaterhax)

{% capture compat %}
<summary><u>«An error has occurred. Please save your data in any software currently in use, then restart the system.»</u></summary>

Η ημερομηνία δεν έχει ρυθμιστεί σωστά. Για να την ορίσετε σωστά, ακολουθήστε αυτά τα βήματα:

1. Επιλέξτε το εικονίδιο «System Settings» στο μενού «HOME» και πατήστε «Open».
1. Πατήστε «Other Settings».
1. Πατήστε «Date & Time».
1. Πατήστε «Today's date».
1. Πατήστε τα πάνω/κάτω βέλη για να ορίσετε τη σωστή ημέρα, μήνα και έτος.
1. Επιλέξτε «OK» για επιβεβαίωση.

Εάν το πρόβλημα παραμένει:

+ Βεβαιωθείτε ότι τα `arm11code.bin`, `browserhax_hblauncher_ropbin_payload.bin` και `boot.3dsx` βρίσκονται στη ρίζα της κάρτας SD σας (όχι μέσα σε κάποιο φάκελο)
+ Βεβαιωθείτε ότι έχετε επιλέξει το σωστό payload για την περιοχή ΚΑΙ την έκδοση του συστήματός σας
+ Βεβαιωθείτε ότι οι ρυθμίσεις περιοχής σας μοιάζουν [κάπως έτσι](/images/screenshots/skater_lang.png)
+ Δοκιμάστε να επαναφέρετε τα δεδομένα του προγράμματος περιήγησης:
    1. Ανοίξτε την εφαρμογή «Internet Browser» και έπειτα, μεταβείτε στις ρυθμίσεις της
    1. Μεταβείτε στο κάτω μέρος και επιλέξτε «Reset Save Data» (ή «Initialize Save Data» ή «Clear All Save Data»)
    1. Δοκιμάστε ξανά το exploit
+ Δοκιμάστε να αλλάξετε τη γλώσσα συστήματος σε κάποια άλλη εκτός της τρέχουσας

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>«An error has occurred. Hold down the POWER button to turn off the power...» (μαύρη οθόνη με κείμενο)</u></summary>

Το αρχείο `arm11code.bin` απουσιάζει ή βρίσκεται σε λάθος τοποθεσία. Βεβαιωθείτε ότι έχετε αντιγράψει τα αρχεία της [πιο πρόσφατης έκδοσης του super-skaterhax](https://github. om/zoogie/super-skaterhax/releases/latest) για την περιοχή και την έκδοσή σας στη ρίζα της κάρτας SD σας (όχι μέσα σε κάποιο φάκελο).

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>Σφάλμα «An exception occured» ή εμφανίζεται το μήνυμα «DLL_HEAP_INFORMATION» όταν πατάω το «GO! GO!»</u></summary>

Αυτό δείχνει ότι πιθανότατα διαθέτετε ήδη custom firmware. Θα πρέπει να [κάνετε έλεγχο για CFW](checking-for-cfw).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Εγκατάσταση του boot9strap (SSLoth-Browser)

{% capture compat %}
<summary><u>Κόκκινη/μωβ/ροζ και λευκή οθόνη μετά την εκτέλεση του Browserhax</u></summary>

Αυτό δείχνει ότι πιθανότατα διαθέτετε ήδη custom firmware. Θα πρέπει να [κάνετε έλεγχο για CFW](checking-for-cfw).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>«An error has occurred. Hold down the POWER button to turn off the power...» (μαύρη οθόνη με κείμενο)</u></summary>

Το αρχείο `arm11code.bin` απουσιάζει ή βρίσκεται σε λάθος τοποθεσία. Κάντε λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), τοποθετήστε το `otherapp.bin` στη ρίζα της κάρτας SD σας και μετονομάστε το σε `arm11code.bin`. Μην προσθέσετε την επέκταση `.bin` αν δεν τη βλέπετε ήδη.
{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>«An error has occurred, forcing the software to close...» (λευκό πλαίσιο μηνύματος)</u></summary>

Ενδέχεται να υπάρχει πρόβλημα με το αρχείο `arm11code.bin` σας. Κάντε λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), τοποθετήστε το `otherapp.bin` στη ρίζα της κάρτας SD σας και μετονομάστε το σε `arm11code.bin`. Μην προσθέσετε την επέκταση `.bin` αν δεν τη βλέπετε ήδη.

Μπορείτε επίσης να δοκιμάσετε την επαναφορά των αποθηκευμένων δεδομένων του προγράμματος περιήγησης:

1. Ανοίξτε την εφαρμογή «Internet Browser» και έπειτα, μεταβείτε στις ρυθμίσεις της
1. Μεταβείτε στο κάτω μέρος και επιλέξτε «Reset Save Data» (ή «Initialize Save Data» ή «Clear All Save Data»)
1. Δοκιμάστε ξανά το exploit

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Διακοπή λειτουργίας κατά το άνοιγμα του κωδικού QR ή του URL του browserhax</u></summary>

Τα exploit που βασίζονται στην εφαρμογή «Internet Browser» (όπως το browserhax ή το 2xrsa) είναι συχνά ασταθή και προκαλούν διακοπή λειτουργίας, αλλά μπορούν κάποιες φορές να διορθωθούν ακολουθώντας τα παρακάτω βήματα.

1. Ανοίξτε την εφαρμογή «Internet Browser» και έπειτα, μεταβείτε στις ρυθμίσεις της
1. Μεταβείτε στο κάτω μέρος και επιλέξτε «Reset Save Data» (ή «Initialize Save Data» ή «Clear All Save Data»)
1. Δοκιμάστε ξανά το exploit
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Μήνυμα ενημέρωσης συστήματος (System Update) κατά το άνοιγμα του προγράμματος περιήγησης</u></summary>

Ο διακομιστής μεσολάβησης του SSLoth δεν ρυθμίστηκε σωστά. Επαναλάβετε την ενότητα του SSLoth στη σελίδα.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Σφάλμα 032-0420 κατά το άνοιγμα του προγράμματος περιήγησης</u></summary>

Ακολουθήστε αυτά τα βήματα με τη σειρά:

1. Εκκινήστε την εφαρμογή «System Settings» στην κονσόλα σας
1. Μεταβείτε στο `Internet Settings` -> `Connection Settings`
1. Επιλέξτε τη θέση σύνδεσης δικτύου σας και μεταβείτε στο `Change Settings` -> `Επόμενη σελίδα (δεξί βέλος)` -> `Proxy Settings`
1. Ορίστε την επιλογή «Proxy Settings» σε «No»
1. Επιλέξτε «OK» και έπειτα, «Save»
1. Όταν σας ζητηθεί, επιλέξτε «Test» για να πραγματοποιήσετε τη δοκιμή σύνδεσης
    + Η δοκιμή θα πρέπει να πετύχει
1. Πατήστε «OK» για να συνεχίσετε
1. Πατήστε «Back» δύο φορές και έπειτα, «Close» για να επιστρέψετε στο μενού «HOME»
1. Ανοίξτε μία φορά την εφαρμογή «Internet Browser»
1. Εάν σας ζητηθεί ενημέρωση του συστήματος, πατήστε «OK»
    + Αυτή η ενέργεια δεν θα ενημερώσει το σύστημα
1. Ξεκινήστε ξανά από την [Ενότητα II](installing-boot9strap-(ssloth-browser).html#section-ii---ssloth)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>«Πάγωμα» στο μήνυμα «Doing agbhax...»</u></summary>
Ενδέχεται να υπάρχει πρόβλημα με το αρχείο `arm11code.bin` σας. Κάντε ξανά λήψη της πιο πρόσφατης έκδοσης του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), τοποθετήστε το στη ρίζα της κάρτας SD σας και μετονομάστε το σε `arm11code.bin`. Μην προσθέσετε την επέκταση `.bin` αν δεν τη βλέπετε ήδη.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>«PrepareArm9ForTwl returned error c8804631!»</u></summary>

Γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>

Δημιουργήστε αντίγραφα ασφαλείας των δεδομένων σας και διαμορφώστε ξανά την κάρτα SD σας ως FAT32 με το συνιστώμενο εργαλείο, ανάλογα με το λειτουργικό σας σύστημα ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). Είναι γνωστό ότι το MiniTool Partition Wizard και το εργαλείο διαμόρφωσης της HP (HPUSBDisk) προκαλούν προβλήματα με τις κάρτες SD των 3DS.

Αν αυτό αποτύχει, δοκιμάστε να χρησιμοποιήσετε κάποια άλλη κάρτα SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Ολοκλήρωση εγκατάστασης

{% capture compat %}
<summary><u>Δεν είναι δυνατή η ενημέρωση της κονσόλας</u></summary>

Μπορείτε να δοκιμάσετε τα παρακάτω βήματα με οποιαδήποτε σειρά, αλλά αναγράφονται από το πιο εύκολο έως το πιο δύσκολο.

1. Ορίστε τις ρυθμίσεις «DNS» σε «Auto»
1. Πλησιάστε τον δρομολογητή WiFi σας
1. Κάντε ενημέρωση από τη λειτουργία «Safe Mode» απενεργοποιώντας την κονσόλα, κρατώντας πατημένα τα (L) + (R) + (Πάνω) + (A) κατά την εκκίνηση και ακολουθώντας τις οδηγίες στην οθόνη
1. Διαγράψτε τη σύνδεση Wi-Fi σας και έπειτα, επανασυνδεθείτε στο Wi-Fi σας
1. Επανεκκινήστε τον δρομολογητή WiFi σας
1. Συνδεθείτε σε κάποιο άλλο δίκτυο Wi-Fi, όπως ένα σημείο πρόσβασης κινητής συσκευής
1. Οι διακομιστές της Nintendo ενδέχεται να μη λειτουργούν. Δοκιμάστε ξανά αργότερα
1. Εάν εξακολουθείτε να λαμβάνετε σφάλμα, [ακολουθήστε τον οδηγό για το CTRTransfer](ctrtransfer) και δοκιμάστε ξανά
1. Για περαιτέρω υποστήριξη (στα αγγλικά), γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #22: finalize.romfs is invalid</u></summary>

Το αρχείο `finalize.romfs` είναι κατεστραμμένο ή μη αναγνώσιμο. [Κάντε ξανά λήψη](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) και αντιγράψτε το αρχείο στη ρίζα της κάρτας SD σας, αντικαθιστώντας οποιοδήποτε υπάρχον αντίγραφο και έπειτα, δοκιμάστε ξανά.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #23: finalize.romfs in wrong location</u></summary>

Το αρχείο `finalize.romfs` τοποθετήθηκε σε εσφαλμένη τοποθεσία αντί για τη ρίζα της SD. Το script θα προσπαθήσει να επιλύσει αυτό το ζήτημα, αλλά θα απαιτήσει την άδειά σας για να το κάνει. Πατήστε το (A) στις επόμενες οδηγίες για να συνεχίσετε.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #24: SD is write-protected</u></summary>

Βεβαιωθείτε ότι η κάρτα SD σας δεν είναι [κλειδωμένη](/images/sdlock.png). Εάν η κάρτα SD δεν είναι κλειδωμένη και συνεχίζετε να λαμβάνετε αυτό το σφάλμα, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>Error #02: Missing essential.exefs</u></summary>

Επιλέξατε «No» στην ερώτηση «Make essential files backup?» του GodMode9. Απενεργοποιήστε την κονσόλα σας, ενεργοποιήστε την ενώ κρατάτε πατημένο το (Start) για να εισέλθετε ξανά στο GodMode9, απαντήστε «Yes» στην προτροπή και δοκιμάστε ξανά.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}

<summary><u>Error #04: No space</u></summary>

Χρειάζεστε τουλάχιστον 1,3GB ελεύθερου χώρου για τη δημιουργία αντιγράφου ασφαλείας της NAND, η οποία αποτελεί μέρος του script. Αν δεν έχετε επαρκή χώρο, ακολουθήστε αυτά τα βήματα:

1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Αντιγράψτε τον φάκελο `Nintendo 3DS` από τη ρίζα της κάρτας SD στον υπολογιστή σας
1. Διαγράψτε τον φάκελο «Nintendo 3DS» από την κάρτα SD
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
1. Πατήστε το κουμπί (Home)
1. Επιλέξτε «Scripts...»
1. Επιλέξτε «finalize»
1. Πατήστε το (A) για να δημιουργήσετε ένα αντίγραφο ασφαλείας της NAND
    + Αυτή η διαδικασία ενδέχεται να διαρκέσει περίπου δεκαπέντε λεπτά
1. Πατήστε το (A) ξανά
    + Η κονσόλα θα πρέπει να απενεργοποιηθεί αυτόματα
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Αντιγράψτε τα αρχεία που βρίσκονται στον φάκελο `/gm9/backups/` της SD σας σε μια ασφαλή τοποθεσία του υπολογιστή σας
1. Διαγράψτε τα `<ημερομηνία>_<σειριακός_αριθμός>_sysnand_##.bin` και `<ημερομηνία>_<σειριακός_αριθμός>_sysnand_##.bin.sha` από την κάρτα SD σας
1. Αντιγράψτε τον φάκελο `Nintendo 3DS` από τον υπολογιστή στη ρίζα της κάρτας SD σας
1. Διαγράψτε τον φάκελο `Nintendo 3DS` από τον υπολογιστή σας

Τώρα που έχετε αποθηκεύσει το αντίγραφο ασφαλείας της NAND σε ασφαλές μέρος:

1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
1. Πατήστε το κουμπί (Home)
1. Επιλέξτε «Scripts...»
1. Επιλέξτε «finalize»
1. Συνεχίστε κανονικά με το script
    + Το αντίγραφο ασφαλείας της NAND θα παραλειφθεί αυτόματα

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #05: No title database</u></summary>

Πατήστε το (A) για να εισαγάγετε μια βάση δεδομένων τίτλων, ξεκλειδώστε την εγγραφή στη SysNAND εισάγοντας τα κουμπιά που αναγράφονται στην οθόνη και έπειτα, συνεχίστε κανονικά με το script.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #06 ή «Error: Could not open directory» κατά τη δημιουργία αντιγράφου ασφαλείας της NAND</u></summary>

Βεβαιωθείτε ότι διαθέτετε τουλάχιστον 1,3GB στην κάρτα SD. Αν δεν έχετε επαρκή χώρο, ακολουθήστε αυτά τα βήματα:
1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Αντιγράψτε τον φάκελο `Nintendo 3DS` από τη ρίζα της κάρτας SD στον υπολογιστή σας
1. Διαγράψτε τον φάκελο «Nintendo 3DS» από την κάρτα SD
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
1. Δημιουργήστε ένα [αντίγραφο ασφαλείας της NAND](godmode9-usage#creating-a-nand-backup)
1. Αντιγράψτε τα αρχεία που βρίσκονται στον φάκελο `gm9/out` της SD σας σε μια ασφαλή τοποθεσία του υπολογιστή σας
1. Διαγράψτε τα `<ημερομηνία>_<σειριακός_αριθμός>_sysnand_##.bin` και `<ημερομηνία>_<σειριακός_αριθμός>_sysnand_##.bin.sha` από την κάρτα SD σας, διατηρώντας το essential.exefs στο `/gm9/out/`
1. Αντιγράψτε τον φάκελο `Nintendo 3DS` από τον υπολογιστή στη ρίζα της κάρτας SD σας
1. Διαγράψτε τον φάκελο `Nintendo 3DS` από τον υπολογιστή σας

Εάν έχετε αρκετό χώρο στην κάρτα SD, η SD σας μπορεί να είναι κατεστραμμένη ή ελαττωματική. Ελέγξτε την κάρτα SD σας για σφάλματα ακολουθώντας τον οδηγό που αντιστοιχεί στο λειτουργικό σύστημα του υπολογιστή σας: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #12: Copy (file).db fail</u></summary>

Βεβαιωθείτε ότι η κάρτα SD σας δεν είναι [κλειδωμένη](/images/sdlock.png). Εάν η κάρτα SD δεν είναι κλειδωμένη και συνεχίζετε να λαμβάνετε αυτό το σφάλμα, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #17: Duplicate NAND backup</u></summary>

Το script έχει εντοπίσει ότι απουσιάζει ο φάκελος «Nintendo 3DS» ΚΑΙ ότι έχετε ήδη δημιουργήσει ένα αντίγραφο ασφαλείας της NAND στο παρελθόν. Εάν σκοπεύετε να εγκαταστήσετε εφαρμογές homebrew, θα πρέπει να κάνετε τα ακόλουθα:

1. Πατήστε το (B) για να ακυρώσετε τη δημιουργία νέου αντιγράφου ασφαλείας της NAND
1. Κρατήστε πατημένο το (R) και πατήστε ταυτόχρονα το (Start) για να απενεργοποιήσετε την κονσόλα σας
1. Αντιγράψτε τα περιεχόμενα του φακέλου `/gm9/backups/` σε μια ασφαλή τοποθεσία του υπολογιστή σας
1. Διαγράψτε τον φάκελο `/gm9/backups/` από την κάρτα SD σας
1. Εάν μετακινήσατε τον φάκελο «Nintendo 3DS» από την κάρτα SD για να φτάσετε σε αυτό το σημείο, αντιγράψτε τον ξανά στην κάρτα SD σας
    + Εάν δεν διαθέτετε έναν φάκελο «Nintendo 3DS», κάντε εκκίνηση στο μενού «HOME» τουλάχιστον μία φορά, έχοντας εισαγάγει την κάρτα SD, για να δημιουργηθεί αυτόματα
1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
1. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
1. Επιλέξτε «Scripts...»
1. Επιλέξτε «finalize»
1. Ακολουθήστε τις οδηγίες του script, απαντώντας σε όποιες ερωτήσεις σάς γίνουν 

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #18a/18b: MSET9 detected</u></summary>

Δεν αφαιρέσατε το MSET9 στην προηγούμενη σελίδα. Το script θα προσπαθήσει να αφαιρέσει το MSET9 για εσάς. Ακολουθήστε τις οδηγίες που παρέχονται από το script.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Ζητήματα εκκίνησης σε κονσόλες με custom firmware

Γενικά, τα βήματα που περιγράφονται εδώ προϋποθέτουν ότι η κονσόλα σας διαθέτει ένα σύγχρονο custom firmware (boot9strap + Luma3DS 8.0 ή νεότερο). Εάν η κονσόλα σας διαθέτει μια παλαιότερη εγκαταστάση homebrew (για παράδειγμα, κάποια έκδοση βασισμένη στο arm9loaderhax ή το menuhax), θα πρέπει να ενημερώσετε την εγκατάστασή σας πριν δοκιμάσετε αυτές τις οδηγίες.
{: .notice--info}

### Φωτεινές ενδείξεις τροφοδοσίας/ειδοποιήσεων

{% capture compat %}
<summary><u>Η κονσόλα μου απενεργοποιείται όταν προσπαθώ να την ενεργοποιήσω ή/και το LED ειδοποιήσεων εμφανίζει ένα χρώμα κατά την εκκίνηση</u></summary>

Υπάρχει κάποιο πρόβλημα με το αρχείο `boot.firm` σας. Εάν χρησιμοποιείτε το [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), το LED ειδοποιήσεων του 3DS σας ενδέχεται να αναβοσβήνει με ένα συγκεκριμένο χρώμα. Αυτό το χρώμα χρησιμοποιείται για τη διάγνωση προβλημάτων που αφορούν το αρχείο `boot.firm`, που βρίσκεται στην κάρτα SD ή την εσωτερική μνήμη. Σε παλαιότερες εκδόσεις του boot9strap, το μπλε φως απενεργοποιείται σχεδόν αμέσως όταν προσπαθείτε να ενεργοποιήσετε την κονσόλα.

Εάν το LED ειδοποιήσεων αναβοσβήνει και είναι:

+ **Λευκό**: Το 3DS δεν μπόρεσε να εντοπίσει το `boot.firm` στην κάρτα SD ή στην εσωτερική μνήμη.
+ **Ματζέντα**: Το 3DS δεν μπόρεσε να εντοπίσει το `boot.firm` στην κάρτα SD. Μπόρεσε να εντοπίσει το `boot.firm` στην εσωτερική μνήμη, αλλά το αρχείο έχει καταστραφεί.
+ **Κόκκινο**: Το 3DS μπόρεσε να εντοπίσει το `boot.firm` τόσο στην κάρτα SD όσο και στην εσωτερική μνήμη, όμως και τα δύο αρχεία έχουν καταστραφεί.

Μπορείτε να λάβετε ένα νέο αρχείο `boot.firm` κάνοντας λήψη της [πιο πρόσφατης έκδοσης του Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), αποσυμπιέζοντας και τοποθετώντας το `boot.firm` στη ρίζα της κάρτας SD σας. Εάν το αρχείο `boot.firm` ανιχνεύεται συνεχώς ως κατεστραμμένο, καλό θα ήταν να ελέγξετε την κάρτα SD σας για σφάλματα ([Windows](h2testw-(windows)), [Linux](f3-(linux)) ή [macOS](f3xswift-(mac))). Επιπλέον, σημειώστε ότι το 3DS τείνει να έχει προβλήματα με τα αρχεία που έχουν αποσυμπιεστεί με το WinRAR.

Εάν ακούσετε έναν ήχο «κρότου», που ενδεχομένως συνοδεύεται από την ενεργοποίηση του οπίσθιου φωτισμού για ένα πολύ σύντομο χρονικό διάστημα, υπάρχει κάποιο πρόβλημα υλικού με την κονσόλα σας (όπως ένα αποσυνδεδεμένο καλώδιο οπίσθιου φωτισμού). Ενδέχεται να μπορέσετε να εκκινήσετε την κονσόλα σας κρατώντας τη σε συγκεκριμένες θέσεις.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Η κονσόλα μου «κολλάει» σε μια μαύρη οθόνη, ενώ το φως ισχύος παραμένει ενεργό και έχει μπλε χρώμα</u></summary>

Μπορείτε να δοκιμάσετε τα παρακάτω βήματα με οποιαδήποτε σειρά, αλλά αναγράφονται από το λιγότερο έως το πιο χρονοβόρο.

1. Απενεργοποιήστε την κονσόλα σας, αφαιρέστε την κάρτα SD, εισαγάγετέ την ξανά και έπειτα, ενεργοποιήστε την κονσόλα σας.
1. Απενεργοποιήστε την κονσόλα σας, αφαιρέστε την κασέτα παιχνιδιού (αν υπάρχει), ενεργοποιήστε την κονσόλα σας και έπειτα, περιμένετε έως και δέκα λεπτά. Εάν η κονσόλα σας εκκινηθεί μέσα σε δέκα λεπτά, το ζήτημα έχει διορθωθεί και είναι απίθανο να επαναληφθεί
1. Μετονομάστε τον φάκελο `Nintendo 3DS` της κάρτας SD σας σε `Nintendo 3DS_BACKUP` και έπειτα, προσπαθήστε να κάνετε εκκίνηση. Εάν η κονσόλα σας εκκινηθεί επιτυχώς, υπάρχει κάποιο πρόβλημα εντός του φακέλου `Nintendo 3DS` σας. Δοκιμάστε να εκκαθαρίσετε τα extdata του μενού «HOME»:
    + Μεταβείτε στο `/Nintendo 3DS/<ID0>/<ID1>/extdata/000000/`
    + Διαγράψτε τον φάκελο που αντιστοιχεί στην περιοχή του 3DS σας:
        + **Περιοχή EUR**: `00000098`
        + **Περιοχή JPN**: `00000082`
        + **Περιοχή USA**: `0000008f`
        + **Περιοχή CHN**: `000000A1`
        + **Περιοχή KOR**: `000000A9`
        + **Περιοχή TWN**: `000000B1`
1. Δοκιμάστε να κάνετε εκκίνηση στη λειτουργία αποκατάστασης και να ενημερώσετε το σύστημά σας:
    + Απενεργοποιήστε την κονσόλα σας
    + Κρατήστε πατημένα τα (L) + (R) + (Πάνω) + (A)
    + Ενεργοποιήστε την κονσόλα σας
    + Εάν η διαδικασία ήταν επιτυχής, η κονσόλα θα εκκινηθεί στην οθόνη «update your system»
1. Ακολουθήστε τον οδηγό [CTRTransfer](ctrtransfer)
1. Για περαιτέρω υποστήριξη, ζητήστε βοήθεια στο [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### Μήνυμα σφάλματος κατά την εκκίνηση

{% capture compat %}
<summary><u>«An error has occurred: Failed to apply 1 FIRM patch(es)» ή «An exception has occurred -- Current process: pm»</u></summary>

Η έκδοση του Luma3DS σας είναι παρωχημένη. Κάντε λήψη της πιο πρόσφατης έκδοσης του [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) και τοποθετήστε το `boot.firm` στη ρίζα της κάρτας SD σας, αντικαθιστώντας οποιοδήποτε υπάρχον αρχείο. Βεβαιωθείτε ότι κάνετε αποσυμπίεση του αρχείου ZIP με οποιοδήποτε εργαλείο εκτός του WinRAR, καθώς είναι γνωστό ότι προκαλεί προβλήματα με τα αρχεία που σχετίζονται με το 3DS.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>«Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one.»</u></summary>
Υπάρχουν διάφοροι λόγοι για τους οποίους θα μπορούσε να συμβεί κάτι τέτοιο. Σε κάθε περίπτωση, αυτό το σφάλμα μπορεί συνήθως να διορθωθεί ακολουθώντας τον οδηγό σχετικά με το [CTRTransfer](ctrtransfer).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>«An error has occurred. Hold down the POWER button to turn off the power...»</u></summary>

Έχουν απενεργοποιηθεί οι χειριστές εξαιρέσεων ARM11 (ARM11 exception handlers) ή δεν έχει εγκατασταθεί custom firmware. Δοκιμάστε να ενεργοποιήσετε τους χειριστές εξαιρέσεων ARM11:
    + Απενεργοποιήστε την κονσόλα σας
    + Κρατήστε πατημένο το (Select)
    + Ενεργοποιήστε την κονσόλα σας, κρατώντας παράλληλα πατημένο το (Select)
    + Εάν είναι ενεργή η επιλογή «Disable ARM11 exception handlers», απενεργοποιήστε την
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Απουσία εγκατεστημένων εφαρμογών από το μενού «HOME»</u></summary>

Αυτό θα μπορούσε να προκληθεί από διάφορους λόγους, αλλά πιθανότατα επειδή το σύστημα δεν διαβάζει την κάρτα SD σας.
Μπορείτε να ελέγξετε εάν γίνεται ανάγνωση της SD σας κρατώντας πατημένο το SELECT κατά την εκκίνηση και ελέγχοντας το κίτρινο κείμενο στην κάτω οθόνη. Εάν βλέπετε το «Booted from CTRNAND via B9S», τότε η κονσόλα σας εκκινείται από την εσωτερική μνήμη και όχι από την κάρτα SD.
Σε αυτήν την περίπτωση, επιχειρήστε τα παρακάτω βήματα, τα οποία αναγράφονται από το πιο εύκολο στο πιο δύσκολο:
1. Απενεργοποιήστε την κονσόλα σας, αφαιρέστε την κάρτα SD, εισαγάγετέ την ξανά και έπειτα, ενεργοποιήστε την κονσόλα σας
1. Απενεργοποιήστε την κονσόλα σας, αφαιρέστε την κάρτα SD, εισαγάγετέ τη στον υπολογιστή σας, κάντε λήψη της πιο πρόσφατης έκδοσης του [Luma3DS](https://github. om/LumaTeam/Luma3DS/releases/latest), αποσυμπιέστε το `boot.firm` από το `Luma3DS.zip` και τοποθετήστε το στη ρίζα της κάρτας SD σας (αντικαθιστώντας οποιοδήποτε υπάρχον αρχείο)
1. Απενεργοποιήστε την κονσόλα σας, αφαιρέστε την κάρτα SD, εισαγάγετέ τη στον υπολογιστή σας και διαμορφώστε ξανά την κάρτα SD, ανάλογα με το λειτουργικό σύστημα του υπολογιστή σας: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)) *(αυτή η ενέργεια θα διαγράψει τα δεδομένα της κάρτας SD)*
1. Ελέγξτε την κάρτα SD σας για σφάλματα ακολουθώντας τον οδηγό που αντιστοιχεί στο λειτουργικό σύστημα του υπολογιστή σας: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)). Εάν η κάρτα SD έχει επισημανθεί ως ελαττωματική («faulty»), τότε θα πρέπει να αντικαταστήσετε την κάρτα SD σας
1. Η υποδοχή της κάρτας SD μπορεί να έχει χαλάσει. Γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για περαιτέρω βοήθεια
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Μπλε οθόνη «BOOTROM ERROR»</u></summary>

Η κονσόλα σας έχει πιθανώς καταστεί μη λειτουργική. Θα χρειαστεί να αγοράσετε μια flashcart με ntrboot για να εγκαταστήσετε εκ νέου το boot9strap, προκειμένου να προσπαθήσετε να διορθώσετε την κονσόλα σας. Αυτό μπορεί επίσης να υποδεικνύει ένα ζήτημα υλικού που δεν μπορεί να διορθωθεί. Σε κάθε περίπτωση, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.
    + Είναι επίσης πιθανό να έχει οριστεί από κάποιον μια οθόνη εκκίνησης που να θυμίζει την κατάσταση αδυναμίας λειτουργίας. Δοκιμάστε να αφήσετε την κονσόλα σας ενεργοποιημένη, περιμένοντας στην μπλε οθόνη, για πέντε λεπτά.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Κάποιο άλλο σφάλμα</u></summary>

Τραβήξτε μια φωτογραφία του σφάλματος και γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για βοήθεια.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Ζητήματα λογισμικού σε κονσόλες με custom firmware

{% capture compat %}
<summary><u>Οι λειτουργίες DSi/DS έχουν χαλάσει ή αντικατασταθεί με το Flipnote Studio</u></summary>

1. Κάντε λήψη της πιο πρόσφατης έκδοσης του [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (το αρχείο `.3dsx`)
1. Απενεργοποιήστε την κονσόλα σας
1. Δημιουργήστε έναν φάκελο με το όνομα `3ds` στη ρίζα της κάρτας SD σας αν δεν υπάρχει ήδη
1. Αντιγράψτε το `TWLFix-CFW.3dsx` στον φάκελο `/3ds/` της κάρτας SD σας
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Ανοίξτε το Homebrew Launcher
1. Εκκινήστε το TWLFix-CFW από τη λίστα των εφαρμογών homebrew
1. Πατήστε το (A) για να αφαιρέσετε τους μη λειτουργικούς τίτλους TWL
1. Πατήστε το (Start) για να επανεκκινήσετε την κονσόλα σας
1. Ενημερώστε την κονσόλα σας ανοίγοντας την εφαρμογή «System Settings», επιλέγοντας «Other Settings» και τέλος, «System Update» στην τελευταία σελίδα προς τα δεξιά
    + Η ενημέρωση θα διαπιστώσει ότι έχουν αφαιρεθεί βασικοί τίτλοι TWL και θα κάνει ξανά λήψη και εγκατάστασή τους
1. Μόλις ολοκληρωθεί η ενημέρωση, πατήστε «OK» για επανεκκίνηση της κονσόλας
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Δεν λειτουργεί η Virtual Console για GBA ή/και η Safe Mode</u></summary>

Η κονσόλα σας διαθέτει το Luma3DS 6.6 ή παλαιότερο, πιθανότατα μέσω arm9loaderhax. Πρέπει να ακολουθήσετε τις οδηγίες του [Από το A9LH στο B9S](a9lh-to-b9s) για να ενημερώσετε την κονσόλα σας σε ένα σύγχρονο περιβάλλον custom firmware.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Τα παιχνίδια σε λειτουργία εκτεταμένης μνήμης (Pokemon Sun/Moon, Smash κ.λπ.) δεν λειτουργούν</u></summary>

Αυτό μπορεί να συμβεί μετά από μια αλλαγή του CTRTransfer ή της περιοχής στα Old 3DS/2DS. Ακολουθήστε τις οδηγίες [εδώ](https://3ds.hacks.guide/region-changing#section-vi---fixing-locale-related-issues) για να διορθώσετε αυτό το ζήτημα (παραλείποντας τα βήματα 3, 4, 5 και 6).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Οθόνη εξαίρεσης κατά την εκκίνηση/φόρτωση μιας εφαρμογής</u></summary>

Αναζητήστε την οθόνη εξαίρεσης σε [αυτήν τη σελίδα](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Εάν δεν μπορείτε να βρείτε το σφάλμα σας ή αν δεν λειτούργησαν οι οδηγίες, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) για περαιτέρω βοήθεια.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Το άνοιγμα των ρυθμίσεων του μενού «HOME» διακόπτει απροσδόκητα τη λειτουργία της κονσόλας ή φορτώνει το Homebrew Launcher</u></summary>

Το menuhax67 εξακολουθεί πιθανότατα να είναι εγκατεστημένο στην κονσόλα σας. Για να καταργήσετε την εγκατάσταση του menuhax67, κάντε λήψη της πιο πρόσφατης έκδοσης του [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (το αρχείο `.zip` του menuhax) και ακολουθήστε τις οδηγίες της [ενότητας «Uninstall menuhax67»](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Επίλυση άλλων προβλημάτων

{% capture compat %}
<summary><u>Εκκαθάριση των extdata του μενού «HOME»</u></summary>

1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Μεταβείτε στον φάκελο `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` της κάρτας SD σας
1. Διαγράψτε τον φάκελο που αντιστοιχεί στην περιοχή του 3DS σας:
    + **Περιοχή EUR**: `00000098`
    + **Περιοχή JPN**: `00000082`
    + **Περιοχή USA**: `0000008f`
    + **Περιοχή CHN**: `000000A1`
    + **Περιοχή KOR**: `000000A9`
    + **Περιοχή TWN**: `000000B1`
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Εκκαθάριση δεδομένων θεμάτων του μενού «HOME»</u></summary>

1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Μεταβείτε στον φάκελο `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` της κάρτας SD σας
1. Διαγράψτε τον φάκελο που αντιστοιχεί στην περιοχή του 3DS σας:
    + **Περιοχή EUR**: `000002ce`
    + **Περιοχή JPN**: `000002cc`
    + **Περιοχή USA**: `000002cd`
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Μη αυτόματη είσοδος στο Homebrew Launcher</u></summary>

Αν λείπει η εφαρμογή «Homebrew Launcher» από το μενού «HOME», μπορείτε να ακολουθήσετε αυτές τις οδηγίες για να εισέλθετε χειροκίνητα στο Homebrew Launcher. (Θα χρειαστείτε τα [boot.3dsx και boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) στη ρίζα της κάρτας SD σας.)

{% include_relative include/launch-hbl-dlp.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Απενεργοποίηση γονικού ελέγχου (Parental Controls)</u></summary>

Για να απενεργοποιήσετε τη λειτουργία «Parental Controls», μεταβείτε στο «System Settings» -> «Parental Controls» και εισαγάγετε το PIN. Έπειτα, πατήστε «Clear Settings» και τέλος, επιλέξτε «Delete» για αφαίρεση.
Ωστόσο, αν δεν γνωρίζετε το PIN και επομένως, δεν μπορείτε να αποκτήστε πρόσβαση στις ρυθμίσεις της κονσόλας, θα πρέπει να το απενεργοποιήσετε. Για να το κάνετε αυτό, θα πρέπει να αποκτήσετε το κύριο κλειδί (mkey) της κονσόλας σας:
1. Μεταβείτε σε [αυτόν τον ιστότοπο](https://mkey.eiphax.tech/)
1. Συμπληρώστε τα ακόλουθα πεδία:
    + Device Type: Επιλέξτε «3DS» (ισχύει το ίδιο εάν χρησιμοποιείτε 2DS, New 3DS (XL/LL) ή New 2DS (XL/LL))
    + System Date: Η ημέρα και ο μήνας στα οποία έχει οριστεί το ρολόι της κονσόλας σας
    + Inquiry Number: Μπορείτε να το λάβετε πατώντας «Forgot PIN» και έπειτα, «I Forgot» στην οθόνη της λειτουργίας «Parental Controls»
1. Αφού λάβετε το mkey σας, πατήστε το «OK» στην οθόνη που λάβατε το Inquiry Number σας. Έπειτα, εισαγάγετε το κύριο κλειδί
1. Πατήστε «Clear Settings» και έπειτα, «Delete» για να καταργήσετε όλα τα δεδομένα της λειτουργίας «Parental Controls»
{% endcapture %}
<details>{{ compat | markdownify }}</details>
