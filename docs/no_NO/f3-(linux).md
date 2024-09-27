# F3 (Linux)

## Required Reading

This is an add-on section for checking your SD card for errors using F3.

Avhengig av størrelsen på SD-kortet og hastigheten på datamaskinen din, kan denne prosessen ta opptil flere timer!

Denne siden er kun for Linux-brukere. If you are not on Linux, check out the [H2testw (Windows)](h2testw-\(windows\)) or [F3XSwift (Mac)](f3xswift-\(mac\)) pages.

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Pakk ut f3 `.zip` filen
2. `cd` til f3 mappen
3. Kjør `make` for å kompilere F3
4. Sett inn SD-kortet i datamaskinen din
5. Monter SD-kortet
6. Kjør `./f3write <monteringspunktet til SD-kortet>`
7. Vent til prosessen er ferdig. Se under for et eksempel.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Kjør `./f3read <monteringspunktet til SD-kortet>`
2. Vent til prosessen er ferdig. Se under for et eksempel.

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

Hvis testen viser noe annet resultat kan det hende SD-kortet er korrupt eller skadet og du bør bytte det!

:::

::: tip

Return to [Get Started](get-started)

:::
