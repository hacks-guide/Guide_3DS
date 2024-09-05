---
title: "Εγκατάσταση του boot9strap (Soundhax)"
---

{% include toc title="Πίνακας περιεχομένων" %}

{% capture technical_info %}
<summary><em>Τεχνικές λεπτομέρειες (προαιρετικό)</em></summary>

Για τεχνικές λεπτομέρειες σχετικά με τα exploit που θα εκμεταλλευτείτε σε αυτήν τη σελίδα, δείτε [εδώ](https://github.com/nedwill/soundhax) (Soundhax) και [εδώ](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Σημειώσεις συμβατότητας

Το Soundhax (όταν συνδυάζεται με το universal-otherapp) είναι συμβατό με τις εκδόσεις 1.0.0 έως 11.3.0 σε όλες τις περιοχές.

### Τι χρειάζεστε
* Την πιο πρόσφατη έκδοση του [Soundhax](http://soundhax.com) *(για την περιοχή, την κονσόλα και την έκδοσή σας)*
    * Εάν το Soundhax εμφανίζεται στο πρόγραμμα περιήγησής σας ως βίντεο χωρίς τη δυνατότητα αναπαραγωγής, πατήστε Ctrl+S ή Cmd+S για να το αποθηκεύσετε στον υπολογιστή σας
* Την πιο πρόσφατη έκδοση του [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (απευθείας λήψη)
* Την πιο πρόσφατη έκδοση του [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (απευθείας λήψη)
* Την πιο πρόσφατη έκδοση του [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (το αρχείο `.zip` του Luma3DS)
* Την πιο πρόσφατη έκδοση του [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

### Οδηγίες

#### Ενότητα I - Προετοιμασία

Σε αυτήν την ενότητα, θα αντιγράψετε τα αρχεία που απαιτούνται για την ενεργοποίηση τόσο του Soundhax όσο και του universal-otherapp.

1. Απενεργοποιήστε την κονσόλα σας
1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Αντιγράψτε το αρχείο `.m4a` του Soundhax στη ρίζα της κάρτας SD σας
    + Η ρίζα της κάρτας SD είναι ο αρχικός κατάλογος της κάρτας SD σας, όπου μπορείτε να δείτε τον φάκελο «Nintendo 3DS», αλλά χωρίς να βρίσκεστε μέσα σε αυτόν
1. Αντιγράψτε το `otherapp.bin` στη ρίζα της κάρτας SD σας
1. Αντιγράψτε τα `boot.firm` και `boot.3dsx` από το αρχείο `.zip` του Luma3DS στη ρίζα της κάρτας SD σας
1. Δημιουργήστε έναν φάκελο με το όνομα `boot9strap` στη ρίζα της κάρτας SD σας
1. Αντιγράψτε τα `boot9strap.firm` και `boot9strap.firm.sha` από το αρχείο `.zip` του boot9strap στον φάκελο `/boot9strap/` της κάρτας SD σας
1. Αντιγράψτε το `SafeB9SInstaller.bin` από το αρχείο `.zip` του SafeB9SInstaller στη ρίζα της κάρτας SD σας
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Ενεργοποιήστε την κονσόλα σας

![]({{ "/images/screenshots/uosoundhax-root-layout.png" | absolute_url }})
{: .notice--info}

![]({{ "/images/screenshots/boot9strap-folder.png" | absolute_url }})
{: .notice--info}

#### Ενότητα ΙΙ - Εκκίνηση του SafeB9SInstaller

Σε αυτήν την ενότητα, θα εκκινήσετε το Soundhax μέσω της εφαρμογής «Nintendo 3DS Sound», το οποίο θα χρησιμοποιήσει το universal-otherapp για την εκκίνηση του προγράμματος εγκατάστασης του boot9strap (custom firmware).

1. Εκκινήστε την εφαρμογή «Nintendo 3DS Sound»

    ![]({{ "/images/screenshots/soundhax-welcome.png" | absolute_url }})
    {: .notice--info}

1. Εάν δεν έχετε εκκινήσει ποτέ την εφαρμογή «Nintendo 3DS Sound» και εμφανίζονται υποδείξεις από το εικονίδιο «πουλί», απλά προσπεράστε τις, κλείστε την εφαρμογή και έπειτα, ανοίξτε την ξανά
    + Σε αυτήν την περίπτωση, η απευθείας εκκίνηση του SoundHax θα προκαλέσει την επανεμφάνιση αυτών των υποδείξεων κάθε φορά που εκκινείτε την εφαρμογή «Nintendo 3DS Sound» μέχρι να εκτελέσετε το παραπάνω βήμα
1. Μεταβείτε στο `/SDCARD` και έπειτα, κάντε αναπαραγωγή του «<3 nedwill 2016»
    + Ενδέχεται να χρειαστούν πολλές (έως και 10) προσπάθειες
    + Εάν δείτε το μήνυμα «Could not play, είτε διαθέτετε μια έκδοση συστήματος που δεν είναι συμβατή με το Soundhax είτε έχετε κάνει λήψη τη λάθος έκδοσης του Soundhax
    + Εάν «παγώσει», εξαναγκάστε την απενεργοποίηση της κονσόλας κρατώντας πατημένο το κουμπί ισχύος και έπειτα, δοκιμάστε ξανά
    + Εάν λάβετε κάποιο άλλο σφάλμα, [ακολουθήστε αυτόν τον οδηγό επίλυσης προβλημάτων](troubleshooting#installing-boot9strap-soundhax)

    ![]({{ "/images/screenshots/soundhax-launch.png" | absolute_url }})
    {: .notice--info}

1. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller

#### Ενότητα II - Εγκατάσταση του boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}


___

### Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)
{: .notice--primary}
