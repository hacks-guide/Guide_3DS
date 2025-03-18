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

::: danger

# This method is currently **not working** due to server-side SSL certificate changes. The timeline for a fix is unknown. In the meantime, follow [Installing boot9strap (MSET9)](installing-boot9strap-\(mset9\)) instead.

[![distraction so that people don't look at the rest of the page](/images/distraction.gif)](installing-boot9strap-\(mset9\))

:::

:::details Technikai részletek (opcionális)

A technikai részletei az ezen az oldalon használt exploit-oknak [itt](https://github.com/zoogie/super-skaterhax) találhatók.

:::

### Kompatibilitási megjegyzések

A super-skaterhax (ami a Homebrew Launcher indítására használt) kompatibilis a 11.15.0 és a feletti verziós New modellekkel minden régióban.

::: warning

A megadott lépések csak a New 3DS, New 3DS XL és New 2DS XL típusokra vonatkoznak. Mielőtt folytatnád, kérjük ellenőrizd, hogy a moddolandó konzolod New 3DS, New 3DS XL, vagy New 2DS XL.

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

10. Lépj ki a System Settings-ből

#### II. rész - super-skaterhax

Ebben a fejezetben meg fogod látogatni a browser exploit weboldalt, ami elindítja a Homebrew Launcher-t.

::: info

Ha még nem történt meg, biztosítsd, hogy legyen működő Internet kapcsolata a konzolodnak.

:::

1. A HOME menüben nyomd meg a bal és jobb váll gombokat egyszerre, hogy megnyisd a kamerát
    - Ha nem tudod megnyitni a kamerát, nyisd meg az Internet Browser-t kézzel, és írd be az URL-t e helyett. (`https://zoogie.github.io/web/super/` az EUR/USA/JPN régiókhoz, `https://zoogie.github.io/web/korea` a KOR régióhoz)
2. Nyomd meg a QR kód gombot és olvasd be a következő QR kódok egyikét, ami megfelel a konzol régiódnak, [itt](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
    - Ha tanúsítvány figyelmeztetést kapsz, ellenőrizd, hogy a rendszer dátum mai-e
3. Nyomj (Select) gombot a könyvjelző fül megnyitásához
    - Ha a (Select) gombod nem reagál, akkor érintsd meg a csillag ikont a bal alsó sarkában a képernyőnek
4. Éríntsd meg a "Bookmark this page" feliratot
5. Nyomd meg a (B) gombot egyszer, hogy visszatérj a böngészőhöz
6. Nyomj (ZR) gombot a fülek listájának megnyitásához
    - Ha a (ZR) gombod nem reagál, akkor érintsd meg a két átlapolt négyzetet a jobb alsó sarka környékén a képernyőnek
7. Legyél biztos abban, hogy az egyetlen nyitott fül az a super-skaterhax weboldala
    - Ennek a fülnek kékkel kell kiemelve lennie a fülek listáján
    - Ha más fülek is nyitva vannak, zárd be azokat
8. Nyomd meg a (B) gombot egyszer, hogy visszatérj a böngészőhöz
9. Nyomd meg a (START) gombot, hogy megnyisd a helyérzékeny menüt
    - Ha a (Start) gombod nem reagál, akkor érintsd meg 3-vonal menüt a jobb alsó sarkában a képernyőnek
10. Érintsd meg a "Settings"-et
11. Érintsd meg a "Delete Cookies"-t
12. Nyomd meg az (A) gombot a folytatáshoz
13. Nyomj (Home) gombot a HOME Menübe visszatéréshez, majd nyomj azonnal egy (A)-t a böngésző ismételt elindításához
14. Válaszd a "GO GO!" gombot az alsó képernyőn
15. Nyomj (A) gombot a felugró [popup](/images/screenshots/skaterhax/skater-popup.png) figyelmen kívül hagyásához
    - Ha a konzolod lefagy egy sárga képernyőn, tartsd nyomva a POWER gombot, amíg ki nem kapcsol, és próbáld újra ezt a részt
    - Ha a konzolod lefagy egy piros képernyőn, tartsd nyomva a POWER gombot, amíg ki nem kapcsol, csináld újra a 3. lépést a II. részben, majd próbáld újra ezt a részt
    - Ha a konzolod a [Text szót jeleníti meg az alsó képernyő bal felső sarkában](/images/screenshots/skaterhax/skater-old3ds.png), akkor Old 3DS-ed van és ez az exploit **nem fog működni az eszközödön**. Ha ez az eset, használd az [MSET9](installing-boot9strap-\(mset9\))-et helyette
    - Ha más hibát kapsz, próbáld meg 5x, és ha még minden nem megy [kövesd ezt a hibaelhárítási útmutatót](troubleshooting-super-skaterhax)
16. Ekkor a konzolodnak be kell bootolni a Homebrew Launcher-be
17. Indítsd el a nimdsphax-et a homebrew listájáról
18. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
    - Ha a konzolod lefagy egy vörös vagy zöld képernyőn, tartsd nyomva a POWER gombot, amíg ki nem kapcsol, és próbáld újra ezt a részt
    - Ez lehet 5 próbálkozást is igényel

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
