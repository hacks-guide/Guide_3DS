# Εγκατάσταση του boot9strap (super-skaterhax)

:::details Technical Details (optional)

Για τεχνικές λεπτομέρειες σχετικά με τα exploit που θα χρησιμοποιήσετε σε αυτήν τη σελίδα, δείτε [εδώ](https://github.com/zoogie/super-skaterhax).

:::

### Compatibility Notes

Το super-skaterhax (όταν χρησιμοποιείται για την εκκίνηση του Homebrew Launcher) είναι συμβατό με τα μοντέλα New στην έκδοση 11.15.0 και νεότερες, σε όλες τις περιοχές.

::: warning

Οι παρεχόμενες οδηγίες αφορούν μόνο τα New 3DS, New 3DS XL και New 2DS XL. Βεβαιωθείτε ότι η κονσόλα που τροποποιείτε είναι ένα New 3DS, New 3DS XL ή New 2DS XL πριν συνεχίσετε.

:::

### What You Need

- The [super-skaterhax](https://toxicaven.dev/skater) zip for your console's region and system version

#### Section I - Prep Work

Σε αυτήν την ενότητα, θα αντιγράψετε τα αρχεία που απαιτούνται για την ενεργοποίηση τόσο του super-skaterhax όσο και του Homebrew Launcher.

1. Απενεργοποιήστε την κονσόλα σας

2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας

3. Αντιγράψτε τα πάντα από το αρχείο `.zip` του sk8rhax στη ρίζα της κάρτας SD σας, αντικαθιστώντας τυχόν υπάρχοντα αρχεία

   ::: info

   ![](/images/screenshots/skater-root-layout.png)

   :::

4. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

5. Ενεργοποιήστε την κονσόλα σας

6. Εκκινήστε την εφαρμογή «System Settings»

7. Επιλέξτε «Other Settings»

8. Μεταβείτε στο «Profile» -> «Region Settings»
   - If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that tells you that you will lose access to Nintendo Network ID features, you can safely select OK to continue
   - After completing this page, you can restore the region settings back to normal

9. Χρησιμοποιήστε τις εξής επιλογές σύμφωνα με την περιοχή της κονσόλας σας ([εικόνα](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Κλείστε την εφαρμογή «System Settings»

#### Section II - super-skaterhax

Σε αυτήν την ενότητα, θα επισκεφτείτε την ιστοσελίδα του exploit, η οποία θα εκκινήσει το Homebrew Launcher.

::: info

Εάν δεν το έχετε κάνει ήδη, βεβαιωθείτε ότι έχετε ρυθμίσει μια λειτουργική σύνδεση στο διαδίκτυο στην κονσόλα σας.

:::

1. Στο μενού «HOME», πατήστε ταυτόχρονα τα κουμπιά (L) και (R) για να ανοίξετε την κάμερα
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/super/` for EUR/USA/JPN, `https://zoogie.github.io/web/korea` for KOR)
2. Πατήστε το κουμπί του κωδικού QR και σαρώστε έναν από τους παρακάτω κωδικούς QR για την περιοχή της κονσόλας σας [εδώ](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
   - If you get a security certificate warning, please ensure that the system date is today's
3. Πατήστε το (Select) για να ανοίξετε την καρτέλα σελιδοδεικτών
   - If your (Select) button does not respond, tap the star icon on the bottom-left corner of the screen
4. Πατήστε «Bookmark this page»
5. Πατήστε το (B) μία φορά για να επιστρέψετε στο πρόγραμμα περιήγησης
6. Πατήστε το (ZR) για να ανοίξετε τη λίστα καρτελών
   - If your (ZR) button does not respond, tap the two overlapped squares near the bottom-right corner of the screen
7. Βεβαιωθείτε ότι η μόνη ανοικτή καρτέλα είναι ο ιστότοπος του super-skaterhax
   - This tab should be highlighted in blue on the tab list
   - If other tabs are open, close them
8. Πατήστε το (B) μία φορά για να επιστρέψετε στο πρόγραμμα περιήγησης
9. Πατήστε το (Start) για να ανοίξετε το μενού επιλογών
   - If your (Start) button does not respond, tap the 3-line menu on the bottom-right corner of the screen
10. Πατήστε «Settings»
11. Επιλέξτε «Delete Cookies»
12. Πατήστε το (A) για να συνεχίσετε
13. Πατήστε το (Home) για να επιστρέψετε στο μενού «HOME» και έπειτα, πατήστε αμέσως το (A) για να εκκινήσετε ξανά το πρόγραμμα περιήγησης
14. Επιλέξτε το κουμπί «GO GO!» στο πάνω μέρος της κάτω οθόνης
15. Πατήστε το (A) για να κλείσετε το [αναδυόμενο παράθυρο](/images/screenshots/skaterhax/skater-popup.png)
    - If your console freezes on a yellow screen, hold the POWER button until it turns off, then retry this section
    - If your console freezes on a red screen, hold the POWER button until it turns off, redo step 3 of Section II, then retry this section
    - If your console [shows the word Text on the top-left corner of the bottom screen](/images/screenshots/skaterhax/skater-old3ds.png), you have an Old 3DS and this exploit **will not work on your device**. Σε αυτήν την περίπτωση, θα πρέπει να ακολουθήσετε τις οδηγίες στο [MSET9](installing-boot9strap-\(mset9\))
    - If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-super-skaterhax)
16. Η κονσόλα σας θα έχει εκκινηθεί στο Homebrew Launcher
17. Εκκινήστε το nimdsphax από τη λίστα των εφαρμογών homebrew
18. Εάν το exploit ήταν επιτυχές, θα έχει γίνει εκκίνηση στο SafeB9SInstaller
    - If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section
    - This may take up to five attempts

#### Section III - Installing boot9strap

Σε αυτήν την ενότητα, θα εγκαταστήσετε custom firmware στην κονσόλα σας.

1. Όταν ζητηθεί, εισαγάγετε τον συνδυασμό πλήκτρων που θα εμφανιστεί στην πάνω οθόνη, ώστε να εγκαταστήσετε το boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Μόλις ολοκληρωθεί, πατήστε το (Α) για να επανεκκινήσετε την κονσόλα σας

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Μπορείτε τώρα να επαναφέρετε τις ρυθμίσεις περιοχής στις κανονικές επιλογές.

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
