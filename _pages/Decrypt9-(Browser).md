---
title: "Decrypt9 (Browser)"
permalink: /decrypt9-(browser).html
---

The first thing this guide will do is get you running Decrypt9, which is a multipurpose toolkit that will allow us to install the version 2.1.0, which contains a vulnerability that is needed for further exploitation of the system.
{: .notice}

If you have already hacked your 3DS before and have a EmuNAND based CFW setup, this guide deals exclusively with SysNAND and you should follow all instructions from within or applying to SysNAND. Note that the terms EmuNAND and RedNAND refer to slightly different implementations of [the same concept](http://3dbrew.org/wiki/NAND_Redirection).
{: .notice--info}

#### What you need

* The latest release of [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Instructions

1. Create a folder named `files9` on the root of your SD card if it does not already exist
2. Copy `Launcher.dat` and `Decrypt9WIP.dat` from the Decrypt9WIP `.zip` to the root of your SD card
3. Reinsert your SD card into your 3DS
4. Open the browser and go to one of the following URLs on your 3DS
    + `https://dukesrg.github.io/?Decrypt9WIP.dat`
    + `http://go.gateway-3ds.com/`
    + `http://www.reboot.ms/3ds/load.html?Launcher.dat`
    + `http://dukesrg.dynu.net/3ds/rop?GW17567.dat&Launcher.dat`
    + Make sure to try each URL if the first one doesn't work (some versions cannot use the first one, and some versions cannot use the last three)
    + If you get an error, [follow this troubleshooting guide](troubleshooting#ts_browser)
5. If the exploit was successful, you will have booted into Decrypt9

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer).
{: .notice--primary}
