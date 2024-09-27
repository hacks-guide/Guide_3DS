# Move EmuNAND

## Required Reading

Этот дополнительный раздел содержит информацию о переносе содержимого EmuNAND в новый SysNAND с кастомной прошивкой, с последующим удалением раздела, содержащего EmuNAND. Помните, что RedNAND и EmuNAND - немного разные реализации [одного и того же](http://3dbrew.org/wiki/NAND_Redirection) (англ.).

Обратите внимание, что если у вас имеются другие файлы помимо `GodMode9.firm` в папке `/luma/payloads/` на SD-карте, удержание кнопки (Start) при загрузке будет запускать "chainloader menu", где вам нужно будет использовать D-Pad и кнопку (A) для выбора "GodMode9" при выполнении этих инструкций.

::: danger

Для продолжения, у вас уже ДОЛЖНА быть установлена Luma3DS и boot9strap.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Вставьте SD-карту в компьютер
3. Скопируйте `GodMode9.firm` из `.zip-архива` GodMode9 в папку `/luma/payloads/` на SD-карте
4. Скопируйте папку `gm9` из `.zip-архива` GodMode9 в корень SD-карты
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

Если у вас нет игр DSiWare или важных для вас сохранений, пропустите эту часть.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. Если вам предложат выставить RTC дату и время, нажмите кнопку (A) чтобы сделать это, настройте дату и время, затем нажмите (A) чтобы продолжить
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Перейдите в `[2:] SYSNAND TWLN` -> `title`
5. Удерживая (R), нажмите (A) чтобы выбрать папку `00030004`, затем выберите "Copy to 0:/gm9/out"
   - This process may take some time if you have many DSiWare games
6. Дважды нажмите (B) для возврата в главное меню

### Section III - Backup GBA VC Saves

::: info

Если у вас нет игр GBA VC или важных для вас сохранений, пропустите эту часть.

:::

::: info

Обратите внимание, что эти действия не требуется выполнять для любых других типов Virtual Console (GBC, NES и т. д.)

:::

::: info

Сохранение будет скопировано в папку `/gm9/out/` на SD-карте с именем `<TitleID>.gbavc.sav`.

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
   - Нажмите (A), чтобы продолжить
   - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Перейдите в `[E:] EMUNAND VIRTUAL`
3. Нажмите (A) чтобы выбрать файл `nand.bin`, затем выберите "NAND image options...", затем "Restore SysNAND (safe)"
4. Нажмите (A), чтобы разрешить запись в SysNAND и введите указанную комбинацию кнопок
   - This will not overwrite your boot9strap installation
5. Введите указанную комбинацию кнопок чтобы разрешить запись в SysNAND (lvl1)
   - This process will take some time
6. Once it is completed, press (A) to continue
7. Нажмите (B) чтобы не восстанавливать запрет на запись, если появится запрос
8. Нажмите (B) для возврата в главное меню

### Section V - Restore DSiWare Saves

::: info

Если вы не создавали бэкап сохранений DSiWare ранее, пропустите эту часть.

:::

1. Перейдите в `[0:] SDCARD` -> `gm9` -> `out`
2. Нажмите (Y), выбрав папку `00030004` чтобы скопировать ее
3. Дважды нажмите (B) для возврата в главное меню
4. Перейдите в `[2:] SYSNAND TWLN` -> `title`
5. Нажмите (Y) чтобы вставить папку `00030004`
6. Выберите "Copy path(s)"
7. Нажмите (A), чтобы разрешить запись в SysNAND (lvl1) и введите указанную комбинацию кнопок
8. Выберите "Overwrite file(s)"
   - This process may take some time if you have many DSiWare games
9. Нажмите (B) чтобы не восстанавливать запрет на запись, если появится запрос
10. Дважды нажмите (B) для возврата в главное меню

### Section VI - Restore GBA VC Saves

::: info

Если вы не создавали бэкап сохранений GBA VC ранее, пропустите эту часть.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Выполните нижеуказанные действия для каждой игры GBA VC, для которой вы хотите восстановить сохранения из резервной копии:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Перейдите в `[0:] SDCARD` -> `gm9`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Нажмите (B) для возврата в главное меню
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Нажмите (A), чтобы продолжить
   - Press (Start) to reboot your console
   - Launch the GBA VC game
   - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Сделайте резервную копию всех файлов на SD-карте, поскольку в следующих шагах карта будет отформатирована.**

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Удерживая (R) нажмите (B) для того, чтобы извлечь SD-карту
2. Вставьте SD-карту в компьютер
3. Скопируйте все ваши файлы обратно на SD-карту
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. Нажмите (A), чтобы смонтировать SD-карту
6. Нажмите (Start) для перезагрузки

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
