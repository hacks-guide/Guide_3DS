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

1. Matikan daya **DSi sumber**
2. Sisipkan kartu SD _flashcart_ ke komputer Anda
3. Salin `ds_ntrboot_flasher_dsi.nds` ke kartu SD _flashcart_
4. Sisip kembali kartu SD ke _flashcart_
5. Sisipkan _flashcart_ DS / DSi yang kompatibel ntrboot ke **DSi sumber**

### Bagian II - Mem-flash ntrboot

1. Buka `ds_ntrboot_flasher_dsi.nds` di **DSi sumber** menggunakan _flashcart_
2. Tekan (A) untuk lanjut
3. Cari _flashcart_ Anda dengan tombol (Atas) (Bawah)
4. Tekan (A) untuk lanjut
5. Tekan (A) untuk "inject ntrboothax"
6. Tekan (A) untuk memilih "RETAIL"
7. Tekan (A) untuk lanjut
8. Lalu pilih "EXIT"

___

::: tip

Lanjut ke [Memasang boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
