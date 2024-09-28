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

- You will not be able to use your NNID (if you have one). NNID들은 작성된 지역에서만 사용할 수 있습니다.
- You may not be able to access the eShop, even if you [delete your eShop account](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) beforehand. 몇몇 타이틀들은, 계정 삭제 후도 3DS 링크를 유지하려는 경향이 있어서입니다 (특히 New 3DS에서).
  - This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. 업데이트로 추가 컨텐츠나 버그 수정을 받을 수 있습니다.
  - This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
  - Pokémon Bank also requires working eShop access.
  - That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
- **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.

:::

## 준비물

- 최신 버전의 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (GodMode9 `.zip` 파일)
- 최신 버전의 [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (직접 다운로드)
- 최신 버전의 [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(`.3dsx` 파일)_
- A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - If you already have a torrent client, you do not need to download a new one
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)

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
