# Move EmuNAND

## Lectura requerida

This is an add-on section for moving the contents of a previous EmuNAND to your new SysNAND CFW, then removing the old EmuNAND partition. Note that the terms EmuNAND and RedNAND refer to slightly different implementations of [the same concept](http://3dbrew.org/wiki/NAND_Redirection).

Note that if you have any payload files other than `GodMode9.firm` in the `/luma/payloads/` folder on your SD card, holding (Start) on boot will display a "chainloader menu" where you will have to use the D-Pad and the (A) button to select "GodMode9" for these instructions.

::: danger

You MUST have already installed Luma3DS and boot9strap to use this.

:::

## Lo que necesitas

- An existing EmuNAND
- - La última versión de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (el archivo GodMode `.zip`)

## Instrucciones

### Sección I - Preparativos

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copia `Godmode9.firm` desde Godmode9 `.zip` a la carpeta `/luma/payloads/` en la tarjeta SD
4. Copia la carpeta `gm9` de GodMode9 `.zip` a la raíz de la tarjeta SD
5. Reinserta la tarjeta SD en la consola

### Section II - Backup SysNAND DSiWare Saves

::: info

If you do not have any DSiWare games or saves that you care about, skip this section.

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. Si se te pide establecer la fecha y hora RTC, presiona (A) para hacerlo, después establece la fecha y hora, y después presiona (A) para continuar
    - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Navigate to `[2:] SYSNAND TWLN` -> `title`
5. Hold (R) and press (A) at the same time on `00030004` to select the folder, then select "Copy to 0:/gm9/out"
    - This process may take some time if you have many DSiWare games
6. Press (B) twice to return to the main menu

### Section III - Backup GBA VC Saves

::: info

If you do not have any GBA VC games or saves that you care about, skip this section.

:::

::: info

Note that this is not necessary for any other kind of Virtual Console games (GBC, NES, etc)

:::

::: info

El juego será almacenado en la carpeta `/gm9/out/` de la tarjeta SD con el nombre `<TitleID>.gbavc.sav`.

:::

::: info

Para identificar el "ID de Título" de un archivo `<TitleID>.gbavc.sav`, puedes revisar una lista de todos los juegos en la consola y sus IDs correspondientes presionando (HOME) para mostrar el menú de acciones, seleccionando `Title manager` y luego `[A:] SD CARD`.

:::

1. Haz lo siguiente por cada juego de Consola Virtual de GBA del cual quieras respaldar sus datos de guardado:
    - Inicia el juego de Consola Virtual de GBA
    - Sal del juego de Consola Virtual de GBA
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - Ve a `[S:] SYSNAND VIRTUAL`
    - Presiona (A) sobre `agbsave.bin` para seleccionarlo
    - Selecciona "AGBSAVE options..."
    - Selecciona "Dump GBA VC save"
    - Presiona (A) para continuar
    - Presiona (Start) para reiniciar tu consola

### Section IV - Copy EmuNAND to SysNAND

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Navigate to `[E:] EMUNAND VIRTUAL`
3. Press (A) on `nand.bin` to select it, then select "NAND image options...", then select "Restore SysNAND (safe)"
4. Press (A) to unlock SysNAND overwriting, then input the key combo given
    - This will not overwrite your boot9strap installation
5. Input the key combo given to unlock SysNAND (lvl1) writing
    - Este proceso tomará un tiempo
6. Once it is completed, press (A) to continue
7. Press (B) to decline relocking write permissions if prompted
8. Presiona (B) para regresar al menú principal

### Section V - Restore DSiWare Saves

::: info

If you did not backup DSiWare Saves earlier, skip this section.

:::

1. Ve a `[0:] SDCARD` -> `gm9` -> `out`
2. Press (Y) on the `00030004` folder to copy it
3. Press (B) twice to return to the main menu
4. Navigate to `[2:] SYSNAND TWLN` -> `title`
5. Press (Y) to paste the `00030004` folder
6. Select "Copy path(s)"
7. Presiona (A) para desbloquear la escritura de SysNAND (lvl1) y luego introduce la combinación de botones mostrada
8. Select "Overwrite file(s)"
    - This process may take some time if you have many DSiWare games
9. Press (B) to decline relocking write permissions if prompted
10. Press (B) twice to return to the main menu

### Section VI - Restore GBA VC Saves

::: info

If you did not backup GBA VC Saves earlier, skip this section.

:::

::: info

Para identificar el "ID de Título" de un archivo `<TitleID>.gbavc.sav`, puedes revisar una lista de todos los juegos en la consola y sus IDs correspondientes presionando (HOME) para mostrar el menú de acciones, seleccionando `Title manager` y luego `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Haz lo siguiente por cada juego de Consola Virtual de GBA del cual quieras restaurar sus datos de guardado:
    - Inicia el juego de Consola Virtual de GBA
    - Sal del juego de Consola Virtual de GBA
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - Navigate to `[0:] SDCARD` -> `gm9`
    - Presiona (Y) sobre el archivo `<TitleID>.gbavc.sav` que deseas restaurar para copiarlo
    - Presiona (B) para regresar al menú principal
    - Ve a `[S:] SYSNAND VIRTUAL`
    - Presiona (A) sobre `agbsave.bin` para seleccionarlo
    - Selecciona "AGBSAVE options..."
    - Selecciona "Inject GBA VC save"
    - Presiona (A) para continuar
    - Presiona (Start) para reiniciar tu consola
    - Inicia el juego de Consola Virtual de GBA
    - Sal del juego de Consola Virtual de GBA

### Section VII - Backup SysNAND

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Backup every file on your SD card to a folder on your computer; all files will be deleted in the following steps**

### Section VIII - Format SD card

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Hold (R) and press (B) at the same time to eject your SD card
2. Inserta la tarjeta SD en tu computadora
3. Copy all your files back to your SD card
    - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinserta la tarjeta SD en la consola
5. Press (A) to remount your SD card
6. Press (Start) to reboot

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
