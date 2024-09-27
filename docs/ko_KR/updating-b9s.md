# Updating B9S

## Required Reading

이 페이지는 기존 boot9strap 사용자중 최신 버전의 boot9strap 으로 업데이트 과정을 설명한 페이지 입니다.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

::: info

모든 과정에서, SD 카드에 이미 존재하는 파일들은 모두 덮어쓰기 해주세요.

:::

1. SD 카드를 컴퓨터에 삽입해 주세요
2. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요
3. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요
4. SafeB9SInstaller `.zip`의 `SafeB9SInstaller.firm`을 SD 카드의 루트에 복사하고 `boot.firm`으로 이름 변경해 주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Section II - Installing boot9strap

1. 콘솔의 전원을 켜 주세요
   - This should automatically launch SafeB9SInstaller
2. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
3. 이 작업이 끝나면, 전원 버튼을 길게 눌러 콘솔의 전원을 꺼 주세요
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. SD 카드를 컴퓨터에 삽입해 주세요
2. Luma3DS `.zip`안에 있는 `boot.firm`과 `boot.3dsx`를 SD 카드의 루트에 복사해 주세요. 이미 존재하는 파일을 덮어쓰기 해 주세요
3. SD 카드를 콘솔에 다시 삽입해 주세요
4. 콘솔의 전원을 켜 주세요
5. 만약 Luma3DS 설정 메뉴로 부팅되었다면, (Start)를 눌러서 저장/리부트해 주세요
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. 이 설정들은 디버깅 또는 맞춤화의 유용합니다
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
