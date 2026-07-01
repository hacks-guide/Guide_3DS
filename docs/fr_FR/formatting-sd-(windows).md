# Formater la SD (Windows)

## Lecture requise

Ceci est une section complémentaire sur comment formater la carte SD afin qu'elle fonctionne sur 3DS.

Si votre carte SD est déjà reconnue par la 3DS, cette section est facultative.

Cette section est dédiée aux utilisateurs de Windows uniquement. Si vous n'utilisez pas Windows, jetez un œil aux pages [Formater la SD (Linux)](formatting-sd-(linux)) ou [Formater la SD (Mac)](formatting-sd-(mac)).

## Ce dont vous avez besoin

- **Pour toutes les tailles de carte SD**: La dernière version de [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **Pour les cartes SD de 64 Go ou plus uniquement :** la dernière version de [guiformat](https://nintendohomebrew.com/guiformat)

## Instructions

### Section I - SD Card Formatter

1. Insérez votre carte SD dans votre ordinateur

2. Si la carte SD contient des fichiers ou des dossiers, copiez tout le contenu dans un dossier de votre ordinateur

3. Lancez `SD Card Formatter Setup` (le fichier `.exe`) présent dans le fichier `.zip` téléchargé en tant qu'administrateur, puis installez le programme

4. Lancez `SD Card Formatter` depuis le Menu Démarrer

5. Sélectionnez la lettre de lecteur de votre carte SD dans le champ "Select card"

   ::: danger

   Assurez-vous de choisir la bonne lettre de lecteur, sinon vous risquez d'effacer accidentellement le mauvais lecteur !

   :::

6. Mettez ce que vous voulez dans "Volume label"

7. Assurez-vous que "Quick Format" est sélectionné

8. Cliquez sur "Format"

9. Cliquez sur "OK"

10. Attendez que le formatage se termine

11. Cliquez sur "OK"

12. Fermez SD Card Formatter

13. Si la carte SD est de 32 Go ou moins et qu'elle contenait des fichiers et des dossiers avant le formatage, recopiez les dessus depuis votre ordinateur

::: info

Vous avez fini de formater votre carte SD si elle est de **32 Go ou moins.**

:::

### Section II - guiformat (UNIQUEMENT pour 64 Go ou plus)

1. Lancez `guiformat.exe`

2. Sélectionnez la lettre de lecteur de votre carte SD dans le champ "Drive"

   ::: danger

   Assurez-vous de choisir la bonne lettre de lecteur, sinon vous risqueriez d'effacer accidentellement le mauvais lecteur !

   :::

3. Sélectionnez une taille pour "Allocation unit size" (Taille d'unité d'allocation)
   - Si la carte SD est de 64 Go, choisissez 32768
   - Si la carte SD est d'une taille supérieure à 64 Go, choisissez 65536

4. Mettez ce que vous voulez dans "Volume label"

5. Assurez-vous que "Quick Format" est sélectionné

6. Cliquez sur "Start"

7. Cliquez sur "OK"

8. Attendez que le formatage se termine

9. Cliquez sur "Close"

10. Si la carte SD contenait des fichiers et dossiers avant le formatage, copiez-les sur la carte SD depuis votre ordinateur

## Dépannage

- guiformat affiche l'erreur "Failed to open device: GetLastError()=32"
  - Fermez tout ce qui peut être utilisé par la carte SD, par exemple, n'importe quelle fenêtre de l'Explorateur de fichiers.
  - Si le problème persiste, essayez de reformater la carte en NTFS dans l'Explorateur de fichiers, fermez cette fenêtre lorsque c'est terminé, puis réessayez le processus avec guiformat.

- guiformat affiche l'erreur "GetLastError()=1117"
  - L'interrupteur de protection en écriture de votre carte SD pourrait être [activé](/images/sdlock.png). L'interrupteur doit être mis en position haute pour autoriser l'écriture sur la carte SD (dont le formatage).

- La carte SD reste non détectée par la console ou affiche toujours la mauvaise capacité après le formatage
  - Votre carte SD est peut-être partitionnée ou possède de l'espace non alloué. Suivez les instructions [ici](https://wiki.hacks.guide/wiki/SD_Clean/Windows) pour reformater votre carte SD.
