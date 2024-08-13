---
title: "升級 A9LH 至 B9S"
---

{% include toc title="條目內容" %}

### 必讀事項

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

未來所有的 Luma3DS 版本都將以 `.firm` 形式推出，且此格式僅相容於 boot9strap 以及 sighax。 也就是說，如果您想要繼續使用最新版的 Luma3DS，您應透過本章節來更新您的主機。

若要解壓該頁面中的`.7z`檔案，您將需要一個壓縮檔管理員，如 [7-Zip](http://www.7-zip.org/) 或 [The Unarchiver](https://theunarchiver.com/)。

### 必備項目

To use the [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links on this page, you will need a torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

請注意，只有在使用 New 3DS 時，`secret_sector.bin` 是用來還原 arm9loaderhax 漏洞用的，這也就是為什麼在原廠主機上安裝 boot9strap 時不會用到它。 若您的主機不是 New 3DS 的機型，您則不需要使用 `secret_sector.bin`。
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="這是個種子連結。 Use a torrent client to download the file."></i> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
* The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)

### 操作說明

#### 第一節 — 準備工作

在本節中，請覆蓋所有 SD 卡中可能相衝的檔案。
{: .notice--info}

1. Power off your console
1. 將 SD 卡插入至電腦中
1. Copy `boot.firm` and `boot.3dsx` from the latest version Luma3DS `.zip` to the root of your SD card
    + 「SD 卡的根目錄」指的是你的 SD 卡含有 Nintendo 3DS 資料夾的目錄，而非該資料夾內部
1. 解壓 v7.0.5 Luma3DS `.7z` 內的 `arm9loaderhax.bin` 到 SD 卡的根目錄底下
1. 解壓 SafeB9SInstaller`.zip` 中的 `SafeB9SInstaller.bin` 到 SD 中的 `/luma/payloads/` 下
    + 如果沒有 `luma` 或 `payloads` 資料夾，請先建立它們
    + 刪除其他 SD 卡中 `/luma/payloads/` (如 `GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin` 等等) 資料夾的 `.bin` payload 檔案，因為它們將無法與 boot9strap 版本的 Luma3DS 相容
1. 在 SD 卡的根目錄底下建立一個新的資料夾 `boot9strap`
1. 解壓 boot9strap `.zip` 的 `boot9strap.firm` 及 `boot9strap.firm.sha` 檔案至 SD 卡的 `/boot9strap/` 資料夾中
1. **僅限 New 3DS 使用者：**將 `secret_sector.bin` 複製到 SD 卡的 `/boot9strap/` 資料夾中

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinsert your SD card into your console

#### 第二節 — 安裝 boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    + 若您看到的選單為 Luma 設定選單而非 SafeB9SInstaller，請按下『Start』鍵並將您的主機關機並再試一次
    + 如果您在此步驟遇到了錯誤訊息，請試試看使用新的 SD 卡或將它格式化 (請先自行備份檔案)
1. 等待所有的安全性檢查檢查完畢
    + 如果您遇到『OTP Crypto Fail』的錯誤訊息，請下載 <i class="fa fa-magnet" aria-hidden="true" title="這是個種子連結。 請使用 BT 下載此檔案。"></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Your console should have rebooted into the Luma3DS configuration menu
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings
    + If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. 按『Start』鍵以存檔並重新啟動系統

___

### 繼續至[完成安裝](finalizing-setup)
{: .notice--primary}
