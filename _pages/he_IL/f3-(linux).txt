---
title: "F3 (Linux)"
---

{% include toc title="תוכן העניינים" %}

### קריאה דרושה

זוהי הרחבה עבור בדיקת כרטיס הSD שלכם עבור שגיאות באמצעות F3.

תלוי בגודל של הSD ובמהירות של המחשב, תהליך זה יכול לקחת עד מספר שעות!

עמוד זה נועד רק עבור משתמשי לינוקס. If you are not on Linux, check out the [H2testw (Windows)](h2testw-(windows)) or [F3XSwift (Mac)](f3xswift-(mac)) pages.

### What You Need

* The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### הנחיות

1. תחלצו את קובץ הזיפ של F3
1. תעשו 'cd' לתיקיית F3
1. תריצו 'make' כדי לקמפל את F3
1. תכניסו את ה-SD שלכם למחשב
1. תעשו Mount לSD שלכם אם המחשב לא עשה אוטומטית
1. תריצו `./f3write <התיקייה של הSD>`
1. תחכו עד שהתוכנה מסיימת. דוגמה.

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. תריצו `./f3read <התיקייה של הSD>`
1. תחכו עד שהתוכנה מסיימת. דוגמה.

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

אם הבדיקה מראה תוצאות אחרות, הכרטיס שלכם עשוי להיות פגום וייתכן שיהיה עליכם להחליף אותו!
{: .notice--danger}

### תחזרו אל [Get Started](get-started)
{: .notice--primary}
