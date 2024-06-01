---
title: "EmuNAND transferieren"
---

{% include toc title="Inhalt" %}

### Lesen erforderlich

Dies ist ein Zusatzabschnitt zum Verschieben des Inhaltes eines vorherigen EmuNAND in die neue SysNAND CFW plus Entfernung des alten EmuNAND. Beachte, dass die Begriffe EmuNAND und RedNAND sich auf leicht unterschiedliche Implementierungen [des selben Konzepts](http://3dbrew.org/wiki/NAND_Redirection) beziehen.

Beachte: Sollten noch weitere Payload-Dateien als nur die`GodMode9.firm` Datei im `/luma/payloads/` Ordner auf deiner SD-Karte sein, starte das "Chainloader Menu", indem du beim Starten der Konsole (Start) gedrückt hältst und in welchem du dann das D-Pad und (A) verwenden musst um "GodMode9", für die Anleitung, auszuwählen.

Du MUSST bereits eine installierte Version von Luma3DS und boot9strap haben um diese Anleitung benutzen zu können.
{: .notice--danger}

### Was du brauchst

* Einen bestehenden EmuNAND
* Die neuste Version von GodMode9 (siehe https://github.com/d0k3/GodMode9/releases/latest) (die GodMode9.`zip` Datei)

### Anleitung

#### Abschnitt I - Vorbereitungen

1. Power off your console
1. Stecke deine SD-Karte in deinen Computer
1. Kopiere `GodMode9.firm`von der `GodMode9.zip`-Datei nach /luma/payloads/ auf deiner SD-Karte
1. Kopiere den Ordner `gm9` aus der GodMode9 `.zip` in das Stammverzeichnis deiner SD-Karte
1. Stecke deine SD-Karte wieder in deine Konsole

#### Schritt II - Sicherung der SysNAND DSiWare Spielstände

Wenn du noch keine DSiWare-Spiele oder Spielstände hast, überspringe diesen Abschnitt.
{: .notice--info}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Wenn du aufgefordert wirst, ein "essential files backup" durchzuführen, drücke (A). Drücke erneut (A) nachdem es abgeschlossen ist
1. Wenn du aufgefordert wirst Datum und Uhrzeit der "RTC" (Real Time Clock, Echtzeituhr) zu korrigieren, drücke (A), stelle Datum und Uhrzeit ein und drücke (A) um fortzufahren
    + Bitte beachte, falls du die RTC korrigieren musstest, dass du nach beenden der Anleitung auch Datum und Uhrzeit in den Systemeinstellungen korrigieren musst
1. Navigiere zu `[2:] SYSNAND TWLN` -> `title`
1. Halte (R) und drücke gleichzeitig (A) auf dem Ordner `00030004`, um ihn auszuwählen und wähle dann "Copy to 0:/gm9/out"
    + Das kann einen Moment dauern, wenn du viele DSiWare Spiele besitzt
1. Drücke zweimal (B), um zurück in das Hauptmenü zu gelangen

#### Schritt III - Backup erstellen für GBA VC Spielstände

Überspringe diesen Abschnitt, falls du keine GBA VC Spiele oder Spielstände besitzt.
{: .notice--info}

Diese Schritte sind nicht notwendig für andere Virtual Console Spiele (GBC, NES, etc.)
{: .notice--info}

Das Spiel wird auf der SD-Karte unter `/gm9/out/` mit dem Dateinamen `<TitleID>.gbavc.sav` gespeichert.
{: .notice--info}

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.
{: .notice--info}

1. Do the following process for each GBA VC game that you want to back up the save for:
    + Starte das GBA VC spiel
    Verlasse das GBA VC Spiel wieder
    + Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    + Starte GodMode9, indem du (A) drückst
    + Navigiere zu `[S:] SYSNAND VIRTUAL`
    + Drücke (A), um`agbsave.bin` auszuwählen
    + Wähle "AGBSAVE options..."
    + Wähle "Dump GBA VC save"
    + Drücke (A), um fortzufahren
    + Press (Start) to reboot your console

#### Schritt IV - EmuNAND auf SysNAND kopieren

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Navigiere zu `[E:] EMUNAND VIRTUAL`
1. Drücke (A) auf `nand.bin`, um es auszuwählen, wähle dann "NAND image options...", dann wähle "Restore SysNAND (safe)"
1. Drücke (A), um SysNAND-Änderungen zu aktivieren. Gib danach die angezeigte Tastenkombination ein
    + Die Installation von boot9strap wird dadurch nicht überschrieben
1. Gib die angezeigte Tastenkombination ein, um SysNAND-Änderungen (auf erster Ebene) zu aktivieren
    + Dieser Vorgang nimmt einige Zeit in Anspruch
1. Once it is completed, press (A) to continue
1. Drücke (B), um die Schreibrechte nicht zu deaktiveren
1. Drücke (B), um zum Hauptmenü zurückzukehren

#### Schritt V - DSiWare Spielstand wiederherstellen

Überspringe diesen Abschnitt, falls du kein Backup für deine DSiWare Spielstände erstellt hast.
{: .notice--info}

1. Navigiere zu `[0:] SDCARD` -> `gm9` -> `out`
1. Wähle den Ordner "00030004" aus und drücke (Y), um ihn zu kopieren.
1. Drücke zweimal (B), um zurück in das Hauptmenü zu gelangen
1. Navigiere zu `[2:] SYSNAND TWLN` -> `title`
1. Drücke (Y), um den Ordner "00030004" einzufügen.
1. Wähle "Copy path(s)" aus
1. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
1. Wähle "Overwrite file(s)"
    + Das kann einen Moment dauern, wenn du viele DSiWare Spiele besitzt
1. Drücke (B), um die Schreibrechte nicht zu deaktiveren
1. Drücke zweimal (B), um zurück in das Hauptmenü zu gelangen

#### Schritt VI - GBA VC Spielstände wiederherstellen

Wenn du keine GBA VC Spielstände früher gesichert hast, überspringe den Abschnitt.
{: .notice--info}

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.
{: .notice--info}

1. Hold (R) and press (Start) at the same time to power off your console
1. Power on your console into SysNAND
1. Führe den folgenden Prozess für jedes GBA VC Spiel durch, bei dem du einen Spielstand wiederherstellen möchtest:
    + Starte das GBA VC spiel
    Verlasse das GBA VC Spiel wieder
    + Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    + Starte GodMode9, indem du (A) drückst
    Navigiere zu `[0:] SDCARD` -> `gm9`
    + Drücke zur Wiederherstellung die Taste (Y) auf der gewünschten Datei (`<TitleID>.gbavc.sav`)
    + Drücke (B), um zum Hauptmenü zurückzukehren
    + Navigiere zu `[S:] SYSNAND VIRTUAL`
    + Drücke (A), um`agbsave.bin` auszuwählen
    + Wähle "AGBSAVE options..."
    + Wähle "Inject GBA VC save"
    + Drücke (A), um fortzufahren
    + Press (Start) to reboot your console
    + Starte das GBA VC spiel
    Verlasse das GBA VC Spiel wieder

#### Schritt VII - Backup vom SysNAND erstellen

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
{% include_relative include/nand-backup.txt -%}
1. ** Sichere jede Datei von deiner SD-Karte in einem Ordner auf deinem Computer, da in den nächsten Schritten alle Dateien gelöscht werden **

#### Schritt VIII - SD-Karte formatieren

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
{% include_relative include/format-sd-gm9.txt -%}
1. Drücke (R) und (B) gleichzeitig um die SD-Karte auszuwerfen
1. Stecke deine SD-Karte in deinen Computer
1. Kopiere alle Dateien zurück auf deine SD-Karte
    Ersetze die Datei `boot.firm` auf deiner SD-Karte durch eine aus deinem Backup
1. Stecke deine SD-Karte wieder in deine Konsole
1. Drücke (A) um die SD-Karte einzuhängen
1. Drücke (Start), um das System neu zu starten

___

### Zurück zu [Setup fertigstellen](finalizing-setup).
{: .notice--primary}
