# 문제 해결

이 페이지는 흔히 일어나는 문제에 관한 해결책을 기재합니다. 만약 이 페이지의 해결책만으로 문제를 해결할 수 없다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 들어가서 당신의 문제와 시도한 해결책을 설명해 주세요.

:::details Table of Contents

여러 페이지에서 사용:

- [SafeB9SInstaller](#issues-with-safeb9sinstaller)

가이드 페이지:

- [Installing boot9strap (Soundhax)](#installing-boot9strap-soundhax)
- [Installing boot9strap (MSET9)](#installing-boot9strap-mset9)
- [Installing boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
- [Installing boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
- [Finalizing Setup](#finalizing-setup)

설치 이후 문제:

- [Boot issues](#boot-issues-on-consoles-with-custom-firmware)
- [Software issues](#software-issues-on-consoles-with-custom-firmware)

:::

## Issues with SafeB9SInstaller

### Before opening SafeB9SInstaller

:::details Failed to open SafeB9SInstaller.bin

`SafeB9SInstaller.bin` 파일이 없거나 잘못 들어갔습니다. 최신 버전의 [SafeB9Installer](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInst20170605-122940.zip)을 다운받아 압축을 풀고, SD 카드의 최상위 디렉토리에 `SafeB9Installer.bin`을 복사해주세요. `.bin` 확장자는 보이지 않는 이상 추가하지 말아 주세요.

:::

### SigHaxed FIRM was not installed! Check lower screen for more info.

:::details MicroSD Card - init failed

SD 카드에 이상이 있을 가능성이 높습니다. 다시 포맷해 보세요 ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). 이렇게까지 했는데도 효과가 없으면, 다른 SD 카드로 시도해보세요.

:::

:::details SigHaxed FIRM - File not found

`boot9strap` 폴더에 `boot9strap.firm`과 `boot9strap.firm.sha`가 없거나, `boot9strap` 폴더의 이름이 잘못되어 있습니다. [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)의 최신 버전을 다운로드하여, `boot9strap.firm`과 `boot9strap.firm.sha`를 `boot9strap` 폴더로 복사해 주세요.

:::

:::details SigHaxed FIRM - invalid FIRM

`boot9strap.firm`과 `boot9strap.firm.sha` 파일에 문제가 있습니다. [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip)의 최신 버전을 다운로드하여, `boot9strap.firm`과 `boot9strap.firm.sha`를 `boot9strap` 폴더로 복사해 주세요.

:::

:::details Secret Sector - File not found

`boot9strap` 폴더에 `secret_sector.bin` 파일이 없거나, `boot9strap` 폴더의 이름이 잘못되어 있습니다. [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655\&dn=secret_sector.bin\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) 파일을 토렌트 클라이언트로 다운로드하고, 이 파일을 `boot9strap` 폴더에 복사해 주세요

:::

:::details Something else

[Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에서 도움을 요청하여, 자신이 본 메시지를 같이 보내 주세요.

:::

## boot9strap 설치 (Soundhax)

:::details Red/purple/pink and white screen after running Soundhax

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

펌웨어 버전이 이게 아니라면, 이미 커펌이 설치되었을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

`otherapp.bin` 파일에 문제가 있습니다. (없거나, 잘못 들어갔거나, 혹은 잘못된 파일) 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)을 다시 내려받아 SD 카드의 최상위 디렉토리에 복사해주세요.

:::

:::details "Could not play"

콘솔과 지역 조합과 다른 Soundhax 파일을 이용하고 있거나, 콘솔이 Soundhax와 호환되지 않습니다. In the latter case, your course of action will determine on what version your 3DS is currently on. [Nintendo Homebrew Discord 서버](https://discord.gg.MWxPgEp)에 오셔서 도움을 요청하세요.

:::

:::details Failed to mount the SD card!

만약 해결되지 않는다면, 다른 SD 카드를 이용해 보세요.

:::

## boot9strap 설치 (MSET9)

:::details Python 3 is not installed

Python이 사용중인 컴퓨터에 설치되지 않았습니다. [Python 웹사이트](https://www.python.org/downloads/) 에서 다운로드한 다음, 설치 프로그램을 더블 클릭한 다음, Python을 설치해 주세요. Python 설치가 완료된 뒤, 다시 시도해주세요.

:::

:::details HOME Menu extdata: Missing!

SD 카드를 삽입한 채로 콘솔의 전원을 켜고, MSET9의 상태를 다시 확인하세요.

만약 이래도 작동하지 않으면, SD 카드를 포맷해야 합니다:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. [섹션 I 7단계](installing-boot9strap-\(mset9-cli\)#section-i---prep-work) 부터 다시 시작하세요.

:::

:::details Mii Maker extdata: Missing!

Mii Maker data was not found on the SD card. Please power on your console with your SD inserted, then launch Mii Maker, then check the MSET9 status again.

만약 이래도 작동하지 않으면, SD 카드를 포맷해야 합니다:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. [섹션 I 8단계](installing-boot9strap-\(mset9-cli\)#section-i---prep-work) 부터 다시 시작하세요.

:::

:::details Title database: Not initialized!

Ensure that you have reset the title database.
\+ Please power on your console with your SD inserted
\+ Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
\+ This will not wipe any of your data
\+ If you get a reset prompt, after resetting, power off your console and start again from [Section I Step 14](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

If you do _not_ getting a reset prompt, your SD card needs to be formatted:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. MSET9 스크립트를 실행해 주세요:

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요
2. Type `2` then press enter to check the MSET9 status
   - This will create the dummy databases again
3. Close the MSET9 script window
4. Start again from [Section I Step 12](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 01: Couldn't find Nintendo 3DS folder

You are not running MSET9 from the root of the SD card, or the SD card is missing the Nintendo 3DS folder.

Remember, your SD card should look like this:

::: info

![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)

:::

If your SD card layout is correct, then your SD card most likely isn't being read by your console and needs to be formatted:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. Start again from the beginning of [Section I](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

::::

:::details Error 02: Your SD is write protected

Write-protection is enabled on this SD card. If you are using a full-size SD card, ensure that the lock is flipped in the [upright position](/images/sdlock.png). Otherwise, try ejecting and reinserting your SD card.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

You have multiple ID0 folders. To determine the correct folder, follow these instructions:

1. `Nintendo 3DS` 폴더를 `BACKUP_Nintendo 3DS` 폴더로 이름을 변경해 주세요
2. SD 카드를 콘솔에 다시 삽입해 주세요
3. 콘솔의 전원을 켜 주세요
4. 콘솔이 SD 카드 데이터를 생성할 때까지 기다려 주세요
   - Your applications will have disappeared. 이는 정상이며, 잠시 후에 고쳐질 것입니다.
5. 콘솔의 전원을 꺼 주세요
6. SD 카드를 컴퓨터에 삽입해 주세요
7. SD 카드의 `Nintendo 3DS` 폴더를 열어 주세요
8. Write down the first few characters of the folder you see
   - This is your true ID0, which we will keep in the real Nintendo 3DS folder
9. Delete the ID0 from the current `Nintendo 3DS` folder
10. Move the true ID0 folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder
11. If it exists, move the `Private` folder from the `BACKUP_Nintendo 3DS` folder to the `Nintendo 3DS` folder

Once you've done this, continue from [Section I Step 3](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->

::::

:::details Error 06: You need at least 16MB free

Your SD card does not have enough space to trigger MSET9. Free up some space and try again.

At the end of this guide, you will need at least 1.3GB to make a NAND backup, so it's best to free up at least that much.

:::

:::details Error 07: One or more files are missing or malformed!

One or more files that MSET9 needs to run is missing or corrupted. Re-download the [MSET9 Release `.zip`](https://github.com/hacks-guide/MSET9/releases/latest) and extract it to the root of your SD card, replacing all existing files, then try again.

:::

:::details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

:::

:::details Red screen after reinserting SD card (Section II Step 11)

You may be missing `SafeB9S.bin` from the root of your SD card, or the file may be corrupted. Copy it from the MSET9 `.zip`, replacing any existing files then follow these instructions to remove the trigger file:

1. Force power off your console by holding the Power button for 20 seconds
2. SD 카드를 컴퓨터에 삽입해 주세요
3. MSET9 스크립트를 실행해 주세요:

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you may [retry Section II](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
2. Type `4`, then press Enter
3. Once the window says "Removed trigger file", type `0` and then press Enter
4. Reinsert the SD card into your console
5. 콘솔의 전원을 켜 주세요
6. Return to [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Alternatively, your SD card may be improperly formatted or partitioned. After removing the trigger file, format it:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. Start again from from [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details System Settings loading infinitely after reinserting the SD card

You most likely did something different from the MSET9 instructions, selected the wrong model/version, or your SD card needs to be formatted. Ensure you are choosing the correct [model](/images/3dsmodels.png) and firmware version when opening the script.

Follow these instructions to remove the trigger file and to retry Section II:

1. Force power off your console by holding the Power button for 20 seconds
2. SD 카드를 컴퓨터에 삽입해 주세요
3. 1. MSET9 스크립트를 실행해 주세요:

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
2. Type `4`, then press Enter
3. Once the window says "Removed trigger file", type `0` and then press Enter
4. Reinsert the SD card into your console
5. 콘솔의 전원을 켜 주세요
6. Return to [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. SD 카드의 전체 데이터를 PC에 복사해두세요
2. SD 카드를 포맷해 주세요 ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. PC에 복사해둔 데이터를 다시 SD 카드에 복사해 주세요
4. Start again from from [Section II Step 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details An exception occurred after triggering MSET9

이미 커스텀 펌웨어가 설치되어 있을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

## boot9strap 설치 (super-skaterhax)

:::details "An error has occurred. Please save your data in any software currently in use, then restart the system."

If no colors flash after pressing "GO GO!":

- Ensure that you have set your system date and [region](/images/screenshots/skater/skater-lang.png) correctly
- Ensure that no other browser tabs are open, then restart the browser and try the exploit again

If the screen flashes colors then freezes/crashes:

- Ensure that you have the correct copy of `arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin` for your console's version and region
- Try resetting your browser data:
  1. 브라우저를 실행하고 브라우저 설정을 실행해 주세요
  2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
  3. 익스플로잇을 다시 시도해 주세요
- Try changing the system language to something other than the current language

:::

:::: details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

`arm11code.bin` 파일이 없거나 잘못 들어갔습니다. Make sure to copy the files of the [latest version of super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) for your region and version to the root of your SD card (not inside of a folder).

::: info

![](/images/screenshots/skater-root-layout.png)

:::

::::

:::details An exception occured or "DLL_HEAP_INFORMATION" when pressing GO! GO!

이미 커스텀 펌웨어가 설치되어 있을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

## boot9strap 설치 (SSLoth-Browser)

:::details Red/purple/pink and white screen after running Browserhax

이미 커스텀 펌웨어가 설치되어 있을 수 있습니다. [CFW 확인](checking-for-cfw) 을 하는 것을 권장합니다.

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

`arm11code.bin` 파일이 없거나 잘못 들어갔습니다. 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)을 내려받아 `otherapp.bin` 파일을 SD 카드의 최상위 디렉토리에 복사하고, 이름을 `arm11code.bin`으로 변경해 주세요. `.bin` 확장자는 보이지 않는 이상 추가하지 말아 주세요.

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

`arm11code.bin`에 문제가 있을 수 있습니다. 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)을 내려받아 `otherapp.bin` 파일을 SD 카드의 최상위 디렉토리에 복사하고, 이름을 `arm11code.bin`으로 변경해 주세요. `.bin` 확장자는 보이지 않는 이상 추가하지 말아 주세요.

You can also try resetting your browser save data:

1. 브라우저를 실행하고 브라우저 설정을 실행해 주세요
2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
3. 익스플로잇을 다시 시도해 주세요

:::

:::details Opening the browserhax QR code or URL crashes

이러한 브라우저 기반의 취약점은 불안정하고 자주 종료됩니다. 그러나 종종 다음 단계를 수행하면 고쳐질 수 있습니다.

1. 브라우저를 실행하고 브라우저 설정을 실행해 주세요
2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
3. 익스플로잇을 다시 시도해 주세요

:::

:::details System Update prompt when opening browser

SSLoth 프록시 설정이 잘못 설정되었습니다. 페이지의 SSLoth 섹션을 다시 진행해주세요.

:::

:::details Error 032-0420 when opening browser

다음 과정을 순서대로 진행해주세요:

1. 콘솔에서 본체 설정을 열어 주세요
2. `인터넷 설정` -> `인터넷 접속 설정`으로 이동해 주세요
3. 네트워크 접속 경로을 클릭해, `설정 변경` -> `다음 페이지 (오른쪽 화살표)` -> `Proxy 설정`으로 이동해 주세요
4. "Proxy 설정"을 "아니요"로 설정해 주세요
5. OK하고 저장을 차례로 눌러주세요
6. 접속 테스트 안내문이 표시되면, `예`를 눌러 인터넷 접속 테스트를 진행해 주세요
   - The test should succeed
7. "OK"을 눌러 진행해 주세요
8. "뒤로"을 두 번 누르고 "종료"를 눌러 HOME 메뉴로 돌아가 주세요
9. 인터넷 브라우저를 한 번 열어주세요
10. 시스템 업데이트에 관한 창이 표시되면, 'OK'을 눌러주세요
    - This won't actually update the system
11. [섹션 II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)로 돌아가 다시 진행해주세요

:::

:::details Frozen on "Doing agbhax..."

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

[Nintendo Homebrew Discord 서버](https://discord.gg.MWxPgEp)에 오셔서 도움을 요청하세요.

:::

:::details Failed to mount the SD card!

데이터를 모두 백업하고 시스템별로 권장되는 프로그램을 이용해 SD카드를 FAT32로 다시 포맷해 주세요. ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))) MiniTool Partition Wizard나 HP formatting tool(HPUSBDisk)는 3DS용 SD 카드에 문제를 발생시킨다는 것이 알려져 있습니다.

만약 해결되지 않는다면, 다른 SD 카드를 이용해 보세요.

:::

## 마무리 단계

:::details Unable to update console

다음 단계는 순서 없이 진행 가능하나, 하기 쉬운 것부터 어려운 순서로 정렬되어 있습니다.

1. If you are using Pretendo, switch back to Nintendo with Nimbus and try again
2. DNS 설정을 "자동"으로 설정해 주세요
3. 콘솔을 Wi-Fi 공유기에 가까이 가져가 주세요
4. 콘솔을 끄고, L 버튼 + R 버튼 + D패드 위 + A 키를 눌러 안전 모드로 들어가 화면의 지시대로 업데이트를 진행해 주세요
5. Wi-Fi 연결 설정을 삭제한 후 다시 Wi-Fi에 연결해 주세요
6. WI-Fi 공유기를 다시 시작해 주세요
7. 모바일 핫스팟과 같이, 다른 Wi-Fi로 연결해 주세요
8. Nintendo 서버가 점검 중일 수 있습니다. 나중에 다시 시도해 주세요
9. 만약 여전히 오류가 발생한다면, [CTRTransfer](ctrtransfer)를 진행한 후 다시 시도해 주세요
10. 지원이 필요하면 [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 (영어로) 지원을 요청해 주세요

:::

:::details Error #22: finalize.romfs is invalid

The file `finalize.romfs` is corrupt or unreadable. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

:::

:::details Information #23: finalize.romfs in wrong location

The file `finalize.romfs` was placed in the wrong location instead of root of SD. The script will attempt to resolve this, but requires your permission to do so. Press (A) on the next few prompts to continue.

:::

:::details Error #24: SD is write-protected

Ensure that your SD card is not [locked](/images/sdlock.png). 이 상태가 아님에도 문제가 지속될 경우, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp) 에 연락해 도움을 청하세요.

:::

:::details Error #02: Missing essential.exefs

You said 'No' to the "Make essential files backup?" prompt in GodMode9. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

:::

:::details Error #04: No space

You need at least 1.3GB of free space to perform the NAND backup, which is a part of the script. 빈 공간이 부족하다면 다음 단계를 따르세요.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 루트에 있는 `Nintendo 3DS` 폴더를 컴퓨터에 복사해주세요
4. SD 카드에서 `Nintendo 3DS` 폴더를 지워주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요
6. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
7. HOME 버튼을 눌러 주세요.
8. "Scripts..."를 선택해 주세요
9. "finalize"를 선택해 주세요
10. Press (A) to create a NAND backup
    - This may take around fifteen minutes
11. Press (A) again
    - The console should automatically power off
12. SD 카드를 컴퓨터에 삽입해 주세요
13. Copy the files in `/gm9/backups/` on your SD to a safe location on your computer
14. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
15. 컴퓨터에서 SD 카드의 루트로 복사해 두었던 `Nintendo 3DS` 폴더를 다시 복사해 주세요
16. 컴퓨터에서 `Nintendo 3DS` 폴더를 지워주세요

Now that you have your NAND backup in a safe place:

1. SD 카드를 콘솔에 다시 삽입해 주세요
2. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
3. HOME 버튼을 눌러 주세요.
4. "Scripts..."를 선택해 주세요
5. "finalize"를 선택해 주세요
6. Continue the script as normal
   - The NAND backup will be automatically skipped

:::

:::details Information #05: No title database

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

:::

:::details Error #06 or "Error: Could not open directory" when attempting a NAND backup

SD 카드에 1.3GB 이상의 빈 공간이 있는지 확인해주세요. 빈 공간이 부족하다면 다음 단계를 따르세요.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 루트에 있는 `Nintendo 3DS` 폴더를 컴퓨터에 복사해주세요
4. SD 카드에서 `Nintendo 3DS` 폴더를 지워주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요
6. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
7. [NAND 백업](godmode9-usage#creating-a-nand-backup)을 실행하세요
8. SD 카드의 `gm9/out` 폴더 내 파일을 컴퓨터의 안전한 위치에 복사해 주세요
9. SD 카드의 `/gm9/out` 폴더에서 essential.exefs는 남기고 `<date>_<serialnumber>_sysnand_##.bin` 및 `<date>_<serialnumber>_sysnand_##.bin.sha` 파일을 삭제해주세요
10. 컴퓨터에서 SD 카드의 루트로 복사해 두었던 `Nintendo 3DS` 폴더를 다시 복사해 주세요
11. 컴퓨터에서 `Nintendo 3DS` 폴더를 지워주세요

SD 카드의 용량이 충분하다면, SD 카드가 손상되었거나 불량일 수 있습니다. 컴퓨터의 운영 체제에 따라 SD 카드에 오류가 있는지를 확인해주세요: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Ensure that your SD card is not [locked](/images/sdlock.png). 이 상태가 아님에도 문제가 지속될 경우, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp) 에 연락해 도움을 청하세요.

:::

:::details Information #17: Duplicate NAND backup

The script has detected that the Nintendo 3DS folder is missing AND that you have already made a NAND backup before. If you intend to install homebrew applications, you should do the following:

1. Press (B) to cancel making another NAND backup
2. (R)을 누른 채 (Start)를 눌러 콘솔의 전원을 꺼 주세요
3. Copy the contents of `/gm9/backups/` to a safe location on your computer
4. Delete `/gm9/backups/` from your SD card
5. If you moved your Nintendo 3DS folder off of your SD card to get to this point, copy it back to your SD card
   - If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
6. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
7. (Home)을 눌러 작업 메뉴를 열어 주세요
8. "Scripts..."를 선택해 주세요
9. "finalize"를 선택해 주세요
10. 스크립트 표시에 따라 필요한 행동을 취해주세요

:::

:::details Error #18a/18b: MSET9 detected

이전 페이지에서 MSET9가 제거되지 않았습니다. The script will attempt to remove MSET9 for you; follow the instructions given by the script.

:::

---

## Boot issues on consoles with custom firmware

::: info

여기서 안내하는 설명은 일반적으로 최신 커스텀 펌웨어 설정(boot9strap + Luma3DS 8.0 이상)에 적용됩니다. 만약 콘솔이 이전 설정(arm9loaderhax 또는 menuhax 기반 등)으로 구동되고 있다면, 이 설명을 따르기 전에 설정을 업데이트해야 합니다.

:::

### Power/notification light indicators

:::details My console powers off when I try to turn it on, and/or the notification LED shows a color on boot

`boot.firm` 파일에 문제가 있습니다. [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4)를 실행하고 있다면, 3DS 알림 LED가 특정 색상으로 깜빡일 겁니다. 이 색상은 SD 카드 혹은 내부 메모리에 있는 `boot.firm`의 오류를 분석하기 위해 이용됩니다. 구 버전의 boot9strap에서는 콘솔을 켜려 할 때 파란 LED가 켜졌다가 즉시 꺼질 것입니다.

알림 LED가 깜빡인다면:

- **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
- **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. 내부 메모리에 있는 `boot.firm`을 확인했으나, 파일이 손상되었습니다.
- **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

[Luma3DS의 최신 버전](https://github.com/LumaTeam/Luma3DS/releases/latest)을 다운받아 압축을 해제해, 새 `boot.firm` 파일을 SD 카드의 루트 디렉토리에 넣어주세요. (파일이 이미 있다면 덮어씌워주세요.) `boot.firm` 파일이 계속 문제가 있는 것으로 인식된다면, SD 카드에 문제가 있는지 확인해야 할 수 있습니다: ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), or [macOS](f3xswift-\(mac\))) 또, WinRAR로 압축 해제한 파일은 3DS에서 문제를 자주 일으키는 것으로 알려져 있습니다.

순간적르로 백라이트가 켜졌다 꺼지면서 "퍽 소리"가 들린다면, 콘솔의 하드웨어 문제인 것입니다. (백라이트 케이블이 연결이 끊기는 등) 이 경우 특정 각도로 콘솔을 들면 부팅될 수도 있습니다.

:::

:::details My console gets stuck on a black screen with blue power light staying on

다음 단계는 순서 없이 진행 가능하나, 시간 소모가 적은 것부터 긴 순서로 정렬되어 있습니다.

1. 콘솔의 전원을 종료하고, SD 카드를 분리한 뒤, 다시 장착하고 전원을 켜 보세요.
2. 전원을 끄고 게임 카트리지가 장착되어 있다면 분리한 다음, 10분 정도 기다려 주세요. 10분 후에 정상적으로 부팅된다면, 문제는 해결된 것이며 재발 가능성이 낮습니다
3. SD 카드의 `Nintendo 3DS` 폴더를 다른 이름(예: `NIntendo 3DS_BACKUP`)으로 변경 후 부팅해보세요. 콘솔이 정상적으로 부팅된다면, `Nintendo 3DS` 폴더 내부에 문제가 있는 것입니다. 홈 메뉴의 추가 데이터를 정리해주세요:
   - Navigate to `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
   - 콘솔 지역에 해당되는 폴더를 삭제해 주세요:
     - **EUR Region**: `00000098`
     - **JPN Region**: `00000082`
     - **USA Region**: `0000008f`
     - **CHN Region**: `000000A1`
     - **KOR Region**: `000000A9`
     - **TWN Region**: `000000B1`
4. 복구 모드로 부팅하여 본체를 업데이트해 보세요:
   - 콘솔의 전원을 꺼 주세요
   - Hold (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A)
   - 콘솔의 전원을 켜 주세요
   - If you were successful, the console will boot to an "update your system" screen
5. [CTRTransfer](ctrtransfer) 설명서를 따라 주세요
6. 지원이 필요하면 [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 (영어로) 지원을 요청해 주세요

:::

### Error message on boot

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"

Luma3DS 구 버전이 설치되있습니다. 최신 버전의 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)을 다시 내려받고 `boot.firm` 파일을 SD 카드의 최상위 디렉토리에 복사해주세요. 이미 파일이 있으면 덮어씌워 주세요. ZIP 파일을 압축 해제할 때, 3DS 관련 파일에서 문제가 있다고 알려져 있은 WinRAR를 제외한 프로그램으로 압축 해제해 주세요.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..."

ARM11 오류 핸들러가 꺼져있거나, 커스텀 펌웨어가 정상적으로 설치되지 않았습니다. Try enabling ARM11 exception handlers:
\+ Power off your console
\+ Hold (Select)
\+ Power on your console, while still holding (Select)
\+ If the "Disable ARM11 exception handlers" box is checked, uncheck it

:::

:::details HOME Menu is missing installed applications

여러 이유가 있을 수 있지만, 대부분 시스템이 SD 카드를 읽지 못해 발생합니다.
SD 카드가 읽혔는지 확인하려면 SELECT를 누른 채 부팅해 아래 화면의 노란색 문구를 확인하세요: "Booted from CTRNAND via B9S"가 표시된다면 SD 카드가 읽히지 않아 내부 메모리에서 부팅되었음을 의미합니다.
그렇다면, 다음 단계를 따라주세요. 쉬운 것부터 어려운 순으로 나열되어 있습니다:

1. 콘솔의 전원을 종료하고, SD 카드를 분리한 뒤, 다시 장착하고 전원을 켜 보세요
2. 콘솔의 전원을 종료하고, SD 카드를 분리한 뒤, PC에 장착하세요. 최신 버전의 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)를 다운받아 `Luma3DS.zip`에서 `boot.firm` 파일을 복사해 SD 카드의 루트에 넣어주세요. 이미 있다면 덮어씌워주세요
3. 콘솔의 전원을 끄고, SD 카드를 분리한 뒤, PC에 장착해 운영 체제에 따른 방식으로 포멧해 주세요: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). _(이 과정은 SD 카드의 데이터를 모두 삭제합니다)_
4. 컴퓨터의 운영 체제에 따라 SD 카드에 오류가 있는지를 확인해주세요: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). SD 카드에 오류가 있다고 표시되면, SD 카드를 교체해야 합니다
5. SD 카드 슬롯이 파손되었을 수 있습니다. [Nintendo Homebrew Discord 서버](https://discord.gg.MWxPgEp)에 오셔서 도움을 요청하세요

:::

:::details Blue "BOOTROM ERROR" screen

이 콘솔은 벽돌 상태입니다. ntrboot 플래시카트를 구매한 후 이를 이용해 boot9strap를 설치하여 콘솔을 복구해야 합니다. 이 문제는 또 콘솔의 하드웨어 문제가 있다는 뜻일수도 있습니다. 어떠한 경우가 됐든, [Nintendo Homebrew Discord 서버](https://discord.gg.MWxPgEp)에 오셔서 도움을 요청하세요.
\+ 또는, 누군가가 부팅 배경화면을 벽돌 사진으로 변경 했을 수도 있습니다. 콘솔을 이 화면에 5분 동안 나둬 보세요.

:::

:::details Some other error

에러 사진을 찍고 [Nintendo Homebrew Discord 서버](https://discord.gg.MWxPgEp)에 오셔서 도움을 요청하세요.

:::

## Software issues on consoles with custom firmware

:::details DSi / DS functionality is broken or has been replaced with Flipnote Studio

1. 최신 버전의 [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (`.3dsx` 파일)을 다운로드해 주세요
2. 콘솔의 전원을 꺼 주세요
3. SD 카드의 루트에 `3ds` 폴더가 없을 경우 폴더를 만들어 주세요
4. `TWLFix-CFW.3dsx` 파일을 SD 카드의 `/3ds/` 폴더에 복사해 주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요
6. Homebrew Launcher를 실행해 주세요
7. 홈브류 목록에서 TWLFix-CFW를 실행해 주세요
8. (A)를 눌러 문제의 TWL 타이틀을 제거해 주세요
9. (Start)를 눌러 콘솔을 다시 시작해 주세요
10. 본체 설정의 "기타 설정"에서 가장 오른쪽에 있는 "본체 업데이트"를 선택해 콘솔을 업데이트해 주세요
    - The update will see that the essential TWL titles have been uninstalled, and will redownload and reinstall them
11. 업데이트 완료 시 "OK"를 눌러 콘솔을 다시 시작해 주세요

:::

:::details GBA Virtual Console and/or Safe Mode functionality is broken

콘솔에 (아마 arm9loaderhax를 통해) Luma3DS 6.6 이하의 버전이 설치되어 있습니다. [A9LH를 B9S로 업데이트](a9lh-to-b9s)를 따라서 콘솔을 현재의 커스텀 펌웨어 환경으로 업데이트해 주세요.

:::

:::details Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work

이 문제는 구 3DS / 2DS 콘솔의 지역을 변경하거자 CTRTransfer를 한 이후 나타날 수 있는 상황입니다. Follow the instructions [here](region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).

:::

:::details Exception screen when booting/loading an application

[여기 (영어)](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen)에서 오류 화면을 찾아보세요.
해당 오류를 찾지 못했거나 설명으로 해결되지 않은 경우, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에서 도움을 요청하세요.

:::

:::details Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher

menuhax67가 여전히 설치되어 있는 듯합니다. To uninstall menuhax67, download the latest release of [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (the menuhax `.zip`), then follow the ["Uninstall menuhax67" section](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.

:::

---

## Other troubleshooting

:::details Clear HOME Menu extdata

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드에 있는 `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` 폴더로 이동해 주세요
4. 콘솔 지역에 해당되는 폴더를 삭제해 주세요:
   - **EUR Region**: `00000098`
   - **JPN Region**: `00000082`
   - **USA Region**: `0000008f`
   - **CHN Region**: `000000A1`
   - **KOR Region**: `000000A9`
   - **TWN Region**: `000000B1`
5. SD 카드를 콘솔에 다시 삽입해 주세요

:::

:::details Clear HOME Menu theme data

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드에 있는 `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` 폴더로 이동해 주세요
4. 콘솔 지역에 해당되는 폴더를 삭제해 주세요:
   - **EUR Region**: `000002ce`
   - **JPN Region**: `000002cc`
   - **USA Region**: `000002cd`
5. SD 카드를 콘솔에 다시 삽입해 주세요

:::

:::details Manually entering Homebrew Launcher

HOME 메뉴를 통해 Homebrew Launcher 애플리케이션에 접근이 불가능할 경우, 다음 방법을 통해 수동으로 Homebrew Launcher에 접근할 수 있습니다. (You will need [boot.3dsx and boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) on the root of your SD card.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details Turning off Parental Controls

You can disable the Parental Controls feature by going to System Settings -> Parental Controls and inserting the PIN, then pressing "Clear Settings", then "Delete" to remove it.
However, if you do not know the PIN and therefore cannot access the console's settings, you will need to disable it. In order to do this, you need to obtain your console's master key (mkey):

1. Go to [this website](https://mkey.eiphax.tech/)
2. Fill the following boxes with the information:
   - Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
   - System Date: The day and month your console's clock is set to
   - Inquiry Number: Can be obtained by pressing "Forgot PIN" then "I Forgot" in the Parental Controls screen
3. After you have obtained your mkey, press OK on the screen you have obtained your Inquiry Number, then input the master key
4. Press "Clear Settings", then "Delete" to remove all Parental Controls data

:::
