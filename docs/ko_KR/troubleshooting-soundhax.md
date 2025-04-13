---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-frankenfirm-link.js
  - - script
    - src: /assets/js/link-common.js
---

# 문제 해결 (Soundhax)

이 페이지는 1.0.0에서 11.3.0 버전 사이에 쓰이는 방법인 "boot9strap 설치 (Soundhax)" 페이지의 주요 해결 방법을 다루고 있습니다. 만약 이 페이지의 해결책만으로 문제를 해결할 수 없다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 들어가서 당신의 문제와 시도한 해결책을 설명해 주세요.

## Soundhax의 주요 문제

:::details Soundhax를 실행하면 빨간색/보라색/분홍색 혹은 하얀색 화면이 표시됩니다

콘솔이 시스템 버전 9.4.0 ~ 9.6.0이라면, universal-otherapp의 구 버전에서 발생하는 오류가 발생했을 가능성이 큽니다. 여기에서 최신 버전으로 다운로드해주세요. [여기](https://github.com/TuxSH/universal-otherapp/releases/latest)에서 최신 버전으로 다운로드해주세요.

펌웨어 버전이 이게 아니라면, 이미 커펌이 설치되었을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

:::details "에러가 발생하여 소프트웨어를 종료합니다..." (하얀 메시지 창)

`otherapp.bin` 파일에 문제가 있습니다. (없거나, 잘못 들어갔거나, 혹은 잘못된 파일) 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)을 다시 내려받아 SD 카드의 최상위 디렉토리에 복사해주세요.

콘솔의 지역이나 버전에 맞지 않는 Soundhax 파일이 사용되었을 수도 있습니다. 콘솔의 세부 정보가 맞는지 확인해고 [여기](https://soundhax.com)에서 Soundhax 파일을 다시 받은 후, 기존 파일을 대체하여 SD 카드의 루트에 넣으세요.

여전히 문제가 해결되지 않고, 구형 3DS/구형 3DS XL/구형 2DS를 사용 중이라면 카트리지 업데이트와 관련된 문제가 발생된 것일 수 있습니다. 시스템 버전을 다시 한 번 살펴보세요. 만약 문자 앞의 번호가 4 이하라면 (예. 11.3.4-**4**U), SD 카드 루트에 있는 Soundhax 파일을 [여기](http://soundhax.686178.xyz/frankenfirm.html?crash)의 파일로 교체해 주세요.

모든 방법을 시도해도 문제가 해결되지 않는다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 오셔서 도움을 요청하세요.

:::

:::details "재생할 수 없습니다"

콘솔의 지역이나 버전에 맞지 않는 Soundhax 파일을 이용했습니다. 콘솔의 세부 정보가 맞는지 확인해고 [여기](https://soundhax.com)에서 Soundhax 파일을 다시 받은 후, 기존 파일을 대체하여 SD 카드의 루트에 넣으세요.

여전히 문제가 해결되지 않고, 구형 3DS/구형 3DS XL/구형 2DS를 사용 중이라면 카트리지 업데이트와 관련된 문제가 발생된 것일 수 있습니다. 시스템 버전을 다시 한 번 살펴보세요. 만약 문자 앞의 번호가 3 이하라면 (예. 11.3.0-**0**U), SD 카드 루트에 있는 Soundhax 파일을 [여기](http://soundhax.686178.xyz/frankenfirm.html?unplayable)의 파일로 교체해 주세요.

모든 방법을 시도해도 문제가 해결되지 않는다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 오셔서 도움을 요청하세요.

:::

:::details Failed to mount the SD card!

만약 해결되지 않는다면, 다른 SD 카드를 이용해 보세요.

:::

## SafeB9SInstaller와의 문제

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

[boot9strap 설치 (Soundhax)](installing-boot9strap-\(soundhax\))로 돌아갑니다

:::

<!--@include: ./_include/troubleshooting-return.md -->
