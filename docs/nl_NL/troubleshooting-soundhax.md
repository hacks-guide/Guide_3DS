# Troubleshooting (Soundhax)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (Soundhax)" page, which is used on system versions between 1.0.0 and 11.3.0. Als je je probleem niet kunt oplossen met het advies op deze pagina, neem dan deel aan [Nintendo Homebrew op Discord](https://discord.gg/MWxPgEp) en beschrijf je probleem, inclusief wat je al hebt geprobeerd.

## Issues with Soundhax

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

## Issues with SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
