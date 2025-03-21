# Move EmuNAND

## Required Reading

Dit is de add-on-sectie voor het verplaatsen van een oude EmuNAND naar je nieuwe SysNAND CFW, en daarna het verwijderen van het oude EmuNAND gedeelte. Merk op dat de termen EmuNAND en RedNAND naar iets andere implementaties van [hetzelfde concept verwijzen](http://3dbrew.org/wiki/NAND_Redirection).

Merk op dat als je andere payload bestanden dan `GodMode9.firm` in de `/luma/payloads/` map op je SD-kaart hebt, je bij het ingedrukt houden van (Start) bij het opstarten een "chainloader menu" opent die je kan navigeren met de D-Pad en met de (A) knop "GodMode9" kaHin selecteren. Dit geld voor al deze instructies.

::: danger

Je MOET Luma3ds en boot9strap al geïnstalleerd hebben om dit te kunnen gebruiken.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Kopieer `GodMode9.firm` van de GodMode9 `.zip` naar de `/luma/payloads/` map op je SD-kaart
4. Kopieer de `gm9` map uit de GodMode9 `.zip` naar de hoofdmap van de SD-kaart
5. Stop je SD-kaart terug in je console

### Section II - Backup SysNAND DSiWare Saves

::: info

Als je geen DSiWare spellen of saves hebt die je wilt behouden, kan je dit deel overslaan.

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Als je gevraagd wordt om essentiële bestanden te back-uppen, druk dan op (A) om dit te doen, druk vervolgens op (A) om verder te gaan zodra het voltooid is
3. Als er wordt gevraagd om de RTC datum en tijd goed te zetten, duk op (A) om dat te doen, stel dan de datum en tijd in en druk op (A) om door te gaan
    - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Navigeer naar `[2:] SYSNAND TWLN` -> `title`
5. Houd (R) ingedrukt en druk op (A) op hetzelfde moment op `00030004` om deze map te selecteren, selecteer dan "Copy to 0:/gm9/out"
    - This process may take some time if you have many DSiWare games
6. Druk twee keer op (B) om terug te gaan naar het hoofdmenu

### Section III - Backup GBA VC Saves

::: info

Als je geen GBA VC spellen of saves hebt die je wat uit maken, kan je dit deel overslaan.

:::

::: info

Dit is niet nodig voor elke andere soort van Virtual Console spellen (GBC, NES, etc)

:::

::: info

Het spel zal in de `/gm9/out/` folder op je SD-kaart geplaatst worden met de naam `<TitleID>.gbavc.sav`.

:::

::: info

Om een `<TitleID>.gbavc.sav` bestand te identificeren moet je een lijst van geïnstalleerde spellen raadplegen. Dit doe je door (Home) in te drukken om het action menu te tonen, vervolgens selecteer je `Title manager` en dan selecteer je `[A:] SD CARD`.

:::

1. Voer het volgende proces uit voor elk GBA VC spel waarvoor je een back-up wilt maken van de save:
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - Navigate to `[S:] SYSNAND VIRTUAL`
    - Press (A) on `agbsave.bin` to select it
    - Select "AGBSAVE options..."
    - Select "Dump GBA VC save"
    - Druk op (A) om door te gaan
    - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Navigeer naar `[E:] EMUNAND VIRTUAL`
3. Druk op (A) op `nand.bin` om het te selecteren, selecteer vervolgens "NAND image options...", en selecteer dan "Restore SysNAND (safe)"
4. Druk op (A) om SysNAND overwriting te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
    - This will not overwrite your boot9strap installation
5. Voer de gegeven combinatie van knoppen in om SysNAND (lvl1) writing in te schakelen
    - This process will take some time
6. Als het klaar is, druk op (A) om door te gaan
7. Druk op (B) om het opnieuw vergrendelen van schrijfrechten te weigeren als dit gevraagd wordt
8. Druk op (B) om terug te gaan naar het hoofdmenu

### Section V - Restore DSiWare Saves

::: info

Als je geen backup DSiWare Saves hebt gemaakt, kan je dit overslaan.

:::

1. Navigeer naar `[0:] SDCARD`-> `gm9` -> `out`
2. Druk op (Y) op de `00030004` map om deze te kopiëren
3. Druk twee keer op (B) om terug te gaan naar het hoofdmenu
4. Navigeer naar `[2:] SYSNAND TWLN` -> `title`
5. Druk op (Y) om de `00030004` map te plakken
6. Selecteer "Copy path(s)"
7. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
8. Selecteer "Overwrite file(s)"
    - This process may take some time if you have many DSiWare games
9. Druk op (B) om het opnieuw vergrendelen van schrijfrechten te weigeren als dit gevraagd wordt
10. Druk twee keer op (B) om terug te gaan naar het hoofdmenu

### Section VI - Restore GBA VC Saves

::: info

Als je geen backup GBA VC Saves hebt gemaakt, kan je dit overslaan.

:::

::: info

Om een `<TitleID>.gbavc.sav` bestand te identificeren moet je een lijst van geïnstalleerde spellen raadplegen. Dit doe je door (Home) in te drukken om het action menu te tonen, vervolgens selecteer je `Title manager` en dan selecteer je `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. Doe het volgende proces voor elk GBA VC spel waarvan je een backup van de save wil maken:
    - Launch the GBA VC game
    - Exit the GBA VC game
    - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
    - Launch GodMode9 by pressing (A)
    - Navigeer naar `[0:] SDCARD`-> `gm9`
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

### Section VII - Backup SysNAND

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten

<!--@include: ./_include/nand-backup.md -->

1. **Maak een backup van elk bestand op je SD kaart naar een map op je computer; alle bestanden zullen verwijderd worden in de volgende stappen**

### Section VIII - Format SD card

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten

<!--@include: ./_include/format-sd-gm9.md -->

1. Houd (R) en (B) gelijkertijd ingedrukt om je SD kaart uit te werpen
2. Plaats je SD kaart in je computer
3. Kopieer alle bestanden terug naar je SD kaart
    - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Stop je SD-kaart terug in je console
5. Druk (A) om je SD kaart te remounten
6. Druk op (Start) om te herstarten

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
