---
title: "CTRTransfer"
---

{% include toc title="條目內容" %}

### 必讀事項

This is an add-on section for installing an 11.15.0 CTRTransfer image to your console.

This page assumes that you have already installed Luma3DS and boot9strap. If you followed this website to the end (Finalizing Setup), you have Luma3DS and boot9strap.
{: .notice--info}

As a part of this process, your system settings will be reset to its defaults. This includes things such as your username, country, and language. **Installed games and their save data will not be affected.**
{: .notice--warning}

### 必備項目

* 最新版的 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (選擇 GodMode9 `.zip` 檔案)
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(the `.3dsx` file)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* The 11.15.0 CTRTransfer image for your console and region:
{% include_relative include/ctrtransfer-images.txt %}

### 操作說明

#### 第一節 — 準備工作

{% include_relative include/ctrtransfer-prep.txt %}

#### 第二節 — 備份 NAND

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
{% include_relative include/nand-backup.txt %}

#### 第三節 — 進行 CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### 第四節 — 啟動 FBI 管理器

{% include_relative include/launch-hbl-dlp.txt %}

#### 第五節 — 重新安裝 Tickets

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Section VI - Fixing locale-related issues

{% include_relative include/ctrnand-datayeet.txt %}

___

### 繼續至[完成安裝](finalizing-setup)
{: .notice--primary}
