# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. זה לא מחייב את כרטיס הפריצה לתמוך בגרסה של אף אחד מה3DSים.

::: danger

שימו לב שבמקרים נדירים, יתכן שתהליך הצריבה **ישבור** כרטיס פריצה מזוייף ויגרום לו לא לעבוד. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
    - **The source 3DS**: the 3DS family console that is already running boot9strap
    - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. תכבו את **קונסולת המקור**
2. שימו את כרטיס הSD של **קונסולת המקור** במחשב שלכם
3. תצרו ב-SD שלכם תיקייה חדשה בשם `ntrboot`
4. תעתיקו את`boot9strap_ntr.firm` ואת `boot9strap_ntr.firm.sha` מה `.zip` של boot9strap NTR אל תיקיית `/ntrboot/`על כרטיס הSD שלכם
5. Copy `ntrboot_flasher.firm` to the `/luma/payloads/` folder on **the source 3DS**'s SD card
6. תכניסו מחדש את כרטיס הSD של **3DS המקור** אל **3DS המקור**
7. תכניסו את כרטיס הפריצה של DS \ DSi שתואם ntrboot אל **3DS המקור**

### Section II - Flashing ntrboot

1. תפעילו את תפריט הטעינה של Luma3DS על ידי זה שאתם מחזיקים (Start) בזמן הפעלת **3DS המקור**
2. תבחרו ב "ntrboot_flasher"
3. תקראו את האזהרה האדומה
4. תלחצו (A) כדי להמשיך
5. תבחרו את כרטיס הפריצה שלכם
    - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. תבחרו ב "Dump Flash"
7. תמתינו עד שהתהליך יושלם
8. תלחצו (A) כדי להמשיך
9. תלחצו (A) כדי לחזור לתפריט הראשי
10. תבחרו ב "Inject Ntrboot"
11. תלחצו (A) בשביל ntrboot קמעוני
12. תמתינו עד שהתהליך יושלם
13. תלחצו (A) כדי לחזור לתפריט הראשי
14. תלחצו (B) כדי לכבות את **3DS המקור**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
