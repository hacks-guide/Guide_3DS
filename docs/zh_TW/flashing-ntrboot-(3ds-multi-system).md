# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. 您的燒錄卡在本方法中不必支援任兩台的 3DS 系統版本。

::: danger

請注意，在某些特殊情況下，某些冒牌的燒錄卡很有可能會在過程中變磚，使得燒錄卡變得無法使用。 這是不大可能的，但不論如何，我們只支援在相容清單中的燒錄卡。 To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

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

1. 將 **3DS 始源機** 關機
2. 將 **3DS 始源機** 的 SD 卡插入至電腦中
3. 在 SD 卡的根目錄底下建立一個新的資料夾 `ntrboot`
4. 解壓 boot9strap ntr `.zip` 的 `boot9strap_ntr.firm` 及 `boot9strap_ntr.firm.sha` 檔案至 SD 卡的 `/ntrboot/` 資料夾中
5. 複製 `ntrboot_flasher.firm` 至 **3DS 始源機** SD 卡中的 `/luma/payloads/` 資料夾中
6. 重新插入 **3DS 始源機**的 SD 卡至 **3DS 始源機**中
7. 將相容於 ntrboot 的 DS / DSi 燒錄卡插入於 **3DS 始源機** 中

### Section II - Flashing ntrboot

1. 於 **3DS 始源機**開機時按住『Start』鍵以啟動 Luma3DS 加載選單
2. 選擇『ntrboot_flasher』
3. 請仔細閱讀警告
4. 按『A』 繼續
5. 選擇您的燒錄卡
    - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. 選擇『Dump Flash』
7. 等到檢查完畢為止。
8. 按『A』 繼續
9. 按『A』回到主選單
10. 選擇『Inject Ntrboot』
11. 按『A』鍵選擇『retail unit ntrboot』
12. 等到檢查完畢為止。
13. 按『A』回到主選單
14. 按『B』將 **3DS 始源機**關機

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
