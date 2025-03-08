# Dumping Titles and Game Cartridges

::: info

不論寫腳本、取得更新或更多訊息，您能加入 [GodMode9 的 Discord 伺服器](https://discord.gg/BRcbvtFxX4) 以獲得更多幫助。

:::

## Required Reading

除了建立及還原NAND備份外，GodMode9 也可以將已安裝的程式轉換成可安裝的 `.cia` 格式，或者將遊戲卡帶轉存成 `.3ds` 的 ROM 檔案，以便將卡帶版的遊戲轉成可安裝至系統的格式。

## Updating GodMode9

::: info

以下指示是為 v2.0.0 或較新版本的 GodMode9 而寫的。 如果您的 GodMode9 版本較舊，請遵循以下指示更新其版本。

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. 將 SD 卡插入至電腦中
3. 解壓 GodMode9 `.zip` 中的 `GodMode9.firm` 檔案到 SD 卡的 `/luma/payloads/` 資料夾中
4. 解壓 GodMode9 `.zip` 中的 `gm9` 資料夾到 SD 卡的根目錄底下
5. Reinsert your SD card into your console

## Dumping a Game Cartridge

::: info

Insert the game cartridge you intend to dump into your console

- 3DS game cartridges will be dumped to a `.3ds` format
- NDS game cartridges will be dumped to a `.nds` format

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 移動至 `[C:] GAMECART`
3. 遵循以下適合您遊戲卡帶的步驟：
    - **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
    - **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
        - Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
4. 選擇『Copy to 0:/gm9/out』
5. 您不可安裝的 `.3ds` 或 `.nds` 檔案將被複製到您 SD 卡的 `/gm9/out/` 資料夾中

## Installing a Game Cartridge Directly to the System

::: info

以下指示僅適用於 3DS 遊戲；NDS 遊戲卡帶無法被轉存為 3DS 系統程式。

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 移動至 `[C:] GAMECART`
3. 於 `[TitleID].trim.3ds` 按下「A」鍵將其選取，並選擇『NCSD image options...』，再選『Install game image』
4. 按『A』解鎖 SysNAND(lvl1)的寫入保護，然後按下提示的按鍵組合
5. 完成後，您的遊戲卡帶將會在 Home 主選單中以安裝後的軟體形式呈現。

## Dumping a 3DS Game Cartridge to .CIA

::: info

在您繼續前，您應先嘗試 [安裝遊戲卡帶至系統中](#installing-a-game-cartridge-directly-to-the-system)。

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 移動至 `[C:] GAMECART`
3. 於 `[TitleID].trim.3ds` 按下「A」鍵將其選取，並選擇『NCSD image options...』，再選『Build CIA from file』
4. 您可安裝的 `.cia` 檔案將被複製到您 SD 卡的 `/gm9/out/` 資料夾中

## Dumping an Installed Title

::: info

這將允許你轉存任何系統或使用者安裝的程式，如透過 eShop 上下載的遊戲。

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 按『Home』鍵以叫出主選單
3. 選擇『Title manager』
4. 選擇您所想要轉存的程式類型
    - **User Installed Title**: `[A:] SD CARD`
    - **System Title / DSiWare**: `[1:] NAND / TWL`
5. 選擇您所想要轉存的程式
6. 選擇『Manage Title...』
7. 選擇『Build CIA (standard)』
8. 您可安裝的 `.cia` 檔案將被複製到您 SD 卡的 `/gm9/out/` 資料夾中

## Backup GBA VC Saves

::: info

遊戲存檔 `<TitleID>.gbavc.sav` 將被複製至 SD 卡中的`/gm9/out/` 資料夾中。

:::

::: info

若想找出 `<TitleID>.gbavc.sav` 遊戲檔案的 Title ID，您可以在 GodMode9 的主選單中按下「Home」鍵，選擇 `Title manager`，再選 `[A:] SD CARD`，以列出所有已安裝於系統的遊戲及對應的 Title ID。

:::

1. 為各個想備份的 GBA 虛擬主機遊戲重複下列步驟：
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Power off your console
    - Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Dump GBA VC save"
    - 按『A』 繼續
    - Press (Start) to reboot your console

## Restore GBA VC Saves

::: info

若想找出 `<TitleID>.gbavc.sav` 遊戲檔案的 Title ID，您可以在 GodMode9 的主選單中按下「Home」鍵，選擇 `Title manager`，再選 `[A:] SD CARD`，以列出所有已安裝於系統的遊戲及對應的 Title ID。

:::

1. 為各個想還原的 GBA 虛擬主機 遊戲重複下列步驟：
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Power off your console
    - Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
    - 移動至 `[0:] SDCARD` -> `gm9` -> `out`
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

## Encrypting / Decrypting a .CIA file

::: info

為了整潔，將您所想要加密／解密的各個 `.cia` 檔案複製至 SD 卡的 `/cias/` 資料夾中

:::

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
2. 移動至 `[0:] SDCARD` -> `cias`
3. 按『A』鍵選擇 `.cia`，再選『CIA image options...』
4. 選擇您所想要執行的選項：
    - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
    - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
    - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. 加密／解密後的 `.cia` 檔案將被存於指定區域
