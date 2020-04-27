---
title: "A9LH to B9S"
---

{% include toc title="Table of Contents" %}

### Required Reading

This page is for existing arm9loaderhax users to update their devices to boot9strap.

All future releases of Luma3DS will only be made in the `.firm` format, which will only be compatible with boot9strap and sighax. This means that to continue receiving the latest updates of Luma3DS, you should use this page to update your installation.

To use the [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links on this page, you will need a torrent client like [Deluge](http://dev.deluge-torrent.org/wiki/Download).

To extract the `.7z` files linked on this page, you will need a file archiver like [7-Zip](http://www.7-zip.org/) or [The Unarchiver](https://theunarchiver.com/).

If you have a PIN enabled on Luma3DS, SafeB9SInstaller will give you an "OTP Crypto Fail" error unless you temporarily disable your PIN (you can re-enable the PIN after the update).
{: .notice--warning}

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

Note that the following required file named `secret_sector.bin` is the same one that was found in the various `data_input.zip` file versions. If you already have that file on your disk somewhere, you can use that one instead of downloading the one below.
{: .notice--info}

Note that, only on New 3DS, `secret_sector.bin` is needed to revert the arm9loaderhax exploit, which is why it is not needed for the installation of boot9strap on a stock console. If you do not have a New 3DS, you do not need `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce)
* The latest release of [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) 
* The v7.0.5 release of [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/tag/v7.0.5) *(the `.7z` file)*
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/latest)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/latest) *(standard boot9strap; not the `devkit` file, not the `ntr` file)*
* The latest release of [the Homebrew Launcher](https://github.com/fincs/new-hbmenu/releases/latest)

### Instructions

#### Section I - Prep Work

For all steps in this section, overwrite any existing files on your SD card.
{: .notice--info}

1. Power off your device
1. Insert your SD card into your computer
1. Copy `boot.3dsx` to the root of your SD card
1. Copy `boot.firm` from the latest version Luma3DS `.zip` to the root of your SD card
1. Copy `arm9loaderhax.bin` from the v7.0.5 Luma3DS `.7z` to the root of your SD card
1. Delete any existing `.bin` payloads in the `/luma/payloads/` folder on your SD card as they will not be compatible with boot9strap compatible Luma3DS versions
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the `/luma/payloads/` folder on your SD card
1. Create a folder named `boot9strap` on the root of your SD card
1. Copy `boot9strap.firm` and `boot9strap.firm.sha` from the boot9strap `.zip` to the `/boot9strap/` folder on your SD card
1. **New 3DS Users Only:** Copy `secret_sector.bin` to the `/boot9strap/` folder on your SD card

    ![]({{ "/images/screenshots/a9lh-to-b9s-file-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinsert your SD card into your device

#### Section II - Installing boot9strap

1. Boot your device while holding (Start) to launch SafeB9SInstaller
  + If you see the luma configuration screen instead of SafeB9SInstaller, simply press (Start), then shutdown your 3DS and try again
  + If this gives you an error, try either using a new SD card, or formatting your current SD card (backup existing files first)
1. Wait for all safety checks to complete
  + If you get an "OTP Crypto Fail" error, download <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
1. When prompted, input the key combo given to install boot9strap
1. Once it has completed, press (A) to reboot your device.
  + If your device shuts down on boot, ensure that you have copied `boot.firm` from the Luma3DS `.zip` to the root of your SD card

#### Section III - Configuring Luma3DS

1. In the Luma3DS configuration menu, use the (A) button and the D-Pad to turn on the following:    
  + **"Show NAND or user string in System Settings"**
1. Press (Start) to save and reboot

___

### Continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}
