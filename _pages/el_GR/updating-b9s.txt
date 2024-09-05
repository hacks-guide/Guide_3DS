---
title: "Ενημέρωση του B9S"
---

{% include toc title="Πίνακας περιεχομένων" %}

### Απαραίτητη ανάγνωση

Αυτή η σελίδα αφορά τους υπάρχοντες χρήστες του boot9strap που θέλουν να ενημερώσουν την εγκατάσταση του boot9strap στην πιο πρόσφατη έκδοση.

### Τι χρειάζεστε

* Την πιο πρόσφατη έκδοση του [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (απευθείας λήψη)
* Την πιο πρόσφατη έκδοση του [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (απευθείας λήψη)
* Την πιο πρόσφατη έκδοση του [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (το αρχείο `.zip` του Luma3DS)

### Οδηγίες

#### Ενότητα I - Προετοιμασία

Για όλα τα βήματα αυτής της ενότητας, αντικαταστήστε όλα τα τυχόν υπάρχοντα αρχεία στην κάρτα SD σας.
{: .notice--info}

1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Δημιουργήστε έναν φάκελο με το όνομα `boot9strap` στη ρίζα της κάρτας SD σας
1. Αντιγράψτε τα `boot9strap.firm` και `boot9strap.firm.sha` από το αρχείο `.zip` του boot9strap στον φάκελο `/boot9strap/` της κάρτας SD σας
1. Αντιγράψτε το `SafeB9SInstaller.firm` από το αρχείο `.zip` του SafeB9SInstaller στη ρίζα της κάρτας SD σας και μετονομάστε το σε `boot.firm`
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Ενότητα II - Εγκατάσταση του boot9strap

1. Ενεργοποιήστε την κονσόλα σας
    + Θα πρέπει να εκκινηθεί αυτόματα το SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Ενότητα III - Ενημέρωση του Luma3DS

1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
1. Αντιγράψτε τα αρχεία `boot.firm` και `boot.3dsx` από το αρχείο `.zip` του Luma3DS στη ρίζα της κάρτας SD σας, αντικαθιστώντας το υπάρχον αρχείο
1. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
1. Ενεργοποιήστε την κονσόλα σας
1. Εάν η κονσόλα σας έχει εκκινηθεί στο μενού ρυθμίσεων του Luma3DS, πατήστε το (Start) για αποθήκευση και επανεκκίνηση
    + Το μενού ρυθμίσεων του Luma3DS περιέχει επιλογές για το custom firmware «Luma3DS». Πολλές από αυτές τις ρυθμίσεις χρησιμεύουν στην προσαρμογή ή τον έλεγχο για σφάλματα
    + Στα πλαίσια αυτού του οδηγού, αυτές οι ρυθμίσεις θα παραμείνουν στις προεπιλογές τους

___

### Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)
{: .notice--primary}
