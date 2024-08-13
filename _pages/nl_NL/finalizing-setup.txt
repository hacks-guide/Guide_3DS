---
title: "Installatie voltooien"
---

{% include toc title="Inhoudsopgave" %}

### Verplicht te lezen

Het `boot.firm` bestand wordt opgestart door boot9strap nadat het klaar is met laden van de NAND. In this case, we are using Luma3DS by [LumaTeam](https://github.com/LumaTeam/) to patch the console, allowing it to run homebrew software.

On this page, we will make critical system file backups and install some homebrew programs. Most of these steps will be automated using a script that you will run on your console.

{% capture notice-6 %}
The script will install the following applications:

+  **[FBI](https://github.com/lifehackerhansol/FBI)** *(installs CIA formatted applications)*
+  **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** *(launches the Homebrew Launcher)*
+  **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** *(installs custom themes)*
+  **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** *(backs up and restores save files for 3DS and DS games)*
+  **[ftpd](https://github.com/mtheall/ftpd)** *(access your 3DS SD card wirelessly)*
+  **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** *(a homebrew app store for downloading homebrew from the 3DS over Wi-Fi)*
+  **[GodMode9](https://github.com/d0k3/GodMode9)** *(multipurpose tool which can do NAND and cartridge functions)*

If you don't want one of these applications, you can remove them after you have finished this page by navigating to System Settings -> Data Management -> Nintendo 3DS -> Software. (GodMode9 cannot be removed in this way and is generally required for other functions.)
{% endcapture %}
<div class="notice--info">{{ notice-6 | markdownify }}</div>

### Compatibility Notes

Als je **New 3DS** versie 2.1.0 was voor het volgen van deze handleiding, moet je je [NAND-backup herstellen](godmode9-usage#restoring-a-nand-backup) voordat je verder gaat. This likely doesn't apply to you unless you were following this guide in 2017.
{: .notice--warning}

Als je vorige CFW setup was gebaseerd op EmuNAND en je wilt de inhoud van je EmuNAND/RedNAND verplaatsen naar SysNAND, Volg [EmuNAND verplaatsen](move-emunand) voor het volgen van deze pagina. Als je niet weet wat een EmuNAND is, dan is dit niet van toepassing op jou.
{: .notice--info}

### Wat je nodig hebt

* [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
* [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

### Instructies

#### Deel I - Voorbereiding

In this section, you will copy the files necessary to follow the rest of the instructions on this page.

1. Zet je console uit
1. Plaats je SD kaart in je computer
1. Copy `finalize.romfs` to the root of your SD card
1. Open the `luma` folder on your SD card and create a folder named `payloads` inside, if it does not already exist
1. Copy `x_finalize_helper.firm` to the `payloads` folder
1. Stop je SD-kaart terug in je console

The screenshot below indicates the minimum SD card layout that is required to follow this page. Je hebt mogelijk extra bestanden of mappen op je SD-kaart, afhankelijk van je vorige setup of de methode die je hebt gevolgd.

![]({{ "/images/screenshots/finalizing-root-layout.png" | absolute_url }})
{: .notice--info}

![]({{ "/images/screenshots/finalizing-luma-payloads.png" | absolute_url }})
{: .notice--info}

#### Section II - Updating the System

In this section, you will update your system to the latest version, which is safe to do with custom firmware.

{% include_relative include/sysupdate.txt cfw="true" %}

#### Section III - RTC and DSP setup

In this section, you will sync your 3DS internal clock with the actual time and dump the sound firmware (which is necesssary for some homebrew software to use sound properly).

1. Druk tegelijkertijd op (L) + (Down) + (Select) om het Rosalina menu te openen
    + If one of these buttons is broken, download [config.ini]({{ base_path }}/assets/config.ini){:download="config.ini"} and put it in your `luma` folder, replacing the existing one. This will change the Rosalina menu key combination to (X) + (Y)
1. Selecteer "Miscellaneous options"
1. Selecteer "Dump DSP firmware"
1. Druk op (B) om door te gaan
1. Selecteer "Nullify user time offset"
1. Druk op (B) om door te gaan
1. Druk op (B) om terug te gaan naar het Rosalina hoofdmenu
1. Druk op (B) om het Rosalina menu af te sluiten

#### Section IV - Setup Script

In this section, you will use a series of scripts to automate homebrew installation, SD card cleanup, and system file backup.

1. Zet je console uit
1. Press and hold (X), and while holding (X), power on your console. This will launch the Finalizing Setup Helper
    + If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
    + If you encounter an error, consult the [troubleshooting](troubleshooting#finalizing-setup) page
1. If the Helper was successful, your console will boot into GodMode9
    + From this point forward, you can access GodMode9 by holding START while powering on your console
1. Als je gevraagd word om essentiële bestanden te back-uppen, druk dan op (A) om dat te doen, druk dan op (A) als dit voltooid is
1. Als er wordt gevraagd om de RTC date&time goed te zetten, duk op (A) om dat te doen, stel dan de datum en tijd in en druk op (A) om door te gaan
1. Druk op de (Home) knop om het actiemenu te openen
1. Selecteer "Scripts..."
1. Select "finalize"
1. Follow the prompts in the script, answering any questions that you are asked
    + If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting#finalizing-setup) page
1. Once the script says "Setup complete!", press (A) to power off the device
    + If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
1. Plaats je SD kaart in je computer
1. Copy the `/gm9/backups/` folder to a safe location on your computer
    + This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    + The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    + The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
1. If you still have them, delete the two `SysNAND` files from the `/gm9/backups/` folder from your SD card
    + The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

Je bent klaar! Custom firmware is nu volledig geconfigureerd op je console.
{: .notice--success}

Trying to figure out what to do with your newly modded device? Visit [our wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!
{: .notice--info}

### Informatie en opmerkingen

{% capture notice-6 %}
Hier zijn enkele belangrijke combos die je zou moeten kennen:

+ Holding (Select) on boot will launch the Luma3DS configuration menu.
+ Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
+ By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. Dit kan worden gewijzigd in het Rosalina menu.
+ Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. Zie de [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4) voor een lijst.
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

Voor informatie over het gebruik van GodMode9's verschillende functies, bekijk [GodMode9 Gebruik](godmode9-usage) en [Titels en Game Cartridges dumpen](dumping-titles-and-game-cartridges).
{: .notice--info}
