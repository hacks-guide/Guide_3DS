# Régió módosítás

## Kötelező olvasmány

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

- Nem fogod tudni használni az NNID azonosítód (ha van ilyened). Az NNID-k ahhoz a régióhoz kötöttek, ahol létre lettek hozva.
- Elképzelhető, hogy nem fogod elérni az eShop-ot, még akkor sem ha [törlöd az eShop fiókod](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) előtte. Ez azért van, mert néhány cím linkelt marad a 3DS-hez, még akkor is ha a fiók törlésre kerül (különösen New 3DS-en).
    - Ez továbbra is releváns; bár az eShop-ban már nem lehet vásárolni, a játék frissítések továbbra is letölthetők. A frissítések tartalmazhatnak extra tartalmat vagy hibajavításokat.
    - Ez a logika kiterjed a rendszer átvitelekre, azaz nem fogsz tudni rendszer átvitelt végre hajtani egy USA 3DS-ről egy régió-cserélt JPN-2-USA 3DS-re.
    - A Pokémon Bank-nak szintén működő eShop hozzáférésre van szüksége.
    - Ahogy korábban elmondásra került, a rendszerátvitel és játék frissítése régió zároltak (pl. a japán eShop csak japán játék frissítéseket tartalmaz).
- **Nem fogod tudni eltávolítani az egyedi firmware-t a konzolod brickelése nélkül!** Ha szeretnéd eltávolítani az egyedi firmware-t a jövőben, vissza **KELL** állítanod a NAND mentésed, amit a régió módosítás előtt készítettél.

:::

## Amire szükséged lesz

- A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)
- Az [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) legfrissebb kiadása (közvetlen letöltés)
- A [faketik](https://github.com/ihaveamac/faketik/releases/latest) legújabb kiadása _(a`.3dsx` fájl)_
- Az [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) legfrissebb kiadása (jobb kattintás, Link mentése másként...)
- - A 11.15.0 CTRTransfer képfájlok közül a konzolod típusának és a régiónak, amire módosítani szeretnél megfelelő verziója (pl. Töltsd le a "New 3DS or 2DS - USA" fájlt, ha vagy egy New 3DS-ed és szeretnéd a régiódat USA-ra módosítani.)
        ::: warning

Egy torrent kliens használata, mint például a [qBittorrent](https://www.qbittorrent.org/download) vagy a [Deluge](https://deluge-torrent.org/download/) szükséges a CTRTransfer képfájlok letöltéséhez.

:::

<!--@include: ./_include/ctrtransfer-images.md -->

## Lépések

### I. rész - Előkészületek

<!--@include: ./_include/ctrtransfer-prep.md -->

### II. rész - NAND mentés

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et

<!--@include: ./_include/nand-backup.md -->

### III. rész - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### IV. rész - FBI elindítása

<!--@include: ./_include/launch-hbl-dlp.md -->

### V. rész - Ticketek újratelepítése

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### VI. rész - A terület specifikus problémák javítása

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

A 3DS-ed régiója sikeresen módosítva!

:::
