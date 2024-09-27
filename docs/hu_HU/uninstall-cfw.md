# CFW eltávolítása

## Required Reading

A következőkben teljes egészében el fogjuk távolítani a CFW-t a konzolodról, beleértve a boot9strap-et és a Luma3DS-t azzal a céllal, hogy visszaállítsuk a konzolt gyári állapotra.

Minden aláíratlan (nem eredeti) játék használhatatlanná fog válni és eltávolításra fog kerülni ezen folyamat során. Használj [mentéskezelőt](https://github.com/FlagBrew/Checkpoint/releases/latest), hogy biztonsági másolatot készíts azon játékok mentéséről, amik fontosak a számodra.

::: danger

Ha azért távolítod el a CFW-t, mert:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. Jobb ötlet az, hogy segítséget kérsz (angolul) a [Nintendo Homebrew Discord szerveren](https://discord.gg/MWxPgEp).

:::

::: danger

Ha VALAMELYIKET az alábbiakból már végre hajtottad:

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. Ha ez vonatkozik rád, [állíts vissza egy tiszta NAND mentést](godmode9-usage#restoring-a-nand-backup) mielőtt folytatnád.

:::

::: warning

Ezek a lépések csak olyan konzolokkal működnek, amint a Luma3DS verziója 8.0 vagy magasabb. Ha a Luma korábbi verzió van a rendszereden, először frissítened kell a következő lépésekkel. Kövesd [ezt az oldalt](checking-for-cfw), hogy megtaláld a frissítési lépéseid.

:::

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Instructions

### Section I - Prep Work

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold át a `boot.firm` és `boot.3dsx` fájlt a Luma3DS `.zip`-ből az SD kártya gyökerébe
4. Másold át a `GodMode9.firm` fájlt a GodMode9 `.zip`-ből az SD kártyád `/luma/payloads/` mappájába
5. Másold át a `gm9` mappát a GodMode9 `.zip`-ből az SD kártyád gyökerébe
6. Másold a `DSiWareUninstaller.3dsx`-et az SD kártyád `/3ds/` mappájába
7. Másold a `safety_test.gm9` fájlt az SD kártyád `/gm9/scripts/` mappájába
8. Tedd vissza az SD kártyád a konzoldba

### Section II - DS Mode Tests

Ennek a fejezetnek a célja, hogy ellenőrizzük, a beépített DS mód alkalmazások működni fognak-e ha egyszer a CFW eltávolításra került. Ha ezt a fejezetet átugrod, a DS mód és funkciói elképzelhető, hogy elérhetetlenné válnak, a CFW eltávolítása után.

#### DS Connection Settings Test

1. Kapcsold be a konzolod
2. Lépj be a "System Settings"-be a konzolodon
3. Navigálj az `Internet Settings` -> `Nintendo DS Connections` opcióhoz, majd válaszd az "OK"-t
4. Be kell bootolnod a Nintendo DS Connection Setup menübe
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Kapcsold ki a konzolod

#### DS Download Play Test

1. Kapcsold be a konzolod
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Válaszd "Nintendo DS"-t
4. Ha a konzolod a “Download software via DS Download Play” menübe tölt be, a teszt sikeres volt
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Kapcsold ki a konzolod

::: warning

Ha ezen tesztek valamelyike sikertelen, a DS mód, a DS Download Play és/vagy DS Connection Settings előfordulhat, hogy nem lesz elérhető a CFW eltávolítását követően! Ki kell [javítanod a DS módot](troubleshooting#software-issues-on-consoles-with-custom-firmware) mielőtt folytatnád.

:::

### Section III - Safety Test

Ennek a résznek az a célja, hogy ellenőrizd, hogy a konzolod be fog-e bootolni és hogy a kritikus rendszer funkciók, mint a System Settings és a billentyűzet működni fog-e, miután eltávolítottad a CFW-t. **Ha ezt a fejezetet átugrod, BRICK-elheted a konzolod!**

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Ha rákérdez arra, hogy csináljon-e egy biztonsági másolatot (essential files backup), akkor nyomd meg az (A) gombot, hogy csináljon, majd amikor végzett, nyomd meg ismét az (A) gombot a folytatáshoz
3. Ha rákérdez arra, hogy szeretnéd-e a valós dátumot és időt javítani (fix the RTC date&time), nyomd meg az (A) gombot, állítsd be a helyes dátumot és időt, majd nyomd meg az (A) gombot a folytatáshoz
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
5. Válaszd a "Scripts..." opciót
6. Válaszd "safety_test"-et
7. Olvasd el a képernyőn látható szöveget, majd nyomj (A) gombot a folytatáshoz
8. Be kell bootolnod a normál 3DS HOME Menübe (bármilyen egyéni téma irreleváns). Ha sikerült, folytasd ezeket a lépéseket
   - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. Lépj be a "System Settings"-be a konzolodon
   - If the console crashes at this point, the test has failed
10. Válaszd az "Other Settings"-t
11. Válaszd ki a "Profile"-t
12. Válaszd ki a "User Name"-t
13. Ha képes vagy beírni egy új felhasználó nevet, a teszt sikeres
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. Kapcsold ki a konzolod

::: danger

Ha NEM sikerül a hagyományos 3DS HOME Menübe bootolni, vagy a System Settings / billentyűzet nem elérhető, **NE FOLYTASD ezeket a lépéseket**! Csatlakozz a [Nintendo Homebrew Discord-on](https://discord.gg/MWxPgEp) csatornához, és kérj segítséget (angol nyelven) valakitől.

:::

### Section IV - NAND Backup

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
2. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
3. Válaszd a "Scripts..." opciót
4. Válaszd ezt: "GM9Megascript"
5. Válaszd ezt: "Backup Options"
6. Válaszd ezt: "SysNAND Backup"
7. Nyomd meg az (A) gombot a megerősítéshez
   - This process will take some time
   - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. Nyomd meg a (B) gombot, hogy visszamenj a főmenübe
9. Válaszd az "Exit" opciót
10. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
11. Válaszd a "Poweroff system"-et a konzolod kikapcsolásához

### Section V - Removing illegitimate content

::: warning

Ez a rész az illegitim tartalom eltávolításáról szól, mint a homebrew vagy a dumpolt cartridge-ek. Ha olyan mentés adatod van, amire szükséged van, mentsd le egy mentés kezelővel, mielőtt folytatod!

:::

1. Kapcsold be a konzolod
2. Lépj be a "System Settings"-be a konzolodon
3. Navigálj a következőhöz: Data Management -> Nintendo 3DS -> Software
4. Ebben a szoftver listában törölj minden nem-Nintendo tartalmat, amit telepítettél a CFW használatával
   - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. Navigálj ide: `Data Management` -> `DSiWare`
6. Ebben a szoftver listában törölj minden nem-Nintendo tartalmat, amit telepítettél a CFW használatával
   - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
   - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. Lépj ki a System Settings alkalmazásból
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Várj, amíg két gombot nem látsz
10. Nyomd le az (Bal Váll) + (D-Pad le) + (Select) gombokat egyszerre a Rosalina menü megnyitásához
11. Válaszd ki a "Miscellaneous options"-t
12. Select "Switch the hb. title to the current app."
13. Nyomd meg a (B) gombot a folytatáshoz
14. Nyomd meg a (B) gombot, hogy visszakerülj a Rosalina főmenüjébe
15. Nyomd meg a (B) gombot, hogy kilépj a Rosalina menüből
16. Nyomd meg a (Home) gombot és zárd be a Download Play-t
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Ekkor a konzolodnak be kell töltenie a Homebrew Launcher-t
19. Indítsd el a DSiWare Uninstaller-t a homebrew listából
20. Kövesd at utasításokat és engedélyezd a programnak az eltávolítást
21. Ha a folyamat sikeres volt, lép ki a Homebrew Launcher-ből és kapcsold ki a konzolodat

### Section VI - System Format

Ez a rész biztosítja, hogy az illegitim ticket-ek eltávolításra kerüljenek, így az eShop normálisan tud működni. Ez eltávolít minden tartalmat a 3DS-ről és kiléptet az NNID-dből. Tartsd észben, hogy a konzol titkosító kulcsa meg lesz keverve, ami azt jelenti, hogy minden régi adat elérhetetlenné válik, még akkor is, ha van mentésed az SD kártyád tartalmáról.

1. Kapcsold be a konzolod
2. Lépj be a "System Settings"-be a konzolodon
3. Navigálj az Other Settings -> Next Page (az utolsó oldalig) -> Format System Memory opcióhoz
4. Kövesd az utasításokat a 3DS-ed formázásához

### Section VII - Running Uninstall Script

::: warning

Ez az utolsó lehetőséged, hogy ellenőrizd, hogy minden fenti biztonsági lépést végrehajtottál! Legyél biztos benne, hogy minden lépést végrehajtottál ezen oldal összes részéből, **kifejezetten** a `III. rész - Biztonsági teszt`-et, mielőtt folytatnád.

:::

::: danger

Ha azért távolítod el a CFW-t, mert:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. Jobb ötlet az, hogy segítséget kérsz (angolul) a [Nintendo Homebrew Discord szerveren](https://discord.gg/MWxPgEp).

:::

1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
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
