# Restoring / Updating CFW

## Lesen erforderlich

This page prepares consoles with an existing modern boot9strap installation for reinstallation and/or updating of custom firmware applications. It can also be used in the event of a lost or corrupted SD card.

Your SD card must be formatted as FAT32 to follow this guide, or else the 3DS will be unable to recognize it. If your SD card is not yet properly formatted, use one of these pages to format it, depending on your operating system: [Windows](formatting-sd-\(windows\)), [Mac](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)).

## Was du brauchst

- Die neueste Version von [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (die Luma3DS `.zip` Datei)

## Anleitung

1. Stecke deine SD-Karte in deinen Computer
2. Copy everything from the Luma3DS `.zip` (`boot.firm`, `boot.3dsx`, and `config`) to the root of your SD card. If any of the files exist, overwrite them with the new files.
   - Das Stammverzeichnis der SD-Karte bezieht sich auf das ursprüngliche Verzeichnis deiner SD-Karte, wo du den Nintendo 3DS Ordner sehen kannst, aber nicht in ihm drin bist
3. Reinsert your SD card into your console
4. Power on your console
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
