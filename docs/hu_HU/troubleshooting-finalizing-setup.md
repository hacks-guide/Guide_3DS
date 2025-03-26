# Hibaelhárítás (Telepítés véglegesítése)

Ez az oldal hibaelhárítási tanácsokat ad sűrűn előforduló problémákhoz a "Telepítés véglegesítése" oldalhoz. Ha nem tudod megoldani a problémád az oldal tanácsai alapján, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) és írd le a problémádat és azt is hogy mi az amit már próbáltál.

## Problémák a telepítés véglegesítésével

:::details Sikertelen a konzol frissítése

Az alábbi lépések tetszőleges sorrendben hajthatók végre, azonban a lista a legkönnyebbtől a legnehezebben végrehajthatóig van összeállítva.

1. Ha Pretendo-t használsz válts vissza Nintendo-ra a Nimbus-szal és próbáld újra
2. Állítsd a DNS beállításokat "Auto"-ra
3. Menj közelebb a WiFi routerhez
4. Frissítsd Safe Mode-ból a konzol kikapcsolásával, nyomva tartva a (Bal Váll) + (Jobb Váll) + (D-Pad Fel) + (A) gombokat bootoláskor, majd kövesd a képernyőn megjelenők lépéseket
5. Töröld a WiFi csatlakozásod, majd csatlakozz újra WiFi-dhez
6. Indítsd újra a WiFi routered
7. Csatlakozz egy másik WiFi-hez, mint például egy hotspot
8. A Nintendo szerverei lehet, hogy nem elérhetők; Próbáld később újra
9. Ha még mindig hibát kapsz, kövesd a [CTRTransfer](ctrtransfer) című útmutatót, majd próbáld újra
10. További segítségért (angol nyelven), fordulj ide: [Nintendo Homebrew a Discord-on](https://discord.gg/MWxPgEp)

:::

:::details Error #22: finalize.romfs is invalid

A `finalize.romfs` fájl sérült vagy nem olvasható. [Töltsd le újra](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) és másold az SD kártyád gyökerébe, felülírva a létező fájlokat, majd próbáld újra.

:::

:::details Information #23: finalize.romfs in wrong location

A `finalize.romfs` rossz helyre került az SD kártya gyökere helyett. A szkript megpróbálja megoldani ezt, de szüksége van a jóváhagyásodra, hogy meg tudja tenni. Nyomj (A) gombot a következő néhány kérdésre a folytatáshoz.

:::

:::details Error #24: SD is write-protected

Ellenőrizd, hogy SD kártyád nem [zárolt-e](/images/sdlock.png). Ha az SD kártyád nem zárolt, és továbbra is ezt a hibát kapod, csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

:::details Error #02: Missing essential.exefs

'No'-t válaszoltál a "Make essential files backup?" kérdésre a GodMode9-ben. Kapcsold kia konzolod, majd be a (Start) gomb nyomva tartása mellet, hogy újra belép a GodMode9-be és válaszold a 'Yes'-t a kérdésnél, majd próbáld újra.

:::

:::details Error #04: No space

Legalább 1,33 GB szabad hely kell a NAND mentés végrehajtásához, ami a szkript része. Ha nincs elég szabad helyed, kövesd ezeket a lépéseket:

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold a `Nintendo 3DS` mappát az SD kártya gyökeréből a számítógépedre
4. Töröld a Nintendo 3DS mappát az SD kártyáról
5. Tedd vissza az SD kártyád a konzoldba
6. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
7. Nyomd meg a (Home) gombot
8. Válaszd a "Scripts..." opciót
9. Válaszd az "finalize" opciót
10. Nyomj (A)-t egy NAND mentés létrehozásához
    - Ez kb. 15 percet fog igénybe venni
11. Nyomd meg az (A) gombot újra
    - A konzolod automatikusan ki fog kapcsolni
12. Helyezd az SD kártyád a számítógépbe
13. Másold a `/gm9/backups` mappából a fájlokat az SD kártyádról egy biztonságos helyre a számítógépeden
14. Töröld a `<date>_<serialnumber>_sysnand_##.bin` és a `<date>_<serialnumber>_sysnand_##.bin.sha` fájlokat az SD kártyádról
15. Másold a `Nintendo 3DS` mappát a számítógépedről az SD kártyád gyökerébe
16. Töröld a `Nintendo 3DS` mappát a számítógépedről

Most, hogy már a NAND mentésed biztos helyen van:

1. Tedd vissza az SD kártyád a konzoldba
2. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
3. Nyomd meg a (Home) gombot
4. Válaszd a "Scripts..." opciót
5. Válaszd az "finalize" opciót
6. Folytasd a szkriptet normálisan
    - A NAND mentés automatikusan átugrásra kerül

:::

:::details Information #05: No title database

Nyomj (A)-t a cím adatbázis importálásához, old fel a SysNAND írást a képernyőn látható gombok megadásával, majd folytasd a szkriptet normálisan.

:::

:::details Error #06 "Backup failed" vagy "Error: Could not open directory" a NAND mentés készítésének megpróbálásakor

Győződj meg róla, hogy legalább 1.3 GB szabad hely van az SD kártyádon. Ha nincs elég szabad helyed, kövesd ezeket a lépéseket:

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold a `Nintendo 3DS` mappát az SD kártya gyökeréből a számítógépedre
4. Töröld a Nintendo 3DS mappát az SD kártyáról
5. Tedd vissza az SD kártyád a konzoldba
6. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
7. Hajts végre egy [NAND Backup](godmode9-usage#creating-a-nand-backup)-ot
8. Másold a `gm9/out` mappát az SD kártyádról egy biztonságos helyre a számítógépeden
9. Töröld a `<date>_<serialnumber>_sysnand_##.bin` és a `<date>_<serialnumber>_sysnand_##.bin.sha` fájlokat az SD kártyád `/gm9/out/` mappájából, megtartva az essential.exefs-t a `/gm9/out/` -ban
10. Másold a `Nintendo 3DS` mappát a számítógépedről az SD kártyád gyökerébe
11. Töröld a `Nintendo 3DS` mappát a számítógépedről

Ha van elég szabad hely az SD kártyádon, az SD kártya lehet sérült vagy hibás. Ellenőrizd az SD kártyádat hibákra valamelyik programmal az alábbiak közül az operációs rendszerednek megfelelően: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Ellenőrizd, hogy SD kártyád nem [zárolt-e](/images/sdlock.png). Ha az SD kártyád nem zárolt, és továbbra is ezt a hibát kapod, csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

:::details Information #17: Duplicate NAND backup

A szkript úgy érzékelte, hogy a Nintendo 3DS mappa hiányzik ÉS már csináltál NAND mentést korábban. Ha szeretnél telepíteni homebrew alkalmazásokat, a következőt kell tenned:

1. Nyomj (B)-t, hogy elutasítsd az újabb NAND mentés létrehozását
2. Az (R) lenyomva tartása közben nyomd meg a (Start) gombot a konzolod kikapcsolásához
3. Másold a `/gm9/backups` mappa tartalmát egy biztonságos helyre a számítógépeden
4. Töröld a `/gm9/backups/` mappát az SD kártyádról
5. Ha lemozgattad a Nintendo 3DS mappád az SD kártyádról, hogy eljuss ide, akkor másold vissza az SD kártyádra
    - Ha nincs Nintendo 3DS mappád, akkor bootolj be a HOME menübe legalább egyszer behelyezett SD kártyával, hogy automatikusan létre jöjjön
6. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
7. Nyomd meg a (Home) gombot, hogy megjelenjen a műveleti menü
8. Válaszd a "Scripts..." opciót
9. Válaszd az "finalize" opciót
10. Kövesd a script utasításait és válaszolj meg minden kérdést

:::

:::details Error #18a/18b: MSET9 detected

Nem távolítottad el az MSET9-et az előző oldalon. A szkript megpróbálja neked eltávoltani az MSET9-et; kövesd a lépések, amit a szkript ad.

:::

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Vissza a [telepítés véglegesítésére](finalizing-setup)

:::

<!--@include: ./_include/troubleshooting-return.md -->
