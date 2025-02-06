# Mencopot CFW

## Bacaan Penting

Ini akan sepenuhnya menghapus CFW dari konsol, termasuk boot9Strap dan Luma3DS, untuk mengembalikan konsol ke versi bawaan.

Semua permainan tak bertanda (tidak sah) akan hilang fungsi dan dihapus selama proses ini. Gunakan [pengelola simpanan](https://github.com/FlagBrew/Checkpoint/releases/latest) untuk mencadang data simpanan.

::: danger

Jika berniat mencopot CFW karena:

- Ingin memasang ulang
- Ingin mengganti kartu SD
- Kartu SD-nya hilang atau rusak
- Ada permainan yang kacau
- Ada aplikasi sistem yang kacau
- Konsol tidak bisa di-_boot_ ke HOME Menu

<u>JANGAN!!!!</u> Mencopot _custom firmware_ hanya menambah risiko tidak penting atau parahnya <u>**KONSOL BISA MATOT**</u> (_brick_). Sebaiknya minta bantuan di [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

::: danger

Jika sudah melakukan HAL-HAL berikut:

- [Mengubah daerah](region-changing) sistem konsol
- Memasang papan ketik kustom
- Memasang HOME Menu kustom (_bukan_ tema kustom)
- Mengubah kunci enkripsi (`movable.sed`) konsol secara manual
- Melepas cekal konsol

berarti mencopot CFW <u>**AKAN MEMBUAT MATOT KONSOL**</u>. Jika memang perlu, [pulihkan dulu cadangan NAND bersih](godmode9-usage#restoring-a-nand-backup) sebelum lanjut.

:::

::: warning

Instruksi ini hanya akan berfungsi pada konsol dengan Luma3DS versi 8.0 ke atas. Jika masih di Luma versi lawas, perbarui dulu CFW sebelum mengikuti instruksi ini. Ikuti [laman ini](checking-for-cfw) untuk instruksi pembaruan sesuai versi.

:::

## Apa yang Perlu

- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)
- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)
- Versi terkini dari [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Instruksi

### Bagian I - Persiapan

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin semua isi berkas `.zip` Luma3DS ke akar kartu SD
4. Salin `GodMode9.firm` dari `.zip` GodMode9 ke folder `/luma/payloads/` di kartu SD
5. Salin folder `gm9` dari `.zip` GodMode9 ke akar kartu SD
6. Salin `DSiWareUninstaller.3dsx` ke folder `/3ds/` di kartu SD
7. Salin `safety_test.gm9` ke folder `/gm9/scripts/` di kartu SD
8. Sisip kembali kartu SD ke konsol

### Bagian II - Menguji Mode DS

Tujuan dari bagian ini untuk memeriksa apakah aplikasi mode DS tertanam akan tetap berfungsi sesudah CFW dicopot. Jika bagian ini dilewati, fungsi mode DS tidak akan bisa diakses sampai CFW dipasang lagi.

#### Uji DS Connection Settings

1. Nyalakan daya konsol
2. Buka System Settings di konsol
3. Navigasi ke `Internet Settings` -> `Nintendo DS Connection Settings`, lalu sentuh OK
4. Seharusnya akan masuk ke menu Nintendo DS Connection Setup
   - Jika konsol malah menampilkan Flipnote Studio versi Jepang, layar hitam, atau pesan galat; pengujiannya gagal
5. Matikan daya konsol

#### Uji DS Download Play

1. Nyalakan daya konsol
2. Luncurkan aplikasi Download Play (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Pilih "Nintendo DS"
4. Jika konsol memuat ke menu "Download software via DS Download Play", pengujiannya berhasil
   - Jika konsol malah menampilkan Flipnote Studio versi Jepang, layar hitam, atau pesan galat; pengujiannya gagal
5. Matikan daya konsol

::: warning

Jika pengujiannya ada yang gagal; mode DS, DS Download Play, dan/atau DS Connection Settings tidak akan bisa diakses sesudah CFW dicopot! Maka [perbaiki dulu mode DS](troubleshooting-post-install) sebelum lanjut.

:::

### Bagian III - Uji Keamanan

Tujuan dari bagian ini untuk memastikan konsol bisa nyala, lalu fungsi sistem kritis seperti System Settings dan papan ketik tetap berfungsi sesudah mencopot CFW. **Jika bagian ini dilewati, konsol akan MATOT! (_brick_)**

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Jika muncul pesan "Essential files backup not found", tekan (A) untuk mencadang, sesudah selesai, tekan (A) untuk lanjut
3. Jika diminta membetulkan waktu & tanggal RTC, lakukan dengan menekan (A), lalu tekan (A) lagi untuk lanjut
   - Perlu diingat jika harus membetulkan waktu dan tanggal RTC, betulkan juga di System Settings setelah mengikuti panduan ini
4. Tekan (Home) untuk membuka menu tindakan
5. Pilih "Scripts..."
6. Pilih "safety_test"
7. Baca tulisan di layar dan tekan (A) untuk lanjut
8. Seharusnya akan masuk ke HOME Menu 3DS biasa (tidak apa-apa ada tema kustom). Jika sudah, lanjutkan instruksi ini
   - Jika tidak ke HOME Menu 3DS biasa (muncul layar hitam, layar galat, dll.), mencopot CFW malah **AKAN MEMBUAT MATOT KONSOL**
9. Buka System Settings di konsol
   - Jika konsolnya _crash_ (mogok), pengujiannya gagal
10. Pilih "Other Settings"
11. Pilih "Profile"
12. Pilih "User Name"
13. Jika bisa mengetik nama pengguna baru, pengujiannya berhasil
    - Jika papan ketik tidak muncul, layar macet, atau konsolnya mogok; pengujiannya gagal
14. Matikan daya konsol

::: danger

Jika TIDAK masuk ke HOME Menu 3DS biasa, atau System Settings / papan ketik tidak bisa diakses, **DILARANG lanjutkan panduan ini**! Gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan minta bantuan di sana dalam bahasa Inggris.

:::

### Bagian IV - Mencadang NAND

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Tekan (Home) untuk membuka menu tindakan
3. Pilih "Scripts..."
4. Pilih "GM9Megascript"
5. Pilih "Backup Options"
6. Pilih "SysNAND Backup"
7. Tekan (A) untuk konfirmasi
   - Proses ini akan lumayan lama
   - Jika muncul galat, mohon pastikan kartu SD setidaknya masih tersisa 1.3GB
8. Tekan (B) untuk kembali ke menu utama
9. Pilih “Exit”
10. Tekan (Home) untuk membuka menu tindakan
11. Pilih “Poweroff system” untuk matikan daya konsol

### Bagian V - Menghapus konten tidak sah

::: warning

Bagian ini akan menghapus konten tidak sah (_homebrew_, hasil _dump_ kartrid, dsb). Jika ada simpanan (_save_) penting, cadangkan dengan pengelola simpanan sebelum lanjut!

:::

1. Nyalakan daya konsol
2. Buka System Settings di konsol
3. Navigasi ke `Data Management` > `Nintendo 3DS` > `Software`
4. In this list of software, delete any non-Nintendo content you installed while using CFW
   - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. Navigate to `Data Management` -> `DSiWare`
6. In this list of software, delete any non-Nintendo content you installed while using CFW
   - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
   - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. Exit the System Settings application
8. Luncurkan aplikasi Download Play (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Wait until you see the two buttons
10. Tekan (L) + (Tombol Bawah) + (Select) bersamaan untuk membuka menu Rosalina
11. Pilih "Miscellaneous options"
12. Select "Switch the hb. title to the current app."
13. Tekan (B) untuk lanjut
14. Tekan (B) untuk kembali ke menu utama Rosalina
15. Tekan (B) untuk keluar dari menu Rosalina
16. Press (Home), then close Download Play
17. Luncurkan aplikasi Download Play (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Konsol seharusnya memuat Homebrew Launcher
19. Launch DSiWare Uninstaller from the list of homebrew
20. Follow the prompts and allow the program to uninstall
21. Once the process has succeeded, exit the Homebrew Launcher and power off your console

### Section VI - System Format

This section will ensure that all illegitimate tickets are removed, allowing eShop to work normally. This will remove all content from the 3DS and log you out of your NNID. Keep in mind that your console's encryption key will be shuffled, meaning that any old data will be rendered inaccessible, even if you have a backup of your SD contents.

1. Nyalakan daya konsol
2. Buka System Settings di konsol
3. Navigate to Other Settings -> Next Page (until the final page) -> Format System Memory
4. Follow the prompts to format your 3DS

### Section VII - Running Uninstall Script

::: warning

This is your final opportunity to verify that all safety steps above have been followed! Please ensure that you have followed all sections on this page, **especially** `Section III - Safety Test`, before continuing.

:::

::: danger

Jika berniat mencopot CFW karena:

- Ingin memasang ulang
- Ingin mengganti kartu SD
- Kartu SD-nya hilang atau rusak
- Ada permainan yang kacau
- Ada aplikasi sistem yang kacau
- Konsol tidak bisa di-_boot_ ke HOME Menu

<u>JANGAN!!!!</u> Mencopot _custom firmware_ hanya menambah risiko tidak penting atau parahnya <u>**KONSOL BISA MATOT**</u> (_brick_). Sebaiknya minta bantuan di [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. Tekan (Home) untuk membuka menu tindakan
3. Pilih "Scripts..."
4. Pilih "GM9Megascript"
5. Select "Hax Options"
6. Select "Un-install Hax"
7. Saat diminta, tekan (A) untuk melanjutkan
8. Tekan (A) untuk membuka izin tulis SysNAND (lvl3), lalu tekan kombo yang diberikan
9. Tekan (A) untuk lanjut
10. Tekan (B) untuk kembali ke menu utama
11. Pilih "Exit"
12. Tekan (A) untuk menutup ulang izin tulis jika diminta
13. Tekan (Start) untuk nyalakan ulang konsol

___

::: tip

All custom firmware has been removed from your console.

:::

::: info

You can now remove any extra files and folders from the root of your SD card that are _not_ the `Nintendo 3DS`, `DCIM`, or `private` folders.

:::
