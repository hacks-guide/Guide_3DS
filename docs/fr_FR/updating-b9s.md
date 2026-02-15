# Updating B9S

## Lecture Requise

This page is for existing boot9strap users to update their installation of boot9strap to the latest version.

## Ce dont vous avez besoin

- La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
- La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)
- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier \`.zip' de Luma3DS)

## Instructions

### Section I - Préparatifs

::: info

For all steps in this section, overwrite any existing files on your SD card.

:::

1. Insérez votre carte SD dans votre ordinateur
2. Créez un dossier nommé `boot9strap` à la racine de votre carte SD
3. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis le fichier ".zip" de boot9strap vers le dossier `/boot9strap/` sur votre carte SD
4. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
5. Réinsérez votre carte SD dans votre console

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Section II - Installing boot9strap

1. Allumez votre console
   - This should automatically launch SafeB9SInstaller
2. Lorsque vous y êtes invité, entrez la combinaison de touches indiquée sur l'écran supérieur pour installer boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-updating-b9s)
3. Once it is completed, force your console to power off by holding down the power button
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. Insérez votre carte SD dans votre ordinateur
2. Copy everything from the Luma3DS `.zip` to the root of your SD card, replacing any existing files
3. Réinsérez votre carte SD dans votre console
4. Allumez votre console
5. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
