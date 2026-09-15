# Memformat kartu SD (Linux)

## Bacaan Penting

Ini adalah laman lebihan untuk memformat kartu SD agar terbaca di 3DS.

Jika 3DS sudah bisa membaca kartu SD, panduan ini tidak perlu.

::: warning

Laman ini khusus pengguna Linux. If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-(windows)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

::: info

Several Linux distributions may provide more user-friendly methods for formatting SD cards than this guide provides, some of which can be [found here](https://wiki.hacks.guide/wiki/Formatting_an_SD_card/Linux). In particular, if you are on SteamOS (e.g. Steam Deck, Steam Machine), check out the [Formatting SD (KDE Partition Manager)](formatting-sd-(kde)) page.

:::

## Instruksi

1. Sisipkan kartu SD ke komputer Anda
2. If the SD card has any files and folders on it, copy everything to a folder on your computer
3. Eject your SD card from your computer
4. Buka Terminal Linux
5. Ketik `watch "lsblk"`
6. Sisipkan kartu SD ke komputer Anda
7. Amati keluarannya. Seharusnya mirip contoh ini:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
8. Catat nama perangkat. Pada contoh tadi, namanya `mmcblk0p1`
   - Jika `RO` diatur ke 1, pastikan pengunci kartu SD tidak geser ke bawah
9. Pencet CTRL + C untuk keluar menu
10. Ketik berikut ini sesuai ukuran kartu SD:
    - 2GB ke bawah: `sudo mkfs.fat /dev/(nama perangkat yang tadi) -s 64 -F 16`
      - Ini membuat satu partisi FAT16 dengan ukuran gugus 32 KB di kartu SD
    - 4GB - 128GB: `sudo mkfs.fat /dev/(nama perangkat yang tadi) -s 64 -F 32`
      - Ini membuat satu partisi FAT32 dengan ukuran gugus 32 KB di kartu SD
    - 128GB ke atas: `sudo mkfs.fat /dev/(nama perangkat yang tadi) -s 128 -F 32`
      - Ini membuat satu partisi FAT32 dengan ukuran gugus 64 KB di kartu SD
11. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Sidik Gangguan

- Kartu SD tetap tidak terbaca konsol atau daya tampungnya salah setelah diformat
  - Kartu SD mungkin dipartisi atau ada ruang tak dialokasikan. Ikuti [instruksi ini](https://wiki.hacks.guide/wiki/SD_Clean/Linux) untuk memformat ulang kartu SD.
