---
title: "Benutzung von GodMode9"
---

{% include toc title="Inhalt" %}

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).
{: .notice--info}

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Lesen erforderlich

GodMode9 ist ein Vollzugriffsdateibrowser für die Nintendo 3DS Konsole und gibt dir Zugriff auf deine SD Karte, auf die FAT Partitionen in deinem SysNAND und EmuNAND und im Grunde alles andere auch. Unter anderem kannst du Dateien kopieren, löschen, umbenennen und Ordner erstellen.

Beachte: Sollten noch weitere Payload-Dateien als nur die`GodMode9.firm` Datei im `/luma/payloads/` Ordner auf deiner SD-Karte sein, starte das "Chainloader Menu", indem du beim Starten der Konsole (Start) gedrückt hältst und in welchem du dann das D-Pad und (A) verwenden musst um "GodMode9", für die Anleitung, auszuwählen.

GodMode9 ist eine mächtige Software, mit dem Potential alles mögliche an der Konsole verändern zu können. Obwohl viele dieser Modifikationen durch ein Berechtigungssystem gesperrt sind, und es unmöglich ist, versehentlich gefährliche Aktionen ausführen, ohne bewusst Berechtigungen zu entsperren, solltest du dennoch die Anweisungen sorgfältig befolgen und Backups für den Notfall bereit haben.

## GodMode9 aktualisieren

Einige der folgenden Anweisungen sind nur in der neuesten Version von GodMode9 zu finden, deshalb solltest diesen Schritten folgen, um deine Version zu aktualisieren, bevor du weiter machst. Ersetze dabei alle bereits existierenden Dateien.
{: .notice--info}

### Was du brauchst

* Die neuste Version von GodMode9 (siehe https://github.com/d0k3/GodMode9/releases/latest) (die GodMode9.`zip` Datei)

### Anleitung

1. Power off your console
1. Stecke deine SD-Karte in deinen Computer
1. Kopiere `GodMode9.firm`von der `GodMode9.zip`-Datei nach /luma/payloads/ auf deiner SD-Karte
1. Kopiere den Ordner `gm9` aus der GodMode9 `.zip` in das Stammverzeichnis deiner SD-Karte
1. Stecke deine SD-Karte wieder in deine Konsole

GodMode9 is now up to date.
{: .notice--success}

## Erstellen einer NAND-Sicherheitskopie

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
{% include_relative include/nand-backup.txt %}

Your NAND backup has been successfully created.
{: .notice--success}

## Wiederherstellen einer NAND-Sicherheitskopie

1. Power off your console
1. Stecke deine SD-Karte in deinen Computer
1. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
1. Stecke deine SD-Karte wieder in deine Konsole
1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Drücke (Home), um das Aktionsmenü aufzurufen
1. Wähle "Scripts"
1. Select "GM9Megascript"
1. Select "Restore Options"
1. Select "SysNAND Restore (safe)"
1. Wähle dein NAND backup aus
1. Drücke (A) um die Schreibrechte für SysNAND (lvl3) zu aktivieren und gibt dann die angezeigte Tastenkombination ein
    + This will **not** overwrite your boot9strap installation
    + Dieser Vorgang nimmt einige Zeit in Anspruch
1. Drücke (A), um fortzufahren
1. Drücke (B), um zum Hauptmenü zurückzukehren
1. Wähle "Exit" aus
1. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.
{: .notice--success}

## Injektion einer beliebigen .CIA app in die "Gesundheits- und Sicherheitsinformationen"-App

Beachte, dass es nicht möglich ist, Dateien in die
Gesundheit & Sicherheitsinformationen zu injizieren, die größer sind als die eigentliche App (einschließlich Spiele und andere große Anwendungen)
{: .notice--info}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Navigiere zu `[0:] SDCARD` ->` cias`
1. Press (A) on your `.cia` to select it
1. Select "CIA image options..."
1. Select "Mount image to drive"
1. Press (A) on the `.app` file
1. Select "NCCH image options"
1. Select "Inject to H&S"
1. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Gebe dann die angegebene Tastenkombination ein
1. Drücke (A), um fortzufahren
1. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst

Your desired application has now been injected into Health & Safety.
{: .notice--success}

## Wiederherstellen der Gesundheit & Sicherheitsinformationen nach der Initiierung einer .CIA App

Dies wird nur funktionieren, wenn die Injektion in Gesundheit & Sicherheit von GodMode9 durchgeführt wurde (nicht bei Decrypt9 oder Hourglass9).
{: .notice--info}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Drücke (Home), um das Aktionsmenü aufzurufen
1. Wähle "More..."
1. Wähle "Restore H&S"
1. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
1. Drücke (A), um die Schreibrechte zu widerrufen, wenn du dazu aufgefordert wirst

Health & Safety has been reverted to normal.
{: .notice--success}

## Formatieren einer SD-Karte

**Beachte dies wird alles von deiner SD karte entfernen
{: .notice--danger}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
    + If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed
{% include_relative include/format-sd-gm9.txt %}

Your SD card has successfully been formatted for use with the console.
{: .notice--success}

## Removing an NNID without formatting your console

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.
{: .notice--info}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Drücke (Home), um das Aktionsmenü aufzurufen
1. Wähle "Scripts"
1. Select "GM9Megascript"
1. Wähle "Scripts from Plailect's Guide" aus
1. Select "Remove NNID"
1. Drücke (A), um fortzufahren
1. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
1. Drücke (A), um fortzufahren
1. Drücke (B), um zum Hauptmenü zurückzukehren
1. Wähle "Exit" aus
1. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst
1. Drücke (Start), um deine Konsole neu zu starten

You have now been logged out of your NNID.
{: .notice--success}
