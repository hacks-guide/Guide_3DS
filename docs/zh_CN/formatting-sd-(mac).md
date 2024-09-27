# Formatting SD (Mac)

## Required Reading

这是一个适用于为 3DS 准备的 SD 卡的格式化教程。

如果 3DS 已经识别到了 SD 卡，那么就不需要做这个教程了。

本页教程仅限 Mac 用户。 如果你没有在用 Mac，那么请看看[格式化 SD 卡（通过 Windows 操作系统）](formatting-sd-\(windows\))或[格式化 SD 卡（通过 Linux 操作系统）](formatting-sd-\(linux\)) 。

## Instructions

### OS X El Capitan (10.11) and later

1. 将你的 SD 卡插入到电脑

2. 如果 SD 卡上有一些文件或文件夹，请将它们全部复制到你的电脑上

3. 运行磁盘工具（Disk Utility）

4. 选择左上角“视图”菜单里的“显示所有主机（Show All Devices）”

5. 在左侧面板中选择你的 SD 卡

   ::: danger

   请确保你选对了驱动器，否则你可能会把别的驱动器格式化了！

   :::

6. 点击顶部的“擦除（Erase）”

7. 在“名称（Name）”一行随便输入一些内容

8. 确保“格式（Format）”设置为 “MS-DOS (FAT)”

9. 确保“方案（Scheme）”设置为“主启动记录（Master Boot Record）”
   - If "Scheme" does not appear, click "Cancel" and make sure to choose the device instead of a volume

10. 点击“擦除（Erase）”

11. 等待格式化完成

12. 点击“Close”

13. 如果先前你从 SD 卡上复制了一些文件或文件夹到电脑上，请将它们全部复制回 SD 卡

### OS X Yosemite (10.10) and earlier

1. 将你的 SD 卡插入到电脑

2. 如果 SD 卡上有一些文件或文件夹，请将它们全部复制到你的电脑上

3. 运行磁盘工具（Disk Utility）

4. 在左侧面板中选择你的 SD 卡

   ::: danger

   请确保你选对了驱动器，否则你可能会把别的驱动器格式化了！

   :::

5. 点击顶部的“分区（Partition）”
   - If "Partition" does not appear, make sure to choose the device instead of a volume

6. 确保“分区布局（Partition Layout）”设置为“1 分区（1 Partition）”

7. 在“名称（Name）”一行随便输入一些内容

8. 确保“格式（Format）”设置为 “MS-DOS (FAT)”

9. 点击分区表下面的“选项（Options）”

10. 选择“主启动记录（Master Boot Record）”

11. 点击“OK”

12. 点击“应用（Apply）”

13. 点击“分区（Partition）”

14. 等待格式化完成

15. 关闭磁盘工具

16. 如果先前你从 SD 卡上复制了一些文件或文件夹到电脑上，请将它们全部复制回 SD 卡

## 问题排查

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Mac) to reformat your SD card.
