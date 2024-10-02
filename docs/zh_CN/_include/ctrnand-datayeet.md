此章节的操作将会将你的系统设置重置为默认值。 **已安装的游戏和存档不会受到任何影响。**这个是为了防止某些主机出现有关扩展内存模式和小程序的一些问题而进行的**必要**操作。

1. 将主机关机
2. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
3. Navigate to `[0:] SDCARD` -> `gm9` -> `in`
4. 在 CTRTransfer `.bin` 上按 “X” 来删除它
5. 按下 “A” 键确认
6. 按若干次 “B” 键回到主菜单
7. 进入到 `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
   - The `<ID0>` will be a folder with a 32-character long name
8. 使用十字键将光标移动至 `00010017`
9. 按下 “R” + “A” 键打开文件夹选项菜单
10. 选择 “Copy to 0:/gm9/out”
11. 按 “A” 键继续
12. 将光标继续对准 `00010017`，然后按下 “X” 键删除
13. 按下 “A” 键确认
14. 按 “A” 键解锁SysNAND (lvl1) 写入权限，并根据屏幕上的提示依次按下按键
15. - 待文件删除后，按 “A” 键以继续
16. 如果提示重新锁定写入权限，按下 “A” 键来确认
17. Press (Start) to reboot your console
18. 你的主机将自动进入至初始设置的菜单
    - This is expected behaviour. 你的主机没有丢失任何的游戏数据。
19. 根据初始设置菜单的提示完成设置操作。
