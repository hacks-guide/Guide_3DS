# Formatting SD (Windows)

## Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

הדף הזה הוא למשתמשי Windows בלבד. If you are not on Windows, check out the [Formatting SD (Linux)](formatting-sd-\(linux\)) or [Formatting SD (Mac)](formatting-sd-\(mac\)) pages.

## What You Need

- the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger only:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions

### Section I - SD Card Formatter

1. תכניסו את ה-SD שלכם למחשב

2. If the SD card has any files and folders on it, copy everything to a folder on your computer

3. Run `SD Card Formatter Setup` (the `.exe` file) in the downloaded `.zip` file with Administrator privileges, then install the program

4. Run `SD Card Formatter` from the Start Menu

5. Select your SD card's drive letter for "Select card"

   ::: danger

   Make sure you choose the correct drive letter, otherwise you might accidentally erase the wrong drive!

   :::

6. Enter anything for "Volume label"

7. Ensure that "Quick Format" is selected

8. Click "Format"

9. Click "OK"

10. Wait for the format to finish

11. Click "OK"

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

7. Click "OK"

8. Wait for the format to finish

9. Click "Close"

10. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
