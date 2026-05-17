# Updating B9S

## Required Reading

本页是给现有 Boot9strap 的用户且想更新 Boot9strap 到最新版本而准备的。

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

::: info

请在本节中的所有步骤中覆盖 SD 卡上的所有现有文件。

:::

1. 将你的 SD 卡插入到电脑
2. 在 SD 卡根目录创建一个名为 `boot9strap` 的文件夹
3. 从boot9strap `.zip` 文件中复制 `boot9strap.firm` 和 `boot9strap.firm.sha` 到你SD卡的 `/boot9strap/` 文件夹中
4. 将 SafeB9SInstaller `.zip` 中的 `SafeB9SInstaller.firm` 复制到 SD 卡的根目录下，然后重命名为 `boot.firm`
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

1. 将你的 SD 卡插入到电脑
2. Copy everything from the Luma3DS `.zip` to the root of your SD card, replacing any existing files
3. Reinsert your SD card into your console
4. Power on your console
5. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. 其中有许多功能可用于个性化或调试
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
