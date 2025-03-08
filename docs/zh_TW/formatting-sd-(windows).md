# Formatting SD (Windows)

## Required Reading

本篇替您的 3DS 格式化記憶卡的附加章節。

如果您的 3DS 已能正常讀取該 SD 卡，那您則不需遵守此指南。

本教學僅適用於 Windows 使用者。 如果您的系統不是 Windows，請參閱 [格式化 SD 卡 (透過 Linux)](formatting-sd-\(linux\)) 或 [格式化 (透過 Mac)](formatting-sd-\(mac\))。

## What You Need

- **For all SD card sizes**: The latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger only:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions

### Section I - SD Card Formatter

1. 將 SD 卡插入至電腦中

2. 如果此 SD 卡中含有任何重要的檔案及資料夾，請在格式化前將這些檔案備份於您的電腦中

3. 解壓下載的 `.zip` 檔案，然後使用管理員權限開啟 `SD Card Formatter Setup`(`.exe` 檔案)，按照提示安裝程式

4. 在開始選單中找到 `SD Card Formatter`，並將其開啟

5. 在『Select card』中選擇您的 SD 卡磁碟代號

    ::: danger

    請確保您選擇的裝置是您的 SD 卡，否則您可能會不小心格式化錯的磁碟！

    :::

6. 如有需要，請為您的 SD 卡輸入新名稱

7. 請勾選『Quick Format』

8. 點選『Format』

9. 點選『OK』

10. 等待格式化完成

11. 點選『OK』

12. 關閉 SD Card Formatter

13. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### Section II - guiformat (ONLY for 64GB or larger)

1. Run `guiformat.exe`

2. Select your SD card's drive letter for "Drive"

    ::: danger

    請確保您選擇的裝置是您的 SD 卡，否則您可能會不小心格式化錯的磁碟！

    :::

3. Select a size for "Allocation unit size"
    - If the SD card is 64GB, choose 32768
    - If the SD card is larger than 64GB, choose 65536

4. 如有需要，請為您的 SD 卡輸入新名稱

5. 請勾選『Quick Format』

6. Click "Start"

7. 點選『OK』

8. 等待格式化完成

9. 點選『Close』

10. 如果此 SD 卡中先前含有任何檔案及資料夾，請將這些檔案從電腦中複製回 SD 卡中

## 疑難排解

- guiformat shows the error "Failed to open device: GetLastError()=32"
    - Close everything that may be using the SD card, such as any File Explorer windows.
    - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
    - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- SD card remains undetected by console or continues to display the wrong capacity after formatting
    - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
