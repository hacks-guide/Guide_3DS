---
title: "GodMode9 gebruiken"
---

{% include toc title="Inhoudsopgave" %}

Voor informatie over het dumpen van cartridge of SD-kaart inhoud, zie [Titels en Game Cartridges dumpen](dumping-titles-and-game-cartridges).
{: .notice--info}

Voor ondersteuning (in het Engels) met GodMode9, evenals voor hulp met scripting en het krijgen van updates en info, meld je aan bij [GodMode9 op Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Verplicht te lezen

Godmode9 is een bestandsbeheer die volledige toegang heeft tot de Nintendo 3DS console, het geeft je toegang tot je SD kaart, de FAT partities van je SysNAND en EmuNAND en zo goed als alles anders. Naast andere functies kan je ook bestanden kopiëren, verwijderen en hernoemen en mappen aanmaken.

Merk op dat als je andere payload bestanden dan `GodMode9.firm` in de `/luma/payloads/` map op je SD-kaart hebt, je bij het ingedrukt houden van (Start) bij het opstarten een "chainloader menu" opent die je kan navigeren met de D-Pad en met de (A) knop "GodMode9" kaHin selecteren. Dit geld voor al deze instructies.

GodMode9 is krachtige software die in staat is om zo goed als alles op je console te wijzigen. Hoewel veel van deze aanpassingen zijn vergrendeld achter systeem vergrendelingen, en het is onmogelijk om per ongeluk gevaarlijke acties uitvoeren zonder opzettelijk uitschakeling van machtigingen, moet u nog steeds de instructies zorgvuldig volgen en back-ups houden in elk geval.

## GodMode9 updaten

Sommige van deze instructies zijn alleen toepasbaar op de nieuwste versie van GodMode9 en daarom volg je best dit gedeelte om je versie te updaten. Vervang bestaande bestanden.
{: .notice--info}

### Wat je nodig hebt

* De nieuwste versie van [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (het GodMode9 `.zip` bestand)

### Instructies

1. Zet je console uit
1. Plaats je SD kaart in je computer
1. Kopieer `GodMode9.firm` van de GodMode9 `.zip` naar de `/luma/payloads/` map op je SD-kaart
1. Kopieer de `gm9` map uit de GodMode9 `.zip` naar de hoofdmap van je SD-kaart
1. Stop je SD-kaart terug in je console

GodMode9 is now up to date.
{: .notice--success}

## Een NAND back-up maken

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
{% include_relative include/nand-backup.txt %}

Your NAND backup has been successfully created.
{: .notice--success}

## Een NAND back-up herstellen

1. Zet je console uit
1. Plaats je SD kaart in je computer
1. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
1. Stop je SD-kaart terug in je console
1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Druk op de (Home) knop om het actiemenu te openen
1. Selecteer "Scripts..."
1. Selecteer "GM9Megascript"
1. Selecteer "Restore Options"
1. Selecteer "SysNAND Restore (safe)"
1. Selecteer je NAND back-up
1. Druk op (A) om SysNAND (lvl3) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
    + This will **not** overwrite your boot9strap installation
    + Dit proces zal enige tijd duren
1. Druk op (A) om door te gaan
1. Druk op (B) om terug te gaan naar het hoofdmenu
1. Selecteer "Exit"
1. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.
{: .notice--success}

## Een .CIA app in veiligheid- en gezondheidsinformatie injecteren

Het niet mogelijk is om bestanden groter dan veiligheid- en gezondheidsinformatie te injecteren (zoals spellen en andere grote apps)
{: .notice--info}

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Navigeer naar `[0:] SDCARD`-> `cias`
1. Press (A) on your `.cia` to select it
1. Select "CIA image options..."
1. Select "Mount image to drive"
1. Press (A) on the `.app` file
1. Select "NCCH image options"
1. Select "Inject to H&S"
1. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
1. Druk op (A) om door te gaan
1. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt

Your desired application has now been injected into Health & Safety.
{: .notice--success}

## Veiligheid- en gezondheidsinformatie herstellen na een injectie van een .CIA app

Dit werkt alleen als veiligheid- en gezondheidsinformatie was geïnjecteerd door GodMode9 (niet Decrypt9 of Hourglass9).
{: .notice--info}

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Druk op de (Home) knop om het actiemenu te openen
1. Selecteer "More..."
1. Selecteer "Restore H&S"
1. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
1. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt

Health & Safety has been reverted to normal.
{: .notice--success}

## Een SD-kaart formatteren

**Dit zal alle inhoud van je SD kaart verwijderen!**
{: .notice--danger}

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
    + If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed
{% include_relative include/format-sd-gm9.txt %}

Your SD card has successfully been formatted for use with the console.
{: .notice--success}

## Removing an NNID without formatting your console

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.
{: .notice--info}

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Druk op de (Home) knop om het actiemenu te openen
1. Selecteer "Scripts..."
1. Selecteer "GM9Megascript"
1. Selecteer "Scripts from Plailect's Guide"
1. Selecteer "Remove NNID"
1. Druk op (A) om door te gaan
1. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
1. Druk op (A) om door te gaan
1. Druk op (B) om terug te gaan naar het hoofdmenu
1. Selecteer "Exit"
1. Druk op (A) om schrijfrechten te vergrendelen als dit gevraagd wordt
1. Press (Start) to reboot your console

You have now been logged out of your NNID.
{: .notice--success}
