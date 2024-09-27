# boot9strap 설치 (safecerthax)

:::details Technical Details (optional)

:::

## Compatibility Notes

safecerthax는 시스템 버전 1.0.0 - 11.14.0가 설치되어 있는 모든 구 3DS와 구 2DS 콘솔과 호환됩니다.

::: info

이 방법은 New 3DS, New 3DS XL, 또는 New 2DS XL과 호환되지 않습니다. 해킹되는 콘솔이 Old 3DS, Old 3DS XL, 또는 Old 2DS가 맞는지 확인 하고 진행하시길 바랍니다.

:::

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Hardware Button Check

이 섹션에서는 콘솔의 좌/우 어깨 버튼 (L, R 버튼)이 정상적으로 동작하는지 확인합니다. 이것은 콘솔이 이 방법과 호환되는지 확인합니다.

1. 콘솔의 전원을 켜 주세요
2. HOME 메뉴가 보이면, (L 버튼)과 (R 버튼)을 동시에 눌러주세요
   - The camera applet should appear
3. 콘솔의 전원을 꺼 주세요

::: warning

카메라가 보이지 않으면 이 방법을 따를 수 없습니다. 이 경우, [boot9strap 설치 (MSET9)](installing-boot9strap-\(mset9\)) 를 진행해 주세요.

:::

### Section II - Prep Work

이 섹션에서 safecerthax를 실행할 파일을 복사합니다.

1. SD 카드를 컴퓨터에 삽입해 주세요
2. Luma3DS `.zip`안에 있는 `boot.firm`과 `boot.3dsx`를 SD 카드의 루트에 복사해 주세요
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요
4. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요
5. SafeB9SInstaller `.zip`의 `SafeB9SInstaller.bin`을 SD 카드의 루트로 복사해 주세요
6. SD 카드를 콘솔에 다시 삽입해 주세요
7. 콘솔의 전원을 켜 주세요

### Section III - safecerthax proxy

이 섹션에서는 콘솔의 본체 업데이트 기능을 이용하도록 설계된 프록시 네트워크를 사용하도록 인터넷 연결 설정을 변경합니다.

<!--@include: ./_include/addproxy.md -->

1. 콘솔의 전원을 꺼 주세요

### Section IV - safecerthax

이 섹션에서는 안전 모드(모든 3DS 콘솔에 포함된 기능)에 진입해 safecerthax를 실행하여, boot9strap (커스텀 펌웨어) 설치 도구를 실행하게 됩니다.

1. 전원이 꺼져 있는 상태에서 (L 어깨) + (R 어깨) + (십자 Up) + (A) 를 길게 눌르고, 누르는 상태에서 전원을 켜 주세요
   - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. "OK"를 선택해서 업데이트를 확인해 주세요
   - There is no update. 이것은 익스플로잇의 일부입니다
3. "동의함"를 눌러서 이용 약관에 동의해 주세요
4. 이 업데이트는 에러 코드 `003-1099` 와 같이 실패를 할 겁니다. 이것은 의도적 행동입니다
5. "OK"를 선택해서 에러 메세지를 닫아 주세요
6. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다
   - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
