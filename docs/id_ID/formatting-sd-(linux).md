# Memformat kartu SD (Linux)

## Bacaan Penting

Ini adalah laman lebihan untuk memformat kartu SD agar terbaca di 3DS.

Jika 3DS sudah bisa membaca kartu SD, panduan ini tidak perlu.

Laman ini hanya untuk pengguna Linux. Jika tidak menggunakan Linux, lihat laman [Memformat kartu SD (Windows)](formatting-sd-\(windows\)) atau [Memformat kartu SD (Mac)](formatting-sd-\(mac\)).

## Instruksi

1. Pastikan kartu SD **belum** disisip
2. Buka Terminal Linux
3. Ketik `watch "lsblk"`
4. Sisipkan kartu SD ke komputer Anda
5. Amati keluarannya. Seharusnya mirip contoh ini:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. Catat nama perangkat. Pada contoh tadi, namanya `mmcblk0p1`
   - Jika `RO` diatur ke 1, pastikan pengunci kartu SD tidak geser ke bawah
7. Pencet CTRL + C untuk keluar menu
8. Ketik berikut ini sesuai ukuran kartu SD:
   - 2GB ke bawah: `sudo mkfs.fat /dev/(nama perangkat yang tadi) -s 64 -F 16`
     - Ini membuat satu partisi FAT16 dengan ukuran gugus 32 KB di kartu SD
   - 4GB - 128GB: `sudo mkfs.fat /dev/(nama perangkat yang tadi) -s 64 -F 32`
     - Ini membuat satu partisi FAT32 dengan ukuran gugus 32 KB di kartu SD
   - 128GB ke atas: `sudo mkfs.fat /dev/(nama perangkat yang tadi) -s 128 -F 32`
     - Ini membuat satu partisi FAT32 dengan ukuran gugus 64 KB di kartu SD

## Sidik Gangguan

- Kartu SD tetap tidak terbaca konsol atau daya tampungnya salah setelah diformat
  - Kartu SD mungkin dipartisi atau ada ruang tak dialokasikan. Ikuti [instruksi ini](https://wiki.hacks.guide/wiki/SD_Clean/Linux) untuk memformat ulang kartu SD.
