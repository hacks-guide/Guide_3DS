# Formatage de la carte SD (Windows)

## Lecture Requise

Ceci est une section supplémentaire pour formater la carte SD afin qu'elle fonctionne sur 3DS.

Si votre carte SD est déjà reconnue par la 3DS, cette section est facultative.

Cette section est dédiée aux utilisateurs de Windows uniquement. Si vous n'êtes pas sur Windows, consultez les pages [Formater la carte SD (Linux)](formatting-sd-\(linux\)) ou [Formater la carte SD (Mac)](formatting-sd-\(mac\)).

## Ce dont vous avez besoin

- **For all SD card sizes**: The latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **Pour les cartes SD de 64 Go ou plus :** la dernière version de [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions

### Section I - SD Formatter

1. Insérez votre carte SD dans votre ordinateur

2. Si la carte SD contient des fichiers ou des dossiers, copiez tout le contenu dans un dossier de votre ordinateur

3. Lancez `SD Card Formatter Setup` (le fichier `.exe`), qui se trouve dans le fichier `.zip` téléchargé, en tant qu'administrateur, puis installez le programme

4. Lancez `SD Card Formatter` depuis le Menu Démarrer

5. Sélectionnez la lettre de lecteur correspondant à votre carte SD dans le champ "Select card"

    ::: danger

    Assurez-vous de choisir la bonne lettre de lecteur, sinon vous risqueriez d'effacer accidentellement le mauvais lecteur !

    :::

6. Mettez ce que vous voulez dans "Volume label"

7. Assurez-vous que l'option "Quick Format" est cochée

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

2. Sélectionnez la lettre de lecteur correspondant à votre carte SD dans le champ "Drive"

    ::: danger

    Assurez-vous de choisir la bonne lettre de lecteur, sinon vous risqueriez d'effacer accidentellement le mauvais lecteur !

    :::

3. Sélectionnez une taille pour la taille d'unité d'allocation ("Allocation unit size")
    - Si votre carte SD est de 64 Go, choisissez 32768
    - Si votre carte SD est d'une taille supérieure à 64 Go, choisissez 65536

4. Mettez ce que vous voulez dans "Volume label"

5. Assurez-vous que l'option "Quick Format" est cochée

6. Cliquez sur "Start"

7. Cliquez sur "OK"

8. Attendez que le formatage se termine

9. Cliquez sur "Close"

10. Si la carte SD contenait des fichiers et des dossiers avant le formatage, recopiez les dessus depuis votre ordinateur

## Dépannage

- guiformat affiche l'erreur "Failed to open device: GetLastError()=32"
    - Fermez tout ce qui peut être utilisé par la carte SD, par exemple, n'importe quelle fenêtre ouverte de l'Explorateur de fichiers.
    - Si le problème persiste, essayez de formater la carte SD en NTFS dans l'Explorateur de fichiers, fermez cette fenêtre une fois l'opération effectuée puis réessayez le formatage avec guiformat.

- guiformat affiche l'erreur "GetLastError()=1117"
    - L'interrupteur de protection contre l'écriture de votre carte SD est peut-être [activé](/images/sdlock.png). L'interrupteur doit être mis en position haute pour autoriser l'écriture sur la carte SD (dont le formatage).

- La carte SD reste non détectée par la console ou affiche toujours la mauvaise capacité après le formatage
    - Votre carte SD est peut-être partitionnée ou possède de l'espace non alloué. Suivez les instructions [ici](https://wiki.hacks.guide/wiki/SD_Clean/Windows) pour reformater votre carte SD.
