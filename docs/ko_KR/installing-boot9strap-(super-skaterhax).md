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

   ![](/images/screenshots/skater-root-layout.png)

   :::

4. SD 카드를 콘솔에 다시 삽입해 주세요

5. 콘솔의 전원을 켜 주세요

6. 본체 설정을 실행해 주세요

7. "기타 설정"을 선택해 주세요

8. Navigate to "Profile" -> "Region Settings"
   - If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that tells you that you will lose access to Nintendo Network ID features, you can safely select OK to continue
   - After completing this page, you can restore the region settings back to normal

9. Select the following options according to your console's region ([image](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. 본체 설정을 종료해 주세요

#### 섹션 II - super-skaterhax

이 섹션에서는, 브라우저 취약점을 이용하는 웹사이트에 접속해 Homebrew Launcher를 실행합니다.

::: info

아직 안하셨다면, 콘솔을 인터넷에 연결해 주세요.

:::

1. HOME 메뉴에서 L, R 버튼을 동시에 눌러 카메라를 열어 주세요
   - 카메라를 열 수 없다면, 인터넷 브라우저를 열어 URL을 직접 입력해주세요 (EUR/USA/JPN의 경우 `https://zoogie.github.io/web/super/`, KOR의 경우 `https://zoogie.github.io/web/korea`).
2. QR 코드 버튼을 터치해, [여기](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)에서 콘솔의 지역에 맞는 QR 코드를 스캔해주세요
   - If you get a security certificate warning, please ensure that the system date is today's
3. (Select) 버튼을 눌러 북마크 탭을 열어주세요
   - (Select) 버튼이 동작하지 않는다면, 화면 왼쪽 아래에 있는 별 아이콘을 눌러주세요
4. "즐겨찾기에 추가" 를 선택해 주세요
5. (B)를 눌러 브라우저로 돌아가 주세요
6. Press (ZR) to open the tab list
   - If your (ZR) button does not respond, tap the two overlapped squares near the bottom-right corner of the screen
7. Make sure that the only tab open is the super-skaterhax website
   - This tab should be highlighted in blue on the tab list
   - If other tabs are open, close them
8. (B)를 눌러 브라우저로 돌아가 주세요
9. (Start) 를 눌러 브라우저 메뉴를 열어 주세요
   - If your (Start) button does not respond, tap the 3-line menu on the bottom-right corner of the screen
10. "설정"을 선택해 주세요
11. "쿠키 삭제"를 선택해 주세요
12. (A)를 눌러 진행해 주세요
13. (Home) 을 눌러 HOME 메뉴로 돌아간 다음 바로 (A) 를 눌러 브라우저를 다시 실행해 주세요
14. 아래 화면 위에 "GO GO!" 버튼을 선택해 주세요
15. Press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
    - 만약 콘솔에 노란 화면이 표시되면, 전원 버튼을 길게 눌러 콘솔의 전원을 끄고, 이 섹션을 다시 시도해 주세요
    - 만약 콘솔이 적색 화면에서 멈추는 경우, 전원 버튼을 길게 눌러 콘솔의 전원을 끄고, 섹션 II의 3단계를 다시 실행한 다음, 이 섹션을 다시 시도해 주세요
    - If your console [shows the word Text on the top-left corner of the bottom screen](/images/screenshots/skaterhax/skater-old3ds.png), you have an Old 3DS and this exploit **will not work on your device**. 이 경우, [MSET9](installing-boot9strap-\(mset9\)) 취약점을 진행해야 합니다
    - 또 다른 오류가 발생하면 최대 5회까지 다시 시도하고, 여전히 작동하지 않으면 [이 문제 해결 가이드를 따라 주세요](troubleshooting#installing-boot9strap-super-skaterhax)
16. 콘솔은 Homebrew Launcher로 부팅되었을 겁니다
17. 홈브류 목록에서 nimdsphax를 실행해 주세요
18. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
    - 콘솔이 적색 혹은 녹색 화면에서 멈출 경우, 전원 버튼을 꾹 눌러 강제 종료한 다음, 이 섹션을 다시 진행해 주세요
    - 최대 5회까지 다시 시도해 보세요

#### 섹션 III - boot9strap 설치하기

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - 아래 화면의 단계가 붉은 텍스트로 표시되고 키 콤보 입력을 요구하지 않는다면, [이 문제 해결 가이드](troubleshooting#issues-with-safeb9sinstaller)를 참고해 주세요
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
