Dieser Abschnitt wird deine Systemkonfiguration auf die Standardwerte zurücksetzen. **Installierte Spiele und deren Speicherdaten werden nicht verändert.** Dies ist **erforderlich** um bekannte Probleme im Zusammenhang mit dem Extended Memory-Modus und Applets auf einigen Konsolen zu vermeiden.

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory _after_ your console has gone through initial setup.

:::

1. Power off your console
2. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
3. Navigiere zu `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - The `<ID0>` will be a folder with a 32-character long name
4. Nutze das Steuerkreuz, um `00010017` auszuwählen
5. Drücke (R) und (A), um die Optionen für den Ordner anzuzeigen
6. Wähle "Copy to 0:/gm9/out" aus
7. Drücke (A), um fortzufahren
8. Drücke (X), während `00010017` markiert ist, um den Ordner zu löschen
9. Drücke (A), um zu bestätigen
10. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
11. Sobald die Datei gelöscht wurde, drücke (A) um fortzufahren
12. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst
13. Drücke (Start), um deine Konsole neu zu starten
14. Deine Konsole wird das Setup-Menü laden
    - This is expected behaviour. Du hast keine Spieldaten verloren
15. Schließe das Setup-Menü ab, indem du den Anweisungen auf dem Bildschirm deiner Konsole folgst
