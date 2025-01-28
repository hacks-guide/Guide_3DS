---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Memasang boot9strap (super-skaterhax)

:::details Perincian Teknis (opsional)

Untuk perincian teknis perihal eksploit pada laman ini, lihat di [sini](https://github.com/zoogie/super-skaterhax).

:::

### Catatan Kompatibilitas

Super-skaterhax (jika untuk membuka Homebrew Launcher) bisa untuk 3DS "New" dari _firmware_ 11.15.0 ke atas di semua daerah kecuali CHN/TWN.

::: warning

Instruksi di sini hanya berlaku untuk New 3DS, New 3DS XL, dan New 2DS XL. Mohon pastikan konsol yang akan dimodif itu New 3DS, New 3DS XL, atau New 2DS XL sebelum lanjut.

:::

### Apa yang Perlu

- Berkas zip [Super-skaterhax](https://skater.nintendohomebrew.com) yang sesuai versi dan daerah konsol

#### Bagian I - Persiapan

Di bagian ini akan menaruh berkas untuk mengaktifkan super-skaterhax dan Homebrew Launcher.

1. Matikan daya konsol

2. Sisipkan kartu SD ke komputer Anda

3. Salin semuanya dari folder `.zip` Super-skaterhax ke akar kartu SD, timpa berkas yang ada

   ::: info

   ![](/images/screenshots/skaterhax/skater-root-layout.png)

   :::

4. Sisip kembali kartu SD ke konsol

5. Nyalakan daya konsol

6. Buka System Settings

7. Pilih "Other Settings"

8. Navigasi ke "Profile" -> "Region Settings"
   - Pengaturan ini akan kita ubah sementara untuk meningkatkan keberhasilan eksploit
   - Pengaturan daerah bisa dikembalikan ke biasa lagi setelah selesai dari laman ini
   - Jika muncul [peringatan](/images/screenshots/skaterhax/country-change-notice.png) akan kehilangan akses fitur Nintendo Network ID, ini aman menekan OK untuk lanjut

9. Pilih opsi berikut disesuaikan dengan daerah konsol ([gambar](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Keluar dari System Settings

#### Bagian II - super-skaterhax

Di bagian ini akan membuka laman web eksploit Browser untuk menjalankan Homebrew Launcher.

::: info

Jika sekiranya belum, pastikan konsol sudah tersambung ke internet.

:::

1. Saat di HOME Menu, tekan tombol L dan R bersamaan untuk membuka kamera
   - Jika tidak bisa membuka kamera, buka Internet Browser dan coba ketik sendiri URL `https://zoogie.github.io/web/super/` untuk EUR/USA/JPN; atau `https://zoogie.github.io/web/korea` untuk KOR
2. Sentuh tombol kode QR dan pindai salah satu kode QR berikut sesuai daerah konsol di [sini](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
   - Jika ada peringatan sertifikat keamanan, pastikan tanggal sistem itu hari ini
3. Tekan (Select) untuk membuka tab markah
   - Jika tombol (Select) tidak tanggap, sentuh ikon bintang di pojok kiri-bawah layar
4. Sentuh "Bookmark this page"
5. Tekan (B) sekali untuk kembali ke Browser
6. Tekan (ZR) untuk membuka daftar tab
   - Jika tombol (ZR) tidak tanggap, sentuh gambar dua kotak bertumpuk di pojok kanan-bawah layar
7. Pastikan tab yang terbuka hanya situs super-skaterhax
   - Tab ini harus bersorot warna biru di daftar tab
   - Tutup tab yang lain jika ada
8. Tekan (B) sekali untuk kembali ke Browser
9. Tekan (Start) untuk membuka menu konteks
   - Jika tombol (Start) tidak tanggap, sentuh menu 3-garis di pojok kanan-bawah layar
10. Sentuh "Settings"
11. Sentuh "Delete Cookies"
12. Tekan (A) untuk lanjut
13. Tekan (Home) untuk ke HOME Menu, lalu langsung tekan (A) untuk membuka Browser lagi
14. Pilih tombol "GO GO!" di layar bawah bagian atas
15. Tekan (A) untuk abaikan [sembulan](/images/screenshots/skaterhax/skater-popup.png)
    - Jika konsolnya macet di layar kuning, tahan tombol POWER sampai daya mati, lalu coba lagi bagian ini
    - Jika konsolnya macet di layar merah, tahan tombol POWER sampai daya mati, ulangi Langkah 3 Bagian II, lalu coba lagi bagian ini
    - Jika [ada tulisan "Text" di pojok kiri-atas layar bawah](/images/screenshots/skaterhax/skater-old3ds.png), berarti konsol Anda Old 3DS dan eksploit ini **tidak berfungsi di konsol tersebut**. Jika begitu, maka ikuti saja [MSET9](installing-boot9strap-\(mset9\))
    - Jika muncul galat lain, coba lagi hingga 5 kali, dan jika masih galat, [ikuti panduan sidik gangguan ini](troubleshooting-super-skaterhax)
16. Konsol akan menyala ke Homebrew Launcher
17. Buka nimdsphax dari daftar _homebrew_
18. Jika eksploit berhasil akan muncul SafeB9SInstaller
    - Jika konsolnya macet di layar merah atau hijau, tahan tombol POWER sampai daya mati, lalu coba lagi bagian ini
    - Ini mungkin perlu dicoba lima kali

#### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-super-skaterhax)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Sekarang pengaturan daerah bisa dikembalikan ke biasa lagi.

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
