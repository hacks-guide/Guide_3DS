1. Presiona el botón (HOME) para abrir el menú de acciones
2. Select "Scripts..."
3. Select "GM9Megascript"
4. Select "Backup Options"
5. Select "SysNAND Backup"
6. Press (A) to confirm
    - This process will take some time
    - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting-finalizing-setup.html)
7. Presiona (A) para continuar
8. Presiona (B) para regresar al menú principal
9. Select "Exit"
10. Press (A) to relock write permissions if prompted
11. Ve a `[S:] SYSNAND VIRTUAL`
12. Pulsa (A) en `essential.exefs` para seleccionarlo
13. Seleciona "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Presiona (A) para continuar
15. Hold (R) and press (Start) at the same time to power off your console
16. Inserta la tarjeta SD en tu computadora
17. Copia los archivos `<fecha>_<numerodeserie>_sysnand_##.bin`,`<fecha>_<numerodeserie>_sysnand_##.bin.sha` y `essential.exefs` en la carpeta `/gm9/out/` de tu tarjeta SD a una ubicación segura en tu computadora
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Borra los archivos `<fecha>_<numerodeserie>_sysnand_##.bin` y `<fecha>_<numerodeserie>_sysnand_##.bin.sha` de la carpeta `/gm9/out/` de tu tarjeta SD _luego de copiarlos_
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinserta la tarjeta SD en la consola
