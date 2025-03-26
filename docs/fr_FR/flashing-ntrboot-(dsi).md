# Flashing ntrboot (DSi)

## Lecture Requise

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot)

This method requires temporary access to a Nintendo DSi that is compatible with your flashcart. This method uses the flashcart to run the ntrboot flasher `.nds` file on your DSi. This means that your flashcart must support launching `.nds` files on your DSi's version. See the flashcart table on [ntrboot](ntrboot) for more information.

::: danger

Notez que dans de rares circonstances, il est possible que le processus de flash sur un linker contrefait le **brique** et le rende inutilisable de manière permanente. C'est peu probable, mais néanmoins, seuls les linkers originaux listés sont pris en charge. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## Ce dont vous avez besoin

- Your ntrboot compatible flashcart
- Two consoles
    - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Power off **the source DSi**
2. Insert your flashcart's SD card into your computer
3. Copy `ds_ntrboot_flasher_dsi.nds` to your flashcart's SD card
4. Reinsert your flashcart's SD card back into your flashcart
5. Insert your ntrboot compatible DS / DSi flashcart into **the source DSi**

### Section II - Flashing ntrboot

1. Launch `ds_ntrboot_flasher_dsi.nds` on **the source DSi** using your flashcart
2. Press (A) to continue
3. Utilisez (Haut) et (Bas) pour sélectionner votre linker
4. Press (A) to continue
5. Press (A) to "inject ntrboothax"
6. Press (A) to select "RETAIL"
7. Press (A) to continue
8. Select "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
