---
title: "Flashing ntrboot (3DS Single System)"
---

{% include toc title="Table of Contents" %}

### Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot)

This method requires nothing more than your stock unhacked 3DS and a compatible flashcart. This method uses the flashcart to run the ntrboot flasher `.nds` file on your 3DS. This means that your flashcart must support launching `.nds` files on your 3DS's version. See the flashcart table on [ntrboot](ntrboot) for more information.

Note that in some rare circumstances, it may be possible for the flashing process to **brick** a counterfeit flashcart and render it permanently unusable. This is unlikely, but nevertheless only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](http://www.nds-card.net/))
{: .notice--danger}

### What You Need

* Your ntrboot compatible flashcart
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/latest) *(`ntr` boot9strap; not the `devkit` file)*
* The latest release of [ds_ntrboot_flasher](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest)

### Instructions

#### Section I - Prep Work

1. Power off your device
1. Insert your flashcart's SD card into your computer
1. Create a folder named `ntrboot` on the root of your flashcart's SD card
1. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
1. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
1. Reinsert your flashcart's SD card back into your flashcart
1. Insert your ntrboot compatible DS / DSi flashcart into your device

#### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your device using your flashcart
1. Press (A) to continue
1. Use (Up) and (Down) to select your flashcart
1. Press (A) to continue
1. Select "Dump flash" to make a backup of your flashcart's memory
1. Input the key combo given to confirm
1. Press (A) to continue
1. Use (Up) and (Down) to select your flashcart
1. Press (A) to continue
1. Select "Inject FIRM" to install boot9strap to your flashcart
1. Input the key combo given to confirm
1. Press (A) to continue
1. Power off your device

___

### Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-(ntrboot))
{: .notice--primary}
