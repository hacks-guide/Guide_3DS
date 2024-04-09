---
layout: splash
title: "3DS 改機手冊" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Get Started"
  cta_url: "key-information"
  caption:
excerpt: "A complete guide to 3DS (and 2DS) custom firmware, <br /> from stock to boot9strap.<br />"
---

請在繼續前讀完所有的前言頁面 (包括本頁！)。
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## 什麼是自製韌體 (Custom Firmware)？

**自製韌體** (CFW) 可讓您在您的主機上進行任何軟體上的修改，好比你電腦上的系統管理員權限一樣。 改機後，你能夠隨意修改你的 3DS，而非侷限於任天堂官方所允許的事。

常見的改機用途：

* Running homebrew software and games made for or ported to the Nintendo 3DS
* 解鎖區碼限制，讓你能遊玩任何其他地區的遊戲
* HOME Menu customization, using community-created [themes and badges](https://themeplaza.art)
* 透過 [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher)) 更改遊戲內容
* 編輯、備份、及還原遊戲存檔
* 模擬懷舊遊戲，或甚至運行 DS 及 GBA 遊戲
* 將卡帶遊戲移植成數位版

## 本手冊將安裝些什麼？

This guide will:
+ Install **boot9strap** and **Luma3DS custom firmware** on unmodified retail 3DS/2DS consoles
    + Luma3DS will automatically remove the region lock and allow you to run unsigned software
+ Install various pieces of homebrew software, such as a package installer, save file manager, and a homebrew app store
+ Make critical system file backups that can help avoid bricks (and recover data in the event of one)

___

### Continue to [Key Information](key-information)
{: .notice--primary}
