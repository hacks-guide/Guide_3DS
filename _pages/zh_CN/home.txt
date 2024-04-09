---
layout: splash
title: "3DS 破解手册" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Get Started"
  cta_url: "key-information"
  caption:
excerpt: "A complete guide to 3DS (and 2DS) custom firmware, <br /> from stock to boot9strap.<br />"
---

请在开始操作前仔细阅读所有步骤页面（包括这个页面）。
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## 什么是自制固件？

**“自制固件（CFW）”**类似于电脑上的“管理员账户”，能够使你拥有对 3DS 安装的软件完整修改的权限。 能够让你做任何 3DS 力所能及的事情，不受任天堂的限制。

自制固件最受欢迎的用途有：

* 运行为 Nintendo 3DS 制作或移植的自制软件和游戏
* 解除锁区，让你玩其他地区的游戏
* HOME Menu customization, using community-created [themes and badges](https://themeplaza.art)
* 使用 [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher)) 修改游戏（“金手指”）
* 编辑、备份和恢复用户存档
* 模拟老主机游戏，还有原生支持运行的 DS 和 GBA 游戏
* 从游戏卡带中安装一份数字版的相同游戏

## 本教程将安装什么？

本手册将：
+ Install **boot9strap** and **Luma3DS custom firmware** on unmodified retail 3DS/2DS consoles
    + Luma3DS 能够自动移除区域锁并让你运行未签名的软件
+ 安装各种自制程序软件，例如：CIA 安装器、存档管理器以及自制程序商店
+ 导出关键系统文件备份，用于在砖机时救急用（并可用于恢复数据）

___

### Continue to [Key Information](key-information)
{: .notice--primary}
