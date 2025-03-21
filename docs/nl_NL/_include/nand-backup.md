1. Druk op de (Home) knop om het actiemenu te openen
2. Selecteer "Scripts..."
3. Selecteer "GM9Megascript"
4. Selecteer "Back-up Options"
5. Selecteer "SysNAND Backup"
6. Druk op (A) om het te bevestigen
    - This process will take some time
    - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting-finalizing-setup.html)
7. Druk op (A) om door te gaan
8. Druk op (B) om terug te gaan naar het hoofdmenu
9. Selecteer "Exit"
10. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. Selecteer "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Druk op (A) om door te gaan
15. Hold (R) and press (Start) at the same time to power off your console
16. Plaats je SD kaart in je computer
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Stop je SD-kaart terug in je console
