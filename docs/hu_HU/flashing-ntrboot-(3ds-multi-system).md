# Ntrboot flashelése (több 3DS rendszer)

## Kötelező olvasmány

Mielőtt elkezdenénk, bizonyosodj meg róla, hogy mindent elolvastál az [ntrboot](ntrboot)-tal kapcsolatban.

Ehhez a módszerhez szükséged lesz átmenetileg egy második 3DS-családból származó konzolra, amin már telepítve van a boot9strap. Viszont egyik 3DS verziójának sem szükséges támogatnia a flashkártyádat.

::: danger

Vedd figyelembe, hogy néhány ritka esetben lehetséges, hogy a flashelési folyamat során **brickelődjön** néhány hamisított flashkártya és végleg használhatatlanná váljon. Ez elég valószínűtlen, azonban éppen emiatt csak eredeti flashkártyákat támogatunk. Hogy csökkentsd a kockázatát a hamisított kártya megvásárlásának, javasoljuk, hogy egy megbízható oldalról vásárold azt (mint például az [NDS Card](https://www.nds-card.com/)).

:::

## Amire szükséged lesz

- Az ntrboor kompatibilis flashkártyád
- Két konzol a 3DS családból
    - **A forrás 3DS**: egy konzol a 3DS családból, amin már boot9strap fut
    - **A cél 3DS**: egy konzol a 3DS családból, ami gyári firmware-en van
- A [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) v1.3 verziója (közvetlen letöltés)
- A [ntrboot_flasher] legújabb kiadása (https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Lépések

### I. rész - Előkészületek

1. Kapcsold ki a **forrás 3DS**-t
2. Helyezd be a **forrás 3DS** SD kártyáját a számítógépbe
3. Hozz létre egy mappát `ntrboot` néven az SD kártya gyökerében
4. Másold át a `boot9strap_ntr.firm` fájlt és a `boot9strap_ntr.firm.sha` fájlt a boot9strap ntr `.zip` fájlból az SD kártyád `/ntrboot/` mappájába
5. Másold át az `ntrboot_flasher.firm` fájlt a **forrás 3DS** SD kártyáján található `/luma/payloads/` mappába
6. Helyezd vissza a **forrás 3DS** SD kártyáját a **forrás 3DS**-be
7. Helyezd be az ntrboot kompatibilis DS / DSi flashkártyádat a **forrás 3DS**-be

### II. rész - ntrboot flashelése

1. Indítsd el a Luma3DS chainloadert a (Start) lenyomva tartásával boot közben a **forrás 3DS**-en
2. Válaszd az "ntrboot_flasher" opciót
3. Olvasd el a figyelmeztetést a piros képernyőn
4. Nyomd meg az (A) gombot a folytatáshoz
5. Válaszd ki a flashkártyádat
    - Ha nem találod a flashkártyádat a listában felül, olvasd el az alsó képernyőn megjelenő információkat minden opcióra
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

Továbblépés a [boot9strap telepítésére (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
