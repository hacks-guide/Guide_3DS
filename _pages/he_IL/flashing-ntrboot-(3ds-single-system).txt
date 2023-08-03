---
title: "צריבת ntrboot (מערכת 3DS אחת)"
---

{% include toc title="תוכן העניינים" %}

### קריאה דרושה

לפני שאתם ממשיכים, שימו לב שקראתם את כל המידע ב [ntrboot](ntrboot)

שיטה זו דורשת כלום חוץ מה3DS הלא פרוץ שלכם וכרטיס פריצה תואם. שיטה זאת משתמשת בכרטיס פריצה כדי להריץ את קובץ ה`.nds` של צורב הNTRBOOT על ה3DS שלכם. זה אומר שכרטיס הפריצה שלכם חייב לתמוך בהרצת קבצי `.nds` על הגרסה של ה3DS שלכם. תסתכלו על הטבלה ב[ntrboot](ntrboot) למידע נוסף.

שימו לב שבמקרים נדירים, יתכן שתהליך הצריבה **ישבור** כרטיס פריצה מזוייף ויגרום לו לא לעבוד. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).
{: .notice--danger}

### What You Need

* כרטיס הפריצה שתומך בntrboot שלכם
* The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
* The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

### הנחיות

#### חלק I - הכנות

1. Power off your console
1. תכניסו את כרטיס ה- SD של כרטיס הפריצה שלכם אל המחשב
1. Create a folder named `ntrboot` on the root of your flashcart's SD card
1. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
1. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
1. תכניסו בחזרה את כרטיס ה- SD של כרטיס הפריצה שלכם אל כרטיס הפריצה
1. Insert your ntrboot compatible DS / DSi flashcart into your console

#### חלק II - צריבת ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
1. תלחצו (A) כדי להמשיך
1. תשתמשו ב (Up) וב(Down) כדי לבחור את הכרטיס פריצה שלכם
1. תלחצו (A) כדי להמשיך
1. Select "Dump flash" to make a backup of your flashcart's memory
1. Input the key combo given to confirm
1. תלחצו (A) כדי להמשיך
1. תשתמשו ב (Up) וב(Down) כדי לבחור את הכרטיס פריצה שלכם
1. תלחצו (A) כדי להמשיך
1. Select "Inject FIRM" to install boot9strap to your flashcart
1. Input the key combo given to confirm
1. תלחצו (A) כדי להמשיך
1. Power off your console

___

### Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-(ntrboot))
{: .notice--primary}
