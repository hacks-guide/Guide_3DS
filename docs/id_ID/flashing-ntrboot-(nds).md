# Flashing ntrboot (NDS)

## Bacaan Penting

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot)

This method requires temporary access to a Nintendo DS or Nintendo DS Lite that is compatible with your flashcart. This method uses the flashcart to run the ntrboot flasher `.nds` file on your NDS.

::: danger

Perlu diingat pada kejadian langka tertentu, _flashcart_ kawe bisa matot (_**brick**_) saat mem-_flash_ sehingga tidak terbaca lagi. Kemungkinan tidak, tapi yang pasti, panduan ini hanya mendukung _flashcart_ ori. Untuk mengurangi kemungkinan mendapat _flashcart_ kawe, dianjurkan membeli di situs bereputasi baik (seperti [NDS Card](https://www.nds-card.com/)).

:::

## Apa yang Perlu

- _Flashcart_ yang kompatibel ntrboot
- Two consoles
  - **The source NDS / NDSL**: the Nintendo DS or Nintendo DS Lite which is compatible with your flashcart
  - **3DS sasaran**: Konsol 3DS yang masih _firmware_ bawaan
- Versi v1.3 dari [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (unduhan langsung)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instruksi

### Bagian I - Persiapan

1. Power off **the source NDS / NDSL**
2. Insert your flashcart's SD card into your computer
3. Create a folder named `ntrboot` on the root of your flashcart's SD card
4. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
5. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
6. Reinsert your flashcart's SD card back into your flashcart
7. Insert your ntrboot compatible DS / DSi flashcart into **the source NDS / NDSL**

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on **the source NDS / NDSL** using your flashcart
2. Tekan (A) untuk lanjut
3. Use (Up) and (Down) to select your flashcart
4. Tekan (A) untuk lanjut
5. Select "Dump flash" to make a backup of your flashcart's memory
6. Input the key combo given to confirm
7. Tekan (A) untuk lanjut
8. Use (Up) and (Down) to select your flashcart
9. Tekan (A) untuk lanjut
10. Select "Inject FIRM" to install boot9strap to your flashcart
11. Input the key combo given to confirm
12. Tekan (A) untuk lanjut
13. Power off **the source NDS / NDSL**
14. Eject your flashcart from **the source NDS / NDSL**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
