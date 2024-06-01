---
title: "B9S aktualisieren"
---

{% include toc title="Inhalt" %}

### Lesen erforderlich

Diese Seite ist für Nutzer, die bereits boot9strap nutzen, jedoch ihre Installation auf die aktuellste Version aktualisieren wollen.

### Was du brauchst

* Die neueste Version vom [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (Direkter Download)
* Die neueste Version von [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (Direkter Download)
* Die neueste Version von [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (die Luma3DS `.zip` Datei)

### Anleitung

#### Abschnitt I - Vorbereitungen

Überschreibe für alle Schritte dieses Abschnitts bereits vorhandene Dateien auf der SD-Karte.
{: .notice--info}

1. Stecke deine SD-Karte in deinen Computer
1. Erstelle einen Ordner namens `boot9strap` im Stammverzeichnis deiner SD-Karte
1. Kopiere `boot9strap.firm` und `boot9strap.firm.sha` aus der boot9strap `.zip` in den `/boot9strap/`-Ordner auf deiner SD-Karte
1. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
1. Stecke deine SD-Karte wieder in deine Konsole

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Schritt II - Installation von boot9strap

1. Power on your console
    + Dies sollte den SafeB9SInstaller automatisch starten
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Schritt III - Luma3DS aktualisieren

1. Stecke deine SD-Karte in deinen Computer
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card, replacing the existing file
1. Stecke deine SD-Karte wieder in deine Konsole
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Das Luma3DS Konfigurations-Menü enthält Einstellungen für die Luma3DS Custom Firmware. Viele dieser Einstellungen sind nützlich für Personalisierung und Debugging
    + For the purpose of this guide, these settings will be left on default settings

___

### Fortfahren mit [Setup fertigstellen](finalizing-setup)
{: .notice--primary}
