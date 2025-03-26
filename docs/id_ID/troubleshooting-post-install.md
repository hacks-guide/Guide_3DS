# Sidik Gangguan (Setelah Pasang)

Laman ini berisi saran sidik gangguan untuk isu yang umum ditemui setelah _custom firmware_ dipasang. Jika saran dari laman ini tidak menyelesaikan isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan jelaskan isunya, termasuk apa yang sudah dicoba.

## Isu awal nyala

::: info

Konsol harus sudah terpasang CFW modern (boot9strap + Luma3DS 8.0 ke atas) untuk langkah di sini. Jika konsol terpasang CFW lawas (contoh, yang berjenis arm9loaderhax atau menuhax), maka perbarui dulu penyiapan CFW konsol sebelum mencoba instruksi ini.

:::

### Lampu LED daya/pemberitahuan

:::details Konsol selalu mati daya saat dinyalakan, dan/atau muncul LED pemberitahuan saat menyala

Ada yang salah dengan berkas `boot.firm`. Jika masih di [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), LED pemberitahuan 3DS mungkin berkelip warna tertentu. Warna ini untuk memberi tahu masalah terkait `boot.firm` di kartu SD atau memori internal. Pada versi lama dari boot9strap, lampu biru akan mati hampir seketika saat mencoba menyalakan konsol.

Jika LED pemberitahuan berkelip:

- **Putih**: 3DS tidak ketemu `boot.firm` di kartu SD atau memori internal.
- **Magenta**: 3DS tidak ketemu `boot.firm` di kartu SD. Masih ketemu `boot.firm` di memori internal, tapi berkasnya rusak.
- **Merah**: 3DS ketemu `boot.firm` di kartu SD dan memori internal, tapi kedua berkasnya rusak.<br>**Jingga**: 3DS ketemu `boot.firm` rusak di kartu SD, tapi `boot.firm` masih aman di memori internal.<br>**Kuning**: 3DS tidak ketemu `boot.firm` di kartu SD, tapi `boot.firm` masih aman di memori internal.<br>**Hijau**: 3DS ketemu `boot.firm` di kartu SD dan memori internal, dan kedua berkasnya aman.

Untuk mengganti baru berkas `boot.firm`; [unduh versi terkini dari Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), diekstrak, lalu taruh `boot.firm` di akar kartu SD. Jika berkas `boot.firm` selalu terdeteksi rusak, coba periksa galat di kartu SD ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), atau [macOS](f3xswift-\(mac\))). Perlu diingat, 3DS sering ada isu dengan berkas yang diekstrak WinRAR.

Jika terdengar "bunyi letup", dan mungkin juga cahaya belakang layar menyala per sekian detik, berarti ada isu dengan fisik konsol (seperti kabel _backlight_ longgar). Coba nyalakan konsol tapi dipegang di kemiringan tertentu.

:::

:::details Konsol tersangkut di layar hitam tapi lampu LED biru menyala terus

Langkah di bawah ini bisa dicoba dari urutan mana saja, diurutkan dari instruksi tercepat ke terlama.

1. Matikan daya konsol, lepas kartu SD, sisip kembali, lalu nyalakan ulang konsol.
2. Matikan daya konsol, keluarkan kartrid jika ada, nyalakan daya konsol, lalu tunggu sepuluh menit. Jika konsol menyala dalam kurun 10 menit, berarti isu sudah diperbaiki dan tidak akan terulang
3. Ubah nama folder `Nintendo 3DS` di kartu SD menjadi `Nintendo 3DS_BACKUP`, lalu coba nyalakan. Jika konsol berhasil menyala biasa, berarti ada yang salah dengan folder `Nintendo 3DS`. Coba hapus extdata HOME Menu:
    - Navigasi ke `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
    - Hapus satu folder sesuai daerah konsol 3DS:
        - **Daerah EUR**: `00000098`
        - **Daerah JPN**: `00000082`
        - **Daerah USA**: `0000008f`
        - **Daerah CHN**: `000000A1`
        - **Daerah KOR**: `000000A9`
        - **Daerah TWN**: `000000B1`
4. Coba masuk ke Recovery Mode dan perbarui konsol:
    - Matikan daya konsol
    - Tahan (L) + (R) + (Tombol Atas) + (A)
    - Nyalakan daya konsol
    - Jika berhasil, konsol akan menyala ke layar "update your system"
5. Ikuti panduan [CTRTransfer](ctrtransfer)
6. Untuk bantuan lebih lanjut, minta di [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

### Pesan galat di awal nyala

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" atau "An exception has occurred -- Current process: pm"

Versi Luma3DS sudah usang. Unduh versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) dan taruh `boot.firm` di akar kartu SD, timpa berkas yang ada. Pastikan mengekstrak ZIP dengan alat apa pun _selain_ WinRAR, karena bermasalah dengan berkas untuk 3DS.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

Ada beberapa alasan kenapa ini bisa terjadi. Apa pun itu, galat ini biasanya bisa diperbaiki dengan panduan [CTRTransfer](ctrtransfer).

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..."

Penangan pengecualian ARM11 dinonaktifkan, atau belum ada _custom firmware_. Coba aktifkan penangan pengecualian ARM11:

- Matikan daya konsol
- Tahan (SELECT)
- Nyalakan daya konsol selagi menahan (SELECT)
- Jika "Disable ARM11 exception handlers" dicentang, lepas centangnya

:::

:::details Aplikasi terpasang menghilang di HOME Menu

Ini bisa disebabkan dari banyak hal, tapi ini bisa jadi karena kartu SD tidak terbaca konsol.
Kartu SD bisa diperiksa apakah terbaca dengan menahan SELECT di awal nyala dan lihat teks kuning di layar bawah; jika bertulis "Booted from CTRNAND via B9S", berarti konsol di-_boot_ dari memori internal dan bukan kartu SD.
Jika seperti itu, coba langkah di bawah ini; diurut dari yang termudah ke tersusah:

1. Matikan daya konsol, lepas kartu SD, sisip kembali, lalu nyalakan ulang konsol
2. Matikan daya konsol, lepas kartu SD, sisipkan ke komputer Anda, unduh versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), lalu ekstrak `boot.firm` dari `Luma3DS.zip` dan taruh di akar kartu SD (timpa berkas yang ada)
3. Matikan daya konsol, lepas kartu SD, sisipkan ke komputer Anda dan format ulang kartu SD sesuai OS komputer: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(ini akan mengosongkan data kartu SD)_
4. Uji kegalatan di kartu SD dengan mengikuti panduan sesuai OS komputer: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). Jika kartu SD disebut "faulty", berarti harus mengganti kartu SD
5. Slot kartu SD mungkin rusak. Gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan lanjut

:::

:::details Layar biru "BOOTROM ERROR"

Konsol kemungkinan matot fisik (_hard-brick_). Berarti harus beli _flashcart_ ntrboot untuk memasang ulang boot9strap dan memperbaiki konsol. Mungkin ini bisa juga rusak fisik tak bisa diperbaiki. Apa pun itu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan.

- Ini bisa jadi hanya layar _splash_ awal nyala yang sengaja diatur seperti kena matot (_brick_). Coba biarkan konsol menyala lima menit, tunggu _splash_ layar biru selesai.

:::

:::details Untuk galat lain

Coba fotokan galatnya dan gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan.

:::

## Isu peranti lunak pada konsol dengan CFW

:::details Konsol DSi / DS tidak berfungsi atau malah muncul Flipnote Studio

1. Unduh versi terkini dari [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (yang berkas `.3dsx`)
2. Matikan daya konsol
3. Buat folder dengan nama `3ds` di akar kartu SD jika belum ada
4. Salin `TWLFix-CFW.3dsx` ke folder `/3ds/` di kartu SD
5. Sisip kembali kartu SD ke konsol
6. Buka Homebrew Launcher
7. Buka TWLFix-CFW dari Homebrew Launcher
8. Tekan (A) untuk mencopot apli TWL yang rusak
9. Tekan (Start) untuk nyalakan ulang konsol
10. Perbarui konsol dengan ke System Settings, ke "Other Settings", lalu ke kanan sampai pojok dan pilih "System Update"
    - Pembaruan ini akan mencari TWL esensial yang copot, lalu mengunduh dan memasangnya ulang
11. Selesai memperbarui, sentuh "OK" untuk nyalakan ulang konsol

:::

:::details GBA Virtual Console dan/atau Safe Mode tidak berfungsi

Konsol ada di Luma3DS 6.6 ke bawah, mungkin dengan arm9loaderhax. Ikuti laman [Dari A9LH ke B9S](a9lh-to-b9s) untuk memperbarui konsol ke penyiapan CFW modern.

:::

:::details Permainan mode memori perluasan (Pokemon Sun/Moon, Smash, dll.) tidak berfungsi

Ini bisa terjadi setelah CTRTransfer atau mengubah daerah Old 3DS / 2DS. Ikuti [instruksi ini](region-changing#section-vi---fixing-locale-related-issues) untuk memperbaiki isu ini (lewati saja langkah 3, 4, 5, dan 6).

:::

:::details Ada galat pengecualian saat memuat/buka aplikasi

Cari maksud layar pengecualian di [laman ini](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Jika tidak ketemu maksud galat atau instruksi tidak berhasil, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan lanjut.

:::

:::details Konsolnya mogok saat membuka pengaturan HOME Menu atau ke Homebrew Launcher

Konsol kemungkinan masih terpasang menuhax67. Untuk mencopot menuhax67, unduh versi terkini dari [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (yang `.zip` menuhax), lalu ikuti [bagian "Uninstall menuhax67" ini](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67).

:::

:::details Untuk hal lain

Gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan, dan jelaskan isu yang muncul.

:::

## Sidik gangguan yang lain

:::details Menghapus extdata HOME Menu

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Navigasi ke folder `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` di kartu SD
4. Hapus satu folder sesuai daerah konsol 3DS:
    - **Daerah EUR**: `00000098`
    - **Daerah JPN**: `00000082`
    - **Daerah USA**: `0000008f`
    - **Daerah CHN**: `000000A1`
    - **Daerah KOR**: `000000A9`
    - **Daerah TWN**: `000000B1`
5. Sisip kembali kartu SD ke konsol

:::

:::details Menghapus data tema HOME Menu

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Navigasi ke folder `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` di kartu SD
4. Hapus satu folder sesuai daerah konsol 3DS:
    - **Daerah EUR**: `000002ce`
    - **Daerah JPN**: `000002cc`
    - **Daerah USA**: `000002cd`
    - **Daerah KOR**: `000002cf`
5. Sisip kembali kartu SD ke konsol

:::

:::details Urus sendiri masuk ke Homebrew Launcher

Jika Homebrew Launcher menghilang dari HOME Menu, ikuti instruksi ini untuk urus sendiri masuk ke Homebrew Launcher. (Perlu berkas [boot.3dsx dan boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) di akar kartu SD.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details Menonaktifkan Parental Controls

Fitur Parental Controls bisa dinonaktifkan dengan ke `System Settings` -> `Parental Controls` lalu ketik PIN, dan tekan "Clear Settings", lalu "Delete" untuk hapus.
Namun, jika tidak tahu kode PIN sehingga tidak bisa ke pengaturan konsol, berarti harus dinonaktifkan. Untuk melakukan ini, perlu kunci induk (mkey) dari konsol:

1. Buka [situs ini](https://mkey.eiphax.tech/)
2. Isi kotak kolom seperti berikut:
    - Device Type: Pilih "3DS" (untuk konsol 3DS (XL/LL), 2DS, New 3DS (XL/LL), atau New 2DS XL/LL)
    - System Date: Bulan dan hari yang diatur di konsol
    - Inquiry Number: Bisa didapat dengan menekan "Forgot PIN" lalu "I Forgot" di layar Parental Controls
3. Setelah mendapatkan mkey, tekan OK di layar Inquiry Number, lalu masukkan _master key_ (mkey) di 3DS
4. Tekan "Clear Settings", lalu "Delete" untuk menghapus semua data Parental Controls

:::

---

<!--@include: ./_include/troubleshooting-return.md -->

