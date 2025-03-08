# Uninstall CFW

## Required Reading

This will completely remove CFW from your console, including boot9strap and Luma3DS, for the purpose of restoring the console to stock.

Any unsigned (illegitimate) games will be rendered unusable and will be removed during this process. Use a [save manager](https://github.com/FlagBrew/Checkpoint/releases/latest) to back up any saves that you care about.

::: danger

If you're removing CFW because:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. A better idea would be to ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

:::

::: danger

If you have done ANY of the following:

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. If this applies to you, [restore a clean NAND backup](godmode9-usage#restoring-a-nand-backup) before continuing.

:::

::: warning

These instructions will only work on consoles with a Luma3DS version of 8.0 or higher. If you have an older version of Luma, you must upgrade your setup before following these instructions. Follow [this page](checking-for-cfw) to find your upgrade instructions.

:::

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)
- [uninstall_cfw.gm9](/gm9_scripts/uninstall_cfw.gm9)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Introduceți cardul SD în calculator
3. Copy everything from the Luma3DS `.zip` to the root of your SD card
4. Copiați `GodMode9.firm` de pe fișierul `.zip` GodMode9 către folderul `/luma/payloads/` de pe cardul SD
5. Copiați folderul `gm9` din fișierul `.zip` GodMode9 în rădăcina cardului SD
6. Copy `DSiWareUninstaller.3dsx` to the `/3ds/` folder on your SD card
7. Copy `safety_test.gm9` and `uninstall_cfw.gm9` to the `/gm9/scripts/` folder on your SD card
8. Reinsert your SD card into your console

### Section II - DS Mode Tests

The purpose of this section is to check whether built-in DS mode applications will continue to work once CFW is uninstalled. If you skip this section, DS mode or its functions may be inaccessible until CFW is reinstalled.

#### DS Connection Settings Test

1. Power on your console
2. Launch System Settings on your console
3. Navigate to `Internet Settings` -> `Nintendo DS Connection Settings`, then click OK
4. You should boot into the Nintendo DS Connection Setup menu
    - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Power off your console

#### DS Download Play Test

1. Power on your console
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Selectaţi "Nintendo DS"
4. If your console loads into a "Download software via DS Download Play" menu, the test was successful
    - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Power off your console

::: warning

If either of these tests has failed, DS mode, DS Download Play, and/or DS Connection Settings may be inaccessible once CFW is uninstalled! You should [fix DS mode](troubleshooting-post-install) before continuing.

:::

### Section III - Safety Test

The purpose of this section is to verify that the console will boot and that critical system functions, like System Settings and the keyboard, will work once CFW is uninstalled. **If you skip this section, you may BRICK your console!**

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is complete
3. Dacă vi se cere să reparați dara și ora RTC, apăsați (A) pentru a efectua, apoi setați data și ora, apoi apăsați (A) pentru a continua
    - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. Apăsați (Home) pentru a arăta meniul de acțiuni
5. Selectați "Scripts..."
6. Select "safety_test"
7. Read the text on-screen and press (A) to continue
8. You should boot into the regular 3DS HOME Menu (any custom theme is irrelevant). If you do, continue these instructions
    - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. Launch System Settings on your console
    - If the console crashes at this point, the test has failed
10. Select "Other Settings"
11. Select "Profile"
12. Select "User Name"
13. If you are able to enter a new user name, the test was successful
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. Power off your console

::: danger

If you do NOT boot into the regular 3DS HOME Menu, or System Settings / your keyboard is inaccessible, **DO NOT continue with these instructions**! Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and ask (in English) for someone there to assist you.

:::

### Section IV - NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Apăsați (Home) pentru a arăta meniul de acțiuni
3. Selectați "Scripts..."
4. Selectaţi "GM9Megascript"
5. Selectaţi "Backup Options"
6. Selecciona "SysNAND Backup"
7. Apăsați (A) pentru a confirma
    - This process will take some time
    - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. Apăsați (B) ca să vă întoarceți în meniul principal
9. Select “Exit”
10. Apăsați (Home) pentru a arăta meniul de acțiuni
11. Select "Poweroff system" to power off your console

### Section V - Removing illegitimate content

::: warning

This section will remove illegitimate content, like homebrew and dumped cartridges. If you have save data that you care about, back it up with a save manager before continuing!

:::

1. Power on your console
2. Launch System Settings on your console
3. Navigate to Data Management > Nintendo 3DS > Software
4. În această listă de software, ștergeți orice conținut care nu e de la Nintendo care l-ați instalat în timp ce foloseați CFW
    - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. Navigați spre `Data Management` -> `DSiWare`
6. În această listă de software, ștergeți orice conținut care nu e de la Nintendo care l-ați instalat în timp ce foloseați CFW
    - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
    - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. Exit the System Settings application
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Așteptați până când vedeți două butoane
10. Apăsați (L) + (Jos) + (Select) în același timp ca să deschideți meniul Rosalina
11. Selectați "Miscellaneous options"
12. Select "Switch the hb. title to the current app."
13. Press (B) to continue
14. Apăsați (B) ca să vă întoarceți la meniul principal Rosalina
15. Apăsați (B) pentru a ieși din meniul Rosalina
16. Apăsați (Home), apoi închideți Download Play
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Your console should load the Homebrew Launcher
19. Launch DSiWare Uninstaller from the list of homebrew
20. Follow the prompts and allow the program to uninstall
21. Once the process has succeeded, exit the Homebrew Launcher and power off your console

### Section VI - System Format

This section will ensure that all illegitimate tickets are removed, allowing eShop to work normally. This will remove all content from the 3DS and log you out of your NNID. Keep in mind that your console's encryption key will be shuffled, meaning that any old data will be rendered inaccessible, even if you have a backup of your SD contents.

1. Power on your console
2. Launch System Settings on your console
3. Navigate to Other Settings -> Next Page (until the final page) -> Format System Memory
4. Follow the prompts to format your 3DS

### Section VII - Running Uninstall Script

::: warning

This is your final opportunity to verify that all safety steps above have been followed! Please ensure that you have followed all sections on this page, **especially** `Section III - Safety Test`, before continuing.

:::

::: danger

If you're removing CFW because:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. A better idea would be to ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. Apăsați (Home) pentru a arăta meniul de acțiuni
3. Selectați "Scripts..."
4. Select "uninstall_cfw"
5. Când vi se solicită, apăsaţi (A) pentru a continua
6. Press (A) again to proceed
7. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl3), apoi introduceți combinația de butoane care vi se cere
8. Apăsați (A) pentru a continua
9. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere
10. Press (Start) to reboot your console

___

::: tip

All custom firmware has been removed from your console.

:::

::: info

You can now remove any extra files and folders from the root of your SD card that are _not_ the `Nintendo 3DS`, `DCIM`, or `private` folders.

:::
