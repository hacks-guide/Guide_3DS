# Membuat Dump Permainan dan Kartrid

::: info

Untuk bantuan berbahasa Inggris terkait GodMode9 dan tentang membuat naskah, pembaruan, dan info; gabung ke [Discord GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Bacaan Penting

Selain membuat dan memulihkan cadangan NAND; GodMode9 juga bisa membuat _dump_ dari aplikasi terpasang menjadi `.cia`, membuat _dump_ kartrid menjadi ROM `.3ds`, dan langsung memasang data kartrid ke konsol.

## Memperbarui GodMode9

::: info

Instruksi ini ditulis untuk digunakan di GodMode9 v2.0.0 ke atas. Jika punya GodMode9 versi lawas, ikuti instruksi memperbarui di bawah.

:::

### Apa yang Perlu

- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)

### Instruksi

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `GodMode9.firm` dari `.zip` GodMode9 ke folder `/luma/payloads/` di kartu SD
4. Salin folder `gm9` dari `.zip` GodMode9 ke akar kartu SD
5. Sisip kembali kartu SD ke konsol

## Membuat Dump Kartrid

::: info

Sisipkan kartrid yang ingin di-_dump_ ke konsol

- Kartrid 3DS akan di-_dump_ ke format `.3ds`
- Kartrid NDS akan di-_dump_ ke format `.nds`

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[C:] GAMECART`
3. Ikuti langkah berikut sesuai jenis kartrid:
    - **Kartrid 3DS:** Tekan (A) pada `[TitleID].trim.3ds` untuk pilih
    - **Kartrid NDS:** Tekan (A) pada `[TitleID].nds` untuk pilih
        - _Dump_ terpangkas umumnya tidak dianjurkan untuk permainan NDS, karena banyak isu saat dijalankan
4. Pilih "Copy to 0:/gm9/out"
5. Keluaran berformat `.3ds` atau `.nds` yang tak bisa dipasang akan ada di folder `/gm9/out/` di kartu SD

## Memasang Data Kartrid Langsung ke Konsol

::: info

Ini hanya berfungsi untuk permainan 3DS; kartrid NDS tidak bisa langsung dipasang ke sistem konsol.

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[C:] GAMECART`
3. Tekan (A) pada `[TitleID].trim.3ds` untuk pilih, lalu pilih "NCSD image options...", dan pilih "Install game image"
4. Tekan (A) untuk membuka izin tulis SysNAND (lvl1), lalu tekan kombo yang diberikan
5. Sesudah proses selesai, permainan akan muncul di HOME Menu sebagai aplikasi terpasang.

## Membuat Dump Kartrid 3DS ke .CIA

::: info

Ini hanya boleh digunakan jika [Memasang Data Kartrid Langsung ke Konsol](#installing-a-game-cartridge-directly-to-the-system) tidak berfungsi.

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[C:] GAMECART`
3. Tekan (A) pada `[TitleID].trim.3ds` untuk pilih, lalu pilih "NCSD image options...", dan pilih "Build CIA from file"
4. Keluaran berformat `.cia` yang bisa dipasang akan ada di folder `/gm9/out/` di kartu SD

## Membuat Dump Aplikasi Terpasang

::: info

Berikut cara men-_dump_ aplikasi yang dipasang sistem atau pengguna, contohnya unduhan eShop.

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Tekan (Home) untuk membuka menu tindakan
3. Pilih "Title manager"
4. Pilih salah satu berikut ini tergantung jenis aplikasi yang ingin di-_dump_
    - **Apli Dipasang Pengguna**: `[A:] SD CARD`
    - **Apli Sistem / DSiWare**: `[1:] NAND / TWL`
5. Pilih aplikasi yang ingin di-_dump_
6. Pilih "Manage Title..."
7. Pilih "Build CIA (standard)"
8. Keluaran berformat `.cia` yang bisa dipasang akan ada di folder `/gm9/out/` di kartu SD

## Mencadang Simpanan GBA VC

::: info

Simpanan akan diekstrak ke folder `/gm9/out/` di kartu SD dengan nama `<TitleID>.gbavc.sav`.

:::

::: info

Untuk mencari tahu Title ID berkas `<TitleID>.gbavc.sav`, lihat daftar Title ID permainan di konsol dengan menekan (Home) untuk membuka menu tindakan, pilih `Title manager`, lalu pilih `[A:] SD CARD`.

:::

1. Lakukan cara berikut untuk mencadang simpanan tiap permainan GBA VC yang diinginkan:
    - Buka permainan GBA VC
    - Keluar dari GBA VC
    - Matikan daya konsol
    - Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
    - Navigasi ke `[S:] SYSNAND VIRTUAL`
    - Tekan (A) pada `agbsave.bin` untuk pilih
    - Pilih "AGBSAVE options..."
    - Pilih "Dump GBA VC save"
    - Tekan (A) untuk lanjut
    - Tekan (Start) untuk nyalakan ulang konsol

## Memulihkan Simpanan GBA VC

::: info

Untuk mencari tahu Title ID berkas `<TitleID>.gbavc.sav`, lihat daftar Title ID permainan di konsol dengan menekan (Home) untuk membuka menu tindakan, pilih `Title manager`, lalu pilih `[A:] SD CARD`.

:::

1. Lakukan cara berikut untuk memulihkan simpanan tiap permainan GBA VC yang diinginkan:
    - Buka permainan GBA VC
    - Keluar dari GBA VC
    - Matikan daya konsol
    - Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
    - Navigasi ke `[0:] SDCARD` -> `gm9` -> `out`
    - Tekan (Y) pada `<TitleID>.gbavc.sav` yang ingin dipulihkan untuk disalin
    - Tekan (B) untuk kembali ke menu utama
    - Navigasi ke `[S:] SYSNAND VIRTUAL`
    - Tekan (A) pada `agbsave.bin` untuk pilih
    - Pilih "AGBSAVE options..."
    - Pilih "Inject GBA VC save"
    - Tekan (A) untuk lanjut
    - Tekan (Start) untuk nyalakan ulang konsol
    - Buka permainan GBA VC
    - Keluar dari GBA VC

## Mengenkripsi / Dekripsi berkas .CIA

::: info

Agar lebih rapih, salin tiap berkas '.3ds' yang ingin dienkripsi / dekripsi **ke** folder '/ cias /' di kartu SD

:::

1. Tahan tombol (Start) selagi menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[0:] SDCARD` -> `cias`
3. Tekan (A) pada berkas `.cia` untuk pilih, lalu pilih "CIA image options..."
4. Pilih opsi dengan fungsi yang ingin dilakukan:
    - **Encrypt to 0:/gm9/out:** Menyalin dan mengenkripsi `.cia` terpilih ke folder `/gm9/out/` di kartu SD
    - **Decrypt to 0:/gm9/out:** Menyalin dan mendekripsi `.cia` terpilih ke folder `/gm9/out/` di kartu SD
    - **Encrypt inplace:** Menimpa berkas `.cia` terpilih dengan versi enkripsi
    - **Decrypt inplace:** Menimpa berkas `.cia` terpilih dengan versi dekripsi
5. Keluaran `.cia` terenkripsi / dekripsi akan ada di letak yang diinginkan
