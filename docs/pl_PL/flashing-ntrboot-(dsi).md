# Flashing ntrboot (DSi)

## Required Reading

Zanim przejdziesz dalej, upewnij się że przeczytałeś wszystkie informacje o [ntrboot](ntrboot)

Ta metoda wymaga tymczasowego dostępu do konsoli Nintendo DSi kompatybilnej z twoim flashcartem. Ta metoda używa flashcarta aby uruchomić plik ntrboot flasher `.nds` na twoim DSi. Oznacza to, że twój flashcart musi obsługiwać uruchamianie plików `.nds` na twoim DSi. Zobacz tabelę flashcart na [ntrboot](ntrboot), aby uzyskać więcej informacji.

::: danger

Zauważ, że w niektórych rzadkich przypadkach proces wgrywania ntrboot na podrobiony flashcart może go **"zbrickować"** i permanentnie uszkodzić. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Wyłącz **źródłowego DSi**
2. Włóż kartę SD twojego flashcarta do komputera
3. Umieść plik `ds_ntrboot_flasher_dsi.nds` na karcie SD twojego flashcarta
4. Wyjmij kartę SD z komputera i włóż ją do flashcarta
5. Włóż flashcarta do **DSi**

### Section II - Flashing ntrboot

1. Uruchom plik `ds_ntrboot_flasher_dsi.nds` na twoim DSi używając flashcarta (tak samo jakbyś uruchamiał grę w formacie `.nds`)
2. Naciśnij (A), aby kontynuować
3. Użyj przycisków (Góra) i (Dół) na D-Padzie aby wybrać model swojego flashcarta
4. Naciśnij (A), aby kontynuować
5. Wciśnij (A) aby wybrać "inject ntrboothax"
6. Wciśnij (A) aby wybrać "RETAIL"
7. Naciśnij (A), aby kontynuować
8. Wybierz "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
