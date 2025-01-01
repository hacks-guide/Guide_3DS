# Mem-flash ntrboot (DSi)

## Bacaan Penting

Sebelum melanjutkan, pastikan sudah baca semua informasi di [ntrboot](ntrboot)

Metode ini perlu akses sementara ke konsol Nintendo DSi yang bisa membaca _flashcart_ Anda. Metode ini juga perlu _flashcart_ untuk menjalankan `.nds` ntrboot flasher di DSi. Berarti _flashcart_ harus bisa menjalankan `.nds` di _firmware_ DSi. Lihat tabel _flashcart_ di [ntrboot](ntrboot) untuk informasi lanjut.

::: danger

Perlu diingat pada kejadian langka tertentu, _flashcart_ kawe bisa **matot (_brick_)** saat mem-_flash_ sehingga tidak terbaca lagi. Kemungkinan tidak, tapi yang pasti, panduan ini hanya mendukung _flashcart_ ori. Untuk mengurangi kemungkinan mendapat _flashcart_ kawe, sebaiknya beli dari situs bereputasi baik (seperti [NDS Card](https://www.nds-card.com/)).

:::

## Apa yang Perlu

- _Flashcart_ yang kompatibel ntrboot
- Dua konsol
  - **DSi sumber**: Nintendo DSi yang bisa membaca _flashcart_ Anda
  - **3DS sasaran**: Konsol 3DS yang masih _firmware_ bawaan
- Versi terkini dari [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instruksi

### Bagian I - Persiapan

1. Power off **the source DSi**
2. Sisipkan kartu SD _flashcart_ ke komputer Anda
3. Copy `ds_ntrboot_flasher_dsi.nds` to your flashcart's SD card
4. Sisip kembali kartu SD-nya ke _flashcart_
5. Insert your ntrboot compatible DS / DSi flashcart into **the source DSi**

### Bagian II - Mem-flash ntrboot

1. Launch `ds_ntrboot_flasher_dsi.nds` on **the source DSi** using your flashcart
2. Tekan (A) untuk lanjut
3. Pilih _flashcart_ Anda dengan tombol (Atas) dan (Bawah)
4. Tekan (A) untuk lanjut
5. Press (A) to "inject ntrboothax"
6. Press (A) to select "RETAIL"
7. Tekan (A) untuk lanjut
8. Select "EXIT"

___

::: tip

Lanjut ke [Memasang boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
