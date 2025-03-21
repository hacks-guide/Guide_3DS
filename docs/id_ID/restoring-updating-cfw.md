# Memulihkan / Memperbarui CFW

## Bacaan Penting

Laman ini berisi cara memperbarui dan/atau memasang ulang aplikasi CFW untuk konsol yang sudah ada boot9strap modern. Bisa juga digunakan kalau-kalau kartu SD hilang atau rusak.

Kartu SD harus sudah diformat ke FAT32 untuk mengikuti panduan ini, jika tidak nanti tidak terbaca 3DS. Jika kartu SD belum diformat dengan benar, gunakan salah satu panduan berikut, tergantung sistem operasi: [Windows](formatting-sd-\(windows\)), [Mac](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)).

## Apa yang Perlu

- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)

## Instruksi

1. Sisipkan kartu SD ke komputer Anda
2. Salin semua isi berkas `.zip` Luma3DS (`boot.firm`, `boot.3dsx`, dan `config`) ke akar kartu SD, timpa berkas yang ada
    - Akar (_root_) kartu SD adalah direktori awal kartu SD yang ada folder Nintendo 3DS, berarti **tidak di dalam folder apa pun**
3. Sisip kembali kartu SD ke konsol
4. Nyalakan daya konsol
    - Jika muncul menu konfigurasi Luma3DS, tekan (Start) untuk simpan dan nyala ulang

::: info

Luma3DS versi terkini sekarang sudah terpasang di kartu SD dan memori internal.

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup) untuk memasang/memperbarui aplikasi _homebrew_ (misal: FBI, Homebrew Launcher).

:::
