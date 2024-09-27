# Boot9strap telepítése (MSET9 CLI)

:::details Technical Details (optional)

Az [MSET9](https://github.com/zoogie/MSET9) egy exploit a System Setting alkalmazáshoz, amit [zoogie](https://github.com/zoogie) készített. Kihasznál egy hibát, ahol az ID1 (a második 32 karakteres mappanév a Nintendo 3DS mappán belül, az ID0-n belül) lehet _minden_ név, amíg 32 karakteres. Egy adott műveletsor végrehajtása azt eredményezi, hogy a konzol végrehajtja az ID1 mappanévbe kódolt utasításokat, amelyek segítségével teljes körű irányítást szerez a 3DS felett.

:::

## Compatibility Notes

::: warning

Ez a metódus Windows, Linux vagy MacOS számítógépet igényel. Ha Android telefonod/tableted vagy Chromebook-od van, kövesd a [Boot9strap telepítése (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)) oldalt helyette. Ha nem férsz hozzá ezen eszközök egyikéhez sem, akkor [alternatív exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits) kell használnod.

:::

## What You Need

- The latest release of [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
- Any 3.x version of [Python](https://www.python.org/downloads/) **installed on your computer**
  - If you are on Linux or macOS, you may already have Python 3. Ellenőrizd egy Terminal ablak megnyitásával, majd a `python3 -V` parancs megadásával. Ha ez egy verziószámot ad vissza, működni fog ezzel az útmutatóval.

## Instructions

::: info

Ezen az oldalon a MSET9 szkriptet fogod használni, ami kiváltja az MSET9-et. Amíg a szkript fut, a felhasználói adat átmenetileg eltűnik, de vissza fog térni az oldal befejezésekor. Ha hibát kapsz a szkript futtatásakor, akkor a megoldás a hibára valószínüleg megtalálható a [hibaelhárítás](troubleshooting#installing-boot9strap-mset9) oldalon.

:::

### Section I - Prep Work

Ebben a lépésben előkészülsz az MSET9 exploitra azzal, hogy **átmenetileg**\* létrehozol egy új HOME menüt felhasználói adat nélkül, majd úgy beállítod a azt a profilt, hogy a minimum adatot tartalmazza ahhoz, hogy kiváltsa az MSET9-et. Felhasználói adataid átmenetileg eltűnnek, de vissza fognak térni az oldal befejezésekor.

1. Helyezd az SD kártyád a számítógépbe

2. Másolj át a mindent a MSET9 `.zip`-ből az SD kártyád gyökerébe, felülírva minden már ott lévő fájlt

   ::: info

   ![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)

   :::

3. Futtasd az MSET9 szkriptet:

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![Image: MSET9 setup](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t

   - The window should change to this:

   ::: info

   ![Kép: MSET9 telepítés](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Ensure that the correct console model and version is displayed
2. Írj `1`-et és nyomj Enter-t, hogy elkezd az MSET9 ID1 létrehozásának folyamatát
3. A nyilatkozatot elolvasását követően írj `1`-est és nyomj Enter-t annak elfogadásához
   - If you get an error, check the [troubleshooting](troubleshooting#installing-boot9strap-mset9), then try again
4. Ha a "Created hacked ID1." üzenetet látod, nyomj Enter-t az MSET9 szkript bezárásához
   - Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **Ez elvárt működés** Az adataid visszatérnek egy későbbi lépésben
5. Tedd vissza az SD kártyád a konzoldba
6. Kapcsold be a konzolod
7. Nyisd meg a Mii Maker alkalmazást
8. Várj amíg a konzolod elérí a [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png) képernyőt, majd lépj ki a Mii Maker-ből és térj vissza a HOME képernyőre
   - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
   - If you just reach the [normal](/images/screenshots/mset9/mii-existing.png) Mii Maker screen, then the data already exists. Lépj ki a Mii Maker-ből, és térj vissza a HOME menübe
9. Indítsd el a System Settings-et és navigálj ide: `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
   - This will not wipe any of your data
10. Kapcsold ki a konzolod a power gomb megnyomásával, majd a Power Off felirat megérintésével az alsó képernyőn
11. Helyezd az SD kártyád a számítógépbe
12. Futtasd az MSET9 szkriptet:

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t

   - The window should change to this and display `Ready`:

   ::: info

   ![Kép: MSET9 telepítés](/images/screenshots/mset9/mset9-ready.png)

   :::

   - If the window says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Type `2`, then press Enter to check the MSET9 status and follow the directions indicated
     - Once you have resolved the issue, return to Section I Step 14
     - For more information, check the [troubleshooting](troubleshooting#installing-boot9strap-mset9) page
2. Írj `0`-át és nyomj Enter-t a szkript bezárásához
3. Tedd vissza az SD kártyád a konzoldba

### Section II - MSET9

Ebben a fejezetben az MSET9 fogod triggerelni, hogy elindítsa a SafeB9SInstaller-t (az egyedi firmware telepítőt).

::: danger

Ezeket a lépéseket **PONTOSAN** kell követni, így ellenőrizz MINDENT kétszer a hibák elkerülése érdekében!

:::

1. - Kapcsold be a konzolod, biztosítva azt, hogy a System Settings kiválasztott
   - If System Settings is not selected, **[hover over](/images/screenshots/mset9/hover-settings.png)** the System Settings icon using the D-Pad, power your console off, then back on
2. Nyomj (A) gombot a System Settings indításához
3. Navigálj ide: `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([image](/images/screenshots/mset9/settings-extdata.png))
4. **Ne nyomj meg semmi gombot vagy éríntsd meg a képernyőt**
5. \*\* A konzolod BEKAPCSOLT állapotában, bármilyen gomb vagy a képernyő érintése nélkül\*\* vedd ki az SD kártyádat a konzolból
   - The menu will refresh and say that no SD card is inserted
6. Helyezd az SD kártyád a számítógépbe
7. Futtasd az MSET9 szkriptet:

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
2. Az MSET9 ablakba írj `3`-t és nyomj Enter-t az MSET9 injektálásához
   - You should see "MSET9 successfully injected!"
3. Nyomj Enter-t az MSET9 szkript bezárásához
4. Helyezd vissza az SD kártyád a konzolodba, **bármilyen gomb vagy a képernyő érintése nélkül**
5. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
   - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting#installing-boot9strap-mset9)

### Section III - Installing boot9strap

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

### Section IV - Removing MSET9

Ebben a fejezetben el fogod távolítani az MSET9-et, hogy megelőzz további problémákat és hogy helyreállítsd a felhasználói adataidat (játékok, témák, stb). (Ez nem fogja eltávolítani az egyéni firmware-t amit épp csak telepítettél.)

::: danger

NE ugord át ezt a részt! Ha kihagyod, akkor az alkalmazások váratlanul összeomolhanak és hibákat fogsz kapni a következő oldalon!

:::

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Futtasd az MSET9 szkriptet:

<!--@include: ./_include/mset9-chorus.md -->

1. Írd be a konzolod modelljéhez és verziójához tartozó számot, és nyomj Enter-t
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), skip to Step 6
2. Írj `4`-et és nyomj Enter-t a trigger fájl eltávolításához
   - You should see "Removed trigger file."
3. Írj `5`-öt és nyomj Enter-t az MSET9 eltávolításához
   - You should see "Successfully removed MSET9!"
4. Nyomj Enter-t az MSET9 szkript bezárásához

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Követted a IV. részt (Az MSET9 eltávolítása)? Az a rész KÖTELEZŐ!

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
