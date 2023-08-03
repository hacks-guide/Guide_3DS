---
title: "F3 (Linux)"
---

{% include toc title="Inhoudsopgave" %}

### Verplicht te lezen

Dit is een extra gedeelte speciaal voor het checken van je SD-kaart op fouten, met behulp van F3.

Afhankelijk van de grootte van je SD kaart en de snelheid van je computer, kan dit proces tot wel enkele uren duren!

Deze pagina is alleen voor Linux gebruikers. Als je geen Linux gebruikt, zie dan de [H2testw (Windows)](h2testw-(windows)) of [F3XSwift (Mac)](f3x-(mac)) pagina.

### Wat je nodig hebt

* De nieuwste versie van [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### Instructies

1. Unzip (Decomprimeer) het f3 `.zip` bestand
1. `cd` naar de bestandslocatie van f3
1. Voer `make` uit om F3 te compileren
1. Plaats je SD kaart in je computer
1. Mount je SD kaart
1. Voer `./f3write <your sd card mount point>` uit
1. Wacht totdat het proces voltooid is. Zie hieronder voor een voorbeeld van de uitkomst.

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. Voer `./f3read <your sd card mount point>` uit
1. Wacht totdat het proces voltooid is. Zie hieronder voor een voorbeeld van de uitkomst.

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

Als de test iets anders laat zien, kan het zijn dat je SD kaart corrupt of kapot is en moet je hem wellicht vervangen!
{: .notice--danger}

### Ga terug naar het [Begin](get-started)
{: .notice--primary}
