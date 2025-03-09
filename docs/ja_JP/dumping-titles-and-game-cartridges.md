# Dumping Titles and Game Cartridges

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

Aside from creating and restoring NAND backups, GodMode9 has the functionality to dump installed titles to an installable `.cia` file, to dump game cartridge data to a `.3ds` ROM file, and to directly install a game cartridge to the system.

## Updating GodMode9

::: info

These instructions are written for use with GodMode9 v2.0.0 or later. If you have an older version of GodMode9, follow these instructions to update it.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. パソコンにSDカードを入れます
3. `GodMode9.firm` を GodMode9の `.zip` から取り出し、SDカードの `/luma/payloads/` フォルダにコピーします。
4. `gm9`フォルダをGodMode9`.zip`からSDカードのルートにコピーします。
5. Reinsert your SD card into your console

## Dumping a Game Cartridge

::: info

Insert the game cartridge you intend to dump into your console

- 3DS game cartridges will be dumped to a `.3ds` format
- NDS game cartridges will be dumped to a `.nds` format

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Navigate to `[C:] GAMECART`
3. Follow the steps applicable to your game cartridge:
    - **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
    - **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
        - Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
4. "Copy to 0:/gm9/out" を選択します
5. Your non-installable `.3ds` or `.nds` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Installing a Game Cartridge Directly to the System

::: info

This will only work for 3DS games; it is not possible to install an NDS game cartridge to the system as a title.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Navigate to `[C:] GAMECART`
3. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Install game image"
4. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
5. Once the process is complete, your game will show up in the HOME Menu as an installed title.

## Dumping a 3DS Game Cartridge to .CIA

::: info

This should only be used if [Installing a Game Cartridge Directly to the System](#installing-a-game-cartridge-directly-to-the-system) does not work.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Navigate to `[C:] GAMECART`
3. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Build CIA from file"
4. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Dumping an Installed Title

::: info

This allows dumping of both System- and User-installed digital titles, such as ones downloaded from the eShop.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. (Home) ボタンを押してアクションメニューを呼び出します
3. Select "Title manager"
4. Select one of the following depending on the type of title you wish to dump
    - **User Installed Title**: `[A:] SD CARD`
    - **System Title / DSiWare**: `[1:] NAND / TWL`
5. Select the title you wish to dump
6. Select "Manage Title..."
7. Select "Build CIA (standard)"
8. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Backup GBA VC Saves

::: info

セーブデータはSDカードの `/gm9/out/` フォルダに`<TitleID>.gbavc.sav`として出力されます

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Power off your console
    - Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Dump GBA VC save"
    - (A) で続行します
    - Press (Start) to reboot your console

## Restore GBA VC Saves

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. セーブを元に戻すGBA VCゲームごとに以下の処理を行います:
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Power off your console
    - Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    - `[0:] SDCARD` -> `gm9` -> `out`へ移動します
    - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
    - Bキーを押してメインメニューに戻ります
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Inject GBA VC save"
    - (A) で続行します
    - Press (Start) to reboot your console
    - Launch the GBA VC game
    - Exit the GBA VC game

## Encrypting / Decrypting a .CIA file

::: info

For organizational purposes, copy each `.cia` file you wish to encrypt / decrypt to the `/cias/` folder on your SD card

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. `[0:] SDCARD` → `cias` へ移動します
3. Press (A) on the `.cia` file to select it, then select "CIA image options..."
4. Select the option to perform the desired function:
    - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
    - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. Your encrypted / decrypted `.cia` will be outputted to the desired location
