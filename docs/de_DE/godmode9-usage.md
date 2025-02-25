# GodMode9 Usage

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

GodMode9 ist ein Vollzugriffsdateibrowser für die Nintendo 3DS Konsole und gibt dir Zugriff auf deine SD Karte, auf die FAT Partitionen in deinem SysNAND und EmuNAND und im Grunde alles andere auch. Unter anderem kannst du Dateien kopieren, löschen, umbenennen und Ordner erstellen.

Beachte: Sollten noch weitere Payload-Dateien als nur die`GodMode9.firm` Datei im `/luma/payloads/` Ordner auf deiner SD-Karte sein, starte das "Chainloader Menu", indem du beim Starten der Konsole (Start) gedrückt hältst und in welchem du dann das D-Pad und (A) verwenden musst um "GodMode9", für die Anleitung, auszuwählen.

GodMode9 ist eine mächtige Software, mit dem Potential alles mögliche an der Konsole verändern zu können. Obwohl viele dieser Modifikationen durch ein Berechtigungssystem gesperrt sind, und es unmöglich ist, versehentlich gefährliche Aktionen ausführen, ohne bewusst Berechtigungen zu entsperren, solltest du dennoch die Anweisungen sorgfältig befolgen und Backups für den Notfall bereit haben.

## Updating GodMode9

::: info

Einige der folgenden Anweisungen sind nur in der neuesten Version von GodMode9 zu finden, deshalb solltest diesen Schritten folgen, um deine Version zu aktualisieren, bevor du weiter machst. Ersetze dabei alle bereits existierenden Dateien.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. Stecke deine SD-Karte in deinen Computer
3. Kopiere `GodMode9.firm`von der `GodMode9.zip`-Datei nach /luma/payloads/ auf deiner SD-Karte
4. Kopiere den Ordner `gm9` aus der GodMode9 `.zip` in das Stammverzeichnis deiner SD-Karte
5. Reinsert your SD card into your console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Power off your console
2. Stecke deine SD-Karte in deinen Computer
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
6. Drücke (Home), um das Aktionsmenü aufzurufen
7. Wähle "Scripts"
8. Select "GM9Megascript"
9. Select "Restore Options"
10. Select "SysNAND Restore (safe)"
11. Wähle dein NAND backup aus
12. Drücke (A) um die Schreibrechte für SysNAND (lvl3) zu aktivieren und gibt dann die angezeigte Tastenkombination ein
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Drücke (A), um fortzufahren
14. Drücke (B), um zum Hauptmenü zurückzukehren
15. Wähle "Exit" aus
16. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Beachte, dass es nicht möglich ist, Dateien in die
Gesundheit & Sicherheitsinformationen zu injizieren, die größer sind als die eigentliche App (einschließlich Spiele und andere große Anwendungen)

:::

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
2. Navigiere zu `[0:] SDCARD` ->` cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
10. Drücke (A), um fortzufahren
11. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

Dies wird nur funktionieren, wenn die Injektion in Gesundheit & Sicherheit von GodMode9 durchgeführt wurde (nicht bei Decrypt9 oder Hourglass9).

:::

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
2. Drücke (Home), um das Aktionsmenü aufzurufen
3. Wähle "More..."
4. Wähle "Restore H&S"
5. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
6. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

\*\*Beachte dies wird alles von deiner SD karte entfernen

:::

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
2. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
   - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Your SD card has successfully been formatted for use with the console.

:::

## Removing an NNID without formatting your console

::: info

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.

:::

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
2. Drücke (Home), um das Aktionsmenü aufzurufen
3. Wähle "Scripts"
4. Select "GM9Megascript"
5. Wähle "Scripts from Plailect's Guide" aus
6. Select "Remove NNID"
7. Drücke (A), um fortzufahren
8. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
9. Drücke (A), um fortzufahren
10. Drücke (B), um zum Hauptmenü zurückzukehren
11. Wähle "Exit" aus
12. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst
13. Drücke (Start), um deine Konsole neu zu starten

::: tip

You have now been logged out of your NNID.

:::
