* * *

title: "F3 (Linux)" permalink: /f3-(linux).html lang: en_US ref: f3-(linux)

* * *

Cette page va vous guider durant le processus de vérification de votre carte SD pour détecter les erreurs en utilisant F3.{: .notice}

Selon la taille de votre carte SD et de la vitesse de votre ordinateur, ce processus peut durer plusieurs heures !{: .notice--info}

Cette page s'adresse uniquement aux utilisateurs de Linux. Si vous n'êtes pas sous Linux, jetez un œil aux pages [H2testw (windows)](h2testw-(windows)) ou [F3X (mac)](f3x-(mac)).{: .notice--info}

#### Ce dont vous aurez besoin

* La dernière version de [F3](https://github.com/AltraMayor/f3/archive/v6.0.zip)

#### Instructions

  1. Décompressez le fichier `.zip` de F3
  2. `cd` dans le dossier de f3
  3. Lancez `make` pour compiler F3
  4. Insérez votre carte SD dans votre ordinateur
  5. Montez votre carte SD
  6. Lancez `./f3write <le point de montage de votre carte sd>`
  7. Attendez que le processus soit terminé. Voir ci-dessous pour un exemple de sortie.
    
        $ ./f3write /media/michel/6135-3363/
         Free space: 29.71 GB
        Creating file 1.h2w ... OK!
        ...
        Creating file 30.h2w ... OK!
        Free space: 0.00 Byte
        Average Writing speed: 4.90 MB/s
        

  8. Lancez `./f3read <le point de montage de votre carte sd>`

  9. Attendez que le processus soit terminé. Voir ci-dessous pour un exemple de sortie.
    
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
        

Si le test affiche le résultat `Data LOST: 0.00 Byte (0 sectors)` votre carte SD est bonne et vous pouvez supprimer tous les fichiers `.h2w` sur la carte SD {: .notice--success}

Si le test affiche autre chose, votre carte SD pourrait être corrompue ou endommagée et vous serez peut-être dans l'obligation de la remplacer !{: .notice--danger}

Retournez à la page [Get Started](get-started){: .notice--primary}