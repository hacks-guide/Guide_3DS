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

Super-skaterhax itu (jika untuk Homebrew Launcher) kompatibel pada 3DS "New" _firmware_ 11.15.0 ke atas di semua daerah kecuali CHN/TWN.

::: info

Eksploit ini diketahui tidak konsisten: sebagian ada yang berhasil, ada yang tidak. Jika lebih pilih eksploit yang lebih konsisten (akan lebih lama, tapi hasil akhirnya akan sama), ikuti saja [MSET9](installing-boot9strap-\(mset9\)).

:::

### Apa yang Perlu

- Berkas zip [Super-skaterhax](https://skater.nintendohomebrew.com) yang sesuai versi dan daerah konsol

#### Bagian I - Persiapan

Di bagian ini akan menaruh berkas untuk mengaktifkan super-skaterhax dan Homebrew Launcher.

1. Matikan daya konsol

2. Sisipkan kartu SD ke komputer Anda

3. Salin semua isi berkas `.zip` Super-skaterhax ke akar kartu SD, timpa berkas yang ada

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

10. Navigasi ke "Date & Time"

11. Atur "Today's Date" dan "Current Time" ke tanggal dan waktu hari ini sesuai zona waktu

12. Keluar dari System Settings

#### Bagian II - super-skaterhax

Di bagian ini akan membuka laman web eksploit Browser untuk menjalankan Homebrew Launcher.

::: info

Video yang menjelaskan langkah ini ada di [sini](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Buka Internet Browser
2. Sentuh ikon 3 garis (☰) di pojok kanan bawah layar bawah
3. Sentuh `Settings` -> gulir ke bawah -> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK`
    - Browser akan ditutup
4. Buka lagi Internet Browser
5. Sentuh `Next` -> `Google` -> `OK` -> `OK`
6. Sentuh kolom alamat di bagian atas layar bawah
7. Ketik URL berikut sesuai daerah konsol Anda:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Sentuh "Open"
    - Seharusnya muncul teks "GO GO!". Jangan dipencet dulu
9. Sentuh ikon 3 garis (☰) di pojok kanan bawah layar bawah
10. Sentuh "Add to Bookmarks"
11. Sentuh ikon 3 garis (☰) di pojok kanan bawah layar bawah
12. Sentuh `Settings` -> `Delete Cookies` -> `Yes`
13. Tekan (Home) untuk ke HOME Menu, lalu langsung buka lagi Internet Browser
14. Tunggu sampai laman selesai dimuat, lalu sentuh tombol "GO GO!" di bagian atas layar bawah
15. Tunggu sampai laman selesai dimuat, lalu tekan (A) untuk tutup [sembulan](/images/screenshots/skaterhax/skater-popup.png)
16. Jika konsol muncul:
    - **Layar "Homebrew Launcher"**: Lanjut ke langkah berikutnya
    - **Kotak pesan putih "Error has occurred"**: Eksploitnya kebetulan gagal. Buka System Settings, ubah bahasa sistem ke yang lain (jika bisa), lalu coba lagi bagian ini. Bagian ini mungkin harus diulangi hingga sepuluh kali
        - Di konsol berdaerah JPN/KOR, pengaturan hanya ada satu bahasa. Untuk konsol tersebut, caranya buka System Settings, tutup apli, lalu coba lagi bagian ini
        - Jika eksploit masih gagal setelah mencoba lima kali, mungkin masalahnya di persiapan berkas. Pastikan daerah dan tanggal/waktu konsol sudah benar dan mengikuti bagian ini dengan **persis**. Jika tadi mengekstrak berkas ke kartu SD dengan WinRAR, ekstrak ulang berkasnya dengan File Explorer atau 7-zip
        - Jika eksploit masih gagal setelah mencoba sepuluh kali, ikuti saja [MSET9](installing-boot9strap-\(mset9\))
    - **Layar hitam bertulis "An error has occurred"**: Berkasnya salah taruh. Pastikan berkas super-skaterhax ditaruh di akar kartu SD
    - **Layar kuning**: Homebrew Launcher tidak bisa dibuka karena kebetulan gagal. Tahan tombol POWER konsol sampai daya mati, lalu coba lagi bagian ini
    - **[Tulisan "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: Konsol Anda Old 3DS, eksploit ini **bukan untuk Old 3DS**. Jika begitu, maka ikuti saja [MSET9](installing-boot9strap-\(mset9\))
17. Buka nimdsphax dari Homebrew Launcher
18. Jika eksploit berhasil akan muncul SafeB9SInstaller
    - Jika konsolnya macet di layar merah atau hijau, tahan tombol POWER sampai daya mati, lalu coba lagi bagian ini

#### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
    - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-super-skaterhax)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Sekarang pengaturan daerah boleh diatur ke biasa lagi.

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
