# Flashing ntrboot (NDS)

## Required Reading

לפני שאתם ממשיכים, שימו לב שקראתם את כל המידע ב [ntrboot](ntrboot)

דרך זו דורשת גישה זמנית לNintendo DS או Nintendo DS Lite שתומך בכרטיס פריצה שלכם. שיטה זאת משתמשת בכרטיס פריצה כדי להריץ את קובץ ה`.nds` של צורב הNTRBOOT על הNDS שלכם.

::: danger

שימו לב שבמקרים נדירים, יתכן שתהליך הצריבה **ישבור** כרטיס פריצה מזוייף ויגרום לו לא לעבוד. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source NDS / NDSL**: the Nintendo DS or Nintendo DS Lite which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. תכבו את **NDS / NDSL המקור**
2. תכניסו את כרטיס ה- SD של כרטיס הפריצה שלכם אל המחשב
3. Create a folder named `ntrboot` on the root of your flashcart's SD card
4. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
5. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
6. תכניסו בחזרה את כרטיס ה- SD של כרטיס הפריצה שלכם אל כרטיס הפריצה
7. תכניסו את כרטיס הפריצה של DS \ DSi שתואם ntrboot אל **NDS / NDSL המקור**

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on **the source NDS / NDSL** using your flashcart
2. תלחצו (A) כדי להמשיך
3. תשתמשו ב (Up) וב(Down) כדי לבחור את הכרטיס פריצה שלכם
4. תלחצו (A) כדי להמשיך
5. Select "Dump flash" to make a backup of your flashcart's memory
6. Input the key combo given to confirm
7. תלחצו (A) כדי להמשיך
8. תשתמשו ב (Up) וב(Down) כדי לבחור את הכרטיס פריצה שלכם
9. תלחצו (A) כדי להמשיך
10. Select "Inject FIRM" to install boot9strap to your flashcart
11. Input the key combo given to confirm
12. תלחצו (A) כדי להמשיך
13. תכבו את **NDS / NDSL המקור**
14. תוציאו את כרטיס הפריצה שלכם מ**NDS / NDSL המקור**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
