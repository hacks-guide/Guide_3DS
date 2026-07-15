# ntrboot

## Lecture requise

ntrboot refers to the ability for all 3DS family consoles to boot into a special, recovery-mode cartridge to perform actions before any other part of the operating system loads. It is commonly used for data recovery and unbricking, but can also be used to install boot9strap, a custom firmware loader.

To use ntrboot, a compatible cartridge (normally a 'flashcart') is required. Many flashcarts from the NDS or DSi era can be repurposed for ntrboot, while new ones can be purchased for roughly $20 USD.

No matter how you run ntrboot, you will need a small **magnet** that is strong enough to to put the console into sleep mode (except on the Old 2DS, which uses a sleep switch). Pour tester un aimant va fonctionner, il suffit de mettre l'aimant autour des boutons (A), (B), (X), (Y) lorsque l'appareil est allumé, puis de voir si l'appareil se met en mode veille. Si c'est le cas, les écrans vont s'éteindre tant que l'aimant est maintenu en place.

## Recommended for new purchases

If you don't already have a flashcart, or if your flashcart is incompatible with ntrboot, it is recommended to purchase one of these.

Cartridges may be available for a cheaper price through a local distributor or on AliExpress. For more information, see the [NTRBoot Quick Start Guide](https://www.flashcarts.net/ntrboot-ds-carts?tab=flashable#flashcarts) (in English only).

| Linker                                                         |                               Price | Notes                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------- | ----------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**DSpico**](https://www.nds-card.com/ProShow.asp?ProID=658)   |              $25.99 | **Must be flashed using a computer** (using a microUSB or USB-C cable, depending on the cartridge). This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                                 |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575) | 24,99 $ (≈ 23 €) | **Préflashé avec ntrboot** (interrupteur externe pour permuter entre ntrboot ("3DS") et le mode NDS) ; ne pas flasher manuellement avec ntrboot. This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware. |

::: tip

If you have a DSpico, you will need to flash it with an ntrboot-compatible firmware. To do so:

- Download [DSpico_Hybrid_B9S-1.3_GCD.uf2](https://github.com/coderkei/dspico-hybrid-fw/releases/download/1.4/DSpico_Hybrid_B9S-1.3_GCD.uf2)
- Remove the microSD card from your DSpico
- Connect the DSpico to your computer using a microUSB or USB-C cable (depending on the cartridge)
  - A `RPI-RP2` drive should appear on your computer
- Copy `DSpico_Hybrid_B9S-1.3_GCD.uf2` to the root of the `RPI-RP2` drive (not inside any folder)
  - The drive should automatically disconnect itself after a few seconds
- **After the drive has disconnected itself**, disconnect the DSpico from your computer and reinsert the microSD card
  - The hybrid firmware has been successfully flashed
    :::

::: tip

Once your cartridge is flashed with ntrboot, you can continue to [Installing boot9strap (ntrboot)](installing-boot9strap-(ntrboot)). You can ignore the rest of this page.

:::

## Other Flashcarts

If you already have a flashcart that _isn't_ a DSpico or Ace3DS X, you can check this list to see if it can be flashed with ntrboot.

Bien que l'exploit ntrboot fonctionne indépendamment de la version du système, le flasheur de ntrboot (qui installe l'exploit sur la cartouche) ne l'est pas. Ceci signifie que, selon les versions et consoles supportées par votre linker, seules certaines méthodes peuvent vous être disponibles.

Notez que les cartouches avec bombe à retardement (Time Bomb) ne seront plus capables de lancer des fichiers `.nds` si elles détectent que l'horloge système a passé une date déterminée par le firmware du linker. Une façon de contourner cela est de paramétrer l'horloge système sur une date antérieure.

| Linker                                                                                                                       |                                               Price |                       "Time Bomb" ?                      |                                 Versions 3DS ?                                |                           Versions DSi ?                          | Autres notes                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=574)         |                                    Rupture de stock |                     3 septembre 2024                     |                                     TOUTES                                    |                               TOUTES                              | **Préflashé avec ntrboot** peut être rétrogradé vers un linker NDS.                                                                                                                                            |
| [**DSTT** (ndstt.com)](https://www.nds-card.com/ProShow.asp?ProID=157)                    |                 19,99 $ (≈ 17 €) |                            Non                           |                                     Aucune                                    |                               Aucune                              | Seuls les modèles avec certaines [puces flash](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) sont compatibles avec ntrboot.                                                              |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=146)     | 20.99 $ (≈ 18 €) | 1.85b : 3 septembre 2024 |                                     TOUTES                                    |                               TOUTES                              |                                                                                                                                                                                                                                |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=490) | 22.99 $ (≈ 20 €) |  4.0b : 3 septembre 2024 |                                     TOUTES                                    |                               TOUTES                              | Seules les cartouches r4isdhc **.com** marquées avec une année de 2014 ou après sont compatibles.                                                                                              |
| **Ace3DS Plus**                                                                                                              |                                                     |                            Non                           |                                     TOUTES                                    |                               TOUTES                              | This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                                                                                 |
| **Acekard 2i**                                                                                                               |                                                     |                            Non                           |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                |
| **Gateway Blue**                                                                                                             |                                                     |                            Non                           | 4.1.0 - 4.5.0 |                               TOUTES                              |                                                                                                                                                                                                                                |
| **Infinity 3 R4i** (r4infinity.com)                                                       |                                                     |                            Non                           |                                     TOUTES                                    |                               TOUTES                              |                                                                                                                                                                                                                                |
| **R4 3D Revolution**                                                                                                         |                                                     |                            Non                           |                                     Aucune                                    |                               Aucune                              |                                                                                                                                                                                                                                |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                          |                                                     |                            Non                           |                                     TOUTES                                    |                               TOUTES                              | **préflashé avec ntrboot** ([interrupteur externe pour permuter entre ntrboot "3DS" et le mode NDS](/images/screenshots/r4i-gold-3ds-plus.png)) ; ne pas flasher manuellement avec ntrboot. |
| **R4i Gold 3DS** (r4ids.cn)                                                               |                                                     |                            Non                           |                                     TOUTES                                    |                               TOUTES                              | Toutes les cartouches sont compatibles.                                                                                                                                                                        |
| **R4i Ultra** (r4ultra.com)                                                               |                                                     |                            Non                           |       <= 4.3.0       |                               TOUTES                              |                                                                                                                                                                                                                                |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                          |                                                     |                          Inconnu                         |                                     TOUTES                                    |                               TOUTES                              | Uniquement l'édition Deluxe avec le sticker bleu est compatible.                                                                                                                                               |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                   |                                                     |  4.0b : 3 septembre 2024 |                                     TOUTES                                    |                               TOUTES                              | Seuls les cartouches de r4isdhc\*\*.com\*\* marquées avec l'année 2014 ou plus récent sont compatibles.                                                                                        |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                  |                                                     |  4.0b : 3 septembre 2024 |                                     TOUTES                                    |                               TOUTES                              | Seuls les cartouches de r4isdhc\*\*.com\*\* marquées avec l'année 2014 ou plus récent sont compatibles.                                                                                        |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Vérifiez que votre linker est capable de lancer des fichiers `.nds` sur votre console avant de commencer. Certains linkers doivent avoir les fichiers du firmware ou "kernel" copiés sur la carte SD. Consultez les instructions spécifiques de votre linker pour plus d'informations.

L'utilisation de cet exploit, quelle que soit la méthode de flash, nécessite de disposer d'un petit aimant si la console cible est de type pliable (toute console de la famille 3DS qui n'est pas une ancienne 2DS avec un interrupteur de mise en veille). Ceci est dû au fait que l'exploit demande de mettre la console en veille tout en ayant accès aux boutons.

Notez que le linker ne pourra pas être utilisé avec ses fonctions standard tant que l'exploit ntrboot est installé dessus (sauf dans le cas de Acekard 2i, qui reste fonctionnel _sur NDS et les systèmes 3DS avec un custom firmware uniquement_). Cela signifie que, pour la majorité des linkers, le menu HOME ne sera pas visible. Des étapes facultatives se trouvent à la fin des instructions d'installation de ntrboot pour le supprimer de votre linker.

::: danger

Notez que dans de rares circonstances, il est possible que le processus de flash **bricke** un linker contrefait et le rende inutilisable de manière permanente. C'est peu probable, mais néanmoins, seuls les linkers originaux listés sont pris en charge. Pour réduire les chances de recevoir un linker contrefait, il est recommandé d'utiliser un site réputé pour acheter votre linker (comme [NDS Card](https://www.nds-card.com/)).

:::

### Flasher ntrboot (Une seule 3DS)

Cette méthode ne nécessite que votre 3DS non hackée et non modifiée et un linker compatible. Cette méthode utilise le linker pour exécuter le fichier flasheur ntrboot `.nds` sur votre 3DS. Ça signifie que votre linker doit pouvoir lancer des fichiers `.nds` sur la version de votre 3DS. Référez-vous au tableau ci-dessus pour une liste des versions compatibles.

::: tip

Continuer vers [Flasher ntrboot (Une seule 3DS)](flashing-ntrboot-(3ds-single-system))

:::

___

### Flasher ntrboot (plusieurs 3DS)

Cette méthode nécessite un accès temporaire à un second périphérique de la famille 3DS qui utilise déjà boot9strap. Votre linker n'a pas besoin de fonctionner sur aucune des deux 3DS.

::: tip

Continuer vers [Flasher ntrboot (plusieurs 3DS)](flashing-ntrboot-(3ds-multi-system))

:::

___

### Flasher ntrboot (NDS)

Cette méthode nécessite l'accès temporaire à une Nintendo DS ou une Nintendo DS Lite qui est compatible avec votre linker. Cette méthode utilise l'aide du linker pour exécuter le fichier flasheur ntrboot `.nds` sur votre NDS.

::: tip

Continuer vers [Flasher ntrboot (NDS)](flashing-ntrboot-(nds))

:::

___

### Flasher ntrboot (DSi)

Cette méthode nécessite l'accès temporaire à une Nintendo DSi qui est compatible avec votre linker. Cette méthode utilise le linker pour exécuter le fichier flasheur ntrboot `.nds` sur votre DSi. Ça signifie que votre linker doit pouvoir lancer des fichiers `.nds` sur la version de votre DSi. Référez-vous au tableau ci-dessus pour une liste des versions compatibles.

::: tip

Continuer vers [Flasher ntrboot (DSi)](flashing-ntrboot-(dsi))

:::
