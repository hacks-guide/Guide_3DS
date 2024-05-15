---
title: "Dumping Titles and Game Cartridges"
---

{% include toc title="Содержание" %}

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Обязательно к прочтению

Aside from creating and restoring NAND backups, GodMode9 has the functionality to dump installed titles to an installable `.cia` file, to dump game cartridge data to a `.3ds` ROM file, and to directly install a game cartridge to the system.

## Обновление GodMode9

These instructions are written for use with GodMode9 v2.0.0 or later. If you have an older version of GodMode9, follow these instructions to update it.
{: .notice--info}

### Что понадобится

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Инструкция

1. Power off your console
1. Вставьте SD-карту в компьютер
1. Скопируйте `GodMode9.firm` из `.zip-архива` GodMode9 в папку `/luma/payloads/` на SD-карте
1. Скопируйте папку `gm9` из `.zip-архива` GodMode9 в корень SD-карты
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
1. Выберите "Copy to 0:/gm9/out"
1. Your non-installable `.3ds` or `.nds` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Installing a Game Cartridge Directly to the System

This will only work for 3DS games; it is not possible to install an NDS game cartridge to the system as a title.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Navigate to `[C:] GAMECART`
1. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Install game image"
1. Нажмите (A), чтобы разрешить запись в SysNAND (lvl1) и введите указанную комбинацию кнопок
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
1. Нажмите кнопку (Home) для вызова меню
1. Select "Title manager"
1. Select one of the following depending on the type of title you wish to dump
    + **User Installed Title**: `[A:] SD CARD`
    + **System Title / DSiWare**: `[1:] NAND / TWL`
1. Select the title you wish to dump
1. Select "Manage Title..."
1. Select "Build CIA (standard)"
1. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Backup GBA VC Saves

Сохранение будет скопировано в папку `/gm9/out/` на SD-карте с именем `<TitleID>.gbavc.sav`.
{: .notice--info}

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.
{: .notice--info}

1. Do the following process for each GBA VC game that you want to back up the save for:
    + Запустите игру GBA VC
    + Выйдите из игры GBA VC
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    + Перейдите в `[S:] SYSNAND VIRTUAL`
    + Нажмите (A) чтобы выбрать файл `agbsave.bin`
    + Выберите "AGBSAVE options..."
    + Выберите "Dump GBA VC save"
    + Нажмите (A), чтобы продолжить
    + Press (Start) to reboot your console

## Restore GBA VC Saves

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.
{: .notice--info}

1. Выполните нижеуказанные действия для каждой игры GBA VC, для которой вы хотите восстановить сохранения из резервной копии:
    + Запустите игру GBA VC
    + Выйдите из игры GBA VC
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    + Navigate to `[0:] SDCARD` -> `gm9` -> `out`
    + Нажмите (Y) чтобы скопировать файл сохранения `<TitleID>.gbavc.sav`, который вы хотите восстановить
    + Нажмите (B) для возврата в главное меню
    + Перейдите в `[S:] SYSNAND VIRTUAL`
    + Нажмите (A) чтобы выбрать файл `agbsave.bin`
    + Выберите "AGBSAVE options..."
    + Выберите "Inject GBA VC save"
    + Нажмите (A), чтобы продолжить
    + Press (Start) to reboot your console
    + Запустите игру GBA VC
    + Выйдите из игры GBA VC

## Encrypting / Decrypting a .CIA file

For organizational purposes, copy each `.cia` file you wish to encrypt / decrypt to the `/cias/` folder on your SD card
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Перейдите в `[0:] SDCARD` -> `cias`
1. Press (A) on the `.cia` file to select it, then select "CIA image options..."
1. Select the option to perform the desired function:
    + **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    + **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    + **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
    + **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
1. Your encrypted / decrypted `.cia` will be outputted to the desired location
