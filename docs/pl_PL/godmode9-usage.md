# GodMode9 Usage

::: info

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).

:::

::: info

For support (in English) with GodMode9, as well as help with scripting and to get updates and info, join [GodMode9 on Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

GodMode9 to przeglądarka plików z pełnym dostępem dla konsoli Nintendo 3DS, dająca dostęp do Twojej karty SD, partycji FAT wewnątrz SysNAND i EmuNAND oraz praktycznie wszystkiego innego. Możesz też kopiować, usuwać, zmieniać nazwy plików i tworzyć foldery.

Zauważ, że jeżeli będziesz miał pliki inne niż `GodMode9.firm` w folderze `/luma/payloads/` na karcie SD, przytrzymanie (Start), podczas uruchamiania spowoduje wyświetlenie "chainloader menu" w którym będziesz musiał użyć D-Pad'a oraz przycisku (A) aby wybrać "GodMode9" dla tego poradnika.

GodMode9 to potężne oprogramowanie, które ma możliwość modyfikowania praktycznie wszystkiego na Twojej konsoli. Chociaż wiele z tych modyfikacji jest zablokowanych za systemem uprawnień i nie można przypadkowo wykonać niebezpiecznych działań bez świadomego odblokowania uprawnień, należy nadal postępować zgodnie z instrukcjami i zachować kopie zapasowe na wszelki wypadek.

## Updating GodMode9

::: info

Niektóre z poniższych instrukcji mają zastosowanie tylko do najnowszej wersji GodMode9 i powinieneś postępować zgodnie z tą sekcją, aby zaktualizować swoją kopię, zanim przejdziesz dalej. Nadpisz wszystkie istniejące pliki.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Power off your console
2. Włóż kartę SD do komputera
3. Skopiuj `GodMode9.firm` z archiwum `.zip` GodMode9 do folderu `/luma/payloads/` na twojej karcie SD
4. Skopiuj folder `gm9` z GodMode9 `.zip` do katalogu głównego twojej karty SD
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
2. Włóż kartę SD do komputera
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Reinsert your SD card into your console
5. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
6. Wciśnij (Home) aby przywołać menu akcji
7. Wybierz "Scripts..."
8. Wybierz "GM9Megascript"
9. Wybierz "Restore Options"
10. Wybierz "SysNAND Restore (safe)"
11. Wybierz twoją kopie NAND
12. Wciśnij (A), aby odblokować zapis do SysNAND (lvl3), a następnie wprowadź przedstawioną kombinację przycisków
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Naciśnij (A), aby kontynuować
14. Wciśnij (B) aby wrócić do menu głównego
15. Wybierz "Exit"
16. Naciśnij (A), aby ponownie zablokować uprawnienia do zapisu, jeśli zostaniesz o to poproszony

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Pamiętaj że aplikacji Health & Safety nie można podmienić na większe pliki niż ona sama (np. gry i inne duże aplikacje)

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Przejdź do `[0:] SDCARD` -> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Naciśnij (A) żeby odblokować możliwość zapisu do SysNAND (lvl1), a następnie wprowadź wyświetloną sekwencję klawiszy
10. Naciśnij (A), aby kontynuować
11. Naciśnij (A), aby ponownie zablokować uprawnienia do zapisu, jeśli zostaniesz o to poproszony

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

To zadziała tylko wtedy, gdy podmienienie aplikacji Health & Safety zostało wykonane przez Godmode9 (nie Decrypt9 lub Hourglass9).

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Wciśnij (Home) aby przywołać menu akcji
3. Wybierz "More..."
4. Wybierz "Restore H&S"
5. Naciśnij (A) żeby odblokować możliwość zapisu do SysNAND (lvl1), a następnie wprowadź wyświetloną sekwencję klawiszy
6. Naciśnij (A), aby ponownie zablokować uprawnienia do zapisu, jeśli zostaniesz o to poproszony

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**UWAGA! Proces ten usunie całą zawartość twojej karty SD!**

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
2. Wciśnij (Home) aby przywołać menu akcji
3. Wybierz "Scripts..."
4. Wybierz "GM9Megascript"
5. Wybierz "Scripts from Plailect's Guide"
6. Wybierz "Remove NNID"
7. Naciśnij (A), aby kontynuować
8. Naciśnij (A) żeby odblokować możliwość zapisu do SysNAND (lvl1), a następnie wprowadź wyświetloną sekwencję klawiszy
9. Naciśnij (A), aby kontynuować
10. Wciśnij (B) aby wrócić do menu głównego
11. Wybierz "Exit"
12. Naciśnij (A), aby ponownie zablokować uprawnienia do zapisu, jeśli zostaniesz o to poproszony
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
