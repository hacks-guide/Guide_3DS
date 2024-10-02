このセクションではシステム設定を初期状態にリセットします。 **Installed games and their save data will not be affected.** This is **required** to prevent known issues relating to extended memory mode and applets on some consoles.

1. Power off your console
2. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
3. Navigate to `[0:] SDCARD` -> `gm9` -> `in`
4. 拡張子.binのCTR Transferイメージの上でXキーを押して削除します
5. (A) を押して確認します
6. Press (B) a few times to go back to the main menu
7. Navigate to `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
   - The `<ID0>` will be a folder with a 32-character long name
8. Use the D-Pad to highlight `00010017`
9. Press (Right Shoulder) + (A) to bring up the folder options
10. "Copy to 0:/gm9/out" を選択します
11. (A) で続行します
12. While still highlighting `00010017`, press (X) to delete it
13. (A) を押して確認します
14. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
15. Once the file has been deleted, press (A) to continue
16. (A) ボタンを押すとNANDへの書き込みを再ロックできます
17. Press (Start) to reboot your console
18. Your console will load into the initial setup menu
    - This is expected behaviour. You have not lost any of your game data
19. Complete the initial setup menu by following the prompts on your console's screen
