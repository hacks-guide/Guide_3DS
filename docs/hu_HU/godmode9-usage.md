# GodMode9 használata

::: info

A cartridge-ek vagy SD kártya tartalom dumpolásáról információkért, tekintsd meg a [A címek és játék cartridge-ek dumpolása](dumping-titles-and-game-cartridges) oldalt.

:::

::: info

Ha segítségre van szükséged GodMode9-nal kapcsolatban (angol nyelven), legyen az scriptelés, vagy a legfrissebb információk beszerzése, csatlakozz a [GodMode9 Discord szerverhez](https://discord.gg/BRcbvtFxX4).

:::

## Kötelező olvasmány

A GodMode9 egy teljes hozzáférést biztosító fájlkezelő a Nintendo 3DS konzolhoz, amely hozzáférést ad az SD kártyához, a SysNAND-od és EmuNAND-od FAT partícióihoz, és alapvetően bármi máshoz. Sok más funkció mellett lehetőséged van másolni, törölni, átnevezni fájlokat és létrehozni mappákat.

Vedd figyelembe, hogy amennyiben van más payload fájl a `GodMode9.firm` fájlon kívül a `/luma/payloads/`mappában, indításkor a (Start) gombot lenyomva tartva a "chainloader menu" menü fog megjelenni. Itt a D-Pad és az (A) gomb segítségével válaszd a "GodMode9" opciót, hogy az alábbi utasításokat követhesd.

A GodMode9 egy nagy tudású szoftver, ami képes módosítani alapvetően bármit a konzolodon. Bár ezen módosítások jelentős része zárolva van egy jogosultsági rendszer segítségével, és lehetetlen veszélyes műveleteket végezni csak úgy véletlenül a védelem feloldása nélkül, fontos, hogy pontosan kövesd az utasításokat, és tarts biztonsági másolatokat.

## GodMode9 frissítése

::: info

A lentebbi utasítások egy része csak a legfrissebb GodMode9-on érhető el, emiatt előbb ezt a részt kell végigcsinálnod, mielőtt belekezdenél azokba. Írj felül bármi olyan fájlt, ami már létezik.

:::

### Amire szükséged lesz

- A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)

### Lépések

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold át a `GodMode9.firm` fájlt a GodMode9 `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
4. Másold át a `gm9` mappát a GodMode9 `.zip`-ből az SD kártyád gyökerébe
5. Tedd vissza az SD kártyád a konzoldba

::: tip

GodMode9 most már a legfrissebb.

:::

## Creating a NAND Backup

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et

<!--@include: ./_include/nand-backup.md -->

::: tip

A NAND mentésed sikeresen létrehozásra került.

:::

## Restoring a NAND Backup

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold a `<date>_<serialnumber>_sysnand_##.bin` fájlt a számítógépedről az SD kártyád `/gm9/out/` mappájába
4. Tedd vissza az SD kártyád a konzoldba
5. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
6. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
7. Válaszd a "Scripts..." opciót
8. Válaszd ezt: "GM9Megascript"
9. Válaszd a "Restore Options" opciót
10. Válaszd a "SysNAND Restore (safe)" opciót
11. Válaszd ki a NAND-odról készült biztonsági másolatot
12. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl3) írást, majd sorban nyomd meg a kijelzett gombokat
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Nyomd meg az (A) gombot a folytatáshoz
14. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
15. Válaszd az "Exit" opciót
16. Nyomd meg az (A) gombot az írási engedélyek visszavonásához

::: tip

A NAND mentésed sikeresen helyreállításra került. Most már törölheted a `<date>_<serialnumber>_sysnand_###.bin` fájlt az SD kártyádról.

:::

## Injecting any .CIA app into Health & Safety

::: info

Vedd figyelembe, hogy nem lehetséges a "Health & Safety"-be injektálni nála nagyobb fájlokat (beleértve a játékokat és más, nagy méretű alkalmazásokat)

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Menj ide: `[0:] SDCARD` -> `cias`
3. Nyomj (A) gombot a `.cia` fájlodon a kiválasztásához
4. Válaszd a "CIA image options..." opciót
5. Válaszd a "Mount image to drive" opciót
6. Nyomj (A) gombot az `.app` fájlon
7. Válaszd az "NCCH image options" opciót
8. Válaszd az "Inject to H&S" opciót
9. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
10. Nyomd meg az (A) gombot a folytatáshoz
11. Nyomd meg az (A) gombot az írási engedélyek visszavonásához

::: tip

A kívánt alkalmazásod most már beinjektálásra került a Health & Safety-be.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

Ez csak akkor fog működni, ha az injektálást GodMode9 végezte (nem pedig Decrypt9 vagy Hourglass9).

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
3. Válaszd ki a "More..." opciót
4. Válaszd a "Restore H&S" opciót
5. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
6. Nyomd meg az (A) gombot az írási engedélyek visszavonásához

::: tip

A Health & Safety visszaállításra került normálra.

:::

## Format an SD card

::: danger

**Ne feledd, hogy ez minden adatot töröl az SD kártyádról!**

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Nyomd meg a (Jobb váll) + (B) gombokat az aktuális SD kártya lecsatolásához és csatlakoztasd a másikat, amit formázni szeretnél
   - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Az SD kártyád formázva lett az ezen konzollal történő használatához.

:::

## Removing an NNID without formatting your console

::: info

Ez a folyamat ki fog léptetni az NNID-dből. Az NNID-t továbbra sem fogod tudni használni másik konzolon, mert az NNID továbbra is hozzá lesz kötve a konzolhoz.

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
3. Válaszd a "Scripts..." opciót
4. Válaszd ezt: "GM9Megascript"
5. Válaszd ezt: "Scripts from Plailect's Guide"
6. Válaszd a "Remove NNID" opciót
7. Nyomd meg az (A) gombot a folytatáshoz
8. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
9. Nyomd meg az (A) gombot a folytatáshoz
10. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
11. Válaszd az "Exit" opciót
12. Nyomd meg az (A) gombot az írási engedélyek visszavonásához
13. Nyomd meg a (Start) gombot a konzolod újraindításához

::: tip

Most már ki vagy lépve a NNID-dből.

:::
