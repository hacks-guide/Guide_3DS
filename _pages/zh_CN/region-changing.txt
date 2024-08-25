---
title: "区域变更"
---

{% include toc title="目录内容" %}

### 重要事项

This is an add-on section for region changing your console. 这是通过安装你想要切换到的地区的 11.15.0 CTRTransfer 镜像而达成的。 After installing the image, you can update your console normally to the latest firmware (11.17.0).

注意，Luma3DS 本身就自带了[区域模拟](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features)的功能，这使得变更区域几乎是不必要的。 顺带一提，你可以使用 [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) 来运行其他区域的 NDS 游戏。 You should only perform a region change if you wish to have your system UI is in a language that is not available on your console's current region.

This page assumes that you have already installed Luma3DS and boot9strap. If you followed this website to the end (Finalizing Setup), you have Luma3DS and boot9strap.
{: .notice--info}

As a part of this process, your system settings will be reset to its defaults. This includes things such as your username, country, and language. **Installed games and their save data will not be affected.**
{: .notice--warning}

{% capture notice-6 %}
If you change the region of your console:

+ 如果你登录了一个 NNID，操作后将无法继续使用此 NNID。 NNID 在创建时即被锁定在它的创建区域。
+ 主机将无法访问 eShop，即使是[删除你的 eShop 账户](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) 这是因为 3DS 中的某些应用会在进入时绑定使用区域（特别是 New 3DS 上）。
    + This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. Updates may provide extra content or fix bugs.
    + This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
    + Pokémon Bank also requires working eShop access.
    + That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
+ **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.
{% endcapture %}

<div class="notice--danger">{{ notice-6 | markdownify }}</div>

### 你需要准备点啥？

* 最新版本的 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest)（下载 GodMode9 `.zip` 文件）
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(the `.3dsx` file)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)
{% include_relative include/ctrtransfer-images.txt %}

### 操作步骤

#### 第一步 – 准备工作

{% include_relative include/ctrtransfer-prep.txt %}

#### 第二步 – 备份 NAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
{% include_relative include/nand-backup.txt %}

#### 第三步 – CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### 第四步 – 启动 FBI 应用

{% include_relative include/launch-hbl-dlp.txt %}

#### 第五步 – 重装 Tickets

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Section VI - Fixing locale-related issues

{% include_relative include/ctrnand-datayeet.txt %}

___

Your 3DS has successfully been region changed!
{: .notice--success}
