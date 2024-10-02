# 마무리 단계

## 중요

`boot.firm` 파일은 boot9strap이 NAND에서 로딩을 완료한 후 실행하는 것입니다. 이번 경우에서는, [LumaTeam](https://github.com/LumaTeam/)의 Luma3DS를 사용해서 콘솔을 패치하고, 홈브류 소프트웨어를 실행할 수 있도록 합니다.

이 가이드에서는, 중요한 시스템 파일의 백업을 하고, 몆 가지의 홈브류 프로그램을 설치할 겁니다. 이러한 단계의 대부분은 콘솔에서 실행할 스크립트를 사용하여 자동화됩니다.

::: info

본 스크립트는 다음과 같은 어플리케이션을 설치할 것입니다:

- **[FBI](https://github.com/lifehackerhansol/FBI)** _(CIA 확장자 어플리케이션 설치용)_
- **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** _(홈브류 런처 실행용)_
- **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** _(커스텀 테마 설치용)_
- **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** _(3DS 및 DS 게임 세이브 파일 백업 및 복원)_
- **[ftpd](https://github.com/mtheall/ftpd)** _(3DS SD 카드 접근 원격 접속)_
- **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** _(다른 홈브류 앱을 설치하기 위한 홈브류 마켓)_
- **[GodMode9](https://github.com/d0k3/GodMode9)** _(NAND와 카트리지 접근을 위한 다용도 프로그램)_

해당 프로그램이 필요하지 않은 경우 본 페이지에 적힌 모든 설정이 완료된 뒤에 본체 설정 -> 데이터 관리 -> Nintendo 3DS -> 소프트웨어 관리에서 지울 수 있습니다. (GodMode9은 이 방식으로 지울 수 없으며 또한 다른 기능들을 위해 필요합니다.)

:::

## 호환성 안내

::: warning

만약 이 가이드를 따르기 전의 **New 3DS** 가 펌웨어 버전 2.1.0이었다면, 진행하기 전에 [NAND 백업을 복원](godmode9-usage#restoring-a-nand-backup)해야 합니다. 2017년 전에 이 가이드를 따르지 않았다면 아마 상관이 없을 겁니다.

:::

::: info

만약 이전 CFW가 EmuNAND 기반이었고, 당신의 EmuNAND/RedNAND의 컨텐츠를 SysNAND로 옮기고 싶다면, 이 페이지를 수행하기 이전에 [EmuNAND 이동](move-emunand) 을 따라주시기 바랍니다. 만약 EmuNAND가 뭔지 모르신다면, 이것은 무시하셔도 됩니다.

:::

## 준비물

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (직접 다운로드)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (직접 다운로드)

## 진행 방법

### 섹션 I - 준비 작업

이 섹션에서는 이 페이지의 남은 과정을 따라가기 위한 나머지 필수 파일을 복사하게 됩니다.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. `finalize.romfs` 파일을 SD 카드의 루트에 복사해 주세요
4. SD 카드의 `luma` 폴더를 열고, 그 안에 `payloads` 폴더가 존재하지 않는 경우 폴더를 생성해주세요
5. `x_finalize_helper.firm` 파일을 `payloads` 폴더에 복사해 주세요
6. SD 카드를 콘솔에 다시 삽입해 주세요

이 스크린샷들은 이 가이드를 따랐을 때의 최소한의 SD 카드 레이아웃을 표시합니다. 이전에 따른 방법에 따라, SD 카드에 추가 파일과 폴더가 있을 수 있습니다.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### 섹션 II - 본체 업데이트

이 섹션에서는 커스텀 펌웨어가 설치된 콘솔에서도 안전하게 이용 가능한 최신 버전의 펌웨어로 본체를 업데이트합니다.

<!--@include: ./_include/sysupdate.md -->

### 섹션 III - RTC 및 DSP 설정

이 섹션에서는 3DS 내부 시계를 실제 시각과 맞추고, 홈브류 소프트웨어에서 음성을 적절하게 이용하기 위해 사운드 펌웨어를 백업합니다.

1. (L 어깨) + (십자 Down) + (Select) 을 동시에 눌러서 Rosalina 메뉴를 실행해 주세요
   - 만일 이들 중 하나의 버튼이 고장났을 경우, [config.ini](/assets/config.ini) 파일을 받아 `luma` 폴더에 덮어쓰기 해주세요. 이 파일은 Rosalina 키 조합을 (X) + (Y)로 바꿉니다
2. "Miscellaneous options"을 선택해 주세요
3. "Dump DSP firmware"를 선택해 주세요
4. (B)를 눌러 진행해 주세요
5. "Nullify user time offset"를 선택해 주세요
6. (B)를 눌러 진행해 주세요
7. (B)를 눌러 Rosalina 메뉴로 돌아가 주세요
8. (B)를 눌러 Rosalina 메뉴를 나와 주세요

### 섹션 IV - 설치 스크립트

이 섹션에서는 몇 개의 스크립트를 사용해 홈브류 자동 설치, SD 카드 정리, 시스템 파일 백업을 자동으로 진행합니다.

1. 콘솔의 전원을 꺼 주세요
2. (X) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. 최종 설치 도우미가 실행됩니다
   - HOME 메뉴가 실행된 경우, `payloads` 폴더의 이름이나 위치가 잘못되었을 수 있습니다
   - 오류가 발생했을 경우, [문제 해결](troubleshooting#finalizing-setup) 페이지를 참고해 주세요
3. 도우미가 정상적으로 작동했을 경우, GodMode9으로 부팅될 것입니다.
   - 이 지점 이후부터는 START 버튼을 누르면서 콘솔을 켜는 것으로 GodMode9에 접근할 수 있습니다.
4. 만약 "Essential files backup not found" 메세지가 표시되면, (A) 룰 눌러서 하세요. 백업이 끝나면 (A) 를 눌러서 진행해 주세요
5. 만약 "RTC date&time seems to be wrong" 메세지가 표시되면 (A) 버튼을 눌러 하고, 날짜와 시간을 고친 다음 (A) 버튼을 눌러 계속해 주세요
6. (Home)을 눌러 작업 메뉴를 열어 주세요
7. "Scripts..."를 선택해 주세요
8. "finalize"를 선택해 주세요
9. 스크립트 표시에 따라 필요한 행동을 취해주세요
   - 만일 오류가 발생할 경우, 오류 메세지에 나온 안내를 따르거나 [문제 해경](troubleshooting#finalizing-setup) 페이지를 참고해 주세요
10. "Setup Complete!" 가 떴을 경우, (A) 버튼을 눌러 전원을 꺼 주세요
    - 만일 "Setup Complete!"(설정 완료!) 가 뜨지 않은 경우, 스크립트가 정상 실행되지 않은 것이며 해당 섹션의 작업을 3단계부터 다시 해야 합니다
11. SD 카드를 컴퓨터에 삽입해 주세요
12. SD 카드의 `/gm9/backups/` 폴더 내 파일을 컴퓨터의 안전한 위치에 복사해 주세요
    - 본 폴더에는 중요 파일의 백업이 들어 있으며 가능한 여러 곳에 백업되어야 합니다. (예시: 온라인 파일 저장소)
    - 두 개의 SysNAND 파일은 해당 콘솔의 NAND 백업이며 소프트웨어적 문제로 벽돌 현상이 일어났을 경우 원상복구하는데 반드시 필요합니다
    - `essential.exefs` 파일은 해당 콘솔의 시스템 고유 파일을 가지고 있으며 하드웨어 문제로 없어진 고유 데이터를 복구하는 데 사용할 수 있습니다
13. 백업하고 남은 두 개의 SysNAND 파일은 SD카드에서 지우면 됩니다
    - `essential.exefs` 파일의 크기는 작으며 접근성을 위해 SD 카드에 남겨둬도 됩니다

___

::: tip

모든 작업이 끝났습니다! 이제 커스텀 펌웨어는 완벽하게 설정되었습니다.

:::

::: info

개조된 콘솔로 뭘 할 수 있는지 알고 싶으시다면 [위키](https://wiki.hacks.guide/wiki/3DS:Things_to_do)를 방문해 보세요!

:::

### 정보와 메모

::: info

알아야 할 몇몇 버튼 콤보들이 있습니다:

- (Select)를 누른 채 콘솔을 부팅시키면 Luma3DS 설정 메뉴가 실행됩니다.
- (Start)를 누른 채 콘솔을 부팅시키면 GodMode9이나, `/luma/payloads/`에 페이로드를 여러 개 넣고 있다면, Luma3DS 체인로더가 실행됩니다.
- 기본으로는, 3DS 모드에 있을 때 (L) + (십자 아래) + (Select)를 누르면 Rosalina 메뉴가 열리며, 시스템 정보를 보거나, 스크린샷을 찍거나, 치트를 활성화시키는 등의 작업을 할 수 있습니다. 이 콤보는 Rosalina 메뉴에서 변경될 수 있습니다.
- (Start) + (Select) + (X)를 누른 채 콘솔을 부팅시키면 알림 LED가 색을 표시할 겁니다. 이는 디버그를 위해 사용됩니다. 목록을 위해서는 [변경사항](https://github.com/SciresM/boot9strap/releases/tag/1.4)를 확인해 주세요.

:::

::: info

GodMode9의 여러 기능의 사용법에 대해서는, [GodMode9 사용법](godmode9-usage) 과 [타이틀과 게임 카트리지 추출](dumping-titles-and-game-cartridges)를 확인해 주세요.

:::
