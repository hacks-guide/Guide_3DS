# Troubleshooting (Post-Install)

This page offers troubleshooting advice for commonly encountered issues after custom firmware is installed. If you are unable to solve your issue with the advice on this page, please join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and describe your issue, including what you have already tried.

## Boot issues

::: info

The steps detailed here generally assume that your console has a modern custom firmware setup (boot9strap + Luma3DS 8.0 or greater). If your console is running an older homebrew setup (for example, something based on arm9loaderhax or menuhax), you should update your setup before trying these instructions.

:::

### Power/notification light indicators

:::details My console powers off when I try to turn it on, and/or the notification LED shows a color on boot

There is an issue with your `boot.firm` file. If you're running [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), your 3DS notification LED may flash a certain color. This color is used to diagnose issues involving your `boot.firm` file on SD card or internal memory. On older versions of boot9strap, the blue light will power off almost immediately when trying to turn on the console.

If the notification LED flashes:

- **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
- **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. It was able to find `boot.firm` on internal memory, but the file is corrupted.
- **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

You can get a new `boot.firm` file by downloading the [latest release of Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extracting it, and placing `boot.firm` on the root of your SD card. If your `boot.firm` file is consistently being detected as corrupted, you may want to check your SD card for errors ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), or [macOS](f3xswift-\(mac\))). Also, note that the 3DS tends to have issues with files extracted using WinRAR.

If you hear a "popping sound", potentially accompanied with the backlight turning on for a split second, there is a hardware issue with your console (such as a disconnected backlight cable). You may be able to get your console to boot by holding it at certain angles.

:::

:::details My console gets stuck on a black screen with blue power light staying on

The steps below can be attempted in any order, but are listed from least to most time-consuming.

1. Power off your console, remove the SD card, re-insert it, then power on your console.
2. Power off your console, eject the game cartridge if inserted, power on your console, then wait up to ten minutes. If your console boots within ten minutes, the issue has been fixed and is unlikely to reoccur
3. Rename the `Nintendo 3DS` folder on your SD card to `Nintendo 3DS_BACKUP`, then attempt to boot. If your console successfully boots, there is some issue within your `Nintendo 3DS` folder. Try clearing HOME Menu extdata:
    - Navigate to `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
    - Delete the corresponding folder for your 3DS region:
        - **EUR Region**: `00000098`
        - **JPN Region**: `00000082`
        - **USA Region**: `0000008f`
        - **CHN Region**: `000000A1`
        - **KOR Region**: `000000A9`
        - **TWN Region**: `000000B1`
4. Try booting into recovery mode and updating your system:
    - Power off your console
    - Hold (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A)
    - Power on your console
    - If you were successful, the console will boot to an "update your system" screen
5. Follow the [CTRTransfer](ctrtransfer) guide
6. For further support, ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp)

:::

### Error message on boot

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"

Your Luma3DS version is outdated. Download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) and place `boot.firm` on the root of your SD card, replacing any existing file. Make sure you are extracting the ZIP file with any tool other than WinRAR, as it is known to cause issues with 3DS-related files.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

There are a number of reasons as to why this could be happening. In any case, this error can usually be fixed by following the [CTRTransfer](ctrtransfer) guide.

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..."

ARM11 exception handlers are disabled, or custom firmware is not installed. Try enabling ARM11 exception handlers:

- Power off your console
- Hold (Select)
- Power on your console, while still holding (Select)
- If the "Disable ARM11 exception handlers" box is checked, uncheck it

:::

:::details HOME Menu is missing installed applications

This could be caused by various reasons, but most likely because your SD card is not being read by the system.
You can check if your SD is being read by holding SELECT on boot and checking the yellow text on the bottom screen; if it says "Booted from CTRNAND via B9S", then your console is booting from the internal memory and not from the SD card.
If this is the case, attempt the steps below, which are listed from easiest to hardest:

1. Power off your console, remove the SD card, re-insert it, then power on your console
2. Power off your console, remove the SD card, insert it on your computer, download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extract `boot.firm` from the `Luma3DS.zip` and place it on the root of your SD card (replacing any existing file)
3. Power off your console, remove the SD card, insert it on your computer and reformat your SD card according to your computer's operating system: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(this will wipe your SD card data)_
4. Test your SD card for errors by following the guide according to your computer's operating system: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). If your SD card is marked as faulty, then you will have to replace your SD card
5. Your SD card slot may be broken. Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance

:::

:::details Blue "BOOTROM ERROR" screen

Your console is likely hard-bricked. You will need to buy an ntrboot flashcart to reinstall boot9strap in order to attempt to fix your console. This may also indicate a hardware issue that cannot be fixed. In any case, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

- It is also possible that someone has set a boot-time splash screen that just looks like a brick. Try leaving your console powered on, waiting on the blue screen, for five minutes.

:::

:::details Some other error

Please take a photo of the error and join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

## Software issues on consoles with custom firmware

:::details DSi / DS functionality is broken or has been replaced with Flipnote Studio

1. Download the latest release of [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (the `.3dsx` file)
2. Power off your console
3. Create a folder named `3ds` on the root of your SD card if it does not already exist
4. Copy `TWLFix-CFW.3dsx` to the `/3ds/` folder on your SD card
5. Reinsert your SD card into your console
6. Open the Homebrew Launcher
7. Launch TWLFix-CFW from the list of homebrew
8. Press (A) to uninstall the broken TWL titles
9. Press (Start) to reboot the console
10. Update your console by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
    - The update will see that the essential TWL titles have been uninstalled, and will redownload and reinstall them
11. Once the update is complete, tap "OK" to reboot the console

:::

:::details GBA Virtual Console and/or Safe Mode functionality is broken

Your console is running Luma3DS 6.6 or older, likely via arm9loaderhax. You should follow [A9LH to B9S](a9lh-to-b9s) to update your console to a modern custom firmware environment.

:::

:::details Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work

This can occur after a CTRTransfer or region change on Old 3DS / 2DS. Follow the instructions [here](region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).

:::

:::details Exception screen when booting/loading an application

Look for your exception screen in [this page](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
If you weren't able to find your error or the instructions didn't work, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance.

:::

:::details Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher

Your console likely still has menuhax67 installed. To uninstall menuhax67, download the latest release of [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (the menuhax `.zip`), then follow the ["Uninstall menuhax67" section](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.

:::

:::details Something else

Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance, and describe the issue that you see.

:::

## Other troubleshooting

:::details Clear HOME Menu extdata

1. Power off your console
2. Pasang kad SD anda ke dalam komputer
3. Navigate to the `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` folder on your SD card
4. Delete the corresponding folder for your 3DS region:
    - **EUR Region**: `00000098`
    - **JPN Region**: `00000082`
    - **USA Region**: `0000008f`
    - **CHN Region**: `000000A1`
    - **KOR Region**: `000000A9`
    - **TWN Region**: `000000B1`
5. Reinsert your SD card into your console

:::

:::details Clear HOME Menu theme data

1. Power off your console
2. Pasang kad SD anda ke dalam komputer
3. Navigate to the `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` folder on your SD card
4. Delete the corresponding folder for your 3DS region:
    - **EUR Region**: `000002ce`
    - **JPN Region**: `000002cc`
    - **USA Region**: `000002cd`
    - **KOR Region**: `000002cf`
5. Reinsert your SD card into your console

:::

:::details Manually entering Homebrew Launcher

If you are missing the Homebrew Launcher application from your HOME Menu, you can follow these instructions to manually enter the Homebrew Launcher. (You will need [boot.3dsx and boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) on the root of your SD card.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details Turning off Parental Controls

You can disable the Parental Controls feature by going to System Settings -> Parental Controls and inserting the PIN, then pressing "Clear Settings", then "Delete" to remove it.
However, if you do not know the PIN and therefore cannot access the console's settings, you will need to disable it. In order to do this, you need to obtain your console's master key (mkey):

1. Go to [this website](https://mkey.eiphax.tech/)
2. Fill the following boxes with the information:
    - Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
    - System Date: The day and month your console's clock is set to
    - Inquiry Number: Can be obtained by pressing "Forgot PIN" then "I Forgot" in the Parental Controls screen
3. After you have obtained your mkey, press OK on the screen you have obtained your Inquiry Number, then input the master key
4. Press "Clear Settings", then "Delete" to remove all Parental Controls data

:::

---

<!--@include: ./_include/troubleshooting-return.md -->

