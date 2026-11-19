# Formatting SD (Linux)

## Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

::: warning

This page is for Linux users only. If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-(windows)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

::: warning

Formatting an SD card will remove all of its contents. If you have files that you wish to keep, back them up to your computer before following these instructions.

:::

::: info

Several Linux distributions provide more user-friendly methods for formatting SD cards than this guide provides, some of which can be [found here](https://wiki.hacks.guide/wiki/Formatting_an_SD_card/Linux). In particular, if you are on SteamOS (e.g. Steam Deck, Steam Machine), check out the [Formatting SD (KDE Partition Manager)](formatting-sd-(kde)) page.

:::

## Instructions

1. Make sure your SD card is **not** inserted
1. Open a Terminal window, type `watch lsblk`, then press Enter
1. Insert the SD card and watch for a new device appearing in lsblk
1. Observe the output for the new device. It should match something like this:

    ```
    NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
    mmcblk0     179:0    0   29.7G  0 disk
    └─mmcblk0p1 179:1    0   29.5G  0 part /run/media/user/FFFF-FFFF
    ```
1. Take note of the name of the device that now appears. In the example above, it was `mmcblk0p1`, but it could also show up as `sda` or `sdb` if you are using a USB adapter
    + If `RO` is set to 1, make sure the SD card lock switch is not engaged (in the 'down' position)
1. Press CTRL + C to exit lsblk
1. If necessary, install the `parted` and `dosfstools` packages using your package manager
    + These packages are preinstalled on most distributions
    + You can check if they are installed by running `sudo parted --help` and `sudo mkfs.vfat`, respectively
1. Type `sudo parted /dev/<device name> mklabel msdos`, then press Enter
1. Type `sudo parted -a opt /dev/<device name> mkpart primary fat32 0% 100%`, then press Enter
1. Type `sudo mkfs.vfat /dev/<partition name> -s 64`, then press Enter to reformat the new partition
    + If the SD card is over 64GB in size, use `128` instead of `64`
1. Type `sudo eject /dev/<device name>`, press Enter, then remove and reinsert the SD card
1. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Linux) to reformat your SD card.
