---
title: "Decrypt9 (Homebrew Launcher)"
permalink: /decrypt9-(homebrew-launcher).html
---

If you have already hacked your 3DS before and have a EmuNAND based CFW setup, this guide deals exclusively with SysNAND and you should follow all instructions from within or applying to SysNAND. Note that the terms EmuNAND and RedNAND refer to slightly different implementations of [the same concept](http://3dbrew.org/wiki/NAND_Redirection).
{: .notice--info}

#### What you need

* The latest release of [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Instructions

2. Create a folder named `files9` on the root of your SD card if it does not already exist
3. Copy the `Decrypt9WIP` folder from the Decrypt9WIP `.zip` to `/3ds/` on your SD card
3. Reinsert your SD card into your 3DS
4. Enter the homebrew launcher
4. Open Decrypt9WIP **(This can sometimes take a few tries)**
    + If you cannot launch Decrypt9WIP after many tries, you most likely have a partial downgrade and should refer to the [9.2.0 Downgrade](9.2.0-downgrade) page
4. Go to "SysNAND Options", then "SysNAND Backup/Restore"
5. Perform a "NAND Backup (min size)" and backup your NAND to `NANDmin.bin`
6. Return to the Main Menu

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer)    
{: .notice--primary}
