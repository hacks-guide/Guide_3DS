# Flashing ntrboot (DSi)

## Required Reading

Voordat je doorgaat, zorg dat je alle informatie hebt gelezen op [ntrboot](ntrboot)

Voor deze methode heb je tijdelijk toegang nodig tot een Nintendo DSi die werkt met jouw flashkaart. Deze methode gebruikt de flashkaart om het ntrboot flasher `.nds` bestand te gebruiken op uw DSi. Dat betekend dat uw flashkaart `.nds` bestanden moet kunnen starten op uw DSi's versie. Bekijk de flashkaart afbeelding bij [ntrboot](ntrboot) voor meer info.

::: danger

Merk op dat je namaak flashkaarten in zeldzame gevallen kan **bricken** tijdens het flashproces en hem dus onbruikbaar maakt. Dat is onwaarschijnlijk, maar toch worden alleen originele opgesomde flashkaarten ondersteund. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
    - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Zet **de source DSi** af
2. Plaats de SD van de flashkaart in je computer
3. Kopier `ds_ntrboot_flasher_dsi.nds` naar de flashkaarts SD kaart
4. Plaats de SD kaart terug in je flashkaart
5. Plaats je ntrboot compitabele DS / DSi flashkaart in **de source DSi**

### Section II - Flashing ntrboot

1. Start `ds_ntrboot_flasher_dsi.nds` op **de source DSi** door de flashkaart
2. Druk op (A) om door te gaan
3. Gebruik (Omhoog) en (Omlaag) om je flashkaart te selecteren
4. Druk op (A) om door te gaan
5. Druk op (A) om "inject ntrboothax" te selecteren
6. Druk op (A) om "RETAIL" te selecteren
7. Druk op (A) om door te gaan
8. Selecteer "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
