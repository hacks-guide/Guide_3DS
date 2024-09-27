# Restoring / Updating CFW

## Required Reading

此页面的内容将指导你为已安装最新 boot9strap 固件的主机进行重新安装或升级自制固件应用程序。 当 SD 卡由于意外损坏或丢失时，你也可以使用这个方法来恢复。

你的 SD 卡必须格式化为 FAT32 才能正常进行步骤，否则 3DS 将无法识别它。 如果你的 SD 卡格式不对，请根据你当前使用的操作系统使用以下其一方法来格式化：[Windows](formatting-sd-\(windows\)) [Mac](formatting-sd-\(mac\)) [Linux](formatting-sd-\(linux\))。

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

1. 将你的 SD 卡插入到电脑
2. 解压 Luma3DS `.zip` 内的 `boot.firm` 和 `boot.3dsx` 到你 SD 卡的根目录，请覆盖已有文件
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Reinsert your SD card into your console
4. Power on your console
   - If you see the Luma3DS configuration menu, press (Start) to save and reboot

::: tip

此时 Luma3DS 已经复制到主机的内部存储中。现在你的主机能够在不插 SD 卡的情况下开机了。

:::

___

::: info

如果你想要重新安装或升级 homebrew 程序，请至[完成安装](finalizing-setup)部分

:::
