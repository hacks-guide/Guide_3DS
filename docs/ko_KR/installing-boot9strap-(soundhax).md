# boot9strap 설치 (Soundhax)

:::details 기술적 상세 정보 (선택 사항)

이 페이지에 사용되는 익스플로잇에 자세한 설명은 [여기](https://github.com/nedwill/soundhax) (Soundhax)와 [여기](https://github.com/TuxSH/universal-otherapp/) (universal-otherapp) (영어) 를 참고해 주세요.

:::

## 호환성 안내

Soundhax는 (universal-otherapp과 사용할 때) 모든 지역의 1.0.0 이상 11.3.0이하에 사용 가능합니다.

## 준비물

- 최신 버전의 [Soundhax](http://soundhax.com/) _(콘솔의 지역과 버전에 맞게 선택)_
  - 만약 Soundhax가 브라우저에서 실행 불가능한 비디오로 나오면, Ctrl+S 또는 Cmd+S를 눌러 컴퓨터로 저장해 주세요.
- 최신 버전의 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (직접 다운로드)
- 최신 버전의 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (직접 다운로드)
- 최신 버전의 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (Luma3DS `.zip` 파일)
- 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest`) (`otherapp.bin`)

## 진행 방법

### 섹션 I - 준비 작업

이 섹션에서 Soundhax하고 universal-otherapp을 실행할 파일을 복사합니다.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. Soundhax `.m4a`를 SD 카드의 루트에 복사해 주세요
   - SD 카드의 루트는 SD 카드를 열 때 보이는 디렉토리이고, Nintendo 3DS 폴더가 보이지만 그 안에 들어가 있지 않은 상태의 폴더입니다
4. 'otherapp.bin' 파일을 SD 카드의 루트에 복사해 주세요
5. Luma3DS `.zip`안에 있는 모든 파일들을 SD 카드의 루트에 복사해 주세요
6. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요
7. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요
8. SafeB9SInstaller `.zip`의 `SafeB9SInstaller.bin`을 SD 카드의 루트로 복사해 주세요
9. SD 카드를 콘솔에 다시 삽입해 주세요
10. 콘솔의 전원을 켜 주세요

::: info

![](/images/screenshots/soundhax/soundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### 섹션 II - SafeB9SInstaller 실행

이 섹션에서는, boot9strap (커스텀 펌웨어) 설치 도구를 실행하기 위해 닌텐도 3DS 사운드 앱에서 Soundhax를 재생하여 universal-otherapp을 실행합니다.

1. 닌텐도 3DS 사운드 앱을 실행해 주세요

   ::: info

   ![](/images/screenshots/soundhax/soundhax-welcome.png)

   :::

2. 닌텐도 3DS 사운드를 처음 실행하시는 것이라면 앵무새의 팁들을 모두 건너뛰어 주신 다음 앱을 종료한 후. 재실행해 주세요
   - 이 경우에, Soundhax를 바로 실행하면 이 도움말이 끝날 때까지 이 팁들이 닌텐도 3DS 사운드 앱을 실행 할 때마다 나타날 것입니다

3. `/SDCARD`로 가서 "<3 nedwill 2016"를 재생해 주세요

   - 여러 번의 시도가 필요할 수 있습니다 (약 10번)
   - 만약 "Could not play" 메세지가 표시되면, 펌웨어 버전이 Soundhax하고 호환되지 않거나 Soundhax 파일을 잘못 다운로드했다는 뜻 입니다
   - 재생 중 화면이 멈출 경우 전원 버튼을 길게 눌러서 콘솔의 전원을 강제로 끈 후 다시 시도해 주세요
   - 다른 오류가 발생하면 이 [문제 해결 가이드](troubleshooting#installing-boot9strap-soundhax) 를 참고해 주세요

   ::: info

   ![](/images/screenshots/soundhax/soundhax-launch.png)

   :::

4. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다

### 섹션 III - boot9strap 설치하기

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - 아래 화면의 단계가 붉은 텍스트로 표시되고 키 콤보 입력을 요구하지 않는다면, [이 문제 해결 가이드](troubleshooting#issues-with-safeb9sinstaller)를 참고해 주세요
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

[마무리 단계](finalizing-setup) 로 계속합니다

:::
