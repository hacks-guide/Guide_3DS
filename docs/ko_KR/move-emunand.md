# Move EmuNAND

## Required Reading

이 페이지는 이전 EmuNAND의 데이터를 새로운 CFW SysNAND로 옮기고 이전 EmuNAND 파티션을 제거하는 방법을 안내하는 부가 섹션입니다. EmuNAND와 RedNAND는 [동일한 개념](http://3dbrew.org/wiki/NAND_Redirection)을 다른 방식으로 구현한 것입니다.

만약 여러분의 SD 카드의 `/luma/payloads/` 폴더에 `GodMode9.firm` 외의 페이로드 파일이 있다면, (Start)를 누르면서 부팅할 시에 화면에 표시되는 "chainloader menu" 에서 십자 패드와 (A) 버튼으로 조작하여 "GodMode9"을 선택하여야 합니다.

::: danger

이것은 Luma3DS 및 boot9strap가 이미 설치되어 있어야 가능합니다.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 `/luma/payloads/`폴더에 GodMode9 `.zip`안에 압축되있는 `GodMode9.firm`을 복사해 주세요
4. SD 카드의 루트로 GodMode9 `.zip`안에 압축이 되있는 `gm9` 폴더를 복사해 주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요

### Section II - Backup SysNAND DSiWare Saves

::: info

DSiWare 게임이나 저장 데이터에 대해 신경 쓰지 않는다연 이 섹션을 건너뛰어 주세요.

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. 만약 "Essential files backup not found" 메세지가 표시되면, (A) 룰 눌러서 백업을 만들고, 끝나면 (A) 를 눌러서 진행해 주세요
3. 만약 "RTC date&time seems to be wrong" 메세지가 표시되면 (A) 버튼을 눌러 하고, 날짜와 시간을 고친 다음 (A) 버튼을 눌러 계속해 주세요
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. `[2:] SYSNAND TWLN` -> `title`로 이동해 주세요
5. `00030004` 폴더에 (R) 을 누른 채 (A) 를 눌러 선택하고 "Copy to 0:/gm9/out"을 선택해 주세요
   - This process may take some time if you have many DSiWare games
6. (B)를 두 번 눌러 메인 메뉴로 돌아가 주세요

### Section III - Backup GBA VC Saves

::: info

GBA VC 게임이나 저장 데이터에 대해 신경 쓰지 않는다면 이 섹션을 건너뛰어 주세요.

:::

::: info

다른 종류의 버추얼 콘솔 게임(GBC, FC, 기타)에서 이 과정은 불필요합니다.

:::

::: info

게임은 `<TitleID>.gbavc.sav`의 이름으로 SD카드의 `/gm9/out/`폴더에 산출될 것입니다.

:::

::: info

`<TitleID>.gbavc.sav` 파일이 어떤 게임인지 구분하기 위해 (Home)을 눌러 액션 메뉴로 이동해 `Title Manager` -> [A:] SD CARD\`를 선택해 콘솔에 있는 모든 게임의 Title ID를 볼 수 있습니다.

:::

1. 과정대로 진행해 백업하고자 하는 GBA VC 게임 저장 데이터를 저장해 주세요:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - `[S:] SYSNAND VIRTUAL` 폴더로 이동해 주세요
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - (A)를 눌러 진행해 주세요
   - (Start)를 눌러 콘솔을 다시 시작해 주세요

### Section IV - Copy EmuNAND to SysNAND

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. `[E:] EMUNAND VIRTUAL` 로 이동해 주세요
3. `nand.bin`에 (A)를 눌러 선택하고 "NAND image options..."를 선택하고 "Restore SysNAND (safe)"를 선택해 주세요
4. (A)를 눌려 SysNAND 쓰기 잠금을 풀고 주어진 키 조합을 입력해 주세요
   - This will not overwrite your boot9strap installation
5. SysNAND (lvl1) 쓰기 잠금을 풀기 위해 주어진 키 조합을 입력해 주세요
   - This process will take some time
6. 작업이 완료되면 (A)를 눌러서 계속해 주세요
7. 만약 메세지가 표시되면, (B) 를 눌러서 쓰기잠금을 거부해 주세요
8. (B)를 눌러 메인 메뉴로 돌아가 주세요

### Section V - Restore DSiWare Saves

::: info

이전에 DSiWare 저장 데이터를 백업하지 않았다면 이 섹션을 건너뛰어 주세요.

:::

1. `[0:] SDCARD` -> `gm9` -> `out`으로 이동해 주세요
2. `00030004` 폴더에 (Y)를 눌러 복사해 주세요
3. (B)를 두 번 눌러 메인 메뉴로 돌아가 주세요
4. `[2:] SYSNAND TWLN` -> `title`로 이동해 주세요
5. (Y)를 눌러 `00030004` 폴더를 붙여넣어 주세요
6. "Copy path(s)"를 선택해 주세요
7. (A)를 눌려 SysNAND (lvl1) 쓰기 잠금을 풀고 주어진 키 조합을 입력해 주세요
8. "Overwrite file(s)"를 선택해 주세요
   - This process may take some time if you have many DSiWare games
9. 만약 메세지가 표시되면, (B) 를 눌러서 쓰기잠금을 거부해 주세요
10. (B)를 두 번 눌러 메인 메뉴로 돌아가 주세요

### Section VI - Restore GBA VC Saves

::: info

이전에 GBA VC 저장 데이터를 백업하지 않았다면 이 섹션을 건너뛰어 주세요.

:::

::: info

`<TitleID>.gbavc.sav` 파일이 어떤 게임인지 구분하기 위해 (Home)을 눌러 액션 메뉴로 이동해 `Title Manager` -> [A:] SD CARD\`를 선택해 콘솔에 있는 모든 게임의 Title ID를 볼 수 있습니다.

:::

1. (R)을 누른 채 (Start)를 눌러 콘솔의 전원을 꺼 주세요
2. 콘솔을 SysNAND 상태로 시작해 주세요
3. 과정대로 진행해 모든 GBA VC 게임 저장 데이터를 백업해 주세요
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - `[0:] SDCARD` -> `gm9`으로 이동해 주세요
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - (B)를 눌러 메인 메뉴로 돌아가 주세요
   - `[S:] SYSNAND VIRTUAL` 폴더로 이동해 주세요
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - (A)를 눌러 진행해 주세요
   - (Start)를 눌러 콘솔을 다시 시작해 주세요
   - Launch the GBA VC game
   - Exit the GBA VC game

### Section VII - Backup SysNAND

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다

<!--@include: ./_include/nand-backup.md -->

1. **SD 카드의 모든 파일을 컴퓨터에 백업해두세요. 다음 단계에서 SD 카드의 모든 파일이 삭제됩니다.**

### Section VIII - Format SD card

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다

<!--@include: ./_include/format-sd-gm9.md -->

1. (R) 버튼과 (B)를 동시에 눌러 SD 카드를 뺄 준비를 해 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 모든 파일을 도로 복사해 주세요
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. SD 카드를 콘솔에 다시 삽입해 주세요
5. (A)를 눌러 SD 카드를 다시 마운트해 주세요
6. (Start)를 눌러 콘솔을 다시 시작해 주세요

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
