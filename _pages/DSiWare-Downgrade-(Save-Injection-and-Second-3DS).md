---
title: "DSiWare Downgrade (Save Injection and Second 3DS)"
permalink: /dsiware-downgrade-(save-injection-and-second-3ds).html
---

**They are only useful if you already own "Fieldrunners", "Legends of Exidia", "Guitar Rock Tour", or "The Legend of Zelda: Four Swords (Anniversary Edition)" on the source 3DS. Each game has been pulled from the eShop; you must have already gotten them.**
{: .notice--primary}

If you are between versions 11.0.0 and 11.2.0, you must follow this guide to downgrade your NATIVE_FIRM using DSiWare and a second 3DS which has already has a Custom Firmware installed on it in order to dump and restore your NAND.
{: .notice}

If you are below 11.2.0 on either device, then you should do the ctr-httpwn steps (when prompted) on each device under 11.2.0 to allow you to System Transfer with them.
{: .notice--info}

This takes advantage of an oversight which allows DSiWare titles to read and write anywhere in NAND.
{: .notice--info}

This is a currently working implementation of the "FIRM partitions known-plaintext" exploit detailed [here](https://www.3dbrew.org/wiki/3DS_System_Flaws).
{: .notice--info}

This guide will assume the CFW 3DS is running arm9loaderhax and was setup with this guide, but will work (with slight modifications such as doing all SysNAND steps on EmuNAND) on systems running an EmuNAND. Note that the terms EmuNAND and RedNAND refer to slightly different implementations of [the same concept](http://3dbrew.org/wiki/NAND_Redirection).
{: .notice--info}

Your DSiWare's save will be backed up before getting replaced by the hacked save.
{: .notice--info}

{% capture notice-4 %}
This exploit requires you to [System Transfer](http://en-americas-support.nintendo.com/app/answers/detail/a_id/13996/) from a CFW 3DS to a stock 3DS as part of the steps. System Transfers will work in the following directions *only*:    
  + New 3DS -> New 3DS    
  + Old 3DS or 2DS -> Old 3DS or 2DS    
  + Old 3DS or 2DS -> New 3DS    
{% endcapture %}

<div class="notice--warning">{{ notice-4 | markdownify }}</div>

Both systems MUST be from the same region.
{: .notice--warning}

The source 3DS's NNID will be stuck on the target 3DS unless you either system transfer back or call Nintendo! (details in the instructions)
{: .notice--danger}

System Transfers can only be performed once a week.
{: .notice--danger}

#### What you need

* Two 3DS systems
  + **The source 3DS**: the 3DS running some kind of custom firmware (arm9loaderhax or some form of EmuNAND/RedNAND) *on the latest version*
  + **The target 3DS**: the 3DS on stock firmware *between 11.0.0 and 11.2.0*
* Already own (and install) one of the following exploitable DSiWare games (a pirated copy of the game will **not** work) on **the source 3DS**
  + **Fieldrunners**
  + **Legends of Exidia**
  + **Guitar Rock Tour**  
  + **The Legend of Zelda: Four Swords (Anniversary Edition)**  
* An entrypoint from [Homebrew Launcher (SoundHax)](homebrew-launcher-(soundhax)) or [Homebrew Launcher (No Browser)](homebrew-launcher-(no-browser))
* [`4B51394A.zip`](images/4B51394A.zip)
* The latest release of [3ds_dsiwarehax_installer](https://github.com/yellows8/3ds_dsiwarehax_installer/releases)
* The latest release of [3DSident](https://github.com/joel16/3DSident/releases/latest)
* The latest release of [FBI](https://github.com/Steveice10/FBI/releases/latest)
* The latest release of [dgTool](https://github.com/Plailect/dgTool/releases/latest)
* The NFIRM `.zip` corresponding to the device and version of **the target 3DS**:
  + [New 3DS 11.0.0](magnet:?xt=urn:btih:2d13a5ea1570f911bd5c6423e0c30e51d548837a&dn=11.0.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
  + [Old 3DS 11.0.0](magnet:?xt=urn:btih:72393bbd99bc285db84a9cabf39d9b3200058d6a&dn=11.0.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)     
  ~    
  + [New 3DS 11.1.0](magnet:?xt=urn:btih:d7d60c27c18f53bd8508a194656a465f6448bedf&dn=11.1.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)     
  + [Old 3DS 11.1.0](magnet:?xt=urn:btih:0caf9a948a2d8bf23606d641f6628e2baeb983bb&dn=11.1.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)     
  ~        
  + [New 3DS 11.2.0](magnet:?xt=urn:btih:881388a552a1ce9a963d391bf1a023642270991c&dn=11.2.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)     
  + [Old 3DS 11.2.0](magnet:?xt=urn:btih:a479e4ee55efbc18c181d426cd77a34815388151&dn=11.2.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)    
* If **the target 3DS** is below 11.2.0, you will _also_ need the following
  + The latest release of [ctr-httpwn](https://github.com/yellows8/ctr-httpwn/releases/latest)

#### Instructions

##### Section I - Prep Work

1. Create a folder named `files9` on the root of **the source 3DS**'s SD card if it does not already exist
2. **Use a [save manager](https://github.com/J-D-K/JKSM/releases/latest) to backup any saves you care about on the target 3DS (it will be formatted!)**
3. Copy the relevant `public.sav` from the `/dsiware/(8 Character ID)/` folder in the 3ds_dsiwarehax_installer `.zip` to the root of **the source 3DS**'s SD card
  + **Fieldrunners USA Region**: `4b464445`
  + **Fieldrunners EUR Region**: `4b464456`
  + **Legends of Exidia USA Region**: `4b4c4545`
  + **Legends of Exidia EUR Region**: `4b4c4556`
  + **Legends of Exidia JPN Region**: `4b4c454a`
  + **Guitar Rock Tour EUR Region**: `4b475256`
  + **Guitar Rock Tour USA Region**: `4b475245`
  + **The Legend of Zelda: Four Swords (Anniversary Edition) EUR Region**: `4b513956`   
  + **The Legend of Zelda: Four Swords (Anniversary Edition) USA Region**: `4b513945`    
  + If you are using **The Legend of Zelda: Four Swords (Anniversary Edition) JPN Region**, copy `public.sav` from the `4B51394A` folder in `4B51394A.zip` to the root of your SD card.
4. Reinsert **the source 3DS**'s SD card
5. On **the source 3DS**, hold (Start) on boot to launch Hourglass9
6. Go to SysNAND Options, then SysNAND Backup/Restore, then backup **(min size)** SysNAND to `NANDmin.bin`
7. Press (Select) on the main menu to eject **the source 3DS**'s SD card, then put it in your computer
8. Copy `NANDmin.bin` and `NANDmin.bin.sha` from the `/files9/` folder on your SD card to a safe location
  + Make backups in multiple locations
  + This backup will save you from a brick if anything goes wrong in the future
  + **Your backup should match one of the sizes on [this](nand-size) page; if it does not, you should delete it and make a new one!**
9. Put **the target 3DS**'s SD card into your computer
10. **Backup every file on both 3DS's SD cards to two separate folders on your computer (keep track of which is which)!**
11. Reinsert each SD card back into their corresponding 3DS
12. Press (Start) to reboot

##### Section II - Backup DSiWare

After completing the entire guide, you can use this backup to restore your DSiWare saves by deleting the DSiWare from your System Memory and copying it from your SD Card.
{: .notice--info}

This backup can only be used on this NAND. If you format your 3DS or restore another NAND (specifically if `movable.sed` is ever modified), it will become unusable.
{: .notice--info}

1. Go to System Settings, then "Data Management", then "DSiWare" on **the source 3DS**
2. Copy any DSiWare games that are already on the SD Card back to the System Memory
3. Copy the DSiWare game you intend to use to the SD Card
4. Exit System Settings

##### Section III - Installing the save

2. Launch FBI on **the source 3DS**
3. Navigate to `SD`
4. Press (A) on `public.sav` and copy it
5. Press (B) to get back to the main menu
6. Navigate to `TWL NAND` -> `title` -> `00030004`
7. Navigate to the folder for your game and region:
  + **Fieldrunners USA Region**: `4b464445`
  + **Fieldrunners EUR Region**: `4b464456`
  + **Legends of Exidia USA Region**: `4b4c4545`
  + **Legends of Exidia EUR Region**: `4b4c4556`
  + **Legends of Exidia JPN Region**: `4b4c454a`
  + **Guitar Rock Tour EUR Region**: `4b475256`
  + **Guitar Rock Tour USA Region**: `4b475245`    
  + **The Legend of Zelda: Four Swords (Anniversary Edition) EUR Region**: `4b513956`   
  + **The Legend of Zelda: Four Swords (Anniversary Edition) USA Region**: `4b513945`    
9. Navigate to the `data` folder
8. Press (A) on the existing `public.sav` and delete it
9. Press (A) on the current directory and paste `public.sav`
10. Press (B) to get back to the main menu
11. Press (Start) to exit
3. Launch your DSiWare game on **the source 3DS**
4. Test if the save is functional
  + **Fieldrunners**: Touch the 'Scores' button at the main menu
  + **Legends of Exidia**: After pressing (A) or (Start) at the two title screens, select the first save slot and press continue
  + **Guitar Rock Tour**: Scroll down and go to High-Scores -> Drums -> Easy    
  + **The Legend of Zelda: Four Swords (Anniversary Edition)**: Just start the game
  + If your game has an error about `boot.nds` or a white screen, **then the exploit has been successful**
  + If your game behaves normally and does not give you this error, then you should stop and figure out what went wrong
  + If you get a black screen, [follow this troubleshooting guide](troubleshooting#twl_broken)

##### Section IV - ctr-httpwn

**This section is only required if _the target 3DS_ is under 11.2.0.**

**This will allow you to system transfer on versions other than the latest.**

1. Copy and merge the `3ds` folder from the ctr-httpwn `.zip` to **the target 3DS**'s SD card
2. Reinsert your SD card into **the target 3DS**
2. Launch the homebrew launcher on the device using [Homebrew Launcher (No Browser)](homebrew-launcher-(no-browser))
  + **New 3DSs on versions 10.7.0 and 11.0.0 can use [Homebrew Launcher (Browser)](homebrew-launcher-(browser)) instead**
  + **Ensure menuhax is not installed, or you won't be able to return to Home Menu from the homebrew launcher**
3. Launch ctr-httpwn on **the target 3DS**
4. Press (A) to continue
5. Press (Start) to exit ctr-httpwn
6. Press (Start) to open the homebrew launcher exit menu
7. Press (X) to Return to Home Menu (no reboot)
  + You may get an "Error has occurred" message with the option to continue. This is fine, just hit (A)
8. Continue to the next section **without rebooting**
  + **the target 3DS** has been temporarily patched to allow network functions (such as System Transfer) without running the latest system version
  + Keep in mind that exiting the System Settings will reboot the system
  + If the system is rebooted, you'll have to re-run ctr-httpwn before System Transfer will work

##### Section V - System Transfer

1. **Backup every file on both 3DS's SD cards to two separate folders on your computer (keep track of which is which)!**
2. Reinsert each SD card back into their corresponding 3DS
4. If **the target 3DS** has a Nintendo Network ID on it, you must format the device using System Settings:
  + Go to the last page of "Other Settings" and select "Format System Memory", then follow all instructions
5. Read the following:
  + Your CFW 3DS = the source 3DS = "Source System"
  + Your Stock 3DS = the target 3DS = "Target System"
  + **Move DSiWare titles if prompted!**
  + Do **NOT** delete the source system's SD card contents if prompted
  + Make sure neither device's battery dies during the transfer
  + 2DS/Old 3DS (source) to New 3DS (target) only - if asked which method you wish to use to transfer the SD card data:
    + **Do NOT** choose the "Low-Capacity microSD Card Transfer" or minimal option (option 2), it will only transfer tickets and likely will not transfer the DSiWare save.
    + Fast Method: If you have the ability to move the data from the SD card (source) to the microSD card (target), when prompted use the "PC-Based Transfer" option (option 3).
    + Slowest Method: If you don't have the ability to move the data on a PC use the **full** "Wireless Transfer" option (option 1).
6. Go to [this link](http://en-americas-support.nintendo.com/app/answers/detail/a_id/227/) and follow Nintendo's official instructions for System Transferring from one system to another while keeping in mind what you just read

##### Section VI - Restoring the source 3DS

1. On **the source 3DS**, complete initial setup
2. Do one of the following *(or neither if you don't mind __the source 3DS__'s NNID being nonfunctional)*
    + Do the rest of the sections and then the full guide on **the target 3DS**, then wait one week, then System Transfer from **the target 3DS** back to **the source 3DS** *(remember you cannot transfer back from a New 3DS to an Old 3DS)*
    + Call Nintendo and tell them you no longer have access to the device that your NNID is linked to (which is **the target 3DS** in this case), and would like it linked to a different device (which is **the source 3DS** in this case)
3. Reboot **the source 3DS** while holding Start to launch Hourglass9
4. Go to SysNAND Backup/Restore and restore SysNAND from `NANDmin.bin`

##### Section VII - Backing up the target 3DS's NFIRM

1. Copy the dgTool `boot.nds` to the root of **the target 3DS**'s SD card
1. Create a folder named `dgTool` on the root of **the target 3DS**'s SD card if it does not already exist
3. Copy the contents of the NFIRM `.zip` to the `dgTool` folder on the root of **the target 3DS**'s SD card
3. Launch your DSiWare game on **the target 3DS**
4. Launch dgTool using your DSiWare game
  + **Fieldrunners**: Touch the 'Scores' button at the main menu
  + **Legends of Exidia**: After pressing (A) or (Start) at the two title screens, select the first save slot and press continue
  + **Guitar Rock Tour**: Scroll down and go to High-Scores -> Drums -> Easy
  + **The Legend of Zelda: Four Swords (Anniversary Edition)**: Just start the game
  + If your game does not have the hacked save file installed, [follow this troubleshooting guide](troubleshooting#ts_dsiware)
5. Select "Dump f0f1" to backup **the target 3DS**'s NFIRM
  + This will take a while
6. Make note of the NFIRM backup's location
7. Exit dgTool
  + You may have to force power off by holding the power button
8. Put your SD card in your computer, then copy `F0F1_N3DS.bin` or `F0F1_O3DS.bin` (depending on your device) to a safe location
  + Make backups in multiple locations
  + This backup will save you from a brick if anything goes wrong in the future

##### Section VIII - Flashing the target 3DS's NFIRM

**Never downgrade with dgTool on a device that already has arm9loaderhax installed or you will BRICK!**

1. Launch your DSiWare game on **the target 3DS**
4. Launch dgTool using your DSiWare game
  + **Fieldrunners**: Touch the 'Scores' button at the main menu
  + **Legends of Exidia**: After pressing (A) or (Start) at the two title screens, select the first save slot and press continue
  + **Guitar Rock Tour**: Scroll down and go to High-Scores -> Drums -> Easy
  + **The Legend of Zelda: Four Swords (Anniversary Edition)**: Just start the game
3. Select "Downgrade FIRM to 10.4" and confirm to flash the 10.4.0 NFIRM bin to **the target 3DS**
4. Exit dgTool
  + You may have to force power off by holding the power button
5. Reboot

##### Section IX - Exploit verification

1. Copy and merge the `3ds` folder from the 3DSident `.zip` to **the target 3DS**'s SD card
2. Reinsert your SD card into **the target 3DS**
3. Launch the homebrew launcher on **the target 3DS** using [Homebrew Launcher (No Browser)](homebrew-launcher-(no-browser))
4. Launch 3DSident
5. Verify that the following:
  + **Kernel version**: 2.50-11
  + **FIRM version**: 2.50-11
  + If either of these do not display the versions above, something has gone wrong and you should try again from the beginning

**The target 3DS**'s version number will *not* have changed in the settings.
{: .notice--info}

Continue to [9.2.0 Downgrade](9.2.0-downgrade)
{: .notice--primary}
