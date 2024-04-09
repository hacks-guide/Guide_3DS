---
title: "Mettre à jour B9S"
---

{% include toc title="Table des matières" %}

### Lecture requise

Cette page s'adresse aux utilisateurs de boot9strap déjà présent sur leurs console afin de le mettre à jour vers la dernière version.

## Ce dont vous avez besoin

* La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
* La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)
* La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier `.zip' de Luma3DS)

### Instructions

#### Section I - Préparatifs

Pour toutes les étapes de cette section, remplacez tous les fichiers existants sur votre carte SD.
{: .notice--info}

1. Insérez votre carte SD dans votre ordinateur
1. Créez un dossier nommé `boot9strap` à la racine de votre carte SD
1. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis le fichier ".zip" de boot9strap vers le dossier `/boot9strap/` sur votre carte SD
1. Copiez `SafeB9SInstaller.firm` de l'archive `.zip` de SafeB9SInstaller vers la racine de votre carte SD, et renommez-le en `boot.firm`
1. Réinsérez votre carte SD dans votre console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Section II - Installation de boot9strap

1. Power on your console
    + Cela devrait automatiquement lancer SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Section III - Mise à jour de Luma3DS

1. Insérez votre carte SD dans votre ordinateur
1. Copiez les fichiers `boot.firm` et `boot.3dsx` depuis le fichier `.zip` de Luma3DS vers la racine de votre carte SD, en écrasant le fichier existant si nécessaire
1. Réinsérez votre carte SD dans votre console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Le menu de configuration de Luma3DS sert à régler les paramètres du custom firmware Luma3DS. Beaucoup de ces paramètres peuvent être utiles pour la personnalisation ou le débogage
    + Aux fins de ce guide, ces paramètres seront laissés dans les paramètres par défaut

___

### Continuer vers [Finalisation de l'installation](finalizing-setup)
{: .notice--primary}
