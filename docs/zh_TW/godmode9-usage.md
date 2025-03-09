# 如何使用 GodMode9

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

不論寫腳本、取得更新或更多訊息，您能加入 [GodMode9 的 Discord 伺服器](https://discord.gg/BRcbvtFxX4) 以獲得更多幫助。

:::

## Required Reading

GodMode9 是個可任意存取任天堂 3DS 主機檔案的檔案管理員，您可以透過它存取您的 SD 卡、SysNAND 和 EmuNAND 內的 FAT 磁區跟許多其他東西。 除了其他功能外，您還能透過它複製、刪除、重新命名檔案以及建立資料夾。

請注意，如果您在 SD 卡中的 `/luma/payloads/` 資料夾中放有除了 `GodMode9.firm` 的 payload 檔案，在開機時按住『Start』鍵將會顯示一個『加載選單』，從那裏您得透過方向鍵及按鈕『A』選擇『GodMode9』。

GodMode9 是個強大且可修改您主機的資料的一套軟體。 雖然您會需要透過內建的權限管理系統才能修改主機中的資料，且您不可能在不刻意解鎖權限系統的情況下不小心進行任何危險性操作，您還是應該小心翼翼地遵守各操作指南且先進行備份以防萬一。

## Updating GodMode9

::: info

下列部分操作僅適用於最新版本的 GodMode9，因此，您應先透過下列步驟以更新您的 GodMode9 再行繼續。 請覆蓋所有現有檔案。

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. 將 SD 卡插入至電腦中
3. 解壓 GodMode9 `.zip` 中的 `GodMode9.firm` 檔案到 SD 卡的 `/luma/payloads/` 資料夾中
4. 解壓 GodMode9 `.zip` 中的 `gm9` 資料夾到 SD 卡的根目錄底下
5. Reinsert your SD card into your console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Power off your console
2. 將 SD 卡插入至電腦中
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
6. 按『Home』鍵以叫出主選單
7. 選擇『Scripts...』
8. 選擇『GM9Megascript』
9. 選擇『Restore Options』
10. 選擇『SysNAND Restore (safe)』
11. 選擇您的 NAND 備份
12. 按『A』解鎖 SysNAND(lvl3)的寫入保護，然後按下提示的按鍵組合
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. 按『A』 繼續
14. 按『B』回到主選單
15. 選擇『Exit』
16. 如提示時，按下『A』取消檔案寫入鎖定

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

請注意，您將無法植入比『健康與警示』程式還大的檔案 (包括遊戲以及其他較大的程式)

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 移動至 `[0:] SDCARD` -> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. 按『A』解鎖 SysNAND(lvl1)的寫入保護，然後按下提示的按鍵組合
10. 按『A』 繼續
11. 如提示時，按下『A』取消檔案寫入鎖定

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

此方法只能在先前使用過 GodMode9 植入檔案至『健康與警示』程式的前提下才能使用(非 Decrypt9 或 Hourglass9)。

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 按『Home』鍵以叫出主選單
3. 選擇『More...』
4. 選擇『Restore H&S』
5. 按『A』解鎖 SysNAND(lvl1)的寫入保護，然後按下提示的按鍵組合
6. 如提示時，按下『A』取消檔案寫入鎖定

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**請注意，這將清除您 SD 卡的所有資料！**

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
    - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Your SD card has successfully been formatted for use with the console.

:::

## Removing an NNID without formatting your console

::: info

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 按『Home』鍵以叫出主選單
3. 選擇『Scripts...』
4. 選擇『GM9Megascript』
5. 選擇『Scripts from Plailect's Guide』
6. 選擇『Remove NNID』
7. 按『A』 繼續
8. 按『A』解鎖 SysNAND(lvl1)的寫入保護，然後按下提示的按鍵組合
9. 按『A』 繼續
10. 按『B』回到主選單
11. 選擇『Exit』
12. 如提示時，按下『A』取消檔案寫入鎖定
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
