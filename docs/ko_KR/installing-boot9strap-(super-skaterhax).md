# boot9strap 설치 (super-skaterhax)

:::details Technical Details (optional)

이 페이지에 사용되는 익스플로잇에 자세한 설명은 [여기](https://github.com/zoogie/super-skaterhax)를 참고해 주세요.

:::

### Compatibility Notes

(Homebrew Launcher를 실행하기 위해 활용되는) super-skaterhax는 모든 지역의 11.15.0 이상 버전 뉴 3DS 시리즈에 호환됩니다.

::: warning

여기에서 제공하는 방법은 New 3DS, New 3DS XL, New 2DS XL에만 적용됩니다. 해킹되는 콘솔이 New 3DS, New 3DS XL, 또는 New 2DS XL이 맞는지 확인 하고 진행하시길 바랍니다.

:::

### What You Need

- The [super-skaterhax](https://toxicaven.dev/skater) zip for your console's region and system version

#### Section I - Prep Work

이 섹션에서 super-skaterhax하고 Homebrew Launcher를 실행할 파일을 복사합니다.

1. 콘솔의 전원을 꺼 주세요

2. SD 카드를 컴퓨터에 삽입해 주세요

3. Copy everything from the sk8rhax `.zip` to the root of your SD card, overwriting any existing files

   ::: info

   ![](/images/screenshots/skater-root-layout.png)

   :::

4. SD 카드를 콘솔에 다시 삽입해 주세요

5. 콘솔의 전원을 켜 주세요

6. Launch System Settings

7. "기타 설정"을 선택해 주세요

8. Navigate to "Profile" -> "Region Settings"
   - If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that tells you that you will lose access to Nintendo Network ID features, you can safely select OK to continue
   - After completing this page, you can restore the region settings back to normal

9. Select the following options according to your console's region ([image](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Exit System Settings

#### Section II - super-skaterhax

이 섹션에서는, 브라우저 취약점을 이용하는 웹사이트에 접속해 Homebrew Launcher를 실행합니다.

::: info

아직 안하셨다면, 콘솔을 인터넷에 연결해 주세요.

:::

1. HOME 메뉴에서 L, R 버튼을 동시에 눌러 카메라를 열어 주세요
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/super/` for EUR/USA/JPN, `https://zoogie.github.io/web/korea` for KOR)
2. QR 코드 버튼을 터치해, [여기](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)에서 콘솔의 지역에 맞는 QR 코드를 스캔해주세요
   - If you get a security certificate warning, please ensure that the system date is today's
3. Press (Select) to open the bookmark tab
   - If your (Select) button does not respond, tap the star icon on the bottom-left corner of the screen
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
14. Select the "GO GO!" button on the top of the bottom screen
15. Press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
    - If your console freezes on a yellow screen, hold the POWER button until it turns off, then retry this section
    - If your console freezes on a red screen, hold the POWER button until it turns off, redo step 3 of Section II, then retry this section
    - If your console [shows the word Text on the top-left corner of the bottom screen](/images/screenshots/skaterhax/skater-old3ds.png), you have an Old 3DS and this exploit **will not work on your device**. 이 경우, [MSET9](installing-boot9strap-\(mset9\)) 취약점을 진행해야 합니다
    - If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-super-skaterhax)
16. 콘솔은 Homebrew Launcher로 부팅되었을 겁니다
17. 홈브류 목록에서 nimdsphax를 실행해 주세요
18. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
    - If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section
    - This may take up to five attempts

#### Section III - Installing boot9strap

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
