# Formatting SD (Windows)

## Required Reading

这是一个适用于为 3DS 准备的 SD 卡的格式化教程。

如果 3DS 已经识别到了 SD 卡，那么就不需要做这个教程了。

本节教程仅限 Windows 用户。 如果你没有在用 Windows，那么请看看[格式化 SD 卡（通过 Linux 操作系统）](formatting-sd-\(linux\))或[格式化 SD 卡（通过 Mac 操作系统）](formatting-sd-\(mac\)) 。

## What You Need

- **For SD cards 32GB or smaller:** the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions (32GB or smaller)

1. 将你的 SD 卡插入到电脑

2. 如果 SD 卡上有一些文件或文件夹，请将它们全部复制到你的电脑上

3. 解压下载到的 `.zip` 文件，然后使用管理员权限打开 `SD Card Formatter Setup`（`.exe` 文件），按照提示安装程序

4. 在开始菜单中找到 `SD Card Formatter`，然后打开它

5. 将 “Select card” 一行选择为你的 SD 卡盘符

   ::: danger

   请确保你选对了驱动器盘符，否则你可能会把别的驱动器格式化了！

   :::

6. 在“Volume label”一行随便输入一些东西

7. 确保“Quick Format”被勾选

8. 点击 “Format”

9. 点击“OK”

10. 等待格式化完成

11. 点击“OK”

12. 关闭 SD Card Formatter

13. 如果先前你从 SD 卡上复制了一些文件或文件夹到电脑上，请将它们全部复制回 SD 卡

## Instructions (64GB or larger)

1. 将你的 SD 卡插入到电脑

2. 如果 SD 卡上有一些文件或文件夹，请将它们全部复制到你的电脑上

3. 运行 `guiformat.exe`

4. 在“Drive”一行选择你的 SD 卡盘符

   ::: danger

   请确保你选对了驱动器盘符，否则你可能会把别的驱动器格式化了！

   :::

5. 在“Allocation unit size”选择一个大小
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

6. 在“Volume label”一行随便输入一些东西

7. 确保“Quick Format”被勾选

8. 点击“Start”

9. 点击“OK”

10. 等待格式化完成

11. 点击“Close”

12. 如果先前你从 SD 卡上复制了一些文件或文件夹到电脑上，请将它们全部复制回 SD 卡

## 问题排查

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). 你必须把滑片向上拨才能允许向 SD 卡写入数据（包括格式化）。

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
