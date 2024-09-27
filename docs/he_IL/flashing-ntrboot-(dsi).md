# Flashing ntrboot (DSi)

## Required Reading

לפני שאתם ממשיכים, שימו לב שקראתם את כל המידע ב [ntrboot](ntrboot)

דרך זו דורשת גישה זמנית לNintendo DSi שתומך בכרטיס פריצה שלכם. This method uses the flashcart to run the ntrboot flasher `.nds` file on your DSi. This means that your flashcart must support launching `.nds` files on your DSi's version. תסתכלו על הטבלה ב[ntrboot](ntrboot) למידע נוסף.

::: danger

שימו לב שבמקרים נדירים, יתכן שתהליך הצריבה **ישבור** כרטיס פריצה מזוייף ויגרום לו לא לעבוד. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. תכבו את **DSi המקור**
2. תכניסו את כרטיס ה- SD של כרטיס הפריצה שלכם אל המחשב
3. תעתיקו את `ds_ntrboot_flasher_dsi.nds` אל כרטיס הSD של כרטיס הפריצה שלכם
4. תכניסו בחזרה את כרטיס ה- SD של כרטיס הפריצה שלכם אל כרטיס הפריצה
5. תכניסו את כרטיס הפריצה של DS \ DSi שתואם ntrboot אל **DSi המקור**

### Section II - Flashing ntrboot

1. תפעילו את `ds_ntrboot_flasher_dsi.nds` על **DSi המקור** בעזרת כרטיס הפריצה שלכם
2. תלחצו (A) כדי להמשיך
3. תשתמשו ב (Up) וב(Down) כדי לבחור את הכרטיס פריצה שלכם
4. תלחצו (A) כדי להמשיך
5. תלחצו (A) בשביל "inject ntrboothax"
6. תלחצו (A) כדי לבחור ב"RETAIL"
7. תלחצו (A) כדי להמשיך
8. תבחרו ב"EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
