# ntrboot

::: tip

If your flashcart comes pre-flashed with ntrboot (or you have already flashed ntrboot to your flashcart), you can skip to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\)) for instructions on how to use it.

:::

## Required Reading

Um boot9strap mit ntrboot zu installieren benötigst du eine kompatible DS / DSi Flashkarte, worauf du ntrboot installieren kannst. Beachte dass manche Flashcarts schon mit ntrboot geliefert werden.

While the ntrboot exploit works independently of the system version, the ntrboot flasher (which installs the exploit to the cart) is not. This means that, depending on the versions and consoles supported by your flashcart, only certain methods may be available to you.

Karten mit 'Time Bomb' sind nicht länger in der Lage '.nds' Dateien zu starten, wenn sie erkennen das die System Uhr ein Datum überschritten hat, welches von der Flashkartenfirmware bestimmt wurde. Eine Methode das zu umgehen ist, die System Uhr auf ein früheres Datum zu setzen.

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

Ensure your flashcart is able to launch `.nds` files on your console before beginning. Einige Flashcarts erfordern dass eine Firmware oder ''kernel'' Dateien vorher auf die SD der Flashcart kopiert werden. Siehe deine spezielle Flashkarten-Betriebsanleitung ein, um mehr Informationen diesbezüglich zu erhalten.

Beachte jedoch, dass einige Methoden zusätzliche Kompatibilitätsinformationen enthalten.

The usage of this exploit, regardless of the flashing method, requires access to a small magnet if the target console is of a folding style (any 3DS family system that is not the old 2DS with a sleep switch). This is because the exploit requires your console to enter sleep mode while still having access to the buttons.

::: info

To test if a magnet will work, hold it on or around the (A)(B)(X)(Y) buttons while the console is powered on to see if it triggers sleep mode. Wenn dies der Fall ist, werden beide Bildschirme solange schwarz bleiben wie der Magnet an der Stelle gehalten wird.

:::

Beachte dass die Flashkarte nicht in der Lage ist, ihre Standardfunktionen auszuführen, solange der ntrboot exploit installiert ist (Ausnahme ist die Acekard 2i, welche weiterhin funktioniert _auf NDS und 3DS Custom Firmware Systemen_). This means that, for most flashcarts, it will not even display on the HOME Menu. Am Ende der ntrboot flashen Anleitung findest du optional weitere Schritte, welche dir erklären, wie du ntrboot wieder von deiner Flashkarte entfernen und diese wieder wie gewohnt nutzen kannst.

::: danger

In manchen seltenen Fällen ist es möglich, dass während des Flashens einer gefälschten Flashkarte diese **gebrickt** wird und somit permanent unbenutzbar wird. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

___

## Methods

___

### Flashing ntrboot (3DS Single System)

Diese Methode erfordert nichts weiter außer deinem ungehacktem 3DS und einer kompatiblen Flashkarte. Diese Methode verwendet eine Flashkarte zum Ausführen der Ntrboot Flasher ".nds" Datei auf deinem 3DS. Dies bedeutet, dass deine Flashkarte das Ausführen von ".nds" Dateien auf deiner 3DS Version unterstützen muss. Siehe die Flashkarten Tabelle weiter oben für mehr Informationen.

::: tip

Fortfahren mit [ntrboot flashen (Einzelnes 3DS-System)](flashing-ntrboot-\(3ds-single-system\))

:::

___

### Flashing ntrboot (3DS Multi System)

This method requires temporary access to a second 3DS family console that is already running boot9strap. Dies erfordert nicht, dass deine Flashcart die 3DS-Version unterstützt.

::: tip

Fortfahren mit [ntrboot flashen (Mehrere 3DS-Systeme)](flashing-ntrboot-\(3ds-multi-system\))

:::

___

### Flashing ntrboot (NDS)

Diese Methode erfordert temporären Zugriff auf einen Nintendo DS oder Nintendo DS Lite, welcher mit deiner Flashcart kompatibel ist. Diese Methode verwendet eine Flashcart zum Ausführen der Ntrboot Flasher ".nds" Datei auf deinem NDS.

::: tip

Fortfahren mit [ntrboot flashen (NDS)](flashing-ntrboot-\(nds\))

:::

___

### Flashing ntrboot (DSi)

Diese Methode erfordert temporären Zugriff auf einen Nintendo DSi, welcher mit deiner Flashcart kompatibel ist. Diese Methode verwendet eine Flashkarte zum Ausführen der Ntrboot Flasher ".nds" Datei auf deinem DSi. This means that your flashcart must support launching `.nds` files on your DSi's version. Siehe die Flashkarten Tabelle weiter oben für mehr Informationen.

::: tip

Fortfahren mit [ntrboot flashen (DSi)](flashing-ntrboot-\(dsi\))

:::
