---
title: "Telepítés véglegesítése"
---

{% include toc title="Tartalomjegyzék" %}

### Fontos tudnivalók

A `boot.firm` nevezetű fájl az, amit maga a boot9strap elindít, amint betöltődik a NAND-ból. Ebben az esetben a [LumaTeam](https://github.com/LumaTeam/) által készített Luma3DS-t használjuk a konzol patcheléséhez, hogy tudjon homebrew programokat futtatni.

Ezen az oldalon kritikus rendszer mentéseket fogunk csinálni és néhány homebrew alkalmazást fogunk telepíteni. Ezen lépések nagy része automatizált egy szkripttel, ami a konzolodon fogsz futtatni.

{% capture notice-6 %}
A szkript a következő alkalmazásokat fogja telepíteni:

+  **[FBI](https://github.com/lifehackerhansol/FBI)** *(CIA formátumú alkalmazások telepítésére)*
+  **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** *(elindítja a Homebrew Launchert)*
+ **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** *(egyedi témákat telepít)*
+  **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** *(3DS és DS játékok mentéseiről lehet biztonsági mentést készíteni és visszaállítani)*
+  **[ftpd](https://github.com/mtheall/ftpd)** *(a 3DS-ed SD kártyájának vezeték nélküli elérése)*
+  **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** *(egy homebrew app store homebrew letöltéséhez a 3DS-re WiFi-n keresztül)*
+ **[GodMode9](https://github.com/d0k3/GodMode9)**  *(sokféle dologra használható eszköz, például NAND és kártya műveletekre)*

Ha nem szeretnéd ezeket az alkalmazásokat, eltávolíthatod őket, miután befejezted ezt az oldalt a System Settings -> Data Management -> Nintendo 3DS -> szoftver-hez navigálva. (A GodMode9 nem távolítható el így, és általában szükséges más funkciókhoz.)
{% endcapture %}
<div class="notice--info">{{ notice-6 | markdownify }}</div>

### Kompatibilitási megjegyzések

Ha az **új 3DS** konzolod a 2.1.0 verzión volt, a [NAND-ról készült bizonsági másolatot állítsd vissza](godmode9-usage#nand-ról-készült-bizonsági-másolat-visszaállítása) mielőtt tovább mennél. Ez valószínűleg nem vonatkozik rád, ha csak nem 2017-ben olvasod ezt az útmutatót.
{: .notice--warning}

Ha az előző egyedi firmware rendszered EmuNAND alapú volt és szeretnéd az EmuNAND/RedNAND tartalmait a SysNAND-re másolni, kövest az [EmuNAND költöztetése](move-emunand) útmutatót ez az oldal előtt. Ha nem tudod mi az az EmuNAND, ez nem vonatkozik rád.
{: .notice--info}

### Amire szükséged lesz

* [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (közvetlen letöltés)
* [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (közvetlen letöltés)

### Utasítások

#### I. rész - Előkészületek

Ebben a fejezetben fel fogod másolni az ahhoz szükséges fájlokat, hogy kövesd a lépéseket ezen az oldalon.

1. Kapcsold ki a konzolod
1. Helyezd az SD kártyád a számítógépbe
1. Másold az `finalize.romfs` fájlt az SD kártyád gyökerébe
1. Nyisd meg a `luma` mappát az SD kártyádon és hozz létre egy mappát `payloads` néven benne, ha még nem létezik
1. Másold át az `x_finalize_helper.firm` fájlt a `payloads` mappába
1. Tedd vissza az SD kártyád a konzoldba

Az alábbi képernyőképek mutatják az SD kártya minimális elrendezését ahhoz, hogy ezt az útmutatót követni tudd. Lehetnek extra fájljaid és mappáid az SD kártyádon, függően a korábbi telepítésedtől vagy metódustól, amit követtél.

![]({{ "/images/screenshots/finalizing-root-layout.png" | absolute_url }})
{: .notice--info}

![]({{ "/images/screenshots/finalizing-luma-payloads.png" | absolute_url }})
{: .notice--info}

#### II. rész - A rendszer frissítése

Ebben a fejezetben frissíteni fogod a rendszered a legutolsó verzióra, ami biztonságos az egyedi firmware-rel.

{% include_relative include/sysupdate.txt cfw="true" %}

#### III. rész - RTC és DSP telepítése

Ebben a fejezetben szinkronizálni fogod a 3DS belső óráját az aktuális időhöz és dumpolni a hang firmware-t (ami szükséges néhány homebrew alkalmazáshoz, hogy a hangot megfelelően használja).

1. Nyomd le az (Bal Váll) + (D-Pad le) + (Select) gombokat egyszerre a Rosalina menü megnyitásához
    + Ha valamelyik gombod törött, töltsd le a [config.ini]({{ base_path }}/assets/config.ini){:download="config.ini"} fájlt és rakd a `luma` mappádba, felülírva az ott lévőt. Ez átállítja a Rosalina menu billentyű kombinációt (X) + (Y)
1. Válaszd ki a "Miscellaneous options"-t
1. Válaszd a "Dump DSP firmware" opciót
1. Nyomd meg a (B) gombot a folytatáshoz
1. Válaszd a "Nullify user time offset" opciót
1. Nyomd meg a (B) gombot a folytatáshoz
1. Nyomd meg a (B) gombot, hogy visszakerülj a Rosalina főmenüjébe
1. Nyomd meg a (B) gombot, hogy kilépj a Rosalina menüből

#### IV. rész - Telepítő szkript

Ebben a fejezetben szkripteket fogsz használni arra, hogy automatizáld a homebrew telepítést, az SD kártya takarítást és a rendszer mentést.

1. Kapcsold ki a konzolod
1. Nyomd le és tartsd nyomva az (X) gombot, és az (X) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a Finalizing Setup Helper-t
    + Ha a HOME menübe bootoltál, akkor lehet hogy a `payloads` mappád neve elírt, vagy rossz helyen van
    + Ha hibát kapsz, tekintsd meg a [hibaelhárítás](troubleshooting#finalizing-setup) oldalt
1. Ha a Helper sikeres volt, a konzolodnak ezt követően be kell bootolni a GodMode9-be
    + Ettől a ponttól kezdve a GodMode9-et a START gomb bekapcsolás melletti nyomva tartásával éred el
1. Ha rákérdez arra, hogy csináljon-e egy biztonsági másolatot (essential files backup), akkor nyomd meg az (A) gombot, hogy csináljon, majd amikor végzett, nyomd meg ismét az (A) gombot a folytatáshoz
1. Ha rákérdez arra, hogy szeretnéd-e a valós dátumot és időt javítani (fix the RTC date&time), nyomd meg az (A) gombot, állítsd be a helyes dátumot és időt, majd nyomd meg az (A) gombot a folytatáshoz
1. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
1. Válaszd a "Scripts..." opciót
1. Válaszd az "finalize" opciót
1. Kövesd a script utasításait és válaszolj meg minden kérdést
    + Ha hibát kapsz, kövesd a hibaüzenet lépéseti vagy tekintsd meg a [hibaelhárítás](troubleshooting#finalizing-setup) oldalt
1. Ha a szkript a "Setup complete!" üzenetet írja, nyomj (A) gombot az eszköz kikapcsolásához
    + Ha NEM láttad a "Setup complete!" üzenetet, akkor a szkript nem volt sikeres és újra kell csinálnod ezt a részt a 3. lépéstől
1. Helyezd az SD kártyád a számítógépbe
1. Másold a `/gm9/backups/` mappát az SD kártyádról egy biztonságos helyre a számítógépeden
    + Ez a mappa tartalmazza a kritkus mentés fájlokat és célszerű több helyre menteni (pl. felhős tárolás) ha lehetséges
    + A 2 SysNAND fájl a te NAND mentésed, és arra használható, hogy visszaállítsd a konzolod működő állapotba, ha egy szoftver probléma brickelné
    + Az `essential.exefs` fájl tartalmazza a konzolod rendszerre-egyedi fájljai és arra használhatod, hogy helyreállítsd az adataid egy hardver probléma esetén
1. Ha még mindig megvannak, töröld a két `SysNAND` fájlt a `/gm9/backups/` mappából az SD kártyádon
    + Az`essential.exefs` fájl kis méretű és rajta tarthatod az SD kártyádon a könnyű eléréshez

___

Kész vagy! Az egyedi firmware most már teljesen be van állítva a konzolodon.
{: .notice--success}

Próbálod kitalálni, mit tegyél a frissen módosított eszközöddel? Látogasd meg a [wiki-nket](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!
{: .notice--info}

### Információk és megjegyzések

{% capture notice-6 %}
Néhány billentyű kombináció amit ismerned kell:

+ Indításkor előhozhatod a Luma3DS konfigurációs menüjét a (Select) gomb lenyomva tartásával.
+ Indításkor előhozhatod a GodMode9-et, vagy ha több payload van a `/luma/payloads/` mappában a Luma3DS chainloader-t a (Select) gomb lenyomva tartásával.
+ Alapból a (Bal váll) + (D-pad le) + (Select) gombok megnyomásával 3DS módban a Rosalina menü megnyílik, ahol többek közt megnézhetsz rendszer információkat, csinálhatsz képernyő képeket, és engedélyezhetsz csalásokat és még több. Ezt lehet módosítani a Rosalina menüben.
+ A (Start) + (Select) + (X) lenyomva tartása indítás közben a figyelmeztető LED-en színt mutat debug célokból. Tekintsd meg [változási naplót](https://github.com/SciresM/boot9strap/releases/tag/1.4) egy listáért.
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

Információkért a GodMode9 különféle funkcióiról olvasd el a [GodMode9 használata](godmode9-usage) és a [Címek és Játék Cartridge-ek dumpolása](dumping-titles-and-game-cartridges) című leírásokat.
{: .notice--info}
