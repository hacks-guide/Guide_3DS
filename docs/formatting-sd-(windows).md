# Formatting SD (Windows)

## Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

This page is for Windows users only. If you are not on Windows, check out the [Formatting SD (Linux)](formatting-sd-(linux)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

## What You Need

* **For all SD card sizes**: The latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
* **For SD cards 64GB or larger only:** The latest version of [rufus](https://github.com/pbatard/rufus/releases)

## Instructions

### Section I - SD Card Formatter

1. Insert your SD card into your computer
1. If the SD card has any files and folders on it, copy everything to a folder on your computer
1. Run `SD Card Formatter Setup` (the `.exe` file) in the downloaded `.zip` file with Administrator privileges, then install the program
1. Run `SD Card Formatter` from the Start Menu
1. Select your SD card's drive letter for "Select card"

    ::: danger

    Make sure you choose the correct drive letter, otherwise you might accidentally erase the wrong drive!

    :::

1. Enter anything for "Volume label"
1. Ensure that "Quick Format" is selected
1. Click "Format"
1. Click "OK"
1. Wait for the format to finish
1. Click "OK"
1. Close SD Card Formatter
1. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### Section II - Rufus (ONLY for 64GB or larger)

1. Run `rufus-<version>.exe` with administrator privileges
1. Select your SD card under the "Device" section

    ::: danger

    Make sure you choose the correct drive letter, otherwise you might accidentally erase the wrong drive!

    :::

1. Set "Boot selection" to "Non bootable"
1. Set "Partition scheme" to "MBR"
1. Set "Target system" to "BIOS or UEFI"
1. Click "Show advanced drive properties".
1. Enter anything for "Volume label"
1. Set "File system" to "Large FAT32"
1. Set "Cluster size" to "64 kilobytes"
1. Ensure that "Quick Format" is selected
1. Optionally set "Create extended label and icon files"
1. Optionally set "Check device for bad blocks", where "1 pass" should be sufficient
1. Click "START"
1. Wait for the format to finish
1. Close the window
1. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
