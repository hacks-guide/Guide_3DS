# Flashing ntrboot (3DS Single System)

## Required Reading

Voordat je doorgaat, zorg dat je alle informatie hebt gelezen op [ntrboot](ntrboot)

Deze methode vereist niets meer dan je stock, unhacked 3DS en een compatibele flashkaart. Deze methode gebruikt de flashcart voor het uitvoeren van het ntrboot flasher '.nds' bestand op uw 3DS. Dit betekent dat uw flashcart `.nds` bestanden moet kunnen starten op jouw 3DS's versie. Bekijk de flashkaart afbeelding bij [ntrboot](ntrboot) voor meer info.

::: danger

Merk op dat je namaak flashkaarten in zeldzame gevallen kan **bricken** tijdens het flashproces en hem dus onbruikbaar maakt. Dat is onwaarschijnlijk, maar toch worden alleen originele opgesomde flashkaarten ondersteund. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Zet je console uit
2. Plaats de SD van de flashkaart in je computer
3. Maak een map genaamd `ntrboot`op de root van je SD kaart
4. Kopieer `boot9strap_ntr.firm` van de boot9strap ntr `.zip` naar de `/ntrboot/` map op je flashkaart zijn SD kaart
5. Kopieer `ntrboot_flasher_nds.nds` naar de root van je flashkaart zijn SD kaart
6. Plaats de SD kaart terug in je flashkaart
7. Insert your ntrboot compatible DS / DSi flashcart into your console

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
2. Druk op (A) om door te gaan
3. Gebruik (Omhoog) en (Omlaag) om je flashkaart te selecteren
4. Druk op (A) om door te gaan
5. Selecteer "Dump flash" om een backup te maken van het flashkaart zijn geheugen
6. Voer de gegeven combinatie van toetsen in om te bevestigen
7. Druk op (A) om door te gaan
8. Gebruik (Omhoog) en (Omlaag) om je flashkaart te selecteren
9. Druk op (A) om door te gaan
10. Selecteer "Inject FIRM" om boot9strap op je flashkaart te installeren
11. Voer de gegeven combinatie van toetsen in om te bevestigen
12. Druk op (A) om door te gaan
13. Zet je console uit

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
