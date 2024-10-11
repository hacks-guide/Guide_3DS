# Troubleshooting (Finalizing Setup)

This page offers troubleshooting advice for commonly encountered issues with the "Finalizing Setup" page. 如果你的问题无法通过此页面提供的方法解决，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)，使用英文描述你的问题（包括你尝试过的操作）来寻求帮助。你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。

## Issues with Finalizing Setup

:::details Unable to update console

以下是可以尝试的解决方法，按从简单到困难的顺序排列。

1. If you are using Pretendo, switch back to Nintendo with Nimbus and try again
2. 将 DNS 设置为“自动（Auto）”
3. 将主机靠近 WiFi 路由器
4. 尝试在安全模式下更新主机，在开机时按住 L + R +↑ + A 键来进入安全模式，然后跟随屏幕上的指示做
5. 删除你的 Wifi 连接点然后重新再设置一次
6. 重启你的 WiFi 路由器
7. 连接其他的 WiFi，比如移动热点
8. Nintendo 服务器可能临时下线，稍后再试
9. 如果仍然提示错误，请进行 [CTRTransfer](ctrtransfer)，然后再尝试一次更新
10. 如需援助，请加入 [Nintendo Homebrew Discord 服务器](https://discord.gg/MWxPgEp)并说英文求助。（请注意，如果你身处中国大陆，访问 Discord 可能需要科学上网），你也可以到译者的 [QQ 群](https://stray-soul.site/index.php/qqgroup)寻求帮助，群号为 942052497。

:::

:::details Error #22: finalize.romfs is invalid

The file `finalize.romfs` is corrupt or unreadable. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

:::

:::details Information #23: finalize.romfs in wrong location

The file `finalize.romfs` was placed in the wrong location instead of root of SD. The script will attempt to resolve this, but requires your permission to do so. Press (A) on the next few prompts to continue.

:::

:::details Error #24: SD is write-protected

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details Error #02: Missing essential.exefs

You said 'No' to the "Make essential files backup?" prompt in GodMode9. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

:::

:::details Error #04: No space

You need at least 1.3GB of free space to perform the NAND backup, which is a part of the script. If you don't have enough space, follow these steps:

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
4. Delete the Nintendo 3DS folder from the SD card
5. Reinsert your SD card into your console
6. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
7. Press the (Home) button
8. 选择 “Scripts...”
9. Select "finalize"
10. Press (A) to create a NAND backup
    - This may take around fifteen minutes
11. Press (A) again
    - The console should automatically power off
12. 将你的 SD 卡插入到电脑
13. Copy the files in `/gm9/backups/` on your SD to a safe location on your computer
14. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
15. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
16. Delete the `Nintendo 3DS` folder from your computer

Now that you have your NAND backup in a safe place:

1. Reinsert your SD card into your console
2. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
3. Press the (Home) button
4. 选择 “Scripts...”
5. Select "finalize"
6. Continue the script as normal
   - The NAND backup will be automatically skipped

:::

:::details Information #05: No title database

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

:::

:::details Error #06 or "Error: Could not open directory" when attempting a NAND backup

Make sure you have at least 1.3GB available in your SD card. If you don't have enough space, follow these steps:

1. 将主机关机
2. 将你的 SD 卡插入到电脑
3. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
4. Delete the Nintendo 3DS folder from the SD card
5. Reinsert your SD card into your console
6. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
7. Perform a [NAND Backup](godmode9-usage#creating-a-nand-backup)
8. Copy the files in `gm9/out` on your SD to a safe location on your computer
9. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card, keeping essential.exefs in `/gm9/out/`
10. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
11. Delete the `Nintendo 3DS` folder from your computer

If you have enough space on your SD card, your SD might be corrupted or faulty. Check your SD card for any errors by following the guide according to your computer's operating system: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details Information #17: Duplicate NAND backup

The script has detected that the Nintendo 3DS folder is missing AND that you have already made a NAND backup before. If you intend to install homebrew applications, you should do the following:

1. Press (B) to cancel making another NAND backup
2. Hold (R) and press (Start) at the same time to power off your console
3. Copy the contents of `/gm9/backups/` to a safe location on your computer
4. Delete `/gm9/backups/` from your SD card
5. If you moved your Nintendo 3DS folder off of your SD card to get to this point, copy it back to your SD card
   - If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
6. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
7. 按下 “Home” 键来打开功能菜单
8. 选择 “Scripts...”
9. Select "finalize"
10. Follow the prompts in the script, answering any questions that you are asked

:::

:::details Error #18a/18b: MSET9 detected

You didn't remove MSET9 on the previous page. The script will attempt to remove MSET9 for you; follow the instructions given by the script.

:::

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Finalizing Setup](finalizing-setup)

:::

<!--@include: ./_include/troubleshooting-return.md -->
