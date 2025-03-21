# Flashing ntrboot (DSi)

## Required Reading

Прежде чем продолжить, убедитесь что вы прочитали всю информацию на странице [ntrboot](ntrboot)

Этот метод требует временного доступа к Nintendo DSi, совместимой с вашим флешкартриджем. Для запуска `.nds-файла` флешера ntrboot на вашей DSi в этом методе используется флешкартридж. Ваш флешкартридж должен быть способен запускать `.nds-файлы` на вашей DSi. Смотрите таблицу флешкартриджей на странице [ntrboot](ntrboot) для получения дополнительной информации.

::: danger

Обратите внимание, что в некоторых редких случаях процесс прошивки может **брикнуть** поддельный флешкартридж и навсегда сделать его нерабочим. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
    - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Выключите **исходную DSi**
2. Вставьте SD-карту флешкартриджа в компьютер
3. Скопируйте `ds_ntrboot_flasher_dsi.nd` на SD-карту флешкартриджа
4. Вставьте SD-карту флешкартриджа обратно во флешкартридж
5. Вставьте ваш DS / DSi флешкартридж, совместимый с ntrboot, в **исходную DSi**

### Section II - Flashing ntrboot

1. Запустите `ds_ntrboot_flasher_dsi.nds` на **исходной DSi**, используя флешкартридж
2. Нажмите (A), чтобы продолжить
3. Используйте (Вверх) и (Вниз) чтобы выбрать ваш флешкартридж
4. Нажмите (A), чтобы продолжить
5. Нажмите (A), чтобы выбрать "inject ntrboothax"
6. Нажмите (A), чтобы выбрать "RETAIL"
7. Нажмите (A), чтобы продолжить
8. Выберите "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
