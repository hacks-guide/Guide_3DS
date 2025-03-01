---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-frankenfirm-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Troubleshooting (Soundhax)

Laman ini berisi saran sidik gangguan untuk isu yang umum ditemui saat mengikuti "Memasang boot9strap (Soundhax)" untuk konsol di versi sistem 1.0.0 sampai 11.3.0. Jika saran dari laman ini tidak bisa menyelesaikan isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan jelaskan isunya, termasuk apa yang sudah dicoba.

## Issues with Soundhax

:::details Red/purple/pink and white screen after running Soundhax

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

If your console is not on those firmwares, it likely indicates that you already have custom firmware. Coba [periksa CFW](checking-for-cfw).

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

Ada yang salah dengan `otherapp.bin` (bisa jadi hilang, salah taruh, atau rusak). Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) and place it on the root of your SD card.

Soundhax yang ditaruh mungkin tidak sesuai versi, daerah, dan jenis konsol. Pastikan rincian konsol sudah sesuai dan unduh ulang berkas Soundhax [dari sini](http://soundhax.com), lalu taruh di akar kartu SD, timpa berkas yang ada.

If the above doesn't fix your issue, and you are using an Old 3DS / Old 3DS XL / Old 2DS, you may be encountering an issue involving cartridge updates. Take another look at the system version. Jika angka sebelum huruf itu 4 ke bawah (misal: 11.3.0-_**4**_U), ganti berkas Soundhax di akar kartu SD dengan [berkas ini](http://soundhax.686178.xyz/frankenfirm.html?crash).

If none of these fix your issue, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details "Could not play"

You have the wrong Soundhax file for your console, region and version. Pastikan rincian konsol sudah sesuai dan unduh ulang berkas Soundhax [dari sini](http://soundhax.com), lalu taruh di akar kartu SD, timpa berkas yang ada.

If the above doesn't fix your issue, and you are using an Old 3DS / Old 3DS XL / Old 2DS, you may be encountering an issue involving cartridge updates. Take another look at the system version. Jika angka sebelum huruf itu 3 ke bawah (misal: 11.3.0-_**0**_U), ganti berkas Soundhax di akar kartu SD dengan [berkas ini](http://soundhax.686178.xyz/frankenfirm.html?unplayable).

If none of these fix your issue, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details Failed to mount the SD card!

If this is unsuccessful, try using another SD card.

:::

## Isu dengan SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
