# F3 (Linux)

## Lecture Requise

This is an add-on section for checking your SD card for errors using F3.

Depending on the size of your SD card and the speed of your computer, this process can take up to several hours!

This page is for Linux users only. If you are not on Linux, check out the [H2testw (Windows)](h2testw-\(windows\)) or [F3XSwift (Mac)](f3xswift-\(mac\)) pages.

## Ce dont vous avez besoin

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Unzip the f3 `.zip` file
2. `cd` into the f3 directory
3. Run `make` to compile F3
4. Insérez votre carte SD dans votre ordinateur
5. Mount your SD card
6. Run `./f3write <your sd card mount point>`
7. Wait until the process is complete. See below for an example output.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Run `./f3read <your sd card mount point>`
2. Wait until the process is complete. See below for an example output.

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

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)`, your SD card is good and you can delete all `.h2w` files on your SD card.

:::

::: danger

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it!

:::

::: tip

Return to [Get Started](get-started)

:::
