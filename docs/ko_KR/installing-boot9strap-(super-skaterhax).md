---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# boot9strap 설치 (super-skaterhax)

:::details 기술적 상세 정보 (선택 사항)

이 페이지에 사용되는 익스플로잇에 자세한 설명은 [여기](https://github.com/zoogie/super-skaterhax)를 참고해 주세요.

:::

### 호환성 안내

(Homebrew Launcher를 실행하기 위해 활용되는) super-skaterhax는 모든 지역의 11.15.0 이상 버전 뉴 3DS 시리즈에 호환됩니다.

::: warning

여기에서 제공하는 방법은 New 3DS, New 3DS XL, New 2DS XL에만 적용됩니다. 해킹되는 콘솔이 New 3DS, New 3DS XL, 또는 New 2DS XL이 맞는지 확인 하고 진행하시길 바랍니다.

:::

### 준비물

- The [Super-skaterhax](https://skater.nintendohomebrew.com) zip for your console's region and system version

#### 섹션 I - 준비 작업

이 섹션에서 super-skaterhax하고 Homebrew Launcher를 실행할 파일을 복사합니다.

1. 콘솔의 전원을 꺼 주세요

2. SD 카드를 컴퓨터에 삽입해 주세요

3. Super-skaterhax `.zip` 안의 파일들을 모두 복사하여 SD 카드의 루트에 붙여넣어 주세요. 존재하는 파일이 있을 경우 덮어쓰기 해주세요.

    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

4. SD 카드를 콘솔에 다시 삽입해 주세요

5. 콘솔의 전원을 켜 주세요

6. 본체 설정을 실행해 주세요

7. "기타 설정"을 선택해 주세요

8. Navigate to "Profile" -> "Region Settings"
    - These settings will be temporarily changed to increase the success rate of the exploit
    - You can restore your region settings back to normal once you have finished this page
    - If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that says you will lose access to Nintendo Network ID features, you can safely select OK to continue

9. Select the following options according to your console's region ([image](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. Navigate to "Date & Time"

11. Set "Today's Date" and "Current Time" to the current date and time in your timezone

12. 본체 설정을 종료해 주세요

#### 섹션 II - super-skaterhax

이 섹션에서는, 브라우저 취약점을 이용하는 웹사이트에 접속해 Homebrew Launcher를 실행합니다.

::: info

A video detailing these steps is available [here](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Open the Internet Browser
2. Tap the 3-line (☰) icon on the bottom-right corner of the screen
3. Tap `Settings` -> scroll down -> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK`
    - The browser will close
4. Reopen the Internet Browser
5. Tap `Next` -> `Google` -> `OK` -> `OK`
6. Tap on the address bar at the top of the bottom screen
7. Enter the URL corresponding to your console's region:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Tap "Open"
    - You should see the text "GO GO!". Do not click on it yet
9. Tap the 3-line (☰) icon on the bottom-right corner of the screen
10. Tap on "Add to Bookmarks"
11. Tap the 3-line (☰) icon on the bottom-right corner of the screen
12. Tap on `Settings` -> `Delete Cookies` -> `Yes`
13. Press (Home) to return to the HOME Menu, then immediately reopen the Internet Browser
14. Wait for the page to fully load, then tap the "GO GO!" button on the top of the bottom screen
15. Wait for the page to fully load, then press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
16. If your console displays:
    - **"The Homebrew Launcher" screen**: Continue to the next step
    - **A white "Error has occurred" message box**: The exploit failed due to random chance. Open System Settings, change the language to a different one (if possible), then retry this section. Be persistent; you may have to repeat this sequence up to ten times
        - On JPN/KOR region consoles, there is only one language setting. On those consoles, you should open System Settings, close it, then retry this section
        - If the exploit is still unsuccessful after more than ten attempts, there may be a problem with your files or SD card. Ensure that you are **not** using WinRAR to extract files, as it is known to cause issues
    - **A black screen that says "An error has occurred"**: Your file placement is incorrect. Ensure that the super-skaterhax files are on the root of the SD card
    - **A yellow screen**: Homebrew Launcher failed to open due to random chance. Hold the POWER button until the console turns off, then retry this section
    - **[The word "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: You have an Old 3DS, where this exploit **does not work**. 이 경우, [MSET9](installing-boot9strap-\(mset9\)) 취약점을 진행해야 합니다
17. 홈브류 목록에서 nimdsphax를 실행해 주세요
18. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
    - 콘솔이 적색 혹은 녹색 화면에서 멈출 경우, 전원 버튼을 꾹 눌러 강제 종료한 다음, 이 섹션을 다시 진행해 주세요

#### 섹션 III - boot9strap 설치하기

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

[마무리 단계](finalizing-setup) 로 계속합니다

:::
