---
title: "DSiWare Downgrade (Save Injection)"
permalink: /dsiware-downgrade-(save-injection).html
---

If you are on version 11.0.0 or 11.1.0, you must follow this guide to downgrade your NATIVE_FIRM using DSiWare
{: .notice}

This takes advantage of an oversight which allows DSiWare titles to read and write anywhere in NAND.
{: .notice--info}

Be prepared to wait 20 minutes (New 3DS) to an hour (Old 3DS). Slowhax (waithax) is named so for a reason.
{: .notice--info}

This is a currently working implementation of the "FIRM partitions known-plaintext" exploit detailed [here](https://www.3dbrew.org/wiki/3DS_System_Flaws).
{: .notice--info}

Your DSiWare's save will be backed up before getting replaced by the hacked save.
{: .notice--info}

#### What you need

* Already own (and install) one of the following exploitable DSiWare games installed on your 3DS *(you must have already installed one; they have all been pulled from the eShop)*
  + **Fieldrunners**
  + **Legends of Exidia**
  + **Guitar Rock Tour**  
  + **The Legend of Zelda: Four Swords (Anniversary Edition)**  
* An entrypoint from [Homebrew Launcher (SoundHax)](homebrew-launcher-(soundhax)) or [Homebrew Launcher (No Browser)](homebrew-launcher-(no-browser))
* [`4B51394A.zip`](images/4B51394A.zip)
* The latest release of [3ds_dsiwarehax_installer](https://github.com/yellows8/3ds_dsiwarehax_installer/releases/latest)
* The latest release of [waithax](https://github.com/Mrrraou/waithax/releases/latest)
* The latest release of [3DSident](https://github.com/joel16/3DSident/releases/latest)
* The latest release of [dgTool](https://github.com/Plailect/dgTool/releases/latest)
* The Homebrew [Starter Kit](http://smealum.github.io/ninjhax2/starter.zip)
* The NFIRM `.zip` corresponding to the device and version of **the target 3DS**:
  + [New 3DS 11.0.0](magnet:?xt=urn:btih:2d13a5ea1570f911bd5c6423e0c30e51d548837a&dn=11.0.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
  + [Old 3DS 11.0.0](magnet:?xt=urn:btih:72393bbd99bc285db84a9cabf39d9b3200058d6a&dn=11.0.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)     
  ~    
  + [New 3DS 11.1.0](magnet:?xt=urn:btih:d7d60c27c18f53bd8508a194656a465f6448bedf&dn=11.1.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)     
  + [Old 3DS 11.1.0](magnet:?xt=urn:btih:0caf9a948a2d8bf23606d641f6628e2baeb983bb&dn=11.1.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)     

#### Instructions

##### Section I - Prep Work

1. Copy _the contents of_ the `starter.zip` to the root of your SD card, replace existing files
  + This will ensure that the Homebrew Launcher is up to date; older versions will freeze when your try to launch 3ds_dsiwarehax_installer
4. Copy and merge the `3ds` folder from the 3ds_dsiwarehax_installer `.zip` to the root of your SD card
4. Copy the `4B51394A` folder from `4B51394A.zip` to the `/3ds/3ds_dsiwarehax_installer/dsiware/` folder on your SD card.
5. Copy and merge the `3ds` folder from the 3DSident `.zip` to your SD card
5. Copy `waithax.3dsx` to the `/3ds/` folder on your SD card
6. Copy the dgTool `boot.nds` to the root of your SD card
1. Create a folder named `dgTool` on the root of your SD card if it does not already exist
3. Copy the contents of the NFIRM `.zip` to the `dgTool` folder on the root of your SD card
4. Reinsert your SD card into your 3DS

##### Section II - Backup DSiWare

After completing the entire guide, you can use this backup to restore your DSiWare saves by deleting the DSiWare from your System Memory and copying it from your SD Card.
{: .notice--info}

This backup can only be used on this NAND. If you format your 3DS or restore another NAND (specifically if `movable.sed` is ever modified), it will become unusable.
{: .notice--info}

1. Go to System Settings, then "Data Management", then "DSiWare"
3. Copy the DSiWare game you intend to use to the SD Card
4. Exit System Settings

##### Section III - waithax

1. Get into the Homebrew Launcher using your entrypoint
2. Launch waithax
3. Wait
  + On New 3DS, this will take about 20 minutes (due to a bug, this can take the same time as an Old 3DS for some systems)
  + On Old 3DS, this will take about an hour
4. Once it's done, press (Start) to exit
5. Launch 3ds_dsiwarehax_installer
6. Select the DSiWare game you want to install the exploit on
7. Once it's done, press (A) to exit
8. Press (Start) to open the homebrew launcher exit menu
9. Press (A) to exit

##### Section IV - Backing up NFIRM

3. Launch your DSiWare game
4. Launch dgTool using your DSiWare game
  + **Fieldrunners**: Touch the 'Scores' button at the main menu
  + **Legends of Exidia**: After pressing (A) or (Start) at the two title screens, select the first save slot and press continue
  + **Guitar Rock Tour**: Scroll down and go to High-Scores -> Drums -> Easy
  + **The Legend of Zelda: Four Swords (Anniversary Edition)**: Just start the game
  + If your game does not have the hacked save file installed, restart from the beginning
5. Select "Dump f0f1" to backup your NFIRM
  + This will take a while
6. Make note of the NFIRM backup's location
7. Exit dgTool
  + You may have to force power off by holding the power button
8. Put your SD card in your computer, then copy `F0F1_N3DS.bin` or `F0F1_O3DS.bin` (depending on your device) to a safe location
  + Make backups in multiple locations
  + This backup will save you from a brick if anything goes wrong in the future

##### Section V - Flashing NFIRM

**Never downgrade with dgTool on a device that already has arm9loaderhax installed or you will BRICK!**
{: .notice--danger}

1. Launch your DSiWare game on
4. Launch dgTool using your DSiWare game
  + **Fieldrunners**: Touch the 'Scores' button at the main menu
  + **Legends of Exidia**: After pressing (A) or (Start) at the two title screens, select the first save slot and press continue
  + **Guitar Rock Tour**: Scroll down and go to High-Scores -> Drums -> Easy
  + **The Legend of Zelda: Four Swords (Anniversary Edition)**: Just start the game
3. Select "Downgrade FIRM to 10.4" and confirm to flash the 10.4.0 NFIRM bin
4. Exit dgTool
  + You may have to force power off by holding the power button
5. Reboot

##### Section VI - Exploit verification

2. Reinsert your SD card into your 3DS
3. Launch the homebrew launcher on using your entrypoint
4. Launch 3DSident
5. Verify that the following:
  + **Kernel version**: 2.50-11
  + **FIRM version**: 2.50-11
  + If either of these do not display the versions above, make sure you used the correct NFIRM zip and try flashing NFIRM again
5. Press any button to exit back to the Homebrew Launcher

Your version number will *not* have changed in the settings.
{: .notice--info}

Continue to [9.2.0 Downgrade](9.2.0-downgrade)
{: .notice--primary}
