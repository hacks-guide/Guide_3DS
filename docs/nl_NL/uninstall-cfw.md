# CFW verwijderen

## Required Reading

This will completely remove CFW from your console, including boot9strap and Luma3DS, for the purpose of restoring the console to stock.

Alle ongetekende (onwettige) spellen zullen onbruikbaar worden en worden verwijderd tijdens dit proces. Use a [save manager](https://github.com/FlagBrew/Checkpoint/releases/latest) to back up any saves that you care about.

::: danger

If you're removing CFW because:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. A better idea would be to ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

:::

::: danger

If you have done ANY of the following:

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. If this applies to you, [restore a clean NAND backup](godmode9-usage#restoring-a-nand-backup) before continuing.

:::

::: warning

These instructions will only work on consoles with a Luma3DS version of 8.0 or higher. Als je een oudere versie van Luma heeft, moet je de setup upgraden voordat je deze instructies kunt volgen. Volg [deze pagina](checking-for-cfw) om je upgrade instructies te vinden.

:::

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)
- [uninstall_cfw.gm9](/gm9_scripts/uninstall_cfw.gm9)

## Instructions

### Section I - Prep Work

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Copy everything from the Luma3DS `.zip` to the root of your SD card
4. Kopieer `GodMode9.firm` van de GodMode9 `.zip` naar de `/luma/payloads/` map op je SD-kaart
5. Kopieer de `gm9` map uit de GodMode9 `.zip` naar de hoofdmap van de SD-kaart
6. Kopieer `DSiWareUninstaller.3dsx` naar de `/3ds/` map op je SD-kaart
7. Copy `safety_test.gm9` and `uninstall_cfw.gm9` to the `/gm9/scripts/` folder on your SD card
8. Stop je SD-kaart terug in je console

### Section II - DS Mode Tests

Het doel van dit deel is om te controleren of ingebouwde DS mode applicaties zullen blijven werken zodra CFW is verwijderd. Als je dit gedeelte overslaat, zou het kunnen dat de DS mode of de bijbehorende functies niet toegankelijk zijn totdat CFW opnieuw wordt geïnstalleerd.

#### DS Connection Settings Test

1. Zet je console aan
2. Launch System Settings on your console
3. Navigeer naar `Internet Settings` -> `Nintendo DS Connection Settings`, selecteer dan "OK
4. Je zou moeten opstarten in het Nintendo DS Connection Setup menu
    - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Zet je console uit

#### DS Download Play Test

1. Zet je console aan
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Selecteer "Nintendo DS"
4. If your console loads into a "Download software via DS Download Play" menu, the test was successful
    - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Zet je console uit

::: warning

Als een van deze tests is mislukt, is de DS mode, DS Download Play, en/of DS Connection Settings mogelijks niet toegankelijk zodra CFW is verwijderd! You should [fix DS mode](troubleshooting-post-install) before continuing.

:::

### Section III - Safety Test

Het doel van dit deel is om te controleren of de console opstart en dat kritieke systeem functies, zoals System Settings en het toetsenbord, zullen werken zodra CFW is verwijderd. **If you skip this section, you may BRICK your console!**

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Als je gevraagd wordt om essentiële bestanden te back-uppen, druk dan op (A) om dit te doen, druk dan op (A) om verder te gaan zodra het voltooid is
3. Als er wordt gevraagd om de RTC datum en tijd goed te zetten, duk op (A) om dat te doen, stel dan de datum en tijd in en druk op (A) om door te gaan
    - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. Druk op de (Home) knop om het actiemenu te openen
5. Selecteer "Scripts..."
6. Selecteer "safety_test"
7. Lees de tekst op het scherm en druk op (A) om verder te gaan
8. Je zou naar het normale 3DS HOME-menu moeten opstarten (elk aangepast thema is niet relevant). Als dat zo is, ga dan verder met deze instructies
    - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. Launch System Settings on your console
    - If the console crashes at this point, the test has failed
10. Selecteer "Other Settings"
11. Selecteer "Profile"
12. Selecteer "User Name"
13. Als je een nieuwe gebruikersnaam kunt invoeren, dan was de test succesvol
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. Zet je console uit

::: danger

Als je NIET opstart in het normale 3DS HOME-menu, of System Setting / je toetsenbord is niet toegankelijk, **ga NIET verder met deze instructies**! Je zou de [Nintendo Homebrew Discord](https://discord.gg/MWxPgEp) moeten joinen en in het Engels vragen of iemand je kan helpen.

:::

### Section IV - NAND Backup

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Druk op de (Home) knop om het actiemenu te openen
3. Selecteer "Scripts..."
4. Selecteer "GM9Megascript"
5. Selecteer "Back-up Options"
6. Selecteer "SysNAND Backup"
7. Druk op (A) om het te bevestigen
    - This process will take some time
    - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. Druk op (B) om terug te gaan naar het hoofdmenu
9. Selecteer "Exit"
10. Druk op de (Home) knop om het actiemenu te openen
11. Select "Poweroff system" to power off your console

### Section V - Removing illegitimate content

::: warning

Dit deel zal onwettige inhoud verwijderen, zoals homebrew en gedumpte cartridges. Als je gegevens hebt waar je om geeft, zoals gamesaves, maak dan een backup met een save manager voordat je doorgaat!

:::

1. Zet je console aan
2. Launch System Settings on your console
3. Navigeer naar Data Management > Nintendo 3DS > Software
4. Verwijder in deze lijst van software elke niet-Nintendo content die je hebt geïnstalleerd tijdens het gebruik van CFW
    - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. Navigeer naar `Data Management` -> `DSiWare`
6. Verwijder in deze lijst van software elke niet-Nintendo content die je hebt geïnstalleerd tijdens het gebruik van CFW
    - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
    - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. Sluit de System Settings app
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Wacht tot je de twee knoppen ziet
10. Druk tegelijkertijd op (L) + (Down) + (Select) om het Rosalina menu te openen
11. Selecteer "Miscellaneous options"
12. Select "Switch the hb. title to the current app."
13. Press (B) to continue
14. Druk op (B) om terug te gaan naar het Rosalina hoofdmenu
15. Druk op (B) om het Rosalina menu af te sluiten
16. Druk op (Home), en sluit dan Download Play af
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Your console should load the Homebrew Launcher
19. Start DSiWare Uninstaller uit de lijst met homebrew
20. Volg de aanwijzingen en laat het programma deïnstalleren
21. Once the process has succeeded, exit the Homebrew Launcher and power off your console

### Section VI - System Format

Deze sectie zorgt ervoor dat alle onwettige tickets worden verwijderd, waardoor de eShop normaal kan werken. Dit zal de volledige inhoud van je 3DS verwijderen en je uitloggen uit je NNID. Hou in gedachten dat de encryptiesleutel van je console verandert worden, dit betekent dat alle oude gegevens als ontoegankelijk zullen worden weergegeven, zelfs als je een back-up van je SD-kaart inhoud hebt.

1. Zet je console aan
2. Launch System Settings on your console
3. Navigeer naar Other Settings -> Next Page (tot de laatste pagina) -> Format System Memory
4. Volg de aanwijzingen om je 3DS te formatteren

### Section VII - Running Uninstall Script

::: warning

Dit is je laatste kans om te controleren of alle bovenstaande veiligheidsstappen zijn gevolgd! Zorg ervoor dat je alle delen van deze pagina hebt gevolgd, **vooral** `Deel III - Safety Test`, voordat je doorgaat.

:::

::: danger

If you're removing CFW because:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. A better idea would be to ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
    - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. Druk op de (Home) knop om het actiemenu te openen
3. Selecteer "Scripts..."
4. Select "uninstall_cfw"
5. Wanneer dit gevraagd wordt, druk op (A) om verder te gaan
6. Press (A) again to proceed
7. Druk op (A) om SysNAND (lvl3) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
8. Druk op (A) om door te gaan
9. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt
10. Press (Start) to reboot your console

___

::: tip

All custom firmware has been removed from your console.

:::

::: info

Je kunt nu alle extra bestanden en mappen verwijderen van de hoofdmap van je SD-kaart die _niet_ de `Nintendo 3DS`, `DCIM` of `private` mappen zijn.

:::
