* * *

title: "H2testw (Windows)" permalink: /h2testw-(windows).html lang: en_US ref: h2testw-(windows)

* * *

В этом разделе рассказывается о том, как проверить карту памяти на ошибки под ОС Linux с помощью h2testw. {: .notice}

В зависимости от размера Вашей SD-карты и скорости Вашего компьютера этот процесс может занять до нескольких часов! {: .notice--info}

Этот раздел предназначен для пользователей Windows. Если у вас не Windows, воспользуйтесь инструкциями для [F3 (Linux)](f3-(linux)) или [F3X (Mac)](f3x-(mac)). {: .notice--info}

#### Что понадобится

* Последняя версия [h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)

#### Инструкция

  1. Скопируйте `h2testw.exe` из `.zip`-архива с h2testw на рабочий стол
  2. Вставьте SD-карту в компьютер
  3. Запустите `h2tsetw.exe`
  4. Выберите "English"
  5. Нажмите "Select target"
  6. Выберите букву, соответствующую букве SD-карты
  7. Убедитесь, что выбран пункт "all available space"
  8. Нажмите "Write + Verify"
  9. Дождитесь окончания проверки

If the test shows the result `Test finished without errors`, your SD card is good and you can delete all `.h2w` files on the SD card {: .notice--success}

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it! {: .notice--danger}

Return to [Get Started](get-started) {: .notice--primary}