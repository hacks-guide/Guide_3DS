# Boot9strap telepítése (SSLoth-Browser)

:::details Technikai részletek (opcionális)

A Browser alkalmazás exploit-olásához ki kell kapcsolni a verzió ellenőrzést, ami úgy lett megtervezve, hogy ne engedje a böngésző használatát a nélkül, hogy előtte frissítenénk a rendszert a legfrissebb verzióra.

Egy publikus proxy szerver elérhető, ami az SSLoth exploit segítségével ki tudja iktatni ezt az ellenőrzést.

Ha ez a kiiktatás aktív, egy exploit weboldal elérhető, ami elvégzi a többi részét a feladatnak.

A technikai részleteit az ezen az oldalon használt exploit-oknak tekintsd meg [itt](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) és [itt](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Kompatibilitási megjegyzések

Az SSLoth lehetővé teszi a 11.13.0 és alatti verziók számára, hogy megkerüld a böngésző verzió ellenőrzést, ezáltal lehetővé tegye a new-browserhax vagy az old-browserhax (kompatibilis a 11.4.0 verziótól 11.13.0-ig minden régió esetén) használatát, amik az universal-otherapp-pal együtt használhatók.

## Amire szükséged lesz

- A [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) legfrissebb verziója (közvetlen letöltés)
- A [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) legfrissebb verziója (közvetlen letöltés)
- A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)
- A [universal-otherapp] legújabb kiadása (https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Lépések

### I. rész - Előkészületek

Ebben a fejezetben fel fogod másolni a fájlokat, amik a browserhax és az universal-otherapp kiváltásához szükségesek.

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold az `otherapp.bin`-t az SD kártyád gyökerébe, majd nevezd át `arm11code.bin` névre
   - Az SD kártya gyökere a kezdőkönyvtárt jelenti az SD kártyán, ahol látható a Nintendo 3DS könyvtár, de nem vagyunk benne
   - Ha nem látod a `.bin` kiterjesztést ne add kézzel hozzá a fájl végéhez
4. Másolj mindent a Luma3DS `.zip`-ből az SD kártya gyökerébe
5. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
6. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
7. Másold át a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád gyökerébe
8. Tedd vissza az SD kártyád a konzoldba
9. Kapcsold be a konzolod

### II. rész - SSLoth

Ebben a fejezetben módosítani fogod az Internet kapcsolat beállításokat hogy egy proxy hálózatot használj, ami úgy lett megtervezve, hogy kikerülje a browser verzió ellenőrzést, lehetővé téve a browser műlödését rendszer frissítés nélkül. Ez lehetővé teszi, hogy hozzáférj a browser exploit weboldalhoz a következő fejezetben.

<!--@include: ./_include/addproxy.md -->

1. Nyomj a "Back"-re kétszer, majd a "Close"-ra, hogy visszajuszz a HOME Menübe

### III. rész - A SafeB9SInstaller indítása

Ebben a fejezetben meg fogod látogatni a browser exploit weboldalt, ami az universal-otherapp-ot fogja használni a boot9strap (egyedi firmware) telepítő indításához.

1. A HOME menüben nyomd meg a bal és jobb váll gombokat egyszerre, hogy megnyisd a kamerát
   - Ha nem tudod megnyitni a kamerát, nyisd meg az Internet Browser-t kézzel, és írd be az URL-t e helyett. (`https://zoogie.github.io/web/nbhax/`)
2. Érintsd meg a QR Code gombot és olvasd le [ezt a QR kódot](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L)
   - Ha összeomlik vagy hibakódot kapsz, [kövesd ezt a hibaelhárítási útmutatót](troubleshooting-ssloth-browser)
   - Ha tanúsítvány figyelmeztetést kapsz, nyomd meg az (A) gombot a kapcsolat engedélyezéséhez
3. Nyomj a "PROCEED TO HAXX" gombra
4. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
   - Ha hibát kapsz, [nézd át a hibaelhárítási útmutatót](troubleshooting-ssloth-browser)

### IV. rész - Boot9strap telepítése

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - Ha egy lépés az alsó képernyőn piros színű szöveget eredményez, és nem kér a rendszer tőled egy gomb-kombinációt, akkor [kövesd ezt a hibaelhárítási útmutatót](troubleshooting-ssloth-browser)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

### V. rész - A Proxy beállítás alaphelyzetbe állítása

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Tovább a [telepítés véglegesítésére](finalizing-setup)

:::
