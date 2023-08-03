---
title: "Ntrbootin asentaminen (yksi 3DS)"
---

{% include toc title="Sisällysluettelo" %}

### Tärkeää tietoa

Varmista ennen jatkamista, että olet lukenut kaikki [ntrbootia koskevat huomautukset](ntrboot).

Tämä menetelmä vaatii vain hakkeroimattoman, vakiolaiteohjelmistolla olevan 3DS-konsolisi sekä yhteensopivan flash-kortin. Tämä menetelmä käyttää flash-korttia ntrbootin asentamiseen `.nds`-tiedoston kautta 3DS:lläsi. Flash-korttisi täytyy siis tukea `.nds`-tiedostojen lataamista 3DS:si versiolla. Tutustu [Ntrboot](ntrboot)-sivun flash-korttitaulukkoon lisätietoja varten.

Huomaa, että joissain harvinaisissa yhteensattumissa asennusprosessi saattaa **vioittaa** jäljitelmä-flash-korttia ja tehdä siitä pysyvästi käyttökelvottoman. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).
{: .notice--danger}

### Tarpeet

* Ntrboot-yhteensopiva flash-korttisi
* The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
* The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

### Ohjeet

#### Vaihe I – Valmistelut

1. Power off your console
1. Aseta flash-korttisi SD-kortti tietokoneeseesi
1. Create a folder named `ntrboot` on the root of your flashcart's SD card
1. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
1. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
1. Aseta SD-kortti takaisin flash-korttiisi
1. Insert your ntrboot compatible DS / DSi flashcart into your console

#### Vaihe II – Ntrbootin asentaminen

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
1. Paina (A):ta jatkaaksesi
1. Käytä ristiohjainta valitaksesi flash-korttisi
1. Paina (A):ta jatkaaksesi
1. Select "Dump flash" to make a backup of your flashcart's memory
1. Input the key combo given to confirm
1. Paina (A):ta jatkaaksesi
1. Käytä ristiohjainta valitaksesi flash-korttisi
1. Paina (A):ta jatkaaksesi
1. Select "Inject FIRM" to install boot9strap to your flashcart
1. Input the key combo given to confirm
1. Paina (A):ta jatkaaksesi
1. Power off your console

___

### Jatka osioon [Boot9strapin asentaminen (ntrboot)](installing-boot9strap-(ntrboot))
{: .notice--primary}
