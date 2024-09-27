# Formatting SD (Linux)

## Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

This page is for Linux users only. If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-\(windows\)) or [Formatting SD (Mac)](formatting-sd-\(mac\)) pages.

## Instructions

1. Make sure your SD card is **not** inserted
2. Launch the Linux Terminal
3. Type `watch "lsblk"`
4. Insert your SD card into your computer
5. Observe the output. It should match something like this:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. Take note of the device name. In our example above, it was `mmcblk0p1`
   - If `RO` is set to 1, make sure the lock switch is not slid down
7. Hit CTRL + C to exit the menu
8. Type in the following for your SD card:
   - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
     - This creates a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
     - This creates a single FAT32 partition with 32 KB cluster size on the SD card
   - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
     - This creates a single FAT32 partition with 64 KB cluster size on the SD card

## Troubleshooting

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Linux) to reformat your SD card.
