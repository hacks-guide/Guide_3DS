---
title: "轉存程式及遊戲卡帶"
---

{% include toc title="條目內容" %}

不論寫腳本、取得更新或更多訊息，您能加入 [GodMode9 的 Discord 伺服器](https://discord.gg/BRcbvtFxX4) 以獲得更多幫助。
{: .notice--primary}

### 必讀事項

除了建立及還原NAND備份外，GodMode9 也可以將已安裝的程式轉換成可安裝的 `.cia` 格式，或者將遊戲卡帶轉存成 `.3ds` 的 ROM 檔案，以便將卡帶版的遊戲轉成可安裝至系統的格式。

## 更新 GodMode9

以下指示是為 v2.0.0 或較新版本的 GodMode9 而寫的。 如果您的 GodMode9 版本較舊，請遵循以下指示更新其版本。
{: .notice--info}

### 必備項目

* 最新版的 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (選擇 GodMode9 `.zip` 檔案)

### 操作說明

1. Power off your console
1. 將 SD 卡插入至電腦中
1. 解壓 GodMode9 `.zip` 中的 `GodMode9.firm` 檔案到 SD 卡的 `/luma/payloads/` 資料夾中
1. 解壓 GodMode9 `.zip` 中的 `gm9` 資料夾到 SD 卡的根目錄底下
1. Reinsert your SD card into your console

## 拷貝遊戲卡帶

{% capture notice %}
Insert the game cartridge you intend to dump into your console
+ 3DS 遊戲卡帶將被存為 `.cia` 格式
+ NDS 遊戲卡帶將被存為 `.nds` 格式
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
1. 移動至 `[C:] GAMECART`
1. 遵循以下適合您遊戲卡帶的步驟：
    + **3DS 遊戲卡帶：**於 `[TitleID].trim.3ds` 按下「A」鍵將其選取
    + **NDS 遊戲卡帶：**於 `[TitleID].nds` 按下「A」鍵將其選取
        + Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
1. 選擇『Copy to 0:/gm9/out』
1. 您不可安裝的 `.3ds` 或 `.nds` 檔案將被複製到您 SD 卡的 `/gm9/out/` 資料夾中

## 安裝遊戲卡帶至系統中

以下指示僅適用於 3DS 遊戲；NDS 遊戲卡帶無法被轉存為 3DS 系統程式。
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
1. 移動至 `[C:] GAMECART`
1. 於 `[TitleID].trim.3ds` 按下「A」鍵將其選取，並選擇『NCSD image options...』，再選『Install game image』
1. 按『A』解鎖 SysNAND(lvl1)的寫入保護，然後按下提示的按鍵組合
1. 完成後，您的遊戲卡帶將會在 Home 主選單中以安裝後的軟體形式呈現。

## 轉存 3DS 遊戲卡帶至 .CIA 格式

在您繼續前，您應先嘗試 [安裝遊戲卡帶至系統中](#installing-a-game-cartridge-directly-to-the-system)。
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
1. 移動至 `[C:] GAMECART`
1. 於 `[TitleID].trim.3ds` 按下「A」鍵將其選取，並選擇『NCSD image options...』，再選『Build CIA from file』
1. 您可安裝的 `.cia` 檔案將被複製到您 SD 卡的 `/gm9/out/` 資料夾中

## 轉存已安裝的程式

這將允許你轉存任何系統或使用者安裝的程式，如透過 eShop 上下載的遊戲。
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
1. 按『Home』鍵以叫出主選單
1. 選擇『Title manager』
1. 選擇您所想要轉存的程式類型
    + **使用者安裝程式**：`[A:] SD CARD`
    + **系統程式 / DSiWare**: `[1:] NAND / TWL`
1. 選擇您所想要轉存的程式
1. 選擇『Manage Title...』
1. 選擇『Build CIA (standard)』
1. 您可安裝的 `.cia` 檔案將被複製到您 SD 卡的 `/gm9/out/` 資料夾中

## 備份 GBA 虛擬主機遊戲存檔

遊戲存檔 `<TitleID>.gbavc.sav` 將被複製至 SD 卡中的`/gm9/out/` 資料夾中。
{: .notice--info}

若想找出 `<TitleID>.gbavc.sav` 遊戲檔案的 Title ID，您可以在 GodMode9 的主選單中按下「Home」鍵，選擇 `Title manager`，再選 `[A:] SD CARD`，以列出所有已安裝於系統的遊戲及對應的 Title ID。
{: .notice--info}

1. 為各個想備份的 GBA 虛擬主機遊戲重複下列步驟：
    + 啟動您所想要備份存檔的 GBA 虛擬主機遊戲
    + 退出遊戲
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
    + 移動至 `[S:] SYSNAND VIRTUAL`
    + 選擇 `agbsave.bin`，並按『A』選擇
    + 選擇『AGBSAVE options...』
    + 選擇『Dump GBA VC save』
    + 按『A』 繼續
    + Press (Start) to reboot your console

## 還原 GBA 虛擬主機遊戲存檔

若想找出 `<TitleID>.gbavc.sav` 遊戲檔案的 Title ID，您可以在 GodMode9 的主選單中按下「Home」鍵，選擇 `Title manager`，再選 `[A:] SD CARD`，以列出所有已安裝於系統的遊戲及對應的 Title ID。
{: .notice--info}

1. 為各個想還原的 GBA 虛擬主機 遊戲重複下列步驟：
    + 啟動您所想要備份存檔的 GBA 虛擬主機遊戲
    + 退出遊戲
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
    + Navigate to `[0:] SDCARD` -> `gm9` -> `out`
    + 選擇所想要還原的 `<TitleID>.gbavc.sav` 並按下『A』複製
    + 按『B』回到主選單
    + 移動至 `[S:] SYSNAND VIRTUAL`
    + 選擇 `agbsave.bin`，並按『A』選擇
    + 選擇『AGBSAVE options...』
    + 選擇『Inject GBA VC save』
    + 按『A』 繼續
    + Press (Start) to reboot your console
    + 啟動您所想要備份存檔的 GBA 虛擬主機遊戲
    + 退出遊戲

## 加密／解密 .CIA 檔案

為了整潔，將您所想要加密／解密的各個 `.cia` 檔案複製至 SD 卡的 `/cias/` 資料夾中
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
1. 移動至 `[0:] SDCARD` -> `cias`
1. 按『A』鍵選擇 `.cia`，再選『CIA image options...』
1. 選擇您所想要執行的選項：
    + **Encrypt to 0:/gm9/out:** 建立一個加密後的 `.cia` 檔案至 SD 卡的 `/gm9/out/` 資料夾中
    + **Decrypt to 0:/gm9/out：** 建立一個解密後的 `.cia` 檔案至 SD 卡的 `/gm9/out/` 資料夾中
    + **Encrypt inplace：** 替換所選的 `.cia` 檔案至加密後的版本
    + **Decrypt inplace：** 替換所選的 `.cia` 檔案至解密後的版本
1. 加密／解密後的 `.cia` 檔案將被存於指定區域
