---
title: "GodMode9の使用方法"
---

{% include toc title="目次" %}

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).
{: .notice--info}

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### 必ずお読みください

GodMode9はニンテンドー3DSの全てのファイルシステムにアクセスができる道具です。SDカードやSysNAND, EmuNAND内にあるFTAパーティション、その他様々なのもにアクセスすることが出来ます。 他にも、ファイルのコピー、削除、名前の変更、フォルダの作成などの機能があります。

SDカードの/luma/payloadsフォルダに
godmode9.firm以外のpayloadファイルがある場合、(START)を押しながら起動すると、「chainloaderメニュー」が表示されます。
(十字キー)で「GodMode9」を選択して(Aボタン)を押してください。

GodMode9は、本体のファイルを操作できる強力なソフトウェアです。 これらの操作の多くは権限システムによってロックされています。こちらが権限を解除せずに、誤って危険なアクションを実行することはありませんが、慎重に指示に従ってください。

## GodMode9の更新

以下の手順の一部は、GodMode9の最新バージョンにのみ適用されます。続行する前に、このセクションに従って更新する必要があります。 ファイルは上書きして下さい
{: .notice--info}

### 必要なもの

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### 手順

1. Power off your console
1. パソコンにSDカードを入れます
1. `GodMode9.firm` を GodMode9の `.zip` から取り出し、SDカードの `/luma/payloads/` フォルダにコピーします。
1. `gm9`フォルダをGodMode9`.zip`からSDカードのルートにコピーします。
1. Reinsert your SD card into your console

GodMode9 is now up to date.
{: .notice--success}

## NANDバックアップの作成

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
{% include_relative include/nand-backup.txt %}

Your NAND backup has been successfully created.
{: .notice--success}

## NANDバックアップの復元

1. Power off your console
1. パソコンにSDカードを入れます
1. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. (Home) ボタンを押してアクションメニューを呼び出します
1. "Scripts..."を選択します
1. "GM9Megascript"を選択します
1. "Restore Options" を選択します
1. "SysNAND Restore (safe)"を選択します
1. NANDのバックアップを選択します
1. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl3) への書き込みを許可します
    + This will **not** overwrite your boot9strap installation
    + この作業には少し時間がかかります
1. (A) で続行します
1. Bキーを押してメインメニューに戻ります
1. "Exit"を選択します。
1. (A) ボタンを押すとNANDへの書き込みを再ロックできます

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.
{: .notice--success}

## .CIA アプリを Health & Safety へインジェクトする

Health & Safetyよりも大きいファイルをインジェクトすることはできません (ゲームやその他の大規模なアプリケーションを含む)
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. `[0:] SDCARD` → `cias` へ移動します
1. Press (A) on your `.cia` to select it
1. Select "CIA image options..."
1. Select "Mount image to drive"
1. Press (A) on the `.app` file
1. Select "NCCH image options"
1. Select "Inject to H&S"
1. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
1. (A) で続行します
1. (A) ボタンを押すとNANDへの書き込みを再ロックできます

Your desired application has now been injected into Health & Safety.
{: .notice--success}

## .CIAアプリをインジェクトした後のHealth & Safetyのリストア

これは、Health＆Safety のインジェクトがGodMode9 (Decrypt9またはHourglass9ではない)
 によって実行された場合にのみ機能します。
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. (Home) ボタンを押してアクションメニューを呼び出します
1. 「More...」を選択します
1. 「Restore H&S」を選択します
1. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
1. (A) ボタンを押すとNANDへの書き込みを再ロックできます

Health & Safety has been reverted to normal.
{: .notice--success}

## SDカードのフォーマット

**SDカードの内容が全消去されますのでご注意ください!**
{: .notice--danger}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
    + If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed
{% include_relative include/format-sd-gm9.txt %}

Your SD card has successfully been formatted for use with the console.
{: .notice--success}

## Removing an NNID without formatting your console

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. (Home) ボタンを押してアクションメニューを呼び出します
1. "Scripts..."を選択します
1. "GM9Megascript"を選択します
1. "Scripts from Plailect's Guide"を選択します
1. "Remove NNID"を選択します
1. (A) で続行します
1. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
1. (A) で続行します
1. Bキーを押してメインメニューに戻ります
1. "Exit"を選択します。
1. (A) ボタンを押すとNANDへの書き込みを再ロックできます
1. Press (Start) to reboot your console

You have now been logged out of your NNID.
{: .notice--success}
