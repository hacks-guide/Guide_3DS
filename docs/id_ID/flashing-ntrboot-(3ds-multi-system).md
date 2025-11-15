# Mem-flash ntrboot (Beberapa Sistem 3DS)

## Bacaan Penting

Sebelum melanjutkan, pastikan sudah baca semua informasi di [ntrboot](ntrboot).

Metode ini perlu akses sementara ke jenis konsol 3DS lain yang sudah ada boot9strap. _Flashcart_ tidak harus untuk 3DS, yang penting bisa di-_flash_ ntrboot.

::: danger

Perlu diingat pada kejadian langka tertentu, _flashcart_ kawe bisa **matot (_brick_)** saat mem-_flash_ sehingga tidak terbaca lagi. Kemungkinan tidak, tapi yang pasti, panduan ini hanya mendukung _flashcart_ ori. Untuk mengurangi kemungkinan mendapat _flashcart_ kawe, sebaiknya beli dari situs bereputasi baik (seperti [NDS Card](https://www.nds-card.com/)).

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
7. Sisipkan _flashcart_ DS / DSi yang kompatibel ntrboot ke **3DS sumber**

### Bagian II - Mem-flash ntrboot

1. Masuk ke Luma3DS chainloader dengan menahan (Start) saat awal nyala di **3DS sumber**
2. Pilih "ntrboot_flasher"
3. Baca peringatan layar merah
4. Tekan (A) untuk lanjut
5. Pilih _flashcart_ Anda
   - Jika tidak ada _flashcart_ Anda pada daftar di layar atas, baca keterangan di layar bawah pada tiap opsi
6. Pilih "Dump Flash"
7. Tunggu sampai proses ini selesai
8. Tekan (A) untuk lanjut
9. Tekan (A) untuk kembali ke menu utama
10. Pilih "Inject Ntrboot"
11. Tekan (A) untuk "retail unit ntrboot"
12. Tunggu sampai proses ini selesai
13. Tekan (A) untuk kembali ke menu utama
14. Tekan (B) untuk matikan daya **3DS sumber**

___

::: tip

Lanjut ke [Memasang boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
