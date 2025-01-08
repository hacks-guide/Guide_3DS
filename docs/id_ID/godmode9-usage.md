# Penggunaan GodMode9

::: info

Untuk informasi men-_dump_ data kartrid atau kartu SD, lihat [Membuat Dump Permainan dan Kartrid](dumping-titles-and-game-cartridges).

:::

::: info

Untuk bantuan berbahasa Inggris terkait GodMode9 dan tentang membuat naskah, pembaruan, dan info; gabung ke [Discord GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Bacaan Penting

GodMode9 adalah penelusur berkas berakses penuh untuk Nintendo 3DS, mampu mengakses kartu SD, partisi FAT di dalam SysNAND dan EmuNAND, dan segala lainnya. Selain itu bisa juga menyalin, menghapus, ubah nama berkas, dan membuat folder.

Perlu diingat jika ada _payload_ selain `GodMode9.firm` dalam folder `/luma/payloads/` di kartu SD, menahan (Start) saat awal nyala akan ke "chainloader menu" dan hanya bisa Tombol Arah dan (A) untuk memilih "GodMode9" pada instruksi ini.

GodMode9 adalah peranti lunak penuh daya yang mampu memodif apa pun pada konsol. Tapi, banyak dari modifikasi ini terkunci di balik sistem izin sehingga mustahil tidak sengaja berbuat berbahaya, kecuali jika sebelumnya _sengaja_ membuka izin sistem. Jadi tetaplah teliti mengikuti instruksi dan **sering-sering membuat cadangan**.

## Memperbarui GodMode9

::: info

Beberapa instruksi di bawah ini hanya berlaku pada GodMode9 versi terkini, maka bagian memperbarui ini harus diikuti sebelum ke instruksi lain. Timpa juga berkas yang ada.

:::

### Apa yang Perlu

- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)

### Instruksi

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `GodMode9.firm` dari `.zip` GodMode9 ke folder `/luma/payloads/` di kartu SD
4. Salin folder `gm9` dari `.zip` GodMode9 ke akar kartu SD
5. Sisip kembali kartu SD ke konsol

::: tip

GodMode9 sekarang mutakhir.

:::

## Membuat Cadangan NAND

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Cadangan NAND sudah berhasil dibuat.

:::

## Memulihkan Cadangan NAND

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `<date>_<serialnumber>_sysnand_##.bin` dari komputer Anda ke folder `/gm9/out/` di kartu SD
4. Sisip kembali kartu SD ke konsol
5. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
6. Tekan (Home) untuk membuka menu tindakan
7. Pilih "Scripts..."
8. Pilih "GM9Megascript"
9. Pilih "Restore Options"
10. Pilih "SysNAND Restore (safe)"
11. Pilih cadangan NAND
12. Tekan (A) untuk membuka izin tulis SysNAND (lvl3), lalu tekan kombo yang diberikan
    - Ini **tidak akan** menghapus boot9strap di konsol
    - Proses ini akan lumayan lama
13. Tekan (A) untuk lanjut
14. Tekan (B) untuk kembali ke menu utama
15. Pilih "Exit"
16. Press (A) to relock write permissions if prompted

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Note that it is not possible to inject files into Health & Safety that are larger than it (including games and other large applications)

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[0:] SDCARD` -> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
10. Tekan (A) untuk lanjut
11. Press (A) to relock write permissions if prompted

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

This will only work if the Health & Safety injection was performed by GodMode9 (not Decrypt9 or Hourglass9).

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Tekan (Home) untuk membuka menu tindakan
3. Select "More..."
4. Select "Restore H&S"
5. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
6. Press (A) to relock write permissions if prompted

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**Note that this will erase the contents of your SD card!**

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
   - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Your SD card has successfully been formatted for use with the console.

:::

## Removing an NNID without formatting your console

::: info

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Tekan (Home) untuk membuka menu tindakan
3. Pilih "Scripts..."
4. Pilih "GM9Megascript"
5. Select "Scripts from Plailect's Guide"
6. Select "Remove NNID"
7. Tekan (A) untuk lanjut
8. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
9. Tekan (A) untuk lanjut
10. Tekan (B) untuk kembali ke menu utama
11. Pilih "Exit"
12. Press (A) to relock write permissions if prompted
13. Tekan (Start) untuk nyalakan ulang konsol

::: tip

You have now been logged out of your NNID.

:::
