# F3 (Linux)

## Required Reading

Tämä lisäosio opastaa sinua tarkistamaan SD-korttisi virheiden varalta F3-ohjelman avulla.

SD-korttisi koosta ja tietokoneesi nopeudesta riippuen tämä prosessi voi kestää jopa useita tunteja!

Tämä sivu on vain Linux-käyttäjille. If you are not on Linux, check out the [H2testw (Windows)](h2testw-\(windows\)) or [F3XSwift (Mac)](f3xswift-\(mac\)) pages.

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Pura f3-`.zip`-tiedosto
2. Vaihda f3-hakemistoon `cd`-komennolla
3. Suorita `make`-komento kääntääksesi F3:n
4. Aseta SD-korttisi tietokoneeseesi
5. Liitä SD-korttisi tiedostojärjestelmään
6. Suorita komento `./f3write <SD-korttisi liitoskohta>`
7. Odota, kunnes toiminto on suoritettu. Alla esimerkkituloste.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Suorita komento `./f3read <SD-korttisi liitoskohta>`
2. Odota, kunnes toiminto on suoritettu. Alla esimerkkituloste.

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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)`, your SD card is good and you can delete all `.h2w` files on your SD card.

:::

::: danger

Jos testi näyttää jonkin muun tuloksen, SD-korttisi saattaa olla vioittunut, ja saatat joutua hankkimaan uuden!

:::

::: tip

Return to [Get Started](get-started)

:::
