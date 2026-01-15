# Telepítés véglegesítése

## Kötelező olvasmány

Az előző oldalon telepítetted a boot9strap-et, egy egyedi firmware loader-t ami betölti a `boot.firm`-et az SD kártyádról vagy a NAND-ról (belső memória). Ebben az esetben a [LumaTeam](https://github.com/LumaTeam/) által készített Luma3DS-t használjuk `boot.firm`-ként a konzol patcheléséhez, hogy tudjon homebrew programokat futtatni.

Ezen az oldalon kritikus rendszer mentéseket fogunk csinálni és néhány homebrew alkalmazást fogunk telepíteni. Ezen lépések nagy része automatizált egy szkripttel, ami a konzolodon fogsz futtatni.

::: info

A szkript a következő alkalmazásokat fogja telepíteni:

- **FBI** Steveice10-től _(CIA formátumú alkalmazások telepítésére)_
- **Homebrew Launcher Loader** PabloMK7-től _(elindítja a Homebrew Launchert, ami 3DSX formátumú homebrew-hoz készült)_
- **Anemone3DS** astronautlevel2-től _(egyedi témák telepítése)_
- **Checkpoint** BernardoGiordano/FlagBrew-től _(a 3DS/DS játék mentések kezelésére)_
- **ftpd** mtheall-től _(lehetővé teszi a vezeték nélküli 3DS SD kártya hozzáférést FTP-n keresztül)_
- **Universal-Updater** az Universal-Team-től _(egy homebrew app store homebrew letöltéséhez a 3DS-re WiFi-n keresztül)_
- **GodMode9** d0k3-tól _(sokféle dologra használható eszköz, például NAND és kártya műveletekre)_

Ha nem szeretnéd ezeket az alkalmazásokat, eltávolíthatod őket, miután befejezted ezt az oldalt a System Settings -> Data Management -> Nintendo 3DS -> szoftver-hez navigálva. (A GodMode9 nem távolítható el így, és általában szükséges más funkciókhoz.)

::: details Forráskód linkek (opcionális)

Minden az ebből az útmutatóból telepített alkalmazás nyílt forrású. Ha érdekel, hogy hogyan működnek, vagy szeretnél egy csillagot hagyni elismerésedül, a forráskód elérhető a linkekről innen:

- [FBI](https://github.com/lifehackerhansol/FBI)
- [Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)
- [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)
- [Checkpoint](https://github.com/bernardogiordano/checkpoint/releases)
- [ftpd](https://github.com/mtheall/ftpd)
- [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)
- [GodMode9](https://github.com/d0k3/GodMode9)

:::

## Kompatibilitási megjegyzések

::: info

Ha az előző egyedi firmware rendszered EmuNAND alapú volt és szeretnéd az EmuNAND/RedNAND tartalmait a SysNAND-re másolni, kövest az [EmuNAND költöztetése](move-emunand) útmutatót ez az oldal előtt. Ha nem tudod mi az az EmuNAND, ez nem vonatkozik rád.

:::

## Amire szükséged lesz

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (közvetlen letöltés)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (közvetlen letöltés)

## Lépések

### I. rész - Előkészületek

Ebben a fejezetben fel fogod másolni az ahhoz szükséges fájlokat, hogy kövesd a lépéseket ezen az oldalon.

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold az `finalize.romfs` fájlt az SD kártyád gyökerébe
4. Nyisd meg a `luma` mappát az SD kártyádon és hozz létre egy mappát `payloads` néven benne, ha még nem létezik
5. Másold át az `x_finalize_helper.firm` fájlt a `payloads` mappába
6. Tedd vissza az SD kártyád a konzoldba

Az alábbi képernyőképek mutatják az SD kártya minimális elrendezését ahhoz, hogy ezt az útmutatót követni tudd. Lehetnek extra fájljaid és mappáid az SD kártyádon, függően a korábbi telepítésedtől vagy metódustól, amit követtél.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### II. rész - A rendszer frissítése

Ebben a fejezetben frissíteni fogod a rendszered a legutolsó verzióra, ami biztonságos az egyedi firmware-rel.

<!--@include: ./_include/sysupdate.md -->

### III. rész - RTC és DSP telepítése

Ebben a fejezetben szinkronizálni fogod a 3DS belső óráját az aktuális időhöz és dumpolni a hang firmware-t (ami szükséges néhány homebrew alkalmazáshoz, hogy a hangot megfelelően használja).

1. Nyomd le az (Bal Váll) + (D-Pad le) + (Select) gombokat egyszerre a Rosalina menü megnyitásához
   - Ha valamelyik gombod törött, töltsd le a [config.ini](/assets/config.ini) fájlt és rakd a `luma` mappádba, felülírva az ott lévőt. Ez átállítja a Rosalina menu billentyű kombinációt (X) + (Y)
2. Válaszd ki a "Miscellaneous options"-t
3. Válaszd a "Dump DSP firmware" opciót
4. Nyomd meg a (B) gombot a folytatáshoz
5. Válaszd a "Nullify user time offset" opciót
6. Nyomd meg a (B) gombot a folytatáshoz
7. Nyomd meg a (B) gombot, hogy visszakerülj a Rosalina főmenüjébe
8. Nyomd meg a (B) gombot, hogy kilépj a Rosalina menüből

### IV. rész - Telepítő szkript

Ebben a fejezetben szkripteket fogsz használni arra, hogy automatizáld a homebrew telepítést, az SD kártya takarítást és a rendszer mentést.

1. Kapcsold ki a konzolod
2. Nyomd le és tartsd nyomva az (X) gombot, és az (X) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a Finalizing Setup Helper-t
   - Ha a HOME menübe bootoltál, akkor lehet hogy a `payloads` mappád neve elírt, vagy a `x_finalize_helper.firm` fájl lehet rossz helyen van
   - Ha hibát kapsz, tekintsd meg a [hibaelhárítás](troubleshooting-finalizing-setup) oldalt
3. Néhány másodperc múlva a konozlodnak automatikusan a GodMode9-be kell bootolnia
   - Ettől a ponttól kezdve a GodMode9-et a (Start) gomb bekapcsolás melletti nyomva tartásával éred el
   - Az (X) nyomva tartása a továbbiakban már nem csinál semmit
4. Ha szükséges, állítsd be a GodMode9-et:
   - Ha nyelv választást szeretne a szoftver, akkor használd a D-Pad-et és nyomj (A) gombot az angol (English) kiválasztásához
     - Ez a nyelvi választás csak a GodMode9 menü opcióira hat
     - Beállíthatod a kívánt nyelvre, miután befejezted ezt az útmutatót
   - Ha rákérdez arra, hogy csináljon-e egy biztonsági másolatot (essential files backup), akkor nyomd meg az (A) gombot, hogy csináljon, majd nyomd meg az (A) gombot a folytatáshoz
   - Ha rákérdez arra, hogy szeretnéd-e a valós dátumot és időt javítani (fix the RTC date&time), nyomd meg az (A) gombot, állítsd be a helyes dátumot és időt, majd nyomd meg az (A) gombot a folytatáshoz
5. Ha látod a [root]-ot és a meghajtók listáját, nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
6. Válaszd a "Scripts..." opciót (_nem_ a Lua szkriptek)
7. Válaszd az "finalize" opciót
8. Kövesd a script utasításait és válaszolj meg minden kérdést
   - Ha "Information #05: No title database" üzenetet látsz, nyomj (A) gombot, majd nyomd meg gombkombinációt ami az alsó képernyőn látható a folytatáshoz
   - Ha hibát kapsz, kövesd a hibaüzenet lépéseit vagy tekintsd meg a [hibaelhárítás](troubleshooting-finalizing-setup) oldalt, majd nyisd meg a GodMode9-et a (Start) gomb nyomvatartásával bootoláskor, a szkript újra futtatásához
9. Ha a szkript a "Setup complete!" üzenetet írja, nyomj (A) gombot az eszköz kikapcsolásához
   - Ha NEM láttad a "Setup complete!" üzenetet, akkor a szkript nem volt sikeres és újra kell csinálnod ezt a részt a 3. lépéstől
10. Helyezd az SD kártyád a számítógépbe
11. Másold a `/gm9/backups/` mappát az SD kártyádról egy biztonságos helyre a számítógépeden
    - - Ez a mappa tartalmazza a kritkus mentés fájlokat és célszerű több helyre menteni (pl. felhőszolgáltatásba) ha lehetséges
    - A 2 SysNAND fájl a te NAND mentésed, és arra használható, hogy visszaállítsd a konzolod működő állapotba, ha egy szoftver probléma brickelné
    - Az `essential.exefs` fájl tartalmazza a konzolod rendszerre-egyedi fájljait és arra használhatod, hogy helyreállítsd az adataid egy hardver probléma esetén
12. Ha még mindig megvannak, töröld a két `SysNAND` fájlt a `/gm9/backups/` mappából az SD kártyádon
    - Az`essential.exefs` fájl kis méretű és rajta tarthatod az SD kártyádon a könnyű eléréshez

___

::: tip

Kész vagy! Az egyedi firmware most már teljesen be van állítva a konzolodon.

:::

::: info

Próbálod kitalálni, mit tegyél a frissen módosított eszközöddel? Látogasd meg a [wiki-nket](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Információk és megjegyzések

::: info

Néhány billentyű kombináció amit ismerned kell:

- Indításkor előhozhatod a Luma3DS konfigurációs menüjét a (Select) gomb lenyomva tartásával.
- Indításkor előhozhatod a GodMode9-et, vagy ha több payload van a `/luma/payloads/` mappában a Luma3DS chainloader-t a (Select) gomb lenyomva tartásával.
- Alapból a (Bal váll) + (D-pad le) + (Select) gombok megnyomásával 3DS módban a Rosalina menü megnyílik, ahol többek közt megnézhetsz rendszer információkat, csinálhatsz képernyő képeket, és engedélyezhetsz csalásokat és még több. Ezt lehet módosítani a Rosalina menüben.
- A (Start) + (Select) + (X) lenyomva tartása indítás közben a figyelmeztető LED-en színt mutat debug célokból. Tekintsd meg [változási naplót](https://github.com/SciresM/boot9strap/releases/tag/1.4) egy listáért.

:::

### Pretendo

A Pretendo egy helyettesítő szolgáltatása a Nintendo Network-nek, ami visszahozza az online szolgáltatásokat, amik leállításra kerültek már a Nintendo Network-ön. Újraéleszti a Miiverse-t is a juxtaposition-ön keresztül. A hivatalos útmutató [itt](https://pretendo.network/docs/install/3ds) érhető el.

**Megjegyzés: A Pretendo nem támogat minden online szolgáltatást, habár a munka célja ennek elérése.**

A Pretendo által támogatott játékok listája megtalálható [itt](https://wiki.pretendo.zip/game-support-status).

::: info

Információkért a GodMode9 különféle funkcióiról olvasd el a [GodMode9 használata](godmode9-usage) és a [Címek és Játék Cartridge-ek dumpolása](dumping-titles-and-game-cartridges) című leírásokat.

:::
