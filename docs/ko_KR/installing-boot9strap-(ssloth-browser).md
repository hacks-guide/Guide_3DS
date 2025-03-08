# boot9strap 설치 (SSLoth-Browser)

:::details 기술적 상세 정보 (선택 사항)

브라우저 앱을 해킹하기 위해서는, 최신 버전으로의 시스템 업데이트 없이 브라우저 앱을 이용하지 못하게 하는 버전 확인 과정을 건너뛰어야 합니다.

SSLoth 익스플로잇의 도움을 받아 이러한 확인을 건너뛸 수 있는 공개 프록시 서버가 있습니다.

확인을 건너뛴 후, 나머지 작업을 진행하게 될 익스플로잇 사이트가 준비되어 있습니다.

이 페이지에 사용되는 익스플로잇에 자세한 설명은 [여기]https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth)와 [여기](https://github.com/TuxSH/universal-otherapp/) (universal-otherapp) (영어) 를 참고해 주세요.

:::

## 호환성 안내

SSLoth는 시스템 버전 11.13.0 및 이전 버전에 있는 사용자가 브라우저 버전 확인을 건너뛰고, 이후 universal-otherapp과 함께 사용할 수 있는 new-broserhax 또는 old-browserhax (모든 지역의 시스템 버전 11.4.0에서 11.13.0에서 호환됨) 을 사용할 수 있게 합니다.

## 준비물

- 최신 버전의 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (직접 다운로드)
- 최신 버전의 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (직접 다운로드)
- 최신 버전의 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (Luma3DS `.zip` 파일)
- 최신 버전의 [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest`) (`otherapp.bin`)

## 진행 방법

### 섹션 I - 준비 작업

이 섹션에서 browserhax하고 universal-otherapp을 실행할 파일을 복사합니다.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. `otherapp.bin`을 SD 카드의 루트에 복사하고 이름을 `arm11code.bin`으로 바꿔 주세요
    - SD 카드의 루트는 SD 카드를 열 때 보이는 디렉토리이고, Nintendo 3DS 폴더가 보이지만 그 안에 들어가 있지 않은 상태의 폴더입니다
    - `.bin` 확장명이 안 보인다면 파일 끝에 추가하지 마세요
4. Luma3DS `.zip`안에 있는 모든 파일들을 SD 카드의 루트에 복사해 주세요
5. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요
6. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요
7. SafeB9SInstaller `.zip`의 `SafeB9SInstaller.bin`을 SD 카드의 루트로 복사해 주세요
8. SD 카드를 콘솔에 다시 삽입해 주세요
9. 콘솔의 전원을 켜 주세요

### 섹션 II - SSLoth

이 섹션에서는, 브라우저가 시스템 업데이트 없이도 정상 작동할 수 있도록, 인터넷 연결 설정을 프록시 네트워크를 이용하게 변경하게 됩니다. 이렇게 하면 다음 섹션에서 브라우저 익스플로잇에 접근할 수 있게 됩니다.

<!--@include: ./_include/addproxy.md -->

1. "뒤로"을 두 번 누르고 "종료"를 눌러 HOME 메뉴로 돌아가 주세요

### 섹션 III - SafeB9SInstaller 실행

이 섹션에서는, boot9strap (커스텀 펌웨어) 설치 도구를 실행하기 위해 브라우저 익스플로잇 웹페이지에서 universal-otherapp을 실행합니다.

1. HOME 메뉴에서 L, R 버튼을 동시에 눌러 카메라를 열어 주세요
    - 카메가 사용이 불가는하다면, 인터넷 브라우저를 열어 URL을 직접 입력하세요: (`https://zoogie.github.io/web/nbhax/`)
2. QR 코드 버튼을 눌러 이 QR 코드 를 스캔해 주세요
    - 오류가 발생하면 이 [문제 해결 가이드](troubleshooting-ssloth-browser) 를 참고해 주세요
    - 보안 인증서 경고가 표시되면, (A)를 눌러 연결을 허용하세요

::: danger

If you receive a prompt telling you to update your console, STOP! Redo Section II from the beginning and ensure you have set up the proxy correctly.

:::

1. "PROCEED TO HAXX" 버튼을 눌러주세요
2. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
    - 오류가 발생하면 이 [문제 해결 가이드](troubleshooting-ssloth-browser) 를 참고해 주세요

### 섹션 IV - boot9strap 설치

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
    - 아래 화면의 단계가 붉은 텍스트로 표시되고 키 콤보 입력을 요구하지 않는다면, [이 문제 해결 가이드](troubleshooting-ssloth-browser)를 참고해 주세요
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

### 섹션 V - 기본 프록시 복원

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

[마무리 단계](finalizing-setup) 로 계속합니다

:::
