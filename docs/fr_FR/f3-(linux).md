# F3 (Linux)

## Lecture requise

Ceci est une section complémentaire sur comment vérifier si votre carte SD ne contient pas d'erreurs, en utilisant F3.

Selon la taille de votre carte SD et la vitesse de votre ordinateur, ce processus peut prendre jusqu'à plusieurs heures !

Cette page est uniquement destinée aux utilisateurs de Linux. Si vous n'êtes pas sous Linux, jetez un œil aux pages [H2testw (Windows)](h2testw-(windows)) ou [F3XSwift (Mac)](f3xswift-(mac)).

## Ce dont vous avez besoin

- La dernière version de [F3](https://github.com/AltraMayor/f3/releases/latest)

## Instructions

1. Décompressez le fichier `.zip` de F3
2. `cd` vers le répertoire de F3
3. Faites `make` pour compiler F3
4. Insérez votre carte SD dans votre ordinateur
5. Montez votre carte SD
6. Exécutez `./f3write <your sd card mount point>`
7. Attendez la fin de l'opération. Voir ci-dessous pour un exemple de sortie.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Exécutez `./f3read <your sd card mount point>`
2. Attendez la fin de l'opération. Voir ci-dessous pour un exemple de sortie.

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

Si le résultat du test affiche `Data LOST: 0.00 Byte (0 sectors)`, votre carte SD est saine et vous pouvez supprimer tous les fichiers `.h2w` sur votre carte SD.

:::

::: danger

Si le test montre un autre résultat, votre carte SD est peut-être corrompue ou endommagée et vous devrez peut-être la remplacer !

:::

::: tip

Retourner à [Pour commencer](get-started)

:::
