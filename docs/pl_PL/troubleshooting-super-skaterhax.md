# Troubleshooting (super-skaterhax)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (super-skaterhax)" page. If you are unable to solve your issue with the advice on this page, please join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and describe your issue, including what you have already tried.

::: warning

These instructions are only valid for the "Installing boot9strap (super-skaterhax)" page. If you are using **anything other than** a **New 3DS** on version **11.15.0 through 11.17.0**, you should follow [troubleshooting instructions for Installing boot9strap (SSLoth-Browser)](troubleshooting-ssloth-browser) instead.

:::

## Issues with super-skaterhax

:::details "An error has occurred. Please save your data in any software currently in use, then restart the system."

If no colors flash after pressing "GO GO!":

- Ensure that you have set your system date and [region](/images/screenshots/skaterhax/skater-lang.png) correctly
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

The file `arm11code.bin` is missing or misplaced. Make sure to copy the files of the [latest version of super-skaterhax](https://skater.nintendohomebrew.com/) for your region and version to the root of your SD card (not inside of a folder).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details An exception occured or "DLL_HEAP_INFORMATION" when pressing GO! GO!

This likely indicates that you already have custom firmware. You should [check for CFW](checking-for-cfw).

:::

## Issues with SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (super-skaterhax)](installing-boot9strap-\(super-skaterhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
