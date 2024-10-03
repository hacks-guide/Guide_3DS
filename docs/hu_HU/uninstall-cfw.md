# CFW eltávolítása

## Kötelező olvasmány

A következőkben teljes egészében el fogjuk távolítani a CFW-t a konzolodról, beleértve a boot9strap-et és a Luma3DS-t azzal a céllal, hogy visszaállítsuk a konzolt gyári állapotra.

Minden aláíratlan (nem eredeti) játék használhatatlanná fog válni és eltávolításra fog kerülni ezen folyamat során. Használj [mentéskezelőt](https://github.com/FlagBrew/Checkpoint/releases/latest), hogy biztonsági másolatot készíts azon játékok mentéséről, amik fontosak a számodra.

::: danger

Ha azért távolítod el a CFW-t, mert:

- Szeretnéd újratelepíteni
- Mert szeretnél SD kártyát cserélni
- Az SD kártyád elveszett vagy megsérült
- Valamelyik játékod hibás
- Valamelyik rendszer alkalmazásod hibás
- A konzolod nem tud bebootolni a HOME Menübe

<u>**ÁLLJ!!!**</u> Az egyedi firmware eltávolítása egy felesleges kockázat, ami legjobb esetben az időd pocsékolása, a legrosszabb esetben pedig <u>**BRICKELI**</u> a konzolodat. Jobb ötlet az, hogy segítséget kérsz (angolul) a [Nintendo Homebrew Discord szerveren](https://discord.gg/MWxPgEp).

:::

::: danger

Ha VALAMELYIKET az alábbiakból már végre hajtottad:

- [Módosítottad a régióját](region-changing) a konzolnak
- Egyedi billentyűzetet telepítettél
- Egyedi HOME Menüt telepítettél (_nem_ egy egyedi témát)
- Kézzel módosítottad a titkosítási kulcsát (`movable.sed`) a konzolnak
- Unbannolt a konzolt

akkor a CFW eltávolítása <u>**BRICKELNI FOGJA A KONZOLODAT**</u>. Ha ez vonatkozik rád, [állíts vissza egy tiszta NAND mentést](godmode9-usage#restoring-a-nand-backup) mielőtt folytatnád.

:::

::: warning

Ezek a lépések csak olyan konzolokkal működnek, amint a Luma3DS verziója 8.0 vagy magasabb. Ha a Luma korábbi verzió van a rendszereden, először frissítened kell a következő lépésekkel. Kövesd [ezt az oldalt](checking-for-cfw), hogy megtaláld a frissítési lépéseid.

:::

## Amire szükséged lesz

- A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)
- A [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) legújabb kiadása (a GodMode9 `.zip` fájl)
- A [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest) legutolsó verziójára
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Lépések

### I. rész - Előkészületek

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másolj mindent a Luma3DS `.zip`-ből az SD kártya gyökerébe
4. Másold át a `GodMode9.firm` fájlt a GodMode9 `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
5. Másold át a `gm9` mappát a GodMode9 `.zip`-ből az SD kártyád gyökerébe
6. Másold a `DSiWareUninstaller.3dsx`-et az SD kártyád `/3ds/` mappájába
7. Másold a `safety_test.gm9` fájlt az SD kártyád `/gm9/scripts/` mappájába
8. Tedd vissza az SD kártyád a konzoldba

### II. rész - DS mód tesztek

Ennek a fejezetnek a célja, hogy ellenőrizzük, a beépített DS mód alkalmazások működni fognak-e ha egyszer a CFW eltávolításra került. Ha ezt a fejezetet átugrod, a DS mód és funkciói elképzelhető, hogy elérhetetlenné válnak, a CFW eltávolítása után.

#### DS Connection Settings Teszt

1. Kapcsold be a konzolod
2. Lépj be a "System Settings"-be a konzolodon
3. Navigálj az `Internet Settings` -> `Nintendo DS Connections` opcióhoz, majd válaszd az "OK"-t
4. Be kell bootolnod a Nintendo DS Connection Setup menübe
   - Ha a konzolod a japán verzió Flipnote Studio-ját jeleníti meg vagy fekete képernyőt vagy hibaüzenetet, a teszt sikertelen
5. Kapcsold ki a konzolod

#### DS Download Play teszt

1. Kapcsold be a konzolod
2. Indítsd el a Download Play alkalmazást (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Válaszd "Nintendo DS"-t
4. Ha a konzolod a “Download software via DS Download Play” menübe tölt be, a teszt sikeres volt
   - Ha a konzolod a japán verzió Flipnote Studio-ját jeleníti meg vagy fekete képernyőt vagy hibaüzenetet, a teszt sikertelen
5. Kapcsold ki a konzolod

::: warning

Ha ezen tesztek valamelyike sikertelen, a DS mód, a DS Download Play és/vagy DS Connection Settings előfordulhat, hogy nem lesz elérhető a CFW eltávolítását követően! Ki kell [javítanod a DS módot](troubleshooting#software-issues-on-consoles-with-custom-firmware) mielőtt folytatnád.

:::

### III. rész - Biztonsági teszt

Ennek a résznek az a célja, hogy ellenőrizd, hogy a konzolod be fog-e bootolni és hogy a kritikus rendszer funkciók, mint a System Settings és a billentyűzet működni fog-e, miután eltávolítottad a CFW-t. **Ha ezt a fejezetet átugrod, BRICK-elheted a konzolod!**

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Ha rákérdez arra, hogy csináljon-e egy biztonsági másolatot (essential files backup), akkor nyomd meg az (A) gombot, hogy csináljon, majd amikor végzett, nyomd meg ismét az (A) gombot a folytatáshoz
3. Ha rákérdez arra, hogy szeretnéd-e a valós dátumot és időt javítani (fix the RTC date&time), nyomd meg az (A) gombot, állítsd be a helyes dátumot és időt, majd nyomd meg az (A) gombot a folytatáshoz
   - Ne feledd, hogy amennyiben ezen a ponton szükséges volt a helyes dátum és idő beállítása, a System Settingsben is be kell majd állítanod a helyes időt az útmutató végrehajtása után
4. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
5. Válaszd a "Scripts..." opciót
6. Válaszd "safety_test"-et
7. Olvasd el a képernyőn látható szöveget, majd nyomj (A) gombot a folytatáshoz
8. Be kell bootolnod a normál 3DS HOME Menübe (bármilyen egyéni téma irreleváns). Ha sikerült, folytasd ezeket a lépéseket
   - Ha nem sikerül bebootolni a hagyományos 3DS HOME Menübe (fekete képernyő, hiba képernyő, stb.), a CFW eltávolítása **BRICK-ELNI FOGJA A KONZOLOD!**
9. Lépj be a "System Settings"-be a konzolodon
   - Ha a konzol összeomlik ezen a ponton, a teszt sikertelen
10. Válaszd az "Other Settings"-t
11. Válaszd ki a "Profile"-t
12. Válaszd ki a "User Name"-t
13. Ha képes vagy beírni egy új felhasználó nevet, a teszt sikeres
    - Ha a billentyűzet nem jelenik meg, a képernyő lefagy, vagy a konzol összeomlik, a teszt sikertelen
14. Kapcsold ki a konzolod

::: danger

Ha NEM sikerül a hagyományos 3DS HOME Menübe bootolni, vagy a System Settings / billentyűzet nem elérhető, **NE FOLYTASD ezeket a lépéseket**! Csatlakozz a [Nintendo Homebrew Discord-on](https://discord.gg/MWxPgEp) csatornához, és kérj segítséget (angol nyelven) valakitől.

:::

### IV. rész - NAND mentés

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
3. Válaszd a "Scripts..." opciót
4. Válaszd ezt: "GM9Megascript"
5. Válaszd ezt: "Backup Options"
6. Válaszd ezt: "SysNAND Backup"
7. Nyomd meg az (A) gombot a megerősítéshez
   - Ez a folyamat igénybe vesz majd némi időt
   - Ha hibát kapsz, győződj meg róla, hogy legalább 1.3 GB szabad hely van az SD kártyádon
8. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
9. Válaszd az "Exit" opciót
10. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
11. Válaszd a "Poweroff system"-et a konzolod kikapcsolásához

### V. rész - Az illegitim tartalom eltávolítása

::: warning

Ez a rész az illegitim tartalom eltávolításáról szól, mint a homebrew vagy a dumpolt cartridge-ek. Ha olyan mentés adatod van, amire szükséged van, mentsd le egy mentés kezelővel, mielőtt folytatod!

:::

1. Kapcsold be a konzolod
2. Lépj be a "System Settings"-be a konzolodon
3. Navigálj a következőhöz: Data Management -> Nintendo 3DS -> Software
4. Ebben a szoftver listában törölj minden nem-Nintendo tartalmat, amit telepítettél a CFW használatával
   - Ebbe bele tartoznak az általános rendszer szoftverek, mint az FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint és minden játék és cím, amit _nem_ az eShop-ból telepítettél
5. Navigálj ide: `Data Management` -> `DSiWare`
6. Ebben a szoftver listában törölj minden nem-Nintendo tartalmat, amit telepítettél a CFW használatával
   - Ebbe bele tartoznak olyan szoftverek, mint az TWiLightMenu++ beleértve minden játékot és címet, amit _nem_ az eShop-ból telepítettél
   - A sikertelen eltávolítása minden CFW szoftvernek a 3DS és a DSiWare szekciókban a CFW eltávolítása előtt megakadályozhatja vagy letilthatja a hozzáférést a Data Management menühöz a CFW eltávolítása után, ami megnehezíti a CFW újratelepítését a jövőben
7. Lépj ki a System Settings alkalmazásból
8. Indítsd el a Download Play alkalmazást (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Várj, amíg két gombot nem látsz
10. Nyomd le az (Bal Váll) + (D-Pad le) + (Select) gombokat egyszerre a Rosalina menü megnyitásához
11. Válaszd ki a "Miscellaneous options"-t
12. Válaszd a "Switch the hb. title to the current app." opciót
13. Nyomd meg a (B) gombot a folytatáshoz
14. Nyomd meg a (B) gombot, hogy visszakerülj a Rosalina főmenüjébe
15. Nyomd meg a (B) gombot, hogy kilépj a Rosalina menüből
16. Nyomd meg a (Home) gombot és zárd be a Download Play-t
17. Indítsd el a Download Play alkalmazást (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Ekkor a konzolodnak be kell töltenie a Homebrew Launcher-t
19. Indítsd el a DSiWare Uninstaller-t a homebrew listából
20. Kövesd at utasításokat és engedélyezd a programnak az eltávolítást
21. Ha a folyamat sikeres volt, lép ki a Homebrew Launcher-ből és kapcsold ki a konzolodat

### VI. rész - Rendszer formázás

Ez a rész biztosítja, hogy az illegitim ticket-ek eltávolításra kerüljenek, így az eShop normálisan tud működni. Ez eltávolít minden tartalmat a 3DS-ről és kiléptet az NNID-dből. Tartsd észben, hogy a konzol titkosító kulcsa meg lesz keverve, ami azt jelenti, hogy minden régi adat elérhetetlenné válik, még akkor is, ha van mentésed az SD kártyád tartalmáról.

1. Kapcsold be a konzolod
2. Lépj be a "System Settings"-be a konzolodon
3. Navigálj az Other Settings -> Next Page (az utolsó oldalig) -> Format System Memory opcióhoz
4. Kövesd az utasításokat a 3DS-ed formázásához

### VII. rész - Az eltávolító szkript futtatása

::: warning

Ez az utolsó lehetőséged, hogy ellenőrizd, hogy minden fenti biztonsági lépést végrehajtottál! Legyél biztos benne, hogy minden lépést végrehajtottál ezen oldal összes részéből, **kifejezetten** a `III. rész - Biztonsági teszt`-et, mielőtt folytatnád.

:::

::: danger

Ha azért távolítod el a CFW-t, mert:

- Szeretnéd újratelepíteni
- Mert szeretnél SD kártyát cserélni
- Az SD kártyád elveszett vagy megsérült
- Valamelyik játékod hibás
- Valamelyik rendszer alkalmazásod hibás
- A konzolod nem tud bebootolni a HOME Menübe

<u>**ÁLLJ!!!**</u> Az egyedi firmware eltávolítása egy felesleges kockázat, ami legjobb esetben az időd pocsékolása, a legrosszabb esetben pedig <u>**BRICKELI**</u> a konzolodat. Jobb ötlet az, hogy segítséget kérsz (angolul) a [Nintendo Homebrew Discord szerveren](https://discord.gg/MWxPgEp).

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
   - Ha helyette a Luma3DS chainloader-t látod, használd a D-Pad-et és az (A) gombot a GodMode9 kiválasztásához
2. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
3. Válaszd a "Scripts..." opciót
4. Válaszd ezt: "GM9Megascript"
5. Válaszd ezt: "Hax Options"
6. Válaszd ezt: "Un-install Hax"
7. Amikor kéri, nyomd meg az (A) gombot a folytatáshoz
8. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl3) írást, majd sorban nyomd meg a kijelzett gombokat
9. Nyomd meg az (A) gombot a folytatáshoz
10. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
11. Válaszd az "Exit" opciót
12. Nyomd meg az (A) gombot az írási engedélyek visszavonásához
13. Nyomd meg a (Start) gombot a konzolod újraindításához

___

::: tip

Ezt követően már nem lesz egyedi firmware telepítve a konzolodra.

:::

::: info

Most már eltávolíthatsz minden olyan fájlt és mappát az SD kártyád gyökeréből, ami _nem_ a `Nintendo 3DS`, a `DCIM` vagy a `private` mappa.

:::
