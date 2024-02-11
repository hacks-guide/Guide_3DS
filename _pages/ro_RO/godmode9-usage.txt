---
title: "Folosind GodMode9"
---

{% include toc title="Cuprins" %}

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).
{: .notice--info}

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Lectură obligatorie

GodMode9 este un navigator de fișiere cu acces complet pentru dispozitivul Nintendo 3DS, oferindu-vă acces la cardul SD, partiţii FAT din SysNAND, EmuNAND şi practic orice altceva. Printre alte funcţionalităţi, puteţi copia, şterge, redenumi fişiere şi crea foldere.

Țineți cont că dacă aveți alte payload-uri în afară de `GodMode9.firm` în folderul '/luma/payloads/' de pe cardul SD, apăsând (Start) va lansa un "meniu chainloader" în care va trebui să folosiți D-Pad-ul și butonul (A) ca să selectați "GodMode9" pentru aceste instrucțiuni.

GodMode9 este un software puternic care are capacitatea de a modifica, în esenţă, orice pe consolă. Deși majoritatea dintre aceste modificări sunt blocate de un sistem de permisiuni și este imposibil să faceți acțiuni periculoase din greșeală fără să activați permisiunile în mod deliberat, tot ar trebui să urmăriți instrucțiunile cu grijă și să țineți copii de rezervă în caz.

## Actualizând GodMode9

Unele dintre instrucțiunile de mai jos se aplică doar la ultima versiune de GodMode9, și astfel ar trebui să urmați această secțiune pentru a vă actualiza copia înainte să continuați. Rescrieți orice fișier existent.
{: .notice--info}

### Ce aveți nevoie

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instrucțiuni

1. Power off your console
1. Introduceți cardul SD în calculator
1. Copiați `GodMode9.firm` de pe fișierul `.zip` GodMode9 către folderul `/luma/payloads/` de pe cardul SD
1. Copiați folderul `gm9` din fișierul `.zip` GodMode9 în rădăcina cardului SD
1. Reinsert your SD card into your console

GodMode9 is now up to date.
{: .notice--success}

## Creând o copie de rezervă NAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
{% include_relative include/nand-backup.txt %}

Your NAND backup has been successfully created.
{: .notice--success}

## Restaurând o copie de rezervă NAND

1. Power off your console
1. Introduceți cardul SD în calculator
1. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Apăsați (Home) pentru a arăta meniul de acțiuni
1. Selectați "Scripts..."
1. Selectaţi "GM9Megascript"
1. Selectați "Restore Options"
1. Selectați "SysNAND Restore (safe)"
1. Selectați copia de rezervă NAND
1. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl3), apoi introduceți combinația de butoane care vi se cere
    + This will **not** overwrite your boot9strap installation
    + Acest proces va lua ceva timp
1. Apăsați (A) pentru a continua
1. Apăsați (B) ca să vă întoarceți în meniul principal
1. Select "Exit"
1. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.
{: .notice--success}

## Injectând orice aplicație .CIA în Health & Safety

Țineți cont că nu se poate injecta fişiere în Health & Safety mai mari decât aplicația (inclusiv jocuri şi alte aplicaţii mari)
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Navigați spre `[0:] SDCARD` -> `cias`
1. Press (A) on your `.cia` to select it
1. Select "CIA image options..."
1. Select "Mount image to drive"
1. Press (A) on the `.app` file
1. Select "NCCH image options"
1. Select "Inject to H&S"
1. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl1), apoi introduceți combinația de butoane care vi se cere
1. Apăsați (A) pentru a continua
1. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere

Your desired application has now been injected into Health & Safety.
{: .notice--success}

## Restaurând Healt & Safety după injectarea unei aplicații .CIA

Aceasta va funcţiona doar dacă injectarea Health & Safety a fost efectuată de GodMode9 (nu Decrypt9 sau Hourglass9).
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Apăsați (Home) pentru a arăta meniul de acțiuni
1. Selectați "More..."
1. Selectați "Restore H&S"
1. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl1), apoi introduceți combinația de butoane care vi se cere
1. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere

Health & Safety has been reverted to normal.
{: .notice--success}

## Formatarea unui card SD

**Țineți cont că asta va elimina complet conținutul cardului SD!**
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
1. Apăsați (Home) pentru a arăta meniul de acțiuni
1. Selectați "Scripts..."
1. Selectaţi "GM9Megascript"
1. Selectaţi "Scripts from Plailect's Guide"
1. Selectaţi "Remove NNID"
1. Apăsați (A) pentru a continua
1. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl1), apoi introduceți combinația de butoane care vi se cere
1. Apăsați (A) pentru a continua
1. Apăsați (B) ca să vă întoarceți în meniul principal
1. Select "Exit"
1. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere
1. Press (Start) to reboot your console

You have now been logged out of your NNID.
{: .notice--success}
