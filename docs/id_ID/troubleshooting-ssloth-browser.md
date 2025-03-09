# Sidik Gangguan (SSLoth-Browser)

Laman ini berisi saran sidik gangguan untuk isu yang umum ditemui saat mengikuti "Memasang boot9strap (SSLoth-Browser)" untuk konsol di versi sistem 11.4.0 sampai 11.13.0. Jika saran dari laman ini tidak menyelesaikan isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan jelaskan isunya, termasuk apa yang sudah dicoba.

::: warning

Instruksi ini hanya berlaku jika mengikuti laman "Memasang boot9strap (SSLoth-Browser)". Jika punya konsol **New 3DS** di versi **11.15.0 sampai 11.17.0**, maka ikuti saja [instruksi sidik gangguan Memasang boot9strap (super-skaterhax)](troubleshooting-super-skaterhax).

:::

## SSLoth-Browser

:::details Layar merah/ungu/merah muda putih setelah membuka Browserhax

Ini mungkin menandakan sudah ada _custom firmware_. Coba [periksa CFW](checking-for-cfw).

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..." (layar hitam dengan teks)

Berkas `arm11code.bin` belum ada atau salah taruh. Unduh versi terkini dari [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), lalu taruh `otherapp.bin` di akar kartu SD dan ubah nama menjadi `arm11code.bin`. Jangan tambah ekstensi `.bin` jika tidak terlihat di ujung.

:::

:::details "An error has occurred, forcing the software to close..." (kotak pesan putih)

Berkas `otherapp.bin` mungkin bermasalah. Unduh versi terkini dari [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), lalu taruh `otherapp.bin` di akar kartu SD dan ubah nama menjadi `arm11code.bin`. Jangan tambah ekstensi `.bin` jika tidak terlihat di ujung.

Bisa juga coba atur ulang data simpanan Browser:

1. Buka Browser, lalu buka pengaturan Browser
2. Gulir ke bawah dan pilih "Reset Save Data" (bisa jadi disebut "Initialize Save Data" atau "Clear All Save Data")
3. Coba ulang eksploit

:::

:::details Mogok saat membuka kode QR browserhax atau URL

Eksploit berjenis-Browser (seperti yang ini) suka tidak stabil dan mogok, tapi terkadang bisa diperbaiki dengan langkah-langkah berikut.

1. Buka Browser, lalu buka pengaturan Browser
2. Gulir ke bawah dan pilih "Reset Save Data" (bisa jadi disebut "Initialize Save Data" atau "Clear All Save Data")
3. Coba ulang eksploit

:::

:::details Muncul System Update saat membuka Browser

Pewali atau Proxy SSLoth disetel kurang benar. Coba lagi instruksi bagian SSLoth.

:::

:::details Error 032-0420 saat membuka Browser

Ikuti langkah ini berurutan:

1. Buka System Settings di konsol
2. Navigasi ke `Internet Settings` -> `Connection Settings`
3. Pilih slot sambungan jejaring yang ada dan navigasi ke `Change Settings` -> `Next Page (panah kanan)` -> `Proxy Settings`
4. Atur "Proxy Settings" ke "No"
5. Pencet OK, lalu pencet Save
6. Saat diminta, pencet "Test" untuk menguji sambungan
    - Pengujiannya harus berhasil
7. Pencet "OK" untuk lanjut
8. Tekan "Back" dua kali, lalu "Close" untuk kembali ke HOME Menu
9. Buka Internet Browser satu kali
10. Jika diminta memperbarui sistem, tekan OK
    - Ini sebenarnya tidak memperbarui sistem
11. Mulai lagi dari [Bagian II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Macet saat "Doing agbhax..."

Berkas `otherapp.bin` mungkin bermasalah. Unduh ulang versi terkini dari [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), taruh di akar kartu SD lalu ubah nama menjadi `arm11code.bin`. Jangan tambah ekstensi `.bin` jika tidak terlihat di ujung.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan.

:::

:::details Failed to mount the SD card!

**Cadangkan dulu data**, lalu format ulang kartu SD ke FAT32 dengan alat anjuran yang sesuai sistem operasi ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). MiniTool Partition Wizard dan alat format merek HP (HPUSBDisk) diketahui ada isu dengan kartu SD 3DS.

Jika ini tidak berhasil, coba kartu SD lain.

:::

## Isu dengan SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Kembali ke [Memasang boot9strap (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
