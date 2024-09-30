# Boot9strap telepítése (Soundhax)

:::details Technical Details (optional)

A technikai részleteit az ezen az oldalon használt exploit-oknak tekintsd meg [itt](https://github.com/nedwill/soundhax) (Soundhax) és [itt](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Compatibility Notes

A Soundhax (amikor universal-otherapp-pal használjuk) kompatibilis az 1.0.0-s verziótól egészen a 11.3.0-ig minden régió esetén.

## What You Need

- The latest release of [Soundhax](http://soundhax.com) _(for your region, console, and version)_
  - If Soundhax appears in your browser as an unplayable video, press Ctrl+S or Cmd+S to save it to your computer
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

Ebben a fejezetben fel fogod másolni a fájlokat, amik a Soundhax és az universal-otherapp kiváltásához szükségesek.

1. Kapcsold ki a konzolod
2. Helyezd az SD kártyád a számítógépbe
3. Másold a Soundhax `.m4a` fájlját az SD kártyád gyökerébe
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
4. Másold az `otherapp.bin` fájlt az SD kártyád gyökerébe
5. Copy everything from the Luma3DS `.zip` to the root of your SD card
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

### Section II - Launching SafeB9SInstaller

Ebben a fejezetben el fogod indítani a Soundhax-ot a Nintendo 3DS Sound app-on keresztül, ami az universal-otherapp-ot fogja használni arra, hogy elindítsa a a boot9strap (egyedi firmware) telepítőt.

1. Indítsd el a Nintendo 3DS Sound-ot

   ::: info

   ![](/images/screenshots/soundhax/soundhax-welcome.png)

   :::

2. Ha ezelőtt még sohasem indítottad el a Nintendo 3DS Sound-ot, és a madár ikon elkezd tippeket adni, lépkedj végig a tippeken, zárd be a szokásos módon az alkalmazást, majd nyisd meg újra
   - In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done

3. Válaszd a `/SDCARD` mappát, majd játszd le a "<3 nedwill 2016" nevű hangfájlt

   - This may take many (up to 10) tries
   - If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
   - If it freezes, force the console to power off by holding the power button, then try again
   - If you get a different error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-soundhax)

   ::: info

   ![](/images/screenshots/soundhax/soundhax-launch.png)

   :::

4. Ha az exploit sikerrel járt, készüléked bebootolja a SafeB9SInstallert

### Section III - Installing boot9strap

Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
