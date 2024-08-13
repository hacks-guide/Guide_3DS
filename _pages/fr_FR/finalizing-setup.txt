---
title: "Finalisation de l'installation"
---

{% include toc title="Table of Contents" %}

### Lecture requise

Le fichier `boot.firm` est exécuté par boot9strap lui-même, après avoir terminé le chargement de la NAND. In this case, we are using Luma3DS by [LumaTeam](https://github.com/LumaTeam/) to patch the console, allowing it to run homebrew software.

On this page, we will make critical system file backups and install some homebrew programs. Most of these steps will be automated using a script that you will run on your console.

{% capture notice-6 %}
The script will install the following applications:

+  **[FBI](https://github.com/lifehackerhansol/FBI)** *(installs CIA formatted applications)*
+  **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** *(launches the Homebrew Launcher)*
+  **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** *(installs custom themes)*
+  **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** *(backs up and restores save files for 3DS and DS games)*
+  **[ftpd](https://github.com/mtheall/ftpd)** *(access your 3DS SD card wirelessly)*
+  **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** *(a homebrew app store for downloading homebrew from the 3DS over Wi-Fi)*
+  **[GodMode9](https://github.com/d0k3/GodMode9)** *(multipurpose tool which can do NAND and cartridge functions)*

If you don't want one of these applications, you can remove them after you have finished this page by navigating to System Settings -> Data Management -> Nintendo 3DS -> Software. (GodMode9 cannot be removed in this way and is generally required for other functions.)
{% endcapture %}
<div class="notice--info">{{ notice-6 | markdownify }}</div>

### Notes de compatibilité

Si votre **New 3DS** était en version 2.1.0 avant de suivre les instructions ce guide, vous devriez [restaurer votre sauvegarde NAND](godmode9-usage#restoring-a-nand-backup) avant de continuer. Cela ne s'applique probablement pas à vous à moins que vous ne suiviez ce guide en 2017.
{: .notice--warning}

Si votre configuration CFW précédente était basée sur EmuNAND et que vous souhaitez déplacer le contenu de votre EmuNAND/RedNAND vers SysNAND, suivez [Transférer votre EmuNAND](move-emunand) avant de suivre cette page. Si vous ne savez pas ce qu'est une EmuNAND, cela ne s'applique pas à vous.
{: .notice--info}

## Ce dont vous avez besoin

* [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
* [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

### Instructions

#### Section I - Préparatifs

Dans cette section, vous copierez les fichiers nécessaires pour suivre le reste des instructions de cette page.

1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Copy `finalize.romfs` to the root of your SD card
1. Open the `luma` folder on your SD card and create a folder named `payloads` inside, if it does not already exist
1. Copy `x_finalize_helper.firm` to the `payloads` folder
1. Réinsérez votre carte SD dans votre console

The screenshot below indicates the minimum SD card layout that is required to follow this page. Il est possible que vous ayez des fichiers ou des dossiers supplémentaires sur votre carte SD, selon votre configuration précédente ou la méthode que vous avez suivie.

![]({{ "/images/screenshots/finalizing-root-layout.png" | absolute_url }})
{: .notice--info}

![]({{ "/images/screenshots/finalizing-luma-payloads.png" | absolute_url }})
{: .notice--info}

#### Section II - Updating the System

Dans cette section, vous allez mettre à jour votre console vers la dernière version, ce qui est sans danger avec le custom firmware.

{% include_relative include/sysupdate.txt cfw="true" %}

#### Section III - RTC and DSP setup

Dans cette section, vous synchroniserez l'horloge interne de votre 3DS avec l'heure réelle et allez dumper le firmware du son (ce qui est nécessaire pour que certains logiciels homebrew utilisent correctement le son).

1. Appuyez simultanément sur (L) + (Bas sur la croix directionnelle) + (Select) pour ouvrir le menu Rosalina
    + If one of these buttons is broken, download [config.ini]({{ base_path }}/assets/config.ini){:download="config.ini"} and put it in your `luma` folder, replacing the existing one. This will change the Rosalina menu key combination to (X) + (Y)
1. Sélectionnez "Miscellaneous options"
1. Sélectionnez "Dump DSP firmware"
1. Appuyez sur (B) pour continuer
1. Sélectionnez "Nullify user time offset"
1. Appuyez sur (B) pour continuer
1. Appuyez sur (B) pour revenir au menu principal de Rosalina
1. Appuyez sur (B) pour quitter le menu Rosalina

#### Section IV - Setup Script

In this section, you will use a series of scripts to automate homebrew installation, SD card cleanup, and system file backup.

1. Éteignez votre console
1. Press and hold (X), and while holding (X), power on your console. This will launch the Finalizing Setup Helper
    + If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
    + If you encounter an error, consult the [troubleshooting](troubleshooting#finalizing-setup) page
1. If the Helper was successful, your console will boot into GodMode9
    + From this point forward, you can access GodMode9 by holding START while powering on your console
1. Si vous êtes invité à créer une sauvegarde de fichiers essentiels, appuyez sur (A) pour le faire, puis appuyez sur (A) pour continuer une fois terminé
1. Si vous êtes invité à régler la date et l'heure du RTC, appuyez sur (A) pour le faire, puis réglez la date et l'heure, puis appuyez sur (A) pour continuer
1. Appuyez sur (HOME) pour faire apparaître le menu d’actions
1. Sélectionnez "Scripts"
1. Select "finalize"
1. Follow the prompts in the script, answering any questions that you are asked
    + If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting#finalizing-setup) page
1. Once the script says "Setup complete!", press (A) to power off the device
    + If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
1. Insérez votre carte SD dans votre ordinateur
1. Copy the `/gm9/backups/` folder to a safe location on your computer
    + This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    + The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    + The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
1. If you still have them, delete the two `SysNAND` files from the `/gm9/backups/` folder from your SD card
    + The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

Vous avez terminé! Custom firmware is now fully configured on your console.
{: .notice--success}

Trying to figure out what to do with your newly modded device? Visit [our wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!
{: .notice--info}

### Informations et notes

{% capture notice-6 %}
Voici quelques combinaisons de touches que vous devriez connaître :

+ Holding (Select) on boot will launch the Luma3DS configuration menu.
+ Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
+ By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. Cela peut être modifié à partir du menu Rosalina.
+ Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. Pour une liste de ces combinaisons, lisez le [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4).
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

Pour plus d'informations sur l'utilisation des différentes fonctionnalités de GodMode9, consultez les pages [Utilisation de GodMode9](godmode9-usage) et [Dumper des titres et des cartes de jeu](dumping-titles-and-game-cartridges).
{: .notice--info}
