---
title: "更新 B9S"
---

{% include toc title="目录内容" %}

### 重要事项

本页是给现有 Boot9strap 的用户且想更新 Boot9strap 到最新版本而准备的。

### 你需要准备点啥？

* 最新版本的 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip)（直链）
* 最新版本的 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)（直链）
* 最新版本的 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)（下载 Luma3DS `.zip` 文件）

### 操作步骤

#### 第一步 – 准备工作

请在本节中的所有步骤中覆盖 SD 卡上的所有现有文件。
{: .notice--info}

1. 将 SD 卡插入电脑
1. 在SD卡根目录创建一个名为`boot9strap`的文件夹
1. 从boot9strap `.zip` 压缩包中复制 `boot9strap.firm` 和 `boot9strap.firm.sha` 到你 SD 卡的 `/boot9strap/` 文件夹中
1. 将 SafeB9SInstaller `.zip` 中的 `SafeB9SInstaller.firm` 复制到 SD 卡的根目录下，然后重命名为 `boot.firm`
1. Reinsert your SD card into your console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### 第二步 – 安装 boot9strap

1. Power on your console
    + 你的主机应该会自动进入到 SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### 第三步 – 升级 Luma3DS

1. 将你的 SD 卡插入到电脑
1. 解压 Luma3DS `.zip` 内的 `boot.firm` 和 `boot.3dsx` 到你 SD 卡的根目录，覆盖已有文件
1. Reinsert your SD card into your console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS 配置菜单用于设置 Luma3DS 自制固件的可选功能 其中有许多功能可用于个性化或调试
    + 由于配合本手册的用途，我们将直接按照默认配置保存

___

### 继续至[完成安装](finalizing-setup)
{: .notice--primary}
