# H2testw (Windows)

## Required Reading

Этот дополнительный раздел содержит информацию о проверке SD-карты на ошибки с помощью h2testw.

В зависимости от размера SD-карты и скорости компьютера этот процесс может занять до нескольких часов!

Этот раздел предназначен для пользователей Windows. If you are not on windows, check out the [F3 (Linux)](f3-\(linux\)) or [F3XSwift (Mac)](f3xswift-\(mac\)) pages.

## What You Need

- The latest version of [h2testw](https://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)

## Instructions

1. Скопируйте `h2testw.exe` из `.zip-архива` с h2testw на рабочий стол
2. Вставьте SD-карту в компьютер
3. Запустите `h2testw.exe`
4. Выберите "English"
5. Нажмите "Select target"
6. Выберите букву, соответствующую букве SD-карты
7. Убедитесь, что выбран пункт "all available space"
8. Нажмите "Write + Verify"
9. Дождитесь окончания процесса

::: tip

If the test shows the result `Test finished without errors`, your SD card is good and you can delete all `.h2w` files on your SD card.

:::

::: danger

При любом другом результате SD-карта скорее всего повреждена и её стоит заменить!

:::

::: tip

Return to [Get Started](get-started)

:::
