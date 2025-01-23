# boot9strap 설치 (MSET9 CLI)

:::details 기술적 상세 정보 (선택 사항)

[MSET9](https://github.com/zoogie/MSET9) 은 [zoogie](https://github.com/zoogie) 에 의해 개발된 본체 설정 앱의 취약점을 공략하는 방법입니다. 이 취약점은 ID1의 이름이 _어떤 이름이든 간에_ 32글자면 된다는 것을 이용합니다. (ID1 폴더는 Nintendo 3DS 폴더 속, 32글자짜리 ID0 폴더 안에 있는 또다른 32글자 폴더입니다.) 특정한 작업들을 수행하면 콘솔에서 ID1 폴더 이름으로 인코딩된 명령어가 실행되며, 이를 통해 3DS에 대한 전체 제어 권한을 획득할 수 있습니다.

:::

## 호환성 안내

::: warning

이 방법은 Windows OS, Linux, 혹은 macOS를 사용하는 컴퓨터가 필요합니다. 안드로이드 폰, 태블릿, 혹은 크롬북을 가지고 있을 경우, [boot9strap 설치 (MSET9 Play 스토어)](installing-boot9strap-\(mset9-play-store\))를 참조해 주세요. 만약 이 장비들 중 하나도 사용할 수 없는 상황이라면, [다른 취약점](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits)을 사용해야 할 수 있습니다.

:::

## 준비물

- 최신 버전의 [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
- **컴퓨터에 설치된** 3.x 버전의 [Python](https://www.python.org/downloads/) (파이썬)
  - If you are on Windows, Python from the Microsoft Store cannot be used. Please install a version from python.org.
  - 리눅스나 macOS를 사용 중인 경우 Python 3(파이썬 3)이 이미 설치되어 있을 것입니다. 터미널을 열고 'python3 -V'를 입력해 주세요. 버전 번호가 나올 경우, 본 가이드에 따라 잘 작동할 것입니다.

## 진행 방법

::: info

이 페이지에서, MSET9 스크립트를 사용하여, MSET9을 작동시킬 것입니다. While the script is in progress, user data will temporarily disappear but will return upon the completion of this page. If you get an error when running the script, the solution to that error can most likely be found on the [troubleshooting](troubleshooting-mset9) page.

:::

### 섹션 I - 준비 작업

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. Your existing user data will disappear, but will come back when you are finished with this page.

1. SD 카드를 컴퓨터에 삽입해 주세요
2. Copy everything from the MSET9 `.zip` to the root of your SD card, overwriting any existing files

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout.png)

   :::

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![](/images/screenshots/mset9/mset9-select.png)

:::
```

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요

   - 창에는 다음과 같이 표시될 것입니다:

   ::: info

   ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - 화면에 표시된 모델과 버전이 정확한지 확인해 주세요
2. Type `1`, then press Enter to begin the process of creating the MSET9 ID1
3. After reviewing the disclaimer, type `1` again and press Enter to accept it
   - If you get an error, check the [troubleshooting](troubleshooting-mset9), then try again
4. If you see the message "Created hacked ID1.", press Enter to close the MSET9 script
   - Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **This is expected.** Your data will come back at a later step
5. SD 카드를 콘솔에 다시 삽입해 주세요
6. 콘솔의 전원을 켜 주세요
7. Open Mii Maker
8. Wait for your console to reach the [Welcome to Mii Maker](/images/screenshots/mset9/mii-welcome.png) screen, then exit Mii Maker and return to the HOME Menu
   - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
   - If you just reach the [normal](/images/screenshots/mset9/mii-existing.png) Mii Maker screen, then the data already exists. Exit Mii Maker and return to the HOME Menu
9. Launch System Settings and navigate to `Data Management` -> `Nintendo 3DS` -> `Software` -> Reset ([image](/images/screenshots/database-reset.jpg))
   - This will not wipe any of your data
10. Power off your console by pressing the power button then tapping Power Off on the lower screen
11. SD 카드를 컴퓨터에 삽입해 주세요

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요

   - The window should change to this and display `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - If the window says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Type `2`, then press Enter to check the MSET9 status and follow the directions indicated
     - Once you have resolved the issue, return to Section I Step 14
     - For more information, check the [troubleshooting](troubleshooting-mset9) page
2. Type `0`, then press Enter to close the script
3. SD 카드를 콘솔에 다시 삽입해 주세요

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
   - The menu will refresh and say that no SD card is inserted
6. SD 카드를 컴퓨터에 삽입해 주세요

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요
2. In the MSET9 window, type `3`, then press Enter to inject MSET9
   - You should see "MSET9 successfully injected!"
3. 엔터키를 눌러 MSET9 스크립트를 종료해 주세요
4. **어떠한 버튼도 하단 화면도 건드리지 않은 상태에서** SD 카드를 콘솔에 삽입해 주세요
5. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
   - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting-mset9)

### 섹션 III - boot9strap 설치하기

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9)
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

### 섹션 IV - MSET9 제거

In this section, you will remove MSET9 to prevent further issues and to restore your user data (games, themes, etc). (This will not remove the custom firmware that you have just installed.)

::: danger

본 섹션은 절대 넘기면 안 됩니다! 본 섹션을 건너뛸 경우, 어플리케이션들이 충돌을 일으키고 다음 단계에서 오류가 발생할 것입니다.

:::

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요

<!--@include: ./_include/mset9-chorus.md -->

1. 콘솔의 모델과 버전을 입력한 다음 엔터키를 눌러주세요
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), skip to Step 6
2. Type `4`, then press Enter to remove the trigger file
   - You should see "Removed trigger file."
3. Type `5`, then press Enter to remove MSET9
   - You should see "Successfully removed MSET9!"
4. 엔터키를 눌러 MSET9 스크립트를 종료해 주세요

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

섹션 IV - MSET9 제거를 진행하셨나요? 그 섹션은 필수적입니다.

:::

::: tip

[마무리 단계](finalizing-setup) 로 계속합니다

:::
