1. Wciśnij (Home) aby przywołać menu akcji
1. Wybierz "Scripts..."
1. Wybierz "GM9Megascript"
1. Wybierz "Backup Options"
1. Wybierz "SysNAND Backup"
1. Naciśnij (A) by potwierdzić
    + Ten proces zajmie trochę czasu
    + If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
1. Naciśnij (A), aby kontynuować
1. Wciśnij (B) aby wrócić do menu głównego
1. Wybierz "Exit"
1. Naciśnij (A), aby ponownie zablokować uprawnienia do zapisu, jeśli zostaniesz o to poproszony
1. Navigate to `[S:] SYSNAND VIRTUAL`
1. Press (A) on `essential.exefs` to select it
1. Wybierz "Copy to 0:/gm9/out"
    + If you see "Destination already exists", press (A) on "Overwrite file(s)"
1. Naciśnij (A), aby kontynuować
1. Hold (R) and press (Start) at the same time to power off your console
1. Włóż kartę SD do komputera
1. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    + Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    + Te kopie zapasowe uratują cię przed "brickiem" i/lub pomogą ci odzyskać pliki z NAND jeśli coś pójdzie nie tak w przyszłości
1. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    + The other backup files are negligible in size and may be kept on your SD card for ease of access
1. Reinsert your SD card into your console
