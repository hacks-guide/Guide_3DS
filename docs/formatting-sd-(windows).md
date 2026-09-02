# Formatting SD (Windows)

## Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

::: warning

This page is for Windows users only. If you are not on Windows, check out the [Formatting SD (Linux)](formatting-sd-(linux)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

## What You Need

* The latest version of [guiformat](https://nintendohomebrew.com/guiformat)

## Instructions

1. Run `guiformat.exe`
1. Select your SD card's drive letter for "Drive"

    ::: danger

    Make sure you choose the correct drive letter, otherwise you might accidentally erase the wrong drive!

    :::

1. Select a size for "Allocation unit size"
    + If the SD card is 64GB, choose 32768
    + If the SD card is larger than 64GB, choose 65536
1. Enter anything for "Volume label"
1. Ensure that "Quick Format" is selected
1. Click "Start"
1. Click "OK"
1. Wait for the format to finish
1. Click "Close"
1. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

* guiformat shows the error "Failed to open device: GetLastError()=32"
    + Close everything that may be using the SD card, such as any File Explorer windows.
    + If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

* guiformat shows the error "GetLastError()=1117"
    + Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
