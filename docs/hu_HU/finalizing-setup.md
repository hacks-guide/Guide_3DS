# Telepítés véglegesítése

## Kötelező olvasmány

A `boot.firm` nevezetű fájl az, amit maga a boot9strap elindít, amint betöltődik a NAND-ból. Ebben az esetben a [LumaTeam](https://github.com/LumaTeam/) által készített Luma3DS-t használjuk a konzol patcheléséhez, hogy tudjon homebrew programokat futtatni.

Ezen az oldalon kritikus rendszer mentéseket fogunk csinálni és néhány homebrew alkalmazást fogunk telepíteni. Ezen lépések nagy része automatizált egy szkripttel, ami a konzolodon fogsz futtatni.

::: info

A szkript a következő alkalmazásokat fogja telepíteni:

- **[FBI](https://github.com/lifehackerhansol/FBI)** _(CIA formátumú alkalmazások telepítésére)_
- **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** _(elindítja a Homebrew Launchert)_
- **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** _(egyedi témák telepítése)_
- **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** _(3DS és DS játékok mentéseiről lehet biztonsági mentést készíteni és visszaállítani)_
- **[ftpd](https://github.com/mtheall/ftpd)** _(access your 3DS SD card wirelessly)_
- **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** _(a homebrew app store for downloading homebrew from the 3DS over Wi-Fi)_
- **[GodMode9](https://github.com/d0k3/GodMode9)** _(multipurpose tool which can do NAND and cartridge functions)_

Ha nem szeretnéd ezeket az alkalmazásokat, eltávolíthatod őket, miután befejezted ezt az oldalt a System Settings -> Data Management -> Nintendo 3DS -> szoftver-hez navigálva. (A GodMode9 nem távolítható el így, és általában szükséges más funkciókhoz.)

:::

## Kompatibilitási megjegyzések

::: warning

Ha az **új 3DS** konzolod a 2.1.0 verzión volt, a [NAND-ról készült bizonsági másolatot állítsd vissza](godmode9-usage#nand-ról-készült-bizonsági-másolat-visszaállítása) mielőtt tovább mennél. Ez valószínűleg nem vonatkozik rád, ha csak nem 2017-ben olvasod ezt az útmutatót.

:::

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
   - If one of these buttons is broken, download [config.ini](/assets/config.ini) and put it in your `luma` folder, replacing the existing one. Ez átállítja a Rosalina menu billentyű kombinációt (X) + (Y)
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
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
   - If you encounter an error, consult the [troubleshooting](troubleshooting#finalizing-setup) page
3. Ha a Helper sikeres volt, a konzolodnak ezt követően be kell bootolni a GodMode9-be
   - From this point forward, you can access GodMode9 by holding START while powering on your console
4. Ha rákérdez arra, hogy csináljon-e egy biztonsági másolatot (essential files backup), akkor nyomd meg az (A) gombot, hogy csináljon, majd amikor végzett, nyomd meg ismét az (A) gombot a folytatáshoz
5. Ha rákérdez arra, hogy szeretnéd-e a valós dátumot és időt javítani (fix the RTC date&time), nyomd meg az (A) gombot, állítsd be a helyes dátumot és időt, majd nyomd meg az (A) gombot a folytatáshoz
6. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
7. Válaszd a "Scripts..." opciót
8. Válaszd az "finalize" opciót
9. Kövesd a script utasításait és válaszolj meg minden kérdést
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting#finalizing-setup) page
10. Ha a szkript a "Setup complete!" üzenetet írja, nyomj (A) gombot az eszköz kikapcsolásához
    - Ha NEM láttad a "Setup complete!" üzenetet, akkor a szkript nem volt sikeres és újra kell csinálnod ezt a részt a 3. lépéstől
11. Helyezd az SD kártyád a számítógépbe
12. Másold a `/gm9/backups/` mappát az SD kártyádról egy biztonságos helyre a számítógépeden
    - This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
13. Ha még mindig megvannak, töröld a két `SysNAND` fájlt a `/gm9/backups/` mappából az SD kártyádon
    - The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

::: tip

Kész vagy! Az egyedi firmware most már teljesen be van állítva a konzolodon.

:::

::: info

Próbálod kitalálni, mit tegyél a frissen módosított eszközöddel? Látogasd meg a [wiki-nket](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Information and Notes

::: info

Néhány billentyű kombináció amit ismerned kell:

- Holding (Select) on boot will launch the Luma3DS configuration menu.
- Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
- By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. Ezt lehet módosítani a Rosalina menüben.
- Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. Tekintsd meg [változási naplót](https://github.com/SciresM/boot9strap/releases/tag/1.4) egy listáért.

:::

::: info

Információkért a GodMode9 különféle funkcióiról olvasd el a [GodMode9 használata](godmode9-usage) és a [Címek és Játék Cartridge-ek dumpolása](dumping-titles-and-game-cartridges) című leírásokat.

:::
