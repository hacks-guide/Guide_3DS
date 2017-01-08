* * *

title: "F3 (Linux)" permalink: /f3-(linux).html lang: en_US ref: f3-(linux)

* * *

Cette page va vous guider durant le processus de vérification de votre carte SD pour détecter les erreurs en utilisant F3.{: .notice}

Dépendant de la taille de votre carte SD et de la vitesse de votre ordinateur, ce processus peut prendre plusieurs heures!{: .notice--info}

Cette page s'adresse uniquement au utilisateur de Linux seulement. Si vous n'êtes pas sous Linux, jetez un oeil sur les pages [H2testw (windows)](h2testw-(windows)) ou [F3X (mac)](f3x-(mac)).{: .notice--info}

#### Ce dont vous aurez besoins

* La toute dernière version de [F3](https://github.com/AltraMayor/f3/archive/v6.0.zip)

#### Instructions

  1. Dézippez le fichier `.zip` de F3
  2. `cd` dans le dossier de f3
  3. Lancez `make` pour compiler F3
  4. Insérez votre carte SD dans votre ordinateur
  5. Montez votre carte SD
  6. Lancez `./f3write <le point de montage de votre carte sd>`
  7. Attendez que le processus ce complète de lui-même. Ci-dessous, un example de renvoie (en anglais).
    
        $ ./f3write /media/michel/6135-3363/
         Free space: 29.71 GB
        Creating file 1.h2w ... OK!
        ...
        Creating file 30.h2w ... OK!
        Free space: 0.00 Byte
        Average Writing speed: 4.90 MB/s
        

  8. Lancez `./f3read <le point de montagte de votre carte sd>`

  9. Attendez que le processus ce complète de lui-même. Ci-dessous, un example de renvoie (en anglais).
    
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
        

Si le test retourne le résultat (ceci n'est qu'une traduction du résultat,je ne peux pas tester par moi-même) `Perte de donnée: 0.00 Byte (0 Secteurs)` votre carte SD est bonne et vous pouvez supprimer les fchiers `.h2w` sur votre carte SD{: .notice--success}

Si le test affiche autre chose, votre carte SD pourrait être corrompus ou endommagé et vous serez peut-être dans l'obligation de la remplacer!{: .notice--danger}

Retournez à la page [Get Started](get-started){: .notice--primary}