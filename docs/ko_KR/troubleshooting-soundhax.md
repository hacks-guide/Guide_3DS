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

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (Soundhax)" page, which is used on system versions between 1.0.0 and 11.3.0. 만약 이 페이지의 해결책만으로 문제를 해결할 수 없다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 들어가서 당신의 문제와 시도한 해결책을 설명해 주세요.

## Issues with Soundhax

:::details Soundhax를 실행하면 빨간색/보라색/분홍색 혹은 하얀색 화면이 표시됩니다

콘솔이 시스템 버전 9.4.0 ~ 9.6.0이라면, universal-otherapp의 구 버전에서 발생하는 오류가 발생했을 가능성이 큽니다. 여기에서 최신 버전으로 다운로드해주세요. [여기](https://github.com/TuxSH/universal-otherapp/releases/latest)에서 최신 버전으로 다운로드해주세요.

펌웨어 버전이 이게 아니라면, 이미 커펌이 설치되었을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

:::details "에러가 발생하여 소프트웨어를 종료합니다..." (하얀 메시지 창)

`otherapp.bin` 파일에 문제가 있습니다. (없거나, 잘못 들어갔거나, 혹은 잘못된 파일) 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)을 다시 내려받아 SD 카드의 최상위 디렉토리에 복사해주세요.

If the above doesn't fix your issue, and you are using an Old 3DS / Old 3DS XL / Old 2DS, you may be encountering an issue involving cartridge updates. Take another look at the system version. If the last number is 4 or lower (e.g. 11.3.0-**4**U), replace the Soundhax file on the root of your SD card with the one from [here](http://soundhax.686178.xyz/frankenfirm.html?crash).

If none of these fix your issue, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details "재생할 수 없습니다"

You have the wrong Soundhax file for your console, region and version. Double-check that you entered all the info correctly into the [Soundhax website](https://soundhax.com/), redownload your Soundhax file, and replace it with the one on the root of your SD card.

If the above doesn't fix your issue, and you are using an Old 3DS / Old 3DS XL / Old 2DS, you may be encountering an issue involving cartridge updates. Take another look at the system version. If the last number is 3 or lower (e.g. 11.3.0-**0**U), replace the Soundhax file on the root of your SD card with the one from [here](http://soundhax.686178.xyz/frankenfirm.html?unplayable).

If none of these fix your issue, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

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
