1. Tekan (Home) untuk membuka menu tindakan
2. Pilih "Scripts..."
3. Pilih "GM9Megascript"
4. Pilih "Backup Options"
5. Pilih "SysNAND Backup"
6. Tekan (A) untuk konfirmasi
    - Proses ini akan lumayan lama
    - Jika muncul galat, cari penanganannya di [panduan sidik gangguan](troubleshooting-finalizing-setup.html)
7. Tekan (A) untuk lanjut
8. Tekan (B) untuk kembali ke menu utama
9. Pilih "Exit"
10. Tekan (A) untuk menutup ulang izin tulis jika diminta
11. Navigasi ke `[S:] SYSNAND VIRTUAL`
12. Tekan (A) pada `essential.exefs` untuk pilih
13. Pilih "Copy to 0:/gm9/out"
    - Jika muncul "Destination already exists", tekan (A) pada "Overwrite file(s)"
14. Tekan (A) untuk lanjut
15. Tahan (R) dan tekan (Start) bersamaan untuk matikan daya konsol
16. Sisipkan kartu SD ke komputer Anda
17. Salin `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, dan `essential.exefs` dari folder `/gm9/out/` di kartu SD ke letak yang aman di komputer
    - Salin cadangan ini ke banyak tempat (seperti di penyimpanan daring, _hard disk_ luar, dll.)
    - Cadangan ini untuk menghindari _brick_ (matot) dan/atau memulihkan berkas dari citra NAND jika nanti terjadi kesalahan
18. Setelah disalin, hapus `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` dari folder `/gm9/out/` di kartu SD
    - Berkas cadangan lain berukuran kecil, jadi boleh dibiarkan di kartu SD agar mudah diakses
19. Sisip kembali kartu SD ke konsol
