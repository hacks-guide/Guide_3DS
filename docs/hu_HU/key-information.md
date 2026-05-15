# Alapvető információk

::: info

Ha ez az első alkalom, hogy moddolsz egy 3DS-t (vagy nem vagy ismerős a technológiával) akkor folytasd az olvasást! Egyébként, ha rendelkezel tapasztalattal és tudod, hogy mit csinálsz, folytasd a [Kezdeti lépésekkel](get-started).

:::

Ez az oldal néhány alap számitástechnikai információt és 3DS specifikus információkat tartalmaz, amiket ismerned kell, mielőtt követnéd ezt az útmutatót.

Minden szekció összezárt alapértelmezésként. Kattints rá vagy érintsd meg a nevét a szekciónak, hogy kinyisd.

## Kompatibilitás

:::: details Milyen konzolokkal kompatibilis ez az útmutató?

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Ez az útmutató minden kereskedelmi konzollal működik a Nintendo 3DS konzol családból (beleértve a 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, és a New 2DS XL/LL-t), függetlenül a régiótól és a firmware-től. NEM kompatibilis a DSi család konzoljaival(DSi, DSi XL/LL). A DSi-család konzoljaihoz, tekintsd meg [ezt az útmutatót](https://dsi.cfw.guide) helyette.

::::

:::: details Milyen számítógépre / hardware-re van szükségem ahhoz, hogy végigcsináljam ezt az útmutatót?

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

A legtöbb esetben követheted ezt az útmutatót egészen addig, amíg képes vagy letölteni fájlokat az internetről és SD kártyára másolni. Ez magába foglalja a legtöbb elektronikus eszközt, mint például a Windows, macOS, Linux vagy chromeOS (Chromebooks) operációs rendszert futtató számítógépeket, továbbá telefonokat és tableteket Android vagy iOS rendszerrel. Az elektronikus eszközödtől függően szükséged lehet egy SD kárya adapterre, ami lehetővé teszi, hogy olvassa az SD kártyádat.

::::

:::: details Milyen SD kártyát tud a konzolom használni?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

Az SD kártya slot helye és az SD kártya típusa amit elfogad a 3DS modelledtől függ. További infromációk találhatók erről a [Nintendo hivatalos támogatási oldalán](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card). Ne feledd, hogy a New 3DS és a New 3DS XL konzoloknál szükséged van egy csavarhúzóra (JIS 00) a microSD kártyához hozzáféréshez, mert az a hátlap alatt található.

Az SD/microSD kártyádnak a következő követelményeknek kell megfelelnie:

- **Márka**: Bármilyen ismert márka (SanDisk, Samsung, Kingston, Lexar, PNY, stb.)
  - Óvakodj a fake vagy illegitim SD kártyáktól (pl. Memory SD, PRO PLUS, SanDian, Extreme Pro), főleg azoktól, amit online piactereken vásárolsz, mint például az AliExpress. [Itt](https://www.flashcarts.net/microsd-fakes) találhatsz egy útmutatót a kamu kártyák kiszúrásához. A fake vagy illegitim SD kártyák használata könnyen vezethet a dolgok nem működéséhez és még **adatvesztéshez** is!
- **Kapacitás**: 2 GB és 128 GB között (határokat beleérve)
  - Ezek a kártyák a következőképpen feliratozottak: SD (<=2 GB), SDHC (4 GB-32 GB), vagy SDXC (64 GB+)
  - A 2 GB-nál kisebb kártyák nem megfelelőek, a NAND mentés minimum mérete miatt (kb. 1 GB), ami ennek az útmutatónak végén készül, mint biztonsági lépés
  - 200 GB vagy nagyobb kártyák működni fognak, de nem ajánlottak a lehetséges hibák amit okozhatnak a DS/GBA grafikában és az egyedi témákban
- **Sebesség**: Bármilyen
  - Jelenleg a legolcsóbb kártya a piacon **Class 10** (pl. SanDisk Ultra). Gyorsabb kártyák elfogadhatók, de a 3DS nem tudja kihasználni a nagyobb sebességük
- **Formátum**: FAT32 MBR-rel
  - A 32 GB vagy kisebb kártyák eleve erre vannak formázvam míg a nagyobb SD kártyákat valószínűleg maniálisan kell formázni: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))

A teljes méretű SD kártyát használó konzolok esetében egy microSD kárty egy adapterben azzal egyenértékűen működik.

::: info

Erősen ajánlot, hogy **csak egy SD kártyát használj** bármikor a konzolhoz, mert nem tudod később két SD kártya tartalmát egyesíteni. Tehát, ha a konzolodnak van már SD kártyája, azt érdemes használnod a konzolod moddolásához, vagy másolj át mindent egy nagyobb kártyára, mielőtt vagy miután moddoltad.

:::

::: info

Ha szeretnéd, ellenőrizheted az SD kártyádat hibákra/megfelelőségre mielőtt követed ezt az útmutatót a [H2testw](h2testw-(windows))/[ValiDrive](https://www.grc.com/validrive.htm) (Windows), [F3 (Linux)](f3-(linux)), vagy [F3XSwift (Mac)](f3xswift-(mac)) segtségével.

:::

::::

:::: warning

:::details Potencionális kockázatok (Nyilatkozat)

A konzolod moddolásával, van egy nagyon kicsi (de nem nulla) esélye, hogy a konzol brickelődik (nem működővé válik). _**A rossz helyre rakott fájlok NEM brickelik a konzolodat**_, de szándékosan kihagyott lépések elképzelhető, hogy igen.

Röviden: A konzolod moddolása biztonságos, de a _**te felelősséged**_ ha valami elromlik.

:::

::::

## Fontos terminológia

::: warning

Az útmutató követése nem kell, hogy adatvesztéshez vezessen, de SD kártya hiba bármikor előfordulhat. Készíts biztonsági mentést az SD kártyádról (különösen a `Nintendo 3DS` mappáról), ha tartalmaz fontos adatot.

:::

:::: details Mit jelent az "SG kártya gyökere" vagy "/luma/"?

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

:::: details Hogyan töltök le fájlokat a GitHub-ról?

::: info

![](/images/screenshots/onboarding/github.png)

:::

Ebben az útmutatóban másolni fogsz a 3DS-ed SD kártyájára olyan fájlokat, amik letöltésre kerültek a számítógépedre/telefonodra. Ezen fájlok többsége a GitHub-ról jön, ami egy weboldal fejlesztők számára, ahol közzé teszik nyílt forrású fejlesztéseiket. Ha a GitHub-ról töltesz le fájlokat, az a fájlt kell letöltened, ami _nem_ forráskód.

::::

:::: details Hogyan csomagolok ki egy ZIP fált?

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Néhány fájl, amit le kell töltened `.zip` formátumú fájlként érkezik, ami arra használt, hogy több fájlt rakjunk egybe.

Ha azt az utasítás kapod, hogy "másolj (egy adott fájlt) a (fájl).zip-ből", az azt jelenti, hogy meg kell nyitnod (vagy "kicsomagolnod") a ZIP fájlt. A ZIP fájlon belül lesz a fájl, amit keresel, amit utána másolni tudsz a megadott útvonalra az SD kártyádra.

A legtöbb operációs rendszeren dupla kattintással ki tudod csomagolni a fájlt. Ha ez nem működik, telepíthetsz egy megbízható kicsomagoló eszközt helyette, mint például a [7-Zip](https://7-zip.org/).

::: warning

A Windows-os "WinRAR" applikáció kifejezetten ismert, hogy kompatibilitási problémákat okoz a 3DS-el különösen az egyéni firmware telepítő exploitok esetében. Ha Windows számítógépen vagy, inkább használd az alapértelmezett Fájlkezelő-t vagy a 7-Zip-et fájlok kicsomagolására.

:::

::::

:::: details Mik azok a fájl kiterjesztések?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Ha a számítógéped Windows-t futtat, a fájl kiterjesztések előfordulhat, hogy alapértelmezetten elrejtettek, ami nehezebbé teheti azon fájlok megtalálását, amiket keresel. A fájlkiterjesztések megjelenítéséhez kövesd [ezeket a lépéseket](file-extensions-(windows)).

::::

:::: details Mit jelent az SD kártya "kiadása"?

::: info

![](/images/screenshots/onboarding/eject-windows.png)

:::

A legtöbb eszközön, a fájlkezelőben van egy Kiadás (⏏️) gomb az SD kártyához. Ezt az opciót használva az biztonságosan leállít minden tevékenységet és lecsatolja a kártyát, így az eltávolítható.

Ez **nagyon** fontos, mert az SD kártya használat közbeni eltávolítása hibákat okozhat és negatívan befolyásolhatja az exploitokat, amikor moddolot a 3DS-ed.

::::

## Segítség kérése

Ha problémád van ezen útmutató követésével, többféle módja van, hogy segítséget kapj!

- Ha olyan kérdésed van, amit nem válaszolt meg az az oldal, akkor a válaszaid lehet, hogy a [Telepítés előtti gyakran ismételt kérdések](faq#pre-installation-faq) oldalon találhatók.
- Ha hibát kaptál a útmutató követése közben, ránézhetsz a [Hibaelhárítás](troubleshooting) oldalra a megoldásért.
- Ha az itt található információk nem segítenek egy-egy támogatást kaphatsz a [Nintendo Homebrew Discord csatornán](https://discord.gg/MWxPgEp).

::: tip

Tovább a [kezdeti lépésekhez](get-started)

:::
