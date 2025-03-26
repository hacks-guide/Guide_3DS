# Hibaelhárítás (super-skaterhax)

Ez az oldal hibaelhárítási tanácsokat ad sűrűn előforduló problémákhoz a "Boot9strap telepítése (super-skaterhax)" oldalhoz. Ha nem tudod megoldani a problémád az oldal tanácsai alapján, csatlakozz a [Nintendo Homebrew-hoz Discord-on](https://discord.gg/MWxPgEp) és írd le a problémádat és azt is hogy mi az amit már próbáltál.

::: warning

Ezak a lépések csak a "Boot9strap telepítése (super-skaterhax)" oldalhoz érvényesek. Ha **mást használsz, mint** egy **New 3DS** \*\*11.15.0-11.17.0 \*\* verzióval, követned kell a [hibaelhárítási lépéseket a Boot9strap telepítése (SSLoth-Browser)](troubleshooting-ssloth-browser) oldalhoz helyette.

:::

## Problémák a super-skaterhax-szal

:::details "An error has occurred. Please save your data in any software currently in use, then restart the system."

Ha nincs szín villogás a "GO GO!" megnyomása után:

- Legyél biztos abban, hogy a rendszer idő és [régiós beállításaid](/images/screenshots/skaterhax/skater-lang.png) megfelelőek
- Biztosítsd, hogy ne legyen másik böngésző fül megnyitva, majd indítsd újra a böngészőt és próbáld újra az exploit-ot

Ha a képernyő színeket villogtat, akkor lefagy/összeomlik:

- Biztosítsd, hogy a konzolod verziójának és régiójának megfelelő másolata van meg neked az `arm11code.bin` és `browserhax_hblauncher_ropbin_payload.bin` fájlokból
- Próbáld meg törölni a böngésző adatot:
    1. Indítsd el a böngészőt, majd lépj be a beállításokba (browser settings)
    2. Görgess a legaljára, majd válaszd a "Reset Save Data" opciót (ami lehet, hogy "Initialize Savedata" vagy "Clear All Save Data" néven fut")
    3. Próbáld meg újra végrehajtani az exploitot
- Próbáld meg módosítani a rendszer nyelvét valami másra mint az aktuális nyelv

:::

:::: details "An error has occurred. Hold down the POWER button to turn off the power..." (fekete képernyő szöveggel)

A `arm11code.bin` fájl hiányzik, vagy rossz helyen van. Biztosítsd, hogy [super-skaterhax legfrissebb verziójából](https://skater.nintendohomebrew.com/) régiódhoz és verziódhoz tartozó fájlokat az SD kártya gyökerébe másold (nem egy mappán belülre).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details Egy exception történik vagy "DLL_HEAP_INFORMATION" a GO! megnyomásakor! GO!

Ez valószínűleg azt jelzi, hogy már van egyedi firmware-ed. Érdemes elvégezned a [CFW ellenőrzését](checking-for-cfw).

:::

## Problémák a SafeB9SInstaller-rel

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Vissza a [Boot9strap telepítése (super-skaterhax)](installing-boot9strap-\(super-skaterhax\))-hez

:::

<!--@include: ./_include/troubleshooting-return.md -->
