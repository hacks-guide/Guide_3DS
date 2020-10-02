---
title: "Seedminer"
---

{% include toc title="Table of Contents" %}

### Required Reading

To install boot9strap on your device, we exploit an oversight in the security restrictions applied to "DSiWare" applications.

To accomplish this, we use a tool called Seedminer to calculate the DSiWare encryption key (`movable.sed`) for your device. We then use this DSiWare encryption key to decrypt a compatible DSiWare application and inject an exploit into it to run our own code (the exact exploit used will depend on your device's region).

If this key were completely random, the encryption key would be impossible to break on current computing hardware. Fortunately, the first half of the key (`movable_part1.sed`) is actually mathematically related to your device's Friend Code, allowing us to break the encryption. For information on how Seedminer works, please see [this presentation](https://zoogie.github.io/web/34⅕c3).

This method uses a powerful graphics card to perform the calculations needed. A volunteer-run website is used for the purpose of assisting you with this method.

### Instructions

#### Section I - Compatibility Test

While this test is not strictly necessary to perform the Seedminer exploit, the follow-up exploits to this do require this test to be performed and it would be a waste of time and effort to perform Seedminer without the ability to use the other exploits.

There are several different methods that build on the Seedminer exploit, so even if this test fails you can still use another method.

#### DSiWare Management Test (used for unSAFE_MODE)

1. Go to System Settings, then "Data Management", then "DSiWare"
1. If your console does not crash, the test was successful
  + If the console crashes to the home menu, the test has failed and you will have to use a legacy method at the bottom of this page
  + If you see a colored screen before the console crashes to the home menu, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and ask (in English) for someone there to assist you
1. Exit to home menu

#### Section II - Prep Work

1. Insert your SD card into your computer
1. Navigate to the `Nintendo 3DS` folder on your SD card
1. Copy the 32 character long name of the folder you see inside Nintendo 3DS
  + Do not go inside any more folders
  + If you see multiple folders with long, random names inside `Nintendo 3DS` without opening any other folders, perform the following:
  + Rename the `Nintendo 3DS` folder to `BACKUP_Nintendo 3DS`
  + Reinsert your SD card into your device and power on your device
  + Wait for the device to generate the SD card data
  + Power off your device and reinsert your SD card into your computer
  + Navigate to the `Nintendo 3DS` folder on your SD card
  + Copy the 32 character long name of the folder you see
  + Delete the `Nintendo 3DS` folder
  + Rename the `BACKUP_Nintendo 3DS` folder to `Nintendo 3DS`
1. Paste your 32 character long folder name into a document you can reference later
  + This folder name is also known as your "ID0"
1. Power on your device
1. Go to your Friend List (the [orange Face Icon]({{ "/images/friend-list-icon.png" | absolute_url }}) in the top row of your Home Menu)
  + If you receive an error and are kicked out of the menu, you either must create a new Mii or your console cannot connect to Nintendo's servers (due to a ban or connection issues)
1. Find your Mii profile, then find the "Friend Code" field on the top screen

#### Section III - Seedminer

1. Open [Bruteforce Movable](https://seedminer.hacks.guide/) on your computer
  + This site can automate the retrieval of `movable_part1.sed` (using a bot 3DS console) and the breaking of your device's DSiWare encryption (using a volunteer's computer to run Seedminer)
  + If this site is nonfunctional, try using [this one](https://bfm.nintendohomebrew.com/)
  + If both of these sites are nonfunctional, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and ask (in English) for someone there to assist you
1. Enter your device's Friend Code (with no spaces or dashes) into the "Your friend code" field
1. Paste your device's 32 character long folder name into the "Your ID0" field
  + Do not attempt to enter the ID0 by hand. Ensure the ID0 is entered correctly by copying and pasting it from where you saved it in the previous section
1. Select "Go"
  + If the site immediately goes to step 4, download your `movable.sed` file and continue with the next section.
1. When prompted, use the "Register Friend" button on your device to add the friend code of the bot 3DS console
1. Wait for the site to update
  + If it does not, wait a few minutes before refreshing the page once
1. Once the site processes your information, you will be given the option to "Continue" or "Do another device". Click the green "Continue" button
1. Wait for the remainder of the process to complete
  + This is usually fast (1-5 minutes) but in some cases, can take up to half an hour.
  + During this process, the bot you added may not show up on your 3ds. As long as the website updates, this is not an issue.
  + If you are still waiting after half an hour, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and ask (in English) for someone there to assist you
1. When the process has completed, download your `movable.sed` file from the site
  + Keep this file as you will need it in the upcoming pages

___

#### Seedminer + unSAFE_MODE

This method of using Seedminer for further exploitation uses your `movable.sed` file to take advantage of exploits in the SAFE_MODE firmware present on all 3DS units.

This method is compatible with all regions, though the CHN region is not covered by this guide.

Continue to [Installing boot9strap (USM)](installing-boot9strap-(usm))
{: .notice--primary}

___

#### Legacy Methods

These methods are outdated and not recommended unless otherwise indicated.

[Legacy Methods](legacy-methods)
