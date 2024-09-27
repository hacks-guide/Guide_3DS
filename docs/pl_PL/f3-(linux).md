# F3 (Linux)

## Required Reading

To jest sekcja dodatkowa poświęcona sprawdzeniu błędów na twojej karcie SD przy użyciu F3.

W zależności od wielkości karty SD i szybkości komputera, proces ten może potrwać nawet kilka godzin!

Ta strona dotyczy tylko użytkowników systemu Linux. If you are not on Linux, check out the [H2testw (Windows)](h2testw-\(windows\)) or [F3XSwift (Mac)](f3xswift-\(mac\)) pages.

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Rozpakuj plik f3 `.zip`
2. `cd` do katalogu f3
3. Uruchom `make` aby skompilować F3
4. Włóż kartę SD do komputera
5. Zamontuj kartę SD
6. Uruchom `./f3write <punkt montowania karty SD>`
7. Poczekaj na zakończenie procesu. Poniżej przedstawiono przykład prawidłowego wyjścia.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Uruchom `./f3read <punkt montowania karty SD>`
2. Poczekaj na zakończenie procesu. Poniżej przedstawiono przykład prawidłowego wyjścia.

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

Jeśli test pokazuje inne wyniki, karta SD może być uszkodzona i może być konieczna jej wymiana!

:::

::: tip

Return to [Get Started](get-started)

:::
