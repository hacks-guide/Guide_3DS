# GodMode9 사용법

::: info

카트리지나 SD 카드 내 게임을 추출하는 것에 대해서는, [타이틀과 게임 카드 추출](dumping-titles-and-game-cartridges) 을 확인해 주세요.

:::

::: info

스크립트와 같은 GodMode9의 지원과 업데이트와 정보를 받으려면 [GodMode9 Discord 서버](https://discord.gg/BRcbvtFxX4)에 가입해 주세요. (영어 전용)

:::

## 중요

GodMode9은 닌텐도 3DS 콘솔의 완전한 파일 관리자이며, SD 카드와 SysNAND와 EmuNAND 안의 FAT 파티션에 접근하고 근본적인 것을 수정할 권한을 줍니다. 다른 기능로는 파일의 복사, 삭제, 이름 바꾸기와 폴더 생성 등이 있습니다.

만약 여러분의 SD 카드의 `/luma/payloads/` 폴더에 `GodMode9.firm` 외의 페이로드 파일이 있다면, (Start)를 누르면서 부팅할 시에 화면에 표시되는 "chainloader menu" 에서 십자 패드와 (A) 버튼으로 조작하여 "GodMode9"을 선택하여야 합니다.

GodMode9은 콘솔에 있는 무엇이든 수정할 수 있는 강력한 소프트웨어 입니다. 비록 이러한 수정들 중 많은 것들은 권한 시스템에 의해 잠겨있고, 고의로 허가 잠금해제를 하지 않는 한 실수로 위험한 행동을 하는 것이 불가능하지만,  그래도 지시 사항을 조심히 따르고 백업을 하는 것을 권장합니다.

## GodMode9 업데이트

::: info

아래 지시 사항 중 일부는 오로지 최신 버전의 GodMode9에만 적용되고, 계속하기 전에 이 섹션을 따라해 업데이트를 해야 됩니다. 이미 존재하는 파일은 덮어씌워 주세요.

:::

### 준비물

- 최신 버전의 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (GodMode9 `.zip` 파일)

### 진행 방법

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 `/luma/payloads/`폴더에 GodMode9 `.zip`안에 압축되있는 `GodMode9.firm`을 복사해 주세요
4. SD 카드의 루트로 GodMode9 `.zip`안에 압축이 되있는 `gm9` 폴더를 복사해 주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요

::: tip

GodMode9의 업데이트가 완료되었습니다.

:::

## NAND 백업 생성

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다

<!--@include: ./_include/nand-backup.md -->

::: tip

NAND 백업이 성공적으로 생성되었습니다.

:::

## NAND 백업 복구

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 `/gm9/out/`폴더에 `<날짜>_<일련번호>_sysnand_##.bin` 파일을 복사해 주세요
4. SD 카드를 콘솔에 다시 삽입해 주세요
5. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
6. (Home)을 눌러 작업 메뉴를 열어 주세요
7. "Scripts..."를 선택해 주세요
8. "GM9Megascript"를 선택해 주세요
9. "Restore Options"를 선택해 주세요
10. "SysNAND Restore (safe)"를 선택해 주세요
11. NAND 백업 파일을 선택해 주세요
12. (A) 를 눌려 SysNAND (lvl3) 쓰기 잠금을 풀고 화면에 표시된 키 조합을 입력해 주세요
    - 이 과정은 절대 현재 boot9strap 설치를 덮어쓰지 **않습니다**.
    - 이 과정은 시간이 좀 걸릴 것입니다
13. (A)를 눌러 진행해 주세요
14. (B)를 눌러 메인 메뉴로 돌아가 주세요
15. "Exit"를 선택해 주세요
16. 메세지가 표시되면, (A)를 눌러서 쓰기잠금을 확인해 주세요

::: tip

NAND 백업이 성공적으로 복구되었습니다. 이제 SD 카드에서 `<date>_<serialnumber>_sysnand_###.bin` 파일을 삭제해도 괜찮습니다.

:::

## 모든 .CIA 앱 안전을 위한 주의사항에 주입

::: info

안전을 위한 주의사항 앱보다 용량이 큰 파일은 주입할 수 없습니다. (용량이 큰 게임과 다른 큰 어플리케이션 등)

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. `[0:] SDCARD` -> `cias`로 이동해 주세요
3. `.cia` 파일을 선택하기 위해 (A) 버튼을 누르세요.
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. (A)를 눌려 SysNAND (lvl1) 쓰기 잠금을 풀고 주어진 키 조합을 입력해 주세요
10. (A)를 눌러 진행해 주세요
11. 메세지가 표시되면, (A)를 눌러서 쓰기잠금을 확인해 주세요

::: tip

이제 '안전을 위한 주의사항' 앱에 원하는 애플리케이션이 주입되었습니다.

:::

## .CIA 앱 주입 이후 안전을 위한 주의사항 복구

::: info

이 과정은 Godmode9(Decrypt9 또는 Hourglass9가 아닌)을 통해 안전을 위한 주의사항을 주입했을 경우에만 적용됩니다.

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. (Home)을 눌러 작업 메뉴를 열어 주세요
3. "More..."를 선택해 주세요
4. "Restore H&S"를 선택해 주세요
5. (A)를 눌려 SysNAND (lvl1) 쓰기 잠금을 풀고 주어진 키 조합을 입력해 주세요
6. 메세지가 표시되면, (A)를 눌러서 쓰기잠금을 확인해 주세요

::: tip

'안전을 위한 주의사항' 앱이 원래대로 복구되었습니다.

:::

## SD 카드 포맷

::: danger

**이 과정 중 SD 카드의 모든 정보가 지워진다는 것을 명심해 주세요!**

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
   - 만약 GodMode9이 포맷할 SD 카드를 삽입하는 도중 초기화 오류를 일으켰을 경우, 무시해도 됩니다

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

SD 카드가 콘솔에서 사용 가능한 상태로 포맷되었습니다.

:::

## 콘솔을 포맷하지 않고 NNID 제거하기

::: info

이 과정은 NNID 로그아웃만을 진행합니다. NNID 자체는 콘솔에 연동되어있기 때문에, 다른 콘솔에서 해당 NNID를 사용할 수는 없습니다.

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. (Home)을 눌러 작업 메뉴를 열어 주세요
3. "Scripts..."를 선택해 주세요
4. "GM9Megascript"를 선택해 주세요
5. "Scripts from Plailect's Guide"를 선택해 주세요
6. "Remove NNID"를 선택해 주세요
7. (A)를 눌러 진행해 주세요
8. (A)를 눌려 SysNAND (lvl1) 쓰기 잠금을 풀고 주어진 키 조합을 입력해 주세요
9. (A)를 눌러 진행해 주세요
10. (B)를 눌러 메인 메뉴로 돌아가 주세요
11. "Exit"를 선택해 주세요
12. 메세지가 표시되면, (A)를 눌러서 쓰기잠금을 확인해 주세요
13. (Start)를 눌러 콘솔을 다시 시작해 주세요

::: tip

이제 NNID가 로그아웃되었습니다.

:::
