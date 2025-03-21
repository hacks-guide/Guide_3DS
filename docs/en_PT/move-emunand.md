# Move EmuNAND

## Required Reading

'Tis be an add-on section fer movin' th' contents 'o a previous EmuNAND to ye new SysNAND CFW, then removin' the ol' EmuNAND partition. Note that th' terms EmuNAND 'n RedNAND be referrin' to slightly different implementations 'o [th' same concept](http://3dbrew.org/wiki/NAND_Redirection).

Note that if ye have any payload files other than `GodMode9.firm` in th' `/luma/payloads/` folder on ye SD card, holdin' (Start) on boot gunna display a "chainloader menu" where ye gunna have to use th' D-Pad 'n th' (A) button to select "GodMode9" fer these instructions.

::: danger

Ye MUST have already installed Luma3DS 'n boot9strap to be usin' 'tis.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Insert ye SD card into ye computer
3. Copy `GodMode9.firm` from th' GodMode9 `.zip` to th' `/luma/payloads/` folder on ye SD card
4. Copy th' `gm9` folder from th' GodMode9 `.zip` to th' root 'o ye SD card
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

If you do not have any DSiWare games or saves that you care about, skip this section.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. If ye be prompted to fix th' RTC date&time, press (A) to do so, then set th' date 'n time, then press (A) to continue
    - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Navigate to `[2:] SYSNAND TWLN` -> `title`
5. Hold (R) 'n press (A) at th' same time on `00030004` to select th' folder, then select "Copy to 0:/gm9/out"
    - This process may take some time if you have many DSiWare games
6. Press (B) twice to be returnin' to th' main menu

### Section III - Backup GBA VC Saves

::: info

If you do not have any GBA VC games or saves that you care about, skip this section.

:::

::: info

Note that this is not necessary for any other kind of Virtual Console games (GBC, NES, etc)

:::

::: info

The game will be outputted to the `/gm9/out/` folder on your SD card with the name `<TitleID>.gbavc.sav`.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Dump GBA VC save"
    - Press (A) to continue
    - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Navigate to `[E:] EMUNAND VIRTUAL`
3. Press (A) on `nand.bin` to select it, then select "NAND image options...", then select "Restore SysNAND (safe)"
4. Press (A) to unlock SysNAND overwriting, then input the key combo given
    - This will not overwrite your boot9strap installation
5. Input the key combo given to unlock SysNAND (lvl1) writing
    - This process will take some time
6. Once it is completed, press (A) to continue
7. Press (B) to decline relockin' write permissions if prompted
8. Press (B) to return to the main menu

### Section V - Restore DSiWare Saves

::: info

If you did not backup DSiWare Saves earlier, skip this section.

:::

1. Navigate to `[0:] SDCARD` -> `gm9` -> `out`
2. Press (Y) on the `00030004` folder to copy it
3. Press (B) twice to be returnin' to th' main menu
4. Navigate to `[2:] SYSNAND TWLN` -> `title`
5. Press (Y) to paste the `00030004` folder
6. Select "Copy path(s)"
7. Press (A) to unlock SysNAND (lvl1) writin', then input th' key combo given
8. Select "Overwrite file(s)"
    - This process may take some time if you have many DSiWare games
9. Press (B) to decline relockin' write permissions if prompted
10. Press (B) twice to be returnin' to th' main menu

### Section VI - Restore GBA VC Saves

::: info

If ye did not backup GBA VC Saves earlier, skip 'tis section.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Do the following process for each GBA VC game that you want to restore the save for:
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - Navigate to `[0:] SDCARD` -> `gm9`
    - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
    - Press (B) to return to the main menu
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Inject GBA VC save"
    - Press (A) to continue
    - Press (Start) to reboot your console
    - Launch the GBA VC game
    - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Backup every file on your SD card to a folder on your computer; all files will be deleted in the following steps**

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Hold (R) and press (B) at the same time to eject your SD card
2. Insert ye SD card into ye computer
3. Copy all your files back to your SD card
    - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. Press (A) to remount your SD card
6. Press (Start) to reboot

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
