# Memasang boot9strap (MSET9 CLI)

:::details Perincian Teknis (opsional)

[MSET9](https://github.com/zoogie/MSET9) adalah eksploit untuk System Settings yang dikembangkan oleh [zoogie](https://github.com/zoogie). Eksploit ini menyasar kelemahan ID1 (32 huruf dari nama folder kedua, di folder Nintendo 3DS setelah ID0) yang bisa nama _apa saja_ asalkan 32 huruf. Gunanya untuk melakukan tindakan tertentu yang membuat konsol menjalankan instruksi sesuai kode dalam nama folder ID1, sehingga mendapat kendali penuh atas konsol 3DS.

:::

## Catatan Kompatibilitas

::: warning

Laman ini perlu komputer bersistem Windows, Linux, atau macOS. Atau jika punya ponsel/tablet Android atau Chromebook, ikuti saja [Memasang boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)). Jika tidak punya perangkat tersebut, berarti perlu [eksploit yang lain](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits) (gunakan penerjemah).

:::

## Apa yang Perlu

- Versi terkini dari [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
- Versi 3.x berapa pun dari [Python](https://www.python.org/downloads/) **terpasang di komputer**
  - Jika menggunakan Linux atau macOS, mungkin sudah ada Python 3. Periksa dengan membuka Terminal dan ketik `python3 -V`. Jika muncul nomor versi, berarti bisa untuk panduan ini.

## Instruksi

::: info

Di laman ini akan menggunakan naskah MSET9 untuk mengaktifkan MSET9. Saat naskah berjalan, data pengguna akan hilang sementara tapi akan kembali sesudah dari laman ini. Jika muncul galat saat menjalankan naskah, solusi untuk galat tersebut mungkin ada di laman [sidik gangguan](troubleshooting-mset9).

:::

### Bagian I - Persiapan

Di bagian ini akan menyiapkan eksploit MSET9 dengan membuat profil HOME Menu baru **sementara** tanpa data, lalu sedikit mengatur data profil itu untuk mengaktifkan MSET9. Data pengguna yang ada akan hilang, tapi akan kembali setelah selesai dengan laman ini.

1. Sisipkan kartu SD ke komputer Anda
2. Salin semuanya dari berkas `.zip` MSET9 ke akar kartu SD, timpa berkas yang ada

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout.png)

   :::

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter

   - Jendela perintah akan seperti ini:

   ::: info

   ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Pastikan versi dan model yang tampil itu sesuai konsol
2. Ketik `1`, lalu tekan Enter untuk memulai proses membuat ID1 MSET9
3. Setelah membaca sangkalan yang ada, ketik `1` dan tekan Enter untuk iya
   - Jika muncul galat, lihat laman [sidik gangguan](troubleshooting-mset9), lalu coba lagi
4. Jika muncul pesan "Created hacked ID1.", tekan Enter untuk menutup naskah MSET9
   - Konsol 3DS akan seperti tidak ada aplikasi terpasang / data di HOME Menu. **This is expected.** Your data will come back at a later step
5. Sisip kembali kartu SD ke konsol
6. Power on your console
7. Open Mii Maker
8. Wait for your console to reach the [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png) screen, then exit Mii Maker and return to the HOME Menu
   - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
   - If you just reach the [normal](/images/screenshots/mset9/mii-existing.png) Mii Maker screen, then the data already exists. Exit Mii Maker and return to the HOME Menu
9. Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
   - This will not wipe any of your data
10. Power off your console by pressing the power button then tapping Power Off on the lower screen
11. Sisipkan kartu SD ke komputer Anda

<!--@include: ./_include/mset9-chorus.md -->

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter

   - The window should change to this and display `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - If the window says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Type `2`, then press Enter to check the MSET9 status and follow the directions indicated
     - Once you have resolved the issue, return to Section I Step 14
     - For more information, check the [troubleshooting](troubleshooting-mset9) page
2. Type `0`, then press Enter to close the script
3. Sisip kembali kartu SD ke konsol

### Section II - MSET9

In this section, you will trigger MSET9 to launch SafeB9SInstaller (the custom firmware installer).

::: danger

These instructions must be followed **EXACTLY**, so double-check EVERYTHING you are doing to avoid errors!

:::

1. Power on your console, ensuring System Settings is selected
   - If System Settings is not selected, **[hover over](/images/screenshots/mset9/hover-settings.png)** the System Settings icon using the D-Pad, power your console off, then back on
2. Press (A) to launch System Settings
3. Navigate to `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([image](/images/screenshots/mset9/settings-extdata.png))
4. **Do not press any buttons or touch the screen**
5. **With the console STILL ON, and without pressing any buttons or touching the screen**, remove your SD card from your console
   - The menu will refresh and say that no SD card is inserted
6. Sisipkan kartu SD ke komputer Anda

<!--@include: ./_include/mset9-chorus.md -->

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter
2. In the MSET9 window, type `3`, then press Enter to inject MSET9
   - You should see "MSET9 successfully injected!"
3. Press Enter to close the MSET9 script
4. Reinsert your SD card into your console **without pressing any buttons or touching the screen**
5. If the exploit was successful, you will have booted into SafeB9SInstaller
   - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting-mset9)

### Section III - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9)
2. Once it is complete, press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

### Section IV - Removing MSET9

In this section, you will remove MSET9 to prevent further issues and to restore your user data (games, themes, etc). (This will not remove the custom firmware that you have just installed.)

::: danger

Do NOT skip this section! If you skip it, applications may crash unexpectedly and you will encounter errors on the next page!

:::

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda

<!--@include: ./_include/mset9-chorus.md -->

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), skip to Step 6
2. Type `4`, then press Enter to remove the trigger file
   - You should see "Removed trigger file."
3. Type `5`, then press Enter to remove MSET9
   - You should see "Successfully removed MSET9!"
4. Press Enter to close the MSET9 script

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Did you follow Section IV (Removing MSET9)? That section is MANDATORY!

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
