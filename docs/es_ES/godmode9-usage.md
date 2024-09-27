# GodMode9 Usage

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

GodMode9 is a full access file browser for the Nintendo 3DS console, giving you access to your SD card, the FAT partitions inside your SysNAND and EmuNAND, and basically anything else. Among other functionality, you can copy, delete, rename files, and create folders.

Note that if you have any payload files other than `GodMode9.firm` in the `/luma/payloads/` folder on your SD card, holding (Start) on boot will display a "chainloader menu" where you will have to use the D-Pad and the (A) button to select "GodMode9" for these instructions.

GodMode9 is powerful software that has the capability to modify essentially anything on your console. Though many of these modifications are locked behind a permissions system, and it is impossible to accidentally perform dangerous actions without deliberately unlocking permissions, you should still follow instructions carefully and keep backups just in case.

## Updating GodMode9

::: info

Some of the instructions below are only applicable to the latest version of GodMode9, and as such you should follow this section to update your copy before continuing. Overwrite any existing files.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. Insert your SD card into your computer
3. Copy `GodMode9.firm` from the GodMode9 `.zip` to the `/luma/payloads/` folder on your SD card
4. Copy the `gm9` folder from the GodMode9 `.zip` to the root of your SD card
5. Reinsert your SD card into your console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Power off your console
2. Insert your SD card into your computer
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
6. Press (Home) to bring up the action menu
7. Select "Scripts..."
8. Select "GM9Megascript"
9. Select "Restore Options"
10. Select "SysNAND Restore (safe)"
11. Select your NAND backup
12. Press (A) to unlock SysNAND (lvl3) writing, then input the key combo given
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Press (A) to continue
14. Press (B) to return to the main menu
15. Select "Exit"
16. Press (A) to relock write permissions if prompted

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Note that it is not possible to inject files into Health & Safety that are larger than it (including games and other large applications)

:::

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
2. Navigate to `[0:] SDCARD` -> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
10. Press (A) to continue
11. Press (A) to relock write permissions if prompted

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

This will only work if the Health & Safety injection was performed by GodMode9 (not Decrypt9 or Hourglass9).

:::

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
2. Press (Home) to bring up the action menu
3. Select "More..."
4. Select "Restore H&S"
5. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
6. Press (A) to relock write permissions if prompted

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**Note that this will erase the contents of your SD card!**

:::

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
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

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
2. Press (Home) to bring up the action menu
3. Select "Scripts..."
4. Select "GM9Megascript"
5. Select "Scripts from Plailect's Guide"
6. Select "Remove NNID"
7. Press (A) to continue
8. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
9. Press (A) to continue
10. Press (B) to return to the main menu
11. Select "Exit"
12. Press (A) to relock write permissions if prompted
13. Presiona (Start) para reiniciar tu consola

::: tip

You have now been logged out of your NNID.

:::
