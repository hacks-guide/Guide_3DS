---
title: "Dumping Titles and Game Cartridges"
---

{% include toc title="Cuprins" %}

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Lectură obligatorie

Aside from creating and restoring NAND backups, GodMode9 has the functionality to dump installed titles to an installable `.cia` file, to dump game cartridge data to a `.3ds` ROM file, and to directly install a game cartridge to the system.

## Actualizând GodMode9

These instructions are written for use with GodMode9 v2.0.0 or later. If you have an older version of GodMode9, follow these instructions to update it.
{: .notice--info}

### Ce aveți nevoie

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instrucțiuni

1. Power off your console
1. Introduceți cardul SD în calculator
1. Copiați `GodMode9.firm` de pe fișierul `.zip` GodMode9 către folderul `/luma/payloads/` de pe cardul SD
1. Copiați folderul `gm9` din fișierul `.zip` GodMode9 în rădăcina cardului SD
1. Reinsert your SD card into your console

## Dumping a Game Cartridge

{% capture notice %}
Insert the game cartridge you intend to dump into your console
+ 3DS game cartridges will be dumped to a `.3ds` format
+ NDS game cartridges will be dumped to a `.nds` format
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Navigate to `[C:] GAMECART`
1. Follow the steps applicable to your game cartridge:
    + **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
    + **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
        + Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
1. Selectați "Copy to 0:/gm9/out"
1. Your non-installable `.3ds` or `.nds` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Installing a Game Cartridge Directly to the System

This will only work for 3DS games; it is not possible to install an NDS game cartridge to the system as a title.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Navigate to `[C:] GAMECART`
1. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Install game image"
1. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl1), apoi introduceți combinația de butoane care vi se cere
1. Once the process is complete, your game will show up in the HOME Menu as an installed title.

## Dumping a 3DS Game Cartridge to .CIA

This should only be used if [Installing a Game Cartridge Directly to the System](#installing-a-game-cartridge-directly-to-the-system) does not work.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Navigate to `[C:] GAMECART`
1. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Build CIA from file"
1. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Dumping an Installed Title

This allows dumping of both System- and User-installed digital titles, such as ones downloaded from the eShop.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Apăsați (Home) pentru a arăta meniul de acțiuni
1. Select "Title manager"
1. Select one of the following depending on the type of title you wish to dump
    + **User Installed Title**: `[A:] SD CARD`
    + **System Title / DSiWare**: `[1:] NAND / TWL`
1. Select the title you wish to dump
1. Select "Manage Title..."
1. Select "Build CIA (standard)"
1. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Backup GBA VC Saves

Jocul va fi depozitat în folderul `/gm9/out/` de pe cardul SD cu numele `<TitleID>.gbavc.sav`.
{: .notice--info}

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.
{: .notice--info}

1. Do the following process for each GBA VC game that you want to back up the save for:
    + Lansați jocul VC GBA
    + Ieșiți din jocul VC GBA
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    + Navigați spre `[S:] SYSNAND VIRTUAL`
    + Apăsați (A) pe `agbsave.bin` pentru a-l selecta
    + Selectați "AGBSAVE options..."
    + Selectaţi "Dump GBA VC save"
    + Apăsați (A) pentru a continua
    + Press (Start) to reboot your console

## Restore GBA VC Saves

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.
{: .notice--info}

1. Faceți următoarea procedură pentru fiecare joc VC GBA la care vreți să restaurați datele de salvare:
    + Lansați jocul VC GBA
    + Ieșiți din jocul VC GBA
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    + Navigate to `[0:] SDCARD` -> `gm9` -> `out`
    + Apăsați (Y) pe fişierul `<TitleID>.gbavc.sav` pe care doriţi să-l restauraţi pentru a-l copia
    + Apăsați (B) ca să vă întoarceți în meniul principal
    + Navigați spre `[S:] SYSNAND VIRTUAL`
    + Apăsați (A) pe `agbsave.bin` pentru a-l selecta
    + Selectați "AGBSAVE options..."
    + Selectaţi "Inject GBA VC save"
    + Apăsați (A) pentru a continua
    + Press (Start) to reboot your console
    + Lansați jocul VC GBA
    + Ieșiți din jocul VC GBA

## Encrypting / Decrypting a .CIA file

For organizational purposes, copy each `.cia` file you wish to encrypt / decrypt to the `/cias/` folder on your SD card
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Navigați spre `[0:] SDCARD` -> `cias`
1. Press (A) on the `.cia` file to select it, then select "CIA image options..."
1. Select the option to perform the desired function:
    + **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    + **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    + **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
    + **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
1. Your encrypted / decrypted `.cia` will be outputted to the desired location
