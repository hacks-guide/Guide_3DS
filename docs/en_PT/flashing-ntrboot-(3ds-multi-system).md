# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. This does not require your flashcart to support either 3DS's version.

::: danger

Note that in some rare cases, it may be possible fer th' flashin' process to **brick** a counterfeit flashcart n' render it permanently unusable. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

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

1. Power off **the source 3DS**
2. Insert **the source 3DS**'s SD card into your computer
3. Create a folder named `ntrboot` on the root of your SD card
4. Copy `boot9strap_ntr.firm` and `boot9strap_ntr.firm.sha` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your SD card
5. Copy `ntrboot_flasher.firm` to the `/luma/payloads/` folder on **the source 3DS**'s SD card
6. Reinsert **the source 3DS**'s SD card back into **the source 3DS**
7. Insert your ntrboot compatible DS / DSi flashcart into **the source 3DS**

### Section II - Flashing ntrboot

1. Launch the Luma3DS chainloader by holding (Start) during boot on **the source 3DS**
2. Select "ntrboot_flasher"
3. Read the red screen warning
4. Press (A) to continue
5. Select your flashcart
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Select "Dump Flash"
7. Wait 'til th' process be completed
8. Press (A) to continue
9. Press (A) to return to the main menu
10. Select "Inject Ntrboot"
11. Press (A) for retail unit ntrboot
12. Wait 'til th' process be completed
13. Press (A) to return to the main menu
14. Press (B) to power off **the source 3DS**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
