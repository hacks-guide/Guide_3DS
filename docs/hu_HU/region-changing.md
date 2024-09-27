# Régió módosítás

## Required Reading

Ez egy kiegészítő rész, amelyben régióváltást végzünk a konzolodon. Ezt úgy hajtjuk végre, hogy telepítünk egy olyan 11.15.0-s CTRTransfer képfájlt, ami az általad kívánt régiójú. A képfájl telepítését követően frissítheted a konzolod a szokásos módon a legutolsó firmware-re (11.17.0).

Fontos, hogy tudd, hogy a régióváltás majdnem teljesen felesleges, mivel a Luma3DS támogatja a régiódon kívüli játékokat, illetve a játékonkénti [lokalizáció emulációt](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features) is. Ezen felül, NDS játékok futtatása más, régión kívüli nyelveken is támogatott [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) segítségével. Csak akkor van szükséged régió módosításra, ha az szeretnéd, hogy a rendszer felülete olyan nyelven legyen, ami nem elérhető a konzolod aktuális régiójában.

::: info

Ez az oldal feltételezi, hogy van Luma3DS és boot9strap telepítve. Ha ezt a weboldalt végig követted (Telepítés véglegesítése), akkor van Luma3DS-ed és boot9strap-ed.

:::

::: warning

A folyamat részeként a rendszer beállításaid visszaállításra kerülnek alapértékekre. Ez olyan dolgokat jelent, mint a felhasználónév, ország és nyelv. **A telepített játékok és mentés adatuk nem érintett.**

:::

::: danger

Ha módosítod a régióját a konzolodnak:

- You will not be able to use your NNID (if you have one). Az NNID-k ahhoz a régióhoz kötöttek, ahol létre lettek hozva.
- You may not be able to access the eShop, even if you [delete your eShop account](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) beforehand. Ez azért van, mert néhány cím linkelt marad a 3DS-hez, még akkor is ha a fiók törlésre kerül (különösen New 3DS-en).
  - This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. A frissítések tartalmazhatnak extra tartalmat vagy hibajavításokat.
  - This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
  - Pokémon Bank also requires working eShop access.
  - That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
- **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.

:::

## What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
- The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(the `.3dsx` file)_
- A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - If you already have a torrent client, you do not need to download a new one
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)

<!--@include: ./_include/ctrtransfer-images.md -->

## Instructions

### Section I - Prep Work

<!--@include: ./_include/ctrtransfer-prep.md -->

### Section II - NAND Backup

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et

<!--@include: ./_include/nand-backup.md -->

### Section III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Section IV - Launching FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Section V - Reinstalling Tickets

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Section VI - Fixing locale-related issues

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

A 3DS-ed régiója sikeresen módosítva!

:::
