---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Εγκατάσταση του boot9strap (super-skaterhax)

:::details Τεχνικές λεπτομέρειες (προαιρετικό)

Για τεχνικές λεπτομέρειες σχετικά με τα exploit που θα χρησιμοποιήσετε σε αυτήν τη σελίδα, δείτε [εδώ](https://github.com/zoogie/super-skaterhax).

:::

### Σημειώσεις συμβατότητας

Το super-skaterhax (όταν χρησιμοποιείται για την εκκίνηση του Homebrew Launcher) είναι συμβατό με τα μοντέλα New στην έκδοση 11.15.0 και νεότερες, σε όλες τις περιοχές.

::: info

This exploit is known to be inconsistent: it works for some people, but not others. If you prefer to use a more consistent exploit (which may take longer, but will have the same end result), follow [MSET9](installing-boot9strap-\(mset9\)) instead.

:::

### Τι χρειάζεστε

- Το αρχείο zip του [Super-skaterhax](https://skater.nintendohomebrew.com) για την περιοχή και την έκδοση συστήματος της κονσόλας σας

#### Ενότητα I - Προετοιμασία

Σε αυτήν την ενότητα, θα αντιγράψετε τα αρχεία που απαιτούνται για την ενεργοποίηση τόσο του super-skaterhax όσο και του Homebrew Launcher.

1. Απενεργοποιήστε την κονσόλα σας

2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας

3. Αντιγράψτε τα πάντα από το αρχείο `.zip` του Super-skaterhax στη ρίζα της κάρτας SD σας, αντικαθιστώντας τα τυχόν υπάρχοντα αρχεία

    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

4. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

5. Ενεργοποιήστε την κονσόλα σας

6. Εκκινήστε την εφαρμογή «System Settings»

7. Επιλέξτε «Other Settings»

8. Μεταβείτε στο «Profile» -> «Region Settings»
    - Αυτές οι ρυθμίσεις θα τροποποιηθούν προσωρινά για να αυξηθεί το ποσοστό επιτυχίας του exploit
    - Μόλις ολοκληρώσετε τα βήματα αυτής της σελίδας, μπορείτε να επαναφέρετε τις ρυθμίσεις περιοχής σας στις κανονικές τιμές τους
    - Εάν λάβετε μια [προειδοποίηση](/images/screenshots/skaterhax/country-change-notice.png) που δηλώνει ότι θα χάσετε την πρόσβαση στις λειτουργίες του Nintendo Network ID, μπορείτε να επιλέξετε με ασφάλεια το «OK» για να συνεχίσετε

9. Χρησιμοποιήστε τις εξής επιλογές σύμφωνα με την περιοχή της κονσόλας σας ([εικόνα](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. Μεταβείτε στο «Date & Time»

11. Ορίστε τα «Today's Date» και «Current Time» στην τρέχουσα ημερομηνία και ώρα της ζώνης ώρας σας

12. Κλείστε την εφαρμογή «System Settings»

#### Ενότητα II - super-skaterhax

Σε αυτήν την ενότητα, θα επισκεφτείτε την ιστοσελίδα του exploit, η οποία θα εκκινήσει το Homebrew Launcher.

::: info

Μπορείτε να βρείτε ένα βίντεο που αναλύει αυτά τα βήματα [εδώ](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Ανοίξτε την εφαρμογή «Internet Browser»
2. Πατήστε το εικονίδιο τριών γραμμών (☰) στην κάτω δεξιά γωνία της οθόνης
3. Πατήστε `Settings` -> κάντε κύλιση προς τα κάτω -> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK`
    - Θα κλείσει το πρόγραμμα περιήγησης
4. Ανοίξτε ξανά την εφαρμογή «Internet Browser»
5. Πατήστε `Next` -> `Google` -> `OK` -> `OK`
6. Πατήστε τη γραμμή διευθύνσεων στο επάνω μέρος της κάτω οθόνης
7. Εισαγάγετε το URL που αντιστοιχεί στην περιοχή της κονσόλας σας:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Επιλέξτε «Open»
    - Θα δείτε το κείμενο «GO GO!». Μην το πατήσετε ακόμα
9. Πατήστε το εικονίδιο τριών γραμμών (☰) στην κάτω δεξιά γωνία της οθόνης
10. Επιλέξτε «Add to Bookmarks»
11. Πατήστε το εικονίδιο τριών γραμμών (☰) στην κάτω δεξιά γωνία της οθόνης
12. Πατήστε `Settings` -> `Delete Cookies` -> `Yes`
13. Πατήστε το (Home) για να επιστρέψετε στο μενού «HOME» και αμέσως μετά, ανοίξετε ξανά την εφαρμογή «Internet Browser»
14. Περιμένετε μέχρι να φορτωθεί πλήρως η σελίδα και πατήστε το κουμπί «GO GO!» στο επάνω μέρος της κάτω οθόνης
15. Περιμένετε μέχρι να φορτωθεί πλήρως η σελίδα και πατήστε το (A) για να απορρίψετε το [αναδυόμενο παράθυρο](/images/screenshots/skaterhax/skater-popup.png)
16. Εάν η κονσόλα σας εμφανίσει:
    - **Την οθόνη «The Homebrew Launcher»**: Συνεχίστε στο επόμενο βήμα
    - **Ένα λευκό πλαίσιο μηνύματος «Error has occurred»**: Το exploit απέτυχε λόγω τυχαιότητας. Ανοίξτε την εφαρμογή «System Settings», αλλάξετε τη γλώσσα σε κάποια άλλη (αν είναι δυνατόν) και επαναλάβετε τα βήματα αυτής της ενότητας. You may have to repeat this sequence up to ten times
        - Στις κονσόλες της περιοχής JPN/KOR, υπάρχει μόνο μία ρύθμιση γλώσσας. Σε αυτές τις κονσόλες, θα πρέπει να ανοίξετε την εφαρμογή «System Settings», να την κλείσετε και στη συνέχεια, να επαναλάβετε τα βήματα αυτής της ενότητας
        - If the exploit is still unsuccessful after five attempts, there may be a problem with your files or prep work. Ensure that region and date/time are correct, and that you have been following this section **exactly**. If you used WinRAR to extract files to the SD card, re-extract the files using File Explorer or 7-zip instead
        - If the exploit is still unsuccessful after ten attempts, follow [MSET9](installing-boot9strap-\(mset9\)) instead
    - **Μια μαύρη οθόνη με το μήνυμα «An error has occurred»**: Η τοποθέτηση των αρχείων είναι λανθασμένη. Βεβαιωθείτε ότι τα αρχεία του super-skaterhax βρίσκονται στη ρίζα της κάρτας SD
    - **Μια κίτρινη οθόνη**: Το άνοιγμα του Homebrew Launcher απέτυχε λόγω τυχαιότητας. Κρατήστε πατημένο το κουμπί POWER μέχρι να απενεργοποιηθεί η κονσόλα και επαναλάβετε τα βήματα αυτής της ενότητας
    - **[Τη λέξη «Text»](/images/screenshots/skaterhax/skater-old3ds.png)**: Έχετε ένα Old 3DS, στα οποία **δεν λειτουργεί** αυτό το exploit. Σε αυτήν την περίπτωση, θα πρέπει να ακολουθήσετε τις οδηγίες στο [MSET9](installing-boot9strap-\(mset9\))
17. Εκκινήστε το nimdsphax από τη λίστα των εφαρμογών homebrew
18. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller
    - Εάν η κονσόλα σας «παγώσει» σε μια κόκκινη ή πράσινη οθόνη, κρατήστε πατημένο το κουμπί POWER μέχρι να απενεργοποιηθεί και έπειτα, επαναλάβετε τα βήματα αυτής της ενότητας

#### Ενότητα III - Εγκατάσταση του boot9strap

Σε αυτήν την ενότητα, θα εγκαταστήσετε custom firmware στην κονσόλα σας.

1. Όταν ζητηθεί, εισαγάγετε τον συνδυασμό πλήκτρων που θα εμφανιστεί στην πάνω οθόνη, ώστε να εγκαταστήσετε το boot9strap
    - Εάν το κείμενο κάποιου βήματος στην κάτω οθόνη έχει κόκκινο χρώμα και δεν σας ζητείται να εισαγάγετε κάποιον συνδυασμό πλήκτρων, [ακολουθήστε αυτόν τον οδηγό επίλυσης προβλημάτων](troubleshooting-super-skaterhax)
2. Μόλις ολοκληρωθεί, πατήστε το (Α) για να επανεκκινήσετε την κονσόλα σας

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Μπορείτε τώρα να επαναφέρετε τις ρυθμίσεις περιοχής στις κανονικές επιλογές.

:::

::: tip

Συνέχεια στην [Ολοκλήρωση εγκατάστασης](finalizing-setup)

:::
