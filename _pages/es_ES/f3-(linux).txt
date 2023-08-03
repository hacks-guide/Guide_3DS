---
title: "F3 (Linux)"
---

{% include toc title="Tabla de contenidos" %}

### Lectura requerida

Esta es una sección adicional para revisar tu tarjeta SD en busca de errores usando F3.

Dependiendo del tamaño de tu tarjeta SD y la velocidad de tu computadora, ¡este proceso podría tardar varias horas!

Esta página es solo para usuarios de Linux. If you are not on Linux, check out the [H2testw (Windows)](h2testw-(windows)) or [F3XSwift (Mac)](f3xswift-(mac)) pages.

### Qué necesitas

* The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### Instrucciones

1. Descomprime el archivo `.zip` de f3
1. Haz `cd` al directorio f3
1. Ejecuta `make` para compilar F3
1. Inserta tu tarjeta SD en tu computadora
1. Monta tu tarjeta SD
1. Ejecuta `./f3write <el punto de montaje de tu tarjeta sd>`
1. Espera hasta que se complete el proceso. Revisa un ejemplo de salida a continuación.

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. Ejecuta `./f3read <el punto de montaje de tu tarjeta sd>`
1. Espera hasta que se complete el proceso. Revisa un ejemplo de salida a continuación.

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

Si la comprobación muestra otro tipo de resultado, ¡tu tarjeta SD puede estar corrupta o dañada y tendrás que reemplazarla!
{: .notice--danger}

### Regresa a [Comencemos](get-started)
{: .notice--primary}
