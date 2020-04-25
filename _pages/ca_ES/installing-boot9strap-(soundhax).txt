---
title: "Installing boot9strap (Soundhax)"
---

{% include toc title="Table of Contents" %}

### Required Reading

Soundhax (when combined with pre9otherapp) is compatible with versions 2.1.0 through 8.1.0 in the EUR, JPN, KOR, and USA regions.

{% capture notice-1 %}

Note that cartridge updates will only deliver updates to core features, such as the System Settings, Home Menu, etc. cartridge updates will not deliver updates to Nintendo 3DS Sound and Network features, such as System Transfer, Internet Browser, StreetPass Mii Plaza, or eShop.

This means that using a cartridge update from a version containing an older Nintendo 3DS Sound version *(<2.1.0)* to one that introduced a newer Nintendo 3DS Sound version will break Soundhax! You will need an alternate method of entering the Homebrew Launcher such as [Installing boot9strap (Browser)](installing-boot9strap-(browser)) or [Installing boot9strap (MSET)](installing-boot9strap-(mset))!
{% endcapture %}

<div class="notice--warning">{{ notice-1 | markdownify }}</div>

### What You Need

* The latest release of [Soundhax](http://soundhax.com) *(for your region, device, and version)*
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/latest)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/latest) *(standard boot9strap; not the `devkit` file, not the `ntr` file)*
* The latest release of [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest)
* The latest release of [the Homebrew Launcher](https://github.com/fincs/new-hbmenu/releases/latest)
* The latest release of [pre9otherapp](https://github.com/Pirater12/otherapp/releases/latest) *(the `.bin` file corresponding to your firmware version)*

### Instructions

#### Section I - Prep Work

1. Power off your device
1. Insert your SD card into your computer
1. Copy the Soundhax `.m4a` to the root of your SD card
1. Copy the pre9otherapp payload to the root of your SD card and rename it to `otherapp.bin`
1. Copy `boot.firm` from the Luma3DS `.zip` to the root of your SD card
1. Copy `boot.3dsx` to the root of your SD card
1. Create a folder named `boot9strap` on the root of your SD card
1. Copy `boot9strap.firm` and `boot9strap.firm.sha` from the boot9strap `.zip` to the `/boot9strap/` folder on your SD card
1. Copy `arm9.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
1. Reinsert your SD card into your device
1. Power on your device

#### Section II - Launching SafeB9SInstaller

1. Reinsert your SD card into your device
1. Power on your device
1. Launch Nintendo 3DS Sound

    ![]({{ "/images/screenshots/soundhax-welcome.png" | absolute_url }})
    {: .notice--info}

1. If you've never opened Nintendo 3DS Sound before and get tips on how to use it from a bird icon, go through all of the bird tips, then close the app normally and relaunch it
  + In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done
1. Go to `/SDCARD`, then play "<3 nedwill 2016"
  + This may take many tries
  + If it freezes, just force the console to power off by holding the power button, then try again

    ![]({{ "/images/screenshots/soundhax-launch.png" | absolute_url }})
    {: .notice--info}

1. If the exploit was successful, you will have booted into SafeB9SInstaller

#### Section III - Installing boot9strap

1. Wait for all safety checks to complete
1. When prompted, input the key combo given to install boot9strap
1. Once it has completed, press (A) to reboot your device

#### Section IV - Configuring Luma3DS

1. Your device should have rebooted into the Luma3DS configuration menu
  + If you get a black screen, [follow this troubleshooting guide](troubleshooting#black-screen-on-sysnand-boot-after-installing-boot9strap)
1. Use the (A) button and the D-Pad to turn on the following:
  + **"Show NAND or user string in System Settings"**
1. Press (Start) to save and reboot
  + If you get an error, just continue the next page

___

### Continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}
