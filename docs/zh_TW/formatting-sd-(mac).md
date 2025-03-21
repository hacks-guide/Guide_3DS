# Formatting SD (Mac)

## Required Reading

本篇替您的 3DS 格式化記憶卡的附加章節。

如果您的 3DS 已能正常讀取該 SD 卡，那您則不需遵守此指南。

本教學僅適用於 Mac 使用者。 如果您的系統不是 Mac，請參閱 [格式化 SD 卡 (透過 Windows)](formatting-sd-\(windows\)) 或 [格式化 (透過 Linux)](formatting-sd-\(linux\))。

## Instructions

### OS X El Capitan (10.11) and later

1. 將 SD 卡插入至電腦中

2. 如果此 SD 卡中含有任何重要的檔案及資料夾，請在格式化前將這些檔案備份於您的電腦中

3. 啟動『磁碟工具程式』

4. 於左上角選擇『顯示方式』>『顯示所有裝置』

5. 在側邊欄中選擇您的 SD 卡

    ::: danger

    請確保您選擇的裝置是您的 SD 卡，否則您可能會不小心格式化錯的磁碟！

    :::

6. 按一下工具列中的「清除」按鈕

7. 如有需要，請為此裝置輸入新的名稱。

8. 請確保『格式』為『MS-DOS (FAT)』

9. 請確保『分割區架構』為『主開機記錄』
    - If "Scheme" does not appear, click "Cancel" and make sure to choose the device instead of a volume

10. 點選『清除』

11. 等待格式化完成

12. 點選『Close』

13. 如果此 SD 卡中先前含有任何檔案及資料夾，請將這些檔案從電腦中複製回 SD 卡中

### OS X Yosemite (10.10) and earlier

1. 將 SD 卡插入至電腦中

2. 如果此 SD 卡中含有任何重要的檔案及資料夾，請在格式化前將這些檔案備份於您的電腦中

3. 啟動『磁碟工具程式』

4. 在側邊欄中選擇您的 SD 卡

    ::: danger

    請確保您選擇的裝置是您的 SD 卡，否則您可能會不小心格式化錯的磁碟！

    :::

5. 按一下工具列中的『分割』按鈕
    - If "Partition" does not appear, make sure to choose the device instead of a volume

6. 請確保『分割區佈局』為『1 個分割區』

7. 如有需要，請為此裝置輸入新的名稱。

8. 請確保『格式』為『MS-DOS (FAT)』

9. 點選分割區底下的『選項』按鈕

10. 選擇『主開機記錄』

11. 點選『OK』

12. 點選『套用』

13. 點選『分割』

14. 等待格式化完成

15. 關閉『磁碟工具程式』

16. 如果此 SD 卡中先前含有任何檔案及資料夾，請將這些檔案從電腦中複製回 SD 卡中

## 疑難排解

- SD card remains undetected by console or continues to display the wrong capacity after formatting
    - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Mac) to reformat your SD card.