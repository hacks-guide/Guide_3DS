# Flashing ntrboot (DSi)

## Bacaan Penting

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot)

This method requires temporary access to a Nintendo DSi that is compatible with your flashcart. This method uses the flashcart to run the ntrboot flasher `.nds` file on your DSi. This means that your flashcart must support launching `.nds` files on your DSi's version. See the flashcart table on [ntrboot](ntrboot) for more information.

::: danger

Perlu diingat pada kejadian langka tertentu, _flashcart_ kawe bisa **matot (_brick_)** saat mem-_flash_ sehingga tidak terbaca lagi. Kemungkinan tidak, tapi yang pasti, panduan ini hanya mendukung _flashcart_ ori. Untuk mengurangi kemungkinan mendapat _flashcart_ kawe, dianjurkan membeli di situs bereputasi baik (seperti [NDS Card](https://www.nds-card.com/)).

:::

## Apa yang Perlu

- _Flashcart_ yang kompatibel ntrboot
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **3DS sasaran**: Konsol 3DS yang masih _firmware_ bawaan
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instruksi

### Bagian I - Persiapan

1. Power off **the source DSi**
2. Insert your flashcart's SD card into your computer
3. Copy `ds_ntrboot_flasher_dsi.nds` to your flashcart's SD card
4. Reinsert your flashcart's SD card back into your flashcart
5. Insert your ntrboot compatible DS / DSi flashcart into **the source DSi**

### Bagian II - Mem-flash ntrboot

1. Launch `ds_ntrboot_flasher_dsi.nds` on **the source DSi** using your flashcart
2. Tekan (A) untuk lanjut
3. Use (Up) and (Down) to select your flashcart
4. Tekan (A) untuk lanjut
5. Press (A) to "inject ntrboothax"
6. Press (A) to select "RETAIL"
7. Tekan (A) untuk lanjut
8. Select "EXIT"

___

::: tip

Lanjut ke [Memasang boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
