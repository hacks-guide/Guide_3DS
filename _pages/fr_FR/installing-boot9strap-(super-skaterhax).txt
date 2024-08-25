---
title: "Installing boot9strap (super-skaterhax)"
---

{% include toc title="Table des matières" %}

{% capture technical_info %}
<summary><em>Détails techniques (facultatif)</em></summary>
Pour des détails techniques sur les exploits que vous utiliserez sur cette page, voir [ici](https://github.com/zoogie/super-skaterhax).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Notes de compatibilité

Super-skaterhax (when used to launch the Homebrew Launcher) is compatible with New models on version 11.15.0 and above in all regions.

Les instructions fournies ne s'appliquent qu'aux New 3DS, New 3DS XL et New 2DS XL. Please ensure that the console you are modding is a New 3DS, New 3DS XL, or New 2DS XL before continuing.
{: .notice--warning}

## Ce dont vous avez besoin

* The latest release of [super-skaterhax](https://github.com/zoogie/super-skaterhax/releases) (the release `.zip` file)
* La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
* La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)
* The latest release of [nimdsphax](https://github.com/luigoalma/nimdsphax/releases/download/v1.0/nimdsphax_v1.0.zip) (direct download)
* La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier `.zip' de Luma3DS)

#### Section I - Préparatifs

Dans cette section, vous copierez les fichiers nécessaires pour déclencher à la fois super-skaterhax et l'Homebrew Launcher.

1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Copiez `boot.firm` et `boot.3dsx` depuis Luma3DS `.zip`vers la racine de votre carte SD
    + La racine de la carte SD représente le répertoire initial de la carte SD où vous pouvez voir le dossier Nintendo 3DS, mais ce n'est pas à l'intérieur de ce dernier
1. Copy everything inside the folder for your console's region and version (`arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin`) in the release_new3ds `.zip` to the root of your SD card
1. Créez un dossier nommé `boot9strap` à la racine de votre carte SD
1. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis le fichier ".zip" de boot9strap vers le dossier `/boot9strap/` sur votre carte SD
1. Copiez `SafeB9SInstaller.bin` depuis le fichier `.zip` de SafeB9SInstaller à la racine de votre carte SD
1. Créez un dossier nommé `3ds` à la racine de votre carte SD si celui ci n'existe pas
    + This folder stores homebrew applications and data; it is different from the `Nintendo 3DS` folder that the console automatically generates
1. Copy the `nimdsphax` folder from the nimdsphax `.zip` to the `/3ds/` folder on your SD card
1. Réinsérez votre carte SD dans votre console
1. Power on your console

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}


#### Section II - super-skaterhax

Dans cette section, vous allez visiter la page web d'exploit du Navigateur Internet, qui lancera l'Homebrew Launcher.

Si vous ne l'avez pas déjà fait, assurez-vous d'avoir une connexion Internet fonctionnelle configurée sur votre console.
{: .notice--info}

{% capture set_date %}
<summary>If your system date is incorrect, this exploit will not work.<br>Please follow the steps below to set the correct system date.</summary>
1. Launch System Settings on your console
1. Sélectionnez "Autres paramètres"
1. Navigate to "Date & Time" -> "Today's date"
1. Tap Up/Down Arrows to set the correct Day, Month and Year
1. Select OK to confirm
{% endcapture %}
<details>{{ set_date | markdownify }}</details>
{: .notice--info}

1. Sur le Menu HOME, appuyez simultanément sur les boutons (L) et (R) pour ouvrir l'appareil photo
    + Si vous ne pouvez pas ouvrir la caméra, ouvrez le Navigateur Internet et tapez manuellement l'URL (`https://zoogie.github.io/web/super/` pour EUR/USA/JPN, `https://zoogie.github.io/web/korea` pour KOR)
1. Tap the QR code button and scan one of the following QR codes for your console's region [here](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
    + Si vous recevez un avertissement de certificat de sécurité, appuyez sur (A) pour autoriser la connexion
1. Appuyez sur le bouton (Select) pour ouvrir l'onglet signet
    + Si votre bouton (Select) ne répond pas, appuyez sur l'icône étoile en bas à gauche de l'écran
1. Appuyez sur "Ajouter cette page aux favoris"
1. Appuyez une fois sur (B) pour revenir au navigateur
1. Appuyez sur (Start) pour ouvrir le menu contextuel
    + Si votre bouton (Start) ne répond pas, appuyez sur le bouton avec 3 lignes en bas à droite de l'écran
1. Appuyez sur "Paramètres"
1. Appuyez sur "Effacer les cookies"
1. Appuyez sur (A) pour continuer
1. Appuyez sur (HOME) pour revenir au Menu HOME, puis appuyez immédiatement sur (A) pour relancer le navigateur
1. Appuyez sur le bouton "GO GO!" en haut de l'écran
    + Si des invites apparaissent, approuvez les tous
    + If your console freezes on a yellow screen, hold the POWER button until it turns off, then retry this section
    + If your console freezes on a red screen, hold the POWER button until it turns off, redo step 3 of Section II, then retry this section
    + If your console shows "Text" on the bottom screen, you have an Old 3DS and this exploit **will not work on your device**. If this is the case, you should follow [MSET9](installing-boot9strap-(mset9)) instead
    + If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-super-skaterhax)
1. Your console will have booted into the Homebrew Launcher
1. Launch nimdsphax from the list of homebrew
1. Si l'exploit a réussit, vous devriez avoir démarré dans SafeB9SInstaller
    + If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section
    + This may take up to five attempts

#### Section III - Installation de boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}

___

### Continuer vers [Finalisation de l'installation](finalizing-setup)
{: .notice--primary}
