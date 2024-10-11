# Updating B9S

## Required Reading

本頁面適用於已安裝 boot9strap 且想將其更新至最新版的使用者。

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

::: info

在本節中，請覆蓋所有 SD 卡中可能相衝的檔案。

:::

1. 將 SD 卡插入至電腦中
2. 在 SD 卡的根目錄底下建立一個新的資料夾 `boot9strap`
3. 解壓 boot9strap `.zip` 的 `boot9strap.firm` 及 `boot9strap.firm.sha` 檔案至 SD 卡的 `/boot9strap/` 資料夾中
4. 解壓 SafeB9SInstaller `.zip` 中的 `SafeB9SInstaller.firm` 到 SD 卡的根目錄下，並將其重新命名為 `boot.firm`
5. Reinsert your SD card into your console

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Section II - Installing boot9strap

1. Power on your console
   - This should automatically launch SafeB9SInstaller
2. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-updating-b9s)
3. Once it is completed, force your console to power off by holding down the power button
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. 將 SD 卡插入至電腦中
2. Copy everything from the Luma3DS `.zip` to the root of your SD card, replacing any existing files
3. Reinsert your SD card into your console
4. Power on your console
5. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
