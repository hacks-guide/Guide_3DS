# 문제 해결 (MSET9)

이 페이지는 "boot9strap 설치 (MSET9)", "boot9strap 설치 (MSET9 CLI)", 또는 "boot9strap 설치 (MSET9 Play 스토어)" 페이지에서 흔히 일어나는 문제에 관한 해결책을 기재합니다. If you are unable to solve your issue with the advice on this page, please join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and describe your issue, including what you have already tried.

## MSET9 (application / script)

:::details Python 3 is not installed

Python이 사용중인 컴퓨터에 설치되지 않았습니다. [Python 웹사이트](https://www.python.org/downloads/) 에서 다운로드한 다음, 설치 프로그램을 더블 클릭한 다음, Python을 설치해 주세요. Python 설치가 완료된 뒤, 다시 시도해주세요.

:::

:::details HOME Menu extdata: Missing!

SD 카드를 삽입한 채로 콘솔의 전원을 켜고, MSET9의 상태를 다시 확인하세요.

만약 이래도 작동하지 않으면, SD 카드를 포맷해야 합니다:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. [섹션 I 7단계](installing-boot9strap-(mset9-cli)#section-i---prep-work) 부터 다시 시작하세요.

:::

:::details Mii Maker extdata: Missing!

SD 카드에서 Mii Maker 데이터를 찾을 수 없습니다. SD 카드를 삽입한 상태로 콘솔의 전원을 켜고, Mii Maker를 실행한 다음, MSET9 상태를 다시 확인해 주세요.

만약 이래도 작동하지 않으면, SD 카드를 포맷해야 합니다:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. [섹션 I 8단계](installing-boot9strap-(mset9-cli)#section-i---prep-work) 부터 다시 시작하세요.

:::

:::details Title database: Not initialized!

타이틀 데이터베이스를 초기화했는지 확인해 주세요.

- SD 카드를 삽입한 상태로 콘솔의 전원을 켜 주세요
- 본체 설정을 실행한 후 `데이터 관리` -> `Nintendo 3DS 데이터 관리` -> `소프트웨어 관리` -> 초기화 ([영어 사진](/images/screenshots/database-reset.jpg))로 이동해 주세요.
  - 이 과정은 데이터를 삭제하지 않습니다.
- 초기화 프롬프트가 표시되면 초기화 후 콘솔의 전원을 끄고 [섹션 I 14단계](installing-boot9strap-(mset9-cli)#section-i---prep-work)부터 다시 시작해 주세요

초기화 프롬프트가 표시되지 _않으면_ SD 카드를 포맷해야 합니다:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요
2. Type `2` then press enter to check the MSET9 status
   - This will create the dummy databases again
3. Close the MSET9 script window
4. Start again from [Section I Step 12](installing-boot9strap-(mset9-cli)#section-i---prep-work).

:::

:::: details Error 01: Couldn't find Nintendo 3DS folder

SD 카드의 루트에서 MSET9을 실행하지 않거나, SD 카드에 Nintendo 3DS 폴더가 없습니다.

SD 카드는 다음과 같이 보여야 합니다:

::: info

![](/images/screenshots/mset9/mset9-root-layout.png)

:::

SD 카드 레이아웃이 올바른 경우 콘솔이 SD 카드를 읽지 못하고 있을 가능성이 높으므로 포맷이 필요합니다:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. Start again from the beginning of [Section I](installing-boot9strap-(mset9-cli)#section-i---prep-work)

::::

:::details Error 02: Your SD is write protected

이 SD 카드에 쓰기 금지가 활성화되어 있습니다. 풀 사이즈 SD 카드를 사용하는 경우 잠금 장치가 [위쪽 위치](/images/sdlock.png)로 전환되어 있는지 확인해 주세요. 그렇지 않으면 SD 카드를 뺐다가 다시 삽입해 보세요.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

여러 개의 ID0 폴더가 있습니다. 올바른 폴더를 확인하려면 다음 지침을 따르세요:

1. `Nintendo 3DS` 폴더를 `BACKUP_Nintendo 3DS` 폴더로 이름을 변경해 주세요
2. SD 카드를 콘솔에 다시 삽입해 주세요
3. 콘솔의 전원을 켜 주세요
4. 콘솔이 SD 카드 데이터를 생성할 때까지 기다려 주세요
   - 애플리케이션이 사라졌을 것입니다. 이는 정상이며, 잠시 후에 고쳐질 것입니다.
5. 콘솔의 전원을 꺼 주세요
6. SD 카드를 컴퓨터에 삽입해 주세요
7. SD 카드의 `Nintendo 3DS` 폴더를 열어 주세요
8. 보이는 폴더의 첫 몇 글자를 적어 주세요
   - 이것이 진짜 ID0이며, 실제 Nintendo 3DS 폴더에 보관할 것입니다
9. 현재 `Nintendo 3DS` 폴더에서 ID0을 삭제해 주세요
10. `BACKUP_Nintendo 3DS` 폴더에서 진짜 ID0 폴더를 `Nintendo 3DS` 폴더로 이동해 주세요
11. `Private` 폴더가 존재하는 경우 `BACKUP_Nintendo 3DS` 폴더에서 `Nintendo 3DS` 폴더로 이동해 주세요

이 작업을 완료한 후 [섹션 I 3단계](installing-boot9strap-(mset9-cli)#section-i---prep-work)부터 계속해 주세요.

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->

::::

:::details Error 06: You need at least 16MB free

SD 카드에 MSET9을 실행하기에 충분한 공간이 없습니다. 공간을 확보하고 다시 시도해 주세요.

이 가이드의 마지막에는 NAND 백업을 만들기 위해 최소 1.3GB가 필요하므로 최소한 그 정도의 공간을 확보하는 것이 가장 좋습니다.

:::

:::details Error 07: One or more files are missing or malformed!

MSET9을 실행하는 데 필요한 하나 이상의 파일이 누락되었거나 손상되었습니다. [MSET9 Release `.zip`](https://github.com/hacks-guide/MSET9/releases/latest)을 다시 다운로드하고 SD 카드의 루트에 압축을 풀어 기존 파일을 모두 교체한 다음 다시 시도해 주세요.

:::

:::: details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

::::

:::details FileNotFoundError: [Errno 2] No such file or directory

MSET9을 수동으로 제거하려면 다음 지침을 따르세요:

1. SD 카드의 `Nintendo 3DS` 폴더를 열어 주세요
2. 보이는 32자 길이의 폴더를 열어 주세요
3. 두 개의 폴더가 보일 것입니다. 깨진 텍스트가 포함된 폴더를 삭제해 주세요
4. 남은 폴더가 _user-id1로 끝나는 경우 이름을 변경하여 _user-id1을 제거해 주세요
5. 이제 MSET9이 제거되었습니다. 이것을 섹션 IV의 완료로 간주하세요

:::

## MSET9 (exploit)

:::details Red screen after reinserting SD card (Section II Step 11)

SD 카드의 루트에서 `SafeB9S.bin`이 누락되었거나 파일이 손상되었을 수 있습니다. MSET9 `.zip`에서 복사하여 기존 파일을 교체한 다음 다음 지침에 따라 트리거 파일을 제거해 주세요:

1. 전원 버튼을 20초간 길게 눌러 콘솔의 전원을 강제로 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요
   - 현재 상태가 [Injected](/images/screenshots/mset9/mset9-injected.png)로 표시되어야 합니다
   - 트리거 파일을 이미 제거했거나(또는 처음부터 주입하지 않은 경우) 현재 상태는 [Ready](/images/screenshots/mset9/mset9-ready.png)로 표시되며 [섹션 II를 다시 시도](installing-boot9strap-(mset9-cli)#section-ii---mset9)할 수 있습니다
2. `4`를 입력한 다음 엔터를 눌러 주세요
3. 창에 "Removed trigger file"이 표시되면 `0`을 입력한 다음 엔터를 눌러 주세요
4. SD 카드를 콘솔에 다시 삽입해 주세요
5. 콘솔의 전원을 켜 주세요
6. [섹션 II 1단계](installing-boot9strap-(mset9-cli)#section-ii---mset9)로 돌아가 주세요

또는 SD 카드가 잘못 포맷되거나 파티션되었을 수 있습니다. 트리거 파일을 제거한 후 포맷해 주세요:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. [섹션 II 1단계](installing-boot9strap-(mset9-cli)#section-ii---mset9)부터 다시 시작해 주세요

:::

:::details System Settings loading infinitely after reinserting the SD card

MSET9 지침과 다른 작업을 수행했거나, 잘못된 모델/버전을 선택했거나, SD 카드를 포맷해야 할 가능성이 높습니다. 스크립트를 열 때 올바른 [모델](/images/3dsmodels.png) 및 펌웨어 버전을 선택했는지 확인해 주세요.

트리거 파일을 제거하고 섹션 II를 다시 시도하려면 다음 지침을 따르세요:

1. Force power off your console by holding the Power button for 20 seconds
2. SD 카드를 컴퓨터에 삽입해 주세요

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요
   - 현재 상태가 [Injected](/images/screenshots/mset9/mset9-injected.png)로 표시되어야 합니다
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
2. Type `4`, then press Enter
3. Once the window says "Removed trigger file", type `0` and then press Enter
4. Reinsert the SD card into your console
5. 콘솔의 전원을 켜 주세요
6. Return to [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. Start again from from [Section II Step 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

:::

:::details An exception occurred after triggering MSET9

이미 커스텀 펌웨어가 설치되어 있을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

## SafeB9SInstaller와의 문제

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

[boot9strap 설치 (MSET9 CLI)](installing-boot9strap-(mset9-cli))로 돌아갑니다

:::

::: tip

[boot9strap 설치 (MSET9 Play 스토어)](installing-boot9strap-(mset9-play-store))로 돌아갑니다

:::

<!--@include: ./_include/troubleshooting-return.md -->


