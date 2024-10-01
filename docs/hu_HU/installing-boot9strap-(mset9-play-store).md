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

- The following applications installed from the Google Play Store:
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - If you wish, you can sideload these applications instead
- The latest release of [MSET9](https://github.com/zoogie/MSET9/releases/latest) (the Release `.zip` file)

## Lépések

### I. rész - Előkészületek

Ebben a részben előkészítjük az SD kártyád a szükséges adatokkal amik kiváltják az MSET9 exploitot.

1. Kapcsold be a konzolod, miközben **az SD kártya be van helyezve**

2. Nyisd meg a Mii Maker alkalmazást

3. Várj amíg a konzolod elérí a "Welcome to Mii Maker" képernyőt, majd lépj ki a Mii Maker-ből
   - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
   - If you just reach the normal Mii Maker screen, exit Mii Maker and continue to the next step

4. Kapcsold ki a konzolod

5. Helyezd az SD kártyád a telefonodba/tabletedbe/számítógépedbe

6. Másolj át a mindent a Release `.zip`-ből az SD kártyád gyökerébe, felülírva minden már ott lévő fájlt:

   - Open ZArchiver
   - If prompted, [allow ZArchiver to access files on your SD card](/images/screenshots/mset9/zarchiver-allow.png)
   - Navigate to where the downloaded MSET9 Release `.zip` is located ([likely in the Downloads folder](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Válaszd a Release `.zip`-et majd az "Extract..." opciót ([image](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Navigate to your SD card, then tap the blue 'down arrow' icon to extract the files to the root of your SD card ([image](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

7. Futtasd az [MSET9 Installer alkalmazást](/images/screenshots/mset9/mset9-setup-android.png)

8. Válaszd a `Select "Nintendo 3DS" Folder` opciót, majd navigálj a `Nintendo 3DS` mappához az SD kártyádon([kép](/images/screenshots/mset9/select-mset9-folder-1.png))

9. Ha a `Nintendo 3DS` mappában vagy, érintsd meg a "Use this folder" opciót, majd az "Allow"-ot, ha kérdezi ([kép](/images/screenshots/mset9/select-mset9-folder-2.png))

10. Ha a "Setup MSET9" opció [kiemelt](/images/screenshots/mset9/setup-mset9-highlighted.png), akkor haladj tovább a következő lépésre. \*\* Még ne telepítsd az MSET9-et.\*\* Zárd be az MSET9 telepítőt most
    - If "Check Again" is highlighted, there is a problem that you need to resolve before you can use MSET9. Használd a [hibaelhárítást](troubleshooting#installing-boot9strap-mset9)

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
   - The menu will refresh and say that no SD card is inserted, which is expected
7. Helyezd az SD kártyád a telefonodba/tabletedbe/számítógépedbe
8. Nyisd meg az MSET9 Installer alkalmazást
9. Éríntsd meg a "Setup MSET9" opciót
10. Érintsd meg a modellednek megfelelő fényképet, majd a firmware verziódnak megfelelő gombot
    - If the injection was successful, all buttons should become grayed out except for "Remove MSET9"
11. Helyezd vissza az SD kártyád a konzolodba, **bármilyen gomb vagy a képernyő érintése nélkül**
12. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
    - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting#installing-boot9strap-mset9)

### III. rész - boot9strap telepítése

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
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

Continue to [Finalizing Setup](finalizing-setup)

:::
