1. Tekan (Home) untuk membuka menu tindakan
2. Pilih "Scripts..."
3. Pilih "GM9Megascript"
4. Select "Backup Options"
5. Select "SysNAND Backup"
6. Tekan (A) untuk konfirmasi
   - Proses ini akan lumayan lama
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting-finalizing-setup.html)
7. Tekan (A) untuk lanjut
8. Tekan (B) untuk kembali ke menu utama
9. Pilih "Exit"
10. Tekan (A) untuk menutup ulang izin tulis jika diminta
11. Navigasi ke `[S:] SYSNAND VIRTUAL`
12. Press (A) on `essential.exefs` to select it
13. Pilih "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Tekan (A) untuk lanjut
15. Hold (R) and press (Start) at the same time to power off your console
16. Sisipkan kartu SD ke komputer Anda
17. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Sisip kembali kartu SD ke konsol
