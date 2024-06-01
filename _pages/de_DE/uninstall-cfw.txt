---
title: "CFW deinstallieren"
---

{% include toc title="Inhalt" %}

### Lesen erforderlich

This will completely remove CFW from your console, including boot9strap and Luma3DS, for the purpose of restoring the console to stock.

Any unsigned (illegitimate) games will be rendered unusable and will be removed during this process. Use a [save manager](https://github.com/FlagBrew/Checkpoint/releases/latest) to back up any saves that you care about.

{% capture notice-6 %}
If you're removing CFW because:

* You want to re-install it
* You want to change SD cards
* Your SD card was lost or corrupted
* One of your games is broken
* One of your system applications is broken
* Your console is unable to boot to HOME Menu

<u><strong>STOP!!!</strong></u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u><strong>BRICK</strong></u> your console. A better idea would be to ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).
{% endcapture %}
<div class="notice--danger">{{ notice-6 | markdownify }}</div>

{% capture notice-6 %}
If you have done ANY of the following:
* [Changed the region](region-changing) of the console
* Installed a custom keyboard
* Installed a custom HOME Menu (*not* a custom theme)
* Manually changed the encryption key (`movable.sed`) of the console
* Unbanned the console

then uninstalling CFW <u><strong>WILL BRICK YOUR CONSOLE</strong></u>. If this applies to you, [restore a clean NAND backup](godmode9-usage#restoring-a-nand-backup) before continuing.
{% endcapture %}
<div class="notice--danger">{{ notice-6 | markdownify }}</div>

These instructions will only work on consoles with a Luma3DS version of 8.0 or higher. If you have an older version of Luma, you must upgrade your setup before following these instructions. Follow [this page](checking-for-cfw) to find your upgrade instructions.
{: .notice--warning}

### Was du brauchst

* Die neueste Version von [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (die Luma3DS `.zip` Datei)
* Die neuste Version von GodMode9 (siehe https://github.com/d0k3/GodMode9/releases/latest) (die GodMode9.`zip` Datei)
* The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
* [safety_test.gm9]({{ base_path }}/gm9_scripts/safety_test.gm9)

### Anleitung

#### Abschnitt I - Vorbereitungen
1. Power off your console
1. Stecke deine SD-Karte in deinen Computer
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card
1. Kopiere `GodMode9.firm`von der `GodMode9.zip`-Datei nach /luma/payloads/ auf deiner SD-Karte
1. Kopiere den Ordner `gm9` aus der GodMode9 `.zip` in das Stammverzeichnis deiner SD-Karte
1. Copy `DSiWareUninstaller.3dsx` to the `/3ds/` folder on your SD card
1. Copy `safety_test.gm9` to the `/gm9/scripts/` folder on your SD card
1. Stecke deine SD-Karte wieder in deine Konsole

#### Section II - DS Mode Tests
The purpose of this section is to check whether built-in DS mode applications will continue to work once CFW is uninstalled. If you skip this section, DS mode or its functions may be inaccessible until CFW is reinstalled.

##### DS Connection Settings Test
1. Power on your console
1. Launch System Settings on your console
1. Navigate to `Internet Settings` -> `Nintendo DS Connection Settings`, then click OK
1. You should boot into the Nintendo DS Connection Setup menu
    + If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
1. Power off your console

##### DS Download Play Test
1. Power on your console
1. Launch the Download Play application (![]({{ "/images/download-play-icon.png" | absolute_url }}){: height="24px" width="24px"})
1. Wähle "Nintendo DS" aus
1. If your console loads into a "Download software via DS Download Play" menu, the test was successful
    + If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
1. Power off your console

If either of these tests has failed, DS mode, DS Download Play, and/or DS Connection Settings may be inaccessible once CFW is uninstalled! You should [fix DS mode](troubleshooting#software-issues-on-consoles-with-custom-firmware) before continuing.
{: .notice--warning}

#### Section III - Safety Test
The purpose of this section is to verify that the console will boot and that critical system functions, like System Settings and the keyboard, will work once CFW is uninstalled. **If you skip this section, you may BRICK your console!**

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is complete
1. Wenn du aufgefordert wirst Datum und Uhrzeit der "RTC" (Real Time Clock, Echtzeituhr) zu korrigieren, drücke (A), stelle Datum und Uhrzeit ein und drücke (A) um fortzufahren
    + Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
1. Drücke (Home), um das Aktionsmenü aufzurufen
1. Wähle "Scripts"
1. Select "safety_test"
1. Read the text on-screen and press (A) to continue
1. You should boot into the regular 3DS HOME Menu (any custom theme is irrelevant). If you do, continue these instructions
    + If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
1. Launch System Settings on your console
    + If the console crashes at this point, the test has failed
1. Select "Other Settings"
1. Select "Profile"
1. Select "User Name"
1. If you are able to enter a new user name, the test was successful
    + If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
1. Power off your console

If you do NOT boot into the regular 3DS HOME Menu, or System Settings / your keyboard is inaccessible, **DO NOT continue with these instructions**! Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and ask (in English) for someone there to assist you.
{: .notice--danger}

#### Section IV - NAND Backup

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Drücke (Home), um das Aktionsmenü aufzurufen
1. Wähle "Scripts"
1. Select "GM9Megascript"
1. Wähle "Backup Options" aus
1. Wähle "SysNAND Backup" aus
1. Drücke (A), um zu bestätigen
    + Dieser Vorgang nimmt einige Zeit in Anspruch
    + If you get an error, ensure you have at least 1.3GB of free space on your SD card
1. Drücke (B), um zum Hauptmenü zurückzukehren
1. Select “Exit”
1. Drücke (Home), um das Aktionsmenü aufzurufen
1. Select "Poweroff system" to power off your console

#### Section V - Removing illegitimate content
This section will remove illegitimate content, like homebrew and dumped cartridges. If you have save data that you care about, back it up with a save manager before continuing!
{: .notice--warning}

1. Power on your console
1. Launch System Settings on your console
1. Navigate to Data Management > Nintendo 3DS > Software
1. In this list of software, delete any non-Nintendo content you installed while using CFW
    + This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did *not* install from the eShop
1. Navigiere zu "Data Management" -> "DSiWare"
1. In this list of software, delete any non-Nintendo content you installed while using CFW
    + This includes software such as TWiLightMenu++, along with any games and titles that you did *not* install from the eShop
    + Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
1. Exit the System Settings application
1. Launch the Download Play application (![]({{ "/images/download-play-icon.png" | absolute_url }}){: height="24px" width="24px"})
1. Warte bis du die zwei Knöpfe siehst
1. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
1. Wähle "Miscellaneous options"
1. Wähle "Switch the hb. title to the current app."
1. Drücke (B) um fortzufahren
1. Drücke (B), um zum Rosalina-Hauptmenü zurückzukehren
1. Drücke (B), um das Rosalina-Menü zu schließen
1. Drücke (Home) und schließe die Download-Spiel Anwendung
1. Starte die Download-Spiel Anwendung
1. Your console should load the Homebrew Launcher
1. Launch DSiWare Uninstaller from the list of homebrew
1. Follow the prompts and allow the program to uninstall
1. Once the process has succeeded, exit the Homebrew Launcher and power off your console

#### Section VI - System Format
This section will ensure that all illegitimate tickets are removed, allowing eShop to work normally. This will remove all content from the 3DS and log you out of your NNID. Keep in mind that your console's encryption key will be shuffled, meaning that any old data will be rendered inaccessible, even if you have a backup of your SD contents.

1. Power on your console
1. Launch System Settings on your console
1. Navigate to Other Settings -> Next Page (until the final page) -> Format System Memory
1. Follow the prompts to format your 3DS


#### Section VII - Running Uninstall Script
This is your final opportunity to verify that all safety steps above have been followed! Please ensure that you have followed all sections on this page, **especially** `Section III - Safety Test`, before continuing.
{: .notice--warning}

{% capture notice-6 %}
If you're removing CFW because:

* You want to re-install it
* You want to change SD cards
* Your SD card was lost or corrupted
* One of your games is broken
* One of your system applications is broken
* Your console is unable to boot to HOME Menu

<u><strong>STOP!!!</strong></u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u><strong>BRICK</strong></u> your console. A better idea would be to ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).
{% endcapture %}
<div class="notice--danger">{{ notice-6 | markdownify }}</div>

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
    + If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
1. Drücke (Home), um das Aktionsmenü aufzurufen
1. Wähle "Scripts"
1. Select "GM9Megascript"
1. Select "Hax Options"
1. Select "Un-install Hax"
1. Drücke (A), wenn du dazu aufgefordert wirst, um fortzufahren
1. Drücke (A) um die Schreibrechte für SysNAND (lvl3) zu aktivieren und gibt dann die angezeigte Tastenkombination ein
1. Drücke (A), um fortzufahren
1. Drücke (B), um zum Hauptmenü zurückzukehren
1. Wähle "Exit" aus
1. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst
1. Drücke (Start), um deine Konsole neu zu starten

___

All custom firmware has been removed from your console.
{: .notice--success}

You can now remove any extra files and folders from the root of your SD card that are *not* the `Nintendo 3DS`, `DCIM`, or `private` folders.
{: .notice--info}
