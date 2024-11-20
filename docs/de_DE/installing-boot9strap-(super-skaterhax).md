---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# boot9strap installieren (super-skaterhax)

:::details Technical Details (optional)

For technical details on the exploits that you will be using on this page, see [here](https://github.com/zoogie/super-skaterhax).

:::

### Compatibility Notes

Super-skaterhax (when used to launch the Homebrew Launcher) is compatible with New models on version 11.15.0 and above in all regions.

::: warning

The instructions provided only apply to the New 3DS, New 3DS XL, and New 2DS XL. Please ensure that the console you are modding is a New 3DS, New 3DS XL, or New 2DS XL before continuing.

:::

### What You Need

- The [Super-skaterhax](https://skater.nintendohomebrew.com) zip for your console's region and system version

#### Section I - Prep Work

In this section, you will copy the files needed to trigger both super-skaterhax and the Homebrew Launcher.

1. Power off your console

2. Insert your SD card into your computer

3. Copy everything from the Super-skaterhax `.zip` to the root of your SD card, overwriting any existing files

   ::: info

   ![](/images/screenshots/skaterhax/skater-root-layout.png)

   :::

4. Reinsert your SD card into your console

5. Power on your console

6. Launch System Settings

7. Select "Other Settings"

8. Navigate to "Profile" -> "Region Settings"
   - These settings will be temporarily changed to increase the success rate of the exploit
   - You can restore your region settings back to normal once you have finished this page
   - If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that says you will lose access to Nintendo Network ID features, you can safely select OK to continue

9. Select the following options according to your console's region ([image](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Exit System Settings

#### Section II - super-skaterhax

In this section, you will visit the browser exploit webpage, which will launch the Homebrew Launcher.

::: info

Stelle sicher, dass du eine funktionierende Internetverbindung auf deiner Konsole hast, falls du dies noch nicht getan hast.

:::

1. On the HOME Menu, press the Left and Right shoulder buttons at the same time to open the camera
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/super/` for EUR/USA/JPN, `https://zoogie.github.io/web/korea` for KOR)
2. Tap the QR code button and scan one of the following QR codes for your console's region [here](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
   - If you get a security certificate warning, please ensure that the system date is today's
3. Press (Select) to open the bookmark tab
   - If your (Select) button does not respond, tap the star icon on the bottom-left corner of the screen
4. Tap "Bookmark this page"
5. Press (B) once to return to the browser
6. Press (ZR) to open the tab list
   - If your (ZR) button does not respond, tap the two overlapped squares near the bottom-right corner of the screen
7. Make sure that the only tab open is the super-skaterhax website
   - This tab should be highlighted in blue on the tab list
   - If other tabs are open, close them
8. Press (B) once to return to the browser
9. Press (Start) to open the context menu
   - If your (Start) button does not respond, tap the 3-line menu on the bottom-right corner of the screen
10. Tap on "Settings"
11. Tap on "Delete Cookies"
12. Drücke (A), um fortzufahren
13. Press (Home) to return to the HOME Menu, then immediately press (A) to launch the browser again
14. Select the "GO GO!" button on the top of the bottom screen
15. Press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
    - If your console freezes on a yellow screen, hold the POWER button until it turns off, then retry this section
    - If your console freezes on a red screen, hold the POWER button until it turns off, redo step 3 of Section II, then retry this section
    - If your console [shows the word Text on the top-left corner of the bottom screen](/images/screenshots/skaterhax/skater-old3ds.png), you have an Old 3DS and this exploit **will not work on your device**. If this is the case, you should follow [MSET9](installing-boot9strap-\(mset9\)) instead
    - If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
16. Your console will have booted into the Homebrew Launcher
17. Launch nimdsphax from the list of homebrew
18. Wenn der Exploit erfolgreich war, wird SafeBS9Installer gestartet
    - If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section
    - This may take up to five attempts

#### Section III - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. Wenn du gebeten wirst, eine Tastenkombination einzugeben, gib die Tastenkombination auf dem oberen Bildschirm ein, um boot9strap zu installieren
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
2. Once it is complete, press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
