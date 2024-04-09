---
layout: splash
title: "Útmutató 3DS hackeléshez" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Kezdeti lépések"
  cta_url: "key-information"
  caption:
excerpt: "Egy teljes útmutató 3DS (és 2DS) egyedi firmware-hez, <br /> a gyári állapottól boot9strap-ig.<br />"
---

Alaposan olvasd végig az összes bevezető oldalt (beleértve ezt is) mielőtt bármibe belekezdenél.
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## Mi az a Custom Firmware?

A **Custom firmware** ("CFW") egy teljes szoftver módosítása a 3DS-ednek, ami a számítógéped "rendszergazdai hozzáféréséhez" hasonlítható. Lehetővé teszi, hog bármit csinál amire a 3DS fizikailag képes, a helyett, hogy korlátozva lennél arra amit a Nintendo enged meg számodra.

A custom firmware gyakori felhasználásai a következők:

* Homebrew szoftver és játékok futtatásához, amik a Nintendo 3DS-re készültek vagy portoltak
* A régió korlátozás megkerülése, lehetővé téve más régiós játékok futtatását
* HOME Menü egyedivé tétel, a közösség által készített [témákkal és jelvényekkel](https://themeplaza.art)
* Játékok módosítása ("ROM hackek") a [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher))-en keresztül
* Játékmentések szerkesztése, biztonsági mentése és visszaállítása
* Régebbi konzolok emulációja, valamint natív DS és GBA játék futtatás
* Fizikai cartridge-ek telepítése digitális használatra

## Mit fogsz telepíteni ezzel az útmutatóval?

Az útmutató:
+ Telepíti a **boot9strap**-et és **Luma3DS egyedi firmware**-t módosítatlan kereskedelmi 3DS/2DS konzolokra
    + A Luma3DS automatikusan eltávolítja a régió zárat, és lehetővé teszi aláíratlan szoftver futtatását
+ Telepít különböző homebrew szoftvereket, mint például a csomat telepítő, mentés fájl kezelő és egy homebrew app store
+ Kritikus rendszer mentéseket készít, ami segít elkerülni a brickelést (és helyreállítási adatot ment, arra az esetre, ha mégis bekövetkezne egy)

___

### Folytatás az [Alapvető információkkal](key-information)
{: .notice--primary}
