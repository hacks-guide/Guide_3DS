# F3 (Linux)

## Required Reading

This is an add-on section for checking your SD card for errors using F3.

Proses ini boleh mengambil masa selama beberapa jam, bergantung kepada saiz kad SD dan kelajuan komputer anda!

Laman ini hanya untuk pengguna Linux sahaja. If you are not on Linux, check out the [H2testw (Windows)](h2testw-\(windows\)) or [F3XSwift (Mac)](f3xswift-\(mac\)) pages.

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Unzip f3 fail `.zip`
2. `cd` ke dalam f3 directori
3. Run `make` untuk compile F3
4. Pasang kad SD anda ke dalam komputer
5. Mount SD card anda
6. Jalankan `./f3write <your sd card mount point>`
7. Tunggu sehingga proses selesai. Lihat dibawah sebagai contoh output.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Run `./f3read <lokasi sd kad mount point anda>`
2. Tunggu sehingga proses selesai. Lihat dibawah sebagai contoh output.

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

Jika keputusan test yang berlainan, kad SD anda mungkin rosak dan and perlu menukarnya!

:::

::: tip

Return to [Get Started](get-started)

:::
