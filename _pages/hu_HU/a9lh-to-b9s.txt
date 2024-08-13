---
title: "A9LH-ről B9S-re"
---

{% include toc title="Tartalomjegyzék" %}

### Fontos tudnivalók

Ez az oldal az arm9loaderhax felhasználóknak készült, hogy frissíthessék a konzolukat boot9strap-re.

A Luma3DS a jövőben csak `.firm` formátumban kerül kiadásra, amely csak a boot9strap-pel és a sighax-szel kompatibilis. Ez azt jelenti, hogy amennyiben továbbra is szeretnéd a Luma3DS frissítéseit megkapni, ezt az útmutatót kell követned, hogy eszközödet naprakésszé tedd.

Ahhoz, hogy kicsomagold az oldalon található `.7z` fájlokat, egy fájl archiváló programra lesz szükséged, mint amilyen a [7-Zip](http://www.7-zip.org/) vagy a [The Unarchiver](https://theunarchiver.com/).

### Amire szükséged lesz

Ahhoz, hogy használhasd a [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) linkeket ezen az oldalon, szükséged lesz egy torrent kliensre, mint például a [qBittorrent](https://www.qbittorrent.org/download.php) vagy a [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

Vedd figyelembe, hogy New 3DS esetében a `secret_sector.bin` fájlra az arm9loaderhax exploit eltávolításához van szükség. Ezért nem kell a gyári állapotú konzolokon a boot9strap telepítéséhez. Ha ezt nem egy New 3DS-en csinálod, akkor nem kell a `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="Ez egy mágneslink. Használj torrent klienst a fájl letölteséhez."></i> - **Csak New 3DS-t használóknak:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
* A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)
* A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) v7.0.5 verziója (közvetlen letöltés)
* A [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) legfrisseb verziója (közvetlen letöltés)
* A [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) legfrisseb verziója (közvetlen letöltés)

### Lépések

#### I. rész - Előkészületek

A most következő lépésekben mindig írd felül az SD kártyán található fájlokat, ha már létezne bármelyik.
{: .notice--info}

1. Kapcsold ki a konzolod
1. Helyezd az SD kártyád a számítógépbe
1. Másold át a `boot.firm` és `boot.3dsx` fájlt a legfrisebb verziószámú Luma3DS `.zip`-ből az SD kártya gyökerébe
    + Az SD kártya gyökere a kezdőkönyvtárt jelenti az SD kártyán, ahol látható a Nintendo 3DS könyvtár, de nem vagyunk benne
1. Másold át az `arm9loaderhax.bin` fájlt a v7.0.5-ös Luma3DS `.7z`-ből az SD kártya gyökerébe
1. Másold át a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
    + Ha a `luma` vagy `payloads` mappa nem létezik, hozd létre őket
    + Törölj ki minden már létező `.bin` payloadot (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, stb.) a `/luma/payloads/` mappából az SD kártyán, mivel ezek nem lesznek kompatibilisek a boot9strap kompatibilis Luma3DS verziókkal
1. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
1. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
1. **Csak New 3DS felhasználóknak:** Másold át a `secret_sector.bin` fájlt az SD kártyádon található `/boot9strap/` mappába

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Tedd vissza az SD kártyád a konzoldba

#### II. rész - boot9strap telepítése

1. Indítsd el a konzolod a (Start) lenyomva tartásával, hogy megjelenjen a SafeB9SInstaller
    + Ha a Luma konfigurációját látod a SafeB9SInstaller helyett, egyszerűen nyomd meg a (Start) gombot, majd állítsd le a 3DS-edet, és próbáld újra
    + Ha ez egy hibát ad, akkor vagy használj egy új SD kártyát vagy formázd a jelenlegit (mentsd el a már létező fájlokat először)
1. Várj, amíg az összes biztonsági ellenőrzés be nem fejeződik
    + Ha egy "OTP Crypto Fail" hibaüzenetet kapsz, akkor töltsd le a következőt: <i class="fa fa-magnet" aria-hidden="true" title="Ez egy mágneslink. Használj torrent klienst a fájl letöltéséhez."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. A konzolodnak a Luma3DS konfigurációs menübe kellett újra-bootolnia
    + A Luma3DS konfigurációs menü a beállítások a Luma3DS egyedi firmverhez. Sok ezek közül a beállítások közül hasznos az egyedivé tételhez vagy a debuggoláshoz
    + Az útmutató céljának megfeleléshez ezen beállítások alapértelmezett állapoton lesznek hagyva
    + Ha fekete képernyőt kapsz, [nézd át ezt a hibaelhárítási útmutatót](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Mentéshez és újraindításhoz nyomd meg a (Start) gombot

___

### Tovább a [telepítés véglegesítésére](finalizing-setup)
{: .notice--primary}
