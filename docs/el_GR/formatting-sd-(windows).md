# Formatting SD (Windows)

## Required Reading

Αυτή είναι μια πρόσθετη ενότητα για τη διαμόρφωση μιας κάρτας SD έτσι, ώστε να λειτουργεί με το 3DS.

Εάν το 3DS αναγνωρίζει ήδη την κάρτα SD, δεν χρειάζεται να ακολουθήσετε αυτόν τον οδηγό.

Αυτή η σελίδα αφορά μόνο χρήστες Windows. Εάν δεν χρησιμοποιείτε Windows, δείτε τις σελίδες [Διαμόρφωση της SD (Linux)](formatting-sd-\(linux\)) ή [Διαμόρφωση της SD (Mac)](formatting-sd-\(mac\)).

## What You Need

- **For SD cards 32GB or smaller:** the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions (32GB or smaller)

1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας

2. Εάν η κάρτα SD περιέχει τυχόν αρχεία και φακέλους, αντιγράψτε τα πάντα σε έναν φάκελο στον υπολογιστή σας

3. Εκτελέστε το `SD Card Formatter Setup` (το αρχείο `.exe`) στο ληφθέν αρχείο `.zip` με δικαιώματα διαχειριστή και έπειτα, εγκαταστήστε το πρόγραμμα

4. Εκτελέστε το `SD Card Formatter` από το μενού «Έναρξη»

5. Επιλέξτε το γράμμα μονάδας της κάρτας SD σας για το «Select card»

   ::: danger

   Βεβαιωθείτε ότι έχει επιλέξει το σωστό γράμμα μονάδας, διαφορετικά ενδέχεται να διαγράψετε ακούσια τον λάθος δίσκο!

   :::

6. Εισαγάγετε οτιδήποτε για το «Volume label»

7. Βεβαιωθείτε ότι είναι επιλεγμένο το «Quick Format»

8. Κάντε κλικ στο «Format»

9. Κάντε κλικ στο «OK»

10. Περιμένετε μέχρι να ολοκληρωθεί η διαμόρφωση

11. Κάντε κλικ στο «OK»

12. Κλείστε το SD Card Formatter

13. Εάν η κάρτα SD περιείχε οποιαδήποτε αρχεία και φακέλους πριν από τη διαμόρφωση, αντιγράψτε τα πάντα από τον υπολογιστή στην κάρτα SD σας

## Instructions (64GB or larger)

1. Εισαγάγετε την κάρτα SD στον υπολογιστή σας

2. Εάν η κάρτα SD περιέχει τυχόν αρχεία και φακέλους, αντιγράψτε τα πάντα σε έναν φάκελο στον υπολογιστή σας

3. Εκτελέστε το `guiformat.exe`

4. Επιλέξτε το γράμμα μονάδας της κάρτας SD σας για το «Drive»

   ::: danger

   Βεβαιωθείτε ότι έχει επιλέξει το σωστό γράμμα μονάδας, διαφορετικά ενδέχεται να διαγράψετε ακούσια τον λάθος δίσκο!

   :::

5. Επιλέξτε ένα μέγεθος για το «Allocation unit size»
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

6. Εισαγάγετε οτιδήποτε για το «Volume label»

7. Βεβαιωθείτε ότι είναι επιλεγμένο το «Quick Format»

8. Κάντε κλικ στο «Start»

9. Κάντε κλικ στο «OK»

10. Περιμένετε μέχρι να ολοκληρωθεί η διαμόρφωση

11. Κάντε κλικ στο «Close»

12. Εάν η κάρτα SD περιείχε οποιαδήποτε αρχεία και φακέλους πριν από τη διαμόρφωση, αντιγράψτε τα πάντα από τον υπολογιστή στην κάρτα SD σας

## Επίλυση προβλημάτων

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). Ο διακόπτης πρέπει να αναστραφεί προς τα πάνω για να επιτραπεί η εγγραφή στην κάρτα SD (συμπεριλαμβανομένης της διαμόρφωσης).

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Ακολουθήστε τις οδηγίες [εδώ](https://wiki.hacks.guide/wiki/SD_Clean/Windows) για την εκ νέου διαμόρφωση της κάρτας SD σας.
