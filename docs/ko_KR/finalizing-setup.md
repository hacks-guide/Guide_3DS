# 마무리 단계

## Required Reading

`boot.firm` 파일은 boot9strap이 NAND에서 로딩을 완료한 후 실행하는 것입니다. 이번 경우에서는, [LumaTeam](https://github.com/LumaTeam/)의 Luma3DS를 사용해서 콘솔을 패치하고, 홈브류 소프트웨어를 실행할 수 있도록 합니다.

이 가이드에서는, 중요한 시스템 파일의 백업을 하고, 몆 가지의 홈브류 프로그램을 설치할 겁니다. 이러한 단계의 대부분은 콘솔에서 실행할 스크립트를 사용하여 자동화됩니다.

::: info

본 스크립트는 다음과 같은 어플리케이션을 설치할 것입니다:

- **[FBI](https://github.com/lifehackerhansol/FBI)** _(installs CIA formatted applications)_
- **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** _(launches the Homebrew Launcher)_
- **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** _(installs custom themes)_
- **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** _(backs up and restores save files for 3DS and DS games)_
- **[ftpd](https://github.com/mtheall/ftpd)** _(access your 3DS SD card wirelessly)_
- **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** _(a homebrew app store for downloading homebrew from the 3DS over Wi-Fi)_
- **[GodMode9](https://github.com/d0k3/GodMode9)** _(multipurpose tool which can do NAND and cartridge functions)_

해당 프로그램이 필요하지 않은 경우 본 페이지에 적힌 모든 설정이 완료된 뒤에 본체 설정 -> 데이터 관리 -> Nintendo 3DS -> 소프트웨어 관리에서 지울 수 있습니다. (GodMode9은 이 방식으로 지울 수 없으며 또한 다른 기능들을 위해 필요합니다.)

:::

## Compatibility Notes

::: warning

만약 이 가이드를 따르기 전의 **New 3DS** 가 펌웨어 버전 2.1.0이었다면, 진행하기 전에 [NAND 백업을 복원](godmode9-usage#restoring-a-nand-backup)해야 합니다. 2017년 전에 이 가이드를 따르지 않았다면 아마 상관이 없을 겁니다.

:::

::: info

만약 이전 CFW가 EmuNAND 기반이었고, 당신의 EmuNAND/RedNAND의 컨텐츠를 SysNAND로 옮기고 싶다면, 이 페이지를 수행하기 이전에 [EmuNAND 이동](move-emunand) 을 따라주시기 바랍니다. 만약 EmuNAND가 뭔지 모르신다면, 이것은 무시하셔도 됩니다.

:::

## What You Need

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

## Instructions

### Section I - Prep Work

이 섹션에서는 이 페이지의 남은 과정을 따라가기 위한 나머지 필수 파일을 복사하게 됩니다.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. 'finalize.romfs' 파일을 SD 카드의 루트에 복사해 주세요
4. Open the `luma` folder on your SD card and create a folder named `payloads` inside, if it does not already exist
5. `x_finalize_helper.firm` 파일을 `payloads` 폴더에 복사해 주세요
6. SD 카드를 콘솔에 다시 삽입해 주세요

이 스크린샷들은 이 가이드를 따랐을 때의 최소한의 SD 카드 레이아웃을 표시합니다. 이전에 따른 방법에 따라, SD 카드에 추가 파일과 폴더가 있을 수 있습니다.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Section II - Updating the System

이 섹션에서는 커스텀 펌웨어가 설치된 콘솔에서도 안전하게 이용 가능한 최신 버전의 펌웨어로 본체를 업데이트합니다.

<!--@include: ./_include/sysupdate.md -->

### Section III - RTC and DSP setup

이 섹션에서는 3DS 내부 시계를 실제 시각과 맞추고, 홈브류 소프트웨어에서 음성을 적절하게 이용하기 위해 사운드 펌웨어를 백업합니다.

1. (L 어깨) + (십자 Down) + (Select) 을 동시에 눌러서 Rosalina 메뉴를 실행해 주세요
   - If one of these buttons is broken, download [config.ini](/assets/config.ini) and put it in your `luma` folder, replacing the existing one. 이 파일은 Rosalina 키 조합을 (X) + (Y)로 바꿉니다
2. "Miscellaneous options"을 선택해 주세요
3. "Dump DSP firmware"를 선택해 주세요
4. (B)를 눌러 진행해 주세요
5. "Nullify user time offset"를 선택해 주세요
6. (B)를 눌러 진행해 주세요
7. (B)를 눌러 Rosalina 메뉴로 돌아가 주세요
8. (B)를 눌러 Rosalina 메뉴를 나와 주세요

### Section IV - Setup Script

In this section, you will use a series of scripts to automate homebrew installation, SD card cleanup, and system file backup.

1. 콘솔의 전원을 꺼 주세요
2. (X) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. 최종 설치 도우미가 실행됩니다
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
   - If you encounter an error, consult the [troubleshooting](troubleshooting#finalizing-setup) page
3. 도우미가 정상적으로 작동했을 경우, GodMode9으로 부팅될 것입니다.
   - From this point forward, you can access GodMode9 by holding START while powering on your console
4. 만약 "Essential files backup not found" 메세지가 표시되면, (A) 룰 눌러서 하세요. 백업이 끝나면 (A) 를 눌러서 진행해 주세요
5. 만약 "RTC date&time seems to be wrong" 메세지가 표시되면 (A) 버튼을 눌러 하고, 날짜와 시간을 고친 다음 (A) 버튼을 눌러 계속해 주세요
6. (Home)을 눌러 작업 메뉴를 열어 주세요
7. "Scripts..."를 선택해 주세요
8. "finalize"를 선택해 주세요
9. 스크립트 표시에 따라 필요한 행동을 취해주세요
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting#finalizing-setup) page
10. "Setup Complete!" 가 떴을 경우, (A) 버튼을 눌러 전원을 꺼 주세요
    - If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
11. SD 카드를 컴퓨터에 삽입해 주세요
12. SD 카드의 `/gm9/backups/` 폴더 내 파일을 컴퓨터의 안전한 위치에 복사해 주세요
    - This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
13. If you still have them, delete the two `SysNAND` files from the `/gm9/backups/` folder from your SD card
    - The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

::: tip

모든 작업이 끝났습니다! 이제 커스텀 펌웨어는 완벽하게 설정되었습니다.

:::

::: info

개조된 콘솔로 뭘 할 수 있는지 알고 싶으시다면 [위키](https://wiki.hacks.guide/wiki/3DS:Things_to_do)를 방문해 보세요!

:::

### Information and Notes

::: info

알아야 할 몇몇 버튼 콤보들이 있습니다:

- Holding (Select) on boot will launch the Luma3DS configuration menu.
- Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
- By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. 이 콤보는 Rosalina 메뉴에서 변경될 수 있습니다.
- Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. 목록을 위해서는 [변경사항](https://github.com/SciresM/boot9strap/releases/tag/1.4)를 확인해 주세요.

:::

::: info

GodMode9의 여러 기능의 사용법에 대해서는, [GodMode9 사용법](godmode9-usage) 과 [타이틀과 게임 카트리지 추출](dumping-titles-and-game-cartridges)를 확인해 주세요.

:::
