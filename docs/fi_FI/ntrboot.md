# ntrboot

::: tip

If your flashcart comes pre-flashed with ntrboot (or you have already flashed ntrboot to your flashcart), you can skip to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\)) for instructions on how to use it.

:::

## Required Reading

Boot9strapin asentaminen ntrbootin avulla vaatii yhteensopivan NDS-/DSi-flash-kortin, jolle voi asentaa ntrbootin. Huomaa, että jotkin näistä flash-korteista sisältävät ntrbootin esiasennettuna.

While the ntrboot exploit works independently of the system version, the ntrboot flasher (which installs the exploit to the cart) is not. This means that, depending on the versions and consoles supported by your flashcart, only certain methods may be available to you.

Huomaa, että "aikapommin" sisältävät kortit eivät voi enää avata `.nds`-tiedostoja sen jälkeen, kun ne havaitsevat järjestelmän ajan ohittaneen flash-kortin laiteohjelmistossa määritelly päivämäärän. Eräs keino tämän ohittamiseen on asettaa järjestelmän aika aikaisempaan päivämäärään.

| Flashcart Name                                                                                                              |          Current Price |                       "Time Bomb"?                       |                                 3DS Versions?                                 |                           DSi Versions?                           | Other Notes                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** (external switch to switch between ntrboot ("3DS") and NDS modes); do not manually flash with ntrboot. This cart needs an SD card inserted to function for both ntrboot and regular NDS firmware. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     September 3, 2024                    |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot**; can be flashed back to an NDS flashcart.                                                                                                                                                                                                               |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                            No                            |                                      None                                     |                                None                               | Only models with [certain flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) are compatible with ntrboot.                                                                                                                                                    |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: September 3, 2024 |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |
| **Ace3DS Plus**                                                                                                             |                        |                            No                            |                                      ALL                                      |                                ALL                                | This cart needs an SD card inserted to function for both ntrboot and regular NDS firmware.                                                                                                                                                                                                 |
| **Acekard 2i**                                                                                                              |                        |                            No                            |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                                                                                            |
| **Gateway Blue**                                                                                                            |                        |                            No                            | 4.1.0 - 4.5.0 |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **Infinity 3 R4i** (r4infinity.com)                                                      |                        |                            No                            |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **R4 3D Revolution**                                                                                                        |                        |                            No                            |                                      None                                     |                                None                               |                                                                                                                                                                                                                                                                                                            |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                         |                        |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** ([internal switch to switch between ntrboot and NDS modes](/images/screenshots/r4i-gold-3ds-plus.png)); do not manually flash with ntrboot.                                                                                          |
| **R4i Gold 3DS** (r4ids.cn)                                                              |                        |                            No                            |                                      ALL                                      |                                ALL                                | All carts are compatible.                                                                                                                                                                                                                                                                  |
| **R4i Ultra** (r4ultra.com)                                                              |                        |                            No                            |       <= 4.3.0       |                                ALL                                |                                                                                                                                                                                                                                                                                                            |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                         |                        |                          Unknown                         |                                      ALL                                      |                                ALL                                | Only the Deluxe Edition with the blue sticker is compatible.                                                                                                                                                                                                                               |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                  |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                 |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                            |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Ensure your flashcart is able to launch `.nds` files on your console before beginning. Jotkin flash-kortit saattavat vaatia käyttöjärjestelmäydin- tai laiteohjelmistotiedostojen kopioimista sen SD-kortille. Käänny flash-korttisi käyttöohjeiden puoleen lisätietoja varten.

Huomaa, että joidenkin menetelmien osioissa on lisätietoja yhteensopivuudesta.

The usage of this exploit, regardless of the flashing method, requires access to a small magnet if the target console is of a folding style (any 3DS family system that is not the old 2DS with a sleep switch). This is because the exploit requires your console to enter sleep mode while still having access to the buttons.

::: info

To test if a magnet will work, hold it on or around the (A)(B)(X)(Y) buttons while the console is powered on to see if it triggers sleep mode. Jos lepotila menee päälle, kummatkin ruudut ovat mustana niin kauan, kuin pidät magneettia kohdassa.

:::

Huomaa, että flash-korttia ei voi käyttää sen normaaleihin käyttötarkoituksiin silloin, kun ntrboot on asennettuna sille (lukuun ottamatta Acekard 2i -korttia, joka toimii edelleen normaalisti _NDS:llä sekä 3DS:llä, jossa on mukautettu laiteohjelmisto_). This means that, for most flashcarts, it will not even display on the HOME Menu. Asennusohjeiden lopussa on valinnaiset ohjeet, joiden avulla voit poistaa ntrbootin flash-kortiltasi asennettuasi boot9strapin.

::: danger

Huomaa, että joissain harvinaisissa yhteensattumissa asennusprosessi saattaa **vioittaa** jäljitelmä-flash-korttia ja tehdä siitä pysyvästi käyttökelvottoman. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

___

## Methods

___

### Flashing ntrboot (3DS Single System)

Tämä menetelmä vaatii vain hakkeroimattoman, vakiolaiteohjelmistolla olevan 3DS-konsolisi sekä yhteensopivan flash-kortin. Tämä menetelmä käyttää flash-korttia ntrbootin asentamiseen `.nds`-tiedoston kautta 3DS:lläsi. Flash-korttisi täytyy siis tukea `.nds`-tiedostojen lataamista 3DS:si versiolla. Tutustu yllä olevaan flash-korttitaulukkoon lisätietoja varten.

::: tip

Jatka osioon [Ntrbootin asentaminen (yksi 3DS)](flashing-ntrboot-\(3ds-single-system\))

:::

___

### Flashing ntrboot (3DS Multi System)

This method requires temporary access to a second 3DS family console that is already running boot9strap. Flash-korttisi ei tarvitse tukea kummankaan 3DS:n versiota.

::: tip

Jatka osioon [Ntrbootin asentaminen (monta 3DS:ää)](flashing-ntrboot-\(3ds-multi-system\))

:::

___

### Flashing ntrboot (NDS)

Tämä menetelmä vaatii tilapäiseen käyttöön flash-korttisi kanssa yhteensopivan Nintendo DS- tai Nintendo DS Lite -konsolin. Tämä menetelmä käyttää flash-korttia ntrbootin asentamiseen `.nds`-tiedoston kautta NDS:lläsi.

::: tip

Jatka osioon [Ntrbootin asentaminen (NDS)](flashing-ntrboot-\(nds\))

:::

___

### Flashing ntrboot (DSi)

Tämä menetelmä vaatii tilapäiseen käyttöön flash-korttisi kanssa yhteensopivan Nintendo DSi -konsolin. Tämä menetelmä käyttää flash-korttia ntrboot-asennusohjelman (`.nds`-tiedoston) avaamiseen DSi:lläsi. This means that your flashcart must support launching `.nds` files on your DSi's version. Tutustu yllä olevaan flash-korttitaulukkoon lisätietoja varten.

::: tip

Jatka osioon [Ntrbootin asentaminen (DSi)](flashing-ntrboot-\(dsi\))

:::
