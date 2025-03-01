# Sidik Gangguan (super-skaterhax)

Laman ini berisi saran sidik gangguan untuk isu yang umum ditemui saat mengikuti "Memasang boot9strap (super-skaterhax)". Jika saran dari laman ini tidak bisa menyelesaikan isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan jelaskan isunya, termasuk apa yang sudah dicoba.

::: warning

Instruksi ini hanya berlaku jika mengikuti laman "Memasang boot9strap (super-skaterhax)". Jika punya konsol **yang bukan New 3DS** di versi **11.15.0 sampai 11.17.0**, maka ikuti saja [instruksi sidik gangguan Memasang boot9strap (SSLoth-Browser)](troubleshooting-ssloth-browser).

:::

## Isu dengan super-skaterhax

:::details "An error has occurred. Please save your data in any software currently in use, then restart the system."

Jika tidak berkelip warna setelah menekan "GO GO!":

- Pastikan tidak salah mengatur tanggal dan [daerah konsol](/images/screenshots/skaterhax/skater-lang.png)
- Pastikan di Browser tidak terbuka tab lain, lalu buka ulang Browser dan coba lagi eksploit

Jika layar berkelip warna lalu macet/mogok:

- Pastikan berkas `arm11code.bin` dan `browserhax_hblauncher_ropbin_payload.bin` sudah benar sesuai versi dan daerah konsol
- Coba atur ulang data Browser:
    1. Buka Browser, lalu buka pengaturan Browser
    2. Gulir ke bawah dan pilih "Reset Save Data" (bisa jadi disebut "Initialize Save Data" atau "Clear All Save Data")
    3. Coba ulang eksploit
- Coba ubah bahasa sistem ke yang lain selain bahasa yang sekarang

:::

:::: details "An error has occurred. Hold down the POWER button to turn off the power..." (layar hitam dengan teks)

Berkas `arm11code.bin` belum ada atau salah taruh. Pastikan yang disalin itu [versi terkini super-skaterhax](https://skater.nintendohomebrew.com/) sesuai daerah dan versi konsol ke akar kartu SD (bukan di dalam folder).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details "An exception occured" atau "DLL_HEAP_INFORMATION" saat menekan GO! GO!

Ini mungkin menandakan sudah ada _custom firmware_. Coba [periksa CFW](checking-for-cfw).

:::

## Isu dengan SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Kembali ke [Memasang boot9strap (super-skaterhax)](installing-boot9strap-\(super-skaterhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
