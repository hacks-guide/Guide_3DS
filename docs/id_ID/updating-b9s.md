# Updating B9S

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
   - This should automatically launch SafeB9SInstaller
2. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-updating-b9s)
3. Sesudah selesai, matikan paksa daya konsol dengan menekan lama tombol Power
   - Konsol hanya akan menyala ke SafeB9SInstaller jika langkah setelah ini belum dilakukan

### Section III - Update Luma3DS

1. Sisipkan kartu SD ke komputer Anda
2. Copy everything from the Luma3DS `.zip` to the root of your SD card, replacing any existing files
3. Sisip kembali kartu SD ke konsol
4. Nyalakan daya konsol
5. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
