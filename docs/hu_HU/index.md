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
- Installing your physical cartridges for digital use

## What does this guide install?

Az útmutató:

- Install **boot9strap** and **Luma3DS custom firmware** on unmodified retail 3DS/2DS consoles
  - Luma3DS will automatically remove the region lock and allow you to run unsigned software
- Install various pieces of homebrew software, such as a package installer, save file manager, and a homebrew app store
- Make critical system file backups that can help avoid bricks (and recover data in the event of one)

___

::: tip

Continue to [Key Information](key-information)

:::
