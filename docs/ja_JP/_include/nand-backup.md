1. (Home) ボタンを押してアクションメニューを呼び出します
2. "Scripts..."を選択します
3. "GM9Megascript"を選択します
4. "Backup Options"を選択します
5. "SysNAND Backup"を選択します
6. (A) を押して確認します
    - This process will take some time
    - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting-finalizing-setup.html)
7. (A) で続行します
8. Bキーを押してメインメニューに戻ります
9. "Exit"を選択します。
10. (A) ボタンを押すとNANDへの書き込みを再ロックできます
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. "Copy to 0:/gm9/out" を選択します
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. (A) で続行します
15. Hold (R) and press (Start) at the same time to power off your console
16. パソコンにSDカードを入れます
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
