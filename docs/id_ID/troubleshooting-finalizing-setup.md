# Sidik Gangguan (Penyiapan Akhir)

Laman ini berisi saran sidik gangguan untuk isu yang umum ditemui saat mengikuti "Penyiapan Akhir". Jika saran dari laman ini tidak menyelesaikan isu, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) dan jelaskan isunya, termasuk apa yang sudah dicoba.

## Isu dengan Penyiapan Akhir

:::details Tidak bisa memperbarui konsol

Langkah di bawah ini bisa dicoba dari urutan mana saja, ini diurutkan dari termudah ke tersusah.

1. Jika menggunakan Pretendo, balik dulu ke akun Nintendo di Nimbus dan coba lagi
2. Atur pengaturan DNS ke "Auto"
3. Mendekat ke perute WiFi
4. Perbarui dari Safe Mode: Matikan daya konsol, tahan (L) + (R) + (Tombol Atas) + (A) saat awal nyala, dan ikuti yang diminta di layar
5. Hapus slot sambungan WiFi, lalu sambung ulang ke WiFi
6. Nyalakan ulang perute WiFi
7. Sambungkan ke WiFi lain, seperti hotspot seluler
8. Server Nintendo mungkin sedang padam; Coba lagi nanti
9. Jika masih muncul galat, [ikuti CTRTransfer](ctrtransfer), lalu coba lagi
10. Untuk bantuan (berbahasa Inggris), gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

:::details Error #22: finalize.romfs is invalid

Berkas `finalize.romfs` tidak terbaca atau rusak. [Unduh ulang berkasnya](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) dan salin ke akar kartu SD, timpa berkas yang ada, lalu coba lagi.

:::

:::details Information #23: finalize.romfs in wrong location

Berkas `finalize.romfs` letaknya salah dan bukan di akar kartu SD. Naskah akan mencoba mengatasi ini, tapi perlu izin Anda dulu. Tekan (A) pada beberapa sembulan untuk lanjut.

:::

:::details Error #24: SD is write-protected

Pastikan pengunci kartu SD tidak [dikunci](/images/sdlock.png). Jika kartu SD tidak dikunci tapi masih galat, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan.

:::

:::details Error #02: Missing essential.exefs

Tadi memilih 'No' saat diminta "Make essential files backup?" di GodMode9. Matikan daya konsol, lalu nyalakan selagi menahan (Start) untuk ke GodMode9, pilih 'Yes' saat diminta, lalu coba lagi.

:::

:::details Error #04: No space

Setidaknya perlu sisa ruang 1.3GB untuk mencadang NAND, ini sudah bagian dari naskah. Jika sisa ruang tidak cukup, ikuti langkah ini:

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. **Salin folder `Nintendo 3DS` dari akar kartu SD ke komputer Anda**
4. Hapus folder `Nintendo 3DS` dari kartu SD
5. Sisip kembali kartu SD ke konsol
6. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
7. Tekan tombol (Home)
8. Pilih "Scripts..."
9. Pilih "finalize"
10. Tekan (A) untuk mencadang NAND
    - Ini akan lama sekitar lima belas menit
11. Tekan (A) lagi
    - Konsol seharusnya otomatis mati daya
12. Sisipkan kartu SD ke komputer Anda
13. **Salin isi folder `/gm9/backups/` di kartu SD ke letak yang aman di komputer**
14. Hapus berkas `<date>_<serialnumber>_sysnand_##.bin` dan `<date>_<serialnumber>_sysnand_##.bin.sha` dari kartu SD
15. Salin folder `Nintendo 3DS` dari komputer Anda ke akar kartu SD
16. Hapus folder `Nintendo 3DS` dari komputer Anda

Sesudah menaruh cadangan NAND di tempat aman:

1. Sisip kembali kartu SD ke konsol
2. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
3. Tekan tombol (Home)
4. Pilih "Scripts..."
5. Pilih "finalize"
6. Lanjutkan naskah seperti biasa
    - Pencadangan NAND akan otomatis dilewati

:::

:::details Information #05: No title database

Tekan (A) untuk mengimpor _title database_, buka izin tulis SysNAND sesuai kombo tombol di layar, lalu lanjutkan naskah seperti biasa.

:::

:::details Error #06 atau "Error: Could not open directory" saat mencadang NAND

Pastikan setidaknya masih tersisa 1.3GB di kartu SD. Jika sisa ruang tidak cukup, ikuti langkah ini:

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. **Salin folder `Nintendo 3DS` dari akar kartu SD ke komputer Anda**
4. Hapus folder `Nintendo 3DS` dari kartu SD
5. Sisip kembali kartu SD ke konsol
6. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
7. Lakukan [Pencadangan NAND](godmode9-usage#creating-a-nand-backup)
8. Salin isi folder `gm9/out` di kartu SD ke letak yang aman di komputer
9. Hapus berkas `<date>_<serialnumber>_sysnand_##.bin` dan `<date>_<serialnumber>_sysnand_##.bin.sha` dari kartu SD, biarkan essential.exefs di `/gm9/out/`
10. Salin folder `Nintendo 3DS` dari komputer Anda ke akar kartu SD
11. Hapus folder `Nintendo 3DS` dari komputer Anda

Jika ternyata kartu SD masih tersisa cukup ruang, mungkin kartu SD rusak. Periksa yang galat di kartu SD dengan mengikuti panduan sesuai sistem operasi komputer: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Pastikan pengunci kartu SD tidak [dikunci](/images/sdlock.png). Jika kartu SD tidak dikunci tapi masih galat, gabung ke [Discord Nintendo Homebrew](https://discord.gg/MWxPgEp) untuk bantuan.

:::

:::details Information #17: Duplicate NAND backup

Naskahnya mendeteksi tidak ada folder Nintendo 3DS _DAN_ ternyata sudah pernah mencadang NAND. Jika berniat memasang aplikasi _homebrew_, lakukan berikut ini:

1. Tekan (B) untuk batal mencadang NAND baru lagi
2. Tahan (R) dan tekan (Start) bersamaan untuk matikan daya konsol
3. **Salin isi folder `/gm9/backups/` ke letak yang aman di komputer Anda**
4. Hapus `/gm9/backups/` dari kartu SD
5. Jika tadi folder Nintendo 3DS sudah disalin dan ada di luar kartu SD, salin balik ke kartu SD
    - Jika tidak punya folder Nintendo 3DS, nyalakan konsol ke HOME Menu setidaknya sekali dengan kartu SD untuk membuatnya
6. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
7. Tekan (Home) untuk membuka menu tindakan
8. Pilih "Scripts..."
9. Pilih "finalize"
10. Ikuti sembulan perintah yang diminta dari naskah

:::

:::details Error #18a/18b: MSET9 detected

MSET9 belum dihapus di laman sebelumnya. Naskah akan mencoba menghapus MSET9; ikuti instruksi dari naskah.

:::

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Kembali ke [Penyiapan Akhir](finalizing-setup)

:::

<!--@include: ./_include/troubleshooting-return.md -->
