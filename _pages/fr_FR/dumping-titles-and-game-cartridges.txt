---
title: "Dumper des titres et des cartes de jeu"
---

{% include toc title="Table des matières" %}

Pour de l'aide (en Anglais) sur GodMode9 ainsi que sur le scripting, et pour être tenu à jour et informé, rejoignez le serveur [Discord GodMode9](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Lecture requise

Outre la création et la restauration de sauvegardes de la NAND, GodMode9 dispose des fonctionnalités suivantes : dumper les titres installés vers un fichier `.cia` installable , dumper les données des cartes de jeu dans un fichier ROM `.3ds`, et d'installer directement une carte de jeu sur la console.

## Mise à jour de GodMode9

Ces instructions sont écrites pour être utilisées avec GodMode9 v2.0.0 ou supérieur. Si vous avez une ancienne version de GodMode9, suivez ces instructions pour le mettre à jour.
{: .notice--info}

## Ce dont vous avez besoin

* La dernière version de [GodMode9]
(https://github.com/d0k3/GodMode9/releases/latest) (le fichier GodMode9 `.zip`)

### Instructions

1. Éteignez votre console
1. Insérez votre carte SD dans votre ordinateur
1. Copiez le fichier `GodMode9.firm` de l'archive `.zip` de GodMode9 dans le dossier `/luma/payloads/` sur votre carte SD
1. Copiez le dossier `gm9` de l'archive `.zip` de GodMode9 vers la racine de votre carte SD
1. Réinsérez votre carte SD dans votre console

## Dump d'une carte de jeu

{% capture notice %}
Insert the game cartridge you intend to dump into your console
+ Les cartes de jeu 3DS seront dumpées au format `.3ds`
+ Les cartes de jeu NDS seront dumpées au format `.nds`
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Naviguez vers `[C:] GAMECART`
1. Suivez les étapes applicables à votre carte de jeu:
    + **Carte de jeu 3DS:** Appuyez sur (A) sur `[TitleID].trim.3ds` pour le sélectionner
    + **Carte de jeu NDS:** Appuyez sur (A) sur `[TitleID].nds` pour le sélectionner
        + Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
1. Sélectionnez "Copy to 0:/gm9/out"
1. Votre fichier `.3ds` ou `.nds` non installable sera envoyé vers le dossier `/gm9/out/` de votre carte SD

## Installation d'une carte de jeu directement sur la console

Cela ne fonctionnera que pour les jeux 3DS, il n'est pas possible d'installer une carte de jeu NDS sur la console en tant que titre.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Naviguez vers `[C:] GAMECART`
1. Appuyez sur (A) sur `[TitleID].trim.3ds` pour le sélectionner, puis sélectionnez "NCSD image options...", puis sélectionnez "Install game image"
1. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND, puis entrez la combinaison de touches demandée
1. Une fois le processus terminé, votre jeu apparaîtra dans le menu HOME sous la forme d'un titre installé.

## Dump d'une carte de jeu 3DS vers un fichier .CIA

Ceci ne devrait être utilisé que si [l'installation d'une carte de jeu directement sur la console](#installing-a-game-cartridge-directly-to-the-system) ne fonctionne pas.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Naviguez vers `[C:] GAMECART`
1. Appuyez sur (A) sur `[TitleID].trim.3ds` pour le sélectionner, puis sélectionnez "NCSD image options...", puis sélectionnez "Build CIA from file"
1. Votre fichier au format `.cia` installable sera envoyé vers le dossier `/gm9/out/` de votre carte SD

## Dump d'un titre installé

Cela permet le dumping d'applications système et de titres numériques installés par l'utilisateur, tels que ceux téléchargés à partir de l'eShop.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Appuyez sur (Home) pour faire apparaître le menu d’actions (action menu)
1. Sélectionnez "Title Manager"
1. Sélectionnez l'un des éléments suivants en fonction du type de titre que vous souhaitez dumper
    + **Titre installé par l'utilisateur**: `[A:] SD CARD`
    + **Titre Système / DSiWare**: `[1:] NAND / TWL`
1. Sélectionnez le titre que vous souhaitez dumper
1. Sélectionnez "Manage Title..."
1. Sélectionnez "Build CIA (standard)"
1. Votre fichier au format `.cia` installable sera envoyé vers le dossier `/gm9/out/` de votre carte SD

## Extraction de sauvegardes VC GBA

Le jeu sera exporté dans le dossier `/gm9/out/` de votre carte SD sous le nom `<TitleID>.gbavc.sav`.
{: .notice--info}

Pour identifier le Title ID d'un fichier `<TitleID>.gbavc.sav`, vous pouvez obtenir une liste de tous les jeux installés sur la console et leurs Title IDs en appuyant sur (HOME) pour faire apparaître le menu d'actions, en sélectionnant `Title manager` puis `[A:] SD CARD`.
{: .notice--info}

1. Effectuez le processus suivant pour chaque jeu GBA VC pour lequel vous souhaitez copier le fichier de sauvegarde :
    + Lancez le jeu VC GBA
    + Quittez le jeu GBA VC
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
    + Naviguez vers `[S:] SYSNAND VIRTUAL`
    + Appuyez sur (A) sur `agbsave.bin` pour le sélectionner
    + Sélectionnez "AGBSAVE options..."
    + Sélectionnez « Dump GBA VC save »
    + Appuyez sur (A) pour continuer
    + Press (Start) to reboot your console

## Restauration de sauvegardes VC GBA

Pour identifier le Title ID d'un fichier `<TitleID>.gbavc.sav`, vous pouvez obtenir une liste de tous les jeux installés sur la console et leurs Title IDs en appuyant sur (HOME) pour faire apparaître le menu d'actions, en sélectionnant `Title manager` puis `[A:] SD CARD`.
{: .notice--info}

1. Effectuez la procédure suivante pour chaque jeu GBA VC pour chaque jeu GBA VC dont vous souhaitez conserver la sauvegarde:
    + Lancez le jeu VC GBA
    + Quittez le jeu GBA VC
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
    + Navigate to `[0:] SDCARD` -> `gm9` -> `out`
    Appuyez sur (Y) sur le fichier `<TitleID>.gbavc.sav` que vous souhaitez restaurer pour le copier
    + Appuyez sur (B) pour revenir au menu principal
    + Naviguez vers `[S:] SYSNAND VIRTUAL`
    + Appuyez sur (A) sur `agbsave.bin` pour le sélectionner
    + Sélectionnez "AGBSAVE options..."
    + Sélectionnez « Inject GBA VC save »
    + Appuyez sur (A) pour continuer
    + Press (Start) to reboot your console
    + Lancez le jeu VC GBA
    + Quittez le jeu GBA VC

## Chiffrer/Déchiffrer un fichier .CIA

À des fins d'organisation, copiez chaque fichier `.cia` que vous souhaitez chiffrer / déchiffrer dans le dossier `/cias/` sur votre carte SD
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Naviguez vers `[0:] SDCARD` -> `cias`
1. Appuyez sur (A) sur le fichier `.cia` pour le sélectionner, puis sélectionnez "CIA image options..."
1. Sélectionnez l'option pour effectuer la fonction désirée :
    + **Encrypt to 0:/gm9/out:** Crée une copie chiffrée du fichier `.cia` sélectionné dans le dossier `/gm9/out/` sur votre carte SD
    + **Decrypt to 0:/gm9/out:** Crée une copie déchiffrée du fichier `.cia` sélectionné dans le dossier `/gm9/out/` sur votre carte SD
    + **Encrypt inplace:** Remplace le fichier `.cia` sélectionné par une version chiffrée
    + **Decrypt inplace:** Remplace le fichier `.cia` sélectionné par une version déchiffrée
1. Votre `.cia` chiffré / déchiffré sera envoyé vers l'emplacement souhaité
