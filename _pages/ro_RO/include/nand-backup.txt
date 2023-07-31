1. Apăsați (Home) pentru a arăta meniul de acțiuni
1. Selectați "Scripts..."
1. Selectaţi "GM9Megascript"
1. Selectaţi "Backup Options"
1. Selecciona "SysNAND Backup"
1. Apăsați (A) pentru a confirma
    + Acest proces va lua ceva timp
    + If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
1. Apăsați (A) pentru a continua
1. Apăsați (B) ca să vă întoarceți în meniul principal
1. Select "Exit"
1. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere
1. Navigate to `[S:] SYSNAND VIRTUAL`
1. Press (A) on `essential.exefs` to select it
1. Selectați "Copy to 0:/gm9/out"
    + If you see "Destination already exists", press (A) on "Overwrite file(s)"
1. Apăsați (A) pentru a continua
1. Hold (R) and press (Start) at the same time to power off your console
1. Introduceți cardul SD în calculator
1. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    + Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    + Aceste copii de rezervă vă va salva de un brick și/sau vă va ajuta să recuperați fișierele dintr-o imagine NAND dacă ceva merge în neregulă pe viitor
1. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    + The other backup files are negligible in size and may be kept on your SD card for ease of access
1. Reinsert your SD card into your console
