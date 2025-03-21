# Move EmuNAND

## Required Reading

זוהי הרחבה עבור העברת התכנים מהEmuNAND הישן שלכם ל CFW SysNAND חדש, ולאחר מכן הסרת הEmuNAND הישן. Emunand וRednand כמעט מונחים נרדפים.

שימו לב שאם יש לכם קבצי מטען אחרים מ`GodMode9.firm` בתיקיית `/luma/payloads/` על כרטיס הSD שלכם, החזקת (Start) בהפעלה תציג תפריט שבו תצטרכו להשתמש בחיצים ובכפתור ה(A) כדי לבחור ב"GodMode9" בשביל ההוראות האלה.

::: danger

אתם חייבים שLuma3DS וboot9strap יהיו מותקנים כדי להשתמש בזה.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. תכניסו את ה-SD שלכם למחשב
3. העתיקו את `GodMode9.firm` מהזיפ של GodMode9 אל תיקיית /luma/payloads/ ב- SD שלכם
4. תעתיקו את התיקייה `gm9` מתוך ה`.zip` של GodMode9 ל-SD שלכם
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

אם אין לכם שמירות או משחקי DSiWare שאכפת לכם מהם, תדלגו על החלק הזה.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. אם אתם מתבקשים לתקן את זמן ותאריך הRTC, תלחצו (A) כדי לעשות זאת, ואז תלחצו (A) כדי להמשיך
    - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. נווטו אל`[2:] SYSNAND TWLN` ומשם ל `title`
5. תחזיקו (R) ותלחצו (A) באותו הזמן על `00030004` כדי לבחור את התיקייה, ואז תבחרו "Copy to 0:/gm9/out"
    - This process may take some time if you have many DSiWare games
6. תלחצו (B) פעמיים כדי לחזור לתפריט הראשי

### Section III - Backup GBA VC Saves

::: info

אם אין לכם שמירות או משחקי GBA VC שאכפת לכם מהם, תדלגו על החלק הזה.

:::

::: info

שימו לב שזה לא נדרש למשחקי Virtual Console אחרים (GBC, NES ועוד)

:::

::: info

השמירה תועבר לתיקיית `/gm9/out/` בכרטיס הSD שלכם על השם `<TitleID>.gbavc.sav`.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Dump GBA VC save"
    - תלחצו (A) כדי להמשיך
    - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. נווטו אל `[E:] EMUNAND VIRTUAL`
3. תלחצו (A) על `nand.bin` כדי לבחור בו, ואז תבחרו ב "NAND image options...", ושם ב "Restore SysNAND (safe)"
4. לחצו (A) כדי לפתוח גישת שכתוב לSysNAND, ואז תלחצו על המקשים בסדר הנכון
    - This will not overwrite your boot9strap installation
5. תלחצו על המקשים בסדר הנכון כדי לפתוח גישת כתיבה לSysNAND (בlvl1)
    - This process will take some time
6. Once it is completed, press (A) to continue
7. תלחצו (B) כדי לדחות נעילת הרשאות כתיבה אם תתבקשו
8. תלחצו (B) כדי לחזור לתפריט הראשי

### Section V - Restore DSiWare Saves

::: info

אם לא גיביתם שמירות DSiWare מקודם, תדלגו על החלק הזה.

:::

1. נווטו אל `[0:] SDCARD` ושם אל `gm9` ואז אל `out`
2. תלחצו (Y) על תיקיית `00030004` כדי להעתיק אותה
3. תלחצו (B) פעמיים כדי לחזור לתפריט הראשי
4. נווטו אל`[2:] SYSNAND TWLN` ומשם ל `title`
5. תלחצו (Y) כדי להדביק את תיקיית `00030004`
6. תבחרו "Copy path(s)"
7. לחצו (A) כדי לפתוח גישת כתיבת lvl1 לSysNAND, ואז תלחצו על המקשים בסדר הנכון
8. תבחרו ב "Overwrite file(s)"
    - This process may take some time if you have many DSiWare games
9. תלחצו (B) כדי לדחות נעילת הרשאות כתיבה אם תתבקשו
10. תלחצו (B) פעמיים כדי לחזור לתפריט הראשי

### Section VI - Restore GBA VC Saves

::: info

אם לא גיביתם שמירות GBA VC מקודם, תדלגו על החלק הזה.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. תעשו את התהליך הבא בשביל כל משחק GBA VC שאתם רוצים לשחזר לו את השמירה:
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - נווטו אל `[0:] SDCARD` ושם אל `gm9`
    - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
    - תלחצו (B) כדי לחזור לתפריט הראשי
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Inject GBA VC save"
    - תלחצו (A) כדי להמשיך
    - Press (Start) to reboot your console
    - Launch the GBA VC game
    - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

1. \*\* תגבו את כל הקבצים על הSD לתיקייה במחשב שלכם, כי כל הקבצים יימחקו בצעדים הבאים \*\*

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. תחזיקו (R) ולחצו (B) באותו הזמן כדי להוציא את הSD
2. תכניסו את ה-SD שלכם למחשב
3. תעתיקו מחדש את הקבצים לכרטיס זיכרון
    - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. תלחצו A כדי לגרום לתוכנה לקלוט שהSD חזר
6. לחצו על (Start) על מנת להפעיל מחדש

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
