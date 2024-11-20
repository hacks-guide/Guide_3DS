---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Installing boot9strap (Soundhax)

:::details Technical Details (optional)

For technical details on the exploits that you will be using on this page, see [here](https://github.com/nedwill/soundhax) (Soundhax) and [here](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Compatibility Notes

Soundhax (universal-otherappと組み合わせた場合) は、すべてのリージョンでバージョン 1.0.0 から 11.3.0 と互換性があります。

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
2. パソコンにSDカードを入れます
3. SoundHaxの `.m4a` ファイルをSDカード直下にコピーします
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
4. SDカードのルートに`otherapp.bin`をコピーします
5. Copy everything from the Luma3DS `.zip` to the root of your SD card
6. `boot9strap`という名前のフォルダをSDカードのルート上に作成します。
7. `boot9strap.firm`と`boot9strap.firm.sha`を boot9strap `.zip` ファイルから解凍し、SD カードのboot9strapフォルダにコピーします。
8. SafeB9SInstaller `.zip` から`SafeB9SInstaller.bin`をSDカードのルートへコピーします
9. Reinsert your SD card into your console
10. Power on your console

::: info

![](/images/screenshots/soundhax/soundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - Launching SafeB9SInstaller

In this section, you will launch Soundhax through the Nintendo 3DS Sound app, which will use universal-otherapp to launch the boot9strap (custom firmware) installer.

1. ニンテンドー3DSサウンドを起動します

   ::: info

   ![](/images/screenshots/soundhax/soundhax-welcome.png)

   :::

2. 以前にNintendo 3DS Soundを開けたことがない場合は、鳥のアイコンからそれを使用する方法についてのヒントを入手し、鳥のヒントをすべて確認してから、通常通りにアプリを閉じて再起動してください
   - In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done

3. `/SDCARD`に行って、「<3 nedwill 2016」を再生します

   - This may take many (up to 10) tries
   - If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
   - If it freezes, force the console to power off by holding the power button, then try again
   - If you get a different error, [follow this troubleshooting guide](troubleshooting-soundhax)

   ::: info

   ![](/images/screenshots/soundhax/soundhax-launch.png)

   :::

4. Exploitが成功すれば、SafeB9SInstallerが起動されます。

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
