# boot9strap 설치 (MSET9 Play Store)

:::details 기술적 상세 정보 (선택 사항)

[MSET9](https://github.com/zoogie/MSET9) 은 [zoogie](https://github.com/zoogie) 에 의해 개발된 본체 설정 앱의 취약점을 공략하는 방법입니다. 이 취약점은 ID1의 이름이 _어떤 이름이든 간에_ 32글자면 된다는 것을 이용합니다. (ID1 폴더는 Nintendo 3DS 폴더 속, 32글자짜리 ID0 폴더 안에 있는 또다른 32글자 폴더입니다.) Performing a specific sequence of actions results in the console executing the instructions that are encoded into the ID1 folder name, which can be used to grant full control over the console.

:::

## 호환성 안내

::: warning

이 작업은 Android 휴대폰/태블릿 또는 크롬북을 요구합니다. 만약 윈도우나 macOS, 리눅스가 가동되는 컴퓨터를 가지고 있다면, 이 방법 대신 [boot9strap 설치 (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) 를 따르세요. 만약 이 장비들 중 하나도 사용할 수 없는 상황이라면, [다른 취약점](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits)을 사용해야 할 수 있습니다.

:::

::: warning

Android 휴대폰/태블릿에서 요구되는 최소 Android 버전은 6.0 (마시멜로) 입니다.

:::

## 준비물

- 최신 버전의 [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (MSET9 `.zip` 파일)
- Google Play 스토어에서 다음과 같은 애플리케이션을 설치해 주세요:
    - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
    - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    - 필요한 경우 Play 스토어 외의 사이트에서 받아서 설치할 수 있습니다.

## 진행 방법

### 섹션 I - 준비 작업

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with almost no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. 현재 존재하는 유저 데이터는 사라지지만, 이 페이지의 작업을 끝낸다면 다시 복구될 것입니다．

1. SD 카드를 휴대폰/태블릿/컴퓨터에 삽입해 주세요

2. MEST9 `.zip` 안의 파일들을 모두 복사하여 SD 카드의 루트에 붙여넣어 주세요. 존재하는 파일이 있을 경우 덮어쓰기 해주세요:

    - ZArchiver를 열어주세요
    - If prompted, [allow ZArchiver to access files on your SD card](/images/screenshots/mset9/zarchiver-allow.png)
    - Navigate to where the downloaded MSET9 `.zip` is located ([likely in the Downloads folder](/images/screenshots/mset9/zarchiver-zip-location.png))
    - Select the MSET9 `.zip`, then select "Extract..." ([이미지 (영어)](/images/screenshots/mset9/zarchiver-extract-1.png))
    - Navigate to your SD card, then tap the blue 'down arrow' icon to extract the files to the root of your SD card ([image](/images/screenshots/mset9/zarchiver-extract-2.png))

    ::: info

    ![](/images/screenshots/mset9/mset9-root-layout-android.png)

    :::

3. [MSET9 Installer 앱](/images/screenshots/mset9/mset9-setup-android.png) 을 실행해 주세요

4. `Select "Nintendo 3DS" Folder`(Nintendo 3DS 폴더 선택)을 터치한 다음, SD 카드 내의 `Nintendo 3DS` 폴더로 들어가 주세요 ([예시](/images/screenshots/mset9/select-mset9-folder-1.png))

5. `Nintendo 3DS` 폴더에 들어간 후, "Use this folder" (이 폴더 사용)을 터치한 다음, "Allow" 를 눌러 접근을 허용해줍니다 ([예시](/images/screenshots/mset9/select-mset9-folder-2.png))

6. If `Setup MSET9` is [highlighted](/images/screenshots/mset9/setup-mset9-highlighted.png), proceed to the next step
    - If you get an error, you need to resolve before you can use MSET9. [문제 해결](troubleshooting-mset9)을 참조해 주십시오

7. Tap on `Setup MSET9` to begin the process of setting up MSET9

8. After reviewing the disclaimer, tap on `Confirm` to accept it

9. 콘솔 모델에 맞는 사진을 터치한 다음, 현재 펌웨어 버전에 맞는 버튼을 터치해 주세요

10. If you see the prompt of `Hax ID1 Created`, tap OK to continue
    - 에러 발생시, [문제 해결](troubleshooting-mset9)을 확인 후 다시 시도해 주세요
    - Your console will appear to lose most data / no user-installed apps on HOME Menu. **이건 예상된 결과입니다.** 이후 과정을 거치면서 원본 데이터는 복구될 것입니다

11. SD 카드를 콘솔에 다시 삽입해 주세요

12. 콘솔의 전원을 켜 주세요

13. Mii 스튜디오를 열어주세요

14. 콘솔이 [Mii 스튜디오에 오신 것을 환영합니다! (영어 사진)](/images/screenshots/mset9/mii-welcome.png) 화면까지 오면, Mii 스튜디오를 종료하고 HOME 메뉴로 나가주세요
    - [이 화면 (영어)](/images/screenshots/mset9/mii-extdata.png)을 보게 될 것입니다. 필요한 파일을 작성하고 있는 것이니 기다려주세요
    - [(영어 사진) 일반적인](/images/screenshots/mset9/mii-existing.png) Mii 스튜디오 화면을 보게된다면, 데이터가 이미 존재하는 것입니다. Mii 스튜디오를 종료한 후 HOME 메뉴로 돌아가세요.

15. 본체 설정을 실행한 후 `데이터 관리` -> `Nintendo 3DS 데이터 관리` -> `소프트웨어 관리` -> 초기화 ([영어 사진](/images/screenshots/database-reset.jpg))로 이동해 주세요.
    - 이 과정은 데이터를 삭제하지 않습니다.

16. Power off your console by pressing the power button then tapping Power Off on the lower screen

17. SD 카드를 휴대폰/태블릿/컴퓨터에 삽입해 주세요

18. The MSET9 Installer application should automatically check if you have done previous steps properly
    - It may take a few seconds for the app to detect the SD card and react
    - If it doesn't check automatically, tap `Check MSET9 status` to check manually
    - 에러 발생시, [문제 해결](troubleshooting-mset9)을 확인 후 다시 시도해 주세요

19. If the check passed, you'll see `Inject trigger file` become [highlighted](/images/screenshots/mset9/inject-trigger-highlighted.png) and you can continue to the next step. **Do not inject trigger yet.** Put your phone/tablet/computer aside for now

20. SD 카드를 콘솔에 다시 삽입해 주세요

### 섹션 II - MSET9

이 섹션에서는, MSET9을 작동시켜 SafeB9SInstaller (커스텀 펌웨어 설치 프로그램) 를 실행할 것입니다.

::: danger

본 과정은 **정확하게** 진행되어야 하며, 오류를 막기 위해 **모든 실행 과정을 재확인해야 합니다!**

:::

1. 콘솔의 전원을 켜고, 본체 설정이 선택되어 있는지 확인하세요
    - 본체 설정이 선택되어 있지 않다면, 십자 패드를 이용해 본체 설정 앱을 **[띄워 놓고 (영어 사진)](/images/screenshots/mset9/hover-settings.png)**, 전원을 종료한 뒤, 다시 시도해 주세요
2. (A)를 눌러 본체 설정을 실행해 주세요
3. `데이터 관리` -> `Nintendo 3DS` -> `추가 데이터 관리`로 들어가주세요. ([영어 사진](/images/screenshots/mset9/settings-extdata.png))
4. **절대 어떠한 버튼도 만지지 말고 스크린도 터치하지 마세요**
5. **어떠한 버튼도 하단 화면도 건드리지 않은 상태에서, 기기의 전원이 여전히 켜진 상태에서** SD 카드를 기기에서 제거해 주세요
    - The menu will refresh and say that no SD card is inserted, which is expected
6. SD 카드를 휴대폰/태블릿/컴퓨터에 삽입해 주세요
7. MSET9 Installer를 실행해 주세요
8. Tap `Inject trigger file`
    - The button should become greyed out and `Remove trigger file` become [highlighted](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. **어떠한 버튼도 하단 화면도 건드리지 않은 상태에서** SD 카드를 콘솔에 삽입해 주세요
10. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
    - 붉은 화면이 뜨거나 로딩 화면에서 멈출 경우, [다음 문제 해결 가이드](troubleshooting-mset9) 내용을 따라주세요

### 섹션 III - boot9strap 설치하기

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
    - 하단 화면의 단계가 붉은색 글자로 표시되고 키 조합 입력을 요구하지 않는다면, [이 문제 해결 가이드를 참고해주세요](troubleshooting-mset9)
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

### 섹션 IV - MSET9 제거

이 섹션에서는, 추가 문제를 방지하고 게임, 테마 등의 유저 데이터를 복구하기 위해 MSET9을 제거할 것입니다. (방금 설치한 커스텀 펌웨어가 지워지진 않습니다.)

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
