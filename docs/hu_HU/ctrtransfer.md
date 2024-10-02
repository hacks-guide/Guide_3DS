# CTRTransfer

## Kötelező olvasmány

Ebben a kiegészítő részben a 11.15.0-s CTRTransfer képfájlt fogjuk a konzolodra telepíteni.

::: info

Ez az oldal feltételezi, hogy van Luma3DS és boot9strap telepítve. Ha ezt a weboldalt végig követted (Telepítés véglegesítése), akkor van Luma3DS-ed és boot9strap-ed.

:::

::: warning

A folyamat részeként a rendszer beállításaid visszaállításra kerülnek alapértékekre. Ez olyan dolgokat jelent, mint a felhasználónév, ország és nyelv. **A telepített játékok és mentés adatuk nem érintett.**

:::

## Amire szükséged lesz

- A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)
- The latest release of [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (direct download)
- A [faketik](https://github.com/ihaveamac/faketik/releases/latest) legújabb kiadása _(a`.3dsx` fájl)_
- The latest release of [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (right click, save link as)
- A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - If you already have a torrent client, you do not need to download a new one
- The 11.15.0 CTRTransfer image for your console and region:

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

Continue to [Finalizing Setup](finalizing-setup)

:::
