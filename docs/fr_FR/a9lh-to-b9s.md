# A9LH vers B9S

## Lecture requise

Cette page est faite pour que les utilisateurs actuels de arm9loaderhax puissent mettre à jour leurs consoles vers boot9strap.

Toutes les versions futures de Luma3DS seront faites exclusivement au format `.firm`, qui ne sera compatible qu'avec boot9strap et sighax. Cela signifie que pour continuer à recevoir les dernières mises à jour de Luma3DS, vous devriez utiliser cette page pour mettre à jour votre installation.

## Ce dont vous avez besoin

::: warning

Pour utiliser les liens [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) sur cette page, vous aurez besoin d'un client torrent comme [qBittorrent](https://www.qbittorrent.org/download.php) ou [Deluge](http://dev.deluge-torrent.org/wiki/Download).

:::

::: info

Notez que, seulement sur New 3DS, `secret_sector.bin` est nécessaire pour annuler l'exploit arm9loaderhax, c'est pourquoi il n'est pas nécessaire pour l'installation de boot9strap sur une console non modifiée. Si vous n'avez pas une New 3DS, vous n'avez pas besoin de `secret_sector.bin`.

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> - **New 3DS uniquement:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (lien magnet)
- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier \`.zip' de Luma3DS)
- La version v7.0.5 de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (téléchargement direct)
- La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
- La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)

## Instructions

### Section I - Préparatifs

::: info

Pour toutes les étapes de cette section, si l'un des fichiers existe déjà, remplacez-les par les nouveaux fichiers.

:::

1. Éteignez votre console

2. Insérez votre carte SD dans votre ordinateur

3. Copiez tout depuis l'archive Luma3DS `.zip` la plus récente vers la racine de votre carte SD
   - La racine de la carte SD représente le répertoire initial sur votre carte SD où vous pouvez voir le dossier Nintendo 3DS, mais n'êtes pas à l'intérieur de celui-ci

4. Copiez `arm9loaderhax.bin` depuis l'archive `.zip` de la version 7.0.5 de Luma3DS vers la racine de votre carte SD

5. Copiez `SafeB9SInstaller.bin` depuis l'archive SafeB9SInstaller`.zip` vers le dossier `/luma/payloads/` sur votre carte SD
   - Si les dossiers `luma` ou `payloads` n'existent pas, créez-les
   - Supprimez tous les autres payloads `.bin` existants (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) dans le dossier `/luma/payloads/` sur votre carte SD car ils ne seront pas compatibles avec les versions de Luma3DS compatibles avec boot9strap

6. Créez un dossier nommé `boot9strap` à la racine de votre carte SD

7. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis l'archive boot9strap `.zip` vers le dossier `/boot9strap/` sur votre carte SD

8. **Utilisateurs de New 3DS uniquement :** Copiez `secret_sector.bin` vers le dossier `/boot9strap/` sur votre carte SD

   ::: info

   ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

   :::

9. Réinsérez votre carte SD dans votre console

### Section II - Installation de boot9strap

1. Démarrez votre console en maintenant (Start) pour lancer SafeB9SInstaller
   - Si vous voyez l'écran de configuration de Luma au lieu de SafeB9SInstaller, appuyez simplement sur (Start), puis éteignez votre 3DS et réessayez
   - Si cela vous donne une erreur, essayez d'utiliser soit une nouvelle carte SD, soit de formater votre carte SD actuelle (sauvegardez d'abord les fichiers existants)
2. Attendez la fin de tous les contrôles de sécurité
   - Si vous avez une erreur "OTP Crypto Fail", téléchargez <font-awesome-icon icon="fa-solid fa-magnet"/> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), puis placez-le dans le dossier `/boot9strap/` sur votre carte SD et réessayez
3. Lorsque vous y êtes invité, entrez la combinaison de boutons donnée sur l'écran du haut pour installer boot9strap
   - Si une étape sur l'écran du bas a du texte rouge, et que vous n'êtes pas invité à entrer une combinaison de boutons, [suivez ce guide de dépannage](troubleshooting-a9lh-to-b9s)

<!--@include: ./_include/configure-luma3ds.md -->

___

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
