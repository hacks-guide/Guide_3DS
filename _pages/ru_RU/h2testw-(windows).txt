---
title: "H2testw (Windows)"
---

{% include toc title="Содержание" %}

### Обязательно к прочтению

Этот дополнительный раздел содержит информацию о проверке SD-карты на ошибки с помощью h2testw.

В зависимости от размера SD-карты и скорости компьютера этот процесс может занять до нескольких часов!

Этот раздел предназначен для пользователей Windows. If you are not on windows, check out the [F3 (Linux)](f3-(linux)) or [F3XSwift (Mac)](f3xswift-(mac)) pages.

### Что понадобится

* The latest version of [h2testw](https://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)

### Инструкция

1. Скопируйте `h2testw.exe` из `.zip-архива` с h2testw на рабочий стол
1. Вставьте SD-карту в компьютер
1. Запустите `h2testw.exe`
1. Выберите "English"
1. Нажмите "Select target"
1. Выберите букву, соответствующую букве SD-карты
1. Убедитесь, что выбран пункт "all available space"
1. Нажмите "Write + Verify"
1. Дождитесь окончания процесса

___

If the test shows the result `Test finished without errors`, your SD card is good and you can delete all `.h2w` files on your SD card.
{: .notice--success}

При любом другом результате SD-карта скорее всего повреждена и её стоит заменить!
{: .notice--danger}

### Вернитесь к [Началу](get-started)
{: .notice--primary}
