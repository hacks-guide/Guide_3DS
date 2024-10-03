# Alapvető információk

::: info

Ha ez az első alkalom, hogy moddolsz egy 3DS-t (vagy nem vagy ismerős a technológiával) akkor folytasd az olvasást! Egyébként, ha rendelkezel tapasztalattal és tudod, hogy mit csinálsz, folytasd a [Kezdeti lépésekkel](get-started).

:::

Ez az oldal néhány alap számitástechnikai információt és 3DS specifikus információkat tartalmaz, amiket ismerned kell, mielőtt követnéd ezt az útmutatót.

Minden szekció összezárt alapértelmezésként. Kattints rá vagy érintsd meg a nevét a szekciónak, hogy kinyisd.

## Dolgok amit érdemes tudnod a 3DS-ről

:::: details 3DS/2DS kompatibilitás részletek

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Ez az útmutató minden kereskedelmi konzollal működik a Nintendo 3DS konzol családból (beleértve a 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, és a New 2DS XL/LL-t), függetlenül a régiótól és a firmware-től.

::::

:::: details Számítógép kompatibilitás részletek

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

A legtöbb esetben követheted ezt az útmutatót egészen addig, amíg képes vagy letölteni fájlokat az internetről és SD kártyára másolni. A számitógépedtől/telefonodtól/elektronikus eszközödtől függően szükséged lehet egy USB-SD kárya adapterre, ami lehetővé teszi a számítógéped számára, hogy olvassa az SD kártyádat.

::::

:::: details SD kártya helye, típusa és kapacitása részletek

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

Az SD kártyá slot helye és az SD kártya típusa amit elfogad a 3DS modelledtől függ. További infromációk találhatók erről a [Nintendo hivatalos támogatási oldalán](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

A 3DS bármilyen kapacitású SD kártyát tud olvasni (még akkor is, ha nagyobb, mint 32GB), de a kártyának FAT32-re kell formatálva lennie (**nem** exFAT vagy NTFS). A következő eszközöket használhatod az SD kártyád formázására, az operációs rendszeredtől függően: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). **128GB**-nál nagyobb SD kártyák nem javasoltak az ismert problémák miatt az egyedi témákkal és a GBA grafikával.

::: warning

Ahhoz, hogy követhesd ezt az útmutatót szükséged van egy legalább **2GB** kapacitású SD kártyára.

:::

::: info

Ha szeretnéd, leellenőrizheted az SD kártyádat valamelyik programmal az alábbiak közül: [H2testw (Windows)](h2testw-\(windows\)), [F3 (Linux)](f3-\(linux\)), vagy [F3XSwift (Mac)](f3xswift-\(mac\))

:::

::::

:::: warning

:::details Potencionális kockázatok (Nyilatkozat)

A konzolod moddolásával, van egy nagyon kicsi (de nem nulla) esélye, hogy a konzol brickelődik (nem működővé válik). _**A rossz helyre rakott fájlok NEM brickelik a konzolodat**_, de szándékosan kihagyott lépések elképzelhető, hogy igen.

Röviden: A konzolod moddolása biztonságos, de a _**te felelősséged**_ ha valami elromlik.

:::

::::

## Dolgok, amiket a számítógépeden kell csinálnod

::: warning

Az útmutató követése nem kell, hogy adatvesztéshez vezessen, de SD kártya hiba bármikor előfordulhat. Készíts biztonsági mentést az SD kártyádról (különösen a `Nintendo 3DS` mappáról), ha tartalmaz fontos adatot.

:::

:::: details Fájl elhelyezés terminológia (pl. "az SD gyökere", "/luma/")

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

Amikor fájlokat másolunk az SD kártyára, fontos, hogy jó helyre másoljuk, - egyébként a konzol nem fogja észrevenni a fájl és az exploit vagy a szoftver amit használni szeretnél nem fog működni. A fogalom, amit sűrűn fogsz látni ebben az útmutatóban az **SD kártya gyökere**, ami azt jelenti, amikor nem vagy benne semmilyen mappában az SD kártyán. A könyvtárat ami megjelenik először, amikor megnyitod az SD kártyád a számítógépeden, hívják 'gyökér'-nek.

Láthatsz még mappa neveket így jelölve: `/mappa/`. A használt perjelek könyvtárakat jelentenek, amik nem a részei a mappa nevének. Például, `/folder1/folder2/` a `folder2` mappára hivatkozik a `folder1` mappában:

::: info

![](/images/screenshots/onboarding/folders.png)

:::

**Kacsacsőrök** (\< és \>) általában arra használtak, hogy rendszer-specifikus azonosítót tartalmazzanak. Például, ha az útmutató `<ID0>`-t tartalmaz, akkor a rendszer-specifikus azonosítóra hivatozik a `Nintendo 3DS` mappában, nem pedig egy mappára, amit "ID0"-nak hívnak:

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details Fájlok letöltése a GitHub-ról

::: info

![](/images/screenshots/onboarding/github.png)

:::

Ebben az útmutatóban másolni fogsz a 3DS-ed SD kártyájára olyan fájlokat, amik letöltésre kerültek a számítógépedre/telefonodra. Ezen fájlok többsége a GitHub-ról jön, ami egy weboldal fejlesztők számára, ahol közzé teszik nyílt forrású fejlesztéseiket. Ha a GitHub-ról töltesz le fájlokat, az a fájlt kell letöltened, ami _nem_ forráskód.

::::

:::: details Fájlok megnyitása/kicsomagolása

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Néhány fájl, amit le kell töltened `.zip` formátumú fájlként érkezik, ami arra használt, hogy több fájlt rakjunk egybe.

Ha azt az utasítás kapod, hogy "másolj (egy adott fájlt) a (fájl).zip-ből", az azt jelenti, hogy meg kell nyitnod (vagy "kicsomagolnod") a ZIP fájlt. A ZIP fájlon belül lesz a fájl, amit keresel, amit utána másolni tudsz a megadott útvonalra az SD kártyádra.

A legtöbb operációs rendszeren dupla kattintással ki tudod csomagolni a fájlt. Ha ez nem működik, telepíthetsz egy megbízható kicsomagoló eszközt helyette, mint például a [7-zip](https://7-zip.org/).

::::

:::: details (csak Windows) Fájl kiterjesztések

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Ha a számítógéped Windows-t futtat, a fájl kiterjesztések előfordulhat, hogy alapértelmezetten elrejtettek, ami nehezebbé teheti azon fájlok megtalálását, amiket keresel. A fájlkiterjesztések megjelenítéséhez kövesd [ezeket a lépéseket](file-extensions-\(windows\)).

::::

## Segítség kérése

Ha problémád van ezen útmutató követésével, többféle módja van, hogy segítséget kapj!

- Ha olyan kérdésed van, amit nem válaszolt meg az az oldal, akkor a válaszaid lehet, hogy a [Telepítés előtti gyakran ismételt kérdések](faq#pre-installation-faq) oldalon találhatók.
- Ha hibát kaptál a útmutató követése közben, ránézhetsz a [Hibaelhárítás](troubleshooting) oldalra a megoldásért.
- Ha az itt található információk nem segítenek egy-egy támogatást kaphatsz a [Nintendo Homebrew Discord csatornán](https://discord.gg/MWxPgEp).

::: tip

Tovább a [kezdeti lépésekhez](get-started)

:::
