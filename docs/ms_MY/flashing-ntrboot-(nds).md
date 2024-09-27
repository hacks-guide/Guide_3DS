# Flashing ntrboot (NDS)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot)

This method requires temporary access to a Nintendo DS or Nintendo DS Lite that is compatible with your flashcart. This method uses the flashcart to run the ntrboot flasher `.nds` file on your NDS.

::: danger

Note that in some rare circumstances, it may be possible for the flashing process to **brick** a counterfeit flashcart and render it permanently unusable. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

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

1. Power off **the source NDS / NDSL**
2. Insert your flashcart's SD card into your computer
3. Create a folder named `ntrboot` on the root of your flashcart's SD card
4. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
5. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
6. Reinsert your flashcart's SD card back into your flashcart
7. Insert your ntrboot compatible DS / DSi flashcart into **the source NDS / NDSL**

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on **the source NDS / NDSL** using your flashcart
2. Tekan (A) untuk meneruskan
3. Use (Up) and (Down) to select your flashcart
4. Tekan (A) untuk meneruskan
5. Select "Dump flash" to make a backup of your flashcart's memory
6. Input the key combo given to confirm
7. Tekan (A) untuk meneruskan
8. Use (Up) and (Down) to select your flashcart
9. Tekan (A) untuk meneruskan
10. Select "Inject FIRM" to install boot9strap to your flashcart
11. Input the key combo given to confirm
12. Tekan (A) untuk meneruskan
13. Power off **the source NDS / NDSL**
14. Eject your flashcart from **the source NDS / NDSL**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
