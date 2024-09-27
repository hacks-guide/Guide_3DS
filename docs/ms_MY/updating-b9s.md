# Updating B9S

## Required Reading

This page is for existing boot9strap users to update their installation of boot9strap to the latest version.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

::: info

For all steps in this section, overwrite any existing files on your SD card.

:::

1. Pasang kad SD anda ke dalam komputer
2. Create a folder named `boot9strap` on the root of your SD card
3. Copy `boot9strap.firm` and `boot9strap.firm.sha` from the boot9strap `.zip` to the `/boot9strap/` folder on your SD card
4. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
5. Reinsert your SD card into your console

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Section II - Installing boot9strap

1. Power on your console
   - This should automatically launch SafeB9SInstaller
2. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
3. Once it is completed, force your console to power off by holding down the power button
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. Pasang kad SD anda ke dalam komputer
2. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card, replacing the existing file
3. Reinsert your SD card into your console
4. Power on your console
5. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
