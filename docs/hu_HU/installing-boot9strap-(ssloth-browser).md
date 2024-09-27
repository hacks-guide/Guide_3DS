# Boot9strap telepítése (SSLoth-Browser)

:::details Technical Details (optional)

A Browser alkalmazás exploit-olásához ki kell kapcsolni a verzió ellenőrzést, ami úgy lett megtervezve, hogy ne engedje a böngésző használatát a nélkül, hogy előtte frissítenénk a rendszert a legfrissebb verzióra.

Egy publikus proxy szerver elérhető, ami az SSLoth exploit segítségével ki tudja iktatni ezt az ellenőrzést.

Ha ez a kiiktatás aktív, egy exploit weboldal elérhető, ami elvégzi a többi részét a feladatnak.

A technikai részleteit az ezen az oldalon használt exploit-oknak tekintsd meg [itt](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) és [itt](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Compatibility Notes

Az SSLoth lehetővé teszi a 11.13.0 és alatti verziók számára, hogy megkerüld a böngésző verzió ellenőrzést, ezáltal lehetővé tegye a new-browserhax vagy az old-browserhax (kompatibilis a 11.4.0 verziótól 11.13.0-ig minden régió esetén) használatát, amik az universal-otherapp-pal együtt használhatók.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

Ebben a fejezetben fel fogod másolni a fájlokat, amik a browserhax és az universal-otherapp kiváltásához szükségesek.

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold az `otherapp.bin`-t az SD kártyád gyökerébe, majd nevezd át `arm11code.bin` névre
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
   - If you do not see the `.bin` extension, do not add it to the end of the filename
4. Másold át a `boot.firm` és `boot.3dsx` fájlt a Luma3DS `.zip`-ből az SD kártya gyökerébe
5. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
6. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
7. Másold át a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád gyökerébe
8. Tedd vissza az SD kártyád a konzoldba
9. Kapcsold be a konzolod

### Section II - SSLoth

Ebben a fejezetben módosítani fogod az Internet kapcsolat beállításokat hogy egy proxy hálózatot használj, ami úgy lett megtervezve, hogy kikerülje a browser verzió ellenőrzést, lehetővé téve a browser műlödését rendszer frissítés nélkül. Ez lehetővé teszi, hogy hozzáférj a browser exploit weboldalhoz a következő fejezetben.

<!--@include: ./_include/addproxy.md -->

1. Nyomj a "Back"-re kétszer, majd a "Close"-ra, hogy visszajuszz a HOME Menübe

### Section III - Launching SafeB9SInstaller

Ebben a fejezetben meg fogod látogatni a browser exploit weboldalt, ami az universal-otherapp-ot fogja használni a boot9strap (egyedi firmware) telepítő indításához.

1. A HOME menüben nyomd meg a bal és jobb váll gombokat egyszerre, hogy megnyisd a kamerát
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/nbhax/`)
2. Érintsd meg a QR Code gombot és olvasd le [ezt a QR kódot](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L)
   - If you get a crash or an error code, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)
   - If you get a security certificate warning, press (A) to allow the connection
3. Nyomj a "PROCEED TO HAXX" gombra
4. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
   - If you get an error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)

### Section IV - Installing boot9strap

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
