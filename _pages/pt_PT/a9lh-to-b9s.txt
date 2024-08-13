---
title: "A9LH to B9S"
---

{% include toc title="Table of Contents" %}

### Leitura Obrigatória

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

All future releases of Luma3DS will only be made in the `.firm` format, which will only be compatible with boot9strap and sighax. This means that to continue receiving the latest updates of Luma3DS, you should use this page to update your installation.

To extract the `.7z` files linked on this page, you will need a file archiver like [7-Zip](http://www.7-zip.org/) or [The Unarchiver](https://theunarchiver.com/).

### What You Need

To use the [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links on this page, you will need a torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

Note that, only on New 3DS, `secret_sector.bin` is needed to revert the arm9loaderhax exploit, which is why it is not needed for the installation of boot9strap on a stock console. If you do not have a New 3DS, you do not need `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
* The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)

### Instructions

#### Section I - Prep Work

For all steps in this section, overwrite any existing files on your SD card.
{: .notice--info}

1. Power off your console
1. Insert your SD card into your computer
1. Copy `boot.firm` and `boot.3dsx` from the latest version Luma3DS `.zip` to the root of your SD card
    + The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
1. Copy `arm9loaderhax.bin` from the v7.0.5 Luma3DS `.7z` to the root of your SD card
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the `/luma/payloads/` folder on your SD card
    + If the `luma` or `payloads` folder doesn't exist, create them
    + Delete any other existing `.bin` payloads (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) in the `/luma/payloads/` folder on your SD card as they will not be compatible with boot9strap compatible Luma3DS versions
1. Create a folder named `boot9strap` on the root of your SD card
1. Copy `boot9strap.firm` and `boot9strap.firm.sha` from the boot9strap `.zip` to the `/boot9strap/` folder on your SD card
1. **New 3DS Users Only:** Copy `secret_sector.bin` to the `/boot9strap/` folder on your SD card

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinsert your SD card into your console

#### Section II - Installing boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    + If you see the luma configuration screen instead of SafeB9SInstaller, simply press (Start), then shut down your 3DS and try again
    + If this gives you an error, try either using a new SD card or formatting your current SD card (backup existing files first)
1. Wait for all safety checks to complete
    + If you get an "OTP Crypto Fail" error, download <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Your console should have rebooted into the Luma3DS configuration menu
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings
    + If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Press (Start) to save and reboot

___

### Continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}
