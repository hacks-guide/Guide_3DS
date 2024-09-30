# Updating B9S

## Required Reading

העמוד הזה קיים בשביל משתמשי boot9strap קיימים כדי לעדכן את ההתקנה שלהם לגרסה הכי חדשה.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

::: info

לכל השלבים בחלק הזה, תשכתבו כל קובץ קיים בכרטיס SD שלכם אם יש.

:::

1. תכניסו את ה-SD שלכם למחשב
2. תצרו ב-SD שלכם תיקייה חדשה בשם `boot9strap`
3. תעתיקו את`boot9strap.firm` ואת `boot9strap.firm.sha` מה `.zip` של boot9strap אל תיקיית `/boot9strap/`על כרטיס הSD שלכם
4. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
5. Reinsert your SD card into your console

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Section II - Installing boot9strap

1. Power on your console
   - This should automatically launch SafeB9SInstaller
2. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
3. Once it is completed, force your console to power off by holding down the power button
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. תכניסו את ה-SD שלכם למחשב
2. Copy everything from the Luma3DS `.zip` to the root of your SD card, replacing any existing files
3. Reinsert your SD card into your console
4. Power on your console
5. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
