# ntrboot

## Kötelező olvasmány

ntrboot refers to the ability for all 3DS family consoles to boot into a special, recovery-mode cartridge to perform actions before any other part of the operating system loads. It is commonly used for data recovery and unbricking, but can also be used to install boot9strap, a custom firmware loader.

To use ntrboot, a compatible cartridge (normally a 'flashcart') is required. Many flashcarts from the NDS or DSi era can be repurposed for ntrboot, while new ones can be purchased for roughly $20 USD.

No matter how you run ntrboot, you will need a small **magnet** that is strong enough to to put the console into sleep mode (except on the Old 2DS, which uses a sleep switch). Kipróbálhatod, hogy működik-e a mágnes úgy, hogy az (A), (B), (X), (Y) gombok környékére teszed, miközben a konzol be van kapcsolva, így látod, hogy előidézi-e az alvó állapotot. Ha sikerült, mindkét képernyő elsötétül, és úgy is marad, amíg a mágnest a helyén tartod.

## Recommended for new purchases

If you don't already have a flashcart, or if your flashcart is incompatible with ntrboot, it is recommended to purchase one of these.

Cartridges may be available for a cheaper price through a local distributor or on AliExpress. For more information, see the [NTRBoot Quick Start Guide](https://www.flashcarts.net/ntrboot-ds-carts?tab=flashable#flashcarts) (in English only).

| Flashcart                                                      |                  Price | Notes                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------- | ---------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**DSpico**](https://www.nds-card.com/ProShow.asp?ProID=658)   | $25.99 | **Must be flashed using a computer** (using a microUSB or USB-C cable, depending on the cartridge). This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                       |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575) | $24.99 | **ntrboot-tal gyárilag flashelve** (külső kapcsolóval váltogatható az ntrboot ("3DS") és az NDS mód); ne flasheld kézileg ntrboot-tal. This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware. |

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

Míg az ntrboot exploit működése nem függ a rendszerverziótól, az ntrboot flashelő (ami az exploitot a kártyára telepíti) igen. Ez azt jelenti, hogy attól függően, hogy a flashkártyád milyen verziókat és konzolokat támogat, csak bizonyos módszerek lehetnek elérhetőek számodra.

Vedd figyelembe, hogy a "Time Bomb"-bal rendelkező kártyák nem lesznek képesek `.nds` fájlok futtatására, ha észlelik, hogy a rendszeridő meghaladja a flashkártya firmware-je által meghatározott értéket. Ennek megkerülésére az egyik módszer a rendszeridő korábbi dátumra állítása.

| Flashcart                                                                                                                    |                  Price |                                "Időbomba"?                                |                                  3DS verziók?                                 |                            DSi verziók?                           | Megjegyzések                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :-----------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=574)         |        Nincs készleten |                     2024 szeptember 3.                    |                                      MIND                                     |                                MIND                               | **Előflashelt ntrboot-tal érkezik**; visszaflashelhető NDS flashkártyára.                                                                                                                   |
| [**DSTT** (ndstt.com)](https://www.nds-card.com/ProShow.asp?ProID=157)                    | $19.99 |                                    Nem                                    |                                     Nincs                                     |                               Nincs                               | Csak [bizonyos flash chipek](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) kompatibilisek az ntrboot-tal.                                                             |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=146)     | $20.99 | 1.85b: 2024 szeptember 3. |                                      MIND                                     |                                MIND                               |                                                                                                                                                                                                             |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=490) | $22.99 |  4.0b: 2024 szeptember 3. |                                      MIND                                     |                                MIND                               | Csak a 2014 vagy későbbi r4isdhc **.com** kártyák, amik kompatibilisek.                                                                                                     |
| **Ace3DS Plus**                                                                                                              |                        |                                    Nem                                    |                                      MIND                                     |                                MIND                               | This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                                                              |
| **Acekard 2i**                                                                                                               |                        |                                    Nem                                    |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                             |
| **Gateway Blue**                                                                                                             |                        |                                    Nem                                    | 4.1.0 - 4.5.0 |                                MIND                               |                                                                                                                                                                                                             |
| **Infinity 3 R4i** (r4infinity.com)                                                       |                        |                                    Nem                                    |                                      MIND                                     |                                MIND                               |                                                                                                                                                                                                             |
| **R4 3D Revolution**                                                                                                         |                        |                                    Nem                                    |                                     Nincs                                     |                               Nincs                               |                                                                                                                                                                                                             |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                          |                        |                                    Nem                                    |                                      MIND                                     |                                MIND                               | **ntrboot-tal előre flashelve** ([belső kapcsolóval váltogatható az ntrboot és az NDS mód](/images/screenshots/r4i-gold-3ds-plus.png)); ne flasheld kézileg ntrboot-tal. |
| **R4i Gold 3DS** (r4ids.cn)                                                               |                        |                                    Nem                                    |                                      MIND                                     |                                MIND                               | Minden kártya kompatiblis.                                                                                                                                                                  |
| **R4i Ultra** (r4ultra.com)                                                               |                        |                                    Nem                                    |       <= 4.3.0       |                                MIND                               |                                                                                                                                                                                                             |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                          |                        |                                 Ismeretlen                                |                                      MIND                                     |                                MIND                               | Csak a kék cimkés Deluxe Edition kompatibilis.                                                                                                                                              |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                   |                        |  4.0b: 2024 szeptember 3. |                                      MIND                                     |                                MIND                               | Csak a 2014 vagy későbbi r4isdhc **.com** kártyák, amik kompatibilisek.                                                                                                     |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                  |                        |  4.0b: 2024 szeptember 3. |                                      MIND                                     |                                MIND                               | Csak a 2014 vagy későbbi r4isdhc **.com** kártyák, amik kompatibilisek.                                                                                                     |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Bizonyosodj meg róla, hogy a flashkártyád képes az `.nds` fájlok futtatására a konzolodon, mielőtt továbbmész. Néhány flashkártya esetében szükség lehet a firmware, vagy "kernel" fájlok SD kártyára másolására. Részletekért lásd az adott flashkártya használati útmutatóját.

A flashelés módjától függetlenül, ezen exploit használatakor szükséged lesz egy apró mágnesre, ha a cél konzol összecsukható kivitelű (a 3DS családba tartozó összes készülék ilyen, kivéve az Old 2DS-t, ami rendelkezik alvó mód kapcsolóval). Ennek az az oka, hogy az exploithoz alvó módba kell lépni, azonban a gombokra továbbra is szükség van.

Vedd figyelembe, hogy a flashkártya nem lesz használható az eredeti rendeltetése szerint addig, amíg az ntrboot exploit telepítve van rá. (Kivételt képez az Acekard 2i, ami működőképes marad _kizárólag NDS-eken, és azokon a 3DS-eken, melyekre egyedi firmware van telepítve_.) Ez azt jelenti, hogy a legtöbb flashkártya még csak a HOME Menüben sem jelenik majd meg. Az ntrboot flashelési útmutatójának végén van néhány opcionális lépés arról, hogyan töröld azt a flashkártyádról, ha már végeztél.

::: danger

Vedd figyelembe, hogy néhány ritka esetben lehetséges, hogy a flashelési folyamat során **brickelődjön** néhány hamisított flashkártya és végleg használhatatlanná váljon. Ez elég valószínűtlen, azonban éppen emiatt csak eredeti flashkártyákat támogatunk. Hogy csökkentsd a kockázatát a hamisított kártya megvásárlásának, javasoljuk, hogy egy megbízható oldalról vásárold azt (mint például az [NDS Card](https://www.nds-card.com/)).

:::

### Ntrboot flashelése (egy 3DS rendszer)

Ehhez a módszerhez mindössze egy gyári állapotú 3DS-re és egy kompatibilis flashkártyára van szükséged. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt a 3DS-eden. Ez azt jelenti, hogy a flashkártyádnak támogatnia kell `.nds` fájlok futtatását a 3DS-ed verzióján. További információkért lásd a flashkártyák táblázatát.

::: tip

Tovább az [ntrboot flashelése (egy 3DS)](flashing-ntrboot-(3ds-single-system)) oldalra

:::

___

### Ntrboot flashelése (több 3DS rendszer)

Ehhez a módszerhez szükséged lesz átmenetileg egy második 3DS-családból származó konzolra, amin már telepítve van a boot9strap. Viszont egyik 3DS verziójának sem szükséges támogatnia a flashkártyádat.

::: tip

Tovább az [ntrboot flashelése (több 3DS)](flashing-ntrboot-(3ds-multi-system)) oldalra

:::

___

### Ntrboot flashelése (NDS)

Ehhez a módszerhez szükséged lesz átmenetileg egy Nintendo DS vagy egy Nintendo DS Lite készülékre, ami kompatibilis a flashkártyáddal. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt az NDS-eden.

::: tip

Tovább az [ntrboot flashelése (NDS)](flashing-ntrboot-(nds)) oldalra

:::

___

### Ntrboot flashelése (DSi)

Ehhez a módszerhez szükséged lesz átmenetileg egy Nintendo DSi készülékre, ami kompatibilis a flashkártyáddal. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt a DSi-den. Ez azt jelenti, hogy a flashkártyádnak támogatnia kell `.nds` fájlok futtatását azon a verzión, amin a DSi-d áll. További információkért lásd a flashkártyák táblázatát.

::: tip

Tovább az [ntrboot flashelése (DSi)](flashing-ntrboot-(dsi)) oldalra

:::
