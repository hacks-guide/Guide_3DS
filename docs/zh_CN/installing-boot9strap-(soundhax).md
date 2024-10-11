# Installing boot9strap (Soundhax)

:::details Technical Details (optional)

关于本页所使用漏洞的技术细节，请见[这里（Soundhax）](https://github.com/nedwill/soundhax) 和[这里（universal-otherapp）](https://github.com/TuxSH/universal-otherapp)。

:::

## Compatibility Notes

Soundhax（和 universal-otherapp 一起使用时）与所有区域 1.0.0 至 11.3.0 系统版本的主机兼容。

## What You Need

- The latest release of [Soundhax](http://soundhax.com) _(for your region, console, and version)_
  - If Soundhax appears in your browser as an unplayable video, press Ctrl+S or Cmd+S to save it to your computer
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

本节中，你将会复制一些触发 Soundhax 和 universal-otherapp 所需要的文件。

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. 复制 Soundhax 的 `.m4a` 文件到你的 SD 卡根目录下
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
4. 复制 `otherapp.bin` 到你的 SD 卡根目录
5. Copy everything from the Luma3DS `.zip` to the root of your SD card
6. 在 SD 卡根目录创建一个名为 `boot9strap` 的文件夹
7. 从boot9strap `.zip` 文件中复制 `boot9strap.firm` 和 `boot9strap.firm.sha` 到你SD卡的 `/boot9strap/` 文件夹中
8. 从 SafeB9SInstaller `.zip` 压缩包中复制 `SafeB9SInstaller.bin` 到 SD 卡根目录下
9. Reinsert your SD card into your console
10. Power on your console

::: info

![](/images/screenshots/soundhax/soundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - Launching SafeB9SInstaller

本节中，你将通过 Nintendo 3DS 音乐程序启动 Soundhax，它将使用 universal-otherapp 启动 boot9strap（自制固件）安装程序。

1. 启动 “任天堂 3DS 音乐（Nintendo 3DS Sound）”

   ::: info

   ![](/images/screenshots/soundhax/soundhax-welcome.png)

   :::

2. 如果你从未启动过 “任天堂 3DS 音乐（Nintendo 3DS Sound）”，在启动后收到了小鸟的对话框提示，那么请完成所有的对话，然后关闭此软件再重新打开
   - In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done

3. 进入 `/sdcard`，然后播放“< 3 nedwill 2016”

   - This may take many (up to 10) tries
   - If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
   - If it freezes, force the console to power off by holding the power button, then try again
   - If you get a different error, [follow this troubleshooting guide](troubleshooting-soundhax)

   ::: info

   ![](/images/screenshots/soundhax/soundhax-launch.png)

   :::

4. 如果一切成功的话，你将自动进入 SafeB9SInstaller

### Section III - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-soundhax)
2. Once it is complete, press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
