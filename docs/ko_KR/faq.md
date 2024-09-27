# 자주 묻는 질문

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

e숍이 해지되었어도 **커스텀 펌웨어를 설치할 수 있습니다.**

:::

## Pre-Installation FAQ

:::details I am on the latest system version. Is my console hackable without any external hardware/prerequisites?

**가능합니다!** New 3DS / New 3DS XL / New 2DS XL 기기는 [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), 3DS / 3DS XL / 2DS 기기는 [MSET9](installing-boot9strap-\(mset9\)) 를 통해 설치할 수 있습니다.

:::

:::details What consoles is this guide compatible with?

이 가이드는 실제로 판매된 모든 3DS 시리즈 콘솔 (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL)에 대응하고 있습니다. 만약 시스템 버전이 "0.0.0-0"으로 표시된다면, 개발자 콘솔를 가지고 있는 것일 수 있습니다.

:::

:::details How risky is hacking my console?

의도적으로 콘솔을 벽돌로 하려고 하지 않는 이상, 벽돌은 사실상 불가능합니다.

:::

:::details Can I run awesome homebrew and emulators with this?

네! 이 가이드는 홈브류 앱 스토어인 [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest)를 포함한, 몇몇 유용한 홈브류 앱을 설치할 것입니다.

:::

:::details Can I use this to play games from other regions?

네, Luma3DS는 자동으로 카트리지와 설치된 타이틀의 지역제한을 무시합니다. 일부 타 지역 게임들은 Luma3DS의 [로캘 에뮬레이션 기능](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales)을 사용해야만 작동할 수도 있습니다.

:::

:::details Will I lose any features if I install CFW?

아니오. 커스텀 펌웨어가 설치된 콘솔도 다른 3DS처럼 게임 업데이트를 다운로드받고 카트리지로 게임을 실행할 수 있습니다.

:::

:::details Can I keep my NNID, saves, digital games (etc.)?

NNID는 닌텐도 네트워크 ID의 약칭이며, 본 가이드에서 NNID 걱정은 하지 않아도 됩니다. 한국 (KOR), 중국 (CHN), 타이완 (TWN) 콘솔들에는 NNID 기능이 존재하지 않습니다. 만약 북미, 호주, 유럽 등 다른 지역의 콘솔을 한국으로 [지역 변경](region-changing) 할 계획이라면 시리얼 번호를 유심히 보고 해당 문서의 주의사항을 각별히 읽은 후 진행하세요.

이 가이드만을 따라간다면 데이터 손실은 없을 것이지만, SD 카드 파손은 언제나 가능성으로서 남아 있습니다. 만약 중요한 데이터가 있다면, SD 카드의 백업을 하는 것을 추천합니다.

:::

:::details Will my 3DS be banned for having CFW?

닌텐도 네트워크 서비스가 완전히 종료되었기 때문에, 밴을 당하는 것은 불가능합니다.

:::

:::details Can I do this without a computer (e.g. an Android phone)?

네! SD 카드에 파일을 넣을 수 있는 기기만 있으면 됩니다.

:::

:::details What size SD card can I use?<

최소한 1.5GB의 용량이 있는 SD 카드를 사용해야 이 가이드를 따를 수 있습니다. 3DS는 공식적으로 32GB까지 호환되지만, FAT32로 포맷하시면 그 이상도 가능합니다. GBA 그래픽과 커스텀 테마 문제 때문에 128GB를 넘기는 SD 카드를 사용하는 것은 권장하지 않습니다.

:::

:::details I heard about this thing I have to pay for (Gateway, Sky3DS, ntrboot, R4, etc). Is that something I need?

아니오. DS 플래시카트와 [ntrboot](ntrboot) 방식으로 모딩이 가능하지만, 이제 대부분의 기기에서 이용 가능한 무료 소프트웨어 방식이 존재합니다.

Gateway와 Sky3DS같은 3DS용 플래시카트들은 불필요하고 벽돌을 유발할 수 있어 권장되지 않습니다.

:::

:::details What's the difference between custom firmware and homebrew?

사전적으로, 커스텀 펌웨어는 3DS 시스템 소프트웨어의 수정본으로 일반적으로 불가능한 작업을 가능하게 합니다. Homebrew generally refers to software created outside of official sources (i.e. not distributed by eShop or cartridges).

역사적으로, 3DS는 ninjhax와 같은 예전 취약점을 통해 userland homebrew를 이용할 수 있었고, 이를 "homebrew" 그 자체로 부르기도 했습니다. 이들은 사용자 레벨에 부여된 제한적인 시스템 권한을 통해 기본 홈브류와 에뮬레이터를 실행시킬 수 있었지만, 게임을 (쉽게) 수정하거나 카트리지를 백업할 수 없었습니다. 불안정하기도 헀어서, 홈브류가 자주 다운되고, 그때마다 재부팅을 해야 했습니다. 커스텀 펌웨어는 홈브류 전용 진입점보다 더 안정적이면서도 높은 수준의 시스템 엑세스를 제공합니다.

:::

## Post-Installation FAQ

:::details Is it safe to update my 3DS to the latest version with CFW?

Luma3DS를 사용하고 계신 경우, 커스텀 펌웨어 로더(boot9strap)는 업데이트해도 _절대_ 지워지지 않습니다. 과거에 Luma3DS가 부팅 중에 크래시하는 업데이트가 몇 번 존재했습니다. 그러니 최신 업데이트가 Luma3DS를 고장내지 않았는지 확인하기 위해 몇 시간 정도 기다리는 것도 좋은 방법입니다. 본체 업데이트는 순정 3DS와 같은 방법으로 실행할 수 있습니다. 본체 설정을 통해서나, 안전 모드, 업데이트가 자동으로 다운로드되었을 때 표시되는 업데이트 알림 등에서 업데이트하시면 됩니다.

:::

:::details How do I upgrade my SD card?

FAT32로 포맷된 새 SD 카드에 기존 SD 카드의 파일들을 복사하세요. 128GB 카드들의 경우에는 할당량 (allocation size)을 65536으로 설정하는걸 권장드립니다. GBA 그래픽과 커스텀 테마 문제 때문에 128GB를 넘기는 SD 카드를 사용하는 것은 권장하지 않습니다.

:::

:::details Can I system transfer with CFW?

네. 공식 이사 기능을 사용해서 다른 커펌된 콘솔로 저장 데이터 이사를 할 수 있습니다. (커펌되지 않은 콘솔로의 이사는 문제를 야기할 수 있습니다.) 커펌 소프트웨어들 (홈브류)의 티켓들은 이사되지 않지만, [faketik] (https://github.com/ihaveamac/faketik/releases/latest)을 사용하면 다시 HOME 메뉴에서 실행할 수 있습니다. 무선 데이터 이사는 절대 하지 말아 주세요. 홈브류들을 모두 삭제하게 됩니다. 커펌은 두 콘솔 모두에 남아있을겁니다.

:::

:::details How do I change the system language of a Japanese 3DS?

일본어 외의 다른 언어로 일본 3DS의 언어를 바꾸는 유일한 방법은 [지역 변경](region-changing) 뿐입니다. 지역 변경을 하면 닌텐도 e숍을 사용할 수 없게 될 수 있다는 점을 명심해 주세요. 게임을 업데이트할 수 없게 될 수도 있습니다.

:::

:::details How do I update homebrew applications?

업데이트하려고 하는 홈브류 앱의 형식에 따라 다릅니다. 일반적으로는:

- Homebrew in **CIA format** can be updated by installing the new CIA, which will usually overwrite the old one. 만약 이전 CIA가 덮어쓰기가 안 되어서, 같은 앱이 2개 표시된다면, 다른 3DS 소프트웨어처럼 이전 버전의 앱을 시스템 설정의 데이터 관리 메뉴에서 지울 수 있습니다.
- Homebrew in **3DSX format** can be updated by replacing the 3DSX file in `/3ds/` with a fresh copy. 만약 해당 홈브류 앱이 추가 어셋을 포함하고 있다면, 그 어셋을 다른 폴더에 놓아야 할 수도 있습니다. 자세한 사항은 해당 홈브류 앱의 홈페이지를 확인해 주세요.
- For updating Luma3DS, see [this page](restoring-updating-cfw). GodMode9을 업데이트하는 경우에는 [이 페이지](godmode9-usage#updating-godmode9)를 확인해 주세요.

:::

:::details How do I update my games?

닌텐도 e숍이 해지 되었어도 계속해서 게임 업데이트를 받을 수 있습니다.

게임의 지역이 콘솔과 맞지 않는다면, 해당 업데이트가 있는 다른 콘솔에서 [업데이트를 덤프](dumping-titles-and-game-cartridges)해야 합니다. 닌텐도 e숍은 해당 콘솔의 국가코드에 맞는 업데이트만 제공합니다 (예를 들어, 일본 3DS는 일본 게임의 업데이트만 있습니다).

:::

:::details Help! Something bad happened and my 3DS won't boot to HOME Menu...

이 [문제 해결 가이드](troubleshooting#boot-issues-on-consoles-with-custom-firmware)를 참고해 주세요. **콘솔이 부팅할 수 없는 상태일 때 커스텀 펌웨어를 제거하는 것은 벽돌로 이어질 수 있기 때문에 추천되지 않습니다.**

:::

## menuhax / A9LH / Gateway FAQ

:::details I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?

boot9strap을 기반으로 한 최신의 커펌 방식으로 업그레이드하는 것을 권장합니다. 어떻게 업그레이드하는지 보려면 [CFW 확인](checking-for-cfw) 페이지를 따라주세요.

:::

:::details My setup works for me. Why should I upgrade it?

다수의 현대 홈브류 (Checkpoint나 BootNTR Selector 등)는 boot9strap 기반 셋업인 콘솔들로만 테스트되어왔기 때문에 menuhax, A9LH, Gateway와 같은 구 셋업 기반 콘솔에서는 대부분 작동하지 않을 수도 있습니다. 추가로, 자신의 셋업에 따라서, 3DS를 최신 버전으로 안전하게 업데이트하는게 불가능할 수도 있습니다. 현대식인 boot9strap 기반 셋업들은 이전 셋업들보다 훨씬 시스템 권한이 높으며, 콘솔의 bootrom까지도 백업할 수 있습니다.

:::

:::details Will I lose anything if I upgrade my setup?

오래된 셋업 (EmuNAND 포함)에서의 데이터는 보통 아무 손실 없이 boot9strap으로 옮겨질 수 있습니다. 특별히 중요한 데이터가 있다면, [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018) 등의 도구들을 이용해 백업을 만드는 것도 좋은 방법입니다.

:::

:::details How do I move saves from an existing Gateway setup to a more modern setup?

**A:** [이 링크](https://gbatemp.net/threads/425743/)를 참고해 주세요.

:::
