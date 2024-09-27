# Flashing ntrboot (3DS Single System)

## Required Reading

Înainte de a continua, asigurați-vă că ați citit toate informațiile de pe [ntrboot](ntrboot)

Această metodă necesită nimic mai mult decât un 3DS stoc nemodat şi un flashcart compatibil. Această metodă folosește flashcart-ul pentru a rula fişierul ntrboot flasher `.nds` pe 3DS-ul dumneavoastră. Asta înseamnă că flashcart-ul trebuie să poată porni fişiere `.nds` pe versiunea 3DS-ului dumneavoastră. Vedeți tabelul pe [ntrboot](ntrboot) pentru mai multe informații.

::: danger

Țineți cont că în anumite cazuri rare, poate fi posibil ca procesul de instalare să facă **brick** unui flashcard contrafăcut și să devină complet nefolositor. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Introduceți cardul SD al flashcart-ului în calculator
3. Creați un folder numit `ntrboot` pe rădăcina cardului SD al flashcart-ului
4. Copiați `boot9strap_ntr.firm` din arhiva `.zip` boot9strap ntr în folderul `/ntrboot/` de pe cardul SD al flashcart-ului
5. Copiați `ntrboot_flasher_nds.nds`pe cardul SD al flashcart-ului
6. Reintroduceți cardul SD al flashcart-ului în flashcart
7. Insert your ntrboot compatible DS / DSi flashcart into your console

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
2. Apăsați (A) pentru a continua
3. Folosiți (Sus) și (Jos) pentru a selecta flashcart-ul dumneavostră
4. Apăsați (A) pentru a continua
5. Selectați "Dump flash" pentru a face o copie de rezervă a memoriei flashcart-ului
6. Introduceți combinația de butoane cerută pentru a confirma
7. Apăsați (A) pentru a continua
8. Folosiți (Sus) și (Jos) pentru a selecta flashcart-ul dumneavostră
9. Apăsați (A) pentru a continua
10. Selectați "Inject FIRM" pentru a instala boot9strap pe flashcart
11. Introduceți combinația de butoane cerută pentru a confirma
12. Apăsați (A) pentru a continua
13. Power off your console

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
