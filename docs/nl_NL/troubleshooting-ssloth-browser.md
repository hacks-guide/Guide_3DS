# Troubleshooting (SSLoth-Browser)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (SSLoth-Browser)" page, which is used on system versions between 11.4.0 and 11.13.0. Als je je probleem niet kunt oplossen met het advies op deze pagina, neem dan deel aan [Nintendo Homebrew op Discord](https://discord.gg/MWxPgEp) en beschrijf je probleem, inclusief wat je al hebt geprobeerd.

::: warning

These instructions are only valid for the "Installing boot9strap (SSLoth-Browser)" page. If you are using a **New 3DS** on version **11.15.0 through 11.17.0**, you should follow [troubleshooting instructions for Installing boot9strap (super-skaterhax)](troubleshooting-super-skaterhax) instead.

:::

## SSLoth-Browser

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

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
