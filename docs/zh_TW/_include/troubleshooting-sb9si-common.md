### SigHaxed FIRM was not installed! Check lower screen for more info.

:::details MicroSD Card - init failed

Your SD card is most likely acting weird. Try reformatting your SD card ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). If this doesn't work, try another SD card.

:::

:::details SigHaxed FIRM - File not found

你忘記把 `boot9strap.firm` 和 `boot9strap.firm.sha` 放進 SD 卡根目錄的 `boot9strap` 資料夾，或建立 `boot9strap` 資料夾的時候打錯了名字。 Download the latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), and place `boot9strap.firm` and `boot9strap.firm.sha` in the `boot9strap` folder.

:::

:::details SigHaxed FIRM - invalid FIRM

你的 `boot9strap.firm` 和 `boot9strap.firm.sha` 檔案有問題。 Re-download the latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), and place `boot9strap.firm` and `boot9strap.firm.sha` in the `boot9strap` folder.

:::

:::details Secret Sector - File not found

你忘記把 `secret_sector.bin` 放進 SD 卡根目錄的 `boot9strap` 資料夾了，或是建立 `boot9strap` 資料夾的時候打錯了名字。 用 BT 下載 secret_sector.bin，並將其放至 `boot9strap` 資料夾中。

:::
