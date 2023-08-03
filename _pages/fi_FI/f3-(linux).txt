---
title: "F3 (Linux)"
---

{% include toc title="Sisällysluettelo" %}

### Tärkeää tietoa

Tämä lisäosio opastaa sinua tarkistamaan SD-korttisi virheiden varalta F3-ohjelman avulla.

SD-korttisi koosta ja tietokoneesi nopeudesta riippuen tämä prosessi voi kestää jopa useita tunteja!

Tämä sivu on vain Linux-käyttäjille. If you are not on Linux, check out the [H2testw (Windows)](h2testw-(windows)) or [F3XSwift (Mac)](f3xswift-(mac)) pages.

### Tarpeet

* The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### Ohjeet

1. Pura f3-`.zip`-tiedosto
1. Vaihda f3-hakemistoon `cd`-komennolla
1. Suorita `make`-komento kääntääksesi F3:n
1. Aseta SD-korttisi tietokoneeseesi
1. Liitä SD-korttisi tiedostojärjestelmään
1. Suorita komento `./f3write <SD-korttisi liitoskohta>`
1. Odota, kunnes toiminto on suoritettu. Alla esimerkkituloste.

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. Suorita komento `./f3read <SD-korttisi liitoskohta>`
1. Odota, kunnes toiminto on suoritettu. Alla esimerkkituloste.

~~~ bash
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
~~~

___

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)`, your SD card is good and you can delete all `.h2w` files on your SD card.
{: .notice--success}

Jos testi näyttää jonkin muun tuloksen, SD-korttisi saattaa olla vioittunut, ja saatat joutua hankkimaan uuden!
{: .notice--danger}

### Palaa osioon [Aloitus](get-started)
{: .notice--primary}
