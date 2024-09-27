# Flashing ntrboot (3DS Single System)

## Required Reading

在開始前，請先確保您已閱讀完 [ntrboot](ntrboot) 頁面。

本方法僅需一台原廠 3DS 系列系統以及一張相容的燒錄卡。 本方法將透過燒錄卡於您的 3DS 中運行 ntrboot 寫入程式之 `.nds` 檔。 也就是說，您的燒錄卡必須能在您的 3DS 系統版本中運行 `.nds` 檔案。 詳情請見 [ntrboot](ntrboot) 頁面中的燒錄卡表格。

::: danger

請注意，在某些特殊情況下，某些冒牌的燒錄卡很有可能會在過程中變磚，使得燒錄卡變得無法使用。 這是不大可能的，但不論如何，我們只支援在相容清單中的燒錄卡。 To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Power off your console
2. 將燒錄卡的 SD 卡插入電腦
3. 在燒錄卡的 SD 卡的根目錄底下建立一個新的資料夾 `ntrboot`
4. 解壓 boot9strap `.zip` 的 `boot9strap_ntr.firm` 檔案至燒錄卡的 SD 卡的 `/ntrboot/` 資料夾中
5. 將 `ntrboot_flasher_nds.nds` 複製到您燒錄卡的 SD 卡中
6. 重新插入 SD 卡進您的燒錄卡中
7. Insert your ntrboot compatible DS / DSi flashcart into your console

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
2. 按『A』 繼續
3. 透過『上』『下』鍵選擇您的燒錄卡
4. 按『A』 繼續
5. 選擇『Dump flash』以備份您燒錄卡的記憶體
6. 輸入提示的按鍵組合
7. 按『A』 繼續
8. 透過『上』『下』鍵選擇您的燒錄卡
9. 按『A』 繼續
10. 選擇『Inject FIRM』以安裝 boot9strap 至您的燒錄卡中
11. 輸入提示的按鍵組合
12. 按『A』 繼續
13. Power off your console

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
