# Move EmuNAND

## Bacaan Penting

This is an add-on section for moving the contents of a previous EmuNAND to your new SysNAND CFW, then removing the old EmuNAND partition. Note that the terms EmuNAND and RedNAND refer to slightly different implementations of [the same concept](http://3dbrew.org/wiki/NAND_Redirection).

Perlu diingat jika ada _payload_ selain `GodMode9.firm` dalam folder `/luma/payloads/` di kartu SD, menahan (Start) saat awal nyala akan ke "chainloader menu" dan hanya bisa Tombol Arah dan (A) untuk memilih "GodMode9" pada instruksi ini.

::: danger

You MUST have already installed Luma3DS and boot9strap to use this.

:::

## Apa yang Perlu

- An existing EmuNAND
- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)

## Instruksi

### Bagian I - Persiapan

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `GodMode9.firm` dari `.zip` GodMode9 ke folder `/luma/payloads/` di kartu SD
4. Salin folder `gm9` dari `.zip` GodMode9 ke akar kartu SD
5. Sisip kembali kartu SD ke konsol

### Section II - Backup SysNAND DSiWare Saves

::: info

If you do not have any DSiWare games or saves that you care about, skip this section.

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. Jika diminta membetulkan waktu & tanggal RTC, lakukan dengan menekan (A), lalu tekan (A) lagi untuk lanjut
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Navigate to `[2:] SYSNAND TWLN` -> `title`
5. Hold (R) and press (A) at the same time on `00030004` to select the folder, then select "Copy to 0:/gm9/out"
   - This process may take some time if you have many DSiWare games
6. Press (B) twice to return to the main menu

### Section III - Backup GBA VC Saves

::: info

If you do not have any GBA VC games or saves that you care about, skip this section.

:::

::: info

Note that this is not necessary for any other kind of Virtual Console games (GBC, NES, etc)

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
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navigasi ke `[S:] SYSNAND VIRTUAL`
   - Tekan (A) pada `agbsave.bin` untuk pilih
   - Pilih "AGBSAVE options..."
   - Pilih "Dump GBA VC save"
   - Tekan (A) untuk lanjut
   - Tekan (Start) untuk nyalakan ulang konsol

### Section IV - Copy EmuNAND to SysNAND

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigate to `[E:] EMUNAND VIRTUAL`
3. Press (A) on `nand.bin` to select it, then select "NAND image options...", then select "Restore SysNAND (safe)"
4. Press (A) to unlock SysNAND overwriting, then input the key combo given
   - This will not overwrite your boot9strap installation
5. Input the key combo given to unlock SysNAND (lvl1) writing
   - Proses ini akan lumayan lama
6. Once it is completed, press (A) to continue
7. Press (B) to decline relocking write permissions if prompted
8. Tekan (B) untuk kembali ke menu utama

### Section V - Restore DSiWare Saves

::: info

If you did not backup DSiWare Saves earlier, skip this section.

:::

1. Navigasi ke `[0:] SDCARD` -> `gm9` -> `out`
2. Press (Y) on the `00030004` folder to copy it
3. Press (B) twice to return to the main menu
4. Navigate to `[2:] SYSNAND TWLN` -> `title`
5. Press (Y) to paste the `00030004` folder
6. Select "Copy path(s)"
7. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
8. Select "Overwrite file(s)"
   - This process may take some time if you have many DSiWare games
9. Press (B) to decline relocking write permissions if prompted
10. Press (B) twice to return to the main menu

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
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
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
