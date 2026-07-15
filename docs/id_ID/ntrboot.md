# ntrboot

## Bacaan Penting

ntrboot refers to the ability for all 3DS family consoles to boot into a special, recovery-mode cartridge to perform actions before any other part of the operating system loads. It is commonly used for data recovery and unbricking, but can also be used to install boot9strap, a custom firmware loader.

To use ntrboot, a compatible cartridge (normally a 'flashcart') is required. Many flashcarts from the NDS or DSi era can be repurposed for ntrboot, while new ones can be purchased for roughly $20 USD.

No matter how you run ntrboot, you will need a small **magnet** that is strong enough to to put the console into sleep mode (except on the Old 2DS, which uses a sleep switch). Untuk menguji fungsi besi berani, tahan di atas atau sekitar tombol (A)(B)(X)(Y) ketika konsol menyala apakah mode tidur bisa aktif. Jika bisa, kedua layar akan hitam selama besi berani ditahan di situ.

## Recommended for new purchases

If you don't already have a flashcart, or if your flashcart is incompatible with ntrboot, it is recommended to purchase one of these.

Cartridges may be available for a cheaper price through a local distributor or on AliExpress. For more information, see the [NTRBoot Quick Start Guide](https://www.flashcarts.net/ntrboot-ds-carts?tab=flashable#flashcarts) (in English only).

| Flashcart                                                      |                  Price | Notes                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------- | ---------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**DSpico**](https://www.nds-card.com/ProShow.asp?ProID=658)   | $25.99 | **Must be flashed using a computer** (using a microUSB or USB-C cable, depending on the cartridge). This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                             |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575) | $24.99 | **Sudah di-_flash_ ntrboot** (ada cetekan eksternal untuk beralih ke ntrboot 3DS atau mode NDS); jangan di-_flash_-kan ntrboot. This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware. |

::: tip

If you have a DSpico, you will need to flash it with an ntrboot-compatible firmware. To do so:

- Download [DSpico_Hybrid_B9S-1.3_GCD.uf2](https://github.com/coderkei/dspico-hybrid-fw/releases/download/1.4/DSpico_Hybrid_B9S-1.3_GCD.uf2)
- Remove the microSD card from your DSpico
- Connect the DSpico to your computer using a microUSB or USB-C cable (depending on the cartridge)
  - A `RPI-RP2` drive should appear on your computer
- Copy `DSpico_Hybrid_B9S-1.3_GCD.uf2` to the root of the `RPI-RP2` drive (not inside any folder)
  - The drive should automatically disconnect itself after a few seconds
- **After the drive has disconnected itself**, disconnect the DSpico from your computer and reinsert the microSD card
  - The hybrid firmware has been successfully flashed
    :::

::: tip

Once your cartridge is flashed with ntrboot, you can continue to [Installing boot9strap (ntrboot)](installing-boot9strap-(ntrboot)). You can ignore the rest of this page.

:::

## Other Flashcarts

If you already have a flashcart that _isn't_ a DSpico or Ace3DS X, you can check this list to see if it can be flashed with ntrboot.

Walaupun eksploit ntrboot berfungsi tanpa terikat versi sistem, tapi tidak untuk ntrboot flasher (pemasang eksploit ke _flashcart_). Ini berarti, tergantung versi konsol yang mau membaca _flashcart_, hanya akan tersedia metode tertentu.

Perlu diingat untuk _flashcart_ dengan "Time Bomb" tidak akan bisa menjalankan `.nds` jika jam sistem sudah lewat tanggal yang ditentukan _firmware flashcart_. Ini bisa kita longkap dengan memundurkan mentok tanggal jam sistem.

| Flashcart                                                                                                                    |                  Price |                      "_Time Bomb_"?                     |                                   Versi 3DS?                                  |                             Versi DSi?                            | Catatan Lain                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :-----------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=574)         |           Out of Stock |                     3 September 2024                    |                                     SEMUA                                     |                               SEMUA                               | **Sudah di-_flash_ ntrboot**; bisa di-_flash_ balik ke _flashcart_ NDS.                                                                                                                    |
| [**DSTT** (ndstt.com)](https://www.nds-card.com/ProShow.asp?ProID=157)                    | $19.99 |                          Tidak                          |                                    Tak ada                                    |                              Tak ada                              | Hanya model dengan [_flash chip_ tertentu](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) yang bisa ntrboot.                                                          |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=146)     | $20.99 | 1.85b: 3 September 2024 |                                     SEMUA                                     |                               SEMUA                               |                                                                                                                                                                                                            |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=490) | $22.99 |  4.0b: 3 September 2024 |                                     SEMUA                                     |                               SEMUA                               | Hanya _flashcart_ r4isdhc **.com** tahun 2014 ke atas yang kompatibel.                                                                                                     |
| **Ace3DS Plus**                                                                                                              |                        |                          Tidak                          |                                     SEMUA                                     |                               SEMUA                               | This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                                                             |
| **Acekard 2i**                                                                                                               |                        |                          Tidak                          |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                            |
| **Gateway Blue**                                                                                                             |                        |                          Tidak                          | 4.1.0 - 4.5.0 |                               SEMUA                               |                                                                                                                                                                                                            |
| **Infinity 3 R4i** (r4infinity.com)                                                       |                        |                          Tidak                          |                                     SEMUA                                     |                               SEMUA                               |                                                                                                                                                                                                            |
| **R4 3D Revolution**                                                                                                         |                        |                          Tidak                          |                                    Tak ada                                    |                              Tak ada                              |                                                                                                                                                                                                            |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                          |                        |                          Tidak                          |                                     SEMUA                                     |                               SEMUA                               | **Sudah di-_flash_ ntrboot** ([ada cetekan internal untuk beralih ke mode ntrboot atau NDS](/images/screenshots/r4i-gold-3ds-plus.png)); jangan di-_flash_-kan ntrboot. |
| **R4i Gold 3DS** (r4ids.cn)                                                               |                        |                          Tidak                          |                                     SEMUA                                     |                               SEMUA                               | Kompatibel semua _flashcart_.                                                                                                                                                              |
| **R4i Ultra** (r4ultra.com)                                                               |                        |                          Tidak                          |       <= 4.3.0       |                               SEMUA                               |                                                                                                                                                                                                            |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                          |                        |                      Tak Diketahui                      |                                     SEMUA                                     |                               SEMUA                               | Hanya "Deluxe Edition" stiker biru yang kompatibel.                                                                                                                                        |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                   |                        |  4.0b: 3 September 2024 |                                     SEMUA                                     |                               SEMUA                               | Hanya _flashcart_ r4isdhc **.com** tahun 2014 ke atas yang kompatibel.                                                                                                     |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                  |                        |  4.0b: 3 September 2024 |                                     SEMUA                                     |                               SEMUA                               | Hanya _flashcart_ r4isdhc **.com** tahun 2014 ke atas yang kompatibel.                                                                                                     |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Sebelum mulai, pastikan _flashcart_ bisa menjalankan berkas `.nds` di konsol. Beberapa _flashcart_ perlu ditaruh dulu "_firmware_" atau "kernel" ke kartu SD _flashcart_. Rujuk ke instruksi _flashcart_ tersebut untuk informasi lanjut.

Untuk eksploit ini, dengan metode _flashing_ apa pun, akan perlu besi berani kecil jika konsol sasaran Anda model lipat (hanya old 2DS yang tidak perlu besi berani karena ada sakelar tidur). Itu karena eksploit ini mengharuskan konsol masuk mode tidur tapi tetap ada akses ke tombol.

Perlu diingat, _flashcart_ tidak akan bisa digunakan seperti biasa ketika sudah di-_flash_ eksploit ntrboot (kecuali di kasus Acekard 2i yang masih berfungsi _hanya di konsol DS dan 3DS CFW_). Berarti untuk _flashcart_ lain biasanya tidak akan muncul di HOME Menu walau terbaca. Di ujung panduan mem-_flash_ ntrboot, ada instruksi memulihkan _flashcart_ jika mau.

::: danger

Perlu diingat pada kejadian langka tertentu, _flashcart_ kawe bisa **matot (_brick_)** saat mem-_flash_ sehingga tidak terbaca lagi. Kemungkinan tidak, tapi yang pasti, panduan ini hanya mendukung _flashcart_ ori. Untuk mengurangi kemungkinan mendapat _flashcart_ kawe, sebaiknya beli dari situs bereputasi baik (seperti [NDS Card](https://www.nds-card.com/)).

:::

### Mem-flash ntrboot (Satu Sistem 3DS)

Metode ini hanya perlu konsol 3DS belum diretas dan _flashcart_ yang kompatibel. Metode ini menggunakan _flashcart_ untuk menjalankan `.nds` ntrboot flasher di 3DS. Ini berarti _flashcart_ harus bisa menjalankan `.nds` di _firmware_ 3DS. Lihat tabel _flashcart_ di atas untuk informasi lanjut.

::: tip

Lanjut ke [Mem-_flash_ ntrboot (Satu Sistem 3DS)](flashing-ntrboot-(3ds-single-system))

:::

___

### Mem-flash ntrboot (Beberapa Sistem 3DS)

Metode ini perlu akses sementara ke jenis konsol 3DS lain yang sudah ada boot9strap. _Flashcart_ tidak harus untuk 3DS, yang penting bisa di-_flash_ ntrboot.

::: tip

Lanjut ke [Mem-_flash_ ntrboot (Beberapa Sistem 3DS)](flashing-ntrboot-(3ds-multi-system))

:::

___

### Mem-flash ntrboot (NDS)

Metode ini perlu akses sementara ke Nintendo DS atau Nintendo DS Lite yang bisa membaca _flashcart_ Anda. Metode ini perlu _flashcart_ untuk menjalankan `.nds` ntrboot flasher di NDS.

::: tip

Lanjut ke [Mem-_flash_ ntrboot (NDS)](flashing-ntrboot-(nds))

:::

___

### Mem-flash ntrboot (DSi)

Metode ini perlu akses sementara ke konsol Nintendo DSi yang bisa membaca _flashcart_ Anda. Metode ini juga perlu _flashcart_ untuk menjalankan `.nds` ntrboot flasher di DSi. Berarti _flashcart_ harus bisa menjalankan `.nds` di _firmware_ DSi. Lihat tabel _flashcart_ di atas untuk informasi lanjut.

::: tip

Lanjut ke [Mem-_flash_ ntrboot (DSi)](flashing-ntrboot-(dsi))

:::
