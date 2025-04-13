---
noneSelected: Perlu tahu model konsol.
invalidVersion: Versi sistem ini sepertinya tidak absah.
otherPrefix: (Lainnya)
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/selecting.js
---

# Memulai

Sebelum memulai panduan ini, kita periksa dulu berapa versi sistem konsol dan apakah sudah ada CFW.

### Bagian I - Periksa CFW

1. Matikan daya konsol
2. Tahan tombol (Select)
3. Nyalakan daya konsol selagi tetap menahan tombol (Select)
4. Jika tidak muncul menu kustom (konsol hanya menyala ke HOME Menu), boleh lanjut ke bagian berikutnya

::: warning

Jika muncul konfigurasi Luma3DS atau menu kustom lainnya (misal: GodMode9, Decrypt9WIP), BERHENTI - konsol sudah _custom firmware_! Lanjut saja dari [sini](checking-for-cfw#what-to-do-next).

:::

### Bagian II - Periksa Versi Sistem

1. Buka System Settings di konsol
2. Versi konsol akan ditampilkan di kanan bawah layar atas (misal: "Ver. 11.17.0-50U")

### Bagian III - Pilih Metode

Untuk mencari metode sesuai konsol, pilih model konsol dan versi sistem seperti Bagian II tadi.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### Metode yang Lain

Jika bisa, ikuti saja metode yang ditunjukkan di atas.

Jika tidak, ada metode lain yang bisa di semua versi, tapi perlu peranti keras tambahan:

1. [ntrboot](ntrboot) - perlu _flashcart_ DS yang kompatibel
2. [Memasang boot9strap (Oprek Fisik)](installing-boot9strap-\(hardmod\)) - harus menyolder
