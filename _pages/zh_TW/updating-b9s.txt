---
title: "更新 B9S" #
---

{% include toc title="條目內容" %}

### 必讀事項

本頁面適用於已安裝 boot9strap 且想將其更新至最新版的使用者。

### 必備項目

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

### 操作說明

#### 第一節 — 準備工作

在本節中，請覆蓋所有 SD 卡中可能相衝的檔案。
{: .notice--info}

1. 將 SD 卡插入至電腦中
1. 在 SD 卡的根目錄底下建立一個新的資料夾 `boot9strap`
1. 解壓 boot9strap `.zip` 的 `boot9strap.firm` 及 `boot9strap.firm.sha` 檔案至 SD 卡的 `/boot9strap/` 資料夾中
1. 解壓 SafeB9SInstaller `.zip` 中的 `SafeB9SInstaller.firm` 到 SD 卡的根目錄下，並將其重新命名為 `boot.firm`
1. Reinsert your SD card into your console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### 第二節 — 安裝 boot9strap

1. Power on your console
    + 你的主機應該會自動進入到 SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### 第三節 — 更新 Luma3DS

1. 將 SD 卡插入至電腦中
1. 解壓 Luma3DS `.zip` 內的 `boot.firm` 及 `boot.3dsx` 到 SD 卡的根目錄底下，並覆蓋已存在之檔案
1. Reinsert your SD card into your console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings

___

### 繼續至[完成安裝](finalizing-setup)
{: .notice--primary}
