---
title: "Finalizing Setup"
---

{% include toc title="Table of Contents" %}

### Required Reading

The file `boot.firm` is what is launched by boot9strap itself after it finishes loading off of NAND, and can be any valid arm9 payload in the FIRM format. This file can be replaced at any time, although Luma3DS allows for the launch of other arm9 payloads in the FIRM format using the Luma3DS chainloader.

In this case, we use Luma3DS by [AuroraWright](https://github.com/AuroraWright/) to boot a patched SysNAND directly, allowing us to completely bypass the need for any kind of EmuNAND, vastly simplifying the usage of a hacked 3DS in addition to saving SD card space.

During this process, we also setup programs such as the following:

+  **FBI** *(installs CIA formatted games and applications)*
+  **Anemone3DS** *(installs custom themes)*
+  **Checkpoint** *(backs up and restores save files for 3DS and DS games)*
+  **Luma3DS Updater** *(updates your CFW installation easily)*
+  **GodMode9** *(multipurpose tool which can do NAND and cartridge functions)*
+  **Homebrew Launcher Loader** *(launches the Homebrew Launcher)*
+  **DSP1** *(allows homebrew applications to have sound)*
+  **ctr-no-timeoffset** *(removes the rtc offset so that the home menu and rtc timestamps match)*

### What You Need

* The latest release of [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS/releases/latest) *(the `.cia` file)*
* The latest release of [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases/latest) *(the `.cia` file)*
* The latest release of [Homebrew Launcher Wrapper](https://github.com/mariohackandglitch/homebrew_launcher_dummy/releases/latest)
* The v1.9.2pre1 release of [GodMode9](https://github.com/d0k3/GodMode9/releases/tag/v1.9.2pre1)
* The latest release of [DSP1](https://github.com/zoogie/DSP1/releases/latest)
* The latest release of [FBI](https://github.com/Steveice10/FBI/releases/latest) *(the `.cia` and `.3dsx` files)*
* The latest release of [ctr-no-timeoffset](https://github.com/ihaveamac/ctr-no-timeoffset/releases/latest)
* The latest release of [Luma3DS Updater](https://github.com/KunoichiZ/lumaupdate/releases/latest) *(the `.cia` file)*

### Instructions

#### Section I - Prep Work

1. Power off your device
1. Insert your SD card into your computer
1. Create a folder named `3ds` on the root of your SD card if it does not already exist
1. Create a folder named `cias` on the root of your SD card if it does not already exist
1. Copy `ctr-no-timeoffset.3dsx` to the `/3ds/` folder on your SD card
1. Copy `FBI.3dsx` to the `/3ds/` folder on your SD card
1. Copy `Homebrew_Launcher.cia` to the `/cias/` folder on your SD card
1. Copy `lumaupdater.cia` to the `/cias/` folder on your SD card
1. Copy `FBI.cia` to the `/cias/` folder on your SD card
1. Copy `DSP1.cia` to the `/cias/` folder on your SD card
1. Copy `Anemone3DS.cia` to the `/cias/` folder on your SD card
1. Copy `Checkpoint.cia` to the `/cias/` folder on your SD card
1. Create a folder named `payloads` in the `luma` folder on your SD card if it does not already exist
1. Copy `GodMode9.firm` from the GodMode9 `.zip` to the `/luma/payloads/` folder on your SD card
1. Copy the `gm9` folder from the GodMode9 `.zip` to the root of your SD card
1. Reinsert your SD card into your device
1. Power on your device

#### Section II - Updating the System

If, while following a previous version of this guide, you CTRTransfered your *New 3DS* to 2.1.0, you should now [restore your NAND backup](godmode9-usage#restoring-a-nand-backup) before doing this section.
{: .notice--danger}

If, before following this guide, you already had an EmuNAND setup and would like to move the contents of your previous EmuNAND to your new SysNAND CFW, now is the time to [follow Move EmuNAND](move-emunand) before doing this section.
{: .notice--info}

1. Update your device by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
  + Updates while using B9S + Luma (what you have) are safe
  + The updater may display a message saying "Your system is up to date" instead of updating. This is normal if you are already up to date; continue with the next section
  + If this gives you an error, set your DNS settings to "auto"
  + If this still gives you an error, [follow CTRTransfer](ctrtransfer), then try updating again

#### Section III - Homebrew Launcher

1. Launch the Download Play application (![]({{ "/images/download-play-icon.png" | absolute_url }}){: height="24px" width="24px"})
1. Wait until you see the two buttons
1. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
1. Select "Miscellaneous options"
1. Select "Switch the hb. title to the current app."
1. Press (B) to continue
1. Press (B) to return to the Rosalina main menu
1. Press (B) to exit the Rosalina menu
1. Press (Home), then close Download Play
1. Launch the Download Play application
1. Your device should load the Homebrew Launcher
1. Launch ctr-no-timeoffset from the list of homebrew
1. Press (A) to set the offset to 0
  + This will set the system clock to match the RTC date&time (which we will set soon)
1. Press (Start) to return to the Homebrew Launcher
1. Launch FBI from the list of homebrew

#### Section IV - Installing CIAs

1. Navigate to `SD` -> `cias`
1. Select "\<current directory>"
1. Select the "Install and delete all CIAs" option, then press (A) to confirm
1. Press (Home), then close Download Play

#### Section V - DSP Dump

1. Launch the DSP1 application
1. Once it has completed, press (B) to self-delete the app and return to the home menu

#### Section VI - CTRNAND Luma3DS

1. Power off your device
1. Launch GodMode9 by holding (Start) during boot
1. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it has completed
1. If you are prompted to fix the RTC date&time, press (A) to do so, then set the date and time, then press (A) to continue
1. Press (Home) to bring up the action menu
1. Select "Scripts..."
1. Select "GM9Megascript"
1. Select "Scripts from Plailect's Guide"
1. Select "Setup Luma3DS to CTRNAND"
1. When prompted, press (A) to proceed
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Press (A) to continue

#### Section VII - Cleanup SD Card

1. Select "Cleanup SD Card"
1. When prompted, press (A) to proceed
1. Press (A) to continue
1. Press (B) to return to the main menu

#### Section VIII - Backup Essential Files

1. Select "Backup Options"
1. Select "SysNAND Backup"
1. Press (A) to confirm
  + This process will take some time
  + If you get an error, make sure that you have at least 1.3GB of free space on your SD card
1. Press (A) to continue
1. Press (B) to return to the main menu
1. Select "Exit"
1. Press (A) to relock write permissions if prompted
1. Navigate to `[M:] MEMORY VIRTUAL`
1. Press (A) on `boot9.bin` to select it
1. Select "Copy to 0:/gm9/out"
1. Press (A) to continue
1. Press (Home) to bring up the action menu
1. Select "Poweroff system" to power off your device
1. Insert your SD card into your computer
1. Copy `<date>_<serialnumber>_sysnand_###.bin`, `<date>_<serialnumber>_sysnand_###.bin.sha`, `essential.exefs`, and `boot9.bin` from the `/gm9/out/` folder on your SD card to a safe location on your computer
  + Make backups in multiple locations (such as online file storage)
  + These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
1. Delete `<date>_<serialnumber>_sysnand_###.bin` and `<date>_<serialnumber>_sysnand_###.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
1. Reinsert your SD card into your device
1. Power on your device

___

#### Information and Notes

{% capture notice-10 %}
You can now use Luma3DS Updater to update your Luma3DS to the latest version just by opening it and pressing (A).

This is not the same thing as a System Update; it just downloads and extracts the newest Luma3DS files.

This will update the Luma3DS files on your SD card and in CTRNAND, which is what your device boots from when there is no SD card present.
{% endcapture %}

<div class="notice--info">{{ notice-10 | markdownify }}</div>

{% capture notice-6 %}
You will now boot Luma3DS CFW SysNAND by default.

You can now hold (Select) on boot to launch the Luma3DS configuration menu.

You can now hold (Start) on boot to launch the Luma3DS chainloader menu (note that the Luma3DS chainloader menu is only displayed if there is more than one payload detected).

You can now hold (Start) + (Select) + (X) on boot to dump the ARM11 bootrom (`boot11.bin`), the ARM9 bootrom (`boot9.bin`), and your console unique OTP (`OTP.bin`) to the `/boot9strap/` folder on your SD card (note that this will not have any kind of prompt or message).

You can now press (L) + (Down) + (Select) while the system is booted to open the Rosalina menu integrated into Luma3DS. For a full list of Rosalina features, please see the [Luma3DS v8.0 Release](https://github.com/AuroraWright/Luma3DS/releases/tag/v8.0)
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

{% capture notice-6 %}
If you would like to upgrade to a bigger sized SD card, all you have to do is format your new SD card as FAT32 and copy paste the contents of the old SD card onto the new SD card.

If your new SD card is bigger than 32GB, then you have to use a different tool to format it, such as [guiformat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) for Windows, [gparted](http://gparted.org/download.php) for Linux, or [Disk Utility](https://support.apple.com/en-gb/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac) for Mac.
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

For information on changing your device to another region, check out the [Region Changing](region-changing) page.
{: .notice--success}

For information on using GodMode9's various features, check out the [GodMode9 Usage](godmode9-usage) page.
{: .notice--success}

For information on using Luma3DS's various features, check out [its wiki](https://github.com/AuroraWright/Luma3DS/wiki/Options-and-usage).
{: .notice--success}

For information on installing custom themes and splash screens, check out [Theme Plaza](https://themeplaza.eu/).
{: .notice--success}

For information on using Gateshark cheat codes on Luma3DS, check out [Checkpoint](https://github.com/FlagBrew/Checkpoint).
{: .notice--success}
