# F3 (Linux)

## Lectura requerida

Esta es una sección adicional para revisar la tarjeta SD en busca de errores mediante F3.

Dependiendo del tamaño de la tarjeta SD y la velocidad de tu computadora, ¡este proceso podría tardar varias horas!

Esta página es sólo para usuarios de Linux. Si no estás en Linux, revisa las páginas [H2testw (Windows)](h2testw-\(windows\)) o [F3XSwift (Mac)](f3xswift-\(mac\)).

## Lo que necesitas

- La última versión de [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instrucciones

1. Descomprime el archivo `.zip` de f3
2. Navega con `cd` al directorio de f3
3. Ejecuta `make` para compilar F3
4. Inserta la tarjeta SD en tu computadora
5. Monta la tarjeta SD
6. Ejecuta `./f3write <your sd card mount point>`
7. Espera hasta que se complete el proceso. Abajo se muestra un ejemplo de resultado.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Ejecuta `./f3read <your sd card mount point>`
2. Espera hasta que se complete el proceso. Abajo se muestra un ejemplo de resultado.

```bash
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
```

___

::: tip

Si el test muestra el resultado `Data LOST: 0.00 Byte (0 sectors)`, la tarjeta SD está en buenas condiciones y puedes eliminar todos los archivos `.h2w` de la tarjeta SD.

:::

::: danger

Si se muestra otro resultado, ¡tu tarjeta SD puede estar corrupta o dañada y puede que debas reemplazarla!

:::

::: tip

Regresa a [Comencemos](get-started)

:::
