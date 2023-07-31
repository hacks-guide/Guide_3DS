1. 按『Home』鍵以叫出主選單
1. 選擇『Scripts...』
1. 選擇『GM9Megascript』
1. 選擇『Backup Options』
1. 選擇『SysNAND Backup』
1. 按 『A』 確認
    + 此過程將花費一些時間
    + If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
1. 按『A』 繼續
1. 按『B』回到主選單
1. 選擇『Exit』
1. 如提示時，按下『A』取消檔案寫入鎖定
1. Navigate to `[S:] SYSNAND VIRTUAL`
1. Press (A) on `essential.exefs` to select it
1. 選擇『Copy to 0:/gm9/out』
    + If you see "Destination already exists", press (A) on "Overwrite file(s)"
1. 按『A』 繼續
1. Hold (R) and press (Start) at the same time to power off your console
1. 將 SD 卡插入至電腦中
1. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    + Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    + 這些備份檔案可於未來您磚機時用來修復系統檔案
1. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    + The other backup files are negligible in size and may be kept on your SD card for ease of access
1. Reinsert your SD card into your console
