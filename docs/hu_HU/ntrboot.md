# ntrboot

::: tip

Ha a flashkártyád gyárilag flashelve van az ntrboot-tal (vagy már magad ráflashelted), ugorhatsz a [boot9strap telepítése (ntrboot)](installing-boot9strap-\(ntrboot\)) című útmutatóra, amiben megtudhatod, hogyan kell használni.

:::

## Required Reading

Ahhoz, hogy ntrboot segítségével telepíthesd a boot9strap-et, szükséged lesz egy azt támogató NDS / DSi flashkártyára, amire ráflashelheted az ntrbootot. Megjegyzendő, hogy néhány ilyen flashkártyát már gyárilag ntrboot-tal flashelve árulnak.

Míg az ntrboot exploit működése nem függ a rendszerverziótól, az ntrboot flashelő (ami az exploitot a kártyára telepíti) igen. Ez azt jelenti, hogy attól függően, hogy a flashkártyád milyen verziókat és konzolokat támogat, csak bizonyos módszerek lehetnek elérhetőek számodra.

Vedd figyelembe, hogy a "Time Bomb"-bal rendelkező kártyák nem lesznek képesek `.nds` fájlok futtatására, ha észlelik, hogy a rendszeridő meghaladja a flashkártya firmware-je által meghatározott értéket. Ennek megkerülésére az egyik módszer a rendszeridő korábbi dátumra állítása.

| Flashcart Name                                                                                                              |          Current Price |                       "Time Bomb"?                       |                                 3DS Versions?                                 |                           DSi Versions?                           | Other Notes                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** (external switch to switch between ntrboot ("3DS") and NDS modes); do not manually flash with ntrboot. Ez a kártya egy SD kártyát igényel behelyezve, hogy egyaránt működjön ntrboot-tal és hagyományos NDS firmware-rel. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     September 3, 2024                    |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot**; can be flashed back to an NDS flashcart.                                                                                                                                                                                                                                       |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                            No                            |                                      None                                     |                                None                               | Only models with [certain flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) are compatible with ntrboot.                                                                                                                                                                            |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: September 3, 2024 |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                                                    |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                                    |
| **Ace3DS Plus**                                                                                                             |                        |                            No                            |                                      ALL                                      |                                ALL                                | Ez a kártya egy SD kártyát igényel behelyezve, hogy egyaránt működjön ntrboot-tal és hagyományos NDS firmware-rel.                                                                                                                                                                                                 |
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

Bizonyosodj meg róla, hogy a flashkártyád képes az `.nds` fájlok futtatására a konzolodon, mielőtt továbbmész. Néhány flashkártya esetében szükség lehet a firmware, vagy "kernel" fájlok SD kártyára másolására. Részletekért lásd az adott flashkártya használati útmutatóját.

Megjegyzendő, hogy a konkrét módszerek további információval szolgálhatnak kompatibilitás terén.

A flashelés módjától függetlenül, ezen exploit használatakor szükséged lesz egy apró mágnesre, ha a cél konzol összecsukható kivitelű (a 3DS családba tartozó összes készülék ilyen, kivéve az Old 2DS-t, ami rendelkezik alvó mód kapcsolóval). Ennek az az oka, hogy az exploithoz alvó módba kell lépni, azonban a gombokra továbbra is szükség van.

::: info

Kipróbálhatod, hogy működik-e a mágnes úgy, hogy az (A), (B), (X), (Y) gombok környékére teszed, miközben a konzol be van kapcsolva, így látod, hogy előidézi-e az alvó állapotot. Ha sikerült, mindkét képernyő elsötétül, és úgy is marad, amíg a mágnest a helyén tartod.

:::

Vedd figyelembe, hogy a flashkártya nem lesz használható az eredeti rendeltetése szerint addig, amíg az ntrboot exploit telepítve van rá. (Kivételt képez az Acekard 2i, ami működőképes marad _kizárólag NDS-eken, és azokon a 3DS-eken, melyekre egyedi firmware van telepítve_.) Ez azt jelenti, hogy a legtöbb flashkártya még csak a HOME Menüben sem jelenik majd meg. Az ntrboot flashelési útmutatójának végén van néhány opcionális lépés arról, hogyan töröld azt a flashkártyádról, ha már végeztél.

::: danger

Vedd figyelembe, hogy néhány ritka esetben lehetséges, hogy a flashelési folyamat során **brickelődjön** néhány hamisított flashkártya és végleg használhatatlanná váljon. Ez elég valószínűtlen, azonban éppen emiatt csak eredeti flashkártyákat támogatunk. Hogy csökkentsd a kockázatát a hamisított kártya megvásárlásának, javasoljuk, hogy egy megbízható oldalról vásárold azt (mint például az [NDS Card](https://www.nds-card.com/)).

:::

___

## Methods

___

### Ntrboot flashelése (egy 3DS rendszer)

Ehhez a módszerhez mindössze egy gyári állapotú 3DS-re és egy kompatibilis flashkártyára van szükséged. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt a 3DS-eden. Ez azt jelenti, hogy a flashkártyádnak támogatnia kell `.nds` fájlok futtatását a 3DS-ed verzióján. További információkért lásd a flashkártyák táblázatát.

::: tip

Tovább az [ntrboot flashelése (egy 3DS)](flashing-ntrboot-\(3ds-single-system\)) oldalra

:::

___

### Ntrboot flashelése (több 3DS rendszer)

Ehhez a módszerhez szükséged lesz átmenetileg egy második 3DS-családból származó konzolra, amin már telepítve van a boot9strap. Viszont egyik 3DS verziójának sem szükséges támogatnia a flashkártyádat.

::: tip

Tovább az [ntrboot flashelése (több 3DS)](flashing-ntrboot-\(3ds-multi-system\)) oldalra

:::

___

### Ntrboot flashelése (NDS)

Ehhez a módszerhez szükséged lesz átmenetileg egy Nintendo DS vagy egy Nintendo DS Lite készülékre, ami kompatibilis a flashkártyáddal. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt az NDS-eden.

::: tip

Tovább az [ntrboot flashelése (NDS)](flashing-ntrboot-\(nds\)) oldalra

:::

___

### Ntrboot flashelése (DSi)

Ehhez a módszerhez szükséged lesz átmenetileg egy Nintendo DSi készülékre, ami kompatibilis a flashkártyáddal. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt a DSi-den. Ez azt jelenti, hogy a flashkártyádnak támogatnia kell `.nds` fájlok futtatását azon a verzión, amin a DSi-d áll. További információkért lásd a flashkártyák táblázatát.

::: tip

Tovább az [ntrboot flashelése (DSi)](flashing-ntrboot-\(dsi\)) oldalra

:::
