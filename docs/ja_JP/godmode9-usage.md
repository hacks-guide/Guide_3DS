# GodMode9の使用方法

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

GodMode9はニンテンドー3DSの全てのファイルシステムにアクセスができる道具です。SDカードやSysNAND, EmuNAND内にあるFTAパーティション、その他様々なのもにアクセスすることが出来ます。 他にも、ファイルのコピー、削除、名前の変更、フォルダの作成などの機能があります。

SDカードの/luma/payloadsフォルダに
godmode9.firm以外のpayloadファイルがある場合、(START)を押しながら起動すると、「chainloaderメニュー」が表示されます。
(十字キー)で「GodMode9」を選択して(Aボタン)を押してください。

GodMode9は、本体のファイルを操作できる強力なソフトウェアです。 これらの操作の多くは権限システムによってロックされています。こちらが権限を解除せずに、誤って危険なアクションを実行することはありませんが、慎重に指示に従ってください。

## Updating GodMode9

::: info

以下の手順の一部は、GodMode9の最新バージョンにのみ適用されます。続行する前に、このセクションに従って更新する必要があります。 ファイルは上書きして下さい

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. パソコンにSDカードを入れます
3. `GodMode9.firm` を GodMode9の `.zip` から取り出し、SDカードの `/luma/payloads/` フォルダにコピーします。
4. `gm9`フォルダをGodMode9`.zip`からSDカードのルートにコピーします。
5. Reinsert your SD card into your console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Power off your console
2. パソコンにSDカードを入れます
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
6. (Home) ボタンを押してアクションメニューを呼び出します
7. "Scripts..."を選択します
8. "GM9Megascript"を選択します
9. "Restore Options" を選択します
10. "SysNAND Restore (safe)"を選択します
11. NANDのバックアップを選択します
12. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl3) への書き込みを許可します
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. (A) で続行します
14. Bキーを押してメインメニューに戻ります
15. "Exit"を選択します。
16. (A) ボタンを押すとNANDへの書き込みを再ロックできます

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Health & Safetyよりも大きいファイルをインジェクトすることはできません (ゲームやその他の大規模なアプリケーションを含む)

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. `[0:] SDCARD` → `cias` へ移動します
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
10. (A) で続行します
11. (A) ボタンを押すとNANDへの書き込みを再ロックできます

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

これは、Health＆Safety のインジェクトがGodMode9 (Decrypt9またはHourglass9ではない)
によって実行された場合にのみ機能します。

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. (Home) ボタンを押してアクションメニューを呼び出します
3. 「More...」を選択します
4. 「Restore H&S」を選択します
5. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
6. (A) ボタンを押すとNANDへの書き込みを再ロックできます

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**SDカードの内容が全消去されますのでご注意ください!**

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
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

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. (Home) ボタンを押してアクションメニューを呼び出します
3. "Scripts..."を選択します
4. "GM9Megascript"を選択します
5. "Scripts from Plailect's Guide"を選択します
6. "Remove NNID"を選択します
7. (A) で続行します
8. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
9. (A) で続行します
10. Bキーを押してメインメニューに戻ります
11. "Exit"を選択します。
12. (A) ボタンを押すとNANDへの書き込みを再ロックできます
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
