# Ntrboot flashelése (több 3DS rendszer)

## Required Reading

Mielőtt elkezdenénk, bizonyosodj meg róla, hogy mindent elolvastál az [ntrboot](ntrboot)-tal kapcsolatban.

Ehhez a módszerhez szükséged lesz átmenetileg egy második 3DS-családból származó konzolra, amin már telepítve van a boot9strap. Viszont egyik 3DS verziójának sem szükséges támogatnia a flashkártyádat.

::: danger

Vedd figyelembe, hogy néhány ritka esetben lehetséges, hogy a flashelési folyamat során **brickelődjön** néhány hamisított flashkártya és végleg használhatatlanná váljon. Ez elég valószínűtlen, azonban éppen emiatt csak eredeti flashkártyákat támogatunk. Hogy csökkentsd a kockázatát a hamisított kártya megvásárlásának, javasoljuk, hogy egy megbízható oldalról vásárold azt (mint például az [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
  - **The source 3DS**: the 3DS family console that is already running boot9strap
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. Kapcsold ki a **forrás 3DS**-t
2. Helyezd be a **forrás 3DS** SD kártyáját a számítógépbe
3. Hozz létre egy mappát `ntrboot` néven az SD kártya gyökerében
4. Másold át a `boot9strap_ntr.firm` fájlt és a `boot9strap_ntr.firm.sha` fájlt a boot9strap ntr `.zip` fájlból az SD kártyád `/ntrboot/` mappájába
5. Másold át az `ntrboot_flasher.firm` fájlt a **forrás 3DS** SD kártyáján található `/luma/payloads/` mappába
6. Helyezd vissza a **forrás 3DS** SD kártyáját a **forrás 3DS**-be
7. Helyezd be az ntrboot kompatibilis DS / DSi flashkártyádat a **forrás 3DS**-be

### Section II - Flashing ntrboot

1. Indítsd el a Luma3DS chainloadert a (Start) lenyomva tartásával boot közben a **forrás 3DS**-en
2. Válaszd az "ntrboot_flasher" opciót
3. Olvasd el a figyelmeztetést a piros képernyőn
4. Nyomd meg az (A) gombot a folytatáshoz
5. Válaszd ki a flashkártyádat
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Válaszd a "Dump Flash" opciót
7. Várj, amíg a folyamat befejeződik
8. Nyomd meg az (A) gombot a folytatáshoz
9. Nyomd meg az (A) gombot, hogy visszakerülj a főmenübe
10. Válaszd az "Inject Ntrboot" opciót
11. Nyomd meg az (A) gombot, hogy kiválaszd a "retail unit ntrboot"-ot
12. Várj, amíg a folyamat befejeződik
13. Nyomd meg az (A) gombot, hogy visszakerülj a főmenübe
14. Nyomd meg a (B) gombot a **forrás 3DS** kikapcsolásához

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
