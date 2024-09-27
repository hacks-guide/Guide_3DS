# Flashing ntrboot (NDS)

## Required Reading

Varmista ennen jatkamista, että olet lukenut kaikki [ntrbootia koskevat huomautukset](ntrboot).

Tämä menetelmä vaatii tilapäiseen käyttöön flash-korttisi kanssa yhteensopivan Nintendo DS- tai Nintendo DS Lite -konsolin. Tämä menetelmä käyttää flash-korttia ntrbootin asentamiseen `.nds`-tiedoston kautta NDS:lläsi.

::: danger

Huomaa, että joissain harvinaisissa yhteensattumissa asennusprosessi saattaa **vioittaa** jäljitelmä-flash-korttia ja tehdä siitä pysyvästi käyttökelvottoman. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

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

1. Sammuta **lähde-NDS/-NDSL**
2. Aseta flash-korttisi SD-kortti tietokoneeseesi
3. Create a folder named `ntrboot` on the root of your flashcart's SD card
4. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
5. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
6. Aseta SD-kortti takaisin flash-korttiisi
7. Aseta ntrboot-yhteensopiva DS-/DSi-flash-korttisi **lähde-NDS/-NDSL**-konsoliin

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on **the source NDS / NDSL** using your flashcart
2. Paina (A):ta jatkaaksesi
3. Käytä ristiohjainta valitaksesi flash-korttisi
4. Paina (A):ta jatkaaksesi
5. Select "Dump flash" to make a backup of your flashcart's memory
6. Input the key combo given to confirm
7. Paina (A):ta jatkaaksesi
8. Käytä ristiohjainta valitaksesi flash-korttisi
9. Paina (A):ta jatkaaksesi
10. Select "Inject FIRM" to install boot9strap to your flashcart
11. Input the key combo given to confirm
12. Paina (A):ta jatkaaksesi
13. Sammuta **lähde-NDS/-NDSL**
14. Irrota flash-korttisi **lähde-NDS/-NDSL**-konsolista

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
