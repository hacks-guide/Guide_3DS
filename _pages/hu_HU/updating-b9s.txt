---
title: "B9S frissítése"
---

{% include toc title="Tartalomjegyzék" %}

### Fontos tudnivalók

Ez az oldal azoknak a felhasználóknak szól, akik már rendelkeznek telepített boot9strap-pel, és szeretnék frissíteni azt a legfrissebb verzióra.

### Amire szükséged lesz

* A [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) legfrisseb verziója (közvetlen letöltés)
* A [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) legfrisseb verziója (közvetlen letöltés)
* A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)

### Lépések

#### I. rész - Előkészületek

A most következő lépésekben mindig írd felül az SD kártyán található fájlokat, ha már létezne bármelyik.
{: .notice--info}

1. Helyezd az SD kártyád a számítógépbe
1. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
1. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
1. Másold a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád gyökerébe, majd nevezd át `boot.firm`-re
1. Tedd vissza az SD kártyád a konzoldba

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### II. rész - boot9strap telepítése

1. Kapcsold be a konzolod
    + Ennek automatikusan indítania a SafeB9SInstaller-t
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### III. rész - Luma3DS frissítése

1. Helyezd az SD kártyád a számítógépbe
1. Másold át a `boot.firm` és `boot.3dsx` fájlt a Luma3DS `.zip`-ből az SD kártyád gyökerébe, és cseréld le a már meglévő fájlt
1. Tedd vissza az SD kártyád a konzoldba
1. Kapcsold be a konzolod
1. Ha a konzolod a Luma3DS konfigurációs menübe bootolt, nyomj (Start) gombot a mentéshez és az újraindításhoz
    + A Luma3DS konfigurációs menü a beállítások a Luma3DS egyedi firmverhez. Sok ezek közül a beállítások közül hasznos az egyedivé tételhez vagy a debuggoláshoz
    + Az útmutató céljának megfeleléshez ezen beállítások alapértelmezett állapoton lesznek hagyva

___

### Tovább a [telepítés véglegesítésére](finalizing-setup)
{: .notice--primary}
