1. Нажмите кнопку (Home) для вызова меню
2. Выберите "Scripts..."
3. Выберите "GM9Megascript"
4. Выберите "Backup Options"
5. Выберите "SysNAND Backup"
6. Нажмите (A) для подтверждения
    - This process will take some time
    - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting-finalizing-setup.html)
7. Нажмите (A), чтобы продолжить
8. Нажмите (B) для возврата в главное меню
9. Выберите "Exit"
10. Нажмите (A) чтобы восстановить запрет на запись, если появится запрос
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. Выберите "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Нажмите (A), чтобы продолжить
15. Hold (R) and press (Start) at the same time to power off your console
16. Вставьте SD-карту в компьютер
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
