1. Press (Home) to bring up the action menu
2. Select "Scripts..."
3. Select "GM9Megascript"
4. Select "Backup Options"
5. Select "SysNAND Backup"
6. Press (A) to confirm
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. Press (A) to continue
8. Press (B) to return to the main menu
9. Select "Exit"
10. Press (A) to relock write permissions if prompted
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Pulsa (A) en `essential.exefs` para seleccionarlo
13. Select "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Press (A) to continue
15. Hold (R) and press (Start) at the same time to power off your console
16. Insert your SD card into your computer
17. Copia los archivos `<fecha>_<numerodeserie>_sysnand_##.bin`,`<fecha>_<numerodeserie>_sysnand_##.bin.sha` y `essential.exefs` en la carpeta `/gm9/out/` de tu tarjeta SD a una ubicación segura en tu computadora
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Borra los archivos `<fecha>_<numerodeserie>_sysnand_##.bin` y `<fecha>_<numerodeserie>_sysnand_##.bin.sha` de la carpeta `/gm9/out/` de tu tarjeta SD _luego de copiarlos_
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console