---
title: "Troubleshooting"
---

{% include toc title="Table of Contents" %}

### Required Reading

If you are unable to boot your device, please look for the section relevant to you and follow the instructions.

If you still cannot solve your issue and need to reach out for help, please paste the contents of all relevant .log files from the root of your SD card into a [Gist](https://gist.github.com/), then come for help prepared with a detailed description of your problem and what you've tried.

Note that if you have any payload files other than `GodMode9.firm` in the `/luma/payloads/` folder on your SD card, holding (Start) on boot will display a "chainloader menu" where you will have to use the D-Pad and the (A) button to select "GodMode9" for these instructions. 

To use the [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links on this page, you will need a torrent client like [Deluge](http://dev.deluge-torrent.org/wiki/Download).

## DSi / DS functionality is broken after completing the guide

### What You Need

* The latest release of [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) *(the .3dsx file)*

### Instructions

#### Section I - Prep Work

1. Power off your device
1. Insert your SD card into your computer
1. Create a folder named `3ds` on the root of your SD card if it does not already exist
1. Copy `TWLFix-CFW.3dsx` to the `/3ds/` folder on your SD card
1. Reinsert your SD card into your device

#### Section II - Fixing TWL

1. Open the Homebrew Launcher
1. Launch TWLFix-CFW from the list of homebrew
1. Press (A) to uninstall the broken TWL titles
1. Press (Start) to reboot the device
1. Perform a System Update by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
  + The update will see that the essential TWL titles have been uninstalled, and will redownload and reinstall them
1. Once the update is complete, tap "OK" to reboot the device 

## Cannot inject H&S on Gateway downgraded device

This is caused by Gateway implementing a very shoddy downgrade method which leaves two versions of each app on the system. One of them is unused, but it confuses the H&S inject system, causing it to inject into the wrong one.

1. Launch GodMode9 by holding (Start) during boot
1. Navigate to `[1:] SYSNAND CTRNAND` -> `title` -> `00040010`
1. Navigate to the folder for your device and region:
  + **Old 3DS or Old 2DS EUR**: `00022300` -> `content`
  + **Old 3DS or Old 2DS JPN**: `00020300` -> `content`
  + **Old 3DS or Old 2DS USA**: `00021300` -> `content`
  + **New 3DS or New 2DS EUR**: `20022300` -> `content`
  + **New 3DS or New 2DS JPN**: `20020300` -> `content`
  + **New 3DS or New 2DS USA**: `20021300` -> `content`
1. Notice that there are two sets of app and tmd files, one set with uppercase extensions (`.TMD` and `.APP`), and one set with lowercase extensions (`.tmd` and `.app`)
1. While holding the (R) trigger, press (Y) to create a new directory
1. Press (A) to confirm the name `newdir` (it does not matter what the folder is called)
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Press (B) to decline relocking write permissions if prompted
1. Press the (L) trigger on each of the uppercase extension files (`.TMD` and `.APP`) to mark them
1. Press (Y) to copy the files
1. Navigate to `newdir`
1. Press (Y) to paste the files
1. Select "Move path(s)"
1. The uppercase extension files will have been moved to the `newdir` directory
1. Press (Start) to reboot your device
1. Retry the H&S injection
1. If this still doesn't work, move the uppercase extension files back to the `content` folder, then move the lowercase extension files to the `newdir` folder, then retry the H&S injection

## A browser based exploit is not working

Browser based exploits (such as browserhax or 2xrsa) are often unstable and crash frequently, but they can sometimes be fixed by doing the following steps.

1. Launch the browser, then launch the browser settings
1. Scroll to the bottom and Initialize Savedata (it also may be called Clear All Save Data)
1. Try the exploit again

## Black screen on SysNAND boot

1. Try booting with your SD card out, and then reinserting it after booting
    1. Power off your device
    1. Remove your SD card from your device
    1. Power on your device
    1. When the home menu appears, reinsert your SD card into your device
    1. If this worked, you should clear Home Menu's extdata by following these instructions:
        1. Power off your device
        1. Launch GodMode9 by holding (Start) during boot
        1. Press (Home) to bring up the action menu
        1. Select "Scripts..."
        1. Select "GM9Megascript"
        1. Select "Scripts from Plailect's Guide"
        1. Select "Remove extdata"
        1. Press (A) to continue
        1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
        1. Press (A) to continue
        1. Press (B) to return to the main menu
        1. Select "Exit"
        1. Press (A) to relock write permissions if prompted
        1. Press (Start) to reboot your device
1. Try booting without any cartridges inserted (including flashcarts)
1. If you have a hardmod and a NAND backup, flash the backup back to SysNAND
1. Try booting into recovery mode and updating your system
    1. Power off your device
    1. Hold (L) + (R) + (A) + (Up)
    1. Power on your device
    1. If you enter safe mode, update your device
1. Your device may be bricked. For support (in English), join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp)

## Clear Home Menu extdata

1. Power off your device
1. Insert your SD card into your computer
1. Navigate to the `/Nintendo 3DS/<32-character-id>/<32-character-id>/extdata/00000000/` folder on your SD card
1. Delete the extdata file corresponding to your region:
  + **EUR Region**: `00000098`
  + **JPN Region**: `00000082`
  + **USA Region**: `0000008f`
  + **CHN Region**: `000000A1`
  + **KOR Region**: `000000A9`
  + **TWN Region**: `000000B1`
1. Reinsert your SD card into your device

## Black screen on SysNAND boot after Installing boot9strap

1. Ensure you have a working payload
    1. Check for the existence of `boot.firm` in the root of your SD card.
1. Try resetting Luma's config and fix options
    1. Delete `/luma/config.bin` from your SD card
    1. Set your options when it boots
1. Test booting GodMode9
    1. On Luma3DS, hold (Start) on boot
1. Try deleting home menu's extdata by following these instructions:
    1. Power off your device
    1. Launch GodMode9 by holding (Start) during boot
    1. Press (Home) to bring up the action menu
    1. Select "Scripts..."
    1. Select "GM9Megascript"
    1. Select "Scripts from Plailect's Guide"
    1. Select "Remove extdata"
    1. Press (A) to continue
    1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
    1. Press (A) to continue
    1. Press (B) to return to the main menu
    1. Select "Exit"
    1. Press (A) to relock write permissions if prompted
    1. Press (Start) to reboot your device
1. Try booting without any cartridges inserted (including flashcarts)
1. If you previously downgraded with Gateway, ensure that you are using the latest Luma3DS version
1. Try following [CTRTransfer](ctrtransfer)
1. For support (in English), join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp)

## Blue screen on boot (bootrom error)

1. Your device is bricked
1. You will need to get an ntrboot-comptible flashcart (one of the ones on [this list](ntrboot) or a [hardmod](https://gbatemp.net/threads/414498/), or repair / replace your device
1. For support (in English), join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp)
