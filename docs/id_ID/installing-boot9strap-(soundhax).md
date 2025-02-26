---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Memasang boot9strap (Soundhax)

:::details Perincian Teknis (opsional)

Untuk perincian teknis perihal eksploit pada laman ini, lihat di [sini (Soundhax)](https://github.com/nedwill/soundhax) dan [sini (universal-otherapp)](https://github.com/TuxSH/universal-otherapp).

:::

## Catatan Kompatibilitas

Soundhax ini (jika dengan universal-otherapp) kompatibel di semua daerah dari _firmware_ 1.0.0 hingga 11.3.0.

## Apa yang Perlu

- Versi terkini dari [Soundhax](http://soundhax.com) _(sesuaikan daerah, versi, dan jenis konsol)_
  - Jika Soundhax muncul sebagai video rusak di peramban web, tekan Ctrl+S atau Cmd+S untuk simpan di komputer
- Versi terkini dari [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (unduhan langsung)
- Versi terkini dari [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (unduhan langsung)
- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)
- Versi terkini dari [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instruksi

### Bagian I - Persiapan

Di bagian ini akan menaruh berkas untuk mengaktifkan Soundhax dan universal-otherapp.

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `.m4a` Soundhax ke akar dari kartu SD
   - Akar (_root_) kartu SD merujuk ke direktori awal kartu SD yang ada folder Nintendo 3DS, berarti **tidak di dalam folder apa pun**
4. Salin `otherapp.bin` ke akar kartu SD
5. Salin semua berkas dari `.zip` Luma3DS ke akar kartu SD
6. Buat folder dengan nama `boot9strap` di akar kartu SD
7. Salin `boot9strap.firm` dan `boot9strap.firm.sha` dari berkas `.zip` boot9strap ke folder `/boot9strap/` di kartu SD
8. Salin `SafeB9SInstaller.bin` dari `.zip` SafeB9SInstaller ke akar kartu SD
9. Sisip kembali kartu SD ke konsol
10. Nyalakan daya konsol

::: info

![](/images/screenshots/soundhax/soundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Bagian II - Menjalankan SafeB9SInstaller

Di bagian ini akan menjalankan Soundhax dengan universal-otherapp di aplikasi Nintendo 3DS Sound agar bisa ke pemasang boot9strap (_custom firmware_).

1. Buka Nintendo 3DS Sound

   ::: info

   ![](/images/screenshots/soundhax/soundhax-welcome.png)

   :::

2. Jika belum pernah membuka Nintendo 3DS Sound dan muncul tips penggunaannya dari ikon burung; lalui dulu semua tips burung, tutup aplikasi seperti biasa, dan buka lagi
   - Karena belum pernah, membuka langsung Soundhax menyebabkan tips terus muncul setiap kali membuka Nintendo 3DS Sound sampai ini dilakukan

3. Masuk ke `/SDCARD`, lalu putar "<3 nedwill 2016"

   - Ini harus coba terus (hingga 10 kali)
   - Jika muncul pesan "Could not play", bisa jadi versi sistem tidak kompatibel dengan Soundhax; atau _release_ Soundhax yang diunduh salah
   - Jika macet, matikan paksa daya konsol dengan menahan tombol Power, lalu coba lagi
   - Jika muncul galat berbeda, [ikuti panduan sidik gangguan ini](troubleshooting-soundhax)

   ::: info

   ![](/images/screenshots/soundhax/soundhax-launch.png)

   :::

4. Jika eksploit berhasil akan muncul SafeB9SInstaller

### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-soundhax)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
