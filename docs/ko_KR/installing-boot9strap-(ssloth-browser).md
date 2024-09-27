# boot9strap 설치 (SSLoth-Browser)

:::details Technical Details (optional)

브라우저 앱을 해킹하기 위해서는, 최신 버전으로의 시스템 업데이트 없이 브라우저 앱을 이용하지 못하게 하는 버전 확인 과정을 건너뛰어야 합니다.

SSLoth 익스플로잇의 도움을 받아 이러한 확인을 건너뛸 수 있는 공개 프록시 서버가 있습니다.

확인을 건너뛴 후, 나머지 작업을 진행하게 될 익스플로잇 사이트가 준비되어 있습니다.

이 페이지에 사용되는 익스플로잇에 자세한 설명은 [여기]https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth)와 [여기](https://github.com/TuxSH/universal-otherapp/) (universal-otherapp) (영어) 를 참고해 주세요.

:::

## Compatibility Notes

SSLoth는 시스템 버전 11.13.0 및 이전 버전에 있는 사용자가 브라우저 버전 확인을 건너뛰고, 이후 universal-otherapp과 함께 사용할 수 있는 new-broserhax 또는 old-browserhax (모든 지역의 시스템 버전 11.4.0에서 11.13.0에서 호환됨) 을 사용할 수 있게 합니다.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

이 섹션에서 browserhax하고 universal-otherapp을 실행할 파일을 복사합니다.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. `otherapp.bin`을 SD 카드의 루트에 복사하고 이름을 `arm11code.bin`으로 바꿔 주세요
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
   - If you do not see the `.bin` extension, do not add it to the end of the filename
4. Luma3DS `.zip`안에 있는 `boot.firm`과 `boot.3dsx`를 SD 카드의 루트에 복사해 주세요
5. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요
6. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요
7. SafeB9SInstaller `.zip`의 `SafeB9SInstaller.bin`을 SD 카드의 루트로 복사해 주세요
8. SD 카드를 콘솔에 다시 삽입해 주세요
9. 콘솔의 전원을 켜 주세요

### Section II - SSLoth

이 섹션에서는, 브라우저가 시스템 업데이트 없이도 정상 작동할 수 있도록, 인터넷 연결 설정을 프록시 네트워크를 이용하게 변경하게 됩니다. 이렇게 하면 다음 섹션에서 브라우저 익스플로잇에 접근할 수 있게 됩니다.

<!--@include: ./_include/addproxy.md -->

1. "뒤로"을 두 번 누르고 "종료"를 눌러 HOME 메뉴로 돌아가 주세요

### Section III - Launching SafeB9SInstaller

이 섹션에서는, boot9strap (커스텀 펌웨어) 설치 도구를 실행하기 위해 브라우저 익스플로잇 웹페이지에서 universal-otherapp을 실행합니다.

1. HOME 메뉴에서 L, R 버튼을 동시에 눌러 카메라를 열어 주세요
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/nbhax/`)
2. QR 코드 버튼을 눌러 [이 QR 코드](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L) 를 스캔해 주세요
   - If you get a crash or an error code, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)
   - If you get a security certificate warning, press (A) to allow the connection
3. "PROCEED TO HAXX" 버튼을 눌러주세요
4. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
   - If you get an error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)

### Section IV - Installing boot9strap

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
