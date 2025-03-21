# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. Hiervoor hoeft je flashkaart niet de beide 3DS versies ondersteunen.

::: danger

Merk op dat je namaak flashkaarten in zeldzame gevallen kan **bricken** tijdens het flashproces en hem dus onbruikbaar maakt. Dat is onwaarschijnlijk, maar toch worden alleen originele opgesomde flashkaarten ondersteund. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
    - **The source 3DS**: the 3DS family console that is already running boot9strap
    - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. Zet **de source 3DS** af
2. Steek **de source 3DS**'s SD kaart in jouw computer
3. Maak een map genaamd `ntrboot` aan op de hoofdmap van je SD-kaart
4. Kopieer `boot9strap_ntr.firm` en `boot9strap_ntr.firm.sha` van de boot9strap ntr `.zip` naar de `/ntrboot/` map op je SD-kaart
5. Kopieer `ntrboot_flasher.firm`naar de `/luma/payloads/` map op **de source 3DS**'s SD kaart
6. Steek **de source 3DS**'s SD kaart terug in **de source 3DS**
7. Plaats je ntrboot compitabele DS / DSi flashkaart in **de source 3DS**

### Section II - Flashing ntrboot

1. Start de Luma3DS chainloader door (Start) in te houden tijdens het opstarted van **de source 3DS**
2. Selecteer "ntrboot_flasher"
3. Lees de waarshuwing op het rode scherm
4. Druk op (A) om door te gaan
5. Selecteer je flashkaart
    - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Selecteer "Dump Flash"
7. Wacht totdat het proces voltooid is
8. Druk op (A) om door te gaan
9. Druk op (A) om terug te gaan naar het hoofdmenu
10. Selecteer "Inject Ntrboot"
11. Druk op (A) voor normale 3DS ntrboot
12. Wacht totdat het proces voltooid is
13. Druk op (A) om terug te gaan naar het hoofdmenu
14. Druk op (B) om **de source 3DS** af te zetten

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
