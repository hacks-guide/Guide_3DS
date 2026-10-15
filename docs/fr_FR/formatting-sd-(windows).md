# Formater la SD (Windows)

## Lecture requise

Ceci est une section complémentaire sur comment formater la carte SD afin qu'elle fonctionne sur 3DS.

Si votre carte SD est déjà reconnue par la 3DS, cette section est facultative.

::: warning

Cette page est seulement pour les utilisateurs de Windows. Si vous n'utilisez pas Windows, consultez les pages [Formater la SD (Linux)](formatting-sd-(linux)) ou [Formater la SD (Mac)](formatting-sd-(mac)).

:::

## Ce dont vous avez besoin

- La dernière version de [guiformat](https://nintendohomebrew.com/guiformat)

## Instructions

1. Exécutez `guiformat.exe`

2. Sélectionnez la lettre de lecteur de votre carte SD dans le champ "Drive"

   ::: danger

   Assurez-vous d'avoir choisi la bonne lettre de lecteur, sinon vous pourriez effacer accidentellement le mauvais lecteur !

   :::

3. Sélectionnez une taille pour "Allocation unit size" (Taille d'unité d'allocation)
   - Si la carte SD est de 64 Go, choisissez 32768
   - Si la carte SD est d'une taille supérieure à 64 Go, choisissez 65536

4. Mettez ce que vous voulez dans "Volume label"

5. Assurez-vous que "Quick Format" est sélectionné

6. Cliquez sur "Start"

7. Cliquez sur "OK"

8. Attendez que le formatage se termine

9. Cliquez sur "Fermer"

10. Si la carte SD contenait des fichiers et dossiers avant le formatage, recopiez-les sur la carte SD depuis votre ordinateur

## Dépannage

- guiformat affiche l'erreur "Failed to open device: GetLastError()=32"
  - Fermez tout ce qui peut être utilisé par la carte SD, par exemple, n'importe quelle fenêtre de l'Explorateur de fichiers.
  - Si le problème persiste, essayez de reformater la carte en NTFS dans l'Explorateur de fichiers, fermez cette fenêtre lorsque c'est terminé, puis réessayez le processus avec guiformat.

- guiformat affiche l'erreur "GetLastError()=1117"
  - L'interrupteur de protection en écriture de votre carte SD pourrait être [activé](/images/sdlock.png). L'interrupteur doit être mis en position haute pour autoriser l'écriture sur la carte SD (dont le formatage).

- La carte SD reste non reconnue par la console ou continue d'afficher la mauvaise capacité après le formatage
  - Votre carte SD pourrait être partitionnée ou avoir de l'espace non alloué. Suivez les instructions [ici](https://wiki.hacks.guide/wiki/SD_Clean/Windows) pour reformater votre carte SD.
