This section will reset your system settings to its defaults. **Installed games and their save data will not be affected.** This is **required** to prevent known issues relating to extended memory mode and applets on some consoles.

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory _after_ your console has gone through initial setup.

:::

1. Power off your console
2. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
3. Navigate to `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - The `<ID0>` will be a folder with a 32-character long name
4. Use the D-Pad to highlight `00010017`
5. Press (Right Shoulder) + (A) to bring up the folder options
6. Select "Copy to 0:/gm9/out"
7. Press (A) to continue
8. While still highlighting `00010017`, press (X) to delete it
9. Press (A) to confirm
10. Tryck på (A) för att låsa upp skrivning till SysNAND (lvl1) och mata sedan in knappkombinationen som ges
11. Once the file has been deleted, press (A) to continue
12. Press (A) to relock write permissions if prompted
13. Press (Start) to reboot your console
14. Your console will load into the initial setup menu
    - This is expected behaviour. You have not lost any of your game data
15. Complete the initial setup menu by following the prompts on your console's screen
