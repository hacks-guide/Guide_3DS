# boot9strap 설치 (MSET9 Play Store)

:::details 기술적 상세 정보 (선택 사항)

[MSET9](https://github.com/zoogie/MSET9) 은 [zoogie](https://github.com/zoogie) 에 의해 개발된 본체 설정 앱의 취약점을 공략하는 방법입니다. 이 취약점은 ID1의 이름이 _어떤 이름이든 간에_ 32글자면 된다는 것을 이용합니다. (ID1 폴더는 Nintendo 3DS 폴더 속, 32글자짜리 ID0 폴더 안에 있는 또다른 32글자 폴더입니다.) 특정한 작업들을 수행하면 콘솔에서 ID1 폴더 이름으로 인코딩된 명령어가 실행되며, 이를 통해 3DS에 대한 전체 제어 권한을 획득할 수 있습니다.

:::

## 호환성 안내

::: warning

이 작업은 Android 휴대폰/태블릿 또는 크롬북을 요구합니다. 만약 윈도우나 macOS, 리눅스가 가동되는 컴퓨터를 가지고 있다면, 이 방법 대신 [boot9strap 설치 (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) 를 따르세요. 만약 이 장비들 중 하나도 사용할 수 없는 상황이라면, [다른 취약점](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits)을 사용해야 할 수 있습니다.

:::

::: warning

Android 휴대폰/태블릿에서 요구되는 최소 Android 버전은 6.0 (마시멜로) 입니다.

:::

## 준비물

- The following applications installed from the Google Play Store:
    - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
    - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    - If you wish, you can sideload these applications instead
- The latest release of [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (the Release `.zip` file)

## 진행 방법

### 섹션 I - 준비 작업

이 섹션에서, MSET9 취약점 발동을 위해 SD 카드에 필요한 데이터를 작성할 것입니다.

1. SD 카드를 휴대폰/태블릿/컴퓨터에 삽입해 주세요

2. Copy everything from the Release `.zip` to the root of your SD card, overwriting any existing files:

    - Open ZArchiver
    - If prompted, [allow ZArchiver to access files on your SD card](/images/screenshots/mset9/zarchiver-allow.png)
    - Navigate to where the downloaded MSET9 Release `.zip` is located ([likely in the Downloads folder](/images/screenshots/mset9/zarchiver-zip-location.png))
    - Select the Release `.zip`, then select "Extract..." ([image](/images/screenshots/mset9/zarchiver-extract-1.png))
    - Navigate to your SD card, then tap the blue 'down arrow' icon to extract the files to the root of your SD card ([image](/images/screenshots/mset9/zarchiver-extract-2.png))

    ::: info

    ![](/images/screenshots/mset9/mset9-root-layout-android.png)

    :::

3. [MSET9 Installer 앱](/images/screenshots/mset9/mset9-setup-android.png) 을 실행해 주세요

4. `Select "Nintendo 3DS" Folder`(Nintendo 3DS 폴더 선택)을 터치한 다음, SD 카드 내의 `Nintendo 3DS` 폴더로 들어가 주세요 ([예시](/images/screenshots/mset9/select-mset9-folder-1.png))

5. `Nintendo 3DS` 폴더에 들어간 후, "Use this folder" (이 폴더 사용)을 터치한 다음, "Allow" 를 눌러 접근을 허용해줍니다 ([예시](/images/screenshots/mset9/select-mset9-folder-2.png))

6. If `Setup MSET9` is [highlighted](/images/screenshots/mset9/setup-mset9-highlighted.png), proceed to the next step
    - If you get an error, you need to resolve before you can use MSET9. Refer to the [troubleshooting](troubleshooting-mset9)

7. Tap on `Setup MSET9` to begin the process of setting up MSET9

8. After reviewing the disclaimer, tap on `Confirm` to accept it

9. Tap on the photo corresponding to your console model, then at the bottom, pick your current firmware version

10. If you see the prompt of `Hax ID1 Created`, tap OK to continue
    - If you get an error, check the [troubleshooting](troubleshooting-mset9), then try again
    - Your 3DS will appear to lose most data / no user-installed apps on HOME Menu. This is expected. Your data will come back at a later step

11. SD 카드를 콘솔에 다시 삽입해 주세요

12. 콘솔의 전원을 켜 주세요

13. Open Mii Maker

14. Wait for your console to reach the "Welcome to Mii Maker" screen, then exit Mii Maker
    - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
    - If you just reach the normal Mii Maker screen, exit Mii Maker and return to the HOME Menu

15. Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
    - This will not wipe any of your data

16. Power off your console by pressing the power button then tapping Power Off on the lower screen

17. SD 카드를 휴대폰/태블릿/컴퓨터에 삽입해 주세요

18. The MSET9 Installer application should automatically check if you have done previous steps properly
    - It may take a few seconds for the app to detect the SD card and react
    - If it doesn't check automatically, tap `Check MSET9 status` to check manually
    - If you get an error, check the [troubleshooting](troubleshooting-mset9), then try again

19. If the check passed, you'll see `Inject trigger file` become [highlighted](/images/screenshots/mset9/inject-trigger-highlighted.png) and you can continue to the next step. **Do not inject trigger yet.** Put your phone/tablet/computer aside for now

20. SD 카드를 콘솔에 다시 삽입해 주세요

### Section II - MSET9

이 섹션에서는, MSET9을 작동시켜 SafeB9SInstaller (커스텀 펌웨어 설치 프로그램) 를 실행할 것입니다.

::: danger

본 과정은 **정확하게** 진행되어야 하며, 오류를 막기 위해 **모든 실행 과정을 재확인해야 합니다!**

:::

1. Power on your console, ensuring System Settings is selected
    - If System Settings is not selected, **[hover over](/images/screenshots/mset9/hover-settings.png)** the System Settings icon using the D-Pad, power your console off, then back on
2. (A)를 눌러 본체 설정을 실행해 주세요
3. Navigate to `Data Management` -> `Nintendo 3DS` -> `Extra Data` ([image](/images/screenshots/mset9/settings-extdata.png))
4. **Do not press any buttons or touch the screen**
5. **어떠한 버튼도 하단 화면도 건드리지 않은 상태에서, 기기의 전원이 여전히 켜진 상태에서** SD 카드를 기기에서 제거해 주세요
    - The menu will refresh and say that no SD card is inserted, which is expected
6. SD 카드를 휴대폰/태블릿/컴퓨터에 삽입해 주세요
7. MSET9 Installer를 실행해 주세요
8. Tap `Inject trigger file`
    - The button should become greyed out and `Remove trigger file` become [highlighted](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. **어떠한 버튼도 하단 화면도 건드리지 않은 상태에서** SD 카드를 콘솔에 삽입해 주세요
10. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
    - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting-mset9)

### 섹션 III - boot9strap 설치하기

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9)
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

### 섹션 IV - MSET9 제거

이 섹션에서, 이후에 생길 문제를 방지하기 위해 MSET9를 제거할 것입니다. (MSET9이 지워진다고 방금 설치한 커스텀 펌웨어가 지워지진 않습니다.)

::: danger

본 섹션은 절대 넘기면 안 됩니다! 본 섹션을 건너뛸 경우, 어플리케이션들이 충돌을 일으키고 다음 단계에서 오류가 발생할 것입니다.

:::

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 휴대폰/태블릿/컴퓨터에 삽입해 주세요
3. MSET9 Installer를 실행해 주세요
4. Tap `Remove MSET9`
5. MSET9 Installer를 종료해 주세요

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

섹션 IV - MSET9 제거를 진행하셨나요? 그 섹션은 필수적입니다.

:::

::: tip

[마무리 단계](finalizing-setup) 로 계속합니다

:::
