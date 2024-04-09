---
title: "常見問題 FAQ"
---
{% include toc title="條目內容" %}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

**Yes**, you can still install custom firmware on your 3DS, even after the closure of eShop.
{: .notice--info}

## 安裝前的常見問題

{% capture compat %}
<summary><u>我目前裝的系統為最新版本。 Is my console hackable without any external hardware/prerequisites?</u></summary>

**Yes!** New 3DS / New 3DS XL / New 2DS XL can use [super-skaterhax](installing-boot9strap-(super-skaterhax)), while 3DS / 3DS XL / 2DS can use [MSET9](installing-boot9strap-(mset9)).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>What consoles is this guide compatible with?</u></summary>

This guide is compatible with all retail 3DS-family devices (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). If your system version string is displayed as "0.0.0-0", then you may have a developer unit.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>破解我主機的風險有多大？</u></summary>

Bricks are now effectively impossible unless you are purposely trying to brick your console.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>我可以透過本教學跑超讚的自製程式跟模擬器嗎？</u></summary>

可以的! 本手冊將會教你安裝一些有用的自製程式，包括一個名為 [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest) 的自製程式商店。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>我能玩其他區的遊戲嗎？</u></summary>

可以的！Luma3DS 會自動跳過遊戲卡帶及安裝後的遊戲中的區碼檢查。 Some games may need to make use of Luma's [locale emulation feature](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) in order to work properly on out-of-region consoles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>如果安裝自製韌體，我會失去任何功能嗎？</u></summary>

不會的。 Consoles with custom firmware can download game updates and run physical cartridges as any other 3DS can.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I keep my NNID, saves, digital games (etc.)?</u></summary>

您的 NNID(如果您有 NNID 帳號的話) 不會受本手冊的影響。 Consoles with a region of KOR, CHN, or TWN do not have NNID functionality to begin with and are thus unaffected.

Following this guide alone should not result in data loss (saves, digital games, etc), but SD card corruption is always a possibility. You should make a backup of your SD card contents if you have important data.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>我的 3DS 會因為有自製韌體而被 ban 嗎？</u></summary>

Bans are no longer possible because Nintendo Network services have been shut down (for everyone).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>沒電腦也可以完成本教學嗎（例： 一台 Android 手機）？</u></summary>

可以的! 您只要能在可相容的 SD 卡上存取檔案就可以了！
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>我可以使用多大的 SD 卡？ </u></summary>

您將需要至少 1.5GB 的可用 SD 卡空間才能完全遵循本手冊。 雖然任天堂官方只有列出 3DS 可用的 SD 卡最大容量為 32GB，但是實際上只要能格式化成 FAT32 的記憶卡都可以使用。 目前已知較大的 SD 卡可能會造成 GBA 和自定義主題的相關問題，因此不建議使用大於128GB的SD卡。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>我之前有聽說過些付費工具像是 Gateway、Sky3DS、ntrboot、R4 等等的。 這是我需要的嗎？</u></summary>

不會的。 While a DS flashcart can be used to mod a 3DS using [ntrboot](ntrboot), there is now a free software method available for most consoles.

3DS-mode flashcarts like Gateway and Sky3DS are not recommended because they are obsolete and may carry brick risk.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>自製韌體和自製程式有什麼區別？</u></summary>

Definitionally speaking, custom firmware refers to a modification of the 3DS system software to do things that it normally isn't able to. Homebrew generally refers to software created outside of official sources (i.e. not distributed by eShop or cartridges).

Historically, the 3DS used to have userland homebrew access through older exploits like ninjhax, which people sometimes called just "homebrew". 授予使用者空間的系統權限允許您執行基本的自製程式和模擬器，但較難或甚至無法讓您修改遊戲或轉儲卡帶。 這些漏洞也不太穩定，自製程式經常直接死當並需要完全重啟主機。 自製韌體授予更高的系統存取權限，同時也比自製軟體的入口點更加穩定。

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## 安裝後的常見問題

{% capture compat %}
<summary><u>在自製韌體環境中安裝最新的官方更新是否安全？</u></summary>

如果你正在使用 Luma3DS，你的自製韌體加載器（boot9strap）**永遠不會**因為更新系統而被移除。 There have been updates in the past that have resulted in Luma3DS crashing on boot, so it is a good idea to wait a couple of hours to ensure that the latest update will not temporarily render the console unusable until Luma3DS is updated. System updates can be performed the same way as they are on an unmodified 3DS: through System Settings, Safe Mode, or the update prompt when the update is automatically downloaded.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I upgrade my SD card?</u></summary>

Copy and paste your SD card contents to a new SD card formatted as FAT32. For 128GB cards, an allocation size of 65536 is recommended. 目前已知較大的 SD 卡可能會造成 GBA 和自定義主題的相關問題，因此不建議使用大於128GB的SD卡。
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I system transfer with CFW?</u></summary>

Yes, system transfers can be performed through the official System Transfer function to other consoles with CFW (inconsistencies may occur if the target console is unmodified). Tickets for illegitimate titles (homebrew) will not transfer, but the titles can be made to reappear with [faketik](https://github.com/ihaveamac/faketik/releases/latest). Make sure that you do not perform a wireless transfer, as this will delete illegitimate titles. CFW will remain on both consoles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I change the system language of a Japanese 3DS?</u></summary>

The only way to change the system language of a Japanese 3DS to a language other than Japanese is to perform a [region change](region-changing). Note that this is very likely to break the Nintendo eShop on your console, which means you will be unable to update your games whether they are in-region or out-of-region.
 {% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I update homebrew applications?</u></summary>

It depends on the format of the homebrew application. Generally speaking:

* **CIA 格式**的自製程式：只需要直接安裝更新版本的 CIA 即可，通常舊的會被直接替換。 如果舊的 CIA 沒有被替換掉你也可直接去資料管理 (Data Management) 中刪除舊版的程式，就像你刪其他程式或遊戲一樣。
**3DSX 格式**的自製程式：替換 `/3ds/` 資料夾內的 3DSX 檔案即可。 If the homebrew application includes additional assets, you may need to place that folder somewhere else. Refer to the documentation of the homebrew application.
* For updating Luma3DS, see [this page](restoring-updating-cfw). For updating GodMode9, see [this page](godmode9-usage#updating-godmode9).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I update my games?</u></summary>

You can continue to download game updates from the Nintendo eShop, even though it has now shut down.

If the game is not from the same region as the console, you will need to [dump the updates](dumping-titles-and-game-cartridges) from a 3DS that has the updates installed. The Nintendo eShop only contains updates for the console's region (for example, a Japanese 3DS will only have updates for Japanese games).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>救命！ Something bad happened and my 3DS won't boot to HOME Menu...</u></summary>

Please look at the [troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **Uninstalling CFW when your console is in an unbootable state is not recommended, as it is very likely to lead to a brick**.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## menuhax / A9LH / Gateway FAQ

{% capture compat %}
<summary><u>I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?</u></summary>

It is recommended that you upgrade your setup to a modern, boot9strap-based one. Follow the [Checking for CFW](checking-for-cfw) guide to see how to upgrade your setup.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>My setup works for me. Why should I upgrade it?</u></summary>

The vast majority of modern homebrew (such as Checkpoint and BootNTR Selector) have only been tested on modern, boot9strap-based setups and may not work entirely (or at all) on older setups based on menuhax, A9LH, or Gateway. In addition, depending on your setup, you may be unable to safely update to the latest firmware. Modern, boot9strap-based setups allow for a greater level of system access than previous hacks, including the ability to dump your console's bootrom.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Will I lose anything if I upgrade my setup?</u></summary>

Your old setup (including your EmuNAND, if you have one) can usually be directly migrated to boot9strap with no data loss. If you have data that is particularly important to you, it would be a good idea to make a decrypted backup of your save data before upgrading your setup with a tool like [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I move saves from an existing Gateway setup to a more modern setup?</u></summary>

**A:** 請見[此帖子](https://gbatemp.net/threads/425743/)。
{% endcapture %}
<details>{{ compat | markdownify }}</details>
