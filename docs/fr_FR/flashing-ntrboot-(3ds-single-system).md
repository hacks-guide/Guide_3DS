# Flashing ntrboot (3DS Single System)

## Lecture Requise

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot)

This method requires nothing more than your stock unhacked 3DS and a compatible flashcart. This method uses the flashcart to run the ntrboot flasher `.nds` file on your 3DS. This means that your flashcart must support launching `.nds` files on your 3DS's version. See the flashcart table on [ntrboot](ntrboot) for more information.

::: danger

Notez que dans de rares circonstances, il est possible que le processus de flash sur un linker contrefait le **brique** et le rende inutilisable de manière permanente. C'est peu probable, mais néanmoins, seuls les linkers originaux listés sont pris en charge. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## Ce dont vous avez besoin

- Your ntrboot compatible flashcart
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Power off your console
2. Insert your flashcart's SD card into your computer
3. Create a folder named `ntrboot` on the root of your flashcart's SD card
4. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
5. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
6. Reinsert your flashcart's SD card back into your flashcart
7. Insert your ntrboot compatible DS / DSi flashcart into your console

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
2. Press (A) to continue
3. Utilisez (Haut) et (Bas) pour sélectionner votre linker
4. Press (A) to continue
5. Select "Dump flash" to make a backup of your flashcart's memory
6. Input the key combo given to confirm
7. Press (A) to continue
8. Utilisez (Haut) et (Bas) pour sélectionner votre linker
9. Press (A) to continue
10. Select "Inject FIRM" to install boot9strap to your flashcart
11. Input the key combo given to confirm
12. Press (A) to continue
13. Power off your console

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
