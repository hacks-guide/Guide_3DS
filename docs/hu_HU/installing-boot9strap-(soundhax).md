# Boot9strap telepítése (Soundhax)

:::details Technikai részletek (opcionális)

A technikai részleteit az ezen az oldalon használt exploit-oknak tekintsd meg [itt](https://github.com/nedwill/soundhax) (Soundhax) és [itt](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Kompatibilitási megjegyzések

A Soundhax (amikor universal-otherapp-pal használjuk) kompatibilis az 1.0.0-s verziótól egészen a 11.3.0-ig minden régió esetén.

## Amire szükséged lesz

- A [Soundhax](http://soundhax.com) legújabb kiadása _(a régiódnak, a konzolodnak és rendszer verziódnak megfelelő változat)_
  - Ha a Soundhax a böngésződben nem lejátszható videónak tűnik, nyomj Ctrl+S vagy Cmd+S gombokat a gépedre mentéséhez
- A [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) legfrissebb verziója (közvetlen letöltés)
- A [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) legfrissebb verziója (közvetlen letöltés)
- A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)
- A [universal-otherapp] legújabb kiadása (https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Lépések

### I. rész - Előkészületek

Ebben a fejezetben fel fogod másolni a fájlokat, amik a Soundhax és az universal-otherapp kiváltásához szükségesek.

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold a Soundhax `.m4a` fájlját az SD kártyád gyökerébe
   - Az SD kártya gyökere a kezdőkönyvtárt jelenti az SD kártyán, ahol látható a Nintendo 3DS könyvtár, de nem vagyunk benne
4. Másold az `otherapp.bin` fájlt az SD kártyád gyökerébe
5. Másolj mindent a Luma3DS `.zip`-ből az SD kártya gyökerébe
6. Hozz létre egy mappát `boot9strap` néven az SD kártya gyökerében
7. Másold át a `boot9strap.firm` fájlt és a `boot9strap.firm.sha` fájlt a boot9strap `.zip` fájlból az SD kártyád `/boot9strap/` mappájába
8. Másold át a `SafeB9SInstaller.bin` fájlt a SafeB9SInstaller `.zip`-ből az SD kártyád gyökerébe
9. Tedd vissza az SD kártyád a konzoldba
10. Kapcsold be a konzolod

::: info

![](/images/screenshots/soundhax/soundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### II. rész - A SafeB9SInstaller indítása

Ebben a fejezetben el fogod indítani a Soundhax-ot a Nintendo 3DS Sound app-on keresztül, ami az universal-otherapp-ot fogja használni arra, hogy elindítsa a a boot9strap (egyedi firmware) telepítőt.

1. Indítsd el a Nintendo 3DS Sound-ot

   ::: info

   ![](/images/screenshots/soundhax/soundhax-welcome.png)

   :::

2. Ha ezelőtt még sohasem indítottad el a Nintendo 3DS Sound-ot, és a madár ikon elkezd tippeket adni, lépkedj végig a tippeken, zárd be a szokásos módon az alkalmazást, majd nyisd meg újra
   - Ebben az esetben, ha azonnal indítanánk a Soundhax-et, minden egyes alkalommal megjelennének ezek a tippek a Nintendo 3DS Sound indításánál mindaddig, amíg nem végeznénk

3. Válaszd a `/SDCARD` mappát, majd játszd le a "<3 nedwill 2016" nevű hangfájlt

   - Ez lehet, hogy csak sok (akár 10) próba után fog működni
   - Ha azt az üzenetet látod, hogy "Could not play", akkor vagy olyan rendszer verzión vagy, ami inkompatiblis a soundhax-szal, vagy rossz Soundhax kiadást töltöttél le
   - Ha lefagyna, kényszerítsd leállásra a konzolt a bekapcsológomb lenyomva tartásával, majd próbálkozz újra
   - If you get a different error, [follow this troubleshooting guide](troubleshooting-soundhax)

   ::: info

   ![](/images/screenshots/soundhax/soundhax-launch.png)

   :::

4. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert

### III. rész - boot9strap telepítése

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-soundhax)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Tovább a [telepítés véglegesítésére](finalizing-setup)

:::
