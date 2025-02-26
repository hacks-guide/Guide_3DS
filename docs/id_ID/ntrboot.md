# ntrboot

::: tip

If your flashcart comes pre-flashed with ntrboot (or you have already flashed ntrboot to your flashcart), you can skip to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\)) for instructions on how to use it.

:::

## Bacaan Penting

Installing boot9strap with ntrboot requires a compatible NDS / DSi flashcart to flash ntrboot to. Note that some of these flashcarts are sold pre-flashed with ntrboot.

While the ntrboot exploit works independently of the system version, the ntrboot flasher (which installs the exploit to the cart) is not. This means that, depending on the versions and consoles supported by your flashcart, only certain methods may be available to you.

Perlu diingat untuk kartrid dengan "Time Bomb" tidak akan bisa menjalankan `.nds` jika jam sistem sudah lewat tanggal yang ditentukan _firmware flashcart_. One method to bypass this is to set the system clock to an earlier date.

| Flashcart Name                                                                                                              |          Current Price |                       "Time Bomb"?                       |                                 3DS Versions?                                 |                           DSi Versions?                           | Other Notes                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** (external switch to switch between ntrboot ("3DS") and NDS modes); do not manually flash with ntrboot. This cart needs an SD card inserted to function for both ntrboot and regular NDS firmware. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     September 3, 2024                    |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot**; can be flashed back to an NDS flashcart.                                                                                                                                                                                                               |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                            No                            |                                      None                                     |                                None                               | Only models with [certain flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) are compatible with ntrboot.                                                                                                                                                    |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: September 3, 2024 |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |
| **Ace3DS Plus**                                                                                                             |                        |                            No                            |                                      ALL                                      |                                ALL                                | This cart needs an SD card inserted to function for both ntrboot and regular NDS firmware.                                                                                                                                                                                                 |
| **Acekard 2i**                                                                                                              |                        |                            No                            |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                                                                                            |
| **Gateway Blue**                                                                                                            |                        |                            No                            | 4.1.0 - 4.5.0 |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **Infinity 3 R4i** (r4infinity.com)                                                      |                        |                            No                            |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **R4 3D Revolution**                                                                                                        |                        |                            No                            |                                      None                                     |                                None                               |                                                                                                                                                                                                                                                                                                            |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                         |                        |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** ([internal switch to switch between ntrboot and NDS modes](/images/screenshots/r4i-gold-3ds-plus.png)); do not manually flash with ntrboot.                                                                                          |
| **R4i Gold 3DS** (r4ids.cn)                                                              |                        |                            No                            |                                      ALL                                      |                                ALL                                | All carts are compatible.                                                                                                                                                                                                                                                                  |
| **R4i Ultra** (r4ultra.com)                                                              |                        |                            No                            |       <= 4.3.0       |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                         |                        |                          Unknown                         |                                      ALL                                      |                                ALL                                | Only the Deluxe Edition with the blue sticker is compatible.                                                                                                                                                                                                                               |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                  |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                 |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Sebelum mulai, pastikan _flashcart_ bisa menjalankan berkas `.nds` di konsol. Some flashcarts may require firmware or "kernel" files to be copied to the flashcart SD card. Consult your specific flashcart's instructions for more information.

Note that specific methods may have additional compatibility information.

Untuk eksploit ini, dengan metode _flashing_ apa pun, akan perlu besi berani kecil jika konsol sasaran Anda model lipat (jenis sistem 3DS yang bukan model lipat hanya old 2DS karena ada cetekan tidur). This is because the exploit requires your console to enter sleep mode while still having access to the buttons.

::: info

Untuk menguji fungsi besi berani, tahan di atas atau sekitar tombol (A)(B)(X)(Y) ketika konsol menyala apakah mode tidur bisa aktif. If it does, both displays will go black as long as the magnet is held in that spot.

:::

Note that the flashcart will not be able to be used for its standard functions while the ntrboot exploit is installed on it (except for in the case of the Acekard 2i, which remains functional _on NDS and custom firmware 3DS systems only_). This means that, for most flashcarts, it will not even display on the HOME Menu. There are optional steps at the end of the ntrboot flashing instructions to remove it from your flashcart when you are done.

::: danger

Perlu diingat pada kejadian langka tertentu, _flashcart_ kawe bisa **matot (_brick_)** saat mem-_flash_ sehingga tidak terbaca lagi. Kemungkinan tidak, tapi yang pasti, panduan ini hanya mendukung _flashcart_ ori. Untuk mengurangi kemungkinan mendapat _flashcart_ kawe, sebaiknya beli dari situs bereputasi baik (seperti [NDS Card](https://www.nds-card.com/)).

:::

___

## Methods

___

### Mem-flash ntrboot (Satu Sistem 3DS)

Metode ini hanya perlu konsol 3DS belum diretas dan _flashcart_ yang kompatibel. Metode ini menggunakan _flashcart_ untuk menjalankan `.nds` ntrboot flasher di 3DS. Ini berarti _flashcart_ harus bisa menjalankan `.nds` di _firmware_ 3DS. See the flashcart table above for more information.

::: tip

Continue to [Flashing ntrboot (3DS Single System)](flashing-ntrboot-\(3ds-single-system\))

:::

___

### Mem-flash ntrboot (Beberapa Sistem 3DS)

Metode ini perlu akses sementara ke jenis konsol 3DS lain yang sudah ada boot9strap. _Flashcart_ tidak harus untuk 3DS, yang penting bisa di-_flash_ ntrboot.

::: tip

Continue to [Flashing ntrboot (3DS Multi System)](flashing-ntrboot-\(3ds-multi-system\))

:::

___

### Mem-flash ntrboot (NDS)

Metode ini perlu akses sementara ke Nintendo DS atau Nintendo DS Lite yang bisa membaca _flashcart_ Anda. Metode ini perlu _flashcart_ untuk menjalankan `.nds` ntrboot flasher di NDS.

::: tip

Continue to [Flashing ntrboot (NDS)](flashing-ntrboot-\(nds\))

:::

___

### Mem-flash ntrboot (DSi)

Metode ini perlu akses sementara ke konsol Nintendo DSi yang bisa membaca _flashcart_ Anda. Metode ini juga perlu _flashcart_ untuk menjalankan `.nds` ntrboot flasher di DSi. Berarti _flashcart_ harus bisa menjalankan `.nds` di _firmware_ DSi. See the flashcart table above for more information.

::: tip

Continue to [Flashing ntrboot (DSi)](flashing-ntrboot-\(dsi\))

:::
