---
title: "Updating B9S"
---

{% include toc title="Table of Contents" %}

### Required Reading

This page is for existing boot9strap users to update their installation of boot9strap to the latest version.

{% capture notice-1 %}
There have been reports of a wave of bans being handed out to CFW users by Nintendo. To protect yourself, please do the following steps before starting this guide:

1. Go to System Settings, then "Internet Settings", then "SpotPass", then "Sending of System Information"
1. Disable the "Sending of System Information" option
1. Exit the System Settings
1. Go to your Friend List (the [orange Face Icon]({{ "/images/friend-list-icon.png" | absolute_url }}) in the top row of your Home Menu)
  + If you receive an error and are kicked out of the menu, the Friend List setting is either already disabled or your console cannot connect to Nintendo's servers (due to a ban or connection issues)
1. Go to the Friend List settings, then "Friend Notification Settings", then "Show friends what you're playing"
1. Disable the "Show friends what you're playing" option
1. Exit your Friend List

{% endcapture %}

<div class="notice--danger">{{ notice-1 | markdownify }}</div>

### What You Need

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/latest)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/latest) *(standard boot9strap; not the `devkit` file, not the `ntr` file)*
* The latest release of [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest)
* The latest release of [the Homebrew Launcher](https://github.com/fincs/new-hbmenu/releases/latest)

### Instructions

#### Section I - Prep Work

For all steps in this section, overwrite any existing files on your SD card.
{: .notice--info}

1. Insert your SD card into your computer
1. Copy `boot.3dsx` to the root of your SD card
1. Create a folder named `boot9strap` on the root of your SD card
1. Copy `boot9strap.firm` and `boot9strap.firm.sha` from the boot9strap `.zip` to the `/boot9strap/` folder on your SD card
1. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the `/luma/payloads/` folder on your SD card
1. Reinsert your SD card into your device

#### Section II - Installing boot9strap

1. Launch Luma3DS chainloader menu by holding (Start) during boot
1. Launch SafeB9SInstaller by pressing (A)
1. Wait for all safety checks to complete
1. When prompted, input the key combo given to install boot9strap
1. Once it has completed, hold (Start) while pressing (A) to reboot your device to the Luma3DS chainloader
  + If you encounter an `argc = 0` error booting your device after the B9S update, just continue to fix it

#### Section III - Update Luma3DS

1. Power off your device
1. Insert your SD card into your computer
1. Copy `boot.firm` from the Luma3DS `.zip` to the root of your SD card, replacing the existing file
1. Reinsert your SD card into your device
1. Power on your device

#### Section IV - Configuring Luma3DS

This section is only needed if you are prompted with the Luma3DS configuration menu after the reboot.
{: .notice--info}

1. In the Luma3DS configuration menu, use the (A) button and the D-Pad to turn on the following:    
  + **"Show NAND or user string in System Settings"**
1. Press (Start) to save and reboot

___

### Continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}
