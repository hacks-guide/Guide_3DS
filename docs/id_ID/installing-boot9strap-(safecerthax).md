# Memasang boot9strap (safecerthax)

:::details Perincian Teknis (opsional)

:::

## Catatan Kompatibilitas

safecerthax itu kompatibel dengan semua konsol Old 3DS (2DS) pada _firmware_ 1.0.0 hingga 11.14.0 di semua daerah.

::: info

Eksploit ini tidak berfungsi di New 3DS, New 3DS XL, atau New 2DS XL. Pastikan konsol yang akan dimodif itu Old 3DS, Old 3DS XL, atau Old 2DS sebelum lanjut.

:::

## Apa yang Perlu

- Versi terkini dari [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (unduhan langsung)
- Versi terkini dari [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (unduhan langsung)
- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)

## Instruksi

### Bagian I - Memeriksa Tombol Fisik

Di bagian ini akan memeriksa apakah tombol L dan R konsol berfungsi. Ini untuk menentukan apakah konsol bisa dengan metode ini.

1. Nyalakan daya konsol
2. Sesudah masuk HOME Menu, tekan tombol (L) dan (R) secara bersamaan
    - Seharusnya _applet_ kamera terbuka
3. Matikan daya konsol

::: warning

Jika kamera TIDAK terbuka, metode ini tidak bisa diikuti. Jika seperti itu, ikuti saja [Memasang boot9strap (MSET9)](installing-boot9strap-\(mset9\)).

:::

### Bagian II - Persiapan

Di bagian ini akan menaruh berkas untuk mengaktifkan eksploit safecerthax.

1. Sisipkan kartu SD ke komputer Anda
2. Salin semua isi berkas `.zip` Luma3DS ke akar kartu SD
    - Akar (_root_) kartu SD adalah direktori awal kartu SD yang ada folder Nintendo 3DS, berarti **tidak di dalam folder apa pun**
3. Buat folder dengan nama `boot9strap` di akar kartu SD
4. Salin `boot9strap.firm` dan `boot9strap.firm.sha` dari berkas `.zip` boot9strap ke folder `/boot9strap/` di kartu SD
5. Salin `SafeB9SInstaller.bin` dari `.zip` SafeB9SInstaller ke akar kartu SD
6. Sisip kembali kartu SD ke konsol
7. Nyalakan daya konsol

### Bagian III - Proxy safecerthax

::: warning

Bagian ini **WAJIB**! Jika gagal mengatur Proxy, konsol malah akan diperbarui ke _firmware_ terbaru.

:::

Di bagian ini akan mengubah pengaturan sambungan Internet ke jejaring Proxy untuk mengeksploit fitur System Update konsol.

<!--@include: ./_include/addproxy.md -->

1. Matikan daya konsol

### Bagian IV - safecerthax

Di bagian ini akan memasuki Safe Mode (fitur yang tersedia di semua jenis konsol 3DS) di mana safecerthax diaktifkan, ini akan membuka pemasang boot9strap (_custom firmware_).

1. Dalam keadaan konsol belum nyala, tahan tombol berikut: (L) + (R) + (Tombol Atas) + (A), dan selagi ditahan, nyalakan daya konsol
    - Tahan tombolnya sampai konsol menyala ke Safe Mode (semacam menu "pembaruan sistem")
2. Tekan "OK" untuk memperbarui
    - Tidak ada pembaruan. Memang eksploit seperti ini
3. Tekan "I accept" untuk menerima syarat dan ketentuan
4. Pembaruan ini akan gagal dengan kode galat `003-1099`. Memang harus seperti ini
5. Tekan "OK" untuk menutup pesan galat
6. Jika eksploit berhasil akan muncul SafeB9SInstaller
    - Jika konsolnya macet atau mogok, matikan paksa daya konsol, lalu coba lagi bagian ini

### Bagian V - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
    - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-safecerthax)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Bagian VI - Memulihkan Proxy bawaan

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
