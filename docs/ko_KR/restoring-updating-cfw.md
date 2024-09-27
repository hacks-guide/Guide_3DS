# Restoring / Updating CFW

## Required Reading

이 문서는 boot9strap이 설치되어 있는 콘솔의 커스텀 펌웨어 소프트웨어 업데이트 또는 재설치를 준비하기 위한 문서입니다. 만약 SD 카드가 없어지거나 데이터가 손상 되어도 이 작업을 하면 됩니다.

이 작업은 FAT32로 포멧 된 SD 카드가 필요합니다. 이가 없으면 3DS가 인식을 못합니다. SD 카드가 포맷되어 있지 않는디면, 다음 페이지들 중 자신의 OS에 해당하는 페이지를 따라 주시기 바랍니다. [Windows](formatting-sd-\(windows\)), [Mac](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

1. SD 카드를 컴퓨터에 삽입해 주세요
2. Luma3DS `.zip`안에 있는 `boot.3dsx`과 `boot.firm`를 SD 카드의 루트에 복사해 주세요. 이미 존재하는 파일을 덮어쓰기 해 주세요
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. SD 카드를 콘솔에 다시 삽입해 주세요
4. 콘솔의 전원을 켜 주세요
   - If you see the Luma3DS configuration menu, press (Start) to save and reboot

::: tip

최신 버전의 Luma3DS가 SD 카드의 내장 메모리로 설치되었습니다.

:::

___

::: info

만약 다른 홈브류를 재설치 또는 업데이트 하고 싶다면, [마무리 단계](finalizing-setup)로 계속합니다

:::
