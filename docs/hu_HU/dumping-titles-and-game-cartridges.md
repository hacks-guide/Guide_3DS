# Dumping Titles and Game Cartridges

::: info

Ha segítségre van szükséged GodMode9-nal kapcsolatban (angol nyelven), legyen az scriptelés, vagy a legfrissebb információk beszerzése, csatlakozz a [GodMode9 Discord szerverhez](https://discord.gg/BRcbvtFxX4).

:::

## Kötelező olvasmány

Amellett, hogy létrehozni és helyreállítani képes NAND mentéseket, a GodMode9-nek van olyan funkciója, hogy dumpoljon telepített címeket egy telepíthető `.cia` fájlba, és hogy játék cartridge adatot egy `.3ds` ROM fájlba, és hogy direkt módon telepítsen játék cardridge-eket a rendszerre.

## Updating GodMode9

::: info

Ezek a lépések GodMode9 v2.0.0 vagy későbbi verzióhoz készültek. Ha régebbi GodMode9 verziód van, kövesd a lépéseket a frissítéséhez.

:::

### Amire szükséged lesz

- A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)

### Lépések

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold át a `GodMode9.firm` fájlt a GodMode9 `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
4. Másold át a `gm9` mappát a GodMode9 `.zip`-ből az SD kártyád gyökerébe
5. Tedd vissza az SD kártyád a konzoldba

## Dumping a Game Cartridge

::: info

Helyezd be a konzolodba a menteni kívánt játékkártyát

- 3DS game cartridges will be dumped to a `.3ds` format
- NDS game cartridges will be dumped to a `.nds` format

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Navigálj ide: `[C:] GAMECART`
3. Kövesd az alábbi lépések közül az játékkártyádnak megfelelőt:
   - **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
   - **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
     - Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
4. Válaszd ki ezt: "Copy to 0:/gm9/out"
5. A nem-telepíthető `.3ds` vagy `.nds` formátumú fájlodat az SD kártyád `/gm9/out/` mappájában találod ezután

## Installing a Game Cartridge Directly to the System

::: info

Ez csak 3DS játékokkal működik; nem lehetséges egy NDS játékkártya telepítése a rendszerre, mint cím.

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Navigálj ide: `[C:] GAMECART`
3. Nyomd meg az (A) gombot `[TitleID].trim.3ds`-en, hogy kijelöld, majd válaszd a "NCSD image options..."-t, majd az "Install game image" lehetőséget
4. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
5. Ha egyszer a folyamat kész a játék megjelenik HOME Menüben, mint telepített cím.

## Dumping a 3DS Game Cartridge to .CIA

::: info

Ezt csak akkor ajánlott használni, ha a [Játékkártya telepítése közvetlenül a rendszerre](#installing-a-game-cartridge-directly-to-the-system) nem működik.

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Navigálj ide: `[C:] GAMECART`
3. Nyomd meg az (A) gombot `[TitleID].trim.3ds`-en, hogy kijelöld, majd válaszd a "NCSD image options..."-t, majd az "Build CIA from file" lehetőséget
4. A telepíthető `.cia` formátumú fájlodat az SD kártyád `/gm9/out/` mappájában találod ezután

## Dumping an Installed Title

::: info

Lehetővé teszi a Rendszer- és Felhasználó által telepített digitális címeket, mint azokat, amiket amelyek az eShop-ból kerültek letöltésre.

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
3. Választ a "Title manager"-t
4. Válaszd a következők egyikét attól függően, hogy milyen típusú címeket kíván dumpolni
   - **User Installed Title**: `[A:] SD CARD`
   - **System Title / DSiWare**: `[1:] NAND / TWL`
5. Válaszd ki a címet, amit dumpolni szeretnél
6. Válaszd a "Manage Title..." opciót
7. Válaszd a "Build CIA (standard)" menüpontot
8. A telepíthető `.cia` formátumú fájlodat az SD kártyád `/gm9/out/` mappájában találod ezután

## Backup GBA VC Saves

::: info

A játék az SD kártyád `/gm9/out/` mappájába kerül kimentésre `<TitleID>.gbavc.sav` néven.

:::

::: info

Egy `<TitleID>.gbavc.sav` fájl Title ID-jének azonosításához használhatod a Title ID-k listáját a rendszeren a (Home) gombot megnyomásával az akció menüt előhozva, majd a `Title manager`-t választva és utána kiválasztva az `[A:] SD CARD` opciót.

:::

1. Csináld végig az alábbi lépéseket minden egyes GBA VC játékhoz, aminek a mentését vissza akarod állítani:
   - Indítsd el a GBA VC játékot
   - Lépj ki a GBA VC játékból
   - Kapcsold ki a konzolod
   - Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
   - Menj ide: `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Nyomd meg az (A) gombot a folytatáshoz
   - Nyomd meg a (Start) gombot a konzolod újraindításához

## Restore GBA VC Saves

::: info

Egy `<TitleID>.gbavc.sav` fájl Title ID-jének azonosításához használhatod a Title ID-k listáját a rendszeren a (Home) gombot megnyomásával az akció menüt előhozva, majd a `Title manager`-t választva és utána kiválasztva az `[A:] SD CARD` opciót.

:::

1. Csináld végig az alábbi lépéseket minden egyes GBA VC játékhoz, aminek a mentését vissza akarod állítani:
   - Indítsd el a GBA VC játékot
   - Lépj ki a GBA VC játékból
   - Kapcsold ki a konzolod
   - Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
   - Menj ide: `[0:] SDCARD` -> `gm9` -> `out`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
   - Menj ide: `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Nyomd meg az (A) gombot a folytatáshoz
   - Nyomd meg a (Start) gombot a konzolod újraindításához
   - Indítsd el a GBA VC játékot
   - Lépj ki a GBA VC játékból

## Encrypting / Decrypting a .CIA file

::: info

A rend kedvéért, másold a titkosítani vagy visszafejteni kívánt `.cia` fájljaidat az SD kártyád `/cias/` mappájába

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Menj ide: `[0:] SDCARD` -> `cias`
3. Nyomd meg az (A)-t a `.cia` fájlon, hogy kijelöld, majd válaszd a "CIA image options..." opciót
4. Válaszd ki a megfelelő opciót attól függően, hogy mit szeretnél csinálni:
   - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
   - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. A titkosított / visszafejtett `.cia` fájlodat ezután megtalálod a kívánt helyen
