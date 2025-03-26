---
layout: home
title: 3DS Hackelés útmutató
hero:
  text: 3DS Hackelés útmutató
  tagline: Teljes útmutató 3DS (és 2DS) egyedi firmware-hez, a gyári állapottól boot9strap-ig.
  image:
    src: /images/home-page-feature.jpg
---

::: info

Alaposan olvasd végig az összes bevezető oldalt (beleértve ezt is!) mielőtt folytatnád.

:::

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

## Mi az a Custom Firmware?

A **Custom firmware** ("CFW") egy teljes szoftver módosítása a 3DS-ednek, ami a számítógéped "rendszergazdai hozzáféréséhez" hasonlítható. Lehetővé teszi, hog bármit csinál amire a 3DS fizikailag képes, a helyett, hogy korlátozva lennél arra amit a Nintendo enged meg számodra.

A custom firmware gyakori felhasználásai a következők:

- Homebrew szoftver és játékok futtatásához, amik a Nintendo 3DS-re készültek vagy portoltak
- A régió korlátozás megkerülése, lehetővé téve más régiós játékok futtatását
- HOME Menü egyedivé tétel, a közösség által készített [témákkal és jelvényekkel](https://themeplaza.art)
- Játékok módosítása ("ROM hackek") a [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-\(Only-version-8.0-and-higher\))-en keresztül
- Játékmentések szerkesztése, biztonsági mentése és visszaállítása
- Régebbi konzolok emulációja, valamint natív DS és GBA játék futtatás
- Fizikai cartridge-ek telepítése digitális használatra

## Mit fogsz telepíteni ezzel az útmutatóval?

Az útmutató:

- Telepíti a **boot9strap**-et és **Luma3DS egyedi firmware**-t módosítatlan kereskedelmi 3DS/2DS konzolokra
  - A Luma3DS automatikusan eltávolítja a régió zárat, és lehetővé teszi aláíratlan szoftver futtatását
- Telepít különböző homebrew szoftvereket, mint például a csomag telepítő, mentés fájl kezelő és egy homebrew app store alkalmazást
- Kritikus rendszer mentéseket készít, ami segít elkerülni a brickelést (és helyreállítási adatot ment, arra az esetre, ha mégis bekövetkezne egy)

___

::: tip

Folytatás az [Alapvető információkkal](key-information)

:::
