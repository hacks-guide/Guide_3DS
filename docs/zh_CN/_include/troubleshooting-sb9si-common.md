### SigHaxed FIRM was not installed! Check lower screen for more info.

:::details MicroSD Card - init failed

Your SD card is most likely acting weird. Try reformatting your SD card ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). If this doesn't work, try another SD card.

:::

:::details SigHaxed FIRM - File not found

你忘记把 `boot9strap.firm` 和 `boot9strap.firm.sha` 放进 SD 卡根目录的 `boot9strap` 文件夹了，或是创建 `boot9strap` 文件夹的时候打错了名字。 下载最新版本的 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)，然后将 `boot9strap.firm` 和 `boot9strap.firm.sha` 放入 `boot9strap` 文件夹。

:::

:::details SigHaxed FIRM - invalid FIRM

你的 `boot9strap.firm` 和 `boot9strap.firm.sha` 文件有问题。 重新下载最新版本的 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)，然后将 `boot9strap.firm` 和 `boot9strap.firm.sha` 放入 `boot9strap` 文件夹。

:::

:::details Secret Sector - File not found

你忘记把 `secret_sector.bin` 放进 SD 卡根目录的 `boot9strap` 文件夹了，或是创建 `boot9strap` 文件夹的时候打错了名字。 使用 BT 客户端下载 secret_sector.bin，然后把它放到 SD 卡里的 `boot9strap` 文件夹中。

:::
