---
title: "GodMode9 használata"
---

{% include toc title="Tartalomjegyzék" %}

A cartridge-ek vagy SD kártya tartalom dumpolásáról információkért, tekintsd meg a [A címek és játék cartridge-ek dumpolása](dumping-titles-and-game-cartridges) oldalt.
{: .notice--info}

Ha segítségre van szükséged GodMode9-nal kapcsolatban (angol nyelven), legyen az scriptelés, vagy a legfrissebb információk beszerzése, csatlakozz a [GodMode9 Discord szerverhez](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Fontos tudnivalók

A GodMode9 egy teljes hozzáférést biztosító fájlkezelő a Nintendo 3DS konzolhoz, amely hozzáférést ad az SD kártyához, a SysNAND-od és EmuNAND-od FAT partícióihoz, és alapvetően bármi máshoz. Sok más funkció mellett lehetőséged van másolni, törölni, átnevezni fájlokat és létrehozni mappákat.

Vedd figyelembe, hogy amennyiben van más payload fájl a `GodMode9.firm` fájlon kívül a `/luma/payloads/`mappában, indításkor a (Start) gombot lenyomva tartva a "chainloader menu" menü fog megjelenni. Itt a D-Pad és az (A) gomb segítségével válaszd a "GodMode9" opciót, hogy az alábbi utasításokat követhesd.

A GodMode9 egy nagy tudású szoftver, ami képes módosítani alapvetően bármit a konzolodon. Bár ezen módosítások jelentős része zárolva van egy jogosultsági rendszer segítségével, és lehetetlen veszélyes műveleteket végezni csak úgy véletlenül a védelem feloldása nélkül, fontos, hogy pontosan kövesd az utasításokat, és tarts biztonsági másolatokat.

## GodMode9 frissítése

A lentebbi utasítások egy része csak a legfrissebb GodMode9-on érhető el, emiatt előbb ezt a részt kell végigcsinálnod, mielőtt belekezdenél azokba. Írj felül bármi olyan fájlt, ami már létezik.
{: .notice--info}

### Amire szükséged lesz

* A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)

### Lépések

1. Kapcsold ki a konzolod
1. Helyezd az SD kártyád a számítógépbe
1. Másold át a `GodMode9.firm` fájlt a GodMode9 `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
1. Másold át a `gm9` mappát a GodMode9 `.zip`-ből az SD kártyád gyökerébe
1. Tedd vissza az SD kártyád a konzoldba

GodMode9 most már a legfrissebb.
{: .notice--success}

## Biztonsági másolat készítése a NAND-ról

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
{% include_relative include/nand-backup.txt %}

A NAND mentésed sikeresen létrehozásra került.
{: .notice--success}

## NAND-ról készült bizonsági másolat visszaállítása

1. Kapcsold ki a konzolod
1. Helyezd az SD kártyád a számítógépbe
1. Másold a `<date>_<serialnumber>_sysnand_##.bin` fájlt a számítógépedről az SD kártyád `/gm9/out/` mappájába
1. Tedd vissza az SD kártyád a konzoldba
1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
1. Válaszd a "Scripts..." opciót
1. Válaszd ezt: "GM9Megascript"
1. Válaszd a "Restore Options" opciót
1. Válaszd a "SysNAND Restore (safe)" opciót
1. Válaszd ki a NAND-odról készült biztonsági másolatot
1. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl3) írást, majd sorban nyomd meg a kijelzett gombokat
    + Ez **nem** fogja felülírni a boot9strap installációdat
    + Ez a folyamat igénybe vesz majd némi időt
1. Nyomd meg az (A) gombot a folytatáshoz
1. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
1. Válaszd az "Exit" opciót
1. Nyomd meg az (A) gombot az írási engedélyek visszavonásához

A NAND mentésed sikeresen helyreállításra került. Most már törölheted a `<date>_<serialnumber>_sysnand_###.bin` fájlt az SD kártyádról.
{: .notice--success}

## Bármely .CIA alkalmazás "Health & Safety"-be injektálása

Vedd figyelembe, hogy nem lehetséges a "Health & Safety"-be injektálni nála nagyobb fájlokat (beleértve a játékokat és más, nagy méretű alkalmazásokat)
{: .notice--info}

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Menj ide: `[0:] SDCARD` -> `cias`
1. Nyomj (A) gombot a `.cia` fájlodon a kiválasztásához
1. Válaszd a "CIA image options..." opciót
1. Válaszd a "Mount image to drive" opciót
1. Nyomj (A) gombot az `.app` fájlon
1. Válaszd az "NCCH image options" opciót
1. Válaszd az "Inject to H&S" opciót
1. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
1. Nyomd meg az (A) gombot a folytatáshoz
1. Nyomd meg az (A) gombot az írási engedélyek visszavonásához

A kívánt alkalmazásod most már beinjektálásra került a Health & Safety-be.
{: .notice--success}

## "Health & Safety" visszaállítása .CIA app injektálása után

Ez csak akkor fog működni, ha az injektálást GodMode9 végezte (nem pedig Decrypt9 vagy Hourglass9).
{: .notice--info}

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
1. Válaszd ki a "More..." opciót
1. Válaszd a "Restore H&S" opciót
1. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
1. Nyomd meg az (A) gombot az írási engedélyek visszavonásához

A Health & Safety visszaállításra került normálra.
{: .notice--success}

## SD kártya formázása

**Ne feledd, hogy ez minden adatot töröl az SD kártyádról!**
{: .notice--danger}

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Nyomd meg a (Jobb váll) + (B) gombokat az aktuális SD kártya lecsatolásához és csatlakoztasd a másikat, amit formázni szeretnél
    + Ha GodMode9 inicializációs hibákat mutat a formázandó SD kártya csatlakoztatásakor, akkor az nyugodtan figyelmen kívül hagyhatod
{% include_relative include/format-sd-gm9.txt %}

Az SD kártyád formázva lett az ezen konzollal történő használatához.
{: .notice--success}

## NNID eltávolítása a konzolodról annak formázása nélkül

Ez a folyamat ki fog léptetni az NNID-dből. Az NNID-t továbbra sem fogod tudni használni másik konzolon, mert az NNID továbbra is hozzá lesz kötve a konzolhoz.
{: .notice--info}

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
1. Válaszd a "Scripts..." opciót
1. Válaszd ezt: "GM9Megascript"
1. Válaszd ezt: "Scripts from Plailect's Guide"
1. Válaszd a "Remove NNID" opciót
1. Nyomd meg az (A) gombot a folytatáshoz
1. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
1. Nyomd meg az (A) gombot a folytatáshoz
1. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
1. Válaszd az "Exit" opciót
1. Nyomd meg az (A) gombot az írási engedélyek visszavonásához
1. Nyomd meg a (Start) gombot a konzolod újraindításához

Most már ki vagy lépve a NNID-dből.
{: .notice--success}
