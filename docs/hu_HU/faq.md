# GYIK

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Igen**, továbbra is tudsz telepíteni egyedi firmware-t a 3DS-edre, az eShop bezárása után is.

:::

## Telepítés előtti GYIK

:::details A legújabb verziójú rendszeren vagyok. Hackelhető a konzolom külső hardver vagy előfeltételek használata nélkül?

**Igen!** ANew 3DS / New 3DS XL / New 2DS XL használhatja a [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), míg a 3DS / 3DS XL / 2DS használhatja az [MSET9](installing-boot9strap-\(mset9\)) exploitot.

:::

:::details Milyen konzolokkal kompatibilis ez az útmutató?

Ez az útmutató kompaitiblis minden kereskedelmi 3DS-család eszközzel (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Ha a megjelenített rendszer verziód "0.0.0-0", akkor fejlesztői egységed van.

:::

:::details Mennyire kockázatos a konzolom meghackelése?

A brickelés ma már alapvetően lehetetlen, kivéve, ha szándékosan szeretnéd brickelni a konzolodat.

:::

:::details Ezzel lehet futtatni azokat a király homebrew alkalmazásokat és emulátorokat?

Igen! Ez az útmutató telepít néhány hasznos homebrew alkalmazást, beleértve az [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest)-t, ami homebrew alkalmazás boltként működik.

:::

:::details Használhatom ezt arra, hogy más régióból származó játékokkal tudjak játszani?

Igen; a Luma3DS automatikusan figyelmen kívül hagyja a régió ellenőrzést a cartridge-ek és a telepített címek esetében. Néhány játék igényli a Luma's [nyelvi emulációs funkcióját](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) a működéshez, ha régión kívüli konzolokon fut.

:::

:::details El fogok veszteni bármilyen szolgáltatást, ha CFW-t telepítek?

Nem. Egyedi firmware-rel ellátott konzolok le tudnak tölteni játék frissítéseket és futtatni fizikai cartridge-eket, mint bármilyen más 3DS.

:::

:::details Megtarthatom az NNID-met, mentéseimet, digitális játékaimat (stb.)?

Az NNID-et (ha van) nem befolyásolja az útmutató végrehajtása. A KOR, CHN vagy TWN régiós eszközök nem rendelkeznek alaphelyzetben NNID funkcionalitással, így ezek a konzolok nem érintettek.

Az útmutató követése nem kell, hogy adatvesztéshez vezessen (mentések, digitális játékok, stb), de SD kártya hiba bármikor előfordulhat. Készítsd biztonsági mentést az SD kártyádról, ha tartalmaz fontos adatot.

:::

:::details Bannolva lesz a 3DS-em, ha CFW-m van telepítve?

Bannolás már nem lehetséges, mert a Nintendo Network szolgáltatások le lettek állítva (mindenkinek).

:::

:::details Meg tudom ezt csinálni számítógép nélkül (pl. Android telefonnal)?

Igen! Egyedül arra van szükséged, hogy fájlokat tudj másolni egy kompatibilis SD kártyára.

:::

:::details Milyen méretű SD kártyát használhatok?

Legalább 1.5GB szabad hely kell az SD kártyán az útmutató teljes végrehajtásához. Habár a 3DS hivatalosan 32GB SD kártya méretig kompatibilis, nagyobb SD kártyák is használhatók, miután kézzel újra formázásra kerültek FAT32 fájlrendszerre. Nem javasoltak 128GB-nál nagyobb SD kártyák, az ismert problémák miatt a GBA grafikával és az egyedi témákkal.

:::

:::details Hallottam erről a dologról (Gateway, Sky3DS, ntrboot, R4, stb), amiért fizetnem kell. Szükségem lesz ilyesmire?

Nem. Habár DS flashcart használható a 3DS moddolására az [ntrboot](ntrboot) használatával, már van ingyenes szoftveres metódus a legtöbb konzolra.

A 3DS-mód flashcart-ok, mint a Gateway és a Sky3DS nem ajánlottak, mert elavultak és a brick kockázatát hordják magukban.

:::

:::details Mi a különbség az egyedi firmware és a homebrew hozzáférés között?

Definició szerint az egyedi firmware a 3DS rendszer szoftverének módosítását jelenti, azért, hogy olyan dolgok is megtehetők legyenek, amik normál esetben nem. Homebrew általában olyan szoftvert jelent, ami nem hivatalos forrásból származik (pl.: nem az eShop-on keresztül vagy cartridge-en terjesztett).

Történetileg a 3DS felhasználói szintű homebrew hozzáférése régi exploitokon keresztül történt, mint a ninjahax", amit néha az emberek csak "homebrew"-nak hívtak. A rendszer hozzáférés szintje felhasználói, ami lehetővé tette hogy futtass alap homebrew alkalmazásokat és emulátorokat, de nem tette lehetővé (könnyedén) a játékok módosítását vagy cartridge-ek dumpolását. Továbbá kevésbé volt stabil, a homebrew alkalmazások sűrűn összeomlottak, teljes újra indítást igényelve. Az egyedi firmware nagyobb szintű hozzáférést engedélye a rendszerhez, miközben stabilabb, mint a csak-homebrew belépési pontok.

:::

## Telepítés utáni GYIK

:::details Biztonságos frissíteni a legutolsó verzióra a CFW-vel ellátott 3DS-em?

Ha Luma3DS-t használsz, az egyedi firmware loader (boot9strap) _soha_ nem kerül eltávolításra egy rendszer frissítés során. Korábban voltak olyan frissítések, amik a Luma3DS összeomlását eredményezték bootoláskor, így jó ötlet várni egy pár órát, hogy biztos legyél, hogy a legutolsó frissítés átmenetileg nem teszi-e használhatatlanná a konzolod, mielőtt a Luma3DS frissítésre kerül. A rendszer frissítések úgy történnek, mint egy alap 3DS-en: a System Settings-en, Safe Mode-on vagy a felugró frissítési üzeneten keresztül, amikor a frissítések automatikusan letöltődtek.

:::

:::details Hogyan bővíthetem nagyobbra az SD kártyám?

Másold át az SD kártyád tartalmát egy új FAT32-re formázott SD kártyára. A 128GB-os kártyák esetén a 65536 allokációs méret javasolt. 128GB-nál nagyobb SD kártyák nem javasoltak az ismert problémák miatt a GBA grafikával és az egyedi témákkal.

:::

:::details Tudok rendszer átvitelt (System Transfer) végezni CFW-vel?

Igen, a rendszer átvitel végrehajtható a hivatalos System Transfer funkcióval más CFW-vel rendelkező konzolokra (inkonzisztenciák előfordulhatnak, ha a cél egy alap konzol). Az illegitim címek (homebrew) jegyei (ticket) nem kerülnek átvitelre, de a [faketik](https://github.com/ihaveamac/faketik/releases/latest)-kel újra megjeleníthetők. Ügyelj arra, hogy ne használj vezeték nélküli átvitelt, mert az törli az illegitim címeket. A CFW megmarad minkét konzolon.

:::

:::details Hogyan módosíthatom a rendszer nyelvét egy japán 3DS-nek?

Az egyetlen módja a rendszer nyelv módosításának egy japán 3DS esetében más nyelvre a [régió csere](region-changing). Fontos megjegyezni, hogy ez erősen valószínű, hogy elrontja a Nintendo eShop-ot a konzolodon, így nem fogsz tudni frissíteni játékokat, függetlenül attól, hogy régión belüli vagy kívüli.

:::

:::details Hogyan frissíthetem a homebrew alkalmazásokat?

Ez elsősorban a formátumától függ a homebrew alkalmazásnak. Általánosságban beszélve:

- Homebrew **CIA formátumban** frissíthető egy új CIA telepítésével, ami felül írja a régebbi verziót. Ha a régi CIA nem kerül felülírásra, törölheted a régit a Data Management-ből, mint más 3DS címnél tennéd.
- Homebrew **3DSX formátumban** frissíthető a 3DSX fájl újra cseréjével a `/3ds/` mappában. Ha a homebrew app további fájlokat tartalmaz, azokat valahova máshova kell raknod. Tekintsd meg a homebrew alkalmazás dokumentációját.
- A Luma3DS frissítéséhez tekintsd meg [ezt az oldalt](restoring-updating-cfw). A GodMode9 frissítéséhez tekintsd meg [ezt az oldalt](godmode9-usage#updating-godmode9).

:::

:::details Hogyan frissíthetem a játékaim?

A játék frissítések továbbra is letölthetők a Nintendo eShop-ból, annak leállításától függetlenül.

Ha a játék nem ugyanabból a régióból származik, mint a konzolod, akkor [dumpolnod kell a frissítéseket](dumping-titles-and-game-cartridges) egy olyan 3DS-ről, amire azok telepítésre kerültek. A Nintendo eShop csak a konzol régiójának megfelelő frissítéseket tartalmazza (például egy japán 3DS csak japán játékokhoz kap frissítéseket).

:::

:::details Segítség! Valami rossz dolog történt és a 3DS-em nem bootol a HOME menübe...

Please look at the [troubleshooting guide](troubleshooting-post-install). **A CFW eltávolítása, amikor a konzolod nem bootolható nem ajánlott, mert nagyon
valószínű, hogy brickeli az eszközödet**.

:::

## menuhax / A9LH / Gateway GYIK

:::details Moddoltam a konzolomat (x) évvel ezelőtt, így már van valamilyen homebrew hozzáférésem. Mit kell tennem?

Ajánlott, hogy frissítsd egy modern, boot9strap alapúra. Kövesd a [CFW ellenőrzését](checking-for-cfw), hogy megtudd, hogyan frissítheted.

:::

:::details A konfigurációm működik nekem. Miért kellene frissítenem?

A modern homebrew jelentős része (mint pédául a Checkpoint és a BootNTR Selector) csak modern, boot9strap alapú rendszeren tesztelt, és lehet nem fog teljesen (vagy egyáltalán nem) működni régebbi menuhax, A9LH, vagy Gateway alapú konfigurációkon. Továbbá, a konfigurációdtól függően, lehet, hogy nem tudsz biztonságosan frissítani a legutolsó firmware-re. A modern, boot9strap alapú rendszerek magasabb szintű rendszer hozzáféréssel rendelkeznek, mint a a korábbiak, beleértve a konzol bootrom-jának dumpolásának képességét.

:::

:::details El fogok veszteni bármit, ha frissítem a CFW-met?

A régi konfigurációd (beleértve az EmuNAND-od, ha van ilyened) általában közvetlenül migrálható boot9strap-re adatvesztés nélkül. Ha van számodra különösen fontos adat, jó ötlet lehet frissítés előtt egy decryptált mentés készítése a mentés adatodról, olyan eszközzel, mint például a [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).

:::

:::details Hogyan mozgathatom át a mentéseimet egy létező Gateway konfigurációról egy modern konfigurációra?

Nézd meg [ezt az üzenetszálat](https://gbatemp.net/threads/425743/).

:::
