# F3 (Linux)

## Bacaan Penting

Ini adalah laman lebihan untuk memeriksa galat di kartu SD dengan F3.

Tergantung ukuran kartu SD dan kecepatan komputer, proses ini bisa lama beberapa jam!

Laman ini khusus pengguna Linux. Jika tidak menggunakan Linux, lihat laman [H2testw (Windows)](h2testw-\(windows\)) atau [F3XSwift (Mac)](f3xswift-\(mac\)).

## Apa yang Perlu

- Versi terkini dari [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instruksi

1. Ekstrak berkas `.zip` F3
2. Tulis perintah `cd` ke direktori F3
3. Jalankan `make` untuk mengkompil F3
4. Sisipkan kartu SD ke komputer Anda
5. _Mount_-kan kartu SD
6. Jalankan `./f3write <titik mount kartu sd>`
7. Tunggu sampai proses selesai. Di bawah ini contoh keluarannya.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Jalankan `./f3read <titik mount kartu sd>`
2. Tunggu sampai proses selesai. Di bawah ini contoh keluarannya.

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

Jika hasil ujinya `Data LOST: 0.00 Byte (0 sectors)`, berarti kartu SD masih bagus dan '.h2w' boleh dihapus semua di kartu SD.

:::

::: danger

Jika hasil ujinya lain lagi, berarti kartu SD mungkin rusak atau bermasalah dan harus diganti!

:::

::: tip

Kembali ke [Memulai](get-started)

:::
