# Pertanyaan Umum

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Iya**, _custom firmware_ masih bisa dipasang di 3DS, bahkan setelah eShop ditutup.

:::

## Perihal Sebelum Pasang

:::details Konsol saya sudah di versi terkini. Apakah konsol bisa diretas tanpa perkakas/prasyarat?

**Iya!** New 3DS / New 3DS XL / New 2DS XL bisa dengan [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), sedangkan 3DS / 3DS XL / 2DS dengan [MSET9](installing-boot9strap-\(mset9\)).

:::

:::details Panduan ini kompatibel dengan konsol apa?

Panduan ini kompatibel dengan semua jenis ecer konsol 3DS (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Jika versi pada sistem bertuliskan "0.0.0-0", bisa jadi konsol Anda unit pengembang.

:::

:::details Seberisiko apa meretas konsol?

Risiko kena matot sekarang hampir mustahil, kecuali jika _sengaja_ dibuat matot.

:::

:::details Apakah bisa menjalankan homebrew dan emulator keren?

Iya! Panduan ini akan memasang beberapa aplikasi _homebrew_ berguna, termasuk [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), sebagai toko apli _homebrew_.

:::

:::details Apakah bisa memainkan permainan luar-daerah?

Iya; karena Luma3DS mengabaikan periksa daerah pada kartrid dan aplikasi terpasang. Beberapa permainan mungkin perlu fitur [Locale Emulation](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) dari Luma agar lancar di konsol luar-daerah.

:::

:::details Apakah fungsi tertentu hilang jika ada CFW?

Tidak. Konsol dengan _custom firmware_ masih bisa bermain daring dan memainkan kartrid fisik layaknya 3DS biasa.

:::

:::details Apakah NNID, simpanan, permainan (dll.) akan hilang?

Panduan ini tidak akan memengaruhi NNID Anda (jika ada). Untuk konsol berdaerah KOR, CHN, atau TWN malah tidak punya NNID sehingga tidak terpengaruh.

Mengikuti panduan ini saja seharusnya tidak kehilangan data (simpanan, permainan, dll), tapi kartu SD rusak mungkin terjadi. Jangan lupa cadangkan isi kartu SD jika terdapat data penting.

:::

:::details Apakah 3DS saya akan dicekal jika ada CFW?

Pencekalan sudah tidak ada karena ditutupnya Nintendo Network (untuk semua orang).

:::

:::details Apakah bisa selain di komputer (misal: ponsel Android)?

Iya! Pokoknya harus bisa menaruh berkas di kartu SD kompatibel.

:::

:::details Sebaiknya kartu SD ukuran berapa?

Setidaknya kartu SD masih tersisa 1.5GB untuk mengikuti keseluruhan panduan ini. Walaupun 3DS secara resmi membaca kartu SD hingga 32GB, tapi ukuran yang lebih besar juga bisa digunakan jika diformat ke FAT32. Tidak dianjurkan menggunakan kartu SD di atas 128GB karena ada isu dengan grafik GBA dan tema kustom.

:::

:::details Dengar-dengar ada cara yang perlu beli (Gateway, Sky3DS, ntrboot, R4, dll). Kira-kira itu perlu, tidak?

Tidak. Walau _flashcart_ DS memang bisa untuk memodif 3DS dengan [ntrboot](ntrboot), sekarang hampir semua konsol punya cara cuma-cuma.

_Flashcart_ mode 3DS seperti Gateway dan Sky3DS sudah tidak dianjurkan karena usang dan berisiko kena matot (_brick_).

:::

:::details Apa perbedaan custom firmware dan homebrew?

Secara takrif, _custom firmware_ merujuk pada oprekan peranti lunak sistem 3DS agar bisa melakukan hal yang secara bawaan tidak boleh. _Homebrew_ umumnya merujuk pada peranti lunak bersumber tidak resmi (yaitu: tidak diagihkan lewat eShop atau kartrid).

Dari sejarahnya, dulu 3DS punya akses _homebrew_ jenis _userland_ melalui eksploit seperti ninjhax, terkadang hanya disebut "homebrew". Tingkat akses sistem dari _userland_ mengizinkan membaca _homebrew_ dan emulator dasar tapi belum bisa (dengan mudah) memodif permainan atau men-_dump_ kartrid. Itu pun lebih tidak stabil, _homebrew_ sering mogok tidak jelas dan perlu dinyalakan ulang penuh. _Custom firmware_ mengizinkan tingkat akses sistem lebih luas dan stabil daripada titik masuk hanya-_homebrew_.

:::

## Perihal Setelah Pasang

:::details Apakah aman memperbarui 3DS dengan CFW ke versi terkini?

Jika menggunakan Luma3DS, pemuat _custom firmware_ (boot9strap) **tidak akan** dihapus saat memperbarui sistem. Dulu sempat ada pembaruan yang membuat Luma3DS mogok (_crash_) di awal nyala, jadi lebih baik menunggu beberapa jam untuk memastikan pembaruan terbaru tidak membuat konsol sementara tidak bisa digunakan sampai Luma3DS diperbarui. Pembaruan sistem bisa dilakukan sama seperti di 3DS belum dimodif: melalui System Settings, Safe Mode, atau sembulan pembaruan jika pembaruan diunduh otomatis.

:::

:::details Bagaimana memperbarui kartu SD?

Salin dan tempel isi kartu SD Anda ke kartu SD baru berformat FAT32. Untuk kartu 128GB, ukuran alokasi yang dianjurkan 65536 (64KB). Kartu SD ukuran lebih dari 128GB tidak dianjurkan karena ada isu dengan grafik GBA dan tema kustom.

:::

:::details Apakah konsol CFW bisa system transfer?

Iya, transfer sistem bisa dilakukan melalui cara System Transfer resmi ke konsol lain yang ada CFW (mungkin akan ada ketakteraturan jika konsol sasaran belum dimodif). Ticket untuk aplikasi tidak sah (_homebrew_) tidak akan ditransfer, tapi bisa dimunculkan lagi dengan [faketik](https://github.com/ihaveamac/faketik/releases/latest). Pastikan tidak melakukan transfer nirkabel, ini akan menghapus aplikasi tidak sah. CFW akan tetap ada di kedua konsol.

:::

:::details Bagaimana mengubah bahasa sistem di 3DS Jepang?

Satu-satunya cara mengubah bahasa sistem 3DS Jepang ke bahasa lain yaitu dengan [mengganti daerah](region-changing). Perlu diingat ini sangat mungkin mengacau Nintendo eShop di konsol, sehingga tidak bisa memperbarui permainan dalam-daerah ataupun luar-daerah.

:::

:::details Bagaimana memperbarui homebrew?

Ini tergantung jenis format aplikasi _homebrew_. Secara umum:

- _Homebrew_ **format CIA** bisa diperbarui dengan memasang CIA baru, ini akan menimpa versi lama. Jika CIA lama tidak tertimpa, hapus dulu di Data Management seperti apli 3DS biasa.
- _Homebrew_ **format 3DSX** bisa diperbarui dengan mengganti baru berkas 3DSX di `/3ds/`. Jika _homebrew_ terdapat aset tambahan, mungkin harus taruh aset tersebut di folder lain. Coba lihat dokumentasi untuk _homebrew_ tersebut.
- Untuk memperbarui Luma3DS, lihat [laman ini](restoring-updating-cfw). Untuk memperbarui GodMode9, lihat [laman ini](godmode9-usage#updating-godmode9).

:::

:::details Bagaimana memperbarui permainan?

Pembaruan permainan masih bisa diunduh dari Nintendo eShop, walaupun kini sudah ditutup.

Jika daerah permainan tidak sama dengan konsol, maka perlu [men-_dump_ pembaruan](dumping-titles-and-game-cartridges) dari 3DS yang punya pembaruan tersebut. The Nintendo eShop only contains updates for the console's region (for example, a Japanese 3DS will only have updates for Japanese games).

:::

:::details Help! Something bad happened and my 3DS won't boot to HOME Menu...

Please look at the [troubleshooting guide](troubleshooting-post-install). **Uninstalling CFW when your console is in an unbootable state is not recommended, as it is very likely to lead to a brick**.

:::

## menuhax / A9LH / Gateway FAQ

:::details I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?

It is recommended that you upgrade your setup to a modern, boot9strap-based one. Follow the [Checking for CFW](checking-for-cfw) guide to see how to upgrade your setup.

:::

:::details My setup works for me. Why should I upgrade it?

The vast majority of modern homebrew (such as Checkpoint and BootNTR Selector) have only been tested on modern, boot9strap-based setups and may not work entirely (or at all) on older setups based on menuhax, A9LH, or Gateway. In addition, depending on your setup, you may be unable to safely update to the latest firmware. Modern, boot9strap-based setups allow for a greater level of system access than previous hacks, including the ability to dump your console's bootrom.

:::

:::details Will I lose anything if I upgrade my setup?

Your old setup (including your EmuNAND, if you have one) can usually be directly migrated to boot9strap with no data loss. If you have data that is particularly important to you, it would be a good idea to make a decrypted backup of your save data before upgrading your setup with a tool like [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).

:::

:::details How do I move saves from an existing Gateway setup to a more modern setup?

See [this thread](https://gbatemp.net/threads/425743/).

:::
