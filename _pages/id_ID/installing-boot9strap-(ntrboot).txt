---
title: "Installing boot9strap (ntrboot)"
---

{% include toc title="Table of Contents" %}

### Required Reading

To use the [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links on this page, you will need a torrent client like [Deluge](http://dev.deluge-torrent.org/wiki/Download).

### What You Need

* A magnet that triggers the sleep mode of your device (if using a folding style device)
* Your ntrboot flashed flashcart
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/latest)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/latest) *(standard boot9strap; not the `devkit` file, not the `ntr` file)*
* The latest release of [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) 

### Instructions

#### Section I - Prep Work

1. Power off your device
1. Insert your device's SD card into your computer
  + This is the SD card from your 3DS, *not* the SD card from your flashcart
1. Copy `SafeB9SInstaller.firm` to the root of your SD card and rename it to `boot.firm`
1. Copy `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card
1. Create a folder named `boot9strap` on the root of your SD card
1. Copy `boot9strap.firm` and `boot9strap.firm.sha` from the boot9strap `.zip` to the `/boot9strap/` folder on your SD card

    ![]({{ "/images/screenshots/boot9strap-ntrboot-file-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinsert your SD card into your device
1. Power on your device

#### Section II - ntrboot

1. Use the magnet to find the spot on your device where the sleep sensor is triggered
  + This step is not needed on the old 2DS (which has a sleep mode switch)
1. Power off your device
1. Insert your flashcart into your device
1. Place the magnet on your device to trigger the sleep sensor
  + On old 2DS, you should instead enable the sleep mode switch
1. Hold (Start) + (Select) + (X) + (Power) for several seconds, then release the buttons
  + It may take a few attempts to get this to work because the positioning is awkward
1. If the exploit was successful, you will have booted into SafeB9SInstaller

#### Section III - Installing boot9strap

1. Wait for all safety checks to complete
1. Remove the magnet from your device
  + On old 2DS, you should instead disable the sleep mode switch
1. When prompted, input the key combo given to install boot9strap
1. Once it has completed, force your device to power off by holding down the power button
  + Your device will only boot to the SafeB9SInstaller screen until the next section is completed

#### Section IV - Configuring Luma3DS

1. Insert your SD card into your computer
1. Delete `boot.firm` from the root of your SD card
1. Copy `boot.firm` from the Luma3DS `.zip` to the root of your SD card
1. Reinsert your SD card into your device
1. Power on your device
1. Your device should have booted into the Luma3DS configuration menu
  + If you get a black screen, [follow this troubleshooting guide](troubleshooting#black-screen-on-sysnand-boot-after-installing-boot9strap)
1. Use the (A) button and the D-Pad to turn on the following:
  + **"Show NAND or user string in System Settings"**
1. Press (Start) to save and reboot
  + If you get an error, just continue the next page

___

### Continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}

___

The following is an optional section that will allow you to restore your flashcart to its original state (to allow it to be used for its standard functions).

Note that the Acekard 2i retains its ability to launch `.nds` files while having the ntrboot exploit installed. This only applies when the Acekard 2i is in an NDS or custom firmware 3DS! While the ntrboot exploit is installed to the Acekard 2i, it will be unable to launch `.nds` files on DSi or stock 3DS systems.

Do not follow this section until you have completed the rest of the instructions on this page.

#### Section V - Removing ntrboot

##### What You Need

* The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest)
* The flashrom backup corresponding to your flashcart
  + Note that if you followed [Flashing ntrboot (3DS Multi System)](flashing-ntrboot-(3ds-multi-system)), the flashrom backup already exists in the correct location and does not need to be downloaded
  + Note that if you followed [Flashing ntrboot (3DS Single System)](flashing-ntrboot-(3ds-single-system)) or [Flashing ntrboot (NDS)](flashing-ntrboot-(nds)), the flashrom backup already exists on your flashcart's SD card and should be copied to the location specified below
  + If you do not know which HW revision you have, just try each for your cart of them. Only the correct one will allow your flashcart to launch properly from home menu, but flashing the wrong one will not brick the cart

| Flashcart | Hardware Revision | Flashrom |
|-|:-:|:-:|
| **Ace3DS X** | | *N/A* |
| **Acekard 2i** | HW 81 | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [Acekard_2i_(HW_81)-Flashrom.zip](magnet:?xt=urn:btih:71ce385a1d65e28719c419fe58d171a4873501ff&dn=Acekard%5F2i%5F%28HW%5F81%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **Acekard 2i** | HW 44 | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [Acekard_2i_(HW_44)-Flashrom.zip](magnet:?xt=urn:btih:d04bd19e15bf8600ccef6540bdbd043846888132&dn=Acekard%5F2i%5F%28HW%5F44%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **DSTT** | | *Missing* |
| **Infinity 3 R4i** | HW A5 | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i_Gold_3DS_(HW_A5)-Flashrom.zip](magnet:?xt=urn:btih:c6dee8cc9535d58284ccb8430c9af4682c3e1efc&dn=R4i%5FGold%5F3DS%5F%28HW%5FA5%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4 3D Revolution** | HW A6 | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i_Gold_3DS_(HW_A6)-Flashrom.zip](magnet:?xt=urn:btih:e1675722834b870ea64ddf1ef9ca77d78db2be00&dn=R4i%5FGold%5F3DS%5F%28HW%5FA6%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4i Gold 3DS Deluxe "Starter"** | | *Missing* |
| **R4i Gold 3DS** | HW 4 | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i_Gold_3DS_(HW_4)-Flashrom.zip](magnet:?xt=urn:btih:a742778ade94b4a0b877cc481ba0f1a4120262da&dn=R4i%5FGold%5F3DS%5F%28HW%5F4%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4i Gold 3DS** | HW 5 | *Missing* |
| **R4i Gold 3DS** | HW 6 | *Missing* |
| **R4i Gold 3DS** | HW 7 | *Missing* |
| **R4i Gold 3DS** | HW 8 | *Missing* |
| **R4i Gold 3DS** | HW D | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i_Gold_3DS_(HW_D)-Flashrom.zip](magnet:?xt=urn:btih:0a074dd475a26166d90ae26e313dcbc6d51cfa12&dn=R4i_Gold_3DS_%28HW_D%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4i Gold 3DS Plus** | | *N/A* |
| **R4i Gold 3DS RTS** | HW A5 | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i_Gold_3DS_(HW_A5)-Flashrom.zip](magnet:?xt=urn:btih:c6dee8cc9535d58284ccb8430c9af4682c3e1efc&dn=R4i%5FGold%5F3DS%5F%28HW%5FA5%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4i Gold 3DS RTS** | HW A6 | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i_Gold_3DS_(HW_A6)-Flashrom.zip](magnet:?xt=urn:btih:e1675722834b870ea64ddf1ef9ca77d78db2be00&dn=R4i%5FGold%5F3DS%5F%28HW%5FA6%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4i Gold 3DS RTS** | HW A7 | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i_Gold_3DS_(HW_A7)-Flashrom.zip](magnet:?xt=urn:btih:d780a1fbcb83d0d3c99748c87534f77957da98ce&dn=R4i%5FGold%5F3DS%5F%28HW%5FA7%29-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4i Ultra** | | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i_Ultra-Flashrom.zip](magnet:?xt=urn:btih:e2a080eb70b92d3127ffea2a5be6bbdb1928a438&dn=R4i%5FUltra-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4i-SDHC 3DS RTS** | | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i-SDHC_3DS_RTS-Flashrom.zip](magnet:?xt=urn:btih:11a4a3b6dd1cef5652b49a413d8e8c662449d819&dn=R4i-SDHC%5F3DS%5FRTS-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4i-SDHC B9S** | | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4i-SDHC_3DS_RTS-Flashrom.zip](magnet:?xt=urn:btih:11a4a3b6dd1cef5652b49a413d8e8c662449d819&dn=R4i-SDHC%5F3DS%5FRTS-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4iSDHC GOLD Pro 20XX**** | | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4iSDHC_GOLD_Pro_20XX-Flashrom.zip](magnet:?xt=urn:btih:f41aeb6b88a986bb0c5246c53132f3b82052f58b&dn=R4iSDHC%5FGOLD%5FPro%5F20XX-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4iSDHC RTS LITE 20XX** | | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4iSDHC_RTS_LITE_20XX-Flashrom.zip](magnet:?xt=urn:btih:543f90f7c50ee847af1d2152bdcbe76e7ed364e4&dn=R4iSDHC%5FRTS%5FLITE%5F20XX-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |
| **R4iSDHC Dual-Core 20XX** | | <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [R4iSDHC_Dual-Core_20XX-Flashrom.zip](magnet:?xt=urn:btih:be5b27b85dcb8a696191a1eddef478f7ab346e06&dn=R4iSDHC%5FDual-Core%5F20XX-Flashrom.zip&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fmgtracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cypherpunks.ru%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.ds.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.open-internet.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.qt.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker-2.msm8916.com%3A6969%2Fannounce) |

##### Instructions

1. Power off your device
1. Insert your SD card into your computer
  + This is the SD card from your 3DS, *not* the SD card from your flashcart
1. Create a folder named `ntrboot` on the root of your SD card
1. Copy the `.bin` file from your flashrom backup `.zip` to the `/ntrboot/` folder on the root of your SD card
1. Create a folder named `payloads` in the `luma` folder on your SD card
1. Copy `ntrboot_flasher.firm` to the `/luma/payloads/` folder on your SD card
1. Reinsert your SD card into your device
1. Insert your ntrboot compatible DS / DSi flashcart into your device
1. Launch ntrboot_flasher by holding (Start) during boot
1. Read the red screen warning
1. Press (A) to continue
1. Select your flashcart
  + If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
1. Select "Restore Flash"
1. Press (A) to proceed
1. Wait until the process is completed
1. Press (A) to return to the main menu
1. Press (B) to power off your device
