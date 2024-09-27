# boot9strap 설치 (Soundhax)

:::details Technical Details (optional)

이 페이지에 사용되는 익스플로잇에 자세한 설명은 [여기](https://github.com/nedwill/soundhax) (Soundhax)와 [여기](https://github.com/TuxSH/universal-otherapp/) (universal-otherapp) (영어) 를 참고해 주세요.

:::

## Compatibility Notes

Soundhax는 (universal-otherapp과 사용할 때) 모든 지역의 1.0.0 이상 11.3.0이하에 사용 가능합니다.

## What You Need

- The latest release of [Soundhax](http://soundhax.com) _(for your region, console, and version)_
  - If Soundhax appears in your browser as an unplayable video, press Ctrl+S or Cmd+S to save it to your computer
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

이 섹션에서 Soundhax하고 universal-otherapp을 실행할 파일을 복사합니다.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. Soundhax `.m4a`를 SD 카드의 루트에 복사해 주세요
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
4. 'otherapp.bin' 파일을 SD 카드의 루트에 복사해 주세요
5. Luma3DS `.zip`안에 있는 `boot.firm`과 `boot.3dsx`를 SD 카드의 루트에 복사해 주세요
6. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요
7. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요
8. SafeB9SInstaller `.zip`의 `SafeB9SInstaller.bin`을 SD 카드의 루트로 복사해 주세요
9. SD 카드를 콘솔에 다시 삽입해 주세요
10. 콘솔의 전원을 켜 주세요

::: info

![](/images/screenshots/uosoundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - Launching SafeB9SInstaller

이 섹션에서는, boot9strap (커스텀 펌웨어) 설치 도구를 실행하기 위해 닌텐도 3DS 사운드 앱에서 Soundhax를 재생하여 universal-otherapp을 실행합니다.

1. 닌텐도 3DS 사운드 앱을 실행해 주세요

   ::: info

   ![](/images/screenshots/soundhax-welcome.png)

   :::

2. 닌텐도 3DS 사운드를 처음 실행하시는 것이라면 앵무새의 팁들을 모두 건너뛰어 주신 다음 앱을 종료한 후. 재실행해 주세요
   - In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done

3. `/SDCARD`로 가서 "<3 nedwill 2016"를 재생해 주세요

   - This may take many (up to 10) tries
   - If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
   - If it freezes, force the console to power off by holding the power button, then try again
   - If you get a different error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-soundhax)

   ::: info

   ![](/images/screenshots/soundhax-launch.png)

   :::

4. 익스플로잇이 성공적이었다면 SafeB9SInstaller로 부팅되었을 것입니다

### Section III - Installing boot9strap

이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
