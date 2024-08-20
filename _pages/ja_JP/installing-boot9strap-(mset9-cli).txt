---
title: "Installing boot9strap (MSET9 CLI)"
---

{% include toc title="目次" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
[MSET9](https://github.com/zoogie/MSET9) is an exploit for the System Settings application developed by [zoogie](https://github.com/zoogie). It exploits a flaw where the ID1 (the second 32-character folder name inside of the Nintendo 3DS folder, inside of the ID0) can be *any* name as long as it is 32 characters. Performing a specific sequence of actions results in the console executing the instructions that are encoded into the ID1 folder name, which can be used to grant full control over the 3DS.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Compatibility Notes

This page requires a computer running Windows, Linux, or macOS. If you have an Android phone/tablet or a Chromebook, follow [Installing boot9strap (MSET9 Play Store)](installing-boot9strap-(mset9-play-store)) instead. If you do not have access to any of these devices, you will need to use an [alternate exploit](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).
{: .notice--warning}

### 必要なもの

* The latest release of [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
* Any 3.x version of [Python](https://www.python.org/downloads/) **installed on your computer**
    + If you are on Linux or macOS, you may already have Python 3. Check by opening a Terminal window and entering `python3 -V`. If this returns a version number, it will work for this guide.

### 手順

On this page, you will use the MSET9 script, which is used to trigger MSET9. While the script is in progress, user data will temporarily disappear but will return upon the completion of this page. If you get an error when running the script, the solution to that error can most likely be found on the [troubleshooting](troubleshooting#installing-boot9strap-mset9) page.
{: .notice--info}

#### セクション I - 準備

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. Your existing user data will disappear, but will come back when you are finished with this page.

1. パソコンにSDカードを入れます
1. Copy everything from the MSET9 `.zip` to the root of your SD card, overwriting any existing files

    ![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
    {: .notice--info}

1. Run the MSET9 script:
{% capture mset9-chorus %}
    + **Windows**: Double-click `MSET9-Windows.bat`
    + **macOS**: Double-click `MSET9-macOS.command` and enter your password if prompted
    + **Linux**: open a Terminal window, `cd` to the root of your SD card, then type `python3 mset9.py` and press Enter
{% endcapture %}
    {{ mset9-chorus }}

    ![Image: MSET9 setup](/images/screenshots/mset9/mset9-select.png)
    {: .notice--info}

1. Type the number corresponding to your console model and version, then press Enter
    + The window should change to this:

    ![Image: MSET9 setup](/images/screenshots/mset9/mset9-setup-notcreated.png)
    {: .notice--info}

    + Ensure that the correct console model and version is displayed
1. Type `1`, then press Enter to begin the process of creating the MSET9 ID1
1. After reviewing the disclaimer, type `1` again and press Enter to accept it
    + If you get an error, check the [troubleshooting](troubleshooting#installing-boot9strap-mset9), then try again
1. If you see the message "Created hacked ID1.", press Enter to close the MSET9 script
    + Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **This is expected.** Your data will come back at a later step
1. Reinsert your SD card into your console
1. Power on your console
1. Open Mii Maker
1. Wait for your console to reach the [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png) screen, then exit Mii Maker and return to the HOME Menu
    + You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
    + If you just reach the [normal](/images/screenshots/mset9/mii-existing.png) Mii Maker screen, then the data already exists. Exit Mii Maker and return to the HOME Menu
1. Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
    + This will not wipe any of your data
1. Power off your console by pressing the power button then tapping Power Off on the lower screen
1. パソコンにSDカードを入れます
1. Run the MSET9 script:

    {{ mset9-chorus }}

1. Type the number corresponding to your console model and version, then press Enter
    + The window should change to this and display `Ready`:

    ![Image: MSET9 setup](/images/screenshots/mset9/mset9-ready.png)
    {: .notice--info}

    + If the window says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
        + Type `2`, then press Enter to check the MSET9 status and follow the directions indicated
        + Once you have resolved the issue, return to Section I Step 14
        + For more information, check the [troubleshooting](troubleshooting#installing-boot9strap-mset9) page
1. Type `0`, then press Enter to close the script
1. Reinsert your SD card into your console

#### Section II - MSET9

In this section, you will trigger MSET9 to launch SafeB9SInstaller (the custom firmware installer).

These instructions must be followed **EXACTLY**, so double-check EVERYTHING you are doing to avoid errors!
{: .notice--danger}

1. Power on your console, ensuring System Settings is selected
    + If System Settings is not selected, **[hover over](/images/screenshots/mset9/hover-settings.png)** the System Settings icon using the D-Pad, power your console off, then back on
1. Press (A) to launch System Settings
1. Navigate to `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([image](/images/screenshots/mset9/settings-extdata.png))
1. **Do not press any buttons or touch the screen**
1. **With the console STILL ON, and without pressing any buttons or touching the screen**, remove your SD card from your console
    + The menu will refresh and say that no SD card is inserted
1. パソコンにSDカードを入れます
1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
1. In the MSET9 window, type `3`, then press Enter to inject MSET9
    + You should see "MSET9 successfully injected!"
1. Press Enter to close the MSET9 script
1. Reinsert your SD card into your console **without pressing any buttons or touching the screen**
1. Exploitが成功すれば、SafeB9SInstallerが起動されます。 
    + If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting#installing-boot9strap-mset9)

#### セクション III - boot9strapをインストールする

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

#### Section IV - Removing MSET9

In this section, you will remove MSET9 to prevent further issues and to restore your user data (games, themes, etc). (This will not remove the custom firmware that you have just installed.)

Do NOT skip this section! If you skip it, applications may crash unexpectedly and you will encounter errors on the next page!
{: .notice--danger}

1. Power off your console
1. パソコンにSDカードを入れます
1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
    + The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    + If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), skip to Step 6
1. Type `4`, then press Enter to remove the trigger file
    + You should see "Removed trigger file."
1. Type `5`, then press Enter to remove MSET9
    + You should see "Successfully removed MSET9!"
1. Press Enter to close the MSET9 script

{% include_relative include/luma3ds-installed-note.txt %}
___

Did you follow Section IV (Removing MSET9)? That section is MANDATORY!
{: .notice--danger}

[セットアップを完了する](finalizing-setup) へ進みます
{: .notice--primary}
