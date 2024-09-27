# Flashing ntrboot (3DS Single System)

## Required Reading

Zanim przejdziesz dalej, upewnij się że przeczytałeś wszystkie informacje o [ntrboot](ntrboot)

Ta metoda wymaga tylko 3DS'a którego chcesz przerobić oraz kompatybilnego z ntrboot flashcarta. Ta metoda używa flashcarta aby uruchomić plik ntrboot flasher `.nds` na twoim 3DSie. Oznacza to, że twój flashcart musi obsługiwać uruchamianie plików `.nds` na twoim 3DSie. Zobacz tabelę flashcart na [ntrboot](ntrboot), aby uzyskać więcej informacji.

::: danger

Zauważ, że w niektórych rzadkich przypadkach proces wgrywania ntrboot na podrobiony flashcart może go **"zbrickować"** i permanentnie uszkodzić. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Włóż kartę SD twojego flashcarta do komputera
3. Utwórz folder o nazwie `ntrboot` w katalogu głównym karty SD
4. Skopiuj `bootstrap_ntr.firm` z boot9strap ntr `.zip` do folderu `/ntrboot/` na karcie SD flashcarta
5. Skopiuj `ntrboot_flasher_nds.nds` na kartę SD Twojego flashcarta
6. Wyjmij kartę SD z komputera i włóż ją do flashcarta
7. Insert your ntrboot compatible DS / DSi flashcart into your console

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
2. Naciśnij (A), aby kontynuować
3. Użyj przycisków (Góra) i (Dół) na D-Padzie aby wybrać model swojego flashcarta
4. Naciśnij (A), aby kontynuować
5. Wybierz "Dump flash" aby wykonać kopię zapasową pamięci flashcarta
6. Wciśnij kombinację przycisków wyświetloną na ekranie aby kontynuować
7. Naciśnij (A), aby kontynuować
8. Użyj przycisków (Góra) i (Dół) na D-Padzie aby wybrać model swojego flashcarta
9. Naciśnij (A), aby kontynuować
10. Wybierz "Inject FIRM" aby zainstalować boot9strap na twoim flashcarcie
11. Wciśnij kombinację przycisków wyświetloną na ekranie aby kontynuować
12. Naciśnij (A), aby kontynuować
13. Power off your console

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
