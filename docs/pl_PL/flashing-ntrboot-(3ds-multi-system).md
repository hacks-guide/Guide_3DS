# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. Dzięki tej metodzie flashcart nie musi obsługiwać wersji systemu żadnego 3DS'a.

::: danger

Zauważ, że w niektórych rzadkich przypadkach proces wgrywania ntrboot na podrobiony flashcart może go **"zbrickować"** i permanentnie uszkodzić. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

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

1. Wyłącz **źródłowego 3DS'a**
2. Włóż kartę SD **źródłowego 3DS'a** do twojego komputera
3. Utwórz folder o nazwie `ntrboot` w katalogu głównym karty SD
4. Skopiuj `boot9strap_ntr.firm` i `boot9strap_ntr.firm.sha` z boot9strap ntr `.zip` do folderu `/ntrboot/` na karcie SD
5. Skopiuj `ntrboot_flasher.firm` z ntrboot_flasher `.zip` do folderu `/luma/payloads` na karcie SD **żródłowego 3DS'a**
6. Włóż kartę SD ponownie do **źródłowego 3DS'a**
7. Włóż kompatybilny z ntrboot flashcart DS / DSi do **źródłowego 3DS'a**

### Section II - Flashing ntrboot

1. Uruchom chainloadera Luma3DS przytrzymując (Start) podczas uruchamiania **źródłowego 3DS'a**
2. Wybierz "ntrboot_flasher"
3. Przeczytaj czerwone ostrzeżenie na ekranie
4. Naciśnij (A), aby kontynuować
5. Wybierz swój flashcart
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Wybierz "Dump Flash"
7. Poczekaj na zakończenie procesu
8. Naciśnij (A), aby kontynuować
9. Naciśnij (A), aby powrócić do menu głównego
10. Wybierz "Inject Ntrboot"
11. Naciśnij (R) aby wgrać ntrboot dla konsumenckiego modelu konsoli
12. Poczekaj na zakończenie procesu
13. Naciśnij (A), aby powrócić do menu głównego
14. Naciśnij (B), aby wyłączyć **źródłowego 3DS'a**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
