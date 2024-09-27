# Flashing ntrboot (DSi)

## Required Reading

请在开始前仔细阅读 [ntrboot](ntrboot) 章节的内容

本方法需要暂时用到一台与你烧录卡兼容的 Nintendo DSi 主机。 烧录卡将用于在你的 DSi 上运行 ntrboot 写入程序的 `.nds` 文件。 这也就是说，若想要在 DSi 上使用你持有的烧录卡运行 `.nds` 文件，烧录卡必须支持在你的 DSi 系统版本上运行。 有关详细信息, 请查看 [ntrboot](ntrboot) 上的烧录卡兼容表格。

::: danger

请注意，极少见的情況下某些伪劣烧录卡有可能会在破解过程中坏掉且无法恢复。 这不太可能， 但无论如何我们只支持写在兼容表格中的烧录卡。 To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. 关闭**源 DSi**
2. 将烧录卡中的 SD 卡插入电脑
3. 复制 `ds_ntrboot_flasher_dsi.nds` 到烧录卡的 SD 卡上
4. 将 SD 卡插回烧录卡
5. 把兼容 ntrboot 的 DS / DSi 烧录卡插入 **源DSi**

### Section II - Flashing ntrboot

1. 在你的 **源DSi** 上使用烧录卡，运行 `ds_ntrboot_flasher_dsi.nds`
2. 按 “A” 键继续
3. 使用“↑” “↓” 键选中你的烧录卡
4. 按 “A” 键继续
5. 按 “A” 键选择 “inject ntrboothax”
6. 按 “A” 键选择 “RETAIL”
7. 按 “A” 键继续
8. 选择 “EXIT”

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
