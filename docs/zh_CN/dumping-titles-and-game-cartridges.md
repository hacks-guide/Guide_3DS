# Dumping Titles and Game Cartridges

::: info

如果你想获得有关 GodMode9 的帮助、帮助编写脚本和获取更新及有关信息（英文），你可以加入 [GodMode9 Discord 服务器](https://discord.gg/BRcbvtFxX4)。（请注意，如果你身处中国大陆，访问 Discord 可能需要通过科学上网）

:::

## Required Reading

除了创建和还原 NAND 备份外，Godmode9 还拥有将安装的应用导出为可安装的 `.cia` 格式、导出游戏卡带为 `.3ds` ROM 格式和直接安装游戏卡带内游戏到系统中的功能。

## Updating GodMode9

::: info

这些操作是给 GodMode9 v2.0.0 或更高的版本编写的。 如果你已经安装了旧版本的 GodMode9，请按照这些步骤来更新它。

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. 将 GodMode9 `.zip` 中的 `GodMode9.firm` 复制到你 SD 卡的 `/luma/payloads/` 文件夹中
4. 将 GodMode9 `.zip` 中的整个 `gm9` 文件夹复制到 SD 卡的根目录下
5. Reinsert your SD card into your console

## Dumping a Game Cartridge

::: info

Insert the game cartridge you intend to dump into your console

- 3DS game cartridges will be dumped to a `.3ds` format
- NDS game cartridges will be dumped to a `.nds` format

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 进入到 `[C:] GAMECART`
3. 根据你的卡带类型进行下列对应操作：
   - **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
   - **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
     - Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
4. 选择 “Copy to 0:/gm9/out”
5. 导出的非可安装的 `.3ds` 或 `.nds` 格式文件将会被保存在 SD 卡上的 `/gm9/out/` 文件夹中

## Installing a Game Cartridge Directly to the System

::: info

这只能用于 3DS 游戏，不可能将 NDS 游戏卡带作为应用安装到系统中。

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 进入到 `[C:] GAMECART`
3. 将光标移动到 `[TitleID].trim.3ds` 上，然后按下 A 键。然后选择 “NCSD image options...”，再然后选择 “Install game image”
4. 按 “A” 键解锁SysNAND (lvl1) 写入权限，并根据屏幕上的提示依次按下按键
5. 一旦进程完成后，你的游戏将会作为安装的程序出现在主菜单中。

## Dumping a 3DS Game Cartridge to .CIA

::: info

这应只在[直接安装游戏卡带到系统中](#installing-a-game-cartridge-directly-to-the-system)不起作用时使用。

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 进入到 `[C:] GAMECART`
3. 将光标移动到 `[TitleID].trim.3ds` 上，然后按下 A 键。然后选择 “NCSD image options...”，再然后选择 “Build CIA from file”
4. 导出的可安装的 `.cia` 格式文件将会被保存在 SD 卡上的 `/gm9/out/` 文件夹中

## Dumping an Installed Title

::: info

这可以使你导出来自系统或用户安装的电子版应用，例如在 eShop 中下载的游戏。

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 按下 “Home” 键来打开功能菜单
3. 选择 “Title manager”
4. 选择一个对应你想导出的程序类型的选项
   - **User Installed Title**: `[A:] SD CARD`
   - **System Title / DSiWare**: `[1:] NAND / TWL`
5. 选择你想要导出的应用的标题
6. 选择 “Manage Title...”
7. 选择 “Build CIA (standard)”
8. 导出的可安装的 `.cia` 格式文件将会被保存在 SD 卡上的 `/gm9/out/` 文件夹中

## Backup GBA VC Saves

::: info

游戏存档将会输出到 SD 卡上的 `/gm9/out/` 目录，并命名为 `<TitleID>.gbavc.sav`。

:::

::: info

要确定 `<TitleID>.gbavc.sav` 文件的 Title ID 所对应的程序，你可以在 Godmode9 主菜单内按下 Home 键然后选择 `Title manager` -> `[A:] SD CARD` 来获取系统上已安装的游戏的列表及它们对应的 Title ID。

:::

1. 依次对每个想备份存档的 GBA VC 游戏进行如下操作：
   - Launch the GBA VC game
   - Exit the GBA VC game
   - 将主机关机
   - Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - 按 “A” 键继续
   - Press (Start) to reboot your console

## Restore GBA VC Saves

::: info

要确定 `<TitleID>.gbavc.sav` 文件的 Title ID 所对应的程序，你可以在 Godmode9 主菜单内按下 Home 键然后选择 `Title manager` -> `[A:] SD CARD` 来获取系统上已安装的游戏的列表及它们对应的 Title ID。

:::

1. 对每个 GBA VC 依次执行下列步骤来恢复它们的存档：
   - Launch the GBA VC game
   - Exit the GBA VC game
   - 将主机关机
   - Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
   - 进入到 `[0:] SDCARD` -> `gm9` -> `out`
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

## Encrypting / Decrypting a .CIA file

::: info

为了避免文件混乱，请将你要加密或解密的 `.cia` 文件复制到SD卡上的 `/cias/` 目录中

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. 进入到 `[0:] SDCARD` -> `cias`
3. 按 “A” 键选择 `.cia` 文件，然后选择 “CIA image options...”
4. 根据你的目的选择相应的操作：
   - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
   - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. 加密或解密后的 `.cia` 文件将保存于相应位置
