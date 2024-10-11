# Troubleshooting (Soundhax)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (Soundhax)" page, which is used on system versions between 1.0.0 and 11.3.0. 如果你的问题无法通过此页面提供的方法解决，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)，使用英文描述你的问题（包括你尝试过的操作）来寻求帮助。你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。

## Issues with Soundhax

:::details Red/purple/pink and white screen after running Soundhax

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

If your console is not on those firmwares, it likely indicates that you already have custom firmware. 你应该[检查一下](checking-for-cfw)。

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

你放的 `otherapp.bin` 文件有问题（丢失、放错位置或者损坏）。 下载最新版本的 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) 并将其放在你 SD 卡的根目录中。

:::

:::details "Could not play"

You have the wrong Soundhax file for your console and region, or your console is incompatible with Soundhax. In the latter case, your course of action will determine on what version your 3DS is currently on. 如需帮助，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)。

:::

:::details Failed to mount the SD card!

如果还是不行，尝试换一张 SD 卡。

:::

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
