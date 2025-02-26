1. Press (Home) to bring up the action menu
2. Select "Scripts..."
3. Select "GM9Megascript"
4. Select "Backup Options"
5. Select "SysNAND Backup"
6. Press (A) to confirm
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting-finalizing-setup.html)
7. Press (A) to continue
8. Press (B) to return to the main menu
9. Select "Exit"
10. Press (A) to relock write permissions if prompted
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. Select "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Press (A) to continue
15. Hold (R) and press (Start) at the same time to power off your console
16. Insérez votre carte SD dans votre ordinateur
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Supprimez `<date>_<serialnumber>_sysnand_##.bin` et `<date>_<serialnumber>_sysnand_##.bin.sha` du dossier `/gm9/out/` de votre carte SD après l'avoir copié
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
