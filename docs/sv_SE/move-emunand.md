# Move EmuNAND

## Required Reading

This is an add-on section for moving the contents of a previous EmuNAND to your new SysNAND CFW, then removing the old EmuNAND partition. Note that the terms EmuNAND and RedNAND refer to slightly different implementations of [the same concept](http://3dbrew.org/wiki/NAND_Redirection).

Observera att om du har någon annan payload än `GodMode9.firm` i mappen `/luma/payloads/` på ditt SD-kort, så kommer en "chainloader menu" visas om du håller inne (Start) under uppstart, där du måste använda D-Pad:en och knappen (A) för att välja "GodMode9" för dessa instruktioner.

::: danger

Du MÅSTE redan ha installerat Luma3DS och boot9strap eller arm9loaderhax för att använda detta.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Insert your SD card into your computer
3. Kopiera 'GodMode9.firm' från GodMode9 `.zip` till `/luma/payloads/` mappen på ditt SD-kort
4. Copy the `gm9` folder from the GodMode9 `.zip` to the root of your SD card
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

If you do not have any DSiWare games or saves that you care about, skip this section.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. If you are prompted to fix the RTC date&time, press (A) to do so, then set the date and time, then press (A) to continue
    - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Navigate to `[2:] SYSNAND TWLN` -> `title`
5. Hold (R) and press (A) at the same time on `00030004` to select the folder, then select "Copy to 0:/gm9/out"
    - This process may take some time if you have many DSiWare games
6. Tryck på (B) två gånger för att återgå till huvudmenyn

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
7. Press (B) to decline relocking write permissions if prompted
8. Press (B) to return to the main menu

### Section V - Restore DSiWare Saves

::: info

If you did not backup DSiWare Saves earlier, skip this section.

:::

1. Navigate to `[0:] SDCARD` -> `gm9` -> `out`
2. Press (Y) on the `00030004` folder to copy it
3. Tryck på (B) två gånger för att återgå till huvudmenyn
4. Navigate to `[2:] SYSNAND TWLN` -> `title`
5. Press (Y) to paste the `00030004` folder
6. Select "Copy path(s)"
7. Tryck på (A) för att låsa upp skrivning till SysNAND (lvl1) och mata sedan in knappkombinationen som ges
8. Select "Overwrite file(s)"
    - This process may take some time if you have many DSiWare games
9. Press (B) to decline relocking write permissions if prompted
10. Tryck på (B) två gånger för att återgå till huvudmenyn

### Section VI - Restore GBA VC Saves

::: info

If you did not backup GBA VC Saves earlier, skip this section.

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
    - Navigera till `[0:] SDCARD` -> `gm9`
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
2. Insert your SD card into your computer
3. Copy all your files back to your SD card
    - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. Press (A) to remount your SD card
6. Press (Start) to reboot

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
