This section will reset your system settings to its defaults. **Installed games and their save data will not be affected.** This is **required** to prevent known issues relating to extended memory mode and applets on some consoles.

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory _after_ your console has gone through initial setup.

:::

1. Power off your console
2. Press and hold (Start), and while holding (Start), power on your console. 這將會啟動 GodMode9
3. Navigate to `[0:] SDCARD` -> `gm9` -> `in`
4. 選擇 CTRTransfer `.bin` 鏡像檔，並按『X』刪除
5. 按 『A』 確認
6. Press (B) a few times to go back to the main menu
7. Navigate to `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - The `<ID0>` will be a folder with a 32-character long name
8. Use the D-Pad to highlight `00010017`
9. Press (Right Shoulder) + (A) to bring up the folder options
10. 選擇『Copy to 0:/gm9/out』
11. 按『A』 繼續
12. While still highlighting `00010017`, press (X) to delete it
13. 按 『A』 確認
14. 按『A』解鎖 SysNAND(lvl1)的寫入保護，然後按下提示的按鍵組合
15. Once the file has been deleted, press (A) to continue
16. 如提示時，按下『A』取消檔案寫入鎖定
17. Press (Start) to reboot your console
18. Your console will load into the initial setup menu
    - This is expected behaviour. You have not lost any of your game data
19. Complete the initial setup menu by following the prompts on your console's screen
