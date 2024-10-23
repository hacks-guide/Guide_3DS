# B9S frissítése

## Kötelező olvasmány

Ez az oldal azoknak a felhasználóknak szól, akik már rendelkeznek telepített boot9strap-pel, és szeretnék frissíteni azt a legfrissebb verzióra.

## Amire szükséged lesz

- A [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) legfrissebb verziója (közvetlen letöltés)
- A [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) legfrissebb verziója (közvetlen letöltés)
- A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)

## Lépések

### I. rész - Előkészületek

::: info

A most következő lépésekben mindig írd felül az SD kártyán található fájlokat, ha már létezne bármelyik.

:::

1. Helyezd az SD kártyád a számítógépbe
2. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
3. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
4. Másold a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád gyökerébe, majd nevezd át `boot.firm`-re
5. Tedd vissza az SD kártyád a konzoldba

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### II. rész - boot9strap telepítése

1. Kapcsold be a konzolod
   - Ennek automatikusan indítania kell a SafeB9SInstaller-t
2. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - Ha egy lépés az alsó képernyőn piros színű szöveget eredményez, és nem kér a rendszer tőled egy gomb-kombinációt, akkor [kövesd ezt a hibaelhárítási útmutatót](troubleshooting-updating-b9s)
3. Ha ez elkészült, kényszerítsd a konzolod leállásra a bekapcsológomb lenyomva tartásával
   - A konzolod csak addig fog a SafeB9SInstaller képernyőre bootolni, amíg a következő részt be nem fejezed

### III. rész - Luma3DS frissítése

1. Helyezd az SD kártyád a számítógépbe
2. Másolj mindent a Luma3DS `.zip`-ből az SD kártyád gyökerébe, és cseréld le a már meglévő fájlt
3. Tedd vissza az SD kártyád a konzoldba
4. Kapcsold be a konzolod
5. Ha a konzolod a Luma3DS konfigurációs menübe bootolt, nyomj (Start) gombot a mentéshez és az újraindításhoz
   - A Luma3DS konfigurációs menü a beállítások a Luma3DS egyedi firmware-hez. Sok ezek közül a beállítások közül hasznos az egyedivé tételhez vagy a debuggoláshoz
   - Az útmutató céljának megfeleléshez ezen beállítások alapértelmezett állapoton lesznek hagyva

___

::: tip

Tovább a [telepítés véglegesítésére](finalizing-setup)

:::
