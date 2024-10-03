# Boot9strap telepítése (MSET9 CLI)

:::details Technikai részletek (opcionális)

Az [MSET9](https://github.com/zoogie/MSET9) egy exploit a System Setting alkalmazáshoz, amit [zoogie](https://github.com/zoogie) készített. Kihasznál egy hibát, ahol az ID1 (a második 32 karakteres mappanév a Nintendo 3DS mappán belül, az ID0-n belül) lehet _minden_ név, amíg 32 karakteres. Egy adott műveletsor végrehajtása azt eredményezi, hogy a konzol végrehajtja az ID1 mappanévbe kódolt utasításokat, amelyek segítségével teljes körű irányítást szerez a 3DS felett.

:::

## Kompatibilitási megjegyzések

::: warning

Ez a metódus Windows, Linux vagy MacOS számítógépet igényel. Ha Android telefonod/tableted vagy Chromebook-od van, kövesd a [Boot9strap telepítése (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)) oldalt helyette. Ha nem férsz hozzá ezen eszközök egyikéhez sem, akkor [alternatív exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits) kell használnod.

:::

## Amire szükséged lesz

- Az [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) legújabb kiadása
- Bármelyik a **számítógépedre telepített 3.x verziója** a [Python](https://www.python.org/downloads/)-nak
  - Ha Linux-ot vagy macOS-t használsz valószínűleg már van Python 3-ad. Ellenőrizd egy Terminal ablak megnyitásával, majd a `python3 -V` parancs megadásával. Ha ez egy verziószámot ad vissza, működni fog ezzel az útmutatóval.

## Lépések

::: info

Ezen az oldalon a MSET9 szkriptet fogod használni, ami kiváltja az MSET9-et. Amíg a szkript fut, a felhasználói adat átmenetileg eltűnik, de vissza fog térni az oldal befejezésekor. Ha hibát kapsz a szkript futtatásakor, akkor a megoldás a hibára valószínüleg megtalálható a [hibaelhárítás](troubleshooting#installing-boot9strap-mset9) oldalon.

:::

### I. rész - Előkészületek

Ebben a lépésben előkészülsz az MSET9 exploitra azzal, hogy **átmenetileg**\* létrehozol egy új HOME menüt felhasználói adat nélkül, majd úgy beállítod a azt a profilt, hogy a minimum adatot tartalmazza ahhoz, hogy kiváltsa az MSET9-et. Felhasználói adataid átmenetileg eltűnnek, de vissza fognak térni az oldal befejezésekor.

1. Helyezd az SD kártyád a számítógépbe
2. Másolj át a mindent a MSET9 `.zip`-ből az SD kártyád gyökerébe, felülírva minden már ott lévő fájlt

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout.png)

   :::

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t

   - Az ablak a következőre kell módosuljon:

   ::: info

   ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Legyél biztos abban, hogy a helyes model és verzió megjelenített
2. Írj `1`-et és nyomj Enter-t, hogy elkezd az MSET9 ID1 létrehozásának folyamatát
3. A nyilatkozatot elolvasását követően írj `1`-est és nyomj Enter-t annak elfogadásához
   - Ha hibát kapsz, nézd meg a [hibaelhárítási útmutatót](troubleshooting#installing-boot9strap-mset9), majd próbáld újra
4. Ha a "Created hacked ID1." üzenetet látod, nyomj Enter-t az MSET9 szkript bezárásához
   - A 3DS-ed úgy fog tűnni, hogy nem tartalmaz adatot / felhasználó által telepített alkalmazást a HOME menüben. **Ez elvárt működés** Az adataid visszatérnek egy későbbi lépésben
5. Tedd vissza az SD kártyád a konzoldba
6. Kapcsold be a konzolod
7. Nyisd meg a Mii Maker alkalmazást
8. Várj amíg a konzolod elérí a [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png) képernyőt, majd lépj ki a Mii Maker-ből és térj vissza a HOME képernyőre
   - [Ezt a képernyőt láthatod](/images/screenshots/mset9/mii-extdata.png), ami azt mutatja, hogy a szükséges adatok létrejöttek
   - Ha a [normál](/images/screenshots/mset9/mii-existing.png) Mii Maker képernyőre jutottál, akkor az adat már létezik. Lépj ki a Mii Maker-ből, és térj vissza a HOME menübe
9. Indítsd el a System Settings-et és navigálj ide: `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
   - Ez nem fogja törölni az adataidat
10. Kapcsold ki a konzolod a power gomb megnyomásával, majd a Power Off felirat megérintésével az alsó képernyőn
11. Helyezd az SD kártyád a számítógépbe

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t

   - Az ablak erre kell módosuljon és `Ready`-t kell mutasson:

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - Ha az ablak azt mondja, hogy [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Írj `2`-öt és nyomj Enter-t az MSET9 állapotának ellenőrzéséhez és kövesd az iránymutatásokat
     - Ha egyszer megoldottad a problémát térj vissza az I. rész 14. lépéséhez
     - További információkért tekintsd meg a [hibaelhárítási](troubleshooting#installing-boot9strap-mset9) oldalt
2. Írj `0`-át és nyomj Enter-t a szkript bezárásához
3. Tedd vissza az SD kártyád a konzoldba

### II. rész - MSET9

Ebben a fejezetben az MSET9 fogod triggerelni, hogy elindítsa a SafeB9SInstaller-t (az egyedi firmware telepítőt).

::: danger

Ezeket a lépéseket **PONTOSAN** kell követni, így ellenőrizz MINDENT kétszer a hibák elkerülése érdekében!

:::

1. - Kapcsold be a konzolod, biztosítva azt, hogy a System Settings kiválasztott
   - Ha a System Settings nem kiválaszott, akkor _[állj rá](/images/screenshots/mset9/hover-settings.png)_\* a System Settings ikonra a D-Pad használatával, majd kapcsold ki konzolod és vissza
2. Nyomj (A) gombot a System Settings indításához
3. Navigálj ide: `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([image](/images/screenshots/mset9/settings-extdata.png))
4. **Ne nyomj meg semmi gombot vagy éríntsd meg a képernyőt**
5. \*\* A konzolod BEKAPCSOLT állapotában, bármilyen gomb vagy a képernyő érintése nélkül\*\* vedd ki az SD kártyádat a konzolból
   - A menü frissülni fog, és ki fogja írni, hogy nincs SD kártya behelyezve
6. Helyezd az SD kártyád a számítógépbe

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
2. Az MSET9 ablakba írj `3`-t és nyomj Enter-t az MSET9 injektálásához
   - Az "MSET9 successfully injected!" üzenetet kell látnod
3. Nyomj Enter-t az MSET9 szkript bezárásához
4. Helyezd vissza az SD kártyád a konzolodba, **bármilyen gomb vagy a képernyő érintése nélkül**
5. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
   - Ha piros képernyőt kapsz vagy a konzol beragad a betöltő képernyőn, kövesd a [hibaelhárítási útmutatót](troubleshooting#installing-boot9strap-mset9)

### III. rész - boot9strap telepítése

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - Ha egy lépés az alsó képernyőn piros színű szöveget eredményez, és nem kér a rendszer tőled egy gomb-kombinációt, akkor [kövesd ezt a hibaelhárítási útmutatót](troubleshooting#issues-with-safeb9sinstaller)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

### IV. rész - Az MSET9 eltávolítása

Ebben a fejezetben el fogod távolítani az MSET9-et, hogy megelőzz további problémákat és hogy helyreállítsd a felhasználói adataidat (játékok, témák, stb). (Ez nem fogja eltávolítani az egyéni firmware-t amit épp csak telepítettél.)

::: danger

NE ugord át ezt a részt! Ha kihagyod, akkor az alkalmazások váratlanul összeomolhanak és hibákat fogsz kapni a következő oldalon!

:::

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
   - Az aktuális állapot [Injected](/images/screenshots/mset9/mset9-injected.png)-et kell mutasson
   - Ha már eltávolítottad a trigger fájlt (vagy soha nem injektáltad), az aktuális állapot [Ready](/images/screenshots/mset9/mset9-ready.png)-t fog mutatni, ezért ugord át a 6. lépést
2. Írj `4`-et és nyomj Enter-t a trigger fájl eltávolításához
   - Azt kell látnod, hogy "Removed trigger file."
3. Írj `5`-öt és nyomj Enter-t az MSET9 eltávolításához
   - A "Successfully removed MSET9!" üzenetet kell látnod
4. Nyomj Enter-t az MSET9 szkript bezárásához

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Követted a IV. részt (Az MSET9 eltávolítása)? Az a rész KÖTELEZŐ!

:::

::: tip

Tovább a [telepítés véglegesítésére](finalizing-setup)

:::
