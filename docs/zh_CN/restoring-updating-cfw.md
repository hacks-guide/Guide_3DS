# Restoring / Updating CFW

## Required Reading

此页面的内容将指导你为已安装最新 boot9strap 固件的主机进行重新安装或升级自制固件应用程序。 当 SD 卡由于意外损坏或丢失时，你也可以使用这个方法来恢复。

你的 SD 卡必须格式化为 FAT32 才能正常进行步骤，否则 3DS 将无法识别它。 如果你的 SD 卡格式不对，请根据你当前使用的操作系统使用以下其一方法来格式化：[Windows](formatting-sd-\(windows\)) [Mac](formatting-sd-\(mac\)) [Linux](formatting-sd-\(linux\))。

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

1. 将你的 SD 卡插入到电脑
2. Copy everything from the Luma3DS `.zip` to the root of your SD card, replacing any existing files
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Reinsert your SD card into your console
4. Power on your console
   - If you see the Luma3DS configuration menu, press (Start) to save and reboot

::: info

此时 Luma3DS 已经复制到主机的内部存储中。现在你的主机能够在不插 SD 卡的情况下开机了。

:::

::: tip

If you wish to re-install or update other homebrew applications (e.g. FBI, Homebrew Launcher), continue to [Finalizing Setup](finalizing-setup)

:::
