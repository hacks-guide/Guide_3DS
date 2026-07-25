# Formatting SD (Windows)

## Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

This page is for Windows users only. If you are not on Windows, check out the [Formatting SD (Linux)](formatting-sd-(linux)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

## What You Need

* The latest version of [sdFormatWindows](https://github.com/flashcarts/sdFormatWindows/releases/latest)

## Instructions

### Section I - sdFormatWindows

1. Insert your SD card into your computer
1. If the SD card has any files and folders on it, copy everything to a folder on your computer
1. Run `sdFormatWindows.exe` 
1. Select your SD card's drive letter for "Select drive"

    ::: danger

    Make sure you choose the correct drive letter, otherwise you might accidentally erase the wrong drive!

    :::

1. Enter anything for "Volume label"
1. If your SD card is 64GB or larger, check "Format as FAT32 (SDXC cards only)"
1. Click "Format"
1. Click "OK"
1. Wait for the format to finish
1. Click "OK"
1. Close sdFormatWindows
1. If your SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
