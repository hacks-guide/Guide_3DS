1. Paina (HOME)-painiketta näyttääksesi toimintovalikon
2. Select "Scripts..."
3. Select "GM9Megascript"
4. Select "Backup Options"
5. Select "SysNAND Backup"
6. Paina (A)-painiketta vahvistaaksesi
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. Paina (A):ta jatkaaksesi
8. Paina (B):tä palataksesi päävalikkoon
9. Select "Exit"
10. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. Select "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Paina (A):ta jatkaaksesi
15. Hold (R) and press (Start) at the same time to power off your console
16. Aseta SD-korttisi tietokoneeseesi
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
