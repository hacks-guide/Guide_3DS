1. 按下 “Home” 键来打开功能菜单
2. 选择 “Scripts...”
3. 选择 “GM9Megascript”
4. 选择 “Backup Options”
5. 选择 “SysNAND Backup”
6. 按下 “A” 键确认
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting-finalizing-setup.html)
7. 按 “A” 键继续
8. 按下 “B” 键返回到主菜单
9. 选择 “Exit”
10. 如果提示重新锁定写入权限，按下 “A” 键来确认
11. Navigate to `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. 选择 “Copy to 0:/gm9/out”
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. 按 “A” 键继续
15. Hold (R) and press (Start) at the same time to power off your console
16. 将你的 SD 卡插入到电脑
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
