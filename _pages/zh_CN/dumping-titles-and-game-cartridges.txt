---
title: "导出应用和游戏卡带"
---

{% include toc title="目录内容" %}

如果你想获得有关 GodMode9 的帮助、帮助编写脚本和获取更新及有关信息（英文），你可以加入 [GodMode9 Discord 服务器](https://discord.gg/BRcbvtFxX4)。（请注意，如果你身处中国大陆，访问 Discord 可能需要通过科学上网）
{: .notice--primary}

### 重要事项

除了创建和还原 NAND 备份外，Godmode9 还拥有将安装的应用导出为可安装的 `.cia` 格式、导出游戏卡带为 `.3ds` ROM 格式和直接安装游戏卡带内游戏到系统中的功能。

## 更新GodMode9

这些操作是给 GodMode9 v2.0.0 或更高的版本编写的。 如果你已经安装了旧版本的 GodMode9，请按照这些步骤来更新它。
{: .notice--info}

### 你需要准备点啥？

* 最新版本的 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest)（下载 GodMode9 `.zip` 文件）

### 操作步骤

1. 将主机关机
1. 将你的 SD 卡插入到电脑
1. 将 GodMode9 `.zip` 中的 `GodMode9.firm` 复制到你 SD 卡的 `/luma/payloads/` 文件夹中
1. 将 GodMode9 `.zip` 中的整个 `gm9` 文件夹复制到 SD 卡的根目录下
1. Reinsert your SD card into your console

## 导出游戏卡带文件

{% capture notice %}
Insert the game cartridge you intend to dump into your console
+ 3DS 游戏卡带导出后将导出为 `.3ds` 格式保存
+ NDS 游戏卡带导出后将导出为 `.nds` 格式保存
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. 进入到 `[C:] GAMECART`
1. 根据你的卡带类型进行下列对应操作：
    + **3DS 游戏卡带：** 对 `[TitleID].trim.3ds` 按下 A 键来选择它
    + **NDS 游戏卡带：** 对 `[TitleID].nds` 按下 A 键来选择它
        + Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
1. 选择 “Copy to 0:/gm9/out”
1. 导出的非可安装的 `.3ds` 或 `.nds` 格式文件将会被保存在 SD 卡上的 `/gm9/out/` 文件夹中

## 直接安装游戏卡带中的游戏到系统中

这只能用于 3DS 游戏，不可能将 NDS 游戏卡带作为应用安装到系统中。
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. 进入到 `[C:] GAMECART`
1. 将光标移动到 `[TitleID].trim.3ds` 上，然后按下 A 键。然后选择 “NCSD image options...”，再然后选择 “Install game image”
1. 按 “A” 键解锁SysNAND (lvl1) 写入权限，并根据屏幕上的提示依次按下按键
1. 一旦进程完成后，你的游戏将会作为安装的程序出现在主菜单中。

## 将 3DS 游戏卡带导出为 .CIA 文件

这应只在[直接安装游戏卡带到系统中](#installing-a-game-cartridge-directly-to-the-system)不起作用时使用。
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. 进入到 `[C:] GAMECART`
1. 将光标移动到 `[TitleID].trim.3ds` 上，然后按下 A 键。然后选择 “NCSD image options...”，再然后选择 “Build CIA from file”
1. 导出的可安装的 `.cia` 格式文件将会被保存在 SD 卡上的 `/gm9/out/` 文件夹中

## 导出已安装的应用

这可以使你导出来自系统或用户安装的电子版应用，例如在 eShop 中下载的游戏。
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. 按下 “Home” 键来打开功能菜单
1. 选择 “Title manager”
1. 选择一个对应你想导出的程序类型的选项
    + **你安装的程序**：`[A:] SD CARD`
    + **系统程序 / DSiWare**：`[1:] NAND / TWL`
1. 选择你想要导出的应用的标题
1. 选择 “Manage Title...”
1. 选择 “Build CIA (standard)”
1. 导出的可安装的 `.cia` 格式文件将会被保存在 SD 卡上的 `/gm9/out/` 文件夹中

## 备份 GBA VC 的存档

游戏存档将会输出到 SD 卡上的 `/gm9/out/` 目录，并命名为 `<TitleID>.gbavc.sav`。
{: .notice--info}

要确定 `<TitleID>.gbavc.sav` 文件的 Title ID 所对应的程序，你可以在 Godmode9 主菜单内按下 Home 键然后选择 `Title manager` -> `[A:] SD CARD` 来获取系统上已安装的游戏的列表及它们对应的 Title ID。
{: .notice--info}

1. 依次对每个想备份存档的 GBA VC 游戏进行如下操作：
    + 启动 GBA VC 游戏
    + 退出游戏并关机
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    + 进入到 `[S:] SYSNAND VIRTUAL`
    + 在 `agbsave.bin` 上按 “A” 键选中
    + 选择 “AGBSAVE options...”
    + 选择 “Dump GBA VC save”
    + 按 “A” 键继续
    + Press (Start) to reboot your console

## 恢复 GBA VC 存档

要确定 `<TitleID>.gbavc.sav` 文件的 Title ID 所对应的程序，你可以在 Godmode9 主菜单内按下 Home 键然后选择 `Title manager` -> `[A:] SD CARD` 来获取系统上已安装的游戏的列表及它们对应的 Title ID。
{: .notice--info}

1. 对每个 GBA VC 依次执行下列步骤来恢复它们的存档：
    + 启动 GBA VC 游戏
    + 退出游戏并关机
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
    + Navigate to `[0:] SDCARD` -> `gm9` -> `out`
    + 选择你想要恢复的 `<TitleID>.gbavc.sav` 并按 “Y” 键复制
    + 按下 “B” 键返回到主菜单
    + 进入到 `[S:] SYSNAND VIRTUAL`
    + 在 `agbsave.bin` 上按 “A” 键选中
    + 选择 “AGBSAVE options...”
    + 选择 “Inject GBA VC save”
    + 按 “A” 键继续
    + Press (Start) to reboot your console
    + 启动 GBA VC 游戏
    + 退出游戏并关机

## 加密 / 解密 .CIA 文件

为了避免文件混乱，请将你要加密或解密的 `.cia` 文件复制到SD卡上的 `/cias/` 目录中
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. 进入到 `[0:] SDCARD` -> `cias`
1. 按 “A” 键选择 `.cia` 文件，然后选择 “CIA image options...”
1. 根据你的目的选择相应的操作：
    + **Encrypt to 0:/gm9out：** 在SD卡的 `/gm9/out/` 文件夹中创建一份选定 `.cia` 文件的加密拷贝
    + **Decrypt to 0:/gm9out：** 在SD卡的`/gm9/out/` 文件夹中创建一份选定 `.cia` 文件的解密拷贝
    + **Encrypt inplace：** 用选定 `.cia`文件的加密拷贝替换当前对应文件
    + ** Decrypt inplace：** 用选定 `.cia` 文件的解密拷贝替换当前对应文件
1. 加密或解密后的 `.cia` 文件将保存于相应位置
