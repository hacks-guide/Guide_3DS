1. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
2. Válaszd a "Scripts..." opciót
3. Válaszd ezt: "GM9Megascript"
4. Válaszd ezt: "Backup Options"
5. Válaszd ezt: "SysNAND Backup"
6. Nyomd meg az (A) gombot a megerősítéshez
    - Ez a folyamat igénybe vesz majd némi időt
    - Ha hibát kapsz, nézz utána a [hibaelhárítási útmutatóban](troubleshooting-finalizing-setup.html)
7. Nyomd meg az (A) gombot a folytatáshoz
8. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
9. Válaszd az "Exit" opciót
10. Nyomd meg az (A) gombot az írási engedélyek visszavonásához
11. Menj ide: `[S:] SYSNAND VIRTUAL`
12. Nyomd meg az (A) gombot a `essential.exefs` fájlon, hogy kijelöld
13. Válaszd ki ezt: "Copy to 0:/gm9/out"
    - Ha azt látod, hogy "Destination already exists", nyomj (A) gombot az "Overwrite file(s)" opción
14. Nyomd meg az (A) gombot a folytatáshoz
15. Az (R) lenyomva tartása közben nyomd meg a (Start) gombot a konzolod kikapcsolásához
16. Helyezd az SD kártyád a számítógépbe
17. Másold a `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, `essential.exefs` fájlokat a `/gm9/out/` mappából az SD kártyáról egy biztonságos helyre a számítógépeden
    - Tarts belőle biztonsági másolatokat több különböző helyen is (például online tárhelyen, külső merevlemezen.)
    - Ezek a biztonsági mentések fognak megmenteni, ha a későbbiekben brickelődne a konzolod, vagy bármi félresikerülne a jövőben
18. Töröld a `<dátum>_<sorozatszám>_sysnand_##.bin` és a `<dátum>_<sorozatszám>_sysnand_##.bin.sha` fájlokat az SD kártyád `/gm9/out/` mappájából, miután lemásoltad azokat
    - A többi biztonsági mentés fájl mérete elhanyagolható és a könnyű hozzáférés érdekében az SD kártyádon tárolt
19. Tedd vissza az SD kártyád a konzoldba
