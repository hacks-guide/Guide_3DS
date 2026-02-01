# Installing boot9strap (MSET9 CLI iOS)

:::details Technical Details (optional)

[MSET9](https://github.com/zoogie/MSET9) is an exploit for the System Settings application developed by [zoogie](https://github.com/zoogie). It exploits a flaw where the ID1 (the second 32-character folder name inside of the Nintendo 3DS folder, inside of the ID0) can be _any_ name as long as it is 32 characters. Performing a specific sequence of actions results in the console executing the instructions that are encoded into the ID1 folder name, which can be used to grant full control over the 3DS.

:::

## Compatibility Notes

::: warning

This page requires an iPhone or iPad running iOS/iPadOS 14.0 or higher. If you have a computer running Windows, macOS, or Linux, follow [Installing boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) instead. If you have an Android phone/tablet or a Chromebook, follow [Installing boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)) instead. If you do not have access to any of these devices, you will need to use an [alternate exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

As iPhones and iPads do not have an SD card slot, you will need an adapter to plug in your SD card to your device (e.g. a Lightning to SD card or USB-C to SD card adapter).

:::

## Was du brauchst

- [iSH](https://apps.apple.com/us/app/ish-shell/id1436902243) from App Store

## Anleitung

::: info

On this page, you will use the MSET9 script, which is used to trigger MSET9. While the script is in progress, user data will temporarily disappear but will return upon the completion of this page. If you get an error when running the script, the solution to that error can most likely be found on the [troubleshooting](troubleshooting-mset9) page.

:::

### Abschnitt I - Vorbereitung

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. Your existing user data will disappear, but will come back when you are finished with this page.

1. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

    ```
    ::: info
    
    ![](/images/screenshots/mset9/mset9-ish-select.png)
    
    :::
    ```

1. Type the number corresponding to your console model and version, then tap Return

   - The screen should change to this:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-setup-notcreated.png)

   :::

   - Ensure that the correct console model and version is displayed
2. Type `1`, then tap Return to begin the process of creating the MSET9 ID1
3. After reviewing the disclaimer, type `1` again and tap Return to accept it
   - If you get an error, check the [troubleshooting](troubleshooting-mset9), then try again
4. If you see the message "Created hacked ID1.", tap Return to close the MSET9 script
   - Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **This is expected.** Your data will come back at a later step
5. Reinsert your SD card into your console
6. Power on your console
7. Open Mii Maker
8. Wait for your console to reach the [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png) screen, then exit Mii Maker and return to the HOME Menu
   - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
   - If you just reach the [normal](/images/screenshots/mset9/mii-existing.png) Mii Maker screen, then the data already exists. Exit Mii Maker and return to the HOME Menu
9. Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
   - This will not wipe any of your data
10. Power off your console by pressing the power button then tapping Power Off on the lower screen
11. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return

   - The screen should change to this and display `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-ready.png)

   :::

   - If the screen says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-ish-not-ready.png):
     - Type `2`, then tap Return to check the MSET9 status and follow the directions indicated
     - Once you have resolved the issue, return to Section I Step 14
     - For more information, check the [troubleshooting](troubleshooting-mset9) page
2. Type `0`, then tap Return to close the script
3. Reinsert your SD card into your console

### Section II - MSET9

In this section, you will trigger MSET9 to launch SafeB9SInstaller (the custom firmware installer).

::: danger

These instructions must be followed **EXACTLY**, so double-check EVERYTHING you are doing to avoid errors!

:::

1. Power on your console, ensuring System Settings is selected
   - If System Settings is not selected, **[hover over](/images/screenshots/mset9/hover-settings.png)** the System Settings icon using the D-Pad, power your console off, then back on
2. Press (A) to launch System Settings
3. Navigate to `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([image](/images/screenshots/mset9/settings-extdata.png))
4. **Do not press any buttons or touch the screen**
5. **With the console STILL ON, and without pressing any buttons or touching the screen**, remove your SD card from your console
   - The menu will refresh and say that no SD card is inserted
6. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return
2. In the MSET9 screen, type `3`, then tap Return to inject MSET9
   - You should see "MSET9 successfully injected!"
3. Tap Return to close the MSET9 script
4. Reinsert your SD card into your console **without pressing any buttons or touching the screen**
5. Wenn der Exploit erfolgreich war, wird SafeBS9Installer gestartet
   - If you get a red screen or the console gets stuck on a loading screen for more than 10 seconds, follow the [troubleshooting guide](troubleshooting-mset9)

### Section III - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. Wenn du gebeten wirst, eine Tastenkombination einzugeben, gib die Tastenkombination auf dem oberen Bildschirm ein, um boot9strap zu installieren
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9#sighaxed-firm-was-not-installed-check-lower-screen-for-more-info)
   - If the top screen is blank **and** you see "Crypto Status - all checks passed" on the bottom screen, you will have to enter key combo blindly. Press the following buttons on your console in this order:
     - D-Pad Left, D-Pad Down, D-Pad Right, D-Pad Up, A
2. Once it is complete (all seven steps on the bottom screen are green), press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

### Section IV - Removing MSET9

In this section, you will remove MSET9 to prevent further issues and to restore your user data (games, themes, etc). (This will not remove the custom firmware that you have just installed.)

::: danger

Do NOT skip this section! If you skip it, applications may crash unexpectedly and you will encounter errors on the next page!

:::

1. Schalte deine Konsole aus
2. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return
   - The current state should display [Injected](/images/screenshots/mset9/mset9-ish-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ish-ready.png), skip to Step 6
2. Type `4`, then tap Return to remove the trigger file
   - You should see "Removed trigger file."
3. Type `5`, then tap Return to remove MSET9
   - You should see "Successfully removed MSET9!"
4. Tap Return to close the MSET9 script

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Did you follow Section IV (Removing MSET9)? That section is MANDATORY!

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
