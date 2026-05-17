# Informasi Penting

::: info

Jika ini pertama kalinya memodif 3DS (atau tidak biasa dengan teknologi), lanjut baca! Atau tidak, jika sebelumnya sudah pernah lakukan dan tahu harus apa, lanjut ke [Memulai](get-started).

:::

Laman ini menjabar beberapa istilah dasar komputer dan info spesifik-3DS yang harus diketahui sebelum mengikuti panduan ini.

Daftar tiap bagian masih diciutkan. Jadi sentuh dulu nama bagiannya untuk membuka.

## Kompatibilitas

:::: details Panduan ini kompatibel dengan konsol apa?

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Panduan ini bisa untuk semua jenis konsol ecer Nintendo 3DS (termasuk 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, dan New 2DS XL/LL), terlepas dari daerah atau _firmware_. Ini TIDAK kompatibel untuk jenis konsol DSi (DSi, DSi XL/LL). Untuk jenis konsol DSi, rujuk ke [panduan ini](https://dsi.cfw.guide).

::::

:::: details Untuk panduan ini, perlu komputer/peranti keras seperti apa?

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

Mengikuti panduan di sini harus bisa mengunduh berkas dari Internet dan menyalinnya ke kartu SD. This includes most consumer electronic devices, such as computers running Windows, macOS, Linux, and chromeOS (Chromebooks), as well as phones and tablets running Android and iOS. Depending on your electronic device, you may need to purchase an SD card adapter to allow it to read your SD card.

::::

:::: details Untuk konsol saya, perlu kartu SD seperti apa?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

Letak slot kartu SD dan jenis kartu SD yang didukung tergantung pada model 3DS. Informasi lebih lanjut bisa dilihat di [laman dukungan resmi Nintendo](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card). Note that on New 3DS and New 3DS XL consoles, you will need a screwdriver (JIS 00) to access the microSD card, which is located under the backplate.

Your (micro)SD card should conform to the following requirements:

- **Brand**: Any name brand (SanDisk, Samsung, Kingston, Lexar, PNY, etc.)
  - Beware of fake or illegitimate SD cards (e.g. Memory SD, PRO PLUS, SanDian, Extreme Pro), particularly those purchased from online marketplaces like AliExpress. See [here](https://www.flashcarts.net/microsd-fakes) for a guide on spotting fake SD cards. Using a fake or illegitimate SD card is very likely to result in things not working, or even **data loss**!
- **Capacity**: Between 2GB and 128GB (inclusive)
  - These cards will be labelled SD (<=2GB), SDHC (4GB-32GB), or SDXC (64GB+)
  - Cards smaller than 2GB are insufficient due to the minimum size of a NAND dump (around 1GB), which is made at the end of this guide as a safety measure
  - Cards 200GB or larger will still work, but are not recommended due to possible issues with DS/GBA graphics and custom themes
- **Speed**: Any
  - Currently, the cheapest cards on the market are **Class 10** (e.g. SanDisk Ultra). Faster cards are acceptable, but the 3DS cannot take advantage of their speed
- **Format**: FAT32 with MBR
  - Cards that are 32GB or smaller should already be formatted in this way, while larger SD cards will have to be manually formatted: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))

For consoles that use a full-size SD card, a microSD card in an SD card adapter will work identically.

::: info

Sangat disarankan untuk **menggunakan satu kartu SD saja** dengan satu konsol, karena isi kartu SD berbeda tidak bisa digabung untuk 3DS. Jadi, jika konsol sudah ada kartu SD, gunakan kartu SD tersebut untuk memodif konsol, atau salin semua isinya ke kartu SD lebih besar sebelum atau sesudah memodif.

:::

::: info

If you want, you can check your SD card for errors/legitimacy before following this guide using [H2testw](h2testw-(windows))/[ValiDrive](https://www.grc.com/validrive.htm) (Windows), [F3 (Linux)](f3-(linux)), or [F3XSwift (Mac)](f3xswift-(mac)).

:::

::::

:::: warning

:::details Potensi risiko (Sangkalan)

Dengan memodif konsol, ada kemungkinan kecil (tapi terjadi) konsol bisa _brick_ (matot). _**Salah menaruh berkas TIDAK akan membuat matot konsol**_, tapi bisa terjadi jika melewati instruksi.

Singkatnya: Memodif konsol itu aman, tapi _**tanggung jawab sendiri**_ jika ada salah.

:::

::::

## Istilah penting

::: warning

Mengikuti panduan ini saja seharusnya tidak kehilangan data, tapi kartu SD rusak mungkin bisa terjadi. Jangan lupa cadangkan isi kartu SD (terlebih folder `Nintendo 3DS`) jika ada data penting.

:::

:::: details Apa maksudnya "akar kartu SD" atau "/luma/"?

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

Saat menyalin berkas ke kartu SD, harus bisa menyalin ke letak yang benar - jika tidak, konsol tidak akan membaca berkas dan eksploit; atau aplikasi yang digunakan tidak berfungsi. Istilah yang akan sering dilihat di panduan ini yaitu **akar kartu SD**, yang berarti tidak di dalam folder apa pun di kartu SD. Direktori yang muncul saat pertama kali membuka kartu SD di komputer disebut 'akar' (_root_).

Ada juga jalur folder yang ditulis seperti ini: `/folder/`. Garis miring ini adalah pemisah direktori dan bukan bagian dari nama folder. Contoh, `/folder1/folder2/` merujuk ke `folder2` di dalam `folder1`:

::: info

![](/images/screenshots/onboarding/folders.png)

:::

Tanda **kurung sudut** (\< dan \>) biasanya untuk merujuk pengenal spesifik-sistem. Contoh, jika panduan bertulis `<ID0>`, ini merujuk ke pengenal spesifik-sistem yang ada di folder `Nintendo 3DS`, bukan berarti folder bernama "ID0":

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details Bagaimana cara unduh dari GitHub?

::: info

![](/images/screenshots/onboarding/github.png)

:::

Di panduan ini kita akan menyalin berkas unduhan dari komputer/ponsel ke kartu SD konsol. Sebagian besar berkas di sini dari GitHub, yaitu situs tempat para pengembang menerbitkan _release_ sumber terbuka. Saat mengunduh berkas dari GitHub, unduh _yang bukan_ kode sumber.

::::

:::: details Bagaimana cara ekstrak/buka ZIP?

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Berkas yang akan diminta unduh biasanya `.zip`, ini format untuk mengemas banyak berkas menjadi satu.

Jika disuruh "menyalin (berkas) dari (berkas).zip", berarti harus membuka (atau "ekstrak") berkas ZIP dulu. Sesudah menemukan berkas di dalam berkas ZIP, salin ke letak yang ditentukan di kartu SD.

Di hampir semua sistem operasi, berkas bisa diekstrak dengan pencet dua kali. If this doesn't work, you can install a reputable third-party extraction tool like [7-Zip](https://7-zip.org/) instead.

::: warning

Aplikasi "WinRAR" Windows diketahui bermasalah, khususnya dengan berkas eksploit pemasang _custom firmware_ 3DS. If you are on a Windows computer, you should use either the default File Explorer or 7-Zip to extract files.

:::

::::

:::: details Apa itu ekstensi berkas?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Jika menggunakan Windows, ekstensi berkas disembunyikan secara bawaan sehingga susah mencari berkas yang dicari. Untuk mengaktifkan ekstensi, ikuti [instruksi ini](file-extensions-(windows)).

::::

:::: details What does it mean to "eject" an SD card?

::: info

![](/images/screenshots/onboarding/eject-windows.png)

:::

On most devices, your file manager will have an Eject (⏏️) button for your SD card. Using this option safely stops all activity and unmounts the card so it can be removed.

This is **very** important because removing the SD card while it is in use can cause corruption and may negatively affect the outcome of exploits when modding your 3DS.

::::

## Mendapat bantuan

Jika ada masalah saat mengikuti panduan ini, ada banyak cara untuk mendapat bantuan!

- Jika punya pertanyaan lain yang belum terjawab di laman ini, mungkin ada di [Perihal Sebelum Pasang](faq#pre-installation-faq).
- Jika ada isu ketika mengikuti panduan ini, coba ke laman [Sidik Gangguan](troubleshooting) untuk mencari solusi.
- If the resources we've provided here aren't helping, you can get one-on-one support over at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

::: tip

Lanjut ke [Memulai](get-started)

:::
