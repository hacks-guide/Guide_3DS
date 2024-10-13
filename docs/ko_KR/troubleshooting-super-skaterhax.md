# 문제 해결 (super-skaterhax)

이 페이지는 "boot9strap 설치 (super-skaterhax)" 페이지에서 흔히 일어나는 문제에 관한 해결책을 기재합니다. 만약 이 페이지의 해결책만으로 문제를 해결할 수 없다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 들어가서 당신의 문제와 시도한 해결책을 설명해 주세요.

::: warning

These instructions are only valid for the "Installing boot9strap (super-skaterhax)" page. If you are using **anything other than** a **New 3DS** on version **11.15.0 through 11.17.0**, you should follow [troubleshooting instructions for Installing boot9strap (SSLoth-Browser)](troubleshooting-ssloth-browser) instead.

:::

## Issues with super-skaterhax

:::details "에러가 발생했습니다. 현재 사용 중인 소프트웨어에 데이터를 저장한 후 시스템을 다시 시작합니다."

If no colors flash after pressing "GO GO!":

- Ensure that you have set your system date and [region](/images/screenshots/skater/skater-lang.png) correctly
- Ensure that no other browser tabs are open, then restart the browser and try the exploit again

If the screen flashes colors then freezes/crashes:

- Ensure that you have the correct copy of `arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin` for your console's version and region
- 브라우저 데이터 삭제를 시도해 보세요:
  1. 브라우저를 실행하고 브라우저 설정을 실행해 주세요
  2. 아래쪽으로 스크롤하여 "세이브 데이터 리셋"을 선택합니다("데이터 초기화" 또는 "모든 저장 데이터 지우기" 라고도 함).
  3. 익스플로잇을 다시 시도해 주세요
- 시스템 언어를 현재 언어가 아닌 다른 언어로 변경해 보세요

:::

:::: details "An error has occurred. 본체의 전원 버튼을 길게 눌러 전원을 끈 후..." (black screen with text)

`arm11code.bin` 파일이 없거나 잘못 들어갔습니다. [최신 버전의 super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) 를 지역과 버전에 맞춰 복사해 SD카드 안의 그 어느 폴더도 아닌 가장 최상단에 넣었는지를 확인해 주세요.

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details "GO! GO!" 선택 시 "An exception occurred" 또는 "DLL_HEAP_INFORMATION" 오류 화면이 표시됩니다

이미 커스텀 펌웨어가 설치되어 있을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

[boot9strap 설치 (super-skaterhax)](installing-boot9strap-\(super-skaterhax\))로 돌아갑니다

:::

<!--@include: ./_include/troubleshooting-return.md -->
