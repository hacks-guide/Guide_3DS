# F3 (Linux)

## Required Reading

Ez egy kiegészítő rész, amelyben F3 segítségével keresünk hibákat az SD kártyádon.

Az SD kártyád méretétől és a számítógéped sebességétől függően ez a folyamat több óráig is eltarthat!

Ez az oldal Linux felhasználókra vonatkozik. Ha nem Linuxod van, nézd meg a [H2testw (Windows)](h2testw-\(windows\)) vagy az [F3X (Mac)](f3x-\(mac\)) oldalt.

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Csomagold ki az f3 `.zip` fájlt
2. Lépj `cd` paranccsal az f3 könyvtárba
3. Futtasd a `make`-et az F3 összeállításához
4. Helyezd az SD kártyád a számítógépbe
5. Csatold fel az SD kártyád
6. Futtasd a `./f3write <az SD kártyád csatolási pontja>` parancsot
7. Várj, amíg a folyamat befejeződik. Lentebb egy példa kimenet látható.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Futtasd a `./f3read <az SD kártyád csatolási pontja>` parancsot
2. Várj, amíg a folyamat befejeződik. Lentebb egy példa kimenet látható.

```bash
$ ./f3read /media/michel/6135-3363/
									SECTORS      ok/corrupted/changed/overwritten
Validating file 1.h2w ... 2097152/        0/      0/      0
...
Validating file 30.h2w ... 1491904/        0/      0/      0

	Data OK: 29.71 GB (62309312 sectors)
Data LOST: 0.00 Byte (0 sectors)
					Corrupted: 0.00 Byte (0 sectors)
	Slightly changed: 0.00 Byte (0 sectors)
				Overwritten: 0.00 Byte (0 sectors)
Average Reading speed: 9.42 MB/s
```

___

::: tip

Ha a teszt eredménye `Data LOST: 0.00 Byte (0 sectors)`, az SD kártyád rendben van és most már törölheted az összes `.h2w` fájlt róla.

:::

::: danger

Ha a teszt eredménye bármi más, elképzelhető, hogy az SD kártyád sérült, és cserélned kell!

:::

::: tip

Return to [Get Started](get-started)

:::
