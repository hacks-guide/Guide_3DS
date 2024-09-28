# GYIK

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Igen**, továbbra is tudsz telepíteni egyedi firmware-t a 3DS-edre, az eShop bezárása után is.

:::

## Pre-Installation FAQ

:::details I am on the latest system version. Is my console hackable without any external hardware/prerequisites?

**Igen!** ANew 3DS / New 3DS XL / New 2DS XL használhatja a [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), míg a 3DS / 3DS XL / 2DS használhatja az [MSET9](installing-boot9strap-\(mset9\)) exploitot.

:::

:::details What consoles is this guide compatible with?

Ez az útmutató kompaitiblis minden kereskedelmi 3DS-család eszközzel (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Ha a megjelenített rendszer verziód "0.0.0-0", akkor fejlesztői egységed van.

:::

:::details How risky is hacking my console?

A brickelés ma már alapvetően lehetetlen, kivéve, ha szándékosan szeretnéd brickelni a konzolodat.

:::

:::details Can I run awesome homebrew and emulators with this?

Igen! Ez az útmutató telepít néhány hasznos homebrew alkalmazást, beleértve az [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest)-t, ami homebrew alkalmazás boltként működik.

:::

:::details Can I use this to play games from other regions?

Igen; a Luma3DS automatikusan figyelmen kívül hagyja a régió ellenőrzést a cartridge-ek és a telepített címek esetében. Néhány játék igényli a Luma's [nyelvi emulációs funkcióját](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) a működéshez, ha régión kívüli konzolokon fut.

:::

:::details Will I lose any features if I install CFW?

Nem. Egyedi firmware-rel ellátott konzolok le tudnak tölteni játék frissítéseket és futtatni fizikai cartridge-eket, mint bármilyen más 3DS.

:::

:::details Can I keep my NNID, saves, digital games (etc.)?

Az NNID-et (ha van) nem befolyásolja az útmutató végrehajtása. A KOR, CHN vagy TWN régiós eszközök nem rendelkeznek alaphelyzetben NNID funkcionalitással, így ezek a konzolok nem érintettek.

Az útmutató követése nem kell, hogy adatvesztéshez vezessen (mentések, digitális játékok, stb), de SD kártya hiba bármikor előfordulhat. Készítsd biztonsági mentést az SD kártyádról, ha tartalmaz fontos adatot.

:::

:::details Will my 3DS be banned for having CFW?

Bannolás már nem lehetséges, mert a Nintendo Network szolgáltatások le lettek állítva (mindenkinek).

:::

:::details Can I do this without a computer (e.g. an Android phone)?

Igen! Egyedül arra van szükséged, hogy fájlokat tudj másolni egy kompatibilis SD kártyára.

:::

:::details What size SD card can I use?

Legalább 1.5GB szabad hely kell az SD kártyán az útmutató teljes végrehajtásához. Habár a 3DS hivatalosan 32GB SD kártya méretig kompatibilis, nagyobb SD kártyák is használhatók, miután kézzel újra formázásra kerültek FAT32 fájlrendszerre. Nem javasoltak 128GB-nál nagyobb SD kártyák, az ismert problémák miatt a GBA grafikával és az egyedi témákkal.

:::

:::details I heard about this thing I have to pay for (Gateway, Sky3DS, ntrboot, R4, etc). Is that something I need?

Nem. Habár DS flashcart használható a 3DS moddolására az [ntrboot](ntrboot) használatával, már van ingyenes szoftveres metódus a legtöbb konzolra.

A 3DS-mód flashcart-ok, mint a Gateway és a Sky3DS nem ajánlottak, mert elavultak és a brick kockázatát hordják magukban.

:::

:::details What's the difference between custom firmware and homebrew?

Definició szerint az egyedi firmware a 3DS rendszer szoftverének módosítását jelenti, azért, hogy olyan dolgok is megtehetők legyenek, amik normál esetben nem. Homebrew generally refers to software created outside of official sources (i.e. not distributed by eShop or cartridges).

Történetileg a 3DS felhasználói szintű homebrew hozzáférése régi exploitokon keresztül történt, mint a ninjahax", amit néha az emberek csak "homebrew"-nak hívtak. A rendszer hozzáférés szintje felhasználói, ami lehetővé tette hogy futtass alap homebrew alkalmazásokat és emulátorokat, de nem tette lehetővé (könnyedén) a játékok módosítását vagy cartridge-ek dumpolását. Továbbá kevésbé volt stabil, a homebrew alkalmazások sűrűn összeomlottak, teljes újra indítást igényelve. Az egyedi firmware nagyobb szintű hozzáférést engedélye a rendszerhez, miközben stabilabb, mint a csak-homebrew belépési pontok.

:::

## Post-Installation FAQ

:::details Is it safe to update my 3DS to the latest version with CFW?

Ha Luma3DS-t használsz, az egyedi firmware loader (boot9strap) _soha_ nem kerül eltávolításra egy rendszer frissítés során. Korábban voltak olyan frissítések, amik a Luma3DS összeomlását eredményezték bootoláskor, így jó ötlet várni egy pár órát, hogy biztos legyél, hogy a legutolsó frissítés átmenetileg nem teszi-e használhatatlanná a konzolod, mielőtt a Luma3DS frissítésre kerül. A rendszer frissítések úgy történnek, mint egy alap 3DS-en: a System Settings-en, Safe Mode-on vagy a felugró frissítési üzeneten keresztül, amikor a frissítések automatikusan letöltődtek.

:::

:::details How do I upgrade my SD card?

Másold át az SD kártyád tartalmát egy új FAT32-re formázott SD kártyára. A 128GB-os kártyák esetén a 65536 allokációs méret javasolt. 128GB-nál nagyobb SD kártyák nem javasoltak az ismert problémák miatt a GBA grafikával és az egyedi témákkal.

:::

:::details Can I system transfer with CFW?

Igen, a rendszer átvitel végrehajtható a hivatalos System Transfer funkcióval más CFW-vel rendelkező konzolokra (inkonzisztenciák előfordulhatnak, ha a cél egy alap konzol). Az illegitim címek (homebrew) jegyei (ticket) nem kerülnek átvitelre, de a [faketik](https://github.com/ihaveamac/faketik/releases/latest)-kel újra megjeleníthetők. Ügyelj arra, hogy ne használj vezeték nélküli átvitelt, mert az törli az illegitim címeket. A CFW megmarad minkét konzolon.

:::

:::details How do I change the system language of a Japanese 3DS?

Az egyetlen módja a rendszer nyelv módosításának egy japán 3DS esetében más nyelvre a [régió csere](region-changing). Fontos megjegyezni, hogy ez erősen valószínű, hogy elrontja a Nintendo eShop-ot a konzolodon, így nem fogsz tudni frissíteni játékokat, függetlenül attól, hogy régión belüli vagy kívüli.

:::

:::details How do I update homebrew applications?

Ez elsősorban a formátumától függ a homebrew alkalmazásnak. Általánosságban beszélve:

- Homebrew in **CIA format** can be updated by installing the new CIA, which will usually overwrite the old one. Ha a régi CIA nem kerül felülírásra, törölheted a régit a Data Management-ből, mint más 3DS címnél tennéd.
- Homebrew in **3DSX format** can be updated by replacing the 3DSX file in `/3ds/` with a fresh copy. Ha a homebrew app további fájlokat tartalmaz, azokat valahova máshova kell raknod. Tekintsd meg a homebrew alkalmazás dokumentációját.
- For updating Luma3DS, see [this page](restoring-updating-cfw). A GodMode9 frissítéséhez tekintsd meg [ezt az oldalt](godmode9-usage#updating-godmode9).

:::

:::details How do I update my games?

A játék frissítések továbbra is letölthetők a Nintendo eShop-ból, annak leállításától függetlenül.

Ha a játék nem ugyanabból a régióból származik, mint a konzolod, akkor [dumpolnod kell a frissítéseket](dumping-titles-and-game-cartridges) egy olyan 3DS-ről, amire azok telepítésre kerültek. A Nintendo eShop csak a konzol régiójának megfelelő frissítéseket tartalmazza (például egy japán 3DS csak japán játékokhoz kap frissítéseket).

:::

:::details Help! Something bad happened and my 3DS won't boot to HOME Menu...

Kérjük, nézd meg a [hibaelhárítási útmutatót](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **A CFW eltávolítása, amikor a konzolod nem bootolható nem ajánlott, mert nagyon
valószínű, hogy brickeli az eszközödet**.

:::

## menuhax / A9LH / Gateway FAQ

:::details I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?

Ajánlott, hogy frissítsd egy modern, boot9strap alapúra. Kövesd a [CFW ellenőrzését](checking-for-cfw), hogy megtudd, hogyan frissítheted.

:::

:::details My setup works for me. Why should I upgrade it?

A modern homebrew jelentős része (mint pédául a Checkpoint és a BootNTR Selector) csak modern, boot9strap alapú rendszeren tesztelt, és lehet nem fog teljesen (vagy egyáltalán nem) működni régebbi menuhax, A9LH, vagy Gateway alapú konfigurációkon. Továbbá, a konfigurációdtól függően, lehet, hogy nem tudsz biztonságosan frissítani a legutolsó firmware-re. A modern, boot9strap alapú rendszerek magasabb szintű rendszer hozzáféréssel rendelkeznek, mint a a korábbiak, beleértve a konzol bootrom-jának dumpolásának képességét.

:::

:::details Will I lose anything if I upgrade my setup?

A régi konfigurációd (beleértve az EmuNAND-od, ha van ilyened) általában közvetlenül migrálható boot9strap-re adatvesztés nélkül. Ha van számodra különösen fontos adat, jó ötlet lehet frissítés előtt egy decryptált mentés készítése a mentés adatodról, olyan eszközzel, mint például a [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).

:::

:::details How do I move saves from an existing Gateway setup to a more modern setup?

See [this thread](https://gbatemp.net/threads/425743/).

:::
