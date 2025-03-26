# Het gebruiken van GodMode9

::: info

Voor informatie over het dumpen van cartridge of SD-kaart inhoud, zie [Titels en Game Cartridges dumpen](dumping-titles-and-game-cartridges).

:::

::: info

Voor ondersteuning (in het Engels) met GodMode9, evenals voor hulp met scripting en het krijgen van updates en info, meld je aan bij [GodMode9 op Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

Godmode9 is een bestandsbeheer die volledige toegang heeft tot de Nintendo 3DS console, het geeft je toegang tot je SD kaart, de FAT partities van je SysNAND en EmuNAND en zo goed als alles anders. Naast andere functies kan je ook bestanden kopiëren, verwijderen en hernoemen en mappen aanmaken.

Merk op dat als je andere payload bestanden dan `GodMode9.firm` in de `/luma/payloads/` map op je SD-kaart hebt, je bij het ingedrukt houden van (Start) bij het opstarten een "chainloader menu" opent die je kan navigeren met de D-Pad en met de (A) knop "GodMode9" kaHin selecteren. Dit geld voor al deze instructies.

GodMode9 is krachtige software die in staat is om zo goed als alles op je console te wijzigen. Hoewel veel van deze aanpassingen zijn vergrendeld achter systeem vergrendelingen, en het is onmogelijk om per ongeluk gevaarlijke acties uitvoeren zonder opzettelijk uitschakeling van machtigingen, moet u nog steeds de instructies zorgvuldig volgen en back-ups houden in elk geval.

## Updating GodMode9

::: info

Sommige van deze instructies zijn alleen toepasbaar op de nieuwste versie van GodMode9 en daarom volg je best dit gedeelte om je versie te updaten. Vervang bestaande bestanden.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Kopieer `GodMode9.firm` van de GodMode9 `.zip` naar de `/luma/payloads/` map op je SD-kaart
4. Kopieer de `gm9` map uit de GodMode9 `.zip` naar de hoofdmap van de SD-kaart
5. Stop je SD-kaart terug in je console

::: tip

GodMode9 is now up to date.

:::

## Creating a NAND Backup

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten

<!--@include: ./_include/nand-backup.md -->

::: tip

Your NAND backup has been successfully created.

:::

## Restoring a NAND Backup

1. Zet je console uit
2. Plaats je SD kaart in je computer
3. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
4. Stop je SD-kaart terug in je console
5. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
6. Druk op de (Home) knop om het actiemenu te openen
7. Selecteer "Scripts..."
8. Selecteer "GM9Megascript"
9. Selecteer "Restore Options"
10. Selecteer "SysNAND Restore (safe)"
11. Selecteer je NAND back-up
12. Druk op (A) om SysNAND (lvl3) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
    - This will **not** overwrite your boot9strap installation
    - This process will take some time
13. Druk op (A) om door te gaan
14. Druk op (B) om terug te gaan naar het hoofdmenu
15. Selecteer "Exit"
16. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt

::: tip

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.

:::

## Injecting any .CIA app into Health & Safety

::: info

Het niet mogelijk is om bestanden groter dan veiligheid- en gezondheidsinformatie te injecteren (zoals spellen en andere grote apps)

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Navigeer naar `[0:] SDCARD`-> `cias`
3. Press (A) on your `.cia` to select it
4. Select "CIA image options..."
5. Select "Mount image to drive"
6. Press (A) on the `.app` file
7. Select "NCCH image options"
8. Select "Inject to H&S"
9. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
10. Druk op (A) om door te gaan
11. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt

::: tip

Your desired application has now been injected into Health & Safety.

:::

## Restoring Health & Safety after injecting a .CIA app

::: info

Dit werkt alleen als veiligheid- en gezondheidsinformatie was geïnjecteerd door GodMode9 (niet Decrypt9 of Hourglass9).

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Druk op de (Home) knop om het actiemenu te openen
3. Selecteer "More..."
4. Selecteer "Restore H&S"
5. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
6. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt

::: tip

Health & Safety has been reverted to normal.

:::

## Format an SD card

::: danger

**Dit zal alle inhoud van je SD kaart verwijderen!**

:::

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
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

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
2. Druk op de (Home) knop om het actiemenu te openen
3. Selecteer "Scripts..."
4. Selecteer "GM9Megascript"
5. Selecteer "Scripts from Plailect's Guide"
6. Selecteer "Remove NNID"
7. Druk op (A) om door te gaan
8. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
9. Druk op (A) om door te gaan
10. Druk op (B) om terug te gaan naar het hoofdmenu
11. Selecteer "Exit"
12. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt
13. Press (Start) to reboot your console

::: tip

You have now been logged out of your NNID.

:::
