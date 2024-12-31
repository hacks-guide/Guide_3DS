# Membuat Dump Permainan dan Kartrid

::: info

Untuk bantuan berbahasa Inggris terkait GodMode9 dan tentang membuat naskah, pembaruan, dan info; gabung ke [Discord GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Bacaan Penting

Selain membuat dan memulihkan cadangan NAND; GodMode9 juga bisa membuat _dump_ dari aplikasi terpasang menjadi `.cia`, membuat _dump_ kartrid menjadi ROM `.3ds`, dan langsung memasang data kartrid ke konsol.

## Memperbarui GodMode9

::: info

Instruksi ini ditulis untuk digunakan di GodMode9 v2.0.0 ke atas. Jika punya GodMode9 versi lawas, ikuti instruksi memperbarui di bawah.

:::

### Apa yang Perlu

- Versi terkini dari [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (yang `.zip` GodMode9)

### Instruksi

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Salin `GodMode9.firm` dari `.zip` GodMode9 ke folder `/luma/payloads/` di kartu SD
4. Salin folder `gm9` dari `.zip` GodMode9 ke akar kartu SD
5. Sisip kembali kartu SD ke konsol

## Membuat Dump Kartrid

::: info

Sisipkan kartrid yang ingin di-_dump_ ke konsol

- Kartrid 3DS akan di-_dump_ ke format `.3ds`
- Kartrid NDS akan di-_dump_ ke format `.nds`

:::

1. Tekan dan tahan terus (Start) saat menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[C:] GAMECART`
3. Ikuti langkah berikut sesuai jenis kartrid:
   - **Kartrid 3DS:** Tekan (A) pada `[TitleID].trim.3ds` untuk pilih
   - **Kartrid NDS:** Tekan (A) pada `[TitleID].nds` untuk pilih
     - _Dump_ terpangkas umumnya tidak dianjurkan untuk permainan NDS, karena banyak isu saat dijalankan
4. Pilih "Copy to 0:/gm9/out"
5. Keluaran berformat `.3ds` atau `.nds` yang tak bisa dipasang akan ada di folder `/gm9/out/` di kartu SD

## Memasang Data Kartrid Langsung ke Konsol

::: info

Ini hanya berfungsi untuk permainan 3DS; kartrid NDS tidak bisa langsung dipasang ke sistem konsol.

:::

1. Tekan dan tahan terus (Start) saat menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[C:] GAMECART`
3. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Install game image"
4. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
5. Once the process is complete, your game will show up in the HOME Menu as an installed title.

## Dumping a 3DS Game Cartridge to .CIA

::: info

This should only be used if [Installing a Game Cartridge Directly to the System](#installing-a-game-cartridge-directly-to-the-system) does not work.

:::

1. Tekan dan tahan terus (Start) saat menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigasi ke `[C:] GAMECART`
3. Press (A) on `[TitleID].trim.3ds` to select it, then select "NCSD image options...", then select "Build CIA from file"
4. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Dumping an Installed Title

::: info

This allows dumping of both System- and User-installed digital titles, such as ones downloaded from the eShop.

:::

1. Tekan dan tahan terus (Start) saat menyalakan konsol. Ini akan masuk ke GodMode9
2. Press (Home) to bring up the action menu
3. Select "Title manager"
4. Select one of the following depending on the type of title you wish to dump
   - **User Installed Title**: `[A:] SD CARD`
   - **System Title / DSiWare**: `[1:] NAND / TWL`
5. Select the title you wish to dump
6. Select "Manage Title..."
7. Select "Build CIA (standard)"
8. Your installable `.cia` formatted file will be outputted to the `/gm9/out/` folder on your SD card

## Backup GBA VC Saves

::: info

The game will be outputted to the `/gm9/out/` folder on your SD card with the name `<TitleID>.gbavc.sav`.

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Matikan daya konsol
   - Tekan dan tahan terus (Start) saat menyalakan konsol. Ini akan masuk ke GodMode9
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Press (A) to continue
   - Press (Start) to reboot your console

## Restore GBA VC Saves

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to restore the save for:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Matikan daya konsol
   - Tekan dan tahan terus (Start) saat menyalakan konsol. Ini akan masuk ke GodMode9
   - Navigate to `[0:] SDCARD` -> `gm9` -> `out`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Press (B) to return to the main menu
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Press (A) to continue
   - Press (Start) to reboot your console
   - Launch the GBA VC game
   - Exit the GBA VC game

## Encrypting / Decrypting a .CIA file

::: info

For organizational purposes, copy each `.cia` file you wish to encrypt / decrypt to the `/cias/` folder on your SD card

:::

1. Tekan dan tahan terus (Start) saat menyalakan konsol. Ini akan masuk ke GodMode9
2. Navigate to `[0:] SDCARD` -> `cias`
3. Press (A) on the `.cia` file to select it, then select "CIA image options..."
4. Select the option to perform the desired function:
   - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
   - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. Your encrypted / decrypted `.cia` will be outputted to the desired location
