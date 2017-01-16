* * *

title: "F3 (Linux)" permalink: /f3-(linux).html lang: en_US ref: f3-(linux)

* * *

В этом разделе рассказывается о том, как проверить карту памяти на ошибки под с помощью F3. {: .notice}

В зависимости от размера Вашей SD-карты и скорости Вашего компьютера этот процесс может занять до нескольких часов! {: .notice--info}

Этот раздел предназначен для пользователей Linux. Если у Вас не Linux, воспользуйтесь инструкциями для [H2testw (Windows)](h2testw-(windows)) или [F3X (Mac)](f3x-(mac)). {: .notice--info}

#### Что понадобится

* Последняя версия [F3](https://github.com/AltraMayor/f3/archive/v6.0.zip)

#### Инструкция

  1. Разархивируйте `.zip`-архив c F3
  2. Перейдите в каталог с f3 командой `cd` из терминала
  3. Запустите сборку F3 командой `make`
  4. Вставьте SD-карту в компьютер
  5. Примонтируйте карту памяти
  6. Введите команду `./f3write <your sd card mount point>`
  7. Дождитесь окончания проверки. Ниже приведён пример выходных данных программы:
    
        $ ./f3write /media/michel/6135-3363/
        Free space: 29.71 GB
        Creating file 1.h2w ... OK!
        ...
        Creating file 30.h2w ... OK!
        Free space: 0.00 Byte
        Average Writing speed: 4.90 MB/s
        

  8. Введите команду `./f3read <your sd card mount point>`

  9. Дождитесь окончания проверки. Ниже приведён пример выходных данных программы:
    
        $ ./f3read /media/michel/6135-3363/
                          SECTORS      ok/corrupted/changed/overwritten
        Validating file 1.h2w ... 2097152/        0/      0/      0
        ...
        Validating file 30.h2w ... 1491904/        0/      0/      0
        
          Data OK: 29.71 GB (62309312 sectors)
        Data LOST: 0.00 Byte (0 sectors)
                   Corrupted: 0.00 Byte (0 sectors)
            Slightly changed: 0.00 Byte (0 sectors)
                 Overwritten: 0.00 Byte (0 sectors)
        Average Reading speed: 9.42 MB/s
        

Если в результате тестирования Вы видите `Data LOST: 0.00 Byte (0 sectors)`, Ваша карта в порядке, и теперь Вы можете удалить все файлы с расширением `.h2w` с Вашей SD-карты {: .notice--success}

При любых других выходных данных знайте, что Ваша карта может быть повреждена и её следует заменить! {: .notice--danger}

Вернитесь к [началу](get-started) {: .notice--primary}