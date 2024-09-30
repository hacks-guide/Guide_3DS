1. 按『Home』鍵以叫出主選單
2. 選擇『Scripts...』
3. 選擇『GM9Megascript』
4. 選擇『Backup Options』
5. 選擇『SysNAND Backup』
6. 按 『A』 確認
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. 按『A』 繼續
8. 按『B』回到主選單
9. 選擇『Exit』
10. 如提示時，按下『A』取消檔案寫入鎖定
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. 選擇『Copy to 0:/gm9/out』
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. 按『A』 繼續
15. Hold (R) and press (Start) at the same time to power off your console
16. 將 SD 卡插入至電腦中
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
