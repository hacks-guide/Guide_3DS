---
title: "CTRTransfer"
---

{% include toc title="Tartalomjegyzék" %}

### Fontos tudnivalók

Ebben a kiegészítő részben a 11.15.0-s CTRTransfer képfájlt fogjuk a konzolodra telepíteni.

Ez az oldal feltételezi, hogy van Luma3DS és boot9strap telepítve. Ha ezt a weboldalt végig követted (Telepítés véglegesítése), akkor van Luma3DS-ed és boot9strap-ed.
{: .notice--info}

A folyamat részeként a rendszer beállításaid visszaállításra kerülnek alapértékekre. Ez olyan dolgokat jelent, mint a felhasználónév, ország és nyelv. **A telepített játékok és mentés adatuk nem érintett.**
{: .notice--warning}

### Amire szükséged lesz

* A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)
* Az [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) legfrissebb kiadása (közvetlen letöltés)
* A [faketik](https://github.com/ihaveamac/faketik/releases/latest) legújabb kiadása *(a`.3dsx` fájl)*
* Egy torrent kliens, mint például a [qBittorrent](https://www.qbittorrent.org/download.php) vagy a [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * Ha már van torrent kliensed, nem szükséges letöltened egy újat
* A konzolodhoz és régiódhoz tartozó 11.15.0-s CTRTransfer képfájl:
{% include_relative include/ctrtransfer-images.txt %}

### Lépések

#### I. rész - Előkészületek

{% include_relative include/ctrtransfer-prep.txt %}

#### II. rész - NAND mentés

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
{% include_relative include/nand-backup.txt %}

#### III. rész - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### IV. rész - FBI elindítása

{% include_relative include/launch-hbl-dlp.txt %}

#### V. rész - Ticketek újratelepítése

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### VI. rész - A terület specifikus problémák javítása

{% include_relative include/ctrnand-datayeet.txt %}

___

### Tovább a [telepítés véglegesítésére](finalizing-setup)
{: .notice--primary}
