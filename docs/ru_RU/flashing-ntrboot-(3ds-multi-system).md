# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. Не требуется чтобы флешкартридж поддерживал версию системного ПО какой-либо из двух 3DS.

::: danger

Обратите внимание, что в некоторых редких случаях процесс прошивки может **брикнуть** поддельный флешкартридж и навсегда сделать его нерабочим. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
  - **The source 3DS**: the 3DS family console that is already running boot9strap
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. Выключите **исходную 3DS**
2. Вставьте SD-карту **исходной 3DS** в компьютер
3. Создайте папку `ntrboot` в корне SD-карты
4. Скопируйте `boot9strap_ntr.firm` и `boot9strap_ntr.firm.sha` из `.zip-архива` boot9strap в папку `/ntrboot/` в корне SD-карты
5. Скопируйте `ntrboot_flasher.firm` в папку `/luma/payloads/` на SD-карте **исходной 3DS**
6. Вставьте SD-карту **исходной 3DS** обратно в **исходную 3DS**
7. Вставьте ваш DS / DSi флешкартридж, совместимый с ntrboot, в **исходную 3DS**

### Section II - Flashing ntrboot

1. Запустите Luma3DS chainloader, держа нажатой кнопку (Start) во время загрузки на **исходной 3DS**
2. Выберите "ntrboot_flasher"
3. Прочтите предупреждение на красном экране
4. Нажмите (A), чтобы продолжить
5. Выберите ваш флешкартридж
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Выберите "Dump Flash"
7. Дождитесь окончания процесса
8. Нажмите (A), чтобы продолжить
9. Нажмите (A) для возврата в главное меню
10. Выберите "Inject Ntrboot"
11. Нажмите (A) чтобы выбрать "retail unit ntrboot"
12. Дождитесь окончания процесса
13. Нажмите (A) для возврата в главное меню
14. Нажмите (B) чтобы выключить **исходную 3DS**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
