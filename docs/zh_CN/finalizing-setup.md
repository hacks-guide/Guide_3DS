# Finalizing Setup

## Required Reading

On the previous page, you installed boot9strap, a custom firmware loader that loads the file `boot.firm` from SD card or NAND (internal memory). In this case, we are using Luma3DS by [LumaTeam](https://github.com/LumaTeam/) as our `boot.firm` to patch the console, allowing it to run homebrew software.

On this page, we will make critical system file backups and install some homebrew programs. Most of these steps will be automated using a script that you will run on your console.

::: info

The script will install the following applications:

- **FBI** by Steveice10 _(installs CIA formatted applications)_
- **Homebrew Launcher Loader** by PabloMK7 _(runs Homebrew Launcher, for 3DSX format homebrew)_
- **Anemone3DS** by astronautlevel2 _(installs custom themes, splashes, and badges)_
- **Checkpoint** by BernardoGiordano/FlagBrew _(manages 3DS/DS game save data)_
- **ftpd** by mtheall _(allows wireless 3DS SD card access over FTP)_
- **Universal-Updater** by Universal-Team _(on-device app store for downloading homebrew over Wi-Fi)_
- **GodMode9** by d0k3 _(multipurpose tool for extracting data from internal memory or cartridges)_

If you don't want one of these applications, you can remove them after you have finished this page by navigating to System Settings -> Data Management -> Nintendo 3DS -> Software. (GodMode9 cannot be removed in this way and is generally required for other functions.)

::: details Source code links (optional)

All applications installed on this guide are open-source. If you are interested in seeing how they work, or would like to leave a star to show your appreciation, their source code is linked here:

- [FBI](https://github.com/lifehackerhansol/FBI)
- [Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)
- [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)
- [Checkpoint](https://github.com/bernardogiordano/checkpoint/releases)
- [ftpd](https://github.com/mtheall/ftpd)
- [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)
- [GodMode9](https://github.com/d0k3/GodMode9)

:::

## Compatibility Notes

::: info

如果你的主机先前破解过，且先前的破解是基于 EmuNAND 的，并且现在你希望将你的 EmuNAND/RedNAND 移植至 SysNAND，请在继续前进行[移植 EmuNAND](move-emunand)。 如果你不知道 EmuNAND 是啥的话，大概你也不需要做这个了。

:::

## What You Need

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

## Instructions

### Section I - Prep Work

本节中，你将需要复制所需的文件到段落提示的指定位置。

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. Copy `finalize.romfs` to the root of your SD card
4. Open the `luma` folder on your SD card and create a folder named `payloads` inside, if it does not already exist
5. Copy `x_finalize_helper.firm` to the `payloads` folder
6. Reinsert your SD card into your console

The screenshot below indicates the minimum SD card layout that is required to follow this page. 由于你可能在之前做了一些其他的操作，你的 SD 卡中可能会多出一些文件或者文件夹。

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Section II - Updating the System

本节中，你将会把主机更新至最新版本。（自制固件兼容最新版本的系统，直接升级是安全的）

<!--@include: ./_include/sysupdate.md -->

### Section III - RTC and DSP setup

本节中，你将会把主机的内部时钟同步现实时间，并导出声卡的固件（部分自制程序需要使用它来正确发声）。

1. 同时按下 “L” + “↓” + “Select” 键来打开 Rosalina 菜单
   - If one of these buttons is broken, download [config.ini](/assets/config.ini) and put it in your `luma` folder, replacing the existing one. This will change the Rosalina menu key combination to (X) + (Y)
2. 选择 “Miscellaneous options”
3. 选择“Dump DSP firmware”
4. Press (B) to continue
5. 选择“Nullify user time offset”
6. Press (B) to continue
7. 按 “B” 键返回 Rosalina 主菜单
8. 按 “B” 键退出 Rosalina 菜单

### Section IV - Setup Script

In this section, you will use a series of scripts to automate homebrew installation, SD card cleanup, and system file backup.

1. 将主机关机
2. Press and hold (X), and while holding (X), power on your console. This will launch the Finalizing Setup Helper
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
   - If you encounter an error, consult the [troubleshooting](troubleshooting-finalizing-setup) page
3. If the Helper was successful, your console will boot into GodMode9
   - From this point forward, you can access GodMode9 by holding START while powering on your console
4. 如果提示创建重要文件备份，按下 “A” 键确认，在完成后再次按下 “A” 键来继续。
5. 如果出现修复 RTC 日期与时间的提示，按 “A” 键执行修复，然后设置好日期和时间，并按 “A” 继续
6. 按下 “Home” 键来打开功能菜单
7. 选择 “Scripts...”
8. Select "finalize"
9. Follow the prompts in the script, answering any questions that you are asked
   - If you see "Information #05: No title database", press (A) to import and enter the buttons on-screen to proceed
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting-finalizing-setup) page
10. Once the script says "Setup complete!", press (A) to power off the device
    - If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
11. 将你的 SD 卡插入到电脑
12. Copy the `/gm9/backups/` folder to a safe location on your computer
    - This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
13. If you still have them, delete the two `SysNAND` files from the `/gm9/backups/` folder from your SD card
    - The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

::: tip

搞定！ Custom firmware is now fully configured on your console.

:::

::: info

Trying to figure out what to do with your newly modded device? Visit [our wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Information and Notes

::: info

以下是你可能会用到的一些快捷键：

- Holding (Select) on boot will launch the Luma3DS configuration menu.
- Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
- By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. Rosalina 菜单的快捷键可以在其中更改。
- Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. 参见[更新日志](https://github.com/SciresM/boot9strap/releases/tag/1.4)以获取信息。

:::

::: info

有关使用 GodMode9 的各种功能的信息，请查阅 [GodMode9 使用教程](godmode9-usage)以及[导出程序和游戏卡带文件](dumping-titles-and-game-cartridges)页。

:::
