# H2testw (Windows)

## Kötelező olvasmány

Ez egy kiegészítő rész, amelyben h2testw segítségével keresünk hibákat az SD kártyádon.

Az SD kártyád méretétől és a számítógéped sebességétől függően ez a folyamat több óráig is eltarthat!

Ez az oldal Windows felhasználókra vonatkozik. Ha nem Windowsod van, nézd meg az [F3 (Linux)](f3-\(linux\)) vagy az [F3X (Mac)](f3x-\(mac\)) oldalt.

## Amire szükséged lesz

- A [h2testw](https://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) legújabb kiadása

## Lépések

1. Másold a `h2testw.exe`-t a h2testw `.zip`-ből az asztalra
2. Helyezd az SD kártyád a számítógépbe
3. Futtasd a `h2testw.exe`-t
4. Válaszd az "English" opciót
5. Kattints "Select target"-re
6. Válaszd ki az SD kártyád betűjelét
7. Bizonyosodj meg róla, hogy az "all available space" van kiválasztva
8. Kattints a "Write + Vertify" gombra
9. Várj, amíg a folyamat befejeződik

::: tip

Ha a teszt eredménye `Test finished without errors`, az SD kártyád hibátlan, és törölheted a `.h2w` fájlokat az SD kártyádról.

:::

::: danger

Ha a teszt eredménye bármi más, elképzelhető, hogy az SD kártyád sérült, és cserélned kell!

:::

::: tip

Vissza a [kezdeti lépésekhez](get-started)

:::
