---
title: "GYIK"
---
{% include toc title="Tartalomjegyzék" %}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

**Igen**, továbbra is tudsz telepíteni egyedi firmware-t a 3DS-edre, az eShop bezárása után is.
{: .notice--info}

## Telepítés előtti GYIK

{% capture compat %}
<summary><u>A legújabb verziójú rendszeren vagyok. Hackelhető a konzolom külső hardver vagy előfeltételek használata nélkül?</u></summary>

**Igen!** ANew 3DS / New 3DS XL / New 2DS XL használhatja a [super-skaterhax](installing-boot9strap-(super-skaterhax)), míg a 3DS / 3DS XL / 2DS használhatja az [MSET9](installing-boot9strap-(mset9)) exploitot.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Milyen konzolokkal kompatibilis ez az útmutató?</u></summary>

Ez az útmutató kompaitiblis minden kereskedelmi 3DS-család eszközzel (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Ha a megjelenített rendszer verziód "0.0.0-0", akkor fejlesztői egységed van.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Mennyire kockázatos a konzolom meghackelése?</u></summary>

A brickelés ma már alapvetően lehetetlen, kivéve, ha szándékosan szeretnéd brickelni a konzolodat.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Ezzel lehet futtatni azokat a király homebrew alkalmazásokat és emulátorokat?</u></summary>

Igen! Ez az útmutató telepít néhány hasznos homebrew alkalmazást, beleértve az [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest)-t, ami homebrew alkalmazás boltként működik.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Használhatom ezt arra, hogy más régióból származó játékokkal tudjak játszani?</u></summary>

Igen; a Luma3DS automatikusan figyelmen kívül hagyja a régió ellenőrzést a cartridge-ek és a telepített címek esetében. Néhány játék igényli a Luma's [nyelvi emulációs funkcióját](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) a működéshez, ha régión kívüli konzolokon fut.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>El fogok veszteni bármilyen szolgáltatást, ha CFW-t telepítek?</u></summary>

Nem. Egyedi firmware-rel ellátott konzolok le tudnak tölteni játék frissítéseket és futtatni fizikai cartridge-eket, mint bármilyen más 3DS.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Megtarthatom az NNID-met, mentéseimet, digitális játékaimat (stb.)?</u></summary>

Az NNID-et (ha van) nem befolyásolja az útmutató végrehajtása. A KOR, CHN vagy TWN régiós eszközök nem rendelkeznek alaphelyzetben NNID funkcionalitással, így ezek a konzolok nem érintettek.

Az útmutató követése nem kell, hogy adatvesztéshez vezessen (mentések, digitális játékok, stb), de SD kártya hiba bármikor előfordulhat. Készítsd biztonsági mentést az SD kártyádról, ha tartalmaz fontos adatot.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Bannolva lesz a 3DS-em, ha CFW-m van telepítve?</u></summary>

Bannolás már nem lehetséges, mert a Nintendo Network szolgáltatások le lettek állítva (mindenkinek).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Meg tudom ezt csinálni számítógép nélkül (pl. egy androidos telefonnal)?</u></summary>

Igen! Egyedül arra van szükséged, hogy fájlokat tudj másolni egy kompatibilis SD kártyára.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Milyen méretű SD kártyát használhatok?</u></summary>

Legalább 1.5GB szabad hely kell az SD kártyán az útmutató teljes végrehajtásához. Habár a 3DS hivatalosan 32GB SD kártya méretig kompatibilis, nagyobb SD kártyák is használhatók, miután kézzel újra formázásra kerültek FAT32 fájlrendszerre. Nem javasoltak 128GB-nál nagyobb SD kártyák, az ismert problémák miatt a GBA grafikával és az egyedi témákkal.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Hallottam erről a dologról (Gateway, Sky3DS, ntrboot, R4, stb), amiért fizetnem kell. Szükségem lesz ilyesmire?</u></summary>

Nem. Habár DS flashcart használható a 3DS moddolására az [ntrboot](ntrboot) használatával, már van ingyenes szoftveres metódus a legtöbb konzolra.

A 3DS-mód flashcart-ok, mint a Gateway és a Sky3DS nem ajánlottak, mert elavultak és a brick kockázatát hordják magukban.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Mi a különbség az egyedi firmware és a homebrew hozzáférés között?</u></summary>

Definició szerint az egyedi firmware a 3DS rendszer szoftverének módosítását jelenti, azért, hogy olyan dolgok is megtehetők legyenek, amik normál esetben nem. Homebrew általában olyan szoftvert jelent, ami nem hivatalos forrásból származik (pl.: nem eShop-on vagy cartridge-n keresztül terjesztett).

Történetileg a 3DS felhasználói szintű homebrew hozzáférése régi exploitokon keresztül történt, mint a ninjahax", amit néha az emberek csak "homebrew"-nak hívtak. A rendszer hozzáférés szintje felhasználói, ami lehetővé tette hogy futtass alap homebrew alkalmazásokat és emulátorokat, de nem tette lehetővé (könnyedén) a játékok módosítását vagy cartridge-ek dumpolását. Továbbá kevésbé volt stabil, a homebrew alkalmazások sűrűn összeomlottak, teljes újra indítást igényelve. Az egyedi firmware nagyobb szintű hozzáférést engedélye a rendszerhez, miközben stabilabb, mint a csak-homebrew belépési pontok.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Telepítés utáni GYIK

{% capture compat %}
<summary><u>Biztonságos frissíteni a legutolsó verzióra a CFW-vel ellátott 3DS-em?</u></summary>

Ha Luma3DS-t használsz, az egyedi firmware loader (boot9strap) *soha* nem kerül eltávolításra egy rendszer frissítés során. Korábban voltak olyan frissítések, amik a Luma3DS összeomlását eredményezték bootoláskor, így jó ötlet várni egy pár órát, hogy biztos legyél, hogy a legutolsó frissítés átmenetileg nem teszi-e használhatatlanná a konzolod, mielőtt a Luma3DS frissítésre kerül. A rendszer frissítések úgy történnek, mint egy alap 3DS-en: a System Settings-en, Safe Mode-on vagy a felugró frissítési üzeneten keresztül, amikor a frissítések automatikusan letöltődtek.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Hogyan bővíthetem nagyobbra az SD kártyám?</u></summary>

Másold át az SD kártyád tartalmát egy új FAT32-re formázott SD kártyára. A 128GB-os kártyák esetén a 65536 allokációs méret javasolt. 128GB-nál nagyobb SD kártyák nem javasoltak az ismert problémák miatt a GBA grafikával és az egyedi témákkal.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Tudok rendszer átvitelt (System Transfer) végezni CFW-vel?</u></summary>

Igen, a rendszer átvitel végrehajtható a hivatalos System Transfer funkcióval más CFW-vel rendelkező konzolokra (inkonzisztenciák előfordulhatnak, ha a cél egy alap konzol). Az illegitim címek (homebrew) jegyei (ticket) nem kerülnek átvitelre, de a [faketik](https://github.com/ihaveamac/faketik/releases/latest)-kel újra megjeleníthetők. Ügyelj arra, hogy ne használj vezeték nélküli átvitelt, mert az törli az illegitim címeket. A CFW megmarad minkét konzolon.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Hogyan módosíthatom a rendszer nyelvét egy japán 3DS-nek?</u></summary>

Az egyetlen módja a rendszer nyelv módosításának egy japán 3DS esetében más nyelvre a [régió csere](region-changing). Fontos megjegyezni, hogy ez erősen valószínű, hogy elrontja a Nintendo eShop-ot a konzolodon, így nem fogsz tudni frissíteni játékokat, függetlenül attól, hogy régión belüli vagy kívüli.
 {% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Hogyan frissíthetem a homebrew alkalmazásokat?</u></summary>

Ez elsősorban a formátumától függ a homebrew alkalmazásnak. Általánosságban beszélve:

* Homebrew **CIA formátumban** frissíthető egy új CIA telepítésével, ami felül írja a régebbi verziót. Ha a régi CIA nem kerül felülírásra, törölheted a régit a Data Management-ből, mint más 3DS címnél tennéd.
* Homebrew **3DSX formátumban** frissíthető a 3DSX fájl újra cseréjével a `/3ds/` mappában. Ha a homebrew app további fájlokat tartalmaz, azokat valahova máshova kell raknod. Tekintsd meg a homebrew alkalmazás dokumentációját.
* A Luma3DS frissítéséhez tekintsd meg [ezt az oldalt](restoring-updating-cfw). A GodMode9 frissítéséhez tekintsd meg [ezt az oldalt](godmode9-usage#updating-godmode9).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Hogyan frissíthetem a játékaim?</u></summary>

A játék frissítések továbbra is letölthetők a Nintendo eShop-ból, annak leállításától függetlenül.

Ha a játék nem ugyanabból a régióból származik, mint a konzolod, akkor [dumpolnod kell a frissítéseket](dumping-titles-and-game-cartridges) egy olyan 3DS-ről, amire azok telepítésre kerültek. A Nintendo eShop csak a konzol régiójának megfelelő frissítéseket tartalmazza (például egy japán 3DS csak japán játékokhoz kap frissítéseket).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Segítség! Valami rossz dolog történt és a 3DS-em nem bootol a HOME menübe...</u></summary>

Kérjük, nézd meg a [hibaelhárítási útmutatót](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **A CFW eltávolítása, amikor a konzolod nem bootolható nem ajánlott, mert nagyon 
 valószínű, hogy brickeli az eszközödet**.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## menuhax / A9LH / Gateway GYIK

{% capture compat %}
<summary><u>Moddoltam a konzolomat (x) évvel ezelőtt, így már van valamilyen homebrew hozzáférésem. Mit kell tennem?</u></summary>

Ajánlott, hogy frissítsd egy modern, boot9strap alapúra. Kövesd a [CFW ellenőrzését](checking-for-cfw), hogy megtudd, hogyan frissítheted.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>A konfigurációm működik nekem. Miért kellene frissítenem?</u></summary>

A modern homebrew jelentős része (mint pédául a Checkpoint és a BootNTR Selector) csak modern, boot9strap alapú rendszeren tesztelt, és lehet nem fog teljesen (vagy egyáltalán nem) működni régebbi menuhax, A9LH, vagy Gateway alapú konfigurációkon. Továbbá, a konfigurációdtól függően, lehet, hogy nem tudsz biztonságosan frissítani a legutolsó firmware-re. A modern, boot9strap alapú rendszerek magasabb szintű rendszer hozzáféréssel rendelkeznek, mint a a korábbiak, beleértve a konzol bootrom-jának dumpolásának képességét.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>El fogok veszteni bármit, ha frissítem a CFW-met?</u></summary>

A régi konfigurációd (beleértve az EmuNAND-od, ha van ilyened) általában közvetlenül migrálható boot9strap-re adatvesztés nélkül. Ha van számodra különösen fontos adat, jó ötlet lehet frissítés előtt egy decryptált mentés készítése a mentés adatodról, olyan eszközzel, mint például a [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Hogyan mozgathatom át a mentéseimet egy létező Gateway konfigurációról egy modern konfigurációra?</u></summary>

Nézd meg [ezt az üzenetszálat](https://gbatemp.net/threads/425743/).
{% endcapture %}
<details>{{ compat | markdownify }}</details>
