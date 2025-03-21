Dieser Abschnitt wird deine Systemkonfiguration auf die Standardwerte zurücksetzen. **Installierte Spiele und deren Speicherdaten werden nicht verändert.** Dies ist **erforderlich** um bekannte Probleme im Zusammenhang mit dem Extended Memory-Modus und Applets auf einigen Konsolen zu vermeiden.

1. Power off your console
2. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
3. Navigate to `[0:] SDCARD` -> `gm9` -> `in`
4. Drücke (X) auf die CTRTransfer-Abbild `.bin` um es zu löschen
5. Drücke (A), um zu bestätigen
6. Drücke ein paar Mal (B), um zum Hauptmenü zurückzukehren
7. Navigiere zu `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - The `<ID0>` will be a folder with a 32-character long name
8. Nutze das Steuerkreuz, um `00010017` auszuwählen
9. Drücke (R) und (A), um die Optionen für den Ordner anzuzeigen
10. Wähle "Copy to 0:/gm9/out" aus
11. Drücke (A), um fortzufahren
12. Drücke (X), während `00010017` markiert ist, um den Ordner zu löschen
13. Drücke (A), um zu bestätigen
14. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
15. Sobald die Datei gelöscht wurde, drücke (A) um fortzufahren
16. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst
17. Drücke (Start), um deine Konsole neu zu starten
18. Deine Konsole wird das Setup-Menü laden
    - This is expected behaviour. Du hast keine Spieldaten verloren
19. Schließe das Setup-Menü ab, indem du den Anweisungen auf dem Bildschirm deiner Konsole folgst
