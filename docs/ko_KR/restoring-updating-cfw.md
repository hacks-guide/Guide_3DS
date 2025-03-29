# CFW 복구 / 업데이트

## 중요

이 문서는 boot9strap이 설치되어 있는 콘솔의 커스텀 펌웨어 소프트웨어 업데이트 또는 재설치를 준비하기 위한 문서입니다. 만약 SD 카드가 없어지거나 데이터가 손상 되어도 이 작업을 하면 됩니다.

이 작업은 FAT32로 포멧 된 SD 카드가 필요합니다. 이가 없으면 3DS가 인식을 못합니다. SD 카드가 포맷되어 있지 않는디면, 다음 페이지들 중 자신의 OS에 해당하는 페이지를 따라 주시기 바랍니다. [Windows](formatting-sd-\(windows\)), [Mac](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))

## 준비물

- 최신 버전의 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (Luma3DS `.zip` 파일)

## 진행 방법

1. SD 카드를 컴퓨터에 삽입해 주세요
2. Luma3DS `.zip`안에 있는 모든 파일들(`boot.firm`, `boot.3dsx`와 `config`)을 SD 카드의 루트에 복사하여 기존 파일들을 모두 덮어쓰기 합니다
    - SD 카드의 루트는 SD 카드를 열 때 보이는 디렉토리이고, Nintendo 3DS 폴더가 보이지만 그 안에 들어가 있지 않은 상태의 폴더입니다
3. SD 카드를 콘솔에 다시 삽입해 주세요
4. 콘솔의 전원을 켜 주세요
    - 만약 Luma3DS 설정 메뉴로 부팅되었다면, (Start)를 눌러서 저장/리부트해 주세요

::: info

최신 버전의 Luma3DS가 SD 카드의 내장 메모리로 설치되었습니다.

:::

::: tip

[마무리 단계](finalizing-setup)로 이동해 설치를 계속하거나 홈브류 앱들을 업데이트하세요 (예. FBI, Homebrew Launcher).

:::
