# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. Flash-korttisi ei tarvitse tukea kummankaan 3DS:n versiota.

::: danger

Huomaa, että joissain harvinaisissa yhteensattumissa asennusprosessi saattaa **vioittaa** jäljitelmä-flash-korttia ja tehdä siitä pysyvästi käyttökelvottoman. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

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

1. Sammuta **lähde-3DS**
2. Aseta **lähde-3DS**:n SD-kortti tietokoneeseesi
3. Luo `ntrboot`-niminen kansio SD-korttisi juureen
4. Kopioi ntr-`.zip`-pakkauksesta `boot9strap_ntr.firm` ja `boot9strap_ntr.firm.sha` SD-korttisi `/ntrboot/`-kansioon
5. Kopioi `ntrboot_flasher.firm` **lähde-3DS**:n SD-kortin `/luma/payloads`-kansioon
6. Aseta **lähde-3DS**:n SD-kortti takaisin konsoliinsa
7. Aseta ntrboot-yhteensopiva DS-/DSi-flash-korttisi **lähde-3DS**:ään

### Section II - Flashing ntrboot

1. Avaa **lähde-3DS**:llä Luma3DS:n ketjulataaja pitämällä (START)-painiketta pohjassa konsolin käynnistyessä
2. Valitse "ntrboot_flasher"
3. Lue varoitus punaisella ruudulla
4. Paina (A):ta jatkaaksesi
5. Valitse flash-korttisi
    - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Valitse "Dump Flash"
7. Odota, kunnes toiminto on suoritettu
8. Paina (A):ta jatkaaksesi
9. Paina (A):tä palataksesi päävalikkoon
10. Valitse "Inject Ntrboot"
11. Paina (A):ta aloittaaksesi kuluttajakonsolille suunnatun asennuksen
12. Odota, kunnes toiminto on suoritettu
13. Paina (A):tä palataksesi päävalikkoon
14. Paina (B):tä sammuttaaksesi **lähde-3DS**:n

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
