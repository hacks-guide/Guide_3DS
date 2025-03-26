# Troubleshooting (Finalizing Setup)

This page offers troubleshooting advice for commonly encountered issues with the "Finalizing Setup" page. If you are unable to solve your issue with the advice on this page, please join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and describe your issue, including what you have already tried.

## Issues with Finalizing Setup

:::details Unable to update console

The steps below can be attempted in any order, but are listed from easiest to hardest to perform.

1. If you are using Pretendo, switch back to Nintendo with Nimbus and try again
2. Set your DNS settings to "Auto"
3. Move closer to your WiFi router
4. Update from Safe Mode by turning off the console, holding (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A) on boot, and following the on-screen prompts
5. Delete your WiFi connection, then reconnect to your WiFi again
6. Reboot your WiFi router
7. Connect to a different WiFi connection, like a mobile hotspot
8. Nintendo servers may be down; Try again later
9. If you still get an error, [follow CTRTransfer](ctrtransfer), then try again
10. For further support (in English), join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp)

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

1. Power off your console
2. Sett inn SD-kortet i datamaskinen din
3. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
4. Delete the Nintendo 3DS folder from the SD card
5. Reinsert your SD card into your console
6. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
7. Press the (Home) button
8. Select "Scripts..."
9. Select "finalize"
10. Press (A) to create a NAND backup
    - This may take around fifteen minutes
11. Press (A) again
    - The console should automatically power off
12. Sett inn SD-kortet i datamaskinen din
13. Copy the files in `/gm9/backups/` on your SD to a safe location on your computer
14. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
15. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
16. Delete the `Nintendo 3DS` folder from your computer

Now that you have your NAND backup in a safe place:

1. Reinsert your SD card into your console
2. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
3. Press the (Home) button
4. Select "Scripts..."
5. Select "finalize"
6. Continue the script as normal
    - The NAND backup will be automatically skipped

:::

:::details Information #05: No title database

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

:::

:::details Error #06 or "Error: Could not open directory" when attempting a NAND backup

Make sure you have at least 1.3GB available in your SD card. If you don't have enough space, follow these steps:

1. Power off your console
2. Sett inn SD-kortet i datamaskinen din
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
7. Press (Home) to bring up the action menu
8. Select "Scripts..."
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
