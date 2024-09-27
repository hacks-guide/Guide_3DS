# Updating B9S

## Required Reading

Ez az oldal azoknak a felhasználóknak szól, akik már rendelkeznek telepített boot9strap-pel, és szeretnék frissíteni azt a legfrissebb verzióra.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

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

### Section II - Installing boot9strap

1. Kapcsold be a konzolod
   - This should automatically launch SafeB9SInstaller
2. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
3. Ha ez elkészült, kényszerítsd a konzolod leállásra a bekapcsológomb lenyomva tartásával
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. Helyezd az SD kártyád a számítógépbe
2. Másold át a `boot.firm` és `boot.3dsx` fájlt a Luma3DS `.zip`-ből az SD kártyád gyökerébe, és cseréld le a már meglévő fájlt
3. Tedd vissza az SD kártyád a konzoldba
4. Kapcsold be a konzolod
5. Ha a konzolod a Luma3DS konfigurációs menübe bootolt, nyomj (Start) gombot a mentéshez és az újraindításhoz
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Sok ezek közül a beállítások közül hasznos az egyedivé tételhez vagy a debuggoláshoz
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
