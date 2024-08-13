---
title: "Finalizin' Setup"
---

{% include toc title="Table of Contents" %}

### Required Reading

The file `boot.firm` is what is launched by boot9strap itself after it finishes loading off of NAND. In this case, we are using Luma3DS by [LumaTeam](https://github.com/LumaTeam/) to patch the console, allowing it to run homebrew software.

On this page, we will make critical system file backups and install some homebrew programs. Most of these steps will be automated using a script that you will run on your console.

{% capture notice-6 %}
The script will install the following applications:

+  **[FBI](https://github.com/lifehackerhansol/FBI)** *(installs CIA formatted applications)*
+  **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** *(launches the Homebrew Launcher)*
+  **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** *(installs custom themes)*
+  **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** *(backs up and restores save files for 3DS and DS games)*
+  **[ftpd](https://github.com/mtheall/ftpd)** *(access your 3DS SD card wirelessly)*
+  **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** *(a homebrew app store for downloading homebrew from the 3DS over Wi-Fi)*
+  **[GodMode9](https://github.com/d0k3/GodMode9)** *(multipurpose tool which can do NAND and cartridge functions)*

If you don't want one of these applications, you can remove them after you have finished this page by navigating to System Settings -> Data Management -> Nintendo 3DS -> Software. (GodMode9 cannot be removed in this way and is generally required for other functions.)
{% endcapture %}
<div class="notice--info">{{ notice-6 | markdownify }}</div>

### Compatibility Notes

If your **New 3DS** was on version 2.1.0 before following this guide, you should [restore your NAND backup](godmode9-usage#restoring-a-nand-backup) before continuing. This likely doesn't apply to you unless you were following this guide in 2017.
{: .notice--warning}

If your previous CFW setup was EmuNAND-based and you wish to move the contents of your EmuNAND/RedNAND to SysNAND, follow [Move EmuNAND](move-emunand) before following this page. If you don't know what an EmuNAND is, this doesn't apply to you.
{: .notice--info}

### What You Need

* [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
* [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

### Instructions

#### Section I - Prep Work

In this section, you will copy the files necessary to follow the rest of the instructions on this page.

1. Power off your console
1. Insert ye SD card into ye computer
1. Copy `finalize.romfs` to the root of your SD card
1. Open the `luma` folder on your SD card and create a folder named `payloads` inside, if it does not already exist
1. Copy `x_finalize_helper.firm` to the `payloads` folder
1. Reinsert your SD card into your console

The screenshot below indicates the minimum SD card layout that is required to follow this page. You may have extra files or folders on your SD card, depending on your previous setup or the method that you followed.

![]({{ "/images/screenshots/finalizing-root-layout.png" | absolute_url }})
{: .notice--info}

![]({{ "/images/screenshots/finalizing-luma-payloads.png" | absolute_url }})
{: .notice--info}

#### Section II - Updating the System

In this section, you will update your system to the latest version, which is safe to do with custom firmware.

{% include_relative include/sysupdate.txt cfw="true" %}

#### Section III - RTC and DSP setup

In this section, you will sync your 3DS internal clock with the actual time and dump the sound firmware (which is necesssary for some homebrew software to use sound properly).

1. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
    + If one of these buttons is broken, download [config.ini]({{ base_path }}/assets/config.ini){:download="config.ini"} and put it in your `luma` folder, replacing the existing one. This will change the Rosalina menu key combination to (X) + (Y)
1. Select "Miscellaneous options"
1. Select "Dump DSP firmware"
1. Press (B) to continue
1. Select "Nullify user time offset"
1. Press (B) to continue
1. Press (B) to return to the Rosalina main menu
1. Press (B) to exit the Rosalina menu

#### Section IV - Setup Script

In this section, you will use a series of scripts to automate homebrew installation, SD card cleanup, and system file backup.

1. Power off your console
1. Press and hold (X), and while holding (X), power on your console. This will launch the Finalizing Setup Helper
    + If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
    + If you encounter an error, consult the [troubleshooting](troubleshooting#finalizing-setup) page
1. If the Helper was successful, your console will boot into GodMode9
    + From this point forward, you can access GodMode9 by holding START while powering on your console
1. If ye be prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it has completed
1. If ye be prompted to fix th' RTC date&time, press (A) to do so, then set th' date 'n time, then press (A) to continue
1. Press (Home) to bring up th' action menu
1. Select "Scripts..."
1. Select "finalize"
1. Follow the prompts in the script, answering any questions that you are asked
    + If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting#finalizing-setup) page
1. Once the script says "Setup complete!", press (A) to power off the device
    + If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
1. Insert ye SD card into ye computer
1. Copy the `/gm9/backups/` folder to a safe location on your computer
    + This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    + The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    + The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
1. If you still have them, delete the two `SysNAND` files from the `/gm9/backups/` folder from your SD card
    + The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

You're done! Custom firmware is now fully configured on your console.
{: .notice--success}

Trying to figure out what to do with your newly modded device? Visit [our wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!
{: .notice--info}

### Information and Notes

{% capture notice-6 %}
Here are some key combos that you should know:

+ Holding (Select) on boot will launch the Luma3DS configuration menu.
+ Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
+ By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. This can be changed from the Rosalina menu.
+ Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. See the [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4) for a list.
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

For information on using GodMode9's various features, check out the [GodMode9 Usage](godmode9-usage) and [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges) pages.
{: .notice--info}
