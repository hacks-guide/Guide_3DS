---
title: "Installing boot9strap (safecerthax)"
---

{% include toc title="Table of Contents" %}

### Required Reading

safecerthax is compatible with all Old 3DS and Old 2DS devices in all regions.

If your (Right/Left Shoulder), (D-Pad Up) or (A) buttons do not work, or your ISP is rerouting DNS changes, you will need to use an alternate method, like [Installing boot9strap (Browser)](installing-boot9strap-(browser)).
{: .notice--warning}

This exploit will not work on the New 3DS, New 3DS XL, or New 2DS XL. Please ensure that the device you are modding is an Old 3DS, Old 3DS XL, or Old 2DS before continuing.
{: .notice--info}

### What You Need

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/latest)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/latest) *(`boot9strap-1.3.zip`; not the `devkit` file, not the `ntr` file)*
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) 

### Instructions

#### Section I - Prep Work
1. Power off your device
1. Insert your SD card into your computer
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card
1. Create a folder named `boot9strap` on the root of your SD card
1. Copy `boot9strap.firm` and `boot9strap.firm.sha` from the boot9strap `.zip` to the `boot9strap` folder on your SD card
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
1. Reinsert your SD card into your device
1. Power on your device

#### Section II - safecerthax DNS
1. Launch the System Settings application
1. Navigate to `Internet Settings` -> `Connection Settings`
1. Click on your network connection slot and navigate to `Change Settings` -> `Next Page (right arrow)` -> `DNS`
1. Set "Auto-Obtain DNS" to "No", then click `Detailed Setup`
1. Set both the Primary DNS and Secondary DNS to `054.038.133.070`
1. Click OK, then click Save
1. When prompted, click "Test" to perform the connection test
	+ The test should succeed
1. Power off your device

#### Section III - safecerthax
1. With your device still powered off, hold the following buttons: (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A), then press (Power)
  + Keep holding the buttons until the device boots into Safe Mode
1. Press "OK" to accept the update
  + There is no update. This is part of the exploit
1. Press "I accept" to accept the terms and conditions
  + The update should fail and an error message should appear
  + If the update does not fail, it is possible that your ISP is rerouting DNS changes. Try another internet connection, or follow an alternate method, like [Installing boot9strap (Browser)](installing-boot9strap-(browser)).
1. Press "OK" to close the error message
1. If the exploit was successful, you will have booted into SafeB9SInstaller
  + If the console freezes or crashes, force power off the console, then retry this section
 
#### Section IV - Installing boot9strap

1. Wait for all safety checks to complete
1. When prompted, input the key combo given to install boot9strap
1. Once it has completed, press (A) to reboot your device

#### Section V - Configuring Luma3DS

1. Your device should have rebooted into the Luma3DS configuration menu
  + If you get a black screen, [follow this troubleshooting guide](troubleshooting#black-screen-on-sysnand-boot-after-installing-boot9strap)
1. Use the (A) button and the D-Pad to turn on the following:
  + **"Show NAND or user string in System Settings"**
1. Press (Start) to save and reboot
  
#### Section VI - Restoring default DNS
1. Launch the System Settings application
1. Navigate to `Internet Settings` -> `Connection Settings`
1. Click on your network connection slot and navigate to `Change Settings` -> `Next Page (right arrow)` -> `DNS`
1. Set "Auto-Obtain DNS" to "Yes"
1. Click OK, then click Save
1. When prompted, click "Test" to perform the connection test
	+ The test should succeed
1. Power off your device

___

### Continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}
