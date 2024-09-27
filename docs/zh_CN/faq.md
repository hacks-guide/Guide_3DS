# 常见问题

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Yes**, you can still install custom firmware on your 3DS, even after the closure of eShop.

:::

## Pre-Installation FAQ

:::details I am on the latest system version. Is my console hackable without any external hardware/prerequisites?

**Yes!** New 3DS / New 3DS XL / New 2DS XL can use [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), while 3DS / 3DS XL / 2DS can use [MSET9](installing-boot9strap-\(mset9\)).

:::

:::details What consoles is this guide compatible with?

This guide is compatible with all retail 3DS-family devices (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). If your system version string is displayed as "0.0.0-0", then you may have a developer unit.

:::

:::details How risky is hacking my console?

Bricks are now effectively impossible unless you are purposely trying to brick your console.

:::

:::details Can I run awesome homebrew and emulators with this?

Yes! 本手册将会教你安装一些有用的自制程序，包括一个名为 [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest) 的自制应用程序商店。

:::

:::details Can I use this to play games from other regions?

Yes; Luma3DS will automatically ignore the region check for cartridges and installed titles. Some games may need to make use of Luma's [locale emulation feature](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) in order to work properly on out-of-region consoles.

:::

:::details Will I lose any features if I install CFW?

No. Consoles with custom firmware can download game updates and run physical cartridges as any other 3DS can.

:::

:::details Can I keep my NNID, saves, digital games (etc.)?

Your NNID (if you have one) will not be affected by this guide. Consoles with a region of KOR, CHN, or TWN do not have NNID functionality to begin with and are thus unaffected.

Following this guide alone should not result in data loss (saves, digital games, etc), but SD card corruption is always a possibility. You should make a backup of your SD card contents if you have important data.

:::

:::details Will my 3DS be banned for having CFW?

Bans are no longer possible because Nintendo Network services have been shut down (for everyone).

:::

:::details Can I do this without a computer (e.g. an Android phone)?

Yes! All you need is the ability to put files on a compatible SD card.

:::

:::details What size SD card can I use?<

You will need at least 1.5GB of free SD card space to follow this guide in its entirety. 虽然官方已经说明了 3DS 可以用的 SD 卡最大容量为 32GB，但是实际上只要能格式化成 FAT32 的内存卡都可以用。 但是由于已知的 GBA 图像和自制主题问题，建议不要使用超过 128GB 的内存卡。

:::

:::details I heard about this thing I have to pay for (Gateway, Sky3DS, ntrboot, R4, etc). Is that something I need?

No. While a DS flashcart can be used to mod a 3DS using [ntrboot](ntrboot), there is now a free software method available for most consoles.

3DS-mode flashcarts like Gateway and Sky3DS are not recommended because they are obsolete and may carry brick risk.

:::

:::details What's the difference between custom firmware and homebrew?

Definitionally speaking, custom firmware refers to a modification of the 3DS system software to do things that it normally isn't able to. Homebrew generally refers to software created outside of official sources (i.e. not distributed by eShop or cartridges).

Historically, the 3DS used to have userland homebrew access through older exploits like ninjhax, which people sometimes called just "homebrew". 这种级别的系统权限能够让你运行一些基础的自制程序和模拟器，但不能让你（或较为容易地）修改游戏或导出卡带。 这些漏洞也不是特别稳定，自制程序经常会反复崩溃且必须完全重启整个系统才可恢复。 自制固件能让你获得高等级的系统权限，同时相较那些仅自制程序的漏洞而言更加稳定。

:::

## Post-Installation FAQ

:::details Is it safe to update my 3DS to the latest version with CFW?

If you are using Luma3DS, your custom firmware loader (boot9strap) will _never_ be removed when performing a system update. 不过前一段时间的更新经常使 Luma3DS 在启动系统时崩溃，所以我们建议你在新版本发布后，先等几个小时看看别人的升级反馈，或者看看 Luma3DS 是否会更新，确认更新不会导致主机暂时无法正常使用后再继续。 System updates can be performed the same way as they are on an unmodified 3DS: through System Settings, Safe Mode, or the update prompt when the update is automatically downloaded.

:::

:::details How do I upgrade my SD card?

Copy and paste your SD card contents to a new SD card formatted as FAT32. 如果使用的卡大小为 128GB，则建议将分配单元大小设为 65536。 大于 128GB 的内存卡由于已知的 GBA 图像和自制主题问题，不建议使用。

:::

:::details Can I system transfer with CFW?

Yes, system transfers can be performed through the official System Transfer function to other consoles with CFW (inconsistencies may occur if the target console is unmodified). 非法应用（自制程序等）的 Ticket 不会被一同迁移，但可以使用 [faketik](https://github.com/ihaveamac/faketik/releases/latest) 伪造，使其重现于桌面。 请确保你不使用无线传输迁移，这会删除非法应用。 破解也依然会继续存在于两台主机中。

:::

:::details How do I change the system language of a Japanese 3DS?

The only way to change the system language of a Japanese 3DS to a language other than Japanese is to perform a [region change](region-changing). Note that this is very likely to break the Nintendo eShop on your console, which means you will be unable to update your games whether they are in-region or out-of-region.

:::

:::details How do I update homebrew applications?

It depends on the format of the homebrew application. 一般来说：

- Homebrew in **CIA format** can be updated by installing the new CIA, which will usually overwrite the old one. 如果旧的 CIA 没有被替换掉你也可直接去数据管理删除老版本，就像你删别的东西一样。
- Homebrew in **3DSX format** can be updated by replacing the 3DSX file in `/3ds/` with a fresh copy. 如果这个自制程序包括额外的资源文件，则你需要将其所需文件替换到对应目录。 对此，还请阅读那个自制程序的文档来操作。
- For updating Luma3DS, see [this page](restoring-updating-cfw). 或者你想要更新 Godmode9 的话，参考[这个页面](godmode9-usage#updating-godmode9)。

:::

:::details How do I update my games?

You can continue to download game updates from the Nintendo eShop, even though it has now shut down.

If the game is not from the same region as the console, you will need to [dump the updates](dumping-titles-and-game-cartridges) from a 3DS that has the updates installed. The Nintendo eShop only contains updates for the console's region (for example, a Japanese 3DS will only have updates for Japanese games).

:::

:::details Help! Something bad happened and my 3DS won't boot to HOME Menu...

Please look at the [troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **Uninstalling CFW when your console is in an unbootable state is not recommended, as it is very likely to lead to a brick**.

:::

## menuhax / A9LH / Gateway FAQ

:::details I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?

It is recommended that you upgrade your setup to a modern, boot9strap-based one. 参阅[检查自制固件](checking-for-cfw)来查找适合你主机的更新方法。

:::

:::details My setup works for me. Why should I upgrade it?

The vast majority of modern homebrew (such as Checkpoint and BootNTR Selector) have only been tested on modern, boot9strap-based setups and may not work entirely (or at all) on older setups based on menuhax, A9LH, or Gateway. 而且，你的主机可能会因为使用的破解过老而无法安全更新主机的系统固件。 基于 boot9strap 的破解甚至能让你获得可导出你主机的  bootrom 的前所未有的主机控制权。

:::

:::details Will I lose anything if I upgrade my setup?

Your old setup (including your EmuNAND, if you have one) can usually be directly migrated to boot9strap with no data loss. 如果你的主机里有你非常宝贵的存档，则建议在升级破解前用 [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018) 之类的工具备份一下存档，以防万一。

:::

:::details How do I move saves from an existing Gateway setup to a more modern setup?

\*\*答：\*\*看[这个帖子](https://gbatemp.net/threads/425743/)。

:::
