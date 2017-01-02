---
title: "Troubleshooting"
permalink: /troubleshooting.html
---

If you are unable to boot your 3DS, please look for the section relevant to you, and follow the instructions. Once a solution works for you, you can proceed on with the main guide
(The section is fairly long, try using Ctrl+F to search for your issue.)
{: .notice--primary}

**If you still cannot solve your issue and need to reach out for help, please paste the contents of all relevant .log files from the root of your SD card into a [Gist](https://gist.github.com/), then come for help prepared with a detailed description of your problem and what you've tried.**
{: .notice--info}

## <a name="twl_broken" />DSi / DS functionality is broken after completing the guide

#### What you need

* The TWL_FIRM `.cia` for your device
    + [`New_3DS TWL_FIRM - v9936.cia`](magnet:?xt=urn:btih:eab8558c97b18b1f329a2bfcc3c899b84c082a27&dn=New%5F3DS%20TWL%5FFIRM%20-%20v9936.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
    + [`Old_3DS TWL_FIRM - v8817.cia`](magnet:?xt=urn:btih:17511eadb6e6f3ff22d04f90644e37bd2d96ca43&dn=Old%5F3DS%20TWL%5FFIRM%20-%20v8817.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`TWL Version Data - v0.cia`](magnet:?xt=urn:btih:4a106681407fede5de95cc8bda635432481f6b5d&dn=TWL%20Version%20Data%20-%20v0.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`DS Internet - v2048.cia`](magnet:?xt=urn:btih:2b9df8496922f2546dfb0b01220068ce53c19d3d&dn=DS%20Internet%20-%20v2048.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`DS Download Play - v1024.cia`](magnet:?xt=urn:btih:b581d3c5d98f5e621fddfc1ce5704bb45bf05a8c&dn=DS%20Download%20Play%20-%20v1024.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`Nintendo DS Cart Whitelist - v11264.cia`](magnet:?xt=urn:btih:7b90d506ad032a581a00035616eaa17a68c48eff&dn=Nintendo%20DS%20Cart%20Whitelist%20-%20v11264.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)

#### Instructions

##### Section I - Prep work

1. Create a folder named `cias` on the root of your SD card if it does not already exist
1. Copy `TWL Version Data - v0.cia` to the `/cias/` folder on your SD card
2. Copy `DS Download Play - v1024.cia` to the `/cias/` folder on your SD card
3. Copy `DS Internet - v2048.cia` to the `/cias/` folder on your SD card
4. Copy `Nintendo DS Cart Whitelist - v11264.cia` to the `/cias/` folder on your SD card
5. Copy either `New_3DS TWL_FIRM - v9936.cia`  or `Old_3DS TWL_FIRM - v8817.cia` to the `/cias/` folder on your SD card

##### Section II - Installing titles

1. Open FBI
3. Select "SD"
4. Select "cias"
8. Select "\<current directory>"
9. Select "Install and delete all CIAs"
8. Exit with the home button

## <a name="rm_nnid" />Removing an NNID without formatting the device

#### What you need

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/)

#### Instructions

1. Copy `GodMode9.bin` from the GodMode9 `.zip` to the `/luma/payloads` folder on your SD card and rename `GodMode9.bin` in `/luma/payloads` to `up_GodMode9.bin`
6. Boot holding (Up) to reboot into arm9loaderhax GodMode9
14. Navigate to `SYSNAND CTRNAND` -> `data` -> (32 Character ID) -> `sysdata` -> `00010038`
15. Hold down the (R) trigger, then press X on `00000000` to rename this file
16. Press Up once to change the name to `10000000`
17. Press (A) to save changes
18. Press (A) to unlock SysNAND writing, then input the key combo given
18. Navigate back to the Main Menu
16. Press Start to reboot

## <a name="gw_fbi" />Cannot inject H&S on Gateway downgraded device
This is caused by Gateway implementing a very shoddy downgrade method, which leaves two versions of each app on the system. One of them is unused, but it confuses Decrypt9, causing it to inject into the wrong one.

#### What you need

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/)

#### Instructions

1. Copy `GodMode9.bin` from the GodMode9 `.zip` to the `/luma/payloads` folder on your SD card and rename `GodMode9.bin` in `/luma/payloads` to `up_GodMode9.bin`
2. Reinsert your SD card into your 3DS
5. Open GodMode9 from arm9loaderhax by holding (Up) during boot     
2. Navigate to `SYSNAND CTRNAND` -> `title` -> `00040010`
7. Navigate to the folder for your device and region:
  + **Old 3DS EUR**: `00022300` -> `content`
  + **Old 3DS JPN**: `00020300` -> `content`
  + **Old 3DS USA**: `00021300` -> `content`
  + **New 3DS EUR**: `20022300` -> `content`
  + **New 3DS JPN**: `20020300` -> `content`
  + **New 3DS USA**: `20021300` -> `content`
8. Notice that there are two sets of app and tmd files, one set with uppercase extensions (`.TMD` and `.APP`), and one set with lowercase extensions (`.tmd` and `.app`)
11. While holding the (R) trigger, press (Y) to create a new directory
10. Press (A) to confirm the name `newdir` (it doesn't matter what it's called)
6. Press (A) to unlock SysNAND writing, then input the key combo given
9. Press the (L) trigger on each of the uppercase extension files (`.TMD` and `.APP`) to mark them
10. Press (Y) to copy the files
11. Navigate to `newdir`
12. Press (Y) to paste the files
13. Select "Move path(s)"
14. The uppercase extension files will have been moved to the `newdir` directory
15. Press (Start) to reboot
16. Return to [Installing arm9loaderhax](installing-arm9loaderhax) and retry the FBI injection
17. If this still doesn't work, move the uppercase extension files back to the `content` folder, then move the lowercase extension files to the `newdir` folder, then return to [Installing arm9loaderhax](installing-arm9loaderhax) and retry the FBI injection

## <a name="ts_browser" />A browser based exploit is not working
Browser based exploits (such as browserhax or 2xrsa) are often unstable and crash frequently, but they can sometimes be fixed by doing the following steps

1. Open the browser, then open the browser settings
    1. Scroll to the bottom and Initialize Savedata (it also may be called Clear All Save Data)
    2. Try the exploit again

## <a name="ts_safe_a9lh" />System boots directly SafeA9LHInstaller
You copied the wrong `arm9loaderhax.bin` file to your SD card (you were only supposed to copy the `3ds` folder and `SafeA9LHInstaller.dat` file from the SafeA9LHInstaller zip)    

1. Use the correct `arm9loaderhax.bin`
    1. Copy `arm9loaderhax.bin` from the Luma3DS `.zip` to the root of your SD card
    2. Reboot holding select and continue

## <a name="ts_safe_a9lh_screen" />SafeA9LHInstaller shows a glitched screen
This happens occasionally, but the reason is unknown. The buttons will still work, but the screen will be glitched looking

1. Follow instructions as normal
    1. Press (Select) and arm9loaderhax will be installed
    2. The console will reboot
        + If the console does not reboot, wait 10 seconds, then power off your 3DS by holding down the power button

## <a name="ts_steelhax" />After System Transfering steelhax, it crashes to a black screen on _the target 3DS_

This is because you selected the wrong version in the steelhax installer.

1. Download the [otherapp payload](https://smealum.github.io/3ds/#otherapp) corresponding to **the target 3DS's** version
    + Ignore the NFIRM being downgraded
    + Use the version displayed in settings
2. Rename the otherapp payload to `steelhax_payload.bin`
3. Copy it `steelhax_payload.bin` to the root of **the target 3DS's** SD Card
    + Overwrite any existing files
4. Hold (B) while launching **Steel Diver: Sub Wars**

## <a name="ts_dsiware" />After doing the DSiWare Downgrade, my hacked DSiWare does not work

3. Reboot **the source 3DS** while holding Start to launch Hourglass9
4. Go to SysNAND Backup/Restore and restore SysNAND from `NANDmin.bin` (the one made before the system transfer)
1. If you don't see the game at all on **the target 3DS**, link the NNID you bought the game with to **the target 3DS** and redownload it
  + You may have to delete the game from "Data Management" in the "System Settings" first
  + If **the target 3DS** is not the latest version, you may have to run ctr-httpwn to access the eShop
2. On **the source 3DS**, do the the save (and `.app` if you are using the `.app` page) injection steps
3. On **the source 3DS**, go to System Settings, "Data Management", "DSiWare", then copy your DSiWare game to your SD card
4. Either put **the source 3DS**'s SD card in **the target 3DS**, or rename the `Nintendo 3DS` on **the target 3DS**'s SD card and copy the `Nintendo 3DS` folder from **the source 3DS**'s SD card to **the target 3DS**'s SD card
5. On **the target 3DS**, go to System Settings, "Data Management", "DSiWare", then copy your DSiWare game to the system
6. Return your SD cards to normal, then continue with the DSiWare Downgrade

## <a name="ts_d9_backup" />Decrypt9 or Hourglass9 won't restore / can't find my NAND backup

1. Make sure you do not have any folder named "Decrypt9" on **the root** of your SD card
3. Try checking your SD card for errors using [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), or [F3X (Mac)](f3x-(mac))
4. Try backing up your SD card files, then formatting it and copying them back
5. Try a different SD card

## <a name="ts_sys_down" />Black screen on SysNAND boot

1. Try booting with your SD card out, and then reinserting it after booting.
    1. Power off your 3DS by holding down the power button.
    2. Take out the SD card.
    3. Power on the 3DS.
    4. When the home menu appears, reinsert your SD card.
    5. If this worked, you should Clear Home Menu's extdata by navigating to the following folder on your SD card: `/Nintendo 3DS/(32 Character ID)/(32 Character ID)/extdata/00000000/`
        + EUR Region: Delete `00000098`
        + JPN Region: Delete `00000082`
        + USA Region: Delete `0000008f`
        + CHN Region: Delete `000000A1`
        + KOR Region: Delete `000000A9`
        + TWN Region: Delete `000000B1`
1. Try booting without any cartridges inserted (including flashcarts)
2. If you have a hardmod and a NAND backup, flash the backup back to SysNAND.
3. Try booting into recovery mode and updating your system.    
    *This probably will not work for an Old 3DS downgraded to 2.1.0*    
    **This will BRICK a New 3DS downgraded to 2.1.0**
    1. Power off your 3DS by holding down the power button.
    2. Hold L+R+A+Up.
    3. Power on the 3DS.
    4. If you enter safe mode, update your 3DS *only if you have an entrypoint for the latest FW version and it is possible to downgrade from it* and attempt the downgrade again.
4. Your 3DS may be bricked. For support, ask for help at [#3dshacks on Rizon IRC](https://www.reddit.com/r/3dshacks/wiki/irc) or [3DS Hacking on Discord](https://discord.gg/MWxPgEp).

## <a name="ts_sys_a9lh" />Black screen on SysNAND boot after installing arm9loaderhax

1. Ensure you have a working payload.
    1. Check for the existence of `arm9loaderhax.bin` in the root of your SD card.
2. Try resetting Luma's config and fix options
    1. Delete `/luma/config.bin` from your SD card
    2. Set your options when it boots
3. Test booting Hourglass9
    1. On Luma3DS, hold Start on boot
4. Try deleting home menu's extdata
    1. Clear Home Menu's extdata by navigating to the following folder on your SD card: `/Nintendo 3DS/(32 Character ID)/(32 Character ID)/extdata/00000000/`
        + EUR Region: Delete `00000098`
        + JPN Region: Delete `00000082`
        + USA Region: Delete `0000008f`
        + CHN Region: Delete `000000A1`
        + KOR Region: Delete `000000A9`
        + TWN Region: Delete `000000B1`
5. Try booting without any cartridges inserted (including flashcarts)
7. Try [this test payload](https://mega.nz/#!YxMiGDhB!VZLv2XPSqFFzEhf4kGMXAdQtSpIGvnp2vu2W1j4o7cc/) .
    1. Rename `/arm9loaderhax.bin`, if it exists, to something else.
    2. Place the `arm9loaderhax.bin` from the archive linked above in your SD root.
    3. Insert your SD card into your 3DS and power on.
    4. Press (A). Your 3DS should power off; this means arm9loaderhax is working and something else is broken; your device is **not** bricked.
8. If you previously downgraded with Gateway, ensure that you are using the latest Luma3DS version (v6.2.3 or higher, at the least)
9. If your NAND is of a version between 3.0.0 and 4.5.0, do the following:
    + Ensure that you are using the latest Luma3DS version (v6.6 or higher, at the least)
    + Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/00000056) and rename it to `firmware.bin`
    + Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/cetk)
    + Copy `firmware.bin` and `cetk` to the `/luma/` folder on your SD card
    + Delete both of these files after updating your 3DS
9. Try following [9.2.0 ctrtransfer](9.2.0-ctrtransfer)
10. Ask for help at [#3dshacks on Rizon IRC](https://www.reddit.com/r/3dshacks/wiki/irc) or [3DS Hacking on Discord](https://discord.gg/MWxPgEp).

## <a name="ts_sys_blue" />Blue screen on boot (bootrom error)

1. Your 3DS is bricked
2. You will need to get a [hardmod](https://gbatemp.net/threads/414498/) or repair / replace the device
