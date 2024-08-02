---
title: "De A9LH à boot9strap"
---

{% include toc title="Table des matières" %}

### Lecture requise

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

Toutes les futures versions de Luma3DS ne seront faites qu'exclusivement dans le format ".firm", lequel ne sera compatible qu'boot9strap et sighax. Cela veut dire que pour pouvoir recevoir les dernières mises à jour de Luma3DS, vous devez utiliser cette page pour mettre à jour votre installation.

Pour extraire les fichiers `.7z` sur cette page, vous aurez besoin d'un programme d'archives comme [7-Zip](http://www.7-zip.org/) ou [The Unarchiver](https://theunarchiver.com).

## Ce dont vous avez besoin

Pour utiliser les liens [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) sur cette page, vous aurez besoin d'un client torrent comme [qBittorrent](https://www.qbittorrent.org/download.php) ou [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

Notez que, seulement sur New 3DS, `secret_sector.bin` est nécessaire pour revenir sur l'exploit arm9loaderhax, c'est pourquoi il n'est pas nécessaire pour l'installation de boot9strap sur une console non-modifiée. Si vous n'avez pas de New 3DS, vous n'avez pas besoin de `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="Ceci est un lien magnet. Utilisez un client torrent pour télécharger le fichier."></i> - ** Utilisateurs de New 3DS uniquement :** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (lien magnet)
* La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier `.zip' de Luma3DS)
* The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
* La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
* La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)

### Instructions

#### Section I - Préparatifs

Pour toutes les étapes de cette section, remplacez tous les fichiers existants sur votre carte SD.
{: .notice--info}

1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Copy `boot.firm` and `boot.3dsx` from the latest version Luma3DS `.zip` to the root of your SD card
    + La racine de la carte SD fait référence au répertoire initial de votre carte SD où vous pouvez voir le dossier Nintendo 3DS, mais où vous n'êtes pas à l'intérieur de ce dernier
1. Copiez `arm9loaderhax.bin` depuis le fichier `.7z` de la version 7.0.5 de Luma3DS à la racine de votre carte SD
1. Copiez `SafeB9SInstaller.bin` du fichier `.zip` de SafeBS9Installer vers le dossier `/luna/payloads/` de votre carte SD
    + Si les dossiers `luma` ou `payloads` n'existent pas, créez-les
    + Supprimez tous les autres payloads `.bin` existants (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) dans le dossier `/luma/payloads/` de votre carte SD car ils seront incompatibles avec les versions de Luma3DS compatibles avec boot9strap
1. Créez un dossier nommé `boot9strap` à la racine de votre carte SD
1. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis le fichier ".zip" de boot9strap vers le dossier `/boot9strap/` sur votre carte SD
1. **New 3DS Seulement:** Copiez `secret_sector.bin` dans le dossier `/boot9strap/` sur votre carte SD

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Réinsérez votre carte SD dans votre console

#### Section II - Installation de boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    + Si vous voyez l'écran de configuration de Luma au lieu de SafeB9SInstaller, appuyez simplement sur (Start), puis éteignez votre 3DS et réessayez
    + Si cela vous donne une erreur, essayez d'utiliser une nouvelle carte SD ou de formater votre carte SD actuelle (sauvegardez d'abord les fichiers existants)
1. Attendez la fin de tous les contrôles de sécurité
    + Si vous obtenez une erreur "OTP Crypto Fail", télécharger <i class="fa fa-magnet" aria-hidden="true" title="Ceci est un lien magnet. Utilisez un client torrent pour télécharger le fichier."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), puis mettez-le dans le dossier `/boot9strap/` de votre carte SD et réessayez
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Your console should have rebooted into the Luma3DS configuration menu
    + Le menu de configuration de Luma3DS sert à régler les paramètres du custom firmware Luma3DS. Beaucoup de ces paramètres peuvent être utiles pour la personnalisation ou le débogage
    + Aux fins de ce guide, ces paramètres seront laissés dans les paramètres par défaut
    + If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Appuyez sur (Start) pour enregistrer les modifications et redémarrer

___

### Continuer vers [Finalisation de l'installation](finalizing-setup)
{: .notice--primary}
