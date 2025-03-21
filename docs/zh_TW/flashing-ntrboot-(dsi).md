# Flashing ntrboot (DSi)

## Required Reading

在開始前，請先確保您已閱讀完 [ntrboot](ntrboot) 頁面。

本方法將會暫時用到一台相容於您燒錄卡的 NDSi 主機。 本方法將透過燒錄卡於您的 DSi 中運行 ntrboot 寫入程式之 `.nds` 檔。 也就是說，您的燒錄卡必須能在您的 DSi 系統版本中運行 `.nds` 檔案。 詳情請見 [ntrboot](ntrboot) 頁面中的燒錄卡表格。

::: danger

請注意，在某些特殊情況下，某些冒牌的燒錄卡很有可能會在過程中變磚，使得燒錄卡變得無法使用。 這是不大可能的，但不論如何，我們只支援在相容清單中的燒錄卡。 To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
    - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. 將 **DSi 始源機** 關機
2. 將燒錄卡的 SD 卡插入電腦
3. 將 `ds_ntrboot_flasher_dsi.nds` 複製到您燒錄卡的 SD 卡中
4. 重新插入 SD 卡進您的燒錄卡中
5. 將相容於 ntrboot 的 DS / DSi 燒錄卡插入於 **DSi 始源機** 中

### Section II - Flashing ntrboot

1. 透過您的燒錄卡在 **DSi 始源機** 上啟動 `ds_ntrboot_flasher_dsi.nds`
2. 按『A』 繼續
3. 透過『上』『下』鍵選擇您的燒錄卡
4. 按『A』 繼續
5. 按『A』選擇『inject ntrboothax』
6. 按『A』選擇『RETAIL』
7. 按『A』 繼續
8. 選擇『EXIT』

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
