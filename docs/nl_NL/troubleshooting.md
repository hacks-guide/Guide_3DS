# Probleemoplossing

Deze pagina biedt advies voor het oplossen van problemen die algemeen zijn ondervonden. Als je je probleem niet kunt oplossen met het advies op deze pagina, neem dan deel aan [Nintendo Homebrew op Discord](https://discord.gg/MWxPgEp) en beschrijf je probleem, inclusief wat je al hebt geprobeerd.

:::details Table of Contents

Used on multiple pages:

- [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Guide pages:

- [Installing boot9strap (Soundhax)](#installing-boot9strap-soundhax)
- [Installing boot9strap (MSET9)](#installing-boot9strap-mset9)
- [Installing boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
- [Installing boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
- [Finalizing Setup](#finalizing-setup)

Issues after installation:

- [Boot issues](#boot-issues-on-consoles-with-custom-firmware)
- [Software issues](#software-issues-on-consoles-with-custom-firmware)

:::

## Issues with SafeB9SInstaller

### Before opening SafeB9SInstaller

:::details Failed to open SafeB9SInstaller.bin

Het bestand `SafeB9SInstaller.bin` ontbreekt of zit in de verkeerde map. Download de nieuwste versie van [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip), pak het uit en plaats `SafeB9SInstaller.bin` op de hoofdmap van je SD-kaart. Voeg de `.bin` extensie niet toe als je het nog niet ziet.

:::

### SigHaxed FIRM was not installed! Kijk naar het onderste scherm voor meer informatie.

:::details MicroSD Card - init failed

Your SD card is most likely acting weird. Try reformatting your SD card ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). If this doesn't work, try another SD card.

:::

:::details SigHaxed FIRM - File not found

Ofwel zitten `boot9strap.firm` en `boot9strap.firm.sha` niet in de `boot9strap` map, of de `boot9strap` map heeft de verkeerde naam. Download de nieuwste versie van [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) en plaats `boot9strap.firm` en `boot9strap.firm.sha` in de `boot9strap` map.

:::

:::details SigHaxed FIRM - invalid FIRM

Er is een probleem met je `boot9strap.firm` en `boot9strap.firm.sha` bestanden. Download de nieuwste versie van [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) opnieuw en plaats `boot9strap.firm` en `boot9strap.firm.sha` in de `boot9strap` map.

:::

:::details Secret Sector - File not found

Je mist `secret_sector.bin` van de `boot9strap` map, of de `boot9strap` map heeft niet de juiste naam. Download [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655\&dn=secret_sector.bin\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) met behulp van een torrent client en plaats het in de `boot9strap` map.

:::

:::details Something else

Sluit je aan bij [Nintendo Homebrew op Discord](https://discord.gg/MWxPgEp) voor hulp, en beschrijf het bericht dat je ziet.

:::

## Installing boot9strap (Soundhax)

:::details Red/purple/pink and white screen after running Soundhax

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

If your console is not on those firmwares, it likely indicates that you already have custom firmware. Je zou best [controleren op CFW](checking-for-cfw).

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

Er is een probleem met je `otherapp.bin` bestand (het ontbreekt, werd misplaatst of is corrupted). Download de nieuwste versie van [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) en plaats het op de hoofdmap van je SD-kaart.

:::

:::details "Could not play"

You have the wrong Soundhax file for your console and region, or your console is incompatible with Soundhax. In the latter case, your course of action will determine on what version your 3DS is currently on. Sluit je aan bij [Nintendo Homebrew op Discord](https://discord.gg/MWxPgEp) voor hulp.

:::

:::details Failed to mount the SD card!

Mocht dit niet lukken, gebruik dan een andere SD-kaart.

:::

## Installing boot9strap (MSET9)

:::details Python 3 is not installed

Python is not installed on the computer you are using. Download it from the [Python website](https://www.python.org/downloads/), double-click the installer, and follow the prompts to install Python. Once Python is installed, try again.

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

1. Type the number corresponding to your console model and version, then press Enter
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

1. Hernoem de `Nintendo 3DS` map naar `BACKUP_Nintendo 3DS`
2. Stop je SD-kaart terug in je console
3. Zet je console aan
4. Wait for the console to generate the SD card data
   - Your applications will have disappeared. Dit is normaal en wordt binnenkort opgelost
5. Zet je console uit
6. Plaats je SD kaart in je computer
7. Ga naar de `Nintendo 3DS` map op je SD-kaart
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

:::details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

:::

:::details Red screen after reinserting SD card (Section II Step 11)

You may be missing `SafeB9S.bin` from the root of your SD card, or the file may be corrupted. Copy it from the MSET9 `.zip`, replacing any existing files then follow these instructions to remove the trigger file:

1. Force power off your console by holding the Power button for 20 seconds
2. Plaats je SD kaart in je computer

<!--@include: ./_include/mset9-chorus.md -->

1. Type the number corresponding to your console model and version, then press Enter
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you may [retry Section II](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
2. Type `4`, then press Enter
3. Once the window says "Removed trigger file", type `0` and then press Enter
4. Reinsert the SD card into your console
5. Zet je console aan
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
2. Plaats je SD kaart in je computer

<!--@include: ./_include/mset9-chorus.md -->

1. Type the number corresponding to your console model and version, then press Enter
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
2. Type `4`, then press Enter
3. Once the window says "Removed trigger file", type `0` and then press Enter
4. Reinsert the SD card into your console
5. Zet je console aan
6. Return to [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. Copy everything off the SD Card to your PC
2. Format the SD Card ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copy everything back
4. Start again from from [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details An exception occurred after triggering MSET9

This likely indicates that you already have custom firmware. Je zou best [controleren op CFW](checking-for-cfw).

:::

## Installing boot9strap (super-skaterhax)

:::details "An error has occurred. Please save your data in any software currently in use, then restart the system."

If no colors flash after pressing "GO GO!":

- Ensure that you have set your system date and [region](/images/screenshots/skater/skater-lang.png) correctly
- Ensure that no other browser tabs are open, then restart the browser and try the exploit again

If the screen flashes colors then freezes/crashes:

- Ensure that you have the correct copy of `arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin` for your console's version and region
- Try resetting your browser data:
  1. Launch the browser, then launch the browser settings
  2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
  3. Try the exploit again
- Try changing the system language to something other than the current language

:::

:::: details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

The file `arm11code.bin` is missing or misplaced. Make sure to copy the files of the [latest version of super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) for your region and version to the root of your SD card (not inside of a folder).

::: info

![](/images/screenshots/skater-root-layout.png)

:::

::::

:::details An exception occured or "DLL_HEAP_INFORMATION" when pressing GO! GO!

This likely indicates that you already have custom firmware. Je zou best [controleren op CFW](checking-for-cfw).

:::

## Installing boot9strap (SSLoth-Browser)

:::details Red/purple/pink and white screen after running Browserhax

This likely indicates that you already have custom firmware. Je zou best [controleren op CFW](checking-for-cfw).

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

The file `arm11code.bin` is missing or misplaced. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. Voeg de `.bin` extensie niet toe als je het nog niet ziet.

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

There may be an issue with your `arm11code.bin` file. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. Voeg de `.bin` extensie niet toe als je het nog niet ziet.

You can also try resetting your browser save data:

1. Launch the browser, then launch the browser settings
2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
3. Try the exploit again

:::

:::details Opening the browserhax QR code or URL crashes

Browser based exploits (such as this one) are often unstable and crash frequently, but they can sometimes be fixed by doing the following steps.

1. Launch the browser, then launch the browser settings
2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
3. Try the exploit again

:::

:::details System Update prompt when opening browser

The SSLoth proxy was incorrectly configured. Re-do the SSLoth section on the page.

:::

:::details Error 032-0420 when opening browser

Follow these steps in order:

1. Launch System Settings on your console
2. Navigate to `Internet Settings` -> `Connection Settings`
3. Click on your network connection slot and navigate to `Change Settings` -> `Next Page (right arrow)` -> `Proxy Settings`
4. Set "Proxy Settings" to "No"
5. Click OK, then click Save
6. When prompted, click "Test" to perform the connection test
   - The test should succeed
7. Click "OK" to continue
8. Press "Back" twice, then "Close" to go back to the HOME Menu
9. Open the Internet Browser once
10. If prompted about a system update, press OK
    - This won't actually update the system
11. Start again from [Section II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Frozen on "Doing agbhax..."

There may be an issue with your `arm11code.bin` file. Re-download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place it on the root of your SD card, and rename it to `arm11code.bin`. Voeg de `.bin` extensie niet toe als je het nog niet ziet.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Sluit je aan bij [Nintendo Homebrew op Discord](https://discord.gg/MWxPgEp) voor hulp.

:::

:::details Failed to mount the SD card!

Maak een back-up van je data en herformatteer je SD-kaart als FAT32 met het aanbevolen hulpmiddel afhankelijk van je besturingssysteem: ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)) of [Linux](formatting-sd-\(linux\))). MiniTool Partition Wizard en het formatteer programma van HP (HPUSBDisk) zijn ervoor bekend om problemen te veroorzaken met 3DS SD-kaarten.

Mocht dit niet lukken, gebruik dan een andere SD-kaart.

:::

## Finalizing Setup

:::details Unable to update console

De volgende stappen kunnen in elke volgorde uitgevoerd worden, maar zijn gesorteerd volgens de moeilijkheidsgraad om ze uit te voeren.

1. If you are using Pretendo, switch back to Nintendo with Nimbus and try again
2. Stel uw DNS instellingen in op "Auto"
3. Verplaats je dichter bij je wifi-router
4. Update vanuit Safe Mode door je console uit te schakelen, (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A) ingedrukt te houden tijdens het opstarten en de instructies te volgen op het scherm
5. Verwijder je wifi connectie, verbind daarne opnieuw met je wifi
6. Herstart je wifi-router
7. Maak verbinding met een andere wifi-verbinding, zoals een mobiele hotspot
8. Nintendo servers kunnen offline zijn; Probeer het later opnieuw
9. Als je nog steeds een foutmelding krijgt, [volg dan CTRTransfer](ctrtransfer) en probeer het opnieuw
10. Voor verdere ondersteuning (in het Engels), join dan [Nintendo Homebrew op Discord](https://discord.gg/MWxPgEp)

:::

:::details Error #22: finalize.romfs is invalid

The file `finalize.romfs` is corrupt or unreadable. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

:::

:::details Information #23: finalize.romfs in wrong location

The file `finalize.romfs` was placed in the wrong location instead of root of SD. The script will attempt to resolve this, but requires your permission to do so. Press (A) on the next few prompts to continue.

:::

:::details Error #24: SD is write-protected

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details Error #02: Missing essential.exefs

You said 'No' to the "Make essential files backup?" prompt in GodMode9. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

:::

:::details Error #04: No space

You need at least 1.3GB of free space to perform the NAND backup, which is a part of the script. If you don't have enough space, follow these steps:

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
4. Delete the Nintendo 3DS folder from the SD card
5. Stop je SD-kaart terug in je console
6. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
7. Press the (Home) button
8. Selecteer "Scripts..."
9. Select "finalize"
10. Press (A) to create a NAND backup
    - This may take around fifteen minutes
11. Press (A) again
    - The console should automatically power off
12. Plaats je SD kaart in je computer
13. Copy the files in `/gm9/backups/` on your SD to a safe location on your computer
14. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
15. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
16. Delete the `Nintendo 3DS` folder from your computer

Now that you have your NAND backup in a safe place:

1. Stop je SD-kaart terug in je console
2. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
3. Press the (Home) button
4. Selecteer "Scripts..."
5. Select "finalize"
6. Continue the script as normal
   - The NAND backup will be automatically skipped

:::

:::details Information #05: No title database

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

:::

:::details Error #06 or "Error: Could not open directory" when attempting a NAND backup

Make sure you have at least 1.3GB available in your SD card. If you don't have enough space, follow these steps:

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
4. Delete the Nintendo 3DS folder from the SD card
5. Stop je SD-kaart terug in je console
6. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
7. Perform a [NAND Backup](godmode9-usage#creating-a-nand-backup)
8. Copy the files in `gm9/out` on your SD to a safe location on your computer
9. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card, keeping essential.exefs in `/gm9/out/`
10. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
11. Delete the `Nintendo 3DS` folder from your computer

If you have enough space on your SD card, your SD might be corrupted or faulty. Check your SD card for any errors by following the guide according to your computer's operating system: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details Information #17: Duplicate NAND backup

The script has detected that the Nintendo 3DS folder is missing AND that you have already made a NAND backup before. If you intend to install homebrew applications, you should do the following:

1. Press (B) to cancel making another NAND backup
2. Hold (R) and press (Start) at the same time to power off your console
3. Copy the contents of `/gm9/backups/` to a safe location on your computer
4. Delete `/gm9/backups/` from your SD card
5. If you moved your Nintendo 3DS folder off of your SD card to get to this point, copy it back to your SD card
   - If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
6. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
7. Druk op de (Home) knop om het actiemenu te openen
8. Selecteer "Scripts..."
9. Select "finalize"
10. Follow the prompts in the script, answering any questions that you are asked

:::

:::details Error #18a/18b: MSET9 detected

You didn't remove MSET9 on the previous page. The script will attempt to remove MSET9 for you; follow the instructions given by the script.

:::

---

## Boot issues on consoles with custom firmware

::: info

The steps detailed here generally assume that your console has a modern custom firmware setup (boot9strap + Luma3DS 8.0 or greater). Als je console een oudere homebrew setup heeft (bijvoorbeeld iets gebaseerd op arm9loaderhax of menuhax), dan moet je updaten voor je deze instructies probeert.

:::

### Power/notification light indicators

:::details My console powers off when I try to turn it on, and/or the notification LED shows a color on boot

Er is een probleem met je `boot.firm` bestand. Als je [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4) gebruikt, kan je 3DS notificatie LED een bepaalde kleur flashen. Deze kleur wordt gebruikt om problemen met je `boot.firm` bestand op SD-kaart of intern geheugen te diagnosticeren. On older versions of boot9strap, the blue light will power off almost immediately when trying to turn on the console.

Als de notificatie LED knippert:

- **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
- **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. Het kon `boot.firm` vinden in het interne geheugen, maar het bestand is beschadigd.
- **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

Je kunt een nieuw `boot.firm` bestand krijgen door de [nieuwste versie van Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) te downloaden, het uitpakken en `boot.firm` plaatsen op de hoofdmap van je SD-kaart. Indien je `boot.firm` bestand consequent gedetecteerd wordt als beschadigd, controleer je best je SD-kaart op fouten ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), of [macOS](f3xswift-\(mac\))). Houd er ook rekening mee dat de 3DS problemen heeft met bestanden die zijn uitgepakt met WinRAR.

If you hear a "popping sound", potentially accompanied with the backlight turning on for a split second, there is a hardware issue with your console (such as a disconnected backlight cable). You may be able to get your console to boot by holding it at certain angles.

:::

:::details My console gets stuck on a black screen with blue power light staying on

De volgende stappen kunnen in elke volgorde uitgevoerd worden, maar zijn gesorteerd volgens de tijdsduur om ze uit te voeren.

1. Power off your console, remove the SD card, re-insert it, then power on your console.
2. Power off your console, eject the game cartridge if inserted, power on your console, then wait up to ten minutes. If your console boots within ten minutes, the issue has been fixed and is unlikely to reoccur
3. Hernoem de `Nintendo 3DS` map op je SD-kaart naar `Nintendo 3DS_BACKUP` en probeer dan je 3DS op te starten. If your console successfully boots, there is some issue within your `Nintendo 3DS` folder. Probeer HOME-menu extdata te wissen:
   - Navigate to `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
   - Verwijder de overeenkomende map voor je 3DS regio:
     - **EUR Region**: `00000098`
     - **JPN Region**: `00000082`
     - **USA Region**: `0000008f`
     - **CHN Region**: `000000A1`
     - **KOR Region**: `000000A9`
     - **TWN Region**: `000000B1`
4. Probeer in herstelmodus op te starten en je systeem up te daten:
   - Zet je console uit
   - Hold (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A)
   - Zet je console aan
   - If you were successful, the console will boot to an "update your system" screen
5. Volg de [CTRTransfer](ctrtransfer) handleiding
6. Voor verdere ondersteuning vraag om hulp in de [Nintendo Homebrew Discord](https://discord.gg/MWxPgEp)

:::

### Error message on boot

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"

Je Luma3DS versie is verouderd. Download de nieuwste versie van [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) en plaats `boot.firm` op de hoofdmap van je SD-kaart, ter vervanging van het bestaande bestand. Zorg ervoor dat je het ZIP-bestand uitpakt met een andere tool dan WinRAR, omdat het bekend is dat het problemen veroorzaakt met 3DS-gerelateerde bestanden.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

There are a number of reasons as to why this could be happening. In any case, this error can usually be fixed by following the [CTRTransfer](ctrtransfer) guide.

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..."

ARM11 exception handlers zijn uitgeschakeld of custom firmware is niet geïnstalleerd. Try enabling ARM11 exception handlers:

- Zet je console uit
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

Your console is likely hard-bricked. You will need to buy an ntrboot flashcart to reinstall boot9strap in order to attempt to fix your console. Dit kan ook duiden op een hardware probleem dat niet kan worden opgelost. In ieder geval, join [Nintendo Homebrew op Discord](https://discord.gg/MWxPgEp) voor hulp.
\+ Het is ook mogelijk dat iemand een boot-time splash screen heeft ingesteld dat eruit ziet als een brick. Try leaving your console powered on, waiting on the blue screen, for five minutes.

:::

:::details Some other error

Neem een foto van de fout en meld je aan bij [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) voor hulp.

:::

## Software issues on consoles with custom firmware

:::details DSi / DS functionality is broken or has been replaced with Flipnote Studio

1. Download de nieuwste versie van [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (het `.3dsx` bestand)
2. Zet je console uit
3. Maak een map genaamd "3ds" op de hoofdmap van je SD-kaart als die nog niet bestaat
4. Kopieer `TWLFix-CFW.3dsx` naar de `/3ds/` map op je SD kaart
5. Stop je SD-kaart terug in je console
6. Start de Homebrew Launcher op
7. Start TWLFix-CFW op uit de lijst met homebrew
8. Klik op (A) om de kapotte TWL titels te verwijderen
9. Press (Start) to reboot the console
10. Update your console by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
    - The update will see that the essential TWL titles have been uninstalled, and will redownload and reinstall them
11. Once the update is complete, tap "OK" to reboot the console

:::

:::details GBA Virtual Console and/or Safe Mode functionality is broken

Your console is running Luma3DS 6.6 or older, likely via arm9loaderhax. You should follow [A9LH to B9S](a9lh-to-b9s) to update your console to a modern custom firmware environment.

:::

:::details Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work

Dit kan gebeuren na een CTRTransfer of regio verandering op Old 3DS / 2DS. Follow the instructions [here](region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).

:::

:::details Exception screen when booting/loading an application

Look for your exception screen in [this page](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
If you weren't able to find your error or the instructions didn't work, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance.

:::

:::details Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher

Your console likely still has menuhax67 installed. To uninstall menuhax67, download the latest release of [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (the menuhax `.zip`), then follow the ["Uninstall menuhax67" section](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.

:::

---

## Other troubleshooting

:::details Clear HOME Menu extdata

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Navigeer naar de `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` map op je SD-kaart
4. Verwijder de overeenkomende map voor je 3DS regio:
   - **EUR Region**: `00000098`
   - **JPN Region**: `00000082`
   - **USA Region**: `0000008f`
   - **CHN Region**: `000000A1`
   - **KOR Region**: `000000A9`
   - **TWN Region**: `000000B1`
5. Stop je SD-kaart terug in je console

:::

:::details Clear HOME Menu theme data

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Navigeer naar de `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` map op je SD-kaart
4. Verwijder de overeenkomende map voor je 3DS regio:
   - **EUR Region**: `000002ce`
   - **JPN Region**: `000002cc`
   - **USA Region**: `000002cd`
   - **KOR Region**: `000002cf`
5. Stop je SD-kaart terug in je console

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
