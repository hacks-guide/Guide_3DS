## Issues with SafeB9SInstaller

### Before opening SafeB9SInstaller

:::details Failed to open SafeB9SInstaller.bin

`SafeB9SInstaller.bin` 文件丢失或放置在了错误的位置。 下载最新版本的 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) 然后解压它，将 `SafeB9SInstaller.bin` 放在你 SD 卡的根目录中。 如果你下到的东西看不到 `.bin` 后缀，请不要重命名它。

:::

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

你忘记把 `secret_sector.bin` 放进 SD 卡根目录的 `boot9strap` 文件夹了，或是创建 `boot9strap` 文件夹的时候打错了名字。 使用 BT 客户端下载 [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655\&dn=secret_sector.bin\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce)，然后把它放到 SD 卡里的 `boot9strap` 文件夹中。

:::
