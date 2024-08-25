---
title: "问题排查"
---

此页面列出了一些常见问题的解决办法。 如果你的问题无法通过此页面提供的方法解决，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)，使用英文描述你的问题（包括你尝试过的操作）来寻求帮助。你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。

{% capture compat %}
<summary>Table of Contents</summary>

Used on multiple pages:
* [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Guide pages:
* [Installing boot9strap (Soundhax)](#installing-boot9strap-soundhax)
* [Installing boot9strap (MSET9)](#installing-boot9strap-mset9)
* [Installing boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
* [Installing boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
* [Finalizing Setup](#finalizing-setup)

Issues after installation:
* [Boot issues](#boot-issues-on-consoles-with-custom-firmware)
* [Software issues](#software-issues-on-consoles-with-custom-firmware)

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--info}

## 关于 SafeB9SInstaller 的问题

### Before opening SafeB9SInstaller

{% capture compat %}
<summary><u>Failed to open SafeB9SInstaller.bin</u></summary>

`SafeB9SInstaller.bin` 文件丢失或放置在了错误的位置。 下载最新版本的 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) 然后解压它，将 `SafeB9SInstaller.bin` 放在你 SD 卡的根目录中。 如果你下到的东西看不到 `.bin` 后缀，请不要重命名它。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### SigHaxed FIRM was not installed! Check lower screen for more info.

{% capture compat %}
<summary><u>MicroSD Card - init failed</u></summary>

Your SD card is most likely acting weird. Try reformatting your SD card ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). If this doesn't work, try another SD card.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - File not found</u></summary>

你忘记把 `boot9strap.firm` 和 `boot9strap.firm.sha` 放进 SD 卡根目录的 `boot9strap` 文件夹了，或是创建 `boot9strap` 文件夹的时候打错了名字。 下载最新版本的 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)，然后将 `boot9strap.firm` 和 `boot9strap.firm.sha` 放入 `boot9strap` 文件夹。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - invalid FIRM</u></summary>

你的 `boot9strap.firm` 和 `boot9strap.firm.sha` 文件有问题。 重新下载最新版本的 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)，然后将 `boot9strap.firm` 和 `boot9strap.firm.sha` 放入 `boot9strap` 文件夹。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Secret Sector - File not found</u></summary>

你忘记把 `secret_sector.bin` 放进 SD 卡根目录的 `boot9strap` 文件夹了，或是创建 `boot9strap` 文件夹的时候打错了名字。 使用 BT 客户端下载 [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce)，然后把它放到 SD 卡里的 `boot9strap` 文件夹中。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Something else</u></summary>

如需帮助，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)，使用英文描述你看到的信息。你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## 安装 boot9strap（通过 Soundhax）

{% capture compat %}
<summary><u>Red/purple/pink and white screen after running Soundhax</u></summary>

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

If your console is not on those firmwares, it likely indicates that you already have custom firmware. 你应该[检查一下](checking-for-cfw)。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"An error has occurred, forcing the software to close..." (white message box)</u></summary>

你放的 `otherapp.bin` 文件有问题（丢失、放错位置或者损坏）。 下载最新版本的 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) 并将其放在你 SD 卡的根目录中。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Could not play"</u></summary>

You have the wrong Soundhax file for your console and region, or your console is incompatible with Soundhax. In the latter case, your course of action will determine on what version your 3DS is currently on. 如需帮助，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>
备份好你 SD 卡上的文件，然后根据你的操作系统选择一个工具来重新格式化 SD 卡为 FAT32 格式：[Windows](formatting-sd-(windows))、[macOS](formatting-sd-(mac))、[Linux](formatting-sd-(linux))。 目前已知 MiniTool Partition Wizard 和惠普格式化工具（HPUSBDisk）格出来的 SD 卡给 3DS 使用会出问题。

如果还是不行，尝试换一张 SD 卡。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (MSET9)

{% capture mset9-chorus %}
    + **Windows**: Double-click `MSET9-Windows.bat`
    + **macOS**: Double-click `MSET9-macOS.command` and enter your password if prompted
    + **Linux**: open a Terminal window, `cd` to the root of your SD card, then type `python3 mset9.py` and press Enter
{% endcapture %}

{% capture compat %}
<summary><u>Python 3 is not installed</u></summary>

Python is not installed on the computer you are using. Download it from the [Python website](https://www.python.org/downloads/), double-click the installer, and follow the prompts to install Python. Once Python is installed, try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>HOME Menu extdata: Missing!</u></summary>

Please power on your console with your SD inserted, then check the MSET9 status again.

If this does not work, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from [Section I Step 7](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Mii Maker extdata: Missing!</u></summary>

Mii Maker data was not found on the SD card. Please power on your console with your SD inserted, then launch Mii Maker, then check the MSET9 status again.

If this does not work, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from [Section I Step 8](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Title database: Not initialized!</u></summary>

Ensure that you have reset the title database.
    + Please power on your console with your SD inserted 
    + Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
        + This will not wipe any of your data
    + If you get a reset prompt, after resetting, power off your console and start again from [Section I Step 14](installing-boot9strap-(mset9-cli)#section-i---prep-work)

If you do *not* getting a reset prompt, your SD card needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
1. Type `2` then press enter to check the MSET9 status
    + This will create the dummy databases again
1. Close the MSET9 script window
1. Start again from [Section I Step 12](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 01: Couldn't find Nintendo 3DS folder</u></summary>

You are not running MSET9 from the root of the SD card, or the SD card is missing the Nintendo 3DS folder.

Remember, your SD card should look like this:

![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
{: .notice--info}

If your SD card layout is correct, then your SD card most likely isn't being read by your console and needs to be formatted:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from the beginning of [Section I](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 02: Your SD is write protected</u></summary>

Write-protection is enabled on this SD card. If you are using a full-size SD card, ensure that the lock is flipped in the [upright position](/images/sdlock.png). Otherwise, try ejecting and reinserting your SD card.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 04: You don't have 1 ID0, you have (#)!</u></summary>

You have multiple ID0 folders. To determine the correct folder, follow these instructions:

1. 将 `Nintendo 3DS` 文件夹重命名为 `BACKUP_Nintendo 3DS`
1. Reinsert your SD card into your console
1. Power on your console
1. Wait for the console to generate the SD card data
    + 你先前安装的程序会暂时消失。 这是正常的，且接下来就会还原回来。
1. 将主机关机
1. 将你的 SD 卡插入到电脑
1. 打开你 SD 卡的 `Nintendo 3DS` 文件夹
1. Write down the first few characters of the folder you see
    + This is your true ID0, which we will keep in the real Nintendo 3DS folder
1. Delete the ID0 from the current `Nintendo 3DS` folder
1. Move the true ID0 folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder
1. If it exists, move the `Private` folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder

Once you've done this, continue from [Section I Step 3](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 05: You don't have 1 ID1, you have (#)!</u></summary>

{% include_relative include/id1-check.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 06: You need at least 16MB free</u></summary>

Your SD card does not have enough space to trigger MSET9. Free up some space and try again.

At the end of this guide, you will need at least 1.3GB to make a NAND backup, so it's best to free up at least that much.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 07: One or more files are missing or malformed!</u></summary>

One or more files that MSET9 needs to run is missing or corrupted. Re-download the [MSET9 Release `.zip`](https://github.com/hacks-guide/MSET9/releases/latest) and extract it to the root of your SD card, replacing all existing files, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 18: Windows Locale Settings are broken!</u></summary>

{% include_relative include/winerror234.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Red screen after reinserting SD card (Section II Step 11)</u></summary>

You may be missing `SafeB9S.bin` from the root of your SD card, or the file may be corrupted. Copy it from the MSET9 `.zip`, replacing any existing files then follow these instructions to remove the trigger file:

1. Force power off your console by holding the Power button for 20 seconds
1. 将你的 SD 卡插入到电脑
1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
    + The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    + If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you may [retry Section II](installing-boot9strap-(mset9-cli)#section-ii---mset9)
1. Type `4`, then press Enter
1. Once the window says "Removed trigger file", type `0` and then press Enter
1. Reinsert the SD card into your console
1. Power on your console
1. Return to [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Alternatively, your SD card may be improperly formatted or partitioned. After removing the trigger file, format it:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from from [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>System Settings loading infinitely after reinserting the SD card</u></summary>

You most likely did something different from the MSET9 instructions, selected the wrong model/version, or your SD card needs to be formatted. Ensure you are choosing the correct [model](/images/3dsmodels.png) and firmware version when opening the script.

Follow these instructions to remove the trigger file and to retry Section II:

1. Force power off your console by holding the Power button for 20 seconds
1. 将你的 SD 卡插入到电脑
1. 1. Run the MSET9 script:
    {{ mset9-chorus }}
1. Type the number corresponding to your console model and version, then press Enter
    + The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    + If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
1. Type `4`, then press Enter
1. Once the window says "Removed trigger file", type `0` and then press Enter
1. Reinsert the SD card into your console
1. Power on your console
1. Return to [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. Copy everything off the SD Card to your PC
1. Format the SD Card ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copy everything back
1. Start again from from [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>An exception occurred after triggering MSET9</u></summary>

这可能代表着你的主机已经安装过了自制固件。 你应该[检查一下](checking-for-cfw)。

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (super-skaterhax)

{% capture compat %}
<summary><u>"An error has occurred. Please save your data in any software currently in use, then restart the system."</u></summary>

The date is set incorrectly. To set it correctly, follow these steps:

1. Select the System Settings icon on the HOME Menu, and tap Open.
1. Tap Other Settings.
1. Tap Date & Time.
1. Tap Today's date.
1. Tap Up/Down Arrows to set the correct Day, Month and Year.
1. Select OK to confirm.

If the problem persists:

+ Ensure that `arm11code.bin`, `browserhax_hblauncher_ropbin_payload.bin`, and `boot.3dsx` are on the root of the SD card (not inside of any folder)
+ Ensure that you selected the correct payload for your region AND system version
+ Ensure that your region settings look [like this](/images/screenshots/skater_lang.png)
+ Try resetting your browser data:
    1. 打开浏览器，进入浏览器设置页面
    1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initilize Save Data" or "Clear All Save Data")
    1. 再次尝试触发漏洞
+ Try changing the system language to something other than the current language

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)</u></summary>

`arm11code.bin` 文件丢失或位置错误。 Make sure to copy the files of the [latest version of super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) for your region and version to the root of your SD card (not inside of a folder).

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>An exception occured or "DLL_HEAP_INFORMATION" when pressing GO! GO!</u></summary>

这可能代表着你的主机已经安装过了自制固件。 你应该[检查一下](checking-for-cfw)。

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## 安装 boot9strap（通过 SSLoth-Browser）

{% capture compat %}
<summary><u>Red/purple/pink and white screen after running Browserhax</u></summary>

这可能代表着你的主机已经安装过了自制固件。 你应该[检查一下](checking-for-cfw)。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)</u></summary>

`arm11code.bin` 文件丢失或位置错误。 下载最新版本的 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) 并将其放在你 SD 卡的根目录中，然后重命名为 `arm11code.bin`。 如果你下到的东西看不到 `.bin` 后缀，请不要重命名它。
{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"An error has occurred, forcing the software to close..." (white message box)</u></summary>

这可能说明你放的 `arm11code.bin` 文件有问题。 下载最新版本的 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) 并将其放在你 SD 卡的根目录中，然后重命名为 `arm11code.bin`。 如果你下到的东西看不到 `.bin` 后缀，请不要重命名它。

You can also try resetting your browser save data:

1. 打开浏览器，进入浏览器设置页面
1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
1. 再次尝试触发漏洞

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Opening the browserhax QR code or URL crashes</u></summary>

基于浏览器的破解漏洞（例如你正在使用的这个）不稳定并经常崩溃，你可以尝试按照下面的步骤修复：

1. 打开浏览器，进入浏览器设置页面
1. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
1. 再次尝试触发漏洞
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>System Update prompt when opening browser</u></summary>

你可能没有正确配置 SSLoth 代理服务器。 尝试重做页面上的 SSLoth 部分内容。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 032-0420 when opening browser</u></summary>

按照以下步骤操作：

1. Launch System Settings on your console
1. 进入到 `互联网设置（インターネット設定 / Internet Settings）` -> `连接设置（インターネット接続設定 / Connection Settings）`
1. 点击你目前在用的连接点槽位，然后进入到 `设置变更（設定変更 / Change Settings）` -> `下一页（右箭头）` -> `代理设置（Proxy）`
1. 将 “代理设置（Proxy）”设置为 “否（No/しない）”
1. 点击 OK，然后点击保存（保存する / Save）
1. 当提示时，点击“测试（テスト / Test）”进行连接测试
    + 测试应该会成功
1. 点击 “OK” 继续
1. 点两次 “返回”，然后点“关闭”来返回主菜单。
1. 打开浏览器
1. 如果它提示需要系统更新，点击 OK
    + 这实际不会将系统更新
1. 重新从[第二步](installing-boot9strap-(ssloth-browser).html#section-ii---ssloth)开始
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Frozen on "Doing agbhax..."</u></summary>
这可能说明你放的 `arm11code.bin` 文件有问题。 重新下载最新版本的 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) 并将其放在你 SD 卡的根目录中，然后重命名为 `arm11code.bin`。 如果你下到的东西看不到 `.bin` 后缀，请不要重命名它。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"PrepareArm9ForTwl returned error c8804631!"</u></summary>

如需帮助，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>

备份好你 SD 卡上的文件，然后根据你的操作系统选择一个工具来重新格式化 SD 卡为 FAT32 格式：[Windows](formatting-sd-(windows))、[macOS](formatting-sd-(mac))、[Linux](formatting-sd-(linux))。 目前已知 MiniTool Partition Wizard 和惠普格式化工具（HPUSBDisk）格出来的 SD 卡给 3DS 使用会出问题。

如果还是不行，尝试换一张 SD 卡。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## 完成安装

{% capture compat %}
<summary><u>Unable to update console</u></summary>

以下是可以尝试的解决方法，按从简单到困难的顺序排列。

1. 将 DNS 设置为“自动（Auto）”
1. 将主机靠近 WiFi 路由器
1. 尝试在安全模式下更新主机，在开机时按住 L + R +↑ + A 键来进入安全模式，然后跟随屏幕上的指示做
1. 删除你的 Wifi 连接点然后重新再设置一次
1. 重启你的 WiFi 路由器
1. 连接其他的 WiFi，比如移动热点
1. Nintendo 服务器可能临时下线，稍后再试
1. 如果仍然提示错误，请进行 [CTRTransfer](ctrtransfer)，然后再尝试一次更新
1. 如需援助，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)并说英文求助。（请注意，如果你身处中国大陆，访问 Discord 可能需要科学上网），你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #22: finalize.romfs is invalid</u></summary>

The file `finalize.romfs` is corrupt or unreadable. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #23: finalize.romfs in wrong location</u></summary>

The file `finalize.romfs` was placed in the wrong location instead of root of SD. The script will attempt to resolve this, but requires your permission to do so. Press (A) on the next few prompts to continue.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #24: SD is write-protected</u></summary>

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>Error #02: Missing essential.exefs</u></summary>

You said 'No' to the "Make essential files backup?" prompt in GodMode9. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}

<summary><u>Error #04: No space</u></summary>

You need at least 1.3GB of free space to perform the NAND backup, which is a part of the script. If you don't have enough space, follow these steps:

1. 将主机关机
1. 将你的 SD 卡插入到电脑
1. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
1. Delete the Nintendo 3DS folder from the SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press the (Home) button
1. 选择 “Scripts...”
1. Select "finalize"
1. Press (A) to create a NAND backup
    + This may take around fifteen minutes
1. Press (A) again
    + The console should automatically power off
1. 将你的 SD 卡插入到电脑
1. Copy the files in `/gm9/backups/` on your SD to a safe location on your computer
1. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
1. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
1. Delete the `Nintendo 3DS` folder from your computer

Now that you have your NAND backup in a safe place:

1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press the (Home) button
1. 选择 “Scripts...”
1. Select "finalize"
1. Continue the script as normal
    + The NAND backup will be automatically skipped

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #05: No title database</u></summary>

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #06 or "Error: Could not open directory" when attempting a NAND backup</u></summary>

Make sure you have at least 1.3GB available in your SD card. If you don't have enough space, follow these steps:
1. 将主机关机
1. 将你的 SD 卡插入到电脑
1. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
1. Delete the Nintendo 3DS folder from the SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Perform a [NAND Backup](godmode9-usage#creating-a-nand-backup)
1. Copy the files in `gm9/out` on your SD to a safe location on your computer
1. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card, keeping essential.exefs in `/gm9/out/`
1. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
1. Delete the `Nintendo 3DS` folder from your computer

If you have enough space on your SD card, your SD might be corrupted or faulty. Check your SD card for any errors by following the guide according to your computer's operating system: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #12: Copy (file).db fail</u></summary>

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #17: Duplicate NAND backup</u></summary>

The script has detected that the Nintendo 3DS folder is missing AND that you have already made a NAND backup before. If you intend to install homebrew applications, you should do the following:

1. Press (B) to cancel making another NAND backup
1. Hold (R) and press (Start) at the same time to power off your console
1. Copy the contents of `/gm9/backups/` to a safe location on your computer
1. Delete `/gm9/backups/` from your SD card
1. If you moved your Nintendo 3DS folder off of your SD card to get to this point, copy it back to your SD card
    + If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. 按下 “Home” 键来打开功能菜单
1. 选择 “Scripts...”
1. Select "finalize"
1. Follow the prompts in the script, answering any questions that you are asked 

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #18a/18b: MSET9 detected</u></summary>

You didn't remove MSET9 on the previous page. The script will attempt to remove MSET9 for you; follow the instructions given by the script.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Boot issues on consoles with custom firmware

The steps detailed here generally assume that your console has a modern custom firmware setup (boot9strap + Luma3DS 8.0 or greater). 如果你的主机还在用旧版的自制固件（例如基于 arm9loaderhax 或 menuhax 的东西），则你应该在继续操作前先升级自制固件。
{: .notice--info}

### Power/notification light indicators

{% capture compat %}
<summary><u>My console powers off when I try to turn it on, and/or the notification LED shows a color on boot</u></summary>

这说明你放的 `boot.firm` 文件有问题。 如果你的主机正在使用 [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4) 版，那么你的主机在这种情况下开机后，通知灯就会亮起某种特定的颜色，然后关机。 具体亮起的颜色可用来判断你内存卡或主机内存中的 `boot.firm` 的问题。 On older versions of boot9strap, the blue light will power off almost immediately when trying to turn on the console.

如果通知灯亮起：

+ **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
+ **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. 主机内存中可以找到 `boot.firm` 文件，但是文件已损坏。
+ **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

你可以通过下载 [最新版本的 Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)，然后解压，将 `boot.firm` 复制到 SD 卡的根目录。 如果 `boot.firm` 始终被主机判定为损坏，则你可能需要使用一个工具来测试一下你的 SD 卡（[Windows](h2testw-(windows))、[Linux](f3-(linux))、[macOS](f3xswift-(mac))） 另外，最好不要使用 WinRAR 解压文件，解压的文件给 3DS 使用可能会出问题。

If you hear a "popping sound", potentially accompanied with the backlight turning on for a split second, there is a hardware issue with your console (such as a disconnected backlight cable). You may be able to get your console to boot by holding it at certain angles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>My console gets stuck on a black screen with blue power light staying on</u></summary>

你可以把下面所列出的方法都试试，此处将方法从最省时到最耗时的顺序排列。

1. Power off your console, remove the SD card, re-insert it, then power on your console.
1. Power off your console, eject the game cartridge if inserted, power on your console, then wait up to ten minutes. If your console boots within ten minutes, the issue has been fixed and is unlikely to reoccur
1. 将 SD 卡上的 `Nintendo 3DS` 文件夹重命名为 `Nintendo 3DS_BACKUP`，然后尝试启动主机。 If your console successfully boots, there is some issue within your `Nintendo 3DS` folder. 尝试清理主菜单的外部存储文件：
    + 进入到 `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
    + 删除对应你的 3DS 区域的文件夹：
        + **欧版**: `00000098`
        + **日版**: `00000082`
        + **美版**: `000008f`
        + **中国版（神游版）**: `000000A1`
        + **韩版**: `000000A9`
        + **台湾版**: `000000B1`
1. 尝试启动到恢复模式并升级系统：
    + Power off your console
    + 按住 “L” + “R” + “↑” + "A" 四个键
    + Power on your console
    + If you were successful, the console will boot to an "update your system" screen
1. 尝试做 [CTRTransfer](trtransfer) 
1. 如需援助，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)并使用英文求助。（请注意，如果你身处中国大陆，访问 Discord 可能需要科学上网），你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup) 寻求帮助，群号为 942052497。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### Error message on boot

{% capture compat %}
<summary><u>"An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"</u></summary>

你主机的 Luma3DS 版本已过时。 下载最新版本的 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) 并将 `boot.firm` 放在你 SD 卡的根目录中，如有存在相同文件请替换。 请不要用 WinRAR 解压 ZIP 文件，我们目前已知这会导致与 3DS 有关的文件出错。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."</u></summary>
There are a number of reasons as to why this could be happening. In any case, this error can usually be fixed by following the [CTRTransfer](ctrtransfer) guide.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"An error has occurred. Hold down the POWER button to turn off the power..."</u></summary>

ARM11 异常处理器已被禁用，或主机未安装自制固件。 尝试启用 ARM11 异常处理器：
    + Power off your console
    + 按住 “Select” 键
    + Power on your console, while still holding (Select)
    + 如果 “ARM11 exception handlers disabled” 已被勾选，则请取消勾选它
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>HOME Menu is missing installed applications</u></summary>

This could be caused by various reasons, but most likely because your SD card is not being read by the system.
You can check if your SD is being read by holding SELECT on boot and checking the yellow text on the bottom screen; if it says "Booted from CTRNAND via B9S", then your console is booting from the internal memory and not from the SD card.
If this is the case, attempt the steps below, which are listed from easiest to hardest:
1. Power off your console, remove the SD card, re-insert it, then power on your console
1. Power off your console, remove the SD card, insert it on your computer, download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extract `boot.firm` from the `Luma3DS.zip` and place it on the root of your SD card (replacing any existing file)
1. Power off your console, remove the SD card, insert it on your computer and reformat your SD card according to your computer's operating system: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)) *(this will wipe your SD card data)*
1. Test your SD card for errors by following the guide according to your computer's operating system: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)). If your SD card is marked as faulty, then you will have to replace your SD card
1. Your SD card slot may be broken. Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Blue "BOOTROM ERROR" screen</u></summary>

Your console is likely hard-bricked. You will need to buy an ntrboot flashcart to reinstall boot9strap in order to attempt to fix your console. 这也可能是无法修复的硬件问题。 无论如何，请先加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp) 并说英文求助。（请注意，如果你身处中国大陆，访问 Discord 可能需要科学上网），你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。
    + 还有可能有人设了一个看上去就像变砖了的开机画面。 Try leaving your console powered on, waiting on the blue screen, for five minutes.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Some other error</u></summary>

请对报错拍照，然后加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)并说英文以获取援助。（请注意，如果你身处中国大陆，访问 Discord 可能需要科学上网），你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Software issues on consoles with custom firmware

{% capture compat %}
<summary><u>DSi / DS functionality is broken or has been replaced with Flipnote Studio</u></summary>

1. 下载最新版本的 [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) （下载 `.3dsx` 文件）
1. 将主机关机
1. 检查 SD 卡的根目录是否存在一个名为 `3ds` 的文件夹，如果没有则手动新建一个
1. 复制 `TWLFix-CFW.3dsx` 到你内存卡的 `/3ds/` 文件夹
1. Reinsert your SD card into your console
1. 启动 Homebrew Launcher
1. 在自制程序列表中找到 TWLFix-CFW
1. 按下 “A” 键来卸载损坏的 TWL 程序
1. Press (Start) to reboot the console
1. Update your console by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
    + 更新程序将检查到你主机基本的 TWL 程序被卸载，然后它将重新安装它们
1. Once the update is complete, tap "OK" to reboot the console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>GBA Virtual Console and/or Safe Mode functionality is broken</u></summary>

Your console is running Luma3DS 6.6 or older, likely via arm9loaderhax. You should follow [A9LH to B9S](a9lh-to-b9s) to update your console to a modern custom firmware environment.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work</u></summary>

旧版 3DS / 2DS 在做完 CTRTransfer 或区域变更之后可能会出现这个问题。 Follow the instructions [here](https://3ds.hacks.guide/region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Exception screen when booting/loading an application</u></summary>

Look for your exception screen in [this page](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
If you weren't able to find your error or the instructions didn't work, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher</u></summary>

Your console likely still has menuhax67 installed. To uninstall menuhax67, download the latest release of [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (the menuhax `.zip`), then follow the ["Uninstall menuhax67" section](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## 其他问题

{% capture compat %}
<summary><u>Clear HOME Menu extdata</u></summary>

1. 将主机关机
1. 将你的 SD 卡插入到电脑
1. 打开你 SD 卡的 `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` 文件夹
1. 删除对应你的 3DS 区域的文件夹：
    + **欧版**: `00000098`
    + **日版**: `00000082`
    + **美版**: `000008f`
    + **中国版（神游版）**: `000000A1`
    + **韩版**: `000000A9`
    + **台湾版**: `000000B1`
1. Reinsert your SD card into your console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Clear HOME Menu theme data</u></summary>

1. 将主机关机
1. 将你的 SD 卡插入到电脑
1. 打开你 SD 卡的 `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` 文件夹
1. 删除对应你的 3DS 区域的文件夹：
    + **欧版**：`000002ce`
    + **日版**：`000002cc`
    + **美版**：`000002cd`
1. Reinsert your SD card into your console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Manually entering Homebrew Launcher</u></summary>

If you are missing the Homebrew Launcher application from your HOME Menu, you can follow these instructions to manually enter the Homebrew Launcher. (You will need [boot.3dsx and boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) on the root of your SD card.)

{% include_relative include/launch-hbl-dlp.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Turning off Parental Controls</u></summary>

You can disable the Parental Controls feature by going to System Settings -> Parental Controls and inserting the PIN, then pressing "Clear Settings", then "Delete" to remove it.
However, if you do not know the PIN and therefore cannot access the console's settings, you will need to disable it. In order to do this, you need to obtain your console's master key (mkey):
1. Go to [this website](https://mkey.eiphax.tech/)
1. Fill the following boxes with the information:
    + Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
    + System Date: The day and month your console's clock is set to
    + Inquiry Number: Can be obtained by pressing "Forgot PIN" then "I Forgot" in the Parental Controls screen
1. After you have obtained your mkey, press OK on the screen you have obtained your Inquiry Number, then input the master key
1. Press "Clear Settings", then "Delete" to remove all Parental Controls data
{% endcapture %}
<details>{{ compat | markdownify }}</details>
