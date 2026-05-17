# Move EmuNAND

## Required Reading

本附加章节将介绍如何将你的 EmuNAND 的数据迁移到新的 SysNAND 自制系统中，然后删除 EmuNAND 分区。 请注意，EmuNAND 和 RedNAND 是[同一概念](http://3dbrew.org/wiki/NAND_Redirection)的两种略微不同的实现。

请注意，如果你的 SD 卡中的 `/luma/payloads/` 目录中有 `GodMode9.firm` 以外的 `.firm` 文件，那么你在按住 “Start” 键开机的时候，你的主机将不会直接进入到 Godmode9，而会进入到一个叫做 “chainloader menu” 的菜单，这个时候你需要通过十字键来移动红色光标至 “Godmode9” 来启动教程需要的文件。

::: danger

在开始之前，你必须确认你已装好了 Luma3DS 和 boot9strap。

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. 将 GodMode9 `.zip` 中的 `GodMode9.firm` 复制到你 SD 卡的 `/luma/payloads/` 文件夹中
4. 将 GodMode9 `.zip` 中的整个 `gm9` 文件夹复制到 SD 卡的根目录下
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

如果你没有任何 DSiWare 游戏或者不关心其存档，那么你可以跳过这个部分。

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 如果工具提示是否需要创建重要文件备份，请按下 “A” 键确认。完成后再次按下 “A” 键来继续。
3. 如果出现修复 RTC 日期与时间的提示，按 “A” 键执行修复，然后设置好日期和时间，并按 “A” 继续
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. 进入到 `[2:] SYSNAND TWLN` -> `title`
5. 将光标移动至 `00030004` 目录，然后同时按 “R” + “A” 键 ，然后选择 “Copy to 0:/gm9/out”
   - This process may take some time if you have many DSiWare games
6. 按两次 “B” 键返回到主菜单

### Section III - Backup GBA VC Saves

::: info

如果你没有任何 GBA VC 游戏或者不关心其存档，那么你可以跳过这个部分。

:::

::: info

请注意，其他平台的 VC（如GBC, NES, 等）游戏不需要做这些步骤。

:::

::: info

游戏存档将会输出到 SD 卡上的 `/gm9/out/` 目录，并命名为 `<TitleID>.gbavc.sav`。

:::

::: info

要确定 `<TitleID>.gbavc.sav` 文件的 Title ID 所对应的程序，你可以在 Godmode9 主菜单内按下 Home 键然后选择 `Title manager` -> `[A:] SD CARD` 来获取系统上已安装的游戏的列表及它们对应的 Title ID。

:::

1. 依次对每个想备份存档的 GBA VC 游戏进行如下操作：
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - 按 “A” 键继续
   - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 进入到 `[E:] EMUNAND VIRTUAL`
3. 将光标移动到 `nand.bin` 上，然后按下A键。然后选择“NAND image options...”，再然后选择 “Restore SysNAND (safe)”
4. 按 “A” 键解锁 SysNAND 写入权限，并依次输入屏幕上给出的的按键
   - This will not overwrite your boot9strap installation
5. 依次输入屏幕上的按键来解锁 SysNAND (lv1) 的写入权限
   - This process will take some time
6. 完成后，按下 “A” 键以继续
7. 如果弹出重新锁定写入权限的提示，按下 “B” 键来拒绝。
8. 按下 “B” 键返回到主菜单

### Section V - Restore DSiWare Saves

::: info

如果你之前没备份 DSiWare 的游戏存档，那么就跳过此部分。

:::

1. 进入到 `[0:] SDCARD` -> `gm9` -> `out`
2. 将光标移动至 `00030004` 文件夹，并按下 “Y” 键复制
3. 按两次 “B” 键返回到主菜单
4. 进入到 `[2:] SYSNAND TWLN` -> `title`
5. 按下 “Y” 键来粘贴 `00030004` 文件夹到此处
6. 选择 “Copy path(s)”
7. 按 “A” 键解锁SysNAND (lvl1) 写入权限，并根据屏幕上的提示依次按下按键
8. 选择 “Overwrite file(s)”
   - This process may take some time if you have many DSiWare games
9. 如果弹出重新锁定写入权限的提示，按下 “B” 键来拒绝。
10. 按两次 “B” 键返回到主菜单

### Section VI - Restore GBA VC Saves

::: info

如果你之前没备份 GBA VC 的游戏存档，那么就跳过此部分。

:::

::: info

要确定 `<TitleID>.gbavc.sav` 文件的 Title ID 所对应的程序，你可以在 Godmode9 主菜单内按下 Home 键然后选择 `Title manager` -> `[A:] SD CARD` 来获取系统上已安装的游戏的列表及它们对应的 Title ID。

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. 对每个 GBA VC 依次执行下列步骤来恢复它们的存档：
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - 进入到 `[0:] SDCARD` -> `gm9`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - 按下 “B” 键返回到主菜单
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - 按 “A” 键继续
   - Press (Start) to reboot your console
   - Launch the GBA VC game
   - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **请备份你 SD 卡上的所有文件到电脑上；接下来 SD 卡上的所有文件将被删除**

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. 同时按 “R” 键和“B”键，弹出你的SD卡
2. 将你的 SD 卡插入到电脑
3. 将之前备份的所有文件复制到你的 SD 卡
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. 按 “A” 键重新装载你的 SD 卡
6. 按下 “Start” 键来重启

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
