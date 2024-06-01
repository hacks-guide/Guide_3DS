Ez a rész a rendszer beállítások alaphelyzetbe állítását szolgálja. **A telepített játékok ls mentéseik nem érintettek.** Ez **szükséges**, hogy megelőzzük az ismert problémákat, amit a kibővített memória módhoz és appletekhez bizonyos konzolokon.

1. Kapcsold ki a konzolod
1. Nyomd le és tartsd nyomva a (Start) gombot, és a (Start) nyomva tartása mellett kapcsold be a konzolod. Ez elindítja a GodMode9-et
1. Menj ide: `[0:] SDCARD` -> `gm9`
1. Nyomd meg az (X) gombot, miközben a CTRTransfer `.bin` van kijelölve, hogy kitöröld
1. Nyomd meg az (A) gombot a megerősítéshez
1. Nyomd meg a (B) gombot néhányszor, hogy visszamenj a főmenübe
1. Navigálj ide: `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    + Az `<ID0>` egy 32 karakter hosszú nevű mappa
1. Használd a D-Pad-et a `00010017` kijelöléséhez
1. Nyomd meg a (jobb váll) + (A) gombokat a mappa opciók előhozásához
1. Válaszd ki ezt: "Copy to 0:/gm9/out"
1. Nyomd meg az (A) gombot a folytatáshoz
1. A `00010017`-et mg mindig kijelölve, nyomj (X)-et a törléséhez
1. Nyomd meg az (A) gombot a megerősítéshez
1. Nyomd meg az (A) gombot, hogy feloldd a SysNAND (lvl1) írást, majd sorban nyomd meg a kijelzett gombokat
1. Miután a fájl törlődött, nyomd meg az (A) gombot a folytatáshoz
1. Nyomd meg az (A) gombot az írási engedélyek visszavonásához
1. Nyomd meg a (Start) gombot a konzolod újraindításához
1. A konzolod be fog tölteni a kezdeti telepítési menübe
    + Ez az elvárt viselkedés. Valószínüleg nem vesztettél el játék adatot
1. Fejezd be a kezdeti telepítési menüt, követve az utasításokat a konzolod képernyőjén
