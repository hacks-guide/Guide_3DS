# Penyiapan Akhir

## Bacaan Penting

Setelah memasang boot9strap, yaitu _custom firmware_ yang memuat `boot.firm` dari kartu SD atau NAND (memori internal). Selanjutnya kita gunakan Luma3DS oleh [LumaTeam](https://github.com/LumaTeam/) sebagai `boot.firm` untuk menambal konsol agar bisa membuka _homebrew_.

Di laman ini juga akan mencadang berkas sistem kritis dan memasang beberapa _homebrew_. Hampir semua langkah ini menggunakan naskah otomatis yang dijalankan di konsol.

::: info

Naskahnya akan memasang aplikasi berikut:

- **FBI** oleh Steveice10 _(memasang aplikasi berformat CIA)_
- **Homebrew Launcher Loader** oleh PabloMK7 _(ke Homebrew Launcher, untuk homebrew .3DSX)_
- **Anemone3DS** oleh astronautlevel2 _(memasang tema, splash, dan lencana kustom)_
- **Checkpoint** oleh BernardoGiordano/FlagBrew _(mengelola simpanan 3DS/DS)_
- **ftpd** oleh mtheall _(mengakses kartu SD 3DS tanpa kabel lewat FTP)_
- **Universal-Updater** oleh Universal-Team _(aplikasi konsol untuk mengunduh homebrew lewat Wi-Fi)_
- **GodMode9** oleh d0k3 _(alat serbaguna untuk mengekstrak data kartrid atau memori internal)_

Jika ada aplikasi yang tidak diinginkan, nanti bisa dihapus setelah selesai panduan ini di `System Settings` -> `Data Management` -> `Nintendo 3DS` -> `Software`. (GodMode9 tidak bisa dihapus dengan cara ini karena perlu untuk fungsi lain.)

::: details Tautan kode sumber (opsional)

Semua aplikasi di panduan ini bersumber terbuka. Jika ingin melihat cara kerja kodenya, atau ingin ditandai bintang sebagai terima kasih, kode sumbernya ditaut di sini:

- [FBI](https://github.com/lifehackerhansol/FBI)
- [Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)
- [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)
- [Checkpoint](https://github.com/bernardogiordano/checkpoint/releases)
- [ftpd](https://github.com/mtheall/ftpd)
- [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)
- [GodMode9](https://github.com/d0k3/GodMode9)

:::

## Catatan Kompatibilitas

::: info

Jika penyiapan CFW sebelumnya EmuNAND dan ingin memindahkan isi dari EmuNAND/RedNAND ke SysNAND, ikuti [Memindahkan EmuNAND](move-emunand) sebelum mengikuti laman ini. Jika tidak tahu apa itu EmuNAND, ini abaikan saja.

:::

## Apa yang Perlu

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (unduhan langsung)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (unduhan langsung)

## Instruksi

### Bagian I - Persiapan

Di bagian ini akan menyalin berkas yang perlu untuk mengikuti instruksi berikutnya di laman ini.

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `finalize.romfs` ke akar kartu SD
4. Buka folder `luma` di kartu SD dan di dalamnya buat folder bernama `payloads`, jika belum ada
5. Salin `x_finalize_helper.firm` ke folder `payloads`
6. Sisip kembali kartu SD ke konsol

Tangkapan layar di bawah ini menunjukkan isi minimal kartu SD untuk mengikuti laman ini. Mungkin akan ada berkas atau folder lebih di kartu SD, tergantung sebelumnya pernah ikut metode apa.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Bagian II - Memperbarui Sistem

Di bagian ini akan memperbarui sistem ke versi terbaru, ini aman dilakukan dengan _custom firmware_.

<!--@include: ./_include/sysupdate.md -->

### Bagian III - Penyiapan RTC dan DSP

Di bagian ini akan menyelaraskan jam internal 3DS dengan jam sebenarnya, dan men-_dump firmware_ suara (beberapa _homebrew_ perlu ini untuk menghasilkan suara dengan benar).

1. Tekan (L) + (Tombol Bawah) + (Select) bersamaan untuk membuka menu Rosalina
    - Jika tombol tersebut ada yang rusak, unduh [config.ini](/assets/config.ini) dan taruh di folder `luma`, timpa berkas yang ada. Ini akan mengubah kombo tombol menu Rosalina ke (X) + (Y)
2. Pilih "Miscellaneous options"
3. Pilih "Dump DSP firmware"
4. Tekan (B) untuk lanjut
5. Pilih "Nullify user time offset"
6. Tekan (B) untuk lanjut
7. Tekan (B) untuk kembali ke menu utama Rosalina
8. Tekan (B) untuk keluar dari menu Rosalina

### Bagian IV - Naskah Penyiapan

Di bagian ini akan menggunakan naskah agar otomatis memasang _homebrew_, membersihkan kartu SD, dan mencadang sistem.

1. Matikan daya konsol
2. Tahan tombol (X) selagi menyalakan konsol. Ini akan masuk ke Finalizing Setup Helper
    - Jika menyala ke HOME Menu, folder `payloads` mungkin salah letak atau dieja kurang benar
    - Jika ada galat, rujuk ke laman [sidik gangguan](troubleshooting-finalizing-setup)
3. Jika Helper sudah berhasil, konsol akan menyala ke GodMode9
    - Mulai dari sini, GodMode9 sudah bisa diakses dengan menahan START ketika menyalakan konsol
4. Jika diminta membuat cadangan berkas esensial, tekan (A) untuk lakukan, lalu tekan (A) lagi sesudah selesai untuk lanjut
5. Jika diminta membetulkan waktu & tanggal RTC, lakukan dengan menekan (A), lalu tekan (A) lagi untuk lanjut
6. Tekan (Home) untuk membuka menu tindakan
7. Pilih "Scripts..."
8. Pilih "finalize"
9. Ikuti sembulan perintah yang diminta dari naskah
    - Jika muncul "Information #05: No title database", tekan (A) untuk impor dan tekan tombol sesuai layar untuk lanjut
    - Jika ada galat, ikuti instruksi di pesan galat atau rujuk ke laman [sidik gangguan](troubleshooting-finalizing-setup)
10. Sesudah naskah bertulis "Setup complete!", tekan (A) untuk matikan daya konsol
    - Jika TIDAK muncul pesan "Setup complete!", naskahnya tidak berhasil dan harus ulangi bagian ini dari Langkah 3
11. Sisipkan kartu SD ke komputer Anda
12. Salin folder `/gm9/backups/` ke letak yang aman di komputer
    - Folder ini berisi cadangan berkas kritis dan _harus_ disalin ke berbagai tempat (yaitu: penyimpanan awan) jika bisa
    - Kedua berkas SysNAND ini cadangan NAND Anda dan **penting** untuk pemulihan konsol jika matot (_brick_) karena isu peranti lunak
    - Berkas `essential.exefs` berisi berkas unik sistem konsol dan bisa untuk memulihkan data jika terjadi kerusakan fisik
13. Jika sudah disalin, boleh hapus dua berkas `SysNAND` dari folder `/gm9/backups/` di kartu SD
    - Ukuran `essential.exefs` itu kecil, jadi boleh dibiarkan di kartu SD agar mudah diakses

___

::: tip

Selesai dah! _Custom firmware_ konsol kini sudah disetel.

:::

::: info

Bingung harus apa dengan konsol baru dimodif? Kunjungi [wiki kami](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Informasi dan Catatan

::: info

Berikut kombo-kombo tombol yang harus diketahui:

- Menahan (Select) saat awal nyala akan ke menu konfigurasi Luma3DS.
- Menahan (Start) saat awal nyala akan ke GodMode9; atau jika ada banyak _payload_ di `/luma/payloads/`, ke Luma3DS chainloader.
- Secara bawaan, menekan (L) + (Tombol Bawah) + (Select) di mode 3DS akan membuka menu Rosalina untuk memeriksa informasi sistem, menangkap layar, aktifkan _cheat_, dan lainnya. Semua itu bisa diubah dari menu Rosalina.
- Menahan (Start) + (Select) + (X) saat awal nyala akan muncul warna di LED pemberitahuan untuk awakutu. Lihat daftarnya di [_changelog_](https://github.com/SciresM/boot9strap/releases/tag/1.4).

:::

::: info

Untuk informasi cara menggunakan fitur-fitur GodMode9, lihat laman [Penggunaan GodMode9](godmode9-usage) dan [Membuat Dump Permainan dan Kartrid](dumping-titles-and-game-cartridges).

:::
