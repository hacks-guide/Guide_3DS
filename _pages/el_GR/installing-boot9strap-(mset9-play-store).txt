---
title: "Εγκατάσταση του boot9strap (MSET9 Play Store)"
---

{% include toc title="Πίνακας περιεχομένων" %}

{% capture technical_info %}
<summary><em>Τεχνικές λεπτομέρειες (προαιρετικό)</em></summary>
Το [MSET9](https://github.com/zoogie/MSET9) είναι ένα exploit για την εφαρμογή «System Settings», το οποίο αναπτύσσεται από τον [zoogie](https://github.com/zoogie). Εκμεταλλεύεται ένα ελάττωμα όπου το ID1 (το όνομα του δεύτερου φακέλου, που αποτελείται από 32 χαρακτήρες, μέσα στον φάκελο «Nintendo 3DS», εντός του ID0) μπορεί να είναι *οποιοδήποτε* όνομα εφόσον είναι 32 χαρακτήρες. Η εκτέλεση μιας συγκεκριμένης ακολουθίας ενεργειών έχει ως αποτέλεσμα την εκτέλεση των οδηγιών από την κονσόλα, οι οποίες κωδικοποιούνται στο όνομα του φακέλου ID1, πράγμα που μπορεί να χρησιμοποιηθεί για την παροχή πλήρους ελέγχου επί του 3DS.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Σημειώσεις συμβατότητας

Αυτή η σελίδα απαιτεί ένα τηλέφωνο/tablet με Android ή ένα Chromebook. Εάν διαθέτετε έναν υπολογιστή με Windows, macOS ή Linux, ακολουθήστε τις οδηγίες της ενότητας [Εγκατάσταση του boot9strap (MSET9 CLI)](installing-boot9strap-(mset9-cli)). Εάν δεν έχετε πρόσβαση σε καμία από αυτές τις συσκευές, θα πρέπει να χρησιμοποιήσετε ένα [εναλλακτικό exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).
{: .notice--warning}

Σε τηλέφωνα/tablet με Android, η ελάχιστη απαιτούμενη έκδοση Android είναι η 6.0 (Marshmallow).
{: .notice--warning}

### Τι χρειάζεστε

* Τις ακόλουθες εφαρμογές από το Google Play Store:
    * [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
    * [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    * Εάν θέλετε, μπορείτε να εγκαταστήσετε αυτές τις εφαρμογές μέσω sideload
* Την πιο πρόσφατη έκδοση του [MSET9](https://github.com/zoogie/MSET9/releases/latest) (το αρχείο `.zip` του Release)

### Οδηγίες

#### Ενότητα I - Προετοιμασία

Σε αυτήν την ενότητα, θα προετοιμάσετε τα δεδομένα της κάρτας SD που είναι απαραίτητα για την ενεργοποίηση του exploit «MSET9».

1. Ενεργοποιήστε την κονσόλα σας **έχοντας εισαγάγει την κάρτα SD**
1. Ανοίξτε το Mii Maker
1. Περιμένετε μέχρι η κονσόλα σας να φτάσει στην οθόνη «Welcome to Mii Maker» και έπειτα, κλείστε τό Mii Maker
    + Ενδέχεται να δείτε [αυτήν την οθόνη](/images/screenshots/mset9/mii-extdata.png), η οποία υποδεικνύει ότι έχουν δημιουργηθεί τα απαραίτητα δεδομένα
    + Εάν απλώς οδηγηθείτε στην κανονική οθόνη του Mii Maker, κλείστε το Mii Maker και συνεχίστε στο επόμενο βήμα
1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στο τηλέφωνο, το tablet ή τον υπολογιστή σας
1. Αντιγράψτε τα πάντα από το αρχείο `.zip` του Release στη ρίζα της κάρτας SD σας, αντικαθιστώντας τυχόν υπάρχοντα αρχεία:
    + Ανοίξτε το ZArchiver
    + Εάν σας ζητηθεί, [επιτρέψτε στο ZArchiver να έχει πρόσβαση στα αρχεία της κάρτας SD σας](/images/screenshots/mset9/zarchiver-allow.png)
    + Μεταβείτε στην τοποθεσία του ληφθέντος αρχείου `.zip` του MSET9 Release ([πιθανότατα στον φάκελο λήψεων](/images/screenshots/mset9/zarchiver-zip-location.png))
    + Επιλέξτε το αρχείο `.zip`του Release και έπειτα, «Extract...» ([εικόνα](/images/screenshots/mset9/zarchiver-extract-1.png))
    + Μεταβείτε στην κάρτα SD σας και πατήστε το εικονίδιο «μπλε κάτω βέλος» για να αποσυμπιέσετε τα αρχεία στη ρίζα της κάρτας SD σας ([εικόνα](/images/screenshots/mset9/zarchiver-extract-2.png))

    ![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout-android.png)
    {: .notice--info}

1. Εκτελέστε την [εφαρμογή «MSET9 Installer»](/images/screenshots/mset9/mset9-setup-android.png)
1. Πατήστε το `Select "Nintendo 3DS" Folder` και μεταβείτε στον φάκελο `Nintendo 3DS` της κάρτας SD σας ([εικόνα](/images/screenshots/mset9/select-mset9-folder-1.png))
1. Μόλις βρεθείτε εντός του φακέλου `Nintendo 3DS`, πατήστε το «Use this folder» και έπειτα, το «Allow» αν σας ζητηθεί ([εικόνα](/images/screenshots/mset9/select-mset9-folder-2.png))
1. Εάν έχει [επισημανθεί](/images/screenshots/mset9/setup-mset9-highlighted.png) το «Setup MSET9», συνεχίστε στο επόμενο βήμα. **Μην κάνετε ρύθμιση του MSET9 ακόμα.** Κλείστε προς το παρόν το MSET9 Installer
    + Εάν έχει επισημανθεί το «Check Again», υπάρχει κάποιο πρόβλημα που πρέπει να επιλύσετε πριν μπορέσετε να χρησιμοποιήσετε το MSET9. Ανατρέξτε στη σελίδα [επίλυσης προβλημάτων](troubleshooting#installing-boot9strap-mset9)
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Ενεργοποιήστε την κονσόλα σας

#### Ενότητα II - MSET9

Σε αυτήν την ενότητα, θα ενεργοποιήσετε το MSET9 για να εκκινηθεί το SafeB9SInstaller (το πρόγραμμα εγκατάστασης του custom firmware).

Θα πρέπει να ακολουθήσετε αυτές τις οδηγίες **ΚΑΤΑ ΓΡΑΜΜΑ**, οπότε ελέγξτε ξανά προσεκτικά ΟΛΑ όσα κάνετε για να αποφύγετε τυχόν σφάλματα!
{: .notice--danger}

1. **[Επισημάνετε](/images/screenshots/mset9/hover-settings.png)** το εικονίδιο «System Settings» με το D-Pad (μην το επιλέξετε ακόμα)
1. Απενεργοποιήστε και έπειτα, ενεργοποιήστε την κονσόλα σας
1. Πατήστε το (A) για να εκκινήσετε την εφαρμογή «System Settings»
1. Μεταβείτε στο `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([εικόνα](/images/screenshots/mset9/settings-extdata.png))
1. **Μην πατήσετε κανένα κουμπί και μην αγγίξτε την οθόνη**
1. **Ενώ η κονσόλα είναι ΑΚΟΜΑ ΕΝΕΡΓΗ και χωρίς να πατήσετε κανένα κουμπί ή να αγγίξετε την οθόνη**, αφαιρέστε την κάρτα SD από την κονσόλα σας
    + Το μενού θα ανανεωθεί και θα δείτε ένα μήνυμα περί απουσίας της κάρτας SD, το οποίο είναι αναμενόμενο
1. Εισαγάγετε την κάρτα SD στο τηλέφωνο, το tablet ή τον υπολογιστή σας
1. Ανοίξτε την εφαρμογή «MSET9 Installer»
1. Πατήστε «Setup MSET9»
1. Πατήστε τη φωτογραφία που αντιστοιχεί στο μοντέλο της κονσόλας σας και έπειτα, το κουμπί που αντιστοιχεί στην τρέχουσα έκδοση του firmware σας
    + Εάν η εισαγωγή ήταν επιτυχής, όλα τα κουμπιά θα πρέπει να γίνουν γκρι εκτός από το «Remove MSET9»
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας **χωρίς να πατήσετε οποιοδήποτε πλήκτρο ή να αγγίξετε την οθόνη**
1. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller 
    + Εάν λάβετε μια κόκκινη οθόνη ή αν «κολλήσει» η κονσόλα σε κάποια οθόνη φόρτωσης, ακολουθήστε τον [οδηγό επίλυσης προβλημάτων](troubleshooting#installing-boot9strap-mset9)

#### Ενότητα II - Εγκατάσταση του boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

#### Ενότητα IV - Αφαίρεση του MSET9

Σε αυτήν την ενότητα, θα αφαιρέσετε το MSET9 για να αποτρέψετε περαιτέρω ζητήματα. (Αυτή η ενέργεια δεν θα αφαιρέσει το custom firmware που μόλις εγκαταστήσατε.)

ΜΗΝ παραλείψετε αυτήν την ενότητα! Αν την παραλείψετε, η λειτουργία των εφαρμογών ενδέχεται να διακοπεί απροσδόκητα και θα συναντήσετε σφάλματα στην επόμενη σελίδα!
{: .notice--danger}

1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στο τηλέφωνο, το tablet ή τον υπολογιστή σας
1. Ανοίξτε την εφαρμογή «MSET9 Installer»
1. Επιλέξτε «Remove MSET9»
1. Κλείστε την εφαρμογή «MSET9 Installer»

{% include_relative include/luma3ds-installed-note.txt %}
___

Ακολουθήσατε την Ενότητα IV (Αφαίρεση του MSET9); Η ενότητα αυτή είναι ΥΠΟΧΡΕΩΤΙΚΗ!
{: .notice--danger}

### Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)
{: .notice--primary}
