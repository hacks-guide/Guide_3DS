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
- Versi terkini dari [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (yang `.zip` Release)

## Instruksi

### Bagian I - Persiapan

Di bagian ini akan menyiapkan data ke kartu SD untuk mengaktifkan eksploit MSET9.

1. Sisipkan kartu SD ke ponsel/tablet/komputer

2. Salin semua isi berkas `.zip` Release_v2.0 ke akar kartu SD, timpa berkas yang ada:

    - Buka ZArchiver
    - Jika diminta, [izinkan ZArchiver mengakses ke kartu SD](/images/screenshots/mset9/zarchiver-allow.png)
    - Navigasi ke letak `.zip` Release_v2.0 MSET9 diunduh ([mungkin di folder Downloads](/images/screenshots/mset9/zarchiver-zip-location.png))
    - Pilih `.zip` Release_v2.0, lalu pilih "Extract..." ([gambar](/images/screenshots/mset9/zarchiver-extract-1.png))
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
    - Jika muncul galat, lihat laman [sidik gangguan](troubleshooting-mset9), lalu coba lagi
    - Konsol 3DS akan seperti kehilangan aplikasi terpasang / data di HOME Menu. Memang seperti ini. Data akan balik di langkah berikutnya

11. Sisip kembali kartu SD ke konsol

12. Nyalakan daya konsol

13. Buka Mii Maker

14. Tunggu konsol sampai layar "Welcome to Mii Maker", lalu keluar dari Mii Maker
    - Mungkin muncul [layar ini](/images/screenshots/mset9/mii-extdata.png), ini menandakan data yang perlu sudah dibuat
    - Jika hanya sampai layar Mii Maker biasa, keluar dari Mii Maker dan kembali ke HOME Menu

15. Buka System Settings dan navigasi ke `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([gambar](/images/screenshots/database-reset.jpg))
    - Ini tidak akan menghapus data

16. Matikan daya konsol dengan menekan tombol daya lalu sentuh Power Off di layar bawah

17. Sisipkan kartu SD ke ponsel/tablet/komputer

18. Aplikasi MSET9 Installer akan otomatis memeriksa apakah langkah sebelumnya sudah benar
    - Aplikasi perlu beberapa detik untuk mendeteksi kartu SD dan bereaksi
    - Jika tidak otomatis memeriksa, sentuh `Check MSET9 status` untuk memeriksa
    - Jika muncul galat, lihat laman [sidik gangguan](troubleshooting-mset9), lalu coba lagi

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
    - Jika muncul layar merah atau konsol tersangkut di layar memuat, ikuti [panduan sidik gangguan](troubleshooting-mset9)

### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
    - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-mset9)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

### Bagian IV - Menghapus MSET9

Di bagian ini akan menghapus MSET9 agar tidak ada isu lain. (Ini tidak akan menghapus _custom firmware_ yang tadi dipasang.)

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
