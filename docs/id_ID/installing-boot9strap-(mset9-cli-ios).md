# Installing boot9strap (MSET9 CLI iOS)

:::details Perincian Teknis (opsional)

[MSET9](https://github.com/zoogie/MSET9) adalah eksploit untuk System Settings yang dikembangkan oleh [zoogie](https://github.com/zoogie). Eksploit ini menyasar kelemahan ID1 (32 huruf dari nama folder kedua, di folder Nintendo 3DS setelah ID0) yang bisa nama _apa saja_ asalkan 32 huruf. Performing a specific sequence of actions results in the console executing the instructions that are encoded into the ID1 folder name, which can be used to grant full control over the 3DS.

:::

## Catatan Kompatibilitas

::: warning

This page requires an iPhone or iPad running iOS/iPadOS 14.0 or higher. Jika punya komputer bersistem Windows, macOS, atau Linux, ikuti saja [Memasang boot9strap (MSET9 CLI)](installing-boot9strap-(mset9-cli)). Atau jika punya ponsel/tablet Android atau Chromebook, ikuti saja [Memasang boot9strap (MSET9 Play Store)](installing-boot9strap-(mset9-play-store)). Jika tidak punya perangkat tersebut, berarti perlu [eksploit yang lain](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits) (gunakan penerjemah).

:::

::: warning

As iPhones and iPads do not have an SD card slot, you will need an adapter to plug in your SD card to your device (e.g. a Lightning to SD card or USB-C to SD card adapter).

:::

## Apa yang Perlu

- [iSH](https://apps.apple.com/us/app/ish-shell/id1436902243) from App Store

## Instruksi

::: info

Di laman ini akan menggunakan naskah MSET9 untuk mengaktifkan MSET9. Saat naskah berjalan, data pengguna akan menghilang, tapi akan kembali seusai mengikuti laman ini. Jika muncul galat saat menjalankan naskah, solusi untuk galat tersebut mungkin ada di laman [sidik gangguan](troubleshooting-mset9).

:::

### Bagian I - Persiapan

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. Data pengguna yang ada akan menghilang, tapi akan kembali seusai mengikuti laman ini.

1. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

    ::: info
    
    ![](/images/screenshots/mset9/mset9-ish-select.png)
    
    :::

1. Type the number corresponding to your console model and version, then tap Return

   - The screen should change to this:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-setup-notcreated.png)

   :::

   - Pastikan versi dan model yang tampil itu sesuai konsol

2. Type `1`, then tap Return to begin the process of creating the MSET9 ID1

3. After reviewing the disclaimer, type `1` again and tap Return to accept it
   - Jika galat, periksa ke [sidik gangguan](troubleshooting-mset9), lalu coba lagi

4. If you see the message "Created hacked ID1.", tap Return to close the MSET9 script
   - Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **Memang seperti ini.** Data akan kembali di langkah berikutnya

5. Sisip kembali kartu SD ke konsol

6. Nyalakan daya konsol

7. Buka Mii Maker
   - Ensure that you open Mii Maker, not Mii Plaza. Mii Maker can be identified using the ![Mii Maker](/images/screenshots/mset9/miimaker.png){height="24px" width="24px"} logo

8. Tunggu konsol sampai layar [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png), lalu keluar dari Mii Maker dan balik ke HOME Menu
   - Mungkin muncul [layar ini](/images/screenshots/mset9/mii-extdata.png), ini menandakan data yang perlu sudah dibuat
   - Jika hanya sampai layar Mii Maker [biasa](/images/screenshots/mset9/mii-existing.png), berarti sudah ada data. Keluar dari Mii Maker dan balik ke HOME Menu

9. Buka System Settings dan navigasi ke `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([gambar](/images/screenshots/database-reset.jpg))
   - Ini tidak akan menghapus data

10. Matikan daya konsol dengan menekan tombol daya lalu sentuh Power Off di layar bawah

11. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return

   - The screen should change to this and display `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-ready.png)

   :::

   - If the screen says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-ish-not-ready.png):
     - Type `2`, then tap Return to check the MSET9 status and follow the directions indicated
     - Sesudah isunya selesai, kembali ke Bagian I Langkah 14
     - Untuk informasi lanjut, lihat laman [sidik gangguan](troubleshooting-mset9)
2. Type `0`, then tap Return to close the script
3. Sisip kembali kartu SD ke konsol

### Bagian II - MSET9

Di bagian ini akan mengaktifkan MSET9 untuk membuka SafeB9SInstaller (pemasang CFW).

::: danger

Instruksi ini harus diikuti **PERSIS**, periksa lagi SEMUA yang tadi sudah agar tidak keliru!

:::

1. Nyalakan daya konsol, pastikan sudah sorot System Settings
   - Jika belum sorot System Settings, **[arahkan](/images/screenshots/mset9/hover-settings.png)** ke ikon System Settings dengan tombol arah, matikan daya konsol, dan nyalakan lagi
2. Tekan (A) untuk membuka System Settings
3. Navigasi ke `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([gambar](/images/screenshots/mset9/settings-extdata.png))
4. **Jangan tekan tombol apa pun atau sentuh layar**
5. **Selagi konsol MASIH NYALA, dan tidak menyentuh layar atau menekan tombol apa pun**, lepas kartu SD dari konsol
   - The menu will refresh and say that no SD card is inserted
6. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return
2. In the MSET9 screen, type `3`, then tap Return to inject MSET9
   - Seharusnya muncul "MSET9 successfully injected!"
3. Tap Return to close the MSET9 script
4. Sisip kembali kartu SD ke konsol **tanpa menekan tombol atau menyentuh layar**
5. Jika eksploit berhasil akan muncul SafeB9SInstaller
   - If you get a red screen or the console gets stuck on a loading screen for more than 10 seconds, follow the [troubleshooting guide](troubleshooting-mset9)

### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9#sighaxed-firm-was-not-installed-check-lower-screen-for-more-info)
   - If the top screen is blank **and** you see "Crypto Status - all checks passed" on the bottom screen, you will have to enter key combo blindly. Press the following buttons on your console in this order:
     - D-Pad Left, D-Pad Down, D-Pad Right, D-Pad Up, A
2. Once it is complete (all seven steps on the bottom screen are green), press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

### Bagian IV - Menghapus MSET9

Di bagian ini akan menghapus MSET9 untuk mencegah isu dan memulihkan data (permainan, tema, dll.). (Ini tidak akan menghapus _custom firmware_ yang tadi dipasang).

::: danger

JANGAN lewati bagian ini! Jika dilewati, aplikasi bisa tiba-tiba mogok dan akan ada galat di laman berikutnya!

:::

1. Matikan daya konsol
2. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return
   - The current state should display [Injected](/images/screenshots/mset9/mset9-ish-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ish-ready.png), skip to Step 6
2. Type `4`, then tap Return to remove the trigger file
   - Seharusnya muncul "Removed trigger file."
3. Type `5`, then tap Return to remove MSET9
   - Seharusnya muncul "Successfully removed MSET9!"
4. Tap Return to close the MSET9 script

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Sudah belum ikuti Bagian IV (Menghapus MSET9)? Bagian itu **WAJIB**!

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
