# Restoring / Updating CFW

## Required Reading

本指南將教您如何透過已安裝 boot9strap 的主機重新安裝或更新自製韌體。 本指南也適用於 SD 卡不見或損壞的情形。

Your SD card must be formatted as FAT32 to follow this guide, or else the 3DS will be unable to recognize it. If your SD card is not yet properly formatted, use one of these pages to format it, depending on your operating system: [Windows](formatting-sd-\(windows\)), [Mac](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)).

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

1. 將 SD 卡插入至電腦中
2. 解壓 Luma3DS `.zip` 內的 `boot.3dsx` 及 `boot.firm` 到 SD 卡的根目錄底下，並覆蓋任何已存在的檔案
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Reinsert your SD card into your console
4. Power on your console
   - If you see the Luma3DS configuration menu, press (Start) to save and reboot

::: tip

The latest version of Luma3DS has now been installed on your SD card and on internal memory.

:::

___

::: info

如果您想要重新安裝或更新其他現有的自製程式，請遵循 [完成安裝](finalizing-setup) 中的步驟。

:::
