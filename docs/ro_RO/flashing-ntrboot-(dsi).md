# Flashing ntrboot (DSi)

## Required Reading

Înainte de a continua, asigurați-vă că ați citit toate informațiile de pe [ntrboot](ntrboot)

Această metodă necesită acces temporar la un Nintendo DSi care este compatibil cu flashcart-ul dumneavoastră. Această metodă folosește flashcart-ul pentru a rula fişierul ntrboot flasher `.nds` pe DSi-ul dumneavoastră. Asta înseamnă că flashcart-ul trebuie să poată porni fişiere `.nds` pe versiunea DSi-ului dumneavoastră. Vedeți tabelul pe [ntrboot](ntrboot) pentru mai multe informații.

::: danger

Țineți cont că în anumite cazuri rare, poate fi posibil ca procesul de instalare să facă **brick** unui flashcard contrafăcut și să devină complet nefolositor. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Închideți **DSi-ul sursă**
2. Introduceți cardul SD al flashcart-ului în calculator
3. Copiați `ds_ntrboot_flasher_dsi.nds`pe cardul SD al flashcart-ului
4. Reintroduceți cardul SD al flashcart-ului în flashcart
5. Introduceți flashcart-ul DS / DSi compatibil cu ntrboot în **DSi-ul sursă**

### Section II - Flashing ntrboot

1. Lansați `ds_ntrboot_flasher_dsi.nds` pe **DSi-ul sursă** folosind flashcart-ul
2. Apăsați (A) pentru a continua
3. Folosiți (Sus) și (Jos) pentru a selecta flashcart-ul dumneavostră
4. Apăsați (A) pentru a continua
5. Apăsași (A) pentru a executa comanda "inject ntrboothax"
6. Apăsați (A) pentru a selecta "RETAIL"
7. Apăsați (A) pentru a continua
8. Selectaţi "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
