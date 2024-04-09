---
title: "Updating B9S"
---

{% include toc title="目次" %}

### 必読事項

This page is for existing boot9strap users to update their installation of boot9strap to the latest version.

### 必要なもの

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

### 手順

#### セクション I - 準備

For all steps in this section, overwrite any existing files on your SD card.
{: .notice--info}

1. パソコンにSDカードを入れます
1. `boot9strap`という名前のフォルダをSDカードのルート上に作成します。
1. `boot9strap.firm`と`boot9strap.firm.sha`を boot9strap `.zip` ファイルから解凍し、SD カードのboot9strapフォルダにコピーします。
1. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
1. Reinsert your SD card into your console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### セクション II - boot9strapをインストールする

1. Power on your console
    + This should automatically launch SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Section III - Update Luma3DS

1. パソコンにSDカードを入れます
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card, replacing the existing file
1. Reinsert your SD card into your console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings

___

[セットアップを完了する](finalizing-setup) へ進みます
{: .notice--primary}
