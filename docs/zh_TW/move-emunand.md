# Move EmuNAND

## Required Reading

本篇為如何把先前的 EmuNAND 中的內容移植到您新的自製 SysNAND 系統底下，並移除舊的 EmuNAND 磁區的附加章節。 注意 EmuNAND 與 RedNAND 指的是些微不同運作方式但[同樣道理](http://3dbrew.org/wiki/NAND_Redirection)的用語。

請注意，如果您在 SD 卡中的 `/luma/payloads/` 資料夾中放有除了 `GodMode9.firm` 的 payload 檔案，在開機時按住『Start』鍵將會顯示一個『加載選單』，從那裏您得透過方向鍵及按鈕『A』選擇『GodMode9』。

::: danger

您必須先安裝 Luma3DS 和 boot9strap 才能繼續。

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. 將 SD 卡插入至電腦中
3. 解壓 GodMode9 `.zip` 中的 `GodMode9.firm` 檔案到 SD 卡的 `/luma/payloads/` 資料夾中
4. 解壓 GodMode9 `.zip` 中的 `gm9` 資料夾到 SD 卡的根目錄底下
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

如果您沒有安裝任何 DSiWare 遊戲或您認為重要的存檔，跳過本節。

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 當提示重要檔案備份時，按下『A』繼續，並在完畢後按下『A』繼續
3. 當提示修正 RTC 日期及時間時，按『A』繼續並設定日期及時間，再按『A』繼續
    - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. 移動至 `[2:] SYSNAND TWLN` -> `title`
5. 在 `00030004` 上按住『R』並同時按下『A』以選取資料夾，並選擇『Copy to 0:/gm9/out』
    - This process may take some time if you have many DSiWare games
6. 按『B』兩次回到主選單

### Section III - Backup GBA VC Saves

::: info

如果您沒有安裝任何 GBA 虛擬主機遊戲或您認為重要的存檔，跳過本節。

:::

::: info

請注意，任何其他類型的虛擬主機遊戲(GBC、NES等)可忽略本節。

:::

::: info

遊戲存檔 `<TitleID>.gbavc.sav` 將被複製至 SD 卡中的`/gm9/out/` 資料夾中。

:::

::: info

若想找出 `<TitleID>.gbavc.sav` 遊戲檔案的 Title ID，您可以在 GodMode9 的主選單中按下「Home」鍵，選擇 `Title manager`，再選 `[A:] SD CARD`，以列出所有已安裝於系統的遊戲及對應的 Title ID。

:::

1. 為各個想備份的 GBA 虛擬主機遊戲重複下列步驟：
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Dump GBA VC save"
    - 按『A』 繼續
    - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 移動至 `[E:] EMUNAND VIRTUAL`
3. 透過『A』選取 `nand.bin`，並選擇『NAND image options...』，再選『Restore SysNAND (safe)』
4. 按『A』解鎖 SysNAND 的複寫保護，然後按下提示的按鍵組合
    - This will not overwrite your boot9strap installation
5. 按下提示的按鍵組合以解鎖 SysNAND(lvl1)的寫入保護
    - This process will take some time
6. 過程結束後，按下『A』繼續
7. 如提示時，按下『B』取消檔案寫入鎖定
8. 按『B』回到主選單

### Section V - Restore DSiWare Saves

::: info

如果您剛剛沒有備份 DSiWare 遊戲存檔，請跳過本節。

:::

1. 移動至 `[0:] SDCARD` -> `gm9` -> `out`
2. 選取 `00030004` 資料夾，並按下『Y』複製
3. 按『B』兩次回到主選單
4. 移動至 `[2:] SYSNAND TWLN` -> `title`
5. 按『Y』貼上 `00030004` 資料夾
6. 選擇 『Copy path(s)』
7. 按『A』解鎖 SysNAND(lvl1)的寫入保護，然後按下提示的按鍵組合
8. 選擇『Overwrite file(s)』
    - This process may take some time if you have many DSiWare games
9. 如提示時，按下『B』取消檔案寫入鎖定
10. 按『B』兩次回到主選單

### Section VI - Restore GBA VC Saves

::: info

如果您剛剛沒有備份 GBA 虛擬主機遊戲存檔，跳過本節。

:::

::: info

若想找出 `<TitleID>.gbavc.sav` 遊戲檔案的 Title ID，您可以在 GodMode9 的主選單中按下「Home」鍵，選擇 `Title manager`，再選 `[A:] SD CARD`，以列出所有已安裝於系統的遊戲及對應的 Title ID。

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. 為各個想還原的 GBA 虛擬主機 遊戲重複下列步驟：
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - 移動至 `[0:] SDCARD` -> `gm9`
    - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
    - 按『B』回到主選單
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Inject GBA VC save"
    - 按『A』 繼續
    - Press (Start) to reboot your console
    - Launch the GBA VC game
    - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **在繼續前，請先將 SD 卡中的所有檔案在電腦上備份起來；接下來的步驟將會刪除所有卡上的檔案**

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. 同時按住『R』及『B』以卸除 SD 卡
2. 將 SD 卡插入至電腦中
3. 將所有檔案複製回 SD 卡中
    - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. 按『A』重新載入 SD 卡
6. 按『開始鍵 (Start)』以重新啟動系統

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
