# Installing boot9strap (Soundhax)

:::details Technical Details (optional)

For technical details on the exploits that you will be using on this page, see [here](https://github.com/nedwill/soundhax) (Soundhax) and [here](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Compatibility Notes

Soundhax (與 universal-otherapp 使用時) 可與韌體版本 1.0.0 至 11.3.0 的歐、日、韓、美版主機相容。

## What You Need

- The latest release of [Soundhax](http://soundhax.com) _(for your region, console, and version)_
  - If Soundhax appears in your browser as an unplayable video, press Ctrl+S or Cmd+S to save it to your computer
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

In this section, you will copy the files needed to trigger both Soundhax and universal-otherapp.

1. Power off your console
2. 將 SD 卡插入至電腦中
3. 複製 Soundhax `.m4a` 至 SD 卡的根目錄底下
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
4. 複製 `otherapp.bin` 至 SD 卡根目錄底下
5. Copy everything from the Luma3DS `.zip` to the root of your SD card
6. 在 SD 卡的根目錄底下建立一個新的資料夾 `boot9strap`
7. 解壓 boot9strap `.zip` 的 `boot9strap.firm` 及 `boot9strap.firm.sha` 檔案至 SD 卡的 `/boot9strap/` 資料夾中
8. 將 SafeB9SInstaller `.zip` 中的 `SafeB9SInstaller.bin` 複製到 SD 卡的根目錄
9. Reinsert your SD card into your console
10. Power on your console

::: info

![](/images/screenshots/uosoundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - Launching SafeB9SInstaller

In this section, you will launch Soundhax through the Nintendo 3DS Sound app, which will use universal-otherapp to launch the boot9strap (custom firmware) installer.

1. 啟動『任天堂 3DS 音樂(Nintendo 3DS Sound)』程式

   ::: info

   ![](/images/screenshots/soundhax-welcome.png)

   :::

2. 如果您從未開啟過音樂撥放器或曾未聽過撥放器內鳥的提示，請一一略過鳥的提示，並關閉及重啟本程式
   - In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done

3. 選擇『/SDCARD』，並播放『<3 nedwill 2016』

   - This may take many (up to 10) tries
   - If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
   - If it freezes, force the console to power off by holding the power button, then try again
   - If you get a different error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-soundhax)

   ::: info

   ![](/images/screenshots/soundhax-launch.png)

   :::

4. 如果一切成功的話，您將自動進入 SafeB9SInstaller

### Section III - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Once it is complete, press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
