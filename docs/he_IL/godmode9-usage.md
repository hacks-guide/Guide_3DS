# GodMode9 Usage

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

GodMode9 הוא מנהל קבצים עם גישה מלאה לקונסולת ה-3DS, שנותן לכם גישה לכרטיס SD, למחיצות הFAT בתוך הSysNAND והEmuNAND שלכם ובעצם לכל דבר אחר. ביחד עם פונקציות אחרות, אתם יכולים להתיק, למחוק, לשנות שם לקבצים, וליצור תיקיות.

שימו לב שאם יש לכם קבצי מטען אחרים מ`GodMode9.firm` בתיקיית `/luma/payloads/` על כרטיס הSD שלכם, החזקת (Start) בהפעלה תציג תפריט שבו תצטרכו להשתמש בחיצים ובכפתור ה(A) כדי לבחור ב"GodMode9" בשביל ההוראות האלה.

GodMode9 היא תוכנה חזקה שיש ביכולתה לשנות בעצם הכל על הקונסולה שלכם. מצד שני, הרבה מהשינויים האלו נעולים מאחורי מערכת הרשאות, וזה בלתי אפשרי בטעות לעשות פעולות מסוכנות לפני שאתם בכוונה פותחים הרשאות, אתם עדיין צריכים לעקוב אחרי ההוראות בזהירות ולשמור גיבויים רק במקרה.

## Updating GodMode9

::: info

חלק מההוראות למטה מתאימות רק לגרסה העדכנית של GodMode9, ולכן אתם צריכים לעקוב אחרי החלק הזה כדי לעדכן את העותק שלכם לפני שאתם ממשיכים. תשכתבו את הקבצים הקיימים אם יש.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. תכניסו את ה-SD שלכם למחשב
3. העתיקו את `GodMode9.firm` מהזיפ של GodMode9 אל תיקיית /luma/payloads/ ב- SD שלכם
4. תעתיקו את התיקייה `gm9` מתוך ה`.zip` של GodMode9 ל-SD שלכם
5. Reinsert your SD card into your console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Power off your console
2. תכניסו את ה-SD שלכם למחשב
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
6. תלחצו על (Home) כדי להראות את תפריט הפעולה
7. תבחרו "Scripts..."
8. Select "GM9Megascript"
9. Select "Restore Options"
10. Select "SysNAND Restore (safe)"
11. תבחרו בגיבוי הNAND שלכם
12. לחצו (A) כדי לפתוח גישת כתיבת (lvl3) לSysNAND, ואז תלחצו על המקשים בסדר הנכון
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. תלחצו (A) כדי להמשיך
14. תלחצו (B) כדי לחזור לתפריט הראשי
15. Select "Exit"
16. תלחצו (A) כדי לנעול הרשאות כתיבה אם תתבקשו

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

שימו לב שזה לא אפשרי להזריק קבצים אל Health & Safety שיותר גדולים ממנו (כולל משחקים ותוכנות אחרות גדולות)

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. נווטו אל `[0:] SDCARD` ושם אל `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. לחצו (A) כדי לפתוח גישת כתיבת lvl1 לSysNAND, ואז תלחצו על המקשים בסדר הנכון
10. תלחצו (A) כדי להמשיך
11. תלחצו (A) כדי לנעול הרשאות כתיבה אם תתבקשו

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

זה יעבוד רק אם ההזרקה על Health & Safety בוצעה על ידי GodMode9 (ולא Decrypt9 או Hourglass9).

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. תלחצו על (Home) כדי להראות את תפריט הפעולה
3. תבחרו ב"More..."
4. תבחרו ב "Restore H&S"
5. לחצו (A) כדי לפתוח גישת כתיבת lvl1 לSysNAND, ואז תלחצו על המקשים בסדר הנכון
6. תלחצו (A) כדי לנעול הרשאות כתיבה אם תתבקשו

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**שימו לב שזה ימחוק את תוכן הכרטיס שלכם!**

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
   - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Your SD card has successfully been formatted for use with the console.

:::

## Removing an NNID without formatting your console

::: info

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. תלחצו על (Home) כדי להראות את תפריט הפעולה
3. תבחרו "Scripts..."
4. Select "GM9Megascript"
5. Select "Scripts from Plailect's Guide"
6. Select "Remove NNID"
7. תלחצו (A) כדי להמשיך
8. לחצו (A) כדי לפתוח גישת כתיבת lvl1 לSysNAND, ואז תלחצו על המקשים בסדר הנכון
9. תלחצו (A) כדי להמשיך
10. תלחצו (B) כדי לחזור לתפריט הראשי
11. Select "Exit"
12. תלחצו (A) כדי לנעול הרשאות כתיבה אם תתבקשו
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
