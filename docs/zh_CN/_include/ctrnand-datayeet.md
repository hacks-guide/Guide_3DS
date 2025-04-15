此章节的操作将会将你的系统设置重置为默认值。 **已安装的游戏和存档不会受到任何影响。**这个是为了防止某些主机出现有关扩展内存模式和小程序的一些问题而进行的**必要**操作。

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory _after_ your console has gone through initial setup.

:::

1. 将主机关机
2. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
3. 按若干次 “B” 键回到主菜单
4. 进入到 `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - The `<ID0>` will be a folder with a 32-character long name
5. 使用十字键将光标移动至 `00010017`
6. 按下 “R” + “A” 键打开文件夹选项菜单
7. 选择 “Copy to 0:/gm9/out”
8. 按 “A” 键继续
9. 将光标继续对准 `00010017`，然后按下 “X” 键删除
10. 按下 “A” 键确认
11. 按 “A” 键解锁SysNAND (lvl1) 写入权限，并根据屏幕上的提示依次按下按键
12. - 待文件删除后，按 “A” 键以继续
13. 如果提示重新锁定写入权限，按下 “A” 键来确认
14. Press (Start) to reboot your console
15. 你的主机将自动进入至初始设置的菜单
    - This is expected behaviour. 你的主机没有丢失任何的游戏数据。
16. 根据初始设置菜单的提示完成设置操作。
