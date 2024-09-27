# ntrboot

::: tip

如果您的燒錄卡已先裝有 ntrboot (或者您已自行安裝 ntrboot 至您的燒錄卡中)，您可以跳至 [安裝 boot9strap (透過 ntrboot)](installing-boot9strap-\(ntrboot\)) 以見其使用說明。

:::

## Required Reading

透過 ntrboot 的 boot9strap 安裝將需要使用可相容的 NDS / DSi 燒錄卡。 請注意，某些燒錄卡已預先搭載 ntrboot。

雖然 ntrboot 漏洞可在任意系統版本執行，但寫入 ntrboot 至燒錄卡用的燒錄軟體卻不行。 This means that, depending on the versions and consoles supported by your flashcart, only certain methods may be available to you.

請注意，有標記『Time Bomb』的燒錄卡在其偵測到系統時間超過卡中內定的特定時間後將無法再運行任何 `.nds` 檔案。 目前的解決方法是將系統時間調至更早期的時段。

| Flashcart Name                                                                                                              |          Current Price |                       "Time Bomb"?                       |                                 3DS Versions?                                 |                           DSi Versions?                           | Other Notes                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** (external switch to switch between ntrboot ("3DS") and NDS modes); do not manually flash with ntrboot. This cart needs an SD card inserted to function for both ntrboot and regular NDS firmware. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     September 3, 2024                    |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot**; can be flashed back to an NDS flashcart.                                                                                                                                                                                                               |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                            No                            |                                      None                                     |                                None                               | Only models with [certain flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) are compatible with ntrboot.                                                                                                                                                    |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: September 3, 2024 |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |
| **Ace3DS Plus**                                                                                                             |                        |                            No                            |                                      ALL                                      |                                ALL                                | This cart needs an SD card inserted to function for both ntrboot and regular NDS firmware.                                                                                                                                                                                                 |
| **Acekard 2i**                                                                                                              |                        |                            No                            |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                                                                                            |
| **Gateway Blue**                                                                                                            |                        |                            No                            | 4.1.0 - 4.5.0 |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **Infinity 3 R4i** (r4infinity.com)                                                      |                        |                            No                            |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **R4 3D Revolution**                                                                                                        |                        |                            No                            |                                      None                                     |                                None                               |                                                                                                                                                                                                                                                                                                            |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                         |                        |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** ([internal switch to switch between ntrboot and NDS modes](/images/screenshots/r4i-gold-3ds-plus.png)); do not manually flash with ntrboot.                                                                                          |
| **R4i Gold 3DS** (r4ids.cn)                                                              |                        |                            No                            |                                      ALL                                      |                                ALL                                | All carts are compatible.                                                                                                                                                                                                                                                                  |
| **R4i Ultra** (r4ultra.com)                                                              |                        |                            No                            |       <= 4.3.0       |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                         |                        |                          Unknown                         |                                      ALL                                      |                                ALL                                | Only the Deluxe Edition with the blue sticker is compatible.                                                                                                                                                                                                                               |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                  |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                 |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Ensure your flashcart is able to launch `.nds` files on your console before beginning. 某些燒錄卡可能得在使用前複製某些韌體或內核檔案至其 SD 卡中。 若有疑問，請參閱您燒錄卡之說明書。

於各項方法中可能會有額外的相容性資訊可供參閱。

The usage of this exploit, regardless of the flashing method, requires access to a small magnet if the target console is of a folding style (any 3DS family system that is not the old 2DS with a sleep switch). This is because the exploit requires your console to enter sleep mode while still having access to the buttons.

::: info

To test if a magnet will work, hold it on or around the (A)(B)(X)(Y) buttons while the console is powered on to see if it triggers sleep mode. 如果磁鐵可用的話，您主機的兩個螢幕應該都會變黑，直到您將磁鐵拿走為止。

:::

請注意，只要您的燒錄卡仍裝著 ntrboot 漏洞，它將失去原卡的功用 (除了 Acekard 2i 外，它仍能於_NDS 或已安裝自製韌體的 3DS 上正常運作_) 。 This means that, for most flashcarts, it will not even display on the HOME Menu. 若有需要，本節最後會附帶些解除安裝此漏洞的步驟。

::: danger

請注意，在某些特殊情況下，某些冒牌的燒錄卡很有可能會在過程中變磚，使得燒錄卡變得無法使用。 這是不大可能的，但不論如何，我們只支援在相容清單中的燒錄卡。 To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

___

## Methods

___

### Flashing ntrboot (3DS Single System)

本方法僅需一台原廠 3DS 系列系統以及一張相容的燒錄卡。 本方法將透過燒錄卡於您的 3DS 中運行 ntrboot 寫入程式之 `.nds` 檔。 也就是說，您的燒錄卡必須能在您的 3DS 系統版本中運行 `.nds` 檔案。 詳情請見上表。

::: tip

繼續至[寫入 ntrboot 漏洞 (透過單台 3DS 系統)](flashing-ntrboot-\(3ds-single-system\))

:::

___

### Flashing ntrboot (3DS Multi System)

This method requires temporary access to a second 3DS family console that is already running boot9strap. 您的燒錄卡在本方法中不必支援任兩台的 3DS 系統版本。

::: tip

繼續至[寫入 ntrboot 漏洞 (透過多台 3DS 系統)](flashing-ntrboot-\(3ds-multi-system\))

:::

___

### Flashing ntrboot (NDS)

本方法將會暫時用到一台相容於您燒錄卡的 NDS 或 NDSL 主機。 本方法將透過燒錄卡於您的 NDS 中啟動 ntrboot 寫入程式之 `.nds` 檔案。

::: tip

繼續至[寫入 ntrboot 漏洞 (透過 NDS)](flashing-ntrboot-\(nds\))

:::

___

### Flashing ntrboot (DSi)

本方法將會暫時用到一台相容於您燒錄卡的 NDSi 主機。 本方法將透過燒錄卡於您的 DSi 中運行 ntrboot 寫入程式之 `.nds` 檔。 也就是說，您的燒錄卡必須能在您的 DSi 系統版本中運行 `.nds` 檔案。 詳情請見上表。

::: tip

繼續至[寫入 ntrboot 漏洞 (透過 DSi)](flashing-ntrboot-\(dsi\))

:::
