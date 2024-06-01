---
title: "Dumping Titles and Game Cartridges"
---

{% include toc title="Inhalt" %}

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Lesen erforderlich

Aside from creating and restoring NAND backups, GodMode9 has the functionality to dump installed titles to an installable `.cia` file, to dump game cartridge data to a `.3ds` ROM file, and to directly install a game cartridge to the system.

## GodMode9 aktualisieren

These instructions are written for use with GodMode9 v2.0.0 or later. If you have an older version of GodMode9, follow these instructions to update it.
{: .notice--info}

### Was du brauchst

* Die neuste Version von GodMode9 (siehe https://github.com/d0k3/GodMode9/releases/latest) (die GodMode9.`zip` Datei)

### Anleitung

1. Power off your console
1. Stecke deine SD-Karte in deinen Computer
1. Kopiere `GodMode9.firm`von der `GodMode9.zip`-Datei nach /luma/payloads/ auf deiner SD-Karte
1. Kopiere den Ordner `gm9` aus der GodMode9 `.zip` in das Stammverzeichnis deiner SD-Karte
1. Stecke deine SD-Karte wieder in deine Konsole

## Dumping a Game Cartridge

{% capture notice %}
Insert the game cartridge you intend to dump into your console
+ 3DS game cartridges will be dumped to a `.3ds` format
+ NDS game cartridges will be dumped to a `.nds` format
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Navigate to `[C:] GAMECART`
1. Follow the steps applicable to your game cartridge:
    + **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
    + **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
        + Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
1. Wähle "Copy to 0:/gm9/out" aus
1. Deine nicht-installierbare `.3ds` oder `.nds` Datei wird sich im `/gm9/out/` Ordner auf deiner SD Karte befinden

## Installing a Game Cartridge Directly to the System

This will only work for 3DS games; it is not possible to install an NDS game cartridge to the system as a title.
{: .notice--info}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Navigate to `[C:] GAMECART`
1. Drücke (A) auf `[TitleID].trim.3ds´ um es auszuwählen, dann "NCSD image options..." und zuletzt "Install game image"
1. Drücke (A), um die SysNAND (Stufe 1) Bearbeitung zu aktivieren. Dann gebe die angegebene Tastenkombination ein
1. Once the process is complete, your game will show up in the HOME Menu as an installed title.

## Dumping a 3DS Game Cartridge to .CIA

This should only be used if [Installing a Game Cartridge Directly to the System](#installing-a-game-cartridge-directly-to-the-system) does not work.
{: .notice--info}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Navigate to `[C:] GAMECART`
1. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Build CIA from file"
1. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Dumping an Installed Title

This allows dumping of both System- and User-installed digital titles, such as ones downloaded from the eShop.
{: .notice--info}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Drücke (Home), um das Aktionsmenü aufzurufen
1. Select "Title manager"
1. Select one of the following depending on the type of title you wish to dump
    + **User Installed Title**: `[A:] SD CARD`
    + **System Title / DSiWare**: `[1:] NAND / TWL`
1. Select the title you wish to dump
1. Select "Manage Title..."
1. Select "Build CIA (standard)"
1. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Backup GBA VC Saves

Das Spiel wird auf der SD-Karte unter `/gm9/out/` mit dem Dateinamen `<TitleID>.gbavc.sav` gespeichert.
{: .notice--info}

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.
{: .notice--info}

1. Do the following process for each GBA VC game that you want to back up the save for:
    + Starte das GBA VC spiel
    Verlasse das GBA VC Spiel wieder
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
    + Navigiere zu `[S:] SYSNAND VIRTUAL`
    + Drücke (A), um`agbsave.bin` auszuwählen
    + Wähle "AGBSAVE options..."
    + Wähle "Dump GBA VC save"
    + Drücke (A), um fortzufahren
    + Press (Start) to reboot your console

## Restore GBA VC Saves

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.
{: .notice--info}

1. Führe den folgenden Prozess für jedes GBA VC Spiel durch, bei dem du einen Spielstand wiederherstellen möchtest:
    + Starte das GBA VC spiel
    Verlasse das GBA VC Spiel wieder
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten
    + Navigate to `[0:] SDCARD` -> `gm9` -> `out`
    + Drücke zur Wiederherstellung die Taste (Y) auf der gewünschten Datei (`<TitleID>.gbavc.sav`)
    + Drücke (B), um zum Hauptmenü zurückzukehren
    + Navigiere zu `[S:] SYSNAND VIRTUAL`
    + Drücke (A), um`agbsave.bin` auszuwählen
    + Wähle "AGBSAVE options..."
    + Wähle "Inject GBA VC save"
    + Drücke (A), um fortzufahren
    + Press (Start) to reboot your console
    + Starte das GBA VC spiel
    Verlasse das GBA VC Spiel wieder

## Encrypting / Decrypting a .CIA file

For organizational purposes, copy each `.cia` file you wish to encrypt / decrypt to the `/cias/` folder on your SD card
{: .notice--info}

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
1. Navigiere zu `[0:] SDCARD` ->` cias`
1. Press (A) on the `.cia` file to select it, then select "CIA image options..."
1. Select the option to perform the desired function:
    + **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    + **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    + **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
    + **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
1. Your encrypted / decrypted `.cia` will be outputted to the desired location
