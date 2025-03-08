# GodMode9 Usage

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

GodMode9 on täysillä oikeuksilla varustettu tiedostoselain Nintendo 3DS -konsolille. Sen avulla pääset käsiksi SD-korttiisi, SysNANDisi ja EmuNANDisi FAT-osioihin sekä periaatteessa mihin tahansa muuhunkin. Voit muun muassa kopioida, poistaa ja uudelleennimetä tiedostoja ja kansioita.

Huomaa, että jos sinulla on muita käynnistystiedostoja kuin `GodMode9.firm` SD-korttisi `/luma/payloads`‑kansiossa, (START)-painikkeen pohjassa pitäminen käynnistyksen aikana avaa "ketjulatausvalikon", jossa sinun on käytettävä ristiohjainta ja (A):ta avataksesi GodMode9:n näitä ohjeita varten.

GodMode9:n on tehokas ohjelma, jolla voit muokata käytännössä mitä tahansa konsolillasi. Vaikka monet muokkaukset ovatkin lukittuja käyttöoikeussuojausten taakse eikä vaarallisia toimenpiteitä voikaan tehdä vahingossa ottamatta suojauksia ensin pois käytöstä, seuraa silti ohjeita huolellisesti ja pidä varmuuskopiosi tallessa varmuuden vuoksi.

## Updating GodMode9

::: info

Jotkin alla olevista ohjeista pätevät vain GodMode9:n viimeisimpään versioon, joten seuraa tämän vaiheen ohjeita päivittääksesi ohjelman ennen kuin jatkat eteenpäin. Korvaa mahdolliset olemassa olevat tiedostot.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. Aseta SD-korttisi tietokoneeseesi
3. Kopioi GodMode9‑`.zip`‑pakkauksesta `GodMode9.firm` SD-korttisi `/luma/payloads/`‑kansioon
4. Kopioi GodMode9-`.zip`-pakkauksesta `gm9`-kansio SD-korttisi juureen
5. Reinsert your SD card into your console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Power off your console
2. Aseta SD-korttisi tietokoneeseesi
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
6. Paina (HOME)-painiketta näyttääksesi toimintovalikon
7. Select "Scripts..."
8. Select "GM9Megascript"
9. Select "Restore Options"
10. Select "SysNAND Restore (safe)"
11. Valitse NAND-varmuuskopiosi
12. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl3) ja syötä annettu painikeyhdistelmä
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Paina (A):ta jatkaaksesi
14. Paina (B):tä palataksesi päävalikkoon
15. Select "Exit"
16. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Huomaa, että Health & Safety -sovellusta isompia tiedostoja ei ole mahdollista injektoida (mukaan lukien pelit ja muut isokokoiset sovellukset)

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Mene hakemistoon `[0:] SDCARD` → `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl1) ja syötä annettu painikeyhdistelmä
10. Paina (A):ta jatkaaksesi
11. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

Tämä toimii vain, jos Health & Safety -injektio tehtiin GodMode9:n avulla (eikä Decrypt9:n tai Hourglass9:n).

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Paina (HOME)-painiketta näyttääksesi toimintovalikon
3. Valitse "More..."
4. Valitse "Restore H&S"
5. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl1) ja syötä annettu painikeyhdistelmä
6. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**Huomaa, että tämä tyhjentää SD-korttisi sisällön!**

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
    - If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Your SD card has successfully been formatted for use with the console.

:::

## Removing an NNID without formatting your console

::: info

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Paina (HOME)-painiketta näyttääksesi toimintovalikon
3. Select "Scripts..."
4. Select "GM9Megascript"
5. Select "Scripts from Plailect's Guide"
6. Select "Remove NNID"
7. Paina (A):ta jatkaaksesi
8. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl1) ja syötä annettu painikeyhdistelmä
9. Paina (A):ta jatkaaksesi
10. Paina (B):tä palataksesi päävalikkoon
11. Select "Exit"
12. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
