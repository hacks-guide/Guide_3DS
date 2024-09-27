# Move EmuNAND

## Required Reading

Aceasta este o secțiune suplimentară pentru a muta conținutul unui EmuNAND precedent către noul CFW SysNAND, după care se va elimina partiția veche EmuNAND. Țineți cont că termenii EmuNAND și RedNAND se referă la implementări puțin diferite ale [aceluiași concept](http://3dbrew.org/wiki/NAND_Redirection).

Țineți cont că dacă aveți alte payload-uri în afară de `GodMode9.firm` în folderul '/luma/payloads/' de pe cardul SD, apăsând (Start) va lansa un "meniu chainloader" în care va trebui să folosiți D-Pad-ul și butonul (A) ca să selectați "GodMode9" pentru aceste instrucțiuni.

::: danger

TREBUIE să aveți deja instalat Luma3DS şi boot9strap pentru a-l folosi.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Introduceți cardul SD în calculator
3. Copiați `GodMode9.firm` de pe fișierul `.zip` GodMode9 către folderul `/luma/payloads/` de pe cardul SD
4. Copiați folderul `gm9` din fișierul `.zip` GodMode9 în rădăcina cardului SD
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

Dacă nu aveți niciun joc DSiWare sau date de salvare de care vă interesează, săriți peste această secțiune.

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. Dacă vi se cere să reparați dara și ora RTC, apăsați (A) pentru a efectua, apoi setați data și ora, apoi apăsați (A) pentru a continua
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Navigați spre `[2:] SYSNAND TWLN` -> `title`
5. Țineți apăsat (R) și apăsați (A) în același timp pe `00030004` pentru a selecta folderul, apoi selectați "Copy to 0:/gm9/out"
   - This process may take some time if you have many DSiWare games
6. Apăsați (B) de două ori ca să vă întoarceți la meniul principal

### Section III - Backup GBA VC Saves

::: info

Dacă nu aveți niciun joc VC GBA sau date de salvare de care vă interesează, săriți peste această secțiune.

:::

::: info

Țineți cont că acest lucru nu este necesar pentru orice alt fel de joc Virtual Console (GBC, NES, etc)

:::

::: info

Jocul va fi depozitat în folderul `/gm9/out/` de pe cardul SD cu numele `<TitleID>.gbavc.sav`.

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
   - Apăsați (A) pentru a continua
   - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. Navigați spre `[E:] EMUNAND VIRTUAL`
3. Apăsați (A) pe `nand.bin` pentru a-l selecta, apoi selectați "NAND image options...", apoi selectați "Restore SysNAND (safe)"
4. Apăsați (A) pentru a debloca rescrierea în SysNAND, apoi introduceți combinația de butoane care vi se cere
   - This will not overwrite your boot9strap installation
5. Introduceți combinația de butoane care vi se cere pentru a debloca scrierea în SysNAND (lvl1)
   - This process will take some time
6. Once it is completed, press (A) to continue
7. Apăsați (B) ca să refuzați reblocarea permisiunilor de scriere dacă vi se cere
8. Apăsați (B) ca să vă întoarceți în meniul principal

### Section V - Restore DSiWare Saves

::: info

Dacă nu ați făcut o copie de rezervă la datele de salvare DSiWare, săriți peste această secțiune.

:::

1. Navigați spre `[0:] SDCARD` -> `gm9` -> `out`
2. Apăsați (Y) pe folderul `00030004` pentru a-l copia
3. Apăsați (B) de două ori ca să vă întoarceți la meniul principal
4. Navigați spre `[2:] SYSNAND TWLN` -> `title`
5. Apăsați (Y) ca să lipiți folderul `00030004`
6. Selectați "Copy path(s)"
7. Apăsați (A) ca să deblocați scrierea în SysNAND (lvl1), apoi introduceți combinația de butoane care vi se cere
8. Selectați "Overwrite file(s)"
   - This process may take some time if you have many DSiWare games
9. Apăsați (B) ca să refuzați reblocarea permisiunilor de scriere dacă vi se cere
10. Apăsați (B) de două ori ca să vă întoarceți la meniul principal

### Section VI - Restore GBA VC Saves

::: info

Dacă nu ați făcut o copie de rezervă la datele de salvare VC GBA, săriți peste această secțiune.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Faceți următoarea procedură pentru fiecare joc VC GBA la care vreți să restaurați datele de salvare:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navigați spre `[0:] SDCARD` -> `gm9`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Apăsați (B) ca să vă întoarceți în meniul principal
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Apăsați (A) pentru a continua
   - Press (Start) to reboot your console
   - Launch the GBA VC game
   - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Faceți copii de rezervă la fiecare fișier de pe cardul SD într-un folder din calculator; toate fișierele vor fi șterse în pașii următori**

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Țineți apăsat (R) și apăsați (B) în același timp pentru a scoate cardul SD
2. Introduceți cardul SD în calculator
3. Copiați toate fișierele înapoi pe cardul SD
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. Apăsați (A) pentru a remonta cardul SD
6. Apăsați (Start) pentru a reporni

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
