Bagian ini akan mengembalikan pengaturan sistem ke bawaan. **Tidak memengaruhi permainan terpasang dan simpanannya.** Ini **diperlukan** untuk mencegah isu terkait _applet_ dan mode memori perluasan di beberapa konsol.

::: warning

Ini akan mengatur ulang data Mii Anda. Jika ingin menyimpan Mii buatan Anda, bisa [buat kode QR](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) untuk tiap Mii yang ingin disimpan, atau cadangkan `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` sebelum mengikuti instruksi ini. Berkas ini boleh dipulihkan ke direktori itu lagi _**seusai**_ melewati penyiapan awal konsol.

:::

1. Matikan daya konsol
2. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
3. Tekan (B) beberapa kali untuk ke menu utama
4. Navigasi ke `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - `<ID0>` di sini folder dengan nama berjumlah 32 huruf
5. Sorot ke `00010017` dengan Tombol Arah
6. Tekan (R) + (A) untuk memunculkan opsi folder
7. Pilih "Copy to 0:/gm9/out"
8. Tekan (A) untuk lanjut
9. Selagi menyorot `00010017`, tekan (X) untuk dihapus
10. Tekan (A) untuk konfirmasi
11. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
12. Sesudah berkas dihapus, tekan (A) untuk lanjut
13. Tekan (A) untuk menutup ulang izin tulis jika diminta
14. Tekan (Start) untuk nyalakan ulang konsol
15. Konsol akan memuat ke menu penyiapan awal
    - Memang akan seperti ini. Data permainan masih ada semua
16. Selesaikan menu penyiapan awal dengan mengikuti yang diminta di layar konsol
