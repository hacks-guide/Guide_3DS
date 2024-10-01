# Updating B9S

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
   - This should automatically launch SafeB9SInstaller
2. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
3. Ha ez elkészült, kényszerítsd a konzolod leállásra a bekapcsológomb lenyomva tartásával
   - A konzolod csak addig fog a SafeB9SInstaller képernyőre bootolni, amíg a következő részt be nem fejezed

### III. rész - Luma3DS frissítése

1. Helyezd az SD kártyád a számítógépbe
2. Copy everything from the Luma3DS `.zip` to the root of your SD card, replacing any existing files
3. Tedd vissza az SD kártyád a konzoldba
4. Kapcsold be a konzolod
5. Ha a konzolod a Luma3DS konfigurációs menübe bootolt, nyomj (Start) gombot a mentéshez és az újraindításhoz
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Sok ezek közül a beállítások közül hasznos az egyedivé tételhez vagy a debuggoláshoz
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
