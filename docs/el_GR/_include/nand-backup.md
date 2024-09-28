1. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
2. Επιλέξτε «Scripts...»
3. Επιλέξτε «GM9Megascript»
4. Επιλέξτε «Backup Options»
5. Επιλέξτε «SysNAND Backup»
6. Πατήστε το (A) για επιβεβαίωση
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. Πατήστε το (A) για να συνεχίσετε
8. Πατήστε το (B) για να επιστρέψετε στο κύριο μενού
9. Επιλέξτε «Exit»
10. Πατήστε το (Α) για να κλειδώσετε ξανά τα δικαιώματα εγγραφής εάν σας ζητηθεί
11. Μεταβείτε στο `[S:] SYSNAND VIRTUAL`
12. Πατήστε το (A) στο 'essential.exefs\` για να το επιλέξετε
13. Επιλέξτε «Copy to 0:/gm9/out»
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Πατήστε το (A) για να συνεχίσετε
15. Κρατήστε πατημένο το (R) και πατήστε ταυτόχρονα το (Start) για να απενεργοποιήσετε την κονσόλα σας
16. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
17. Αντιγράψτε τα `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha` και `essential.exefs` από τον φάκελο `/gm9/out/` της κάρτας SD σε μια ασφαλή τοποθεσία του υπολογιστή σας
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Μετά την αντιγραφή, διαγράψτε τα αρχεία `<date>_<serialnumber>_sysnand_##.bin` και `<date>_<serialnumber>_sysnand_##.bin.sha` από τον φάκελο `/gm9/out/` της κάρτας SD
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας
