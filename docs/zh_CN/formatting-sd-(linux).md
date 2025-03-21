# Formatting SD (Linux)

## Required Reading

这是一个适用于为 3DS 准备的 SD 卡的格式化教程。

如果 3DS 已经识别到了 SD 卡，那么就不需要做这个教程了。

本页教程仅限 Linux 用户。 如果你没有在用 Linux，那么请看[格式化 SD 卡（通过 Windows 操作系统）](formatting-sd-\(windows\))或[格式化 SD 卡（通过 Mac 操作系统）](formatting-sd-\(mac\)) 。

## Instructions

1. 请确保你的 SD 卡 **未** 被插入电脑
2. 启动 Linux 终端
3. 输入 `watch "lsblk"`
4. 将你的 SD 卡插入到电脑
5. 查看终端输出内容。 输出内容应该与以下内容相似：
    ```
    NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
    mmcblk0     179:0    0   3,8G  0 disk
    └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
    ```
6. 注意设备名。 在我们上面的示例中，它是 `mmcblk0p1`
    - If `RO` is set to 1, make sure the lock switch is not slid down
7. 按下 CTRL + C 退出菜单
8. 根据 SD 卡的容量输入以下信息：
    - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
        - This creates a single FAT16 partition with 32 KB cluster size on the SD card
    - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
        - This creates a single FAT32 partition with 32 KB cluster size on the SD card
    - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
        - This creates a single FAT32 partition with 64 KB cluster size on the SD card

## 问题排查

- SD card remains undetected by console or continues to display the wrong capacity after formatting
    - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Linux) to reformat your SD card.
