Dieser Abschnitt wird deine Systemkonfiguration auf die Standardwerte zurücksetzen. **Installierte Spiele und deren Speicherdaten werden nicht verändert.** Dies ist **erforderlich** um bekannte Probleme im Zusammenhang mit dem Extended Memory-Modus und Applets auf einigen Konsolen zu vermeiden.

1. Schalte deine Konsole aus
1. Drücke und halte (Start), und während du (Start) hältst, schalte deine Konsole an. Dies wird GodMode9 starten
1. Navigiere zu `[0:] SDCARD` -> `gm9`
1. Drücke (X) auf die CTRTransfer-Abbild `.bin` um es zu löschen
1. Drücke (A), um zu bestätigen
1. Drücke ein paar Mal (B), um zum Hauptmenü zurückzukehren
1. Navigiere zu `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    + Die `<ID0>` wird ein Ordner mit einem 32 Zeichen langem Namen sein
1. Nutze das Steuerkreuz, um `00010017` auszuwählen
1. Drücke (R) und (A), um die Optionen für den Ordner anzuzeigen
1. Wähle "Copy to 0:/gm9/out" aus
1. Drücke (A), um fortzufahren
1. Drücke (X), während `00010017` markiert ist, um den Ordner zu löschen
1. Drücke (A), um zu bestätigen
1. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
1. Sobald die Datei gelöscht wurde, drücke (A) um fortzufahren
1. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst
1. Drücke (Start), um deine Konsole neu zu starten
1. Deine Konsole wird das Setup-Menü laden
    + Das ist normal. Du hast keine Spieldaten verloren
1. Schließe das Setup-Menü ab, indem du den Anweisungen auf dem Bildschirm deiner Konsole folgst
