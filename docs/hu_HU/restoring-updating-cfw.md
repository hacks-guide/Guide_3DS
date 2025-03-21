# CFW visszaállítása / frissítése

## Kötelező olvasmány

Ez az oldal egy létező modern boot9strap telepítésre mutatja be a custom firmware appok újra telepítését és/vagy frissítését. Továbbá használható abban az esetben is helyreállításra, ha elveszett vagy megsérült az SD kártya.

Az SD kártyád FAT32-re kell legyen formázva, hogy követhesd ezt az útmutatót, vagy a 3DS nem fogja felismerni. Ha az SD kártyád nem megfelelően formázott, használd ezen oldalak valamelyikét a formázáshoz, az operációs rendszeredtől függően: [Windows](formatting-sd-\(windows\)), [Mac](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)).

## Amire szükséged lesz

- A [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) legújabb kiadása (a Luma3DS `.zip` fájl)

## Lépések

1. Helyezd az SD kártyád a számítógépbe
2. Másolj mindent a Luma3DS `.zip`-ből (`boot.firm`, `boot.3dsx`, és `config`) az SD kártyád gyökerébe, és cseréld le a már meglévő fájlt
    - Az SD kártya gyökere a kezdőkönyvtárt jelenti az SD kártyán, ahol látható a Nintendo 3DS könyvtár, de nem vagyunk benne
3. Tedd vissza az SD kártyád a konzoldba
4. Kapcsold be a konzolod
    - Ha a Luma3DS konfigurációs menüt látod, nyomj (Start) gombot a mentéshez és az újraindításhoz

::: info

A Luma3DS legfrissebb verziója most már telepítésre került az SD kártyára és a belső memóriába.

:::

::: tip

Folytatás a [telepítés véglegesítésével](finalizing-setup) a homebrew alkalmazások (pl. FBI, Homebrew Launcher) telepítéséhez vagy frissítéséhez.

:::
