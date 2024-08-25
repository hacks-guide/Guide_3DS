---
title: "Resolución de Problemas"
---

Esta página ofrece consejos de solución de problemas para problemas comunes que puedan surgir. Si no logras resolver tu problema con esta página, por favor únete al [Discord de Nintendo Homebrew](https://discord. g/MWxPgEp) (en inglés) y describe tu problema, incluyendo lo que ya has intentado hacer previamente.

{% capture compat %}
<summary>Table of Contents</summary>

Used on multiple pages:
* [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Guide pages:
* [Installing boot9strap (Soundhax)](#installing-boot9strap-soundhax)
* [Installing boot9strap (MSET9)](#installing-boot9strap-mset9)
* [Installing boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
* [Installing boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
* [Finalizing Setup](#finalizing-setup)

Issues after installation:
* [Boot issues](#boot-issues-on-consoles-with-custom-firmware)
* [Software issues](#software-issues-on-consoles-with-custom-firmware)

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--info}

## Problemas con SafeB9SInstaller

### Before opening SafeB9SInstaller

{% capture compat %}
<summary><u>Failed to open SafeB9SInstaller.bin</u></summary>

Falta el archivo `SafeB9SInstaller.bin` o está fuera de lugar. Download the latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip), extract it, and place `SafeB9SInstaller.bin` on the root of your SD card. No añadas manualmente la extensión `.bin` al archivo si ves que no la tiene.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### SigHaxed FIRM was not installed! Revisa la pantalla inferior para más información.

{% capture compat %}
<summary><u>MicroSD Card - init failed</u></summary>

Your SD card is most likely acting weird. Try reformatting your SD card ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). If this doesn't work, try another SD card.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - File not found</u></summary>

Los archivos `boot9strap.firm` y `boot9strap.firm.sha` no están en la carpeta `boot9strap`, o la carpeta `boot9strap` tiene un nombre equivocado. Download the latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), and place `boot9strap.firm` and `boot9strap.firm.sha` in the `boot9strap` folder.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - invalid FIRM</u></summary>

Hay un problema con los archivos `boot9strap.firm` y `boot9strap.firm.sha`. Re-download the latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), and place `boot9strap.firm` and `boot9strap.firm.sha` in the `boot9strap` folder.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Secret Sector - File not found</u></summary>

You are missing `secret_sector.bin` from the `boot9strap` folder, or the `boot9strap` folder is misnamed. Download [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) using a torrent client, and place it in the `boot9strap` folder.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Something else</u></summary>

Únete al [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) (en inglés) para obtener ayuda, y describe el mensaje que veas.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Instalar boot9strap (Soundhax)

{% capture compat %}
<summary><u>Red/purple/pink and white screen after running Soundhax</u></summary>

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

If your console is not on those firmwares, it likely indicates that you already have custom firmware. Deberías ir a [Comprobación de CFW](checking-for-cfw) antes de continuar.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"An error has occurred, forcing the software to close..." (white message box)</u></summary>

Hay un problema con el archivo `otherapp.bin` (falta, está mal colocado o está corrupto). Descarga la última versión de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) y coloca el archivo en la raíz de tu tarjeta SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Could not play"</u></summary>

You have the wrong Soundhax file for your console and region, or your console is incompatible with Soundhax. In the latter case, your course of action will determine on what version your 3DS is currently on. Únete al [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) para obtener ayuda.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>
Back up your data and reformat your SD card as FAT32 with the recommended tool depending on your operating system ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard and the HP formatting tool (HPUSBDisk) are known to cause issues with 3DS SD cards.

If this is unsuccessful, try using another SD card.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (MSET9)

{% capture mset9-chorus %}
    + **Windows**: Double-click `MSET9-Windows.bat`
    + **macOS**: Double-click `MSET9-macOS.command` and enter your password if prompted
    + **Linux**: open a Terminal window, `cd` to the root of your SD card, then type `python3 mset9.py` and press Enter
{% endcapture %}

{% capture compat %}
<summary><u>Python 3 is not installed</u></summary>

Python is not installed on the computer you are using. Download it from the [Python website](https://www.python.org/downloads/), double-click the installer, and follow the prompts to install Python. Once Python is installed, try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>HOME Menu extdata: Missing!</u></summary>

Please power on your console with your SD inserted, then check the MSET9 status again.

If this does not work, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from [Section I Step 7](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Mii Maker extdata: Missing!</u></summary>

Mii Maker data was not found on the SD card. Please power on your console with your SD inserted, then launch Mii Maker, then check the MSET9 status again.

If this does not work, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from [Section I Step 8](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Title database: Not initialized!</u></summary>

Ensure that you have reset the title database.
    + Please power on your console with your SD inserted 
    + Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
        + This will not wipe any of your data
    + If you get a reset prompt, after resetting, power off your console and start again from [Section I Step 14](installing-boot9strap-(mset9-cli)#section-i---prep-work)

If you do *not* getting a reset prompt, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
1. Type `2` then press enter to check the MSET9 status
    + This will create the dummy databases again
1. Close the MSET9 script window
1. Start again from [Section I Step 12](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 01: Couldn't find Nintendo 3DS folder</u></summary>

You are not running MSET9 from the root of the SD card, or the SD card is missing the Nintendo 3DS folder.

Remember, your SD card should look like this:

![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
{: .notice--info}

If your SD card layout is correct, then your SD card most likely isn't being read by your console and needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from the beginning of [Section I](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 02: Your SD is write protected</u></summary>

Write-protection is enabled on this SD card. If you are using a full-size SD card, ensure that the lock is flipped in the [upright position](/images/sdlock.png). Otherwise, try ejecting and reinserting your SD card.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 04: You don't have 1 ID0, you have (#)!</u></summary>

You have multiple ID0 folders. To determine the correct folder, follow these instructions:

1. Rename the `Nintendo 3DS` folder to `BACKUP_Nintendo 3DS`
1. Reinsert your SD card into your console
1. Power on your console
1. Wait for the console to generate the SD card data
    + Your applications will have disappeared. This is normal and will be resolved shortly
1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Ve a la carpeta `Nintendo 3DS` en tu tarjeta SD
1. Write down the first few characters of the folder you see
    + This is your true ID0, which we will keep in the real Nintendo 3DS folder
1. Delete the ID0 from the current `Nintendo 3DS` folder
1. Move the true ID0 folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder
1. If it exists, move the `Private` folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder

Once you've done this, continue from [Section I Step 3](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 05: You don't have 1 ID1, you have (#)!</u></summary>

{% include_relative include/id1-check.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 06: You need at least 16MB free</u></summary>

Your SD card does not have enough space to trigger MSET9. Free up some space and try again.

At the end of this guide, you will need at least 1.3GB to make a NAND backup, so it's best to free up at least that much.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 07: One or more files are missing or malformed!</u></summary>

One or more files that MSET9 needs to run is missing or corrupted. Re-download the [MSET9 Release `.zip`](https://github.com/hacks-guide/MSET9/releases/latest) and extract it to the root of your SD card, replacing all existing files, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 18: Windows Locale Settings are broken!</u></summary>

{% include_relative include/winerror234.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Red screen after reinserting SD card (Section II Step 11)</u></summary>

You may be missing `SafeB9S.bin` from the root of your SD card, or the file may be corrupted. Copy it from the MSET9 `.zip`, replacing any existing files then follow these instructions to remove the trigger file:

1. Force power off your console by holding the Power button for 20 seconds
1. Inserta tu tarjeta SD en tu computadora
1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
    + The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    + If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you may [retry Section II](installing-boot9strap-(mset9-cli)#section-ii---mset9)
1. Type `4`, then press Enter
1. Once the window says "Removed trigger file", type `0` and then press Enter
1. Reinsert the SD card into your console
1. Power on your console
1. Return to [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Alternatively, your SD card may be improperly formatted or partitioned. After removing the trigger file, format it:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from from [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>System Settings loading infinitely after reinserting the SD card</u></summary>

You most likely did something different from the MSET9 instructions, selected the wrong model/version, or your SD card needs to be formatted. Ensure you are choosing the correct [model](/images/3dsmodels.png) and firmware version when opening the script.

Follow these instructions to remove the trigger file and to retry Section II:

1. Force power off your console by holding the Power button for 20 seconds
1. Inserta tu tarjeta SD en tu computadora
1. 1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
    + The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    + If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
1. Type `4`, then press Enter
1. Once the window says "Removed trigger file", type `0` and then press Enter
1. Reinsert the SD card into your console
1. Power on your console
1. Return to [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from from [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>An exception occurred after triggering MSET9</u></summary>

This likely indicates that you already have custom firmware. Deberías ir a [Comprobación de CFW](checking-for-cfw) antes de continuar.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (super-skaterhax)

{% capture compat %}
<summary><u>"An error has occurred. Please save your data in any software currently in use, then restart the system."</u></summary>

The date is set incorrectly. To set it correctly, follow these steps:

1. Select the System Settings icon on the HOME Menu, and tap Open.
1. Tap Other Settings.
1. Tap Date & Time.
1. Tap Today's date.
1. Tap Up/Down Arrows to set the correct Day, Month and Year.
1. Select OK to confirm.

If the problem persists:

+ Ensure that `arm11code.bin`, `browserhax_hblauncher_ropbin_payload.bin`, and `boot.3dsx` are on the root of the SD card (not inside of any folder)
+ Ensure that you selected the correct payload for your region AND system version
+ Ensure that your region settings look [like this](/images/screenshots/skater_lang.png)
+ Try resetting your browser data:
    1. Launch the browser, then launch the browser settings
    1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initilize Save Data" or "Clear All Save Data")
    1. Try the exploit again
+ Try changing the system language to something other than the current language

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)</u></summary>

The file `arm11code.bin` is missing or misplaced. Make sure to copy the files of the [latest version of super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) for your region and version to the root of your SD card (not inside of a folder).

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>An exception occured or "DLL_HEAP_INFORMATION" when pressing GO! GO!</u></summary>

This likely indicates that you already have custom firmware. Deberías ir a [Comprobación de CFW](checking-for-cfw) antes de continuar.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (SSLoth-Browser)

{% capture compat %}
<summary><u>Red/purple/pink and white screen after running Browserhax</u></summary>

This likely indicates that you already have custom firmware. Deberías ir a [Comprobación de CFW](checking-for-cfw) antes de continuar.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)</u></summary>

The file `arm11code.bin` is missing or misplaced. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. No añadas manualmente la extensión `.bin` al archivo si ves que no la tiene.
{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"An error has occurred, forcing the software to close..." (white message box)</u></summary>

There may be an issue with your `arm11code.bin` file. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. No añadas manualmente la extensión `.bin` al archivo si ves que no la tiene.

You can also try resetting your browser save data:

1. Launch the browser, then launch the browser settings
1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
1. Try the exploit again

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Opening the browserhax QR code or URL crashes</u></summary>

Browser based exploits (such as this one) are often unstable and crash frequently, but they can sometimes be fixed by doing the following steps.

1. Launch the browser, then launch the browser settings
1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
1. Try the exploit again
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>System Update prompt when opening browser</u></summary>

The SSLoth proxy was incorrectly configured. Re-do the SSLoth section on the page.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 032-0420 when opening browser</u></summary>

Follow these steps in order:

1. Launch System Settings on your console
1. Navigate to `Internet Settings` -> `Connection Settings`
1. Click on your network connection slot and navigate to `Change Settings` -> `Next Page (right arrow)` -> `Proxy Settings`
1. Set "Proxy Settings" to "No"
1. Click OK, then click Save
1. When prompted, click "Test" to perform the connection test
    + The test should succeed
1. Click "OK" to continue
1. Press "Back" twice, then "Close" to go back to the HOME Menu
1. Open the Internet Browser once
1. If prompted about a system update, press OK
    + This won't actually update the system
1. Start again from [Section II](installing-boot9strap-(ssloth-browser).html#section-ii---ssloth)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Frozen on "Doing agbhax..."</u></summary>
There may be an issue with your `arm11code.bin` file. Re-download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place it on the root of your SD card, and rename it to `arm11code.bin`. No añadas manualmente la extensión `.bin` al archivo si ves que no la tiene.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"PrepareArm9ForTwl returned error c8804631!"</u></summary>

Únete al [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) para obtener ayuda.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>

Back up your data and reformat your SD card as FAT32 with the recommended tool depending on your operating system ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard and the HP formatting tool (HPUSBDisk) are known to cause issues with 3DS SD cards.

If this is unsuccessful, try using another SD card.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Finalizar instalación

{% capture compat %}
<summary><u>Unable to update console</u></summary>

Los pasos siguientes se pueden intentar en cualquier orden, pero están ordenados por orden de dificultad.

1. Establece la configuración de DNS a "Automático"
1. Colócate más cerca de tu router de Wi-Fi
1. Actualiza desde el modo seguro: Apaga la consola, mantén presionados los botones (L), (R), (D-pad Arriba) y (A) mientras la enciendes, y sigue las indicaciones en pantalla
1. Borra tu configuración de conexión Wi-Fi, y luego vuelve a reconectar
1. Renicia tu router de Wi-Fi
1. Conéctate a una conexión Wi-Fi distinta, como desde una red de datos móviles
1. Puede que los servidores de Nintendo estén caídos. Intenta más tarde
1. Si aún te sigue dando error, [sigue la sección de CTRTransfer](ctrtransfer) y luego intenta actualizar nuevamente
1. Para más soporte (en inglés), entra al [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #22: finalize.romfs is invalid</u></summary>

The file `finalize.romfs` is corrupt or unreadable. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #23: finalize.romfs in wrong location</u></summary>

The file `finalize.romfs` was placed in the wrong location instead of root of SD. The script will attempt to resolve this, but requires your permission to do so. Press (A) on the next few prompts to continue.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #24: SD is write-protected</u></summary>

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>Error #02: Missing essential.exefs</u></summary>

You said 'No' to the "Make essential files backup?" prompt in GodMode9. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}

<summary><u>Error #04: No space</u></summary>

You need at least 1.3GB of free space to perform the NAND backup, which is a part of the script. If you don't have enough space, follow these steps:

1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
1. Delete the Nintendo 3DS folder from the SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Press the (Home) button
1. Selecciona "Scripts..."
1. Select "finalize"
1. Press (A) to create a NAND backup
    + This may take around fifteen minutes
1. Press (A) again
    + The console should automatically power off
1. Inserta tu tarjeta SD en tu computadora
1. Copy the files in `/gm9/backups/` on your SD to a safe location on your computer
1. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
1. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
1. Delete the `Nintendo 3DS` folder from your computer

Now that you have your NAND backup in a safe place:

1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Press the (Home) button
1. Selecciona "Scripts..."
1. Select "finalize"
1. Continue the script as normal
    + The NAND backup will be automatically skipped

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #05: No title database</u></summary>

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #06 or "Error: Could not open directory" when attempting a NAND backup</u></summary>

Make sure you have at least 1.3GB available in your SD card. If you don't have enough space, follow these steps:
1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
1. Delete the Nintendo 3DS folder from the SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Perform a [NAND Backup](godmode9-usage#creating-a-nand-backup)
1. Copy the files in `gm9/out` on your SD to a safe location on your computer
1. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card, keeping essential.exefs in `/gm9/out/`
1. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
1. Delete the `Nintendo 3DS` folder from your computer

If you have enough space on your SD card, your SD might be corrupted or faulty. Check your SD card for any errors by following the guide according to your computer's operating system: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #12: Copy (file).db fail</u></summary>

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #17: Duplicate NAND backup</u></summary>

The script has detected that the Nintendo 3DS folder is missing AND that you have already made a NAND backup before. If you intend to install homebrew applications, you should do the following:

1. Press (B) to cancel making another NAND backup
1. Mantén pulsado (R) y presiona (Start) al mismo tiempo para apagar tu consola
1. Copy the contents of `/gm9/backups/` to a safe location on your computer
1. Delete `/gm9/backups/` from your SD card
1. If you moved your Nintendo 3DS folder off of your SD card to get to this point, copy it back to your SD card
    + If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Presiona el botón (Home) para abrir el menú de acción
1. Selecciona "Scripts..."
1. Select "finalize"
1. Follow the prompts in the script, answering any questions that you are asked 

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #18a/18b: MSET9 detected</u></summary>

You didn't remove MSET9 on the previous page. The script will attempt to remove MSET9 for you; follow the instructions given by the script.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Boot issues on consoles with custom firmware

The steps detailed here generally assume that your console has a modern custom firmware setup (boot9strap + Luma3DS 8.0 or greater). Si tu consola tiene una configuración antigua (por ejemplo, algo basado en arm9loaderhax o menuhax), deberías actualizar dicha configuración antes de seguir estas instrucciones.
{: .notice--info}

### Power/notification light indicators

{% capture compat %}
<summary><u>My console powers off when I try to turn it on, and/or the notification LED shows a color on boot</u></summary>

There is an issue with your `boot.firm` file. If you're running [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), your 3DS notification LED may flash a certain color. This color is used to diagnose issues involving your `boot.firm` file on SD card or internal memory. On older versions of boot9strap, the blue light will power off almost immediately when trying to turn on the console.

If the notification LED flashes:

+ **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
+ **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. It was able to find `boot.firm` on internal memory, but the file is corrupted.
+ **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

You can get a new `boot.firm` file by downloading the [latest release of Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extracting it, and placing `boot.firm` on the root of your SD card. If your `boot.firm` file is consistently being detected as corrupted, you may want to check your SD card for errors ([Windows](h2testw-(windows)), [Linux](f3-(linux)), or [macOS](f3xswift-(mac))). Also, note that the 3DS tends to have issues with files extracted using WinRAR.

If you hear a "popping sound", potentially accompanied with the backlight turning on for a split second, there is a hardware issue with your console (such as a disconnected backlight cable). You may be able to get your console to boot by holding it at certain angles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>My console gets stuck on a black screen with blue power light staying on</u></summary>

Los pasos siguientes se pueden intentar en cualquier orden, pero están ordenados por cantidad de tiempo que toma realizar.

1. Power off your console, remove the SD card, re-insert it, then power on your console.
1. Power off your console, eject the game cartridge if inserted, power on your console, then wait up to ten minutes. If your console boots within ten minutes, the issue has been fixed and is unlikely to reoccur
1. Cambia el nombre de la carpeta `Nintendo 3DS` de tu tarjeta SD a `Nintendo 3DS_BACKUP`, luego intenta encenderla. If your console successfully boots, there is some issue within your `Nintendo 3DS` folder. Try clearing HOME Menu extdata:
    + Ve a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
    + Delete the corresponding folder for your 3DS region:
        + **Región EUR**: `00000098`
        + **Región JPN**: `00000082`
        + **Región USA**: `0000008f`
        + **Región CHN**: `000000A1`
        + **Región KOR**: `000000A9`
        + **Región TWN**: `000000B1`
1. Intenta iniciar en modo de recuperación y actualizar tu consola:
    + Power off your console
    + Mantén presionado (L) + (R) + (D-Pad Arriba) + (A)
    + Power on your console
    + If you were successful, the console will boot to an "update your system" screen
1. Sigue la guía de [CTRTransfer](ctrtransfer)
1. Para más ayuda, puedes pedir ayuda (*en inglés*) en el [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### Error message on boot

{% capture compat %}
<summary><u>"An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"</u></summary>

Tu versión de Luma3DS está desactualizada. Descarga la última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) y coloca `boot.firm` en la raíz de tu tarjeta SD, reemplazando cualquier archivo existente. Asegúrate de extraer el archivo ZIP con cualquier herramienta que no sea WinRAR, ya que se sabe que causa problemas con los archivos relacionados con 3DS.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."</u></summary>
There are a number of reasons as to why this could be happening. In any case, this error can usually be fixed by following the [CTRTransfer](ctrtransfer) guide.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"An error has occurred. Hold down the POWER button to turn off the power..."</u></summary>

Tienes activada la opción "Disable ARM11 exception handlers", o directamente no tienes custom firmware instalado. Intenta activar las excepciones de ARM11:
    + Power off your console
    + Mantén presionado (Select)
    + Power on your console, while still holding (Select)
    + Si la opción "Disable ARM11 exception handlers" está marcada, desmárcala
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>HOME Menu is missing installed applications</u></summary>

This could be caused by various reasons, but most likely because your SD card is not being read by the system.
You can check if your SD is being read by holding SELECT on boot and checking the yellow text on the bottom screen; if it says "Booted from CTRNAND via B9S", then your console is booting from the internal memory and not from the SD card.
If this is the case, attempt the steps below, which are listed from easiest to hardest:
1. Power off your console, remove the SD card, re-insert it, then power on your console
1. Power off your console, remove the SD card, insert it on your computer, download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extract `boot.firm` from the `Luma3DS.zip` and place it on the root of your SD card (replacing any existing file)
1. Power off your console, remove the SD card, insert it on your computer and reformat your SD card according to your computer's operating system: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)) *(this will wipe your SD card data)*
1. Test your SD card for errors by following the guide according to your computer's operating system: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)). If your SD card is marked as faulty, then you will have to replace your SD card
1. Your SD card slot may be broken. Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Blue "BOOTROM ERROR" screen</u></summary>

Your console is likely hard-bricked. You will need to buy an ntrboot flashcart to reinstall boot9strap in order to attempt to fix your console. This may also indicate a hardware issue that cannot be fixed. En este caso, entra al [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) para obtener ayuda (*en inglés*).
    + También es posible que alguien haya configurado una pantalla de inicio que luce tal y como un brickeo. Try leaving your console powered on, waiting on the blue screen, for five minutes.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Some other error</u></summary>

Por favor saca una foto del error y entra al [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) y pide ayuda (*en inglés*).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Software issues on consoles with custom firmware

{% capture compat %}
<summary><u>DSi / DS functionality is broken or has been replaced with Flipnote Studio</u></summary>

1. Descarga la última versión de [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) *(el archivo `.3dsx`)*
1. Apaga tu consola
1. Crea una carpeta llamada `3ds` en la raíz de tu tarjeta SD, si aún no existe
1. Copia `TWLFix-CFW.3dsx` a la carpeta `/3ds/` en tu tarjeta SD
1. Reinsert your SD card into your console
1. Abre el Homebrew Launcher
1. Inicia TWLFix-CFW desde la lista de homebrew
1. Presiona (A) para desinstalar los títulos TWL dañados
1. Press (Start) to reboot the console
1. Actualiza tu consola yendo a Configuración de la consola, luego a "Otras opciones", y luego a la derecha del todo la opción "Actualización"
    + La actualización verá que los títulos TWL esenciales han sido desinstalados, y los volverá a descargar e instalar
1. Once the update is complete, tap "OK" to reboot the console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>GBA Virtual Console and/or Safe Mode functionality is broken</u></summary>

Your console is running Luma3DS 6.6 or older, likely via arm9loaderhax. You should follow [A9LH to B9S](a9lh-to-b9s) to update your console to a modern custom firmware environment.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work</u></summary>

Esto puede ocurrir después de un CTRTransfer o al cambiar de región en Old 3DS / 2DS. Follow the instructions [here](https://3ds.hacks.guide/region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Exception screen when booting/loading an application</u></summary>

Look for your exception screen in [this page](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
If you weren't able to find your error or the instructions didn't work, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher</u></summary>

Your console likely still has menuhax67 installed. To uninstall menuhax67, download the latest release of [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (the menuhax `.zip`), then follow the ["Uninstall menuhax67" section](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Other troubleshooting

{% capture compat %}
<summary><u>Clear HOME Menu extdata</u></summary>

1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Navigate to the `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` folder on your SD card
1. Delete the corresponding folder for your 3DS region:
    + **Región EUR**: `00000098`
    + **Región JPN**: `00000082`
    + **Región USA**: `0000008f`
    + **Región CHN**: `000000A1`
    + **Región KOR**: `000000A9`
    + **Región TWN**: `000000B1`
1. Reinsert your SD card into your console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Clear HOME Menu theme data</u></summary>

1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Navigate to the `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` folder on your SD card
1. Delete the corresponding folder for your 3DS region:
    + **EUR Region**: `000002ce`
    + **JPN Region**: `000002cc`
    + **USA Region**: `000002cd`
1. Reinsert your SD card into your console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Manually entering Homebrew Launcher</u></summary>

If you are missing the Homebrew Launcher application from your HOME Menu, you can follow these instructions to manually enter the Homebrew Launcher. (You will need [boot.3dsx and boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) on the root of your SD card.)

{% include_relative include/launch-hbl-dlp.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Turning off Parental Controls</u></summary>

You can disable the Parental Controls feature by going to System Settings -> Parental Controls and inserting the PIN, then pressing "Clear Settings", then "Delete" to remove it.
However, if you do not know the PIN and therefore cannot access the console's settings, you will need to disable it. In order to do this, you need to obtain your console's master key (mkey):
1. Go to [this website](https://mkey.eiphax.tech/)
1. Fill the following boxes with the information:
    + Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
    + System Date: The day and month your console's clock is set to
    + Inquiry Number: Can be obtained by pressing "Forgot PIN" then "I Forgot" in the Parental Controls screen
1. After you have obtained your mkey, press OK on the screen you have obtained your Inquiry Number, then input the master key
1. Press "Clear Settings", then "Delete" to remove all Parental Controls data
{% endcapture %}
<details>{{ compat | markdownify }}</details>
