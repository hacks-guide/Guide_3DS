# Formatting SD (Mac)

## Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

Bu sayfa yalnızca Mac kullanıcılar içindir. If you are not on Mac, check out the [Formatting SD (Windows)](formatting-sd-\(windows\)) or [Formatting SD (Linux)](formatting-sd-\(linux\)) pages.

## Instructions

### OS X El Capitan (10.11) and later

1. SD kartınızı bilgisayarınıza takın

2. If the SD card has any files and folders on it, copy everything to a folder on your computer

3. Run the Disk Utility app

4. In the top-left "View" menu, choose "Show All Devices"

5. Select your SD card in the left panel

   ::: danger

   Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!

   :::

6. Click "Erase" at the top

7. Enter anything for "Name"

8. Ensure that "Format" is set to "MS-DOS (FAT)"

9. Ensure that "Scheme" is set to "Master Boot Record"
   - If "Scheme" does not appear, click "Cancel" and make sure to choose the device instead of a volume

10. Click "Erase"

11. Wait for the format to finish

12. Click "Close"

13. If the SD card had any files and folders on it before the format, copy everything back from your computer

### OS X Yosemite (10.10) and earlier

1. SD kartınızı bilgisayarınıza takın

2. If the SD card has any files and folders on it, copy everything to a folder on your computer

3. Run the Disk Utility app

4. Select your SD card in the left panel

   ::: danger

   Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!

   :::

5. Click "Partition" at the top
   - If "Partition" does not appear, make sure to choose the device instead of a volume

6. Ensure that "Partition Layout" is set to "1 Partition"

7. Enter anything for "Name"

8. Ensure that "Format" is set to "MS-DOS (FAT)"

9. Click "Options" below the partition table

10. Choose "Master Boot Record"

11. Click "OK"

12. Click "Apply"

13. Click "Partition"

14. Wait for the format to finish

15. Close Disk Utility

16. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Mac) to reformat your SD card.
