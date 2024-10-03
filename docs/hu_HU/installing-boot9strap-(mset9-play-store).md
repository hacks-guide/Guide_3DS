# Boot9strap telepítése (MSET9 Play Store)

:::details Technikai részletek (opcionális)

Az [MSET9](https://github.com/zoogie/MSET9) egy exploit a System Setting alkalmazáshoz, amit [zoogie](https://github.com/zoogie) készített. Kihasznál egy hibát, ahol az ID1 (a második 32 karakteres mappanév a Nintendo 3DS mappán belül, az ID0-n belül) lehet _minden_ név, amíg 32 karakteres. Egy adott műveletsor végrehajtása azt eredményezi, hogy a konzol végrehajtja az ID1 mappanévbe kódolt utasításokat, amelyek segítségével teljes körű irányítást szerez a 3DS felett.

:::

## Kompatibilitási megjegyzések

::: warning

Ez az oldal Android telefont/tabletet vagy Chromebook-ot igényel. Ha Windows, macOS, or Linux számítógéped van, kövesd a [Boot9strap telepítése (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) oldalt helyette. Ha nem férsz hozzá ezen eszközök egyikéhez sem, akkor [alternatív exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits) kell használnod.

:::

::: warning

Android telefonokon/tableteken a szükséges minimum Android verzió: 6.0 (Marshmallow).

:::

## Amire szükséged lesz

- Az alábbi alkalmazásokra a Google Play Store-ból telepítve:
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - Ha szeretnéd, telepítheted őket Play Store-on kívülről is helyette
- Az [MSET9](https://github.com/zoogie/MSET9/releases/latest) legújabb kiadása (a Release `.zip` fájl)

## Lépések

### I. rész - Előkészületek

Ebben a részben előkészítjük az SD kártyád a szükséges adatokkal amik kiváltják az MSET9 exploitot.

1. Kapcsold be a konzolod, miközben **az SD kártya be van helyezve**

2. Nyisd meg a Mii Maker alkalmazást

3. Várj amíg a konzolod elérí a "Welcome to Mii Maker" képernyőt, majd lépj ki a Mii Maker-ből
   - [Ezt a képernyőt láthatod](/images/screenshots/mset9/mii-extdata.png), ami azt mutatja, hogy a szükséges adatok létrejöttek
   - Ha normál Mii Maker képernyőre jutottál, lépj ki a Mii Maker-ből és folytasd a következő lépéssel

4. Kapcsold ki a konzolod

5. Helyezd az SD kártyád a telefonodba/tabletedbe/számítógépedbe

6. Másolj át a mindent a Release `.zip`-ből az SD kártyád gyökerébe, felülírva minden már ott lévő fájlt:

   - Nyisd meg a ZArchiver-t
   - Ha kérdezi, [engedd a ZArchiver-t, hogy hozzá férjen z SD kártya fájljaihoz](/images/screenshots/mset9/zarchiver-allow.png)
   - Navigálj oda, aholva letöltötted az MSET9 Release `.zip`-et ([valószínűleg a Letöltések (Downloads) mappa](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Válaszd a Release `.zip`-et majd az "Extract..." opciót ([kép](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Navigálj az SD kártyádra, majd nyomd meg a kék "lefelé nyilat", hogy kicsomagold a fájlokat az SD kártyád gyökerébe ([kép](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

7. Futtasd az [MSET9 Installer alkalmazást](/images/screenshots/mset9/mset9-setup-android.png)

8. Válaszd a `Select "Nintendo 3DS" Folder` opciót, majd navigálj a `Nintendo 3DS` mappához az SD kártyádon([kép](/images/screenshots/mset9/select-mset9-folder-1.png))

9. Ha a `Nintendo 3DS` mappában vagy, érintsd meg a "Use this folder" opciót, majd az "Allow"-ot, ha kérdezi ([kép](/images/screenshots/mset9/select-mset9-folder-2.png))

10. Ha a "Setup MSET9" opció [kiemelt](/images/screenshots/mset9/setup-mset9-highlighted.png), akkor haladj tovább a következő lépésre. \*\* Még ne telepítsd az MSET9-et.\*\* Zárd be az MSET9 telepítőt most
    - Ha a "Check Again" a kiemelt, akkor problémába ütközték, amit fel kellene oldani, mielőtt használatod az MSET9-et. Használd a [hibaelhárítást](troubleshooting#installing-boot9strap-mset9)

11. Tedd vissza az SD kártyád a konzoldba

12. Kapcsold be a konzolod

### II. rész - MSET9

Ebben a fejezetben az MSET9 fogod triggerelni, hogy elindítsa a SafeB9SInstaller-t (az egyedi firmware telepítőt).

::: danger

Ezeket a lépéseket **PONTOSAN** kell követni, így ellenőrizz MINDENT kétszer a hibák elkerülése érdekében!

:::

1. **[Állj rá](/images/screenshots/mset9/hover-settings.png)** a System Settings ikonra a D-Pad
   használatával (de még ne válaszd ki)
2. Kapcsold ki, majd vissza a konzolod
3. Nyomj (A) gombot a System Settings indításához
4. Navigálj ide: `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([image](/images/screenshots/mset9/settings-extdata.png))
5. **Ne nyomj meg semmi gombot vagy éríntsd meg a képernyőt**
6. \*\* A konzolod BEKAPCSOLT állapotában, bármilyen gomb vagy a képernyő érintése nélkül\*\* vedd ki az SD kártyádat a konzolból
   - A menü frissülni fog, és ki fogja írni, hogy nincs SD kártya behelyezve, ami elvárt működés
7. Helyezd az SD kártyád a telefonodba/tabletedbe/számítógépedbe
8. Nyisd meg az MSET9 Installer alkalmazást
9. Éríntsd meg a "Setup MSET9" opciót
10. Érintsd meg a modellednek megfelelő fényképet, majd a firmware verziódnak megfelelő gombot
    - Ha az injektálás sikeres volt, minden gomb kiszürkül kivéve a "Remove MSET9" gombot
11. Helyezd vissza az SD kártyád a konzolodba, **bármilyen gomb vagy a képernyő érintése nélkül**
12. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
    - Ha piros képernyőt kapsz vagy a konzol beragad a betöltő képernyőn, kövesd a [hibaelhárítási útmutatót](troubleshooting#installing-boot9strap-mset9)

### III. rész - boot9strap telepítése

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - Ha egy lépés az alsó képernyőn piros színű szöveget eredményez, és nem kér a rendszer tőled egy gomb-kombinációt, akkor [kövesd ezt a hibaelhárítási útmutatót](troubleshooting#issues-with-safeb9sinstaller)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

### IV. rész - Az MSET9 eltávolítása

Ebben a fejezetben el fogod távolítani a z MSET9-et, hogy megelőzz további problémákat. (Ez nem fogja eltávolítani az egyéni firmware-t amit éppen telepítettél.)

::: danger

NE ugord át ezt a részt! Ha kihagyod, akkor az alkalmazások váratlanul összeomolhanak és hibákat fogsz kapni a következő oldalon!

:::

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a telefonodba/tabletedbe/számítógépedbe
3. Nyisd meg az MSET9 Installer alkalmazást
4. Éríntsd meg a "Remove MSET9" opciót
5. Zárd be az MSET9 Installer alkalmazást

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Követted a IV. részt (Az MSET9 eltávolítása)? Az a rész KÖTELEZŐ!

:::

::: tip

Tovább a [telepítés véglegesítésére](finalizing-setup)

:::
