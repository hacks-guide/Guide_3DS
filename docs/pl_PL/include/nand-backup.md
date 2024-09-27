1. Wciśnij (Home) aby przywołać menu akcji
2. Wybierz "Scripts..."
3. Wybierz "GM9Megascript"
4. Wybierz "Backup Options"
5. Wybierz "SysNAND Backup"
6. Naciśnij (A) by potwierdzić
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. Naciśnij (A), aby kontynuować
8. Wciśnij (B) aby wrócić do menu głównego
9. Wybierz "Exit"
10. Naciśnij (A), aby ponownie zablokować uprawnienia do zapisu, jeśli zostaniesz o to poproszony
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. Wybierz "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Naciśnij (A), aby kontynuować
15. Hold (R) and press (Start) at the same time to power off your console
16. Włóż kartę SD do komputera
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
