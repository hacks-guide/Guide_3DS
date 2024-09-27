# Ntrboot flashelése (egy 3DS rendszer)

## Required Reading

Mielőtt elkezdenénk, bizonyosodj meg róla, hogy mindent elolvastál az [ntrboot](ntrboot)-tal kapcsolatban

Ehhez a módszerhez mindössze egy gyári állapotú 3DS-re és egy kompatibilis flashkártyára van szükséged. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt a 3DS-eden. Ez azt jelenti, hogy a flashkártyádnak támogatnia kell `.nds` fájlok futtatását a 3DS-ed verzióján. További információkért lásd a táblázatot az [ntrboot](ntrboot) oldalon.

::: danger

Vedd figyelembe, hogy néhány ritka esetben lehetséges, hogy a flashelési folyamat során **brickelődjön** néhány hamisított flashkártya és végleg használhatatlanná váljon. Ez elég valószínűtlen, azonban éppen emiatt csak eredeti flashkártyákat támogatunk. Hogy csökkentsd a kockázatát a hamisított kártya megvásárlásának, javasoljuk, hogy egy megbízható oldalról vásárold azt (mint például az [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Kapcsold ki a konzolod
2. Helyezd a flashkártyád SD kártyáját a számítógépbe
3. Hozz létre egy mappát `ntrboot` néven a flashkártyád SD kártyájának gyökerében
4. Másold át a `boot9strap_ntr.firm` fájlt a boot9strap ntr `.zip` fájlból a flash kártyád SD kártyájának `/ntrboot/` mappájába
5. Másold az `ntrboot_flasher_nds.nds` fájlt a flashkártyád SD kártyájára
6. Helyezd vissza a flashkártyád SD kártyáját a flashkártyádba
7. Helyezd be az ntrboot kompatibilis DS / DSi flashkártyádat a konzolodba

### Section II - Flashing ntrboot

1. Indítsd el az `ntrboot_flasher_nds.nds` fájlt a konzolodon a flashkártyád segítségével
2. Nyomd meg az (A) gombot a folytatáshoz
3. Használd a (Fel) és (Le) gombokat a flashkártyád kiválasztásához
4. Nyomd meg az (A) gombot a folytatáshoz
5. Válaszd a "Dump flash" opciót, hogy biztonsági másolatot készíts a flashkártyád memóriájáról
6. Írd be a kombinációt a megerősítéshez
7. Nyomd meg az (A) gombot a folytatáshoz
8. Használd a (Fel) és (Le) gombokat a flashkártyád kiválasztásához
9. Nyomd meg az (A) gombot a folytatáshoz
10. Válaszd az "Inject FIRM" opciót, hogy a flashkártyádra telepítsd a boot9strap-et
11. Írd be a kombinációt a megerősítéshez
12. Nyomd meg az (A) gombot a folytatáshoz
13. Kapcsold ki a konzolod

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
