---
title: "格式化 SD 卡(透過 Linux)"
---

{% include toc title="條目內容" %}

### 必讀事項

本篇替您的 3DS 格式化記憶卡的附加章節。

如果您的 3DS 已能正常讀取該 SD 卡，那您則不需遵守此指南。

本教學僅適用於 Linux 使用者。 如果您的系統不是 Linux，請參閱 [格式化 SD 卡 (透過 Windows)](formatting-sd-(windows)) 或 [格式化 (透過 Mac)](formatting-sd-(mac))。

### 操作說明

1. 請先確保您的 SD 卡**尚未**被插入至電腦中
1. 啟動終端機
1. 輸入 `watch "lsblk"`
1. 將 SD 卡插入至電腦中
1. 查看輸出內容。 你應該看到像這樣的東西：
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```
1. Take note of the device name. In our example above, it was `mmcblk0p1`
    + 如果 `RO` 的狀態為 1，請確保 SD 卡上的寫入保護開關尚被開啟
1. 按下 CTRL + C 退出選單
1. 根據 SD 卡的容量輸入以下指令：
    + 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
        + This creates a single FAT16 partition with 32 KB cluster size on the SD card
    + 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
        + This creates a single FAT32 partition with 32 KB cluster size on the SD card
    + 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
        + This creates a single FAT32 partition with 64 KB cluster size on the SD card

### Troubleshooting

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Linux) to reformat your SD card.
