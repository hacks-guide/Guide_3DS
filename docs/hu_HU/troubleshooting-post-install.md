# Hibaelhárítás (Telepítés után)

Ez az oldal hibaelhárítási tanácsokat ad sűrűn előforduló problémákhoz a az egyedi firmware telepítését követően. Ha nem tudod megoldani a problémád az oldal tanácsai alapján, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) és írd le a problémádat és azt is hogy mi az amit már próbáltál.

## Bootolási problémák

::: info

Az itt leírt lépések általában feltételezik, hogy a konzolod modern egyedi firmware telepítéssel rendelkezik (boot9strap + Luma3DS 8.0 vagy nagyobb). Ha a konzolod régebbi homebrew telepítés (például valami ami arm9loaderhax vagy menuhax alapú), frissítened kell a telepítésed, mielőtt kipróbálod ezeket a lépéseket.

:::

### Táp/értesítő LED fény indikátorok

:::details A konzolom kikapcsol, ha megpróbálom bekapcsolni és/vagy az értesítő LED egy színt mutat bootoláskor

Probléma van az `boot.firm` fájloddal. Ha [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4)-et futtatsz, akkor a 3DS-ed értestő LED-je egy adott sznt villogtat. Ez a szín a `boot.firm` problémák diagnosztizálását segíti az SD kártyán vagy a belső memóriában. Régebbi boot9strap verziókon a kék fény azonnal kikapcsol, ha megpróbálod bekapcsolni a konzolt.

Ha az értesítő LED villog:

- **Fehér**: A 3DS-ed nem találta a `boot.firm`-et sem az SD kártyádon, sem a belső memóriában.
- **Magenta**: A 3DS-ed nem találta a `boot.firm`-et az SD kártyádon. Megtalálta a `boot.firm`-et a belső memóriában, de az a fájl sérült.
- **Piros**: A 3DS-ed megtalálta a `boot.firm`-et az SD kártyádon és a belső memóriában, de mindkét fájl sérült.

Beszerezhetsz `boot.firm` fájlt a [Luma3DS legfrissebb kiadásának letöltésével](https://github.com/LumaTeam/Luma3DS/releases/latest) és annak kicsomagolásával, majd a `boot.firm` fájlnak az SD kártyád gyökerébe helyezésével. Ha a `boot.firm` fájlod folyamatosan sérültnek érzékelt, szükség lehet az SD kártyád hibákra ellenőrzésére ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), vagy [macOS](f3xswift-\(mac\))). Azt is vedd figyelembe, hogy a 3DS-nek problémái lehetnek olyan fájlokkal, amit WinRAR-ral csomagoltak ki.

Ha hallod a "pattanó hangot", ami potenciálisan a háttérvilágítás bekapcsolását kíséri a másodperc egy részéig, akkor hardver problémád van a konzoloddal (mint például lecsatlakozott háttérvilágítás kábel). Lehetséges, hogy be tudod kapcsolni a konzolodat megfelelő szögben tartva.

:::

:::details A konzolom fekete képernyőn ragad, a kék power led bekapcsolva marad

Az alábbi lépések tetszőleges sorrendben hajthatók végre, azonban a lista a legrövidebbtől a legtöbb időt igénylőig van összeállítva.

1. Kapcsold ki a konzolod, vedd ki majd tedd vissz az SD kártyát, majd kapcsold be újra a konzolod.
2. Kapcsold ki a konzolod, vedd ki a játék cartridge-t ha van benne, majd kapcsold be a konzolod és várj tíz percet. Ha a konzolod bebootol tíz percen belül, a probléma elhárult és nem fog valószínűleg újra előfordulni
3. Nevezd át a `Nintendo 3DS` mappát az SD kártyádon `Nintendo 3DS_BACKUP` névre és próbálj meg bootolni. Ha a konzolod sikeresen bootol, problémák vannak a `Nintendo 3DS` könyvtáraddal. Próbáld meg kitakarítani a HOME menu extdata-t:
   - Navigálj a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` mappába
   - Töröld a 3DS régiódhoz tartozó mappát:
     - **EUR régió**: `00000098`
     - **JPN régió**: `00000082`
     - **USA régió**: `0000008f`
     - **CHN régió**: `000000A1`
     - **KOR régió**: `000000A9`
     - **TWN régió**: `000000B1`
4. Próbálj meg recovery mode-ba bootolni, majd onnét frissíteni a rendszeredet:
   - Kapcsold ki a konzolod
   - Tartsd nyomva a (Bal Váll) + (Jobb Váll) + (D-Pad Fel) + (A) gombokat
   - Kapcsold be a konzolod
   - Ha sikeres voltál, a konzolod egy "update your system" képernyőre bootol
5. Kövesd a [CTRTransfer](ctrtransfer) útmutatót
6. További támogatásért kérj segítséget a [Nintendo Homebrew-tól a Discord-on](https://discord.gg/MWxPgEp)

:::

### Hibaüzenet bootoláskor

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" vagy "An exception has occurred -- Current process: pm"

A Luma3DS verziód régi. Töltsd le a legutolsó kiadását az [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)-nak és rakd a `boot.firm` fájlt az SD kártyád gyökerébe, felülírva bármilyen létező fájlt. Legyél biztos abban, hogy a ZIP fájlt más eszközzel csomagolod ki, mint a WinRAR, mert ismert, hogy problémái vannak a 3DS-sel kapcsolatos fájlokkal.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

Számos oka lehet, hogy miért történik így. Bármelyik esetben, ez a hiba általában javítható a [CTRTransfer](ctrtransfer) útmutató követésével.

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..."

Az ARM11 kivételkezelők tiltva, vagy az egyedi firmware nincs telepítve. Próbáld meg engedélyezni az ARM11 kivétel kezelőket:

- Kapcsold ki a konzolod
- Tartsd nyomva a (Select) gombot
- Kapcsold be a konzolod, miközben nyomva tartod a (Select) gombot
- Ha a "Disable ARM11 exception handlers" jelölőnégyzet bejelölt, vedd ki a jelölést

:::

:::details A HOME Menüből hiányoznak telepített alkalmazások

Ez különböző okokból is előfordulhat, de leginkább azért, mert az SD kártyád nem került beolvasásra a rendszer által.
Ellenőrizheted, hogy az SD kártyád olvasásra kerül-e a SELECT gomb nyomva tartásával bootoláskor, és az alsó képernyőn megjelenő sárga szöveg ellenőrzésével; ha azt mondja, hogy "Booted from CTRNAND via B9S", akkor a konzolod a belső memóriáról bootolt, nem az SD kártyáról.
Ha ez a helyzet, próbáld meg a lépéseket alább, ami a legkönnyebbtől a legnehezebbig került felsorolásra:

1. Kapcsold ki a konzolod, vedd ki majd tedd vissz az SD kártyát, majd kapcsold be újra a konzolod
2. Kapcsold ki a konzolod, távolítsd el az SD kártyád, majd csatlakoztasd a számítógépedhez. Töltsd le a legutolsó kiadását az [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)-nek és csomagold ki a `Luma3DS.zip` fájlból a `boot.firm` fájlt, majd rakd az SD kártyád gyökerébe (felülírva bármilyen létező fájlt)
3. Kapcsold ki a konzolod, távolítsd el az SD kártyát, csatlakoztasd a számítógépedhez és formázd újra az SD kártyád az operációs rendszerednek megfelelően: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(ez törölni fogja az SD kártya adatait)_
4. Teszteld az SD kártyádat hibákra az operációs rendszerednek megfelelő útmutató szerint haladva: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). Ha az SD kártyád hibásnak jelölt, cserélned kell az SD kártyádat
5. Az SD kártya foglalatod is lehet hibás. Csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) további segítségért

:::

:::details Kék "BOOTROM ERROR" képernyő

A konzolod valószínüleg hard-brickelve lett. Szükséged van egy ntrboot flashcart vásárlására, hogy újra telepítsd a boot9strap-et, hogy megpróbálhasd megjavítani a konzolod. Ez hardver hibát is jelezhet, ami nem javítható. Bármelyik esetben csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

- Az is lehetséges még, hogy valaki beállított egy bootoláskori kezdő képernyőt, ami úgy néz ki mint egy brick. Próbáld meg a konzolod bekapcsolva hagyni, várva a kék képernyőre, 5 percig.

:::

:::details Egyéb más hibák

Készítsd egy képet a hibáról és csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

## Szoftver problémák egyedi firmware-rel rendelkező konzolokon

:::details DSi / DS funkcionalitás hibás vagy felcserélt a Flipnote Studio-val

1. Töltsd le a [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) legutolsó kiadását (a `.3dsx` fájlt)
2. Kapcsold ki a konzolod
3. Hozz létre egy mappát `3ds` néven az SD kártyád gyökerében, ha még nem létezik ilyen
4. Másold az `TWLFix-CFW.3dsx` fájlt az SD kártyád `/3ds/` mappájába
5. Tedd vissza az SD kártyád a konzoldba
6. Nyisd meg a Homebrew Lancher-t
7. Indítsd el a TWLFix-CFW-t a homebrew listából
8. Nyomj (A)-t a törött TWL címek eltávolításához
9. Nyomd meg a (Start) gombot a konzol újraindításához
10. Frissítsd a konzolod következőképp: Lépj be a System Settings-be, majd az "Other settings"-be, ahol addig lépkedj jobbra, amíg a végére nem érsz. Itt válaszd a "System Update" opciót
    - A frissítés észreveszi, hogy lényeges TWL címek kerültek eltávolításra és le fogja tölteni és újratelepíteni azokat
11. Ha a frissítés kész, érintsd meg az "OK"-ot a konzol újraindításához

:::

:::details GBA Virtual Console és/vagy Safe Mode funkcionalitás hibás

A konzolod Luma3DS 6.6 vagy régebbi verziót futtat, valószínűleg arm9loaderhax-szal. Kövesd az [A9LH-ről B9S-re](a9lh-to-b9s) lépéseit a konzolod frissítéséhez modern egyedi firmware környezetre.

:::

:::details Bővített memória módú játékok (Pokemon Sun/Moon, Smash, stb.) nem működnek

Ez egy CTRTransfer vagy régió csere után fordulhat elő Old 3DS / 2DS eszközökön. Kövesd a lépéseket [itt](region-changing#section-vi---fixing-locale-related-issues) hogy kijavíthasd ezt a hibát. (átlépve a 3, 4, 5 és 6. lépéseket).

:::

:::details Kivétel képernyő egy alkalmazás bootolásakor/betöltésekor

Tekintsd meg a kivétel képernyőt [ezen az oldalon](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Ha nem sikerült megtalálni a hibádat, vagy a lépések nem működnek, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) további támogatásért.

:::

:::details A HOME Menu beállítások megnyitása összeomlasztja a konzolt
vagy betölti a Homebrew Launcher-t

A konzolodon még mindig van menuhax67 telepítve. A menuhax67 eltávolításához, tölsd le a [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) legfrissebb kiadását (a menuhax `.zip`), majd kövesd a ["Menuhax67 eltávolítása" részt](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.

:::

:::details Valami más

Csatlakozz a [Nintendo Homebrew Discord-on](https://discord.gg/MWxPgEp) csatornához segítségért és írd le a problémát, amit láttál.

:::

## Egyéb hibaelhárítás

:::details A HOME Menu extdata takarítása

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Navigálj a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` könyvtárba az SD kártyádon
4. Töröld a 3DS régiódhoz tartozó mappát:
   - **EUR régió**: `00000098`
   - **JPN régió**: `00000082`
   - **USA régió**: `0000008f`
   - **CHN régió**: `000000A1`
   - **KOR régió**: `000000A9`
   - **TWN régió**: `000000B1`
5. Tedd vissza az SD kártyád a konzoldba

:::

:::details A HOME Menu téma adat takarítása

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Navigálj a `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` könyvtárba az SD kártyádon
4. Töröld a 3DS régiódhoz tartozó mappát:
   - **EUR régió**: `000002ce`
   - **JPN régió**: `000002cc`
   - **USA régió**: `000002cd`
   - **KOR régió**: `000002cf`
5. Tedd vissza az SD kártyád a konzoldba

:::

:::details Homebrew Launcher kézi hozzáadása

Ha hiányzik a Homebrew Launcher alkalmazás a HOME Menüből, akkor a következő lépésekkel megadhatod a Homebrew Launcher-t kézzel. (A [boot.3dsx és a boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) kell legyen az SD kártyád gyökerében.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details A szülői felügyelet kikapcsolása

Letilthatod a szülői felügyeletet (Parental Controls) a System Settings -> Parental Controls-hoz navigálással és a PIN megadásával, majd a "Clear Settings" megnyomásával. Ezt követően a "Delete"-tel törölheted azt.
Azonban, ha nem tudod a PIN-t így nem tudsz hozzáférni az konzol beállításokhoz, akkor le kell tiltanod. Ahhoz hogy megtehesd ezt, meg kell szerezned a konzolod mester kulcsát (mkey):

1. Menj [erre a weboldalra](https://mkey.eiphax.tech/)
2. Töltsd ki a következő dobozokat az információval:
   - Device Type: Válaszd a "3DS"-t (ugyanez vonatkozik, ha 2DS, New 3DS (XL/LL) vagy New 2DS (XL/LL) típusod van)
   - System Date: A nap és a hónap a konzolod óráján beállított
   - Inquiry Number: Beszerezhető a "Forgot PIN" majd az "I Forgot" gombbal a Parental Controls képernyőn
3. Ha megszerezted az mkey-edet, nyomj OK gombot azon a képernyőn, ahol megkaptad az Inquiry Number számod, és add meg a mester kulcsot
4. Nyomj "Clear Settings"-et, majd "Delete"-et a minden Parental Controls adat eltávolításához

:::

---

<!--@include: ./_include/troubleshooting-return.md -->
