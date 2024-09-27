# Boot9strap telepítése (safecerthax)

:::details Technical Details (optional)

:::

## Compatibility Notes

A safecerthax kompatibilis minden Old 3DS and Old 2DS konzollal minden régióban az 1.0.0 verziótól a 11.14.0-ig.

::: info

Ez az exploit nem működik az New 3DS, New 3DS XL, vagy New 2DS XL készülékeken. Mielőtt folytatnád, kérjük ellenőrizd, hogy a moddolandó konzolod Old 3DS, Old 3DS XL, vagy Old 2DS.

:::

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Hardware Button Check

Ebben a fejezetben tesztelni fogod azt, hogy működnek-e a váll gombok a konzolodon. Ez meghatározza, hogy a konzolod melyik metódussal kompatibilis.

1. Kapcsold be a konzolod
2. Mikor meglátod a Home menüt, nyomd meg az (Bal váll) és (Jobb váll) gombokat egyszerre
   - The camera applet should appear
3. Kapcsold ki a konzolod

::: warning

Ez a módszer nem használható, ha a kamera NEM jelenik meg. Ha ez az eset, használd [Boot9strap telepítése (MSET9)](installing-boot9strap-\(mset9\)) módszert helyette.

:::

### Section II - Prep Work

Ebben a fejezetben fel fogod másolni a fájlokat, amik a safecerthax exploit kiváltásához szükségesek.

1. Helyezd az SD kártyád a számítógépbe
2. Másold át a `boot.firm` és `boot.3dsx` fájlt a Luma3DS `.zip`-ből az SD kártya gyökerébe
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
4. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
5. Másold át a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád gyökerébe
6. Tedd vissza az SD kártyád a konzoldba
7. Kapcsold be a konzolod

### Section III - safecerthax proxy

Ebben a fejezetben módosítani fogod az Internet kapcsolat beállításokat hogy egy proxy hálózatot használj, ami úgy lett megtervezve, hogy exploitolja a System update szolgáltatását a konzolodnak.

<!--@include: ./_include/addproxy.md -->

1. Kapcsold ki a konzolod

### Section IV - safecerthax

Ebben a fejezetben be fogsz lépni a Safe Mode-ba (egy funkció, ami elérhető minden 3DS családba tartozó konzolon) ahol a safecerthax kiváltásra kerül, ami a boot9strap (egyedi firmware) telepítőt indítja.

1. A konzolod kikapcsolt állapotában tartsd nyomva a következő gombokat: (Bal Váll) + (Jobb Váll) + (D-Pad Fel) + (A), majd ezen gombok nyomva tartása mellett kapcsold be a konzolod
   - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Nyomj "OK"-ot a frissítés elfogadásához
   - There is no update. Ez része az exploitnak
3. Nyomj az "I accept"-re a feltételek elfogadásához
4. A frissítés sikertelen lesz a `003-1099` hibakóddal. Ez az elvárt viselkedés
5. Nyomj "OK"-ét a hibaüzenet bezárásához
6. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
   - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
