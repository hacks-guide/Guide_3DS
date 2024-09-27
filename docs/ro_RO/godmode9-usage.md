# GodMode9 Usage

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

GodMode9 este un navigator de fișiere cu acces complet pentru dispozitivul Nintendo 3DS, oferindu-vă acces la cardul SD, partiţii FAT din SysNAND, EmuNAND şi practic orice altceva. Printre alte funcţionalităţi, puteţi copia, şterge, redenumi fişiere şi crea foldere.

Țineți cont că dacă aveți alte payload-uri în afară de `GodMode9.firm` în folderul '/luma/payloads/' de pe cardul SD, apăsând (Start) va lansa un "meniu chainloader" în care va trebui să folosiți D-Pad-ul și butonul (A) ca să selectați "GodMode9" pentru aceste instrucțiuni.

GodMode9 este un software puternic care are capacitatea de a modifica, în esenţă, orice pe consolă. Deși majoritatea dintre aceste modificări sunt blocate de un sistem de permisiuni și este imposibil să faceți acțiuni periculoase din greșeală fără să activați permisiunile în mod deliberat, tot ar trebui să urmăriți instrucțiunile cu grijă și să țineți copii de rezervă în caz.

## Updating GodMode9

::: info

Unele dintre instrucțiunile de mai jos se aplică doar la ultima versiune de GodMode9, și astfel ar trebui să urmați această secțiune pentru a vă actualiza copia înainte să continuați. Rescrieți orice fișier existent.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. Introduceți cardul SD în calculator
3. Copiați `GodMode9.firm` de pe fișierul `.zip` GodMode9 către folderul `/luma/payloads/` de pe cardul SD
4. Copiați folderul `gm9` din fișierul `.zip` GodMode9 în rădăcina cardului SD
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
2. Introduceți cardul SD în calculator
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
6. Apăsați (Home) pentru a arăta meniul de acțiuni
7. Selectați "Scripts..."
8. Selectaţi "GM9Megascript"
9. Selectați "Restore Options"
10. Selectați "SysNAND Restore (safe)"
11. Selectați copia de rezervă NAND
12. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl3), apoi introduceți combinația de butoane care vi se cere
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Apăsați (A) pentru a continua
14. Apăsați (B) ca să vă întoarceți în meniul principal
15. Select "Exit"
16. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Țineți cont că nu se poate injecta fişiere în Health & Safety mai mari decât aplicația (inclusiv jocuri şi alte aplicaţii mari)

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Navigați spre `[0:] SDCARD` -> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl1), apoi introduceți combinația de butoane care vi se cere
10. Apăsați (A) pentru a continua
11. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

Aceasta va funcţiona doar dacă injectarea Health & Safety a fost efectuată de GodMode9 (nu Decrypt9 sau Hourglass9).

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Apăsați (Home) pentru a arăta meniul de acțiuni
3. Selectați "More..."
4. Selectați "Restore H&S"
5. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl1), apoi introduceți combinația de butoane care vi se cere
6. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**Țineți cont că asta va elimina complet conținutul cardului SD!**

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
2. Apăsați (Home) pentru a arăta meniul de acțiuni
3. Selectați "Scripts..."
4. Selectaţi "GM9Megascript"
5. Selectaţi "Scripts from Plailect's Guide"
6. Selectaţi "Remove NNID"
7. Apăsați (A) pentru a continua
8. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl1), apoi introduceți combinația de butoane care vi se cere
9. Apăsați (A) pentru a continua
10. Apăsați (B) ca să vă întoarceți în meniul principal
11. Select "Exit"
12. Apăsați (A) ca să reblocați permisiunile de scriere dacă vi se cere
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
