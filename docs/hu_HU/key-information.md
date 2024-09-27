# Alapvető információk

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

Ha ez az első alkalom, hogy moddolsz egy 3DS-t (vagy nem vagy ismerős a technológiával) akkor folytasd az olvasást! Egyébként, ha rendelkezel tapasztalattal és tudod, hogy mit csinálsz, folytasd a [Kezdeti lépésekkel](get-started).

:::

Ez az oldal néhány alap számitástechnikai információt és 3DS specifikus információkat tartalmaz, amiket ismerned kell, mielőtt követnéd ezt az útmutatót.

Minden szekció összezárt alapértelmezésként. Kattints rá vagy érintsd meg a nevét a szekciónak, hogy kinyisd.

## Things you should know about the 3DS

:::: details 3DS/2DS compatibility

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Ez az útmutató minden kereskedelmi konzollal működik a Nintendo 3DS konzol családból (beleértve a 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, és a New 2DS XL/LL-t), függetlenül a régiótól és a firmware-től.

::::

:::: details Computer compatibility

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

A legtöbb esetben követheted ezt az útmutatót egészen addig, amíg képes vagy letölteni fájlokat az internetről és SD kártyára másolni. A számitógépedtől/telefonodtól/elektronikus eszközödtől függően szükséged lehet egy USB-SD kárya adapterre, ami lehetővé teszi a számítógéped számára, hogy olvassa az SD kártyádat.

::::

:::: details SD card location, type, and capacity

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
::: details Potential risks (Disclaimer)

A konzolod moddolásával, van egy nagyon kicsi (de nem nulla) esélye, hogy a konzol brickelődik (nem működővé válik). _**A rossz helyre rakott fájlok NEM brickelik a konzolodat**_, de szándékosan kihagyott lépések elképzelhető, hogy igen.

Röviden: A konzolod moddolása biztonságos, de a _**te felelősséged**_ ha valami elromlik.

:::
::::

## Things you need to do on your computer

::: warning

Az útmutató követése nem kell, hogy adatvesztéshez vezessen, de SD kártya hiba bármikor előfordulhat. Készítsd biztonsági mentést az SD kártyádról (különösen a `Nintendo 3DS` mappáról), ha tartalmaz fontos adatot.

:::

:::: details File placement terminology (e.g. "root of SD", "/luma/")

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

Amikor fájlokat másolunk az SD kártyára, fontos, hogy jó helyre másoljuk, - egyébként a konzol nem fogja észrevenni a fájl és az exploit vagy a szoftver amit használni szeretnél nem fog működni. A fogalom, amit sűrűn fogsz látni ebben az útmutatóban az **SD kártya gyökere**, ami azt jelenti, amikor nem vagy benne semmilyen mappában az SD kártyán. A könyvtárat ami megjelenik először, amikor megnyitod az SD kártyád a számítógépeden, hívják 'gyökér'-nek.

Látszhat még mappa neveket így jelölve: `/mappa/`. A használt perjelek könyvtárakat jelentenek, amik nem a részei a mappa nevének. Például, `/folder1/folder2/` a `folder2` mappára hivatkozik a `folder1` mappában:

::: info

![](/images/screenshots/onboarding/folders.png)

:::

**Kacsacsőrök** (\< és \>) általában arra használtak, hogy rendszer-specifikus azonosítót tartalmazzanak. Például, ha az útmutató `<ID0>`-t tartalmaz, akkor a rendszer-specifikus azonosítóra hivatozik a `Nintendo 3DS` mappában, nem pedig egy mappára, amit "ID0"-nak hívnak:

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details Downloading files from GitHub

::: info

![](/images/screenshots/onboarding/github.png)

:::

Ebben az útmutatóban másolni fogsz a 3DS-ed SD kártyájára olyan fájlokat, amik letöltésre kerültek a számítógépedre/telefonodra. Ezen fájlok többsége a GitHub-ról jön, ami egy weboldal fejlesztők számára, ahol közzé teszik nyílt forrású fejlesztéseiket. Ha a GitHub-ról töltesz le fájlokat, az a fájlt kell letöltened, ami _nem_ forráskód.

::::

:::: details Opening/extracting files

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Néhány fájl, amit le kell töltened `.zip` formátumú fájlként érkezik, ami arra használt, hogy több fájlt rakjunk egybe.

Ha azt az utasítás kapod, hogy "másolj (egy adott fájlt) a (fájl).zip-ből", az azt jelenti, hogy meg kell nyitnod (vagy "kicsomagolnod") a ZIP fájlt. A ZIP fájlon belül lesz a fájl, amit keresel, amit utána másolni tudsz a megadott útvonalra az SD kártyádra.

A legtöbb operációs rendszeren dupla kattintással ki tudod csomagolni a fájlt. Ha ez nem működik, telepíthetsz egy megbízható kicsomagoló eszközt helyette, mint például a [7-zip](https://7-zip.org/).

::::

:::: details (Windows only) File extensions

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Ha a számítógéped Windows-t futtat, a fájl kiterjesztések előfordulhat, hogy alapértelmezetten elrejtettek, ami nehezebbé teheti azon fájlok megtalálását, amiket keresel. A fájlkiterjesztések megjelenítéséhez kövesd [ezeket a lépéseket](file-extensions-\(windows\)).

::::

## Getting help

Ha problémád van ezen útmutató követésével, többféle módja van, hogy segítséget kapj!

- If you have any questions that haven't been answered on this page, their answers might be in the [Pre-Installation FAQ](faq#pre-installation-faq).
- If you experience an issue while following this guide, you can check the [Troubleshooting](troubleshooting) page for a solution.
- If the resources we've provided here aren't helping, you can get one-on-one support over at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

::: tip

Tovább a [kezdeti lépésekhez](get-started)

:::
