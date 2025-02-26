# 지역 변경

## 중요

이 페이지는 콘솔의 지역을 변경하는 방법을 안내하는 부가 섹션입니다. 이 작업은 바꾸고자 하는 지역의 11.15.0 CTRTransfer 이미지를 설치합니다. 이미지 설치 후, 콘솔을 최신 펌웨어 버전(11.17.0)으로 업데이트할 수 있습니다.

Luma3DS가 지역 외 게임들과 [타이틀별 지역 에뮬레이션](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features)을 지원하기 때문에, 지역 변경은 거의 불필요하다는 점을 참고해 주시기 바랍니다. 또한, 다른 지역의 NDS게임을 실행하는 것 또한 [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases)에 의해 지원됩니다. 이 작업은 원하는 언어가 시스템 UI에 제공되지 않을 시에만 하는 것을 권장합니다.

::: info

이 페이지에서는 이미 Luma3DS와 boot9strap이 설치되어 있는 것으로 가정합니다. 이 웹사이트를 끝까지 진행했다면 (마무리 단계), Luma3DS와 boot9strap이 설치되어 있는 것입니다.

:::

::: warning

이 과정에서, 콘솔의 본체 설정이 초기화 될 겁니다. 이것은 사용자 이름, 국가, 언어 등을 포함합니다. **설치 되있는 게임 및 저장 데이터는 유지될 것이니, 걱정 안하셔도 됩니다.**

:::

::: danger

콘솔의 지역을 바꾸게 된다면:

- (만약 있다면) Nintendo 네트워크 ID를 이용할 수 없게 됩니다. NNID들은 작성된 지역에서만 사용할 수 있습니다.
- 이전에 [eShop 계정을 지우더라도 (영어)](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account), eShop에 접속하지 못할 수 있습니다. 몇몇 타이틀들은, 계정 삭제 후도 3DS 링크를 유지하려는 경향이 있어서입니다 (특히 New 3DS에서).
  - e숍에서 더 이상 구매할 수 없지만 게임 업데이트는 계속 제공되기 때문에 여전히 관련이 있습니다. 업데이트로 추가 컨텐츠나 버그 수정을 받을 수 있습니다.
  - 이 로직은 데이터 이사를 할 때에도 적용됩니다. 즉, USA 3DS로부터 JPN에서 USA로 지역 변경한 3DS로의 데이터 이사는 불가합니다.
  - 포켓몬 뱅크를 사용하려 할 때도 역시 e숍 접근이 가능해야 합니다.
  - 따라서, 데이터 이사와 게임 업데이트는 여전히 지역 제한이 걸려 있습니다 (예: 일본 eShop에서는 일본 게임 업데이트만 가능합니다).
- **콘솔을 벽돌로 하는 것을 감수하지 않고선 커스텀 펌웨어를 지울 수 없습니다!** 만약 미래에 커스텀 펌웨어를 지우려고 생각한다면, **반드시** 지역 변경을 하기 전의 NAND 백업을 복원하고 나서 해야 합니다.

:::

## 준비물

- 최신 버전의 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (GodMode9 `.zip` 파일)
- 최신 버전의 [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (직접 다운로드)
- 최신 버전의 [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(`.3dsx` 파일)_
- 최신 버전의 [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (우클릭 후 "링크를 다른 이름으로 저장..."을 선택)
- [qBittorrent](https://www.qbittorrent.org/download.php) 또는 [Deluge](http://dev.deluge-torrent.org/wiki/Download) 등의 토렌트 클라이언트
  - If you already have a torrent client, you do not need to download a new one
- 변경하고 싶은 지역의 종류에 맞는 11.15.0 CTRTransfer 이미지 (예: New 3DS를 가지고 있고 지역을 미국으로 변경하려면 "New 3DS or 3DS - USA"를 다운로드)

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

콘솔의 지역이 변경되었습니다!

:::
