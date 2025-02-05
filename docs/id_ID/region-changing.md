# Mengubah Daerah

## Bacaan Penting

Ini adalah laman lebihan untuk mengubah daerah konsol. Caranya dengan memasang citra CTRTransfer 11.15.0 sesuai daerah yang ingin diganti. Setelah memasang citra, konsol bisa diperbarui seperti biasa ke _firmware_ terkini (11.17.0).

Mohon diingat, mengubah daerah hampir sama sekali tidak perlu karena Luma3DS mendukung permainan luar-daerah dan [emulasi daerah tiap apli] (https://github.com/LumaTeam/Luma3DS/wiki/Optional-features). Malah, permainan NDS dengan bahasa luar-daerah bisa dijalankan [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). Mengubah daerah hanya boleh dilakukan jika tidak mengerti bahasa antarmuka yang ada di sistem konsol.

::: info

Konsol harus sudah ada Luma3DS dan boot9strap untuk laman ini. Jika sudah mengikuti panduan sampai "Penyiapan Akhir", Luma3DS dan boot9strap sudah ada.

:::

::: warning

Untuk proses bagian ini, pengaturan sistem akan diatur ulang ke bawaan. Ini termasuk nama pengguna, negara, dan bahasa. **Tidak memengaruhi permainan terpasang dan simpanannya.**

:::

::: danger

Jika daerah konsol diubah:

- NNID Anda tidak akan bisa digunakan (jika ada). NNID dikunci sesuai daerah konsol tempat akun dibuat.
- Akses ke eShop juga mungkin tidak bisa, bahkan jika sebelumnya sudah [menghapus akun eShop](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account). Ini karena aplikasi tertentu cenderung tetap tertaut ke 3DS, bahkan setelah hapus akun (khususnya di New 3DS).
  - Ini masih perlu karena walaupun sudah tidak bisa membeli di eShop tapi **masih bisa memperbarui permainan**. Pembaruan akan ada perbaikan kutu / konten tambahan.
  - Begitu pun untuk System Transfer, berarti tidak bisa transfer sistem beda daerah, misal: dari konsol 3DS JPN-terubah-USA ke 3DS USA asli.
  - Pokémon Bank juga perlu akses ke eShop.
  - Dan juga, transfer sistem dan pembaruan permainan itu terkunci-daerah (misal: eShop Jepang hanya punya pembaruan Jepang).
- **Mencopot _custom firmware_ berkemungkinan konsol menjadi matot!** Jika berniat mencopot _custom firmware_, berarti **HARUS** memulihkan dulu cadangan NAND **yang** dibuat sebelum mengubah daerah.

:::

## Apa yang Perlu

- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)
- Versi terkini dari [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (unduhan langsung)
- Versi terkini dari [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(yang berkas `.3dsx`)_
- Versi terkini dari [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (pencet kanan lalu _save link as_; simpan tautan)
- Klien torrent seperti [qBittorrent](https://www.qbittorrent.org/download.php) atau [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - Jika sudah punya klien torrent, tidak perlu unduh klien baru lagi
- Berkas citra 11.15.0 CTRTransfer daerah lain **sesuai jenis konsol Anda** (misal: Unduh "New 3DS or 2DS - USA" jika punya konsol jenis New 3DS dan ingin diubah ke daerah USA)

<!--@include: ./_include/ctrtransfer-images.md -->

## Instruksi

### Bagian I - Persiapan

<!--@include: ./_include/ctrtransfer-prep.md -->

### Bagian II - Mencadang NAND

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9

<!--@include: ./_include/nand-backup.md -->

### Bagian III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Bagian IV - Membuka FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Bagian V - Memasang ulang Ticket

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Bagian VI - Memperbaiki isu daerah konsol

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

Daerah konsol 3DS sekarang sudah diubah!

:::
