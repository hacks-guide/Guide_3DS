# Flashing ntrboot (NDS)

## Required Reading

Прежде чем продолжить, убедитесь что вы прочитали всю информацию на странице [ntrboot](ntrboot)

Этот метод требует временного доступа к Nintendo DS или Nintendo DS Lite, совместимой с вашим флешкартриджем. Для запуска `.nds-файла` флешера ntrboot на вашей NDS в этом методе используется флешкартридж.

::: danger

Обратите внимание, что в некоторых редких случаях процесс прошивки может **брикнуть** поддельный флешкартридж и навсегда сделать его нерабочим. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source NDS / NDSL**: the Nintendo DS or Nintendo DS Lite which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Выключите **исходную NDS / NDSL**
2. Вставьте SD-карту флешкартриджа в компьютер
3. Создайте папку `ntrboot` в корне SD-карты флешкартриджа
4. Скопируйте `boot9strap_ntr.firm` из `.zip-архива` boot9strap в папку `/ntrboot/` в корне SD-карты флешкартриджа
5. Скопируйте `ntrboot_flasher_nds.nds` на SD-карту флешкартриджа
6. Вставьте SD-карту флешкартриджа обратно во флешкартридж
7. Вставьте ваш DS / DSi флешкартридж, совместимый с ntrboot, в **исходную NDS / NDSL**

### Section II - Flashing ntrboot

1. Запустите `ntrboot_flasher_nds.nds` на **исходной NDS / NDSL**, используя флешкартридж
2. Нажмите (A), чтобы продолжить
3. Используйте (Вверх) и (Вниз) чтобы выбрать ваш флешкартридж
4. Нажмите (A), чтобы продолжить
5. Выберите "Dump flash", чтобы сделать бэкап памяти флешкартриджа
6. Введите указанную последовательность кнопок
7. Нажмите (A), чтобы продолжить
8. Используйте (Вверх) и (Вниз) чтобы выбрать ваш флешкартридж
9. Нажмите (A), чтобы продолжить
10. Выберите "Inject FIRM", чтобы установить boot9strap на ваш флешкартридж
11. Введите указанную последовательность кнопок
12. Нажмите (A), чтобы продолжить
13. Выключите **исходную NDS / NDSL**
14. Извлеките флешкартридж из **исходной NDS / NDSL**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
