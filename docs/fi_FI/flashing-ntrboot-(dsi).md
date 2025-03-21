# Flashing ntrboot (DSi)

## Required Reading

Varmista ennen jatkamista, että olet lukenut kaikki [ntrbootia koskevat huomautukset](ntrboot).

Tämä menetelmä vaatii tilapäiseen käyttöön flash-korttisi kanssa yhteensopivan Nintendo DSi -konsolin. Tämä menetelmä käyttää flash-korttia ntrboot-asennusohjelman (`.nds`-tiedoston) avaamiseen DSi:lläsi. This means that your flashcart must support launching `.nds` files on your DSi's version. Tutustu [Ntrboot](ntrboot)-sivun flash-korttitaulukkoon lisätietoja varten.

::: danger

Huomaa, että joissain harvinaisissa yhteensattumissa asennusprosessi saattaa **vioittaa** jäljitelmä-flash-korttia ja tehdä siitä pysyvästi käyttökelvottoman. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
    - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Sammuta **lähde-DSi**
2. Aseta flash-korttisi SD-kortti tietokoneeseesi
3. Kopioi `ds_ntrboot_flasher_dsi.nds` flash-korttisi SD-kortille
4. Aseta SD-kortti takaisin flash-korttiisi
5. Aseta ntrboot-yhteensopiva DS-/DSi-flash-korttisi **lähde-DSi**:hin

### Section II - Flashing ntrboot

1. Avaa `ds_ntrboot_flasher_dsi.nds` flash-korttisi avulla **lähde-DSi**-konsolilla
2. Paina (A):ta jatkaaksesi
3. Käytä ristiohjainta valitaksesi flash-korttisi
4. Paina (A):ta jatkaaksesi
5. Paina (A):ta suorittaaksesi toiminnon "inject ntrboothax"
6. Paina (A):ta valitaksesi vaihtoehdon "RETAIL"
7. Paina (A):ta jatkaaksesi
8. Valitse "EXIT"

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
