# Memformat kartu SD (Mac)

## Bacaan Penting

Ini adalah laman lebihan untuk memformat kartu SD agar terbaca di 3DS.

Jika 3DS sudah bisa membaca kartu SD, panduan ini tidak perlu.

Laman ini hanya untuk pengguna Mac. Jika tidak menggunakan Mac, lihat laman [Memformat kartu SD (Windows)](formatting-sd-\(windows\)) atau [Memformat kartu SD (Linux)](formatting-sd-\(linux\)).

## Instruksi

### OS X El Capitan (versi 10.11) ke atas

1. Sisipkan kartu SD ke komputer Anda

2. Jika kartu SD ada berkas dan folder, salin dulu semuanya ke folder di komputer

3. Jalankan apli Disk Utility

4. Di kiri-atas menu "View", pilih "Show All Devices"

5. Pilih kartu SD Anda di panel kiri

   ::: danger

   Pastikan pilih perangkat yang benar, **jangan memformat _drive_ yang salah**!

   :::

6. Pencet "Erase" (Hapus) di atas

7. Ketik apa saja di "Name"

8. Pastikan kolom "Format" diatur ke "MS-DOS (FAT)"

9. Pastikan kolom "Scheme" diatur ke "Master Boot Record"
   - Jika "Scheme" tidak muncul, pencet "Cancel" (Batal) dan pilih yang perangkat dan bukan volume

10. Pencet "Erase" (Hapus)

11. Tunggu selesai memformat

12. Pencet "Close" (Tutup)

13. Jika tadi kartu SD ada berkas dan folder sebelum memformat, **salin balik semuanya dari komputer**

### OS X Yosemite (versi 10.10) ke bawah

1. Sisipkan kartu SD ke komputer Anda

2. Jika kartu SD ada berkas dan folder, salin dulu semuanya ke folder di komputer

3. Jalankan apli Disk Utility

4. Pilih kartu SD Anda di panel kiri

   ::: danger

   Pastikan pilih perangkat yang benar, **jangan memformat _drive_ yang salah**!

   :::

5. Pencet "Partition" di atas
   - Jika "Partition" tidak muncul, pastikan pilih yang perangkat dan bukan _volume_

6. Pastikan "Partition Layout" diatur ke "1 Partition"

7. Ketik apa saja di "Name"

8. Pastikan kolom "Format" diatur ke "MS-DOS (FAT)"

9. Pencet "Options" di bawah partisi tabel

10. Pilih "Master Boot Record"

11. Pencet "OK"

12. Pencet "Apply" (Terapkan)

13. Pencet "Partition"

14. Tunggu selesai memformat

15. Tutup Disk Utility

16. Jika tadi kartu SD ada berkas dan folder sebelum memformat, **salin balik semuanya dari komputer**

## Sidik Gangguan

- Kartu SD tetap tidak terbaca konsol atau daya tampungnya salah setelah diformat
  - Kartu SD mungkin dipartisi atau ada ruang tak dialokasikan. Ikuti [instruksi ini](https://wiki.hacks.guide/wiki/SD_Clean/Mac) untuk memformat ulang kartu SD.
