# Mem-flash ntrboot (Beberapa Sistem 3DS)

## Bacaan Penting

Sebelum melanjutkan, pastikan sudah baca semua informasi di [ntrboot](ntrboot).

Metode ini perlu akses sementara ke jenis konsol 3DS lain yang sudah ada boot9strap. _Flashcart_ tidak harus untuk 3DS, yang penting bisa di-_flash_ ntrboot.

::: danger

Perlu diingat pada kejadian langka tertentu, _flashcart_ kawe bisa matot (_**brick**_) saat mem-_flash_ sehingga tidak terbaca lagi. Kemungkinan tidak, tapi yang pasti, panduan ini hanya mendukung _flashcart_ ori. Untuk mengurangi kemungkinan mendapat _flashcart_ kawe, dianjurkan membeli di situs bereputasi baik (seperti [NDS Card](https://www.nds-card.com/)).

:::

## Apa yang Perlu

- _Flashcart_ yang kompatibel ntrboot
- Dua konsol jenis 3DS
  - **3DS sumber**: Konsol jenis 3DS yang sudah ada boot9strap
  - **3DS sasaran**: Konsol 3DS yang masih _firmware_ bawaan
- Versi v1.3 dari [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (unduhan langsung)
- Versi terkini dari [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instruksi

### Bagian I - Persiapan

1. Matikan daya **3DS sumber**
2. Sisipkan kartu SD **3DS sumber** ke komputer Anda
3. Buat folder dengan nama `ntrboot` di akar kartu SD
4. Salin `boot9strap_ntr.firm` dan `boot9strap_ntr.firm.sha` dari `.zip` boot9strap ntr ke folder `/ntrboot/` di kartu SD
5. Salin `ntrboot_flasher.firm` ke folder `/luma/payloads/` di kartu SD **3DS sumber**
6. Sisip kembali kartu SD **3DS sumber** ke **3DS sumber** lagi
7. Sisipkan flashcart DS / DSi yang kompatibel ntrboot ke **3DS sumber**

### Section II - Flashing ntrboot

1. Launch the Luma3DS chainloader by holding (Start) during boot on **the source 3DS**
2. Select "ntrboot_flasher"
3. Read the red screen warning
4. Tekan (A) untuk lanjut
5. Select your flashcart
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Select "Dump Flash"
7. Wait until the process is completed
8. Tekan (A) untuk lanjut
9. Press (A) to return to the main menu
10. Select "Inject Ntrboot"
11. Press (A) for retail unit ntrboot
12. Wait until the process is completed
13. Press (A) to return to the main menu
14. Press (B) to power off **the source 3DS**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
