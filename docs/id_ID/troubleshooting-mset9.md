# Sidik Gangguan (MSET9)

Laman ini berisi saran sidik gangguan untuk isu yang umum ditemui saat mengikuti "Memasang boot9strap (MSET9)", "Memasang boot9strap (MSET9 CLI)", dan "Memasang boot9strap (MSET9 Play Store)". Jika saran dari laman ini tidak menyelesaikan isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan jelaskan isunya, termasuk apa yang sudah dicoba.

## MSET9 (aplikasi / naskah)

:::details Python 3 is not installed

Python masih belum dipasang di komputer Anda. Unduh dari [situs Python](https://www.python.org/downloads/), pencet _installer_ dua kali, dan ikuti sembulan untuk memasang Python. Sesudah Python dipasang, coba lagi.

:::

:::details ModuleNotFoundError: No module named 'pyfatfs'

Modul "pyfatfs" belum dipasang, ini diperlukan MSET9 installer untuk komputer macOS.

1. Buka jendela Terminal baru
2. Ketik `python3 -m pip install pyfatfs`, lalu tekan Enter
3. Mulai lagi dari [Bagian I Langkah 3](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

:::

:::details HOME Menu extdata: Missing!

Mohon nyalakan daya konsol dengan kartu SD disisip, lalu periksa lagi status MSET9.

Jika ini tidak berfungsi, kartu SD Anda perlu diformat:

1. Salin semua isi kartu SD ke komputer
2. Formatkan kartu SD ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Salin balik semua berkas tadi
4. Mulai lagi dari [Bagian I Langkah 7](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

:::

:::details Mii Maker extdata: Missing!

Data Mii Maker tidak ketemu di kartu SD. Mohon nyalakan daya konsol dengan kartu SD disisip, lalu buka Mii Maker, dan periksa lagi status MSET9.

Jika ini tidak berfungsi, kartu SD Anda perlu diformat:

1. Salin semua isi kartu SD ke komputer
2. Formatkan kartu SD ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Salin balik semua berkas tadi
4. Mulai lagi dari [Bagian I Langkah 8](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::details Title database: Not initialized!

Pastikan sudah mengatur ulang _title database_.

- Mohon nyalakan daya konsol dengan kartu SD disisip
- Buka System Settings dan navigasi ke `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([gambar](/images/screenshots/database-reset.jpg))
    - Ini tidak akan menghapus data
- Atur ulang jika diminta, lalu matikan daya konsol dan mulai lagi dari [Bagian I Langkah 14](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

Jika _tidak_ diminta atur ulang, kartu SD Anda perlu diformat:

1. Salin semua isi kartu SD ke komputer
2. Formatkan kartu SD ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Salin balik semua berkas tadi

<!--@include: ./_include/mset9-chorus.md -->

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter
2. Ketik `2` lalu tekan Enter untuk periksa status MSET9
    - Ini akan membuat pangkalan data bonekaan lagi
3. Tutup jendela naskah MSET9
4. Mulai lagi dari [Bagian I Langkah 12](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 01: Couldn't find Nintendo 3DS folder

MSET9 tidak dijalankan dari _root_ (akar) kartu SD, atau tidak ada folder Nintendo 3DS di kartu SD.

Ingat, kartu SD kurang lebih harus begini:

::: info

![](/images/screenshots/mset9/mset9-root-layout.png)

:::

Jika isi kartu SD sudah benar, kemungkinan kartu SD tidak terbaca konsol dan perlu diformat:

1. Salin semua isi kartu SD ke komputer
2. Formatkan kartu SD ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Salin balik semua berkas tadi
4. Mulai lagi dari permulaan [Bagian I](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

::::

:::details Error 02: Your SD is write protected

Perlindungan-tulis kartu SD sedang aktif. Jika menggunakan kartu SD ukuran biasa, pastikan pengunci kartu SD dicetek [ke posisi atas](/images/sdlock.png). Jika tidak, coba keluarkan dan sisip kembali kartu SD.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

Folder ID0 ada lebih dari satu. Untuk tahu folder mana yang benar, ikuti instruksi ini:

1. Ubah nama folder `Nintendo 3DS` menjadi `BACKUP_Nintendo 3DS`
2. Sisip kembali kartu SD ke konsol
3. Nyalakan daya konsol
4. Tunggu konsol membuat data baru kartu SD
    - Aplikasi yang ada akan menghilang. Memang seperti ini dan akan segera diatasi
5. Matikan daya konsol
6. Sisipkan kartu SD ke komputer Anda
7. Navigasi ke folder `Nintendo 3DS` di kartu SD
8. Catat nama folder yang ada
    - Ini ID0 yang benar, cari nama ini di folder `BACKUP_Nintendo 3DS` tadi
9. Hapus folder ID0 dari folder `Nintendo 3DS` yang sekarang
10. Pindahkan folder ID0 yang benar dari folder `BACKUP_Nintendo 3DS` ke folder `Nintendo 3DS`
11. Jika ada, pindahkan juga `Private` dari folder `BACKUP_Nintendo 3DS` ke folder `Nintendo 3DS`

Sesudah ini, lanjut dari [Bagian I Langkah 3](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->

::::

:::details Error 06: You need at least 16MB free

Kartu SD tidak cukup ruang untuk mengaktifkan MSET9. Luangkan penyimpanan dan coba lagi.

Di akhir panduan ini, setidaknya perlu 1.3GB untuk mencadang NAND, jadi usahakan ada sisa ruang sebanyak itu.

:::

:::details Error 07: One or more files are missing or malformed!

Satu atau lebih berkas yang MSET9 perlu jalankan hilang atau rusak. Unduh ulang [`.zip` Release MSET9](https://github.com/hacks-guide/MSET9/releases/latest) dan ekstrak ke akar kartu SD, timpa berkas yang ada, lalu coba lagi.

:::

:::: details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

::::

## MSET9 (eksploit)

:::details Layar merah setelah menyisip kartu SD (Bagian II Langkah 11)

Mungkin belum ada `SafeB9S.bin` di akar kartu SD, atau berkasnya rusak. Salin `SafeB9S.bin` dari `.zip` MSET9, timpa berkas yang ada lalu ikuti instruksi ini untuk menghapus _trigger file_ (berkas pemicu):

1. Matikan paksa daya konsol dengan menahan tombol Power selama 20 detik
2. Sisipkan kartu SD ke komputer Anda

<!--@include: ./_include/mset9-chorus.md -->

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter
    - Terminal seharusnya bertulis [Injected](/images/screenshots/mset9/mset9-injected.png)
    - Jika sudah menghapus _trigger file_ (atau memang belum disuntikkan), terminal akan bertulis [Ready](/images/screenshots/mset9/mset9-ready.png), baru [coba lagi Bagian II](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
2. Ketik `4`, lalu tekan Enter
3. Sesudah bertulis "Removed trigger file", ketik `0` lalu tekan Enter
4. Sisip kembali kartu SD ke konsol
5. Nyalakan daya konsol
6. Kembali ke [Bagian II Langkah 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Atau tidak, kartu SD mungkin diformat atau dipartisi tidak benar. Setelah menghapus _trigger file_, formatkan:

1. Salin semua isi kartu SD ke komputer
2. Formatkan kartu SD ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Salin balik semua berkas tadi
4. Mulai lagi dari [Bagian II Langkah 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details System Settings memuat terus setelah menyisip kembali kartu SD

Bisa jadi karena: salah melakukan instruksi MSET9, salah memilih model/versi, atau kartu SD perlu diformat. Pastikan tidak salah memilih [model](/images/3dsmodels.png) dan versi _firmware_ saat membuka naskah.

Ikuti instruksi ini untuk menghapus _trigger file_ dan coba lagi Bagian II:

1. Matikan paksa daya konsol dengan menahan tombol Power selama 20 detik
2. Sisipkan kartu SD ke komputer Anda

<!--@include: ./_include/mset9-chorus.md -->

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter
    - Terminal seharusnya bertulis [Injected](/images/screenshots/mset9/mset9-injected.png)
    - Jika sudah menghapus _trigger file_ (atau memang belum disuntikkan), terminal akan bertulis [Ready](/images/screenshots/mset9/mset9-ready.png), baru coba lagi Bagian II
2. Ketik `4`, lalu tekan Enter
3. Sesudah bertulis "Removed trigger file", ketik `0` lalu tekan Enter
4. Sisip kembali kartu SD ke konsol
5. Nyalakan daya konsol
6. Kembali ke [Bagian II Langkah 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Jika masih ada isu dan yakin sudah melakukan semua dengan benar, pastikan _trigger file_ dihapus dan formatkan kartu SD:

1. Salin semua isi kartu SD ke komputer
2. Formatkan kartu SD ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)))
3. Salin balik semua berkas tadi
4. Mulai lagi dari [Bagian II Langkah 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details "An exception occurred" setelah MSET9 aktif

Ini mungkin menandakan sudah ada _custom firmware_. Coba [periksa CFW](checking-for-cfw).

:::

## Isu dengan SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Kembali ke [Memasang boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\))

:::

::: tip

Kembali ke [Memasang boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\))

:::

<!--@include: ./_include/troubleshooting-return.md -->


