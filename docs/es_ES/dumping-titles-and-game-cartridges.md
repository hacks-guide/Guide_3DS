# Dumping Titles and Game Cartridges

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Lectura requerida

Aside from creating and restoring NAND backups, GodMode9 has the functionality to dump installed titles to an installable `.cia` file, to dump game cartridge data to a `.3ds` ROM file, and to directly install a game cartridge to the system.

## Updating GodMode9

::: info

These instructions are written for use with GodMode9 v2.0.0 or later. If you have an older version of GodMode9, follow these instructions to update it.

:::

### Lo que necesitas

- - La última versión de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (el archivo GodMode `.zip`)

### Instrucciones

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copy `GodMode9.firm` from the GodMode9 `.zip` to the `/luma/payloads/` folder on your SD card
4. Copy the `gm9` folder from the GodMode9 `.zip` to the root of your SD card
5. Reinserta la tarjeta SD en la consola

## Volcar un Cartucho de Juego

::: info

Inserta en la consola el cartucho de juego que deseas volcar

- Los cartuchos de 3DS se volcarán en formato `.3ds`
- Los cartuchos de Nintendo DS se volcarán en formato `.nds`

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Ve a `[C:] GAMECART`
3. Sigue los pasos correspondientes a tu tipo de cartucho:
   - **Cartucho de 3DS:** Presiona (A) sobre `[TitleID].trim.3ds` para seleccionarlo
   - **Cartucho de DS:** Presiona (A) sobre `[TitleID].nds` para seleccionarlo
     - Las copias recortadas ("trimmed" en inglés) no son recomendadas para los juegos de DS ya que pueden causar problemas al usarlas
4. Seleciona "Copy to 0:/gm9/out"
5. Tu archivo `.3ds` o `.nds` _no instalable_ será guardado en la carpeta `/gm9/out/` de la tarjeta SD

## Instalar un Cartucho a la Consola Directamente

::: info

Esto sólo funciona para juegos de 3DS; no es posible instalar un cartucho de DS como software de 3DS.

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Ve a `[C:] GAMECART`
3. Presiona el botón (A) sobre `[TitleID].trim.3ds` para seleccionarlo, luego selecciona `NCSD image options...` y luego `Install game image`
4. Presiona (A) para desbloquear la escritura de SysNAND (lvl1) y luego introduce la combinación de botones mostrada
5. Una vez que el proceso haya sido completado, el juego aparecerá en el Menú HOME como un ícono.

## Volcar un Cartucho de 3DS a .CIA

::: info

Esto sólo debiera seguirse si [Instalar un Cartucho a la Consola Directamente](#installing-a-game-cartridge-directly-to-the-system) no funciona.

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Ve a `[C:] GAMECART`
3. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Build CIA from file"
4. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Dumping an Installed Title

::: info

This allows dumping of both System- and User-installed digital titles, such as ones downloaded from the eShop.

:::

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
2. Press (Home) to bring up the action menu
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

The game will be outputted to the `/gm9/out/` folder on your SD card with the name `<TitleID>.gbavc.sav`.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Apaga la consola
   - Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Press (A) to continue
   - Presiona (Start) para reiniciar tu consola

## Restore GBA VC Saves

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to restore the save for:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Apaga la consola
   - Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
   - Ve a `[0:] SDCARD` -> `gm9` -> `out`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Press (B) to return to the main menu
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Press (A) to continue
   - Presiona (Start) para reiniciar tu consola
   - Launch the GBA VC game
   - Exit the GBA VC game

## Encrypting / Decrypting a .CIA file

::: info

For organizational purposes, copy each `.cia` file you wish to encrypt / decrypt to the `/cias/` folder on your SD card

:::

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
2. Navigate to `[0:] SDCARD` -> `cias`
3. Press (A) on the `.cia` file to select it, then select "CIA image options..."
4. Select the option to perform the desired function:
   - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
   - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. Your encrypted / decrypted `.cia` will be outputted to the desired location
