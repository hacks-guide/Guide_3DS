1. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
1. Válaszd a "Scripts..." opciót
1. Válaszd ezt: "GM9Megascript"
1. Válaszd ezt: "Backup Options"
1. Válaszd ezt: "SysNAND Backup"
1. Nyomd meg az (A) gombot a megerősítéshez
    + Ez a folyamat igénybe vesz majd némi időt
    + Ha hibát kapsz, nézz utána a [hibaelhárítási útmutatóban](troubleshooting#finalizing-setup)
1. Nyomd meg az (A) gombot a folytatáshoz
1. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
1. Válaszd az "Exit" opciót
1. Nyomd meg az (A) gombot az írási engedélyek visszavonásához
1. Menj ide: `[S:] SYSNAND VIRTUAL`
1. Nyomd meg az (A) gombot a `essential.exefs` fájlon, hogy kijelöld
1. Válaszd ki ezt: "Copy to 0:/gm9/out"
    + Ha azt látod, hogy "Destination already exists", nyomj (A) gombot az "Overwrite file(s)" opción
1. Nyomd meg az (A) gombot a folytatáshoz
1. Az (R) lenyomva tartása közben nyomd meg a (Start) gombot a konzolod kikapcsolásához
1. Helyezd az SD kártyád a számítógépbe
1. Másold a `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, `essential.exefs` fájlokat a `/gm9/out/` mappából az SD kártyáról egy biztonságos helyre a számítógépeden
    + Tarts belőle biztonsági másolatokat több különböző helyen is (például online tárhelyen, külső merevlemezen.)
    + Ezek a biztonsági mentések fognak megmenteni, ha a későbbiekben brickelődne a konzolod, vagy bármi félresikerülne a jövőben
1. Töröld a `<dátum>_<sorozatszám>_sysnand_##.bin` és a `<dátum>_<sorozatszám>_sysnand_##.bin.sha` fájlokat az SD kártyád `/gm9/out/` mappájából, miután lemásoltad azokat
    + A többi biztonségi mentés fájl mérete elhanyagolható és a könnyű hozzáférés érdekében az SD kártyádon tárolt
1. Tedd vissza az SD kártyád a konzoldba
