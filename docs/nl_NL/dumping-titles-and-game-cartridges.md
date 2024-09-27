# Dumping Titles and Game Cartridges

::: info

Voor ondersteuning (in het Engels) met GodMode9, evenals voor hulp met scripting en het krijgen van updates en info, meld je aan bij [GodMode9 op Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

Naast het creëren en herstellen van NAND backups heeft GodMode9 de functionaliteit om geïnstalleerde titels te dumpen naar installeerbare `.cia` bestanden, om game cartridge data te dumpen naar een `.3ds` ROM-bestand, en om een game cartridge direct te installeren op het systeem.

## Updating GodMode9

::: info

Deze instructies zijn bedoeld voor gebruik met GodMode9 v2.0.0 of hoger. Als je een oudere versie van GodMode9 hebt, volg dan deze instructies om het bij te werken.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Kopieer `GodMode9.firm` van de GodMode9 `.zip` naar de `/luma/payloads/` map op je SD-kaart
4. Kopieer de `gm9` map uit de GodMode9 `.zip` naar de hoofdmap van de SD-kaart
5. Stop je SD-kaart terug in je console

## Dumping a Game Cartridge

::: info

Insert the game cartridge you intend to dump into your console

- 3DS game cartridges will be dumped to a `.3ds` format
- NDS game cartridges will be dumped to a `.nds` format

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Navigeer naar `[C:] GAMECART`
3. Volg de stappen die van toepassing zijn op jouw game cartridge:
   - **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
   - **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
     - Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
4. Selecteer "Copy to 0:/gm9/out"
5. Je niet-installeerbaar `.3ds` of `.nds` geformatteerd bestand zal worden geplaatst in de `/gm9/out/` map op je SD-kaart

## Installing a Game Cartridge Directly to the System

::: info

Dit werkt alleen voor 3DS spellen; het is niet mogelijk om een NDS game cartridge als titel op het systeem te installeren.

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Navigeer naar `[C:] GAMECART`
3. Druk op (A) op `[TitleID].trim.3ds` om het te selecteren, selecteer vervolgens "NCSD image options..." en selecteer dan "Install game image"
4. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
5. Zodra het proces is voltooid, zal het spel verschijnen in het HOME-menu als een geïnstalleerde titel.

## Dumping a 3DS Game Cartridge to .CIA

::: info

Dit zou enkel gebruikt moeten worden als [een Game Cartridge direct installeren op het systeem](#installing-a-game-cartridge-direct-to-the-system) niet werkt.

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Navigeer naar `[C:] GAMECART`
3. Druk op (A) op `[TitleID].trim.3ds` om het te selecteren, selecteer vervolgens "NCSD image options..." en selecteer dan "Build CIA from file"
4. Jouw installeerbaar `.cia` geformatteerd bestand zal in `/gm9/out` geplaatst worden op je SD-kaart

## Dumping an Installed Title

::: info

Dit laat dumping toe van zowel systeem als digitale titels die door de gebruiker zijn geïnstalleerd, zoals titels die zijn gedownload van de eShop.

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Druk op de (Home) knop om het actiemenu te openen
3. Selecteer "Title manager"
4. Selecteer een van de volgende afhankelijk van het type titel dat je wilt dumpen
   - **User Installed Title**: `[A:] SD CARD`
   - **System Title / DSiWare**: `[1:] NAND / TWL`
5. Selecteer de titel die je wilt dumpen
6. Selecteer "Manage Title..."
7. Selecteer "Build CIA (standard)"
8. Jouw installeerbaar `.cia` geformatteerd bestand zal in `/gm9/out` geplaatst worden op je SD-kaart

## Backup GBA VC Saves

::: info

Het spel zal in de `/gm9/out/` folder op je SD-kaart geplaatst worden met de naam `<TitleID>.gbavc.sav`.

:::

::: info

Om een `<TitleID>.gbavc.sav` bestand te identificeren moet je een lijst van geïnstalleerde spellen raadplegen. Dit doe je door (Home) in te drukken om het action menu te tonen, vervolgens selecteer je `Title manager` en dan selecteer je `[A:] SD CARD`.

:::

1. Voer het volgende proces uit voor elk GBA VC spel waarvoor je een back-up wilt maken van de save:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Zet je console uit
   - Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Druk op (A) om door te gaan
   - Press (Start) to reboot your console

## Restore GBA VC Saves

::: info

Om een `<TitleID>.gbavc.sav` bestand te identificeren moet je een lijst van geïnstalleerde spellen raadplegen. Dit doe je door (Home) in te drukken om het action menu te tonen, vervolgens selecteer je `Title manager` en dan selecteer je `[A:] SD CARD`.

:::

1. Doe het volgende proces voor elk GBA VC spel waarvan je een backup van de save wil maken:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Zet je console uit
   - Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
   - Navigeer naar `[0:] SDCARD`-> `gm9` -> `out`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Druk op (B) om terug te gaan naar het hoofdmenu
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Druk op (A) om door te gaan
   - Press (Start) to reboot your console
   - Launch the GBA VC game
   - Exit the GBA VC game

## Encrypting / Decrypting a .CIA file

::: info

Om alles makkelijk terug te vinden in de toekomst, kopieer elk `.cia` bestand dat je wilt coderen / decoderen naar de `/cias/` map op je SD-kaart

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Navigeer naar `[0:] SDCARD`-> `cias`
3. Druk op (A) op het `.cia` bestand om het te selecteren, selecteer dan "CIA image options..."
4. Selecteer de optie om de gewenste functie uit te voeren:
   - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
   - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. Jouw gecodeerde / gedecodeerde `.cia` zal naar de gewenste locatie worden geplaatst
