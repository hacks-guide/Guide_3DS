---
title: "F3 (Linux)"
---

{% include toc title="Table of Contents" %}

### Required Reading

'Tis be an add-on section fer checkin' ye SD card fer errors usin' F3.

Dependin' on th' size 'o ye SD card 'n th' speed 'o ye computer, 'tis process can take up to several hours!

'Tis page be fer Linux users only. If you are not on Linux, check out the [H2testw (Windows)](h2testw-(windows)) or [F3XSwift (Mac)](f3xswift-(mac)) pages.

### What You Need

* The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### Instructions

1. Unzip th' f3 `.zip` file
1. `cd` into th' f3 directory
1. Run `make` to compile F3
1. Insert ye SD card into ye computer
1. Mount ye SD card
1. Run `./f3write <ye sd card mount point>`
1. Wait 'til th' process be complete. See below fer an example output.

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. Run `./f3read <ye sd card mount point>`
1. Wait 'til th' process be complete. See below fer an example output.

~~~ bash
$ ./f3read /media/michel/6135-3363/
									SECTORS      ok/corrupted/changed/overwritten
Validating file 1.h2w ... 2097152/        0/      0/      0
...
Validating file 30.h2w ... 1491904/        0/      0/      0

	Data OK: 29.71 GB (62309312 sectors)
Data LOST: 0.00 Byte (0 sectors)
					Corrupted: 0.00 Byte (0 sectors)
	Slightly changed: 0.00 Byte (0 sectors)
				Overwritten: 0.00 Byte (0 sectors)
Average Reading speed: 9.42 MB/s
~~~

___

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)`, your SD card is good and you can delete all `.h2w` files on your SD card.
{: .notice--success}

If th' test shows any other results, ye SD card may be corrupted or damaged 'n ye may have to replace it!
{: .notice--danger}

### Return to [Get Started](get-started)
{: .notice--primary}
