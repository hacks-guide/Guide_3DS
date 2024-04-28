---
title: "Alapvető információk"
---

{% include toc title="Tartalomjegyzék" %}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

Ha ez az első alkalom, hogy moddolsz egy 3DS-t (vagy nem vagy ismerős a technológiával) akkor folytasd az olvasást! Egyébként, ha rendelkezel tapasztalattal és tudod, hogy mit csinálsz, folytasd a [Kezdeti lépésekkel](get-started).
{: .notice--info}

Ez az oldal néhány alap számitástechnikai információt és 3DS specifikus információkat tartalmaz, amiket ismerned kell, mielőtt követnéd ezt az útmutatót.

Minden szekció összezárt alapértelmezésként. Kattints rá vagy érintsd meg a nevét a szekciónak, hogy kinyisd.

## Dolgok amit érdemes tudnod a 3DS-ről

{% capture compat %}
<summary><strong>3DS/2DS kompatibilitás</strong></summary>
![]({{ "/images/screenshots/onboarding/compatible.png" | absolute_url }})
{: .notice--info}

Ez az útmutató minden kereskedelmi konzollal működik a Nintendo 3DS konzol családból (beleértve a 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, és a New 2DS XL/LL-t), függetlenül a régiótól és a firmware-től.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Számítógép kompatibilitás</strong></summary>
![]({{ "/images/screenshots/onboarding/os.jpg" | absolute_url }})
{: .notice--info}
A legtöbb esetben követheted ezt az útmutatót egészen addig, amíg képes vagy letölteni fájlokat az internetről és SD kártyára másolni. A számitógépedtől/telefonodtól/elektronikus eszközödtől függően szükséged lehet egy USB-SD kárya adapterre, ami lehetővé teszi a számítógéped számára, hogy olvassa az SD kártyádat.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>SD kártya helye, típusa és kapacitása</strong></summary>
![]({{ "/images/screenshots/onboarding/sdcard.jpg" | absolute_url }})
{: .notice--info}

Az SD kártyá slot helye és az SD kártya típusa amit elfogad a 3DS modelledtől függ. További infromációk találhatók erről a [Nintendo hivatalos támogatási oldalán](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

A 3DS bármilyen kapacitású SD kártyát tud olvasni (még akkor is, ha nagyobb, mint 32GB), de a kártyának FAT32-re kell formatálva lennie (**nem** exFAT vagy NTFS). A következő eszközöket használhatod az SD kártyád formázására, az operációs rendszeredtől függően: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)). **128GB**-nál nagyobb SD kártyák nem javasoltak az ismert problémák miatt az egyedi témákkal és a GBA grafikával.

Ahhoz, hogy követhesd ezt az útmutatót szükséged van egy legalább **2GB** kapacitású SD kártyára.
{: .notice--warning}

Ha szeretnéd, leellenőrizheted az SD kártyádat valamelyik programmal az alábbiak közül: [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), vagy [F3XSwift (Mac)](f3xswift-(mac))
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Potencionális kockázatok (Nyilatkozat)</strong></summary>

A konzolod moddolásával, van egy nagyon kicsi (de nem nulla) esélye, hogy a konzol brickelődik (nem működővé válik). ___A rossz helyre rakott fájlok NEM brickelik a konzolodat___, de szándékosan kihagyott lépések elképzelhető, hogy igen.

Röviden: A konzolod moddolása biztonságos, de a ___te felelősséged___ ha valami elromlik.

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--warning}

## Dolgok, amiket a számítógépeden kell csinálnod

Az útmutató követése nem kell, hogy adatvesztéshez vezessen, de SD kártya hiba bármikor előfordulhat. Készítsd biztonsági mentést az SD kártyádról (különösen a `Nintendo 3DS` mappáról), ha tartalmaz fontos adatot.
{: .notice--warning}

{% capture compat %}
<summary><strong>Fájl elhelyezés terminológia (pl. "az SD gyökere", "/luma/")</strong></summary>
![]({{ "/images/screenshots/onboarding/sdroot.png" | absolute_url }})
{: .notice--info}

Amikor fájlokat másolunk az SD kártyára, fontos, hogy jó helyre másoljuk, - egyébként a konzol nem fogja észrevenni a fájl és az exploit vagy a szoftver amit használni szeretnél nem fog működni. A fogalom, amit sűrűn fogsz látni ebben az útmutatóban az **SD kártya gyökere**, ami azt jelenti, amikor nem vagy benne semmilyen mappában az SD kártyán. A könyvtárat ami megjelenik először, amikor megnyitod az SD kártyád a számítógépeden, hívják 'gyökér'-nek.

Látszhat még mappa neveket így jelölve: `/mappa/`. A használt perjelek könyvtárakat jelentenek, amik nem a részei a mappa nevének. Például, `/folder1/folder2/` a `folder2` mappára hivatkozik a `folder1` mappában:

![]({{ "/images/screenshots/onboarding/folders.png" | absolute_url }})
{: .notice--info}

**Kacsacsőrök** (\< és \>) általában arra használtak, hogy rendszer-specifikus azonosítót tartalmazzanak. Például, ha az útmutató `<ID0>`-t tartalmaz, akkor a rendszer-specifikus azonosítóra hivatozik a `Nintendo 3DS` mappában, nem pedig egy mappára, amit "ID0"-nak hívnak:

![]({{ "/images/screenshots/onboarding/anglebrackets.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Fájlok letöltése a GitHub-ról</strong></summary>
![]({{ "/images/screenshots/onboarding/github.png" | absolute_url }})
{: .notice--info}

Ebben az útmutatóban másolni fogsz a 3DS-ed SD kártyájára olyan fájlokat, amik letöltésre kerültek a számítógépedre/telefonodra. Ezen fájlok többsége a GitHub-ról jön, ami egy weboldal fejlesztők számára, ahol közzé teszik nyílt forrású fejlesztéseiket. Ha a GitHub-ról töltesz le fájlokat, az a fájlt kell letöltened, ami *nem* forráskód.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Fájlok megnyitása/kicsomagolása</strong></summary>
![]({{ "/images/screenshots/onboarding/zipfiles.png" | absolute_url }})
{: .notice--info}

Néhány fájl, amit le kell töltened `.zip` formátumú fájlként érkezik, ami arra használt, hogy több fájlt rakjunk egybe.

Ha azt az utasítás kapod, hogy "másolj (egy adott fájlt) a (fájl).zip-ből", az azt jelenti, hogy meg kell nyitnod (vagy "kicsomagolnod") a ZIP fájlt. A ZIP fájlon belül lesz a fájl, amit keresel, amit utána másolni tudsz a megadott útvonalra az SD kártyádra.

A legtöbb operációs rendszeren dupla kattintással ki tudod csomagolni a fájlt. Ha ez nem működik, telepíthetsz egy megbízható kicsomagoló eszközt helyette, mint például a [7-zip](https://7-zip.org/).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>(csak Windows) Fájl kiterjesztések</strong></summary>
![]({{ "/images/screenshots/onboarding/fileext.png" | absolute_url }})
{: .notice--info}

Ha a számítógéped Windows-t futtat, a fájl kiterjesztések előfordulhat, hogy alapértelmezetten elrejtettek, ami nehezebbé teheti azon fájlok megtalálását, amiket keresel. A fájlkiterjesztések megjelenítéséhez kövesd [ezeket a lépéseket](file-extensions-(windows)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Segítség kérése

Ha problémád van ezen útmutató követésével, többféle módja van, hogy segítséget kapj!

+ Ha olyan kérdésed van, amit nem válaszolt meg az az oldal, akkor a válaszaid lehet, hogy a [Telepítés előtti gyakran ismételt kérdések](faq#pre-installation-faq) oldalon találhatók.
+ Ha hibát kaptál a útmutató követése közben, ránézhetsz a [Hibaelhárítás](troubleshooting) oldalra a megoldásért.
+ Ha az itt található információk nem segítenek egy-egy támogatást kaphatsz a [Nintendo Homebrew Discord csatornán](https://discord.gg/MWxPgEp).

Tovább a [kezdeti lépésekhez](get-started)
{: .notice--primary}
