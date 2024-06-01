---
title: "Installation von boot9strap (Soundhax)"
---

{% include toc title="Inhalt" %}

{% capture technical_info %}
<summary><em>Technische Details (optional)</em></summary>

For technical details on the exploits that you will be using on this page, see [here](https://github.com/nedwill/soundhax) (Soundhax) and [here](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Kompatibilitätshinweise

Soundhax (when combined with universal-otherapp) is compatible with versions 1.0.0 through 11.3.0 in all regions.

### Was du brauchst
* The latest release of [Soundhax](http://soundhax.com) *(for your region, console, and version)*
    * If Soundhax appears in your browser as an unplayable video, press Ctrl+S or Cmd+S to save it to your computer
* Die neueste Version vom [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (Direkter Download)
* Die neueste Version von [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (Direkter Download)
* Die neueste Version von [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (die Luma3DS `.zip` Datei)
* Die neueste Version von [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

### Anleitung

#### Abschnitt I - Vorbereitungen

In this section, you will copy the files needed to trigger both Soundhax and universal-otherapp.

1. Power off your console
1. Stecke deine SD-Karte in deinen Computer
1. Kopiere die Soundhax`.m4a` in das Stammverzeichnis der SD-Karte
    + The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
1. Copy `otherapp.bin` to the root of your SD card
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card
1. Erstelle einen Ordner namens `boot9strap` im Stammverzeichnis deiner SD-Karte
1. Kopiere `boot9strap.firm` und `boot9strap.firm.sha` aus der boot9strap `.zip` in den `/boot9strap/`-Ordner auf deiner SD-Karte
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
1. Stecke deine SD-Karte wieder in deine Konsole
1. Power on your console

![]({{ "/images/screenshots/uosoundhax-root-layout.png" | absolute_url }})
{: .notice--info}

![]({{ "/images/screenshots/boot9strap-folder.png" | absolute_url }})
{: .notice--info}

#### Schritt II - Starten von SafeBS9Installer

In this section, you will launch Soundhax through the Nintendo 3DS Sound app, which will use universal-otherapp to launch the boot9strap (custom firmware) installer.

1. Starte die Nintendo 3DS Sound App

    ![]({{ "/images/screenshots/soundhax-welcome.png" | absolute_url }})
    {: .notice--info}

1. Wenn sie noch nie den Nintendo 3DS Sound geöffnet haben, schauen sie sich die Tipps an, wie man es benutzt. Die Tipps erhalten sie wenn sie auf das Vogel-Symbol klicken. Gucken sie alle Tipps an, schließen sie danach die App, und starten sie wieder erneut
    + In dieser Situation würde das Starten von Soundhax sofort dazu führen, dass diese Tipps, bei jedem Start des Nintendo 3DS Sound angezeigt werden, bis dies geschehen ist
1. Gehe zu `/SDCARD` und spiele die Datei "<3 nedwill 2016" ab
    + This may take many (up to 10) tries
    + If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
    + If it freezes, force the console to power off by holding the power button, then try again
    + If you get a different error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-soundhax)

    ![]({{ "/images/screenshots/soundhax-launch.png" | absolute_url }})
    {: .notice--info}

1. Wenn der Exploit erfolgreich war, wird SafeBS9Installer gestartet

#### Schritt III - boot9strap installieren

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}


___

### Fortfahren mit [Setup fertigstellen](finalizing-setup)
{: .notice--primary}
