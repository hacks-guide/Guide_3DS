# Restoring / Updating CFW

## Lecture Requise

This page prepares consoles with an existing modern boot9strap installation for reinstallation and/or updating of custom firmware applications. It can also be used in the event of a lost or corrupted SD card.

Your SD card must be formatted as FAT32 to follow this guide, or else the 3DS will be unable to recognize it. If your SD card is not yet properly formatted, use one of these pages to format it, depending on your operating system: [Windows](formatting-sd-\(windows\)), [Mac](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)).

## Ce dont vous avez besoin

- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier \`.zip' de Luma3DS)

## Instructions

1. Insérez votre carte SD dans votre ordinateur
2. Copy everything from the Luma3DS `.zip` (`boot.firm`, `boot.3dsx`, and `config`) to the root of your SD card. S'il y a déjà des fichiers existants, remplacez-les par les nouveaux fichiers.
   - La racine de la carte SD représente le répertoire initial de la carte SD où vous pouvez voir le dossier Nintendo 3DS, mais ce n'est pas à l'intérieur de ce dernier
3. Réinsérez votre carte SD dans votre console
4. Allumez votre console
   - If you see the Luma3DS configuration menu, press (Start) to save and reboot

::: info

![](/images/screenshots/restoringcfw-root-layout.png)

:::

::: info

The latest version of Luma3DS has now been installed on your SD card and on internal memory.

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup) to install or update homebrew applications (e.g. FBI, Homebrew Launcher).

:::
