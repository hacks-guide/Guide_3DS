1. Drücke (Home), um das Aktionsmenü aufzurufen
2. Wähle "Scripts"
3. Wähle "GM9Megascript" aus
4. Wähle "Backup Options" aus
5. Wähle "SysNAND Backup" aus
6. Drücke (A), um zu bestätigen
   - Dieser Vorgang nimmt einige Zeit in Anspruch
   - Wenn ein Fehler auftritt, schaue für Hilfe im [Leitfaden zur Fehlerbehebung](troubleshooting-finalizing-setup.html) nach
7. Drücke (A), um fortzufahren
8. Drücke (B), um zum Hauptmenü zurückzukehren
9. Wähle "Exit" aus
10. Drücke (A), um die Schreibrechte zu deaktivieren, wenn du dazu aufgefordert wirst
11. Navigiere zu `[S:] SYSNAND VIRTUAL`
12. Drücke (A), um `essential.exefs` auszuwählen
13. Wähle "Copy to 0:/gm9/out" aus
    - Wenn du "Destination already exists" siehst, drücke (A) auf "Overwrite file(s)"
14. Drücke (A), um fortzufahren
15. Halte (R) gedrückt und drücke (Start) zur gleichen Zeit, um deine Konsole auszuschalten
16. Stecke deine SD-Karte in deinen Computer
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsert your SD card into your console
