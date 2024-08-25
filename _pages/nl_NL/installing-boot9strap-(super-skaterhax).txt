---
title: "Installing boot9strap (super-skaterhax)"
---

{% include toc title="Inhoudsopgave" %}

{% capture technical_info %}
<summary><em>Technical Details (optional)</em></summary>
For technical details on the exploits that you will be using on this page, see [here](https://github.com/zoogie/super-skaterhax).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Compatibility Notes

Super-skaterhax (when used to launch the Homebrew Launcher) is compatible with New models on version 11.15.0 and above in all regions.

The instructions provided only apply to the New 3DS, New 3DS XL, and New 2DS XL. Please ensure that the console you are modding is a New 3DS, New 3DS XL, or New 2DS XL before continuing.
{: .notice--warning}

### Wat je nodig hebt

* The latest release of [super-skaterhax](https://github.com/zoogie/super-skaterhax/releases) (the release `.zip` file)
* De nieuwste versie van [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (directe download)
* De nieuwste versie van [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (directe download)
* The latest release of [nimdsphax](https://github.com/luigoalma/nimdsphax/releases/download/v1.0/nimdsphax_v1.0.zip) (direct download)
* De nieuwste versie van [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (het Luma3DS `.zip` bestand)

#### Deel I - Voorbereiding

In this section, you will copy the files needed to trigger both super-skaterhax and the Homebrew Launcher.

1. Zet je console uit
1. Plaats je SD kaart in je computer
1. Kopieer `boot.firm` en `boot.3dsx` van de Luma3DS `.zip` naar de hoofdmap van je SD-kaart
    + De hoofdmap van de SD-kaart verwijst naar de bovenste map van de SD-kaart, waarin je alle mappen op de SD-kaart kunt zien, waaronder de Nintendo 3DS map, zonder je in de Nintendo 3DS map te bevinden
1. Copy everything inside the folder for your console's region and version (`arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin`) in the release_new3ds `.zip` to the root of your SD card
1. Maak een map genaamd `boot9strap` op de hoofdmap van je SD-kaart
1. Kopieer `boot9strap.firm` en `boot9strap.firm.sha` van de boot9strap `.zip` naar de `/boot9strap/` map op je SD-kaart
1. Kopieer `SafeB9SInstaller.bin` van de SafeB9SInstaller `.zip` naar de hoofdmap van je SD-kaart
1. Maak een map genaamd "3ds" op de hoofdmap van je SD-kaart als die nog niet bestaat
    + This folder stores homebrew applications and data; it is different from the `Nintendo 3DS` folder that the console automatically generates
1. Copy the `nimdsphax` folder from the nimdsphax `.zip` to the `/3ds/` folder on your SD card
1. Stop je SD-kaart terug in je console
1. Zet je console aan

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}


#### Section II - super-skaterhax

In this section, you will visit the browser exploit webpage, which will launch the Homebrew Launcher.

Als je dat nog niet gedaan hebt, zorg ervoor dat je een werkende internetverbinding hebt ingesteld op je console.
{: .notice--info}

{% capture set_date %}
<summary>If your system date is incorrect, this exploit will not work.<br>Please follow the steps below to set the correct system date.</summary>
1. Launch System Settings on your console
1. Selecteer "Other Settings"
1. Navigate to "Date & Time" -> "Today's date"
1. Tap Up/Down Arrows to set the correct Day, Month and Year
1. Select OK to confirm
{% endcapture %}
<details>{{ set_date | markdownify }}</details>
{: .notice--info}

1. On the HOME Menu, press the Left and Right shoulder buttons at the same time to open the camera
    + If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/super/` for EUR/USA/JPN, `https://zoogie.github.io/web/korea` for KOR)
1. Tap the QR code button and scan one of the following QR codes for your console's region [here](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
    + If you get a security certificate warning, press (A) to allow the connection
1. Press the (Select) button to open the bookmark tab
    + If your (Select) button does not respond, tap the star icon on the bottom-left corner of the screen
1. Tap "Bookmark this page"
1. Press (B) once to return to the browser
1. Press (Start) to open the context menu
    + If your (Start) button does not respond, tap the 3-line menu on the bottom-right corner of the screen
1. Tap on "Settings"
1. Tap on "Delete Cookies"
1. Druk op (A) om door te gaan
1. Press (Home) to return to the HOME Menu, then immediately press (A) to launch the browser again
1. Select the "GO GO!" button on the top screen
    + If any prompts appear, approve all of them
    + If your console freezes on a yellow screen, hold the POWER button until it turns off, then retry this section
    + If your console freezes on a red screen, hold the POWER button until it turns off, redo step 3 of Section II, then retry this section
    + If your console shows "Text" on the bottom screen, you have an Old 3DS and this exploit **will not work on your device**. If this is the case, you should follow [MSET9](installing-boot9strap-(mset9)) instead
    + If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-super-skaterhax)
1. Your console will have booted into the Homebrew Launcher
1. Launch nimdsphax from the list of homebrew
1. Als de exploit succesvol was, zal je SafeB9SInstaller hebben opgestart
    + If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section
    + This may take up to five attempts

#### Deel III - Boot9strap installeren

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}

___

### Doorgaan naar [Installatie voltooien](finalizing-setup)
{: .notice--primary}
