# Flashing ntrboot (DSi)

## Lectura requerida

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot)

This method requires temporary access to a Nintendo DSi that is compatible with your flashcart. This method uses the flashcart to run the ntrboot flasher `.nds` file on your DSi. This means that your flashcart must support launching `.nds` files on your DSi's version. See the flashcart table on [ntrboot](ntrboot) for more information.

::: danger

Note that in some rare circumstances, it may be possible for the flashing process to **brick** a counterfeit flashcart and render it permanently unusable. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## Lo que necesitas

- Your ntrboot compatible flashcart
- Two consoles
    - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instrucciones

### Sección I - Preparativos

1. Power off **the source DSi**
2. Insert your flashcart's SD card into your computer
3. Copy `ds_ntrboot_flasher_dsi.nds` to your flashcart's SD card
4. Reinsert your flashcart's SD card back into your flashcart
5. Insert your ntrboot compatible DS / DSi flashcart into **the source DSi**

### Section II - Flashing ntrboot

1. Launch `ds_ntrboot_flasher_dsi.nds` on **the source DSi** using your flashcart
2. Presiona (A) para continuar
3. Use (Up) and (Down) to select your flashcart
4. Presiona (A) para continuar
5. Press (A) to "inject ntrboothax"
6. Press (A) to select "RETAIL"
7. Presiona (A) para continuar
8. Select "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
