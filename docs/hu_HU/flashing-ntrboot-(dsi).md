# Ntrboot flashelése (DSi)

## Required Reading

Mielőtt elkezdenénk, bizonyosodj meg róla, hogy mindent elolvastál az [ntrboot](ntrboot)-tal kapcsolatban

Ehhez a módszerhez szükséged lesz átmenetileg egy Nintendo DSi készülékre, ami kompatibilis a flashkártyáddal. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt a DSi-den. Ez azt jelenti, hogy a flashkártyádnak támogatnia kell `.nds` fájlok futtatását azon a verzión, amin a DSi-d áll. További információkért lásd a táblázatot az [ntrboot](ntrboot) oldalon.

::: danger

Vedd figyelembe, hogy néhány ritka esetben lehetséges, hogy a flashelési folyamat során **brickelődjön** néhány hamisított flashkártya és végleg használhatatlanná váljon. Ez elég valószínűtlen, azonban éppen emiatt csak eredeti flashkártyákat támogatunk. Hogy csökkentsd a kockázatát a hamisított kártya megvásárlásának, javasoljuk, hogy egy megbízható oldalról vásárold azt (mint például az [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Kapcsold ki a **forrás DSi**-t
2. Helyezd a flashkártyád SD kártyáját a számítógépbe
3. Másold a `ds_ntrboot_flasher_dsi.nds` fájlt a flashkártyád SD kártyájára
4. Helyezd vissza a flashkártyád SD kártyáját a flashkártyádba
5. Helyezd be az ntrboot kompatibilis DS / DSi flashkártyádat a **forrás DSi**-be

### Section II - Flashing ntrboot

1. Indítsd el a `ds_ntrboot_flasher_dsi.nds` fájlt **a forrás DSi-n** a flashkártyád segítségével
2. Nyomd meg az (A) gombot a folytatáshoz
3. Használd a (Fel) és (Le) gombokat a flashkártyád kiválasztásához
4. Nyomd meg az (A) gombot a folytatáshoz
5. Nyomd meg az (A) gombot, hogy elvégezd az "inject ntrboothax" folyamatot
6. Nyomd meg az (A) gombot, hogy kiválaszd a "RETAIL" opciót
7. Nyomd meg az (A) gombot a folytatáshoz
8. Válaszd az "EXIT" opciót

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
