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

::: info

This exploit is known to be inconsistent: it works for some people, but not others. 좀 더 일관된 취약점을 사용하고 싶다면 대신 더 오래 걸릴 수 있지만 최종 결과는 동일한 [MSET9](installing-boot9strap-\(mset9\)) 취약점을 진행하세요.

:::

### 준비물

- 콘솔의 지역과 시스템 버전에 맞는 [Super-skaterhax](https://skater.nintendohomebrew.com) zip 파일

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

8. "유저 정보" -> "지역 정보"로 이동해 주세요
    - 이 설정은 취약점의 성공 확률을 높이기 위해 일시적으로 변경하는 설정입니다.
    - 이 페이지를 완료하게 되면 지역 설정을 원래대로 복구해도 됩니다.
    - 만약 닌텐도 네트워크 ID 기능에 대한 접근 권한을 잃는다는 [경고 (영어)](/images/screenshots/skaterhax/country-change-notice.png)가 나타난다면, OK를 눌러 넘어가도 괜찮습니다.

9. 콘솔의 지역에 따라 다음 옵션을 선택합니다 ([이미지](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. "날짜와 시각"으로 이동해 주세요

11. "날짜"와 "시각"을 당신의 시간대에 맞는 날짜와 시각으로 설정해주세요

12. 본체 설정을 종료해 주세요

#### 섹션 II - super-skaterhax

이 섹션에서는, 브라우저 취약점을 이용하는 웹사이트에 접속해 Homebrew Launcher를 실행합니다.

::: info

아래 단계에 대한 세부 영상은 [여기 (영어)](https://www.youtube.com/watch?v=DEcZB72vJts) 있습니다.

:::

1. 인터넷 브라우저를 열어주세요
2. 화면 오른쪽 아래 구석에 있는 3줄 (☰) 아이콘을 누르세요
3. `설정` -> 아래로 스크롤 -> `저장 데이터 초기화` -> `초기화` -> `초기화` -> `OK` 를 누르세요
    - 브라우저가 닫힐 것입니다
4. 인터넷 브라우저를 다시 열어주세요
5. `다음` -> `Google` -> `OK` -> `OK` 를 누르세요
6. 아래 화면의 위에 있는 주소 바를 누르세요
7. 콘솔 지역에 해당하는 URL을 입력하세요:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. "열기"를 누르세요
    - "GO GO!"라는 글자가 보일 겁니다. 아직 누르지 마세요
9. 화면 오른쪽 아래 구석에 있는 3줄 (☰) 아이콘을 누르세요
10. "즐겨찾기에 추가" 버튼을 누르세요
11. 화면 오른쪽 아래 구석에 있는 3줄 (☰) 아이콘을 누르세요
12. `설정` -> `쿠키 삭제` -> `삭제`를 누르세요
13. (Home) 을 눌러 HOME 메뉴로 돌아간 다음 바로 브라우저를 다시 열어 주세요
14. 페이지가 완전히 로딩될때까지 기다린 후, 아래 화면의 위에 있는 "GO GO!" 버튼을 누르세요
15. 페이지가 완전히 로딩될때까지 기다린 후, (A)를 눌러 [팝업](/images/screenshots/skaterhax/skater-popup.png)을 끄세요
16. 만약 콘솔이 아래처럼 표시한다면:
    - **"Homebrew Launcher" 화면**: 다음 단계로 계속
    - **하얀색 "오류가 발생했습니다" 메시지 상자**: 랜덤 확률로 인해 취약점이 실패했습니다. 본체 설정을 열고, (가능하다면) 언어를 다른 것으로 바꾼 후, 이 단계를 다시 시도해보세요. You may have to repeat this sequence up to ten times
        - JPN/KOR 지역 콘솔의 경우, 언어 설정이 1가지 뿐입니다. 이런 콘솔에서는, 본체 설정을 연 후, 닫고, 다시 단계를 진행해보세요
        - If the exploit is still unsuccessful after five attempts, there may be a problem with your files or prep work. Ensure that region and date/time are correct, and that you have been following this section **exactly**. If you used WinRAR to extract files to the SD card, re-extract the files using File Explorer or 7-zip instead
        - If the exploit is still unsuccessful after ten attempts, follow [MSET9](installing-boot9strap-\(mset9\)) instead
    - **"오류가 발생했습니다"라고 나오는 검정색 화면**: 파일 배치가 올바르지 않습니다. Ensure that the super-skaterhax files are on the root of the SD card
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
