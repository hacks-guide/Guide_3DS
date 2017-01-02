---
title: "Installing arm9loaderhax"
permalink: /installing-arm9loaderhax.html
---

The final Step of this guide is to install arm9loaderhax and setup Luma3DS to run just milliseconds into the boot. This is accomplished by using SafeA9LHInstaller by [AuroraWright](https://github.com/AuroraWright/).
{: .notice}

This will install [AuroraWright's Fork](https://github.com/AuroraWright/arm9loaderhax) of arm9loaderhax.
{: .notice--info}

We will also setup the ability to launch payloads from arm9loaderhax, giving us the ability to unbrick our SysNAND from situations that would normally brick us by restoring from backup.
{: .notice--info}

**You cannot use another console's OTP or you will brick GUARANTEED.**
{: .notice--danger}

#### Overview of steps

In this section, we will go through the process that all the other steps have led up to: actually installing arm9loaderhax.

This is nearly the best possible kind of device exploit because it is permanently installable into the NAND firm partitions, and runs before most of the OS loads, allowing it to not only work on *all* versions once installed, but also protect itself and recover from most situations that would brick a non-A9LH 3DS such as a nonfunctional home menu or bad title install.

The file `arm9loaderhax.bin` is what is launched by arm9loaderhax itself after it finishes loading off of NAND, and can be any valid arm9 payload. This file can be replaced at any time, although Luma3DS allows for the launch of other arm9 payloads by holding buttons on boot.

In this case, we use Luma3DS by [AuroraWright](https://github.com/AuroraWright/) to boot a patched SysNAND directly, allowing us to completely bypass the need for any kind of EmuNAND, vastly simplifying the usage of a hacked 3DS in addition to saving SD card space.

Once arm9loaderhax is installed and Luma3DS is setup with the correct options, we then restore our previous backup.

During this process, we also setup programs such as the following:    

+  **FBI** *(installs CIA formatted games and applications)*
+  **Luma3DS Updater** *(updates our CFW installation easily)*
+  **Hourglass9** *(multipurpose tool which can do NAND and cartridge functions)*

#### What you need

* [`aeskeydb.bin`](magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc&dn=aeskeydb.bin&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`fbi-2.4.2-injectable.zip`](magnet:?xt=urn:btih:f978b4cf5eda72823240b9c649f3fd2940a9f525&dn=fbi-2.4.2-injectable.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`data_input_v3.zip`](magnet:?xt=urn:btih:a1195c9f7ab650fa7c7bf020b51fc19ea8d9440c&dn=data%5Finput%5Fv3.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* A previous release of [SafeA9LHInstaller](https://github.com/AuroraWright/SafeA9LHInstaller/releases/tag/v2.0.3) *(the `.7z` file)*
* The latest release of [arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest) *(the `.7z` file)*
* The latest release of [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) *(the `.7z` file)*
* The latest release of [hblauncher_loader](https://github.com/yellows8/hblauncher_loader/releases/latest)
* The latest release of [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)
* The latest release of [Luma3DS Updater](https://github.com/Hamcha/lumaupdate/releases/latest)
* The latest release of [DspDump](https://github.com/Cruel/DspDump/releases/latest)
* The latest release of [FBI](https://github.com/Steveice10/FBI/releases/)
* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest)
* The Homebrew [Starter Kit](http://smealum.github.io/ninjhax2/starter.zip)

#### Instructions

##### Section I - Prep work

{% capture notice-5 %}
**Ensure you are using an SD card that is not corrupted!**

**If you use a corrupted SD card without fixing it, you may BRICK!**

**If you think your SD card may be corrupted, check your SD card for errors using [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), or [F3X (Mac)](f3x-(mac))!**
{% endcapture %}

<div class="notice--danger">{{ notice-5 | markdownify }}</div>

1. **If it exists, copy the `/files9/` folder on your SD card to a safe location on your computer and back it up to multiple locations (such as online file storage); the files inside could save you from total data loss if you break your system**
2. Create a folder named `cias` on the root of your SD card if it does not already exist
4. **Delete the `a9lh` folder from the root of your SD card if it exists**
  + **If you accidentally install arm9loaderhax using another device's `OTP.bin`, you will BRICK!**
3. Delete the `3ds` folder from the root of your SD card if it exists
4. **Copy _the contents of_ the `starter.zip` to the root of your SD card**
  + This will include a brand new `3ds` folder to replace the one you just deleted
5. Copy _the contents of_ the SafeA9LHInstaller `.7z` to the root of your SD card
6. **Copy the `a9lh` folder from the data_input `.zip` to the root of your SD Card**
7. **Copy _the contents of_ the arm9loaderhax release `.7z` to `a9lh` folder on your SD card**
9. Copy `hblauncher_loader.cia` from the hblauncher_loader `.zip` to the `/cias/` folder on your SD card
10. Copy `lumaupdater.cia` from the Luma3DS Updater `.zip` to the `/cias/` folder on your SD card
11. Copy `FBI.cia` from the FBI `.zip` to the `/cias/` folder on your SD card
12. **Copy `arm9loaderhax.bin` from the Luma3DS `.7z` to the root of your SD card, overwrite existing files**
13. Create a folder named `luma` on the root of your SD card
14. Create a folder named `payloads` in the `luma` folder on your SD card
15. Copy `Hourglass9.bin` from the Hourglass9 `.zip` to the `/luma/payloads/` folder on your SD card and rename `Hourglass9.bin` to `start_Hourglass9.bin`
16. Copy `GodMode9.bin` from the GodMode9 `.zip` to the `/luma/payloads` folder on your SD card and rename `GodMode9.bin` to `up_GodMode9.bin`
16. Copy `aeskeydb.bin` to the `/files9/` folder on your SD card
17. Copy `DspDump.3dsx` to the `/3ds/` folder on your SD card
18. Copy _the contents of_ `fbi-2.4.2-injectable.zip` to the `/files9/` folder on your SD card
19. Clear Home Menu's extdata by navigating to the following folder on your SD card: `/Nintendo 3DS/(32 Character ID)/(32 Character ID)/extdata/00000000/`
    + EUR Region: Delete `00000098`
    + JPN Region: Delete `00000082`
    + USA Region: Delete `0000008f`
    + CHN Region: Delete `000000A1`
    + KOR Region: Delete `000000A9`
    + TWN Region: Delete `000000B1`

##### Section II - Installing arm9loaderhax

1. Reinsert your SD card into your 3DS
2. Do the steps for installing arm9loaderhax on your device:
  + You should be on 2.1.0
  + Go to `http://dukesrg.github.io/2xrsa.html?arm11.bin` on your 3DS
    + If you get an error, [follow this troubleshooting guide](troubleshooting#ts_browser)
    + If you get a glitched screen, [follow this troubleshooting guide](troubleshooting#ts_safe_a9lh_screen)
  + Press (Select) to Full Install
  + The installer will now install arm9loaderhax on your device (this is very fast)
  + Shut down your console, hold the power button until it turns off if necessary
  + Copy your console specific `OTP.bin` from the `/a9lh/` folder on your SD card to a safe location on your computer and back it up to multiple locations (such as online file storage), then reinsert your SD card into your 3DS

##### Section III - Configuring Luma3DS

1. Hold select on boot to enter the Luma3DS menu
  + Make sure to start holding the button before pressing power
  + If you get a black screen, [follow this troubleshooting guide](troubleshooting#ts_sys_a9lh)   
  + If you boot to SafeA9LHInstaller, [follow this troubleshooting guide](troubleshooting#ts_safe_a9lh)
2. Use the (A) button and the D-Pad to turn on the following:    
  + **"Autoboot SysNAND"**
  + **"Use SysNAND FIRM if booting with R"**
  + **"Show NAND or user string in System Settings"**
3. If you are using a **New 3DS**, you should *also* enable the following:
  + **"New 3DS CPU" to "Clock+L2(x)"**
    + This will increase the framerate of many games, but may cause instability in others
    + If some games do not work properly, disable this option and try again
4. Press Start to save and reboot
  + If you get a black screen, just continue to the next section   
  + If you get a "Failed to mount CTRNAND" error, just continue to the next section     

##### Section IV - Restoring the System

If, before following this guide, you already had an EmuNAND setup and would like to move the contents of your previous EmuNAND to your new SysNAND CFW, now is the time to [follow Move EmuNAND](move-emunand) instead of doing the first step in this section.
{: .notice--info}

If you backed up your NAND as part of [DSiWare Downgrade (Save Injection)](dsiware-downgrade-(save-injection)) or [Hardmod Downgrade](hardmod-downgrade), restore that NAND backup instead of `NANDmin.bin` by moving the file to `/files9/` and doing the following steps. It will be named `NAND_N3DS.bin`, `NAND_O3DS.bin`, or `backup_nand.bin`, depending on the steps you did.
{: .notice--info}

1. If you have done [2.1.0 ctrtransfer](2.1.0-ctrtransfer), restore `NANDmin.bin`:
  + Open Hourglass9 from arm9loaderhax by holding (Start) on boot
  + Go to "SysNAND Backup/Restore"
  + Restore from `NANDmin.bin`
  + Press (Start) to reboot
  + If you get a black screen, [follow 9.2.0 ctrtransfer](9.2.0-ctrtransfer)
1. If your backup was of a version between 3.0.0 and 4.5.0, manually download the required firmware:
  + Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/00000056) and rename it to `firmware.bin`
  + Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/cetk)
  + Copy `firmware.bin` and `cetk` to the `/luma/` folder on your SD card
  + Delete both of these files after updating your 3DS
2. Regardless of whether or not you did either of the above two steps, update your 3DS by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
  + Updates while using A9LH + Luma (what you have) are safe, stop asking about it
  + If this gives you an error, set your DNS settings to "auto"
  + If this still gives you an error and your NAND is below 9.2.0, [follow 9.2.0 ctrtransfer](9.2.0-ctrtransfer)


##### Section V - Injecting FBI

1. Open Hourglass9 from arm9loaderhax by holding (Start) on boot
2. Go to "SysNAND Backup/Restore", then select the "Health&Safety Dump" option to dump Health & Safety to `hs.app` **(you can use Up and Down / Left and Right to change the name)**
3. Press (B), then select the "Health&Safety Inject" option
8. Select the FBI injectable `.app` for your region
4. Press (A) and confirm to inject
9. Press (Start) to reboot
10. If you still launch to the stock Health & Safety app and have downgraded with Gateway in the past, [follow this troubleshooting guide](troubleshooting#gw_fbi)

##### Section VI - Finalizing setup

2. Open Health and Safety (which is now FBI)
3. Select "SD"
4. Select "cias"
5. Navigate to `FBI.cia` and press (A) to install
6. Navigate to `hblauncher_loader.cia` and press (A) to install
7. Navigate to `lumaupdater.cia` and press (A) to install
8. Navigate to `arm9loaderhax.bin`, then press (A) on it and select the "Copy" option
9. Return to the FBI main menu with (B)
10. Select "CTR NAND"
11. Select "\<current directory>"
12. Select the "Paste" option, then press (A) to confirm
8. Exit with the home button
9. Launch the Homebrew Launcher from the home menu
10. Select "DSP Dump"
11. Press (Start) when prompted to exit
12. Reboot while holding Start to launch Hourglass9
13. Go to "SysNAND Backup/Restore", then select "Health&Safety Inject"
14. Select `hs.app` (the original one that doesn't contain FBI), then press (A) and confirm to inject
15. Press (Select) on the main menu to eject your SD card
15. Press (Start) to reboot with the SD card removed
  + Booting the device at least once with the SD card removed will allow you to configure the CTRNAND based luma installation
16. Use the (A) button and the D-Pad to turn on the following:    
  + **"Show NAND or user string in System Settings"**
3. If you are using a **New 3DS**, you should *also* enable the following:
  + **"New 3DS CPU" to "Clock+L2(x)"**
    + This will increase the framerate of many games, but may cause instability in others
    + If some games do not work properly, disable this option and try again
14. Reinsert your SD card, then press Start to save and reboot!

##### Section VII - Reinstalling Tickets

This section is only needed for devices that did a ctrtransfer earlier and had to back up their tickets.
{: .notice--info}

If you followed [Move EmuNAND](move-emunand), skip this section.
{: .notice--info}

If you backed up your NAND as part of a DSiWare or Hardmod downgrade, skip this section.
{: .notice--info}

If you have no tickets to restore, skip this section.
{: .notice--info}

1. Open FBI
2. Select "SD"
3. Select "files9"
4. Select "\<current directory>"
5. Select "Install and delete all tickets"
6. Wait. The system may appear to freeze, just give it time.
7. Press (A) to confirm
8. Press (B) to decline installing tickets from CDN.
9. Exit with the home button

##### Section VIII - Restoring nim savegame

This section is only needed for devices that did [9.2.0 Downgrade](9.2.0 Dowgnrade) earlier.
{: .notice--info}

1. Open GodMode9 from arm9loaderhax by holding (Up) during boot
2. Navigate to `SDCARD`
3. Press (Y) on `nimsavegame.bin`
4. Press (B) to go back to the main menu
5. Navigate to `SYSNAND CTRNAND` -> `data` -> (32 Character ID) -> `sysdata` -> `0001002c`
7. Press (A) on `00000000`
8. Select "Inject data @offset"
9. Press (A) to select the offset `00000000`
10. Press (A) to unlock SysNAND writing, then input the key combo given
11. Press (Start) to reboot

___

If DSi / DS functionality has broken (such as DS carts or DSiWare no longer working), [follow this troubleshooting guide](troubleshooting#twl_broken)
{: .notice--warning}

{% capture notice-10 %}
You can now use Luma3DS Updater to update your Luma3DS to the latest version just by opening it and pressing (A).     
This is not the same thing as a System Update; it just downloads and extracts the newest Luma3DS files. Luma3DS Updater only updates the files located on the SD card.    
This will only update the Luma3DS files on the SD Card. If you boot the device without an SD card, it will use whatever version you placed in CTR NAND.    
{% endcapture %}

<div class="notice--info">{{ notice-10 | markdownify }}</div>

{% capture notice-6 %}   
You will now boot a Custom Firmware based SysNAND by default.    
You can now hold (Select) on boot to launch the Luma3DS configuration menu.    
You can now hold (Start) on boot to launch Hourglass9, an arm9loaderhax safe multipurpose NAND and cartridge tool.     
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

You can update your arm9loaderhax installation in the future by following the instructions on the [Updating A9LH](updating-a9lh) page.
{: .notice--info}

To use [NTR CFW](https://github.com/44670/BootNTR/), get `ntr.bin` from the appropriate `.zip` on [this](https://github.com/44670/BootNTR/releases) page and copy it to the root of your SD card, then install `BootNTR.cia` from [this](https://github.com/astronautlevel2/BootNTR/releases/latest) page.
{: .notice--info}

Keep your `NANDmin.bin` file, it can be restored by Hourglass9 to save you from a brick in the future.
{: .notice--info}

You can remove your NAND backups from `/files9/` as long as you still have them backed up to a safe location.
{: .notice--info}

{% capture notice-7 %}
**You can remove any extra files and folders from the root of the SD card that are *not* in the following list:**

    + 3ds
    + files9
    + hblauncherloader
    + luma
    + Nintendo 3DS
    + arm9loaderhax.bin
    + boot.3dsx

{% endcapture %}

<div class="notice--info">{{ notice-7 | markdownify }}</div>

For information on changing your device to another region, check out the [Region Changing](region-changing) page.
{: .notice--success}

For information on keeping your A9LH installation up to date, check out the [Updating A9LH](updating-a9lh) page.
{: .notice--success}

For information on using Luma3DS's various features, check out [its wiki](https://github.com/AuroraWright/Luma3DS/wiki/Options-and-usage).
{: .notice--success}
