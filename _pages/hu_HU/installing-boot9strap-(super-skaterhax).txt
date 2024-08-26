---
title: "Boot9strap telepítése (super-skaterhax)"
---

{% include toc title="Tartalomjegyzék" %}

{% capture technical_info %}
<summary><em>Technikai részletek (opcionális)</em></summary>
A technikai részletei az ezen az oldalon használt exploit-oknak [itt](https://github.com/zoogie/super-skaterhax) találhatók.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Kompatibilitási megjegyzések

A super-skaterhax (ami a Homebrew Launcher indítására használt) kompatibilis a 11.15.0 és a feletti verziós New modellekkel minden régióban.

A megadott lépések csak a New 3DS, New 3DS XL és New 2DS XL típusokra vonatkoznak. Mielőtt folytatnád, kérjük ellenőrizd, hogy a moddolandó konzolod New 3DS, New 3DS XL, vagy New 2DS XL.
{: .notice--warning}

### Amire szükséged lesz

* A [super-skaterhax](https://github.com/zoogie/super-skaterhax/releases) legújabb kiadása (a kiadás`.zip` fájl)
* A [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) legfrisseb verziója (közvetlen letöltés)
* A [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) legfrisseb verziója (közvetlen letöltés)
* A [nimdsphax](https://github.com/luigoalma/nimdsphax/releases/download/v1.0/nimdsphax_v1.0.zip) legfrissebb verziója (közvetlen letöltés)
* A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)

#### I. rész - Előkészületek

Ebben a fejezetben fel fogod másolni a fájlokat, amik a super-skaterhax és a Homebrew Launcher triggereléshez szükségesek.

1. Kapcsold ki a konzolod
1. Helyezd az SD kártyád a számítógépbe
1. Másold át a `boot.firm` és `boot.3dsx` fájlt a Luma3DS `.zip`-ből az SD kártya gyökerébe
    + Az SD kártya gyökere a kezdőkönyvtárt jelenti az SD kártyán, ahol látható a Nintendo 3DS könyvtár, de nem vagyunk benne
1. Másolj mindent át a konzolod régiójának megfelelő mappájából (`arm11code.bin` és `browserhax_hblauncher_ropbin_payload.bin`) a release_new3ds `.zip`-nek az SD kártyád gyökerébe
1. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
1. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
1. Másold át a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád gyökerébe
1. Hozz létre egy mappát `3ds` néven az SD kártyád gyökerében, ha még nem létezik ilyen
    + Ez a mappa tárolja a homebrew applikációkat és adataikat; ez mást mint a `Nintendo 3DS` mappa, amit a konzol automatikusan generál
1. Másold át a `nimdsphax` mappát a nimdsphax `.zip`-ből az SD kártya gyökerében található `3ds` mappába
1. Tedd vissza az SD kártyád a konzoldba
1. Kapcsold be a konzolod

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}


#### II. rész - super-skaterhax

Ebben a fejezetben meg fogod látogatni a browser exploit weboldalt, ami elindítja a Homebrew Launcher-t.

Ha még nem történt meg, biztosítsd, hogy legyen működő Internet kapcsolata a konzolodnak.
{: .notice--info}

{% capture set_date %}
<summary>Ha a rendszer dátumod inkorrekt, ez az exploit nem fog működni.<br>Kérjük kövesd az alábbi lépéseket a helyes rendszer dátum beállításához.</summary>
1. Lépj be a "System Settings"-be a konzolodon
1. Válaszd az "Other Settings"-t
1. Navigálj ide: "Date & Time" -> "Today's date"
1. A fel/le nyilakkal állítsd be a helyes napot, hónapot és évet
1. Nyomj OK-t a jóváhagyáshoz
{% endcapture %}
<details>{{ set_date | markdownify }}</details>
{: .notice--info}

1. A HOME menüben nyomd meg a bal és jobb váll gombokat egyszerre, hogy megnyisd a kamerát
    + Ha nem tudod megnyitni a kamerát, nyisd meg az Internet Browser-t kézzel, és írd be az URL-t e helyett. (`https://zoogie.github.io/web/super/` az EUR/USA/JPN régiókhoz, `https://zoogie.github.io/web/korea` a KOR régióhoz)
1. Nyomd meg a QR kód gombot és olvasd be a következő QR kódok egyikét, ami megfelel a konzol régiódnak, [itt](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
    + Ha tanúsítvány figyelmeztetést kapsz, nyomd meg az (A) gombot a kapcsolat engedélyezéséhez
1. Nyomd meg a (Select) gombot a könyvjelző fül megnyitásához
    + Ha a (Select) gombod nem reagál, akkor érintsd meg a csillag ikont a bal alsó sarkában a képernyőnek
1. Éríntsd meg a "Bookmark this page" feliratot
1. Nyomd meg a (B) gombot egyszer, hogy visszatérj a böngészőhöz
1. Nyomd meg a (START) gombot, hogy megnyisd a helyérzékeny menüt
    + Ha a (Start) gombod nem reagál, akkor érintsd meg 3-vonal menüt a jobb alsó sarkában a képernyőnek
1. Érintsd meg a "Settings"-et
1. Érintsd meg a "Delete Cookies"-t
1. Nyomd meg az (A) gombot a folytatáshoz
1. Nyomj (Home) gombot a HOME Menübe visszatéréshez, majd nyomj azonnal egy (A)-t a böngésző ismételt elindításához
1. Válaszd a "GO GO!" gombot a felső képernyőn
    + Ha bármilyen kérdés előjön, fogadd el mind
    + Ha a konzolod lefagy egy sárga képernyőn, tartsd nyomva a POWER gombot, amíg ki nem kapcsol, és próbáld újra ezt a részt
    + Ha a konzolod lefagy egy piros képernyőn, tartsd nyomva a POWER gombot, amíg ki nem kapcsol, csináld újra a 3. lépést a II. részben, majd próbáld újra ezt a részt
    + Ha a konzolod "Text"-et jelenít meg az alsó képernyőn, akkor Old 3DS-ed van és ez az exploit **nem fog működni az eszközödön**. Ha ez az eset, használd az [MSET9](installing-boot9strap-(mset9))-et helyette
    + Ha más hibát kapsz, próbáld meg 5x, és ha még minden nem megy [kövesd ezt a hibaelhárítási útmutatót](troubleshooting#installing-boot9strap-super-skaterhax)
1. Ekkor a konzolodnak be kell bootolni a Homebrew Launcher-be
1. Indítsd el a nimdsphax-et a homebrew listájáról
1. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
    + Ha a konzolod lefagy egy vörös vagy zöld képernyőn, tartsd nyomva a POWER gombot, amíg ki nem kapcsol, és próbáld újra ezt a részt
    + Ez lehet 5 próbálkozást is igényel

#### III. rész - boot9strap telepítése

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

{% include_relative include/luma3ds-installed-note.txt %}

___

### Tovább a [telepítés véglegesítésére](finalizing-setup)
{: .notice--primary}
