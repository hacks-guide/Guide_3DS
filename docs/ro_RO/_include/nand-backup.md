1. Apăsați (Home) pentru a arăta meniul de acțiuni
2. Selectați "Scripts..."
3. Selectaţi "GM9Megascript"
4. Selectaţi "Backup Options"
5. Selecciona "SysNAND Backup"
6. Apăsați (A) pentru a confirma
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. Apăsați (A) pentru a continua
8. Apăsați (B) ca să vă întoarceți în meniul principal
9. Select "Exit"
10. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. Selectați "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Apăsați (A) pentru a continua
15. Hold (R) and press (Start) at the same time to power off your console
16. Introduceți cardul SD în calculator
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
