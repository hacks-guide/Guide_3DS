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
   - Konsol 3DS akan seperti tidak ada aplikasi terpasang / data di HOME Menu. **Memang seperti ini.** Data akan kembali di langkah berikutnya
5. Sisip kembali kartu SD ke konsol
6. Nyalakan daya konsol
7. Buka Mii Maker
8. Tunggu konsol sampai layar [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png), lalu keluar dari Mii Maker dan balik ke HOME Menu
   - Mungkin muncul [layar ini](/images/screenshots/mset9/mii-extdata.png), ini menandakan data yang perlu sudah dibuat
   - Jika hanya sampai layar Mii Maker [biasa](/images/screenshots/mset9/mii-existing.png), berarti sudah ada data. Keluar dari Mii Maker dan balik ke HOME Menu
9. Buka System Settings dan navigasi ke `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([gambar](/images/screenshots/database-reset.jpg))
   - Ini tidak akan menghapus data
10. Matikan daya konsol dengan menekan tombol daya lalu sentuh Power Off di layar bawah
11. Sisipkan kartu SD ke komputer Anda

<!--@include: ./_include/mset9-chorus.md -->

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter

   - Jendela perintah akan seperti ini dan muncul `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - Jika muncul [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Ketik `2`, lalu tekan Enter untuk periksa status MSET9 dan ikuti arahan yang ditentukan
     - Sesudah isunya selesai, kembali ke Bagian I Langkah 14
     - Untuk informasi lanjut, lihat laman [sidik gangguan](troubleshooting-mset9)
2. Ketik `0`, lalu tekan Enter untuk menutup naskah
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
   - Menu akan menyegar dan muncul pesan tidak ada kartu SD
6. Sisipkan kartu SD ke komputer Anda

<!--@include: ./_include/mset9-chorus.md -->

1. Ketik nomornya sesuai dengan model dan versi konsol, lalu tekan Enter
2. Di jendela MSET9, ketik `3`, lalu tekan Enter untuk menyuntik MSET9
   - Seharusnya muncul "MSET9 successfully injected!"
3. Tekan Enter untuk menutup naskah MSET9
4. Sisip kembali kartu SD ke konsol **tanpa menekan tombol atau menyentuh layar**
5. Jika eksploit berhasil akan muncul SafeB9SInstaller
   - Jika muncul layar merah atau konsol tersangkut di layar memuat, ikuti [panduan sidik gangguan](troubleshooting-mset9)

### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

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
4. Tekan Enter untuk menutup naskah MSET9

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Did you follow Section IV (Removing MSET9)? That section is MANDATORY!

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
