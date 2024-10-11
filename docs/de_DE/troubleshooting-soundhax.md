# Troubleshooting (Soundhax)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (Soundhax)" page, which is used on system versions between 1.0.0 and 11.3.0. Wenn diese Seite das Problem nicht lösen kann, tritt bitte [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) und beschreibe dein Problem, zusätzlich mit dem, was du schon versucht hast.

## Issues with Soundhax

:::details Red/purple/pink and white screen after running Soundhax

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

If your console is not on those firmwares, it likely indicates that you already have custom firmware. You should [check for CFW](checking-for-cfw).

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

There is an issue with your `otherapp.bin` file (it is missing, misplaced, or corrupted). Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) and place it on the root of your SD card.

:::

:::details "Could not play"

You have the wrong Soundhax file for your console and region, or your console is incompatible with Soundhax. In the latter case, your course of action will determine on what version your 3DS is currently on. Trete [Nintendo Homebrew auf Discord](https://discord.gg/MWxPgEp) für mehr Hilfe bei.

:::

:::details Failed to mount the SD card!

Wenn dies nicht gelingt, benutze eine andere SD-Karte.

:::

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
