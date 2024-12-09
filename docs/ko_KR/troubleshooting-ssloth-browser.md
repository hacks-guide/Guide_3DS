# 문제 해결 (SSLoth-Browser)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (SSLoth-Browser)" page, which is used on system versions between 11.4.0 and 11.13.0. 만약 이 페이지의 해결책만으로 문제를 해결할 수 없다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 들어가서 당신의 문제와 시도한 해결책을 설명해 주세요.

::: warning

These instructions are only valid for the "Installing boot9strap (SSLoth-Browser)" page. If you are using a **New 3DS** on version **11.15.0 through 11.17.0**, you should follow [troubleshooting instructions for Installing boot9strap (super-skaterhax)](troubleshooting-super-skaterhax) instead.

:::

## SSLoth-Browser

:::details Browserhax를 실행하면 빨간색/보라색/분홍색 혹은 하얀색 화면이 표시됩니다

이미 커스텀 펌웨어가 설치되어 있을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

:::details "에러가 발생했습니다. 본체의 전원 버튼을 길게 눌러 전원을 끈 후..." (black screen with text)

`arm11code.bin` 파일이 없거나 잘못 들어갔습니다. 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)을 내려받아 `otherapp.bin` 파일을 SD 카드의 최상위 디렉토리에 복사하고, 이름을 `arm11code.bin`으로 변경해 주세요. `.bin` 확장자는 보이지 않는 이상 추가하지 말아 주세요.

:::

:::details "에러가 발생하여 소프트웨어를 종료합니다..." (하얀 메시지 창)

`arm11code.bin`에 문제가 있을 수 있습니다. 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)을 내려받아 `otherapp.bin` 파일을 SD 카드의 최상위 디렉토리에 복사하고, 이름을 `arm11code.bin`으로 변경해 주세요. `.bin` 확장자는 보이지 않는 이상 추가하지 말아 주세요.

또한 브라우저 세이브 데이터 재설정이 필요할 수도 있습니다.

1. 브라우저를 실행하고 브라우저 설정을 실행해 주세요
2. 아래쪽으로 스크롤하여 "세이브 데이터 리셋"을 선택합니다("데이터 초기화" 또는 "모든 저장 데이터 지우기" 라고도 함).
3. 익스플로잇을 다시 시도해 주세요

:::

:::details Browserhax QR 코드나 URL을 열면 브라우저가 꺼집니다

이러한 브라우저 기반의 취약점은 불안정하고 자주 종료됩니다. 그러나 종종 다음 단계를 수행하면 고쳐질 수 있습니다.

1. 브라우저를 실행하고 브라우저 설정을 실행해 주세요
2. 아래쪽으로 스크롤하여 "세이브 데이터 리셋"을 선택합니다("데이터 초기화" 또는 "모든 저장 데이터 지우기" 라고도 함).
3. 익스플로잇을 다시 시도해 주세요

:::

:::details 브라우저를 열면 시스템 업데이트 창이 표시됩니다

SSLoth 프록시 설정이 잘못 설정되었습니다. 페이지의 SSLoth 섹션을 다시 진행해주세요.

:::

:::details 브라우저를 열면 오류 032-0420이 표시됩니다

다음 과정을 순서대로 진행해주세요:

1. 콘솔에서 본체 설정을 열어 주세요
2. `인터넷 설정` -> `인터넷 접속 설정`으로 이동해 주세요
3. 네트워크 접속 경로을 클릭해, `설정 변경` -> `다음 페이지 (오른쪽 화살표)` -> `Proxy 설정`으로 이동해 주세요
4. "Proxy 설정"을 "아니요"로 설정해 주세요
5. OK하고 저장을 차례로 눌러주세요
6. 접속 테스트 안내문이 표시되면, `예`를 눌러 인터넷 접속 테스트를 진행해 주세요
   - 이 테스트가 성공적일 겁니다
7. "OK"을 눌러 진행해 주세요
8. "뒤로"을 두 번 누르고 "종료"를 눌러 HOME 메뉴로 돌아가 주세요
9. 인터넷 브라우저를 한 번 열어주세요
10. 시스템 업데이트에 관한 창이 표시되면, 'OK'을 눌러주세요
    - 실제로 시스템이 업데이트되지는 않습니다
11. [섹션 II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)로 돌아가 다시 진행해주세요

:::

:::details "Doing agbhax..."에서 화면이 멎습니다

`arm11code.bin`에 문제가 있을 수 있습니다. 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)을 다시 내려받아 SD 카드의 최상위 디렉토리에 복사하고, 이름을 `arm11code.bin`으로 변경해주세요. `.bin` 확장자는 보이지 않는 이상 추가하지 말아 주세요.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

[Nintendo Homebrew Discord 서버](https://discord.gg.MWxPgEp)에 오셔서 도움을 요청하세요.

:::

:::details Failed to mount the SD card!

데이터를 모두 백업하고 시스템별로 권장되는 프로그램을 이용해 SD카드를 FAT32로 다시 포맷해 주세요. ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))) MiniTool Partition Wizard나 HP formatting tool(HPUSBDisk)는 3DS용 SD 카드에 문제를 발생시킨다는 것이 알려져 있습니다.

만약 해결되지 않는다면, 다른 SD 카드를 이용해 보세요.

:::

## SafeB9SInstaller와의 문제

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

[boot9strap 설치 (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\))로 돌아갑니다

:::

<!--@include: ./_include/troubleshooting-return.md -->
