# 卸载自制固件

## Required Reading

This will completely remove CFW from your console, including boot9strap and Luma3DS, for the purpose of restoring the console to stock.

任何未签名（盗版）游戏都将被标记为不可用，并将在此过程中被删除。 你可以使用一个[存档管理器](https://github.com/FlagBrew/Checkpoint/releases/latest)来备份你想要保留的游戏存档。

::: danger

如果你想卸载自制固件的目的是：

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. 更好的点子是在[ Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)上使用英文寻求帮助。（请注意，如果你身处中国大陆，则你可能需要通过科学上网访问 Discord），你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。

:::

::: danger

你是否做过以下的任何一件事：

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. 如果你确实做了，但是你仍然想要卸载自制固件，请[还原一份干净的 NAND 备份](godmode9-usage#restoring-a-nand-backup)，然后再继续。

:::

::: warning

These instructions will only work on consoles with a Luma3DS version of 8.0 or higher. 如果你的主机 Luma 版本比要求的旧，则你必须先升级版本再做这些操作。 请参考[这个页面](checking-for-cfw)来找到适合你主机的升级操作。

:::

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Instructions

### Section I - Prep Work

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. Copy everything from the Luma3DS `.zip` to the root of your SD card
4. 将 GodMode9 `.zip` 中的 `GodMode9.firm` 复制到你 SD 卡的 `/luma/payloads/` 文件夹中
5. 将 GodMode9 `.zip` 中的整个 `gm9` 文件夹复制到 SD 卡的根目录下
6. 复制 `DSiWareUninstaller.3dsx`  到你 SD 卡的 `/3ds/` 文件夹
7. 复制 `safety_test.gm9` 到 SD 卡的`/gm9/scripts/`目录下
8. Reinsert your SD card into your console

### Section II - DS Mode Tests

本步骤的目的是检查内建的 DS 模式应用是否能够在卸载自制固件后继续正常运作。 如果你跳过此章节，DS 模式或它的功能可能会无法正常使用，除非你重新安装自制固件。

#### DS Connection Settings Test

1. Power on your console
2. Launch System Settings on your console
3. 移动到 `网络设置（Internet Settings）` -> `任天堂 DS 连接（Nintendo DS Connections）`，然后选择 “OK”
4. 你的主机应该会正常启动到任天堂 DS 连接设置菜单
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. 将主机关机

#### DS Download Play Test

1. Power on your console
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. 选择 “Nintendo DS”
4. If your console loads into a "Download software via DS Download Play" menu, the test was successful
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. 将主机关机

::: warning

如果以上其一测试失败了，则 DS 模式、DS 下载通信和/或 DS 连接设定可能会在卸载自制固件后无法正常使用！ You should [fix DS mode](troubleshooting-post-install) before continuing.

:::

### Section III - Safety Test

本步骤的目的是为了检查主机是否能在卸载自制固件后正常开机，以及核心系统组件（如系统设置和键盘）是否能够正常运作。 **If you skip this section, you may BRICK your console!**

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 如果工具提示是否需要创建重要文件备份，请按下 “A” 键确认。完成后再次按下 “A” 键来继续。
3. 如果出现修复 RTC 日期与时间的提示，按 “A” 键执行修复，然后设置好日期和时间，并按 “A” 继续
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. 按下 “Home” 键来打开功能菜单
5. 选择 “Scripts...”
6. 选择 “safety_test”
7. 阅读屏幕上的文本，然后按下 “A” 键继续
8. 主机应该会自动进入到正常的 3DS 主菜单（有没有自制主题无关）。 如果是这样，那么继续下面的操作
   - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. Launch System Settings on your console
   - If the console crashes at this point, the test has failed
10. 选择 “其他设置（Other Settings）”
11. 选择 “档案（Profile）”
12. 选择 “用户名（User Name）”
13. 如果你能够输入新的用户名，则测试成功
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. 将主机关机

::: danger

如果没有进入到正常的 3DS 主菜单或系统设置/键盘不可用，则**请不要再继续做下面的步骤了！** 请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp) 并说英文来请求支持。

:::

### Section IV - NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 按下 “Home” 键来打开功能菜单
3. 选择 “Scripts...”
4. 选择 “GM9Megascript”
5. 选择 “Backup Options”
6. 选择 “SysNAND Backup”
7. 按下 “A” 键确认
   - This process will take some time
   - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. 按下 “B” 键返回到主菜单
9. 选择 “退出（Exit）”
10. 按下 “Home” 键来打开功能菜单
11. Select "Poweroff system" to power off your console

### Section V - Removing illegitimate content

::: warning

本步骤将会删除非法内容，例如自制程序、导出的程序（安装 CIA 格式的应用得来的）。 如果你有还想要的存档，请在继续前使用一个存档工具将它导出来后再继续！

:::

1. Power on your console
2. Launch System Settings on your console
3. 进入到 “数据管理（Data Management）” > “Nintendo 3DS” > “软件（Software）”
4. 在此列表中，删除你在使用自制系统时安装的任何非来自任天堂的自制程序。
   - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. 进入到 `資料管理` -> `DSiWare`
6. 在此列表中，删除你在使用自制系统时安装的任何非来自任天堂的自制程序。
   - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
   - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. 退出系统设置
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. 等到你看到两个按钮
10. 同时按下 “L” + “↓” + “Select” 键来打开 Rosalina 菜单
11. 选择 “Miscellaneous options”
12. Select "Switch the hb. title to the current app."
13. 按 “B” 键继续
14. 按 “B” 键返回 Rosalina 主菜单
15. 按 “B” 键退出 Rosalina 菜单
16. 按下 “Home” 键，然后关闭“下载通信(Download Play)”
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Your console should load the Homebrew Launcher
19. 从自制程序列表中运行 DSiWare Uninstaller
20. 阅读提示并允许程序卸载
21. Once the process has succeeded, exit the Homebrew Launcher and power off your console

### Section VI - System Format

本步骤将会把所有的非法 ticket 从主机中移除，使 eShop 能够正常工作。 这会移除 3DS 中的所有内容，并登出 NNID。 这会重新生成你的主机解密密钥，意味着你先前的所有数据将会全部不可用，即使你把它们从 SD 卡中备份出来也是如此。

1. Power on your console
2. Launch System Settings on your console
3. 进入“其他设置（Other Settings）” -> 右箭头（直到最后一页）-> “初始化系统（Format System Memory）”
4. 按照提示步骤重置你的 3DS

### Section VII - Running Uninstall Script

::: warning

这是你核验所有安全检查步骤是否已正确遵循的最后一次机会！ 请确保你已经做完了本页面先前的所有步骤，**特别是** `第三步`。

:::

::: danger

如果你想卸载自制固件的目的是：

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. 更好的点子是在[ Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)上使用英文寻求帮助。（请注意，如果你身处中国大陆，则你可能需要通过科学上网访问 Discord），你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. 按下 “Home” 键来打开功能菜单
3. 选择 “Scripts...”
4. 选择 “GM9Megascript”
5. 选择 “Hax Options”
6. 选择 “Un-install Hax”
7. 出现提示时，按 “A” 键继续
8. 按 “A” 键解锁SysNAND (lvl3) 写入权限，并根据屏幕上的提示依次按下按键
9. 按 “A” 键继续
10. 按下 “B” 键返回到主菜单
11. 选择 “Exit”
12. 如果提示重新锁定写入权限，按下 “A” 键来确认
13. Press (Start) to reboot your console

___

::: tip

All custom firmware has been removed from your console.

:::

::: info

你可以将**除了** “Nintendo 3DS” 和 “DCIM” 还有 “private” 以外的文件、文件夹从 SD 卡根目录删除。

:::
