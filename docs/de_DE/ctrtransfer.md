# CTRTransfer

## Required Reading

This is an add-on section for installing an 11.15.0 CTRTransfer image to your console.

::: info

This page assumes that you have already installed Luma3DS and boot9strap. If you followed this website to the end (Finalizing Setup), you have Luma3DS and boot9strap.

:::

::: warning

As a part of this process, your system settings will be reset to its defaults. This includes things such as your username, country, and language. **Installed games and their save data will not be affected.**

:::

## What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (direct download)
- The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(the `.3dsx` file)_
- The latest release of [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (right click, save link as)
- A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - If you already have a torrent client, you do not need to download a new one
- The 11.15.0 CTRTransfer image for your console and region:

<!--@include: ./_include/ctrtransfer-images.md -->

## Instructions

### Section I - Prep Work

<!--@include: ./_include/ctrtransfer-prep.md -->

### Section II - NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. Dies wird GodMode9 starten

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

Continue to [Finalizing Setup](finalizing-setup)

:::
