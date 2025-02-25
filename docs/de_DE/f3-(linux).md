# F3 (Linux)

## Required Reading

Dies ist ein Add-on-Abschnitt für die Überprüfung deiner SD-Karte auf Fehler mit F3.

Basierend auf der Größe der SD-Karte und der Geschwindigkeit deines Computer kann dieser Prozess mehrere Stunden dauern!

Diese Seite ist nur für Linux-Nutzer gedacht. Falls du kein Linux-Nutzer bist, schaue dir stattdessen [H2testw (Windows)](h2testw-\(windows\)) oder [F3X (macOS)](f3x-\(mac\)) an.

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Entpacke die f3 `.zip`-Datei
2. Wechsel mit `cd` in das f3-Verzeichnis
3. Verwende `make`, um F3 zu kompilieren
4. Stecke deine SD-Karte in deinen Computer
5. Hänge deine SD-Karte ein
6. Starte `./f3write <Dein SD-Karten-Einhängepunkt>`
7. Warte, bis der Prozess abgeschlossen ist. Folgendermaßen könnte das Ergebnis aussehen:

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Starte `./f3read <your sd card mount point>`
2. Warte, bis der Prozess abgeschlossen ist. Folgendermaßen könnte das Ergebnis aussehen:

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

Falls es jedoch ein anderes Ergebnis anzeigen sollte, ist deine SD-Karte möglicherweise beschädigt. Du solltest diese möglicherweise austauschen!

:::

::: tip

Return to [Get Started](get-started)

:::
