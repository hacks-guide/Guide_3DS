# Flashing ntrboot (3DS Single System)

## Required Reading

请在开始前仔细阅读 [ntrboot](ntrboot) 章节的内容

本方法只需一台未破解的 3DS 和一张兼容的烧录卡。 本教程烧录卡将用于在你的 3DS 上运行 ntrboot flasher `.nds` 文件。 这也就是说，若想要在3DS上使用你持有的烧录卡运行 `.nds` 文件，烧录卡必须支持在你的 3DS 系统版本上运行。 有关详细信息, 请查看 [ntrboot](ntrboot) 上的烧录卡兼容表格。

::: danger

请注意，极少见的情況下某些伪劣烧录卡有可能会在破解过程中坏掉且无法恢复。 这不太可能， 但无论如何我们只支持写在兼容表格中的烧录卡。 To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. 将主机关机
2. 将烧录卡中的 SD 卡插入电脑
3. 在烧录卡的 SD 卡根目录创建一个名为 `ntrboot` 的文件夹
4. 解压 bootstrap ntr `.zip` 然后复制 `boot9strap_ntr.firm` 到烧录卡的 SD 卡根目录的 `/ntrboot/` 文件夹
5. 复制 `ntrboot_flasher_dsi.nds` 到烧录卡的 SD 卡上
6. 将 SD 卡插回烧录卡
7. Insert your ntrboot compatible DS / DSi flashcart into your console

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
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
13. 将主机关机

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
