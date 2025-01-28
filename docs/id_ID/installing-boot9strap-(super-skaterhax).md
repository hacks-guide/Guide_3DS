---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Memasang boot9strap (super-skaterhax)

:::details Perincian Teknis (opsional)

Untuk perincian teknis perihal eksploit pada laman ini, lihat di [sini](https://github.com/zoogie/super-skaterhax).

:::

### Catatan Kompatibilitas

Super-skaterhax (jika untuk membuka Homebrew Launcher) bisa untuk 3DS "New" dari _firmware_ 11.15.0 ke atas di semua daerah kecuali CHN/TWN.

::: warning

Instruksi di sini hanya berlaku untuk New 3DS, New 3DS XL, dan New 2DS XL. Mohon pastikan konsol yang akan dimodif itu New 3DS, New 3DS XL, atau New 2DS XL sebelum lanjut.

:::

### Apa yang Perlu

- Berkas zip [Super-skaterhax](https://skater.nintendohomebrew.com) yang sesuai versi dan daerah konsol

#### Bagian I - Persiapan

Di bagian ini akan menaruh berkas untuk mengaktifkan super-skaterhax dan Homebrew Launcher.

1. Matikan daya konsol

2. Sisipkan kartu SD ke komputer Anda

3. Salin semuanya dari folder `.zip` Super-skaterhax ke akar kartu SD, timpa berkas yang ada

   ::: info

   ![](/images/screenshots/skaterhax/skater-root-layout.png)

   :::

4. Sisip kembali kartu SD ke konsol

5. Nyalakan daya konsol

6. Buka System Settings

7. Pilih "Other Settings"

8. Navigasi ke "Profile" -> "Region Settings"
   - Pengaturan ini akan kita ubah sementara untuk meningkatkan keberhasilan eksploit
   - Pengaturan daerah bisa dikembalikan ke biasa lagi setelah selesai dari laman ini
   - Jika muncul [peringatan](/images/screenshots/skaterhax/country-change-notice.png) akan kehilangan akses fitur Nintendo Network ID, ini aman menekan OK untuk lanjut

9. Pilih opsi berikut disesuaikan dengan daerah konsol ([gambar](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Keluar dari System Settings

#### Bagian II - super-skaterhax

Di bagian ini akan membuka laman web eksploit Browser untuk menjalankan Homebrew Launcher.

::: info

Jika sekiranya belum, pastikan konsol sudah tersambung ke internet.

:::

1. Saat di HOME Menu, tekan tombol L dan R bersamaan untuk membuka kamera
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/super/` for EUR/USA/JPN, `https://zoogie.github.io/web/korea` for KOR)
2. Tap the QR code button and scan one of the following QR codes for your console's region [here](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
   - If you get a security certificate warning, please ensure that the system date is today's
3. Press (Select) to open the bookmark tab
   - If your (Select) button does not respond, tap the star icon on the bottom-left corner of the screen
4. Tap "Bookmark this page"
5. Press (B) once to return to the browser
6. Press (ZR) to open the tab list
   - If your (ZR) button does not respond, tap the two overlapped squares near the bottom-right corner of the screen
7. Make sure that the only tab open is the super-skaterhax website
   - This tab should be highlighted in blue on the tab list
   - If other tabs are open, close them
8. Press (B) once to return to the browser
9. Press (Start) to open the context menu
   - If your (Start) button does not respond, tap the 3-line menu on the bottom-right corner of the screen
10. Tap on "Settings"
11. Tap on "Delete Cookies"
12. Tekan (A) untuk lanjut
13. Press (Home) to return to the HOME Menu, then immediately press (A) to launch the browser again
14. Select the "GO GO!" button on the top of the bottom screen
15. Press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
    - Jika konsolnya macet di layar kuning, tahan tombol POWER sampai daya mati, lalu coba lagi bagian ini
    - Jika konsolnya macet di layar merah, tahan tombol POWER sampai daya mati, ulangi Langkah 3 Bagian II, lalu coba lagi bagian ini
    - If your console [shows the word Text on the top-left corner of the bottom screen](/images/screenshots/skaterhax/skater-old3ds.png), you have an Old 3DS and this exploit **will not work on your device**. If this is the case, you should follow [MSET9](installing-boot9strap-\(mset9\)) instead
    - If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
16. Your console will have booted into the Homebrew Launcher
17. Launch nimdsphax from the list of homebrew
18. Jika eksploit berhasil akan muncul SafeB9SInstaller
    - Jika konsolnya macet di layar merah atau hijau, tahan tombol POWER sampai daya mati, lalu coba lagi bagian ini
    - This may take up to five attempts

#### Bagian III - Memasang boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
