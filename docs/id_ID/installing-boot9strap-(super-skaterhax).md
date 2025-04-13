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

Super-skaterhax itu (jika untuk Homebrew Launcher) kompatibel pada 3DS "New" _firmware_ 11.15.0 ke atas di semua daerah kecuali CHN/TWN.

::: warning

Instruksi di sini hanya berlaku untuk New 3DS, New 3DS XL, dan New 2DS XL. Mohon pastikan konsol yang akan dimodif itu New 3DS, New 3DS XL, atau New 2DS XL sebelum lanjut.

:::

### Apa yang Perlu

- Berkas zip [Super-skaterhax](https://skater.nintendohomebrew.com) yang sesuai versi dan daerah konsol

#### Bagian I - Persiapan

Di bagian ini akan menaruh berkas untuk mengaktifkan super-skaterhax dan Homebrew Launcher.

1. Matikan daya konsol

2. Sisipkan kartu SD ke komputer Anda

3. Salin semua isi berkas `.zip` Super-skaterhax ke akar kartu SD, timpa berkas yang ada

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

10. Navigate to "Date & Time"

11. Set "Today's Date" and "Current Time" to the current date and time in your timezone

12. Keluar dari System Settings

#### Bagian II - super-skaterhax

Di bagian ini akan membuka laman web eksploit Browser untuk menjalankan Homebrew Launcher.

::: info

A video detailing these steps is available [here](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Open the Internet Browser
2. Tap the 3-line (☰) icon on the bottom-right corner of the screen
3. Tap `Settings` -> scroll down -> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK`
    - The browser will close
4. Reopen the Internet Browser
5. Tap `Next` -> `Google` -> `OK` -> `OK`
6. Tap on the address bar at the top of the bottom screen
7. Enter the URL corresponding to your console's region:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Tap "Open"
    - You should see the text "GO GO!". Do not click on it yet
9. Tap the 3-line (☰) icon on the bottom-right corner of the screen
10. Tap on "Add to Bookmarks"
11. Tap the 3-line (☰) icon on the bottom-right corner of the screen
12. Tap on `Settings` -> `Delete Cookies` -> `Yes`
13. Press (Home) to return to the HOME Menu, then immediately reopen the Internet Browser
14. Wait for the page to fully load, then tap the "GO GO!" button on the top of the bottom screen
15. Wait for the page to fully load, then press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
16. If your console displays:
    - **"The Homebrew Launcher" screen**: Continue to the next step
    - **A white "Error has occurred" message box**: The exploit failed due to random chance. Open System Settings, change the language to a different one (if possible), then retry this section. Be persistent; you may have to repeat this sequence up to ten times
        - On JPN/KOR region consoles, there is only one language setting. On those consoles, you should open System Settings, close it, then retry this section
        - If the exploit is still unsuccessful after more than ten attempts, there may be a problem with your files or SD card. Ensure that you are **not** using WinRAR to extract files, as it is known to cause issues
    - **A black screen that says "An error has occurred"**: Your file placement is incorrect. Ensure that the super-skaterhax files are on the root of the SD card
    - **A yellow screen**: Homebrew Launcher failed to open due to random chance. Hold the POWER button until the console turns off, then retry this section
    - **[The word "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: You have an Old 3DS, where this exploit **does not work**. Jika begitu, maka ikuti saja [MSET9](installing-boot9strap-\(mset9\))
17. Buka nimdsphax dari Homebrew Launcher
18. Jika eksploit berhasil akan muncul SafeB9SInstaller
    - Jika konsolnya macet di layar merah atau hijau, tahan tombol POWER sampai daya mati, lalu coba lagi bagian ini

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
