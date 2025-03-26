# Hibaelhárítás (SSLoth-Browser)

Ez az oldal hibaelhárítási tanácsokat ad sűrűn előforduló problémákhoz a "Boot9strap telepítése (SSLoth-Browser)" oldalhoz, ami az 11.4.0 és 11.13.0 rendszer verziókon használt. Ha nem tudod megoldani a problémád az oldal tanácsai alapján, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) és írd le a problémádat és azt is hogy mi az amit már próbáltál.

::: warning

Ezak a lépések csak a "Boot9strap telepítése (SSLoth-Browser)" oldalhoz érvényesek. Ha egy **New 3DS**-t \*\*11.15.0-11.17.0 \*\* verzióval használsz, követned kell a [hibaelhárítási lépéseket a Boot9strap telepítése (super-skaterhax)](troubleshooting-super-skaterhax) oldalhoz helyette.

:::

## SSLoth-Browser

:::details Piros/lila/rózsaszín és fehér képernyő a browserhax futtatása után

Ez valószínűleg azt jelzi, hogy már van egyedi firmware-ed. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..." (fekete képernyő szöveggel)

A `arm11code.bin` fájl hiányzik, vagy rossz helyen van. Töltsd le a legutolsó kiadását az [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)-nak és rakd az `otherapp.bin` fájlt az SD kártyád gyökerébe, majd nevezd át `arm11code.bin`-re. Ne add hozzá a `.bin` kiterjesztést, ha nem látod.

:::

:::details "An error has occurred, forcing the software to close..." (fehér üzenet ablak)

Probléma lehet az arm11code.bin`fájloddal. Töltsd le a legutolsó kiadását az [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)-nak és rakd az`otherapp.bin`fájlt az SD kártyád gyökerébe, majd nevezd át`arm11code.bin`-re. Ne add hozzá a `.bin\` kiterjesztést, ha nem látod.

Megpróbálhatod még alaphelyzetbe állítani a böngésző mentés adatot:

1. Indítsd el a böngészőt, majd lépj be a beállításokba (browser settings)
2. Görgess a legaljára, majd válaszd a "Reset Save Data" opciót (ami lehet, hogy "Initialize Savedata" vagy "Clear All Save Data" néven fut")
3. Próbáld meg újra végrehajtani az exploitot

:::

:::details A browserhax QR kód vagy URL megnyitásásakor összeomlik

A böngésző alapú exploitok (mint például ez) gyakran instabilak és sokszor lefagynak, de néha megjavíthatók az alábbi lépések végrehajtásával.

1. Indítsd el a böngészőt, majd lépj be a beállításokba (browser settings)
2. Görgess a legaljára, majd válaszd a "Reset Save Data" opciót (ami lehet, hogy "Initialize Savedata" vagy "Clear All Save Data" néven fut")
3. Próbáld meg újra végrehajtani az exploitot

:::

:::details Rendszerfrissítés (System Update) ugrik fel, amikor megnyitom a böngészőt

Az SSLoth proxy nem lett megfelelően konfigurálva. Csináld újra az SSLoth fejezetet erről az oldalról.

:::

:::details Error 032-0420 hiba a böngésző megnyitásakor

Kövesd az alábbi lépéseket:

1. Lépj be a "System Settings"-be a konzolodon
2. Navigálj az `Internet Settings` -> `Connection Settings` opciókhoz
3. Kattints a saját hálózati kapcsolatodra és navigálj a `Change Settings` -> `Next Page (jobb nyíl)` -> `Proxy Settings` opcióhoz
4. Állítsd a "Proxy Settings"-t "No"-ra
5. Kattints az OK-ra, majd kattints a Save-re
6. Amikor kérdezi, kattints a "Test"-re a kapcsolat ellenőrzéséhez
    - A tesztnek sikeresnek kell lennie
7. Kattints az OK gombra a folytatáshoz
8. Nyomj a "Back"-re kétszer, majd a "Close"-ra, hogy visszajuszz a HOME Menübe
9. Nyisd meg az Internet Browser-t egyszer
10. Ha kérdezi a rendszer frissítést, nyomj OK-t
    - Ez nem fogja frissíteni a rendszert
11. Kezd előlről a [II. résszel](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Lefagyás a "Doing agbhax..." üzenetnél

Probléma lehet az arm11code.bin`fájloddal. Töltsd le újra a legutolsó kiadását az [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest)-nak és rakd a fájlt az SD kártyád gyökerébe, majd nevezd át`arm11code.bin`-re. Ne add hozzá a `.bin\` kiterjesztést, ha nem látod.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Csatlakozz a [Nintendo Homebrew-hoz a Discord-on](https://discord.gg/MWxPgEp) segítségért.

:::

:::details Failed to mount the SD card!

Mentsd az adataidat, majd formázd újra az SD kártyád FAT32 formátumra, az ajánlott alkalmazással az operációs rendszerednek megfelelően. ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). A MiniTool Partition Wizard-ról és a HP formázó eszközről (HPUSBDisk) ismert, hogy problémákat okoznak a 3DS SD kártyákkal.

Ha ez sikertelen, próbálkozz egy másik SD kártyával.

:::

## Problémák a SafeB9SInstaller-rel

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Vissza a [Boot9strap telepítése (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\)) oldalhoz

:::

<!--@include: ./_include/troubleshooting-return.md -->
