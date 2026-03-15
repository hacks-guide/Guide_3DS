# Formatting SD (Windows)

## Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

This page is for Windows users only. If you are not on Windows, check out the [Formatting SD (Linux)](formatting-sd-(linux)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

## What You Need

* **For all SD card sizes**: The latest version of [rufus](https://github.com/pbatard/rufus/releases)

## Instructions

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
1. Disable "Create extended label and icon files"
1. Set "Check device for bad blocks", where "1 pass" is sufficient
1. Click "START"
1. Wait for the format to finish
1. Close the window
1. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
