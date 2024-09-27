# ntrboot

::: tip

Se la tua flashcart ha installato nativamente ntrboot (o se hai già installato ntrboot nella tua flashcart), puoi saltare direttamente all'[Installazione di boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\)).

:::

## Required Reading

L'installazione di boot9strap tramite ntrboot richiede una flashcart NDS / DSi compatibile. Alcune di queste flashcart sono vendute con ntrboot già preinstallato.

Anche se l'exploit ntrboot funziona indipendentemente dalla versione di sistema, il flasher di ntrboot (che installa l'exploit sulla cartuccia) può richiedere una versione specifica. Ciò significa che, a seconda delle versioni e delle console supportate dalla tua flashcart, potresti aver a disposizione solo alcuni metodi.

Tieni presente che alcune cartucce hanno una "bomba a tempo" che impedirà loro di avviare file `.nds` se rilevano che la data della console è successiva ad una data stabilita nel firmware della flashcart. Per bypassare questo limite, cambia la data della console ad una precedente.

| Flashcart Name                                                                                                              |          Current Price |                       "Time Bomb"?                       |                                 3DS Versions?                                 |                           DSi Versions?                           | Other Notes                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** (external switch to switch between ntrboot ("3DS") and NDS modes); do not manually flash with ntrboot. Questa cartuccia necessita di una scheda SD inserita per funzionare sia con ntrboot che con regolare firmware NDS. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     September 3, 2024                    |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot**; can be flashed back to an NDS flashcart.                                                                                                                                                                                                                                       |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                            No                            |                                      None                                     |                                None                               | Only models with [certain flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) are compatible with ntrboot.                                                                                                                                                                            |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: September 3, 2024 |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                                                    |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                                    |
| **Ace3DS Plus**                                                                                                             |                        |                            No                            |                                      ALL                                      |                                ALL                                | Questa cartuccia necessita di una scheda SD inserita per funzionare sia con ntrboot che con regolare firmware NDS.                                                                                                                                                                                                 |
| **Acekard 2i**                                                                                                              |                        |                            No                            |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                                                                                                                    |
| **Gateway Blue**                                                                                                            |                        |                            No                            | 4.1.0 - 4.5.0 |                                ALL                                |                                                                                                                                                                                                                                                                                                                                    |
| **Infinity 3 R4i** (r4infinity.com)                                                      |                        |                            No                            |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                                                    |
| **R4 3D Revolution**                                                                                                        |                        |                            No                            |                                      None                                     |                                None                               |                                                                                                                                                                                                                                                                                                                                    |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                         |                        |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** ([internal switch to switch between ntrboot and NDS modes](/images/screenshots/r4i-gold-3ds-plus.png)); do not manually flash with ntrboot.                                                                                                                  |
| **R4i Gold 3DS** (r4ids.cn)                                                              |                        |                            No                            |                                      ALL                                      |                                ALL                                | All carts are compatible.                                                                                                                                                                                                                                                                                          |
| **R4i Ultra** (r4ultra.com)                                                              |                        |                            No                            |       <= 4.3.0       |                                ALL                                |                                                                                                                                                                                                                                                                                                                                    |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                         |                        |                          Unknown                         |                                      ALL                                      |                                ALL                                | Only the Deluxe Edition with the blue sticker is compatible.                                                                                                                                                                                                                                                       |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                  |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                                    |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                 |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                                    |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Assicurati che la tua flashcart sia in grado di avviare file `.nds` sulla tua console prima di iniziare. Alcune flashcart potrebbero richiedere un firmware o file del "kernel" sulla propria scheda SD. Per ulteriori informazioni, consulta le istruzioni specifiche per la tua flashcart.

Tieni presente che i metodi specifici forniscono ulteriori informazioni sulla compatibilità.

Questo exploit, a prescindere dal metodo di flashing, richiede l'uso di un piccolo magnete se la console di destinazione è a chiusura (ovvero qualsiasi modello della famiglia 3DS che non sia l'Old 2DS con la levetta per la modalità riposo). in quanto la console deve essere in modalità riposo ma al contempo i pulsanti devono rimanere accessibili.

::: info

Per testare il funzionamento del magnete, appoggialo vicino ai pulsanti (A)(B)(X)(Y) mentre la console è accesa per verificare l'attivazione della modalità riposo. In tal caso, entrambi gli schermi si spegneranno finché il magnete rimane in questa posizione.

:::

Tieni presente che la flashcart non potrà più essere utilizzata per le sue funzioni normali finché l'exploit ntrboot sarà installato su di essa (fatta eccezione per la Acekard 2i che funzionerà comunque solo su _console NDS e 3DS con un custom firmware installato_). Questo vuol dire che, con la maggior parte delle flashcart, non verrà visualizzato nemmeno il menu principale. Per rimuoverlo dalla flashcart al termine dell'installazione, sono presenti al termine della guida delle istruzioni opzionali.

::: danger

Tieni presente che in rare circostanze è possibile **brickare** una flashcart contraffatta durante il flashing, e renderla permanentemente inutilizzabile. È improbabile, tuttavia sono supportate soltanto le flashcart originali qui indicate. Per ridurre il rischio di ottenere una flashcart contraffatta, si raccomanda di comprarne una solo da siti affidabili (come [NDS Card](https://www.nds-card.com/)).

:::

___

## Methods

___

### Flash di ntrboot (Singolo 3DS)

Questo metodo richiede soltanto un 3DS non ancora modificato e una flashcart compatibile. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo 3DS. Ciò significa che la tua flashcart deve supportare l'avvio di file `.nds` sulla versione di sistema del tuo 3DS. Leggi la tabella delle flashcart sopra per maggiori informazioni.

::: tip

Prosegui con il [Flash di ntrboot (Singolo 3DS)](flashing-ntrboot-\(3ds-single-system\))

:::

___

### Flash di ntrboot (Con più 3DS)

Questo metodo richiede l'accesso temporaneo ad una seconda console su cui è installato boot9strap. Non è necessario che la tua flashcart supporti la versione di sistema di uno dei 3DS.

::: tip

Prosegui con il [Flash di ntrboot (Con più 3DS)](flashing-ntrboot-\(3ds-multi-system\))

:::

___

### Flash di ntrboot (NDS)

Questo metodo richiede momentaneamente l'utilizzo di un Nintendo DS o DS Lite compatibile con la tua flashcart. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo NDS.

::: tip

Prosegui con il [Flash di ntrboot (NDS)](flashing-ntrboot-\(nds\))

:::

___

### Flash di ntrboot (DSi)

Questo metodo richiede momentaneamente l'utilizzo di un Nintendo DSi compatibile con la tua flashcart. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo DSi. Ciò significa che la tua flashcart deve supportare l'avvio di file `.nds` sulla versione di sistema del tuo DSi. Leggi la tabella delle flashcart sopra per maggiori informazioni.

::: tip

Prosegui con il [Flash di ntrboot (DSi)](flashing-ntrboot-\(dsi\))

:::
