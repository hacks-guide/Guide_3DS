# Mem-flash ntrboot (NDS)

## Bacaan Penting

Sebelum melanjutkan, pastikan sudah baca semua informasi di [ntrboot](ntrboot)

Metode ini perlu akses sementara ke Nintendo DS atau Nintendo DS Lite yang bisa membaca _flashcart_ Anda. Metode ini perlu _flashcart_ untuk menjalankan `.nds` ntrboot flasher di NDS.

::: danger

Perlu diingat pada kejadian langka tertentu, _flashcart_ kawe bisa **matot (_brick_)** saat mem-_flash_ sehingga tidak terbaca lagi. Kemungkinan tidak, tapi yang pasti, panduan ini hanya mendukung _flashcart_ ori. Untuk mengurangi kemungkinan mendapat _flashcart_ kawe, sebaiknya beli dari situs bereputasi baik (seperti [NDS Card](https://www.nds-card.com/)).

:::

## Apa yang Perlu

- _Flashcart_ yang kompatibel ntrboot
- Dua konsol
    - **NDS / NDSL sumber**: Nintendo DS atau Nintendo DS Lite yang bisa membaca _flashcart_ Anda
    - **3DS sasaran**: Konsol 3DS yang masih _firmware_ bawaan
- Versi v1.3 dari [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (unduhan langsung)
- Versi terkini dari [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instruksi

### Bagian I - Persiapan

1. Matikan daya **NDS / NDSL sumber**
2. Sisipkan kartu SD _flashcart_ ke komputer Anda
3. Buat folder dengan nama `ntrboot` di akar kartu SD _flashcart_
4. Salin `boot9strap_ntr.firm` dari `.zip` boot9strap-ntr ke folder `/ntrboot/` di kartu SD _flashcart_
5. Salin `ntrboot_flasher_nds.nds` ke kartu SD _flashcart_
6. Sisip kembali kartu SD ke _flashcart_
7. Sisipkan _flashcart_ DS / DSi yang bisa ntrboot ke **NDS / NDSL sumber**

### Bagian II - Mem-flash ntrboot

1. Buka `ntrboot_flasher_nds.nds` di **NDS / NDSL sumber** lewat _flashcart_
2. Tekan (A) untuk lanjut
3. Cari _flashcart_ Anda dengan tombol (Atas) (Bawah)
4. Tekan (A) untuk lanjut
5. Pilih "Dump flash" untuk mencadang data memori _flashcart_
6. Tekan kombo yang diberikan untuk konfirmasi
7. Tekan (A) untuk lanjut
8. Cari _flashcart_ Anda dengan tombol (Atas) (Bawah)
9. Tekan (A) untuk lanjut
10. Pilih "Inject FIRM" untuk memasang boot9strap ke _flashcart_
11. Tekan kombo yang diberikan untuk konfirmasi
12. Tekan (A) untuk lanjut
13. Matikan daya **NDS / NDSL sumber**
14. Keluarkan _flashcart_ dari **NDS / NDSL sumber**

___

::: tip

Lanjut ke [Memasang boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
