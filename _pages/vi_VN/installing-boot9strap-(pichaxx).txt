---
title: "Installing boot9strap (PicHaxx)"
---

{% include toc title="Table of Contents" %}

Seedminer-based methods have been replaced by easier, safer methods. Please return to [Get Started](get-started) unless you have a legitimate reason to follow this page (such as broken shoulder buttons).
{: .notice--warning}

### Required Reading

This method of using Seedminer for further exploitation uses your `movable.sed` file to write a custom save file for Pokémon Picross, which can then be used with universal-otherapp to run SafeB9SInstaller.

### What You Need

* The game "Pokémon Picross" (free on eShop)
* Your `movable.sed` file from completing [Seedminer](seedminer)
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/latest)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/latest) *(`boot9strap-1.3.zip`; not the `devkit` file, not the `ntr` file)*
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)
* The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)

### Instructions

#### Section I - Prep Work

1. Power off your device
1. Insert your SD card into your computer
1. Copy `otherapp.bin` to the root of your SD card
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card
1. Create a folder named `boot9strap` on the root of your SD card
1. Copy `boot9strap.firm` and `boot9strap.firm.sha` from the boot9strap `.zip` to the `/boot9strap/` folder on your SD card
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card

#### Section II - PicHaxx

1. Open [the PicHaxx Injector website](https://3ds.nhnarwhal.com/3dstools/pichaxx.php) on your computer
1. Select your `movable.sed` file
1. Select "Build and Download"
1. Wait for the process to complete
1. Navigate to `Nintendo 3DS` -> `<ID0>` -> `<ID1>` -> `title` -> `00040000` -> `0017c100` -> `data` on your SD card
  + The `<ID0>` will be the same one that you used in [Seedminer](seedminer)
  + The `<ID1>` is a 32 character long folder inside of the `<ID0>`
1. Copy the newly downloaded `00000001.sav` file to the `data` folder on your SD card
  + Overwrite the old save file when prompted
1. Reinsert your SD card into your device
1. Power on your device
1. Launch "Pokemon Picross"
1. If the exploit was successful, your device will have booted into SafeB9SInstaller

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
