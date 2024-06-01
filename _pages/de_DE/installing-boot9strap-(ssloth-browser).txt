---
title: "Installing boot9strap (SSLoth-Browser)"
---

{% include toc title="Inhalt" %}

{% capture technical_info %}
<summary><em>Technische Details (optional)</em></summary>

In order to exploit the Browser application, we need to bypass the browser version check, which is designed to disallow the use of the browser without updating to the latest system version.

A public proxy server is available, which, with the help of the SSLoth exploit, can bypass this check.

Once the bypass is active, an exploit webpage will be accessible which will do the rest of the job.

For technical details on the exploits that you will be using on this page, see [here](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) and [here](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Kompatibilitätshinweise

SSLoth allows users on version 11.13.0 and below to bypass the browser version check, allowing the use of new-browserhax or old-browserhax (compatible with versions 11.4.0 through 11.13.0 in all regions), which can then be used in conjunction with universal-otherapp.

### Was du brauchst

* Die neueste Version vom [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (Direkter Download)
* Die neueste Version von [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (Direkter Download)
* Die neueste Version von [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (die Luma3DS `.zip` Datei)
* Die neueste Version von [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

#### Abschnitt I - Vorbereitungen

In this section, you will copy the files needed to trigger both browserhax and universal-otherapp.

1. Power off your console
1. Stecke deine SD-Karte in deinen Computer
1. Copy `otherapp.bin` to the root of your SD card and rename it to `arm11code.bin`
    + The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
    + If you do not see the `.bin` extension, do not add it to the end of the filename
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card
1. Erstelle einen Ordner namens `boot9strap` im Stammverzeichnis deiner SD-Karte
1. Kopiere `boot9strap.firm` und `boot9strap.firm.sha` aus der boot9strap `.zip` in den `/boot9strap/`-Ordner auf deiner SD-Karte
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
1. Stecke deine SD-Karte wieder in deine Konsole
1. Power on your console

#### Section II - SSLoth

In this section, you will change your Internet connection settings to use a proxy network designed to bypass the browser version check, allowing the browser to function without a system update. This will allow you to access the browser exploit webpage in the next section.

{% include_relative include/addproxy.txt %}
1. Press "Back" twice, then "Close" to go back to the HOME Menu

#### Section III - Launching SafeB9SInstaller

In this section, you will visit the browser exploit webpage, which will use universal-otherapp to launch the boot9strap (custom firmware) installer.

1. On the HOME Menu, press the Left and Right shoulder buttons at the same time to open the camera
    + If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/nbhax/`)
1. Tap the QR code button and scan [this QR code](http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax&qzone=1&margin=0&size=400x400&ecc=L)
    + If you get a crash or an error code, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)
    + If you get a security certificate warning, press (A) to allow the connection
1. Tap the "PROCEED TO HAXX" button
1. Wenn der Exploit erfolgreich war, wird SafeBS9Installer gestartet
    + If you get an error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)

#### Section IV - Installing boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

#### Section V - Restoring default proxy

{% include_relative include/rmproxy.txt %}

{% include_relative include/luma3ds-installed-note.txt %}
___

### Fortfahren mit [Setup fertigstellen](finalizing-setup)
{: .notice--primary}