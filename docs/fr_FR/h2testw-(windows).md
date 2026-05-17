# H2testw (Windows)

## Lecture requise

Ceci est une section complémentaire sur comment vérifier que votre carte SD ne contient pas d'erreurs avec h2testw.

Selon la taille de votre carte SD et la vitesse de votre ordinateur, ce processus peut prendre jusqu'à plusieurs heures !

Cette section est dédiée aux utilisateurs de Windows uniquement. Si votre ordinateur n'est pas sous Windows, jetez un œil aux pages [F3 (Linux)](f3-(linux)) ou [F3XSwift (Mac)](f3xswift-(mac)).

## Ce dont vous avez besoin

- La dernière version de [h2testw](https://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)

## Instructions

1. Copiez `h2testw.exe` depuis l'archive h2testw `.zip` vers votre bureau
2. Insérez votre carte SD dans votre ordinateur
3. Exécutez `h2testw.exe`
4. Sélectionnez "English"
5. Cliquez sur "Select target"
6. Sélectionnez la lettre de lecteur de votre carte SD
7. Assurez-vous que "all available space" est sélectionné
8. Cliquez sur "Write + Verify"
9. Attendez que le processus soit terminé

::: tip

Si le test affiche le résultat `Test finished without errors`, votre carte SD est saine et vous pouvez supprimer tous les fichiers `.h2w` sur votre carte SD.

:::

::: danger

Si le test montre un autre résultat, votre carte SD est peut-être corrompue ou endommagée et vous devrez peut-être la remplacer !

:::

::: tip

Retourner à [Pour commencer](get-started)

:::
