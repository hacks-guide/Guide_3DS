1. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
2. Válaszd a "Scripts..." opciót
3. Válaszd ezt: "GM9Megascript"
4. Válaszd ezt: "Backup Options"
5. Válaszd ezt: "SysNAND Backup"
6. Nyomd meg az (A) gombot a megerősítéshez
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. Nyomd meg az (A) gombot a folytatáshoz
8. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
9. Válaszd az "Exit" opciót
10. Nyomd meg az (A) gombot az írási engedélyek visszavonásához
11. Menj ide: `[S:] SYSNAND VIRTUAL`
12. Nyomd meg az (A) gombot a `essential.exefs` fájlon, hogy kijelöld
13. Válaszd ki ezt: "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Nyomd meg az (A) gombot a folytatáshoz
15. Az (R) lenyomva tartása közben nyomd meg a (Start) gombot a konzolod kikapcsolásához
16. Helyezd az SD kártyád a számítógépbe
17. Másold a `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, `essential.exefs` fájlokat a `/gm9/out/` mappából az SD kártyáról egy biztonságos helyre a számítógépeden
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Töröld a `<dátum>_<sorozatszám>_sysnand_##.bin` és a `<dátum>_<sorozatszám>_sysnand_##.bin.sha` fájlokat az SD kártyád `/gm9/out/` mappájából, miután lemásoltad azokat
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Tedd vissza az SD kártyád a konzoldba
