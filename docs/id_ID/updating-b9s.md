# Memperbarui B9S

## Bacaan Penting

Laman ini untuk memperbarui konsol yang sudah boot9strap ke versi terkini.

## Apa yang Perlu

- Versi terkini dari [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (unduhan langsung)
- Versi terkini dari [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (unduhan langsung)
- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)

## Instruksi

### Bagian I - Persiapan

::: info

Untuk semua langkah di bagian ini, timpa saja berkas terkait di kartu SD.

:::

1. Sisipkan kartu SD ke komputer Anda
2. Buat folder dengan nama `boot9strap` di akar kartu SD
3. Salin `boot9strap.firm` dan `boot9strap.firm.sha` dari berkas `.zip` boot9strap ke folder `/boot9strap/` di kartu SD
4. Salin `SafeB9SInstaller.firm` dari berkas `.zip` SafeB9SInstaller ke akar kartu SD dan ubah nama menjadi `boot.firm`
5. Sisip kembali kartu SD ke konsol

    ::: info

    ![](/images/screenshots/updateb9s-root-layout.png)

    :::

### Bagian II - Memasang boot9strap

1. Nyalakan daya konsol
    - Ini seharusnya otomatis membuka SafeB9SInstaller
2. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
    - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-updating-b9s)
3. Sesudah selesai, matikan paksa daya konsol dengan menekan lama tombol Power
    - Konsol hanya akan menyala ke SafeB9SInstaller jika langkah setelah ini belum dilakukan

### Bagian III - Memperbarui Luma3DS

1. Sisipkan kartu SD ke komputer Anda
2. Salin semua isi berkas `.zip` Luma3DS ke akar kartu SD, timpa berkas yang ada
3. Sisip kembali kartu SD ke konsol
4. Nyalakan daya konsol
5. Jika menyala ke menu konfigurasi Luma3DS, tekan (Start) untuk simpan dan nyala ulang
    - Menu konfigurasi Luma3DS adalah pengaturan untuk _custom firmware_ Luma3DS. Opsi yang tersedia berguna untuk kustomisasi dan pengawakutuan
    - Sesuai tujuan panduan ini, pengaturannya akan dibiarkan di opsi bawaan

___

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
