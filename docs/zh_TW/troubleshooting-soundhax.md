# Troubleshooting (Soundhax)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (Soundhax)" page, which is used on system versions between 1.0.0 and 11.3.0. 如果您無法透過本頁解決你的問題，請加入 [Discord 上的 Nintendo Homebrew 伺服器](https://discord.gg/MWxPgEp)，並以英文敘述你的問題，以及您已經嘗試過的步驟。

## Issues with Soundhax

:::details Red/purple/pink and white screen after running Soundhax

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

If your console is not on those firmwares, it likely indicates that you already have custom firmware. 請先[檢查是否已安裝自製韌體](checking-for-cfw) 。

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

您所使用的 `otherapp.bin` 檔案有問題(如遺失、放錯位置或者損壞)。 下載最新版本的 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) 並將其放在你 SD 卡的根目錄中。

:::

:::details "Could not play"

You have the wrong Soundhax file for your console and region, or your console is incompatible with Soundhax. In the latter case, your course of action will determine on what version your 3DS is currently on. 請加入 [Discord 上的 Nintendo Homebrew](https://discord.gg/MWxPgEp) 頻道尋求幫助。

:::

:::details Failed to mount the SD card!

若仍無法正常使用，請試著使用另一張 SD 卡。

:::

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
