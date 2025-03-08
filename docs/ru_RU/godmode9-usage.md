# GodMode9 Usage

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

GodMode9 это полноценный файловый менеджер для Nintendo 3DS, который дает вам доступ к SD-карте, FAT разделам внутри SysNAND или EmuNAND и просто ко всему остальному. Среди других его функций есть возможность копировать, удалять, переименовывать файлы и создавать папки.

Обратите внимание, что если у вас имеются другие файлы помимо `GodMode9.firm` в папке `/luma/payloads/` на SD-карте, удержание кнопки (Start) при загрузке будет запускать "chainloader menu", где вам нужно будет использовать D-Pad и кнопку (A) для выбора "GodMode9" при выполнении этих инструкций.

GodMode9 это мощный инструмент, который имеет возможность изменить все что угодно на вашей консоли. Хотя многие из этих модификаций заблокированы системой разрешений, и невозможно случайно выполнить опасные действия без разблокировки разрешений, всегда тщательно следуйте инструкциям и делайте резервные копии на всякий случай.

## Updating GodMode9

::: info

Некоторые из инструкций ниже применимы только к последней версии GodMode9, поэтому вы должны выполнить эту часть, чтобы обновить вашу копию, прежде чем продолжить. Перезаписывайте существующие файлы.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. Вставьте SD-карту в компьютер
3. Скопируйте `GodMode9.firm` из `.zip-архива` GodMode9 в папку `/luma/payloads/` на SD-карте
4. Скопируйте папку `gm9` из `.zip-архива` GodMode9 в корень SD-карты
5. Reinsert your SD card into your console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Power off your console
2. Вставьте SD-карту в компьютер
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
6. Нажмите кнопку (Home) для вызова меню
7. Выберите "Scripts..."
8. Выберите "GM9Megascript"
9. Выберите "Restore Options"
10. Выберите "SysNAND Restore (safe)"
11. Выберите ваш бэкап NAND
12. Нажмите (A), чтобы разрешить запись в SysNAND (lvl3) и введите указанную комбинацию кнопок
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Нажмите (A), чтобы продолжить
14. Нажмите (B) для возврата в главное меню
15. Выберите "Exit"
16. Нажмите (A) чтобы восстановить запрет на запись, если появится запрос

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Обратите внимание, что для инъекции в приложение Информация о здоровье и безопасности (Health & Safety) невозможно использовать файлы больше, чем само приложение (включая игры и другие большие приложения)

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Перейдите в `[0:] SDCARD` -> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Нажмите (A), чтобы разрешить запись в SysNAND (lvl1) и введите указанную комбинацию кнопок
10. Нажмите (A), чтобы продолжить
11. Нажмите (A) чтобы восстановить запрет на запись, если появится запрос

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

Эта инструкция сработает, только если процесс инъекции был выполнен при помощи GodMode9 (не Decrypt9 или Hourglass9).

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Нажмите кнопку (Home) для вызова меню
3. Выберите "More..."
4. Выберите "Restore H&S"
5. Нажмите (A), чтобы разрешить запись в SysNAND (lvl1) и введите указанную комбинацию кнопок
6. Нажмите (A) чтобы восстановить запрет на запись, если появится запрос

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**Обратите внимание, что это сотрет всё содержимое вашей SD-карты!**

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
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

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Нажмите кнопку (Home) для вызова меню
3. Выберите "Scripts..."
4. Выберите "GM9Megascript"
5. Выберите "Scripts from Plailect's Guide"
6. Выберите "Remove NNID"
7. Нажмите (A), чтобы продолжить
8. Нажмите (A), чтобы разрешить запись в SysNAND (lvl1) и введите указанную комбинацию кнопок
9. Нажмите (A), чтобы продолжить
10. Нажмите (B) для возврата в главное меню
11. Выберите "Exit"
12. Нажмите (A) чтобы восстановить запрет на запись, если появится запрос
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
