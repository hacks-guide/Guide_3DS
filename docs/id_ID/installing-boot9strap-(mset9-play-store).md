# Memasang boot9strap (MSET9 Play Store)

:::details Perincian Teknis (opsional)

[MSET9](https://github.com/zoogie/MSET9) adalah eksploit untuk System Settings yang dikembangkan oleh [zoogie](https://github.com/zoogie). Eksploit ini menyasar kelemahan ID1 (32 huruf dari nama folder kedua, di folder Nintendo 3DS setelah ID0) yang bisa nama _apa saja_ asalkan 32 huruf. Gunanya untuk menjalankan instruksi sesuai kode dalam nama folder ID1 yang membuat konsol melakukan tindakan tertentu, sehingga mendapat kendali penuh pada konsol.

:::

## Catatan Kompatibilitas

::: warning

Laman ini perlu ponsel/tablet Android atau Chromebook. If you have an iPhone or iPad, follow [Installing boot9strap (MSET9 CLI iOS)](installing-boot9strap-(mset9-cli-ios)) instead. Jika punya komputer bersistem Windows, macOS, atau Linux, ikuti saja [Memasang boot9strap (MSET9 CLI)](installing-boot9strap-(mset9-cli)). Jika tidak punya perangkat tersebut, berarti perlu [eksploit yang lain](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits) (gunakan penerjemah).

:::

::: warning

Di ponsel/tablet Android, versi Android yang diperlukan minimal 6.0 (Marshmallow).

:::

## Apa yang Perlu

- Versi terkini dari [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (yang `.zip` MSET9)
- Memasang aplikasi berikut dari Google Play Store:
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - Atau, pasang .apk tersebut dari sumber lain (_sideload_)

## Instruksi

### Bagian I - Persiapan

Di bagian ini akan menyiapkan eksploit MSET9 dengan membuat profil HOME Menu baru **sementara** yang agak kosong, lalu sedikit mengubah data profil itu untuk mengaktifkan MSET9. Data pengguna yang ada akan menghilang, tapi akan kembali seusai mengikuti laman ini.

1. Sisipkan kartu SD ke ponsel/tablet/komputer

2. Copy everything from the MSET9 `.zip` to the root of your SD card. If any of the files exist, overwrite them with the new files:

   - Buka ZArchiver
   - Jika diminta, [izinkan ZArchiver mengakses ke kartu SD](/images/screenshots/mset9/zarchiver-allow.png)
   - Navigasi ke letak berkas `.zip` MSET9 ([mungkin di folder Downloads](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Pencet kanan pada `.zip` MSET9, lalu pilih "Extract..." ([gambar](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Navigasi ke kartu SD, lalu sentuh ikon 'panah bawah' biru untuk mengekstrak berkas ke akar kartu SD ([gambar](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

3. Jalankan aplikasi [MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

4. Sentuh `Select "Nintendo 3DS" Folder`, lalu navigasi ke folder `Nintendo 3DS` di kartu SD ([gambar](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Setiba di folder `Nintendo 3DS`, sentuh "Use this folder", lalu "Allow" jika diminta ([gambar](/images/screenshots/mset9/select-mset9-folder-2.png))

6. Jika opsi `Setup MSET9` [tersorot](/images/screenshots/mset9/setup-mset9-highlighted.png), lanjut ke langkah berikutnya
   - Jika muncul galat, perbaiki dulu galatnya sebelum menggunakan MSET9. Coba rujuk ke [sidik gangguan](troubleshooting-mset9)

7. Sentuh `Setup MSET9` untuk memulai proses penyiapan MSET9

8. Setelah membaca sangkalan yang ada, sentuh `Confirm` untuk iya

9. Sentuh foto sesuai model konsol, lalu di bawahnya pilih versi firmware konsol saat ini

10. Jika ada sembulan `Hax ID1 Created`, sentuh OK untuk lanjut
    - Jika galat, periksa ke [sidik gangguan](troubleshooting-mset9), lalu coba lagi
    - Konsol akan seperti kehilangan aplikasi terpasang / data di HOME Menu. **Memang seperti ini.** Data akan kembali di langkah berikutnya

11. Sisip kembali kartu SD ke konsol

12. Nyalakan daya konsol

13. Buka Mii Maker
    - Ensure that you open Mii Maker, not Mii Plaza. Mii Maker can be identified using the ![Mii Maker](/images/screenshots/mset9/miimaker.png){height="24px" width="24px"} logo

14. Tunggu konsol sampai layar [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png), lalu keluar dari Mii Maker dan balik ke HOME Menu
    - Mungkin muncul [layar ini](/images/screenshots/mset9/mii-extdata.png), ini menandakan data yang perlu sudah dibuat
    - Jika hanya sampai layar Mii Maker [biasa](/images/screenshots/mset9/mii-existing.png), berarti sudah ada data. Keluar dari Mii Maker dan balik ke HOME Menu

15. Buka System Settings dan navigasi ke `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([gambar](/images/screenshots/database-reset.jpg))
    - Ini tidak akan menghapus data

16. Matikan daya konsol dengan menekan tombol daya lalu sentuh Power Off di layar bawah

17. Sisipkan kartu SD ke ponsel/tablet/komputer

18. Aplikasi MSET9 Installer akan otomatis memeriksa apakah langkah sebelumnya sudah benar
    - Aplikasi perlu beberapa detik untuk mendeteksi kartu SD dan bereaksi
    - Jika tidak otomatis memeriksa, sentuh `Check MSET9 status` untuk memeriksa
    - Jika galat, periksa ke [sidik gangguan](troubleshooting-mset9), lalu coba lagi

19. Jika periksa berhasil, tombol `Inject trigger file` akan [tersorot](/images/screenshots/mset9/inject-trigger-highlighted.png) yang berarti boleh ke langkah berikutnya. **Tapi jangan _inject trigger file_ dulu.** Taruh dulu ponsel/tablet/komputer

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
   - Menu akan menyegar dan muncul pesan tidak ada kartu SD, memang begitu
6. Sisipkan kartu SD ke ponsel/tablet/komputer
7. Buka aplikasi MSET9 Installer
8. Sentuh `Inject trigger file`
   - Tombolnya akan berubah abu-abu dan `Remove trigger file` akan [tersorot](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Sisip kembali kartu SD ke konsol **tanpa menekan tombol atau menyentuh layar**
10. Jika eksploit berhasil akan muncul SafeB9SInstaller
    - If you get a red screen or the console gets stuck on a loading screen for more than 10 seconds, follow the [troubleshooting guide](troubleshooting-mset9)

### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9#sighaxed-firm-was-not-installed-check-lower-screen-for-more-info)
   - If the top screen is blank **and** you see "Crypto Status - all checks passed" on the bottom screen, you will have to enter key combo blindly. Press the following buttons on your console in this order:
     - D-Pad Left, D-Pad Down, D-Pad Right, D-Pad Up, A
2. Once it is complete (all seven steps on the bottom screen are green), press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

### Bagian IV - Menghapus MSET9

Di bagian ini akan menghapus MSET9 untuk mencegah isu dan memulihkan data (permainan, tema, dll.). (Ini tidak akan menghapus _custom firmware_ yang tadi dipasang).

::: danger

JANGAN lewati bagian ini! Jika dilewati, aplikasi bisa tiba-tiba mogok dan akan ada galat di laman berikutnya!

:::

1. Matikan daya konsol
2. Sisipkan kartu SD ke ponsel/tablet/komputer
3. Buka aplikasi MSET9 Installer
4. Sentuh `Remove MSET9`
5. Tutup aplikasi MSET9 Installer

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Sudah belum ikuti Bagian IV (Menghapus MSET9)? Bagian itu **WAJIB**!

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
