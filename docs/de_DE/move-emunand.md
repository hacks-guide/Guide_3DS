# Move EmuNAND

## Required Reading

Dies ist ein Zusatzabschnitt zum Verschieben des Inhaltes eines vorherigen EmuNAND in die neue SysNAND CFW plus Entfernung des alten EmuNAND. Beachte, dass die Begriffe EmuNAND und RedNAND sich auf leicht unterschiedliche Implementierungen [des selben Konzepts](http://3dbrew.org/wiki/NAND_Redirection) beziehen.

Beachte: Sollten noch weitere Payload-Dateien als nur die`GodMode9.firm` Datei im `/luma/payloads/` Ordner auf deiner SD-Karte sein, starte das "Chainloader Menu", indem du beim Starten der Konsole (Start) gedrückt hältst und in welchem du dann das D-Pad und (A) verwenden musst um "GodMode9", für die Anleitung, auszuwählen.

::: danger

Du MUSST bereits eine installierte Version von Luma3DS und boot9strap haben um diese Anleitung benutzen zu können.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Insert your SD card into your computer
3. Kopiere `GodMode9.firm`von der `GodMode9.zip`-Datei nach /luma/payloads/ auf deiner SD-Karte
4. Kopiere den Ordner `gm9` aus der GodMode9 `.zip` in das Stammverzeichnis deiner SD-Karte
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

Wenn du noch keine DSiWare-Spiele oder Spielstände hast, überspringe diesen Abschnitt.

:::

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
2. Wenn du aufgefordert wirst, ein "essential files backup" durchzuführen, drücke (A). Drücke erneut (A) nachdem es abgeschlossen ist
3. Wenn du aufgefordert wirst Datum und Uhrzeit der "RTC" (Real Time Clock, Echtzeituhr) zu korrigieren, drücke (A), stelle Datum und Uhrzeit ein und drücke (A) um fortzufahren
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Navigiere zu `[2:] SYSNAND TWLN` -> `title`
5. Halte (R) und drücke gleichzeitig (A) auf dem Ordner `00030004`, um ihn auszuwählen und wähle dann "Copy to 0:/gm9/out"
   - This process may take some time if you have many DSiWare games
6. Drücke zweimal (B), um zurück in das Hauptmenü zu gelangen

### Section III - Backup GBA VC Saves

::: info

Überspringe diesen Abschnitt, falls du keine GBA VC Spiele oder Spielstände besitzt.

:::

::: info

Diese Schritte sind nicht notwendig für andere Virtual Console Spiele (GBC, NES, etc.)

:::

::: info

Das Spiel wird auf der SD-Karte unter `/gm9/out/` mit dem Dateinamen `<TitleID>.gbavc.sav` gespeichert.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Drücke (A), um fortzufahren
   - Drücke (Start), um deine Konsole neu zu starten

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
2. Navigiere zu `[E:] EMUNAND VIRTUAL`
3. Drücke (A) auf `nand.bin`, um es auszuwählen, wähle dann "NAND image options...", dann wähle "Restore SysNAND (safe)"
4. Drücke (A), um SysNAND-Änderungen zu aktivieren. Gib danach die angezeigte Tastenkombination ein
   - This will not overwrite your boot9strap installation
5. Gib die angezeigte Tastenkombination ein, um SysNAND-Änderungen (auf erster Ebene) zu aktivieren
   - This process will take some time
6. Once it is completed, press (A) to continue
7. Drücke (B), um die Schreibrechte nicht zu deaktiveren
8. Drücke (B), um zum Hauptmenü zurückzukehren

### Section V - Restore DSiWare Saves

::: info

Überspringe diesen Abschnitt, falls du kein Backup für deine DSiWare Spielstände erstellt hast.

:::

1. Navigiere zu `[0:] SDCARD` -> `gm9` -> `out`
2. Wähle den Ordner "00030004" aus und drücke (Y), um ihn zu kopieren.
3. Drücke zweimal (B), um zurück in das Hauptmenü zu gelangen
4. Navigiere zu `[2:] SYSNAND TWLN` -> `title`
5. Drücke (Y), um den Ordner "00030004" einzufügen.
6. Wähle "Copy path(s)" aus
7. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
8. Wähle "Overwrite file(s)"
   - This process may take some time if you have many DSiWare games
9. Drücke (B), um die Schreibrechte nicht zu deaktiveren
10. Drücke zweimal (B), um zurück in das Hauptmenü zu gelangen

### Section VI - Restore GBA VC Saves

::: info

Wenn du keine GBA VC Spielstände früher gesichert hast, überspringe den Abschnitt.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Führe den folgenden Prozess für jedes GBA VC Spiel durch, bei dem du einen Spielstand wiederherstellen möchtest:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navigiere zu `[0:] SDCARD` -> `gm9`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Drücke (B), um zum Hauptmenü zurückzukehren
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Drücke (A), um fortzufahren
   - Drücke (Start), um deine Konsole neu zu starten
   - Launch the GBA VC game
   - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten

<!--@include: ./_include/nand-backup.md -->

1. \*\* Sichere jede Datei von deiner SD-Karte in einem Ordner auf deinem Computer, da in den nächsten Schritten alle Dateien gelöscht werden \*\*

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten

<!--@include: ./_include/format-sd-gm9.md -->

1. Drücke (R) und (B) gleichzeitig um die SD-Karte auszuwerfen
2. Insert your SD card into your computer
3. Kopiere alle Dateien zurück auf deine SD-Karte
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. Drücke (A) um die SD-Karte einzuhängen
6. Drücke (Start), um das System neu zu starten

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
