* * *

title: "DSiWare Downgrade (Save Injection)" permalink: /dsiware-downgrade-(save-injection).html lang: en_US ref: dsiware-downgrade-(save-injection)

* * *

Falls du auf Version 11.0.0 oder 11.1.0 bist, musst du dieser Anleitung folgen um dein NATIVE_FIRM mit einem DSiWare-Spiel zu downgraden. {: .notice}

Dies nutzt einen Fehler aus, welcher es DSiWare-Spielen erlaubt überall im NAND zu lesen und zu schreiben. {: .notice--info}

Stell dich darauf ein 20 Minuten (New 3DS) bis zu einer Stunde (Old 3DS) zu warten. Slowhax (waithax) wurde aus diesem Grund so benannt. {: .notice--info}

Dies ist eine Implementation der "FIRM partitions known-well plaintext", welche momentan funktioniert. Der Exploit wird [hier](https://www.3dbrew.org/wiki/3DS_System_Flaws) im Detail beschrieben. {: .notice--info}

Es werden Sicherheitskopien der Spielstände deiner DSiWare-Spiele erstellt bevor sie durch die gehackten Speicherstände ersetzt werden. {: .notice--info}

#### Was du brauchst

* Besitze bereits (und installiere) eines der folgenden DSiWare-Spiele auf deinem 3DS *(du musst eins dieser Spiele bereits installiert haben; sie wurden alle aus dem eShop entfernt)* 
  * **Fieldrunners**
  * **Legends of Exidia**
  * **Guitar Rock Tour** 
  * **The Legend of Zelda: Four Swords (Anniversary Edition)** 
* Einen Eintrittspunkt vom [Homebrew Launcher (SoundHax)](homebrew-launcher-(soundhax)) oder [Homebrew Launcher (No Browser)](homebrew-launcher-(no-browser))
* [`4B51394A.zip`](images/4B51394A.zip)
* Die neueste Version von [3ds_dsiwarehax_installer](https://github.com/yellows8/3ds_dsiwarehax_installer/releases/latest)
* Die neueste Version von [waithax](https://github.com/Mrrraou/waithax/releases/latest)
* Die neueste Version von [3DSident](https://github.com/joel16/3DSident/releases/latest)
* Die neueste Version von [dgTool](https://github.com/Plailect/dgTool/releases/latest)
* Das Homebrew [Starter Kit](http://smealum.github.io/ninjhax2/starter.zip)
* Die NFIRM `.zip` welche deinem Gerät und der Version **des Ziel 3DS entspricht**: 
  * [New 3DS 11.0.0](magnet:?xt=urn:btih:2d13a5ea1570f911bd5c6423e0c30e51d548837a&dn=11.0.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
  * [Old 3DS 11.0.0](magnet:?xt=urn:btih:72393bbd99bc285db84a9cabf39d9b3200058d6a&dn=11.0.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)  
    ~ 
  * [New 3DS 11.1.0](magnet:?xt=urn:btih:d7d60c27c18f53bd8508a194656a465f6448bedf&dn=11.1.0%5Fto%5F10.4.0%5Fn3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce) 
  * [Old 3DS 11.1.0](magnet:?xt=urn:btih:0caf9a948a2d8bf23606d641f6628e2baeb983bb&dn=11.1.0%5Fto%5F10.4.0%5Fo3ds.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce) 

#### Anleitung

##### Sektion I - Vorbereitung

  1. Kopiere *die Inhalte* der `starter.zip` auf den Root deiner SD Karte, ersetze bereits existierende Dateien 
  * Dies wird versichern, dass der Homebrew Launcher auf dem neuesten Stand ist; ältere Versionen werden einfrieren, wenn du versuchst 3ds_dsiwarehax_installer zu starten
  2. Kopiere und verbinde den `3ds` Ordner aus der 3ds_dsiwarehax_installer`.zip` auf den Root deiner SD Karte
  3. Kopiere den `4B51394A` Ordner aus der `4B51394A.zip` in den `/3ds/3ds_dsiwarehax_installer/dsiware/` Ordner auf deiner SD Karte.
  4. Kopiere und verbinde den `3ds` Ordner aus der 3DSident `.zip` auf deine SD Karte
  5. Kopiere `waithax.3dsx` in den `/3ds/` Ordner auf deiner SD Karte
  6. Kopiere die dgTool `boot.nds` auf den Root deiner SD Karte
  7. Erstelle einen `dgTool` Ordner auf dem Root deiner SD Karte falls dieser noch nicht existiert
  8. Kopere die Inhalte der NFIRM`.zip` in den `dgTool` Ordner auf den Root deiner SD Karte
  9. Lege deine SD Karte wieder in deinen 3DS ein

##### Sektion II - Sicherheitskopien der DSiWare

Nachdem du die gesamte Anleitung abgeschlossen hast, kannst du diese Sicherheitskopien, um deine DSiWare Speicherstände wiederherzustellen, indem du die DSiWare aus deinem Systemspeicher löschst und sie von deiner SD Karte kopierst. {: .notice--info}

Diese Sicherheitskopie kann nur auf dieser NAND benutzt werden. Falls du deinen 3DS formatierst oder ein anderes NAND wiederherstellst (besonders falls `movable.sed` je verändert wird) wird sie unbrauchbar. {: .notice--info}

  1. Gehe zu Systemeinstellungen, dann "Datenverwaltung", dann "DSiWare"
  2. Kopiere die DSiWare-Spiele, welche du benutzen möchtest, auf deine SD Karte
  3. Verlasse die Systemeinstellungen

##### Sektion III - waithax

  1. Öffne den Homebrew Launcher mit deinem bevorzugtem Eintrittspunkt
  2. Starte waithax
  3. Warte 
  * Auf dem New 3Ds wird dies ungefähr 20 Minuten dauern (durch einen Fehler kann dies auf manchen Systemen so lange dauern wie bei einem Old 3DS)
  * Auf dem Old 3DS wird dies ungefähr eine Stunde dauern
  4. Sobald es fertig ist, drücke (Start) um das Menü zu verlassen
  5. Starte 3ds_dsiwarehax_installer
  6. Starte das DSiWare-Spiel, auf dem du den Exploit installieren möchtest
  7. Sobald das erledigt ist, drücke den (A) Knopf um zurückzukehren
  8. Drücke (Start) um das Menü Verlassen-Menü des Homebrew Launcher zu öffnen
  9. Drücke (A) zum beenden

##### Sektion IV - Sicherheitskopie der NFIRM erstellen

  1. Starte dein DSiWare-Spiel
  2. Starte dgTool durch dein DSiWare-Spiel 
  * **Fieldrunners**: Berühre den "Ergebnisse" Knopf im Hauptmenü
  * **Legends of Exidia**: Nachdem du (A) oder (Start) bei den zwei Startbildschirmen gedrückt hast, wähle den ersten Speicherstand und drücke fortfahren
  * **Guitar Rock Tour**: Scrolle runter und navigier zu Highscores -> Schlagzeug -> Leicht
  * **The Legend of Zelda: Four Swords (Anniversary Edition)**: Starte einfach das Spiel
  * Falls dein Spiel nicht den gehackten Speicherstand installiert hat, fang von vorne an
  3. Wähle "Dump f0f1" um dein NFIRM abzuspeichern 
  * Dies wird eine Weile dauern
  4. Notiere dir, wo deine NFIRM Sicherheitskopie gespeichert wurde
  5. Beende dgTool 
  * Eventuell musst du das Ausschalten erzwingen indem du den Power-Knopf gedrückt hälst
  6. Lege deine SD Karte in deinen Computer ein, kopiere dann `F0F1_N3DS.bin` oder `F0F1_O3DS.bin` (abhängig von deinem Gerät) zu einem sicheren Ort 
  * Erstelle Sicherheitskopien an verschiedenen Orten
  * Diese Sicherheitskopie wird dich von einem Brick schützen, falls später etwas schief gehen sollte

##### Sektion V - NFIRM flashen

**Downgrade niemals mit dgTool auf einem Gerät, dass bereits arm9loaderhax installiert hat oder du wirst BRICKEN!** {: .notice--danger}

  1. Starte dein DSiWare-Spiel
  2. Starte dgTool in deinem DSiWare-Spiel 
  * **Fieldrunners**: Berühre den "Ergebnisse" Knopf im Hauptmenü
  * **Legends of Exidia**: Nachdem du (A) oder (Start) bei den zwei Startbildschirmen gedrückt hast, wähle den ersten Speicherstand und drücke fortfahren
  * **Guitar Rock Tour**: Scrolle runter und navigier zu Highscores -> Schlagzeug -> Leicht
  * **The Legend of Zelda: Four Swords (Anniversary Edition)**: Starte einfach das Spiel
  3. Wähle "Downgrade FIRM to 10.4" und bestätige das flashen der 10.4.0 NFIRM bin
  4. Beende dgTool 
  * Eventuell musst du das Ausschalten erzwingen indem du den Power-Knopf gedrückt hälst
  5. Starte dein Gerät neu

##### Sektion VI - Exploit verifizieren

  1. Lege deine SD Karte wieder in deinen 3DS ein
  2. Starte den Homebrew Launcher mit deinem bevorzugten Eintrittspunkt
  3. Starte 3DSident
  4. Bestätige folgendes: 
  * **Kernel Version**: 2.50-11
  * **FIRM Version**:2.50-11
  * Falls eins dieser beiden nicht die obige Version anzeigt, stelle sicher, dass du die korrekte NFIRM zip benutzt hast und flashe NFIRM erneut
  5. Drücken irgendeinen Knopf um zum Homebrew Launcher zurückzukehren

Deine Versionsnummer wird sich *nicht* verändert haben. {: .notice--info}

Fahre mit [Decrypt9 (Homebrew Launcher)](decrypt9-(homebrew-launcher)) fort {: .notice--primary}