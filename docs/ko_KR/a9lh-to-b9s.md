# A9LH to B9S

## Required Reading

이 섹션은 arm9loaderhax 사용자들이 boot9strap으로 업데이트하는 것을 돕기 위한 가이드입니다.

이제부터 모든 Luma3DS의 릴리스는 boot9strap과 sighax에만 대응하는 `.firm`형식으로 업데이트 됩니다. 그것은 곧 Luma3DS를 업데이트 하려면, 이 페이지를 통해 업데이트를 해야 한다는 것과 같습니다,

이 페이지에 있는 `.7z` 파일을 압축 해제하기 위해서는, [7-Zip](http://www.7-zip.org/) 또는 [The Unarchiver](https://theunarchiver.com/) 같은 압축 해제 프로그램이 필요합니다.

## What You Need

::: warning

이 페이지의 [마그넷](https://wikipedia.org/wiki/Magnet_URI_scheme)링크를 사용하려면
[qBittorrent](https://www.qbittorrent.org/download.php) 또는 [Deluge](http://dev.deluge-torrent.org/wiki/Download)와 같은 토렌트 클라이언트가 필요합니다.

:::

::: info

추가로, `secret_sector.bin`은 arm9loaderhax exploit을 되돌리기 위해 New 3DS에서만 사용됩니다. 그래서 기존 콘솔들의 boot9strap 설치에서는 필요하지 않습니다. 만약 New 3DS를 소유하고 계시지 않으시면 `secret_sector.bin`은 필요 하지 않습니다.

:::

- <font-awesome-icon icon="fa-solid fa-magnet" title="This is a magnet link. Use a torrent client to download the file."/> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655\&dn=secret_sector.bin\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)

## Instructions

### Section I - Prep Work

::: info

모든 과정에서, SD 카드에 이미 존재하는 파일들은 모두 덮어쓰기 해주세요.

:::

1. 콘솔의 전원을 꺼 주세요

2. SD 카드를 컴퓨터에 삽입해 주세요

3. Luma3DS `.zip`안에 있는 `boot.firm`과 `boot.3dsx`를 SD 카드의 루트에 복사해 주세요
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it

4. v7.0.5 버전의 Luma3DS `.7z` 파일에서 `arm9loaderhax.bin`을 SD 카드의 루트에 복사해 주세요

5. SafeB9SInstaller `.zip` 파일에서 `SafeB9SInstaller.bin`을 SD 카드에 있는`/luma/payloads/` 폴더에 복사해 주세요
   - If the `luma` or `payloads` folder doesn't exist, create them
   - Delete any other existing `.bin` payloads (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) in the `/luma/payloads/` folder on your SD card as they will not be compatible with boot9strap compatible Luma3DS versions

6. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요

7. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요

8. **New 3DS 전용** SD 카드의 `/boot9strap/`폴더에 `secret_sector.bin`을 복사해 주세요

   ::: info

   ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

   :::

9. SD 카드를 콘솔에 다시 삽입해 주세요

### Section II - Installing boot9strap

1. SafeB9SInstaller를 실행하도록 (Start) 버튼을 누른 상태로 부팅해 주세요
   - If you see the luma configuration screen instead of SafeB9SInstaller, simply press (Start), then shut down your 3DS and try again
   - If this gives you an error, try either using a new SD card or formatting your current SD card (backup existing files first)
2. 모든 안전 검사가 끝날 때까지 기다려 주세요
   - If you get an "OTP Crypto Fail" error, download <font-awesome-icon icon="fa-solid fa-magnet" title="This is a magnet link. Use a torrent client to download the file."/> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e\&dn=aeskeydb.bin\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
3. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
4. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요
5. 콘솔은 Luma3DS 구성 메뉴로 부팅되었을 겁니다
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. 이 설정들은 디버깅 또는 맞춤화의 유용합니다
   - For the purpose of this guide, these settings will be left on default settings
   - If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
6. (Start)를 눌러 저장하고 콘솔을 다시 시작해 주세요

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
