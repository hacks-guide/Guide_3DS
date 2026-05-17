# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. 你的烧录卡在本方法中不受 3DS 系统版本的限制。

::: danger

请注意，极少见的情況下某些伪劣烧录卡有可能会在破解过程中坏掉且无法恢复。 这不太可能， 但无论如何我们只支持写在兼容表格中的烧录卡。 To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
  - **The source 3DS**: the 3DS family console that is already running boot9strap
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. 关闭\*\*源 3DS \*\*
2. 将\*\*源 3DS \*\*的 SD 卡插入你的电脑
3. 在 SD 卡根目录创建一个名为 `ntrboot` 的文件夹
4. 解压 boot9strap ntr `.zip` 然后复制 `boot9strap_ntr.firm` 和 `boot9strap_ntr.firm.sha` 到 SD 卡根目录的 `/ntrboot/` 文件夹
5. 复制 `ntrboot_flasher.firm` 到 **源3DS** SD 卡的 `/luma/payloads/` 文件夹中
6. 将 **源 3DS** 的 SD 卡重新插回 **源 3DS**
7. 将兼容 ntrboot 的 DS / DSi 烧录卡插入 **源 3DS** 中

### Section II - Flashing ntrboot

1. 在 **源3DS** 开机时按住 “Start” 键，运行 Luma3DS chainloader
2. 选择 “ntrboot_flasher”
3. 请仔细阅读警告信息
4. 按 “A” 键继续
5. 选择对应你的烧录卡
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. 选择 “Dump Flash”
7. 等待测试完成
8. 按 “A” 键继续
9. 按 “A” 键返回主菜单
10. 选择 “Inject Ntrboot”
11. 按 “A” 键选择 “retail unit ntrboot”
12. 等待测试完成
13. 按 “A” 键返回主菜单
14. 按 “B” 键关闭 **源 3DS**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
