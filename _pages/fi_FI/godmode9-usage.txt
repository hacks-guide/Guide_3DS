---
title: "GodMode9:n käyttäminen"
---

{% include toc title="Sisällysluettelo" %}

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).
{: .notice--info}

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Tärkeää tietoa

GodMode9 on täysillä oikeuksilla varustettu tiedostoselain Nintendo 3DS -konsolille. Sen avulla pääset käsiksi SD-korttiisi, SysNANDisi ja EmuNANDisi FAT-osioihin sekä periaatteessa mihin tahansa muuhunkin. Voit muun muassa kopioida, poistaa ja uudelleennimetä tiedostoja ja kansioita.

Huomaa, että jos sinulla on muita käynnistystiedostoja kuin `GodMode9.firm` SD-korttisi `/luma/payloads`‑kansiossa, (START)-painikkeen pohjassa pitäminen käynnistyksen aikana avaa "ketjulatausvalikon", jossa sinun on käytettävä ristiohjainta ja (A):ta avataksesi GodMode9:n näitä ohjeita varten.

GodMode9:n on tehokas ohjelma, jolla voit muokata käytännössä mitä tahansa konsolillasi. Vaikka monet muokkaukset ovatkin lukittuja käyttöoikeussuojausten taakse eikä vaarallisia toimenpiteitä voikaan tehdä vahingossa ottamatta suojauksia ensin pois käytöstä, seuraa silti ohjeita huolellisesti ja pidä varmuuskopiosi tallessa varmuuden vuoksi.

## GodMode9:n päivittäminen

Jotkin alla olevista ohjeista pätevät vain GodMode9:n viimeisimpään versioon, joten seuraa tämän vaiheen ohjeita päivittääksesi ohjelman ennen kuin jatkat eteenpäin. Korvaa mahdolliset olemassa olevat tiedostot.
{: .notice--info}

### Tarpeet

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Ohjeet

1. Power off your console
1. Aseta SD-korttisi tietokoneeseesi
1. Kopioi GodMode9‑`.zip`‑pakkauksesta `GodMode9.firm` SD-korttisi `/luma/payloads/`‑kansioon
1. Kopioi GodMode9-`.zip`-pakkauksesta `gm9`-kansio SD-korttisi juureen
1. Reinsert your SD card into your console

GodMode9 is now up to date.
{: .notice--success}

## NAND-varmuuskopion luominen

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
{% include_relative include/nand-backup.txt %}

Your NAND backup has been successfully created.
{: .notice--success}

## NAND-varmuuskopion palauttaminen

1. Power off your console
1. Aseta SD-korttisi tietokoneeseesi
1. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Paina (HOME)-painiketta näyttääksesi toimintovalikon
1. Select "Scripts..."
1. Select "GM9Megascript"
1. Select "Restore Options"
1. Select "SysNAND Restore (safe)"
1. Valitse NAND-varmuuskopiosi
1. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl3) ja syötä annettu painikeyhdistelmä
    + This will **not** overwrite your boot9strap installation
    + Tämä prosessi voi kestää jonkin aikaa
1. Paina (A):ta jatkaaksesi
1. Paina (B):tä palataksesi päävalikkoon
1. Select "Exit"
1. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.
{: .notice--success}

## CIA-sovellusten injektoiminen Health & Safety -sovellukseen

Huomaa, että Health & Safety -sovellusta isompia tiedostoja ei ole mahdollista injektoida (mukaan lukien pelit ja muut isokokoiset sovellukset)
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Mene hakemistoon `[0:] SDCARD` → `cias`
1. Press (A) on your `.cia` to select it
1. Select "CIA image options..."
1. Select "Mount image to drive"
1. Press (A) on the `.app` file
1. Select "NCCH image options"
1. Select "Inject to H&S"
1. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl1) ja syötä annettu painikeyhdistelmä
1. Paina (A):ta jatkaaksesi
1. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa

Your desired application has now been injected into Health & Safety.
{: .notice--success}

## Health & Safetyn palauttaminen .CIA-sovelluksen injektoimisen jälkeen

Tämä toimii vain, jos Health & Safety -injektio tehtiin GodMode9:n avulla (eikä Decrypt9:n tai Hourglass9:n).
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Paina (HOME)-painiketta näyttääksesi toimintovalikon
1. Valitse "More..."
1. Valitse "Restore H&S"
1. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl1) ja syötä annettu painikeyhdistelmä
1. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa

Health & Safety has been reverted to normal.
{: .notice--success}

## SD-kortin alustaminen

**Huomaa, että tämä tyhjentää SD-korttisi sisällön!**
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
1. Paina (HOME)-painiketta näyttääksesi toimintovalikon
1. Select "Scripts..."
1. Select "GM9Megascript"
1. Select "Scripts from Plailect's Guide"
1. Select "Remove NNID"
1. Paina (A):ta jatkaaksesi
1. Paina (A):ta ottaaksesi käyttöön SysNANDiin kirjoittamisen (lvl1) ja syötä annettu painikeyhdistelmä
1. Paina (A):ta jatkaaksesi
1. Paina (B):tä palataksesi päävalikkoon
1. Select "Exit"
1. Paina (A):ta lukitaksesi kirjoitusoikeudet kehotettaessa
1. Press (Start) to reboot your console

You have now been logged out of your NNID.
{: .notice--success}
