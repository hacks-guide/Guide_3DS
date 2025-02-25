# A9LH to B9S

## Required Reading

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

未来，Luma3DS 将只以 `.firm` 格式制作，这种格式只与 boot9strap 和 sighax 兼容。 也就是说，如果你想要使用最新版本的 Luma3DS 自制固件，就得通过此页面将 A9LH 转为 B9S。

## What You Need

::: warning

你需要一个支持 BT 协议的下载程序，如 [qBittorrent](https://www.qbittorrent.org/download.php) 或 [Deluge](http://dev.deluge-torrent.org/wiki/Download) 来下载本教程中的[磁力链接](https://zh.wikipedia.org/wiki/%E7%A3%81%E5%8A%9B%E9%93%BE%E6%8E%A5) 。

:::

::: info

注意，只有在 New 3DS 上，`secret_sector.bin` 才会被用来还原 arm9loaderhax 漏洞，所以这也是为什么在给原厂主机安装 boot9strap 时不需要这个文件。 如果你的主机不是 New 3DS ，则你无需下载 “secret_sector.bin”

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655\&dn=secret_sector.bin\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)

## Instructions

### Section I - Prep Work

::: info

请在本节中的所有步骤中覆盖 SD 卡上的所有现有文件。

:::

1. 将主机关机

2. 将你的 SD 卡插入到电脑

3. Copy everything from the latest Luma3DS `.zip` to the root of your SD card
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it

4. Copy `arm9loaderhax.bin` from the v7.0.5 Luma3DS `.zip` to the root of your SD card

5. 从 SafeB9SInstaller `.zip` 压缩包中复制 `SafeB9SInstaller.bin` 到SD卡 `/luma/payloads/` 目录中
   - If the `luma` or `payloads` folder doesn't exist, create them
   - Delete any other existing `.bin` payloads (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) in the `/luma/payloads/` folder on your SD card as they will not be compatible with boot9strap compatible Luma3DS versions

6. 在 SD 卡根目录创建一个名为 `boot9strap` 的文件夹

7. 从boot9strap `.zip` 文件中复制 `boot9strap.firm` 和 `boot9strap.firm.sha` 到你SD卡的 `/boot9strap/` 文件夹中

8. \*\*仅限 New 3DS 用户：\*\*复制 `secret_sector.bin` 到 SD 卡上的 `/boot9strap/` 文件夹

   ::: info

   ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

   :::

9. Reinsert your SD card into your console

### Section II - Installing boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
   - If you see the luma configuration screen instead of SafeB9SInstaller, simply press (Start), then shut down your 3DS and try again
   - If this gives you an error, try either using a new SD card or formatting your current SD card (backup existing files first)
2. 等待所有安全检查完成
   - If you get an "OTP Crypto Fail" error, download <font-awesome-icon icon="fa-solid fa-magnet"/> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e\&dn=aeskeydb.bin\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
3. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-a9lh-to-b9s)

<!--@include: ./_include/configure-luma3ds.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
