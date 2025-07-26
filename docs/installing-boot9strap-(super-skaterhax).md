---
head: [
    ['script', {src: '/assets/js/common.js'}],
    ['script', {src: '/assets/js/skater-link.js'}],
    ['script', {src: '/assets/js/link-common.js'}],
]
---

# Installing boot9strap (super-skaterhax)

::: details Technical Details (optional)

For technical details on the exploits that you will be using on this page, see [here](https://github.com/zoogie/super-skaterhax).

:::

### Compatibility Notes

Super-skaterhax (when used to launch the Homebrew Launcher) is compatible with New models on version 11.15.0 and above in all regions.

::: info

This exploit is known to be inconsistent: it works for some people, but not others. If you prefer to use a more consistent exploit (which may take longer, but will have the same end result), follow [MSET9](installing-boot9strap-(mset9)) instead.

:::

### What You Need

* The [Super-skaterhax](https://skater.nintendohomebrew.com) `.zip` for your console's region and system version

#### Section I - Prep Work

In this section, you will copy the files needed to trigger both super-skaterhax and the Homebrew Launcher.

1. Power off your console
1. Insert your SD card into your computer
1. Copy everything from the Super-skaterhax `.zip` to the root of your SD card. If any of the files exist, overwrite them with the new files.
    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

1. Reinsert your SD card into your console
1. Power on your console
1. Launch System Settings
1. Select "Other Settings"
1. Navigate to "Profile" -> "Region Settings"
    + These settings will be temporarily changed to increase the success rate of the exploit
    + You can restore your region settings back to normal once you have finished this page
    + If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that says you will lose access to Nintendo Network ID features, you can safely select OK to continue
1. Select the following options according to your console's region ([image](/images/screenshots/skaterhax/skater-lang.png))
    + USA: First select United States, then select Do Not Set
    + EUR: First select United Kingdom, then select Do Not Set
    + JPN: First select 日本, then select 設定しない
    + KOR: First select 대한민국, then select 설정하지 않음
1. Navigate to "Date & Time"
1. Set "Today's Date" and "Current Time" to the current date and time
1. Exit System Settings

#### Section II - super-skaterhax

In this section, you will visit the browser exploit webpage, which will launch the Homebrew Launcher.

::: info

A video detailing these steps is available [here](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Open the Internet Browser
1. Tap the 3-line (☰) icon on the bottom-right corner of the screen
1. Tap `Settings` -> scroll down -> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK`
    + The browser will close
1. Reopen the Internet Browser
1. Tap `Next` -> `Google` -> `OK` -> `OK`
1. Tap on the address bar at the top of the bottom screen
1. Enter the URL corresponding to your console's region:
    + **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    + **KOR**: `https://skater.686178.xyz/go/korea`
1. Tap "Open"
    + You should see the text "GO GO!". Do not click on it yet
1. Tap the 3-line (☰) icon on the bottom-right corner of the screen
1. Tap on "Add to Bookmarks"
1. Tap the 3-line (☰) icon on the bottom-right corner of the screen
1. Tap on `Settings` -> `Delete Cookies` -> `Yes`
1. Press (Home) to return to the HOME Menu, then immediately reopen the Internet Browser
1. Wait for the page to fully load, then tap the "GO GO!" button on the top of the bottom screen
1. Wait for the page to fully load, then press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
1. If your console displays:
    + **"The Homebrew Launcher" screen**: Continue to the next step
    + **A white "Error has occurred" message box**: The exploit failed due to random chance. Open System Settings, change the language to a different one (if possible), then retry this section. You may have to repeat this sequence up to ten times
        + On JPN/KOR region consoles, there is only one language setting. On those consoles, you should open System Settings, close it, then retry this section
        + If the exploit is still unsuccessful after five attempts, there may be a problem with your files or prep work. Ensure that region and date/time are correct, and that you have been following this section **exactly**. If you used WinRAR to extract files to the SD card, re-extract the files using File Explorer or 7-zip instead
        + If the exploit is still unsuccessful after ten attempts, follow [MSET9](installing-boot9strap-(mset9)) instead
    + **A black screen that says "An error has occurred"**: Your file placement is incorrect. Ensure that the super-skaterhax files are on the root of the SD card
    + **A yellow screen**: Homebrew Launcher failed to open due to random chance. Hold the POWER button until the console turns off, then retry this section
    + **[The word "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: You have an Old 3DS, where this exploit **does not work**. If this is the case, you should follow [MSET9](installing-boot9strap-(mset9)) instead
1. Launch nimdsphax from the list of homebrew
1. If the exploit was successful, you will have booted into SafeB9SInstaller
    + If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section

#### Section III - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. When prompted, input the key combo given on the top screen to install boot9strap
    + If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
1. Once it is complete, press (A) to reboot your console
<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
