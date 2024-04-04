---
title: "Boot9strap telepítése (MSET9 Play Store)"
---

{% include toc title="Tartalomjegyzék" %}

{% capture technical_info %}
<summary><em>Technikai részletek (opcionális)</em></summary>
Az [MSET9](https://github.com/zoogie/MSET9) egy exploit a System Setting alkalmazáshoz, amit [zoogie](https://github.com/zoogie) készített. Kihasznál egy hibát, ahol az ID1 (a második 32 karakteres mappanév a Nintendo 3DS mappán belül, az ID0-n belül) lehet *minden* név, amíg 32 karakteres. Egy adott műveletsor végrehajtása azt eredményezi, hogy a konzol végrehajtja az ID1 mappanévbe kódolt utasításokat, amelyek segítségével teljes körű irányítást szerez a 3DS felett.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Kompatibilitási megjegyzések

Ez az oldal Android telefont/tabletet vagy Chromebook-ot igényel. Ha Windows, macOS, or Linux számítógéped van, kövesd a [Boot9strap telepítése (MSET9 CLI)](installing-boot9strap-(mset9-cli)) oldalt helyette. Ha nem férsz hozzá ezen eszközök egyikéhez sem, akkor [alternatív exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits) kell használnod.
{: .notice--warning}

Android telefonokon/tableteken a szükséges minimum Android verzió: 6.0 (Marshmallow).
{: .notice--warning}

### Amire szükséged lesz

* Az alábbi alkalmazásokra a Google Play Store-ból telepítve:
    * [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
    * [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    * Ha szeretnéd, telepítheted őket Play Store-on kívülről is helyette
* Az [MSET9](https://github.com/zoogie/MSET9/releases/latest) legújabb kiadása (a Release `.zip` fájl)

### Lépések

#### I. rész - Előkészületek

Ebben a részben előkészítjük az SD kártyád a szükséges adatokkal amik kiváltják az MSET9 exploitot.

1. Kapcsold be a konzolod, miközben **az SD kártya be van helyezve**
1. Nyisd meg a Mii Maker alkalmazást
1. Várj amíg a konzolod elérí a "Welcome to Mii Maker" képernyőt, majd lépj ki a Mii Maker-ből
    + [Ezt a képernyőt láthatod](/images/screenshots/mset9/mii-extdata.png), ami azt mutatja, hogy a szükséges adatok létrejöttek
    + Ha normál Mii Maker képernyőre jutottál, lépj ki a Mii Maker-ből és folytasd a következő lépéssel
1. Kapcsold ki a konzolod
1. Helyezd az SD kártyád a telefonodba/tabletedbe/számítógépedbe
1. Másolj át a mindent a Release `.zip`-ből az SD kártyád gyökerébe, felülírva minden már ott lévő fájlt:
    + Nyisd meg a ZArchiver-t
    + Ha kérdezi, [engedd a ZArchiver-t, hogy hozzá férjen z SD kártya fájljaihoz](/images/screenshots/mset9/zarchiver-allow.png)
    + Navigálj oda, aholva letöltötted az MSET9 Release `.zip`-et ([valószínűleg a Letöltések (Downloads) mappa](/images/screenshots/mset9/zarchiver-zip-location.png))
    + Válaszd a Release `.zip`-et majd az "Extract..." ([image](/images/screenshots/mset9/zarchiver-extract-1.png)) (Kicsomagol) opciót
    + Navigálj az SD kártyádra, majd nyomd meg a kék "lefelé nyilat", hogy kicsomagold a fájlokat az SD kártyád gyökerébe ([kép](/images/screenshots/mset9/zarchiver-extract-2.png))

    ![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout-android.png)
    {: .notice--info}

1. Futtasd az [MSET9 Installer alkalmazást](/images/screenshots/mset9/mset9-setup-android.png)
1. Válaszd a `Select "Nintendo 3DS" Folder` opciót, majd navigálj a `Nintendo 3DS` mappához az SD kártyádon([kép](/images/screenshots/mset9/select-mset9-folder-1.png))
1. Ha a `Nintendo 3DS` mappában vagy, érintsd meg a "Use this folder" opciót, majd az "Allow"-ot, ha kérdezi ([kép](/images/screenshots/mset9/select-mset9-folder-2.png))
1. Ha a "Setup MSET9" opció [kiemelt](/images/screenshots/mset9/setup-mset9-highlighted.png), akkor haladj tovább a következő lépésre. ** Még ne telepítsd az MSET9-et.** Zárd be az MSET9 telepítőt most
    + Ha a "Check Again" a kiemelt, akkor problémába ütközték, amit fel kellene oldani, mielőtt használatod az MSET9-et. Használd a [hibaelhárítást](troubleshooting#installing-boot9strap-mset9)
1. Tedd vissza az SD kártyád a konzoldba
1. Kapcsold be a konzolod

#### II. rész - MSET9

Ebben a fejezetben az MSET9 fogod triggerelni, hogy elindítsa a SafeB9SInstaller-t (az egyedi firmware telepítőt).

Ezeket a lépéseket **PONTOSAN** kell követni, így ellenőrizz MINDENT kétszer a hibák elkerülése érdekében!
{: .notice--danger}

1. **[Állj rá](/images/screenshots/mset9/hover-settings.png)** a System Settings ikonra a D-Pad 
 használatával (de még ne válaszd ki)
1. Kapcsold ki, majd vissza a konzolod
1. Nyomj (A) gombot a System Settings indításához
1. Navigálj ide: `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([image](/images/screenshots/mset9/settings-extdata.png))
1. **Ne nyomj meg semmi gombot vagy éríntsd meg a képernyőt**
1. ** A konzolod BEKAPCSOLT állapotában, bármilyen gomb vagy a képernyő érintése nélkül** vedd ki az SD kártyádat a konzolból
    + A menü frissülni fog, és ki fogja írni, hogy nincs SD kártya behelyezve, ami elvárt működés
1. Helyezd az SD kártyád a telefonodba/tabletedbe/számítógépedbe
1. Nyisd meg az MSET9 Installer alkalmazást
1. Éríntsd meg a "Setup MSET9" opciót
1. Érintsd meg a modellednek megfelelő fényképet, majd a firmware verziódnak megfelelő gombot
    + Ha az injektálás sikeres volt, minden gomb kiszürkül kivéve a "Remove MSET9" gombot
1. Helyezd vissza az SD kártyád a konzolodba, **bármilyen gomb vagy a képernyő érintése nélkül**
1. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert 
    + Ha piros képernyőt kapsz vagy a konzol beragad a betöltő képernyőn, kövesd a [hibaelhárítási útmutatót](troubleshooting#installing-boot9strap-mset9)

#### III. rész - boot9strap telepítése

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

#### IV. rész- Az MSET9 eltávolítása

Ebben a fejezetben el fogod távolítani a z MSET9-et, hogy megelőzz további problémákat. (Ez nem fogja eltávolítani az egyéni firmware-t amit éppen telepítettél.)

NE ugord át ezt a részt! Ha kihagyod, akkor az alkalmazások váratlanul összeomolhanak és hibákat fogsz kapni a következő oldalon!
{: .notice--danger}

1. Kapcsold ki a konzolod
1. Helyezd az SD kártyád a telefonodba/tabletedbe/számítógépedbe
1. Nyisd meg az MSET9 Installer alkalmazást
1. Éríntsd meg a "Remove MSET9" opciót
1. Zárd be az MSET9 Installer alkalmazást

{% include_relative include/luma3ds-installed-note.txt %}
___

Követted a IV. részt (Az MSET9 eltávolítása)? Az a rész KÖTELEZŐ!
{: .notice--danger}

### Tovább a [telepítés véglegesítésére](finalizing-setup)
{: .notice--primary}
