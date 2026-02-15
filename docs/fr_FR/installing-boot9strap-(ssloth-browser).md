# Installation de boot9strap (SSLoth-Browser)

:::details Détails techniques (optionnel)

Afin d'exploiter l'application du Navigateur Internet, nous devons contourner la vérification de sa version, qui est conçue pour interdire son utilisation sans mettre à jour la console sur la dernière version du système.

Un serveur proxy public est disponible, qui, à l'aide de l'exploit SSLoth, permet de contourner cette vérification.

Une fois que le contournement est actif, une page web d'exploit sera accessible et fera le reste du travail.

Pour des détails techniques sur les exploits que vous utiliserez sur cette page, voir [ici](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) et [ici](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Notes de compatibilité

SSLoth permet aux utilisateurs de consoles en version 11.13.0 et versions antérieures de contourner la vérification de la version du Navigateur Internet, permettant l'utilisation de new-browserhax ou old-browserhax (compatible avec les versions 11.4.0 à 11.13.0 dans toutes les régions), qui peuvent ensuite être utilisés conjointement avec universal-otherapp.

## Ce dont vous avez besoin

- La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
- La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)
- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier \`.zip' de Luma3DS)
- La dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Préparatifs

Dans cette section, vous copierez les fichiers nécessaires pour déclencher Browserhax et universal-otherapp.

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez `otherapp.bin` vers la racine de votre carte SD et renommez-le en `arm11code.bin`
   - La racine de la carte SD représente le répertoire initial de la carte SD où vous pouvez voir le dossier Nintendo 3DS, mais ce n'est pas à l'intérieur de ce dernier
   - Si vous ne voyez pas l'extension `.bin`, ne l'ajoutez pas à la fin du nom de fichier
4. Copiez tout depuis le `.zip` de Luma3DS à la racine de votre carte SD
5. Créez un dossier nommé `boot9strap` à la racine de votre carte SD
6. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis le fichier ".zip" de boot9strap vers le dossier `/boot9strap/` sur votre carte SD
7. Copiez `SafeB9SInstaller.bin` depuis le fichier `.zip` de SafeB9SInstaller vers la racine de votre carte SD
8. Réinsérez votre carte SD dans votre console
9. Allumez votre console

::: info

![](/images/screenshots/ssloth-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - SSLoth

Dans cette section, vous allez modifier vos paramètres de connexion Internet pour utiliser un réseau proxy conçu pour contourner la vérification de la version du Navigateur Internet, lui permettant de fonctionner sans mettre à jour la console. Cela vous permettra d'accéder à la page Web d'exploit du Navigateur Internet dans la section suivante.

<!--@include: ./_include/addproxy.md -->

1. Appuyez deux fois sur « Retour », puis « Fermer » pour revenir au Menu HOME

### Section II - Lancement de SafeB9SInstaller

Dans cette section, vous allez visiter la page Web d'exploit du Navigateur Internet, qui utilisera universal-otherapp pour lancer l'installateur de boot9strap (custom firmware).

1. Dans le menu HOME, appuyez simultanément sur les boutons L et R pour ouvrir l'appareil photo
   - Si vous ne parvenez pas à ouvrir l'appareil photo, ouvrez le Navigateur Internet et saisissez manuellement l'URL (`https://zoogie.github.io/web/nbhax/`)

2. Touchez le bouton code QR et scannez [ce code QR](http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax&qzone=1&margin=0&size=400x400&ecc=L)

   - Lorsque vous voyez un panneau avec le code d'erreur `012-1511`, `032-1809`, ou `032-1820`, appuyez sur (A) pour autoriser la connexion
   - If you get a crash or a different error code, [follow this troubleshooting guide](troubleshooting-ssloth-browser)

   ::: danger

   Si vous recevez une notification vous disant de mettre à jour votre console, STOP ! Refaites la Section II depuis le début et vous assurez que vous avez correctement configuré le proxy.

   :::

3. Appuyez sur le bouton "PROCEED TO HAXX"

4. Si l'exploit a réussi, vous aurez démarré sur SafeB9SInstaller
   - Si vous rencontrez une erreur, [suivez ce guide de dépannage](troubleshooting-ssloth-browser)

### Section IV - Installer boot9strap

Dans cette section, vous installerez un custom firmware sur votre console.

1. Lorsque vous y êtes invité, entrez la combinaison de touches indiquée sur l'écran supérieur pour installer boot9strap
   - Dans le cas où un message en rouge apparaîtrait lors d'une étape sur l'écran du bas et que vous n'êtes pas sollicité pour saisir une combinaison de boutons, [suivez ce guide de dépannage](troubleshooting-ssloth-browser)
2. Une fois l'opération terminée, appuyez sur (A) pour redémarrer votre console

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Restauration du proxy par défaut

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
