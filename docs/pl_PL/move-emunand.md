# Move EmuNAND

## Required Reading

To jest dodatkowa sekcja która pomoże Ci przenieść obecny EmuNAND do twojego nowego SysNAND CFW, a następnie jak usunąć starą partycje EmuNAND. Zauważ, że terminy EmuNand i RedNAND odnoszą się do nieco innych implementacji [tej samej idei](http://3dbrew.org/wiki/NAND_Redirection).

Zauważ, że jeżeli będziesz miał pliki inne niż `GodMode9.firm` w folderze `/luma/payloads/` na karcie SD, przytrzymanie (Start), podczas uruchamiania spowoduje wyświetlenie "chainloader menu" w którym będziesz musiał użyć D-Pad'a oraz przycisku (A) aby wybrać "GodMode9" dla tego poradnika.

::: danger

MUSISZ mieć już zainstalowany Luma3DS i boot9strap żeby to wykonać.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Włóż kartę SD do komputera
3. Skopiuj `GodMode9.firm` z archiwum `.zip` GodMode9 do folderu `/luma/payloads/` na twojej karcie SD
4. Skopiuj folder `gm9` z GodMode9 `.zip` do katalogu głównego twojej karty SD
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

Jeśli nie masz żadnych gier DSiWare ani zapisów które cię obchodzą, pomiń tą sekcje.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. Jeśli zostaniesz poproszony o ustawienie czasu RTC, naciśnij (A) aby to zrobić, następnie ustaw datę i czas, oraz naciśnij (A) aby kontynuować
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Przejdź do `[2:] SYSNAND TWLN` -> `title`
5. Przytrzymaj (R) i wciśnij (A) w tym samym momencie na folderze `00030004` aby go wybrać, następnie wybierz "Copy to 0:/gm9/out"
   - This process may take some time if you have many DSiWare games
6. Wciśnij (B) dwa razy aby wrócić do menu głównego

### Section III - Backup GBA VC Saves

::: info

Jeśli nie masz żadnych gier lub zapisów GBA VC które cię obchodzą, pomiń tą sekcje.

:::

::: info

To nie obowiązuje innych gier VC (GBC, NES, itp.)

:::

::: info

Zapis zostanie umieszczony w folderze `/gm9/out/` na karcie SD i będzie nosił nazwę `<TitleID>.gbavc.sav`.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Naciśnij (A), aby kontynuować
   - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Przejdź do `[E;] EMUNAND VIRTUAL`
3. Wciśnij (A) na pliku `nand.bin` aby go wybrać, następnie wybierz "NAND image options...", po czym wybierz "Restore SysNAND (safe)"
4. Wciśnij (A) aby odblokować nadpisywanie SysNAND, następnie wprowadź wyświetloną sekwencję klawiszy
   - This will not overwrite your boot9strap installation
5. Wprowadź wyświetloną kombinacje przycisków aby odblokować zapis do SysNAND (lvl1)
   - This process will take some time
6. Once it is completed, press (A) to continue
7. Naciśnij (B) aby odmówić `relocking write permissions` jeżeli zostaniesz o to poproszony
8. Wciśnij (B) aby wrócić do menu głównego

### Section V - Restore DSiWare Saves

::: info

Jeśli nie zrobiłeś kopii zapasowej zapisów DSiWare wcześniej, pomiń tą sekcje.

:::

1. Przejdź do `[0:] SDCARD` -> `gm9` -> `out`
2. Wciśnij (Y) na folderze `00030004` aby go skopiować
3. Wciśnij (B) dwa razy aby wrócić do menu głównego
4. Przejdź do `[2:] SYSNAND TWLN` -> `title`
5. Wciśnij (Y) aby wkleić folder `00030004`
6. Wybierz "Copy path(s)"
7. Naciśnij (A) żeby odblokować możliwość zapisu do SysNAND (lvl1), a następnie wprowadź wyświetloną sekwencję klawiszy
8. Wybierz "Overwrite file(s)"
   - This process may take some time if you have many DSiWare games
9. Naciśnij (B) aby odmówić `relocking write permissions` jeżeli zostaniesz o to poproszony
10. Wciśnij (B) dwa razy aby wrócić do menu głównego

### Section VI - Restore GBA VC Saves

::: info

Jeśli nie zrobiłeś kopii zapasowej zapisów GBA VC wcześniej, pomiń tą sekcje.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Wykonaj następujący proces dla każdej gry GBA VC dla której chcesz przywrócić zapis:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Przejdź do `[0:] SDCARD` -> `gm9`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Wciśnij (B) aby wrócić do menu głównego
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Naciśnij (A), aby kontynuować
   - Press (Start) to reboot your console
   - Launch the GBA VC game
   - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Utwórz kopię zapasową wszystkich plików na karcie SD do folderu na swoim komputerze. Wszystkie pliki znajdujące się obecnie na karcie SD zostaną usunięte w następnym kroku**

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Przytrzymaj przycisk (R) i jednocześnie naciśnij przycisk (B), aby bezpiecznie wyjąć kartę SD
2. Włóż kartę SD do komputera
3. Skopiuj wszystkie pliki z powrotem na kartę SD
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. Naciśnij przycisk (A), aby ponownie zamontować swoją kartę SD
6. Naciśnij przycisk (Start) aby uruchomić konsolę ponownie

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
