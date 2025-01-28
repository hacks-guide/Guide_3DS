# Region Changing

## Bacaan Penting

This is an add-on section for region changing your console. This is done by installing the 11.15.0 CTRTransfer image for the region you want to switch to. After installing the image, you can update your console normally to the latest firmware (11.17.0).

Note that region changing is almost completely unnecessary since Luma3DS supports out-of-region games and individual title [Locale Emulation](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features). Additionally, running NDS games with alternative out-of-region languages is supported by [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). You should only perform a region change if you wish to have your system UI is in a language that is not available on your console's current region.

::: info

Konsol harus sudah ada Luma3DS dan boot9strap untuk laman ini. Jika sudah mengikuti panduan sampai "Penyiapan Akhir", berarti sudah ada Luma3DS dan boot9strap.

:::

::: warning

Untuk proses bagian ini, pengaturan sistem akan dikembalikan ke bawaan. Ini mencakup nama pengguna, negara, dan bahasa. **Tidak memengaruhi permainan terpasang dan simpanannya.**

:::

::: danger

If you change the region of your console:

- You will not be able to use your NNID (if you have one). NNIDs are locked to the region that they were created in.
- You may not be able to access the eShop, even if you [delete your eShop account](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) beforehand. This is because certain titles tend to remain linked to the 3DS, even after account deletion (especially on New 3DS).
  - This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. Updates may provide extra content or fix bugs.
  - This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
  - Pokémon Bank also requires working eShop access.
  - That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
- **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.

:::

## Apa yang Perlu

- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)
- Versi terkini dari [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (unduhan langsung)
- Versi terkini dari [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(yang berkas `.3dsx`)_
- Versi terkini dari [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (pencet kanan lalu _save link as_; simpan tautan)
- Klien torrent seperti [qBittorrent](https://www.qbittorrent.org/download.php) atau [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - Jika sudah punya klien torrent, tidak perlu unduh klien baru lagi
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)

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
