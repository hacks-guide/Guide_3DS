# CFW 제거하기

## Required Reading

이것은 콘솔을 순정 상태 로 되돌리기 위하여 boot9strap 이나 Luma3DS을 포함한 커펌을 완벽히 제거합니다.

모든 서명되지 않은 (비정상적인) 게임은 사용하지 못하며 이 과정에서 삭제됩니다. 만약 신경 쓰는 것들이 있다면, 이 [저장 데이터 매니저](https://github.com/FlagBrew/Checkpoint/releases/latest)를 이용하여 저장 데이터를 백업 시켜주세요.

::: danger

이러한 이유로 커펌을 제거하려 한다면:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 (영어로) 도움을 요청하는 것이 더 나을 것입니다.

:::

::: danger

만약 다음 중 어떤 것이라도 했다면:

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. 만약 이것에 해당한다면, 계속하기 전에 [순정 NAND 백업 복구](godmode9-usage#restoring-a-nand-backup)를 진행해주세요.

:::

::: warning

이 절차들은 버전 8.0 이상의 Luma3DS를 사용하고 있는 콘솔에서만 작동합니다. 만약 Luma의 구 버전을 사용하고 계신다면, Luma3DS를 업그레이드하시고 나서 이 절차를 따라야 합니다. 업그레이드를 하려면 [이 페이지](checking-for-cfw)를 따라 주세요.

:::

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Instructions

### Section I - Prep Work

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. Luma3DS `.zip`안에 있는 `boot.firm`과 `boot.3dsx`를 SD 카드의 루트에 복사해 주세요
4. SD 카드의 `/luma/payloads/`폴더에 GodMode9 `.zip`안에 압축되있는 `GodMode9.firm`을 복사해 주세요
5. SD 카드의 루트로 GodMode9 `.zip`안에 압축이 되있는 `gm9` 폴더를 복사해 주세요
6. `DSiWareUninstaller.3dsx` 파일을 SD 카드의 `/3ds/` 폴더에 복사해 주세요
7. SD 카드의 `/gm9/scripts/`폴더에 `safety_test.gm9`을 복사해 주세요
8. SD 카드를 콘솔에 다시 삽입해 주세요

### Section II - DS Mode Tests

이 섹션은 콘솔의 DS 모드 앱들이 커펌 제거후 올바르게 작동 할수 있는지 확인하는 작업을 합니다. 이 섹션을 건너간다면, 커펌 재설치 할 때가지 DS 모드와 이의 관련 기능들의 사용이 불가능 할 수 있습니다. 특히 한글판 (KOR) 구형 콘솔들은 현재 이 기능 없이 **커펌을 설치할 수가 없습니다!**

#### DS Connection Settings Test

1. 콘솔의 전원을 켜 주세요
2. 콘솔에서 본체 설정을 열어 주세요
3. `인터넷 설정` -> `DS 소프트웨어용 설정`으로 들어가 "OK"를 선택해 주세요
4. 콘솔은 DS 소프트웨어용 설정으로 부팅 되었을 겁니다
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. 콘솔의 전원을 꺼 주세요

#### DS Download Play Test

1. 콘솔의 전원을 켜 주세요
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. "Nintendo DS"를 선택해 주세요
4. 만약 콘솔이 "DS 다운로드 플레이 | 다운로드할 소프트를 선택합니다." 메뉴로 로드된다면, 이 테스트는 성공했습니다
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. 콘솔의 전원을 꺼 주세요

::: warning

만약 이 테스트 중 하나라도 실패했다면, 커펌 삭제 이후 DS 모드, DS 다운로드 플레이, 혹은 DS 연결 설정이 작동하지 않을 수 있습니다. [DS 모드를 고치고](troubleshooting#software-issues-on-devices-with-custom-firmware) 계속해야 합니다.

:::

### Section III - Safety Test

이 섹션의 목적은 콘솔이 커펌 삭제 이후 정상적으로 부팅되며, 본체 설정이나 키보드와 같은 중요 기능이 정상적으로 작동함을 확인하는 것입니다. **이 섹션을 건너뛴다면, 콘솔이 벽돌이 될 수 있습니다!**

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. 만약 "Essential files backup not found" 메세지가 표시되면, (A) 룰 눌러서 백업을 만들고, 끝나면 (A) 를 눌러서 진행해 주세요
3. 만약 "RTC date&time seems to be wrong" 메세지가 표시되면 (A) 버튼을 눌러 하고, 날짜와 시간을 고친 다음 (A) 버튼을 눌러 계속해 주세요
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. (Home)을 눌러 작업 메뉴를 열어 주세요
5. "Scripts..."를 선택해 주세요
6. "safety_test"를 선택해 주세요
7. 화면에 있는 텍스트를 잘 읽고 (A)를 눌러 진행하세요
8. 커스텀 메뉴가 없는 일반 3DS 홈 메뉴로 부팅되어야 합니다. 만약 부팅되었다면, 다음을 따라 계속 진행해주세요
   - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. 콘솔에서 본체 설정을 열어 주세요
   - If the console crashes at this point, the test has failed
10. "기타 설정"을 선택해 주세요
11. "프로필"을 선택해 주세요
12. "사용자 이름"을 선택해 주세요
13. 새 사용자 이름을 입력할 수 있다면, 테스트는 성공했습니다
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. 콘솔의 전원을 꺼 주세요

::: danger

만약 일반 3DS 홈 메뉴로 부팅되지 않거나, 본체 설정 앱 혹은 키보드에 접근이 불가하다면, **즉시 커펌 삭제를 중단하십시오**! [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에서 영어로 도움을 요청하십시오. "My 3DS has failed the safety test." 정도로 시작하여 실패한 구간을 (영문 설명서를 확인하여) 설명해 주세요.

:::

### Section IV - NAND Backup

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. (Home)을 눌러 작업 메뉴를 열어 주세요
3. "Scripts..."를 선택해 주세요
4. "GM9Megascript"를 선택해 주세요
5. "Backup Options"를 선택해 주세요
6. "SysNAND Backup"을 선택해 주세요
7. (A)를 눌러 확인해 주세요
   - This process will take some time
   - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. (B)를 눌러 메인 메뉴로 돌아가 주세요
9. "Exit"를 선택해 주세요
10. (Home)을 눌러 작업 메뉴를 열어 주세요
11. "Poweroff system"을 선택해 콘솔의 전원을 꺼 주세요

### Section V - Removing illegitimate content

::: warning

이 섹션에서는 홈브류나 덤프된 카트리지 데이터와 같이, 비정상적인 콘텐츠를 전부 삭제합니다. 만약 중요한 세이브 데이터가 있다면, 저장 데이터 매니저를 통해 백업 후 진행해 주세요!

:::

1. 콘솔의 전원을 켜 주세요
2. 콘솔에서 본체 설정을 열어 주세요
3. `데이터 관리` -> `닌텐도 3DS` -> `소프트웨어 관리`로 이동하세요
4. 소프트웨어 목록에서, 커펌 사용 중 설치한 닌텐도 제품이 아닌 콘텐츠를 모두 지워주세요
   - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. `데이터 관리` -> `DSiWare` 메뉴를 열어 주세요
6. 소프트웨어 목록에서, 커펌 사용 중 설치한 닌텐도 제품이 아닌 콘텐츠를 모두 지워주세요
   - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
   - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. 본체 설정 에플리케이션을 종료해 주세요
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. 두 가지의 버튼이 화면에 뜰 때까지 기다려 주세요
10. (L 어깨) + (십자 Down) + (Select) 을 동시에 눌러서 Rosalina 메뉴를 실행해 주세요
11. "Miscellaneous options"을 선택해 주세요
12. Select "Switch the hb. title to the current app."
13. (B)를 눌러 진행해 주세요
14. (B)를 눌러 Rosalina 메뉴로 돌아가 주세요
15. (B)를 눌러 Rosalina 메뉴를 나와 주세요
16. (Home) 키를 누르고, 다운로드 플레이를 종료해 주세요
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. 성공하면 Homebrew Launcher가 실행될 것입니다
19. 홈브류 목록에서 DSiWare Uninstaller를 실행해 주세요
20. 안내문을 따라 진행하며 프로그램에서 삭제를 진행하도록 하세요
21. 이 방법이 성공했다면, Homebrew Launcher를 나가서 콘솔의 전원을 꺼 주세요

### Section VI - System Format

이 섹션에서는 모든 비정상 항목이 삭제되고, eShop이 정상적으로 동작하게 유도합니다. 이 과정에서 3DS에 설치된 모든 항목이 삭제되며, 한국 내수용이 아닌 콘솔에서는 NNID에서도 로그아웃됩니다. 이 과정에서 콘솔의 암호화 키가 재설정되며, 이는 SD 콘텐츠의 백업이 있더라도 기존 데이터를 사용하지 못하게 됨을 의미한다는 걸 명심하십시오.

1. 콘솔의 전원을 켜 주세요
2. 콘솔에서 본체 설정을 열어 주세요
3. 기타 설정 -> 5페이지 (마지막 페이지) -> 본체 초기화로 이동해 주세요
4. 안내를 따라 3DS를 초기화해 주세요

### Section VII - Running Uninstall Script

::: warning

이 섹션은 상단의 모든 과정을 거쳐왔다는 것을 확인할 마지막 기회입니다! 진행하기 전에 이 페이지의 모든 섹션을, **특히** `섹션 III - 안전 테스트`를 진행하였는지 확인해 주세요.

:::

::: danger

이러한 이유로 커펌을 제거하려 한다면:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 (영어로) 도움을 요청하는 것이 더 나을 것입니다.

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. (Home)을 눌러 작업 메뉴를 열어 주세요
3. "Scripts..."를 선택해 주세요
4. "GM9Megascript"를 선택해 주세요
5. "Hax Options"를 선택해 주세요
6. "Un-install Hax"를 선택해 주세요
7. 프롬프트가 뜨면, (A) 를 눌러서 진행해 주세요
8. (A) 를 눌려 SysNAND (lvl3) 쓰기 잠금을 풀고 화면에 표시된 키 조합을 입력해 주세요
9. (A)를 눌러 진행해 주세요
10. (B)를 눌러 메인 메뉴로 돌아가 주세요
11. "Exit"를 선택해 주세요
12. 메세지가 표시되면, (A)를 눌러서 쓰기잠금을 확인해 주세요
13. (Start)를 눌러 콘솔을 다시 시작해 주세요

___

::: tip

콘솔에서 모든 커스텀 펌웨어는 제거 되었습니다.

:::

::: info

이제 SD 카드의 루트에서 `Nintendo 3DS`, `DCIM`과 `private` 폴더를 제외한 모든 추가 파일이나 폴더를 지우셔도 됩니다.

:::
