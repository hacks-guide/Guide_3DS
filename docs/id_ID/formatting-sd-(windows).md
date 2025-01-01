# Formatting SD (Windows)

## Bacaan Penting

Ini adalah laman lebihan untuk memformat kartu SD agar terbaca di 3DS.

Jika 3DS sudah bisa membaca kartu SD, panduan ini tidak perlu.

This page is for Windows users only. If you are not on Windows, check out the [Formatting SD (Linux)](formatting-sd-\(linux\)) or [Formatting SD (Mac)](formatting-sd-\(mac\)) pages.

## Apa yang Perlu

- the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger only:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instruksi

### Section I - SD Card Formatter

1. Sisipkan kartu SD ke komputer Anda

2. Jika kartu SD ada berkas dan folder, salin dulu semuanya ke folder di komputer

3. Run `SD Card Formatter Setup` (the `.exe` file) in the downloaded `.zip` file with Administrator privileges, then install the program

4. Run `SD Card Formatter` from the Start Menu

5. Select your SD card's drive letter for "Select card"

   ::: danger

   Make sure you choose the correct drive letter, otherwise you might accidentally erase the wrong drive!

   :::

6. Enter anything for "Volume label"

7. Ensure that "Quick Format" is selected

8. Click "Format"

9. Pencet "OK"

10. Tunggu selesai memformat

11. Pencet "OK"

12. Close SD Card Formatter

13. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### Section II - guiformat (ONLY for 64GB or larger)

1. Run `guiformat.exe`

2. Select your SD card's drive letter for "Drive"

   ::: danger

   Make sure you choose the correct drive letter, otherwise you might accidentally erase the wrong drive!

   :::

3. Select a size for "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

4. Enter anything for "Volume label"

5. Ensure that "Quick Format" is selected

6. Click "Start"

7. Pencet "OK"

8. Tunggu selesai memformat

9. Pencet "Close" (Tutup)

10. Jika tadi kartu SD ada berkas dan folder sebelum memformat, **salin balik semuanya dari komputer**

## Sidik Gangguan

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- Kartu SD tetap tidak terbaca konsol atau daya tampungnya salah setelah diformat
  - Kartu SD mungkin dipartisi atau ada ruang tak dialokasikan. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
