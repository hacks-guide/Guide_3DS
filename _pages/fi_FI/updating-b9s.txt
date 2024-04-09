---
title: "B9S:n päivittäminen"
---

{% include toc title="Sisällysluettelo" %}

### Tärkeää tietoa

Tämä sivu on boot9strap-käyttäjille, jotka haluavat päivittää asennuksensa viimeisimpään versioon.

### Tarpeet

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

### Ohjeet

#### Vaihe I – Valmistelut

Korvaa mahdolliset olemassa olevat tiedostot SD-kortillasi kaikissa tämän vaiheen kohdissa.
{: .notice--info}

1. Aseta SD-korttisi tietokoneeseesi
1. Luo `boot9strap`-niminen kansio SD-korttisi juureen
1. Kopioi boot9strap-`.zip`-pakkauksesta `boot9strap.firm` ja `boot9strap.firm.sha` SD-korttisi `/boot9strap/`-kansioon
1. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
1. Reinsert your SD card into your console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Vaihe II – Boot9strapin asentaminen

1. Power on your console
    + This should automatically launch SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Vaihe III – Luma3DS:n päivittäminen

1. Aseta SD-korttisi tietokoneeseesi
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card, replacing the existing file
1. Reinsert your SD card into your console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings

___

### Jatka osioon [Asennuksen viimeistely](finalizing-setup)
{: .notice--primary}
