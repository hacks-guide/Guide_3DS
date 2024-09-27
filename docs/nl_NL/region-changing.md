# Regio wijzigen

## Required Reading

This is an add-on section for region changing your console. Dit wordt gedaan door het installeren van de 11.15.0 CTRTransfer image voor de regio waarnaar je wilt overschakelen. After installing the image, you can update your console normally to the latest firmware (11.17.0).

Merk wel op dat je regio veranderen bijna altijd compleet onnodig zal zijn omdat Luma3DS ook spellen uit een andere regio kan spelen, en ook individuele [Lokale emulatie](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features). Daarnaast worden ook NDS spellen uit andere regio's ondersteund door [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). You should only perform a region change if you wish to have your system UI is in a language that is not available on your console's current region.

::: info

This page assumes that you have already installed Luma3DS and boot9strap. Als je deze website naar het einde hebt gevolgd (Installatie voltooien), dan heb je nu Luma3DS en boot9strap.

:::

::: warning

As a part of this process, your system settings will be reset to its defaults. This includes things such as your username, country, and language. **Installed games and their save data will not be affected.**

:::

::: danger

If you change the region of your console:

- You will not be able to use your NNID (if you have one). NNID's zijn vergrendeld aan de regio waarin ze gemaakt zijn.
- You may not be able to access the eShop, even if you [delete your eShop account](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) beforehand. Dit komt doordat bepaalde titels vaak gekoppeld blijven aan de 3DS, zelfs na het verwijderen van de account (met name op New 3DS).
  - This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. Updates may provide extra content or fix bugs.
  - This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
  - Pokémon Bank also requires working eShop access.
  - That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
- **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.

:::

## What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
- The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(the `.3dsx` file)_
- A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - If you already have a torrent client, you do not need to download a new one
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)

<!--@include: ./_include/ctrtransfer-images.md -->

## Instructions

### Section I - Prep Work

<!--@include: ./_include/ctrtransfer-prep.md -->

### Section II - NAND Backup

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten

<!--@include: ./_include/nand-backup.md -->

### Section III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Section IV - Launching FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Section V - Reinstalling Tickets

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Section VI - Fixing locale-related issues

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

Your 3DS has successfully been region changed!

:::
