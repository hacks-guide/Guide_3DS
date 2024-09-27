# ntrboot

::: tip

만약 ntrboot가 미리 플래시된 플래시카드을 구입했거나, 이미 ntrboot를 플래시카드로 설치했다면, [boot9strap 설치 (ntrboot)](installing-boot9strap-\(ntrboot\)) 를 따라 주시기 바랍니다.

:::

## Required Reading

ntrboot로 boot9strap을 설치하기 위해서는 호환되는 DS/ DSi 가 필요합니다. 이러한 플래시 카드 중 몇몇은 이미 ntrboot이 플래싱 되어 있습니다.

ntrboot 취약점이 콘솔 버전과 독립적으로 작동하는 반면에, ntrboot 플래싱 프로그램(카트리지에 ntrboot을 설치하는 프로그램) 은 그렇지 않습니다. 이것은 플래시카드가 지원하는 콘솔과 콘솔 버전에 따라 오로지 특정한 방법만 가능할 수도 있습니다.

"시한폭탄"이 있는 카드는 플래시카드 펌웨어에 저장된 특정 날짜를 콘솔 시간이 지난것을 감지하면 더 이상 `.nds` 파일을 실행 할 수 없습니다. 이것을 우회하는 방법은 콘솔의 시간을 앞으로 되돌리는 것입니다.

| Flashcart Name                                                                                                              |          Current Price |                       "Time Bomb"?                       |                                 3DS Versions?                                 |                           DSi Versions?                           | Other Notes                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** (external switch to switch between ntrboot ("3DS") and NDS modes); do not manually flash with ntrboot. 이 카드는 SD 카드가 삽입되있어야 ntrboot와 일반 DS 모드가 작동합니다. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     September 3, 2024                    |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot**; can be flashed back to an NDS flashcart.                                                                                                                                                                  |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                            No                            |                                      None                                     |                                None                               | Only models with [certain flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) are compatible with ntrboot.                                                                                                       |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: September 3, 2024 |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                               |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                               |
| **Ace3DS Plus**                                                                                                             |                        |                            No                            |                                      ALL                                      |                                ALL                                | 이 카드는 SD 카드가 삽입되있어야 ntrboot와 일반 DS 모드가 작동합니다.                                                                                                                                                                                                 |
| **Acekard 2i**                                                                                                              |                        |                            No                            |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                                               |
| **Gateway Blue**                                                                                                            |                        |                            No                            | 4.1.0 - 4.5.0 |                                ALL                                |                                                                                                                                                                                                                                                               |
| **Infinity 3 R4i** (r4infinity.com)                                                      |                        |                            No                            |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                               |
| **R4 3D Revolution**                                                                                                        |                        |                            No                            |                                      None                                     |                                None                               |                                                                                                                                                                                                                                                               |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                         |                        |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** ([internal switch to switch between ntrboot and NDS modes](/images/screenshots/r4i-gold-3ds-plus.png)); do not manually flash with ntrboot.                                             |
| **R4i Gold 3DS** (r4ids.cn)                                                              |                        |                            No                            |                                      ALL                                      |                                ALL                                | All carts are compatible.                                                                                                                                                                                                                     |
| **R4i Ultra** (r4ultra.com)                                                              |                        |                            No                            |       <= 4.3.0       |                                ALL                                |                                                                                                                                                                                                                                                               |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                         |                        |                          Unknown                         |                                      ALL                                      |                                ALL                                | Only the Deluxe Edition with the blue sticker is compatible.                                                                                                                                                                                  |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                  |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                               |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                 |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                               |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

시작하기 전에 플래시카드가 `.nds` 파일을 실행 할 수 있는지 확인해 주세요. 몇몇 플래시카드는 펌웨어나 "커널"이 플래시카드의 SD 카드에 복사되어 있어야 합니다. 자세한 내용은 당신의 플래시카드의 설명서를 참조해 주시길 바랍니다.

특정 방법에서는 추가적인 호환성 정보가 있을 수 있습니다.

이 방법을 사용하기 위해서는 작은 자석이 필요합니다. (슬립 스위치가 있는 2DS는 예외) 왜냐하면 이 방법은 슬립 모드 상태에서 버튼을 사용해야 하기 때문입니다.

::: info

자석이 사용 가능한지 확인해 보려면 켜져 있는 상태로 (A)(B)(X)(Y) 버튼 근처에 자석을 대서 슬립 모드로 전환되는지 확인해 보세요. 사용 가능하다면 자석을 대고 있는 동안 화면이 검은색으로 될 것입니다.

:::

NTRboot가 플래시 카트리지에 플래싱되어 있는 동안에는 플래시카드의 기능을 사용할 수 없다는 점을 명심하십시오. (단, NDS에서 또는 커스텀 펌웨어가 설치된 3SD 에서 Acekard 2i의 경우는 예외입니다.) 이것은 대부분의 플래시카드가 심지어 홈 메뉴에서 표시되지도 않을것을 의미합니다. 작업이 끝난뒤 ntrboot를 제거할 수 있는 방법이 뒤에 제시되어 있습니다.

::: danger

아주 드문 경우지만 설치를 시도한 플래시카드가 짝퉁일 경우 설치 과정 중 카트리지가 **벽돌**이 되고 이후 카트리지를 사용할 수 없게되는 경우가 있습니다. 그러하기 때문에 매우 적은 확율이지만 정품 플래시카트만 지원 됩니다. 복재품 카드를 주문할 가능성을 줄이기 위하여, [NDS Card](https://www.nds-card.com/)같이 신뢰할 수 있는 사이트를 이용하여 구매 하시길 바랍니다.

:::

___

## Methods

___

### ntrboot 플래싱 (단일 3DS)

이 수단은 순정 3DS와 이와 호환되는 플래시카트 외에는 더를 필요로 하지 않습니다. 이 방법은 플래시카드를 3DS에 삽입해 ntrboot flasher `.nds` 를 실행하는 방법입니다. 그것은 플래시카드가 3DS 버전에서 `.nds` 파일 구동을 지원해야 한다는 의미입니다. 자세한 내용은 위에있는 플래시카드 표를 참조해 주시길 바랍니다.

::: tip

[ntrboot 플래싱 (단일 3DS)](flashing-ntrboot-\(3ds-single-system\)) 로 계속합니다

:::

___

### ntrboot 플래싱 (3DS 두 대)

이 방법은 이미 boot9strap을 구동하고 있는 2번째 3DS 계열 콘솔을 일시적으로 사용해야 합니다. 이 방법은 플래시카드가 두 3DS중에서 어떤 버전도 지원하지 않아도 됩니다.

::: tip

[ntrboot 플래싱 (3DS 두 대)](flashing-ntrboot-\(3ds-multi-system\)) 로 계속합니다

:::

___

### ntrboot 플래싱 (NDS)

이 방법은 DS 플래시카트를 실행할 수 있는 DS 혹은 DS Lite가 필요합니다. 이 방법은 플래시카드를 NDS에 삽입해 ntrboot flasher `.nds` 를 실행하는 방법입니다.

::: tip

[ntrboot 플래싱 (NDS)](flashing-ntrboot-\(nds\)) 로 계속합니다

:::

___

### ntrboot 플래싱 (DSi)

이 수단은 닌텐도 DSi와 이와 호환되는 플래시카트가 필요합니다. 이 방법은 플래시카드를 DSi에 삽입해 ntrboot flasher `.nds` 를 실행하는 방법입니다. 이 말은, 플래시 카트리지가 닌텐도 DSi 버전에서 `.nds` 파일 구동을 지원해야 한다는 의미입니다. 자세한 내용은 위에있는 플래시카드 표를 참조해 주시길 바랍니다.

::: tip

[ntrboot 플래싱 (DSi)](flashing-ntrboot-\(dsi\)) 로 계속합니다

:::
