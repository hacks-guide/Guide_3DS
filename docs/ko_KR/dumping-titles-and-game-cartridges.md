# Dumping Titles and Game Cartridges

::: info

스크립트와 같은 GodMode9의 지원과 업데이트와 정보를 받으려면 [GodMode9 Discord 서버](https://discord.gg/BRcbvtFxX4)에 가입해 주세요. (영어 전용)

:::

## Required Reading

NAND 백업의 작성 및 복구 외에, GodMode9은 3DS 내에 설치된 타이틀을 직접 설치 가능한`.cia` 파일이나, 게임 카트리지 데이터를 `.3ds` 롬 파일으로 추출을 하거나, 직접 카트리지를 SD 카드에 설치할 수 있습니다.

## Updating GodMode9

::: info

이 절차는 GodMode9 V2.0.0 이상의 버전을 위해 작성되었습니다. 만약 GodMode9의 과거 버전을 갖고 있다면, 이 절차를 따라서 업데이트해 주세요.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 `/luma/payloads/`폴더에 GodMode9 `.zip`안에 압축되있는 `GodMode9.firm`을 복사해 주세요
4. SD 카드의 루트로 GodMode9 `.zip`안에 압축이 되있는 `gm9` 폴더를 복사해 주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요

## Dumping a Game Cartridge

::: info

콘솔에 추출하고자 하는 게임 카드를 삽입해 주세요

- 3DS game cartridges will be dumped to a `.3ds` format
- NDS game cartridges will be dumped to a `.nds` format

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. `[C:] GAMECART`로 이동해 주세요
3. 게임 카드에 맞게 해당 과정을 참고해 주세요:
   - **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
   - **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
     - Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
4. "Copy to 0:/gm9/out"를 선택해 주세요
5. `.3ds`나 `.nds` 형식의 파일이 SD 카드의 `/gm9/out/` 폴더에 출력됩니다

## Installing a Game Cartridge Directly to the System

::: info

이것은 3DS 게임으로만 할 수 있습니다; 타이틀로써 NDS 게임들을 시스템에 설치하는 것은 불가능합니다.

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. `[C:] GAMECART`로 이동해 주세요
3. `[TitleID].trim.3ds`에서 (A)를 눌러 선택하고 "NCSD image options..."를 선택하고 "Install game image"를 선택해 주세요
4. (A)를 눌려 SysNAND (lvl1) 쓰기 잠금을 풀고 주어진 키 조합을 입력해 주세요
5. 절차가 끝나면, 설치된 타이틀로써 당신의 게임이 HOME 메뉴에 나타날 것입니다

## Dumping a 3DS Game Cartridge to .CIA

::: info

이것은 [게임 카트리지를 시스템에 직접 설치](#게임-카트리지를-시스템에-직접-설치)가 작동이 안 될 시에만 써야 합니다.

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. `[C:] GAMECART`로 이동해 주세요
3. `[TitleID].trim.3ds`에서 (A)를 눌러 선택하고 "NCSD image options..."를 선택하고 "Build CIA from file"를 선택해 주세요
4. 설치 가능한 `.cia` 파일은 SD 카드의`/gm9/out/` 폴더에 출력됩니다

## Dumping an Installed Title

::: info

이것을 사용하면, 시스템 타이틀과 유저 타이틀의 양쪽을 추출할 수 있습니다.

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. (Home)을 눌러 작업 메뉴를 열어 주세요
3. "Title manager"를 선택해 주세요
4. 추출하고 싶은 게임 카트리지에 맞게 해당 과정을 참고해 주세요:
   - **User Installed Title**: `[A:] SD CARD`
   - **System Title / DSiWare**: `[1:] NAND / TWL`
5. 추출하고 싶은 타이틀을 선택해 주세요
6. "Manage Title... "을 선택해 주세요
7. "Build CIA (standard)"를 선택해 주세요
8. 설치 가능한 `.cia` 파일은 SD 카드의`/gm9/out/` 폴더에 출력됩니다

## Backup GBA VC Saves

::: info

게임은 `<TitleID>.gbavc.sav`의 이름으로 SD카드의 `/gm9/out/`폴더에 산출될 것입니다.

:::

::: info

`<TitleID>.gbavc.sav` 파일이 어떤 게임인지 구분하기 위해 (Home)을 눌러 액션 메뉴로 이동해 `Title Manager` -> [A:] SD CARD\`를 선택해 콘솔에 있는 모든 게임의 Title ID를 볼 수 있습니다.

:::

1. 과정대로 진행해 백업하고자 하는 GBA VC 게임 저장 데이터를 저장해 주세요:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - 콘솔의 전원을 꺼 주세요
   - (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
   - `[S:] SYSNAND VIRTUAL` 폴더로 이동해 주세요
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - (A)를 눌러 진행해 주세요
   - (Start)를 눌러 콘솔을 다시 시작해 주세요

## Restore GBA VC Saves

::: info

`<TitleID>.gbavc.sav` 파일이 어떤 게임인지 구분하기 위해 (Home)을 눌러 액션 메뉴로 이동해 `Title Manager` -> [A:] SD CARD\`를 선택해 콘솔에 있는 모든 게임의 Title ID를 볼 수 있습니다.

:::

1. 과정대로 진행해 모든 GBA VC 게임 저장 데이터를 백업해 주세요
   - Launch the GBA VC game
   - Exit the GBA VC game
   - 콘솔의 전원을 꺼 주세요
   - (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
   - `[0:] SDCARD` -> `gm9` -> `out`으로 이동해 주세요
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - (B)를 눌러 메인 메뉴로 돌아가 주세요
   - `[S:] SYSNAND VIRTUAL` 폴더로 이동해 주세요
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - (A)를 눌러 진행해 주세요
   - (Start)를 눌러 콘솔을 다시 시작해 주세요
   - Launch the GBA VC game
   - Exit the GBA VC game

## Encrypting / Decrypting a .CIA file

::: info

작업에 앞서, 암호화 및 해독 하고자 하는 모든 `.cia` 파일을 SD 카드의 `/cias/` 폴더에 복사해주세요.

:::

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. `[0:] SDCARD` -> `cias`로 이동해 주세요
3. `.cia` 파일을 (A)를 눌러 선택하고, "CIA image options..." 를 선택해 주세요
4. 원하는 기능 옵션을 선택하세요:
   - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
   - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. 암호화 / 복호화된 `.cia`는 원하는 위치에 출력됩니다
