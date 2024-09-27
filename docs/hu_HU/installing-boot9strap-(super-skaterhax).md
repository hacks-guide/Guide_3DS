# Boot9strap telepítése (super-skaterhax)

:::details Technical Details (optional)

A technikai részletei az ezen az oldalon használt exploit-oknak [itt](https://github.com/zoogie/super-skaterhax) találhatók.

:::

### Compatibility Notes

A super-skaterhax (ami a Homebrew Launcher indítására használt) kompatibilis a 11.15.0 és a feletti verziós New modellekkel minden régióban.

::: warning

A megadott lépések csak a New 3DS, New 3DS XL és New 2DS XL típusokra vonatkoznak. Mielőtt folytatnád, kérjük ellenőrizd, hogy a moddolandó konzolod New 3DS, New 3DS XL, vagy New 2DS XL.

:::

### What You Need

- The [super-skaterhax](https://toxicaven.dev/skater) zip for your console's region and system version

#### Section I - Prep Work

Ebben a fejezetben fel fogod másolni a fájlokat, amik a super-skaterhax és a Homebrew Launcher triggereléshez szükségesek.

1. Kapcsold ki a konzolod

2. Helyezd az SD kártyád a számítógépbe

3. Másolj át a mindent a sk8rhax `.zip`-ből az SD kártyád gyökerébe, felülírva minden már ott lévő fájlt

   ::: info

   ![](/images/screenshots/skater-root-layout.png)

   :::

4. Tedd vissza az SD kártyád a konzoldba

5. Kapcsold be a konzolod

6. Indítsd el a System Settings-et

7. Válaszd az "Other Settings"-t

8. Navigálj a "Profile" -> "Region Settings" opcióhoz
   - If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that tells you that you will lose access to Nintendo Network ID features, you can safely select OK to continue
   - After completing this page, you can restore the region settings back to normal

9. Válaszd ki a következő opciókat a konzolod régiójának megfelelően ([kép](/images/screenshots/skaterhax/skater-lang.png))
   - USA: United States, Do Not Set
   - EUR: United Kingdom, Do Not Set
   - JPN: 日本, 設定しない
   - KOR: 대한민국, 설정하지 않음

10. Lépj ki a System Settings-ből

#### Section II - super-skaterhax

Ebben a fejezetben meg fogod látogatni a browser exploit weboldalt, ami elindítja a Homebrew Launcher-t.

::: info

Ha még nem történt meg, biztosítsd, hogy legyen működő Internet kapcsolata a konzolodnak.

:::

1. A HOME menüben nyomd meg a bal és jobb váll gombokat egyszerre, hogy megnyisd a kamerát
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/super/` for EUR/USA/JPN, `https://zoogie.github.io/web/korea` for KOR)
2. Nyomd meg a QR kód gombot és olvasd be a következő QR kódok egyikét, ami megfelel a konzol régiódnak, [itt](https://user-images.githubusercontent.com/28328903/226086338-585bfdac-0aac-44c0-b413-89206d2815d8.png)
   - If you get a security certificate warning, please ensure that the system date is today's
3. Nyomj (Select) gombot a könyvjelző fül megnyitásához
   - If your (Select) button does not respond, tap the star icon on the bottom-left corner of the screen
4. Éríntsd meg a "Bookmark this page" feliratot
5. Nyomd meg a (B) gombot egyszer, hogy visszatérj a böngészőhöz
6. Nyomj (ZR) gombot a fülek listájának megnyitásához
   - If your (ZR) button does not respond, tap the two overlapped squares near the bottom-right corner of the screen
7. Legyél biztos abban, hogy az egyetlen nyitott fül az a super-skaterhax weboldala
   - This tab should be highlighted in blue on the tab list
   - If other tabs are open, close them
8. Nyomd meg a (B) gombot egyszer, hogy visszatérj a böngészőhöz
9. Nyomd meg a (START) gombot, hogy megnyisd a helyérzékeny menüt
   - If your (Start) button does not respond, tap the 3-line menu on the bottom-right corner of the screen
10. Érintsd meg a "Settings"-et
11. Érintsd meg a "Delete Cookies"-t
12. Nyomd meg az (A) gombot a folytatáshoz
13. Nyomj (Home) gombot a HOME Menübe visszatéréshez, majd nyomj azonnal egy (A)-t a böngésző ismételt elindításához
14. Válaszd a "GO GO!" gombot az alsó képernyőn
15. Nyomj (A) gombot a felugró [popup](/images/screenshots/skaterhax/skater-popup.png) figyelmen kívül hagyásához
    - If your console freezes on a yellow screen, hold the POWER button until it turns off, then retry this section
    - If your console freezes on a red screen, hold the POWER button until it turns off, redo step 3 of Section II, then retry this section
    - If your console [shows the word Text on the top-left corner of the bottom screen](/images/screenshots/skaterhax/skater-old3ds.png), you have an Old 3DS and this exploit **will not work on your device**. Ha ez az eset, használd az [MSET9](installing-boot9strap-\(mset9\))-et helyette
    - If you get another error, try again up to 5 times, and if it still doesn't work, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-super-skaterhax)
16. Ekkor a konzolodnak be kell bootolni a Homebrew Launcher-be
17. Indítsd el a nimdsphax-et a homebrew listájáról
18. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
    - If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section
    - This may take up to five attempts

#### Section III - Installing boot9strap

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Most már visszaállíthatod a régiós beállításaidat a normálisra.

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
