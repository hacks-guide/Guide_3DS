# Memasang boot9strap (SSLoth-Browser)

:::details Perincian Teknis (opsional)

Untuk mengeksploit aplikasi Browser, harus melangkaui pemeriksaan versi Browser, karena penggunaan peramban akan ditahan jika belum memperbarui sistem ke versi terbaru.

Tersedia server Proxy publik, yang dengan bantuan eksploit SSLoth, bisa melangkaui pemeriksaan ini.

Sesudah pelangkauannya aktif, laman web eksploit akan bisa diakses dan memulai tugasnya.

Untuk perincian teknis perihal eksploit pada laman ini, lihat di [sini](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) dan [sini](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Catatan Kompatibilitas

SSLoth mengizinkan pengguna pada versi 11.13.0 ke bawah melangkaui periksa versi Browser, jadi bisa menggunakan new-browserhax atau old-browserhax (kompatibel di versi 11.4.0 hingga 11.13.0 di semua daerah), lalu akan digunakan bersama universal-otherapp.

## Apa yang Perlu

- Versi terkini dari [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (unduhan langsung)
- Versi terkini dari [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (unduhan langsung)
- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)
- Versi terkini dari [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instruksi

### Bagian I - Persiapan

Di bagian ini akan menaruh berkas untuk mengaktifkan browserhax dan universal-otherapp.

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `otherapp.bin` ke akar kartu SD dan ubah nama menjadi `arm11code.bin`
   - Akar (_root_) kartu SD adalah direktori awal kartu SD yang ada folder Nintendo 3DS, berarti **tidak di dalam folder apa pun**
   - Jika tidak terlihat ekstensi `.bin`, jangan tambahkan di ujung nama berkas
4. Salin semua isi berkas `.zip` Luma3DS ke akar kartu SD
5. Buat folder dengan nama `boot9strap` di akar kartu SD
6. Salin `boot9strap.firm` dan `boot9strap.firm.sha` dari berkas `.zip` boot9strap ke folder `/boot9strap/` di kartu SD
7. Salin `SafeB9SInstaller.bin` dari `.zip` SafeB9SInstaller ke akar kartu SD
8. Sisip kembali kartu SD ke konsol
9. Nyalakan daya konsol

### Bagian II - SSLoth

Di bagian ini akan mengubah pengaturan sambungan Internet ke jejaring Proxy untuk melangkaui periksa versi Browser, sehingga Browser bisa berfungsi tanpa pembaruan sistem. Ini agar bisa mengakses laman web eksploit Browser di bagian berikutnya.

<!--@include: ./_include/addproxy.md -->

1. Tekan "Back" dua kali, lalu "Close" untuk kembali ke HOME Menu

### Bagian III - Menjalankan SafeB9SInstaller

Di bagian ini akan membuka laman web eksploit Browser dengan universal-otherapp untuk menjalankan pemasang boot9strap (_custom firmware_).

1. Saat di HOME Menu, tekan tombol L dan R bersamaan untuk membuka kamera
   - Jika tidak bisa membuka kamera, buka Internet Browser dan coba ketik sendiri URL `https://zoogie.github.io/web/nbhax/`
2. Sentuh tombol kode QR dan pindai [kode QR ini](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L)
   - Jika mogok atau muncul kode galat, [ikuti panduan sidik gangguan ini](troubleshooting-ssloth-browser)
   - Jika muncul peringatan sertifikat keamanan, tekan (A) untuk boleh menyambung
3. Sentuh tombol "PROCEED TO HAXX"
4. Jika eksploit berhasil akan muncul SafeB9SInstaller
   - Jika muncul galat, [ikuti panduan sidik gangguan ini](troubleshooting-ssloth-browser)

### Bagian IV - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-ssloth-browser)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Memulihkan Proxy bawaan

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
