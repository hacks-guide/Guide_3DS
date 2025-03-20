This section will reset your system settings to its defaults. **Installed games and their save data will not be affected.** This is **required** to prevent known issues relating to extended memory mode and applets on some consoles.

1. Power off your console
2. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
3. Navigate to `[0:] SDCARD` -> `gm9` -> `in`
4. Press (X) on the CTRTransfer image `.bin` to delete it
5. Press (A) to confirm
6. Press (B) a few times to go back to the main menu
7. Navigate to `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - The `<ID0>` will be a folder with a 32-character long name
8. Use the D-Pad to highlight `00010017`
9. Press (Right Shoulder) + (A) to bring up the folder options
10. Select "Copy to 0:/gm9/out"
11. Press (A) to continue
12. While still highlighting `00010017`, press (X) to delete it
13. Press (A) to confirm
14. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
15. Once the file has been deleted, press (A) to continue
16. Press (A) to relock write permissions if prompted
17. Press (Start) to reboot your console
18. Your console will load into the initial setup menu
    - This is expected behaviour. You have not lost any of your game data
19. Complete the initial setup menu by following the prompts on your console's screen
