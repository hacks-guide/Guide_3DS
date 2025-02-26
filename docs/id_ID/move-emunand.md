# Memindahkan EmuNAND

## Bacaan Penting

Ini adalah laman lebihan untuk memindahkan isi EmuNAND sebelumnya ke CFW SysNAND baru, lalu menghapus partisi EmuNAND lama. Perlu diingat istilah EmuNAND dan RedNAND merujuk ke implementasi agak berbeda dari [konsep yang sama](http://3dbrew.org/wiki/NAND_Redirection).

Perlu diingat jika ada _payload_ selain `GodMode9.firm` dalam folder `/luma/payloads/` di kartu SD, menahan (Start) saat awal nyala akan ke "chainloader menu" dan hanya bisa Tombol Arah dan (A) untuk memilih "GodMode9" pada instruksi ini.

::: danger

Luma3DS dan boot9strap HARUS sudah ada sebelum melakukan ini.

:::

## Apa yang Perlu

- EmuNAND yang sudah ada
- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)

## Instruksi

### Bagian I - Persiapan

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `GodMode9.firm` dari `.zip` GodMode9 ke folder `/luma/payloads/` di kartu SD
4. Salin folder `gm9` dari `.zip` GodMode9 ke akar kartu SD
5. Sisip kembali kartu SD ke konsol

### Bagian II - Mencadang Simpanan DSiWare SysNAND

::: info

Jika tidak ingin mencadang permainan atau simpanan DSiWare, lewati bagian ini.

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Jika diminta membuat cadangan berkas esensial, tekan (A) untuk lakukan, lalu tekan (A) lagi sesudah selesai untuk lanjut
3. Jika diminta membetulkan waktu & tanggal RTC, lakukan dengan menekan (A), lalu tekan (A) lagi untuk lanjut
   - Perlu diingat jika harus membetulkan waktu dan tanggal RTC, betulkan juga di System Settings setelah panduan ini
4. Navigasi ke `[2:] SYSNAND TWLN` -> `title`
5. Tahan (R) dan tekan (A) bersamaan di `00030004` untuk memilih folder, lalu pilih "Copy to 0:/gm9/out"
   - Proses ini agak lama jika terdapat banyak permainan DSiWare
6. Tekan (B) dua kali untuk kembali ke menu utama

### Bagian III - Mencadang Simpanan GBA VC

::: info

Jika tidak ingin mencadang permainan atau simpanan GBA VC, lewati bagian ini.

:::

::: info

Perlu diingat ini tidak berlaku untuk jenis Virtual Console lain (GBC, NES, dll)

:::

::: info

Simpanan akan diekstrak ke folder `/gm9/out/` di kartu SD dengan nama `<TitleID>.gbavc.sav`.

:::

::: info

Untuk mencari tahu Title ID berkas `<TitleID>.gbavc.sav`, lihat daftar Title ID permainan di konsol dengan menekan (Home) untuk membuka menu tindakan, pilih `Title manager`, lalu pilih `[A:] SD CARD`.

:::

1. Lakukan cara berikut untuk mencadang simpanan tiap permainan GBA VC yang diinginkan:
   - Buka permainan GBA VC
   - Keluar dari GBA VC
   - Nyalakan konsol selagi menahan (Start) untuk ke menu Luma3DS chainloader
   - Masuk ke GodMode9 dengan menekan (A)
   - Navigasi ke `[S:] SYSNAND VIRTUAL`
   - Tekan (A) pada `agbsave.bin` untuk pilih
   - Pilih "AGBSAVE options..."
   - Pilih "Dump GBA VC save"
   - Tekan (A) untuk lanjut
   - Tekan (Start) untuk nyalakan ulang konsol

### Bagian IV - Menyalin EmuNAND ke SysNAND

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[E:] EMUNAND VIRTUAL`
3. Tekan (A) pada `nand.bin` untuk memilih, lalu pilih "NAND image options...", dan pilih "Restore SysNAND (safe)"
4. Press (A) to unlock SysNAND overwriting, then input the key combo given
   - This will not overwrite your boot9strap installation
5. Input the key combo given to unlock SysNAND (lvl1) writing
   - Proses ini akan lumayan lama
6. Once it is completed, press (A) to continue
7. Press (B) to decline relocking write permissions if prompted
8. Tekan (B) untuk kembali ke menu utama

### Bagian V - Memulihkan Simpanan DSiWare

::: info

Jika tadi tidak mencadang simpanan (_save_) DSiWare, lewati bagian ini.

:::

1. Navigasi ke `[0:] SDCARD` -> `gm9` -> `out`
2. Press (Y) on the `00030004` folder to copy it
3. Tekan (B) dua kali untuk kembali ke menu utama
4. Navigasi ke `[2:] SYSNAND TWLN` -> `title`
5. Press (Y) to paste the `00030004` folder
6. Select "Copy path(s)"
7. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
8. Select "Overwrite file(s)"
   - Proses ini agak lama jika terdapat banyak permainan DSiWare
9. Press (B) to decline relocking write permissions if prompted
10. Tekan (B) dua kali untuk kembali ke menu utama

### Section VI - Restore GBA VC Saves

::: info

If you did not backup GBA VC Saves earlier, skip this section.

:::

::: info

Untuk mencari tahu Title ID berkas `<TitleID>.gbavc.sav`, lihat daftar Title ID permainan di konsol dengan menekan (Home) untuk membuka menu tindakan, pilih `Title manager`, lalu pilih `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Lakukan cara berikut untuk memulihkan simpanan tiap permainan GBA VC yang diinginkan:
   - Buka permainan GBA VC
   - Keluar dari GBA VC
   - Nyalakan konsol selagi menahan (Start) untuk ke menu Luma3DS chainloader
   - Masuk ke GodMode9 dengan menekan (A)
   - Navigate to `[0:] SDCARD` -> `gm9`
   - Tekan (Y) pada `<TitleID>.gbavc.sav` yang ingin dipulihkan untuk disalin
   - Tekan (B) untuk kembali ke menu utama
   - Navigasi ke `[S:] SYSNAND VIRTUAL`
   - Tekan (A) pada `agbsave.bin` untuk pilih
   - Pilih "AGBSAVE options..."
   - Pilih "Inject GBA VC save"
   - Tekan (A) untuk lanjut
   - Tekan (Start) untuk nyalakan ulang konsol
   - Buka permainan GBA VC
   - Keluar dari GBA VC

### Section VII - Backup SysNAND

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Backup every file on your SD card to a folder on your computer; all files will be deleted in the following steps**

### Section VIII - Format SD card

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Hold (R) and press (B) at the same time to eject your SD card
2. Sisipkan kartu SD ke komputer Anda
3. Copy all your files back to your SD card
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Sisip kembali kartu SD ke konsol
5. Press (A) to remount your SD card
6. Press (Start) to reboot

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
