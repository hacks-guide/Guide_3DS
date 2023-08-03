---
title: "F3 (Linux)"
---

{% include toc title="Table des matières" %}

### Lecture requise

Cette section supplémentaire vous indique comment vérifier si votre carte SD ne contient pas d'erreurs, en utilisant F3.

Selon la taille de votre carte SD et la vitesse de votre ordinateur, ce processus peut prendre jusqu'à plusieurs heures !

Cette page est uniquement destinée aux utilisateurs de Linux. Si vous n'êtes pas sous Linux, consultez les pages [H2testw (Windows)](h2testw-(windows)) ou [F3XSwift (Mac)](f3xswift-(mac)) .

## Ce dont vous avez besoin

* La dernière version de [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### Instructions

1. Décompressez le fichier `.zip` de f3
1. Faites un `cd` vers le dossier de F3
1. Exécutez la commande `make` pour compiler F3
1. Insérez votre carte SD dans votre ordinateur
1. Montez votre carte SD
1. Exécutez la commande `./f3write <point de montage de votre carte SD>`
1. Attendez que le processus soit terminé. Voir ci-dessous pour un exemple de sortie.

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. Exécutez la commande `./f3read <point de montage de votre carte SD>`
1. Attendez que le processus soit terminé. Voir ci-dessous pour un exemple de sortie.

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

Si le test montre un autre résultat, votre carte SD est peut-être corrompue ou endommagée et vous devrez peut-être la remplacer !
{: .notice--danger}

### Retournez vers [Bien démarrer](get-started)
{: .notice--primary}
