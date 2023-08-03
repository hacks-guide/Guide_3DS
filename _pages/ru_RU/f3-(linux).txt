---
title: "F3 (Linux)"
---

{% include toc title="Содержание" %}

### Обязательно к прочтению

Этот дополнительный раздел содержит информацию о проверке SD-карты на ошибки с помощью F3.

В зависимости от размера SD-карты и скорости компьютера этот процесс может занять до нескольких часов!

Этот раздел предназначен только для пользователей Linux. If you are not on Linux, check out the [H2testw (Windows)](h2testw-(windows)) or [F3XSwift (Mac)](f3xswift-(mac)) pages.

### Что понадобится

* The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### Инструкция

1. Разархивируйте `.zip-архив` с f3
1. Перейдите в каталог с f3 командой `cd`
1. Выполните `make` для компиляции F3
1. Вставьте SD-карту в компьютер
1. Смонтируйте SD-карту
1. Выполните `./f3write <your sd card mount point>`
1. Дождитесь окончания процесса. Ниже пример результата работы программы:

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. Выполните `./f3read <your sd card mount point>`
1. Дождитесь окончания процесса. Ниже пример результата работы программы:

~~~ bash
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
~~~

___

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)`, your SD card is good and you can delete all `.h2w` files on your SD card.
{: .notice--success}

При любом другом результате SD-карта скорее всего повреждена и её стоит заменить!
{: .notice--danger}

### Вернитесь к [Началу](get-started)
{: .notice--primary}
