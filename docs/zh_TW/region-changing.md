# 區碼變更

## Required Reading

This is an add-on section for region changing your console. 這是透過安裝所選區域的 11.15.0 CTRTransfer 鏡像檔達成的。 After installing the image, you can update your console normally to the latest firmware (11.17.0).

**請注意，區碼變更通常是不需要的，因為 Luma3DS 本身就支援跨區遊玩及程式[語碼模擬](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features)的功能。** 另外，您也可透過[TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases)來運行非支援語系的 NDS 遊戲。 You should only perform a region change if you wish to have your system UI in a language that is not available on your console's current region.

::: info

This page assumes that you have already installed Luma3DS and boot9strap. If you followed this website to the end (Finalizing Setup), you have Luma3DS and boot9strap.

:::

::: warning

As a part of this process, your system settings will be reset to its defaults. This includes things such as your username, country, and language. **Installed games and their save data will not be affected.**

:::

::: danger

If you change the region of your console:

- You will not be able to use your NNID (if you have one). NNIDs are locked to the region that they were created in.
- You may not be able to access the eShop, even if you [delete your eShop account](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) beforehand. This is because certain titles tend to remain linked to the 3DS, even after account deletion (especially on New 3DS).
    - This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. Updates may provide extra content or fix bugs.
    - This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
    - Pokémon Bank also requires working eShop access.
    - That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
- **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.

:::

## What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (direct download)
- The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(the `.3dsx` file)_
- The latest release of [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (right click, save link as)
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)

    ::: warning

    You need to use a torrent client to download the CTRTransfer images, such as [qBitTorrent](https://www.qbittorrent.org/download) or [Deluge](https://deluge-torrent.org/download/).

    :::

<!--@include: ./_include/ctrtransfer-images.md -->

## Instructions

### Section I - Prep Work

<!--@include: ./_include/ctrtransfer-prep.md -->

### Section II - NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9

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
