---
title: "F3 (Linux)"
---

{% include toc title="Cuprins" %}

### Lectură obligatorie

Aceasta este o secțiune suplimentară pentru a verifica cardul SD de erori folosind F3.

În funcție de mărimea cardului SD și de viteza calculatorului dumneavoastră, acest proces poate dura până la câteva ore!

Această pagină este doar pentru utilizatorii de Linux. If you are not on Linux, check out the [H2testw (Windows)](h2testw-(windows)) or [F3XSwift (Mac)](f3xswift-(mac)) pages.

### Ce aveți nevoie

* The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### Instrucțiuni

1. Extrageți arhiva `.zip` f3
1. Creați `cd` în directorul f3
1. Rulați `make` pentru a compila F3
1. Introduceți cardul SD în calculator
1. Montați cardul SD
1. Executaţi `./f3write <punctul de montare pentru cardul SD>`
1. Așteptați până când procesul este terminat. Vedeți mai jos un exemplu de rezultate.

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. Executaţi `./f3read <punctul de montare pentru cardul SD>`
1. Așteptați până când procesul este terminat. Vedeți mai jos un exemplu de rezultate.

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

Dacă testul arată alte rezultate, cardul SD ar putea fi corupt sau deteriorat și s-ar putea să trebuiască să-l înlocuiți!
{: .notice--danger}

### Întoarceți-vă la [Începeți](get-started)
{: .notice--primary}
