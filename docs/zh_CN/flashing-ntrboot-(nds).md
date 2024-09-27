# Flashing ntrboot (NDS)

## Required Reading

请在开始前仔细阅读 [ntrboot](ntrboot) 章节的内容

本方法将会暂时用到一台与你的烧录卡兼容的 Nintendo DS 或 Nintendo DS Lite 主机。 烧录卡将用于在你的 NDS 上运行 ntrboot 写入程序的 `.nds` 文件。

::: danger

请注意，极少见的情況下某些伪劣烧录卡有可能会在破解过程中坏掉且无法恢复。 这不太可能， 但无论如何我们只支持写在兼容表格中的烧录卡。 To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source NDS / NDSL**: the Nintendo DS or Nintendo DS Lite which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. 关闭**源 NDS / NDSL**
2. 将烧录卡中的 SD 卡插入电脑
3. 在烧录卡的 SD 卡根目录创建一个名为 `ntrboot` 的文件夹
4. 解压 bootstrap ntr `.zip` 然后复制 `boot9strap_ntr.firm` 到烧录卡的 SD 卡根目录的 `/ntrboot/` 文件夹
5. 复制 `ntrboot_flasher_dsi.nds` 到烧录卡的 SD 卡上
6. 将 SD 卡插回烧录卡
7. 把兼容ntrboot的 DS / DSi 烧录卡插入 **源 NDS / NDSL**

### Section II - Flashing ntrboot

1. 在你的 **源 NDS / NDSL** 上使用烧录卡，运行  `ntrboot_flasher_nds.nds`
2. 按 “A” 键继续
3. 使用“↑” “↓” 键选中你的烧录卡
4. 按 “A” 键继续
5. 选择 “Dump flash” 来备份你烧录卡的原始固件
6. 依次按下屏幕上给出的按键
7. 按 “A” 键继续
8. 使用“↑” “↓” 键选中你的烧录卡
9. 按 “A” 键继续
10. 选择 “Inject FIRM” 来安装 boot9starp 到你的烧录卡中
11. 依次按下屏幕上给出的按键
12. 按 “A” 键继续
13. 关闭**源 NDS / NDSL**
14. 从\*\*源 NDS / NDSL \*\*中拔出烧录卡

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
