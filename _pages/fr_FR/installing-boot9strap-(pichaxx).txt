---
title: "Installation de boot9strap (PicHaxx)"
---

{% include toc title="Table des matières" %}

### Lecture requise

Cette méthode d'utilisation de Seedminer pour une exploitation plus poussée utilise votre fichier `movable.sed` pour écrire un fichier de sauvegarde modifié pour Pokémon Picross, qui peut ensuite être utilisé avec universal-otherapp pour exécuter SafeB9SInstaller.

Ce processus écrasera votre fichier de sauvegarde Pokémon Picross, si vous en avez un. Si vous souhaitez préserver les données de votre jeu Pokémon Picross, vous devriez faire une sauvegarde de votre fichier `00000001.sav` avant de l'écraser.
{: .notice--warning}

## Ce dont vous avez besoin

* Le jeu "Pokémon Picross" (gratuit sur eShop) installé sur votre appareil
  + Vous pouvez scanner [ce QR code](http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFF&data=ESHOP://50010000037815&margin=0&qzone=1&size=400x400&ecc=L) en utilisant l'Appareil photo Nintendo 3DS pour un lien direct vers l'application eShop
  + Votre carte SD doit être insérée dans votre appareil pour installer Pokémon Picross
* Votre fichier `movable.sed` obtenu grâce à [Seedminer](seedminer)
* La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/latest)
* La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)
* La dernière version de [Luma3DS] (https://github.com/LumaTeam/Luma3DS/releases/latest)
* La dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)

### Instructions

#### Section I - Préparatifs

1. Allumez votre console
1. Ouvrez le Nintendo eShop
1. Appuyez sur l'icône de recherche (petite loupe)
1. Rechercher `picross`
1. Ouvrir la page du magasin pour Pokémon Picross
1. Télécharger Pokémon Picross
  + Vous pouvez scanner [ce QR code](http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFF&data=ESHOP://50010000037815&margin=0&qzone=1&size=400x400&ecc=L) en utilisant l'Appareil photo Nintendo 3DS pour un lien direct vers l'application eShop
  + Votre carte SD doit être insérée dans votre appareil pour installer Pokémon Picross
1. Éteignez votre 3DS
1. Insérez votre carte SD dans votre ordinateur
1. Copiez `otherapp.bin` à la racine de votre carte SD
  + La racine de la carte SD représente le répertoire initial de la carte SD où vous pouvez voir le dossier Nintendo 3DS, mais ce n'est pas à l'intérieur de ce dernier
1. Copiez `boot.firm` et `boot.3dsx` depuis Luma3DS `.zip`vers la racine de votre carte SD
1. Créez un dossier à la racine de votre carte SD nommé `boot9strap`
1. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis le fichier ".zip" de boot9strap vers le dossier `/boot9strap/` sur votre carte SD
1. Copiez `SafeB9SInstaller.bin` depuis le fichier `.zip` de SafeB9SInstaller à la racine de votre carte SD

    ![]({{ "/images/screenshots/pichaxx-root-layout.png" | absolute_url }})
    {: .notice--info}
	
#### Section II - PicHaxx

1. Ouvrez [le site Web de PicHaxx Injector](https://3ds.nhnarwhal.com/3dstools/pichaxx.php) sur votre ordinateur
1. Sélectionnez votre fichier `movable.sed`
1. Sélectionnez "Build and Download"
1. Attendez la fin de l'opération
1. Accédez à `Nintendo 3DS` ->`<ID0>`->`<ID1>`->`title` -> `00040000` ->` 0017c100` -> `data` sur votre carte SD
  + L'`<ID0>` sera le même que celui que vous avez utilisé dans [Seedminer](seedminer)
  + L'`<ID1>` est un dossier de 32 caractères à l'intérieur du `<ID0>`
1. Copiez le fichier fraîchement téléchargé `00000001.sav` vers le dossier `data` sur votre carte SD
  + Remplacez l'ancien fichier de sauvegarde lorsque cela vous sera demandé

    ![]({{ "/images/screenshots/pichaxx-save-location.png" | absolute_url }})
    {: .notice--info}
	
1. Réinsérez votre carte SD dans votre 3DS
1. Allumez votre console
1. Lancez "Pokémon Picross"
1. Si l'exploit a réussi, votre console devrait avoir démarré sur SafeB9SInstaller
  + Si vous obtenez un message d'erreur, [suivez ce guide de dépannage](troubleshooting#installing-boot9strap-pichaxx)

#### Section III - Installation de boot9strap

1. Lorsque vous y êtes invité, entrez la combinaison de touches indiquée sur l'écran supérieur pour installer boot9strap
  + Si l'écran supérieur est vide, redémarrez votre appareil et relancez Pokémon Picross
1. Une fois l'opération terminée, appuyez sur (A) pour redémarrer votre appareil

#### Section IV - Configuration de Luma3DS

1. Votre console va redémarrer dans la configuration de Luma3DS
  + Vous pouvez accéder au menu de configuration du Luma3DS à tout moment en éteignant votre appareil, en maintenant la touche SELECT enfoncée, puis en l'allumant tout en maintenant la touche SELECT enfoncée
  + Si vous obtenez un écran noir, [suivez ce guide de dépannage](troubleshooting#boot-related-issues-on-modded-devices)
1. Utilisez le bouton (A) et la croix directionnelle pour activer les éléments suivants:
  + **"Show NAND or user string in System Settings"**
1. Appuyez sur (Start) pour enregistrer les modifications et redémarrer

À ce stade, votre console démarrera par défaut sur Luma3DS tant que la carte SD sera insérée.
  + Luma3DS n'a pas l'air différent du menu HOME normal. Si votre console a démarré dans le HOME Menu, c'est qu'elle utilise un firmware personnalisé.
  + Sur la page suivante, vous copierez Luma3DS vers la mémoire interne pour que vous puissiez démarrer sans carte SD.

À ce stade, Pokémon Picross n'est plus nécessaire et peut être supprimé de votre appareil. Si vous souhaitez jouer au jeu, restaurez votre sauvegarde `00000001.sav` ou retéléchargez le jeu depuis le Nintendo eShop.
{: .notice--info}
___

### Continuer vers [Finalisation de l'installation](finalizing-setup)
{: .notice--primary}
