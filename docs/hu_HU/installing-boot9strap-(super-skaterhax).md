---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Boot9strap telepítése (super-skaterhax)

:::details Technikai részletek (opcionális)

A technikai részletei az ezen az oldalon használt exploit-oknak [itt](https://github.com/zoogie/super-skaterhax) találhatók.

:::

### Kompatibilitási megjegyzések

A super-skaterhax (ami a Homebrew Launcher indítására használt) kompatibilis a 11.15.0 és a feletti verziós New modellekkel minden régióban.

::: info

Erről az expliotról ismert, hogy inkonzisztens: működik egyeseknek, de nem másoknak. Ha egy sokkal konzisztensebb megoldás használatát preferálod (ami tovább tart, de ugyanaz lesz a végeredménye), akkor használd az [MSET9](installing-boot9strap-\(mset9\)) metódust helyette.

:::

### Amire szükséged lesz

- A [Super-skaterhax](https://skater.nintendohomebrew.com) zip konzolod verziójának és régiójának megfelelő változata

#### I. rész - Előkészületek

Ebben a fejezetben fel fogod másolni a fájlokat, amik a super-skaterhax és a Homebrew Launcher triggereléshez szükségesek.

1. Kapcsold ki a konzolod

2. Helyezd az SD kártyád a számítógépbe

3. Másolj át a mindent a uper-skaterhax `.zip`-ből az SD kártyád gyökerébe, felülírva minden már ott lévő fájlt

    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

4. Tedd vissza az SD kártyád a konzoldba

5. Kapcsold be a konzolod

6. Indítsd el a System Settings-et

7. Válaszd az "Other Settings"-t

8. Navigálj a "Profile" -> "Region Settings" opcióhoz
    - Ezek a beállítások átmenetileg megváltoznak, hogy növeljék az exploit sikerarányát
    - Visszaállíthatod a régiós beállításaidat a normálisra, amint befejezted ezt az oldalt
    - Ha egy [warning](/images/screenshots/skaterhax/country-change-notice.png)-ot kapsz, amit azt mondja, hogy el fogod veszíteni a a hozzáférést a Nintendo Network ID funkciókhoz, akkor biztonságosan kiválaszthatod az OK-t a folytatáshoz

9. Válaszd ki a következő opciókat a konzolod régiójának megfelelően ([kép](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. Navigálj a "Date & Time"-hoz

11. Állítsd be a "Today's Date"-t és a "Current Time"-ot az időzónád aktuális dátumára és idejére

12. Lépj ki a System Settings-ből

#### II. rész - super-skaterhax

Ebben a fejezetben meg fogod látogatni a browser exploit weboldalt, ami elindítja a Homebrew Launcher-t.

::: info

Egy videó ami részletesen bemutatja a lépéseket elérhető [itt](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Nyisd meg az Internet Browser-t
2. Érintsd meg a 3-vonal (☰) ikont a jobb alsó sarkában a képernyőnek
3. Érintsd meg a `Settings` -> lefelé görget-> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK` opciókat
    - A böngésző be fog zárulni
4. Nyisd meg újra az Internet Browser-t
5. Érintsd meg a `Next` -> `Google` -> `OK` -> `OK` opciókat
6. Érintsd meg a címsort az alsó képernyő tetején
7. Írd be a konzolod régiójának megfelelő címet:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Érintsd meg az "Open"-t
    - Látnod kell a "GO GO!" feliratot. Még ne kattints rá
9. Érintsd meg a 3-vonal (☰) ikont a jobb alsó sarkában a képernyőnek
10. Érintsd meg az "Add to Bookmarks" opciót
11. Érintsd meg a 3-vonal (☰) ikont a jobb alsó sarkában a képernyőnek
12. Érintsd meg a `Settings` -> `Delete Cookies` -> `Yes` opciókat
13. Nyomj (Home) gombot a HOME Menübe visszatéréshez, majd azonnal nyisd meg újra az Internet Browser-t
14. Várj, amíg az oldal teljesen betöltődik, majd érintsd meg a "GO GO!" gombot az alsó képernyő tetején
15. Várj, amíg az oldal teljesen betöltődik, majd nyomj (A) gombot a felugró [popup](/images/screenshots/skaterhax/skater-popup.png) figyelmen kívül hagyásához
16. Ha a konzolod megjeleníti a következők valamelyikét:
    - **A "Homebrew Launcher" képernyő**: Folytatsd a következő lépéssel
    - **Egy fehér "Error has occurred" üzenetdoboz**: Az exploit sikertelen volt egy véletlen esély miatt. Nyisd meg a System Settings-t és módosítsd a nyelvet egy másikra (ha lehetséges) majd próbáld újra ezt a részt. Elképzelhető, hogy tízszer is meg kell ismételned ezt a részt
        - A JPN/KOR régiós konzolokon csak egy nyelv van a beállításokban. Ezeken a konzolokon meg kell nyitnod a System Settings-t, majd bezárnod és újra próbálnod ezt a részt
        - Ha az exploit sikertelen volt több, mint öt alkalommal, lehet, hogy problémák vannak a fájljaiddal vagy az előkészületekkel. Ügyelj arra, hogy a régió és a dátum/idő helyes legyen, és hogy ezt a részt **pontosan** követed. Ha WinRAR-t használtál a fájlok kicsomagolásához az SD kártyára, akkor csomagold ki újra azokat a Fájlkezelő vagy a 7-zip programmal helyette
        - Ha az exploit tíz próbálkozást követően még mindig sikertelen, kövesd az [MSET9](installing-boot9strap-\(mset9\))-et helyette
    - **Egy fekete képernyő mondja "An error has occurred"**: A fájlok nem jó helyre lettek rakva. Biztosítsd, hogy a super-skaterhax fájlok az SD kártya gyökerébe kerüljenek
    - **Egy sárga képernyő**: Homebrew Launcher véletlen esély miatt nem tudott megnyílni. Tartsd nyomva a POWER gombot, amíg ki nem kapcsol a konzol, és próbáld újra ezt a részt
    - **[A "Text"szöveg](/images/screenshots/skaterhax/skater-old3ds.png)**: Old 3DS-ed van és ez az exploit **nem fog működni**. Ha ez az eset, használd az [MSET9](installing-boot9strap-\(mset9\))-et helyette
17. Indítsd el a nimdsphax-et a homebrew listájáról
18. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
    - Ha a konzolod lefagy egy vörös vagy zöld képernyőn, tartsd nyomva a POWER gombot, amíg ki nem kapcsol, és próbáld újra ezt a részt

#### III. rész - boot9strap telepítése

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
    - Ha egy lépés az alsó képernyőn piros színű szöveget eredményez, és nem kér a rendszer tőled egy gomb-kombinációt, akkor [kövesd ezt a hibaelhárítási útmutatót](troubleshooting-super-skaterhax)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Most már visszaállíthatod a régiós beállításaidat a normálisra.

:::

::: tip

Tovább a [telepítés véglegesítésére](finalizing-setup)

:::
