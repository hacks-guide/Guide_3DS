# CTRTransfer

## 중요

이것은 콘솔에 11.15.0 CTRTransfer 이미지를 설치하는 부가 섹션입니다.

::: info

이 페이지에서는 이미 Luma3DS와 boot9strap이 설치되어 있는 것으로 가정합니다. 이 웹사이트를 끝까지 진행했다면 (마무리 단계), Luma3DS와 boot9strap이 설치되어 있는 것입니다.

:::

::: warning

이 과정에서, 콘솔의 본체 설정이 초기화 될 겁니다. 이것은 사용자 이름, 국가, 언어 등을 포함합니다. **설치 되있는 게임 및 저장 데이터는 유지될 것이니, 걱정 안하셔도 됩니다.**

:::

## 준비물

- 최신 버전의 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (GodMode9 `.zip` 파일)
- 최신 버전의 [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (직접 다운로드)
- 최신 버전의 [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(`.3dsx` 파일)_
- The latest release of [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (right click, save link as)
- [qBittorrent](https://www.qbittorrent.org/download.php) 또는 [Deluge](http://dev.deluge-torrent.org/wiki/Download) 등의 토렌트 클라이언트
  - If you already have a torrent client, you do not need to download a new one
- 콘솔과 지역에 맞는 11.15.0 CTRTransfer 이미지:

<!--@include: ./_include/ctrtransfer-images.md -->

## 진행 방법

### 섹션 I - 준비 작업

<!--@include: ./_include/ctrtransfer-prep.md -->

### 섹션 II - NAND 백업

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다

<!--@include: ./_include/nand-backup.md -->

### 섹션 III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### 섹션 IV - FBI 실행

<!--@include: ./_include/launch-hbl-dlp.md -->

### 섹션 V - 티켓 재설치

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### 섹션 VI - 로케일 관련 문제 해결

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

[마무리 단계](finalizing-setup) 로 계속합니다

:::
