---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Boot9strap telepítése (super-skaterhax)

:::details Technikai részletek (opcionális)

A technikai részletei az ezen az oldalon használt exploit-oknak [itt](https://github.com/zoogie/super-skaterhax) találhatók.

:::

### Kompatibilitási megjegyzések

A super-skaterhax (ami a Homebrew Launcher indítására használt) kompatibilis a 11.15.0 és a feletti verziós New modellekkel minden régióban.

::: warning

A megadott lépések csak a New 3DS, New 3DS XL és New 2DS XL típusokra vonatkoznak. Mielőtt folytatnád, kérjük ellenőrizd, hogy a moddolandó konzolod New 3DS, New 3DS XL, vagy New 2DS XL.

:::

### Amire szükséged lesz

- A [Super-skaterhax](https://skater.nintendohomebrew.com) zip konzolod verziójának és régiójának megfelelő változata

#### I. rész - Előkészületek

Ebben a fejezetben fel fogod másolni a fájlokat, amik a super-skaterhax és a Homebrew Launcher triggereléshez szükségesek.

1. Kapcsold ki a konzolod

2. Helyezd az SD kártyád a számítógépbe

3. Másolj át a mindent a uper-skaterhax `.zip`-ből az SD kártyád gyökerébe, felülírva minden már ott lévő fájlt

    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

4. Tedd vissza az SD kártyád a konzoldba

5. Kapcsold be a konzolod

6. Indítsd el a System Settings-et

7. Válaszd az "Other Settings"-t

8. Navigálj a "Profile" -> "Region Settings" opcióhoz
    - Ezek a beállítások átmenetileg megváltoznak, hogy növeljék az exploit sikerarányát
    - Visszaállíthatod a régiós beállításaidat a normálisra, amint befejezted ezt az oldalt
    - Ha egy [warning](/images/screenshots/skaterhax/country-change-notice.png)-ot kapsz, amit azt mondja, hogy el fogod veszíteni a a hozzáférést a Nintendo Network ID funkciókhoz, akkor biztonságosan kiválaszthatod az OK-t a folytatáshoz

9. Válaszd ki a következő opciókat a konzolod régiójának megfelelően ([kép](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. Navigate to "Date & Time"

11. Set "Today's Date" and "Current Time" to the current date and time in your timezone

12. Lépj ki a System Settings-ből

#### II. rész - super-skaterhax

Ebben a fejezetben meg fogod látogatni a browser exploit weboldalt, ami elindítja a Homebrew Launcher-t.

::: info

A video detailing these steps is available [here](https://www.youtube.com/watch?v=DEcZB72vJts).

:::

1. Open the Internet Browser
2. Tap the 3-line (☰) icon on the bottom-right corner of the screen
3. Tap `Settings` -> scroll down -> `Reset Save Data` -> `Clear All` -> `Clear` -> `OK`
    - The browser will close
4. Reopen the Internet Browser
5. Tap `Next` -> `Google` -> `OK` -> `OK`
6. Tap on the address bar at the top of the bottom screen
7. Enter the URL corresponding to your console's region:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Tap "Open"
    - You should see the text "GO GO!". Do not click on it yet
9. Tap the 3-line (☰) icon on the bottom-right corner of the screen
10. Tap on "Add to Bookmarks"
11. Tap the 3-line (☰) icon on the bottom-right corner of the screen
12. Tap on `Settings` -> `Delete Cookies` -> `Yes`
13. Press (Home) to return to the HOME Menu, then immediately reopen the Internet Browser
14. Wait for the page to fully load, then tap the "GO GO!" button on the top of the bottom screen
15. Wait for the page to fully load, then press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
16. If your console displays:
    - **"The Homebrew Launcher" screen**: Continue to the next step
    - **A white "Error has occurred" message box**: The exploit failed due to random chance. Open System Settings, change the language to a different one (if possible), then retry this section. Be persistent; you may have to repeat this sequence up to ten times
        - On JPN/KOR region consoles, there is only one language setting. On those consoles, you should open System Settings, close it, then retry this section
        - If the exploit is still unsuccessful after more than ten attempts, there may be a problem with your files or SD card. Ensure that you are **not** using WinRAR to extract files, as it is known to cause issues
    - **A black screen that says "An error has occurred"**: Your file placement is incorrect. Ensure that the super-skaterhax files are on the root of the SD card
    - **A yellow screen**: Homebrew Launcher failed to open due to random chance. Hold the POWER button until the console turns off, then retry this section
    - **[The word "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: You have an Old 3DS, where this exploit **does not work**. Ha ez az eset, használd az [MSET9](installing-boot9strap-\(mset9\))-et helyette
17. Indítsd el a nimdsphax-et a homebrew listájáról
18. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert
    - Ha a konzolod lefagy egy vörös vagy zöld képernyőn, tartsd nyomva a POWER gombot, amíg ki nem kapcsol, és próbáld újra ezt a részt

#### III. rész - boot9strap telepítése

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Tovább a [telepítés véglegesítésére](finalizing-setup)

:::
