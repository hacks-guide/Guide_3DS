# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. Aceasta nu are nevoie de flashcart pentru a susține oricare dintre 3DS-uri.

::: danger

Țineți cont că în anumite cazuri rare, poate fi posibil ca procesul de instalare să facă **brick** unui flashcard contrafăcut și să devină complet nefolositor. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

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

1. Închideți **3DS-ul sursă**
2. Introduceți cardul SD **al 3DS-ului sursă** în calculator
3. Creați un folder numit `ntrboot` pe rădăcina cardului SD
4. Copiați `boot9strap_ntr.firm` și `boot9strap_ntr.firm.sha` din arhiva `.zip` boot9strap ntr în folderul `/ntrboot/` de pe cardul SD
5. Copiați `ntrboot_flasher.firm` în folderul `/luma/payloads/` de pe cardul SD al **3DS-ului sursă**
6. Reintroduceți cardul SD al **3DS-ului sursă** înapoi în **3DS-ul sursă**
7. Introduceți flashcart-ul DS/DSi compatibil cu ntrboot în **3DS-ul sursă**

### Section II - Flashing ntrboot

1. Lansați meniul de selectare de payload-uri Luma3DS ținând apăsat (Start) în timpul pornirii pe **3DS-ul sursă**
2. Selectaţi "ntrboot_flasher"
3. Citiţi ecranul de avertisment de culoare roșie
4. Apăsați (A) pentru a continua
5. Selectaţi flashcart-ul
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Selectaţi "Dump Flash"
7. Așteptați până când procesul este terminat
8. Apăsați (A) pentru a continua
9. Apăsați (A) ca să vă întoarceți în meniul principal
10. Selectați "Inject Ntrboot"
11. Apăsați (A) pentru a selecta retail unit ntrboot
12. Așteptați până când procesul este terminat
13. Apăsați (A) ca să vă întoarceți în meniul principal
14. Apăsați (B) pentru a închide **3DS-ul sursă**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
