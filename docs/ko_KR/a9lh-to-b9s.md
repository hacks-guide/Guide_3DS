# A9LH를 B9S로 업데이트

## 중요

이 섹션은 arm9loaderhax 사용자들이 boot9strap으로 업데이트하는 것을 돕기 위한 가이드입니다.

이제부터 모든 Luma3DS의 릴리스는 boot9strap과 sighax에만 대응하는 `.firm`형식으로 업데이트 됩니다. 그것은 곧 Luma3DS를 업데이트 하려면, 이 페이지를 통해 업데이트를 해야 한다는 것과 같습니다,

## 준비물

::: warning

이 페이지의 [마그넷](https://wikipedia.org/wiki/Magnet_URI_scheme)링크를 사용하려면
[qBittorrent](https://www.qbittorrent.org/download.php) 또는 [Deluge](http://dev.deluge-torrent.org/wiki/Download)와 같은 토렌트 클라이언트가 필요합니다.

:::

::: info

추가로, `secret_sector.bin`은 arm9loaderhax exploit을 되돌리기 위해 New 3DS에서만 사용됩니다. 그래서 기존 콘솔들의 boot9strap 설치에서는 필요하지 않습니다. 만약 New 3DS를 소유하고 계시지 않으시면 `secret_sector.bin`은 필요 하지 않습니다.

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> - **New 3DS 사용자 전용:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (마그넷 링크)
- 최신 버전의 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (Luma3DS `.zip` 파일)
- v7.0.5 버전의 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (직접 다운로드)
- 최신 버전의 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (직접 다운로드)
- 최신 버전의 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (직접 다운로드)

## 진행 방법

### 섹션 I - 준비 작업

::: info

모든 과정에서, SD 카드에 이미 존재하는 파일들은 모두 덮어쓰기 해주세요.

:::

1. 콘솔의 전원을 꺼 주세요

2. SD 카드를 컴퓨터에 삽입해 주세요

3. 최신 버전의 Luma3DS `.zip`안에 있는 모든 파일들을 SD 카드의 루트에 복사해 주세요
    - SD 카드의 루트는 SD 카드를 열 때 보이는 디렉토리이고, Nintendo 3DS 폴더가 보이지만 그 안에 들어가 있지 않은 상태의 폴더입니다

4. v7.0.5 버전의 Luma3DS `.zip` 파일에서 `arm9loaderhax.bin`을 SD 카드의 루트에 복사해 주세요

5. SafeB9SInstaller `.zip` 파일에서 `SafeB9SInstaller.bin`을 SD 카드에 있는`/luma/payloads/` 폴더에 복사해 주세요
    - `luma` 또는 `payloads` 폴더가 없다면, 만들어 주세요
    - SD 카드의 `/luma/payloads/` 폴더 속에 있는 모든 `.bin` 페이로드 (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.)는 boot9strap과 호환되는 Luma3DS와 호환되지 않기에, 폴더 속에 있는 모든 `.bin` 페이로드는 지워 주세요

6. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요

7. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요

8. **New 3DS 전용** SD 카드의 `/boot9strap/`폴더에 `secret_sector.bin`을 복사해 주세요

    ::: info

    ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

    :::

9. SD 카드를 콘솔에 다시 삽입해 주세요

### 섹션 II - boot9strap 설치하기

1. SafeB9SInstaller를 실행하도록 (Start) 버튼을 누른 상태로 부팅해 주세요
    - 만약 SafeB9SInstaller 대신 Luma 구성 화면이 나타난다면, (Start)를 누르고, 3DS를 끈 다음 다시 시도해 주세요
    - 만약 에러가 발생하면, 새로운 SD 카드로 시도하거나,  (기존 파일들은 먼저 백업한 후) 기존 SD 카드를 포멧해 보세요
2. 모든 안전 검사가 끝날 때까지 기다려 주세요
    - 만약 "OTP Crypto Fail" 에러를 보시면, <font-awesome-icon icon="fa-solid fa-magnet"/> - aeskeydb.bin 파일을 다운로드 한 후, 이 파일을 `/boot9strap` 폴더에 복사하고 다시 시도해 주세요
3. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
    - 아래 화면의 단계가 붉은 텍스트로 표시되고 키 콤보 입력을 요구하지 않는다면, [이 문제 해결 가이드](troubleshooting-a9lh-to-b9s)를 참고해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

___

::: tip

[마무리 단계](finalizing-setup) 로 계속합니다

:::
