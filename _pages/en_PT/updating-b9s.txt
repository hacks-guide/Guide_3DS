---
title: "Updatin' B9S"
---

{% include toc title="Table of Contents" %}

### Required Reading

'Tis page be fer existin' boot9strap users to be updatin' their installation 'o boot9strap to th' latest version.

### What You Need

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

### Instructions

#### Section I - Prep Work

Fer all steps in 'tis section, overwrite any existin' files on ye SD card.
{: .notice--info}

1. Insert ye SD card into ye computer
1. Create a folder named `boot9strap` on th' root 'o ye SD card
1. Copy `boot9strap.firm` 'n `boot9strap.firm.sha` from th' boot9strap `.zip` to th' `/boot9strap/` folder on ye SD card
1. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
1. Reinsert your SD card into your console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Section II - Installing boot9strap

1. Power on your console
    + This should automatically launch SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Section III - Update Luma3DS

1. Insert ye SD card into ye computer
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card, replacing the existing file
1. Reinsert your SD card into your console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings

___

### Continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}
