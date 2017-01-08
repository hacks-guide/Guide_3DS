* * *

title: "Updating A9LH" permalink: /updating-a9lh.html lang: en_US ref: updating-a9lh

* * *

### Letztes Update: 3. Nov. 2016

Die tatsächliche Installation des arm9loaderhax besteht aus payload Dateien die in die NFIRM Partitionen auf dem NAND Chip deiner Konsole installiert werden. Dieser ist auf der Hauptplatine verlötet. Diese payloads werden selten geupdated und dienen wirklich nur zum starten der `arm9loaderhax.bin` Datei von der SD-Karte. In unserem Fall handelt es sich dabei um Luma3DS. {: .notice}

Wenn du nicht weißt welche Version des arm9loaderhax du verwendest, installiere einfach die aktuellste mit Hilfe dieser Anleitung. Das Installieren der aktuellsten Version, wenn diese bereits vorhanden ist, hat keinerlei Auswirkungen. {: .notice--info}

Wenn du in Luma einen PIN festgelegt hast, musst du ihn für die folgenden Schritte deaktivieren. Du kannst ihn nach dem Update erneut einrichten.{: .notice--info}

Wenn du eine payload benutzt die das Display nicht selber starten kann (wie Bootanim9), musst du sie umbenennen in `arm9loaderhax_si.bin` statt `arm9loaderhax.bin` {: .notice--info}

Die Versionen der data_input Datei beziehen sich nur auf Änderungen an der `.zip` Datei selbst um mit den unterschiedlichen Versionen des Installers kompatibel zu sein. Sie haben *nichts* mit dem Update des A9LH an sich zutun ( die payload Dateien). Sie machen über den Installationsprozess hinaus keinen Unterschied. {: .notice--info}

Die folgenden Schritte werden zudem einige payloads und die AES Key Database aktualisieren.{: .notice--success}

#### Was du brauchst

* [`aeskeydb.bin`](magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc&dn=aeskeydb.bin&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`data_input_v4.zip`](magnet:?xt=urn:btih:00f03ff69b5961307303d5e4778a2f65a528bf2d&dn=data%5Finput%5Fv4.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* Die aktuellste Version von [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) *(die `.7z` Datei)*
* Die aktuellste Version von [arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest) *(die `.7z` Datei)*
* Die aktuellste Version von [SafeA9LHINstaller](https://github.com/AuroraWright/SafeA9LHInstaller/releases/latest) *(die `.7z` Datei)*
* Die aktuellste Version von [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)

#### Anleitung

**ÜBERSCHREIBE für die folgenden Schritte alle vorhandenen Dateien auf deiner SD-Karte.**

##### Abschnitt 1 - Vorbereitung

  1. Lösche `aeskeydb.bin` aus dem Hauptverzeichnis deiner SD-Karte
  2. Lösche den `a9lh` Ordner aus dem Hauptverzeichnis deiner SD-Karte, wenn vorhanden
  3. Kopiere `aeskeydb.bin` in den `/files9/` Ordner auf deiner SD-Karte
  4. Kopiere `Hourglass9.bin` aus der Hourglass9 `.zip` in den `/luma/payloads/` Ordner auf deiner SD-Karte und benenne `Hourglass9.bin` um in `start_Hourglass9.bin`
  5. Kopiere `arm9loaderhax.bin` aus der SafeA9LHInstaller `.zip` in den `/luma/payloads/`Ordner auf deiner SD-Karte
  6. Benenne `arm9loaderhax.bin` aus `/luma/payloads/` um in `down_safea9lhinstaller.bin`
  7. Kopiere den `a9lh` Ordner aus der `data_input_v4.zip` in das Hauptverzeichnis deiner SD-Karte
  8. Kopiere *den Inhalt * der arm9loaderhax `.zip` in den `a9lh` Ordner auf deiner SD-Karte
  9. Kopiere `arm9loaderhax.bin` aus der Luma3DS `.zip` in das Hauptverzeichnis deiner SD-Karte, und übereschreibe alle vorhandenen Dateien
 10. Lege die SD-Karte wieder in deinen 3DS ein

##### Abschnitt II - payload Update

  1. Starte die Konsole und halte dabei das Steuerkreuz nach unten gedrückt
  2. Drücke (Select) um arm9loaderhax zu updaten
  3. Schalte die Konsole aus und stecke die SD-Karte wieder in deinen PC
  4. Lösche den `a9lh` Ordner aus dem Hauptverzteichnis deiner SD-Karte
  5. Lösche `down_safea9lhinstaller.bin` aus `/luma/payloads/`

##### Abschnitt III - Luma3DS konfigurieren

  1. Stecke die SD-Karte in den 3DS und halte (Select) beim starten gedrückt
  2. Nutze den (A) Knopf und das Steuerkreuz um folgende Funktionen zu aktivieren:  
    * **"Autoboot SysNAND"**
    * **Use SysNAND FIRM if booting with R"**
    * **"Show NAND or user string in System Settings"**
  3. Wenn du einen **New 3DS** nutzt, solltest du *auch* das Folgende aktivieren: 
    * **"New 3DS CPU" to "Clock+L2(x)"**
    * Dies sorgt in vielen Spielen für eine bessere Framerate, kann aber auch in einigen zu Instabilität führen
    * Wenn ein Spiel nicht richtig funktioniert, deaktiviere diese Funktion und versuche es nochmal
  4. Drücke (Start) um zu speichern und neu zu starten

##### Abschnitt IV - CTRNAND Luma3DS

  1. Öffne FBI
  2. Wähle "SD" aus
  3. Navigiere zu `arm9loaderhax.bin`, drücke (A) auf der Datei und wähle "Copy" aus
  4. Gehe zum FBI Hauptmenu zurück mit (B)
  5. Wähle "CTR NAND" aus
  6. Wähle "\<current directory>"
  7. Wähle die "Paste" Option aus, dann drücke (A) zum bestätigen
  8. Schließe mit der Home-Taste
  9. Schalte deinen 3DS aus und entferne die SD-Karte
 10. Starte mit der entfernten SD-Karte und halte dabei (Select) gedrückt 
    * Die Konsole ohne die SD-Karte zu starten erlaubt es dir die CTRNAND basierende Luma Installation zu nutzen und zu konfigurieren
 11. Nutze den (A) Knopf und das Steuerkreuz um folgende Funktionen zu aktivieren:  
    * **"Show NAND or user string in System Settings"**
 12. Wenn du einen **New 3DS** nutzt, solltest du *auch* das Folgende aktivieren: 
    * **"New 3DS CPU" to "Clock+L2(x)"**
    * Dies sorgt in vielen Spielen für eine bessere Framerate, kann aber auch in einigen zu Instabilität führen
    * Wenn ein Spiel nicht richtig funktioniert, deaktiviere diese Funktion und versuche es nochmal
 13. Stecke die SD-Karte wieder in den 3DS und drücke (Start) um zu speichern und neu zu starten