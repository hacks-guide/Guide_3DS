---
title: "ntrboot flashelése (egy 3DS)"
---

{% include toc title="Tartalomjegyzék" %}

### Fontos tudnivalók

Mielőtt elkezdenénk, bizonyosodj meg róla, hogy mindent elolvastál az [ntrboot](ntrboot)-tal kapcsolatban

Ehhez a módszerhez mindössze egy gyári állapotú 3DS-re és egy kompatibilis flashkártyára van szükséged. Ez a módszer a flashkártyát használja, hogy futtassa az ntrboot flashelő `.nds` fájlt a 3DS-eden. Ez azt jelenti, hogy a flashkártyádnak támogatnia kell `.nds` fájlok futtatását a 3DS-ed verzióján. További információkért lásd a táblázatot az [ntrboot](ntrboot) oldalon.

Vedd figyelembe, hogy néhány ritka esetben lehetséges, hogy a flashelési folyamat során **brickelődjön** néhány hamisított flashkártya és végleg használhatatlanná váljon. Ez elég valószínűtlen, azonban éppen emiatt csak eredeti flashkártyákat támogatunk. Hogy csökkentsd a kockázatát a hamisított kártya megvásárlásának, javasoljuk, hogy egy megbízható oldalról vásárold azt (mint például az [NDS Card](https://www.nds-card.com/)).
{: .notice--danger}

### Amire szükséged lesz

* Olyan flashkártya, ami támogatja az ntrboot-ot
* A [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) v1.3 verziója (közvetlen letöltés)
* A [ntrboot_flasher_nds] legújabb kiadása (https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

### Lépések

#### I. rész - Előkészületek

1. Kapcsold ki a konzolod
1. Helyezd a flashkártyád SD kártyáját a számítógépbe
1. Hozz létre egy mappát `ntrboot` néven a flashkártyád SD kártyájának gyökerében
1. Másold át a `boot9strap_ntr.firm` fájlt a boot9strap ntr `.zip` fájlból a flash kártyád SD kártyájának `/ntrboot/` mappájába
1. Másold az `ntrboot_flasher_nds.nds` fájlt a flashkártyád SD kártyájára
1. Helyezd vissza a flashkártyád SD kártyáját a flashkártyádba
1. Helyezd be az ntrboot kompatibilis DS / DSi flashkártyádat a konzolodba

#### II. rész - ntrboot flashelése

1. Indítsd el az `ntrboot_flasher_nds.nds` fájlt a konzolodon a flashkártyád segítségével
1. Nyomd meg az (A) gombot a folytatáshoz
1. Használd a (Fel) és (Le) gombokat a flashkártyád kiválasztásához
1. Nyomd meg az (A) gombot a folytatáshoz
1. Válaszd a "Dump flash" opciót, hogy biztonsági másolatot készíts a flashkártyád memóriájáról
1. Írd be a kombinációt a megerősítéshez
1. Nyomd meg az (A) gombot a folytatáshoz
1. Használd a (Fel) és (Le) gombokat a flashkártyád kiválasztásához
1. Nyomd meg az (A) gombot a folytatáshoz
1. Válaszd az "Inject FIRM" opciót, hogy a flashkártyádra telepítsd a boot9strap-et
1. Írd be a kombinációt a megerősítéshez
1. Nyomd meg az (A) gombot a folytatáshoz
1. Kapcsold ki a konzolod

___

### Továbblépés a [Boot9strap telepítésére (ntrboot)](installing-boot9strap-(ntrboot))
{: .notice--primary}
