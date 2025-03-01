# Sidik Gangguan (SSLoth-Browser)

Laman ini berisi saran sidik gangguan untuk isu yang umum ditemui saat mengikuti "Memasang boot9strap (SSLoth-Browser)" untuk konsol di versi sistem 11.4.0 sampai 11.13.0. Jika saran dari laman ini tidak bisa menyelesaikan isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan jelaskan isunya, termasuk apa yang sudah dicoba.

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

:::details "An error has occurred, forcing the software to close..." (white message box)

Ada masalah dengan berkas `otherapp.bin` Anda. Unduh versi terkini dari [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), lalu taruh `otherapp.bin` di akar kartu SD dan ubah nama menjadi `arm11code.bin`. Jangan tambah ekstensi `.bin` jika tidak terlihat di ujung.

Bisa juga coba atur ulang data simpanan Browser:

1. Buka Browser, lalu buka pengaturan Browser
2. Gulir ke bawah dan pilih "Reset Save Data" (bisa jadi disebut "Initialize Save Data" atau "Clear All Save Data")
3. Coba ulang eksploit

:::

:::details Opening the browserhax QR code or URL crashes

Browser based exploits (such as this one) are often unstable and crash frequently, but they can sometimes be fixed by doing the following steps.

1. Buka Browser, lalu buka pengaturan Browser
2. Gulir ke bawah dan pilih "Reset Save Data" (bisa jadi disebut "Initialize Save Data" atau "Clear All Save Data")
3. Coba ulang eksploit

:::

:::details System Update prompt when opening browser

The SSLoth proxy was incorrectly configured. Re-do the SSLoth section on the page.

:::

:::details Error 032-0420 when opening browser

Follow these steps in order:

1. Buka System Settings di konsol
2. Navigasi ke `Internet Settings` -> `Connection Settings`
3. Pilih slot sambungan jejaring yang ada dan navigasi ke `Change Settings` -> `Next Page (panah kanan)` -> `Proxy Settings`
4. Atur "Proxy Settings" ke "No"
5. Pencet OK, lalu pencet Save
6. Saat diminta, pencet "Test" untuk menguji sambungan
    - Pengujiannya harus berhasil
7. Pencet "OK" untuk lanjut
8. Tekan "Back" dua kali, lalu "Close" untuk kembali ke HOME Menu
9. Open the Internet Browser once
10. If prompted about a system update, press OK
    - This won't actually update the system
11. Start again from [Section II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Frozen on "Doing agbhax..."

Ada masalah dengan berkas `otherapp.bin` Anda. Re-download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place it on the root of your SD card, and rename it to `arm11code.bin`. Jangan tambah ekstensi `.bin` jika tidak terlihat di ujung.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details Failed to mount the SD card!

Back up your data and reformat your SD card as FAT32 with the recommended tool depending on your operating system ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). MiniTool Partition Wizard and the HP formatting tool (HPUSBDisk) are known to cause issues with 3DS SD cards.

If this is unsuccessful, try using another SD card.

:::

## Isu dengan SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
