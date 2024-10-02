# Boot9strap telepítése (safecerthax)

:::details Technikai részletek (opcionális)

:::

## Kompatibilitási megjegyzések

A safecerthax kompatibilis minden Old 3DS and Old 2DS konzollal minden régióban az 1.0.0 verziótól a 11.14.0-ig.

::: info

Ez az exploit nem működik az New 3DS, New 3DS XL, vagy New 2DS XL készülékeken. Mielőtt folytatnád, kérjük ellenőrizd, hogy a moddolandó konzolod Old 3DS, Old 3DS XL, vagy Old 2DS.

:::

## Amire szükséged lesz

- A [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) legfrissebb verziója (közvetlen letöltés)
- A [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) legfrissebb verziója (közvetlen letöltés)
- A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)

## Lépések

### I. rész - Fizikai gombok ellenőrzése

Ebben a fejezetben tesztelni fogod azt, hogy működnek-e a váll gombok a konzolodon. Ez meghatározza, hogy a konzolod melyik metódussal kompatibilis.

1. Kapcsold be a konzolod
2. Mikor meglátod a Home menüt, nyomd meg az (Bal váll) és (Jobb váll) gombokat egyszerre
   - A kamera applettnek kell megjelennie
3. Kapcsold ki a konzolod

::: warning

Ez a módszer nem használható, ha a kamera NEM jelenik meg. Ha ez az eset, használd [Boot9strap telepítése (MSET9)](installing-boot9strap-\(mset9\)) módszert helyette.

:::

### II. rész - Előkészületek

Ebben a fejezetben fel fogod másolni a fájlokat, amik a safecerthax exploit kiváltásához szükségesek.

1. Helyezd az SD kártyád a számítógépbe
2. Másolj mindent a Luma3DS `.zip`-ből az SD kártya gyökerébe
   - Az SD kártya gyökere a kezdőkönyvtárt jelenti az SD kártyán, ahol látható a Nintendo 3DS könyvtár, de nem vagyunk benne
3. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
4. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
5. Másold át a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád gyökerébe
6. Tedd vissza az SD kártyád a konzoldba
7. Kapcsold be a konzolod

### III. rész - safecerthax proxy

Ebben a fejezetben módosítani fogod az Internet kapcsolat beállításokat hogy egy proxy hálózatot használj, ami úgy lett megtervezve, hogy exploitolja a System update szolgáltatását a konzolodnak.

<!--@include: ./_include/addproxy.md -->

1. Kapcsold ki a konzolod

### IV. rész - safecerthax

Ebben a fejezetben be fogsz lépni a Safe Mode-ba (egy funkció, ami elérhető minden 3DS családba tartozó konzolon) ahol a safecerthax kiváltásra kerül, ami a boot9strap (egyedi firmware) telepítőt indítja.

1. A konzolod kikapcsolt állapotában tartsd nyomva a következő gombokat: (Bal Váll) + (Jobb Váll) + (D-Pad Fel) + (A), majd ezen gombok nyomva tartása mellett kapcsold be a konzolod
   - Tartsd nyomva a gombokat, amíg a konzol be nem bootol a Safe Mode-ba (a "system update" menübe)
2. Nyomj "OK"-ot a frissítés elfogadásához
   - Nincs frissítés. Ez része az exploitnak
3. Nyomj az "I accept"-re a feltételek elfogadásához
4. A frissítés sikertelen lesz a `003-1099` hibakóddal. Ez az elvárt viselkedés
5. Nyomj "OK"-ét a hibaüzenet bezárásához
6. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
   - Ha a konzol lefagy vagy összeomlik, erőltetve kapcsold ki a konzolt és próbáld újra ezt a részt

### V. rész - boot9strap telepítése

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - Ha egy lépés az alsó képernyőn piros színű szöveget eredményez, és nem kér a rendszer tőled egy gomb-kombinációt, akkor [kövesd ezt a hibaelhárítási útmutatót](troubleshooting#issues-with-safeb9sinstaller)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### VI. rész - A Proxy beállítás alaphelyzetbe állítása

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Tovább a [telepítés véglegesítésére](finalizing-setup)

:::
