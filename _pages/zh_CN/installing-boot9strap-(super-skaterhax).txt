---
title: "Installing boot9strap (super-skaterhax)"
---

{% include toc title="目录内容" %}

{% capture technical_info %}
<summary><em>技术细节（选看）</em></summary>
For technical details on the exploits that you will be using on this page, see [here](https://github.com/zoogie/super-skaterhax).

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### 兼容性注意

Super-skaterhax (when used to launch the Homebrew Launcher) is compatible with New models on version 11.15.0 and above in all regions.

The instructions provided only apply to the New 3DS, New 3DS XL, and New 2DS XL. Please ensure that the console you are modding is a New 3DS, New 3DS XL, or New 2DS XL before continuing.
{: .notice--warning}

### 你需要准备点啥？

* The latest release of [super-skaterhax](https://github.com/zoogie/super-skaterhax/releases) (the release `.zip` file)
* 最新版本的 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip)（直链）
* 最新版本的 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)（直链）
* The latest release of [nimdsphax](https://github.com/luigoalma/nimdsphax/releases/download/v1.0/nimdsphax_v1.0.zip) (direct download)
* 最新版本的 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)（下载 Luma3DS `.zip` 文件）

#### 第一步 – 准备工作

In this section, you will copy the files needed to trigger both super-skaterhax and the Homebrew Launcher.

1. 将主机关机
1. 将你的 SD 卡插入到电脑
1. 解压 Luma3DS `.zip` 里的 `boot.firm` 和 `boot.3dsx` 到你 SD 卡的根目录
    + 根目录指的是你点进 SD 卡看到的目录，你可以在这个目录下看到 Nintendo 3DS 文件夹，但请不要点进去
1. Copy everything inside the folder for your console's region and version (`arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin`) in the release_new3ds `.zip` to the root of your SD card
1. 在 SD 卡根目录创建一个名为 `boot9strap` 的文件夹
1. 从boot9strap `.zip` 文件中复制 `boot9strap.firm` 和 `boot9strap.firm.sha` 到你SD卡的 `/boot9strap/` 文件夹中
1. 从 SafeB9SInstaller `.zip` 压缩包中复制 `SafeB9SInstaller.bin` 到 SD 卡根目录下
1. 检查 SD 卡的根目录是否存在一个名为 `3ds` 的文件夹，如果没有则手动新建一个
    + This folder stores homebrew applications and data; it is different from the `Nintendo 3DS` folder that the console automatically generates
1. Copy the `nimdsphax` folder from the nimdsphax `.zip` to the `/3ds/` folder on your SD card
1. Reinsert your SD card into your console
1. Power on your console

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}


#### Section II - super-skaterhax

In this section, you will visit the browser exploit webpage, which will launch the Homebrew Launcher.

在开始之前，请确保你的主机已经设置了一个可以连接互联网的无线网络。
{: .notice--info}

{% capture set_date %}
<summary>If your system date is incorrect, this exploit will not work.<br>Please follow the steps below to set the correct system date.</summary>
1. Launch System Settings on your console
1. 选择 “其他设置（Other Settings）”
1. Navigate to "Date & Time" -> "Today's date"
1. Tap Up/Down Arrows to set the correct Day, Month and Year
1. Select OK to confirm
{% endcapture %}
<details>{{ set_date | markdownify }}</details>
{: .notice--info}

1. On the HOME Menu, press the Left and Right shoulder buttons at the same time to open the camera
    + If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/super/` for EUR/USA/JPN, `https://zoogie.github.io/web/korea` for KOR)
1. Tap the QR code button and scan one of the following QR codes for your console's region [here](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
    + 如果你收到了安全证书警告，请按 A 允许连接
1. Press the (Select) button to open the bookmark tab
    + If your (Select) button does not respond, tap the star icon on the bottom-left corner of the screen
1. Tap "Bookmark this page"
1. Press (B) once to return to the browser
1. Press (Start) to open the context menu
    + If your (Start) button does not respond, tap the 3-line menu on the bottom-right corner of the screen
1. Tap on "Settings"
1. Tap on "Delete Cookies"
1. 按 “A” 键继续
1. Press (Home) to return to the HOME Menu, then immediately press (A) to launch the browser again
1. Select the "GO GO!" button on the top screen
    + If any prompts appear, approve all of them
    + If your console freezes on a yellow screen, hold the POWER button until it turns off, then retry this section
    + If your console freezes on a red screen, hold the POWER button until it turns off, redo step 3 of Section II, then retry this section
    + If your console shows "Text" on the bottom screen, you have an Old 3DS and this exploit **will not work on your device**. If this is the case, you should follow [MSET9](installing-boot9strap-(mset9)) instead
    + If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-super-skaterhax)
1. Your console will have booted into the Homebrew Launcher
1. Launch nimdsphax from the list of homebrew
1. 如果一切成功的话，你将自动进入 SafeB9SInstaller
    + If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section
    + This may take up to five attempts

#### 第三步 – 安装 boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}

___

### 继续至[完成安装](finalizing-setup)
{: .notice--primary}
