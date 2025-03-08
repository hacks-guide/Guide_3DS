# GodMode9 使用教程

::: info

有关导出卡带或 SD 卡中的内容的教程，[请见这里](dumping-titles-and-game-cartridges)。

:::

::: info

如果你想获得有关 GodMode9 的帮助、帮助编写脚本和获取更新及有关信息（英文），你可以加入 [GodMode9 Discord 服务器](https://discord.gg/BRcbvtFxX4)。（请注意，如果你身处中国大陆，访问 Discord 可能需要通过科学上网）

:::

## Required Reading

GodMode9 是利用 Nintendo 3DS 主权限制作的文件管理器。你可以用它读写 SD 卡、SysNAND 及 EmuNAND 中的 FAT 分区等等的东西。 你还可以用它干一些其他功能比如复制、删除、重命名文件、创建文件夹。

请注意，如果你的 SD 卡中的 `/luma/payloads/` 目录中有 `GodMode9.firm` 以外的 `.firm` 文件，那么你在按住 “Start” 键开机的时候，你的主机将不会直接进入到 Godmode9，而会进入到一个叫做 “chainloader menu” 的菜单，这个时候你需要通过十字键来移动红色光标至 “Godmode9” 来启动教程需要的文件。

GodMode9 几乎可以修改你主机上的任何东西。 虽然更改系统文件时需要你解锁权限系统，不故意获取权限的话你是没办法造孽的。但为了以防万一，你还是应该严格按照指示操作，并创建 NAND 备份。

## Updating GodMode9

::: info

下面的某些操作只能在最新版本的 GodMode9 下执行，因此在开始使用前请按照本节更新你的 GodMode9 软件。 请覆盖任何已经存在的文件。

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. 将 GodMode9 `.zip` 中的 `GodMode9.firm` 复制到你 SD 卡的 `/luma/payloads/` 文件夹中
4. 将 GodMode9 `.zip` 中的整个 `gm9` 文件夹复制到 SD 卡的根目录下
5. Reinsert your SD card into your console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
6. 按下 “Home” 键来打开功能菜单
7. 选择 “Scripts...”
8. 选择 “GM9Megascript”
9. 选择 “Restore Options”
10. 选择 “SysNAND Restore (safe)”
11. 选择你的 NAND 备份
12. 按 “A” 键解锁SysNAND (lvl3) 写入权限，并根据屏幕上的提示依次按下按键
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. 按 “A” 键继续
14. 按下 “B” 键返回到主菜单
15. 选择 “Exit”
16. 如果提示重新锁定写入权限，按下 “A” 键来确认

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

请注意，你无法注入比 “健康与安全提示(Health & Safety)” 软件大的文件（包括游戏及其他大型应用程序）

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 进入到 `[0:] SDCARD` -> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. 按 “A” 键解锁SysNAND (lvl1) 写入权限，并根据屏幕上的提示依次按下按键
10. 按 “A” 键继续
11. 如果提示重新锁定写入权限，按下 “A” 键来确认

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

这部分教程只适用于通过 GodMode9 进行的 “健康与安全提示(Health & Safety)”应用注入（也就是说这部分教程不适用于 Decrypt9 或 Hourglass9）。

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 按下 “Home” 键来打开功能菜单
3. 选择 “More...”
4. 选择 “Restore H&S”
5. 按 “A” 键解锁SysNAND (lvl1) 写入权限，并根据屏幕上的提示依次按下按键
6. 如果提示重新锁定写入权限，按下 “A” 键来确认

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**请注意，该操作会清除你SD卡上的所有文件！**

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
    - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Your SD card has successfully been formatted for use with the console.

:::

## Removing an NNID without formatting your console

::: info

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 按下 “Home” 键来打开功能菜单
3. 选择 “Scripts...”
4. 选择 “GM9Megascript”
5. 选择 “Scripts from Plailect's Guide”
6. 选择 “Remove NNID”
7. 按 “A” 键继续
8. 按 “A” 键解锁SysNAND (lvl1) 写入权限，并根据屏幕上的提示依次按下按键
9. 按 “A” 键继续
10. 按下 “B” 键返回到主菜单
11. 选择 “Exit”
12. 如果提示重新锁定写入权限，按下 “A” 键来确认
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
