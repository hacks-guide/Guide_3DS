---
title: "Uninstall CFW"
---

{% include toc title="Table of Contents" %}

### Required Reading

This will completely remove CFW from your device, including Boot9Strap and Luma3DS, for the purpose of restoring the device to stock.

This is almost never the solution to fix any issues you encounter with your CFW installation. A better idea would be to read the [troubleshooting](troubleshooting) page or ask (in English) for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).
{: .notice--danger}

Any unsigned (illegitimate) games will be rendered unusable and should be manually removed before starting this process by using the Data Management section of the System Settings. Use a [save manager](https://github.com/FlagBrew/Checkpoint/releases/latest) to backup any saves for these unsigned (illegitimate) games you care about.

This will not affect your NNID, any legitimately purchased games, or any saves for those legitimately purchased games.

If you have modified critical system software (such as editing the home menu, unbanning your console, etc), uninstalling CFW may BRICK your device!
{: .notice--danger}

Note that if you have any payload files other than `GodMode9.firm` in the `/luma/payloads/` folder on your SD card, holding (Start) on boot will display a "chainloader menu" where you will have to use the D-Pad and the (A) button to select "GodMode9" for these instructions. 

### What You Need

* The v1.9.2pre1 release of [GodMode9](https://github.com/d0k3/GodMode9/releases/tag/v1.9.2pre1)

### Instructions

#### Section I - Safety Test

1. Power off your device
1. Insert your SD card into your computer
1. Copy `GodMode9.firm` from the GodMode9 `.zip` to the `/luma/payloads/` folder on your SD card
1. Copy the `gm9` folder from the GodMode9 `.zip` to the root of your SD card
1. Reinsert your SD card into your device
1. Launch GodMode9 by holding (Start) during boot
1. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it has completed
1. If you are prompted to fix the RTC date&time, press (A) to do so, then set the date and time, then press (A) to continue
  + Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
1. Navigate to `[1:] SYSNAND CTRNAND > title > 00040138 > (X)0000002 > content`
  + On a "New" edition console, the (X) will instead be 2
  + On an "Old" edition console, the (X) will instead be 0
1. Select the `.app` file
1. Select `NCCH image options`
1. Select `Mount image to drive`
1. In the window that appears, open the `exefs` folder
1. In this folder, select the `.firm` file
1. Select "FIRM image options"
1. Select "Boot FIRM"
1. When prompted, choose to decrypt and make a copy
1. You should boot into the regular 3DS Home Menu. If you do, power your device off and continue to the next section
  + If you do NOT boot into the regular 3DS Home Menu, continuing with these instructions **WILL** brick your device. You should join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and ask (in English) for someone there to assist you
  
#### Section II - Prep Work

1. Power on your device
1. Navigate to System Settings > Data Management > Nintendo 3DS > Software
1. In this list of software, delete any non-Nintendo content you installed while using CFW
  + This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any non-eShop games
1. Navigate to Data Management > DSiWare
1. In this list of software, delete any non-Nintendo content you installed while using CFW
  + This includes software such as TWiLightMenu++, along with any non-eShop games
  + Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW
1. Power off your device

#### Section III - Running Uninstall Script

1. Launch GodMode9 by holding (Start) during boot
1. Press (Home) to bring up the action menu
1. Select "Scripts..."
1. Select "GM9Megascript"
1. Select "Hax Options"
1. Select "Un-install Hax"
1. When prompted, press (A) to proceed
1. Press (A) to unlock SysNAND (lvl3) writing, then input the key combo given
1. Press (A) to continue
1. Press (B) to return to the main menu
1. Select "Exit"
1. Press (A) to relock write permissions if prompted
1. Press (Start) to reboot your device

___

All custom firmware has been removed from your device.
{: .notice--success}

You can now remove any extra files and folders from the root of your SD card that are *not* the `Nintendo 3DS` or `DCIM` folders.
{: .notice--info}
