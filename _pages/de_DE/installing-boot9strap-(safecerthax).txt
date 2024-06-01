---
title: "Installing boot9strap (safecerthax)"
---

{% include toc title="Inhalt" %}

{% capture technical_info %}
<summary><em>Technische Details (optional)</em></summary>
For technical details on the exploit that you will be using on this page, see [here](https://github.com/MrNbaYoh/safecerthax).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Kompatibilitätshinweise

safecerthax is compatible with all Old 3DS and Old 2DS consoles in all regions on system versions 1.0.0 through 11.14.0.

This exploit will not work on the New 3DS, New 3DS XL, or New 2DS XL. Please ensure that the console you are modding is an Old 3DS, Old 3DS XL, or Old 2DS before continuing.
{: .notice--info}

### Was du brauchst

* Die neueste Version vom [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (Direkter Download)
* Die neueste Version von [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (Direkter Download)
* Die neueste Version von [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (die Luma3DS `.zip` Datei)

### Anleitung

#### Section I - Hardware Button Check

In this section, you will see whether your shoulder buttons are working on your console. This will determine whether your console is compatible with this method.

1. Power on your console
1. Once you see the HOME Menu, press the (Left Shoulder) and (Right Shoulder) buttons at the same time
    + The camera applet should appear
1. Power off your console

If the camera did NOT appear, you cannot follow this method. If this is the case, use [Installing boot9strap (MSET9)](installing-boot9strap-(mset9)) instead.
{: .notice--warning}

#### Abschnitt II - Vorbereitungen

In this section, you will copy the files needed to trigger the safecerthax exploit.

1. Stecke deine SD-Karte in deinen Computer
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card
    + The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
1. Erstelle einen Ordner namens `boot9strap` im Stammverzeichnis deiner SD-Karte
1. Kopiere `boot9strap.firm` und `boot9strap.firm.sha` aus der boot9strap `.zip` in den `/boot9strap/`-Ordner auf deiner SD-Karte
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
1. Stecke deine SD-Karte wieder in deine Konsole
1. Power on your console

#### Section III - safecerthax proxy

In this section, you will change your Internet connection settings to use a proxy network designed to exploit the System Update feature of your console.

{% include_relative include/addproxy.txt %}
1. Power off your console

#### Section IV - safecerthax

In this section, you will enter Safe Mode (a feature available on all 3DS family consoles) where safecerthax will be triggered, which will launch you into the boot9strap (custom firmware) installer.

1. With your console still powered off, hold the following buttons: (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A), and while holding these buttons together, power on your console
    + Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
1. Drücke "OK" um das System-Update zu bestätigen
    + Es gibt kein Update. Dies ist ein Teil des Exploits
1. Drücke "Akzeptieren", um die Nutzungsbedingungen und Warnhinweise zu akzeptieren
1. Das Update wird irgendwann mit dem Fehlercode `003-1099` fehlschlagen. Dies ist so vorgesehen
1. Press "OK" to close the error message
1. Wenn der Exploit erfolgreich war, wird SafeBS9Installer gestartet
    + If the console freezes or crashes, force power off the console, then retry this section

#### Section V - Installing boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}

#### Section VI - Restoring default proxy

{% include_relative include/rmproxy.txt %}

___

### Fortfahren mit [Setup fertigstellen](finalizing-setup)
{: .notice--primary}