1. Нажмите кнопку (Home) для вызова меню
1. Выберите "Scripts..."
1. Выберите "GM9Megascript"
1. Выберите "Backup Options"
1. Выберите "SysNAND Backup"
1. Нажмите (A) для подтверждения
    + Этот процесс займет некоторое время
    + If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
1. Нажмите (A), чтобы продолжить
1. Нажмите (B) для возврата в главное меню
1. Выберите "Exit"
1. Нажмите (A) чтобы восстановить запрет на запись, если появится запрос
1. Navigate to `[S:] SYSNAND VIRTUAL`
1. Press (A) on `essential.exefs` to select it
1. Выберите "Copy to 0:/gm9/out"
    + If you see "Destination already exists", press (A) on "Overwrite file(s)"
1. Нажмите (A), чтобы продолжить
1. Hold (R) and press (Start) at the same time to power off your console
1. Вставьте SD-карту в компьютер
1. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    + Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    + Эти бэкапы позволят восстановить консоль и/или извлечь файлы из образа NAND, если что-то пойдёт не так
1. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    + The other backup files are negligible in size and may be kept on your SD card for ease of access
1. Reinsert your SD card into your console
