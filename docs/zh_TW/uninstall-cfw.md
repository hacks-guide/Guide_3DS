# 卸載自製韌體

## Required Reading

This will completely remove CFW from your console, including boot9strap and Luma3DS, for the purpose of restoring the console to stock.

Any unsigned (illegitimate) games will be rendered unusable and will be removed during this process. Use a [save manager](https://github.com/FlagBrew/Checkpoint/releases/latest) to back up any saves that you care about.

::: danger

If you're removing CFW because:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. A better idea would be to ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

:::

::: danger

If you have done ANY of the following:

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. If this applies to you, [restore a clean NAND backup](godmode9-usage#restoring-a-nand-backup) before continuing.

:::

::: warning

These instructions will only work on consoles with a Luma3DS version of 8.0 or higher. 如果您所安裝的 Luma 版本較舊，您必須先更新您的 Luma3DS 再繼續。 您可遵循[這個教學](checking-for-cfw)進行更新。

:::

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Instructions

### Section I - Prep Work

1. Power off your console
2. 將 SD 卡插入至電腦中
3. Copy everything from the Luma3DS `.zip` to the root of your SD card
4. 解壓 GodMode9 `.zip` 中的 `GodMode9.firm` 檔案到 SD 卡的 `/luma/payloads/` 資料夾中
5. 解壓 GodMode9 `.zip` 中的 `gm9` 資料夾到 SD 卡的根目錄底下
6. 在 SD 卡上，將 `DSiWareUninstaller.3dsx` 複製到 `/3ds/` 資料夾底下
7. 複製 `safety_test.gm9` 到 SD 卡中的 `/gm9/scripts/` 資料夾
8. Reinsert your SD card into your console

### Section II - DS Mode Tests

本章節將會檢查內建的 DS 模式是否能在自製韌體卸載後正常運行。 如果您跳過此章節，在您重新安裝自製韌體前，DS 模式可能無法正常運行。

#### DS Connection Settings Test

1. Power on your console
2. Launch System Settings on your console
3. 移動至『網路設定 (Internet Settings)』中的『任天堂 DS 連線 (Nintendo DS Connections)』並選擇『OK』
4. 你的主機應該會開起至『任天堂 DS 網路 (Nintendo DS Connections)』的設定選單
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Power off your console

#### DS Download Play Test

1. Power on your console
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. 選擇『任天堂 DS (Nintendo DS)』
4. If your console loads into a "Download software via DS Download Play" menu, the test was successful
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Power off your console

::: warning

如果任何一個測試失敗了，那麼移除自製韌體後，您可能將會無法正常使用 DS 模式、DS『下載通信 (Download Play)』程式、或者 DS 連線設定 (Connection Settings)！ You should [fix DS mode](troubleshooting#software-issues-on-consoles-with-custom-firmware) before continuing.

:::

### Section III - Safety Test

本節的目的是為了檢查主機是否能在移除自製韌體後正常開機，並確保核心系統元件 (如系統設定及螢幕小鍵盤) 能夠正常運作。 **If you skip this section, you may BRICK your console!**

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 當提示重要檔案備份時，按下『A』繼續，並在完畢後按下『A』繼續
3. 當提示修正 RTC 日期及時間時，按『A』繼續並設定日期及時間，再按『A』繼續
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. 按『Home』鍵以叫出主選單
5. 選擇『Scripts...』
6. 選擇『safety_test』
7. 閱讀螢幕上所出現的警示，並按下「A」鍵繼續
8. 您應該會進入正常的 3DS HOME 主選單中 (自訂主題不在此範圍內)。 如果是這樣，請繼續進行以下操作
   - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. Launch System Settings on your console
   - If the console crashes at this point, the test has failed
10. 選擇『其他設定 (Other Settings)』
11. 選擇『個人檔案 (Profile)』
12. 選擇『用戶名 (User Name)』
13. 如果你能正常輸入一個新的用戶名，則代表測試成功
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. Power off your console

::: danger

如果你在開機後無法進入正常的 3DS HOME 主選單、無法進入系統設定、或者螢幕小鍵盤無法正常使用，**請不要繼續進行以下步驟**！ 請加入 [Discord 中的 Nintendo Homebrew 伺服器](https://discord.gg/MWxPgEp) 並使用英文尋求協助。

:::

### Section IV - NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 按『Home』鍵以叫出主選單
3. 選擇『Scripts...』
4. 選擇『GM9Megascript』
5. 選擇『Backup Options』
6. 選擇『SysNAND Backup』
7. 按 『A』 確認
   - This process will take some time
   - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. 按『B』回到主選單
9. 選擇『Exit』
10. 按『Home』鍵以叫出主選單
11. Select "Poweroff system" to power off your console

### Section V - Removing illegitimate content

::: warning

本章節將會移除任何非法內容，如自製程式及轉存的遊戲卡帶。 如果你有任何您特別在意的存檔，請先透過存檔管理員將其備份再行繼續。

:::

1. Power on your console
2. Launch System Settings on your console
3. 移動至 `資料管理 (Data Management)` -> `任天堂 3DS` -> `軟體 (Software)`
4. 在此列表中，刪除您在使用自製韌體時安裝的所有非來自於任天堂的自製程式
   - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. 移動至 `檔案管理 (Data Management)` -> `DSiWare`
6. 在此列表中，刪除您在使用自製韌體時安裝的所有非來自於任天堂的自製程式
   - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
   - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. 離開系統設定
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. 等到你看到兩個按鍵
10. 同時按下『L』+『下』+『Select』鍵以啟動 Rosalina 選單
11. 選擇『Miscellaneous options』
12. Select "Switch the hb. title to the current app."
13. 按『B』繼續
14. 按『B』回到 Rosalina 主選單
15. 按『B』退出 Rosalina 選單
16. 按『Home』鍵，並關閉『下載通信 (Download Play)』程式
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Your console should load the Homebrew Launcher
19. 透過 Homebrew 清單啟動 DSiWare Uninstaller
20. 按照提示並允許程式進行卸載
21. Once the process has succeeded, exit the Homebrew Launcher and power off your console

### Section VI - System Format

本節將確保所有非法 tickets 已被刪除，讓 eShop 能夠正常運行。 這將從您的 3DS 中刪除所有內容並登出您的 NNID。 請注意，您主機的加密金鑰將會被洗掉，也就是說您將無法使用任何先前的資料，即使你先前已備份了你的 SD 卡。

1. Power on your console
2. Launch System Settings on your console
3. 移動至 『其他設定 (Other Settings)』-> 下一頁 (直到最後一頁) ->『格式化系統 (Format System Memory)』
4. 依循所示步驟以格式化您的主機

### Section VII - Running Uninstall Script

::: warning

這是檢查您是否已遵守上述所有安全步驟的最後機會！ 請再繼續前確保您以遵守以上所有的章節，**尤其是**`第三節 — 安全性測試`。

:::

::: danger

If you're removing CFW because:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. A better idea would be to ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. 按『Home』鍵以叫出主選單
3. 選擇『Scripts...』
4. 選擇『GM9Megascript』
5. 選擇『Hax Options』
6. 選擇『Un-install Hax』
7. 如提示時，按下『A』繼續
8. 按『A』解鎖 SysNAND(lvl3)的寫入保護，然後按下提示的按鍵組合
9. 按『A』 繼續
10. 按『B』回到主選單
11. 選擇『Exit』
12. 如提示時，按下『A』取消檔案寫入鎖定
13. Press (Start) to reboot your console

___

::: tip

All custom firmware has been removed from your console.

:::

::: info

您現在可以將所有_非_ `Nintendo 3DS`、`DCIM`、或 `private` 的資料夾及檔案刪除。

:::
