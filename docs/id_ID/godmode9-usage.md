# Penggunaan GodMode9

::: info

Untuk informasi men-_dump_ data kartrid atau kartu SD, lihat [Membuat Dump Permainan dan Kartrid](dumping-titles-and-game-cartridges).

:::

::: info

Untuk bantuan berbahasa Inggris terkait GodMode9 dan tentang membuat naskah, pembaruan, dan info; gabung ke [Discord GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Bacaan Penting

GodMode9 adalah penelusur berkas berakses penuh untuk Nintendo 3DS, mampu mengakses kartu SD, partisi FAT di dalam SysNAND dan EmuNAND, dan segala lainnya. Selain itu bisa juga menyalin, menghapus, ubah nama berkas, dan membuat folder.

Perlu diingat jika ada _payload_ selain `GodMode9.firm` dalam folder `/luma/payloads/` di kartu SD, menahan (Start) saat awal nyala akan ke "chainloader menu" dan hanya bisa Tombol Arah dan (A) untuk memilih "GodMode9" pada instruksi ini.

GodMode9 adalah peranti lunak penuh daya yang mampu memodif apa pun pada konsol. Tapi, banyak dari modifikasi ini terkunci di balik sistem izin sehingga mustahil tidak sengaja berbuat berbahaya, kecuali jika sebelumnya _sengaja_ membuka izin sistem. Jadi tetaplah teliti mengikuti instruksi dan **jangan lupa membuat cadangan**.

## Memperbarui GodMode9

::: info

Beberapa instruksi di bawah ini hanya berlaku pada GodMode9 versi terkini, maka bagian memperbarui ini harus diikuti sebelum ke instruksi lain. Timpa juga berkas yang ada.

:::

### Apa yang Perlu

- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)

### Instruksi

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `GodMode9.firm` dari `.zip` GodMode9 ke folder `/luma/payloads/` di kartu SD
4. Salin folder `gm9` dari `.zip` GodMode9 ke akar kartu SD
5. Sisip kembali kartu SD ke konsol

::: tip

GodMode9 sekarang mutakhir.

:::

## Membuat Cadangan NAND

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Cadangan NAND sudah berhasil dibuat.

:::

## Memulihkan Cadangan NAND

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `<date>_<serialnumber>_sysnand_##.bin` dari komputer Anda ke folder `/gm9/out/` di kartu SD
4. Sisip kembali kartu SD ke konsol
5. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
6. Tekan (Home) untuk membuka menu tindakan
7. Pilih "Scripts..."
8. Pilih "GM9Megascript"
9. Pilih "Restore Options"
10. Pilih "SysNAND Restore (safe)"
11. Pilih cadangan NAND
12. Tekan (A) untuk membuka izin tulis SysNAND (lvl3), lalu tekan kombo yang diberikan
    - Ini **tidak akan** menghapus boot9strap di konsol
    - Proses ini akan lumayan lama
13. Tekan (A) untuk lanjut
14. Tekan (B) untuk kembali ke menu utama
15. Pilih "Exit"
16. Tekan (A) untuk menutup ulang izin tulis jika diminta

::: tip

Cadangan NAND sudah berhasil dipulihkan. Berkas `<date>_<serialnumber>_sysnand_###.bin` boleh dihapus dari kartu SD.

:::

## Menyuntik .CIA apa pun ke Health & Safety

::: info

Perlu diingat, berkas yang disuntikkan tidak bisa lebih dari ukuran Health & Safety (baik itu permainan atau aplikasi)

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[0:] SDCARD` -> `cias`
3. Tekan (A) pada `.cia` pilihan untuk memilih
4. Pilih "CIA image options..."
5. Pilih "Mount image to drive"
6. Tekan (A) pada berkas `.app`
7. Pilih "NCCH image options"
8. Pilih "Inject to H&S"
9. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
10. Tekan (A) untuk lanjut
11. Tekan (A) untuk menutup ulang izin tulis jika diminta

::: tip

Aplikasi pilihan Anda sekarang sudah disuntik ke Health & Safety.

:::

## Memulihkan Health & Safety setelah disuntikkan .CIA

::: info

Ini hanya akan berfungsi jika Health & Safety disuntik dengan GodMode9 (bukan Decrypt9 atau Hourglass9).

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Tekan (Home) untuk membuka menu tindakan
3. Pilih "More..."
4. Pilih "Restore H&S"
5. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
6. Tekan (A) untuk menutup ulang izin tulis jika diminta

::: tip

Health & Safety sudah kembali ke biasa lagi.

:::

## Memformat kartu SD

::: danger

**Perhatian! ini akan menghapus semua isi kartu SD Anda!!**

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Tekan (R) + (B) untuk lepas _mount_ kartu SD dan sisipkan kartu SD yang ingin diformat
    - Jika GodMode9 muncul galat inisialisasi saat menyisip kartu SD yang akan diformat, ini aman diabaikan

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Kartu SD sudah berhasil diformat untuk digunakan di konsol.

:::

## Menghapus NNID tanpa perlu memformat konsol

::: info

Proses ini hanya akan mengeluarkan akun NNID. NNID Anda tidak bisa digunakan di konsol lain, karena NNID tetap tertaut ke konsol tersebut.

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Tekan (Home) untuk membuka menu tindakan
3. Pilih "Scripts..."
4. Pilih "GM9Megascript"
5. Pilih "Scripts from Plailect's Guide"
6. Pilih "Remove NNID"
7. Tekan (A) untuk lanjut
8. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
9. Tekan (A) untuk lanjut
10. Tekan (B) untuk kembali ke menu utama
11. Pilih "Exit"
12. Tekan (A) untuk menutup ulang izin tulis jika diminta
13. Tekan (Start) untuk nyalakan ulang konsol

::: tip

NNID sekarang sudah dikeluarkan.

:::
