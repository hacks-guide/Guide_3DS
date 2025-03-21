---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-frankenfirm-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Sidik Gangguan (Soundhax)

Laman ini berisi saran sidik gangguan untuk isu yang umum ditemui saat mengikuti "Memasang boot9strap (Soundhax)" untuk konsol di versi sistem 1.0.0 sampai 11.3.0. Jika saran dari laman ini tidak menyelesaikan isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan jelaskan isunya, termasuk apa yang sudah dicoba.

## Isu dengan Soundhax

:::details Layar merah/ungu/merah muda putih setelah membuka Soundhax

Jika konsol ada di sistem versi 9.4.0, 9.5.0, atau 9.6.0, mungkin ada _bug_ (kutu) pada versi lama universal-otherapp. Unduh versi terkini [dari sini](https://github.com/TuxSH/universal-otherapp/releases/latest).

Jika konsol tidak di _firmware_ tersebut, mungkin konsol sudah ada _custom firmware_. Coba [periksa CFW](checking-for-cfw).

:::

:::details "An error has occurred, forcing the software to close..." (kotak pesan putih)

Ada yang salah dengan `otherapp.bin` (bisa jadi hilang, salah taruh, atau rusak). Unduh versi terkini dari [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), lalu taruh di akar kartu SD.

Soundhax yang ditaruh mungkin tidak sesuai versi, daerah, dan jenis konsol. Pastikan sesuai ciri-ciri konsol dan unduh ulang berkas Soundhax [dari sini](http://soundhax.com), lalu taruh di akar kartu SD, timpa berkas yang ada.

Jika cara di atas tidak memperbaiki isu, dan punya konsol Old 3DS (XL/LL) atau Old 2DS, mungkin isunya di pembaruan dari kartrid. Coba lihat lagi versi konsol. Jika angka sebelum huruf itu 4 ke bawah (misal: 11.3.0-_**4**_U), ganti berkas Soundhax di akar kartu SD dengan [berkas ini](http://soundhax.686178.xyz/frankenfirm.html?crash).

Jika cara tadi tidak memperbaiki isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan.

:::

:::details "Could not play"

Soundhax yang ditaruh tidak sesuai versi, daerah, dan jenis konsol. Pastikan sesuai ciri-ciri konsol dan unduh ulang berkas Soundhax [dari sini](http://soundhax.com), lalu taruh di akar kartu SD, timpa berkas yang ada.

Jika cara di atas tidak memperbaiki isu, dan punya konsol Old 3DS (XL/LL) atau Old 2DS, mungkin isunya di pembaruan dari kartrid. Coba lihat lagi versi konsol. Jika angka sebelum huruf itu 3 ke bawah (misal: 11.3.0-_**0**_U), ganti berkas Soundhax di akar kartu SD dengan [berkas ini](http://soundhax.686178.xyz/frankenfirm.html?unplayable).

Jika cara tadi tidak memperbaiki isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan.

:::

:::details Failed to mount the SD card!

Jika ini tidak berhasil, coba kartu SD lain.

:::

## Isu dengan SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Kembali ke [Memasang boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
