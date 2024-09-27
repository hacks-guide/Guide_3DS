# ntrboot 플래싱 (3DS 두 대)

## Required Reading

진행하기 앞서서, [ntrboot](ntrboot) 에 대한 모든 정보를 숙지해주세요.

이 방법은 이미 boot9strap을 구동하고 있는 2번째 3DS 계열 콘솔을 일시적으로 사용해야 합니다. 이 방법은 플래시카드가 두 3DS중에서 어떤 버전도 지원하지 않아도 됩니다.

::: danger

아주 드문 경우지만 설치를 시도한 플래시카드가 짝퉁일 경우 설치 과정 중 카트리지가 **벽돌**이 되고 이후 카트리지를 사용할 수 없게되는 경우가 있습니다. 그러하기 때문에 매우 적은 확율이지만 정품 플래시카트만 지원 됩니다. 복재품 카드를 주문할 가능성을 줄이기 위하여, [NDS Card](https://www.nds-card.com/)같이 신뢰할 수 있는 사이트를 이용하여 구매 하시길 바랍니다.

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
  - **The source 3DS**: the 3DS family console that is already running boot9strap
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. **소스 3DS**를 종료해 주세요
2. **소스 3DS**의 SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 루트에 'ntrboot' 폴더를 생성해 주세요
4. `boot9strap_ntr.firm`과 `boot9strap_ntr.firm.sha`을 boot9strap-ntr `.zip` 에서 `/ntrboot/` 폴더로 복사해 주세요
5. `ntrboot_flasher.firm`파일을 **소스 3DS**의 SD 카드에 있는 `/luma/payloads/`폴더에 복사해 주세요
6. **소스 3DS**의 SD 카드를 다시 **소스 3DS**에 삽입해 주세요
7. **소스 3DS**에 ntrboot와 호환되는 DS / DSi 플래시카트를 삽입해 주세요

### Section II - Flashing ntrboot

1. **소스 3DS**의 (Start) 버튼을 길게 누르며 전원을 켜주며, Luma3DS chainloader를 실행해 주세요
2. "ntrboot_flasher"를 선택해 주세요
3. 붉은 화면에 뜬 경고를 읽어 주세요
4. (A)를 눌러 진행해 주세요
5. 소유하고 있는 플래시카드를 선택해 주세요
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. "Dump Flash"을 선택해 주세요
7. 완료될 때까지 기다려 주세요
8. (A)를 눌러 진행해 주세요
9. (A)를 눌러 메인 메뉴로 돌아가 주세요
10. "Inject ntrboot"을 선택해 주세요
11. (A) 를 눌러 retail unit ntrboot을 선택해 주세요
12. 완료될 때까지 기다려 주세요
13. (A)를 눌러 메인 메뉴로 돌아가 주세요
14. (B) 를 눌러 **소스 3DS**를 종료해 주세요

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
