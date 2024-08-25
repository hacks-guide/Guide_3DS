---
title: "Problèmes et Dépannage"
---

Cette page offre des conseils de dépannage pour les problèmes rencontrés couramment. Si les conseils donnés sur cette page ne vous permettent pas de résoudre votre problème, nous vous invitons à rejoindre [notre serveur Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) et à y décrire votre problème et ce que vous avez déjà essayé.

{% capture compat %}
<summary>Table des matières</summary>

Utilisé sur plusieurs pages :
* [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Pages du guide :
* [Installation de boot9strap (Soundhax)](#installing-boot9strap-soundhax)
* [Installing boot9strap (MSET9)](#installing-boot9strap-mset9)
* [Installation de boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
* [Installing boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
* [Finalisation de l'installation](#finalizing-setup)

Problèmes après l'installation :
* [Boot issues](#boot-issues-on-consoles-with-custom-firmware)
* [Software issues](#software-issues-on-consoles-with-custom-firmware)

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--info}

## Problèmes avec SafeB9SInstaller

### Before opening SafeB9SInstaller

{% capture compat %}
<summary><u>Failed to open SafeB9SInstaller.bin</u></summary>

Le fichier `SafeB9SInstaller.bin` est absent ou mal placé. Téléchargez la dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip), extrayez-le et placez `SafeB9SInstaller.bin` à la racine de votre carte SD. N'ajoutez pas l'extension `.bin` si vous ne la voyez pas déjà.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### SigHaxed FIRM was not installed! Check lower screen for more info.

{% capture compat %}
<summary><u>MicroSD Card - init failed</u></summary>

Your SD card is most likely acting weird. Try reformatting your SD card ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). If this doesn't work, try another SD card.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - File not found</u></summary>

Les fichiers `boot9strap.firm` et `boot9strap.firm.sha` sont absents du dossier `boot9strap`, ou le dossier `boot9strap` est mal nommé. Téléchargez la dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), et placez `boot9strap.firm` et `boot9strap.firm.sha` dans le dossier `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - invalid FIRM</u></summary>

Il y a un problème avec vos fichiers `boot9strap.firm` et `boot9strap.firm.sha`. Re-téléchargez la dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), et placez `boot9strap.firm` et `boot9strap.firm.sha` dans le dossier `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Secret Sector - File not found</u></summary>

Le fichier `secret_sector.bin` est absent du `boot9strap`, ou le dossier `boot9strap` est mal nommé. Téléchargez [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) à l'aide d'un client torrent et placez-le dans le dossier "boot9strap".
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Autre chose</u></summary>

Rejoignez [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp) pour obtenir de l'aide et décrivez le message que vous voyez.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installation de boot9strap (Soundhax)

{% capture compat %}
<summary><u>Écran rouge/violet/rose et blanc après avoir exécuté Soundhax</u></summary>

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

If your console is not on those firmwares, it likely indicates that you already have custom firmware. Vous devriez [vérifier la présence d'un CFW](checking-for-cfw).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Le logiciel a été arrêté car une erreur est survenue. La console va redémarrer." (boîte de message blanche)</u></summary>

Il y a un problème avec votre fichier `otherapp.bin` (il est absent, mal placé ou corrompu). Téléchargez la dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) et placez le fichier à la racine de votre carte SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Lecture impossible."</u></summary>

You have the wrong Soundhax file for your console and region, or your console is incompatible with Soundhax. In the latter case, your course of action will determine on what version your 3DS is currently on. Rejoignez [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp) pour obtenir de l'aide.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>
Sauvegardez vos données et reformatez votre carte SD en FAT32 avec l'outil recommandé en fonction de votre système d'exploitation ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard et l'outil de formatage d'HP (HPUSBDisk) sont connus pour causer des problèmes avec les cartes SD des 3DS.

Si cela échoue, essayez d'utiliser une autre carte SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (MSET9)

{% capture mset9-chorus %}
    + **Windows**: Double-click `MSET9-Windows.bat`
    + **macOS**: Double-click `MSET9-macOS.command` and enter your password if prompted
    + **Linux**: open a Terminal window, `cd` to the root of your SD card, then type `python3 mset9.py` and press Enter
{% endcapture %}

{% capture compat %}
<summary><u>Python 3 is not installed</u></summary>

Python is not installed on the computer you are using. Download it from the [Python website](https://www.python.org/downloads/), double-click the installer, and follow the prompts to install Python. Once Python is installed, try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>HOME Menu extdata: Missing!</u></summary>

Please power on your console with your SD inserted, then check the MSET9 status again.

If this does not work, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from [Section I Step 7](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Mii Maker extdata: Missing!</u></summary>

Mii Maker data was not found on the SD card. Please power on your console with your SD inserted, then launch Mii Maker, then check the MSET9 status again.

If this does not work, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from [Section I Step 8](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Title database: Not initialized!</u></summary>

Ensure that you have reset the title database.
    + Please power on your console with your SD inserted 
    + Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
        + This will not wipe any of your data
    + If you get a reset prompt, after resetting, power off your console and start again from [Section I Step 14](installing-boot9strap-(mset9-cli)#section-i---prep-work)

If you do *not* getting a reset prompt, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
1. Type `2` then press enter to check the MSET9 status
    + This will create the dummy databases again
1. Close the MSET9 script window
1. Start again from [Section I Step 12](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 01: Couldn't find Nintendo 3DS folder</u></summary>

You are not running MSET9 from the root of the SD card, or the SD card is missing the Nintendo 3DS folder.

Remember, your SD card should look like this:

![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
{: .notice--info}

If your SD card layout is correct, then your SD card most likely isn't being read by your console and needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from the beginning of [Section I](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 02: Your SD is write protected</u></summary>

Write-protection is enabled on this SD card. If you are using a full-size SD card, ensure that the lock is flipped in the [upright position](/images/sdlock.png). Otherwise, try ejecting and reinserting your SD card.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 04: You don't have 1 ID0, you have (#)!</u></summary>

You have multiple ID0 folders. To determine the correct folder, follow these instructions:

1. Renommez le dossier `Nintendo 3DS` en `BACKUP_Nintendo 3DS`
1. Réinsérez votre carte SD dans votre console
1. Power on your console
1. Wait for the console to generate the SD card data
    + Vos applications auront disparu. Ceci est normal et sera résolu plus tard
1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Naviguez vers le dossier `Nintendo 3DS` de votre carte SD
1. Write down the first few characters of the folder you see
    + This is your true ID0, which we will keep in the real Nintendo 3DS folder
1. Delete the ID0 from the current `Nintendo 3DS` folder
1. Move the true ID0 folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder
1. If it exists, move the `Private` folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder

Once you've done this, continue from [Section I Step 3](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 05: You don't have 1 ID1, you have (#)!</u></summary>

{% include_relative include/id1-check.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 06: You need at least 16MB free</u></summary>

Your SD card does not have enough space to trigger MSET9. Free up some space and try again.

At the end of this guide, you will need at least 1.3GB to make a NAND backup, so it's best to free up at least that much.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 07: One or more files are missing or malformed!</u></summary>

One or more files that MSET9 needs to run is missing or corrupted. Re-download the [MSET9 Release `.zip`](https://github.com/hacks-guide/MSET9/releases/latest) and extract it to the root of your SD card, replacing all existing files, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 18: Windows Locale Settings are broken!</u></summary>

{% include_relative include/winerror234.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Red screen after reinserting SD card (Section II Step 11)</u></summary>

You may be missing `SafeB9S.bin` from the root of your SD card, or the file may be corrupted. Copy it from the MSET9 `.zip`, replacing any existing files then follow these instructions to remove the trigger file:

1. Force power off your console by holding the Power button for 20 seconds
1. Insérez votre carte SD dans votre ordinateur
1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
    + The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    + If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you may [retry Section II](installing-boot9strap-(mset9-cli)#section-ii---mset9)
1. Type `4`, then press Enter
1. Once the window says "Removed trigger file", type `0` and then press Enter
1. Reinsert the SD card into your console
1. Power on your console
1. Return to [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Alternatively, your SD card may be improperly formatted or partitioned. After removing the trigger file, format it:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from from [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>System Settings loading infinitely after reinserting the SD card</u></summary>

You most likely did something different from the MSET9 instructions, selected the wrong model/version, or your SD card needs to be formatted. Ensure you are choosing the correct [model](/images/3dsmodels.png) and firmware version when opening the script.

Follow these instructions to remove the trigger file and to retry Section II:

1. Force power off your console by holding the Power button for 20 seconds
1. Insérez votre carte SD dans votre ordinateur
1. 1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
    + The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    + If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
1. Type `4`, then press Enter
1. Once the window says "Removed trigger file", type `0` and then press Enter
1. Reinsert the SD card into your console
1. Power on your console
1. Return to [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from from [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>An exception occurred after triggering MSET9</u></summary>

Cela indique que vous avez probablement déjà un custom firmware. Vous devriez [vérifier la présence d'un CFW](checking-for-cfw).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (super-skaterhax)

{% capture compat %}
<summary><u>"Une erreur est survenue. Veuillez sauvegarder les données de tout logiciel en cours d'utilisation et redémarrer la console."</u></summary>

La date n'est pas correctement configurée. Pour la configurer correctement, suivez ces étapes :

1. Ouvrez les Paramètres de la console depuis le Menu HOME.
1. Allez dans Autres paramètres.
1. Puis Date et heure.
1. Appuyez sur Date.
1. Appuyez sur les flèches Haut/Bas pour définir le jour, le mois et l'année.
1. Appuyez sur OK pour confirmer.

If the problem persists:

+ Ensure that `arm11code.bin`, `browserhax_hblauncher_ropbin_payload.bin`, and `boot.3dsx` are on the root of the SD card (not inside of any folder)
+ Ensure that you selected the correct payload for your region AND system version
+ Ensure that your region settings look [like this](/images/screenshots/skater_lang.png)
+ Try resetting your browser data:
    1. Lancez le Navigateur Internet, puis accédez aux paramètres du navigateur
    1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initilize Save Data" or "Clear All Save Data")
    1. Retentez l'exploit
+ Try changing the system language to something other than the current language

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"Une erreur est survenue. Maintenez le bouton POWER enfoncé pour éteindre la console..." (écran noir avec texte)</u></summary>

Le fichier `arm11code.bin` est absent ou mal placé. Make sure to copy the files of the [latest version of super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) for your region and version to the root of your SD card (not inside of a folder).

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>An exception occured or "DLL_HEAP_INFORMATION" when pressing GO! GO!</u></summary>

Cela indique que vous avez probablement déjà un custom firmware. Vous devriez [vérifier la présence d'un CFW](checking-for-cfw).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installation de boot9strap (SSLoth-Browser)

{% capture compat %}
<summary><u>Écran rouge/violet/rose et blanc après avoir exécuté Browserhax</u></summary>

Cela indique que vous avez probablement déjà un custom firmware. Vous devriez [vérifier la présence d'un CFW](checking-for-cfw).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Une erreur est survenue. Maintenez le bouton POWER enfoncé pour éteindre la console..." (écran noir avec texte)</u></summary>

Le fichier `arm11code.bin` est absent ou mal placé. Téléchargez la dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), placez `otherapp.bin` à la racine de votre carte SD et renommez-le en `arm11code.bin`. N'ajoutez pas l'extension `.bin` si vous ne la voyez pas déjà.
{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"Le logiciel a été arrêté car une erreur est survenue. La console va redémarrer." (boîte de message blanche)</u></summary>

Il y a peut-être un problème avec votre fichier `arm11code.bin`. Téléchargez la dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), placez `otherapp.bin` à la racine de votre carte SD et renommez-le en `arm11code.bin`. N'ajoutez pas l'extension `.bin` si vous ne la voyez pas déjà.

You can also try resetting your browser save data:

1. Lancez le Navigateur Internet, puis accédez aux paramètres du navigateur
1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
1. Retentez l'exploit

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>L'ouverture du QR code ou de l'URL de browserhax plante</u></summary>

Les exploits basés sur le Navigateur Internet (comme celui-ci) sont souvent instables et plantent fréquemment, mais ils peuvent parfois être corrigés en effectuant les étapes suivantes.

1. Lancez le Navigateur Internet, puis accédez aux paramètres du navigateur
1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
1. Retentez l'exploit
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Demande de mise à jour de la console lors de l'ouverture du Navigateur Internet</u></summary>

Le proxy SSLoth a été mal configuré. Refaites la section SSLoth de la page.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Erreur 032-0420 lors de l'ouverture du Navigateur Internet</u></summary>

Suivez ces étapes dans l'ordre :

1. Launch System Settings on your console
1. Naviguez vers `Paramètres Internet` -> `Paramètres de connexion`
1. Cliquez sur votre emplacement de connexion réseau et allez dans `Modifier` -> `Page suivante (flèche à droite)` -> `Serveur proxy"
1. Réglez "Serveur proxy" sur "Non"
1. Cliquez sur OK, puis sur Sauvegarder
1. Lorsque vous y êtes invité, cliquez sur "Tester" pour effectuer le test de connexion
    + Le test devrait réussir
1. Cliquez sur "OK" pour continuer
1. Appuyez deux fois sur « Retour », puis « Fermer » pour revenir au Menu HOME
1. Ouvrez le Navigateur Internet une fois
1. Si vous êtes invité à mettre à jour votre console, appuyez sur OK
    + Cela ne mettra pas à jour la console
1. Recommencez à partir de la [Section II](installing-boot9strap-(ssloth-browser).html#section-i---ssloth)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Plantage sur "Doing agbhax..."</u></summary>
Il y a peut-être un problème avec votre fichier `arm11code.bin`. Re-téléchargez la dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), placez le fichier à la racine de votre carte SD et renommez-le en `arm11code.bin`. N'ajoutez pas l'extension `.bin` si vous ne la voyez pas déjà.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"PrepareArm9ForTwl returned error c8804631!"</u></summary>

Rejoignez [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp) pour obtenir de l'aide.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>

Sauvegardez vos données et reformatez votre carte SD en FAT32 avec l'outil recommandé en fonction de votre système d'exploitation ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard et l'outil de formatage d'HP (HPUSBDisk) sont connus pour causer des problèmes avec les cartes SD des 3DS.

Si cela échoue, essayez d'utiliser une autre carte SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Finalisation de l'installation

{% capture compat %}
<summary><u>Unable to update console</u></summary>

Les étapes ci-dessous peuvent être tentées dans n'importe quel ordre, mais sont répertoriées de la plus facile à la plus difficile à exécuter.

1. Réglez le paramètre "Obtention automatique d'un DNS" sur "Oui"
1. Rapprochez-vous de votre point d'accès Wi-Fi
1. Effectuez une mise à jour depuis le mode sans échec (Safe Mode) en éteignant la console puis en maintenant les boutons (L) + (R) + (Haut sur la croix directionnelle) + (A) pendant le démarrage de la console et suivez les instructions à l'écran
1. Supprimez votre connexion Wi-Fi, puis connectez-vous à nouveau à votre point d'accès Wi-Fi
1. Redémarrez votre point d'accès Wi-Fi
1. Connectez-vous à un point d'accès Wi-Fi différent, comme un point d'accès mobile
1. Les serveurs de Nintendo sont peut-être en panne ; Réessayez plus tard
1. Si vous recevez toujours un message d'erreur, [suivez CTRTransfer](ctrtransfer), puis réessayez
1. Pour plus d'assistance (en anglais), rejoignez [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #22: finalize.romfs is invalid</u></summary>

The file `finalize.romfs` is corrupt or unreadable. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #23: finalize.romfs in wrong location</u></summary>

The file `finalize.romfs` was placed in the wrong location instead of root of SD. The script will attempt to resolve this, but requires your permission to do so. Press (A) on the next few prompts to continue.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #24: SD is write-protected</u></summary>

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>Error #02: Missing essential.exefs</u></summary>

You said 'No' to the "Make essential files backup?" prompt in GodMode9. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}

<summary><u>Error #04: No space</u></summary>

You need at least 1.3GB of free space to perform the NAND backup, which is a part of the script. Si vous n'avez pas assez d'espace, suivez ces étapes :

1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Copiez le dossier `Nintendo 3DS` depuis la racine de votre carte SD vers votre ordinateur
1. Supprimez le dossier Nintendo 3DS de votre carte SD
1. Réinsérez votre carte SD dans votre console
1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Press the (Home) button
1. Sélectionnez "Scripts"
1. Select "finalize"
1. Press (A) to create a NAND backup
    + This may take around fifteen minutes
1. Press (A) again
    + The console should automatically power off
1. Insérez votre carte SD dans votre ordinateur
1. Copy the files in `/gm9/backups/` on your SD to a safe location on your computer
1. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
1. Copiez le dossier `Nintendo 3DS` de votre ordinateur vers la racine de votre carte SD
1. Supprimez le dossier `Nintendo 3DS` de votre ordinateur

Now that you have your NAND backup in a safe place:

1. Réinsérez votre carte SD dans votre console
1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Press the (Home) button
1. Sélectionnez "Scripts"
1. Select "finalize"
1. Continue the script as normal
    + The NAND backup will be automatically skipped

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #05: No title database</u></summary>

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #06 or "Error: Could not open directory" when attempting a NAND backup</u></summary>

Assurez-vous d'avoir au moins 1,3 Go d'espace disponible sur votre carte SD. Si vous n'avez pas assez d'espace, suivez ces étapes :
1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Copiez le dossier `Nintendo 3DS` depuis la racine de votre carte SD vers votre ordinateur
1. Supprimez le dossier Nintendo 3DS de votre carte SD
1. Réinsérez votre carte SD dans votre console
1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Effectuer une [sauvegarde de la NAND](godmode9-usage#creating-a-nand-backup)
1. Copiez les fichiers du dossier `gm9/out` de votre carte SD vers un endroit sûr sur votre ordinateur
1. Supprimez les fichiers `<date>_<serialnumber>_sysnand_##.bin` et `<date>_<serialnumber>_sysnand_##.bin.sha` de votre carte SD, en gardant essential.exefs dans `/gm9/out/`
1. Copiez le dossier `Nintendo 3DS` de votre ordinateur vers la racine de votre carte SD
1. Supprimez le dossier `Nintendo 3DS` de votre ordinateur

Si vous avez assez d'espace sur votre carte SD, votre carte SD pourrait être corrompue ou défectueuse. Vérifiez si votre carte SD est corrompue ou défectueuse en suivant le guide correspondant au système d'exploitation de votre ordinateur : [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #12: Copy (file).db fail</u></summary>

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #17: Duplicate NAND backup</u></summary>

The script has detected that the Nintendo 3DS folder is missing AND that you have already made a NAND backup before. If you intend to install homebrew applications, you should do the following:

1. Press (B) to cancel making another NAND backup
1. Hold (R) and press (Start) at the same time to power off your console
1. Copy the contents of `/gm9/backups/` to a safe location on your computer
1. Delete `/gm9/backups/` from your SD card
1. If you moved your Nintendo 3DS folder off of your SD card to get to this point, copy it back to your SD card
    + If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Appuyez sur (Home) pour faire apparaître le menu d’actions (action menu)
1. Sélectionnez "Scripts"
1. Select "finalize"
1. Follow the prompts in the script, answering any questions that you are asked 

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #18a/18b: MSET9 detected</u></summary>

You didn't remove MSET9 on the previous page. The script will attempt to remove MSET9 for you; follow the instructions given by the script.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Boot issues on consoles with custom firmware

The steps detailed here generally assume that your console has a modern custom firmware setup (boot9strap + Luma3DS 8.0 or greater). Si votre console exécute une ancienne configuration homebrew (par exemple, quelque chose basé sur arm9loaderhax ou menuhax), vous devez mettre à jour votre configuration avant d'essayer ces instructions.
{: .notice--info}

### LEDs d'alimentation/de notification

{% capture compat %}
<summary><u>My console powers off when I try to turn it on, and/or the notification LED shows a color on boot</u></summary>

Il y a un problème avec votre fichier `boot.firm`. Si vous utilisez [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), votre LED de notification devrait clignoter d'une certaine couleur. Cette couleur est utilisée pour diagnostiquer des problèmes concernant votre fichier `boot.firm` sur la carte SD ou la mémoire interne. On older versions of boot9strap, the blue light will power off almost immediately when trying to turn on the console.

Si la LED de notification clignote :

+ **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
+ **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. Elle a pu trouver le fichier `boot.firm` sur la mémoire interne, mais le fichier est corrompu.
+ **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

Vous pouvez obtenir un nouveau fichier `boot.firm` en téléchargeant la [dernière version de Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extrayez l'archive et placez le fichier `boot.firm` à la racine de votre carte SD. Si votre fichier `boot.firm` est constamment détecté comme corrompu, vous devriez vérifier si votre carte SD est corrompue ([Windows](h2testw-(windows)), [Linux](f3-(linux)), ou [macOS](f3xswift-(mac))). Notez également que la 3DS a tendance à avoir des problèmes avec les fichiers extraits à l'aide de WinRAR.

If you hear a "popping sound", potentially accompanied with the backlight turning on for a split second, there is a hardware issue with your console (such as a disconnected backlight cable). You may be able to get your console to boot by holding it at certain angles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>My console gets stuck on a black screen with blue power light staying on</u></summary>

Les étapes ci-dessous peuvent être tentées dans n'importe quel ordre, mais sont répertoriées de la moins longue à la plus longue.

1. Power off your console, remove the SD card, re-insert it, then power on your console.
1. Power off your console, eject the game cartridge if inserted, power on your console, then wait up to ten minutes. If your console boots within ten minutes, the issue has been fixed and is unlikely to reoccur
1. Renommez le dossier `Nintendo 3DS` sur votre carte SD en `Nintendo 3DS_BACKUP`, puis essayez de démarrer. If your console successfully boots, there is some issue within your `Nintendo 3DS` folder. Essayez d'effacer les données "extdata" du Menu HOME :
    + Naviguez vers `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
    + Supprimez le dossier correspondant à la région de votre 3DS :
        + **Région EUR** : `00000098`
        + **Région JPN** : `00000082`
        + **Région USA** : `0000008f`
        + **Région CHN** : `000000A1`
        + **Région KOR** : `000000A9`
        + **Région TWN** : `000000B1`
1. Essayez de démarrer en mode de récupération et de mettre à jour votre console :
    + Power off your console
    + Maintenez (L) + (R) + (Haut sur la croix directionnelle) + (A)
    + Power on your console
    + If you were successful, the console will boot to an "update your system" screen
1. Suivez le guide [CTRTransfer](ctrtransfer)
1. Pour plus d'assistance, demandez de l'aide sur [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### Message d'erreur au démarrage

{% capture compat %}
<summary><u>"An error has occurred: Failed to apply 1 FIRM patch(es)" ou "An exception has occurred -- Current process: pm"</u></summary>

Votre version de Luma3DS est obsolète. Téléchargez la dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) et placez le fichier `boot.firm` à la racine de votre carte SD, en remplaçant tout fichier existant. Assurez-vous d'extraire le fichier ZIP avec un outil autre que WinRAR, car il est connu pour causer des problèmes avec les fichiers liés à 3DS.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."</u></summary>
Plusieurs raisons peuvent expliquer pourquoi cela pourrait se produire. Dans tous les cas, cette erreur peut généralement être corrigée en suivant le guide [CTRTransfer](ctrtransfer).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Une erreur est survenue. Maintenez le bouton POWER enfoncé pour éteindre la console..."</u></summary>

Les gestionnaires d'exceptions ARM11 sont désactivés ou le custom firmware n'est pas installé. Essayez d'activer le gestionnaire d'exceptions ARM11 :
    + Power off your console
    + Maintenez (Select) appuyé
    + Power on your console, while still holding (Select)
    + Si la case "Disable ARM11 exception handlers" est cochée, décochez-la
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Le Menu HOME ne contient pas les applications installées</u></summary>

Cela peut être causé par diverses raisons, mais probablement parce que votre carte SD n'est pas lue par la console.
You can check if your SD is being read by holding SELECT on boot and checking the yellow text on the bottom screen; if it says "Booted from CTRNAND via B9S", then your console is booting from the internal memory and not from the SD card.
Si c'est le cas, essayez les étapes ci-dessous, qui sont listées du plus simple au plus difficile :
1. Power off your console, remove the SD card, re-insert it, then power on your console
1. Power off your console, remove the SD card, insert it on your computer, download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extract `boot.firm` from the `Luma3DS.zip` and place it on the root of your SD card (replacing any existing file)
1. Power off your console, remove the SD card, insert it on your computer and reformat your SD card according to your computer's operating system: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)) *(this will wipe your SD card data)*
1. Testez votre carte SD en suivant le guide correspondant au système d'exploitation de votre ordinateur : [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)). Si votre carte SD est marquée comme défectueuse, vous devrez remplacer votre carte SD
1. Il est possible que votre port carte SD soit cassé. Rejoignez [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp) pour obtenir une aide approfondie
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Écran bleu "BOOTROM ERROR"</u></summary>

Your console is likely hard-bricked. You will need to buy an ntrboot flashcart to reinstall boot9strap in order to attempt to fix your console. Cela peut également indiquer un problème matériel qui ne peut pas être résolu. Dans tous les cas, rejoignez [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp) pour obtenir de l'aide.
    + Il est également possible que quelqu'un ait défini un écran de démarrage qui ressemble à un brick. Try leaving your console powered on, waiting on the blue screen, for five minutes.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Autres erreurs</u></summary>

Veuillez prendre une photo de l'erreur et rejoindre [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp) pour obtenir de l'aide.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Software issues on consoles with custom firmware

{% capture compat %}
<summary><u>La fonctionnalité DSi / DS est cassée ou a été remplacée par Flipnote Studio</u></summary>

1. Téléchargez la dernière version de [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (le fichier `.3dsx`)
1. Éteignez votre console
1. Créez un dossier nommé `3ds` à la racine de votre carte SD si celui ci n'existe pas
1. Copiez `TWLFix-CFW.3dsx` dans le dossier `/3ds/` de votre carte SD
1. Réinsérez votre carte SD dans votre console
1. Ouvrez le Homebrew Launcher
1. Lancez TWLFix-CFW que vous trouverez dans la liste des homebrews
1. Appuyez sur (A) pour désinstaller les titres TWL corrompus
1. Press (Start) to reboot the console
1. Update your console by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
    + Le processus de mise à jour verra que les titres TWL essentiels ont été désinstallés, et va les re-télécharger et les réinstaller
1. Once the update is complete, tap "OK" to reboot the console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>La fonctionnalité Console Virtuelle GBA et/ou mode sans échec est cassée</u></summary>

Your console is running Luma3DS 6.6 or older, likely via arm9loaderhax. You should follow [A9LH to B9S](a9lh-to-b9s) to update your console to a modern custom firmware environment.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Les jeux en mode mémoire étendue (Pokémon Soleil/Lune, Smash, etc.) ne fonctionnent pas</u></summary>

Cela peut se produire après un CTRTransfer ou un changement de région sur Old 3DS / 2DS. Follow the instructions [here](https://3ds.hacks.guide/region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Message d'erreur lors du démarrage/chargement d'une application</u></summary>

Recherchez votre message d'erreur sur [cette page](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Si vous n'avez pas pu trouver votre message erreur ou si les instructions n'ont pas fonctionné, rejoignez [Nintendo Homebrew sur Discord](https://discord.gg/MWxPgEp) pour obtenir de l'aide.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher</u></summary>

Your console likely still has menuhax67 installed. To uninstall menuhax67, download the latest release of [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (the menuhax `.zip`), then follow the ["Uninstall menuhax67" section](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Autres dépannages

{% capture compat %}
<summary><u>Effacer les "extdata" du Menu HOME</u></summary>

1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Naviguez vers le dossier `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` sur votre carte SD
1. Supprimez le dossier correspondant à la région de votre 3DS :
    + **Région EUR** : `00000098`
    + **Région JPN** : `00000082`
    + **Région USA** : `0000008f`
    + **Région CHN** : `000000A1`
    + **Région KOR** : `000000A9`
    + **Région TWN** : `000000B1`
1. Réinsérez votre carte SD dans votre console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Effacer les données de thème du Menu HOME</u></summary>

1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Naviguez vers le dossier `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` sur votre carte SD
1. Supprimez le dossier correspondant à la région de votre 3DS :
    + **Région EUR** : `000002ce`
    + **Région JPN** : `000002cc`
    + **Région USA** : `000002cd`
1. Réinsérez votre carte SD dans votre console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Manually entering Homebrew Launcher</u></summary>

If you are missing the Homebrew Launcher application from your HOME Menu, you can follow these instructions to manually enter the Homebrew Launcher. (You will need [boot.3dsx and boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) on the root of your SD card.)

{% include_relative include/launch-hbl-dlp.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Désactivation du Contrôle parental</u></summary>

Vous pouvez désactiver la fonction Contrôle parental en allant dans Paramètres de la console -> Contrôle parental et en insérant le PIN, puis appuyez sur "Effacer les paramètres", puis "Effacer" pour le désactiver.
However, if you do not know the PIN and therefore cannot access the console's settings, you will need to disable it. In order to do this, you need to obtain your console's master key (mkey):
1. Allez sur [ce site web](https://mkey.eiphax.tech/)
1. Remplissez les champs avec les informations suivantes :
    + Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
    + System date : Le jour et le mois de l'horloge sur laquelle votre console est réglée
    + Inquiry number : (Code d'assistance) Peut être obtenu en appuyant sur "Code PIN oublié" puis "J'ai oublié" dans l'écran du Contrôle parental
1. Une fois que vous avez obtenu votre code général, appuyez sur OK sur l'écran sur lequel vous avez obtenu votre code d'assistance, puis saisissez le code général
1. Appuyez sur "Effacer les paramètres", puis "Effacer" pour supprimer toutes les données du Contrôle parental
{% endcapture %}
<details>{{ compat | markdownify }}</details>
