# GodMode9 Usage

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

Para ayuda (en inglés) con GodMode9, así como ayuda con la creación de scripts y obtener actualizaciones e información, únete al [Discord de GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Lectura requerida

GodMode9 is a full access file browser for the Nintendo 3DS console, giving you access to your SD card, the FAT partitions inside your SysNAND and EmuNAND, and basically anything else. Among other functionality, you can copy, delete, rename files, and create folders.

Note that if you have any payload files other than `GodMode9.firm` in the `/luma/payloads/` folder on your SD card, holding (Start) on boot will display a "chainloader menu" where you will have to use the D-Pad and the (A) button to select "GodMode9" for these instructions.

GodMode9 is powerful software that has the capability to modify essentially anything on your console. Though many of these modifications are locked behind a permissions system, and it is impossible to accidentally perform dangerous actions without deliberately unlocking permissions, you should still follow instructions carefully and keep backups just in case.

## Actualizar GodMode9

::: info

Some of the instructions below are only applicable to the latest version of GodMode9, and as such you should follow this section to update your copy before continuing. Overwrite any existing files.

:::

### Lo que necesitas

- - La última versión de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (el archivo GodMode `.zip`)

### Instrucciones

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copia `Godmode9.firm` desde Godmode9 `.zip` a la carpeta `/luma/payloads/` en la tarjeta SD
4. Copia la carpeta `gm9` de GodMode9 `.zip` a la raíz de la tarjeta SD
5. Reinserta la tarjeta SD en la consola

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinserta la tarjeta SD en la consola
5. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
6. Presiona el botón (HOME) para abrir el menú de acciones
7. Select "Scripts..."
8. Select "GM9Megascript"
9. Select "Restore Options"
10. Select "SysNAND Restore (safe)"
11. Select your NAND backup
12. Press (A) to unlock SysNAND (lvl3) writing, then input the key combo given
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Presiona (A) para continuar
14. Presiona (B) para regresar al menú principal
15. Select "Exit"
16. Press (A) to relock write permissions if prompted

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Note that it is not possible to inject files into Health & Safety that are larger than it (including games and other large applications)

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Ve a `[0:] SDCARD` -> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Presiona (A) para desbloquear la escritura de SysNAND (lvl1) y luego introduce la combinación de botones mostrada
10. Presiona (A) para continuar
11. Press (A) to relock write permissions if prompted

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

This will only work if the Health & Safety injection was performed by GodMode9 (not Decrypt9 or Hourglass9).

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Presiona el botón (HOME) para abrir el menú de acciones
3. Select "More..."
4. Select "Restore H&S"
5. Presiona (A) para desbloquear la escritura de SysNAND (lvl1) y luego introduce la combinación de botones mostrada
6. Press (A) to relock write permissions if prompted

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**Note that this will erase the contents of your SD card!**

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
   - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Your SD card has successfully been formatted for use with the console.

:::

## Removing an NNID without formatting your console

::: info

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Presiona el botón (HOME) para abrir el menú de acciones
3. Select "Scripts..."
4. Select "GM9Megascript"
5. Select "Scripts from Plailect's Guide"
6. Select "Remove NNID"
7. Presiona (A) para continuar
8. Presiona (A) para desbloquear la escritura de SysNAND (lvl1) y luego introduce la combinación de botones mostrada
9. Presiona (A) para continuar
10. Presiona (B) para regresar al menú principal
11. Select "Exit"
12. Press (A) to relock write permissions if prompted
13. Presiona (Start) para reiniciar tu consola

::: tip

You have now been logged out of your NNID.

:::
