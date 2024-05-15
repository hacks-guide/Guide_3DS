---
title: "Címek és Játékkártyák tartalmának dumpolása"
---

{% include toc title="Tartalomjegyzék" %}

Ha segítségre van szükséged GodMode9-nal kapcsolatban (angol nyelven), legyen az scriptelés, vagy a legfrissebb információk beszerzése, csatlakozz a [GodMode9 Discord szerverhez](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Fontos tudnivalók

Amellett, hogy létrehozni és helyreállítani képes NAND mentéseket, a GodMode9-nek van olyan funkciója, hogy dumpoljon telepített címeket egy telepíthető `.cia` fájlba, és hogy játék cartridge adatot egy `.3ds` ROM fájlba, és hogy direkt módon telepítsen játék cardridge-eket a rendszerre.

## GodMode9 frissítése

Ezek a lépések GodMode9 v2.0.0 vagy későbbi verzióhoz készültek. Ha régebbi GodMode9 verziód van, kövesd a lépéseket a frissítéséhez.
{: .notice--info}

### Amire szükséged lesz

* A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)

### Lépések

1. Kapcsold ki a konzolod
1. Helyezd az SD kártyád a számítógépbe
1. Másold át a `GodMode9.firm` fájlt a GodMode9 `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
1. Másold át a `gm9` mappát a GodMode9 `.zip`-ből az SD kártyád gyökerébe
1. Tedd vissza az SD kártyád a konzoldba

## Játékkártya tartalmának dumpolása

{% capture notice %}
Helyezd be a konzolodba a menteni kívánt játékkártyát
+ A 3DS játékkártyák `.3ds` formátumba lesznek mentve
+ Az NDS játékkártyák telepíthető `.nds` formátumba lesznek mentve
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Navigálj ide: `[C:] GAMECART`
1. Kövesd az alábbi lépések közül az játékkártyádnak megfelelőt:
    + **3DS játékkártya:** Nyomd meg az (A)-t a `[TitleID].trim.3ds` fájlon, hogy kijelöld
    + **NDS játékkártya:** Nyomd meg az (A)-t a `[TitleID].nds` fájlon, hogy kijelöld
        + Trimmelt dumpok nem ajánlottak NDS játékokhoz általánosan, mert különböző visszajátszási problémákat okozhatnak
1. Válaszd ki ezt: "Copy to 0:/gm9/out"
1. A nem-telepíthető `.3ds` vagy `.nds` formátumú fájlodat az SD kártyád `/gm9/out/` mappájában találod ezután

## Játékkártya telepítése közvetlenül a rendszerre

Ez csak 3DS játékokkal működik; nem lehetséges egy NDS játékkártya telepítése a rendszerre, mint cím.
{: .notice--info}

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Navigálj ide: `[C:] GAMECART`
1. Nyomd meg az (A) gombot `[TitleID].trim.3ds`-en, hogy kijelöld, majd válaszd a "NCSD image options..."-t, majd az "Install game image" lehetőséget
1. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
1. Ha egyszer a folyamat kész a játék megjelenik HOME Menüben, mint telepített cím.

## 3DS Játékkártya dumpolása .CIA fájlba

Ezt csak akkor ajánlott használni, ha a [Játékkártya telepítése közvetlenül a rendszerre](#installing-a-game-cartridge-directly-to-the-system) nem működik.
{: .notice--info}

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Navigálj ide: `[C:] GAMECART`
1. Nyomd meg az (A) gombot `[TitleID].trim.3ds`-en, hogy kijelöld, majd válaszd a "NCSD image options..."-t, majd az "Build CIA from file" lehetőséget
1. A telepíthető `.cia` formátumú fájlodat az SD kártyád `/gm9/out/` mappájában találod ezután

## Telepített alkalmazás dumpolása

Lehetővé teszi a Rendszer- és Felhasználó által telepített digitális címeket, mint azokat, amiket amelyek az eShop-ból kerültek letöltésre.
{: .notice--info}

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
1. Választ a "Title manager"-t
1. Válaszd a következők egyikét attól függően, hogy milyen típusú címeket kíván dumpolni
    + **Felhasználó által telepített alkalmazás**: `[A:] SD CARD`
    + **Rendszeralkalmazás / DSiWare**: Menj ide: `[1:] NAND / TWL`
1. Válaszd ki a címet, amit dumpolni szeretnél
1. Válaszd a "Manage Title..." opciót
1. Válaszd a "Build CIA (standard)" menüpontot
1. A telepíthető `.cia` formátumú fájlodat az SD kártyád `/gm9/out/` mappájában találod ezután

## Mentés készítése GBA VC mentésekről

A játék az SD kártyád `/gm9/out/` mappájába kerül kimentésre `<TitleID>.gbavc.sav` néven.
{: .notice--info}

Egy `<TitleID>.gbavc.sav` fájl Title ID-jének azonosításához használhatod a Title ID-k listáját a rendszeren a (Home) gombot megnyomásával az akció menüt előhozva, majd a `Title manager`-t választva és utána kiválasztva az `[A:] SD CARD` opciót.
{: .notice--info}

1. Csináld végig az alábbi lépéseket minden egyes GBA VC játékhoz, aminek a mentését vissza akarod állítani:
    + Indítsd el az adott GBA VC játékot
    + Lépj ki belőle
    + Kapcsold ki a konzolod
    + Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
    + Menj ide: `[S:] SYSNAND VIRTUAL`
    + Nyomd meg az (A) gombot a `agbsave.bin` fájlon, hogy kijelöld
    + Válaszd az "AGBSAVE options..." opciót
    + Válaszd a "Dump GBA VC save" opciót
    + Nyomd meg az (A) gombot a folytatáshoz
    + Nyomd meg a (Start) gombot a konzolod újraindításához

## GBA VC mentések visszaállítása

Egy `<TitleID>.gbavc.sav` fájl Title ID-jének azonosításához használhatod a Title ID-k listáját a rendszeren a (Home) gombot megnyomásával az akció menüt előhozva, majd a `Title manager`-t választva és utána kiválasztva az `[A:] SD CARD` opciót.
{: .notice--info}

1. Csináld végig az alábbi lépéseket minden egyes GBA VC játékhoz, aminek a mentését vissza akarod állítani:
    + Indítsd el az adott GBA VC játékot
    + Lépj ki belőle
    + Kapcsold ki a konzolod
    + Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
    + Menj ide: `[0:] SDCARD` -> `gm9` -> `out`
    + Nyomd meg az (Y) gombot a visszaállítani kívánt `<TitleID>.gbavc.sav` fájlon, hogy kimásold
    + Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
    + Menj ide: `[S:] SYSNAND VIRTUAL`
    + Nyomd meg az (A) gombot a `agbsave.bin` fájlon, hogy kijelöld
    + Válaszd az "AGBSAVE options..." opciót
    + Válaszd az "Inject GBA VC save" opciót
    + Nyomd meg az (A) gombot a folytatáshoz
    + Nyomd meg a (Start) gombot a konzolod újraindításához
    + Indítsd el az adott GBA VC játékot
    + Lépj ki belőle

## .CIA fájl titkosítása / visszafejtése

A rend kedvéért, másold a titkosítani vagy visszafejteni kívánt `.cia` fájljaidat az SD kártyád `/cias/` mappájába
{: .notice--info}

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Menj ide: `[0:] SDCARD` -> `cias`
1. Nyomd meg az (A)-t a `.cia` fájlon, hogy kijelöld, majd válaszd a "CIA image options..." opciót
1. Válaszd ki a megfelelő opciót attól függően, hogy mit szeretnél csinálni:
    + **Encrypt to 0:/gm9/out:** Létrehoz egy titkosított másolatot a kiválasztott `.cia` fájlból az SD kártyád `/gm9/out/` mappájában
    + **Decrypt to 0:/gm9/out:** Létrehoz egy titkosítatlan másolatot a kiválasztott `.cia` fájlból az SD kártyád `/gm9/out/` mappájában
    + **Encrypt inplace:** Cseréli a kijelölt `.cia` fájlt a titkosított változatára
    + **Decrypt inplace:** Cseréli a kijelölt `.cia` fájlt a titkosítatlan változatára
1. A titkosított / visszafejtett `.cia` fájlodat ezután megtalálod a kívánt helyen
