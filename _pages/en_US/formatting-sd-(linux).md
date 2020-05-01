---
title: "Formatting SD (Linux)"
---

{% include toc title="Table of Contents" %}

### Required Reading

This is an add-on section for formatting an SD card to work with the 3DS.

If the 3DS already recognizes the SD card, this guide is not required.

This page is for Linux users only. If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-(Windows)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

### Instructions
#### Section I - Determining which slot your SD card is in

1. Make sure your SD card is **not** inserted.
2. Launch the Linux Terminal
3. Type `watch "dmesg | tail -10"`
4. Insert your SD card into your PC.
5. Observe the output. It should match something like this:
```
[11599.200739] sd 3:0:0:0: [sdc] 7744512 512-byte logical blocks: (3.96 GB/3.69
GiB)
[11599.204630] sd 3:0:0:0: [sdc] Assuming drive cache: write through
[11599.210491] sd 3:0:0:0: [sdc] Assuming drive cache: write through
[11599.210495]  sdc:
```
6. Take note of the device mount point. In our example above, it was `sdc`.
7. Hit CTRL + C to exit the menu.

#### Section II - Formatting the card

![](https://upload.wikimedia.org/wikipedia/commons/8/85/Cfdisk_screenshot.png)

1. Type in `sudo cfdisk /dev/(device mount point from above)`.
2. On each partition, hit `Delete`.
3. Create a new Primary partition that covers the size of your entire SD card.
- This will create a new partition with the linux filetype.
4. Select type and take a look at the menu.
5. Find "W95 FAT32" and take note of the code on the left side of that text.
6. Press any key, then enter the code you took note of in the previous step.
7. Hit enter, then hit Quit.

### Return to [Get Started](get-started)
{: .notice--primary}
