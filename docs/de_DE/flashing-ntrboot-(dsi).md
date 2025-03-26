# Flashing ntrboot (DSi)

## Required Reading

Bevor du fortfährt stelle sicher, dass du alle Informationen zu [ntrboot](ntrboot) gelesen hast

Diese Methode erfordert temporären Zugriff auf einen Nintendo DSi, welcher mit deiner Flashcart kompatibel ist. Diese Methode verwendet eine Flashkarte zum Ausführen der Ntrboot Flasher ".nds" Datei auf deinem DSi. This means that your flashcart must support launching `.nds` files on your DSi's version. Schaue in der Flashcart Tabelle auf [ntrboot](ntrboot) für weitere Informationen.

::: danger

In manchen seltenen Fällen ist es möglich, dass während des Flashens einer gefälschten Flashkarte diese **gebrickt** wird und somit permanent unbenutzbar wird. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
    - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Schalte den **Quell-DSi** aus
2. Stecke die SD-Karte deiner Flashcart in deinen Computer
3. Kopiere `ds_ntrboot_flasher_dsi.nds` auf die SD-Karte deiner Flashkarte
4. Steck deine SD-Karte in deine Flashkarte zurück
5. Stecke die ntrboot-kompatible DS / DSi Flashkarte in **den Quell-DSi**

### Section II - Flashing ntrboot

1. Starte die 'ds_ntrboot_flasher_dsi.nds' auf dem **Quell-DSi** mit der Flashcart
2. Drücke (A), um fortzufahren
3. Benutze (Hoch) und (Runter) um deine Flashcart auszuwählen
4. Drücke (A), um fortzufahren
5. Drücke (A), um "inject ntrboothax" zu starten
6. Drücke (A) um "RETAIL" auszuwählen
7. Drücke (A), um fortzufahren
8. Wähle "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
