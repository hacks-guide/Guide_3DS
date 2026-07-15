# ntrboot

## Lettura necessaria

ntrboot refers to the ability for all 3DS family consoles to boot into a special, recovery-mode cartridge to perform actions before any other part of the operating system loads. It is commonly used for data recovery and unbricking, but can also be used to install boot9strap, a custom firmware loader.

To use ntrboot, a compatible cartridge (normally a 'flashcart') is required. Many flashcarts from the NDS or DSi era can be repurposed for ntrboot, while new ones can be purchased for roughly $20 USD.

No matter how you run ntrboot, you will need a small **magnet** that is strong enough to to put the console into sleep mode (except on the Old 2DS, which uses a sleep switch). Per testare il funzionamento del magnete, appoggialo vicino ai pulsanti (A)(B)(X)(Y) mentre la console è accesa per verificare l'attivazione della modalità riposo. In tal caso, entrambi gli schermi si spegneranno finché il magnete rimane in questa posizione.

## Recommended for new purchases

If you don't already have a flashcart, or if your flashcart is incompatible with ntrboot, it is recommended to purchase one of these.

Cartridges may be available for a cheaper price through a local distributor or on AliExpress. For more information, see the [NTRBoot Quick Start Guide](https://www.flashcarts.net/ntrboot-ds-carts?tab=flashable#flashcarts) (in English only).

| Flashcart                                                      |                  Price | Notes                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------- | ---------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**DSpico**](https://www.nds-card.com/ProShow.asp?ProID=658)   | $25.99 | **Must be flashed using a computer** (using a microUSB or USB-C cable, depending on the cartridge). This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                                           |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575) | €24.99 | **Venduta con ntrboot preinstallato** (presenta un interruttore per alternare le modalità ntrboot ("3DS") e NDS); da non flashare manualmente con ntrboot. This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware. |

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

Anche se l'exploit ntrboot funziona indipendentemente dalla versione di sistema, il flasher di ntrboot (che installa l'exploit sulla cartuccia) può richiedere una versione specifica. Ciò significa che, a seconda delle versioni e delle console supportate dalla tua flashcart, potresti aver a disposizione solo alcuni metodi.

Tieni presente che alcune cartucce hanno una "bomba a tempo" che impedirà loro di avviare file `.nds` se rilevano che la data della console è successiva ad una data stabilita nel firmware della flashcart. Per bypassare questo limite, cambia la data della console ad una precedente.

| Flashcart                                                                                                                    |                  Price |                     "Bomba a tempo"?                    |                                 Versioni 3DS?                                 |                           Versioni DSi?                           | Note aggiuntive                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :-----------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=574)         |        Non disponibile |                     3 Settembre 2024                    |                                     TUTTE                                     |                               TUTTE                               | **Viene fornito con ntrboot preinstallato**; può essere riflashato a flashcart NDS.                                                                                                                                |
| [**DSTT** (ndstt.com)](https://www.nds-card.com/ProShow.asp?ProID=157)                    | €19.99 |                            No                           |                                    Nessuna                                    |                              Nessuna                              | Solo i modelli con [alcuni flash chip](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) sono compatibili con ntrboot.                                                                           |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=146)     | €20.99 | 1.85b: 3 Settembre 2024 |                                     TUTTE                                     |                               TUTTE                               |                                                                                                                                                                                                                                    |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=490) | €22.99 |  4.0b: 3 Settembre 2024 |                                     TUTTE                                     |                               TUTTE                               | Solo le cartucce r4isdhc **.com** contrassegnate con l'anno 2014 o successivi sono compatibili.                                                                                                    |
| **Ace3DS Plus**                                                                                                              |                        |                            No                           |                                     TUTTE                                     |                               TUTTE                               | This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                                                                                     |
| **Acekard 2i**                                                                                                               |                        |                            No                           |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                    |
| **Gateway Blue**                                                                                                             |                        |                            No                           | 4.1.0 - 4.5.0 |                               TUTTE                               |                                                                                                                                                                                                                                    |
| **Infinity 3 R4i** (r4infinity.com)                                                       |                        |                            No                           |                                     TUTTE                                     |                               TUTTE                               |                                                                                                                                                                                                                                    |
| **R4 3D Revolution**                                                                                                         |                        |                            No                           |                                    Nessuna                                    |                              Nessuna                              |                                                                                                                                                                                                                                    |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                          |                        |                            No                           |                                     TUTTE                                     |                               TUTTE                               | **Venduta con ntrboot preinstallato** ([Presenta un interruttore per alternare le modalità ntrboot e NDS](/images/screenshots/r4i-gold-3ds-plus.png)); da non flashare manualmente con ntrboot. |
| **R4i Gold 3DS** (r4ids.cn)                                                               |                        |                            No                           |                                     TUTTE                                     |                               TUTTE                               | Tutte le schede sono compatibili.                                                                                                                                                                                  |
| **R4i Ultra** (r4ultra.com)                                                               |                        |                            No                           |       <= 4.3.0       |                               TUTTE                               |                                                                                                                                                                                                                                    |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                          |                        |                       Sconosciuto                       |                                     TUTTE                                     |                               TUTTE                               | Solo la Deluxe Edition con l'adesivo blu è compatibile.                                                                                                                                                            |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                   |                        |  4.0b: 3 Settembre 2024 |                                     TUTTE                                     |                               TUTTE                               | Solo le cartucce r4isdhc **.com** contrassegnate con l'anno 2014 o successivi sono compatibili.                                                                                                    |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                  |                        |  4.0b: 3 Settembre 2024 |                                     TUTTE                                     |                               TUTTE                               | Solo le cartucce r4isdhc **.com** contrassegnate con l'anno 2014 o successivi sono compatibili.                                                                                                    |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Assicurati che la tua flashcart sia in grado di avviare file `.nds` sulla tua console prima di iniziare. Alcune flashcart potrebbero richiedere un firmware o file del "kernel" sulla propria scheda SD. Per ulteriori informazioni, consulta le istruzioni specifiche per la tua flashcart.

Questo exploit, a prescindere dal metodo di flashing, richiede l'uso di un piccolo magnete se la console di destinazione è a chiusura (ovvero qualsiasi modello della famiglia 3DS che non sia l'Old 2DS con la levetta per la modalità riposo). in quanto la console deve essere in modalità riposo ma al contempo i pulsanti devono rimanere accessibili.

Tieni presente che la flashcart non potrà più essere utilizzata per le sue funzioni normali finché l'exploit ntrboot sarà installato su di essa (fatta eccezione per la Acekard 2i che funzionerà comunque solo su _console NDS e 3DS con un custom firmware installato_). Questo vuol dire che, con la maggior parte delle flashcart, non verrà visualizzato nemmeno il menu principale. Per rimuoverlo dalla flashcart al termine dell'installazione, sono presenti al termine della guida delle istruzioni opzionali.

::: danger

Tieni presente che in rare circostanze è possibile **brickare** una flashcart contraffatta durante il flashing, e renderla permanentemente inutilizzabile. È improbabile, tuttavia sono supportate soltanto le flashcart originali qui indicate. Per ridurre il rischio di ottenere una flashcart contraffatta, si raccomanda di comprarne una solo da siti affidabili (come [NDS Card](https://www.nds-card.com/)).

:::

### Flash di ntrboot (Singolo 3DS)

Questo metodo richiede soltanto un 3DS non ancora modificato e una flashcart compatibile. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo 3DS. Ciò significa che la tua flashcart deve supportare l'avvio di file `.nds` sulla versione di sistema del tuo 3DS. Leggi la tabella delle flashcart sopra per maggiori informazioni.

::: tip

Prosegui con il [Flash di ntrboot (Singolo 3DS)](flashing-ntrboot-(3ds-single-system))

:::

___

### Flash di ntrboot (Con più 3DS)

Questo metodo richiede l'accesso temporaneo ad una seconda console su cui è installato boot9strap. Non è necessario che la tua flashcart supporti la versione di sistema di uno dei 3DS.

::: tip

Prosegui con il [Flash di ntrboot (Con più 3DS)](flashing-ntrboot-(3ds-multi-system))

:::

___

### Flash di ntrboot (NDS)

Questo metodo richiede momentaneamente l'utilizzo di un Nintendo DS o DS Lite compatibile con la tua flashcart. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo NDS.

::: tip

Prosegui con il [Flash di ntrboot (NDS)](flashing-ntrboot-(nds))

:::

___

### Flash di ntrboot (DSi)

Questo metodo richiede momentaneamente l'utilizzo di un Nintendo DSi compatibile con la tua flashcart. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo DSi. Ciò significa che la tua flashcart deve supportare l'avvio di file `.nds` sulla versione di sistema del tuo DSi. Leggi la tabella delle flashcart sopra per maggiori informazioni.

::: tip

Prosegui con il [Flash di ntrboot (DSi)](flashing-ntrboot-(dsi))

:::
