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

Untuk mengikuti panduan di sini harus bisa mengunduh berkas dari Internet dan menyalinnya ke kartu SD. Tergantung komputer/ponsel/perangkat elektronik, mungkin perlu juga adaptor USB ke kartu SD agar perangkat bisa membaca kartu SD.

::::

:::: details Untuk konsol saya, perlu kartu SD seperti apa?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

Letak slot kartu SD dan jenis kartu SD yang didukung tergantung pada model 3DS. Informasi lebih lanjut bisa dilihat di [laman dukungan resmi Nintendo](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

3DS bisa membaca kartu SD ukuran berapa pun (bahkan lebih dari 32GB), tapi kartunya harus diformat ke FAT32 (**bukan** exFAT atau NTFS). Gunakan salah satu alat berikut untuk memformat kartu SD, tergantung sistem operasi: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). Kartu SD ukuran lebih dari **128GB** tidak dianjurkan karena ada isu dengan grafik GBA/DS dan tema kustom.

::: warning

Untuk mengikuti panduan ini perlu kartu SD setidaknya **2GB**.

:::

::: info

Jika perlu, periksa dulu galat di kartu SD sebelum mengikuti panduan ini dengan [H2testw (Windows)](h2testw-\(windows\)), [F3 (Linux)](f3-\(linux\)), atau [F3XSwift (Mac)](f3xswift-\(mac\))

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

Di hampir semua sistem operasi, berkas bisa diekstrak dengan pencet dua kali. Jika itu tidak bisa, boleh saja pasang alat ekstraksi pihak ketiga ternama seperti [7-zip](https://7-zip.org/).

::::

:::: details Apa itu ekstensi berkas?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Jika menggunakan Windows, ekstensi berkas disembunyikan secara bawaan sehingga susah mencari berkas yang dicari. Untuk mengaktifkan ekstensi, ikuti [instruksi ini](file-extensions-\(windows\)).

::::

## Mencari bantuan

Jika ada masalah saat mengikuti panduan ini, ada banyak cara untuk mencari bantuan!

- Jika punya pertanyaan lain yang belum terjawab di laman ini, mungkin ada di [Perihal Sebelum Pasang](faq#pre-installation-faq).
- Jika ada isu ketika mengikuti panduan ini, coba ke laman [Sidik Gangguan](troubleshooting) untuk mencari solusi.
- Jika sumber daya kami di sini kurang membantu, bisa minta bantuan bertemu langsung di [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp).

::: tip

Lanjut ke [Memulai](get-started)

:::
