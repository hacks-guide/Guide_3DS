# Setup abschließen

## Vorher Lesen

Auf der letzten Seite hast du boot9strap installiert, einen Custom Firmware-Loader, der die Datei `boot.firm` von der SD-Karte oder vom NAND (internen Speicher) lädt. In diesem Fall verwenden wir Luma3DS von [LumaTeam](https://github.com/LumaTeam/), als `boot.firm`, um die Konsole so zu patchen, dass sie Homebrew Software ausführen kann.

Auf dieser Seite werden wir Sicherheitskopien kritischer Systemdateien erstellen und einige Homebrew Programme installieren. Die meisten dieser Schritte werden mithilfe eines Skripts automatisiert, dass du auf deiner Konsole ausführen wirst.

::: info

Das Skript wird folgende Anwendungen installieren:

- **FBI** von Steveice10 _(installiert Anwendungen im CIA Format)_
- **Homebrew Launcher Loader** von PabloMK7 _(startet den Homebrew Launcher zum Ausführen von Homebrew im 3DSX Format)_
- **Anemone3DS** von astronautlevel2 _(installiert benutzerdefinierte Designs, Splashes und Marken)_
- **Checkpoint** von BernardoGiordano/FlagBrew _(verwaltet Speicherdaten von 3DS/DS Spielen)_
- **ftpd** von mtheall _(erlaubt drahtlosen Zugriff auf die SD-Karte vom 3DS über FTP)_
- **Universal-Updater** von Universal-Team _(App-Store auf der Konsole zum Herunterladen von Homebrew über WLAN)_
- **GodMode9** von d0k3 _(Multifunktionstool zum Extrahieren von Daten aus dem internen Speicher oder Spielkarten)_

Wenn du eine dieser Anwendungen nicht möchtest, kannst du sie nach Befolgen dieser Anleitung entfernen, indem du dich zu Systemeinstellungen -> Datenverwaltung -> Nintendo 3DS -> Software begibst. (GodMode9 kann auf diese Weise nicht entfernt werden und wird in der Regel für andere Zwecke benötigt.)

::: details Quellcode-Links (optional)

Alle in dieser Anleitung installierten Anwendungen sind Open-Source. Wenn du dich dafür interessierst, wie sie funktionieren, oder wenn du als Dankeschön einen Stern geben möchtest, ist der Quellcode hier verlinkt:

- [FBI](https://github.com/nh-server/FBI-NH)
- [Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)
- [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)
- [Checkpoint](https://github.com/bernardogiordano/checkpoint/releases)
- [ftpd](https://github.com/mtheall/ftpd)
- [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)
- [GodMode9](https://github.com/d0k3/GodMode9)

:::

## Kompatibilitätshinweise

::: info

If your previous CFW setup was EmuNAND-based and you wish to move the contents of your EmuNAND/RedNAND to SysNAND, follow [Move EmuNAND](move-emunand) before following this page. If you don't know what an EmuNAND is, this doesn't apply to you.

:::

## Was du brauchst

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

## Anleitung

### Abschnitt I - Vorbereitung

In this section, you will copy the files necessary to follow the rest of the instructions on this page.

1. Schalte deine Konsole aus
2. Stecke deine SD-Karte in deinen Computer
3. Copy `finalize.romfs` to the root of your SD card
4. Open the `luma` folder on your SD card and create a folder named `payloads` inside, if it does not already exist
5. Copy `x_finalize_helper.firm` to the `payloads` folder
6. Reinsert your SD card into your console

The screenshot below indicates the minimum SD card layout that is required to follow this page. You may have extra files or folders on your SD card, depending on your previous setup or the method that you followed.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Section II - Updating the System

In this section, you will update your system to the latest version, which is safe to do with custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Section III - RTC and DSP setup

In this section, you will sync your 3DS internal clock with the actual time and dump the sound firmware (which is necesssary for some homebrew software to use sound properly).

1. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
   - If one of these buttons is broken, download [config.ini](/assets/config.ini) and put it in your `luma` folder, replacing the existing one. This will change the Rosalina menu key combination to (X) + (Y)
2. Wähle "Miscellaneous options"
3. Select "Dump DSP firmware"
4. Press (B) to continue
5. Select "Nullify user time offset"
6. Press (B) to continue
7. Drücke (B), um zum Rosalina-Hauptmenü zurückzukehren
8. Drücke (B), um das Rosalina-Menü zu schließen

### Section IV - Setup Script

In this section, you will use a series of scripts to automate homebrew installation, SD card cleanup, and system file backup.

1. Schalte deine Konsole aus
2. Press and hold (X), and while holding (X), power on your console. This will launch the Finalizing Setup Helper
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled, or `x_finalize_helper.firm` may be in the wrong location
   - If you encounter an error, consult the [troubleshooting](troubleshooting-finalizing-setup) page
3. After a few seconds, your console should automatically boot into GodMode9
   - From this point forward, you can access GodMode9 by holding (Start) while powering on your console
   - Holding (X) on boot will no longer do anything
4. If necessary, configure GodMode9:
   - If you are prompted to select a language, use the D-Pad and press (A) to select English
     - This language choice only affects GodMode9's menu options
     - You can set it to your language of choice after completing this guide
   - If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue
   - Wenn du aufgefordert wirst Datum und Uhrzeit der "RTC" (Real Time Clock, Echtzeituhr) zu korrigieren, drücke (A), stelle Datum und Uhrzeit ein und drücke (A) um fortzufahren
5. Once you see [root] and a list of drives, press (Home) to bring up the action menu
6. Wähle "Scripts" (_not_ Lua scripts)
7. Select "finalize"
8. Follow the prompts in the script, answering any questions that you are asked
   - If you see "Information #05: No title database", press (A) and enter the key combination on the bottom screen to proceed
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting-finalizing-setup) page, then open GodMode9 by holding (Start) on boot to re-run the script
9. Once the script says "Setup complete!", press (A) to power off the device
   - If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
10. Stecke deine SD-Karte in deinen Computer
11. Copy the `/gm9/backups/` folder to a safe location on your computer
    - This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
12. If you still have them, delete the two `SysNAND` files from the `/gm9/backups/` folder from your SD card
    - The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

::: tip

You're done! Custom firmware is now fully configured on your console.

:::

::: info

Trying to figure out what to do with your newly modded device? Visit [our wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Information and Notes

::: info

Here are some key combos that you should know:

- Holding (Select) on boot will launch the Luma3DS configuration menu.
- Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
- By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. This can be changed from the Rosalina menu.
- Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. See the [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4) for a list.

:::

### Pretendo

Pretendo is a replacement service for the Nintendo Network, which resurrects online services from the now shut down Nintendo Network. It also revives the Miiverse service, via juxtaposition. The official guide can be found [here](https://pretendo.network/docs/install/3ds).

**Note: Pretendo does not support every online service, however work is being done to achieve this.**

A list of games that Pretendo supports can be found [here](https://wiki.pretendo.zip/game-support-status).

::: info

For information on using GodMode9's various features, check out the [GodMode9 Usage](godmode9-usage) and [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges) pages.

:::
