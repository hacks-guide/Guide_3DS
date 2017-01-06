---
title: "Hardmod Downgrade"
permalink: /hardmod-downgrade.html
---

**If you are on 11.0.0 or 11.1.0, do NOT update to 11.2.0. A new update will be coming soon that allows for DSiWare NFIRM Downgrading _without_ a second 3DS or hardmod for versions under 11.2.0.**
{: .notice--primary}

The version of autofirm used in this guide was modified from [Reboot.ms](https://www.reboot.ms/forum/threads/2403/)'s autofirm which was modified from '[Raugo](https://gbatemp.net/members/356694/)'s original autofirm ([with permission](http://archive.is/KOrWp)).
{: .notice}  

An excellent guide to getting a hardmod can be found [here](https://gbatemp.net/threads/414498/). If you are on a New 3DS, read [this](https://github.com/Plailect/Guide/issues/681) before hardmodding.
{: .notice--info}

This is a currently working implementation of the "FIRM partitions known-plaintext" exploit detailed [here](https://www.3dbrew.org/wiki/3DS_System_Flaws).
{: .notice--info}

This will work on New 3DS, Old 3DS, and 2DS.
{: .notice--success}

#### What you need

{% include addfiles.html %}   

#### Instructions

##### Section I - NAND modification

1. Extract the autofirm `.zip` to a folder called `autofirm`
2. Place a copy of your NAND backup (named `nand.bin`) in `/autofirm/` folder
3. Copy the contents of the NFIRM `.zip` to the `/autofirm/source/firmwares/` folder
4. Run `autofirm.bat` and select which device and version the NAND backup is for
5. Wait while the script runs
6. If everything worked, then your original NAND will have been renamed to `backup_nand.bin` and you will have a modified `nand.bin` containing the 10.4.0 NATIVE_FIRM
  + Keep `backup_nand.bin`, it will be used later
7. Flash this `nand.bin` to your device with your hardmod

##### Section II - Exploit verification

1. Copy and merge the `3ds` folder from the 3DSident `.zip` to your device's SD card
2. Reinsert your SD card into your 3DS
3. Use [Homebrew Launcher (SoundHax)](homebrew-launcher-(soundhax)) to launch the homebrew launcher on the device
4. Launch 3DSident
5. Verify that the following:
  + **Kernel version**: 2.50-11
  + **FIRM version**: 2.50-11
  + If either of these do not display the versions above, something has gone wrong and you should try again from the beginning

Your version number will *not* have changed in the settings.
{: .notice--info}

Continue to [Decrypt9 (Homebrew Launcher)](decrypt9-(homebrew-launcher)).
{: .notice--primary}
