# Move EmuNAND

## Kötelező olvasmány

Ez egy kiegészítő rész, amelyben egy korábbi EmuNAND tartalmát fogjuk átvinni az új SysNAND CFW-re, majd töröljük a régi EmuNAND partíciót. Jó, ha tudod, hogy az EmuNAND és a RedNAND fogalmak [ugyanazon koncepció](http://3dbrew.org/wiki/NAND_Redirection) két, kicsiben különböző megvalósítását jelentik.

Vedd figyelembe, hogy amennyiben van más payload fájl a `GodMode9.firm` fájlon kívül a `/luma/payloads/`mappában, indításkor a (Start) gombot lenyomva tartva a "chainloader menu" menü fog megjelenni. Itt a D-Pad és az (A) gomb segítségével válaszd a "GodMode9" opciót, hogy az alábbi utasításokat követhesd.

::: danger

Az alábbiak használatához már telepítened kellett a következőket: Luma3DS és boot9strap.

:::

## Amire szükséged lesz

- An existing EmuNAND
- A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)

## Lépések

### I. rész - Előkészületek

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold át a `GodMode9.firm` fájlt a GodMode9 `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
4. Másold át a `gm9` mappát a GodMode9 `.zip`-ből az SD kártyád gyökerébe
5. Tedd vissza az SD kártyád a konzoldba

### II. rész - DSiWare mentések kimásolása a SysNAND-ról

::: info

Ha nincs egy DSiWare játékod vagy mentésed sem, ami fontos lenne számodra, akkor hagyd ki ezt a részt.

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Ha rákérdez arra, hogy csináljon-e egy biztonsági másolatot (essential files backup), akkor nyomd meg az (A) gombot, hogy csináljon, majd amikor végzett, nyomd meg ismét az (A) gombot a folytatáshoz
3. Ha rákérdez arra, hogy szeretnéd-e a valós dátumot és időt javítani (fix the RTC date&time), nyomd meg az (A) gombot, állítsd be a helyes dátumot és időt, majd nyomd meg az (A) gombot a folytatáshoz
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Menj ide: `[2:] SYSNAND TWLN` -> `title`
5. Tartsd lenyomva az (R) gombot, és közben nyomd le az (A)-t a `00030004` mappán, hogy kijelöld, majd válaszd a "Copy to 0:/gm9/out" opciót
   - This process may take some time if you have many DSiWare games
6. Nyomd meg a (B) gombot kétszer, hogy visszamenj a főmenübe

### III. rész - GBA VC mentések kimásolása

::: info

Ha nincs egy GBA VC játékod vagy mentésed sem, ami fontos lenne számodra, akkor hagyd ki ezt a részt.

:::

::: info

Vedd figyelembe, hogy a következő folyamatot szükségtelen végrehajtani bármi más Virtual Console játék esetében (GBC, NES, stb.)

:::

::: info

A játék az SD kártyád `/gm9/out/` mappájába kerül kimentésre `<TitleID>.gbavc.sav` néven.

:::

::: info

Egy `<TitleID>.gbavc.sav` fájl Title ID-jének azonosításához használhatod a Title ID-k listáját a rendszeren a (Home) gombot megnyomásával az akció menüt előhozva, majd a `Title manager`-t választva és utána kiválasztva az `[A:] SD CARD` opciót.

:::

1. Csináld végig az alábbi lépéseket minden egyes GBA VC játékhoz, aminek a mentését vissza akarod állítani:
   - Indítsd el a GBA VC játékot
   - Lépj ki a GBA VC játékból
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Menj ide: `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Nyomd meg az (A) gombot a folytatáshoz
   - Nyomd meg a (Start) gombot a konzolod újraindításához

### IV. rész - EmuNAND másolása a SysNAND-ba

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Menj ide: `[E:] EMUNAND VIRTUAL`
3. Nyomd meg az (A) gombot, amikor a `nand.bin` van kijelölve, hogy kiválaszd, majd válaszd a "NAND image options..." opciót, utána pedig a "Restore SysNAND (safe)" lehetőséget
4. Nyomd meg az (A) gombot, hogy feloldd a SysNAND felülírást, majd sorban nyomd meg a kijelzett gombokat
   - This will not overwrite your boot9strap installation
5. Nyomd meg a kijelzett gombokat sorban, hogy feloldd a SysNAND (lvl1) írást
   - This process will take some time
6. Amint ez elkészült, nyomd meg az (A) gombot a folytatáshoz
7. Nyomd meg a (B) gombot, hogy elutasítsd az írási engedélyek visszavonását, ha kérdezi
8. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe

### V. rész - DSiWare mentések visszaállítása

::: info

Ha korábban nem másoltál ki egy DSiWare mentést sem, hagyd ki ezt a részt.

:::

1. Menj ide: `[0:] SDCARD` -> `gm9` -> `out`
2. Nyomd meg az (Y)-t a `00030004` mappán, hogy kimásold
3. Nyomd meg a (B) gombot kétszer, hogy visszamenj a főmenübe
4. Menj ide: `[2:] SYSNAND TWLN` -> `title`
5. Nyomd meg az (Y) gombot, hogy beilleszd a `00030004` mappát
6. Válaszd a "Copy path(s)" opciót
7. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
8. Válaszd az "Overwrite file(s)" opciót
   - This process may take some time if you have many DSiWare games
9. Nyomd meg a (B) gombot, hogy elutasítsd az írási engedélyek visszavonását, ha kérdezi
10. Nyomd meg a (B) gombot kétszer, hogy visszamenj a főmenübe

### VI. rész - GBA VC mentések visszaállítása

::: info

Ha korábban nem másoltál ki egy GBA VC mentést sem, hagyd ki ezt a részt.

:::

::: info

Egy `<TitleID>.gbavc.sav` fájl Title ID-jének azonosításához használhatod a Title ID-k listáját a rendszeren a (Home) gombot megnyomásával az akció menüt előhozva, majd a `Title manager`-t választva és utána kiválasztva az `[A:] SD CARD` opciót.

:::

1. Az (R) lenyomva tartása közben nyomd meg a (Start) gombot a konzolod kikapcsolásához
2. Kapcsold be a konzolod, úgy, hogy a SysNAND induljon el
3. Csináld végig az alábbi lépéseket minden egyes GBA VC játékhoz, aminek a mentését vissza akarod állítani:
   - Indítsd el a GBA VC játékot
   - Lépj ki a GBA VC játékból
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Menj ide: `[0:] SDCARD` -> `gm9`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
   - Menj ide: `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Nyomd meg az (A) gombot a folytatáshoz
   - Nyomd meg a (Start) gombot a konzolod újraindításához
   - Indítsd el a GBA VC játékot
   - Lépj ki a GBA VC játékból

### VII. rész - SysNAND biztonsági mentése

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et

<!--@include: ./_include/nand-backup.md -->

1. **Készíts az SD kártyádon található fájlokról biztonsági másolatot a számítógépedre; a következő lépésekben minden fájl törlődni fog róla**

### VIII. rész - SD kártya formázása

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et

<!--@include: ./_include/format-sd-gm9.md -->

1. Az SD kártya leválasztásához az (R) gomb lenyomva tartása mellett nyomd meg a (B) gombot
2. Helyezd az SD kártyád a számítógépbe
3. Másolj vissza minden fájlt az SD kártyádra
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Tedd vissza az SD kártyád a konzoldba
5. Nyomd meg az (A) gombot, hogy visszacsatold az SD kártyát
6. Nyomd meg a (Start) gombot az újraindításhoz

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
