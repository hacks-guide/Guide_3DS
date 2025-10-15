# Flashing ntrboot (NDS)

## Required Reading

Bevor du fortfährt stelle sicher, dass du alle Informationen zu [ntrboot](ntrboot) gelesen hast

Diese Methode erfordert temporären Zugriff auf einen Nintendo DS oder Nintendo DS Lite, welcher mit deiner Flashcart kompatibel ist. Diese Methode verwendet eine Flashcart zum Ausführen der Ntrboot Flasher ".nds" Datei auf deinem NDS.

::: danger

In manchen seltenen Fällen ist es möglich, dass während des Flashens einer gefälschten Flashkarte diese **gebrickt** wird und somit permanent unbenutzbar wird. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source NDS / NDSL**: the Nintendo DS or Nintendo DS Lite which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Schalte den **Quell-NDS / NDSL** aus
2. Stecke die SD-Karte deiner Flashcart in deinen Computer
3. Create a folder named `ntrboot` on the root of your flashcart's SD card
4. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
5. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
6. Steck deine SD-Karte in deine Flashkarte zurück
7. Lege deine ntrboot-kompatible DS / DSi Flashkarte in den **Quell-NDS / -NDSL**

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on **the source NDS / NDSL** using your flashcart
2. Drücke (A), um fortzufahren
3. Benutze (Hoch) und (Runter) um deine Flashcart auszuwählen
4. Drücke (A), um fortzufahren
5. Select "Dump flash" to make a backup of your flashcart's memory
6. Input the key combo given to confirm
7. Drücke (A), um fortzufahren
8. Benutze (Hoch) und (Runter) um deine Flashcart auszuwählen
9. Drücke (A), um fortzufahren
10. Select "Inject FIRM" to install boot9strap to your flashcart
11. Input the key combo given to confirm
12. Drücke (A), um fortzufahren
13. Schalte den **Quell-NDS / NDSL** aus
14. Entferne deine Flashkarte aus **dem Quell-NDS / NDSL**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
