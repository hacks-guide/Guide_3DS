# Installing boot9strap (SSLoth-Browser)

:::details Technical Details (optional)

为了通过浏览器进行破解，我们需要通过一些手段来绕过系统版本检查，因为它会阻止版本非为最新的系统使用浏览器。

这里有一个公共的代理服务器可供使用，它将会利用 SSLoth 漏洞来绕过版本检查。

一旦更新检查被成功绕过，我们就可以通过一个漏洞页面来完成接下来的任务。

关于本页所使用漏洞的技术细节，请见[这里（SSLoth）](https://github.com/MrNbaYoh/3ds-ssloth) 和[这里（universal-otherapp）](https://github.com/TuxSH/universal-otherapp)。

:::

## Compatibility Notes

SSLoth 允许目前系统版本在 11.13.0 及其以下的主机绕过浏览器版本检查，然后就可以使用到利用 universal-otherapp 的方法了，如 new-browserhax 或 old-browserhax（兼容 11.4.0 至 11.13.0 的所有区域主机）

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

本节中，你将会复制一些触发 browserhax 和 universal-otherapp 所需要的文件。

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. 复制 `otherapp.bin` 到你 SD 卡的根目录下，然后重命名为 `arm11code.bin`
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
   - If you do not see the `.bin` extension, do not add it to the end of the filename
4. Copy everything from the Luma3DS `.zip` to the root of your SD card
5. 在 SD 卡根目录创建一个名为 `boot9strap` 的文件夹
6. 从boot9strap `.zip` 文件中复制 `boot9strap.firm` 和 `boot9strap.firm.sha` 到你SD卡的 `/boot9strap/` 文件夹中
7. 从 SafeB9SInstaller `.zip` 压缩包中复制 `SafeB9SInstaller.bin` 到 SD 卡根目录下
8. Reinsert your SD card into your console
9. Power on your console

### Section II - SSLoth

本节中，你将更改主机的网络连接设置，设置一个代理服务器来绕过浏览器的版本检查，允许浏览器在系统没有更新至最新的情况下运行。 这将让你能够在下一步中访问浏览器漏洞页面。

<!--@include: ./_include/addproxy.md -->

1. 点两次 “返回”，然后点“关闭”来返回主菜单。

### Section III - Launching SafeB9SInstaller

本节中，你将启动浏览器破解漏洞，它将使用 universal-otherapp 启动 boot9strap（自制固件）安装程序。

1. On the HOME Menu, press the Left and Right shoulder buttons at the same time to open the camera
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/nbhax/`)
2. 扫描[这个二维码（点击这里查看）](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L)
   - If you get a crash or an error code, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)
   - If you get a security certificate warning, press (A) to allow the connection
3. 点击“PROCEED TO HAXX”
4. 如果一切成功的话，你将自动进入 SafeB9SInstaller
   - If you get an error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)

### Section IV - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Once it is complete, press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
