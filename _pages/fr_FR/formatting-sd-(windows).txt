---
title: "Formatage de la carte SD (Windows)"
---

{% include toc title="Table des matières" %}

### Lecture requise

Il s'agit d'une section supplémentaire pour le formatage d'une carte SD afin que celle-ci fonctionne avec la 3DS.

Si la 3DS reconnaît déjà la carte SD, il n'est pas nécessaire de suivre ce guide.

Cette page est pour les utilisateurs de Windows uniquement. Si vous n'êtes pas sous Windows, consultez les pages [Formatage de la carte SD (Linux)](formatting-sd-(linux)) ou [Formatage de la carte SD (Mac)](formatting-sd-(mac)) .

## Ce dont vous avez besoin

* **Pour les cartes SD de 32 Go ou moins :** la dernière version de [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
* **Pour les cartes SD de 64 Go ou plus :** La dernière version de [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

### Instructions (32 Go ou moins)

1. Insérez votre carte SD dans votre ordinateur
1. Si la carte SD contient des fichiers et des dossiers, copiez tout dans un dossier sur votre ordinateur
1. Exécutez `SD Card Formatter Setup` (le fichier `.exe`) en tant qu'administrateur dans le fichier `.zip` téléchargé, puis installez le programme
1. Exécutez `SD Card Formatter` à partir du menu Démarrer
1. Sélectionnez la lettre de lecteur de votre carte SD dans "Select card"

    Assurez-vous de choisir la bonne lettre de lecteur, sinon vous risqueriez d'effacer accidentellement le mauvais lecteur !
    {: .notice--danger}

1. Entrez ce que vous voulez pour "Volume label"
1. Assurez-vous que la case "Quick Format" est sélectionnée
1. Cliquez sur "Format"
1. Cliquez sur "OK"
1. Attendez que le formatage soit terminé
1. Cliquez sur "OK"
1. Fermez SD Card Formatter
1. Si la carte SD contenait des fichiers et des dossiers avant le formatage, recopiez les dessus depuis votre ordinateur

### Instructions (64 Go ou plus)

1. Insérez votre carte SD dans votre ordinateur
1. Si la carte SD contient des fichiers et des dossiers, copiez tout dans un dossier sur votre ordinateur
1. Exécutez `guiformat.exe`
1. Sélectionnez la lettre de lecteur de votre carte SD pour "Drive"

    Assurez-vous de choisir la bonne lettre de lecteur, sinon vous risqueriez d'effacer accidentellement le mauvais lecteur !
    {: .notice--danger}

1. Sélectionnez une taille pour "Allocation unit size"
    + Si la carte SD fait 64 Go, choisissez 32768
    + If the SD card is larger than 64GB, choose 65536
1. Entrez ce que vous voulez pour "Volume label"
1. Assurez-vous que la case "Quick Format" est sélectionnée
1. Cliquez sur "Start"
1. Cliquez sur "OK"
1. Attendez que le formatage soit terminé
1. Cliquez ensuite sur "Close"
1. Si la carte SD contenait des fichiers et des dossiers avant le formatage, recopiez les dessus depuis votre ordinateur

### Troubleshooting

* guiformat shows the error "Failed to open device: GetLastError()=32"
    + Fermez tout ce qui peut être utilisé par la carte SD, comme par exemple, n'importe quelle fenêtre ouverte de l'Explorateur de fichiers.
    + If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

* guiformat shows the error "GetLastError()=1117"
    + L'interrupteur de protection contre l'écriture de votre carte SD est peut être [activé](/images/sdlock.png). L'interrupteur doit être positionné vers le haut pour permettre l'écriture sur la carte SD (y compris le formatage).

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
