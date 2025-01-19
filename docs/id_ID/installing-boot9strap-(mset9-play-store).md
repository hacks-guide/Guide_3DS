# Memasang boot9strap (MSET9 Play Store)

:::details Perincian Teknis (opsional)

[MSET9](https://github.com/zoogie/MSET9) adalah eksploit untuk System Settings yang dikembangkan oleh [zoogie](https://github.com/zoogie). Eksploit ini menyasar kelemahan ID1 (32 huruf dari nama folder kedua, di folder Nintendo 3DS setelah ID0) yang bisa nama _apa saja_ asalkan 32 huruf. Gunanya untuk melakukan tindakan tertentu yang membuat konsol menjalankan instruksi sesuai kode dalam nama folder ID1, sehingga mendapat kendali penuh atas konsol 3DS.

:::

## Catatan Kompatibilitas

::: warning

Laman ini perlu ponsel/tablet Android atau Chromebook. Jika punya komputer bersistem Windows, macOS, atau Linux, ikuti saja [Memasang boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)). Jika tidak punya perangkat tersebut, berarti perlu [eksploit yang lain](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits) (gunakan penerjemah).

:::

::: warning

Di ponsel/tablet Android, versi Android yang diperlukan minimal 6.0 (Marshmallow).

:::

## Apa yang Perlu

- Memasang aplikasi berikut dari Google Play Store:
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - Atau, pasang .apk tersebut dari sumber lain (_sideload_)
- Versi terkini dari [MSET9](https://github.com/zoogie/MSET9/releases/latest) (yang `.zip` Release)

## Instruksi

### Bagian I - Persiapan

Di bagian ini akan menyiapkan data ke kartu SD untuk mengaktifkan eksploit MSET9.

1. Sisipkan kartu SD ke ponsel/tablet/komputer

2. Salin semuanya dari `.zip` Release_v2.0 ke akar kartu SD, timpa berkas yang ada:

   - Buka ZArchiver
   - Jika diminta, [izinkan ZArchiver mengakses ke kartu SD](/images/screenshots/mset9/zarchiver-allow.png)
   - Navigasi ke letak `.zip` Release_v2.0 MSET9 diunduh ([mungkin di folder Downloads](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Pilih `.zip` Release_v2.0, lalu pilih "Extract..." ([gambar](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Navigate to your SD card, then tap the blue 'down arrow' icon to extract the files to the root of your SD card ([image](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

3. Run the [MSET9 Installer application](/images/screenshots/mset9/mset9-setup-android.png)

4. Tap on `Select "Nintendo 3DS" Folder`, then navigate to your `Nintendo 3DS` folder on your SD card ([image](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Once inside the `Nintendo 3DS` folder, tap on "Use this folder", then "Allow" if asked ([image](/images/screenshots/mset9/select-mset9-folder-2.png))

6. If `Setup MSET9` is [highlighted](/images/screenshots/mset9/setup-mset9-highlighted.png), proceed to the next step
   - If you get an error, you need to resolve before you can use MSET9. Refer to the [troubleshooting](troubleshooting-mset9)

7. Tap on `Setup MSET9` to begin the process of setting up MSET9

8. Setelah membaca sangkalan yang ada, sentuh `Confirm` untuk iya

9. Tap on the photo corresponding to your console model, then at the bottom, pick your current firmware version

10. If you see the prompt of `Hax ID1 Created`, tap OK to continue
    - Jika muncul galat, lihat laman [sidik gangguan](troubleshooting-mset9), lalu coba lagi
    - Your 3DS will appear to lose most data / no user-installed apps on HOME Menu. This is expected. Your data will come back at a later step

11. Sisip kembali kartu SD ke konsol

12. Nyalakan daya konsol

13. Buka Mii Maker

14. Wait for your console to reach the "Welcome to Mii Maker" screen, then exit Mii Maker
    - Mungkin muncul [layar ini](/images/screenshots/mset9/mii-extdata.png), ini menandakan data yang perlu sudah dibuat
    - If you just reach the normal Mii Maker screen, exit Mii Maker and return to the HOME Menu

15. Buka System Settings dan navigasi ke `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([gambar](/images/screenshots/database-reset.jpg))
    - Ini tidak akan menghapus data

16. Matikan daya konsol dengan menekan tombol daya lalu sentuh Power Off di layar bawah

17. Sisipkan kartu SD ke ponsel/tablet/komputer

18. The MSET9 Installer application should automatically check if you have done previous steps properly
    - It may take a few seconds for the app to detect the SD card and react
    - If it doesn't check automatically, tap `Check MSET9 status` to check manually
    - Jika muncul galat, lihat laman [sidik gangguan](troubleshooting-mset9), lalu coba lagi

19. If the check passed, you'll see `Inject trigger file` become [highlighted](/images/screenshots/mset9/inject-trigger-highlighted.png) and you can continue to the next step. **Do not inject trigger yet.** Put your phone/tablet/computer aside for now

20. Sisip kembali kartu SD ke konsol

### Bagian II - MSET9

Di bagian ini akan mengaktifkan MSET9 untuk membuka SafeB9SInstaller (pemasang CFW).

::: danger

Instruksi ini harus diikuti **PERSIS**, periksa lagi SEMUA yang tadi sudah agar tidak keliru!

:::

1. Nyalakan daya konsol, pastikan sudah sorot System Settings
   - Jika belum sorot System Settings, **[arahkan](/images/screenshots/mset9/hover-settings.png)** ke ikon System Settings dengan tombol arah, matikan daya konsol, dan nyalakan lagi
2. Tekan (A) untuk membuka System Settings
3. Navigasi ke `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([gambar](/images/screenshots/mset9/settings-extdata.png))
4. **Jangan tekan tombol apa pun atau sentuh layar**
5. **Selagi konsol MASIH NYALA, dan tidak menyentuh layar atau menekan tombol apa pun**, lepas kartu SD dari konsol
   - The menu will refresh and say that no SD card is inserted, which is expected
6. Sisipkan kartu SD ke ponsel/tablet/komputer
7. Open the MSET9 Installer application
8. Tap `Inject trigger file`
   - The button should become greyed out and `Remove trigger file` become [highlighted](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Sisip kembali kartu SD ke konsol **tanpa menekan tombol atau menyentuh layar**
10. Jika eksploit berhasil akan muncul SafeB9SInstaller
    - Jika muncul layar merah atau konsol tersangkut di layar memuat, ikuti [panduan sidik gangguan](troubleshooting-mset9)

### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-mset9)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

### Bagian IV - Menghapus MSET9

In this section, you will remove MSET9 to prevent further issues. (This will not remove the custom firmware that you just installed.)

::: danger

JANGAN lewati bagian ini! Jika dilewati, aplikasi bisa tiba-tiba mogok dan akan ada galat di laman berikutnya!

:::

1. Matikan daya konsol
2. Sisipkan kartu SD ke ponsel/tablet/komputer
3. Open the MSET9 Installer application
4. Tap `Remove MSET9`
5. Close the MSET9 Installer application

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Apakah tadi sudah Bagian IV (Menghapus MSET9)? Bagian itu **WAJIB**!

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
