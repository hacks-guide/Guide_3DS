このセクションではシステム設定を初期状態にリセットします。 **Installed games and their save data will not be affected.** This is **required** to prevent known issues relating to extended memory mode and applets on some consoles.

1. 本体の電源を切ります。
1. (START) を長押ししながら本体の電源を入れます。 GodMode9が起動します。
1. `[0:] SDCARD` -> `gm9`へ移動します。
1. 拡張子.binのCTR Transferイメージの上でXキーを押して削除します
1. (A) を押して確認します
1. Press (B) a few times to go back to the main menu
1. Navigate to `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    + The `<ID0>` will be a folder with a 32-character long name
1. Use the D-Pad to highlight `00010017`
1. Press (Right Shoulder) + (A) to bring up the folder options
1. "Copy to 0:/gm9/out" を選択します
1. (A) で続行します
1. While still highlighting `00010017`, press (X) to delete it
1. (A) を押して確認します
1. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
1. Once the file has been deleted, press (A) to continue
1. (A) ボタンを押すとNANDへの書き込みを再ロックできます
1. Press (Start) to reboot your console
1. Your console will load into the initial setup menu
    + This is expected behaviour. You have not lost any of your game data
1. Complete the initial setup menu by following the prompts on your console's screen
