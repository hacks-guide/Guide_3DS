# Troubleshooting (MSET9)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (MSET9)", "Installing boot9strap (MSET9 CLI)" and "Installing boot9strap (MSET9 Play Store)" pages. If you are unable to solve your issue with the advice on this page, please join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and describe your issue, including what you have already tried.

## MSET9 (application / script)

:::details Python 3 is not installed

Python is not installed on the computer you are using. Download it from the [Python website](https://www.python.org/downloads/), double-click the installer, and follow the prompts to install Python. Once Python is installed, try again.

:::

:::details ModuleNotFoundError: No module named 'pyfatfs'

The pyfatfs module, which is needed to use the MSET9 installer on macOS, isn't installed on your computer.

1. Open a separate Terminal window
2. Type `python3 -m pip install pyfatfs`, then press Enter
3. Start again from [Section I Step 3](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

:::

:::details HOME Menu extdata: Missing!

Please power on your console with your SD inserted, then check the MSET9 status again.

If this does not work, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
2. Format the SD Card ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copy everything back
4. Start again from [Section I Step 7](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

:::

:::details Mii Maker extdata: Missing!

Mii Maker data was not found on the SD card. Please power on your console with your SD inserted, then launch Mii Maker, then check the MSET9 status again.

If this does not work, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
2. Format the SD Card ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copy everything back
4. Start again from [Section I Step 8](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::details Title database: Not initialized!

Ensure that you have reset the title database.

- Please power on your console with your SD inserted
- Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
    - This will not wipe any of your data
- If you get a reset prompt, after resetting, power off your console and start again from [Section I Step 14](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

If you do _not_ getting a reset prompt, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
2. Format the SD Card ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copy everything back

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego pulsa Enter
2. Type `2` then press enter to check the MSET9 status
    - This will create the dummy databases again
3. Close the MSET9 script window
4. Start again from [Section I Step 12](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 01: Couldn't find Nintendo 3DS folder

You are not running MSET9 from the root of the SD card, or the SD card is missing the Nintendo 3DS folder.

Remember, your SD card should look like this:

::: info

![](/images/screenshots/mset9/mset9-root-layout.png)

:::

If your SD card layout is correct, then your SD card most likely isn't being read by your console and needs to be formatted:

1. Copy everything off the SD Card to your PC
2. Format the SD Card ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copy everything back
4. Start again from the beginning of [Section I](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

::::

:::details Error 02: Your SD is write protected

Write-protection is enabled on this SD card. If you are using a full-size SD card, ensure that the lock is flipped in the [upright position](/images/sdlock.png). Otherwise, try ejecting and reinserting your SD card.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

You have multiple ID0 folders. To determine the correct folder, follow these instructions:

1. Rename the `Nintendo 3DS` folder to `BACKUP_Nintendo 3DS`
2. Reinserta la tarjeta SD en la consola
3. Enciende tu consola
4. Wait for the console to generate the SD card data
    - Your applications will have disappeared. This is normal and will be resolved shortly
5. Apaga la consola
6. Inserta la tarjeta SD en tu computadora
7. Navigate to the `Nintendo 3DS` folder on your SD card
8. Write down the first few characters of the folder you see
    - This is your true ID0, which we will keep in the real Nintendo 3DS folder
9. Delete the ID0 from the current `Nintendo 3DS` folder
10. Move the true ID0 folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder
11. If it exists, move the `Private` folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder

Once you've done this, continue from [Section I Step 3](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->

::::

:::details Error 06: You need at least 16MB free

Your SD card does not have enough space to trigger MSET9. Free up some space and try again.

At the end of this guide, you will need at least 1.3GB to make a NAND backup, so it's best to free up at least that much.

:::

:::details Error 07: One or more files are missing or malformed!

One or more files that MSET9 needs to run is missing or corrupted. Re-download the [MSET9 Release `.zip`](https://github.com/hacks-guide/MSET9/releases/latest) and extract it to the root of your SD card, replacing all existing files, then try again.

:::

:::: details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

::::

## MSET9 (exploit)

:::details Red screen after reinserting SD card (Section II Step 11)

You may be missing `SafeB9S.bin` from the root of your SD card, or the file may be corrupted. Copy it from the MSET9 `.zip`, replacing any existing files then follow these instructions to remove the trigger file:

1. Force power off your console by holding the Power button for 20 seconds
2. Inserta la tarjeta SD en tu computadora

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego pulsa Enter
    - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you may [retry Section II](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
2. Type `4`, then press Enter
3. Once the window says "Removed trigger file", type `0` and then press Enter
4. Reinsert the SD card into your console
5. Enciende tu consola
6. Return to [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Alternatively, your SD card may be improperly formatted or partitioned. After removing the trigger file, format it:

1. Copy everything off the SD Card to your PC
2. Format the SD Card ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copy everything back
4. Start again from from [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details System Settings loading infinitely after reinserting the SD card

You most likely did something different from the MSET9 instructions, selected the wrong model/version, or your SD card needs to be formatted. Ensure you are choosing the correct [model](/images/3dsmodels.png) and firmware version when opening the script.

Follow these instructions to remove the trigger file and to retry Section II:

1. Force power off your console by holding the Power button for 20 seconds
2. Inserta la tarjeta SD en tu computadora

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego pulsa Enter
    - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
2. Type `4`, then press Enter
3. Once the window says "Removed trigger file", type `0` and then press Enter
4. Reinsert the SD card into your console
5. Enciende tu consola
6. Return to [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. Copy everything off the SD Card to your PC
2. Format the SD Card ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copy everything back
4. Start again from from [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details An exception occurred after triggering MSET9

This likely indicates that you already have custom firmware. You should [check for CFW](checking-for-cfw).

:::

## Issues with SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\))

:::

::: tip

Go back to [Installing boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\))

:::

<!--@include: ./_include/troubleshooting-return.md -->


