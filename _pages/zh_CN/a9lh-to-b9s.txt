---
title: "A9LH 升级 B9S"
---

{% include toc title="目录内容" %}

### 必读事项

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

未来，Luma3DS 将只以 `.firm` 格式制作，这种格式只与 boot9strap 和 sighax 兼容。 也就是说，如果你想要使用最新版本的 Luma3DS 自制固件，就得通过此页面将 A9LH 转为 B9S。

请使用 [7-Zip](http://www.7-zip.org/) 或 [The Unarchiver](https://theunarchiver.com/) 之类的压缩软件来解压本页面上的 `.7z` 文件。

### 你需要准备点啥？

你需要一个支持 BT 协议的下载程序，如 [qBittorrent](https://www.qbittorrent.org/download.php) 或 [Deluge](http://dev.deluge-torrent.org/wiki/Download) 来下载本教程中的[磁力链接](https://zh.wikipedia.org/wiki/%E7%A3%81%E5%8A%9B%E9%93%BE%E6%8E%A5) 。
{: .notice--warning}

注意，只有在 New 3DS 上，`secret_sector.bin` 才会被用来还原 arm9loaderhax 漏洞，所以这也是为什么在给原厂主机安装 boot9strap 时不需要这个文件。 如果你的主机不是 New 3DS ，则你无需下载 “secret_sector.bin”
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="这是一个磁力链接。 使用 BT 客户端下载此文件。"></i> - **仅 New 3DS 用户：** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce)（磁力链接）
* 最新版本的 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)（下载 Luma3DS `.zip` 文件）
* The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
* 最新版本的 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip)（直链）
* 最新版本的 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)（直链）

### 操作步骤

#### 第一步 – 准备工作

如果你在进行这些步骤时被提示 SD 卡中有相同文件，请选择全部替换。
{: .notice--info}

1. 将主机关机
1. 将你的 SD 卡插入到电脑
1. Copy `boot.firm` and `boot.3dsx` from the latest version Luma3DS `.zip` to the root of your SD card
    + 根目录指的是你点进 SD 卡看到的目录，你可以在这个目录下看到 Nintendo 3DS 文件夹，但请不要点进去
1. 从 Luma3DS `.7z` 压缩包中复制 `arm9loaderhax.bin` 文件到你 SD 卡的根目录
1. 从 SafeB9SInstaller `.zip` 压缩包中复制 `SafeB9SInstaller.bin` 到SD卡 `/luma/payloads/` 目录中
    + 如果没有 `luma` 或 `payloads` 文件夹，请先创建它们
    + 删除 SD 卡 `/luma/payloads/` 文件夹内所有后缀为 `.bin` 的文件（`GodMode9.bin`、`Decrypt9WIP.bin`、Hourglass9.bin` 等) ，因为它们在支持 boot9strap 的 Luma3DS 版本中无法使用
1. 在 SD 卡根目录创建一个名为 `boot9strap` 的文件夹
1. 从boot9strap `.zip` 文件中复制 `boot9strap.firm` 和 `boot9strap.firm.sha` 到你SD卡的 `/boot9strap/` 文件夹中
1. **仅限 New 3DS 用户：**复制 `secret_sector.bin` 到 SD 卡上的 `/boot9strap/` 文件夹

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinsert your SD card into your console

#### 第二步 – 安装 boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    + 如果此时出现的是 Luma 设置而不是 SafeB9SInstaller，那么按下 “Start” 键，之后关闭 3DS，再试一次
    + 如果报错，请尝试使用一张新的 SD 卡，或将你当前使用的 SD 卡格式化一次（请注意备份文件），然后再试 
1. 等待所有安全检查完成
    +如果你遇到 “OTP Crypto Fail” 的错误，下载 <i class="fa fa-magnet" aria-hidden="true" title="这是一个磁力链接。 使用 BT 客户端下载此文件。"></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce)，然后把它放到 SD 卡的 `/boot9strap/` 文件夹下，然后重试一下
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Your console should have rebooted into the Luma3DS configuration menu
    + Luma3DS 配置菜单用于设置 Luma3DS 自制固件的可选功能 其中有许多功能可用于个性化或调试
    + 由于配合本手册的用途，我们将直接按照默认配置保存
    + If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. 按下 “Start” 键保存设置并重启

___

### 继续至[完成安装](finalizing-setup)
{: .notice--primary}
