# Formatting SD (Linux)

## Required Reading

本篇替您的 3DS 格式化記憶卡的附加章節。

如果您的 3DS 已能正常讀取該 SD 卡，那您則不需遵守此指南。

::: warning

本教學僅適用於 Linux 使用者。 If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-(windows)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

::: info

Several Linux distributions may provide more user-friendly methods for formatting SD cards than this guide provides, some of which can be [found here](https://wiki.hacks.guide/wiki/Formatting_an_SD_card/Linux). In particular, if you are on SteamOS (e.g. Steam Deck, Steam Machine), check out the [Formatting SD (KDE Partition Manager)](formatting-sd-(kde)) page.

:::

## Instructions

1. 將 SD 卡插入至電腦中
2. If the SD card has any files and folders on it, copy everything to a folder on your computer
3. Eject your SD card from your computer
4. 啟動終端機
5. 輸入 `watch "lsblk"`
6. 將 SD 卡插入至電腦中
7. 查看輸出內容。 你應該看到像這樣的東西：
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
8. Take note of the device name. In our example above, it was `mmcblk0p1`
   - If `RO` is set to 1, make sure the lock switch is not slid down
9. 按下 CTRL + C 退出選單
10. 根據 SD 卡的容量輸入以下指令：
    - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
      - This creates a single FAT16 partition with 32 KB cluster size on the SD card
    - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
      - This creates a single FAT32 partition with 32 KB cluster size on the SD card
    - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
      - This creates a single FAT32 partition with 64 KB cluster size on the SD card
11. If the SD card had any files and folders on it before the format, copy everything back from your computer

## 疑難排解

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Linux) to reformat your SD card.
