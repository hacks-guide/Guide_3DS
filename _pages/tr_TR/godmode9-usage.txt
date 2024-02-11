---
title: "GodMode9 Usage"
---

{% include toc title = "İçindekiler"%}

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).
{: .notice--info}

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Okumanız Gerekli

GodMode9, 3DS için tasarlanmış bir dosya gezginidir; cihaza takılı hafıza kartına, ve SysNAND ve EmuNAND içindeki FAT bölmesine, ve bunların dışında neredeyse her şeye izin verir. Mesela, hafıza kartındaki bir dosyayı kopyalayabilir, silebilir, ismini değiştirebilir ve klasör oluşturabilirsiniz.

SD Kartınızdaki '/luma/payloads/' klasöründe 'Godmode9.firm' dışında bir dosya varsa, cihaz açılırken (Start) 'a basılı tutmak, D-Pad ve (A) tuşunu kullanarak "GodMode9"u seçmeniz gereken bir "chainloader menu" açacaktır.

GodMode9 is powerful software that has the capability to modify essentially anything on your console. Though many of these modifications are locked behind a permissions system, and it is impossible to accidentally perform dangerous actions without deliberately unlocking permissions, you should still follow instructions carefully and keep backups just in case.

## Updating GodMode9

Some of the instructions below are only applicable to the latest version of GodMode9, and as such you should follow this section to update your copy before continuing. Overwrite any existing files.
{: .notice--info}

### What You Need

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
1. SD kartınızı bilgisayarınıza takın
1. Copy `GodMode9.firm` from the GodMode9 `.zip` to the `/luma/payloads/` folder on your SD card
1. Copy the `gm9` folder from the GodMode9 `.zip` to the root of your SD card
1. Reinsert your SD card into your console

GodMode9 is now up to date.
{: .notice--success}

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
{% include_relative include/nand-backup.txt %}

Your NAND backup has been successfully created.
{: .notice--success}

## Restoring a NAND Backup

1. Power off your console
1. SD kartınızı bilgisayarınıza takın
1. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press (Home) to bring up the action menu
1. Select "Scripts..."
1. Select "GM9Megascript"
1. Select "Restore Options"
1. Select "SysNAND Restore (safe)"
1. Select your NAND backup
1. Press (A) to unlock SysNAND (lvl3) writing, then input the key combo given
    + This will **not** overwrite your boot9strap installation
    + This process will take some time
1. Devam etmek için (A) basın
1. Press (B) to return to the main menu
1. Select "Exit"
1. Press (A) to relock write permissions if prompted

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.
{: .notice--success}

## Injecting any .CIA app into Health & Safety

Note that it is not possible to inject files into Health & Safety that are larger than it (including games and other large applications)
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Navigate to `[0:] SDCARD` -> `cias`
1. Press (A) on your `.cia` to select it
1. Select "CIA image options..."
1. Select "Mount image to drive"
1. Press (A) on the `.app` file
1. Select "NCCH image options"
1. Select "Inject to H&S"
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Devam etmek için (A)'ya basın
1. Press (A) to relock write permissions if prompted

Your desired application has now been injected into Health & Safety.
{: .notice--success}

## Restoring Health & Safety after injecting a .CIA app

This will only work if the Health & Safety injection was performed by GodMode9 (not Decrypt9 or Hourglass9).
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press (Home) to bring up the action menu
1. Select "More..."
1. Select "Restore H&S"
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Press (A) to relock write permissions if prompted

Health & Safety has been reverted to normal.
{: .notice--success}

## Format an SD card

**Note that this will erase the contents of your SD card!**
{: .notice--danger}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
    + If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed
{% include_relative include/format-sd-gm9.txt %}

Your SD card has successfully been formatted for use with the console.
{: .notice--success}

## Removing an NNID without formatting your console

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press (Home) to bring up the action menu
1. Select "Scripts..."
1. Select "GM9Megascript"
1. Select "Scripts from Plailect's Guide"
1. Select "Remove NNID"
1. Devam etmek için (A)'ya basın
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Devam etmek için (A) basın
1. Press (B) to return to the main menu
1. Select "Exit"
1. Press (A) to relock write permissions if prompted
1. Press (Start) to reboot your console

You have now been logged out of your NNID.
{: .notice--success}
